from pydantic import BaseModel

class PostCreate(BaseModel):
    title: str
    content: str | None = None
    image: str | None = None
    address: str | None = None
    client: str | None = None
    year: str | None = None

class PostResponse(BaseModel):
    id: int
    title: str
    content: str | None = None
    image: str | None = None
    address: str | None = None
    client: str | None = None
    year: str | None = None

    class Config:
        from_attributes = True