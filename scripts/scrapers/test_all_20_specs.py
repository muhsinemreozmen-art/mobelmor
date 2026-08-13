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

def log(msg):
    print(msg, flush=True)

with open('data/clean_5_products.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

def parse_product_specs(html):
    specs = {
        "Üretim": "İnegöl / Bursa",
        "İskelet": "Fırınlanmış Gürgen Masif Ağaç",
        "Garanti": "2 Yıl Üretici Garantisi",
        "Kargo": "Tüm Türkiye Ücretsiz Teslimat"
    }

    tables = re.findall(r'<table[^>]*>([\s\S]*?)</table>', html)
    
    for tbl in tables:
        rows = re.findall(r'<tr[^>]*>([\s\S]*?)</tr>', tbl)
        
        parsed_rows = []
        for r in rows:
            cols = re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', r, re.DOTALL)
            clean_cols = [re.sub(r'<[^>]+>', '', c).strip() for c in cols]
            clean_cols = [' '.join(c.split()) for c in clean_cols if c.strip()]
            if clean_cols:
                parsed_rows.append(clean_cols)

        if not parsed_rows:
            continue

        is_dim_table = any('genişlik' in ' '.join(r).lower() or 'derinlik' in ' '.join(r).lower() for r in parsed_rows[:2])
        if is_dim_table:
            headers = []
            for r in parsed_rows[:2]:
                if any('genişlik' in c.lower() for c in r):
                    headers = r
                    break
            
            dim_texts = []
            for r in parsed_rows:
                if r == headers or any(x in ' '.join(r).lower() for x in ['takım modül', 'modül fiyatları', 'birim fiyat']):
                    continue
                if len(r) >= 3:
                    mod_name = r[0]
                    g = r[1] if len(r) > 1 and r[1] != '-' else ''
                    d = r[2] if len(r) > 2 and r[2] != '-' else ''
                    y = r[3] if len(r) > 3 and r[3] != '-' else ''
                    
                    parts = []
                    if g: parts.append(f"G: {g} cm")
                    if d: parts.append(f"D: {d} cm")
                    if y: parts.append(f"Y: {y} cm")
                    
                    if parts:
                        dim_texts.append(f"{mod_name} ({', '.join(parts)})")
            
            if dim_texts:
                specs["Takım Ölçüleri"] = " | ".join(dim_texts)

        else:
            for r in parsed_rows:
                if len(r) == 2:
                    k, v = r[0], r[1]
                    if k.lower() in ['özellik adı', 'özellik', 'başlık', 'modül adı', 'modül', 'özellikleri'] and v.lower() in ['özellik bilgisi', 'açıklama', 'bilgi', 'değer', 'detay']:
                        continue
                    if len(k) < 35 and len(v) < 80 and k != v:
                        specs[k] = v

    return specs

for p in products:
    url = p['sourceUrl']
    log(f"\nID #{p['id']}: {p['title']} ({url})")
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=10, context=ctx) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            sp = parse_product_specs(html)
            for k, v in sp.items():
                log(f"  * {k}: {v}")
    except Exception as e:
        log(f"  Error: {e}")
