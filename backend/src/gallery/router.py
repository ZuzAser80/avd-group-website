from fastapi import APIRouter, Depends, UploadFile, File, Form, HTTPException
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from src.auth.utils import get_current_user
from src.db import get_db
from src.gallery.schemes import GalleryPhotoResponse
from src.models import GalleryPhoto
from src.storage import delete_uploaded_file, save_image, validate_image_upload

gallery_router = APIRouter(prefix='/gallery', tags=['gallery'])


@gallery_router.get('/all')
async def get_all_gallery_photos(
    session: AsyncSession = Depends(get_db)
):
    result = await session.execute(
        select(GalleryPhoto).order_by(GalleryPhoto.position, GalleryPhoto.id)
    )
    return [GalleryPhotoResponse.model_validate(p) for p in result.scalars().all()]


@gallery_router.post('/upload')
async def upload_gallery_photo(
    file: UploadFile = File(...),
    caption: str = Form(None),
    position: int = Form(None),
    session: AsyncSession = Depends(get_db),
    current_user = Depends(get_current_user)
):
    content = await validate_image_upload(file)
    src = await save_image(content)

    if position is None:
        max_pos = (await session.execute(
            select(func.coalesce(func.max(GalleryPhoto.position), -1))
        )).scalar()
        position = max_pos + 1

    photo = GalleryPhoto(src=src, caption=caption, position=position)
    session.add(photo)
    await session.commit()
    await session.refresh(photo)
    return GalleryPhotoResponse.model_validate(photo)


@gallery_router.put('/{photo_id}')
async def update_gallery_photo(
    photo_id: int,
    caption: str = Form(None),
    position: int = Form(None),
    session: AsyncSession = Depends(get_db),
    current_user = Depends(get_current_user)
):
    photo = await session.get(GalleryPhoto, photo_id)
    if not photo:
        raise HTTPException(status_code=404, detail="Photo not found")
    if caption is not None:
        photo.caption = caption
    if position is not None:
        photo.position = position
    await session.commit()
    await session.refresh(photo)
    return GalleryPhotoResponse.model_validate(photo)


@gallery_router.delete('/{photo_id}')
async def delete_gallery_photo(
    photo_id: int,
    session: AsyncSession = Depends(get_db),
    current_user = Depends(get_current_user)
):
    photo = await session.get(GalleryPhoto, photo_id)
    if not photo:
        raise HTTPException(status_code=404, detail="Photo not found")
    src = photo.src
    await session.delete(photo)
    await session.commit()
    delete_uploaded_file(src)
    return {"detail": "Photo deleted"}
