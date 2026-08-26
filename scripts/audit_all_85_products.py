import json
import re

content = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
products = json.loads(m.group(1))

print(f"Total products: {len(products)}")
for p in products:
    print(f"ID: {p['id']:02d} | Cat: {p['category']:<8} | Sub: {p.get('subcategory','-'):<14} | Type: {p.get('productType','-'):<4} | Img: {p['image']:<32} | Title: {p['title']}")
