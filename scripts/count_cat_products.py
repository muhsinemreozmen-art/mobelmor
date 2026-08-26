import json
import re

content = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
products = json.loads(m.group(1))

print(f"Total Products in array: {len(products)}")
cat_counts = {}
for p in products:
    c = p.get('category', 'unknown')
    cat_counts[c] = cat_counts.get(c, 0) + 1

for c, cnt in cat_counts.items():
    print(f"  Category '{c}': {cnt} products")
