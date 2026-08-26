import json, re, sqlite3

# Load from js/app.js
content = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
products = json.loads(m.group(1))

for p in products:
    if p['id'] == 1:
        # ID 1: Full Set -> p1_5.webp (The complete living room set shown in Screenshot 1!)
        p['image'] = "assets/minegolden_p1_5.webp"
        p['gallery'] = [
            "assets/minegolden_p1_5.webp",
            "assets/minegolden_p1_1.webp",
            "assets/minegolden_p1_3.webp",
            "assets/minegolden_p1_4.webp",
            "assets/minegolden_p1_2.webp",
            "assets/minegolden_p1_6.webp"
        ]
    elif p['id'] == 2:
        # ID 2: 3'lü Koltuk -> p1_1.webp (The single 3-seater sofa shown in Screenshot 2!)
        p['image'] = "assets/minegolden_p1_1.webp"
        p['gallery'] = [
            "assets/minegolden_p1_1.webp",
            "assets/minegolden_p1_5.webp",
            "assets/minegolden_p1_2.webp",
            "assets/minegolden_p1_6.webp"
        ]

    # Ensure gallery starts with image
    img = p['image']
    gal = [x for x in p['gallery'] if x != img]
    p['gallery'] = [img] + gal

# 1. Update js/app.js & js/detail.js
for target in ['js/app.js', 'js/detail.js']:
    c = open(target, encoding='utf-8').read()
    c = re.sub(r'const PRODUCTS = \[[\s\S]*?\n\];', 'const PRODUCTS = ' + json.dumps(products, ensure_ascii=False, indent=2) + ';', c)
    open(target, 'w', encoding='utf-8').write(c)
    print(f"Updated {target}")

# 2. Update js/store-service.js
store_c = open('js/store-service.js', encoding='utf-8').read()
store_c = re.sub(
    r'const SEED_PRODUCTS = \[[\s\S]*?\n    \];',
    'const SEED_PRODUCTS = ' + json.dumps(products, ensure_ascii=False, indent=8) + ';',
    store_c
)
store_c = re.sub(r'const CATALOG_VERSION = "[^"]+";', 'const CATALOG_VERSION = "20260826_GOLD_FULL_SET_PERFECT_V7";', store_c)
open('js/store-service.js', 'w', encoding='utf-8').write(store_c)
print("Updated js/store-service.js with 20260826_GOLD_FULL_SET_PERFECT_V7")

# 3. Update SQLite
conn = sqlite3.connect('database/mobelmor.db')
cursor = conn.cursor()
cursor.execute("UPDATE products SET main_image = ? WHERE id = 1", ("assets/minegolden_p1_5.webp",))
cursor.execute("UPDATE products SET main_image = ? WHERE id = 2", ("assets/minegolden_p1_1.webp",))
conn.commit()
conn.close()
print("Updated SQLite database/mobelmor.db")
