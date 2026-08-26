import glob
import os

files = sorted(glob.glob("assets/minegolden_p*.*"))
print(f"Total minegolden assets: {len(files)}")
for f in files:
    size = os.path.getsize(f)
    print(f"{f:<30} | {size//1024} KB")
