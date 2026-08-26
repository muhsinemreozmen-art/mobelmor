import json
import re

def update_all():
    # 1. Update JS catalogs
    for js_file in ['js/app.js', 'js/detail.js']:
        content = open(js_file, encoding='utf-8').read()
        m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
        if not m:
            continue
        
        products = json.loads(m.group(1))
        for p in products:
            # Set 1: Gold Lüks Koltuk Takımı
            if p['id'] == 1 and p.get('productType') == 'Set':
                p['image'] = 'assets/minegolden_p1_2.webp'
                gal = [img for img in p['gallery'] if img != 'assets/minegolden_p1_2.webp']
                p['gallery'] = ['assets/minegolden_p1_2.webp'] + gal
            
            # Solo 2: Gold 3'lü Koltuk
            elif p['id'] == 2 and p.get('productType') == 'Solo':
                p['image'] = 'assets/minegolden_p1_1.webp'

            # Set 9: Bohem Natural Keten Koltuk Takımı
            elif p['id'] == 9 and p.get('productType') == 'Set':
                p['image'] = 'assets/minegolden_p3_2.webp'
                gal = [img for img in p['gallery'] if img != 'assets/minegolden_p3_2.webp']
                p['gallery'] = ['assets/minegolden_p3_2.webp'] + gal

            # Solo 10: Bohem 3'lü Koltuk
            elif p['id'] == 10 and p.get('productType') == 'Solo':
                p['image'] = 'assets/minegolden_p3_1.webp'

            # Set 33: Forte Meşe Modern Yemek Odası Takımı
            elif p['id'] == 33 and p.get('productType') == 'Set':
                p['image'] = 'assets/minegolden_p8_1.webp'
                gal = [img for img in p['gallery'] if img != 'assets/minegolden_p8_1.webp']
                p['gallery'] = ['assets/minegolden_p8_1.webp'] + gal

            # Solo 34: Forte Meşe Açılır Yemek Masası
            elif p['id'] == 34 and p.get('productType') == 'Solo':
                p['image'] = 'assets/minegolden_p8_1.webp'

            # Solo 35: Forte Sandalye
            elif p['id'] == 35 and p.get('productType') == 'Solo':
                p['image'] = 'assets/minegolden_p8_2.webp'

            # Set 24: Salvador TV
            elif p['id'] == 24 and p.get('productType') == 'Set':
                p['image'] = 'assets/minegolden_p20_5.webp'
                gal = [img for img in p['gallery'] if img != 'assets/minegolden_p20_5.webp']
                p['gallery'] = ['assets/minegolden_p20_5.webp'] + gal

        new_json = json.dumps(products, ensure_ascii=False, indent=2)
        new_content = content[:m.start(1)] + new_json + content[m.end(1):]
        open(js_file, 'w', encoding='utf-8').write(new_content)
        print(f"Updated {js_file}")

    # 2. Update index.html hero slider backgrounds to HD hero banners
    idx_content = open('index.html', encoding='utf-8').read()
    # Ensure slider desktop backgrounds use rich wide HD hero banners
    idx_content = re.sub(r'<img src="[^"]*minegolden_p1_2\.webp" alt="Gold Lüks Koltuk Takımı" class="slide-bg-img desktop-only-img"[^>]*>', '<img src="assets/hero_milo_sofa.webp" alt="Gold Lüks Koltuk Takımı" class="slide-bg-img desktop-only-img" loading="eager" fetchpriority="high">', idx_content)
    idx_content = re.sub(r'<img src="[^"]*minegolden_p7_1\.webp" alt="İcon Meşe Ahşap Yemek Odası Takımı" class="slide-bg-img desktop-only-img"[^>]*>', '<img src="assets/hero_milano_dining.webp" alt="İcon Meşe Ahşap Yemek Odası Takımı" class="slide-bg-img desktop-only-img" loading="lazy">', idx_content)
    idx_content = re.sub(r'<img src="[^"]*minegolden_p11_1\.webp" alt="Zen Modern Yatak Odası Takımı" class="slide-bg-img desktop-only-img"[^>]*>', '<img src="assets/hero_asil_bedroom.webp" alt="Zen Modern Yatak Odası Takımı" class="slide-bg-img desktop-only-img" loading="lazy">', idx_content)
    idx_content = re.sub(r'<img src="[^"]*minegolden_p19_1\.webp" alt="Sahra Modern TV Ünitesi" class="slide-bg-img desktop-only-img"[^>]*>', '<img src="assets/hero_marian_tvunit.webp" alt="Sahra Modern TV Ünitesi" class="slide-bg-img desktop-only-img" loading="lazy">', idx_content)

    # Ensure showcase cards use the real set images
    idx_content = idx_content.replace('assets/minegolden_p8_3.webp', 'assets/minegolden_p8_1.webp')
    
    open('index.html', 'w', encoding='utf-8').write(idx_content)
    print("Updated index.html")

update_all()
