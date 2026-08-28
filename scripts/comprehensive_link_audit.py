import json
import re
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Load products from js/app.js
with open("js/app.js", "r", encoding="utf-8") as f:
    app_js = f.read()

start = app_js.find("const PRODUCTS = [")
bracket_level = 0
for i in range(start + len("const PRODUCTS = "), len(app_js)):
    if app_js[i] == '[': bracket_level += 1
    elif app_js[i] == ']':
        bracket_level -= 1
        if bracket_level == 0:
            end = i + 1
            break

products = json.loads(app_js[start + len("const PRODUCTS = "):end])
prod_by_id = {p['id']: p for p in products}

def slugify(s):
    s = s.lower()
    tr_map = {'ç': 'c', 'ğ': 'g', 'ı': 'i', 'i': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u', 'â': 'a', 'î': 'i', 'û': 'u'}
    for k, v in tr_map.items():
        s = s.replace(k, v)
    s = re.sub(r'[^a-z0-9\s-]', '', s)
    s = re.sub(r'\s+', '-', s).strip('-')
    return s

for p in products:
    p['slug'] = slugify(p['title'])

# Look at all html and js files
files_to_check = [
    "index.html", "kategori.html", "urun-detay.html", "kumas-kartelasi.html",
    "category.html", "product-detail.html", "giris-yap.html", "uye-ol.html",
    "hesabim.html", "siparislerim.html", "sss.html", "garanti-iade.html",
    "js/app.js", "js/detail.js", "js/store-service.js"
]

print("=== AUDITING ALL FILES FOR PRODUCT LINKS AND MISMATCHES ===")

for filepath in files_to_check:
    if not os.path.exists(filepath):
        continue
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Find all product links
    # Matches: urun-detay.html?id=X, product-detail.html?id=X
    link_matches = list(re.finditer(r'(?:href|src|data-url)=["\']([^"\']*(?:urun-detay|product-detail)\.html\?id=(\d+)[^"\']*)["\']', content))
    
    if link_matches:
        print(f"\n--- File: {filepath} ({len(link_matches)} product links) ---")
        for lm in link_matches:
            full_url = lm.group(1)
            pid = int(lm.group(2))
            
            # extract 200 chars before and after for context
            ctx_start = max(0, lm.start() - 250)
            ctx_end = min(len(content), lm.end() + 250)
            ctx = content[ctx_start:ctx_end]
            
            title_m = re.search(r'<h\d[^>]*>(.*?)</h\d>', ctx, re.DOTALL)
            ctx_title = re.sub(r'<[^>]+>', ' ', title_m.group(1)).strip() if title_m else ""
            ctx_title = re.sub(r'\s+', ' ', ctx_title)
            
            img_m = re.search(r'<img[^>]+src=["\']([^"\']+)["\']', ctx)
            ctx_img = img_m.group(1) if img_m else ""
            
            target = prod_by_id.get(pid)
            target_title = target['title'] if target else "NOT FOUND"
            
            # Check slug in URL
            slug_m = re.search(r'slug=([a-z0-9-]+)', full_url)
            url_slug = slug_m.group(1) if slug_m else ""
            
            is_mismatch = False
            mismatch_reason = ""
            
            if target:
                if url_slug and url_slug != target['slug']:
                    is_mismatch = True
                    mismatch_reason = f"Slug mismatch: URL has '{url_slug}', but ID {pid} is '{target['slug']}' ({target_title})"
                elif ctx_title and not any(w in target_title.lower() for w in re.findall(r'\w{4,}', ctx_title.lower())):
                    is_mismatch = True
                    mismatch_reason = f"Title mismatch: Card shows '{ctx_title}', but links to ID {pid} ({target_title})"
            else:
                is_mismatch = True
                mismatch_reason = f"ID {pid} does not exist in DB!"
            
            if is_mismatch:
                print(f"  ❌ MISMATCH: {full_url}")
                print(f"     Reason: {mismatch_reason}")
                print(f"     Context Title: '{ctx_title}' | Context Img: '{ctx_img}'")
            else:
                # print(f"  ✓ OK: ID {pid} ({target_title})")
                pass
