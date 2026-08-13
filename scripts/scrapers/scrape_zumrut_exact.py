import urllib.request
import re

url = "https://www.mobilyaminegolden.com/zumrut-koltuk-takimi-2-3130"
headers = {'User-Agent': 'Mozilla/5.0'}
req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8')

# Search all images containing zumrut
imgs = re.findall(r'(https?://[^\s"\'<>]zumrut[^\s"\'<>]*?\.(?:jpg|jpeg|png|webp))', html, re.I)
seen = set()
for img in imgs:
    if img not in seen and not re.search(r'-\d{2,3}x\d{2,3}[w_h]?\.', img):
        seen.add(img)
        print("ZUMRUT HD:", img)

# Also check description and specs from html
desc_match = re.search(r'id=["\']tab-description["\'][^>]*>(.*?)</div>', html, re.DOTALL | re.I)
if desc_match:
    desc = re.sub(r'<[^>]+>', ' ', desc_match.group(1)).strip()
    print("Description:", desc[:200])
