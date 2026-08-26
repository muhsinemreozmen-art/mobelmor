import json
import re

content = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
products = json.loads(m.group(1))

# Let's check products 9, 10, 11, 12, 13, 14, 15, 16
for p in products[8:16]:
    print(f"ID {p['id']:02d}: '{p['title']}' | Image: '{p['image']}'")
