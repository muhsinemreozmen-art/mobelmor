import glob
import os
from PIL import Image

images = sorted(glob.glob("assets/minegolden_p*.webp"))

html = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Asset Visual Inspector</title>
<style>
body { font-family: sans-serif; background: #111; color: #fff; padding: 20px; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
.card { background: #222; border-radius: 8px; overflow: hidden; padding: 10px; }
img { width: 100%; height: 200px; object-fit: cover; border-radius: 4px; }
.meta { margin-top: 8px; font-size: 13px; color: #aaa; }
.title { font-weight: bold; color: #38bdf8; }
</style>
</head>
<body>
<h1>Minegolden All Assets Visual Inspector</h1>
<div class="grid">
"""

for img_path in images:
    try:
        with Image.open(img_path) as im:
            w, h = im.size
        html += f"""
        <div class="card">
            <div class="title">{img_path}</div>
            <img src="{img_path}">
            <div class="meta">{w}x{h} px</div>
        </div>
        """
    except Exception as e:
        pass

html += """
</div>
</body>
</html>
"""

open("inspect_assets.html", "w", encoding="utf-8").write(html)
print("Created inspect_assets.html")
