import json, os

products = json.load(open('clean_5_products.json', encoding='utf-8'))

for p in products:
    pid = p['id']
    # Filter gallery images to only keep existing files with size > 2500 bytes (clean crisp photos)
    valid_g = []
    for g in p['gallery']:
        if os.path.exists(g) and os.path.getsize(g) > 2500:
            valid_g.append(g)
            
    if not valid_g:
        # Fallback to any existing file for this product
        valid_g = [g for g in p['gallery'] if os.path.exists(g)]
        
    if valid_g:
        # Sort valid gallery images by size descending so clearest HD photo is first!
        sorted_by_size = sorted(valid_g, key=lambda x: os.path.getsize(x), reverse=True)
        p['image'] = sorted_by_size[0]
        p['gallery'] = sorted_by_size
        print(f"Product {pid} ({p['title']}): Main image set to {p['image']} ({os.path.getsize(p['image'])} bytes), Gallery count: {len(p['gallery'])}")

with open('clean_5_products.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, ensure_ascii=False, indent=2)

print("\nUpdated clean_5_products.json with highest resolution main images!")
