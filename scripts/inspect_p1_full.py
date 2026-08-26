# Let's inspect all 6 images on Page 1 to identify which file is which
from PIL import Image

for i in range(1, 7):
    fn = f"assets/minegolden_p1_{i}.webp"
    im = Image.open(fn)
    print(f"p1_{i}: size={im.size}")
