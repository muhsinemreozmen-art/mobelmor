import json
import re
import sys

# Set stdout to UTF-8
sys.stdout.reconfigure(encoding='utf-8')

with open("js/app.js", "r", encoding="utf-8") as f:
    app_js = f.read()

# Extract PRODUCTS
start = app_js.find("const PRODUCTS = [")
if start != -1:
    # find matching bracket
    bracket_level = 0
    end = -1
    for i in range(start + len("const PRODUCTS = "), len(app_js)):
        if app_js[i] == '[':
            bracket_level += 1
        elif app_js[i] == ']':
            bracket_level -= 1
            if bracket_level == 0:
                end = i + 1
                break
    
    json_str = app_js[start + len("const PRODUCTS = "):end]
    products = json.loads(json_str)
    print(f"Successfully loaded {len(products)} products.")
else:
    print("Could not find PRODUCTS")
    products = []

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

prod_by_id = {p['id']: p for p in products}

print("\n--- ALL PRODUCTS LIST ---")
for p in products:
    print(f"ID {p['id']:2d} | Category: {p['category']:8s} | Sub: {p.get('subcategory',''):12s} | Type: {p.get('productType',''):5s} | Image: {p['image']:32s} | Title: {p['title']}")

print("\n\n=======================================================")
print("CHECKING HERO SLIDER AND CARDS IN INDEX.HTML")
print("=======================================================")

with open("index.html", "r", encoding="utf-8") as f:
    index_html = f.read()

# Let's inspect each hero slide in index.html
hero_slide_matches = re.finditer(r'<div[^>]*class=["\']slider-slide[^"\']*["\'][^>]*>(.*?)<!--\s*Slide\s*\d+|<!--\s*Slider Controls|<div[^>]*class=["\']slider-dots', index_html, re.DOTALL)

slide_blocks = re.findall(r'<div[^>]*class=["\']slider-slide(?:\s+active)?["\'][^>]*>(.*?)</div>\s*</div>\s*</div>\s*(?=<div[^>]*class=["\']slider-slide|<!--\s*Slider Controls|<div[^>]*class=["\']slider-dots)', index_html, re.DOTALL)

print(f"Found {len(slide_blocks)} hero slides in index.html.")
for idx, slide in enumerate(slide_blocks, 1):
    h2_m = re.search(r'<h2[^>]*>(.*?)</h2>', slide, re.DOTALL)
    h2 = re.sub(r'<[^>]+>', ' ', h2_m.group(1)).strip() if h2_m else ""
    h2 = re.sub(r'\s+', ' ', h2)
    
    img_m = re.search(r'<img[^>]+class=["\'][^"\']*slide-bg-img[^"\']*["\'][^>]+src=["\']([^"\']+)["\']', slide) or re.search(r'<img[^>]+src=["\']([^"\']+)["\']', slide)
    img_src = img_m.group(1) if img_m else ""
    
    a_m = re.search(r'<a[^>]+href=["\']([^"\']+)["\'][^>]*>(.*?)</a>', slide, re.DOTALL)
    href = a_m.group(1) if a_m else ""
    btn_text = re.sub(r'<[^>]+>', '', a_m.group(2)).strip() if a_m else ""
    
    pid_m = re.search(r'id=(\d+)', href)
    pid = int(pid_m.group(1)) if pid_m else None
    
    print(f"\n[Hero Slide #{idx}]")
    print(f"  Title in Slide: '{h2}'")
    print(f"  Image in Slide: '{img_src}'")
    print(f"  Button: '{btn_text}' -> '{href}' (Linked ID: {pid})")
    
    target_p = prod_by_id.get(pid)
    if target_p:
        print(f"  -> Currently opens DB Product: ID={target_p['id']} - '{target_p['title']}' (Image: {target_p['image']})")
    else:
        print(f"  -> Currently opens: INVALID ID {pid}")

print("\n\n=======================================================")
print("CHECKING ALL SHOWCASE CARDS AND CAROUSELS IN INDEX.HTML")
print("=======================================================")

# Find all <a> tags with urun-detay
card_matches = re.finditer(r'<a\s+[^>]*href=["\'](urun-detay\.html\?id=(\d+)[^"\']*)["\'][^>]*>(.*?)</a>', index_html, re.DOTALL)

for cm in card_matches:
    href = cm.group(1)
    pid = int(cm.group(2))
    content = cm.group(3)
    
    title_m = re.search(r'<h\d[^>]*>(.*?)</h\d>', content, re.DOTALL)
    card_title = re.sub(r'<[^>]+>', ' ', title_m.group(1)).strip() if title_m else ""
    card_title = re.sub(r'\s+', ' ', card_title)
    
    img_m = re.search(r'<img[^>]+src=["\']([^"\']+)["\']', content)
    img_src = img_m.group(1) if img_m else ""
    
    target_p = prod_by_id.get(pid)
    
    print(f"\nCard in index.html:")
    print(f"  Card Title: '{card_title}' | Card Img: '{img_src}'")
    print(f"  Card Href:  '{href}' (ID: {pid})")
    if target_p:
        print(f"  Target DB:  ID={target_p['id']} - '{target_p['title']}' (DB Img: {target_p['image']})")
        if card_title and card_title.lower() not in target_p['title'].lower() and target_p['title'].lower() not in card_title.lower():
            print(f"  ❌ MISMATCH DETECTED!")
    else:
        print(f"  ❌ TARGET ID {pid} NOT IN DB!")
