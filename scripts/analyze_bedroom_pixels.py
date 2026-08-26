import os
from PIL import Image
import numpy as np

def analyze(p_num):
    print(f"\n=== PRODUCT {p_num} ===")
    for i in range(1, 7):
        f = f"assets/minegolden_p{p_num}_{i}.webp"
        if os.path.exists(f):
            im = Image.open(f).convert('RGB')
            arr = np.array(im)
            top = arr[:40, :, :]
            bot = arr[-40:, :, :]
            print(f"  p{p_num}_{i}: shape={arr.shape}, top_mean={top.mean():.1f}, top_std={top.std():.1f}, bot_mean={bot.mean():.1f}")

for p in [11, 12, 13, 14, 15, 16]:
    analyze(p)
