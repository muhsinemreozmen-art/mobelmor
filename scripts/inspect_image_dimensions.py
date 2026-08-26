import glob
from PIL import Image

for p in range(1, 21):
    imgs = sorted(glob.glob(f"assets/minegolden_p{p}_*.webp"))
    print(f"\n--- PAGE {p} ---")
    for img in imgs:
        with Image.open(img) as im:
            w, h = im.size
            ratio = round(w / h, 2)
            print(f"{img:<28} | {w}x{h} (ratio: {ratio})")
