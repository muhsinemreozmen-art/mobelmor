import json
import re

with open("js/app.js", "r", encoding="utf-8") as f:
    app_js = f.read()

# Extract products array
match = re.search(r'const PRODUCTS\s*=\s*(\[\s*\{.*?\}\s*\]);', app_js, re.DOTALL)
if match:
    raw_json = match.group(1)
    raw_json = re.sub(r'([{,])\s*([a-zA-Z0-9_]+)\s*:', r'\1"\2":', raw_json)
    raw_json = re.sub(r":\s*'([^']*)'", r': "\1"', raw_json)
    raw_json = re.sub(r',\s*([}\]])', r'\1', raw_json)
    products = json.loads(raw_json)
else:
    products = []

prod_by_id = {p["id"]: p for p in products}
print(f"Products in DB: {len(products)}")

with open("index.html", "r", encoding="utf-8") as f:
    index_html = f.read()

# Find all <a> tags with href in index.html
all_a_tags = re.findall(r'<a\s+[^>]*href=["\']([^"\']+)["\'][^>]*>(.*?)</a>', index_html, re.DOTALL | re.IGNORECASE)
print(f"Total <a> tags in index.html: {len(all_a_tags)}")

for href, content in all_a_tags:
    if "urun-detay" in href or "product-detail" in href or "id=" in href:
        clean_content = re.sub(r"<[^>]+>", " ", content).strip()
        clean_content = re.sub(r"\s+", " ", clean_content)
        img_m = re.search(r'src=["\']([^"\']+)["\']', content)
        img_src = img_m.group(1) if img_m else "None"
        
        m = re.search(r"id=(\d+)", href)
        pid = int(m.group(1)) if m else None
        target = prod_by_id.get(pid)
        
        print(f"\nLink: {href}")
        print(f"  Content: '{clean_content[:60]}' | Img: {img_src}")
        if target:
            print(f"  Target DB Product: ID={target['id']} | Title='{target['title']}' | DB Img: {target['image']}")
        else:
            print(f"  Target ID: {pid} (Not in DB)")

print("\n\n============ ALL SLIDERS / CAROUSELS IN INDEX.HTML ============")
# Let's inspect all elements containing banner, carousel, hero, slide, story
for tag in re.finditer(r'<([a-zA-Z0-9]+)\s+[^>]*class=["\']([^"\']*(?:hero|slider|carousel|slide|banner|showcase|story|swiper)[^"\']*)["\'][^>]*>', index_html):
    print(f"Tag <{tag.group(1)}> class='{tag.group(2)}'")
