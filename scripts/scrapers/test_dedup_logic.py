import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

import urllib.request
import re
from difflib import SequenceMatcher

def normalize_title_stem(title):
    cleaned = title.lower()
    cleaned = re.sub(r'[\d\-\_\.]+$', '', cleaned).strip()
    cleaned = re.sub(r'\b(takımı|takim|set|setler|koleksiyonu|serisi)\b', '', cleaned).strip()
    return cleaned

def is_similar(t1, t2, threshold=0.70):
    stem1 = normalize_title_stem(t1)
    stem2 = normalize_title_stem(t2)
    if stem1 == stem2:
        return True
    ratio = SequenceMatcher(None, stem1, stem2).ratio()
    return ratio >= threshold

dining_urls = [
    "https://www.mobilyaminegolden.com/icon-yuvarlak-masa-sandalye",
    "https://www.mobilyaminegolden.com/icon-mese-masa-sandalye",
    "https://www.mobilyaminegolden.com/forte-mese-masa-sandalye",
    "https://www.mobilyaminegolden.com/seramik-mutfak-masasi-81",
    "https://www.mobilyaminegolden.com/seramik-mutfak-masasi-74",
    "https://www.mobilyaminegolden.com/ipek-yemek-odasi-2",
    "https://www.mobilyaminegolden.com/seramik-mutfak-masasi-73",
    "https://www.mobilyaminegolden.com/sahra-yemek-odasi-2-3194",
    "https://www.mobilyaminegolden.com/royal-yemek-odasi"
]

def fetch_title(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req, timeout=5).read().decode('utf-8', errors='ignore')
        m = re.search(r'<h1[^>]*>(.*?)</h1>', html, re.DOTALL)
        if m:
            return re.sub(r'<[^>]+>', '', m.group(1)).strip()
    except Exception as e:
        pass
    slug = url.split('/')[-1]
    return slug.replace('-', ' ').title()

print("--- Testing Deduplication Logic ---", flush=True)
selected = []
for url in dining_urls:
    title = fetch_title(url)
    is_dup = False
    for prev_title, prev_url in selected:
        if is_similar(title, prev_title):
            print(f"[SKIPPED DUPLICATE] '{title}' (Similar to '{prev_title}')", flush=True)
            is_dup = True
            break
    if not is_dup:
        selected.append((title, url))
        print(f"[ACCEPTED UNIQUE] '{title}'", flush=True)
        if len(selected) == 5:
            break

print("\n--- Final 5 100% Unique Dining Products ---", flush=True)
for t, u in selected:
    print(f" * {t}", flush=True)
