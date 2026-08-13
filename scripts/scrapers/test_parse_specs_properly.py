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

def parse_product_specs(html):
    specs = {
        "Üretim": "İnegöl / Bursa",
        "İskelet": "Fırınlanmış Gürgen Masif Ağaç",
        "Garanti": "2 Yıl Üretici Garantisi",
        "Kargo": "Tüm Türkiye Ücretsiz Teslimat"
    }

    # Find all table elements
    tables = re.findall(r'<table[^>]*>([\s\S]*?)</table>', html)
    
    for tbl in tables:
        rows = re.findall(r'<tr[^>]*>([\s\S]*?)</tr>', tbl)
        
        # Check table headers / columns
        parsed_rows = []
        for r in rows:
            cols = re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', r, re.DOTALL)
            clean_cols = [re.sub(r'<[^>]+>', '', c).strip() for c in cols]
            clean_cols = [' '.join(c.split()) for c in clean_cols if c.strip()]
            if clean_cols:
                parsed_rows.append(clean_cols)

        if not parsed_rows:
            continue

        # Case A: Module Dimensions Table (4 or 5 columns e.g. Modül, Genişlik, Derinlik, Yükseklik)
        is_dim_table = any('genişlik' in ' '.join(r).lower() or 'derinlik' in ' '.join(r).lower() for r in parsed_rows[:2])
        if is_dim_table:
            # First row or second row is header
            headers = []
            for r in parsed_rows[:2]:
                if any('genişlik' in c.lower() for c in r):
                    headers = r
                    break
            
            dim_texts = []
            for r in parsed_rows:
                if r == headers or any('takım' in c.lower() or 'ölçü' in c.lower() for c in r):
                    continue
                if len(r) >= 4:
                    mod_name = r[0]
                    g = r[1]
                    d = r[2]
                    y = r[3] if len(r) > 3 else '-'
                    dim_texts.append(f"{mod_name}: G:{g} cm x D:{d} cm x Y:{y} cm")
            
            if dim_texts:
                specs["Takım Ölçüleri"] = " | ".join(dim_texts)

        # Case B: 2-Column Key-Value Specs Table
        else:
            for r in parsed_rows:
                if len(r) == 2:
                    k, v = r[0], r[1]
                    # Filter out placeholders, empty strings or headers like "Özellik Adı" -> "Özellik Bilgisi"
                    if k.lower() in ['özellik adı', 'özellik', 'başlık', 'modül adı', 'modül'] and v.lower() in ['özellik bilgisi', 'açıklama', 'bilgi', 'değer']:
                        continue
                    if len(k) < 35 and len(v) < 80:
                        specs[k] = v

    return specs

test_urls = [
    "https://www.mobilyaminegolden.com/gold-koltuk-takimi",
    "https://www.mobilyaminegolden.com/zumrut-koltuk-takimi-2-3130",
    "https://www.mobilyaminegolden.com/icon-yuvarlak-masa-sandalye",
    "https://www.mobilyaminegolden.com/bohem-dolap"
]

for url in test_urls:
    log(f"\n==========================================")
    log(f"Parsing Specs for: {url}")
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=10, context=ctx) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        specs = parse_product_specs(html)
        log("Clean Extracted Specs Dictionary:")
        for k, v in specs.items():
            log(f"  * {k}: {v}")
