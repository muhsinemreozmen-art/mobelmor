import glob
import os

html = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>All Models and Pieces Visual Matrix</title>
<style>
body { font-family: sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
.model-block { background: #1e293b; border-radius: 12px; padding: 20px; margin-bottom: 30px; }
.model-title { font-size: 1.3rem; font-weight: bold; color: #38bdf8; margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 15px; }
.card { background: #0f172a; border-radius: 8px; padding: 10px; border: 1px solid rgba(255,255,255,0.08); }
img { width: 100%; height: 160px; object-fit: cover; border-radius: 6px; }
.label { font-size: 13px; font-weight: bold; margin-top: 8px; color: #fbbf24; word-break: break-all; }
</style>
</head>
<body>
<h1>Mobelmor All 20 Pages Visual Matrix</h1>
"""

for p in range(1, 21):
    imgs = sorted(glob.glob(f"assets/minegolden_p{p}_*.webp"))
    if not imgs: continue
    html += f"""
    <div class="model-block">
        <div class="model-title">PAGE {p} IMAGES</div>
        <div class="grid">
    """
    for img in imgs:
        html += f"""
        <div class="card">
            <img src="{img}">
            <div class="label">{img}</div>
        </div>
        """
    html += """
        </div>
    </div>
    """

html += "</body></html>"
open("inspect_matrix.html", "w", encoding="utf-8").write(html)
print("Created inspect_matrix.html")
