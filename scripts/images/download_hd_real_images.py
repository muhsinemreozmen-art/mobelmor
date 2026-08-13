import re
import os
import urllib.request
import json

assets_dir = r"C:\Users\cocum\.gemini\antigravity\scratch\mobelmor\assets"

# Read clean_5_products.json
with open(r"C:\Users\cocum\.gemini\antigravity\scratch\mobelmor\clean_5_products.json", "r", encoding="utf-8") as f:
    products = json.load(f)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

step_files = {
    1: r"C:\Users\cocum\.gemini\antigravity\brain\75f66194-345d-43a2-b041-ea081e7903de\.system_generated\steps\188\content.md",
    2: r"C:\Users\cocum\.gemini\antigravity\brain\75f66194-345d-43a2-b041-ea081e7903de\.system_generated\steps\284\content.md",
    3: r"C:\Users\cocum\.gemini\antigravity\brain\75f66194-345d-43a2-b041-ea081e7903de\.system_generated\steps\286\content.md",
    4: r"C:\Users\cocum\.gemini\antigravity\brain\75f66194-345d-43a2-b041-ea081e7903de\.system_generated\steps\289\content.md",
    5: r"C:\Users\cocum\.gemini\antigravity\brain\75f66194-345d-43a2-b041-ea081e7903de\.system_generated\steps\291\content.md"
}

for prod in products:
    pid = prod['id']
    file_path = step_files.get(pid)
    if not file_path or not os.path.exists(file_path):
        continue
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
        
    # Extract all catalog image URLs
    raw_urls = re.findall(r'https://image\.mobilyaminegolden\.com/image/cache/catalog/urunler/[^\s"\'\>]+\.jpg', html)
    
    # Clean URLs to convert thumbnail cache links to high-res links (e.g., replace -160x80.jpg or -500x500.jpg with -800x800.jpg or raw image link)
    hd_urls = []
    seen = set()
    for u in raw_urls:
        # Convert -160x80.jpg or similar to -800x800.jpg for crisp HD quality
        hd_u = re.sub(r'-\d+x\d+h?\.jpg$', '-800x800.jpg', u)
        if hd_u not in seen and 'logo' not in hd_u and 'banner' not in hd_u:
            seen.add(hd_u)
            hd_urls.append(hd_u)
            
    print(f"Product {pid}: {prod['title']} -> Found {len(hd_urls)} HD image URLs.")
    
    downloaded_gallery = []
    for idx, img_url in enumerate(hd_urls[:10]):
        filename = f"hd_prod_{pid}_{idx+1}.jpg"
        filepath = os.path.join(assets_dir, filename)
        rel_path = f"assets/{filename}"
        
        try:
            req = urllib.request.Request(img_url, headers=headers)
            with urllib.request.urlopen(req, timeout=10) as resp, open(filepath, 'wb') as out_f:
                out_f.write(resp.read())
            print(f"  Downloaded HD: {filename}")
            downloaded_gallery.append(rel_path)
        except Exception as e:
            # Fallback to original URL without scaling if 800x800 fails
            raw_url = re.sub(r'-\d+x\d+h?\.jpg$', '.jpg', img_url)
            try:
                req = urllib.request.Request(raw_url, headers=headers)
                with urllib.request.urlopen(req, timeout=10) as resp, open(filepath, 'wb') as out_f:
                    out_f.write(resp.read())
                print(f"  Downloaded fallback HD: {filename}")
                downloaded_gallery.append(rel_path)
            except Exception as e2:
                print(f"  Failed: {img_url} ({e2})")
                
    if downloaded_gallery:
        prod['image'] = downloaded_gallery[0]
        prod['gallery'] = downloaded_gallery

# Save updated clean_5_products.json
with open(r"C:\Users\cocum\.gemini\antigravity\scratch\mobelmor\clean_5_products.json", "w", encoding="utf-8") as f:
    json.dump(products, f, ensure_ascii=False, indent=2)

print("\nAll HD images downloaded and clean_5_products.json updated!")
