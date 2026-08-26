import os
from PIL import Image

# Directory for clean isolated piece crops
os.makedirs("assets/pieces", exist_ok=True)

# 1. Crop Zümrüt Tekli Berjer from p2_1 (Room view)
try:
    with Image.open("assets/minegolden_p2_1.webp") as im:
        w, h = im.size
        # The armchair in Zümrüt is on the right/left
        # Let's crop the armchair clearly
        berjer_crop = im.crop((int(w * 0.72), int(h * 0.25), int(w * 0.98), int(h * 0.90)))
        berjer_crop.save("assets/pieces/zumrut_berjer.webp", "WEBP", quality=90)
        print("Generated assets/pieces/zumrut_berjer.webp")
except Exception as e:
    print(f"Error zumrut berjer: {e}")

# 2. Crop Bohem Tekli Berjer & Puf from p3_2 (Bohem Room view)
try:
    with Image.open("assets/minegolden_p3_2.webp") as im:
        w, h = im.size
        # The armchair in Bohem is on the left
        bohem_berjer = im.crop((int(w * 0.02), int(h * 0.22), int(w * 0.35), int(h * 0.90)))
        bohem_berjer.save("assets/pieces/bohem_berjer.webp", "WEBP", quality=90)
        print("Generated assets/pieces/bohem_berjer.webp")
        
        # The pouf/coffee table in Bohem
        bohem_puf = im.crop((int(w * 0.35), int(h * 0.50), int(w * 0.65), int(h * 0.95)))
        bohem_puf.save("assets/pieces/bohem_puf.webp", "WEBP", quality=90)
        print("Generated assets/pieces/bohem_puf.webp")
except Exception as e:
    print(f"Error bohem pieces: {e}")

# 3. Crop Mono 2'li Koltuk from p4_1 (Mono Room view)
try:
    with Image.open("assets/minegolden_p4_1.webp") as im:
        w, h = im.size
        # Mono 2-seater is on the right
        mono_2li = im.crop((int(w * 0.60), int(h * 0.25), int(w * 0.98), int(h * 0.90)))
        mono_2li.save("assets/pieces/mono_2li.webp", "WEBP", quality=90)
        print("Generated assets/pieces/mono_2li.webp")
except Exception as e:
    print(f"Error mono pieces: {e}")

# 4. Crop Leon Tekli Berjer from p5_1 (Leon Room view)
try:
    with Image.open("assets/minegolden_p5_1.webp") as im:
        w, h = im.size
        leon_berjer = im.crop((int(w * 0.02), int(h * 0.25), int(w * 0.35), int(h * 0.90)))
        leon_berjer.save("assets/pieces/leon_berjer.webp", "WEBP", quality=90)
        print("Generated assets/pieces/leon_berjer.webp")
except Exception as e:
    print(f"Error leon pieces: {e}")

# 5. Crop Gold Tekli Berjer from p1_2 (Gold Room view)
try:
    with Image.open("assets/minegolden_p1_2.webp") as im:
        w, h = im.size
        gold_berjer = im.crop((int(w * 0.02), int(h * 0.20), int(w * 0.35), int(h * 0.90)))
        gold_berjer.save("assets/pieces/gold_berjer.webp", "WEBP", quality=90)
        print("Generated assets/pieces/gold_berjer.webp")
except Exception as e:
    print(f"Error gold berjer: {e}")

print("Isolated solo piece crops generation complete.")
