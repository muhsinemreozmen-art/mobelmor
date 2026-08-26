import os
from PIL import Image

# Let's inspect p12, p13, p14, p15, p16 images
for p in range(12, 17):
    print(f"\n--- Product {p} ---")
    for i in range(1, 7):
        f = f"assets/minegolden_p{p}_{i}.jpg"
        if os.path.exists(f):
            print(f"  p{p}_{i}.jpg: {Image.open(f).size}")
