"""Render the 1200x630 share card (public/og/og-default.jpg) with Playwright + the self-hosted fonts.
Run from the repo root: python3 scripts/make_og.py"""
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
F = (ROOT / "public/fonts").as_uri()
LOGO = (ROOT / "public/icon-512.png").as_uri()
HTML = f"""<!doctype html><html><head><style>
@font-face{{font-family:M;font-weight:800;src:url({F}/montserrat-latin-800-normal.woff2)}}
@font-face{{font-family:J;font-weight:500;src:url({F}/jetbrains-mono-latin-500-normal.woff2)}}
@font-face{{font-family:I;font-weight:400;src:url({F}/inter-latin-400-normal.woff2)}}
html,body{{margin:0;width:1200px;height:630px;background:#000;overflow:hidden}}
.c{{position:relative;width:1200px;height:630px;box-sizing:border-box;padding:72px 80px;color:#fff}}
.g{{position:absolute;right:-160px;top:-160px;width:700px;height:700px;border-radius:50%;background:radial-gradient(closest-side,rgba(204,255,0,.22),transparent)}}
.e{{font:500 24px J;letter-spacing:.14em;text-transform:uppercase;color:#CCFF00}}
h1{{font:800 76px/1.04 M;letter-spacing:-.03em;margin:28px 0 0;max-width:900px}}
h1 span{{color:#CCFF00}}
.f{{position:absolute;left:80px;right:80px;bottom:64px;display:flex;align-items:center;gap:22px;font:400 26px I;color:#c4c9ac}}
.f img{{width:72px;height:72px;border-radius:10px}} .f b{{font:800 30px M;color:#CCFF00;letter-spacing:-.01em}}
.bar{{position:absolute;left:0;bottom:0;width:100%;height:10px;background:#CCFF00}}
</style></head><body><div class="c"><div class="g"></div>
<div class="e">jmlagumbay.com</div>
<h1>Full-stack developer building <span>fast, thoughtful web apps</span></h1>
<div class="f"><img src="{LOGO}" alt=""><div><b>JM Lagumbay</b><br>jmlagumbay422@gmail.com</div></div>
<div class="bar"></div></div></body></html>"""

with sync_playwright() as p:
    br = p.chromium.launch(executable_path="/usr/bin/google-chrome")
    pg = br.new_page(viewport={"width": 1200, "height": 630})
    tmp = ROOT / "scripts/.og-tmp.html"
    tmp.write_text(HTML)
    pg.goto(tmp.as_uri(), wait_until="networkidle")
    tmp.unlink()
    pg.evaluate("document.fonts.ready")
    pg.wait_for_timeout(300)
    out = ROOT / "public/og/og-default.jpg"
    pg.screenshot(path=str(out), type="jpeg", quality=86)
    print(out, out.stat().st_size // 1024, "KB")
    br.close()
