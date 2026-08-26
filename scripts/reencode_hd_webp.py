import os
import glob
from PIL import Image

# Re-convert all minegolden JPGs to crisp HD WebP (up to 1600px width, quality 94)
jpg_files = glob.glob("assets/minegolden_p*.jpg")
print(f"Converting {len(jpg_files)} images to HD WebP...")

converted = 0
for jpg in jpg_files:
    webp_path = os.path.splitext(jpg)[0] + ".webp"
    try:
        im = Image.open(jpg)
        # If image is very large (e.g. > 1600px), resize smoothly with LANCZOS, else keep original resolution
        w, h = im.size
        if w > 1600:
            new_h = int(h * (1600 / w))
            im = im.resize((1600, new_h), Image.Resampling.LANCZOS)
        elif w < 600 and w > 100:
            pass
        
        # Save as high quality WebP
        im.save(webp_path, "WEBP", quality=94, method=6)
        converted += 1
    except Exception as e:
        print(f"Error converting {jpg}: {e}")

print(f"Successfully converted {converted} images to HD WebP.")
