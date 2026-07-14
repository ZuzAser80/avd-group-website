import asyncio

from fastapi import FastAPI
from fastapi.concurrency import asynccontextmanager
from src.db import init_models

app = FastAPI(title='Сервер')

@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_models() 
    yield

from src.user.router import user_router
from src.auth.router import auth_router
#from event.router import event_router

#app.include_router(event_router)
app.include_router(user_router)
app.include_router(auth_router)

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='127.0.0.1', port=8000)