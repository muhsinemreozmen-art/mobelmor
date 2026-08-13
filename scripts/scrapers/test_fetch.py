import urllib.request
import re

url = "https://www.mobilyaminegolden.com/koltuk-takimlari"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    # Product links in OpenCart journal theme are usually in product-thumb or caption/name
    prod_matches = re.findall(r'<div class="product-thumb[^">]*">[\s\S]*?<a href="(https://www\.mobilyaminegolden\.com/[^"]+)"', html)
    print("Found product matches:", len(prod_matches))
    for p in prod_matches[:5]:
        print("Product Link:", p)

    # Let's test fetching a single product detail page if found
    if prod_matches:
        p_url = prod_matches[0]
        print("\n--- Inspecting Product Detail Page ---")
        print("URL:", p_url)
        p_html = urllib.request.urlopen(urllib.request.Request(p_url, headers={'User-Agent': 'Mozilla/5.0'})).read().decode('utf-8')
        
        # Title
        title = re.search(r'<h1[^>]*>(.*?)</h1>', p_html)
        print("Title:", title.group(1) if title else "N/A")
        
        # Price
        price = re.search(r'class="product-price[^">]*">(.*?)</div>', p_html)
        if not price:
            price = re.search(r'(\d+[\d\.,]*\s*TL)', p_html)
        print("Price:", price.group(1) if price else "N/A")

        # Gallery images
        images = re.findall(r'https://image\.mobilyaminegolden\.com/image/cache/catalog/[^"\'\s>]+\.(?:jpg|png|jpeg|webp)', p_html)
        print("Raw image URLs count:", len(images))
        # Master image URLs (stripping resize dimensions like -1000x1000 or -500x500)
        master_imgs = set()
        for img in images:
            clean = re.sub(r'-\d+x\d+\.(jpg|png|jpeg|webp)', r'.\1', img)
            master_imgs.add(clean)
        print("Clean master images count:", len(master_imgs))
        for m in list(master_imgs)[:5]:
            print(" - Master Img:", m)

except Exception as e:
    import traceback
    traceback.print_exc()
