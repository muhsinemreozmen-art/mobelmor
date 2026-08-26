import glob

pdf_files = glob.glob("**/*.pdf", recursive=True)
print("PDF files:", pdf_files)

# Let's inspect Page 1 images
import os
for i in range(1, 7):
    fn = f"assets/minegolden_p1_{i}.webp"
    print(f"minegolden_p1_{i}.webp exists? {os.path.exists(fn)}")
