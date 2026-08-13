import os
import json
import urllib.request
import re

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

os.makedirs('assets', exist_ok=True)

# Image mapping with verified HD URLs from mobilyaminegolden.com
product_image_sources = {
    "zumrut": [
        "https://image.mobilyaminegolden.com/image/cache/catalog/product-images/ahsap-ayakli-koltuk-takimlari/zumrut-koltuk-takimi/zumrut-koltuk-takimi_inegol_mobilya_ai_20260720144318-1300x650.jpg",
        "https://image.mobilyaminegolden.com/image/cache/catalog/product-images/ahsap-ayakli-koltuk-takimlari/zumrut-koltuk-takimi/zumrut-koltuk-takimi_inegol_mobilya_ai_20260720144318-2048x1024.jpg",
        "https://image.mobilyaminegolden.com/image/cache/catalog/product-images/bohem-koltuk-takimlari/pablo-koltuk-takimi/69fe866ab52c4_69d4ca743fec4_pablo-koltuk-takimi-1-bohem-117496-17-B-1300x650h.jpg"
    ],
    "asya": [
        "https://image.mobilyaminegolden.com/image/cache/catalog/product-images/yatak-odasi-takimlari/asel-yatak-odasi/asel-yatak-odasi-1-2048x1024w.jpg",
        "https://image.mobilyaminegolden.com/image/cache/catalog/product-images/modern-yatak-odalari/asel-yatak-odasi/asel-yatak-odasi-1-1300x650h.jpg",
        "https://image.mobilyaminegolden.com/image/cache/catalog/product-images/yatak-odasi-takimlari/asel-yatak-odasi/asel-yatak-odasi-1-1300x650.jpg"
    ]
}

def download_hd_image(url_list, target_filename):
    for u in url_list:
        try:
            req = urllib.request.Request(u, headers=headers)
            with urllib.request.urlopen(req) as resp:
                data = resp.read()
                size_kb = len(data) / 1024
                if size_kb > 40:
                    with open(target_filename, 'wb') as f:
                        f.write(data)
                    print(f"SUCCESS {target_filename}: {size_kb:.1f} KB from {u}")
                    return True
                else:
                    print(f"SKIPPED {u}: Only {size_kb:.1f} KB")
        except Exception as e:
            print(f"FAIL {u}: {e}")
    return False

# Download Zumrut HD images
download_hd_image(product_image_sources["zumrut"], "assets/zumrut_main.jpg")
download_hd_image(product_image_sources["zumrut"][1:], "assets/zumrut_1.jpg")

# Download Asya HD images
download_hd_image(product_image_sources["asya"], "assets/asya_hd_main.jpg")

# Verify asset sizes
print("\n--- VERIFYING DOWNLOADED ASSETS ---")
for fn in ["assets/p_zarayemeko_1e8f6324.jpg", "assets/pablo_main.jpg", "assets/zumrut_main.jpg", "assets/asya_hd_main.jpg"]:
    if os.path.exists(fn):
        sz = os.path.getsize(fn) / 1024
        print(f"{fn}: {sz:.1f} KB -> {'VALID HD' if sz > 40 else 'BLURRY/SMALL'}")
