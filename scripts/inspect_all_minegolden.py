import os
import glob
from PIL import Image

for p in range(1, 21):
    imgs = sorted(glob.glob(f"assets/minegolden_p{p}_*.webp"))
    print(f"\n--- PRODUCT {p} (Total {len(imgs)} webp) ---")
    for img in imgs:
        im = Image.open(img)
        # Check some pixel sample or standard info
        print(f"  {img}: size={im.size}, mode={im.mode}")
