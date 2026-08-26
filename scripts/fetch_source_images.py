import urllib.request
import urllib.parse
import ssl
import re
import json

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
}

urls = [
    ("p1_gold", "https://www.mobilyaminegolden.com/gold-koltuk-takimi"),
    ("p2_zumrut", "https://www.mobilyaminegolden.com/zumrut-koltuk-takimi"),
    ("p3_bohem", "https://www.mobilyaminegolden.com/bohem-koltuk-takimi"),
    ("p4_mono", "https://www.mobilyaminegolden.com/mono-koltuk-takimi"),
    ("p5_leon", "https://www.mobilyaminegolden.com/leon-koltuk-takimi")
]

for label, url in urls:
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        html = urllib.request.urlopen(req, context=ctx, timeout=10).read().decode('utf-8', errors='ignore')
        # find popup or main images
        imgs = re.findall(r'href="([^"]+\.(?:jpg|jpeg|png|webp))"', html)
        img_srcs = re.findall(r'src="([^"]+\.(?:jpg|jpeg|png|webp))"', html)
        all_imgs = list(set([i for i in (imgs + img_srcs) if 'cache' in i or 'catalog' in i]))
        print(f"\n{label} ({url}): Found {len(all_imgs)} images")
        for im in all_imgs[:10]:
            print("  ", im)
    except Exception as e:
        print(f"Error for {label}: {e}")
