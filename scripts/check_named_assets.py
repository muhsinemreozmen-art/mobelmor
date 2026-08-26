import glob
import os
from PIL import Image

# Let's inspect the images of p1, p2, p3, p4, p5, etc.
# What does minegolden_p1_1 vs minegolden_p1_2 vs ... vs p1_6 contain?
# Let's check if there are other files in assets matching bohem, gold, etc.
print("Check bohem images in assets:")
for f in glob.glob("assets/*bohem*"):
    print(" ", f, Image.open(f).size)

print("\nCheck zumrut images in assets:")
for f in glob.glob("assets/*zumrut*"):
    print(" ", f, Image.open(f).size)

print("\nCheck koltuk images in assets:")
for f in glob.glob("assets/*koltuk*"):
    print(" ", f, Image.open(f).size)
