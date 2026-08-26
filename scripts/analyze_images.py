from PIL import Image

def analyze_image_colors_and_shapes(path):
    im = Image.open(path).convert('RGB')
    w, h = im.size
    # sample center vs edges
    center = im.crop((w*0.3, h*0.3, w*0.7, h*0.7))
    # compute average brightness
    stat = Image.Image.getextrema(im.convert('L'))
    print(f"File: {path:<28} | Size: {w}x{h} | Luma range: {stat}")

for p in range(1, 11):
    for i in range(1, 7):
        path = f"assets/minegolden_p{p}_{i}.webp"
        try:
            analyze_image_colors_and_shapes(path)
        except Exception:
            pass
