import sys
import json
import re

with open(r'C:\Users\cocum\.gemini\antigravity\brain\75f66194-345d-43a2-b041-ea081e7903de\.system_generated\steps\448\content.md', 'r', encoding='utf-8') as f:
    html = f.read()

data = {}

# Try to find JSON-LD
json_ld_matches = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.DOTALL | re.IGNORECASE)
for match in json_ld_matches:
    try:
        parsed = json.loads(match)
        if '@type' in parsed and parsed['@type'] == 'Product':
            data['ld'] = parsed
    except:
        pass

# Images
images = []
image_links = re.findall(r'href="([^"]+)"', html)
for m in image_links:
    if 'image/catalog' in m and m.endswith('.jpg') and not m.endswith('-200x200h.jpg') and not m.endswith('-600x315h.jpg') and 'logo' not in m:
        images.append(m)
        
# If not enough, try img tags
if len(images) < 2:
    img_srcs = re.findall(r'src="([^"]+\.jpg)"', html)
    for m in img_srcs:
         if 'image/catalog' in m:
             images.append(m)

# Clean images (remove resized versions if possible, or just keep unique)
images = list(set([img.replace('image/cache/', '') for img in images]))
# further deduplicate by removing size suffix like -1300x650h
clean_images = []
for img in images:
    img = re.sub(r'-\d+x\d+h?(\.jpg)$', r'\1', img)
    if img not in clean_images:
        clean_images.append(img)
data['images'] = clean_images

# Title
title_match = re.search(r'<h1 class="title page-title">([^<]+)</h1>', html)
if title_match:
    data['title'] = title_match.group(1).strip()
else:
    title_match = re.search(r'<title>([^<]+)</title>', html)
    if title_match:
        data['title'] = title_match.group(1).split('|')[0].strip()

# Price
price_new = re.search(r'class="price-new"[^>]*>([^<]+)<', html)
price_old = re.search(r'class="price-old"[^>]*>([^<]+)<', html)
data['price_new'] = price_new.group(1).strip() if price_new else None
data['price_old'] = price_old.group(1).strip() if price_old else None

if not data['price_new'] and 'ld' in data and 'offers' in data['ld']:
    data['price_new'] = data['ld']['offers'].get('price')

# Dimensions (table or div)
dimensions = []
table_matches = re.findall(r'<table[^>]*>(.*?)</table>', html, re.DOTALL | re.IGNORECASE)
for tbl in table_matches:
    if 'Genişlik' in tbl or 'Derinlik' in tbl:
        rows = re.findall(r'<tr[^>]*>(.*?)</tr>', tbl, re.DOTALL | re.IGNORECASE)
        for r in rows:
            cells = re.findall(r'<td[^>]*>(.*?)</td>', r, re.DOTALL | re.IGNORECASE)
            cells = [re.sub(r'<[^>]+>', '', c).replace('&nbsp;', ' ').strip() for c in cells]
            if len(cells) >= 2:
                dimensions.append(cells)
data['dimensions'] = dimensions

# Description and Features
features = []
desc_match = re.search(r'<div id="tab-description"(.*?)</div>', html, re.DOTALL | re.IGNORECASE)
if desc_match:
    desc_html = desc_match.group(1)
    # Get paragraphs
    p_matches = re.findall(r'<p[^>]*>(.*?)</p>', desc_html, re.DOTALL | re.IGNORECASE)
    data['description'] = ' '.join([re.sub(r'<[^>]+>', '', p).replace('&nbsp;', ' ').strip() for p in p_matches])
    
    li_matches = re.findall(r'<li[^>]*>(.*?)</li>', desc_html, re.DOTALL | re.IGNORECASE)
    features = [re.sub(r'<[^>]+>', '', li).replace('&nbsp;', ' ').strip() for li in li_matches]
data['features'] = features

with open('result.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
