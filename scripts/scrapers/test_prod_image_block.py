import urllib.request
import urllib.parse
import ssl
import re

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
}

def log(msg):
    print(msg, flush=True)

url = "https://www.mobilyaminegolden.com/icon-yuvarlak-masa-sandalye"
req = urllib.request.Request(url, headers=HEADERS)
with urllib.request.urlopen(req, timeout=10, context=ctx) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

prod_block_match = re.search(r'<div class="product-image[^">]*">([\s\S]*?)(?:<div class="product-details|<div id="product"|<div class="product-tabs|<div id="product-related)', html)
target_html = prod_block_match.group(1) if prod_block_match else html

raw_imgs = re.findall(r'https://image\.mobilyaminegolden\.com/image/cache/catalog/[^"\'\s>]+\.(?:jpg|png|jpeg|webp)', target_html)

grouped = {}
for img in raw_imgs:
    img_lower = img.lower()
    # Exclude only user avatars, customer reviews, site logo or tiny favicon/icons
    if any(x in img_lower for x in ['musterireferanslari', 'musterilerimizden', 'logo.png', 'logo.jpg', '36x36', 'favicon', 'avatar']):
        continue
    
    size_m = re.search(r'-(\d+)x(\d+)(?:[a-z])?\.(?:jpg|png|jpeg|webp)$', img)
    if size_m:
        w = int(size_m.group(1))
        h = int(size_m.group(2))
        size = w * h
        base_key = img[:size_m.start()]
        clean_base_key = re.sub(r'_inegol_mobilya$', '', base_key)
        
        if clean_base_key not in grouped or size > grouped[clean_base_key]['size']:
            grouped[clean_base_key] = {
                'url': img,
                'size': size,
                'width': w
            }

sorted_items = sorted(grouped.values(), key=lambda x: x['width'], reverse=True)
log(f"Extracted {len(sorted_items)} distinct HD images for {url}:")
for item in sorted_items:
    log(f"  [{item['width']}px] -> {item['url']}")
