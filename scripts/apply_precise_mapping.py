import json
import re

# Precise 1-to-1 Mapping for all 85 Products
IMAGE_MAPPING = {
    # 1. Gold Koltuk (Page 1)
    1: {"image": "assets/minegolden_p1_2.webp", "gallery": ["assets/minegolden_p1_2.webp", "assets/minegolden_p1_1.webp", "assets/minegolden_p1_3.webp", "assets/minegolden_p1_4.webp", "assets/minegolden_p1_5.webp", "assets/minegolden_p1_6.webp"]},
    2: {"image": "assets/minegolden_p1_1.webp", "gallery": ["assets/minegolden_p1_1.webp", "assets/minegolden_p1_2.webp", "assets/minegolden_p1_5.webp", "assets/minegolden_p1_6.webp"]},
    3: {"image": "assets/minegolden_p1_3.webp", "gallery": ["assets/minegolden_p1_3.webp", "assets/minegolden_p1_2.webp", "assets/minegolden_p1_5.webp", "assets/minegolden_p1_6.webp"]},
    4: {"image": "assets/minegolden_p1_4.webp", "gallery": ["assets/minegolden_p1_4.webp", "assets/minegolden_p1_2.webp", "assets/minegolden_p1_5.webp", "assets/minegolden_p1_6.webp"]},

    # 2. Zümrüt Avangarde Koltuk (Page 2)
    5: {"image": "assets/minegolden_p2_1.webp", "gallery": ["assets/minegolden_p2_1.webp", "assets/minegolden_p2_2.webp", "assets/minegolden_p2_3.webp", "assets/minegolden_p2_4.webp", "assets/minegolden_p2_5.webp", "assets/minegolden_p2_6.webp"]},
    6: {"image": "assets/minegolden_p2_2.webp", "gallery": ["assets/minegolden_p2_2.webp", "assets/minegolden_p2_1.webp", "assets/minegolden_p2_5.webp", "assets/minegolden_p2_6.webp"]},
    7: {"image": "assets/minegolden_p2_3.webp", "gallery": ["assets/minegolden_p2_3.webp", "assets/minegolden_p2_1.webp", "assets/minegolden_p2_5.webp", "assets/minegolden_p2_6.webp"]},
    8: {"image": "assets/minegolden_p2_4.webp", "gallery": ["assets/minegolden_p2_4.webp", "assets/minegolden_p2_1.webp", "assets/minegolden_p2_5.webp", "assets/minegolden_p2_6.webp"]},

    # 3. Bohem Natural Keten Koltuk (Page 3)
    9:  {"image": "assets/minegolden_p3_2.webp", "gallery": ["assets/minegolden_p3_2.webp", "assets/minegolden_p3_1.webp", "assets/minegolden_p3_3.webp", "assets/minegolden_p3_4.webp", "assets/minegolden_p3_5.webp", "assets/minegolden_p3_6.webp"]},
    10: {"image": "assets/minegolden_p3_1.webp", "gallery": ["assets/minegolden_p3_1.webp", "assets/minegolden_p3_2.webp", "assets/minegolden_p3_4.webp", "assets/minegolden_p3_5.webp"]},
    11: {"image": "assets/minegolden_p3_3.webp", "gallery": ["assets/minegolden_p3_3.webp", "assets/minegolden_p3_2.webp", "assets/minegolden_p3_4.webp", "assets/minegolden_p3_6.webp"]},
    12: {"image": "assets/minegolden_p3_4.webp", "gallery": ["assets/minegolden_p3_4.webp", "assets/minegolden_p3_5.webp", "assets/minegolden_p3_2.webp", "assets/minegolden_p3_6.webp"]},

    # 4. Mono Modern Koltuk (Page 4)
    13: {"image": "assets/minegolden_p4_1.webp", "gallery": ["assets/minegolden_p4_1.webp", "assets/minegolden_p4_2.webp", "assets/minegolden_p4_3.webp", "assets/minegolden_p4_4.webp", "assets/minegolden_p4_5.webp", "assets/minegolden_p4_6.webp"]},
    14: {"image": "assets/minegolden_p4_2.webp", "gallery": ["assets/minegolden_p4_2.webp", "assets/minegolden_p4_1.webp", "assets/minegolden_p4_5.webp", "assets/minegolden_p4_6.webp"]},
    15: {"image": "assets/minegolden_p4_4.webp", "gallery": ["assets/minegolden_p4_4.webp", "assets/minegolden_p4_1.webp", "assets/minegolden_p4_5.webp", "assets/minegolden_p4_6.webp"]},
    16: {"image": "assets/minegolden_p4_3.webp", "gallery": ["assets/minegolden_p4_3.webp", "assets/minegolden_p4_1.webp", "assets/minegolden_p4_5.webp", "assets/minegolden_p4_6.webp"]},

    # 5. Leon Ahşap Ayaklı Koltuk (Page 5)
    17: {"image": "assets/minegolden_p5_1.webp", "gallery": ["assets/minegolden_p5_1.webp", "assets/minegolden_p5_2.webp", "assets/minegolden_p5_3.webp", "assets/minegolden_p5_4.webp", "assets/minegolden_p5_5.webp", "assets/minegolden_p5_6.webp"]},
    18: {"image": "assets/minegolden_p5_2.webp", "gallery": ["assets/minegolden_p5_2.webp", "assets/minegolden_p5_1.webp", "assets/minegolden_p5_5.webp", "assets/minegolden_p5_6.webp"]},
    19: {"image": "assets/minegolden_p5_3.webp", "gallery": ["assets/minegolden_p5_3.webp", "assets/minegolden_p5_1.webp", "assets/minegolden_p5_5.webp", "assets/minegolden_p5_6.webp"]},
    20: {"image": "assets/minegolden_p5_4.webp", "gallery": ["assets/minegolden_p5_4.webp", "assets/minegolden_p5_1.webp", "assets/minegolden_p5_5.webp", "assets/minegolden_p5_6.webp"]},

    # 6. Sahra TV Ünitesi (Page 19)
    21: {"image": "assets/minegolden_p19_1.webp", "gallery": ["assets/minegolden_p19_1.webp", "assets/minegolden_p19_2.webp", "assets/minegolden_p19_3.webp", "assets/minegolden_p19_4.webp", "assets/minegolden_p19_5.webp", "assets/minegolden_p19_6.webp"]},
    22: {"image": "assets/minegolden_p19_2.webp", "gallery": ["assets/minegolden_p19_2.webp", "assets/minegolden_p19_1.webp", "assets/minegolden_p19_4.webp", "assets/minegolden_p19_6.webp"]},
    23: {"image": "assets/minegolden_p19_3.webp", "gallery": ["assets/minegolden_p19_3.webp", "assets/minegolden_p19_1.webp", "assets/minegolden_p19_5.webp", "assets/minegolden_p19_6.webp"]},

    # 7. Salvador TV Ünitesi (Page 20)
    24: {"image": "assets/minegolden_p20_5.webp", "gallery": ["assets/minegolden_p20_5.webp", "assets/minegolden_p20_1.webp", "assets/minegolden_p20_3.webp", "assets/minegolden_p20_2.webp", "assets/minegolden_p20_4.webp", "assets/minegolden_p20_6.webp"]},
    25: {"image": "assets/minegolden_p20_1.webp", "gallery": ["assets/minegolden_p20_1.webp", "assets/minegolden_p20_5.webp", "assets/minegolden_p20_2.webp", "assets/minegolden_p20_6.webp"]},
    26: {"image": "assets/minegolden_p20_3.webp", "gallery": ["assets/minegolden_p20_3.webp", "assets/minegolden_p20_5.webp", "assets/minegolden_p20_4.webp", "assets/minegolden_p20_6.webp"]},

    # 8. İcon Yuvarlak Yemek Odası (Page 7)
    27: {"image": "assets/minegolden_p7_1.webp", "gallery": ["assets/minegolden_p7_1.webp", "assets/minegolden_p7_2.webp", "assets/minegolden_p7_3.webp", "assets/minegolden_p7_4.webp", "assets/minegolden_p7_5.webp"]},
    28: {"image": "assets/minegolden_p7_2.webp", "gallery": ["assets/minegolden_p7_2.webp", "assets/minegolden_p7_1.webp", "assets/minegolden_p7_5.webp"]},
    29: {"image": "assets/minegolden_p7_3.webp", "gallery": ["assets/minegolden_p7_3.webp", "assets/minegolden_p7_1.webp", "assets/minegolden_p7_5.webp"]},

    # 9. İcon Meşe Yemek Odası (Page 8)
    30: {"image": "assets/minegolden_p8_1.webp", "gallery": ["assets/minegolden_p8_1.webp", "assets/minegolden_p8_2.webp", "assets/minegolden_p8_3.webp", "assets/minegolden_p8_4.webp", "assets/minegolden_p8_5.webp"]},
    31: {"image": "assets/minegolden_p8_2.webp", "gallery": ["assets/minegolden_p8_2.webp", "assets/minegolden_p8_1.webp", "assets/minegolden_p8_5.webp"]},
    32: {"image": "assets/minegolden_p8_3.webp", "gallery": ["assets/minegolden_p8_3.webp", "assets/minegolden_p8_1.webp", "assets/minegolden_p8_4.webp"]},

    # 10. Forte Meşe Yemek Odası (Page 9)
    33: {"image": "assets/minegolden_p9_1.webp", "gallery": ["assets/minegolden_p9_1.webp", "assets/minegolden_p9_2.webp", "assets/minegolden_p9_3.webp", "assets/minegolden_p9_4.webp", "assets/minegolden_p9_5.webp", "assets/minegolden_p9_6.webp"]},
    34: {"image": "assets/minegolden_p9_3.webp", "gallery": ["assets/minegolden_p9_3.webp", "assets/minegolden_p9_1.webp", "assets/minegolden_p9_6.webp"]},
    35: {"image": "assets/minegolden_p9_4.webp", "gallery": ["assets/minegolden_p9_4.webp", "assets/minegolden_p9_1.webp", "assets/minegolden_p9_5.webp"]},

    # 11. Seramik Mutfak & Yemek Odası (Page 6)
    36: {"image": "assets/minegolden_p6_1.webp", "gallery": ["assets/minegolden_p6_1.webp", "assets/minegolden_p6_2.webp", "assets/minegolden_p6_3.webp", "assets/minegolden_p6_4.webp"]},
    37: {"image": "assets/minegolden_p6_2.webp", "gallery": ["assets/minegolden_p6_2.webp", "assets/minegolden_p6_1.webp", "assets/minegolden_p6_4.webp"]},
    38: {"image": "assets/minegolden_p6_3.webp", "gallery": ["assets/minegolden_p6_3.webp", "assets/minegolden_p6_1.webp", "assets/minegolden_p6_4.webp"]},

    # 12. İpek Lüks Yemek Odası (Page 10)
    39: {"image": "assets/minegolden_p10_1.webp", "gallery": ["assets/minegolden_p10_1.webp", "assets/minegolden_p10_2.webp", "assets/minegolden_p10_3.webp", "assets/minegolden_p10_4.webp", "assets/minegolden_p10_5.webp", "assets/minegolden_p10_6.webp"]},
    40: {"image": "assets/minegolden_p10_2.webp", "gallery": ["assets/minegolden_p10_2.webp", "assets/minegolden_p10_1.webp", "assets/minegolden_p10_5.webp", "assets/minegolden_p10_6.webp"]},
    41: {"image": "assets/minegolden_p10_3.webp", "gallery": ["assets/minegolden_p10_3.webp", "assets/minegolden_p10_1.webp", "assets/minegolden_p10_5.webp"]},
    42: {"image": "assets/minegolden_p10_4.webp", "gallery": ["assets/minegolden_p10_4.webp", "assets/minegolden_p10_1.webp", "assets/minegolden_p10_5.webp"]},

    # 13. Marian Ahşap Yemek Odası (Page 8 Alt)
    43: {"image": "assets/minegolden_p8_1.webp", "gallery": ["assets/minegolden_p8_1.webp", "assets/minegolden_p8_4.webp", "assets/minegolden_p8_2.webp", "assets/minegolden_p8_3.webp"]},
    44: {"image": "assets/minegolden_p8_4.webp", "gallery": ["assets/minegolden_p8_4.webp", "assets/minegolden_p8_1.webp", "assets/minegolden_p8_5.webp"]},
    45: {"image": "assets/minegolden_p8_2.webp", "gallery": ["assets/minegolden_p8_2.webp", "assets/minegolden_p8_1.webp", "assets/minegolden_p8_5.webp"]},
    46: {"image": "assets/minegolden_p8_3.webp", "gallery": ["assets/minegolden_p8_3.webp", "assets/minegolden_p8_1.webp", "assets/minegolden_p8_5.webp"]},

    # 14. Lisa Avangarde Yemek Odası (Page 9 Alt)
    47: {"image": "assets/minegolden_p9_1.webp", "gallery": ["assets/minegolden_p9_1.webp", "assets/minegolden_p9_2.webp", "assets/minegolden_p9_3.webp", "assets/minegolden_p9_4.webp"]},
    48: {"image": "assets/minegolden_p9_2.webp", "gallery": ["assets/minegolden_p9_2.webp", "assets/minegolden_p9_1.webp", "assets/minegolden_p9_5.webp"]},
    49: {"image": "assets/minegolden_p9_3.webp", "gallery": ["assets/minegolden_p9_3.webp", "assets/minegolden_p9_1.webp", "assets/minegolden_p9_6.webp"]},
    50: {"image": "assets/minegolden_p9_4.webp", "gallery": ["assets/minegolden_p9_4.webp", "assets/minegolden_p9_1.webp", "assets/minegolden_p9_5.webp"]},

    # 15. Zen Modern Yatak Odası (Page 11)
    51: {"image": "assets/minegolden_p11_5.webp", "gallery": ["assets/minegolden_p11_5.webp", "assets/minegolden_p11_4.webp", "assets/minegolden_p11_6.webp", "assets/minegolden_p11_2.webp", "assets/minegolden_p11_3.webp", "assets/minegolden_p11_1.webp"]},
    52: {"image": "assets/minegolden_p11_4.webp", "gallery": ["assets/minegolden_p11_4.webp", "assets/minegolden_p11_5.webp", "assets/minegolden_p11_1.webp"]},
    53: {"image": "assets/minegolden_p11_6.webp", "gallery": ["assets/minegolden_p11_6.webp", "assets/minegolden_p11_5.webp", "assets/minegolden_p11_3.webp"]},
    54: {"image": "assets/minegolden_p11_2.webp", "gallery": ["assets/minegolden_p11_2.webp", "assets/minegolden_p11_5.webp", "assets/minegolden_p11_1.webp"]},
    55: {"image": "assets/minegolden_p11_3.webp", "gallery": ["assets/minegolden_p11_3.webp", "assets/minegolden_p11_5.webp", "assets/minegolden_p11_6.webp"]},

    # 16. Dora Ahşap Yatak Odası (Page 12)
    56: {"image": "assets/minegolden_p12_1.webp", "gallery": ["assets/minegolden_p12_1.webp", "assets/minegolden_p12_2.webp", "assets/minegolden_p12_4.webp", "assets/minegolden_p12_3.webp", "assets/minegolden_p12_5.webp", "assets/minegolden_p12_6.webp"]},
    57: {"image": "assets/minegolden_p12_2.webp", "gallery": ["assets/minegolden_p12_2.webp", "assets/minegolden_p12_1.webp", "assets/minegolden_p12_6.webp"]},
    58: {"image": "assets/minegolden_p12_4.webp", "gallery": ["assets/minegolden_p12_4.webp", "assets/minegolden_p12_1.webp", "assets/minegolden_p12_5.webp"]},
    59: {"image": "assets/minegolden_p12_3.webp", "gallery": ["assets/minegolden_p12_3.webp", "assets/minegolden_p12_1.webp", "assets/minegolden_p12_6.webp"]},
    60: {"image": "assets/minegolden_p12_5.webp", "gallery": ["assets/minegolden_p12_5.webp", "assets/minegolden_p12_1.webp", "assets/minegolden_p12_4.webp"]},

    # 17. Elegance Cam Kapaklı Yatak Odası (Page 13)
    61: {"image": "assets/minegolden_p13_1.webp", "gallery": ["assets/minegolden_p13_1.webp", "assets/minegolden_p13_2.webp", "assets/minegolden_p13_4.webp", "assets/minegolden_p13_6.webp", "assets/minegolden_p13_5.webp", "assets/minegolden_p13_3.webp"]},
    62: {"image": "assets/minegolden_p13_2.webp", "gallery": ["assets/minegolden_p13_2.webp", "assets/minegolden_p13_1.webp", "assets/minegolden_p13_3.webp"]},
    63: {"image": "assets/minegolden_p13_4.webp", "gallery": ["assets/minegolden_p13_4.webp", "assets/minegolden_p13_1.webp", "assets/minegolden_p13_5.webp"]},
    64: {"image": "assets/minegolden_p13_6.webp", "gallery": ["assets/minegolden_p13_6.webp", "assets/minegolden_p13_1.webp", "assets/minegolden_p13_3.webp"]},
    65: {"image": "assets/minegolden_p13_5.webp", "gallery": ["assets/minegolden_p13_5.webp", "assets/minegolden_p13_1.webp", "assets/minegolden_p13_4.webp"]},

    # 18. Luna Modern Yatak Odası (Page 14)
    66: {"image": "assets/minegolden_p14_1.webp", "gallery": ["assets/minegolden_p14_1.webp", "assets/minegolden_p14_2.webp", "assets/minegolden_p14_4.webp", "assets/minegolden_p14_6.webp", "assets/minegolden_p14_3.webp", "assets/minegolden_p14_5.webp"]},
    67: {"image": "assets/minegolden_p14_2.webp", "gallery": ["assets/minegolden_p14_2.webp", "assets/minegolden_p14_1.webp", "assets/minegolden_p14_5.webp"]},
    68: {"image": "assets/minegolden_p14_4.webp", "gallery": ["assets/minegolden_p14_4.webp", "assets/minegolden_p14_1.webp", "assets/minegolden_p14_3.webp"]},
    69: {"image": "assets/minegolden_p14_6.webp", "gallery": ["assets/minegolden_p14_6.webp", "assets/minegolden_p14_1.webp", "assets/minegolden_p14_5.webp"]},
    70: {"image": "assets/minegolden_p14_3.webp", "gallery": ["assets/minegolden_p14_3.webp", "assets/minegolden_p14_1.webp", "assets/minegolden_p14_4.webp"]},

    # 19. Masal Krem & Gold Yatak Odası (Page 15)
    71: {"image": "assets/minegolden_p15_1.webp", "gallery": ["assets/minegolden_p15_1.webp", "assets/minegolden_p15_3.webp", "assets/minegolden_p15_4.webp", "assets/minegolden_p15_5.webp", "assets/minegolden_p15_6.webp", "assets/minegolden_p15_2.webp"]},
    72: {"image": "assets/minegolden_p15_3.webp", "gallery": ["assets/minegolden_p15_3.webp", "assets/minegolden_p15_1.webp", "assets/minegolden_p15_2.webp"]},
    73: {"image": "assets/minegolden_p15_4.webp", "gallery": ["assets/minegolden_p15_4.webp", "assets/minegolden_p15_1.webp", "assets/minegolden_p15_6.webp"]},
    74: {"image": "assets/minegolden_p15_5.webp", "gallery": ["assets/minegolden_p15_5.webp", "assets/minegolden_p15_1.webp", "assets/minegolden_p15_2.webp"]},
    75: {"image": "assets/minegolden_p15_6.webp", "gallery": ["assets/minegolden_p15_6.webp", "assets/minegolden_p15_1.webp", "assets/minegolden_p15_4.webp"]},

    # 20. Respiro Bohem Yatak Odası (Page 16)
    76: {"image": "assets/minegolden_p16_1.webp", "gallery": ["assets/minegolden_p16_1.webp", "assets/minegolden_p16_3.webp", "assets/minegolden_p16_2.webp", "assets/minegolden_p16_4.webp", "assets/minegolden_p16_5.webp", "assets/minegolden_p16_6.webp"]},
    77: {"image": "assets/minegolden_p16_3.webp", "gallery": ["assets/minegolden_p16_3.webp", "assets/minegolden_p16_1.webp", "assets/minegolden_p16_6.webp"]},
    78: {"image": "assets/minegolden_p16_2.webp", "gallery": ["assets/minegolden_p16_2.webp", "assets/minegolden_p16_1.webp", "assets/minegolden_p16_5.webp"]},
    79: {"image": "assets/minegolden_p16_4.webp", "gallery": ["assets/minegolden_p16_4.webp", "assets/minegolden_p16_1.webp", "assets/minegolden_p16_6.webp"]},
    80: {"image": "assets/minegolden_p16_5.webp", "gallery": ["assets/minegolden_p16_5.webp", "assets/minegolden_p16_1.webp", "assets/minegolden_p16_2.webp"]},

    # 21. Asya Modern Yatak Odası (Page 17)
    81: {"image": "assets/minegolden_p17_1.webp", "gallery": ["assets/minegolden_p17_1.webp", "assets/minegolden_p17_2.webp", "assets/minegolden_p17_3.webp", "assets/minegolden_p17_4.webp", "assets/minegolden_p17_5.webp", "assets/minegolden_p17_6.webp"]},
    82: {"image": "assets/minegolden_p17_2.webp", "gallery": ["assets/minegolden_p17_2.webp", "assets/minegolden_p17_1.webp", "assets/minegolden_p17_6.webp"]},
    83: {"image": "assets/minegolden_p17_3.webp", "gallery": ["assets/minegolden_p17_3.webp", "assets/minegolden_p17_1.webp", "assets/minegolden_p17_5.webp"]},
    84: {"image": "assets/minegolden_p17_4.webp", "gallery": ["assets/minegolden_p17_4.webp", "assets/minegolden_p17_1.webp", "assets/minegolden_p17_6.webp"]},
    85: {"image": "assets/minegolden_p17_5.webp", "gallery": ["assets/minegolden_p17_5.webp", "assets/minegolden_p17_1.webp", "assets/minegolden_p17_3.webp"]},
}

# Update js/app.js and js/detail.js
for target_file in ['js/app.js', 'js/detail.js']:
    content = open(target_file, encoding='utf-8').read()
    m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
    if m:
        prods = json.loads(m.group(1))
        for p in prods:
            pid = p['id']
            if pid in IMAGE_MAPPING:
                p['image'] = IMAGE_MAPPING[pid]['image']
                p['gallery'] = IMAGE_MAPPING[pid]['gallery']
        
        new_json = json.dumps(prods, ensure_ascii=False, indent=2)
        new_content = content[:m.start(1)] + new_json + content[m.end(1):]
        open(target_file, 'w', encoding='utf-8').write(new_content)
        print(f"Updated {target_file} with precise image mappings!")

print("All 85 products updated successfully.")
