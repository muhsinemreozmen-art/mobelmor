import urllib.request
import os
from accurate_js_linter import check_js_syntax

print("--- RUNNING FULL SITE & STRICT JS PARSER AUDIT ---")

urls = [
    "http://127.0.0.1:5500/index.html",
    "http://127.0.0.1:5500/urun-detay.html?id=1",
    "http://127.0.0.1:5500/urun-detay.html?id=54&slug=zen-modern-yatak-odasi-takimi",
    "http://127.0.0.1:5500/kategori.html",
    "http://127.0.0.1:5500/js/detail.js?v=20260829_1200",
    "http://127.0.0.1:5500/js/app.js?v=20260829_1200",
    "http://127.0.0.1:5500/js/auth-modal.js?v=20260829_1200",
    "http://127.0.0.1:5500/js/checkout-helper.js?v=20260829_1200",
    "http://127.0.0.1:5500/css/styles.min.css?v=20260829_1200"
]

all_ok = True

# 1. HTTP 200 checks
for url in urls:
    try:
        req = urllib.request.urlopen(url)
        content = req.read()
        print(f"[HTTP {req.status}] {len(content)} bytes -> {url}")
    except Exception as e:
        print(f"[FAIL] {url} -> {e}")
        all_ok = False

# 2. Strict AST/Token State Machine JS Syntax Validation
js_files = ["js/detail.js", "js/app.js", "js/auth-modal.js", "js/checkout-helper.js", "js/store-service.js"]
for fpath in js_files:
    if os.path.exists(fpath):
        if not check_js_syntax(fpath):
            all_ok = False

if all_ok:
    print("\n>>> ALL VALIDATIONS PASSED: ZERO ERRORS FOUND! <<<")
else:
    print("\n>>> VALIDATION FAILED! <<<")
    exit(1)
