import glob
from PIL import Image

# Let's inspect what other images we have for bedroom in assets
print("Bedroom images:")
for f in glob.glob("assets/*bedroom*") + glob.glob("assets/*yatak*") + glob.glob("assets/*asel*") + glob.glob("assets/*minegolden_p11*") + glob.glob("assets/*minegolden_p12*") + glob.glob("assets/*minegolden_p13*") + glob.glob("assets/*minegolden_p14*") + glob.glob("assets/*minegolden_p15*") + glob.glob("assets/*minegolden_p16*"):
    if f.endswith('.webp') or f.endswith('.jpg'):
        print(f, Image.open(f).size)
