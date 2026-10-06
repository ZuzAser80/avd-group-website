import asyncio
import uuid
from pathlib import Path

from fastapi import UploadFile, HTTPException

UPLOADS_DIR = Path(__file__).resolve().parent.parent.parent / "frontend" / "static" / "uploads"

ALLOWED_IMAGE_TYPES = {
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
}

MIME_TO_EXT = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/gif": ".gif",
    "image/webp": ".webp",
}

MAGIC_BYTES = {
    b"\xff\xd8\xff": "image/jpeg",
    b"\x89PNG": "image/png",
    b"GIF87a": "image/gif",
    b"GIF89a": "image/gif",
    b"RIFF": "image/webp",
}

MAX_FILE_SIZE = 10 * 1024 * 1024  # 10MB


def detect_image_type(data: bytes) -> str | None:
    for signature, mime in MAGIC_BYTES.items():
        if data[:len(signature)] == signature:
            if signature == b"RIFF" and data[8:12] != b"WEBP":
                continue
            return mime
    return None


async def validate_image_upload(file: UploadFile) -> bytes:
    content = await file.read()
    if len(content) > MAX_FILE_SIZE:
        raise HTTPException(
            status_code=400,
            detail=f"File too large. Maximum size is {MAX_FILE_SIZE // (1024 * 1024)}MB"
        )
    if len(content) < 12:
        raise HTTPException(
            status_code=400,
            detail="File is too small to be a valid image"
        )
    detected_type = detect_image_type(content)
    if not detected_type or detected_type not in ALLOWED_IMAGE_TYPES:
        raise HTTPException(
            status_code=400,
            detail="File is not a valid image. Accepted: jpeg, png, gif, webp"
        )
    return content


async def save_image(content: bytes) -> str:
    detected_type = detect_image_type(content)
    ext = MIME_TO_EXT[detected_type]
    UPLOADS_DIR.mkdir(parents=True, exist_ok=True)
    filename = f"{uuid.uuid4().hex}{ext}"
    dest = UPLOADS_DIR / filename
    await asyncio.to_thread(dest.write_bytes, content)
    return f"/static/uploads/{filename}"


def delete_uploaded_file(src: str | None) -> None:
    if not src or not src.startswith("/static/uploads/"):
        return
    target = (UPLOADS_DIR / Path(src).name).resolve()
    if target.parent == UPLOADS_DIR.resolve() and target.exists():
        target.unlink()
