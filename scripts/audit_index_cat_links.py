import re

content = open('index.html', encoding='utf-8').read()
kategori_links = re.findall(r'href="(kategori\.html[^"]*)"', content)
print(f"Total category links in index.html: {len(kategori_links)}")
for l in sorted(set(kategori_links)):
    print("  ", l)
