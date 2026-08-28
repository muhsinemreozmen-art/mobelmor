import glob
import re

for fpath in glob.glob("*.html"):
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    
    links = re.findall(r'href=["\']([^"\']*(?:urun-detay|product-detail)[^"\']*)["\']', content)
    if links:
        print(f"File: {fpath} -> {len(links)} links:")
        for l in set(links):
            print(f"   {l}")
