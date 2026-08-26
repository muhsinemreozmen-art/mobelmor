import json
import re
import os
from PIL import Image

content = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
products = json.loads(m.group(1))

bedroom_sets = [p for p in products if p.get('category') == 'bedroom' and p.get('productType') == 'Set']

print(f"Total Bedroom Sets: {len(bedroom_sets)}")
for p in bedroom_sets:
    print(f"\nID: {p['id']} - Title: {p['title']}")
    print(f"  Current image: {p.get('image')}")
    print(f"  Gallery:")
    for idx, img in enumerate(p.get('gallery', [])):
        if os.path.exists(img):
            im = Image.open(img)
            print(f"    [{idx}] {img} -> size: {im.size}")
        else:
            print(f"    [{idx}] {img} -> NOT FOUND")
