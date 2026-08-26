import json
import re

def apply_dedicated_galleries():
    # Dedicated galleries per product ID
    galleries_map = {
        # --- LIVING ---
        1: ['assets/minegolden_p1_2.webp', 'assets/minegolden_p1_6.webp', 'assets/minegolden_p1_1.webp', 'assets/minegolden_p1_3.webp', 'assets/minegolden_p1_4.webp', 'assets/minegolden_p1_5.webp'],
        2: ['assets/minegolden_p1_1.webp', 'assets/minegolden_p1_2.webp', 'assets/minegolden_p1_5.webp', 'assets/minegolden_p1_6.webp'],
        3: ['assets/minegolden_p1_3.webp', 'assets/minegolden_p1_2.webp', 'assets/minegolden_p1_5.webp', 'assets/minegolden_p1_6.webp'],
        4: ['assets/minegolden_p1_4.webp', 'assets/minegolden_p1_2.webp', 'assets/minegolden_p1_5.webp', 'assets/minegolden_p1_6.webp'],

        5: ['assets/minegolden_p2_1.webp', 'assets/minegolden_p2_2.webp', 'assets/minegolden_p2_3.webp', 'assets/minegolden_p2_4.webp', 'assets/minegolden_p2_5.webp', 'assets/minegolden_p2_6.webp'],
        6: ['assets/minegolden_p2_2.webp', 'assets/minegolden_p2_1.webp', 'assets/minegolden_p2_5.webp', 'assets/minegolden_p2_6.webp'],
        7: ['assets/minegolden_p2_3.webp', 'assets/minegolden_p2_1.webp', 'assets/minegolden_p2_5.webp', 'assets/minegolden_p2_6.webp'],
        8: ['assets/minegolden_p2_4.webp', 'assets/minegolden_p2_1.webp', 'assets/minegolden_p2_5.webp', 'assets/minegolden_p2_6.webp'],

        9: ['assets/minegolden_p3_2.webp', 'assets/minegolden_p3_6.webp', 'assets/minegolden_p3_1.webp', 'assets/minegolden_p3_3.webp', 'assets/minegolden_p3_4.webp', 'assets/minegolden_p3_5.webp'],
        10: ['assets/minegolden_p3_1.webp', 'assets/minegolden_p3_2.webp', 'assets/minegolden_p3_5.webp', 'assets/minegolden_p3_6.webp'],
        11: ['assets/minegolden_p3_4.webp', 'assets/minegolden_p3_2.webp', 'assets/minegolden_p3_5.webp', 'assets/minegolden_p3_6.webp'],
        12: ['assets/minegolden_p3_5.webp', 'assets/minegolden_p3_2.webp', 'assets/minegolden_p3_6.webp'],

        13: ['assets/minegolden_p4_1.webp', 'assets/minegolden_p4_6.webp', 'assets/minegolden_p4_2.webp', 'assets/minegolden_p4_3.webp', 'assets/minegolden_p4_4.webp', 'assets/minegolden_p4_5.webp'],
        14: ['assets/minegolden_p4_2.webp', 'assets/minegolden_p4_1.webp', 'assets/minegolden_p4_5.webp', 'assets/minegolden_p4_6.webp'],
        15: ['assets/minegolden_p4_3.webp', 'assets/minegolden_p4_1.webp', 'assets/minegolden_p4_5.webp', 'assets/minegolden_p4_6.webp'],
        16: ['assets/minegolden_p4_4.webp', 'assets/minegolden_p4_1.webp', 'assets/minegolden_p4_5.webp', 'assets/minegolden_p4_6.webp'],

        17: ['assets/minegolden_p5_1.webp', 'assets/minegolden_p5_6.webp', 'assets/minegolden_p5_2.webp', 'assets/minegolden_p5_3.webp', 'assets/minegolden_p5_4.webp', 'assets/minegolden_p5_5.webp'],
        18: ['assets/minegolden_p5_2.webp', 'assets/minegolden_p5_1.webp', 'assets/minegolden_p5_5.webp', 'assets/minegolden_p5_6.webp'],
        19: ['assets/minegolden_p5_3.webp', 'assets/minegolden_p5_1.webp', 'assets/minegolden_p5_5.webp', 'assets/minegolden_p5_6.webp'],
        20: ['assets/minegolden_p5_4.webp', 'assets/minegolden_p5_1.webp', 'assets/minegolden_p5_5.webp', 'assets/minegolden_p5_6.webp'],

        21: ['assets/minegolden_p19_1.webp', 'assets/minegolden_p19_6.webp', 'assets/minegolden_p19_2.webp', 'assets/minegolden_p19_3.webp', 'assets/minegolden_p19_4.webp', 'assets/minegolden_p19_5.webp'],
        22: ['assets/minegolden_p19_2.webp', 'assets/minegolden_p19_1.webp', 'assets/minegolden_p19_4.webp', 'assets/minegolden_p19_6.webp'],
        23: ['assets/minegolden_p19_3.webp', 'assets/minegolden_p19_1.webp', 'assets/minegolden_p19_5.webp', 'assets/minegolden_p19_6.webp'],

        24: ['assets/minegolden_p20_5.webp', 'assets/minegolden_p20_6.webp', 'assets/minegolden_p20_1.webp', 'assets/minegolden_p20_3.webp', 'assets/minegolden_p20_2.webp', 'assets/minegolden_p20_4.webp'],
        25: ['assets/minegolden_p20_1.webp', 'assets/minegolden_p20_5.webp', 'assets/minegolden_p20_2.webp', 'assets/minegolden_p20_6.webp'],
        26: ['assets/minegolden_p20_3.webp', 'assets/minegolden_p20_5.webp', 'assets/minegolden_p20_4.webp', 'assets/minegolden_p20_6.webp'],

        # --- DINING ---
        27: ['assets/minegolden_p6_1.webp', 'assets/minegolden_p6_2.webp', 'assets/minegolden_p6_4.webp', 'assets/minegolden_p6_3.webp'],
        28: ['assets/minegolden_p6_2.webp', 'assets/minegolden_p6_1.webp', 'assets/minegolden_p6_3.webp'],
        29: ['assets/minegolden_p6_4.webp', 'assets/minegolden_p6_1.webp', 'assets/minegolden_p6_3.webp'],

        30: ['assets/minegolden_p7_1.webp', 'assets/minegolden_p7_2.webp', 'assets/minegolden_p7_3.webp', 'assets/minegolden_p7_4.webp', 'assets/minegolden_p7_5.webp'],
        31: ['assets/minegolden_p7_2.webp', 'assets/minegolden_p7_1.webp', 'assets/minegolden_p7_5.webp'],
        32: ['assets/minegolden_p7_4.webp', 'assets/minegolden_p7_1.webp', 'assets/minegolden_p7_5.webp'],

        33: ['assets/minegolden_p8_1.webp', 'assets/minegolden_p8_2.webp', 'assets/minegolden_p8_3.webp', 'assets/minegolden_p8_4.webp', 'assets/minegolden_p8_5.webp'],
        34: ['assets/minegolden_p8_1.webp', 'assets/minegolden_p8_3.webp', 'assets/minegolden_p8_4.webp', 'assets/minegolden_p8_5.webp'],
        35: ['assets/minegolden_p8_2.webp', 'assets/minegolden_p8_1.webp', 'assets/minegolden_p8_5.webp'],

        36: ['assets/minegolden_p9_1.webp', 'assets/minegolden_p9_6.webp', 'assets/minegolden_p9_2.webp', 'assets/minegolden_p9_4.webp', 'assets/minegolden_p9_5.webp', 'assets/minegolden_p9_3.webp'],
        37: ['assets/minegolden_p9_2.webp', 'assets/minegolden_p9_1.webp', 'assets/minegolden_p9_3.webp', 'assets/minegolden_p9_6.webp'],
        38: ['assets/minegolden_p9_4.webp', 'assets/minegolden_p9_1.webp', 'assets/minegolden_p9_3.webp', 'assets/minegolden_p9_6.webp'],

        39: ['assets/minegolden_p10_1.webp', 'assets/minegolden_p10_2.webp', 'assets/minegolden_p10_3.webp', 'assets/minegolden_p10_4.webp', 'assets/minegolden_p10_5.webp', 'assets/minegolden_p10_6.webp'],
        40: ['assets/minegolden_p10_3.webp', 'assets/minegolden_p10_1.webp', 'assets/minegolden_p10_5.webp', 'assets/minegolden_p10_6.webp'],
        41: ['assets/minegolden_p10_2.webp', 'assets/minegolden_p10_1.webp', 'assets/minegolden_p10_5.webp', 'assets/minegolden_p10_6.webp'],
        42: ['assets/minegolden_p10_4.webp', 'assets/minegolden_p10_1.webp', 'assets/minegolden_p10_5.webp', 'assets/minegolden_p10_6.webp'],

        43: ['assets/minegolden_p18_1.webp', 'assets/minegolden_p18_2.webp', 'assets/minegolden_p18_3.webp', 'assets/minegolden_p18_4.webp', 'assets/minegolden_p18_5.webp'],
        44: ['assets/minegolden_p18_3.webp', 'assets/minegolden_p18_1.webp', 'assets/minegolden_p18_5.webp'],
        45: ['assets/minegolden_p18_2.webp', 'assets/minegolden_p18_1.webp', 'assets/minegolden_p18_5.webp'],
        46: ['assets/minegolden_p18_4.webp', 'assets/minegolden_p18_1.webp', 'assets/minegolden_p18_5.webp'],

        47: ['assets/minegolden_p17_1.webp', 'assets/minegolden_p17_2.webp', 'assets/minegolden_p17_3.webp', 'assets/minegolden_p17_4.webp', 'assets/minegolden_p17_5.webp', 'assets/minegolden_p17_6.webp'],
        48: ['assets/minegolden_p17_3.webp', 'assets/minegolden_p17_1.webp', 'assets/minegolden_p17_5.webp', 'assets/minegolden_p17_6.webp'],
        49: ['assets/minegolden_p17_2.webp', 'assets/minegolden_p17_1.webp', 'assets/minegolden_p17_5.webp', 'assets/minegolden_p17_6.webp'],
        50: ['assets/minegolden_p17_4.webp', 'assets/minegolden_p17_1.webp', 'assets/minegolden_p17_5.webp', 'assets/minegolden_p17_6.webp'],

        # --- BEDROOM ---
        51: ['assets/minegolden_p11_5.webp', 'assets/minegolden_p11_6.webp', 'assets/minegolden_p11_1.webp', 'assets/minegolden_p11_2.webp', 'assets/minegolden_p11_3.webp', 'assets/minegolden_p11_4.webp'],
        52: ['assets/minegolden_p11_1.webp', 'assets/minegolden_p11_5.webp', 'assets/minegolden_p11_6.webp'],
        53: ['assets/minegolden_p11_6.webp', 'assets/minegolden_p11_5.webp'],
        54: ['assets/minegolden_p11_2.webp', 'assets/minegolden_p11_4.webp', 'assets/minegolden_p11_5.webp'],
        55: ['assets/minegolden_p11_3.webp', 'assets/minegolden_p11_5.webp'],

        56: ['assets/minegolden_p12_1.webp', 'assets/minegolden_p12_2.webp', 'assets/minegolden_p12_4.webp', 'assets/minegolden_p12_3.webp', 'assets/minegolden_p12_5.webp', 'assets/minegolden_p12_6.webp'],
        57: ['assets/minegolden_p12_2.webp', 'assets/minegolden_p12_1.webp'],
        58: ['assets/minegolden_p12_4.webp', 'assets/minegolden_p12_1.webp'],
        59: ['assets/minegolden_p12_3.webp', 'assets/minegolden_p12_6.webp', 'assets/minegolden_p12_1.webp'],
        60: ['assets/minegolden_p12_5.webp', 'assets/minegolden_p12_1.webp'],

        61: ['assets/minegolden_p13_2.webp', 'assets/minegolden_p13_6.webp', 'assets/minegolden_p13_4.webp', 'assets/minegolden_p13_5.webp'],
        62: ['assets/minegolden_p13_2.webp', 'assets/minegolden_p13_6.webp'],
        63: ['assets/minegolden_p13_4.webp', 'assets/minegolden_p13_6.webp', 'assets/minegolden_p13_2.webp'],
        64: ['assets/minegolden_p13_6.webp', 'assets/minegolden_p13_2.webp'],
        65: ['assets/minegolden_p13_5.webp', 'assets/minegolden_p13_2.webp', 'assets/minegolden_p13_6.webp'],

        66: ['assets/minegolden_p14_1.webp', 'assets/minegolden_p14_6.webp', 'assets/minegolden_p14_2.webp', 'assets/minegolden_p14_5.webp', 'assets/minegolden_p14_4.webp', 'assets/minegolden_p14_3.webp'],
        67: ['assets/minegolden_p14_2.webp', 'assets/minegolden_p14_1.webp'],
        68: ['assets/minegolden_p14_5.webp', 'assets/minegolden_p14_1.webp'],
        69: ['assets/minegolden_p14_4.webp', 'assets/minegolden_p14_1.webp'],
        70: ['assets/minegolden_p14_3.webp', 'assets/minegolden_p14_1.webp'],

        71: ['assets/minegolden_p15_1.webp', 'assets/minegolden_p15_6.webp', 'assets/minegolden_p15_2.webp', 'assets/minegolden_p15_3.webp', 'assets/minegolden_p15_4.webp', 'assets/minegolden_p15_5.webp'],
        72: ['assets/minegolden_p15_2.webp', 'assets/minegolden_p15_1.webp'],
        73: ['assets/minegolden_p15_3.webp', 'assets/minegolden_p15_1.webp'],
        74: ['assets/minegolden_p15_4.webp', 'assets/minegolden_p15_1.webp'],
        75: ['assets/minegolden_p15_5.webp', 'assets/minegolden_p15_1.webp'],

        76: ['assets/minegolden_p16_1.webp', 'assets/minegolden_p16_6.webp', 'assets/minegolden_p16_2.webp', 'assets/minegolden_p16_3.webp', 'assets/minegolden_p16_4.webp', 'assets/minegolden_p16_5.webp'],
        77: ['assets/minegolden_p16_2.webp', 'assets/minegolden_p16_1.webp'],
        78: ['assets/minegolden_p16_3.webp', 'assets/minegolden_p16_1.webp'],
        79: ['assets/minegolden_p16_4.webp', 'assets/minegolden_p16_1.webp'],
        80: ['assets/minegolden_p16_5.webp', 'assets/minegolden_p16_1.webp'],

        81: ['assets/minegolden_p12_1.webp', 'assets/minegolden_p12_2.webp', 'assets/minegolden_p12_4.webp', 'assets/minegolden_p12_3.webp', 'assets/minegolden_p12_5.webp'],
        82: ['assets/minegolden_p12_2.webp', 'assets/minegolden_p12_1.webp'],
        83: ['assets/minegolden_p12_4.webp', 'assets/minegolden_p12_1.webp'],
        84: ['assets/minegolden_p12_3.webp', 'assets/minegolden_p12_1.webp'],
        85: ['assets/minegolden_p12_5.webp', 'assets/minegolden_p12_1.webp']
    }

    for js_file in ['js/app.js', 'js/detail.js']:
        content = open(js_file, encoding='utf-8').read()
        m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
        if not m:
            continue
        
        products = json.loads(m.group(1))
        for p in products:
            pid = p['id']
            if pid in galleries_map:
                p['gallery'] = galleries_map[pid]
                p['image'] = galleries_map[pid][0]

        new_json = json.dumps(products, ensure_ascii=False, indent=2)
        new_content = content[:m.start(1)] + new_json + content[m.end(1):]
        open(js_file, 'w', encoding='utf-8').write(new_content)
        print(f"Applied clean galleries to {js_file}")

apply_dedicated_galleries()
