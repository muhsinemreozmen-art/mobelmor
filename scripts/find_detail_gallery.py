content = open('js/detail.js', encoding='utf-8').read()

import re
lines = content.split('\n')
for idx, l in enumerate(lines):
    if 'gallery' in l.lower() or 'img' in l.lower() or 'photo' in l.lower():
        if idx > 2500 and ('function' in l or '=>' in l or 'document.getElementById' in l or 'innerHTML' in l or 'src' in l):
            print(f"Line {idx+1}: {l.strip()[:100]}")
