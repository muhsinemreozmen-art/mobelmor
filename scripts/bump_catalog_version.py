import re

# Update version in js/store-service.js
c = open('js/store-service.js', encoding='utf-8').read()
c = re.sub(r'const CATALOG_VERSION = "[^"]+";', 'const CATALOG_VERSION = "20260826_STUDIO_CROPS_V2";', c)
open('js/store-service.js', 'w', encoding='utf-8').write(c)
print("Updated CATALOG_VERSION in js/store-service.js to 20260826_STUDIO_CROPS_V2")
