import os

html = """
<!DOCTYPE html>
<html>
<head>
<title>Inspect All Images</title>
<style>
body { font-family: sans-serif; background: #f4f4f4; padding: 20px; }
.group { margin-bottom: 40px; background: white; padding: 20px; border-radius: 8px; }
.imgs { display: flex; flex-wrap: wrap; gap: 10px; }
.card { width: 220px; text-align: center; border: 1px solid #ddd; padding: 5px; border-radius: 4px; }
img { width: 100%; height: 160px; object-fit: cover; }
</style>
</head>
<body>
<h1>Product Images Overview</h1>
"""

for p in range(1, 21):
    html += f"<div class='group'><h2>Product {p}</h2><div class='imgs'>"
    for i in range(1, 7):
        img_path = f"assets/minegolden_p{p}_{i}.webp"
        if os.path.exists(img_path):
            html += f"<div class='card'><img src='{img_path}'><p>{img_path}</p></div>"
    html += "</div></div>"

html += "</body></html>"

open("inspect_images.html", "w", encoding="utf-8").write(html)
print("Created inspect_images.html")
