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

test_urls = [
    "https://www.mobilyaminegolden.com/soft-aynali-konsol-teshirden",
    "https://www.mobilyaminegolden.com/icon-yuvarlak-masa-sandalye",
    "https://www.mobilyaminegolden.com/lisa-tv-unitesi"
]

for url in test_urls:
    log(f"\n==========================================")
    log(f"URL: {url}")
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=10, context=ctx) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            
            # Find the main product-image block or gallery block
            # OpenCart Journal 3 structure:
            # 1. Main image container: <div class="product-image...">
            # 2. Thumbnail slider: <div class="swiper-wrapper">...</div>
            # 3. Lightgallery data attribute or href links
            
            # Search for image URLs inside main product-image block
            p_img_match = re.search(r'<div class="product-image[^">]*">([\s\S]*?)(?:<div class="product-tabs|<div class="journal-carousel|\n\s*<div class="module-item)', html)
            if p_img_match:
                block = p_img_match.group(1)
                imgs = re.findall(r'https://image\.mobilyaminegolden\.com/image/cache/catalog/[^"\'\s>]+\.(?:jpg|png|jpeg|webp)', block)
                log(f"Product Image Block extracted {len(imgs)} raw image URLs:")
                for i in set(imgs):
                    log(f"  - {i}")
            else:
                log("Could not find product-image container block! Printing all catalog images:")
                all_imgs = re.findall(r'https://image\.mobilyaminegolden\.com/image/cache/catalog/[^"\'\s>]+\.(?:jpg|png|jpeg|webp)', html)
                log(f"Total catalog images on page: {len(set(all_imgs))}")
                for i in list(set(all_imgs))[:10]:
                    log(f"  - {i}")

    except Exception as e:
        log(f"Error: {e}")
