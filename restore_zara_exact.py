import json
import re

zara_product = [
  {
    "id": 1,
    "title": "Zara Yemek Odası Takımı Siyah",
    "category": "dining",
    "subcategory": "dining-tables",
    "price": 66500,
    "rating": 4.9,
    "reviewsCount": 63,
    "image": "assets/p_zarayemeko_1e8f6324.jpg",
    "gallery": [
      "assets/p_zarayemeko_1e8f6324.jpg",
      "assets/p_zarayemeko_40ce0400.jpg",
      "assets/p_zarayemeko_484c0fc1.jpg",
      "assets/p_zarayemeko_db65958d.jpg",
      "assets/p_zarayemeko_77fadca0.jpg",
      "assets/p_zarayemeko_8f196103.jpg",
      "assets/p_zarayemeko_d7533b4e.jpg",
      "assets/p_zarayemeko_6d32aee1.jpg",
      "assets/p_zarayemeko_748042d5.jpg",
      "assets/p_zarayemeko_7e3680c9.jpg",
      "assets/p_zarayemeko_e8f87881.jpg",
      "assets/p_zarayemeko_1da2ba5c.jpg"
    ],
    "badges": ["İNEGÖL KOLEKSİYONU", "%100 ORİJİNAL"],
    "material": "AKRİLİK SİYAH LAKE MERMER DOKULU MASİF MASA & AYNALI KONSOL",
    "desc": "Zara Yemek Odası Takımı Siyah ile modern ve şık bir yemek alanı yaratın. Estetik detaylar, kaliteli malzeme ve fonksiyonel tasarım bir arada. Evinize değer katın.",
    "specs": {
      "Modül": "Genişlik",
      "Masa (Açılır)": "175-215 cm",
      "Sandalye (6 Adet)": "50 cm",
      "Aynalı Konsol": "205 cm",
      "Konsol Aynası": "120 cm"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/zara-yemek-odasi-siyah"
  }
]

json_str = json.dumps(zara_product, ensure_ascii=False, indent=2)

for filepath in ['app.js', 'detail.js']:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    new_content = re.sub(
        r'const PRODUCTS = \[[\s\S]*?\n\];',
        f'const PRODUCTS = {json_str};',
        content
    )
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Restored {filepath} with exact Zara product & 12 real gallery images!")
