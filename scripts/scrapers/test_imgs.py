import urllib.request
import re

url = "https://www.mobilyaminegolden.com/gold-koltuk-takimi"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

img_urls = re.findall(r'https://image\.mobilyaminegolden\.com/image/cache/catalog/product-images/[^"\'\s>]+', html)

print(f"Found {len(img_urls)} product image URLs:")
unique_imgs = []
for u in img_urls:
    if u not in unique_imgs:
        unique_imgs.append(u)

for u in unique_imgs[:10]:
    print(" - URL:", u)
    try:
        r = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'})
        data = urllib.request.urlopen(r, timeout=5).read()
        print(f"   [SUCCESS] Downloaded {len(data)} bytes")
    except Exception as e:
        print(f"   [FAILED] Error: {e}")
