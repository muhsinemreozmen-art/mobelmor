import os
import json
import glob

assets_dir = r"C:\Users\cocum\.gemini\antigravity\scratch\mobelmor\assets"

products = json.load(open('clean_5_products.json', encoding='utf-8'))

# Product 1: Zara (12 images in p_zarayemeko_*.jpg)
zara_imgs = sorted([f"assets/{os.path.basename(f)}" for f in glob.glob(os.path.join(assets_dir, "p_zarayemeko_*.jpg")) if os.path.getsize(f) > 10000])

# Product 2: Asel Yatak Odasi
asel_imgs = sorted([f"assets/{os.path.basename(f)}" for f in glob.glob(os.path.join(assets_dir, "*asel*.jpg")) if os.path.getsize(f) > 10000])
if not asel_imgs:
    asel_imgs = sorted([f"assets/{os.path.basename(f)}" for f in glob.glob(os.path.join(assets_dir, "*bed*.jpg")) if os.path.getsize(f) > 10000])

# Product 3: Zumrut Koltuk Takimi
zumrut_imgs = sorted([f"assets/{os.path.basename(f)}" for f in glob.glob(os.path.join(assets_dir, "*zumrut*.jpg")) if os.path.getsize(f) > 10000])
if not zumrut_imgs:
    zumrut_imgs = sorted([f"assets/{os.path.basename(f)}" for f in glob.glob(os.path.join(assets_dir, "*sofa*.jpg")) if os.path.getsize(f) > 10000])

# Product 4: Pera Yemek Odasi
pera_imgs = sorted([f"assets/{os.path.basename(f)}" for f in glob.glob(os.path.join(assets_dir, "*pera*.jpg")) if os.path.getsize(f) > 10000])
if not pera_imgs:
    pera_imgs = sorted([f"assets/{os.path.basename(f)}" for f in glob.glob(os.path.join(assets_dir, "*prod_4*.jpg")) if os.path.getsize(f) > 10000])

# Product 5: Bohem Koltuk Takimi
bohem_imgs = sorted([f"assets/{os.path.basename(f)}" for f in glob.glob(os.path.join(assets_dir, "*bohem*.jpg")) if os.path.getsize(f) > 10000])
if not bohem_imgs:
    bohem_imgs = sorted([f"assets/{os.path.basename(f)}" for f in glob.glob(os.path.join(assets_dir, "*lounge*.jpg")) if os.path.getsize(f) > 10000])

print("Zara:", len(zara_imgs))
print("Asel:", len(asel_imgs))
print("Zumrut:", len(zumrut_imgs))
print("Pera:", len(pera_imgs))
print("Bohem:", len(bohem_imgs))

for p in products:
    pid = p['id']
    if pid == 1 and zara_imgs:
        p['image'] = zara_imgs[0]
        p['gallery'] = zara_imgs
    elif pid == 2 and asel_imgs:
        p['image'] = asel_imgs[0]
        p['gallery'] = asel_imgs
    elif pid == 3 and zumrut_imgs:
        p['image'] = zumrut_imgs[0]
        p['gallery'] = zumrut_imgs
    elif pid == 4 and pera_imgs:
        p['image'] = pera_imgs[0]
        p['gallery'] = pera_imgs
    elif pid == 5 and bohem_imgs:
        p['image'] = bohem_imgs[0]
        p['gallery'] = bohem_imgs

with open('clean_5_products.json', 'w', encoding='utf-8') as f:
    json.dump(products, f, ensure_ascii=False, indent=2)

print("Updated clean_5_products.json!")
