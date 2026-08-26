import json, re

content = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
products = json.loads(m.group(1))

# Let's inspect all SETS and all SOLO items:
print("--- ALL SETS IN CATALOG ---")
for p in products:
    if p['productType'] == 'Set':
        print(f"ID {p['id']:02d} | {p['category']:7s} | {p['title']:40s} | Cover: {p['image']}")

print("\n--- ALL SOLO PIECES IN CATALOG ---")
for p in products:
    if p['productType'] == 'Solo':
        print(f"ID {p['id']:02d} | {p['category']:7s} | {p['subcategory']:14s} | {p['title']:40s} | Cover: {p['image']}")
