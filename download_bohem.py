import re
import os
import urllib.request
import json

file_path = r"C:\Users\cocum\.gemini\antigravity\brain\75f66194-345d-43a2-b041-ea081e7903de\.system_generated\steps\291\content.md"
assets_dir = r"C:\Users\cocum\.gemini\antigravity\scratch\mobelmor\assets"

with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

# Extract all images under catalog/urunler/
raw_urls = re.findall(r'https://image\.mobilyaminegolden\.com/image/cache/catalog/urunler/[^\s"\'\>]+\.jpg', html)
print(f"Bohem raw URLs found: {len(raw_urls)}")
for u in set(raw_urls):
    print(" ", u)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

bohem_gallery = []
unique_urls = list(set(raw_urls))

for idx, img_url in enumerate(unique_urls):
    filename = f"bohem_real_{idx+1}.jpg"
    filepath = os.path.join(assets_dir, filename)
    rel_path = f"assets/{filename}"
    
    # Try direct URL
    try:
        req = urllib.request.Request(img_url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp, open(filepath, 'wb') as out:
            data = resp.read()
            out.write(data)
            print(f"Downloaded {filename}: {len(data)} bytes")
            if len(data) > 1000:
                bohem_gallery.append(rel_path)
    except Exception as e:
        print(f"Failed {img_url}: {e}")

if bohem_gallery:
    products = json.load(open('clean_5_products.json', encoding='utf-8'))
    for p in products:
        if p['id'] == 5:
            p['image'] = bohem_gallery[0]
            p['gallery'] = bohem_gallery
    with open('clean_5_products.json', 'w', encoding='utf-8') as f:
        json.dump(products, f, ensure_ascii=False, indent=2)
    print("Updated Bohem images in clean_5_products.json!")
