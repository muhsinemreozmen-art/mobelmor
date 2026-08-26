import json
import re
import os

content = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
products = json.loads(m.group(1))

html = """
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>All 85 Products Visual Verification</title>
<style>
body { font-family: -apple-system, sans-serif; background: #0f172a; color: #fff; padding: 20px; }
.set-block { background: #1e293b; margin-bottom: 25px; padding: 15px; border-radius: 8px; border-left: 4px solid #38bdf8; }
.grid { display: flex; flex-wrap: wrap; gap: 15px; }
.card { background: #334155; width: 230px; border-radius: 6px; padding: 10px; text-align: center; }
.card img { width: 100%; height: 160px; object-fit: cover; border-radius: 4px; }
.title { font-weight: bold; font-size: 0.9rem; margin-top: 6px; min-height: 38px; }
.info { font-size: 0.75rem; color: #94a3b8; margin: 4px 0; }
.set-badge { display: inline-block; background: #0284c7; color: white; padding: 2px 6px; border-radius: 3px; font-size: 0.7rem; }
.solo-badge { display: inline-block; background: #475569; color: white; padding: 2px 6px; border-radius: 3px; font-size: 0.7rem; }
</style>
</head>
<body>
<h1>All 85 Products Image & Title Verification</h1>
"""

current_set = None
for p in products:
    p_type = p.get('productType', 'Solo')
    if p_type == 'Set':
        if current_set is not None:
            html += "</div></div>"
        html += f"<div class='set-block'><h3>[SET #{p['id']}] {p['title']} ({p['category']})</h3><div class='grid'>"
        current_set = p['id']
    
    badge = "<span class='set-badge'>SET</span>" if p_type == 'Set' else "<span class='solo-badge'>SOLO</span>"
    html += f"""
    <div class='card'>
        <img src='{p.get('image')}'>
        <div class='title'>{badge} #{p['id']} {p['title']}</div>
        <div class='info'>{p.get('image')}</div>
        <div class='info'>{p.get('subcategory')} | {p.get('price')} TL</div>
    </div>
    """

if current_set is not None:
    html += "</div></div>"

html += "</body></html>"
open("verify_all_85_products.html", "w", encoding="utf-8").write(html)
print("verify_all_85_products.html created")
