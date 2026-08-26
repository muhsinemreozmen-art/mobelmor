# Let's inspect Page 4, 5, 7, 8, 9, 10 images
import glob, os
from PIL import Image

for p in [4, 5, 6, 7, 8, 9, 10]:
    imgs = sorted(glob.glob(f"assets/minegolden_p{p}_*.webp"))
    print(f"=== PAGE {p} ===")
    for img in imgs:
        im = Image.open(img)
        print(f"  {os.path.basename(img)}: size={im.size}")
