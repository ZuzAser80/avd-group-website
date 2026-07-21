from fastapi import HTTPException
from sqlalchemy import select
from sqlalchemy.orm import defer
from src.models import User
from src.user.schemes import UserCreate
from src.utils import hash_password
from sqlalchemy.ext.asyncio import AsyncSession

class UserRepository:
    @classmethod
    async def create_user(cls,
                          session: AsyncSession,
                          user: UserCreate) -> User:
        existing = await cls.get_user_by_username(session, user.name)
        if existing:
            raise HTTPException(status_code=409, detail="Username already taken")
        async with session.begin():
            user_data = user.model_dump()
            new_user = User(name=user_data['name'],
                            password=hash_password(user_data['password']))
            session.add(new_user)
        await session.refresh(new_user)
        return new_user

    @classmethod
    async def get_all_users(cls,
                            session: AsyncSession) -> list[User]:
        result = await session.execute(select(User).options(defer(User.password)))
        return result.scalars().all()
    
    @classmethod
    async def get_user_by_id(cls,
                             session: AsyncSession,
                             user_id: int) -> User | None:
        result = await session.execute(select(User).where(User.id == user_id).options(defer(User.password)))
        return result.scalars().first()
    
    @classmethod
    async def get_user_by_username(cls,
                                   session: AsyncSession,
                                   username: str) -> User | None:
        result = await session.execute(select(User).where(User.name == username))
        return result.scalars().first()
    
    @classmethod
    async def delete_user(cls,
                              session: AsyncSession,
                              user_id: int) -> bool:
        result = await session.execute(select(User).where(User.id == user_id))
        user = result.scalars().first()
        if not user:
            return False
        await session.delete(user)
        await session.commit()
        return True