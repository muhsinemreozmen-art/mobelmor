import json
import re
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parents[2]
DATA_FILE = ROOT_DIR / "data" / "clean_5_products.json"

# Read clean_5_products.json
with open(DATA_FILE, "r", encoding="utf-8") as f:
    products = json.load(f)

json_str = json.dumps(products, ensure_ascii=False, indent=2)

def update_js(filename):
    filepath = ROOT_DIR / "js" / filename
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Replace const PRODUCTS = [ ... ];
    new_content = re.sub(
        r'const PRODUCTS = \[[\s\S]*?\n\];',
        f'const PRODUCTS = {json_str};',
        content
    )
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"Updated {filepath} successfully!")

update_js("app.js")
update_js("detail.js")

