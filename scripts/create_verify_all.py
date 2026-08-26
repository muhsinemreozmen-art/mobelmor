import glob
import os

html = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Detailed Verification Matrix</title>
<style>
body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0f172a; color: #f8fafc; padding: 24px; }
.section { background: #1e293b; border-radius: 12px; padding: 20px; margin-bottom: 24px; border: 1px solid rgba(255,255,255,0.08); }
.section-title { font-size: 1.2rem; font-weight: 700; color: #38bdf8; margin-bottom: 16px; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; }
.card { background: #090d16; border-radius: 8px; overflow: hidden; padding: 10px; border: 1px solid rgba(255,255,255,0.05); }
img { width: 100%; height: 180px; object-fit: cover; border-radius: 4px; }
.meta { font-size: 0.85rem; margin-top: 8px; font-weight: 600; color: #fbbf24; }
.desc { font-size: 0.78rem; color: #94a3b8; margin-top: 4px; }
</style>
</head>
<body>
<h1>Mobelmor Complete Visual & Title Verification</h1>
"""

for p in range(1, 21):
    imgs = sorted(glob.glob(f"assets/minegolden_p{p}_*.webp"))
    if not imgs: continue
    html += f"""
    <div class="section">
        <div class="section-title">PAGE {p}</div>
        <div class="grid">
    """
    for img in imgs:
        html += f"""
        <div class="card">
            <img src="{img}">
            <div class="meta">{img}</div>
        </div>
        """
    html += """
        </div>
    </div>
    """

html += "</body></html>"
open("verify_all.html", "w", encoding="utf-8").write(html)
print("Created verify_all.html")
