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

test_urls = [
    "https://www.mobilyaminegolden.com/gold-koltuk-takimi",
    "https://www.mobilyaminegolden.com/zumrut-koltuk-takimi-2-3130",
    "https://www.mobilyaminegolden.com/bohem-dolap"
]

for url in test_urls:
    log(f"\n==========================================")
    log(f"URL: {url}")
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=10, context=ctx) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            
            # Find description tab / specs tab / tables
            # Look for <table> blocks in html
            tables = re.findall(r'<table[^>]*>([\s\S]*?)</table>', html)
            log(f"Found {len(tables)} table elements in page HTML")
            
            for idx, tbl in enumerate(tables, 1):
                rows = re.findall(r'<tr[^>]*>([\s\S]*?)</tr>', tbl)
                log(f"  Table #{idx} has {len(rows)} rows:")
                for r in rows:
                    cols = re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', r, re.DOTALL)
                    clean_cols = [re.sub(r'<[^>]+>', '', c).strip() for c in cols if re.sub(r'<[^>]+>', '', c).strip()]
                    if clean_cols:
                        log(f"    Row: {' | '.join(clean_cols)}")

    except Exception as e:
        log(f"Error: {e}")
