import urllib.request
import urllib.parse
import ssl
import re

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7'
}

def log(msg):
    print(msg, flush=True)

url = "https://www.mobilyaminegolden.com/gold-koltuk-takimi"
log(f"Fetching product detail page: {url}")
req = urllib.request.Request(url, headers=HEADERS)
try:
    with urllib.request.urlopen(req, timeout=10, context=ctx) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        log(f"Fetched HTML size: {len(html)} characters")

        # Search for Journal 3 LightGallery JSON or data attributes
        lg_items = re.findall(r'data-gallery="([^"]+)"', html)
        log(f"Found data-gallery attributes: {len(lg_items)}")

        # Search for lightgallery gallery elements
        gallery_divs = re.findall(r'class="[^"]*lightgallery-[^"]*"[^>]*', html)
        log(f"Found lightgallery divs: {len(gallery_divs)}")

        # Print all matches of image cache catalog in HTML
        all_imgs = set(re.findall(r'https://image\.mobilyaminegolden\.com/image/cache/catalog/[^"\'\s>]+\.(?:jpg|png|jpeg|webp)', html))
        log(f"Found total unique image URLs in page HTML: {len(all_imgs)}")
        
        # Categorize images by folder path
        for img in list(all_imgs)[:15]:
            log(f"  Img: {img}")

except Exception as e:
    log(f"Error fetching detail: {e}")

cat_url = "https://www.mobilyaminegolden.com/koltuk-takimlari"
log(f"\nFetching category page: {cat_url}")
cat_req = urllib.request.Request(cat_url, headers=HEADERS)
try:
    with urllib.request.urlopen(cat_req, timeout=10, context=ctx) as c_resp:
        c_html = c_resp.read().decode('utf-8', errors='ignore')
        log(f"Fetched Category HTML size: {len(c_html)} characters")
        
        # Extract product names and links
        names = re.findall(r'<div class="name"[^>]*>\s*<a href="([^"]+)"[^>]*>(.*?)</a>', c_html, re.DOTALL)
        log(f"Extracted product names count: {len(names)}")
        for link, p_name in names:
            clean_name = re.sub(r'<[^>]+>', '', p_name).strip()
            log(f"  Name: {clean_name} -> {link}")

except Exception as e:
    log(f"Error fetching category: {e}")
