import json
import re

content = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
products = json.loads(m.group(1))

# Let's inspect living room products (1-26)
print("=== LIVING ROOM PRODUCTS (1-26) ===")
for p in products[:26]:
    print(f"ID {p['id']:02d}: '{p['title']}' -> main image: '{p['image']}'")
    print(f"       gallery: {p.get('gallery')}")
