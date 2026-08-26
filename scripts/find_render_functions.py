import re

content = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
rest = content[m.end(1):]

for line in rest.split('\n'):
    if 'render' in line.lower() or 'filter' in line.lower() or 'products' in line.lower() or 'limit' in line.lower() or 'slice' in line.lower():
        if len(line.strip()) < 120 and ('function' in line or '=>' in line or 'const' in line or 'let' in line):
            print(line.strip())
