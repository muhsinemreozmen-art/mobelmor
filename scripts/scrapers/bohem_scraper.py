#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Refined Bohem & Furniture Scraper Pipeline with Local Asset Ingestion
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
ASSETS_DIR = ROOT_DIR / "assets"
SYNC_SCRIPT = ROOT_DIR / "scripts" / "sync" / "sync_both_js.py"

CATEGORY_MAPPING = {
    "bohem": {"category": "living", "subcategory": "sofas"},
    "koltuk": {"category": "living", "subcategory": "sofas"},
    "yemek": {"category": "dining", "subcategory": "dining-tables"},
    "yatak": {"category": "bedroom", "subcategory": "beds"}
}

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7"
}

def fetch_page(url, retries=3, delay=1):
    """Fetch HTML page with retries."""
    for attempt in range(1, retries + 1):
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=10) as response:
                if response.status == 200:
                    return response.read().decode('utf-8', errors='ignore')
        except Exception:
            if attempt < retries:
                time.sleep(delay * attempt)
    return None

def download_image_locally(img_url, filename):
    """Download external image to assets/ folder and return relative local path."""
    try:
        ASSETS_DIR.mkdir(parents=True, exist_ok=True)
        local_path = ASSETS_DIR / filename
        if local_path.exists() and local_path.stat().st_size > 500:
            return f"assets/{filename}"
        
        req = urllib.request.Request(img_url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=10) as resp:
            if resp.status == 200:
                with open(local_path, 'wb') as f:
                    f.write(resp.read())
                return f"assets/{filename}"
    except Exception as e:
        print(f"[IMAGE WARNING] Local download failed for {img_url}: {e}")
    return img_url  # Fallback to remote URL

def extract_product_links(category_url):
    """Extract product detail links from category listing page."""
    print(f"\n[1/5] Extracting product links from category: {category_url}")
    html = fetch_page(category_url)
    if not html:
        return []

    raw_links = re.findall(r'href=["\'](https://www\.mobilyaminegolden\.com/[a-zA-Z0-9\-]+)["\']', html)
    
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

def parse_specs(html, text):
    """Extract structured key-value specs from HTML and description."""
    specs = {}
    
    # Try parsing description text
    lines = text.split('.')
    for line in lines:
        line_clean = line.strip()
        if ':' in line_clean:
            parts = line_clean.split(':', 1)
            k = parts[0].strip()
            v = parts[1].strip()
            if k and v and len(k) < 35 and len(v) < 60:
                specs[k] = v

    if not specs:
        specs = {
            "Tarz": "Bohem / Boho-Chic",
            "Kumaş": "İthal Silinebilir Dokuma Kumaş",
            "İskelet": "Fırınlanmış Masif Gürgen Ağacı"
        }
    return specs

def parse_product(url):
    """Parse product details with precise title, price, description, and images."""
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
        "category": "living",
        "subcategory": "sofas",
        "images": [],
        "attributes": {},
        "stock_status": "in_stock",
        "source_url": url,
        "scraped_at": datetime.now(timezone.utc).isoformat()
    }

    # 1. Title Extraction: H1 tag is authoritative
    h1_m = re.search(r'<h1[^>]*>(.*?)</h1>', html, re.DOTALL | re.IGNORECASE)
    if h1_m:
        title_raw = re.sub(r'<[^>]+>', '', h1_m.group(1)).strip()
        title_raw = title_raw.replace('&amp;', '&').replace('&quot;', '"')
        product['title'] = title_raw

    if not product['title']:
        og_title = re.search(r'<meta\s+property=["\']og:title["\']\s+content=["\']([^"\']+)["\']', html)
        if og_title:
            product['title'] = og_title.group(1).strip()

    # 2. Price Extraction: Check discount price or regular price
    # Look for Opencart price-new or main price container
    price_new_m = re.search(r'class=["\'][^"\']*price-new[^"\']*["\'][^>]*>(.*?)</span>', html, re.DOTALL | re.IGNORECASE)
    if price_new_m:
        p_str = price_new_m.group(1)
    else:
        p_box = re.search(r'class=["\'][^"\']*price[^"\']*["\'][^>]*>(.*?)</div>', html, re.DOTALL | re.IGNORECASE)
        p_str = p_box.group(1) if p_box else html

    price_matches = re.findall(r'(\d{1,3}(?:\.\d{3})+|\d+)\s*(?:TL|₺)', p_str)
    if price_matches:
        # Pick last match as it often represents discounted final price
        p_raw = price_matches[-1].replace('.', '')
        try:
            product['price'] = float(p_raw)
        except ValueError:
            pass

    # 3. Description & Specs
    desc_m = re.search(r'id=["\']tab-description["\'][^>]*>(.*?)</div>', html, re.DOTALL | re.IGNORECASE)
    if desc_m:
        raw_desc = desc_m.group(1)
    else:
        raw_desc = html

    clean_desc = re.sub(r'<[^>]+>', ' ', raw_desc)
    clean_desc = re.sub(r'\s+', ' ', clean_desc).strip()
    product['description'] = clean_desc[:400] if len(clean_desc) > 400 else clean_desc
    product['attributes'] = parse_specs(html, clean_desc)

    # 4. Images Extraction
    raw_images = re.findall(r'href=["\'](https://image\.mobilyaminegolden\.com/[^"\']+\.(?:jpg|jpeg|png|webp))["\']', html)
    for img in raw_images:
        if not any(x in img for x in ['36x36', 'icon', 'logo', 'fav', 'cache/catalog/mobilyam']):
            if img not in product['images']:
                product['images'].append(img)

    return product

def validate_product(product):
    """Validate product requirements."""
    print(f"\n[3/5] Validating product: {product.get('title')}")
    errors = []

    if not product.get('title'):
        errors.append("Missing title")
    if product.get('price', 0) <= 0:
        errors.append(f"Invalid price: {product.get('price')}")
    if not product.get('source_url'):
        errors.append("Missing source_url")

    if errors:
        print(f"[VALIDATION FAILED] Errors: {errors}")
        return False
    
    print(f"[VALIDATION PASSED] Title: '{product['title']}', Price: {product['price']} TL, Images: {len(product['images'])}")
    return True

def integrate_products(products_list):
    """Upsert products, download images locally, save JSON and sync JS."""
    print(f"\n[4/5] Integrating {len(products_list)} products into mobelmor catalog...")
    
    existing_catalog = []
    if DATA_FILE.exists():
        with open(DATA_FILE, 'r', encoding='utf-8') as f:
            existing_catalog = json.load(f)

    updated_count = 0
    added_count = 0

    max_id = max([p.get('id', 0) for p in existing_catalog], default=0)

    for prod in products_list:
        matched_idx = None
        for idx, item in enumerate(existing_catalog):
            if item.get('sourceUrl') == prod['source_url']:
                matched_idx = idx
                break

        prod_id = existing_catalog[matched_idx]['id'] if matched_idx is not None else max_id + 1

        # Download product images locally
        local_gallery = []
        for img_idx, remote_img in enumerate(prod['images'][:4]):
            ext = "jpg"
            if ".png" in remote_img.lower(): ext = "png"
            if ".webp" in remote_img.lower(): ext = "webp"
            fname = f"bohem_p{prod_id}_{img_idx+1}.{ext}"
            local_src = download_image_locally(remote_img, fname)
            local_gallery.append(local_src)

        main_image = local_gallery[0] if local_gallery else "assets/zumrut_main.jpg"

        formatted_prod = {
            "id": prod_id,
            "title": prod['title'],
            "category": prod['category'],
            "subcategory": prod['subcategory'],
            "price": prod['price'],
            "rating": 4.9,
            "reviewsCount": 42,
            "image": main_image,
            "gallery": local_gallery if local_gallery else [main_image],
            "badges": [
                "BOHEM KOLEKSİYONU",
                "%100 İNEGÖL MOBİLYASI"
            ],
            "material": "BOHEM TARZ LÜKS DOKUMA KUMAŞ & FIRINLANMIŞ MASİF AHŞAP",
            "desc": prod['description'] if prod['description'] else f"{prod['title']} ile evinizde özgür, davetkar ve modern bir atmosfer yaratın.",
            "specs": prod['attributes'],
            "sourceUrl": prod['source_url']
        }

        if matched_idx is not None:
            existing_catalog[matched_idx] = formatted_prod
            updated_count += 1
            print(f" - Updated product (ID: {prod_id}): {formatted_prod['title']}")
        else:
            max_id += 1
            existing_catalog.append(formatted_prod)
            added_count += 1
            print(f" - Inserted product (ID: {prod_id}): {formatted_prod['title']}")

    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(existing_catalog, f, ensure_ascii=False, indent=2)
    print(f"\nSaved catalog to {DATA_FILE}")

    print("\n[5/5] Triggering JavaScript sync...")
    os.system(f"python {SYNC_SCRIPT}")
    return added_count, updated_count

def run_pipeline():
    target_category_url = "https://www.mobilyaminegolden.com/koltuk-takimlari/bohem"
    print("==================================================")
    print("BOHEM FURNITURE REFINED PIPELINE EXECUTION")
    print(f"Target: {target_category_url}")
    print("==================================================")

    links = extract_product_links(target_category_url)
    if not links:
        print("[ERROR] No links extracted.")
        return

    # Select valid product pages
    selected_links = [l for l in links if 'koltuk-takimi' in l][:4]
    print(f"\nSelected {len(selected_links)} product pages for ingestion...")

    validated = []
    for link in selected_links:
        data = parse_product(link)
        if data and validate_product(data):
            validated.append(data)

    if validated:
        added_cnt, updated_cnt = integrate_products(validated)
        print(f"\nSummary: Added {added_cnt}, Updated {updated_cnt}")

if __name__ == "__main__":
    run_pipeline()
