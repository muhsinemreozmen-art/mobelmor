import urllib.request
import urllib.parse
import ssl
import re
from difflib import SequenceMatcher

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

CATEGORIES = [
    {"key": "living", "name": "Oturma Odası", "url": "https://www.mobilyaminegolden.com/koltuk-takimlari"},
    {"key": "dining", "name": "Yemek Odası", "url": "https://www.mobilyaminegolden.com/yemek-odalari"},
    {"key": "bedroom", "name": "Yatak Odası", "url": "https://www.mobilyaminegolden.com/yatak-odalari"},
    {"key": "office", "name": "Çalışma Odası", "url": "https://www.mobilyaminegolden.com/tv-uniteleri"}
]

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7'
}

def get_title_stem(title):
    cleaned = title.lower()
    cleaned = re.sub(r'\s+[\d\-\_\.a-z]+$', '', cleaned).strip()
    cleaned = re.sub(r'\b(takımı|takim|set|setler|koleksiyonu|serisi|masa|sandalye)\b', '', cleaned).strip()
    return cleaned

def is_duplicate(candidate_title, candidate_url, selected_items, threshold=0.70):
    c_stem = get_title_stem(candidate_title)
    for prev_title, prev_url in selected_items:
        p_stem = get_title_stem(prev_title)
        if c_stem and p_stem and c_stem == p_stem:
            return True, f"Exact stem match '{c_stem}'"
        ratio = SequenceMatcher(None, candidate_title.lower(), prev_title.lower()).ratio()
        if ratio >= threshold:
            return True, f"High title similarity ({int(ratio*100)}%) with '{prev_title}'"
    return False, ""

global_selected = []
global_urls = set()

for cat in CATEGORIES:
    print(f"\n=== CATEGORY: {cat['name']} ===")
    req = urllib.request.Request(cat['url'], headers=HEADERS)
    html = urllib.request.urlopen(req, context=ctx).read().decode('utf-8', errors='ignore')
    
    content_m = re.search(r'<div id="content"[^>]*>([\s\S]*?)<footer', html)
    c_html = content_m.group(1) if content_m else html
    
    name_links = re.findall(r'<div class="name"[^>]*>\s*<a href="(https://www\.mobilyaminegolden\.com/[^"]+)"[^>]*>(.*?)</a>', c_html, re.DOTALL)
    
    cat_selected = []
    for link, p_name in name_links:
        clean_l = link.split('?')[0].rstrip('/')
        p_title = re.sub(r'<[^>]+>', '', p_name).strip()
        
        if clean_l in global_urls or clean_l == cat['url']:
            continue
        if any(x in clean_l for x in ['javascript', 'route=', 'catalog', 'account', 'indirimli', 'teshir', 'stok', 'paketler', 'modeller', 'tekil', 'bazalar', 'yataklar', 'bebek', 'genc']):
            continue
        rel_path = clean_l.replace('https://www.mobilyaminegolden.com/', '')
        if '/' in rel_path:
            continue
            
        dup, reason = is_duplicate(p_title, clean_l, global_selected + cat_selected)
        if dup:
            print(f"  [SKIPPED DUP] '{p_title}' -> {reason}")
            continue
            
        global_urls.add(clean_l)
        cat_selected.append((p_title, clean_l))
        print(f"  [SELECTED #{len(cat_selected)}] '{p_title}'")
        if len(cat_selected) >= 5:
            break
            
    global_selected.extend(cat_selected)

print(f"\nTotal selected unique products: {len(global_selected)}")
