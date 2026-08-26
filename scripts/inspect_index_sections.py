import re

with open('index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()

# Find all grids or containers where products might be rendered
grids = re.findall(r'id="([^"]*grid[^"]*|[^"]*product[^"]*|[^"]*featured[^"]*|[^"]*deal[^"]*|[^"]*slider[^"]*|[^"]*list[^"]*)"', index_html, re.I)
print("Product containers in index.html:", grids)

# Check all JS files loaded in index.html
scripts = re.findall(r'<script[^>]*src="([^"]+)"', index_html)
print("Scripts loaded in index.html:", scripts)

# Check if index.html has any hardcoded links with ?id=
hardcoded_ids = re.findall(r'urun-detay\.html\?id=(\d+)', index_html)
print("Hardcoded urun-detay links in index.html:", set(hardcoded_ids))

