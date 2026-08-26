import json
import re

content = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
products = json.loads(m.group(1))

print("=== ALL 21 SETS IN CATALOG ===")
for p in products:
    if p.get('productType') == 'Set':
        print(f"[{p['category'].upper()}] ID {p['id']}: {p['title']} -> {p['image']}")
