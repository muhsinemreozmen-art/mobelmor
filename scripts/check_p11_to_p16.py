import os
from PIL import Image

# Let's inspect which image in p11, p12, p13, p14, p15, p16 is the complete bedroom room photo
for p in range(11, 17):
    print(f"\nProduct {p}:")
    for i in range(1, 7):
        f = f"assets/minegolden_p{p}_{i}.jpg"
        if os.path.exists(f):
            print(f"  p{p}_{i}: exists ({Image.open(f).size})")
