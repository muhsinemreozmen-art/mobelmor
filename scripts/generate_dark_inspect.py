import os
import glob
from PIL import Image

html = """
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Product Gallery Inspector</title>
<style>
body { font-family: -apple-system, sans-serif; background: #0f172a; color: #fff; padding: 20px; }
.prod-row { margin-bottom: 30px; background: #1e293b; padding: 15px; border-radius: 10px; }
.prod-title { font-size: 1.2rem; margin-bottom: 12px; color: #38bdf8; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 15px; }
.item { background: #334155; border-radius: 6px; overflow: hidden; text-align: center; padding: 8px; }
.item img { width: 100%; height: 150px; object-fit: cover; border-radius: 4px; }
.item p { margin: 6px 0 0 0; font-size: 0.8rem; color: #cbd5e1; word-break: break-all; }
</style>
</head>
<body>
<h1>Mobelmor Set Image Inspector</h1>
"""

for p in range(1, 21):
    html += f"<div class='prod-row'><div class='prod-title'>Product {p} (p{p})</div><div class='grid'>"
    for i in range(1, 7):
        img_path = f"assets/minegolden_p{p}_{i}.webp"
        if os.path.exists(img_path):
            html += f"<div class='item'><img src='{img_path}'><p>p{p}_{i}.webp</p></div>"
    html += "</div></div>"

html += "</body></html>"

open("inspect_images_dark.html", "w", encoding="utf-8").write(html)
print("inspect_images_dark.html written")
