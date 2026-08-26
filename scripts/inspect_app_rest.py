import re

content = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
if m:
    print(f"PRODUCTS ends at char index {m.end(1)}")
    rest = content[m.end(1):]
    lines = rest.strip().split('\n')
    print(f"Total lines after PRODUCTS: {len(lines)}")
    for l in lines[:40]:
        print("  ", l)
