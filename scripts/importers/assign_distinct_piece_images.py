import json
import os
import re

# Load raw products
with open('products.json', 'r', encoding='utf-8') as f:
    raw_products = json.load(f)

# Define collection asset bases for each of the 21 Sets
# 7 Living Collections
living_sets_assets = [
    'assets/minegolden_p1',
    'assets/minegolden_p2',
    'assets/minegolden_p3',
    'assets/minegolden_p4',
    'assets/minegolden_p5',
    'assets/minegolden_p19',
    'assets/minegolden_p20'
]

# 7 Dining Collections
dining_sets_assets = [
    'assets/minegolden_p6',
    'assets/minegolden_p7',
    'assets/minegolden_p8',
    'assets/minegolden_p9',
    'assets/minegolden_p10',
    'assets/minegolden_p18',
    'assets/minegolden_p17'
]

# 7 Bedroom Collections
bedroom_sets_assets = [
    'assets/minegolden_p11',
    'assets/minegolden_p12',
    'assets/minegolden_p13',
    'assets/minegolden_p14',
    'assets/minegolden_p15',
    'assets/minegolden_p16',
    'assets/minegolden_p11'
]

cat_map = {
    "Yatak Odası": "bedroom",
    "Yemek Odası": "dining",
    "Oturma Odası": "living"
}

subcat_map = {
    # Sets
    "Modern Yatak Odaları": "beds",
    "Ahşap Yatak Odaları": "beds",
    "Ahşap Yemek Odaları": "dining-tables",
    "Modern Yemek Odaları": "dining-tables",
    "Metal Ayaklı Yemek Odaları": "dining-tables",
    "Açılır Yemek Odaları": "dining-tables",
    "Lüks / Avangarde Yemek Odaları": "dining-tables",
    "Yataklı Koltuk Takımları": "sofas",
    "Modern Koltuk Takımları": "sofas",
    "Köşe Koltuklar": "sofas",
    "Motorlu & Mekanizmalı Koltuklar": "sofas",
    "Akıllı / Motorlu Koltuklar": "sofas",
    "Chester Koltuk Takımları": "sofas",
    # Solos
    "Gardıroplar": "wardrobes",
    "Karyolalar & Başlıklar": "beds",
    "Şifonyerler": "consoles",
    "Komodinler": "nightstands",
    "Yemek Masaları": "dining-tables",
    "Sandalyeler": "chairs",
    "Konsollar & Büfeler": "buffets",
    "Kanepeler & Koltuklar": "sofas",
    "Berjerler & Tekliler": "armchairs",
    "Puflar": "tables"
}

living_count = 0
dining_count = 0
bedroom_count = 0

parent_asset_map = {}
site_products = []

for i, p in enumerate(raw_products, start=1):
    main_cat = p.get("Main_Category", "Oturma Odası")
    sub_cat = p.get("Sub_Category", "")
    p_type = p.get("Product_Type", "Set")
    title = p.get("Product_Name", "Mobilya")
    parent = p.get("Parent_Set", "")
    
    cat_slug = cat_map.get(main_cat, "living")
    subcat_slug = subcat_map.get(sub_cat, "sofas" if cat_slug == "living" else "beds" if cat_slug == "bedroom" else "dining-tables")
    price = p.get("Price_Sale") or p.get("Price_Regular") or 25000.00

    if p_type == "Set":
        if cat_slug == "living":
            base = living_sets_assets[living_count % len(living_sets_assets)]
            living_count += 1
        elif cat_slug == "dining":
            base = dining_sets_assets[dining_count % len(dining_sets_assets)]
            dining_count += 1
        else:
            base = bedroom_sets_assets[bedroom_count % len(bedroom_sets_assets)]
            bedroom_count += 1

        parent_asset_map[title] = base

        # Generate full set gallery (all 6 views)
        gal = [f"{base}_{j}.webp" for j in range(1, 7) if os.path.exists(f"{base}_{j}.webp")]
        if not gal:
            gal = [f"{base}_1.webp"]
        primary_img = gal[0]

        components = p.get("Components", [])
        specs = {
            "Üretim": "İnegöl / Bursa",
            "İskelet": "Fırınlanmış Gürgen Masif Ağaç & 1. Sınıf MDF",
            "Garanti": "2 Yıl Üretici Garantisi",
            "Kargo": "Tüm Türkiye Ücretsiz Sigortalı Teslimat"
        }
        if components:
            specs["Takım İçeriği"] = " + ".join(components)

        badges = ["İNEGÖL KOLEKSİYONU", "%100 ORİJİNAL", "ÜCRETSİZ MONTAJ"]

        entry = {
            "id": i,
            "title": title,
            "category": cat_slug,
            "subcategory": subcat_slug,
            "price": int(price),
            "rating": round(4.8 + (i % 3) * 0.1, 1),
            "reviewsCount": 25 + (i * 4) % 40,
            "image": primary_img,
            "gallery": gal,
            "badges": badges,
            "material": "İNEGÖL ÜRETİMİ MASİF GÜRGEN & 1. SINIF MDF",
            "desc": p.get("Description", "İnegöl usta zanaatkarlarının el işçiliği tasarımı, kaliteli malzeme ve özel kumaş kaplamasıyla evinize konfor ve zarafet katar."),
            "specs": specs,
            "productType": "Set",
            "components": components,
            "parentSet": ""
        }
        site_products.append(entry)

    else:
        # SOLO PRODUCT
        base = parent_asset_map.get(parent, "assets/minegolden_p1")
        
        # Assign distinct piece image based on the piece type
        piece_num = 2 # default secondary view
        if subcat_slug == "sofas":
            if "3'lü" in title or "3lü" in title:
                piece_num = 2
            elif "2'li" in title or "2li" in title:
                piece_num = 3
            else:
                piece_num = 2
        elif subcat_slug == "armchairs": # Berjer
            piece_num = 4
        elif subcat_slug == "tables": # Puf / Sehpa
            piece_num = 5
        elif subcat_slug == "dining-tables": # Yemek Masası
            piece_num = 2
        elif subcat_slug == "buffets" or subcat_slug == "consoles": # Konsol / Büfe / Şifonyer
            piece_num = 3 if cat_slug == "dining" else 4
        elif subcat_slug == "chairs": # Sandalye
            piece_num = 4
        elif subcat_slug == "wardrobes": # Gardırop
            piece_num = 2
        elif subcat_slug == "beds": # Karyola
            piece_num = 3
        elif subcat_slug == "nightstands": # Komodin
            piece_num = 5

        # Check if the specific piece image file exists, else fallback
        piece_img = f"{base}_{piece_num}.webp"
        if not os.path.exists(piece_img):
            piece_img = f"{base}_1.webp"

        # Build gallery starting with the solo piece image, followed by details
        piece_gal = [piece_img]
        for j in range(1, 7):
            cand = f"{base}_{j}.webp"
            if cand != piece_img and os.path.exists(cand):
                piece_gal.append(cand)

        specs = {
            "Üretim": "İnegöl / Bursa",
            "İskelet": "Fırınlanmış Gürgen Masif Ağaç & 1. Sınıf MDF",
            "Garanti": "2 Yıl Üretici Garantisi",
            "Kargo": "Tüm Türkiye Ücretsiz Sigortalı Teslimat",
            "Ait Olduğu Takım": parent
        }

        entry = {
            "id": i,
            "title": title,
            "category": cat_slug,
            "subcategory": subcat_slug,
            "price": int(price),
            "rating": round(4.7 + (i % 4) * 0.1, 1),
            "reviewsCount": 15 + (i * 3) % 30,
            "image": piece_img,
            "gallery": piece_gal,
            "badges": ["İNEGÖL ÜRETİMİ", "%100 ORİJİNAL"],
            "material": "İNEGÖL ÜRETİMİ MASİF GÜRGEN & 1. SINIF MDF",
            "desc": p.get("Description", f"{parent} koleksiyonuna ait bağımsız modüler mobilya ünitesi."),
            "specs": specs,
            "productType": "Solo",
            "components": [],
            "parentSet": parent
        }
        site_products.append(entry)

# Save final imported products
with open('data/final_imported_products.json', 'w', encoding='utf-8') as f:
    json.dump(site_products, f, ensure_ascii=False, indent=2)

print(f"data/final_imported_products.json güncellendi ({len(site_products)} ürün).")

# Update JS files
def update_js_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    products_json_str = json.dumps(site_products, ensure_ascii=False, indent=2)
    new_products_block = f"const PRODUCTS = {products_json_str};\n"

    pattern = r'const PRODUCTS = \[\s*[\s\S]*?\n\];'
    new_content = re.sub(pattern, new_products_block.strip(), content, count=1)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"{file_path} güncellendi.")

update_js_file('js/app.js')
update_js_file('js/detail.js')
