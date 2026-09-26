from sqlalchemy import Boolean, Column, DateTime, Integer, JSON, String, func, text
from src.db import Base


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False, index=True, unique=True)
    password = Column(String, nullable=False)

class Post(Base):
    __tablename__ = "posts"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    content = Column(String, nullable=True)
    image = Column(String, nullable=True)
    address = Column(String, nullable=True)
    client = Column(String, nullable=True)
    year = Column(String, nullable=True)
    tag = Column(String, nullable=True)
    price = Column(String, nullable=True)
    sold = Column(Boolean, nullable=False, server_default=text("false"))
    kind = Column(String, nullable=False, server_default="post")
    status = Column(String, nullable=False, server_default="selling")
    position = Column(Integer, nullable=False, server_default="0")
    floors = Column(JSON, nullable=True)
    photos = Column(JSON, nullable=True)

class Lead(Base):
    __tablename__ = "leads"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    phone = Column(String, nullable=False, index=True)
    subject = Column(String, nullable=True)
    object_name = Column(String, nullable=True)
    message = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), nullable=False, server_default=func.now())
