import json
import re
import sqlite3

# 1. Load CLEAN_CATALOG from js/app.js
content = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
products = json.loads(m.group(1))

# Set Gold Tekli Berjer exact image to p1_4.webp (the authentic pink armchair from catalog)
for p in products:
    if p['id'] == 4:
        p['image'] = "assets/minegolden_p1_4.webp"
    
    # CRITICAL: Always ensure p['image'] is the very first image in gallery
    main_img = p['image']
    gal = [g for g in p.get('gallery', []) if g != main_img]
    p['gallery'] = [main_img] + gal

# Save to js/app.js and js/detail.js
for f in ['js/app.js', 'js/detail.js']:
    c = open(f, encoding='utf-8').read()
    c = re.sub(r'const PRODUCTS = \[[\s\S]*?\n\];', 'const PRODUCTS = ' + json.dumps(products, ensure_ascii=False, indent=2) + ';', c)
    open(f, 'w', encoding='utf-8').write(c)
    print(f"Updated {f}")

# Also update js/detail.js to enforce gallery[0] === product.image at runtime
detail_c = open('js/detail.js', encoding='utf-8').read()
detail_c = detail_c.replace(
    "const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];",
    """let gallery = product.gallery && product.gallery.length > 0 ? [...product.gallery] : [product.image];
    if (product.image && gallery[0] !== product.image) {
        gallery = [product.image, ...gallery.filter(g => g !== product.image)];
    }"""
)
open('js/detail.js', 'w', encoding='utf-8').write(detail_c)
print("Enforced runtime gallery start in js/detail.js")

# Update js/store-service.js
store_c = open('js/store-service.js', encoding='utf-8').read()
store_c = re.sub(
    r'const SEED_PRODUCTS = \[[\s\S]*?\n    \];',
    'const SEED_PRODUCTS = ' + json.dumps(products, ensure_ascii=False, indent=8) + ';',
    store_c
)
store_c = re.sub(r'const CATALOG_VERSION = "[^"]+";', 'const CATALOG_VERSION = "20260826_BERJER_EXACT_V3";', store_c)
open('js/store-service.js', 'w', encoding='utf-8').write(store_c)
print("Updated js/store-service.js version to 20260826_BERJER_EXACT_V3")

# Update SQLite Database
conn = sqlite3.connect('database/mobelmor.db')
cursor = conn.cursor()
for p in products:
    cursor.execute("UPDATE products SET main_image = ? WHERE id = ?", (p['image'], p['id']))
conn.commit()
conn.close()
print("Updated SQLite main_image.")
