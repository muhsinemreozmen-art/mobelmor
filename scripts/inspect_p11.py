import os
import glob
from PIL import Image

# Let's check the images in inspect_images_dark.html or examine each of p11_1 to p11_6
print("=== ZEN YATAK ODASI (p11) ===")
for i in range(1, 7):
    f = f"assets/minegolden_p11_{i}.webp"
    im = Image.open(f)
    print(f"  {f}: size={im.size}")
