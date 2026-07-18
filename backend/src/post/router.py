from fastapi import APIRouter, Depends, UploadFile, File, Form
from sqlalchemy.ext.asyncio import AsyncSession

from src.auth.utils import get_current_user
from src.post.service import PostRepository
from src.post.schemes import PostCreate
from src.db import get_db

post_router = APIRouter(prefix='/post', tags=['post'])

@post_router.get('/all')
async def get_all_posts(
    session: AsyncSession = Depends(get_db)
    ):
    posts = await PostRepository.get_all_posts(session=session)
    return posts

@post_router.post('/create')
async def create_post(
    title: str = Form(...),
    content: str = Form(...),
    file: UploadFile = File(None),
    session: AsyncSession = Depends(get_db),
    current_user = Depends(get_current_user)
    ):
    post = PostCreate(title=title, content=content)
    return await PostRepository.create_post(session=session, post=post, file=file)