import glob
import os
from PIL import Image

# Let's inspect each image file dimensions and examine all images across pages 1 to 20
for p in range(1, 21):
    imgs = sorted(glob.glob(f"assets/minegolden_p{p}_*.webp"))
    print(f"--- PAGE {p} ---")
    for img in imgs:
        try:
            im = Image.open(img)
            print(f"  {os.path.basename(img)}: size={im.size}")
        except Exception as e:
            print(f"  {img} error: {e}")
