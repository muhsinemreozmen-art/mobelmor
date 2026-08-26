import json
import os
import re

# Available high-quality local assets in mobelmor
living_images = [
    ['assets/minegolden_p1_1.webp', 'assets/minegolden_p1_2.webp', 'assets/minegolden_p1_3.webp', 'assets/minegolden_p1_4.webp', 'assets/minegolden_p1_5.webp', 'assets/minegolden_p1_6.webp'],
    ['assets/minegolden_p2_1.webp', 'assets/minegolden_p2_2.webp', 'assets/minegolden_p2_3.webp', 'assets/minegolden_p2_4.webp', 'assets/minegolden_p2_5.webp', 'assets/minegolden_p2_6.webp'],
    ['assets/minegolden_p3_1.webp', 'assets/minegolden_p3_2.webp', 'assets/minegolden_p3_3.webp', 'assets/minegolden_p3_4.webp', 'assets/minegolden_p3_5.webp', 'assets/minegolden_p3_6.webp'],
    ['assets/minegolden_p4_1.webp', 'assets/minegolden_p4_2.webp', 'assets/minegolden_p4_3.webp', 'assets/minegolden_p4_4.webp', 'assets/minegolden_p4_5.webp', 'assets/minegolden_p4_6.webp'],
    ['assets/minegolden_p5_1.webp', 'assets/minegolden_p5_2.webp', 'assets/minegolden_p5_3.webp', 'assets/minegolden_p5_4.webp', 'assets/minegolden_p5_5.webp', 'assets/minegolden_p5_6.webp'],
    ['assets/sofa.webp', 'assets/zumrut_main.webp', 'assets/minegolden_p1_1.webp', 'assets/minegolden_p1_2.webp'],
    ['assets/zumrut_main.webp', 'assets/sofa.webp', 'assets/minegolden_p2_1.webp', 'assets/minegolden_p2_2.webp']
]

dining_images = [
    ['assets/minegolden_p6_1.webp', 'assets/minegolden_p6_2.webp', 'assets/minegolden_p6_3.webp', 'assets/minegolden_p6_4.webp', 'assets/minegolden_p6_5.webp'],
    ['assets/minegolden_p7_1.webp', 'assets/minegolden_p7_2.webp', 'assets/minegolden_p7_3.webp', 'assets/minegolden_p7_4.webp', 'assets/minegolden_p7_5.webp'],
    ['assets/minegolden_p8_1.webp', 'assets/minegolden_p8_2.webp', 'assets/minegolden_p8_3.webp', 'assets/minegolden_p8_4.webp', 'assets/minegolden_p8_5.webp'],
    ['assets/minegolden_p9_1.webp', 'assets/minegolden_p9_2.webp', 'assets/minegolden_p9_3.webp', 'assets/minegolden_p9_4.webp', 'assets/minegolden_p9_5.webp', 'assets/minegolden_p9_6.webp'],
    ['assets/minegolden_p10_1.webp', 'assets/minegolden_p10_2.webp', 'assets/minegolden_p10_3.webp', 'assets/minegolden_p10_4.webp', 'assets/minegolden_p10_5.webp', 'assets/minegolden_p10_6.webp'],
    ['assets/table_set.webp', 'assets/zara_dining_set.webp', 'assets/minegolden_p6_1.webp', 'assets/minegolden_p6_2.webp'],
    ['assets/zara_dining_set.webp', 'assets/table_set.webp', 'assets/minegolden_p7_1.webp', 'assets/minegolden_p7_2.webp']
]

bedroom_images = [
    ['assets/minegolden_p11_1.webp', 'assets/minegolden_p11_2.webp', 'assets/minegolden_p11_3.webp', 'assets/minegolden_p11_4.webp', 'assets/minegolden_p11_5.webp', 'assets/minegolden_p11_6.webp'],
    ['assets/minegolden_p12_1.webp', 'assets/minegolden_p12_2.webp', 'assets/minegolden_p12_3.webp', 'assets/minegolden_p12_4.webp', 'assets/minegolden_p12_5.webp', 'assets/minegolden_p12_6.webp'],
    ['assets/minegolden_p13_1.webp', 'assets/minegolden_p13_2.webp', 'assets/minegolden_p13_3.webp', 'assets/minegolden_p13_4.webp', 'assets/minegolden_p13_5.webp', 'assets/minegolden_p13_6.webp'],
    ['assets/minegolden_p14_1.webp', 'assets/minegolden_p14_2.webp', 'assets/minegolden_p14_3.webp', 'assets/minegolden_p14_4.webp', 'assets/minegolden_p14_5.webp', 'assets/minegolden_p14_6.webp'],
    ['assets/minegolden_p15_1.webp', 'assets/minegolden_p15_2.webp', 'assets/minegolden_p15_3.webp', 'assets/minegolden_p15_4.webp', 'assets/minegolden_p15_5.webp', 'assets/minegolden_p15_6.webp'],
    ['assets/bed.webp', 'assets/asya_main.webp', 'assets/minegolden_p11_1.webp', 'assets/minegolden_p11_2.webp'],
    ['assets/asya_main.webp', 'assets/bed.webp', 'assets/minegolden_p12_1.webp', 'assets/minegolden_p12_2.webp']
]

with open('data/final_imported_products.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

living_idx = 0
dining_idx = 0
bedroom_idx = 0

# Track set image mappings so solo items get matching set image
set_image_map = {}

for p in products:
    cat = p.get('category', 'living')
    p_type = p.get('productType', 'Set')
    title = p.get('title', '')
    parent = p.get('parentSet', '')

    if p_type == 'Set':
        if cat == 'living':
            gal = living_images[living_idx % len(living_images)]
            living_idx += 1
        elif cat == 'dining':
            gal = dining_images[dining_idx % len(dining_images)]
            dining_idx += 1
        else: # bedroom
            gal = bedroom_images[bedroom_idx % len(bedroom_images)]
            bedroom_idx += 1

        p['image'] = gal[0]
        p['gallery'] = gal
        set_image_map[title] = gal
    else: # Solo product
        parent_gal = set_image_map.get(parent)
        if parent_gal:
            # Pick a distinct image from the set gallery for the solo piece if available
            p_sub = p.get('subcategory', '')
            if p_sub in ('armchairs', 'chairs') and len(parent_gal) > 1:
                p['image'] = parent_gal[1]
                p['gallery'] = [parent_gal[1], parent_gal[0]] + parent_gal[2:]
            elif p_sub in ('wardrobes', 'buffets', 'consoles') and len(parent_gal) > 2:
                p['image'] = parent_gal[2]
                p['gallery'] = [parent_gal[2], parent_gal[0]] + parent_gal[1:2]
            elif p_sub in ('nightstands', 'tables') and len(parent_gal) > 3:
                p['image'] = parent_gal[3]
                p['gallery'] = [parent_gal[3], parent_gal[0]] + parent_gal[1:3]
            else:
                p['image'] = parent_gal[0]
                p['gallery'] = parent_gal
        else:
            fallback = 'assets/sofa.webp' if cat == 'living' else 'assets/table_set.webp' if cat == 'dining' else 'assets/bed.webp'
            p['image'] = fallback
            p['gallery'] = [fallback]

# Save updated dataset
with open('data/final_imported_products.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, ensure_ascii=False, indent=2)

print(f"data/final_imported_products.json güncellendi ({len(products)} ürün).")

# Update products in JS files
def update_js(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    products_json_str = json.dumps(products, ensure_ascii=False, indent=2)
    new_products_block = f"const PRODUCTS = {products_json_str};\n"

    pattern = r'const PRODUCTS = \[\s*[\s\S]*?\n\];'
    new_content = re.sub(pattern, new_products_block.strip(), content, count=1)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"{file_path} güncellendi.")

update_js('js/app.js')
update_js('js/detail.js')
