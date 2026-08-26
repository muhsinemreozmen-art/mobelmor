import json
import re

with open('js/app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

with open('js/detail.js', 'r', encoding='utf-8') as f:
    detail_js = f.read()

with open('products.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

print("=== 1. Checking attachCardEventListeners in app.js ===")
idx = app_js.find('attachCardEventListeners')
print(app_js[idx:idx+800])

print("\n=== 2. Checking how product detail page gets product from URL ===")
idx_det = detail_js.find('getProductIdFromUrl')
print(detail_js[idx_det:idx_det+800])

print("\n=== 3. Checking all product images in products.json ===")
for p in products:
    print(f"ID={p['id']} [{p.get('productType')}] Title='{p['title']}', image='{p.get('image')}', gallery[0]='{p.get('gallery', [''])[0]}'")

