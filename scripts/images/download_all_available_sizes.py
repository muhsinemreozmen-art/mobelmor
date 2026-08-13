import re
import os
import urllib.request
import json

assets_dir = r"C:\Users\cocum\.gemini\antigravity\scratch\mobelmor\assets"

step_files = {
    1: r"C:\Users\cocum\.gemini\antigravity\brain\75f66194-345d-43a2-b041-ea081e7903de\.system_generated\steps\188\content.md",
    2: r"C:\Users\cocum\.gemini\antigravity\brain\75f66194-345d-43a2-b041-ea081e7903de\.system_generated\steps\284\content.md",
    3: r"C:\Users\cocum\.gemini\antigravity\brain\75f66194-345d-43a2-b041-ea081e7903de\.system_generated\steps\286\content.md",
    4: r"C:\Users\cocum\.gemini\antigravity\brain\75f66194-345d-43a2-b041-ea081e7903de\.system_generated\steps\289\content.md",
    5: r"C:\Users\cocum\.gemini\antigravity\brain\75f66194-345d-43a2-b041-ea081e7903de\.system_generated\steps\291\content.md"
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

products = json.load(open('clean_5_products.json', encoding='utf-8'))

for p in products:
    pid = p['id']
    file_path = step_files[pid]
    if not os.path.exists(file_path):
        continue
        
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
        
    # Extract image links
    raw_urls = re.findall(r'https://image\.mobilyaminegolden\.com/image/cache/catalog/urunler/[^\s"\'\>]+\.jpg', html)
    
    unique_bases = []
    seen = set()
    for u in raw_urls:
        base = re.sub(r'-\d+x\d+h?\.jpg$', '', u)
        if base not in seen and 'logo' not in base and 'banner' not in base:
            seen.add(base)
            unique_bases.append(base)
            
    print(f"Product {pid}: {p['title']} -> {len(unique_bases)} unique base image URLs")
    
    gallery = []
    for idx, base in enumerate(unique_bases[:10]):
        filename = f"hd_v2_p{pid}_{idx+1}.jpg"
        filepath = os.path.join(assets_dir, filename)
        rel_path = f"assets/{filename}"
        
        # Try various opencart resolution formats
        candidates = [
            base + '.jpg',
            base + '-800x800.jpg',
            base + '-700x700.jpg',
            base + '-600x600.jpg',
            base + '-500x500.jpg',
            base + '-500x300.jpg',
            base + '-400x400.jpg',
            base + '-300x300.jpg'
        ]
        
        downloaded = False
        for c in candidates:
            try:
                req = urllib.request.Request(c, headers=headers)
                with urllib.request.urlopen(req, timeout=8) as resp:
                    data = resp.read()
                    if len(data) > 10000: # High quality > 10KB
                        with open(filepath, 'wb') as out:
                            out.write(data)
                        print(f"  Downloaded: {filename} ({len(data)} bytes) from {c.split('/')[-1]}")
                        downloaded = True
                        break
            except Exception:
                pass
                
        if downloaded:
            gallery.append(rel_path)
            
    if gallery:
        p['image'] = gallery[0]
        p['gallery'] = gallery
    else:
        print(f"  FAILED to download any HD image for product {pid}")

with open('clean_5_products.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, ensure_ascii=False, indent=2)

print("\nDone downloading HD images for all 5 products!")
