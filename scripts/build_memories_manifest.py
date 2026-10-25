#!/usr/bin/env python3
"""Generate the Memories photo manifest from assets/memories/photos at deploy time."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PHOTO_DIR = ROOT / "assets" / "memories" / "photos"
MANIFEST = ROOT / "assets" / "memories" / "manifest.json"
EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"}

PHOTO_DIR.mkdir(parents=True, exist_ok=True)
images = sorted(
    (f"assets/memories/photos/{p.name}" for p in PHOTO_DIR.iterdir()
     if p.is_file() and p.suffix.lower() in EXTENSIONS),
    key=str.casefold,
)
MANIFEST.parent.mkdir(parents=True, exist_ok=True)
MANIFEST.write_text(json.dumps({"images": images}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"Generated {MANIFEST.relative_to(ROOT)} with {len(images)} image(s).")
