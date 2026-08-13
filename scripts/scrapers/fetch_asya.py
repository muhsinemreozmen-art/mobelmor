import os
import json
import urllib.request
import re

# Asya Yatak Odası Takımı data
asya_product = {
    "id": 3,
    "title": "Asya Yatak Odası Takımı",
    "category": "bedroom",
    "subcategory": "beds",
    "price": 94500,
    "rating": 4.9,
    "reviewsCount": 38,
    "image": "assets/asya_main.jpg",
    "gallery": [
        "assets/asya_main.jpg",
        "assets/asya_1.jpg",
        "assets/asya_2.jpg",
        "assets/asya_3.jpg"
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

# Image URLs to download
image_urls = {
    "assets/asya_main.jpg": "https://image.mobilyaminegolden.com/image/cache/catalog/product-images/yatak-odasi-takimlari/asel-yatak-odasi/asel-yatak-odasi-1-2048x1024w.jpg",
    "assets/asya_1.jpg": "https://image.mobilyaminegolden.com/image/cache/catalog/product-images/yatak-odasi-takimlari/asel-yatak-odasi/asel-yatak-odasi-2-2048x1024w.jpg",
    "assets/asya_2.jpg": "https://image.mobilyaminegolden.com/image/cache/catalog/product-images/yatak-odasi-takimlari/asel-yatak-odasi/asel-yatak-odasi-3-2048x1024w.jpg",
    "assets/asya_3.jpg": "https://image.mobilyaminegolden.com/image/cache/catalog/product-images/yatak-odasi-takimlari/asel-yatak-odasi/asel-yatak-odasi-4-2048x1024w.jpg"
}

os.makedirs('assets', exist_ok=True)
req_headers = {'User-Agent': 'Mozilla/5.0'}

for filename, url in image_urls.items():
    if not os.path.exists(filename):
        try:
            req = urllib.request.Request(url, headers=req_headers)
            with urllib.request.urlopen(req) as response, open(filename, 'wb') as out_file:
                out_file.write(response.read())
            print(f"Downloaded {filename}")
        except Exception as e:
            print(f"Fallback for {filename}: {e}")
            # If download fails, fallback to existing local assets
            if os.path.exists('assets/real_asel-yatak-odasi_1_58aa5bd8.jpg'):
                import shutil
                src_map = {
                    "assets/asya_main.jpg": "assets/real_asel-yatak-odasi_1_58aa5bd8.jpg",
                    "assets/asya_1.jpg": "assets/real_asel-yatak-odasi_2_bf0c126c.jpg",
                    "assets/asya_2.jpg": "assets/real_asel-yatak-odasi_3_9c60b515.jpg",
                    "assets/asya_3.jpg": "assets/real_asel-yatak-odasi_4_3ab37c2f.jpg"
                }
                if filename in src_map and os.path.exists(src_map[filename]):
                    shutil.copy(src_map[filename], filename)
                    print(f"Copied local fallback to {filename}")

# Append to app.js
with open('app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

if '"Asya Yatak Odası Takımı"' not in app_js:
    product_str = json.dumps(asya_product, indent=4, ensure_ascii=False)
    formatted = '  ' + product_str.replace('\n', '\n  ') + '\n];'
    app_js = app_js.replace('\n];', ',\n' + formatted)
    with open('app.js', 'w', encoding='utf-8') as f:
        f.write(app_js)
    print("Added Asya Yatak Odası Takımı to app.js")
else:
    print("Asya Yatak Odası Takımı already in app.js")
