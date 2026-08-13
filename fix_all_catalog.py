import os
import json
import shutil
import re

# Copy high-res 283KB image to asya_main.jpg
if os.path.exists('assets/product_3_g3.jpg'):
    shutil.copy('assets/product_3_g3.jpg', 'assets/asya_main.jpg')
    print("Copied 283.8KB HD asset to assets/asya_main.jpg")

if os.path.exists('assets/product_3_g5.jpg'):
    shutil.copy('assets/product_3_g5.jpg', 'assets/asya_1.jpg')
    print("Copied 256.7KB HD asset to assets/asya_1.jpg")

# The clean 4-product catalog with 100% verified HD images (> 150 KB)
clean_products = [
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
            "assets/p_zarayemeko_db65958d.jpg"
        ],
        "badges": [
            "İNEGÖL KOLEKSİYONU",
            "%100 ORİJİNAL"
        ],
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
    },
    {
        "id": 2,
        "title": "Zümrüt Koltuk Takımı",
        "category": "living",
        "subcategory": "sofas",
        "price": 83500,
        "rating": 4.9,
        "reviewsCount": 52,
        "image": "assets/zumrut_main.jpg",
        "gallery": [
            "assets/zumrut_main.jpg",
            "assets/zumrut_1.jpg"
        ],
        "badges": [
            "İNEGÖL ÖZEL KOLEKSİYON",
            "AHŞAP AYAKLI"
        ],
        "material": "MASİF AHŞAP AYAKLI LÜKS KUMAŞ İNEGÖL TASARIMI",
        "desc": "Zümrüt Koltuk Takımı, ergonomik sırt yapısı, masif ahşap ayak detayları ve zengin kumaş alternatifiyle oturma odanıza lüks ve konfor katıyor. Orijinal İnegöl zanaatıyla üretilmiştir.",
        "specs": {
            "Modül": "Genişlik",
            "3'lü Koltuk": "235 cm",
            "Berjer": "72 cm"
        },
        "sourceUrl": "https://www.mobilyaminegolden.com/zumrut-koltuk-takimi-2-3130"
    },
    {
        "id": 3,
        "title": "Pablo Koltuk Takımı",
        "category": "living",
        "subcategory": "sofas",
        "price": 83000,
        "rating": 4.8,
        "reviewsCount": 42,
        "image": "assets/pablo_main.jpg",
        "gallery": [
            "assets/pablo_main.jpg",
            "assets/pablo_1.jpg",
            "assets/pablo_2.jpg"
        ],
        "badges": [
            "YENİ KOLEKSİYON",
            "BOHEM TARZ"
        ],
        "material": "AHŞAP AYAKLI MODERN TASARIM - 32 DANSİTE SÜNGER",
        "desc": "Pablo Koltuk Takımı ile evinizde modern konforu yaşayın. Şık tasarımı, açık renk kumaşları ve zarif ahşap detaylarıyla ferah bir atmosfer sunar. İnegöl mobilya kalitesiyle uzun yıllar kullanın.",
        "specs": {
            "Modül": "Genişlik",
            "3'lü Koltuk": "230 cm",
            "Berjer": "68 cm"
        },
        "sourceUrl": "https://www.mobilyaminegolden.com/pablo-koltuk-takimi-modeli-mobilyam-inegolden"
    },
    {
        "id": 4,
        "title": "Asya Yatak Odası Takımı",
        "category": "bedroom",
        "subcategory": "beds",
        "price": 94500,
        "rating": 4.9,
        "reviewsCount": 38,
        "image": "assets/asya_main.jpg",
        "gallery": [
            "assets/asya_main.jpg",
            "assets/asya_1.jpg"
        ],
        "badges": [
            "İNEGÖL ÖZEL KOLEKSİYON",
            "MASİF MEŞE DOKU"
        ],
        "material": "MASİF MEŞE KAPLAMA & AKRİLİK KREM LAKE & AYNALI GARDIRAP",
        "desc": "Asya Yatak Odası Takımı, doğal meşe dokusu ve krem lake kombinasyonuyla yatak odanıza huzurlu ve lüks bir hava katar. Geniş gardırop hacmi ve LED aydınlatmalı başlığıyla fonksiyonel şıklık sunar.",
        "specs": {
            "Modül": "Genişlik",
            "Gardırop (6 Kapaklı)": "260 cm",
            "Karyola & Başlık": "180 cm",
            "Şifonyer & Ayna": "125 cm",
            "Komodin (2 Adet)": "60 cm"
        },
        "sourceUrl": "https://www.mobilyaminegolden.com/asya-yatak-odasi-takimi"
    }
]

# Update app.js
with open('app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

products_json = json.dumps(clean_products, indent=2, ensure_ascii=False)
new_app_js = re.sub(r'const PRODUCTS = \[.*?\];', f'const PRODUCTS = {products_json};', app_js, flags=re.DOTALL)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(new_app_js)

print("Updated app.js with clean HD catalog!")
