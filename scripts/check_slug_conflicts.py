import json
import re

with open('products.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

# Let's inspect url-cleaner.js slugify function
with open('js/url-cleaner.js', 'r', encoding='utf-8') as f:
    cleaner_js = f.read()

print("Checking slugify and URL resolution for all 85 products...")

# In Python, simulate the JS slugify:
tr_map = {
    'ç':'c', 'Ç':'c', 'ğ':'g', 'Ğ':'g', 'ı':'i', 'I':'i', 
    'İ':'i', 'ö':'o', 'Ö':'o', 'ş':'s', 'Ş':'s', 'ü':'u', 'Ü':'u'
}
def py_slugify(text):
    if not text: return ''
    res = ''
    for char in text.lower():
        res += tr_map.get(char, char)
    res = re.sub(r'[^a-z0-9\s-]', '', res)
    res = re.sub(r'\s+', '-', res.strip())
    res = re.sub(r'-+', '-', res)
    return res

slug_to_id = {}
for p in products:
    slug = py_slugify(p['title'])
    if slug in slug_to_id:
        print(f"DUPLICATE SLUG! '{slug}' belongs to ID {slug_to_id[slug]} and ID {p['id']} ({p['title']})")
    slug_to_id[slug] = p['id']

print(f"Total unique slugs: {len(slug_to_id)} out of {len(products)} products")

