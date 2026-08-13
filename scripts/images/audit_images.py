import os
import glob

print("--- AUDITING ALL IMAGES IN ASSETS ---")
for img_path in sorted(glob.glob('assets/*.*')):
    size_kb = os.path.getsize(img_path) / 1024
    status = "OK HD" if size_kb > 40 else "BLURRY / TOO SMALL (< 40KB)"
    print(f"{img_path:<40} | {size_kb:>6.1f} KB | {status}")
