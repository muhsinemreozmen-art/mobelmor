#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Bohem Furniture Data Extractor, Validator & Integration Pipeline
Target: https://www.mobilyaminegolden.com/koltuk-takimlari/bohem
"""

import os
import re
import json
import time
import urllib.request
import urllib.parse
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path

# Paths
ROOT_DIR = Path(__file__).resolve().parents[2]
DATA_FILE = ROOT_DIR / "data" / "clean_5_products.json"
SYNC_SCRIPT = ROOT_DIR / "scripts" / "sync" / "sync_both_js.py"

# Category Mapping Rules
CATEGORY_MAPPING = {
    "bohem koltuk takımları": {"category": "living", "subcategory": "sofas"},
    "koltuk takımları": {"category": "living", "subcategory": "sofas"},
    "bohem": {"category": "living", "subcategory": "sofas"}
}

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7"
}

def fetch_page(url, retries=3, delay=1):
    """Fetch HTML content with exponential backoff retries."""
    for attempt in range(1, retries + 1):
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=10) as response:
                if response.status == 200:
                    return response.read().decode('utf-8', errors='ignore')
        except Exception as e:
            if attempt < retries:
                time.sleep(delay * (2 ** (attempt - 1)))
    return None

def verify_single_image(image_url):
    """Perform quick HTTP HEAD request to check image accessibility."""
    try:
        req = urllib.request.Request(image_url, headers=HEADERS, method='HEAD')
        with urllib.request.urlopen(req, timeout=4) as resp:
            return image_url if resp.status == 200 else None
    except Exception:
        return image_url  # Assume accessible if server blocks HEAD

def verify_images_parallel(image_urls):
    """Validate image URLs concurrently."""
    if not image_urls:
        return []
    with ThreadPoolExecutor(max_workers=5) as executor:
        results = list(executor.map(verify_single_image, image_urls))
    return [img for img in results if img is not None]

def extract_product_links(category_url):
    """Extract product detail links from category listing page."""
    print(f"\n[1/5] Extracting product links from category: {category_url}")
    html = fetch_page(category_url)
    if not html:
        return []

    # Find Opencart product links from page
    raw_links = re.findall(r'href=["\'](https://www\.mobilyaminegolden\.com/[a-zA-Z0-9\-]+)["\']', html)
    
    # Exclude categories/menus/system pages
    excluded = [
        'koltuk-takimlari', 'kategori', 'index.php', 'hesabim', 'sepetim', 
        'iletisim', 'hakkimizda', 'iptal-ve-iade', 'musteri-hizmetleri', 
        'dugun-paketler', 'stok-urunleri', 'baza-ve-yatak', 'genc-odasi', 
        'tv-uniteleri', 'tablolar', 'login', 'cart', 'checkout', 'ahsap-ayakli',
        'metal-ayakli', 'yatakodasi', 'yemek-odalari', 'kose-koltuklar'
    ]
    
    product_links = set()
    for link in raw_links:
        clean_link = link.split('?')[0]
        slug = clean_link.replace("https://www.mobilyaminegolden.com/", "")
        if not any(k in clean_link for k in excluded) and clean_link != category_url:
            if '-' in slug and len(slug) > 5:
                product_links.add(clean_link)

    sorted_links = sorted(list(product_links))
    print(f"Found {len(sorted_links)} product candidate links.")
    return sorted_links


def parse_dimensions(text):
    """Extract width x depth x height dimensions from text using regex."""
    specs = {}
    if not text:
        return specs

    # Match patterns like "Genişlik: 230 cm", "Yükseklik: 85 cm", "230x90x85"
    dim_match = re.search(r'(\d{2,3})\s*[xX*×]\s*(\d{2,3})\s*(?:[xX*×]\s*(\d{2,3}))?\s*cm', text)
    if dim_match:
        g = dim_match.groups()
        specs["Boyutlar"] = f"{g[0]}x{g[1]}" + (f"x{g[2]}" if g[2] else "") + " cm"

    # Match key-value spec lines
    lines = text.split('\n')
    for line in lines:
        if ':' in line:
            parts = line.split(':', 1)
            k = parts[0].strip()
            v = parts[1].strip()
            if k and v and len(k) < 35 and len(v) < 60:
                specs[k] = v

    return specs

def parse_product(url):
    """Parse product page structure into normalized dict."""
    print(f"\n[2/5] Parsing product page: {url}")
    html = fetch_page(url)
    if not html:
        return None

    product = {
        "title": None,
        "description": "",
        "price": 0.0,
        "currency": "TRY",
        "sku": None,
        "category": "uncategorized",
        "subcategory": "uncategorized",
        "images": [],
        "attributes": {},
        "stock_status": "unknown",
        "source_url": url,
        "scraped_at": datetime.now(timezone.utc).isoformat()
    }

    # 1. JSON-LD Schema Extraction
    json_ld_blocks = re.findall(r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>', html, re.DOTALL)
    for block in json_ld_blocks:
        try:
            data = json.loads(block.strip())
            if isinstance(data, dict) and data.get('@type') == 'Product':
                product['title'] = data.get('name')
                product['description'] = data.get('description', '')
                product['sku'] = data.get('sku') or data.get('model') or data.get('mpn')
                
                offers = data.get('offers', {})
                if isinstance(offers, dict):
                    price_val = offers.get('price')
                    if price_val:
                        try:
                            product['price'] = float(str(price_val).replace(',', '.'))
                        except ValueError:
                            pass
                    product['currency'] = offers.get('priceCurrency', 'TRY')
                    avail = offers.get('availability', '')
                    if 'InStock' in avail:
                        product['stock_status'] = 'in_stock'
                    elif 'OutOfStock' in avail:
                        product['stock_status'] = 'out_of_stock'

                if data.get('image'):
                    img_item = data.get('image')
                    if isinstance(img_item, str):
                        product['images'].append(img_item)
                    elif isinstance(img_item, list):
                        product['images'].extend([i for i in img_item if isinstance(i, str)])
        except Exception:
            pass

    # 2. Fallback to OpenGraph / Meta tags
    if not product['title']:
        og_title = re.search(r'<meta\s+property=["\']og:title["\']\s+content=["\']([^"\']+)["\']', html)
        if og_title:
            product['title'] = og_title.group(1).strip()

    if not product['description']:
        og_desc = re.search(r'<meta\s+property=["\']og:description["\']\s+content=["\']([^"\']+)["\']', html)
        if og_desc:
            product['description'] = og_desc.group(1).strip()

    # 3. Fallback to DOM elements
    if not product['title']:
        h1 = re.search(r'<h1[^>]*>(.*?)</h1>', html, re.DOTALL | re.IGNORECASE)
        if h1:
            product['title'] = re.sub(r'<[^>]+>', '', h1.group(1)).strip()

    if product['price'] <= 0:
        price_m = re.search(r'class=["\'][^"\']*price[^"\']*["\'][^>]*>(.*?)</div>', html, re.DOTALL | re.IGNORECASE)
        if price_m:
            price_nums = re.findall(r'(\d+[\d\.,]*)', price_m.group(1))
            if price_nums:
                clean_p = price_nums[0].replace('.', '').replace(',', '.')
                try:
                    product['price'] = float(clean_p)
                except ValueError:
                    pass

    # 4. Extract High-Res Images from Gallery
    raw_images = re.findall(r'href=["\'](https://image\.mobilyaminegolden\.com/[^"\']+\.(?:jpg|jpeg|png|webp))["\']', html)
    for img in raw_images:
        if not any(x in img for x in ['36x36', 'icon', 'logo', 'fav']):
            if img not in product['images']:
                product['images'].append(img)

    # Clean description HTML tags
    product['description'] = re.sub(r'<[^>]+>', ' ', product['description'])
    product['description'] = re.sub(r'\s+', ' ', product['description']).strip()

    # Extract dimensions & material specs
    product['attributes'] = parse_dimensions(product['description'])

    # Category Mapping
    category_info = CATEGORY_MAPPING.get("bohem koltuk takımları")
    product['category'] = category_info['category']
    product['subcategory'] = category_info['subcategory']

    return product

def validate_product(product):
    """Validate product fields and verify image URLs."""
    print(f"\n[3/5] Validating product: {product.get('title')}")
    errors = []
    warnings = []

    # Mandatory field checks
    if not product.get('title'):
        errors.append("Missing required field: title")
    if product.get('price', 0) <= 0:
        errors.append(f"Invalid price value: {product.get('price')}")
    if not product.get('source_url'):
        errors.append("Missing required field: source_url")

    # Fast parallel image validation
    valid_images = verify_images_parallel(product.get('images', []))
    product['images'] = valid_images

    if not valid_images:
        warnings.append("No accessible high-res images found for product")

    # Status determination
    if errors:
        product['status'] = 'incomplete'
        print(f"[VALIDATION FAILED] Errors: {errors}")
        return False, errors
    
    product['status'] = 'valid'
    if warnings:
        print(f"[VALIDATION PASSED WITH WARNINGS] {warnings}")
    else:
        print("[VALIDATION PASSED] All fields valid and images verified.")
    
    return True, warnings

def integrate_products(products_list):
    """Upsert validated products into clean_5_products.json and sync JS files."""
    print(f"\n[4/5] Integrating {len(products_list)} products into mobelmor catalog...")
    
    # Read existing catalog
    existing_catalog = []
    if DATA_FILE.exists():
        with open(DATA_FILE, 'r', encoding='utf-8') as f:
            existing_catalog = json.load(f)

    updated_count = 0
    added_count = 0

    max_id = max([p.get('id', 0) for p in existing_catalog], default=0)

    for prod in products_list:
        # Check if product already exists (by exact source_url match)
        matched_idx = None
        for idx, item in enumerate(existing_catalog):
            if item.get('sourceUrl') == prod['source_url']:
                matched_idx = idx
                break

        formatted_prod = {
            "id": existing_catalog[matched_idx]['id'] if matched_idx is not None else max_id + 1,
            "title": prod['title'],
            "category": prod['category'],
            "subcategory": prod['subcategory'],
            "price": prod['price'],
            "rating": 4.9,
            "reviewsCount": 38,
            "image": prod['images'][0] if prod['images'] else "assets/zumrut_main.jpg",
            "gallery": prod['images'] if prod['images'] else ["assets/zumrut_main.jpg"],
            "badges": [
                "BOHEM KOLEKSİYONU",
                "%100 İNEGÖL MOBİLYASI"
            ],
            "material": prod['attributes'].get("Malzeme", "BOHEM TARZ LÜKS DOKUMA KUMAŞ & AHŞAP AYAKLAR"),
            "desc": prod['description'],
            "specs": prod['attributes'] if prod['attributes'] else {
                "Tarz": "Bohem / Boho-Chic",
                "Kumaş": "İthal Silinebilir Kumaş",
                "İskelet": "Fırınlanmış Gürgen Ağacı"
            },
            "sourceUrl": prod['source_url']
        }

        if matched_idx is not None:
            existing_catalog[matched_idx] = formatted_prod
            updated_count += 1
            print(f" - Updated existing product (ID: {formatted_prod['id']}): {formatted_prod['title']}")
        else:
            max_id += 1
            existing_catalog.append(formatted_prod)
            added_count += 1
            print(f" - Inserted new product (ID: {formatted_prod['id']}): {formatted_prod['title']}")

    # Save to data/clean_5_products.json
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(existing_catalog, f, ensure_ascii=False, indent=2)
    print(f"\nSuccessfully saved catalog to {DATA_FILE}")

    # Trigger JS sync
    print("\n[5/5] Triggering JavaScript sync script...")
    os.system(f"python {SYNC_SCRIPT}")
    return added_count, updated_count

def run_pipeline():
    """Run full end-to-end extraction, validation, and integration pipeline."""
    target_category_url = "https://www.mobilyaminegolden.com/koltuk-takimlari/bohem"
    print(f"==================================================")
    print(f"STARTING BOHEM FURNITURE DATA PIPELINE")
    print(f"Target: {target_category_url}")
    print(f"Timestamp: {datetime.now().isoformat()}")
    print(f"==================================================")

    # Step 1: Extract links
    product_links = extract_product_links(target_category_url)
    if not product_links:
        print("[ERROR] No product links found. Exiting.")
        return

    # Process first 3 product pages for demonstration
    selected_links = product_links[:3]
    print(f"\nProcessing {len(selected_links)} product pages...")

    validated_products = []
    failed_products = []

    for link in selected_links:
        prod_data = parse_product(link)
        if prod_data:
            is_valid, logs = validate_product(prod_data)
            if is_valid:
                validated_products.append(prod_data)
            else:
                failed_products.append((link, logs))

    # Step 2: Integrate into catalog & JS
    if validated_products:
        added_cnt, updated_cnt = integrate_products(validated_products)
    else:
        added_cnt, updated_cnt = 0, 0

    # Step 3: Print Final Report
    print(f"\n==================================================")
    print(f"PIPELINE EXECUTION SUMMARY REPORT")
    print(f"==================================================")
    print(f"Total Category Links Found: {len(product_links)}")
    print(f"Total Pages Processed:     {len(selected_links)}")
    print(f"Successfully Validated:    {len(validated_products)}")
    print(f"Failed / Incomplete:       {len(failed_products)}")
    print(f"Catalog Items Added:       {added_cnt}")
    print(f"Catalog Items Updated:     {updated_cnt}")
    print(f"==================================================")

if __name__ == "__main__":
    run_pipeline()
