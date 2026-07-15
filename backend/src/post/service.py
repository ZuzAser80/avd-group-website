from sqlalchemy import select
from src.models import Post
from src.post.schemes import PostCreate
from src.utils import hash_password
from sqlalchemy.ext.asyncio import AsyncSession

class PostRepository:
    @classmethod
    async def create_post(cls, 
                          session: AsyncSession,
                          post: PostCreate) -> Post:
        async with session.begin():
            post_data = post.model_dump()
            print(post_data)
            new_post = Post(title=post_data['title'],
                            content=post_data['content'])
            session.add(new_post)
        await session.commit()
        await session.refresh(new_post)
        return new_post

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
        user = result.scalars().first()
        if not user:
            return False
        await session.delete(user)
        await session.commit()
        return True