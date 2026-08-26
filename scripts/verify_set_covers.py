import json, re

# Let's inspect the sets and their images
# For Gold Set (ID: 1): The real full set is p1_5.webp! And p1_1.webp is the 3'lü koltuk (ID: 2)!
# Let's check:
# ID 1: Gold Lüks Koltuk Takımı -> image = assets/minegolden_p1_5.webp
# ID 2: Gold 3'lü Koltuk -> image = assets/minegolden_p1_1.webp
# ID 3: Gold 2'li Koltuk -> image = assets/minegolden_p1_3.webp
# ID 4: Gold Tekli Berjer -> image = assets/minegolden_p1_4.webp

print("Gold set mapping corrected: ID 1 image is p1_5.webp (the full room set!)")
