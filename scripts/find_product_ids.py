import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open("js/app.js", "r", encoding="utf-8") as f:
    app_js = f.read()

start = app_js.find("const PRODUCTS = [")
bracket_level = 0
for i in range(start + len("const PRODUCTS = "), len(app_js)):
    if app_js[i] == '[': bracket_level += 1
    elif app_js[i] == ']':
        bracket_level -= 1
        if bracket_level == 0:
            end = i + 1
            break

products = json.loads(app_js[start + len("const PRODUCTS = "):end])

print(f"Total products: {len(products)}")
for p in sorted(products, key=lambda x: x['id']):
    print(f"ID {p['id']:2d} | Cat: {p['category']:8s} | Sub: {p.get('subcategory',''):12s} | Type: {p.get('productType',''):5s} | Img: {p['image']:32s} | Title: {p['title']}")
