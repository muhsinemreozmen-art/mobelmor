import json

with open('data/clean_5_products.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

print(f"Total products in JSON: {len(products)}")
seen_titles = set()
for p in products:
    print(f"\nID #{p['id']}: [{p['category']}] {p['title']}")
    print(f"  Source URL: {p.get('sourceUrl')}")
    print(f"  Main Image: {p['image']}")
    print(f"  Gallery ({len(p['gallery'])} imgs): {p['gallery']}")
    if p['title'] in seen_titles:
        print(f"  *** WARNING: DUPLICATE TITLE DETECTED: {p['title']} ***")
    seen_titles.add(p['title'])
