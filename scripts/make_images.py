"""Regenerate the optimised images from the original sources (run from the repo root: python3 scripts/make_images.py).
Sources: src/assets/ProfilePic.png, src/assets/jmlnewlogo.png, src/assets/projects/*.png. Needs Pillow."""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PUB = ROOT / "public"
SRC = ROOT / "src/assets"

def save_webp(im, path, q=78):
    path.parent.mkdir(parents=True, exist_ok=True)
    im.save(path, "WEBP", quality=q, method=6)
    print(f"{path.relative_to(ROOT)} {im.size[0]}x{im.size[1]} {path.stat().st_size/1024:.1f} KB")

# Portrait: 4:5 crop around the subject, 3 responsive widths
p = Image.open(SRC / "ProfilePic.png").convert("RGB").crop((0, 0, 1200, 1500))
for w in (480, 720, 960):
    save_webp(p.resize((w, w * 5 // 4), Image.LANCZOS), PUB / f"img/profile-{w}.webp", 74)

# Logo: 80 px (shown at 40 px, so 2x)
logo = Image.open(SRC / "jmlnewlogo.png").convert("RGBA")
bbox = logo.getbbox(); logo = logo.crop(bbox)
side = max(logo.size); sq = Image.new("RGBA", (side, side), (0, 0, 0, 0)); sq.paste(logo, ((side - logo.width) // 2, (side - logo.height) // 2)); logo = sq
l80 = logo.resize((80, 80), Image.LANCZOS)
save_webp(l80, PUB / "img/logo-80.webp", 90)

# Favicon set (opaque black background so the lime mark reads on any tab colour)
def on_black(size):
    bg = Image.new("RGBA", (size, size), (0, 0, 0, 255))
    bg.alpha_composite(logo.resize((size, size), Image.LANCZOS))
    return bg
on_black(48).save(PUB / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
on_black(32).convert("RGB").save(PUB / "favicon-32x32.png", optimize=True)
ap = Image.new("RGBA", (180, 180), (0, 0, 0, 255)); ap.alpha_composite(logo.resize((150, 150), Image.LANCZOS), (15, 15))
ap.convert("RGB").quantize(128, method=Image.Quantize.MEDIANCUT).save(PUB / "apple-touch-icon.png", optimize=True)
for s in (192, 512):
    on_black(s).convert("RGB").quantize(128, method=Image.Quantize.MEDIANCUT).save(PUB / f"icon-{s}.png", optimize=True)
print("favicon set written")

# Project thumbnails -> WebP (sources are 512 px wide)
for f in sorted((SRC / "projects").glob("*.png")):
    save_webp(Image.open(f).convert("RGB"), PUB / "img/projects" / (f.stem + ".webp"), 80)
