import urllib.request
import urllib.parse
import ssl
import re

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

def log(msg):
    print(msg, flush=True)

def get_product_slug(url):
    parts = [p for p in url.rstrip('/').split('/') if p]
    return parts[-1] if parts else ""

def get_isolated_product_images(html, url):
    slug = get_product_slug(url)
    clean_slug = re.sub(r'-\d+$', '', slug)
    base_slug = clean_slug.split('-2-')[0].split('-3-')[0]

    # Find the main product-image container block in HTML to exclude recommendations
    prod_block_match = re.search(r'<div class="product-image[^">]*">([\s\S]*?)(?:<div class="product-tabs|<div class="journal-carousel|\n\s*<div class="module-item)', html)
    
    if prod_block_match:
        target_html = prod_block_match.group(1)
    else:
        target_html = html

    raw_imgs = re.findall(r'https://image\.mobilyaminegolden\.com/image/cache/catalog/[^"\'\s>]+\.(?:jpg|png|jpeg|webp)', target_html)
    
    grouped = {}
    for img in raw_imgs:
        if any(x in img for x in ['musterireferanslari', 'musterilerimizden', 'logo', 'icon', '36x36', 'fav']):
            continue
        
        m = re.match(r'^(.*?)(?:-(\d+)x(\d+)(?:h)?)?\.(jpg|png|jpeg|webp)$', img)
        if m:
            base_key = m.group(1)
            w = int(m.group(2)) if m.group(2) else 0
            h = int(m.group(3)) if m.group(3) else 0
            size = w * h
            
            # Prefer sizes >= 800px or maximum available
            if base_key not in grouped or size > grouped[base_key]['size']:
                grouped[base_key] = {
                    'url': img,
                    'size': size,
                    'width': w
                }

    result = [item['url'] for item in grouped.values()]
    return result

urls = [
    "https://www.mobilyaminegolden.com/gold-koltuk-takimi",
    "https://www.mobilyaminegolden.com/zumrut-koltuk-takimi-2-3130",
    "https://www.mobilyaminegolden.com/bohem-koltuk-takimi-natural"
]

for u in urls:
    log(f"Fetching {u}...")
    req = urllib.request.Request(u, headers=HEADERS)
    html = urllib.request.urlopen(req, timeout=10, context=ctx).read().decode('utf-8')
    imgs = get_isolated_product_images(html, u)
    log(f"Isolated High-Res Images Count for {get_product_slug(u)}: {len(imgs)}")
    for i in imgs:
        log(f"  * {i}")
