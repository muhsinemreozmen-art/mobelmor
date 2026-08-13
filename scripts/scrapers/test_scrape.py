import urllib.request
import re
import json
import os

urls = [
    "https://www.mobilyaminegolden.com/zara-yemek-odasi-siyah",
    "https://www.mobilyaminegolden.com/mokka-yemek-odasi-takimi",
    "https://www.mobilyaminegolden.com/dolunay-yemek-odasi-takimi",
    "https://www.mobilyaminegolden.com/dolunay-yatak-odasi-takimi",
    "https://www.mobilyaminegolden.com/marian-yemek-odasi-takimi"
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

results = []

for url in urls:
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as response:
            html = response.read().decode('utf-8', errors='ignore')
            title_match = re.search(r'<title>(.*?)</title>', html, re.I)
            title = title_match.group(1).split('-')[0].strip() if title_match else url.split('/')[-1]
            
            # Find price
            price_match = re.search(r'class="product-price"[^>]*>([\d\.\,]+)', html) or re.search(r'(\d{2,3}[\.\,]\d{3})\s*TL', html)
            price = price_match.group(1) if price_match else "0"
            
            # Find images
            img_matches = list(set(re.findall(r'https://image\.mobilyaminegolden\.com/image/cache/catalog/[^\s"\'\>]+?-\d+x\d+h?\.jpg', html)))
            
            # Find description / specs
            specs = {}
            tables = re.findall(r'<table[^>]*>(.*?)</table>', html, re.S)
            for tbl in tables:
                rows = re.findall(r'<tr[^>]*>(.*?)</tr>', tbl, re.S)
                for r in rows:
                    cols = [re.sub(r'<[^>]+>', '', c).strip() for c in re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', r, re.S)]
                    if len(cols) >= 2:
                        specs[cols[0]] = cols[1]
            
            results.append({
                'url': url,
                'title': title,
                'price': price,
                'images_count': len(img_matches),
                'images': img_matches[:10],
                'specs': specs
            })
            print(f"Success: {title} | Price: {price} | Images: {len(img_matches)} | Specs: {len(specs)}")
    except Exception as e:
        print(f"Error fetching {url}: {e}")

print("DONE. Total:", len(results))
