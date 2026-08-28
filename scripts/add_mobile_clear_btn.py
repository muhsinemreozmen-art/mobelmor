import glob
import re

html_files = glob.glob("*.html")
for path in html_files:
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    if 'id="mobileSearchInput"' in content and 'class="clear-btn"' not in content[content.find('mobileSearchInput')-50:content.find('mobileSearchInput')+250]:
        pattern = r'(<input[^>]*id="mobileSearchInput"[^>]*>)'
        replacement = r'\1\n                <button type="button" class="clear-btn" style="display: none;" aria-label="Temizle"><i class="fa-solid fa-xmark"></i></button>'
        new_content = re.sub(pattern, replacement, content)
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated {path}")
