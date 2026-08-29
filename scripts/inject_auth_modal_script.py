import os
import re

html_files = [
    r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\index.html",
    r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\urun-detay.html",
    r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\product-detail.html",
    r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\kategori.html",
    r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\category.html",
    r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\hesabim.html",
    r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\siparislerim.html"
]

tag = '<script src="js/auth-modal.js?v=20260829_1200" defer></script>'

for file_path in html_files:
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            code = f.read()

        if "js/auth-modal.js" not in code:
            # Insert before js/app.js or js/detail.js
            if '<script src="js/app.js' in code:
                code = code.replace('<script src="js/app.js', tag + '\n    <script src="js/app.js', 1)
            elif '<script src="js/detail.js' in code:
                code = code.replace('<script src="js/detail.js', tag + '\n    <script src="js/detail.js', 1)
            elif '</body>' in code:
                code = code.replace('</body>', '    ' + tag + '\n</body>', 1)

            with open(file_path, "w", encoding="utf-8") as f:
                f.write(code)
            print(f"Injected auth-modal.js into: {file_path}")
        else:
            print(f"auth-modal.js already in: {file_path}")
