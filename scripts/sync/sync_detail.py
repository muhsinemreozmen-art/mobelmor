import re
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parents[2]
APP_JS = ROOT_DIR / 'js' / 'app.js'
DETAIL_JS = ROOT_DIR / 'js' / 'detail.js'

with open(APP_JS, 'r', encoding='utf-8') as f:
    app_js = f.read()

# Extract PRODUCTS array from app.js
match = re.search(r'const PRODUCTS = (\[.*?\]);', app_js, re.DOTALL)
if not match:
    print("Could not find PRODUCTS in app.js")
    exit(1)

products_json_str = match.group(1)

with open(DETAIL_JS, 'r', encoding='utf-8') as f:
    detail_js = f.read()

# Replace PRODUCTS array in detail.js
new_detail_js = re.sub(
    r'const PRODUCTS = \[.*?\];',
    f'const PRODUCTS = {products_json_str};',
    detail_js,
    flags=re.DOTALL
)

with open(DETAIL_JS, 'w', encoding='utf-8') as f:
    f.write(new_detail_js)

print("Successfully synced PRODUCTS to detail.js!")

