import os
import re
import json

js = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', js)
products = json.loads(m.group(1))

print("SET PRODUCTS AND THEIR GALLERIES:")
for p in products:
    if p.get('productType') == 'Set':
        print(f"\nID {p['id']} - {p['title']}")
        print(f"  Current main image: {p.get('image')}")
        print(f"  Gallery: {p.get('gallery')}")
