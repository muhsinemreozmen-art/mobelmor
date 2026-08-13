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

CATEGORIES = [
    {"key": "living", "name": "Oturma Odası", "url": "https://www.mobilyaminegolden.com/koltuk-takimlari"},
    {"key": "dining", "name": "Yemek Odası", "url": "https://www.mobilyaminegolden.com/yemek-odalari"},
    {"key": "bedroom", "name": "Yatak Odası", "url": "https://www.mobilyaminegolden.com/yatak-odalari"},
    {"key": "office", "name": "Çalışma Odası", "url": "https://www.mobilyaminegolden.com/tv-uniteleri"}
]

global_seen_urls = set()

for cat in CATEGORIES:
    log(f"\n==========================================")
    log(f"Category: {cat['name']} ({cat['key']}) -> {cat['url']}")
    req = urllib.request.Request(cat['url'], headers=HEADERS)
    with urllib.request.urlopen(req, timeout=10, context=ctx) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        
        content_m = re.search(r'<div id="content"[^>]*>([\s\S]*?)<footer', html)
        c_html = content_m.group(1) if content_m else html
        
        name_links = re.findall(r'<div class="name"[^>]*>\s*<a href="(https://www\.mobilyaminegolden\.com/[^"]+)"[^>]*>(.*?)</a>', c_html, re.DOTALL)
        
        valid_products = []
        for link, p_name in name_links:
            clean_l = link.split('?')[0].rstrip('/')
            clean_n = re.sub(r'<[^>]+>', '', p_name).strip()
            
            # Skip invalid, javascript, subcategory or menu links
            if clean_l in global_seen_urls or clean_l == cat['url']:
                continue
            if any(x in clean_l for x in ['javascript', 'route=', 'catalog', 'account', 'indirimli', 'teshir', 'stok', 'paketler', 'modeller', 'tekil', 'bazalar', 'yataklar', 'bebek', 'genc']):
                continue
            # Skip subcategory paths e.g. /koltuk-takimlari/ahsap-ayakli-koltuklar
            rel_path = clean_l.replace('https://www.mobilyaminegolden.com/', '')
            if '/' in rel_path:
                continue
                
            global_seen_urls.add(clean_l)
            valid_products.append((clean_n, clean_l))
            if len(valid_products) >= 5:
                break
                
        log(f"Extracted {len(valid_products)} 100% Valid Unique Products:")
        for idx, (p_title, p_url) in enumerate(valid_products, 1):
            log(f"  #{idx}: {p_title} -> {p_url}")
