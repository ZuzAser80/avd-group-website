from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.ext.asyncio import AsyncSession

from src.auth.utils import get_current_user
from src.db import get_db
from src.lead.schemes import LeadCreate, LeadResponse
from src.lead.service import LeadRepository
from src.limiter import limiter

lead_router = APIRouter(prefix='/lead', tags=['lead'])


@lead_router.get('/all')
async def get_all_leads(
    session: AsyncSession = Depends(get_db),
    current_user = Depends(get_current_user)
    ):
    leads = await LeadRepository.get_all_leads(session=session)
    return [LeadResponse.model_validate(lead) for lead in leads]


@lead_router.post('/create')
@limiter.limit("5/minute")
async def create_lead(
    request: Request,
    lead: LeadCreate,
    session: AsyncSession = Depends(get_db)
    ):
    created = await LeadRepository.create_lead(session=session, lead=lead)
    return LeadResponse.model_validate(created)


@lead_router.delete('/{lead_id}')
async def delete_lead(
    lead_id: int,
    session: AsyncSession = Depends(get_db),
    current_user = Depends(get_current_user)
    ):
    deleted = await LeadRepository.delete_lead(session, lead_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Lead not found")
    return {"detail": "Lead deleted"}
