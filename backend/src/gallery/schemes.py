from datetime import datetime

from pydantic import BaseModel


class GalleryPhotoResponse(BaseModel):
    id: int
    src: str
    caption: str | None = None
    position: int = 0
    created_at: datetime

    class Config:
        from_attributes = True
