import json
import re
import sqlite3

EXACT_FIXES = {
    4:  {"image": "assets/pieces/gold_berjer.webp"},
    8:  {"image": "assets/pieces/zumrut_berjer.webp"},
    11: {"image": "assets/pieces/bohem_berjer.webp"},
    12: {"image": "assets/pieces/bohem_puf.webp"},
    15: {"image": "assets/pieces/mono_2li.webp"},
    16: {"image": "assets/minegolden_p4_3.webp"},
    20: {"image": "assets/pieces/leon_berjer.webp"},
}

for file_path in ['js/app.js', 'js/detail.js']:
    content = open(file_path, encoding='utf-8').read()
    m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
    if m:
        prods = json.loads(m.group(1))
        for p in prods:
            pid = p['id']
            if pid in EXACT_FIXES:
                p['image'] = EXACT_FIXES[pid]['image']
                # Ensure first gallery image matches main image
                if p.get('gallery'):
                    p['gallery'][0] = p['image']
                else:
                    p['gallery'] = [p['image']]
        
        new_json = json.dumps(prods, ensure_ascii=False, indent=2)
        new_content = content[:m.start(1)] + new_json + content[m.end(1):]
        open(file_path, 'w', encoding='utf-8').write(new_content)
        print(f"Updated {file_path} with isolated piece assets.")

# Update js/store-service.js seed data
app_content = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', app_content)
products = json.loads(m.group(1))

store_content = open('js/store-service.js', encoding='utf-8').read()
store_content = re.sub(
    r'const SEED_PRODUCTS = \[[\s\S]*?\n    \];',
    'const SEED_PRODUCTS = ' + json.dumps(products, ensure_ascii=False, indent=8) + ';',
    store_content
)
open('js/store-service.js', 'w', encoding='utf-8').write(store_content)
print("Updated js/store-service.js.")

# Update SQLite
try:
    conn = sqlite3.connect('database/mobelmor.db')
    cursor = conn.cursor()
    for p in products:
        cursor.execute(
            "UPDATE products SET main_image = ? WHERE id = ?",
            (p['image'], p['id'])
        )
    conn.commit()
    conn.close()
    print("Updated SQLite database/mobelmor.db.")
except Exception as e:
    print(f"SQLite error: {e}")

print("All database and JS sources synchronized successfully.")
