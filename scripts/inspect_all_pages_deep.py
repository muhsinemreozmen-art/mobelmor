import glob
import os
from PIL import Image

print("=== INSPECTING ALL ASSETS PER PAGE ===")
for p in range(1, 21):
    imgs = sorted(glob.glob(f"assets/minegolden_p{p}_*.webp"))
    if not imgs: continue
    print(f"\n--- PAGE {p} ({len(imgs)} images) ---")
    for img in imgs:
        try:
            with Image.open(img) as im:
                w, h = im.size
                print(f"  {img:<30} | {w}x{h}")
        except Exception as e:
            print(f"  {img:<30} | Error: {e}")
