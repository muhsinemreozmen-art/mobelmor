import re

with open('app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

# Extract PRODUCTS array from app.js
match = re.search(r'const PRODUCTS = (\[.*?\]);', app_js, re.DOTALL)
if not match:
    print("Could not find PRODUCTS in app.js")
    exit(1)

products_json_str = match.group(1)

with open('detail.js', 'r', encoding='utf-8') as f:
    detail_js = f.read()

# Replace PRODUCTS array in detail.js
new_detail_js = re.sub(
    r'const PRODUCTS = \[.*?\];',
    f'const PRODUCTS = {products_json_str};',
    detail_js,
    flags=re.DOTALL
)

with open('detail.js', 'w', encoding='utf-8') as f:
    f.write(new_detail_js)

print("Successfully synced PRODUCTS to detail.js!")
