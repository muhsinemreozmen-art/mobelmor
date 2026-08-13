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

cats = [
    ("living", "https://www.mobilyaminegolden.com/koltuk-takimlari"),
    ("dining", "https://www.mobilyaminegolden.com/yemek-odalari"),
    ("bedroom", "https://www.mobilyaminegolden.com/yatak-odalari"),
    ("office", "https://www.mobilyaminegolden.com/tv-uniteleri")
]

for cat_name, url in cats:
    log(f"\n==========================================")
    log(f"Category: {cat_name} -> {url}")
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=10, context=ctx) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            
            # Find product-layout or product-thumb containers in main product grid
            # OpenCart grid: <div class="product-layout product-grid...">...</div>
            prod_items = re.findall(r'<div class="product-layout[^">]*">([\s\S]*?)<div class="button-group', html)
            if not prod_items:
                prod_items = re.findall(r'<div class="product-thumb[^">]*">([\s\S]*?)</div>\s*</div>', html)
                
            log(f"Found {len(prod_items)} product layout items")
            seen = set()
            count = 0
            for item in prod_items:
                # Find name link inside item
                name_m = re.search(r'class="name"[^>]*>\s*<a href="(https://www\.mobilyaminegolden\.com/[^"]+)"[^>]*>(.*?)</a>', item, re.DOTALL)
                if not name_m:
                    name_m = re.search(r'<a href="(https://www\.mobilyaminegolden\.com/[^"]+)"[^>]*>(.*?)</a>', item, re.DOTALL)
                    
                if name_m:
                    p_url = name_m.group(1).split('?')[0].rstrip('/')
                    p_title = re.sub(r'<[^>]+>', '', name_m.group(2)).strip()
                    
                    if p_url not in seen and p_title and not any(x in p_url for x in ['javascript', 'route=', 'catalog', 'account']):
                        seen.add(p_url)
                        count += 1
                        log(f"  #{count}: {p_title} -> {p_url}")
                        if count >= 5:
                            break
    except Exception as e:
        log(f"Error: {e}")
