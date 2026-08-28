import os
import math
import random
from PIL import Image, ImageDraw, ImageFilter

os.makedirs("assets/fabrics", exist_ok=True)

FABRIC_SWATCHES = {
    # 1. Baby Face Kadife (Soft directional velvet pile with subtle silky highlight)
    "bf_krem": {"type": "velvet", "color": (245, 240, 235), "name": "Krem Bej (BF-01)"},
    "bf_antrasit": {"type": "velvet", "color": (51, 65, 85), "name": "Antrasit Gri (BF-02)"},
    "bf_zumrut": {"type": "velvet", "color": (22, 101, 52), "name": "Zümrüt Yeşili (BF-03)"},
    "bf_terracotta": {"type": "velvet", "color": (194, 65, 12), "name": "Terracotta (BF-04)"},
    "bf_gecemavisi": {"type": "velvet", "color": (30, 58, 138), "name": "Gece Mavisi (BF-05)"},
    "bf_vizon": {"type": "velvet", "color": (168, 148, 132), "name": "Vizon Latte (BF-06)"},
    "bf_hardal": {"type": "velvet", "color": (202, 138, 4), "name": "Hardal Sarısı (BF-07)"},
    "bf_adacayi": {"type": "velvet", "color": (87, 117, 95), "name": "Adaçayı Yeşili (BF-08)"},

    # 2. İtalyan Bukle (3D textured loops & bumps)
    "bk_ekru": {"type": "boucle", "color": (248, 245, 238), "name": "Ekru Bukle (BK-01)"},
    "bk_fildisi": {"type": "boucle", "color": (238, 232, 220), "name": "Fildişi Bukle (BK-02)"},
    "bk_bej": {"type": "boucle", "color": (218, 204, 185), "name": "Sıcak Bej (BK-03)"},
    "bk_tasgri": {"type": "boucle", "color": (148, 155, 162), "name": "Taş Grisi (BK-04)"},
    "bk_vizon": {"type": "boucle", "color": (160, 140, 125), "name": "Vizon Bukle (BK-05)"},
    "bk_fistik": {"type": "boucle", "color": (120, 145, 110), "name": "Fıstık Yeşili (BK-06)"},

    # 3. Silinebilir Nubuk (Micro suede / nubuck leather grain)
    "nb_taba": {"type": "nubuck", "color": (180, 105, 55), "name": "Taba Kahve (NB-01)"},
    "nb_duman": {"type": "nubuck", "color": (100, 116, 139), "name": "Duman Gri (NB-02)"},
    "nb_kum": {"type": "nubuck", "color": (212, 196, 176), "name": "Kum Beji (NB-03)"},
    "nb_cikolata": {"type": "nubuck", "color": (78, 52, 46), "name": "Çikolata Kahve (NB-04)"},
    "nb_petrol": {"type": "nubuck", "color": (21, 94, 117), "name": "Petrol Yeşili (NB-05)"},
    "nb_kul": {"type": "nubuck", "color": (140, 140, 145), "name": "Kül Grisi (NB-06)"},

    # 4. Doğal Dokuma Keten (Crossed warp & weft natural linen fibers)
    "kt_dogal": {"type": "linen", "color": (225, 215, 198), "name": "Doğal Keten (KT-01)"},
    "kt_acikbej": {"type": "linen", "color": (240, 233, 222), "name": "Açık Bej (KT-02)"},
    "kt_tas": {"type": "linen", "color": (185, 175, 160), "name": "Taş Rengi (KT-03)"},
    "kt_grafit": {"type": "linen", "color": (75, 85, 99), "name": "Grafit Keten (KT-04)"},
    "kt_zeytin": {"type": "linen", "color": (95, 110, 80), "name": "Zeytin Yeşili (KT-05)"},
    "kt_colkumu": {"type": "linen", "color": (205, 185, 155), "name": "Çöl Kumu (KT-06)"},

    # 5. Lüks Dokuma Şönil / Jakar (Rich ribbed chenille weave)
    "sn_antrasit": {"type": "chenille", "color": (45, 55, 72), "name": "Lüks Antrasit (SN-01)"},
    "sn_vizon": {"type": "chenille", "color": (155, 135, 120), "name": "Vizon Şönil (SN-02)"},
    "sn_zumrut": {"type": "chenille", "color": (20, 85, 55), "name": "Zümrüt Şönil (SN-03)"},
    "sn_krem": {"type": "chenille", "color": (242, 236, 226), "name": "Krem Şönil (SN-04)"},
    "sn_bakir": {"type": "chenille", "color": (175, 80, 45), "name": "Bakır Şönil (SN-05)"},
    "sn_lacivert": {"type": "chenille", "color": (25, 45, 90), "name": "Lacivert Şönil (SN-06)"},
}

SIZE = 300

def create_velvet_texture(base_color):
    img = Image.new("RGB", (SIZE, SIZE), base_color)
    draw = ImageDraw.Draw(img)
    r, g, b = base_color
    
    # Directional soft brush strokes for velvet sheen
    random.seed(42)
    for _ in range(3500):
        x1 = random.randint(0, SIZE)
        y1 = random.randint(0, SIZE)
        length = random.randint(8, 25)
        angle = math.radians(random.randint(40, 50))
        x2 = int(x1 + length * math.cos(angle))
        y2 = int(y1 + length * math.sin(angle))
        
        # slight luminance variation
        lum_shift = random.randint(-18, 22)
        cr = max(0, min(255, r + lum_shift))
        cg = max(0, min(255, g + lum_shift))
        cb = max(0, min(255, b + lum_shift))
        
        draw.line([(x1, y1), (x2, y2)], fill=(cr, cg, cb), width=random.randint(1, 2))
        
    img = img.filter(ImageFilter.GaussianBlur(radius=0.7))
    return img

def create_boucle_texture(base_color):
    img = Image.new("RGB", (SIZE, SIZE), base_color)
    draw = ImageDraw.Draw(img)
    r, g, b = base_color
    
    random.seed(101)
    # Loop pile dots & rings
    for _ in range(4000):
        cx = random.randint(0, SIZE)
        cy = random.randint(0, SIZE)
        rad = random.randint(2, 6)
        
        # shadow / highlight pairs for 3D loop effect
        shadow_shift = random.randint(-35, -10)
        sr = max(0, min(255, r + shadow_shift))
        sg = max(0, min(255, g + shadow_shift))
        sb = max(0, min(255, b + shadow_shift))
        draw.ellipse([cx - rad, cy - rad + 1, cx + rad, cy + rad + 1], fill=(sr, sg, sb))
        
        high_shift = random.randint(10, 40)
        hr = max(0, min(255, r + high_shift))
        hg = max(0, min(255, g + high_shift))
        hb = max(0, min(255, b + high_shift))
        draw.ellipse([cx - rad + 1, cy - rad, cx + rad - 1, cy + rad - 1], fill=(hr, hg, hb))

    img = img.filter(ImageFilter.GaussianBlur(radius=0.5))
    return img

def create_nubuck_texture(base_color):
    img = Image.new("RGB", (SIZE, SIZE), base_color)
    draw = ImageDraw.Draw(img)
    r, g, b = base_color
    
    random.seed(202)
    # fine organic stippling / pores
    for _ in range(12000):
        x = random.randint(0, SIZE)
        y = random.randint(0, SIZE)
        shift = random.randint(-22, 18)
        cr = max(0, min(255, r + shift))
        cg = max(0, min(255, g + shift))
        cb = max(0, min(255, b + shift))
        draw.point((x, y), fill=(cr, cg, cb))
        
    img = img.filter(ImageFilter.GaussianBlur(radius=0.4))
    return img

def create_linen_texture(base_color):
    img = Image.new("RGB", (SIZE, SIZE), base_color)
    draw = ImageDraw.Draw(img)
    r, g, b = base_color
    
    random.seed(303)
    # Horizontal and vertical weave threads
    grid_spacing = 4
    for y in range(0, SIZE, grid_spacing):
        shift = random.randint(-20, 20)
        cr = max(0, min(255, r + shift))
        cg = max(0, min(255, g + shift))
        cb = max(0, min(255, b + shift))
        draw.line([(0, y), (SIZE, y)], fill=(cr, cg, cb), width=1)
        
    for x in range(0, SIZE, grid_spacing):
        shift = random.randint(-20, 20)
        cr = max(0, min(255, r + shift))
        cg = max(0, min(255, g + shift))
        cb = max(0, min(255, b + shift))
        draw.line([(x, 0), (x, SIZE)], fill=(cr, cg, cb), width=1)
        
    # Add some natural slub fiber irregularities
    for _ in range(150):
        x = random.randint(0, SIZE - 20)
        y = random.randint(0, SIZE)
        w = random.randint(8, 25)
        shift = random.randint(-35, 30)
        cr = max(0, min(255, r + shift))
        cg = max(0, min(255, g + shift))
        cb = max(0, min(255, b + shift))
        draw.line([(x, y), (x + w, y)], fill=(cr, cg, cb), width=2)

    img = img.filter(ImageFilter.GaussianBlur(radius=0.4))
    return img

def create_chenille_texture(base_color):
    img = Image.new("RGB", (SIZE, SIZE), base_color)
    draw = ImageDraw.Draw(img)
    r, g, b = base_color
    
    random.seed(404)
    # Heavy diagonal twill / ribbed weave
    for i in range(-SIZE, SIZE * 2, 6):
        shift = random.randint(-28, 28)
        cr = max(0, min(255, r + shift))
        cg = max(0, min(255, g + shift))
        cb = max(0, min(255, b + shift))
        draw.line([(i, 0), (i + SIZE, SIZE)], fill=(cr, cg, cb), width=3)
        
    img = img.filter(ImageFilter.GaussianBlur(radius=0.5))
    return img

print("Generating realistic fabric texture swatches...")
for key, data in FABRIC_SWATCHES.items():
    ftype = data["type"]
    base_col = data["color"]
    
    if ftype == "velvet":
        im = create_velvet_texture(base_col)
    elif ftype == "boucle":
        im = create_boucle_texture(base_col)
    elif ftype == "nubuck":
        im = create_nubuck_texture(base_col)
    elif ftype == "linen":
        im = create_linen_texture(base_col)
    elif ftype == "chenille":
        im = create_chenille_texture(base_col)
    else:
        im = Image.new("RGB", (SIZE, SIZE), base_col)
        
    out_path = f"assets/fabrics/{key}.webp"
    im.save(out_path, "WEBP", quality=90)
    print(f"Created {out_path} ({data['name']})")

print("All fabric texture swatches generated successfully!")
