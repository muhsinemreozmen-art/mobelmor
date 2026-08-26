import json
import re

# Load the 21 sets and solo products
with open('products.json', 'r', encoding='utf-8') as f:
    raw_products = json.load(f)

site_products = []

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

for i, p in enumerate(raw_products, start=1):
    main_cat = p.get("Main_Category", "Oturma Odası")
    sub_cat = p.get("Sub_Category", "")
    
    cat_slug = cat_map.get(main_cat, "living")
    subcat_slug = subcat_map.get(sub_cat, "sofas" if cat_slug == "living" else "beds" if cat_slug == "bedroom" else "dining-tables")
    
    price = p.get("Price_Sale") or p.get("Price_Regular") or 25000.00
    images = p.get("Images", [])
    primary_img = images[0] if images else "assets/placeholder.webp"
    
    # Generate specs based on category & type
    specs = {
        "Üretim": "İnegöl / Bursa",
        "İskelet": "Fırınlanmış Gürgen Masif Ağaç & 1. Sınıf MDF",
        "Garanti": "2 Yıl Üretici Garantisi",
        "Kargo": "Tüm Türkiye Ücretsiz Sigortalı Teslimat"
    }
    
    if p.get("Product_Type") == "Set":
        components = p.get("Components", [])
        if components:
            specs["Takım İçeriği"] = " + ".join(components)
        badges = ["İNEGÖL KOLEKSİYONU", "%100 ORİJİNAL", "ÜCRETSİZ MONTAJ"]
    else:
        badges = ["İNEGÖL ÜRETİMİ", "%100 ORİJİNAL"]
        if "Parent_Set" in p:
            specs["Ait Olduğu Takım"] = p["Parent_Set"]

    product_entry = {
        "id": i,
        "title": p.get("Product_Name", "Mobilya"),
        "category": cat_slug,
        "subcategory": subcat_slug,
        "price": int(price),
        "rating": round(4.7 + (i % 4) * 0.1, 1),
        "reviewsCount": 20 + (i * 3) % 45,
        "image": primary_img,
        "gallery": images,
        "badges": badges,
        "material": "İNEGÖL ÜRETİMİ MASİF GÜRGEN & 1. SINIF MDF",
        "desc": p.get("Description", "İnegöl usta zanaatkarlarının el işçiliği tasarımı, kaliteli malzeme ve özel kumaş kaplamasıyla evinize konfor ve zarafet katar."),
        "specs": specs,
        "productType": p.get("Product_Type", "Set"),
        "components": p.get("Components", []),
        "parentSet": p.get("Parent_Set", "")
    }
    site_products.append(product_entry)

# Write to data/final_imported_products.json
with open('data/final_imported_products.json', 'w', encoding='utf-8') as f:
    json.dump(site_products, f, ensure_ascii=False, indent=2)

print(f"data/final_imported_products.json güncellendi: {len(site_products)} ürün.")

# Function to replace PRODUCTS array in a JS file
def update_js_products(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    products_json_str = json.dumps(site_products, ensure_ascii=False, indent=2)
    new_products_block = f"const PRODUCTS = {products_json_str};\n"

    # Match from 'const PRODUCTS = [' up to '];'
    pattern = r'const PRODUCTS = \[\s*[\s\S]*?\n\];'
    new_content = re.sub(pattern, new_products_block.strip(), content, count=1)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"{file_path} dosyasındaki PRODUCTS dizisi başarıyla güncellendi.")

update_js_products('js/app.js')
update_js_products('js/detail.js')
