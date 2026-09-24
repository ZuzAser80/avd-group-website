import asyncio
import os
from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql+asyncpg://user:password@localhost/database")

Base = declarative_base()

engine = create_async_engine(
    DATABASE_URL,
)

AsyncSessionLocal = sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
)

POST_COLUMN_DEFS = [
    ("tag", "VARCHAR"),
    ("price", "VARCHAR"),
    ("sold", "BOOLEAN DEFAULT false NOT NULL"),
    ("kind", "VARCHAR DEFAULT 'post' NOT NULL"),
    ("position", "INTEGER DEFAULT 0 NOT NULL"),
    ("floors", "JSON"),
    ("photos", "JSON"),
]

async def _ensure_post_columns(conn):
    for name, ddl in POST_COLUMN_DEFS:
        await conn.execute(text(f"ALTER TABLE posts ADD COLUMN IF NOT EXISTS {name} {ddl}"))

async def init_models():
    from src import models  # noqa: F401 — registers models with Base.metadata
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
        await _ensure_post_columns(conn)

async def get_db():
    async with AsyncSessionLocal() as session:
        yield session

if __name__ == "__main__":
    asyncio.run(init_models())
