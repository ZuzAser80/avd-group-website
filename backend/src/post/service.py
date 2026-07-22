import asyncio
import uuid
from pathlib import Path

from fastapi import UploadFile, HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from src.models import Post
from src.post.schemes import PostCreate

UPLOADS_DIR = Path(__file__).resolve().parent.parent.parent / "frontend" / "static" / "uploads"

ALLOWED_IMAGE_TYPES = {
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
}

MIME_TO_EXT = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/gif": ".gif",
    "image/webp": ".webp",
}

MAGIC_BYTES = {
    b"\xff\xd8\xff": "image/jpeg",
    b"\x89PNG": "image/png",
    b"GIF87a": "image/gif",
    b"GIF89a": "image/gif",
    b"RIFF": "image/webp",
}

MAX_FILE_SIZE = 10 * 1024 * 1024  # 10MB


def detect_image_type(data: bytes) -> str | None:
    for signature, mime in MAGIC_BYTES.items():
        if data[:len(signature)] == signature:
            if signature == b"RIFF" and data[8:12] != b"WEBP":
                continue
            return mime
    return None


async def validate_image_upload(file: UploadFile) -> bytes:
    content = await file.read()
    if len(content) > MAX_FILE_SIZE:
        raise HTTPException(
            status_code=400,
            detail=f"File too large. Maximum size is {MAX_FILE_SIZE // (1024 * 1024)}MB"
        )
    if len(content) < 12:
        raise HTTPException(
            status_code=400,
            detail="File is too small to be a valid image"
        )
    detected_type = detect_image_type(content)
    if not detected_type or detected_type not in ALLOWED_IMAGE_TYPES:
        raise HTTPException(
            status_code=400,
            detail="File is not a valid image. Accepted: jpeg, png, gif, webp"
        )
    return content


class PostRepository:
    @classmethod
    async def create_post(cls,
                          session: AsyncSession,
                          post: PostCreate,
                          file: UploadFile | None = None) -> Post:
        image_path = None
        if file:
            UPLOADS_DIR.mkdir(parents=True, exist_ok=True)
            content = await validate_image_upload(file)
            detected_type = detect_image_type(content)
            ext = MIME_TO_EXT[detected_type]
            filename = f"{uuid.uuid4().hex}{ext}"
            dest = UPLOADS_DIR / filename
            await asyncio.to_thread(dest.write_bytes, content)
            image_path = f"/static/uploads/{filename}"

        new_post = Post(title=post.title, content=post.content, image=image_path)
        session.add(new_post)
        await session.commit()
        await session.refresh(new_post)
        return new_post

    @classmethod
    async def get_post_by_id(cls,
                             session: AsyncSession,
                             post_id: int) -> Post | None:
        result = await session.execute(select(Post).where(Post.id == post_id))
        return result.scalars().first()

    @classmethod
    async def get_all_posts(cls,
                            session: AsyncSession) -> list[Post]:
        result = await session.execute(select(Post))
        return result.scalars().all()

    @classmethod
    async def delete_post(cls,
                              session: AsyncSession,
                              post_id: int) -> bool:
        result = await session.execute(select(Post).where(Post.id == post_id))
        post = result.scalars().first()
        if not post:
            return False
        if post.image:
            image_file = UPLOADS_DIR / Path(post.image).name
            if image_file.exists():
                await asyncio.to_thread(image_file.unlink)
        await session.delete(post)
        await session.commit()
        return True