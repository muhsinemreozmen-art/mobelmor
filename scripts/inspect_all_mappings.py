import json
import re

content = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
products = json.loads(m.group(1))

sets = {}
current_set_id = None

for p in products:
    if p.get('productType') == 'Set':
        current_set_id = p['id']
        sets[current_set_id] = {'set': p, 'solos': []}
    else:
        if current_set_id:
            sets[current_set_id]['solos'].append(p)

print(f"Loaded {len(sets)} sets with their components.")
for s_id, s_data in sets.items():
    set_p = s_data['set']
    print(f"\n========================================================")
    print(f"SET #{s_id}: {set_p['title']} ({set_p['category']}) -> Image: {set_p['image']}")
    print(f"Gallery: {set_p.get('gallery')}")
    print(f"SOLOS:")
    for solo in s_data['solos']:
        print(f"  - #{solo['id']}: {solo['title']} ({solo['subcategory']}) -> Image: {solo['image']}")
