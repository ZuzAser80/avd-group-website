from fastapi import HTTPException
from starlette import status
from sqlalchemy.ext.asyncio import AsyncSession

from src.auth.utils import create_access_token
from src.auth.schemes import Token, UserLogin
from src.user.service import UserRepository
from src.utils import verify_password

class AuthService:
    @classmethod
    async def login_user(cls,
                         session: AsyncSession,
                         user: UserLogin) -> Token:
        Userdb = await UserRepository.get_user_by_username(session, user.name)
        if Userdb and verify_password(user.password, Userdb.password):
            token = create_access_token({"sub": str(Userdb.id), "name": Userdb.name})
            return Token(access_token=token)
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid username or password")