import json
import re

content = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
products = json.loads(m.group(1))

print("Inspect Solo product galleries:")
for p in products[:15]:
    if p.get('productType') == 'Solo':
        print(f"ID {p['id']}: {p['title']}")
        print(f"  image: {p.get('image')}")
        print(f"  gallery: {p.get('gallery')}")
