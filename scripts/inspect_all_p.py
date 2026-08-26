import glob
from PIL import Image

# Let's inspect images in p1 .. p20
# We can check their color distributions, or we can check what images exist in assets/
for p in range(1, 21):
    imgs = sorted(glob.glob(f"assets/minegolden_p{p}_*.webp"))
    print(f"Product {p}: {len(imgs)} images -> {imgs}")
