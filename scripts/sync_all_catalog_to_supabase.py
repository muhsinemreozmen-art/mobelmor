import urllib.request
import json
import re

# Read PRODUCTS from js/app.js
with open("js/app.js", "r", encoding="utf-8") as f:
    code = f.read()

m = re.search(r'const PRODUCTS = (\[[\s\S]*?\]);', code)
if not m:
    print("Could not find PRODUCTS in js/app.js")
    exit(1)

products_json_str = m.group(1)
# Clean comments
cleaned = re.sub(r'//.*', '', products_json_str)
products = json.loads(cleaned)

print(f"Loaded {len(products)} products from app.js")

SUPABASE_URL = 'https://kzbqqollfqatrauacjhj.supabase.co'
SUPABASE_KEY = 'sb_publishable_7cMrt7S85Iza4y7H01FghA_Le91PIhS'

headers = {
    'apikey': SUPABASE_KEY,
    'Authorization': f'Bearer {SUPABASE_KEY}',
    'Content-Type': 'application/json',
    'Prefer': 'resolution=merge-duplicates'
}

success_count = 0
for p in products:
    meta = {}
    if p.get('videoUrl') or p.get('youtubeUrl'):
        meta['videoUrl'] = p.get('videoUrl') or p.get('youtubeUrl')
        meta['youtubeUrl'] = meta['videoUrl']
    if p.get('productType'): meta['productType'] = p.get('productType')
    if p.get('subcategory'): meta['subcategory'] = p.get('subcategory')
    if p.get('warranty'): meta['warranty'] = p.get('warranty')
    if p.get('specs'): meta['specs'] = p.get('specs')

    clean_mat = re.sub(r'\|\|META:[^|]*\|\|', '', p.get('material', '')).strip()
    if meta:
        clean_mat = f"{clean_mat} ||META:{json.dumps(meta)}||"

    payload = {
        'id': int(p['id']),
        'title': p.get('title', ''),
        'category': p.get('category', 'living'),
        'price': float(p.get('price', 0)),
        'original_price': float(p.get('originalPrice') or p.get('price', 0)),
        'main_image': p.get('image', ''),
        'gallery': p.get('gallery') if p.get('gallery') else [p.get('image', '')],
        'dimensions': p.get('dimensions', '') if isinstance(p.get('dimensions'), str) else '',
        'material': clean_mat,
        'skeleton': p.get('skeleton', ''),
        'sponge': p.get('sponge', ''),
        'fabric': p.get('fabric', ''),
        'is_active': p.get('isActive', True) is not False
    }

    req = urllib.request.Request(f"{SUPABASE_URL}/rest/v1/products", data=json.dumps(payload).encode('utf-8'), headers=headers, method='POST')
    try:
        with urllib.request.urlopen(req) as resp:
            if resp.status in (200, 201, 204):
                success_count += 1
    except Exception as e:
        print(f"Error on product {p['id']}: {e}")

print(f"✅ Successfully synced {success_count} / {len(products)} products into Supabase!")
