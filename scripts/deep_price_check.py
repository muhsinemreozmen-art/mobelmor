import json
import re

with open('products.json', 'r', encoding='utf-8') as f:
    products_json = json.load(f)

with open('js/app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

with open('js/detail.js', 'r', encoding='utf-8') as f:
    detail_js = f.read()

print(f"=== 1. Checking PRODUCTS in app.js vs detail.js vs products.json ===")
m_app = re.search(r'const PRODUCTS = (\[[\s\S]*?\]);\s*(?:let|const|var)', app_js)
m_detail = re.search(r'const PRODUCTS = (\[[\s\S]*?\]);\s*(?:let|const|var)', detail_js)

if m_app and m_detail:
    app_products = json.loads(m_app.group(1))
    detail_products = json.loads(m_detail.group(1))
    print(f"app.js has {len(app_products)} products")
    print(f"detail.js has {len(detail_products)} products")
    print(f"products.json has {len(products_json)} products")

    diffs = 0
    for p_json, p_app, p_det in zip(products_json, app_products, detail_products):
        if p_json != p_app:
            print(f"DIFF between JSON and app.js for ID {p_json.get('id')}: JSON={p_json.get('price')} vs APP={p_app.get('price')}")
            diffs += 1
        if p_json != p_det:
            print(f"DIFF between JSON and detail.js for ID {p_json.get('id')}: JSON={p_json.get('price')} vs DET={p_det.get('price')}")
            diffs += 1
    if diffs == 0:
        print("PRODUCTS array is 100% IDENTICAL in all 3 files!")
else:
    print("Could not extract PRODUCTS array via regex")

print(f"\n=== 2. Checking how product cards are generated in app.js ===")
# Let's find how card links and card prices are formatted in app.js
card_render_m = re.search(r'grid\.innerHTML = filtered\.map[\s\S]*?`([\s\S]*?)`\s*\}\)\.join', app_js)
if card_render_m:
    print("Card HTML template in app.js:")
    print(card_render_m.group(0)[:1200])

print(f"\n=== 3. Checking getProductIdFromUrl in detail.js ===")
get_id_m = re.search(r'const getProductIdFromUrl =[\s\S]*?\n\};', detail_js)
if get_id_m:
    print(get_id_m.group(0))

print(f"\n=== 4. Checking url-cleaner.js or other routers ===")
try:
    with open('js/url-cleaner.js', 'r', encoding='utf-8') as f:
        print("url-cleaner.js content:\n", f.read()[:800])
except Exception as e:
    print("url-cleaner.js error:", e)

