import os
import re
import json
import urllib.request

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

def fetch_and_parse_product(url):
    print(f"\n--- Scraping {url} ---")
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            html = resp.read().decode('utf-8')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

    # Title
    title_match = re.search(r'<h1[^>]*>(.*?)</h1>', html, re.DOTALL | re.I)
    title = title_match.group(1).strip() if title_match else "Ürün"
    title = re.sub(r'<[^>]+>', '', title)
    title = re.sub(r'\s*-\s*Mobilyam İnegölden.*', '', title).strip()

    # Price
    price = 0
    price_matches = re.findall(r'(\d[\d\.\,]+)\s*TL', html, re.I)
    if price_matches:
        for p in price_matches:
            cleaned = p.replace('.', '').replace(',', '.')
            try:
                val = int(float(cleaned))
                if val > price:
                    price = val
            except:
                pass

    # Extract image URLs from HTML
    # We look for all image links
    raw_urls = re.findall(r'href=["\']([^"\']+\.(?:jpg|jpeg|png|webp))["\']|src=["\']([^"\']+\.(?:jpg|jpeg|png|webp))["\']|data-zoom-image=["\']([^"\']+\.(?:jpg|jpeg|png|webp))["\']', html, re.I)
    
    candidate_set = set()
    for match_tuple in raw_urls:
        for u in match_tuple:
            if u and ('catalog/' in u or 'image/cache/' in u):
                if not u.startswith('http'):
                    u = 'https://www.mobilyaminegolden.com/' + u.lstrip('/')
                candidate_set.add(u)

    # Download test & validate size > 40KB
    valid_hd_images = []
    for cand_url in list(candidate_set):
        # Ignore small thumbs explicitly in URL name if 50x50, 100x100 etc.
        if re.search(r'-\d{2,3}x\d{2,3}[w_h]?\.', cand_url):
            continue
        try:
            r = urllib.request.Request(cand_url, headers=headers)
            with urllib.request.urlopen(r) as resp:
                data = resp.read()
                size_kb = len(data) / 1024
                if size_kb >= 40: # Must be > 40KB for high resolution
                    valid_hd_images.append((cand_url, size_kb))
                    print(f"  [VALID HD] {cand_url} ({size_kb:.1f} KB)")
                else:
                    print(f"  [SKIPPED THUMB] {cand_url} ({size_kb:.1f} KB)")
        except Exception as e:
            print(f"  [FAILED] {cand_url}: {e}")

    # Sort valid images by resolution/size descending
    valid_hd_images.sort(key=lambda x: x[1], reverse=True)

    print(f"\nResult for {title}: Price={price} TL, Valid HD Images={len(valid_hd_images)}")
    return {
        "url": url,
        "title": title,
        "price": price,
        "valid_images": [x[0] for x in valid_hd_images]
    }

# Test Zümrüt Koltuk Takımı
fetch_and_parse_product("https://www.mobilyaminegolden.com/zumrut-koltuk-takimi-2-3130")
