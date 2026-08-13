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

# Find first product-layout div
m = re.search(r'<div class="product-layout[^">]*">([\s\S]*?)<div class="button-group', html)
if m:
    log("=== First Product Layout Block HTML ===")
    log(m.group(1)[:1500])
