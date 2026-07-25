import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from dotenv import load_dotenv

load_dotenv(Path(__file__).resolve().parent / ".env")

import os

from fastapi import FastAPI
from fastapi.concurrency import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from slowapi.errors import RateLimitExceeded
from slowapi import _rate_limit_exceeded_handler

from src.db import init_models
from src.limiter import limiter

FRONTEND_DIR = Path(__file__).resolve().parent.parent / "frontend"

app = FastAPI(title='AVD group')
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

cors_origins = [o.strip() for o in os.getenv("CORS_ORIGINS", "").split(",") if o.strip()]
app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins or ["http://localhost:8000"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "DELETE", "PUT", "PATCH"],
    allow_headers=["*"],
)

@asynccontextmanager
async def lifespan(app: FastAPI):
    (FRONTEND_DIR / "static" / "uploads").mkdir(parents=True, exist_ok=True)
    await init_models()
    yield

from src.user.router import user_router
from src.auth.router import auth_router
from src.post.router import post_router

app.include_router(user_router)
app.include_router(auth_router)
app.include_router(post_router)

app.mount("/static", StaticFiles(directory=str(FRONTEND_DIR / "static")), name="static")

from fastapi.responses import FileResponse

@app.get("/{full_path:path}")
async def serve_spa(full_path: str):
    file_path = (FRONTEND_DIR / full_path).resolve()
    if file_path.is_file() and str(file_path).startswith(str(FRONTEND_DIR.resolve())):
        return FileResponse(str(file_path))
    return FileResponse(str(FRONTEND_DIR / "index.html"))

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='127.0.0.1', port=8000)