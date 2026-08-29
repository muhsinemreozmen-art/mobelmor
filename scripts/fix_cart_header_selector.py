import re

def fix_header_selector(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        code = f.read()

    # Replace the selector and class assignment
    old_code = """    const headerEl = drawer ? drawer.querySelector(".cart-header") : null;
    if (headerEl) {
        headerEl.className = "ty-cart-header";"""

    new_code = """    const headerEl = drawer ? drawer.querySelector(".cart-header, .ty-cart-header") : null;
    if (headerEl) {
        headerEl.className = "cart-header ty-cart-header";"""

    if old_code in code:
        code = code.replace(old_code, new_code)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(code)
        print(f"Fixed cart header selector in: {file_path}")
    else:
        print(f"Pattern not found in: {file_path}")

fix_header_selector(r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\app.js")
fix_header_selector(r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\detail.js")
