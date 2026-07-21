from fastapi import APIRouter, Depends, Request
from sqlalchemy.ext.asyncio import AsyncSession

from src.auth.utils import get_current_user
from src.user.service import UserRepository
from src.user.schemes import UserCreate, UserResponse
from src.db import get_db
from src.limiter import limiter

user_router = APIRouter(prefix='/user', tags=['users'])

@user_router.get('/me')
async def get_me(
    current_user = Depends(get_current_user)
    ):
    return UserResponse.model_validate(current_user)

@user_router.get('/all')
async def get_all_users(
    session: AsyncSession = Depends(get_db),
    current_user = Depends(get_current_user)
    ):
    users = await UserRepository.get_all_users(session=session)
    return [UserResponse.model_validate(u) for u in users]

@user_router.get('/{user_id}')
async def get_user(
    user_id: int,
    session: AsyncSession = Depends(get_db),
    current_user = Depends(get_current_user)
    ):
    user = await UserRepository.get_user_by_id(session, user_id)
    if not user:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="User not found")
    return UserResponse.model_validate(user)

@user_router.delete('/{user_id}')
async def delete_user(
    user_id: int,
    session: AsyncSession = Depends(get_db),
    current_user = Depends(get_current_user)
    ):
    deleted = await UserRepository.delete_user(session, user_id)
    if not deleted:
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="User not found")
    return {"detail": "User deleted"}

@user_router.post('/create')
@limiter.limit("10/minute")
async def create_user(
    request: Request,
    user: UserCreate,
    session: AsyncSession = Depends(get_db),
    current_user = Depends(get_current_user)
    ):
    created = await UserRepository.create_user(session=session, user=user)
    return UserResponse.model_validate(created)