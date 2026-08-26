import os
from PIL import Image

# Let's inspect p11 images
for i in range(1, 7):
    f = f"assets/minegolden_p11_{i}.webp"
    im = Image.open(f)
    print(f"p11_{i}: size={im.size}")
