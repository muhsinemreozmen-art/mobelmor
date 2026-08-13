import urllib.request
import re

urls_to_check = [
    "https://www.mobilyaminegolden.com/yatak-odasi-takimlari",
    "https://www.mobilyaminegolden.com/asya-yatak-odasi-takimi",
    "https://www.mobilyaminegolden.com/asel-yatak-odasi-takimi"
]

headers = {'User-Agent': 'Mozilla/5.0'}

found_imgs = []
for u in urls_to_check:
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req) as resp:
            html = resp.read().decode('utf-8')
            matches = re.findall(r'(https?://[^\s"\'<>]+\.(?:jpg|jpeg|png))', html, re.I)
            for m in matches:
                if 'catalog/product-images' in m and not re.search(r'-\d{2,3}x\d{2,3}[w_h]?\.', m):
                    found_imgs.append(m)
    except Exception as e:
        print(f"Error {u}: {e}")

print("Found product images:")
for img in set(found_imgs):
    print(" -", img)
