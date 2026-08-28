with open("css/styles.css", "r", encoding="utf-8") as f:
    css = f.read()

# Find the start of cart-drawer section in css lines
lines = css.split('\n')
for i, line in enumerate(lines):
    if 'cart-drawer' in line or 'cart-body' in line or 'cart-overlay' in line or 'body.modal-open' in line:
        print(f"Line {i+1}: {line.strip()[:80]}")
