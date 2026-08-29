import urllib.request
import re
import sys

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

# 1. Test Localhost HTTP responses
urls = [
    "http://127.0.0.1:5500/index.html",
    "http://127.0.0.1:5500/urun-detay.html?id=1",
    "http://127.0.0.1:5500/kategori.html",
    "http://127.0.0.1:5500/js/detail.js?v=20260829_1200",
    "http://127.0.0.1:5500/js/app.js?v=20260829_1200",
    "http://127.0.0.1:5500/js/checkout-helper.js?v=20260829_1200",
    "http://127.0.0.1:5500/css/styles.min.css?v=20260829_1200"
]

all_http_ok = True
for u in urls:
    try:
        req = urllib.request.urlopen(u, timeout=5)
        status = req.getcode()
        data = req.read()
        print(f"[HTTP {status}] {len(data)} bytes -> {u}")
    except Exception as e:
        print(f"[HTTP FAIL] {u}: {e}")
        all_http_ok = False

# 2. Test JS Brace Integrity
js_files = ["js/detail.js", "js/app.js", "js/checkout-helper.js", "js/store-service.js"]
for jf in js_files:
    with open(jf, "r", encoding="utf-8") as f:
        c = f.read()
    opens = c.count('{')
    closes = c.count('}')
    if opens == closes:
        print(f"[JS BRACE OK] {jf} -> ({opens} pairs)")
    else:
        print(f"[JS BRACE ERROR] {jf} -> {opens} opens vs {closes} closes")
        all_http_ok = False

if all_http_ok:
    print("\n>>> ALL VALIDATIONS PASSED: NO ERRORS FOUND! <<<")
else:
    print("\n>>> VALIDATION FAILED! <<<")
