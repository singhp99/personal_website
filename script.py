from pathlib import Path
from PIL import Image, ImageOps

for folder in [""]:
    out = Path(folder)
    out.mkdir(exist_ok=True)
    for f in Path(folder).iterdir():
        if f.suffix.lower() not in {".png", ".jpg", ".jpeg"}:
            continue
        img = ImageOps.exif_transpose(Image.open(f)).convert("RGBA")
        flat = Image.new("RGB", img.size, "white")
        flat.paste(img, mask=img.getchannel("A"))
        flat.thumbnail((1400, 1400))
        flat.save(out / (f.stem + ".jpg"), quality=80, optimize=True)