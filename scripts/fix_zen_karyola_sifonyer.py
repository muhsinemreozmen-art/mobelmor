import json
import re

def fix_zen_karyola_sifonyer():
    for js_file in ['js/app.js', 'js/detail.js']:
        content = open(js_file, encoding='utf-8').read()
        m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
        if not m:
            continue
        
        products = json.loads(m.group(1))
        for p in products:
            # Zen Karyola & Yatak Başlığı (ID 53)
            if p['id'] == 53:
                p['image'] = 'assets/minegolden_p11_6.webp'
                print(f"Set #{p['id']} image to assets/minegolden_p11_6.webp in {js_file}")
            
            # Zen Aynalı Şifonyer (ID 54)
            elif p['id'] == 54:
                p['image'] = 'assets/minegolden_p11_2.webp'
                print(f"Set #{p['id']} image to assets/minegolden_p11_2.webp in {js_file}")

        new_json = json.dumps(products, ensure_ascii=False, indent=2)
        new_content = content[:m.start(1)] + new_json + content[m.end(1):]
        open(js_file, 'w', encoding='utf-8').write(new_content)
        print(f"Updated {js_file}")

fix_zen_karyola_sifonyer()
