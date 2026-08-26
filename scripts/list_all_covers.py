import json
import re

content = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
products = json.loads(m.group(1))

print(f"Total Products: {len(products)}")
for p in products:
    print(f"ID {p['id']:02d} | {p['category']:7s} | {p['productType']:4s} | Cover: {p['image']:35s} | Title: {p['title']}")
