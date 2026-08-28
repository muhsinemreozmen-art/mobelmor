with open("css/styles.css", "r", encoding="utf-8") as f:
    css = f.read()

# Find the start of cart-drawer section
idx = css.find(".cart-drawer")
print(f"Found at position {idx}")
# Print surrounding area
print(css[max(0, idx-200):idx+800])
