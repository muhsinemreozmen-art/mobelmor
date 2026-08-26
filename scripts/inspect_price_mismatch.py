import json
import re

with open('products.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

print(f"Total products in products.json: {len(products)}")

with open('index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()

with open('js/app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

with open('js/detail.js', 'r', encoding='utf-8') as f:
    detail_js = f.read()

# 1. Search for all product links / cards in index.html
print("\n--- Scanning index.html for hardcoded product cards & prices ---")
card_pattern = re.findall(r'<article[^>]*class="[^"]*product-card[^"]*"[^>]*>([\s\S]*?)</article>', index_html)
print(f"Found {len(card_pattern)} product-card articles in index.html")

for idx, card in enumerate(card_pattern):
    href_m = re.search(r'href="([^"]+)"', card)
    title_m = re.search(r'<h3[^>]*>([^<]+)</h3>', card)
    price_m = re.search(r'<strong[^>]*class="price-current[^"]*"[^>]*>([^<]+)</strong>', card)
    if not price_m:
        price_m = re.search(r'<div[^>]*class="price-current[^"]*"[^>]*>([^<]+)</div>', card)
    if not price_m:
        price_m = re.search(r'₺\s*([\d\.,]+)', card)
    
    href = href_m.group(1) if href_m else "N/A"
    title = title_m.group(1).strip() if title_m else "N/A"
    price = price_m.group(1).strip() if price_m else (price_m.group(0) if price_m else "N/A")
    print(f"Card #{idx+1}: Title='{title}', Price in HTML='{price}', Link='{href}'")

# 2. Check how products are dynamically rendered by js/app.js in index.html
print("\n--- Scanning dynamic rendering in js/app.js ---")
# Look for renderProducts / renderFeatured / renderFlashDeals etc.
dynamic_renders = re.findall(r'function render\w+|const render\w+\s*=', app_js)
print("Rendering functions in app.js:", dynamic_renders)

# 3. Check specific product from user screenshot: "İcon Meşe Ahşap Yemek Odası Takımı" or "İcon Meşe Masa Sandalye"
print("\n--- Looking for 'İcon Meşe' products in products.json ---")
for p in products:
    if "icon" in p.get('title', '').lower() or "meşe" in p.get('title', '').lower():
        print(f"ID={p['id']}, Title='{p['title']}', Price={p.get('price')}, OriginalPrice={p.get('originalPrice')}, Category={p.get('category')}, Slug={p.get('slug')}")
        if 'components' in p:
            print(f"  Components: {p.get('components')}")
        if 'modulePrices' in p:
            print(f"  ModulePrices: {p.get('modulePrices')}")

