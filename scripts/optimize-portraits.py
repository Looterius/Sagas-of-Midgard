#!/usr/bin/env python3
"""Build non-destructive optimized versions of public Sagas of Midgard portraits.

Run after: node scripts/export-public-portrait-references.mjs > /tmp/som-portrait-refs.json
           python scripts/optimize-portraits.py /tmp/som-portrait-refs.json

The original PNG/JPG/JPEG files stay untouched. Output:
 - assets/portraits/optimized/<person-id>-thumb.webp   (network / Atlas NPC thumbnails)
 - assets/portraits/optimized/<person-id>-full.webp    (large details, if smaller)
 - portrait-assets.js                                 (original-path -> optimized variants)
"""
from __future__ import annotations

import io
import json
import re
import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "portraits" / "optimized"
MANIFEST = ROOT / "portrait-assets.js"
ID_RE = re.compile(r"^[a-z0-9][a-z0-9-]*$")
ALLOWED = {".png", ".jpg", ".jpeg", ".webp"}
Image.MAX_IMAGE_PIXELS = 45_000_000


def encode(source: Image.Image, max_width: int, max_height: int, quality: int) -> bytes:
    # EXIF orientation is applied only to the generated output.
    photo = ImageOps.exif_transpose(source).copy()
    photo.thumbnail((max_width, max_height), Image.Resampling.LANCZOS)
    if photo.mode not in {"RGB", "RGBA"}:
        photo = photo.convert("RGBA" if "A" in photo.getbands() or "transparency" in photo.info else "RGB")
    output = io.BytesIO()
    photo.save(output, format="WEBP", quality=quality, method=6)
    return output.getvalue()


def main() -> None:
    if len(sys.argv) != 2:
        raise SystemExit("Usage: optimize-portraits.py /tmp/som-portrait-refs.json")
    people = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
    OUT.mkdir(parents=True, exist_ok=True)
    items: dict[str, dict] = {}
    total_original = 0
    total_thumb = 0
    total_full = 0
    count = 0
    missing = []
    referenced_files = set()

    for person in people:
        person_id, raw_path = person["id"], person["image"]
        if not ID_RE.fullmatch(person_id):
            raise ValueError("Invalid ID: " + person_id)
        path = Path(raw_path)
        if not raw_path.startswith("assets/portraits/") or path.suffix.lower() not in ALLOWED:
            raise ValueError("Invalid source path: " + raw_path)
        if ".." in path.parts or len(path.parts) != 3:
            raise ValueError("Unexpected source path: " + raw_path)
        source = ROOT / path
        if not source.is_file():
            # Avoid the historical repeated 404 for missing portrait placeholders.
            items[raw_path] = {"missing": True}
            missing.append(raw_path)
            continue

        original_bytes = source.stat().st_size
        total_original += original_bytes
        referenced_files.add(source)
        with Image.open(source) as photo:
            photo.load()
            thumbnail = encode(photo, 480, 640, 73)
            detail = encode(photo, 1200, 1600, 78)
        thumb_file = OUT / f"{person_id}-thumb.webp"
        full_file = OUT / f"{person_id}-full.webp"
        thumb_file.write_bytes(thumbnail)
        # Large originals almost always shrink dramatically. For already tiny
        # originals, avoid downloading a larger WebP just for the detail modal.
        if len(detail) < original_bytes * 0.94:
            full_file.write_bytes(detail)
            full_path = full_file.relative_to(ROOT).as_posix()
            total_full += len(detail)
        else:
            full_file.unlink(missing_ok=True)
            full_path = raw_path
            total_full += original_bytes
        items[raw_path] = {
            "thumb": thumb_file.relative_to(ROOT).as_posix(),
            "full": full_path,
        }
        total_thumb += len(thumbnail)
        count += 1
        print(
            f"{person_id}: original {original_bytes//1024} KiB, "
            f"thumb {len(thumbnail)//1024} KiB, detail "
            f"{(len(detail) if full_path != raw_path else original_bytes)//1024} KiB"
        )

    # Discard obsolete generated variants for removed/renamed public people.
    keep = {
        ROOT / val[variant]
        for val in items.values()
        for variant in ("thumb", "full")
        if val.get(variant, "").startswith("assets/portraits/optimized/")
    }
    for old in OUT.glob("*.webp"):
        if old not in keep:
            old.unlink()
    js = (
        "/* Generated from current public people[] by scripts/optimize-portraits.py. "
        "Do not edit manually. */\n"
        + "window.SOM_PORTRAITS = Object.freeze("
        + json.dumps(items, ensure_ascii=False, indent=2, sort_keys=True)
        + ");\n"
    )
    MANIFEST.write_text(js, encoding="utf-8")
    print(f"Generated optimized photos for {count} people; {len(missing)} missing original(s).")
    for value in missing:
        print("KNOWN_MISSING:", value)
    print(f"Public source size: {total_original/1048576:.2f} MiB")
    print(f"Thumbnail total:    {total_thumb/1048576:.2f} MiB")
    print(f"Full-size total:    {total_full/1048576:.2f} MiB")
    print(f"Thumbnail reduction: {(1-total_thumb/max(1,total_original))*100:.1f}%")
    if count == 0:
        raise RuntimeError("No usable public portrait images found")


if __name__ == "__main__":
    main()
