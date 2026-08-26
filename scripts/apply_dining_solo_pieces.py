import json, re, sqlite3

content = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
products = json.loads(m.group(1))

# Update Dining Solo pieces to their new isolated studio piece images
piece_mapping = {
    "İcon Yuvarlak Yemek Masası": "assets/pieces/icon_yuvarlak_masa.webp",
    "İcon Ergonomik Sandalye (4 Adet)": "assets/pieces/icon_yuvarlak_sandalye.webp",
    "İcon Meşe Yemek Masası": "assets/pieces/icon_mese_masa.webp",
    "İcon Meşe Sandalye (6 Adet)": "assets/pieces/icon_mese_sandalye.webp",
    "İcon Aynalı Ahşap Konsol & Büfe": "assets/pieces/icon_mese_konsol.webp",
    "Forte Meşe Çapraz Ayak Masa": "assets/pieces/forte_masa.webp",
    "Forte Kumaş Sandalye (6 Adet)": "assets/pieces/forte_sandalye.webp",
    "Forte Aynalı Konsol & Büfe": "assets/pieces/forte_konsol.webp",
    "Seramik Mutfak & Yemek Masası": "assets/pieces/seramik_masa.webp",
    "Seramik Takım Sandalyesi (4 Adet)": "assets/pieces/seramik_sandalye.webp",
    "İpek Aynalı Konsol & Büfe": "assets/pieces/ipek_konsol.webp",
    "İpek Açılır Fonksiyonel Masa": "assets/pieces/ipek_masa.webp",
    "İpek Lüks Sandalye (6 Adet)": "assets/pieces/ipek_sandalye.webp",
}

for p in products:
    if p['title'] in piece_mapping:
        new_img = piece_mapping[p['title']]
        p['image'] = new_img
        p['gallery'] = [new_img] + [g for g in p.get('gallery', []) if g != new_img]

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
store_c = re.sub(r'const CATALOG_VERSION = "[^"]+";', 'const CATALOG_VERSION = "20260826_SOLO_PIECES_PERFECT_V10";', store_c)
open('js/store-service.js', 'w', encoding='utf-8').write(store_c)
print("Updated js/store-service.js with 20260826_SOLO_PIECES_PERFECT_V10")

# 3. Update SQLite
conn = sqlite3.connect('database/mobelmor.db')
cursor = conn.cursor()
for p in products:
    cursor.execute("UPDATE products SET main_image = ?, title = ? WHERE id = ?", (p['image'], p['title'], p['id']))
conn.commit()
conn.close()
print("Updated SQLite database/mobelmor.db")
