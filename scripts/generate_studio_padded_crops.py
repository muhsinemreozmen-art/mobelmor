import os
from PIL import Image

# Let's inspect the original room photos and produce precision high-res crops with padding and centering
crops = {
    # 1. Zümrüt Berjer: exactly on right of p2_1
    "assets/pieces/zumrut_berjer.webp": ("assets/minegolden_p2_1.webp", 0.68, 0.20, 0.99, 0.92),
    # 2. Bohem Berjer: on left of p3_2
    "assets/pieces/bohem_berjer.webp": ("assets/minegolden_p3_2.webp", 0.01, 0.18, 0.38, 0.92),
    # 3. Bohem Puf / Sehpa: in center of p3_2
    "assets/pieces/bohem_puf.webp": ("assets/minegolden_p3_2.webp", 0.32, 0.48, 0.68, 0.96),
    # 4. Gold Berjer: on left of p1_2
    "assets/pieces/gold_berjer.webp": ("assets/minegolden_p1_2.webp", 0.01, 0.15, 0.36, 0.92),
    # 5. Leon Berjer: on left of p5_1
    "assets/pieces/leon_berjer.webp": ("assets/minegolden_p5_1.webp", 0.01, 0.20, 0.36, 0.92),
    # 6. Mono 2'li Koltuk: on right of p4_1
    "assets/pieces/mono_2li.webp": ("assets/minegolden_p4_1.webp", 0.58, 0.20, 0.99, 0.92),
}

for dest, (src, x1, y1, x2, y2) in crops.items():
    try:
        with Image.open(src) as im:
            w, h = im.size
            crop_box = (int(w * x1), int(h * y1), int(w * x2), int(h * y2))
            cropped = im.crop(crop_box)
            # Resize to standard product card ratio (2:1 or 4:3 with white background padding)
            cw, ch = cropped.size
            # Create a clean white/studio canvas
            canvas_w = int(ch * 1.5)
            canvas_h = ch
            if cw > canvas_w:
                canvas_w = cw
            canvas = Image.new("RGB", (canvas_w, canvas_h), (250, 249, 252))
            # paste cropped in center
            offset_x = (canvas_w - cw) // 2
            offset_y = (canvas_h - ch) // 2
            canvas.paste(cropped, (offset_x, offset_y))
            canvas.save(dest, "WEBP", quality=92)
            print(f"Successfully generated studio padded crop: {dest}")
    except Exception as e:
        print(f"Error {dest}: {e}")
