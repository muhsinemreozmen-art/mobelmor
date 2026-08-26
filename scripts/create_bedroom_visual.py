import os
from PIL import Image

# Let's inspect each image of p12, p13, p14, p15, p16
html = """
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
body { font-family: sans-serif; background: #111; color: #fff; padding: 20px; }
.row { display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 30px; border-bottom: 1px solid #333; padding-bottom: 20px; }
.col { width: 220px; background: #222; padding: 10px; border-radius: 6px; text-align: center; }
img { width: 100%; height: 160px; object-fit: cover; }
</style>
</head>
<body>
<h1>Bedroom Detailed Image Inspector</h1>
"""

for p in range(11, 17):
    html += f"<h2>Product {p} (p{p})</h2><div class='row'>"
    for i in range(1, 7):
        img_path = f"assets/minegolden_p{p}_{i}.webp"
        if os.path.exists(img_path):
            html += f"<div class='col'><img src='{img_path}'><p>p{p}_{i}.webp</p></div>"
    html += "</div>"

html += "</body></html>"
open("inspect_bedroom_visual.html", "w", encoding="utf-8").write(html)
print("inspect_bedroom_visual.html created")
