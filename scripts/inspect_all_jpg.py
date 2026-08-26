import os
import glob
from PIL import Image

def describe_img(p_id):
    print(f"\n--- PRODUCT {p_id} ---")
    for i in range(1, 7):
        f = f"assets/minegolden_p{p_id}_{i}.jpg"
        if os.path.exists(f):
            im = Image.open(f)
            # check crop of center
            w, h = im.size
            center = im.crop((w//4, h//4, 3*w//4, 3*h//4))
            print(f"  {f}: size={im.size}")

for p in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]:
    describe_img(p)
