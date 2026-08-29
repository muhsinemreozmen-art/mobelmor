import os

app_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\app.js"
with open(app_path, "r", encoding="utf-8") as f:
    code = f.read()

# Check where DOMContentLoaded is needed
target = """    document.getElementById("openCheckoutBtn")?.addEventListener("click", () => {
        document.getElementById("cartDrawer")?.classList.remove("active");
        document.getElementById("cartOverlay")?.classList.remove("active");
        document.body.classList.remove("cart-open");
        const totalEl = document.getElementById("checkoutTotal");
        if (totalEl) totalEl.textContent = formatPrice(finalTotal);
        if (typeof openCheckoutModal === 'function') {
            openCheckoutModal();
        } else {
            document.getElementById("checkoutOverlay")?.classList.add("active");
            document.body.classList.add("modal-open");
        }
    });
};"""

replacement = target + """

document.addEventListener("DOMContentLoaded", () => {
  createGlobalLightbox();
  renderProducts();
  updateBadges();
  renderCart();
  if (typeof initLiveSearchEngine === 'function') initLiveSearchEngine();"""

if target in code and 'document.addEventListener("DOMContentLoaded"' not in code:
    code = code.replace(target, replacement, 1)
    with open(app_path, "w", encoding="utf-8") as f:
        f.write(code)
    print("Added missing DOMContentLoaded to js/app.js")

# Verify braces now
opens = code.count('{')
closes = code.count('}')
print(f"app.js braces now -> Opens: {opens}, Closes: {closes}")
