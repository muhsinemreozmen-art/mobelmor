import json
import re

def fix_catalog():
    for js_file in ['js/app.js', 'js/detail.js']:
        content = open(js_file, encoding='utf-8').read()
        m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
        if not m:
            continue
        
        products = json.loads(m.group(1))

        for p in products:
            pid = p['id']
            ptype = p.get('productType', 'Solo')

            # ==============================================================
            # BEDROOM SETS & SOLOS
            # ==============================================================
            
            # 1. Zen (ID 51-55)
            if pid == 51:
                p['image'] = 'assets/minegolden_p11_5.webp'
            elif pid == 52: # Zen Gardırop
                p['image'] = 'assets/minegolden_p11_1.webp'
            elif pid == 53: # Zen Karyola & Başlık
                p['image'] = 'assets/minegolden_p11_6.webp'
            elif pid == 54: # Zen Aynalı Şifonyer
                p['image'] = 'assets/minegolden_p11_2.webp'
            elif pid == 55: # Zen Komodin
                p['image'] = 'assets/minegolden_p11_3.webp'

            # 2. Dora (ID 56-60)
            elif pid == 56: # Dora Set
                p['image'] = 'assets/minegolden_p12_1.webp'
            elif pid == 57: # Dora Gardırop
                p['image'] = 'assets/minegolden_p12_2.webp'
            elif pid == 58: # Dora Karyola (Başlıklı) -> BAZA / KARYOLA
                p['image'] = 'assets/minegolden_p12_4.webp'
            elif pid == 59: # Dora Şifonyer & Ayna -> ŞİFONYER & MAKYAJ MASASI
                p['image'] = 'assets/minegolden_p12_3.webp'
            elif pid == 60: # Dora Komodin
                p['image'] = 'assets/minegolden_p12_5.webp'

            # 3. Elegance (ID 61-65)
            elif pid == 61: # Elegance Set
                p['image'] = 'assets/minegolden_p13_1.webp'
            elif pid == 62: # Elegance Gardırop
                p['image'] = 'assets/minegolden_p13_2.webp'
            elif pid == 63: # Elegance Karyola & Başlık -> BAZA / KARYOLA
                p['image'] = 'assets/minegolden_p13_4.webp'
            elif pid == 64: # Elegance Şifonyer -> ŞİFONYER & AYNA
                p['image'] = 'assets/minegolden_p13_3.webp'
            elif pid == 65: # Elegance Komodin
                p['image'] = 'assets/minegolden_p13_5.webp'

            # 4. Luna (ID 66-70)
            elif pid == 66: # Luna Set
                p['image'] = 'assets/minegolden_p14_1.webp'
            elif pid == 67: # Luna Gardırop
                p['image'] = 'assets/minegolden_p14_2.webp'
            elif pid == 68: # Luna Karyola
                p['image'] = 'assets/minegolden_p14_5.webp'
            elif pid == 69: # Luna Şifonyer
                p['image'] = 'assets/minegolden_p14_4.webp'
            elif pid == 70: # Luna Komodin
                p['image'] = 'assets/minegolden_p14_3.webp'

            # 5. Masal (ID 71-75)
            elif pid == 71: # Masal Set
                p['image'] = 'assets/minegolden_p15_1.webp'
            elif pid == 72: # Masal Gardırop
                p['image'] = 'assets/minegolden_p15_2.webp'
            elif pid == 73: # Masal Karyola
                p['image'] = 'assets/minegolden_p15_3.webp'
            elif pid == 74: # Masal Şifonyer
                p['image'] = 'assets/minegolden_p15_4.webp'
            elif pid == 75: # Masal Komodin
                p['image'] = 'assets/minegolden_p15_5.webp'

            # 6. Respiro (ID 76-80)
            elif pid == 76: # Respiro Set
                p['image'] = 'assets/minegolden_p16_1.webp'
            elif pid == 77: # Respiro Gardırop
                p['image'] = 'assets/minegolden_p16_2.webp'
            elif pid == 78: # Respiro Karyola
                p['image'] = 'assets/minegolden_p16_3.webp'
            elif pid == 79: # Respiro Şifonyer
                p['image'] = 'assets/minegolden_p16_4.webp'
            elif pid == 80: # Respiro Komodin
                p['image'] = 'assets/minegolden_p16_5.webp'

            # 7. Asya (ID 81-85)
            elif pid == 81: # Asya Set
                p['image'] = 'assets/minegolden_p12_1.webp'
            elif pid == 82: # Asya Gardırop
                p['image'] = 'assets/minegolden_p12_2.webp'
            elif pid == 83: # Asya Karyola
                p['image'] = 'assets/minegolden_p12_4.webp'
            elif pid == 84: # Asya Şifonyer
                p['image'] = 'assets/minegolden_p12_3.webp'
            elif pid == 85: # Asya Komodin
                p['image'] = 'assets/minegolden_p12_5.webp'

            # ==============================================================
            # ENSURE p.gallery[0] IS ALWAYS p.image!
            # ==============================================================
            main_img = p['image']
            other_imgs = [img for img in p.get('gallery', []) if img != main_img]
            p['gallery'] = [main_img] + other_imgs

        new_json = json.dumps(products, ensure_ascii=False, indent=2)
        new_content = content[:m.start(1)] + new_json + content[m.end(1):]
        open(js_file, 'w', encoding='utf-8').write(new_content)
        print(f"Catalog {js_file} updated with perfect mappings and gallery order!")

fix_catalog()
