import os
import json
import urllib.request

# The new product data
product = {
    "id": 2,
    "title": "Pablo Koltuk Takımı",
    "category": "living",
    "subcategory": "sofas",
    "price": 83000,
    "rating": 4.8,
    "reviewsCount": 42,
    "image": "assets/pablo_main.jpg",
    "gallery": [
        "assets/pablo_1.jpg",
        "assets/pablo_2.jpg",
        "assets/pablo_3.jpg",
        "assets/pablo_4.jpg",
        "assets/pablo_5.jpg"
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
}

# Download images
image_urls = {
    "assets/pablo_main.jpg": "https://image.mobilyaminegolden.com/image/cache/catalog/product-images/bohem-koltuk-takimlari/pablo-koltuk-takimi/69fe866ab52c4_69d4ca743fec4_pablo-koltuk-takimi-1-bohem-117496-17-B-1300x650h.jpg",
    "assets/pablo_1.jpg": "https://image.mobilyaminegolden.com/image/cache/catalog/product-images/bohem-koltuk-takimlari/pablo-koltuk-takimi/69fe866ab52c4_69d4ca743fec4_pablo-koltuk-takimi-1-bohem-117496-17-B-1300x650h.jpg",
    "assets/pablo_2.jpg": "https://image.mobilyaminegolden.com/image/cache/catalog/product-images/bohem/pablo-koltuk-takimi-1/pablo-koltuk-takimi-1-bohem-117488-17-B-1300x650h.jpg",
    "assets/pablo_3.jpg": "https://image.mobilyaminegolden.com/image/cache/catalog/product-images/bohem/pablo-koltuk-takimi-1/pablo-koltuk-takimi-1-bohem-117486-17-B-1300x650w.jpg",
    "assets/pablo_4.jpg": "https://image.mobilyaminegolden.com/image/cache/catalog/product-images/bohem/pablo-koltuk-takimi-1/pablo-koltuk-takimi-1-bohem-117485-17-B-1300x650w.jpg",
    "assets/pablo_5.jpg": "https://image.mobilyaminegolden.com/image/cache/catalog/product-images/bohem/pablo-koltuk-takimi-1/pablo-koltuk-takimi-1-bohem-117490-17-B-1300x650w.jpg"
}

os.makedirs('assets', exist_ok=True)
req_headers = {'User-Agent': 'Mozilla/5.0'}

for filename, url in image_urls.items():
    if not os.path.exists(filename):
        req = urllib.request.Request(url, headers=req_headers)
        with urllib.request.urlopen(req) as response, open(filename, 'wb') as out_file:
            out_file.write(response.read())

# Update app.js
with open('app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

# Replace the PRODUCTS array
# We find the end of the first product and append the second one.
product_str = json.dumps(product, indent=4, ensure_ascii=False)
# Fix the specs format which JSON outputs as normal dictionary
product_str_formatted = '  ' + product_str.replace('\n', '\n  ') + '\n];'

app_js = app_js.replace('\n];', ',\n' + product_str_formatted)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(app_js)

print("Added Pablo Koltuk Takımı to app.js and downloaded images.")
