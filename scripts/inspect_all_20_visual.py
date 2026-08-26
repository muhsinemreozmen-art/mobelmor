import os
import glob
from PIL import Image

# Let's inspect all 20 products and check all 6 images for each
html = """
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Comprehensive Visual Inspection of All 20 Product Folders</title>
<style>
body { font-family: -apple-system, sans-serif; background: #0f172a; color: #fff; padding: 20px; }
.prod-block { background: #1e293b; margin-bottom: 25px; padding: 15px; border-radius: 8px; border-left: 4px solid #38bdf8; }
.title { font-size: 1.1rem; color: #38bdf8; font-weight: bold; margin-bottom: 10px; }
.row { display: flex; flex-wrap: wrap; gap: 10px; }
.item { width: 180px; background: #334155; padding: 6px; border-radius: 4px; text-align: center; }
.item img { width: 100%; height: 120px; object-fit: cover; border-radius: 3px; }
.item p { font-size: 0.75rem; color: #94a3b8; margin: 4px 0 0 0; }
</style>
</head>
<body>
<h1>All 20 Product Visual Inspection</h1>
"""

for p in range(1, 21):
    html += f"<div class='prod-block'><div class='title'>Product Folder {p} (minegolden_p{p})</div><div class='row'>"
    for i in range(1, 7):
        img_path = f"assets/minegolden_p{p}_{i}.webp"
        if os.path.exists(img_path):
            html += f"<div class='item'><img src='{img_path}'><p>p{p}_{i}.webp</p></div>"
    html += "</div></div>"

html += "</body></html>"
open("inspect_all_20_products_visual.html", "w", encoding="utf-8").write(html)
print("inspect_all_20_products_visual.html written")
