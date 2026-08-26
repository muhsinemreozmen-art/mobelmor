import os
from PIL import Image
import numpy as np

for i in range(1, 7):
    f = f"assets/minegolden_p11_{i}.webp"
    im = Image.open(f).convert('RGB')
    arr = np.array(im)
    print(f"p11_{i}: mean RGB={arr.mean(axis=(0,1)).astype(int)}, std={arr.std():.1f}")
