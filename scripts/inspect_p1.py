import os
from PIL import Image

for i in range(1, 7):
    fn = f"assets/minegolden_p1_{i}.webp"
    if os.path.exists(fn):
        im = Image.open(fn)
        print(f"p1_{i}.webp: size={im.size}")
