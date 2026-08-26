with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
sections = re.findall(r'<section[^>]*>[\s\S]*?</section>', text)
print(f"Total sections in index.html: {len(sections)}")
for idx, sec in enumerate(sections):
    sec_id = re.search(r'id="([^"]+)"', sec)
    sec_class = re.search(r'class="([^"]+)"', sec)
    sec_h2 = re.search(r'<h2[^>]*>([\s\S]*?)</h2>', sec)
    id_str = sec_id.group(1) if sec_id else "no-id"
    class_str = sec_class.group(1) if sec_class else "no-class"
    h2_str = re.sub(r'<[^>]+>', '', sec_h2.group(1)).strip() if sec_h2 else "no-h2"
    print(f"Section #{idx+1}: ID='{id_str}', Class='{class_str}', Title='{h2_str}'")

