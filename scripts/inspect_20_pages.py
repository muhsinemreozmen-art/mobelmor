import glob
from PIL import Image

# Let's inspect pages 1 to 20 images
for p in range(1, 21):
    imgs = sorted(glob.glob(f"assets/minegolden_p{p}_*.webp"))
    print(f"Page {p}: {len(imgs)} images -> {imgs[0] if imgs else 'None'}")
