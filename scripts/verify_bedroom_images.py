import json
import re

content = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
products = json.loads(m.group(1))

for p in products:
    if p.get('category') == 'bedroom' and p.get('productType') == 'Set':
        print(f"ID {p['id']}: {p['title']} -> Main Image: {p['image']}")
