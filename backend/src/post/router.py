import json

from fastapi import APIRouter, Depends, UploadFile, File, Form, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from src.auth.utils import get_current_user
from src.post.service import PostRepository
from src.post.schemes import PostCreate, PostResponse
from src.db import get_db

post_router = APIRouter(prefix='/post', tags=['post'])


def parse_json_field(value: str | None, field: str) -> list | None:
    if value is None or value == "":
        return None
    try:
        parsed = json.loads(value)
    except json.JSONDecodeError:
        raise HTTPException(status_code=422, detail=f"Invalid JSON for {field}")
    if not isinstance(parsed, list):
        raise HTTPException(status_code=422, detail=f"Expected a list for {field}")
    return parsed


def parse_bool(value: str | None) -> bool:
    if value is None:
        return False
    return value.lower() in ("true", "1", "yes", "on")


@post_router.get('/all')
async def get_all_posts(
    session: AsyncSession = Depends(get_db)
    ):
    posts = await PostRepository.get_all_posts(session=session)
    return [PostResponse.model_validate(p) for p in posts]

@post_router.get('/{post_id}')
async def get_post(
    post_id: int,
    session: AsyncSession = Depends(get_db)
    ):
    post = await PostRepository.get_post_by_id(session, post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return PostResponse.model_validate(post)

@post_router.delete('/{post_id}')
async def delete_post(
    post_id: int,
    session: AsyncSession = Depends(get_db),
    current_user = Depends(get_current_user)
    ):
    deleted = await PostRepository.delete_post(session, post_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Post not found")
    return {"detail": "Post deleted"}

@post_router.post('/create')
async def create_post(
    title: str = Form(...),
    content: str = Form(None),
    file: UploadFile = File(None),
    address: str = Form(None),
    client: str = Form(None),
    year: str = Form(None),
    tag: str = Form(None),
    price: str = Form(None),
    sold: str = Form(None),
    kind: str = Form("post"),
    position: int = Form(0),
    floors: str = Form(None),
    photos: str = Form(None),
    session: AsyncSession = Depends(get_db),
    current_user = Depends(get_current_user)
    ):
    post = PostCreate(
        title=title, content=content, address=address, client=client, year=year,
        tag=tag, price=price, sold=parse_bool(sold), kind=kind, position=position,
        floors=parse_json_field(floors, "floors"), photos=parse_json_field(photos, "photos"),
    )
    created = await PostRepository.create_post(session=session, post=post, file=file)
    return PostResponse.model_validate(created)

@post_router.put('/{post_id}')
async def update_post(
    post_id: int,
    title: str = Form(...),
    content: str = Form(None),
    file: UploadFile = File(None),
    address: str = Form(None),
    client: str = Form(None),
    year: str = Form(None),
    tag: str = Form(None),
    price: str = Form(None),
    sold: str = Form(None),
    kind: str = Form("post"),
    position: int = Form(0),
    floors: str = Form(None),
    photos: str = Form(None),
    session: AsyncSession = Depends(get_db),
    current_user = Depends(get_current_user)
    ):
    post = PostCreate(
        title=title, content=content, address=address, client=client, year=year,
        tag=tag, price=price, sold=parse_bool(sold), kind=kind, position=position,
        floors=parse_json_field(floors, "floors"), photos=parse_json_field(photos, "photos"),
    )
    updated = await PostRepository.update_post(session=session, post_id=post_id, post=post, file=file)
    if not updated:
        raise HTTPException(status_code=404, detail="Post not found")
    return PostResponse.model_validate(updated)