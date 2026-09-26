from pydantic import BaseModel

POST_STATUSES = ("planned", "selling", "sold")
DEFAULT_POST_STATUS = "selling"

class PostCreate(BaseModel):
    title: str
    content: str | None = None
    image: str | None = None
    address: str | None = None
    client: str | None = None
    year: str | None = None
    tag: str | None = None
    price: str | None = None
    status: str = DEFAULT_POST_STATUS
    position: int = 0
    floors: list | None = None
    photos: list | None = None

class PostResponse(BaseModel):
    id: int
    title: str
    content: str | None = None
    image: str | None = None
    address: str | None = None
    client: str | None = None
    year: str | None = None
    tag: str | None = None
    price: str | None = None
    sold: bool = False
    kind: str = "post"
    status: str = DEFAULT_POST_STATUS
    position: int = 0
    floors: list | None = None
    photos: list | None = None

    class Config:
        from_attributes = True
