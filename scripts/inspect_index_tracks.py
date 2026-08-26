content = open('index.html', encoding='utf-8').read()

import re
matches = re.findall(r'<div class="vivense-showcase-track[^"]*"[^>]*>([\s\S]*?)</div>\s*</div>\s*</div>\s*</section>', content)
print(f"Found {len(matches)} vivense-showcase-track divs in index.html")
for idx, m in enumerate(matches):
    cards = re.findall(r'<a href="([^"]+)" class="showcase-card', m)
    print(f"  Track {idx+1}: {len(cards)} cards -> {cards[:2]}")
