import glob
import re

html_files = glob.glob('*.html')

standard_fonts_block = '''    <!-- Fonts & Icons (Non-blocking) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <style>
      @font-face { font-family: 'Font Awesome 6 Free'; font-display: swap; }
      @font-face { font-family: 'Font Awesome 6 Brands'; font-display: swap; }
      @font-face {
        font-family: 'Plus Jakarta Sans';
        font-style: normal;
        font-weight: 400 900;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/plusjakartasans/v8/L0x5DF4xlVMF-BfR8bXMIhJHg45mwgGE686_2g.woff2) format('woff2');
      }
    </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" media="print" onload="this.media='all'">
    <noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></noscript>'''

for fpath in html_files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace existing Fonts & Icons block
    pattern = re.compile(r'<!-- Fonts & Icons \(Non-blocking\) -->[\s\S]*?(?=<!-- Stylesheet -->)', re.MULTILINE)
    
    if pattern.search(content):
        content = pattern.sub(standard_fonts_block + '\n    \n    ', content)
    else:
        # If not found with exact comment, replace between preconnect and stylesheet
        pattern2 = re.compile(r'<link rel="preconnect" href="https://fonts\.googleapis\.com">[\s\S]*?(?=<!-- Stylesheet -->)', re.MULTILINE)
        if pattern2.search(content):
            content = pattern2.sub(standard_fonts_block + '\n    \n    ', content)

    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Synchronized fonts in: {fpath}")

print("ALL HTML files synchronized with instant Plus Jakarta Sans font-face.")
