import json
import re

content = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
products = json.loads(m.group(1))

for p in products:
    if p['category'] == 'bedroom':
        print(f"\nID {p['id']} - {p['title']} ({p.get('productType')}):")
        print(f"  image: {p['image']}")
        print(f"  gallery: {p['gallery']}")
