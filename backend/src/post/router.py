from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from src.post.schemes import PostCreate
from src.post.service import PostRepository
from src.db import get_db

post_router = APIRouter(prefix='/post', tags=['post'])

@post_router.get('/all')
async def get_all_posts(
    session: AsyncSession = Depends(get_db)
    ):
    users = await PostRepository.get_all_posts(session=session)
    return users

@post_router.post('/create')
async def create_post(
    post: PostCreate,
    session: AsyncSession = Depends(get_db)
    ):
    post = await PostRepository.create_post(session=session, post=post)
    return post