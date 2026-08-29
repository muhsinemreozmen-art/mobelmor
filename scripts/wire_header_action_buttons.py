import re

app_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\app.js"
with open(app_path, "r", encoding="utf-8") as f:
    app_code = f.read()

header_buttons_listeners = """
  // =========================================================================
  // HEADER ACTION BUTTONS ENGINE (TRUCK, WISHLIST, CART, USER AUTH)
  // =========================================================================

  // 1. Cart Drawer Trigger
  document.getElementById("cartBtn")?.addEventListener("click", (e) => {
    e.preventDefault();
    renderCart();
    document.getElementById("cartDrawer")?.classList.add("active");
    document.getElementById("cartOverlay")?.classList.add("active");
    document.body.classList.add("cart-open");
    if (typeof lockBodyScroll === 'function') lockBodyScroll();
  });

  document.getElementById("closeCartBtn")?.addEventListener("click", () => {
    document.getElementById("cartDrawer")?.classList.remove("active");
    document.getElementById("cartOverlay")?.classList.remove("active");
    document.body.classList.remove("cart-open");
    if (typeof unlockBodyScroll === 'function') unlockBodyScroll();
  });

  document.getElementById("cartOverlay")?.addEventListener("click", () => {
    document.getElementById("cartDrawer")?.classList.remove("active");
    document.getElementById("cartOverlay")?.classList.remove("active");
    document.body.classList.remove("cart-open");
    if (typeof unlockBodyScroll === 'function') unlockBodyScroll();
  });

  // 2. Wishlist Drawer Trigger
  document.getElementById("wishlistBtn")?.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof renderWishlist === 'function') renderWishlist();
    document.getElementById("wishlistDrawer")?.classList.add("active");
    document.getElementById("wishlistOverlay")?.classList.add("active");
    document.body.classList.add("wishlist-open");
    if (typeof lockBodyScroll === 'function') lockBodyScroll();
  });

  document.getElementById("closeWishlistBtn")?.addEventListener("click", () => {
    document.getElementById("wishlistDrawer")?.classList.remove("active");
    document.getElementById("wishlistOverlay")?.classList.remove("active");
    document.body.classList.remove("wishlist-open");
    if (typeof unlockBodyScroll === 'function') unlockBodyScroll();
  });

  document.getElementById("wishlistOverlay")?.addEventListener("click", () => {
    document.getElementById("wishlistDrawer")?.classList.remove("active");
    document.getElementById("wishlistOverlay")?.classList.remove("active");
    document.body.classList.remove("wishlist-open");
    if (typeof unlockBodyScroll === 'function') unlockBodyScroll();
  });

  // 3. Order Track Dropdown
  const orderTrackBtn = document.getElementById("orderTrackBtn");
  const orderTrackDropdown = document.getElementById("orderTrackDropdown");

  orderTrackBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById("userMenuDropdown")?.classList.remove("active");
    if (orderTrackDropdown) {
      orderTrackDropdown.classList.toggle("active");
    }
  });

  // 4. Header Auth / Profile Button
  const headerAuthBtn = document.getElementById("headerAuthBtn");
  const userMenuDropdown = document.getElementById("userMenuDropdown");

  headerAuthBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    orderTrackDropdown?.classList.remove("active");
    const user = (typeof getCurrentUser === 'function') ? getCurrentUser() : null;
    if (!user) {
      if (typeof window.openAuthModal === 'function') {
        window.openAuthModal("login");
      } else if (typeof openAuthModal === 'function') {
        openAuthModal("login");
      }
    } else {
      if (userMenuDropdown) {
        userMenuDropdown.classList.toggle("active");
      }
    }
  });

  // Close header dropdowns on outside click
  document.addEventListener("click", (e) => {
    if (!e.target.closest("#orderTrackContainer")) {
      orderTrackDropdown?.classList.remove("active");
    }
    if (!e.target.closest("#headerAuthContainer")) {
      userMenuDropdown?.classList.remove("active");
    }
  });
"""

# Insert right after document.addEventListener("DOMContentLoaded", () => { in js/app.js
app_code = re.sub(
    r'document\.addEventListener\("DOMContentLoaded", \(\) => \{\s*',
    'document.addEventListener("DOMContentLoaded", () => {\n' + header_buttons_listeners + '\n',
    app_code,
    count=1
)

with open(app_path, "w", encoding="utf-8") as f:
    f.write(app_code)

print("Successfully injected header action button listeners into app.js!")
