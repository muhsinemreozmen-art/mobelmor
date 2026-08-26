import json
import re

# Let's inspect how images were assigned in build_accurate_matching_products.py
content = open('scripts/importers/build_accurate_matching_products.py', encoding='utf-8').read()

# Let's find all products definitions
matches = re.findall(r'\{\s*"set_id":\s*(\d+),\s*"title":\s*"([^"]+)",[\s\S]*?"base_asset":\s*"([^"]+)"', content)
for m in matches:
    print(f"Set ID {m[0]}: {m[1]} -> base: {m[2]}")
