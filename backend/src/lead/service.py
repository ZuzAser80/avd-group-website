from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from src.models import Lead
from src.lead.schemes import LeadCreate


class LeadRepository:
    @classmethod
    async def create_lead(cls,
                          session: AsyncSession,
                          lead: LeadCreate) -> Lead:
        data = lead.model_dump()
        new_lead = Lead(
            name=data['name'].strip(),
            phone=data['phone'].strip(),
            subject=(data['subject'] or '').strip() or None,
            object_name=(data['object_name'] or '').strip() or None,
            message=(data['message'] or '').strip() or None,
        )
        session.add(new_lead)
        await session.commit()
        await session.refresh(new_lead)
        return new_lead

    @classmethod
    async def get_all_leads(cls,
                            session: AsyncSession) -> list[Lead]:
        result = await session.execute(
            select(Lead).order_by(Lead.created_at.desc(), Lead.id.desc())
        )
        return result.scalars().all()

    @classmethod
    async def get_lead_by_id(cls,
                             session: AsyncSession,
                             lead_id: int) -> Lead | None:
        result = await session.execute(select(Lead).where(Lead.id == lead_id))
        return result.scalars().first()

    @classmethod
    async def delete_lead(cls,
                          session: AsyncSession,
                          lead_id: int) -> bool:
        result = await session.execute(select(Lead).where(Lead.id == lead_id))
        lead = result.scalars().first()
        if not lead:
            return False
        await session.delete(lead)
        await session.commit()
        return True
