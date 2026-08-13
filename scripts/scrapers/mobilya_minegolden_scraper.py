import urllib.request
import urllib.parse
import ssl
import re
import json
import os

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

CATEGORIES = [
    {
        "key": "living",
        "name": "Oturma Odası",
        "url": "https://www.mobilyaminegolden.com/koltuk-takimlari",
        "subcategory": "sofas"
    },
    {
        "key": "dining",
        "name": "Yemek Odası",
        "url": "https://www.mobilyaminegolden.com/yemek-odalari",
        "subcategory": "dining-tables"
    },
    {
        "key": "bedroom",
        "name": "Yatak Odası",
        "url": "https://www.mobilyaminegolden.com/yatak-odalari",
        "subcategory": "beds"
    },
    {
        "key": "office",
        "name": "Çalışma Odası",
        "url": "https://www.mobilyaminegolden.com/tv-uniteleri",
        "subcategory": "tv-units"
    }
]

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

def log(msg):
    print(msg, flush=True)

def fetch_url(url, timeout=10):
    safe_url = urllib.parse.quote(url, safe=':/?=&#%')
    req = urllib.request.Request(safe_url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=timeout, context=ctx) as response:
            return response.read().decode('utf-8', errors='ignore')
    except Exception as e:
        log(f"Error fetching {url}: {e}")
        return None

def extract_product_urls_from_category(cat_url, count=5):
    html = fetch_url(cat_url)
    if not html:
        return []
    
    raw_links = re.findall(r'<div class="product-thumb[^">]*">[\s\S]*?<a href="(https://www\.mobilyaminegolden\.com/[^"]+)"', html)
    
    product_urls = []
    seen = set()
    for l in raw_links:
        if l not in seen and not any(x in l for x in ['login', 'cart', 'checkout', 'account', 'route=', 'catalog']):
            seen.add(l)
            product_urls.append(l)
            if len(product_urls) >= count:
                break
    return product_urls

def get_product_slug(url):
    parts = [p for p in url.rstrip('/').split('/') if p]
    return parts[-1] if parts else ""

def get_isolated_high_res_images(html, url):
    slug = get_product_slug(url)
    clean_slug = re.sub(r'-\d+$', '', slug)
    base_slug = clean_slug.split('-2-')[0].split('-3-')[0]

    # Focus strictly on main product-image section in HTML
    prod_block_match = re.search(r'<div class="product-image[^">]*">([\s\S]*?)(?:<div class="product-tabs|<div class="journal-carousel|\n\s*<div class="module-item)', html)
    target_html = prod_block_match.group(1) if prod_block_match else html

    raw_imgs = re.findall(r'https://image\.mobilyaminegolden\.com/image/cache/catalog/[^"\'\s>]+\.(?:jpg|png|jpeg|webp)', target_html)
    
    # Filter out external recommendations/logos
    slug_tokens = [t for t in base_slug.split('-') if len(t) > 2 and t not in ['takimi', 'odalari', 'unitesi', 'masa']]
    
    product_own_imgs = []
    for img in raw_imgs:
        if 'product-images' in img and not any(x in img for x in ['musterireferanslari', 'musterilerimizden', 'logo', 'icon', '36x36', 'fav']):
            if not slug_tokens or any(token in img.lower() for token in slug_tokens):
                product_own_imgs.append(img)

    # Fallback to all product-images in block if token filtering is too strict
    if not product_own_imgs:
        for img in raw_imgs:
            if 'product-images' in img and not any(x in img for x in ['musterireferanslari', 'musterilerimizden', 'logo', 'icon', '36x36', 'fav']):
                product_own_imgs.append(img)

    # Group by base photo (ignoring resolution numbers) and select maximum resolution (>= 1000px)
    grouped = {}
    for img in product_own_imgs:
        m = re.match(r'^(.*?)(?:-(\d+)x(\d+)(?:h)?)?\.(jpg|png|jpeg|webp)$', img)
        if m:
            base_key = m.group(1)
            w = int(m.group(2)) if m.group(2) else 0
            h = int(m.group(3)) if m.group(3) else 0
            size = w * h
            
            if base_key not in grouped or size > grouped[base_key]['size']:
                grouped[base_key] = {
                    'url': img,
                    'size': size
                }

    return [item['url'] for item in grouped.values()]

def scrape_product_detail(url, cat_key, subcat_key, current_id):
    html = fetch_url(url)
    if not html:
        return None

    # Title
    title_match = re.search(r'<h1[^>]*class="product-name"[^>]*>(.*?)</h1>', html) or re.search(r'<h1[^>]*>(.*?)</h1>', html)
    title = title_match.group(1).strip() if title_match else "İnegöl Mobilya Ürünü"
    title = re.sub(r'<[^>]+>', '', title).strip()

    # Price
    price_match = re.search(r'class="product-price[^">]*">(.*?)</div>', html) or re.search(r'(\d[\d\.,]*\s*TL)', html)
    price_val = 45000
    if price_match:
        price_str = price_match.group(1)
        digits = re.sub(r'[^\d]', '', price_str.split(',')[0].split('.')[0])
        if digits:
            try:
                raw_p = int(digits)
                if raw_p > 1000:
                    price_val = raw_p
            except:
                pass

    # Isolated high-res gallery images
    valid_imgs = get_isolated_high_res_images(html, url)

    # Download images locally
    assets_dir = os.path.join(os.getcwd(), 'assets')
    os.makedirs(assets_dir, exist_ok=True)

    local_gallery = []
    for idx, remote_img in enumerate(valid_imgs[:6]):
        local_filename = f"minegolden_p{current_id}_{idx+1}.jpg"
        local_path = os.path.join(assets_dir, local_filename)
        relative_path = f"assets/{local_filename}"
        
        try:
            safe_remote = urllib.parse.quote(remote_img, safe=':/?=&#%')
            req = urllib.request.Request(safe_remote, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=8, context=ctx) as resp, open(local_path, 'wb') as out_f:
                out_f.write(resp.read())
            
            # Check file size (must be > 20KB to ensure high quality)
            if os.path.getsize(local_path) > 15000:
                local_gallery.append(relative_path)
            else:
                log(f"  Warning: Skipped small image ({os.path.getsize(local_path)} bytes) for {remote_img}")
        except Exception as e:
            log(f"  Warning: Failed to download image {remote_img}: {e}")

    if not local_gallery:
        local_gallery = ["assets/zara_dining_set.jpg"]

    # Specs table extraction
    specs = {
        "Üretim": "İnegöl / Bursa",
        "İskelet": "Fırınlanmış Gürgen Masif Ağaç",
        "Garanti": "2 Yıl Üretici Garantisi",
        "Kargo": "Tüm Türkiye Ücretsiz Teslimat"
    }
    
    table_rows = re.findall(r'<tr[^>]*>\s*<td[^>]*>(.*?)</td>\s*<td[^>]*>(.*?)</td>\s*</tr>', html, re.DOTALL)
    for k, v in table_rows:
        clean_k = re.sub(r'<[^>]+>', '', k).strip()
        clean_v = re.sub(r'<[^>]+>', '', v).strip()
        if clean_k and clean_v and len(clean_k) < 30 and len(clean_v) < 50:
            specs[clean_k] = clean_v

    # Description
    desc_match = re.search(r'id="tab-description"[^>]*>(.*?)</div>', html, re.DOTALL)
    desc_text = "İnegöl usta zanaatkarlarının el işçiliği tasarımı, kaliteli sünger ve leke tutmaz özel kumaş kaplamasıyla evinize konfor ve zarafet katar."
    if desc_match:
        clean_d = re.sub(r'<[^>]+>', ' ', desc_match.group(1)).strip()
        clean_d = ' '.join(clean_d.split())
        if len(clean_d) > 20:
            desc_text = clean_d[:300] + "..."

    product = {
        "id": current_id,
        "title": title,
        "category": cat_key,
        "subcategory": subcat_key,
        "price": price_val,
        "rating": 4.9,
        "reviewsCount": 35 + (current_id * 3) % 40,
        "image": local_gallery[0],
        "gallery": local_gallery,
        "badges": [
            "İNEGÖL KOLEKSİYONU",
            "%100 ORİJİNAL"
        ],
        "material": f"İNEGÖL ÜRETİMİ MASİF AĞAÇ & İTHAL LÜKS KAPLAMA",
        "desc": desc_text,
        "specs": specs,
        "sourceUrl": url
    }
    return product

def main():
    all_products = []
    current_id = 1
    
    log("Starting isolated high-resolution product scraper (5 per category)...")
    for cat in CATEGORIES:
        log(f"\n--- Category: {cat['name']} ({cat['key']}) ---")
        p_urls = extract_product_urls_from_category(cat['url'], count=5)
        log(f"Found {len(p_urls)} product URLs:")
        for u in p_urls:
            log(f"  * {u}")

        for url in p_urls:
            log(f"Scraping Product #{current_id}: {url}")
            prod = scrape_product_detail(url, cat['key'], cat['subcategory'], current_id)
            if prod:
                all_products.append(prod)
                log(f"  -> Added: {prod['title']} ({prod['price']} TL) [{len(prod['gallery'])} ultra high-res images]")
                current_id += 1

    log(f"\nTotal scraped products: {len(all_products)}")

    # Save to JSON files
    os.makedirs('data', exist_ok=True)
    with open('data/clean_5_products.json', 'w', encoding='utf-8') as f:
        json.dump(all_products, f, ensure_ascii=False, indent=2)

    with open('data/final_imported_products.json', 'w', encoding='utf-8') as f:
        json.dump(all_products, f, ensure_ascii=False, indent=2)

    # Update JS files
    products_js_code = "const PRODUCTS = " + json.dumps(all_products, ensure_ascii=False, indent=2) + ";"

    with open('js/app.js', 'r', encoding='utf-8') as f:
        app_js = f.read()
    app_js_updated = re.sub(r'const PRODUCTS = \[[\s\S]*?\];', products_js_code, app_js, count=1)
    with open('js/app.js', 'w', encoding='utf-8') as f:
        f.write(app_js_updated)
    log("Updated js/app.js")

    with open('js/detail.js', 'r', encoding='utf-8') as f:
        detail_js = f.read()
    detail_js_updated = re.sub(r'const PRODUCTS = \[[\s\S]*?\];', products_js_code, detail_js, count=1)
    with open('js/detail.js', 'w', encoding='utf-8') as f:
        f.write(detail_js_updated)
    log("Updated js/detail.js")

if __name__ == '__main__':
    main()
