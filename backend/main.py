import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

import asyncio

from fastapi import FastAPI
from fastapi.concurrency import asynccontextmanager
from fastapi.staticfiles import StaticFiles
from src.db import init_models

FRONTEND_DIR = Path(__file__).resolve().parent.parent / "frontend"

app = FastAPI(title='Сервер')

@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_models()
    yield

from src.user.router import user_router
from src.auth.router import auth_router

app.include_router(user_router)
app.include_router(auth_router)

app.mount("/static", StaticFiles(directory=str(FRONTEND_DIR)), name="static")

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='127.0.0.1', port=8000)