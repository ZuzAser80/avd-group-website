from fastapi import APIRouter, Depends, UploadFile, File

from src.auth.utils import get_current_user
from src.storage import save_image, validate_image_upload

media_router = APIRouter(prefix='/media', tags=['media'])


@media_router.post('/upload')
async def upload_media(
    file: UploadFile = File(...),
    current_user = Depends(get_current_user)
):
    content = await validate_image_upload(file)
    src = await save_image(content)
    return {"src": src}
