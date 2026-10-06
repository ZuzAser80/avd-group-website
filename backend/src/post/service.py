from fastapi import UploadFile
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from src.models import Post
from src.post.schemes import PostCreate
from src.storage import delete_uploaded_file, save_image, validate_image_upload


class PostRepository:
    @classmethod
    async def create_post(cls,
                          session: AsyncSession,
                          post: PostCreate,
                          file: UploadFile | None = None) -> Post:
        image_path = None
        if file:
            content = await validate_image_upload(file)
            image_path = await save_image(content)

        new_post = Post(
            title=post.title, content=post.content,
            image=image_path,
            address=post.address, client=post.client, year=post.year,
            tag=post.tag, price=post.price,
            status=post.status, sold=post.status == "sold",
            position=post.position,
            floors=post.floors, photos=post.photos,
        )
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
        if post.image and post.image.startswith("/static/uploads/"):
            delete_uploaded_file(post.image)
        await session.delete(post)
        await session.commit()
        return True

    @classmethod
    async def update_post(cls,
                          session: AsyncSession,
                          post_id: int,
                          post: PostCreate,
                          file: UploadFile | None = None) -> Post | None:
        result = await session.execute(select(Post).where(Post.id == post_id))
        db_post = result.scalars().first()
        if not db_post:
            return None

        if file:
            content = await validate_image_upload(file)
            if db_post.image and db_post.image.startswith("/static/uploads/"):
                delete_uploaded_file(db_post.image)
            db_post.image = await save_image(content)

        db_post.title = post.title
        db_post.content = post.content
        db_post.address = post.address
        db_post.client = post.client
        db_post.year = post.year
        db_post.tag = post.tag
        db_post.price = post.price
        db_post.status = post.status
        db_post.sold = post.status == "sold"
        db_post.position = post.position
        db_post.floors = post.floors
        db_post.photos = post.photos

        await session.commit()
        await session.refresh(db_post)
        return db_post
