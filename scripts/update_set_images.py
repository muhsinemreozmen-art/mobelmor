import json
import re

# Update PRODUCTS in js/app.js and js/detail.js

def update_catalog():
    for js_file in ['js/app.js', 'js/detail.js']:
        content = open(js_file, encoding='utf-8').read()
        m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
        if not m:
            print(f"Failed to find PRODUCTS in {js_file}")
            continue
        
        products = json.loads(m.group(1))
        
        for p in products:
            # 1. Gold Lüks Koltuk Takımı (ID 1)
            if p['id'] == 1 and p.get('productType') == 'Set':
                p['image'] = 'assets/minegolden_p1_2.webp'
                # ensure p1_2 is first in gallery
                gal = [img for img in p['gallery'] if img != 'assets/minegolden_p1_2.webp']
                p['gallery'] = ['assets/minegolden_p1_2.webp'] + gal
            
            # Gold 3'lü Koltuk (ID 2)
            elif p['id'] == 2 and p.get('productType') == 'Solo':
                p['image'] = 'assets/minegolden_p1_1.webp'
            
            # 3. Bohem Natural Keten Koltuk Takımı (ID 9)
            elif p['id'] == 9 and p.get('productType') == 'Set':
                p['image'] = 'assets/minegolden_p3_2.webp'
                gal = [img for img in p['gallery'] if img != 'assets/minegolden_p3_2.webp']
                p['gallery'] = ['assets/minegolden_p3_2.webp'] + gal
            
            # Bohem 3'lü Koltuk (ID 10)
            elif p['id'] == 10 and p.get('productType') == 'Solo':
                p['image'] = 'assets/minegolden_p3_1.webp'
            
            # 4. Forte Meşe Modern Yemek Odası (ID 33)
            elif p['id'] == 33 and p.get('productType') == 'Set':
                p['image'] = 'assets/minegolden_p8_3.webp'
                gal = [img for img in p['gallery'] if img != 'assets/minegolden_p8_3.webp']
                p['gallery'] = ['assets/minegolden_p8_3.webp'] + gal
            
            # 5. Salvador Lüks TV Ünitesi (ID 24)
            elif p['id'] == 24 and p.get('productType') == 'Set':
                p['image'] = 'assets/minegolden_p20_5.webp'
                gal = [img for img in p['gallery'] if img != 'assets/minegolden_p20_5.webp']
                p['gallery'] = ['assets/minegolden_p20_5.webp'] + gal

        new_json = json.dumps(products, ensure_ascii=False, indent=2)
        new_content = content[:m.start(1)] + new_json + content[m.end(1):]
        open(js_file, 'w', encoding='utf-8').write(new_content)
        print(f"Updated {js_file} successfully")

update_catalog()
