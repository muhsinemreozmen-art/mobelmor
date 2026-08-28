import json
import re

with open("js/app.js", "r", encoding="utf-8") as f:
    app_js = f.read()

# Extract PRODUCTS array from js/app.js
match = re.search(r'const PRODUCTS\s*=\s*(\[\s*\{.*?\}\s*\]);', app_js, re.DOTALL)
if match:
    raw_json = match.group(1)
    # convert JS object to JSON
    raw_json = re.sub(r'([{,])\s*([a-zA-Z0-9_]+)\s*:', r'\1"\2":', raw_json)
    # fix single quotes
    raw_json = re.sub(r":\s*'([^']*)'", r': "\1"', raw_json)
    # remove trailing commas
    raw_json = re.sub(r',\s*([}\]])', r'\1', raw_json)
    try:
        products = json.loads(raw_json)
        print(f"Successfully loaded {len(products)} products from js/app.js")
    except Exception as e:
        print("JSON parse error:", e)
        # fallback regex parse
        products = []
        for p_match in re.finditer(r'{\s*id:\s*(\d+).*?title:\s*["\']([^"\']+)["\'].*?image:\s*["\']([^"\']+)["\'].*?category:\s*["\']([^"\']+)["\']', app_js, re.DOTALL):
            products.append({
                "id": int(p_match.group(1)),
                "title": p_match.group(2),
                "image": p_match.group(3),
                "category": p_match.group(4)
            })
        print(f"Regex extracted {len(products)} products from js/app.js")
else:
    print("Could not find PRODUCTS in js/app.js")
    products = []

prod_by_id = {p["id"]: p for p in products}

with open("index.html", "r", encoding="utf-8") as f:
    index_html = f.read()

print("\n================== 1. HERO SLIDER IN INDEX.HTML ==================")
hero_slides = re.findall(r'(<div[^>]*class=["\'][^"\']*hero-slide[^"\']*["\'][^>]*>.*?</div>\s*</div>\s*</div>)', index_html, re.DOTALL)
if not hero_slides:
    hero_slides = re.findall(r'<div[^>]*class=["\'][^"\']*hero-slide[^"\']*["\'][^>]*>.*?(?=<div[^>]*class=["\'][^"\']*hero-slide|\s*<!--\s*Slider Controls|\s*<div[^>]*class=["\'][^"\']*hero-controls)', index_html, re.DOTALL)

print(f"Found {len(hero_slides)} hero slides in index.html.")
for i, slide in enumerate(hero_slides, 1):
    title_m = re.search(r'<h\d[^>]*>(.*?)</h\d>', slide, re.DOTALL)
    title = re.sub(r'<[^>]+>', ' ', title_m.group(1)).strip() if title_m else "No Title"
    title = re.sub(r'\s+', ' ', title)
    
    img_m = re.search(r'<img[^>]+src=["\']([^"\']+)["\']', slide)
    img_src = img_m.group(1) if img_m else "No Img"
    
    link_m = re.search(r'<a[^>]+href=["\']([^"\']+)["\']', slide)
    link_href = link_m.group(1) if link_m else "No Link"
    
    print(f"\n[Slide {i}]")
    print(f"  Title in Slide: '{title}'")
    print(f"  Image in Slide: '{img_src}'")
    print(f"  Link in Slide:  '{link_href}'")
    
    if "id=" in link_href:
        m = re.search(r"id=(\d+)", link_href)
        pid = int(m.group(1)) if m else None
        target_prod = prod_by_id.get(pid)
        if target_prod:
            print(f"  -> Linked to Prod ID {pid}: '{target_prod['title']}' (Image: '{target_prod['image']}')")
            if target_prod['title'].lower() not in title.lower() and title.lower() not in target_prod['title'].lower():
                print(f"  ⚠️ MISMATCH: Slide displays '{title}' with image '{img_src}', but opens ID {pid} ('{target_prod['title']}')!")
        else:
            print(f"  ⚠️ Linked ID {pid} NOT in products list!")

print("\n================== 2. ALL HARDCODED PRODUCT CARDS IN INDEX.HTML ==================")
all_cards = re.findall(r'<div[^>]*class=["\'][^"\']*(?:product-card|showcase-card|deal-card|vcard|featured-card|swiper-slide)[^"\']*["\'][^>]*>.*?(?=<div[^>]*class=["\'][^"\']*(?:product-card|showcase-card|deal-card|vcard|featured-card|swiper-slide)|</section>|</div>\s*</div>\s*</div>\s*</section>)', index_html, re.DOTALL)

print(f"Found {len(all_cards)} cards/slides.")
for i, card in enumerate(all_cards, 1):
    title_m = re.search(r'<h\d[^>]*class=["\'][^"\']*(?:title|name)[^"\']*["\'][^>]*>(.*?)</h\d>', card, re.DOTALL) or re.search(r'<h\d[^>]*>(.*?)</h\d>', card, re.DOTALL)
    title = re.sub(r'<[^>]+>', ' ', title_m.group(1)).strip() if title_m else ""
    title = re.sub(r'\s+', ' ', title)
    
    img_m = re.search(r'<img[^>]+src=["\']([^"\']+)["\']', card)
    img_src = img_m.group(1) if img_m else "No Img"
    
    link_m = re.search(r'<a[^>]+href=["\']([^"\']+)["\']', card)
    link_href = link_m.group(1) if link_m else "No Link"
    
    if "urun-detay" in link_href or "product-detail" in link_href:
        m = re.search(r"id=(\d+)", link_href)
        pid = int(m.group(1)) if m else None
        target_prod = prod_by_id.get(pid)
        if target_prod:
            # Check if card has title or image mismatch
            if title and target_prod['title'].lower() not in title.lower() and title.lower() not in target_prod['title'].lower():
                print(f"\n⚠️ CARD MISMATCH [Card #{i}]:")
                print(f"   Card Title: '{title}' | Card Image: '{img_src}'")
                print(f"   Card Link:  '{link_href}'")
                print(f"   Target DB:  ID={pid} -> '{target_prod['title']}' | DB Image: '{target_prod['image']}'")
        elif pid:
            print(f"\n⚠️ CARD INVALID ID [Card #{i}]: ID {pid} not found in DB! (Card Title: '{title}')")

print("\n\n================== 3. JS DYNAMIC SLIDERS / SHOWCASE IN JS/APP.JS ==================")
# Look at any dynamic sliders in app.js
deals_m = re.findall(r'renderDeals|renderShowcase|renderFeatured|renderHero|initHeroSlider', app_js)
print("Hero / Showcase functions in app.js:", deals_m)
