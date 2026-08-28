import glob
import re

for f in glob.glob("*.html"):
    with open(f, "r", encoding="utf-8") as fp:
        c = fp.read()
    
    # Check if authModalOverlay is present
    if 'id="authModalOverlay"' in c:
        # Regex to replace authModalOverlay and its inner static content
        new_c = re.sub(
            r'<!-- Universal Auth Modal[^>]*-->\s*<div class="modal-overlay" id="authModalOverlay">[\s\S]*?</div>\s*</div>',
            '<!-- Universal Auth Modal (Giriş Yap / Üye Ol) -->\n    <div class="modal-overlay" id="authModalOverlay" style="display:none;"></div>',
            c
        )
        if new_c != c:
            with open(f, "w", encoding="utf-8") as fp:
                fp.write(new_c)
            print(f"Cleaned {f}")
        else:
            print(f"Skipped/Unmatched {f}")
