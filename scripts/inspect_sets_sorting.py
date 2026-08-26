import json

with open('products.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

print(f"Total products: {len(products)}")

by_category = {}
for p in products:
    cat = p.get('category', 'unknown')
    by_category.setdefault(cat, []).append(p)

for cat, prods in by_category.items():
    sets = [p for p in prods if p.get('productType') == 'Set']
    solos = [p for p in prods if p.get('productType') != 'Set']
    print(f"\nCategory: {cat} (Total: {len(prods)}) -> Sets: {len(sets)}, Solos: {len(solos)}")
    print("  First 5 products in category:")
    for p in prods[:5]:
        print(f"    ID={p['id']} [{p.get('productType')}] {p['title']} (image: {p.get('image')})")

print("\n--- Inspecting Sets cover images vs gallery ---")
for p in products:
    if p.get('productType') == 'Set':
        print(f"Set ID={p['id']}: '{p['title']}', image={p.get('image')}, gallery={p.get('gallery')[:2]}")

