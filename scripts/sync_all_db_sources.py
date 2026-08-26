import json
import re
import sqlite3

# 1. Read updated PRODUCTS from js/app.js
app_content = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', app_content)
products = json.loads(m.group(1))

# 2. Update js/store-service.js
store_content = open('js/store-service.js', encoding='utf-8').read()
store_content = re.sub(
    r'const SEED_PRODUCTS = \[[\s\S]*?\n    \];',
    'const SEED_PRODUCTS = ' + json.dumps(products, ensure_ascii=False, indent=8) + ';',
    store_content
)
open('js/store-service.js', 'w', encoding='utf-8').write(store_content)
print("Updated js/store-service.js seed data.")

# 3. Update SQLite database/mobelmor.db
try:
    conn = sqlite3.connect('database/mobelmor.db')
    cursor = conn.cursor()
    for p in products:
        cursor.execute(
            "UPDATE products SET image = ?, gallery = ? WHERE id = ?",
            (p['image'], json.dumps(p['gallery'], ensure_ascii=False), p['id'])
        )
    conn.commit()
    conn.close()
    print("Updated database/mobelmor.db SQLite.")
except Exception as e:
    print(f"SQLite update info: {e}")

# 4. Refresh seed.sql
try:
    with open('database/seed.sql', 'w', encoding='utf-8') as f:
        f.write("-- Mobelmor Complete 85 Products Database Seed\n\n")
        for p in products:
            gal_json = json.dumps(p['gallery'], ensure_ascii=False).replace("'", "''")
            f.write(f"INSERT OR REPLACE INTO products (id, title, category, subcategory, price, old_price, rating, reviews_count, image, gallery, material, description) VALUES ({p['id']}, '{p['title']}', '{p['category']}', '{p.get('subcategory', '')}', {p['price']}, {p.get('originalPrice', 0)}, {p.get('rating', 4.9)}, {p.get('reviewsCount', 24)}, '{p['image']}', '{gal_json}', '{p.get('material', '')}', '{p.get('desc', '')}');\n")
    print("Updated database/seed.sql.")
except Exception as e:
    print(f"seed.sql update info: {e}")
