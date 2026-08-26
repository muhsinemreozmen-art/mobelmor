import glob
import os

images = sorted(glob.glob("assets/minegolden_p*.webp") + glob.glob("assets/minegolden_p*.jpg"))
print(f"Total minegolden images: {len(images)}")

# Group by product prefix
by_p = {}
for img in images:
    base = os.path.basename(img)
    parts = base.split('_')
    if len(parts) >= 2:
        p_key = parts[0] + '_' + parts[1] # e.g. minegolden_p1
        by_p.setdefault(p_key, []).append(base)

for p_key, file_list in sorted(by_p.items(), key=lambda x: int(x[0].split('_p')[1])):
    print(f"\n{p_key}: {file_list}")
