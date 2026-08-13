import urllib.request
import re

url = 'https://www.mobilyaminegolden.com/yemek-odalari'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')

# Match product URLs from content grid
content_match = re.search(r'<div[^>]*id=["\']content["\'][^>]*>(.*?)<footer', html, re.DOTALL)
content_html = content_match.group(1) if content_match else html

raw_urls = re.findall(r'href=["\'](https://www\.mobilyaminegolden\.com/[^"\'?#]+)["\']', content_html)
unique_urls = []

skip_keywords = [
    'login', 'register', 'cart', 'checkout', 'contact', 'account', 'wishlist',
    'compare', 'blog', 'indirimli', 'teshir', 'kategori', 'koltuk', 'yatak',
    'tv-unitesi', 'hakkimizda', 'iletisim', 'cerez', 'kvkk', 'gizlilik', 'yemek-odalari'
]

for href in raw_urls:
    slug = href.split('/')[-1]
    if slug and not any(k in slug for k in skip_keywords) and href not in unique_urls:
        unique_urls.append(href)

print(f"Extracted {len(unique_urls)} unique dining URLs:")
for u in unique_urls[:20]:
    print(f" - {u}")
