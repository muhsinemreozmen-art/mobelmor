import os
from PIL import Image

os.makedirs("assets/pieces", exist_ok=True)

def crop_and_pad(src_path, crop_rel, dest_path, aspect_ratio=1.5, bg_color=(250, 249, 252)):
    try:
        with Image.open(src_path) as im:
            w, h = im.size
            x1, y1, x2, y2 = crop_rel
            box = (int(w * x1), int(h * y1), int(w * x2), int(h * y2))
            cropped = im.crop(box)
            cw, ch = cropped.size
            
            # Target width based on aspect ratio
            target_w = max(int(ch * aspect_ratio), cw)
            target_h = max(int(cw / aspect_ratio), ch)
            
            canvas = Image.new("RGB", (target_w, target_h), bg_color)
            offset_x = (target_w - cw) // 2
            offset_y = (target_h - ch) // 2
            canvas.paste(cropped, (offset_x, offset_y))
            canvas.save(dest_path, "WEBP", quality=95)
            print(f"Generated {dest_path}")
    except Exception as e:
        print(f"Error {dest_path}: {e}")

# ==========================================
# 1. FORTE YEMEK ODASI (Page 9)
# ==========================================
# Forte Masa: Center table in p9_1
crop_and_pad("assets/minegolden_p9_1.webp", (0.20, 0.25, 0.78, 0.85), "assets/pieces/forte_masa.webp")
# Forte Sandalye: Left chairs in p9_1
crop_and_pad("assets/minegolden_p9_1.webp", (0.02, 0.35, 0.38, 0.90), "assets/pieces/forte_sandalye.webp")
# Forte Konsol: Console buffet in p9_1 (usually on back/side) or p9_2
crop_and_pad("assets/minegolden_p9_1.webp", (0.65, 0.20, 0.99, 0.80), "assets/pieces/forte_konsol.webp")

# ==========================================
# 2. SERAMİK YEMEK ODASI (Page 6)
# ==========================================
# Seramik Masa: Center round ceramic table in p6_1
crop_and_pad("assets/minegolden_p6_1.webp", (0.18, 0.20, 0.82, 0.88), "assets/pieces/seramik_masa.webp")
# Seramik Sandalye: Chairs around table in p6_1
crop_and_pad("assets/minegolden_p6_1.webp", (0.02, 0.30, 0.40, 0.90), "assets/pieces/seramik_sandalye.webp")

# ==========================================
# 3. İPEK YEMEK ODASI (Page 10)
# ==========================================
# İpek Masa: Table in p10_4 (shows table clearly) or p10_1
crop_and_pad("assets/minegolden_p10_4.webp", (0.15, 0.15, 0.85, 0.90), "assets/pieces/ipek_masa.webp")
# İpek Konsol: Console in p10_2
crop_and_pad("assets/minegolden_p10_2.webp", (0.05, 0.05, 0.95, 0.95), "assets/pieces/ipek_konsol.webp")
# İpek Sandalye: Chairs in p10_4
crop_and_pad("assets/minegolden_p10_4.webp", (0.68, 0.20, 0.99, 0.90), "assets/pieces/ipek_sandalye.webp")

# ==========================================
# 4. İCON YEMEK ODALARI (Page 7 & 8)
# ==========================================
# İcon Yuvarlak Masa: Table in p7_2
crop_and_pad("assets/minegolden_p7_2.webp", (0.05, 0.05, 0.95, 0.95), "assets/pieces/icon_yuvarlak_masa.webp")
# İcon Yuvarlak Sandalye: Chairs in p7_3 or p7_1
crop_and_pad("assets/minegolden_p7_1.webp", (0.05, 0.30, 0.45, 0.90), "assets/pieces/icon_yuvarlak_sandalye.webp")
# İcon Meşe Masa: Table in p8_2 or p8_1
crop_and_pad("assets/minegolden_p8_1.webp", (0.20, 0.25, 0.80, 0.85), "assets/pieces/icon_mese_masa.webp")
# İcon Meşe Sandalye: Chairs in p8_1
crop_and_pad("assets/minegolden_p8_1.webp", (0.05, 0.30, 0.45, 0.90), "assets/pieces/icon_mese_sandalye.webp")
# İcon Meşe Konsol: Console in p8_4
crop_and_pad("assets/minegolden_p8_4.webp", (0.05, 0.05, 0.95, 0.95), "assets/pieces/icon_mese_konsol.webp")
