# Let's inspect pages 11 to 20 in detail
import glob, os
from PIL import Image

for p in range(11, 21):
    imgs = sorted(glob.glob(f"assets/minegolden_p{p}_*.webp"))
    print(f"\n--- PAGE {p} ---")
    for img in imgs:
        im = Image.open(img)
        print(f"  {os.path.basename(img)}: size={im.size}")
