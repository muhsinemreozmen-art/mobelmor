import json, re, sqlite3

content = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
products = json.loads(m.group(1))

# Correct specific products:
for p in products:
    # 1. Mono 2'li Koltuk vs Mono Berjer
    if p['title'] == "Mono 2'li Bukle Koltuk":
        p['image'] = "assets/pieces/mono_2li.webp"
        p['gallery'] = ["assets/pieces/mono_2li.webp", "assets/minegolden_p4_1.webp", "assets/minegolden_p4_4.webp"]
    elif p['title'] == "Mono Tekli Berjer":
        p['image'] = "assets/minegolden_p4_3.webp"
        p['gallery'] = ["assets/minegolden_p4_3.webp", "assets/minegolden_p4_1.webp", "assets/minegolden_p4_6.webp"]

    # 2. Leon 2'li Koltuk vs Leon Berjer
    elif p['title'] == "Leon Ahşap 2'li Koltuk":
        p['image'] = "assets/minegolden_p5_3.webp"
        p['gallery'] = ["assets/minegolden_p5_3.webp", "assets/minegolden_p5_1.webp", "assets/minegolden_p5_6.webp"]
    elif p['title'] == "Leon Tekli Ahşap Berjer":
        p['image'] = "assets/pieces/leon_berjer.webp"
        p['gallery'] = ["assets/pieces/leon_berjer.webp", "assets/minegolden_p5_1.webp", "assets/minegolden_p5_4.webp"]

    # 3. İcon Sandalye Seti
    elif p['title'] == "İcon Meşe Sandalye (6 Adet)":
        p['image'] = "assets/pieces/icon_chairs.webp"
        p['gallery'] = ["assets/pieces/icon_chairs.webp", "assets/minegolden_p8_1.webp"]

    # 4. İcon Aynalı Ahşap Konsol & Büfe
    elif p['title'] == "İcon Aynalı Ahşap Konsol & Büfe":
        p['image'] = "assets/minegolden_p8_4.webp"
        p['gallery'] = ["assets/minegolden_p8_4.webp", "assets/minegolden_p8_1.webp"]

    # Guarantee gallery starts with image
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
store_c = re.sub(r'const CATALOG_VERSION = "[^"]+";', 'const CATALOG_VERSION = "20260826_PIECE_CORRECT_V9";', store_c)
open('js/store-service.js', 'w', encoding='utf-8').write(store_c)
print("Updated js/store-service.js with 20260826_PIECE_CORRECT_V9")

# 3. Update SQLite
conn = sqlite3.connect('database/mobelmor.db')
cursor = conn.cursor()
for p in products:
    cursor.execute("UPDATE products SET main_image = ?, title = ? WHERE id = ?", (p['image'], p['title'], p['id']))
conn.commit()
conn.close()
print("Updated SQLite database/mobelmor.db")
