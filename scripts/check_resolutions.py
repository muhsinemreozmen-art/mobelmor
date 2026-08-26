import os
import glob
from PIL import Image

print("=== CHECKING FORTE (p8) IMAGES ===")
for i in range(1, 6):
    f = f"assets/minegolden_p8_{i}.webp"
    if os.path.exists(f):
        print(f, Image.open(f).size)

print("\n=== CHECKING ALL MINEGOLDEN SIZES ===")
for p in range(1, 21):
    for i in range(1, 7):
        f = f"assets/minegolden_p{p}_{i}.jpg"
        fw = f"assets/minegolden_p{p}_{i}.webp"
        if os.path.exists(f):
            print(f"  {f}: {Image.open(f).size} | {fw}: {Image.open(fw).size if os.path.exists(fw) else 'none'}")
