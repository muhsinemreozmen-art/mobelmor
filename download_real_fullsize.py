import re
import os
import urllib.request
import json

assets_dir = r"C:\Users\cocum\.gemini\antigravity\scratch\mobelmor\assets"

step_files = {
    1: (r"C:\Users\cocum\.gemini\antigravity\brain\75f66194-345d-43a2-b041-ea081e7903de\.system_generated\steps\188\content.md", "zara"),
    2: (r"C:\Users\cocum\.gemini\antigravity\brain\75f66194-345d-43a2-b041-ea081e7903de\.system_generated\steps\284\content.md", "asel"),
    3: (r"C:\Users\cocum\.gemini\antigravity\brain\75f66194-345d-43a2-b041-ea081e7903de\.system_generated\steps\286\content.md", "zumrut"),
    4: (r"C:\Users\cocum\.gemini\antigravity\brain\75f66194-345d-43a2-b041-ea081e7903de\.system_generated\steps\289\content.md", "pera"),
    5: (r"C:\Users\cocum\.gemini\antigravity\brain\75f66194-345d-43a2-b041-ea081e7903de\.system_generated\steps\291\content.md", "bohem")
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

products = json.load(open('clean_5_products.json', encoding='utf-8'))

for p in products:
    pid = p['id']
    file_path, prefix = step_files[pid]
    if not os.path.exists(file_path):
        continue
        
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
        
    # Find all jpg links under catalog/urunler/
    all_imgs = re.findall(r'https://image\.mobilyaminegolden\.com/image/cache/catalog/urunler/[^\s"\'\>]+\.jpg', html)
    
    # Filter for full-size high res images (> 160x80)
    full_imgs = []
    seen = set()
    for u in all_imgs:
        # Ignore small 160x80 thumbnail links if full size exists
        base_u = u.replace('&amp;', '&')
        clean_u = re.sub(r'-\d+x\d+h?\.jpg$', '.jpg', base_u)
        
        # If opencart popup link exists
        if clean_u not in seen and 'logo' not in clean_u and 'banner' not in clean_u:
            seen.add(clean_u)
            full_imgs.append((u, clean_u))
            
    print(f"Product {pid}: {p['title']} -> {len(full_imgs)} image links found")
    
    valid_gallery = []
    for idx, (original_url, clean_url) in enumerate(full_imgs[:10]):
        filename = f"fullsize_p{pid}_{idx+1}.jpg"
        filepath = os.path.join(assets_dir, filename)
        rel_path = f"assets/{filename}"
        
        # Try downloading clean_url first (full size)
        success = False
        for target_url in [clean_url, original_url]:
            try:
                req = urllib.request.Request(target_url, headers=headers)
                with urllib.request.urlopen(req, timeout=10) as resp:
                    data = resp.read()
                    if len(data) > 10000: # Only keep images greater than 10KB
                        with open(filepath, 'wb') as out_f:
                            out_f.write(data)
                        print(f"  Downloaded: {filename} ({len(data)} bytes)")
                        success = True
                        break
            except Exception as e:
                pass
                
        if success:
            valid_gallery.append(rel_path)
            
    if valid_gallery:
        p['image'] = valid_gallery[0]
        p['gallery'] = valid_gallery
    else:
        print(f"  WARNING: No fullsize images downloaded for product {pid}")

with open('clean_5_products.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, ensure_ascii=False, indent=2)

print("\nUpdated clean_5_products.json with fullsize images!")
