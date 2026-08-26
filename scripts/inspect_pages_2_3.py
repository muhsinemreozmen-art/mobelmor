import base64
from PIL import Image

# Let's inspect Page 2 and Page 3 images
for p in [2, 3, 4]:
    print(f"\n--- PAGE {p} DETAILS ---")
    for i in range(1, 7):
        img_name = f"assets/minegolden_p{p}_{i}.webp"
        try:
            with Image.open(img_name) as im:
                print(f"Image {img_name}: size {im.size}, mode {im.mode}")
        except Exception as e:
            print(f"Image {img_name}: {e}")
