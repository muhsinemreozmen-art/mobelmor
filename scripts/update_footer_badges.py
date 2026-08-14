import glob
import re

html_files = glob.glob('*.html')

footer_badge_html = '''<a href="./" class="brand-logo footer-logo-badge" aria-label="Mobelmor Ana Sayfa">
                        <div class="logo-main-title">
                            <span class="logo-text-mobel">mobel</span>
                            <span class="logo-mor-box">
                                <span class="logo-com-arrow">.com</span>
                                <span class="logo-text-mor">mor</span>
                            </span>
                        </div>
                    </a>'''

header_logo_html = '''<a href="./" class="brand-logo" id="brandLogo" aria-label="Mobelmor Ana Sayfa">
                <div class="logo-main-title">
                    <span class="logo-text-mobel">mobel</span>
                    <span class="logo-mor-box">
                        <span class="logo-com-arrow">.com</span>
                        <span class="logo-text-mor">mor</span>
                    </span>
                </div>
            </a>'''

for fpath in html_files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update header logo
    content = re.sub(r'<a href="\./" class="brand-logo" id="brandLogo"[^>]*>[\s\S]*?</a>', header_logo_html, content)
    content = re.sub(r'<a href="\./" class="brand-logo"[^>]*>[\s\S]*?</a>', header_logo_html, content, count=1)

    # 2. Update footer logo
    content = re.sub(r'<div class="logo-main-title footer-logo">[\s\S]*?</div>', footer_badge_html, content)
    content = re.sub(r'<a href="\./" class="brand-logo footer-logo"[^>]*>[\s\S]*?</a>', footer_badge_html, content)
    content = re.sub(r'<a href="\./" class="brand-logo footer-logo-badge"[^>]*>[\s\S]*?</a>', footer_badge_html, content)

    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Updated: {fpath}")

print("All HTML files updated with identical logo in header and footer badge.")
