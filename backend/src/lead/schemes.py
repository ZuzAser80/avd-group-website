from datetime import datetime

from pydantic import BaseModel, Field

class LeadCreate(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    phone: str = Field(min_length=1, max_length=40)
    subject: str | None = Field(default=None, max_length=200)
    object_name: str | None = Field(default=None, max_length=200)
    message: str | None = Field(default=None, max_length=2000)

class LeadResponse(BaseModel):
    id: int
    name: str
    phone: str
    subject: str | None = None
    object_name: str | None = None
    message: str | None = None
    created_at: datetime

    class Config:
        from_attributes = True
