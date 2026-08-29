import re

with open("urun-detay.html", "r", encoding="utf-8") as f:
    content = f.read()

print("checkoutOverlay count:", content.count('id="checkoutOverlay"'))
print("cartDrawer count:", content.count('id="cartDrawer"'))
print("fabricSampleOverlay count:", content.count('id="fabricSampleOverlay"'))
print("detailGrid count:", content.count('id="detailGrid"'))

# Let's inspect where checkoutOverlay occurs
for m in re.finditer(r'<div class="modal-overlay" id="checkoutOverlay">', content):
    print(f"checkoutOverlay match at pos {m.start()}")
