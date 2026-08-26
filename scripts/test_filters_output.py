import json
import re

content = open('js/app.js', encoding='utf-8').read()
m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
products = json.loads(m.group(1))

def test_filter(cat, sub="all", query=""):
    filtered = []
    for p in products:
        matches_cat = True
        if cat != "all":
            if cat in ["tv-unit", "tv-uniteleri", "office"]:
                matches_cat = (p.get("category") == "tv-unit" or p.get("subcategory") == "consoles" or "tv" in p.get("title", "").lower())
            else:
                matches_cat = (p.get("category") == cat)
        
        matches_sub = (sub == "all" or p.get("subcategory") == sub)
        matches_search = (not query or query.lower() in p.get("title", "").lower() or query.lower() in p.get("material", "").lower())
        if matches_cat and matches_sub and matches_search:
            filtered.append(p)
    return filtered

print(f"Total 'all': {len(test_filter('all'))} (Expected: 85)")
print(f"Total 'living': {len(test_filter('living'))} (Expected: 26)")
print(f"Total 'dining': {len(test_filter('dining'))} (Expected: 24)")
print(f"Total 'bedroom': {len(test_filter('bedroom'))} (Expected: 35)")
print(f"Total 'tv-unit': {len(test_filter('tv-unit'))} (Expected: 6)")
print(f"Total 'sofas' in living: {len(test_filter('living', 'sofas'))}")
print(f"Total 'beds' in bedroom: {len(test_filter('bedroom', 'beds'))}")
print(f"Total 'wardrobes' in bedroom: {len(test_filter('bedroom', 'wardrobes'))}")
