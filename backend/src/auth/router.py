from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from src.db import get_db
from src.auth.schemes import UserLogin
from src.auth.service import AuthService


auth_router = APIRouter(prefix='/auth', tags=['auth'])

@auth_router.post('/')
async def login(
    session: AsyncSession = Depends(get_db),
    user: UserLogin = Depends()
    ):
    token = await AuthService.login_user(session, user)
    return token