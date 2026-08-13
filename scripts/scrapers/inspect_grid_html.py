import urllib.request
import urllib.parse
import ssl
import re

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
}

def log(msg):
    print(msg, flush=True)

url = "https://www.mobilyaminegolden.com/koltuk-takimlari"
req = urllib.request.Request(url, headers=HEADERS)
with urllib.request.urlopen(req, timeout=10, context=ctx) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

# Find main content container e.g. <div id="content"...>
content_m = re.search(r'<div id="content"[^>]*>([\s\S]*?)<footer', html)
if content_m:
    c_html = content_m.group(1)
    log(f"Content block length: {len(c_html)}")
    
    # Find all product name links inside content block
    name_links = re.findall(r'<div class="name"[^>]*>\s*<a href="([^"]+)"[^>]*>(.*?)</a>', c_html, re.DOTALL)
    log(f"Found {len(name_links)} product name links inside content block:")
    for link, name in name_links:
        clean_n = re.sub(r'<[^>]+>', '', name).strip()
        log(f"  Name: {clean_n} -> {link}")
