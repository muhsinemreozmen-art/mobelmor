from PIL import Image

# 1. Generate clean crop for Leon Berjer
try:
    with Image.open("assets/minegolden_p5_1.webp") as im:
        w, h = im.size
        # Leon Berjer is on the left
        cropped = im.crop((int(w * 0.01), int(h * 0.20), int(w * 0.35), int(h * 0.92)))
        cw, ch = cropped.size
        canvas_w = int(ch * 1.5)
        canvas_h = ch
        canvas = Image.new("RGB", (canvas_w, canvas_h), (250, 249, 252))
        canvas.paste(cropped, ((canvas_w - cw) // 2, (canvas_h - ch) // 2))
        canvas.save("assets/pieces/leon_berjer.webp", "WEBP", quality=95)
        print("Generated assets/pieces/leon_berjer.webp")
except Exception as e:
    print("Error leon berjer:", e)

# 2. Generate clean crop for Mono 2'li Koltuk
try:
    with Image.open("assets/minegolden_p4_1.webp") as im:
        w, h = im.size
        # Mono 2'li is on the right
        cropped = im.crop((int(w * 0.58), int(h * 0.20), int(w * 0.99), int(h * 0.92)))
        cw, ch = cropped.size
        canvas_w = int(ch * 1.5)
        canvas_h = ch
        canvas = Image.new("RGB", (canvas_w, canvas_h), (250, 249, 252))
        canvas.paste(cropped, ((canvas_w - cw) // 2, (canvas_h - ch) // 2))
        canvas.save("assets/pieces/mono_2li.webp", "WEBP", quality=95)
        print("Generated assets/pieces/mono_2li.webp")
except Exception as e:
    print("Error mono 2li:", e)

# 3. Generate clean crop for İcon Meşe Sandalye Seti
try:
    with Image.open("assets/minegolden_p8_1.webp") as im:
        w, h = im.size
        # Chairs are surrounding the table
        cropped = im.crop((int(w * 0.05), int(h * 0.30), int(w * 0.45), int(h * 0.92)))
        cw, ch = cropped.size
        canvas_w = int(ch * 1.5)
        canvas_h = ch
        canvas = Image.new("RGB", (canvas_w, canvas_h), (250, 249, 252))
        canvas.paste(cropped, ((canvas_w - cw) // 2, (canvas_h - ch) // 2))
        canvas.save("assets/pieces/icon_chairs.webp", "WEBP", quality=95)
        print("Generated assets/pieces/icon_chairs.webp")
except Exception as e:
    print("Error icon chairs:", e)
