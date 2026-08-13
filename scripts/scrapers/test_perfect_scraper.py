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

def fetch_url(url):
    safe_url = urllib.parse.quote(url, safe=':/?=&#%')
    req = urllib.request.Request(safe_url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=10, context=ctx) as resp:
            return resp.read().decode('utf-8', errors='ignore')
    except Exception as e:
        log(f"Error fetching {url}: {e}")
        return None

def extract_main_gallery_images(html, url):
    # 1. Isolate the main product-image container block in HTML
    # This block contains the main product gallery swiper/lightgallery
    prod_block_match = re.search(r'<div class="product-image[^">]*">([\s\S]*?)(?:<div class="product-tabs|<div class="journal-carousel|\n\s*<div class="module-item|\n\s*<div id="product-related)', html)
    
    if prod_block_match:
        target_html = prod_block_match.group(1)
    else:
        # Fallback to product-info container
        target_html = html.split('<div id="product"')[0] if '<div id="product"' in html else html

    # Extract all candidate catalog image URLs from the isolated container
    raw_imgs = re.findall(r'https://image\.mobilyaminegolden\.com/image/cache/catalog/[^"\'\s>]+\.(?:jpg|png|jpeg|webp)', target_html)
    
    grouped = {}
    for img in raw_imgs:
        # Exclude icons, avatars, customer references, logos
        if any(x in img.lower() for x in ['musterireferanslari', 'musterilerimizden', 'logo', 'icon', '36x36', 'fav', 'avatar']):
            continue

        # Group by base photo path (ignoring -WIDTHxHEIGHT dimensions)
        m = re.match(r'^(.*?)(?:-(\d+)x(\d+)(?:h|w)?)?\.(jpg|png|jpeg|webp)$', img)
        if m:
            base_key = m.group(1)
            # Remove trailing numbers like -1, -2 if present before size
            w = int(m.group(2)) if m.group(2) else 0
            h = int(m.group(3)) if m.group(3) else 0
            size = w * h
            
            # Select the variant with maximum resolution
            if base_key not in grouped or size > grouped[base_key]['size']:
                grouped[base_key] = {
                    'url': img,
                    'size': size,
                    'width': w
                }

    # Return list of high-res image URLs
    return [item['url'] for item in grouped.values()]

test_urls = [
    "https://www.mobilyaminegolden.com/gold-koltuk-takimi",
    "https://www.mobilyaminegolden.com/soft-aynali-konsol-teshirden",
    "https://www.mobilyaminegolden.com/icon-yuvarlak-masa-sandalye",
    "https://www.mobilyaminegolden.com/lisa-tv-unitesi",
    "https://www.mobilyaminegolden.com/bohem-dolap",
    "https://www.mobilyaminegolden.com/sahra-tv-unitesi-2-3195"
]

for url in test_urls:
    log(f"\nURL: {url}")
    html = fetch_url(url)
    if html:
        imgs = extract_main_gallery_images(html, url)
        log(f"Extracted {len(imgs)} High-Res Gallery Images:")
        for img in imgs:
            log(f"  * {img}")
