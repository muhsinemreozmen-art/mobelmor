import re

content = open('index.html', encoding='utf-8').read()
headings = re.findall(r'<h[23][^>]*class="[^"]*"[^>]*>([\s\S]*?)</h[23]>', content)
for h in headings[:15]:
    clean = re.sub(r'<[^>]+>', '', h).strip()
    print("Heading:", clean)
