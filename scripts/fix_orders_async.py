import re

eoz_c = open('eoz98.html', encoding='utf-8').read()

# Fix renderOrdersTable to be async
eoz_c = eoz_c.replace("function renderOrdersTable() {", "async function renderOrdersTable() {")

open('eoz98.html', 'w', encoding='utf-8').write(eoz_c)

# Verify script syntax
script = re.search(r'<script>([\s\S]*?)</script>', eoz_c).group(1)

# Check all functions in script to ensure no await is outside async
lines = script.split('\n')
for i, line in enumerate(lines, 1):
    if 'await ' in line:
        print(f"Line {i}: {line.strip()}")

print("Fixed renderOrdersTable to async!")
