import json
import re

def fix_all_sets():
    for js_file in ['js/app.js', 'js/detail.js']:
        content = open(js_file, encoding='utf-8').read()
        m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
        if not m:
            continue
        
        products = json.loads(m.group(1))
        for p in products:
            # 1. Living Sets
            if p['id'] == 1 and p.get('productType') == 'Set':
                p['image'] = 'assets/minegolden_p1_2.webp'
                gal = [img for img in p['gallery'] if img != 'assets/minegolden_p1_2.webp']
                p['gallery'] = ['assets/minegolden_p1_2.webp'] + gal
            elif p['id'] == 2 and p.get('productType') == 'Solo':
                p['image'] = 'assets/minegolden_p1_1.webp'

            elif p['id'] == 9 and p.get('productType') == 'Set':
                p['image'] = 'assets/minegolden_p3_2.webp'
                gal = [img for img in p['gallery'] if img != 'assets/minegolden_p3_2.webp']
                p['gallery'] = ['assets/minegolden_p3_2.webp'] + gal
            elif p['id'] == 10 and p.get('productType') == 'Solo':
                p['image'] = 'assets/minegolden_p3_1.webp'

            # 2. Dining Sets
            elif p['id'] == 33 and p.get('productType') == 'Set':
                p['image'] = 'assets/minegolden_p8_1.webp'
                gal = [img for img in p['gallery'] if img != 'assets/minegolden_p8_1.webp']
                p['gallery'] = ['assets/minegolden_p8_1.webp'] + gal

            # 3. Bedroom Sets
            # Zen Modern Yatak Odası (ID 51)
            elif p['id'] == 51 and p.get('productType') == 'Set':
                p['image'] = 'assets/minegolden_p11_5.webp'
                gal = [img for img in p['gallery'] if img != 'assets/minegolden_p11_5.webp']
                p['gallery'] = ['assets/minegolden_p11_5.webp'] + gal
            
            # Zen Gardırop (ID 52)
            elif p['id'] == 52 and p.get('productType') == 'Solo':
                p['image'] = 'assets/minegolden_p11_1.webp'
            
            # Zen Karyola (ID 53)
            elif p['id'] == 53 and p.get('productType') == 'Solo':
                p['image'] = 'assets/minegolden_p11_2.webp'

            # Zen Şifonyer (ID 54)
            elif p['id'] == 54 and p.get('productType') == 'Solo':
                p['image'] = 'assets/minegolden_p11_4.webp'

            # Zen Komodin (ID 55)
            elif p['id'] == 55 and p.get('productType') == 'Solo':
                p['image'] = 'assets/minegolden_p11_3.webp'

        new_json = json.dumps(products, ensure_ascii=False, indent=2)
        new_content = content[:m.start(1)] + new_json + content[m.end(1):]
        open(js_file, 'w', encoding='utf-8').write(new_content)
        print(f"Updated {js_file} successfully")

    # Update index.html
    idx = open('index.html', encoding='utf-8').read()
    idx = idx.replace('assets/minegolden_p11_1.webp', 'assets/minegolden_p11_5.webp')
    open('index.html', 'w', encoding='utf-8').write(idx)
    print("Updated index.html")

fix_all_sets()
