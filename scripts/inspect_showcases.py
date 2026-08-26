import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

sections = re.findall(r'<section[^>]*class="[^"]*vivense-showcase-section[^"]*"[^>]*>([\s\S]*?)</section>', text)

for s_idx, sec in enumerate(sections):
    title_m = re.search(r'<h[23][^>]*>([\s\S]*?)</h[23]>', sec)
    sec_title = re.sub(r'<[^>]+>', '', title_m.group(1)).strip() if title_m else f"Section {s_idx+1}"
    print(f"\n==========================================")
    print(f"SHOWCASE SECTION #{s_idx+1}: {sec_title}")
    print(f"==========================================")

    # find cards or links
    cards = re.findall(r'<a[^>]*href="([^"]+)"[^>]*class="[^"]*showcase-card[^"]*"[^>]*>([\s\S]*?)</a>|<div[^>]*class="[^"]*showcase-card[^"]*"[^>]*>([\s\S]*?)</div>', sec)
    if not cards:
        # try find all <a href="urun-detay...
        links = re.findall(r'<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)</a>', sec)
        for l_href, l_content in links:
            if 'urun-detay' in l_href or 'product-detail' in l_href or 'kategori' in l_href:
                img_m = re.search(r'src="([^"]+)"', l_content)
                title_card = re.sub(r'<[^>]+>', '', l_content).strip()
                title_clean = " ".join(title_card.split())[:60]
                print(f"  Link: '{l_href}', Img: '{img_m.group(1) if img_m else 'none'}', Text: '{title_clean}'")
    else:
        for c in cards:
            href = c[0]
            body = c[1] or c[2]
            img_m = re.search(r'src="([^"]+)"', body)
            title_card = re.sub(r'<[^>]+>', '', body).strip()
            title_clean = " ".join(title_card.split())[:60]
            print(f"  Card: href='{href}', Img='{img_m.group(1) if img_m else 'none'}', Text='{title_clean}'")

