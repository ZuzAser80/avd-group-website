from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from src.auth.utils import get_current_user
from src.user.service import UserRepository
from src.user.schemes import UserCreate, UserResponse
from src.db import get_db

user_router = APIRouter(prefix='/user', tags=['users'])

@user_router.get('/all')
async def get_all_users(
    session: AsyncSession = Depends(get_db),
    current_user = Depends(get_current_user)
    ):
    users = await UserRepository.get_all_users(session=session)
    return [UserResponse.model_validate(u) for u in users]

@user_router.post('/create')
async def create_user(
    user: UserCreate,
    session: AsyncSession = Depends(get_db)
    ):
    created = await UserRepository.create_user(session=session, user=user)
    return UserResponse.model_validate(created)