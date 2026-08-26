import glob
import os

images = sorted(glob.glob("assets/minegolden_p*.webp"))
print(f"Total webp images: {len(images)}")

# Let's inspect pages 1 to 20
for p in range(1, 21):
    imgs = [img for img in images if f"minegolden_p{p}_" in img]
    print(f"Page {p:02d}: {len(imgs)} images -> {', '.join([os.path.basename(x) for x in imgs])}")
