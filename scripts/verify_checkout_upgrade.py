import os
import re
import sys

# Ensure UTF-8 output
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8")

files_to_check = [
    "index.html",
    "urun-detay.html",
    "product-detail.html",
    "kategori.html",
    "category.html",
    "js/checkout-helper.js",
    "js/app.js",
    "js/detail.js",
    "css/styles.css",
    "css/styles.min.css"
]

all_passed = True
for f in files_to_check:
    if not os.path.exists(f):
        print(f"[MISSING] File: {f}")
        all_passed = False
        continue
    size = os.path.getsize(f)
    print(f"[OK] ({size} bytes): {f}")

# Check HTML files for key elements
required_elements = [
    'id="checkoutOverlay"',
    'id="checkoutCity"',
    'id="checkoutDistrict"',
    'id="invoiceTypeBireysel"',
    'id="invoiceTypeKurumsal"',
    'id="fabricSampleOverlay"',
    'js/checkout-helper.js'
]

for html in ["index.html", "urun-detay.html", "kategori.html"]:
    with open(html, "r", encoding="utf-8") as fp:
        c = fp.read()
    for el in required_elements:
        if el not in c:
            print(f"[FAIL] Missing {el} in {html}")
            all_passed = False
        else:
            print(f"[OK] Found {el} in {html}")

if all_passed:
    print("\n>>> ALL VERIFICATION CHECKS PASSED SUCCESSFULLY! <<<")
else:
    print("\n>>> SOME CHECKS FAILED. <<<")
