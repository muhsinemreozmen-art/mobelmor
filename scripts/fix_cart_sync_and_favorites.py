import re

# Update addToCart and renderCart in js/detail.js and js/app.js

def update_detail_js():
    file_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\detail.js"
    with open(file_path, "r", encoding="utf-8") as f:
        code = f.read()

    # 1. Update addToCart in detail.js
    old_add = """const addToCart = (productId, qty = 1) => {
    const item = PRODUCTS.find(p => p.id === productId);
    if (!item) return;

    const basePrice = (currentModuleState && currentModuleState.modules && currentModuleState.modules.length > 0)
        ? currentModuleState.modules.reduce((s, m) => s + (m.price * m.qty), 0)
        : item.price;
    const fabricDiff = (currentFabricState && currentFabricState.priceDiff) ? currentFabricState.priceDiff : 0;
    const finalUnitPrice = basePrice + fabricDiff;

    const fabricInfo = currentFabricState ? {
        selectedFabric: currentFabricState.fabricName,
        selectedColor: currentFabricState.colorName,
        colorHex: currentFabricState.colorHex,
        fabricPriceDiff: fabricDiff
    } : {};

    const existing = cart.find(c => c.id === productId && c.selectedColor === fabricInfo.selectedColor && c.price === finalUnitPrice);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ ...item, price: finalUnitPrice, basePrice: item.price, qty, ...fabricInfo });
    }
    saveCart();
    updateBadges();
    const fabricToastText = fabricInfo.selectedFabric ? ` — ${fabricInfo.selectedFabric}, ${fabricInfo.selectedColor}${fabricDiff > 0 ? ` (+${formatPrice(fabricDiff)})` : ''}` : '';
    showToast(`<strong>${item.title}</strong>${fabricToastText}${qty > 1 ? ` (${qty} Adet)` : ''} sepete eklendi!`, "fa-bag-shopping");
    renderCart();

    // Otomatik olarak sepeti aç
    document.getElementById("cartDrawer")?.classList.add("active");
    document.getElementById("cartOverlay")?.classList.add("active");
    document.body.classList.add("cart-open");
    lockBodyScroll();
};"""

    new_add = """const addToCart = (productId, qty = 1) => {
    const allProds = (typeof PRODUCTS !== 'undefined' && PRODUCTS && PRODUCTS.length) ? PRODUCTS : (window.StoreService ? window.StoreService.getProducts() : []);
    const item = allProds.find(p => p.id == productId);
    if (!item) return;

    // Sadece eğer eklenen ürün şu an ekranda detayını incelediğimiz ürün ise modül/kumaş seçimini uygula
    const isCurrentDetailProduct = (typeof currentProduct !== 'undefined' && currentProduct && currentProduct.id == item.id);

    let finalUnitPrice = item.price;
    let fabricInfo = {};

    if (isCurrentDetailProduct) {
        const basePrice = (typeof currentModuleState !== 'undefined' && currentModuleState && currentModuleState.modules && currentModuleState.modules.length > 0)
            ? currentModuleState.modules.reduce((s, m) => s + (m.price * m.qty), 0)
            : item.price;
        const fabricDiff = (typeof currentFabricState !== 'undefined' && currentFabricState && currentFabricState.priceDiff) ? currentFabricState.priceDiff : 0;
        finalUnitPrice = basePrice + fabricDiff;
        fabricInfo = currentFabricState ? {
            selectedFabric: currentFabricState.fabricName,
            selectedColor: currentFabricState.colorName,
            colorHex: currentFabricState.colorHex,
            fabricPriceDiff: fabricDiff
        } : {};
    }

    try {
        const saved = localStorage.getItem("mobelmor_cart");
        if (saved) cart = JSON.parse(saved) || [];
    } catch(e) {}

    const existing = cart.find(c => c.id == item.id && (!fabricInfo.selectedColor || c.selectedColor === fabricInfo.selectedColor) && c.price === finalUnitPrice);
    if (existing) {
        existing.qty = (existing.qty || 1) + (qty || 1);
    } else {
        cart.push({ ...item, price: finalUnitPrice, basePrice: item.price, qty: (qty || 1), ...fabricInfo });
    }
    saveCart();
    updateBadges();
    const fabricToastText = fabricInfo.selectedFabric ? ` — ${fabricInfo.selectedFabric}, ${fabricInfo.selectedColor}` : '';
    if (typeof showToast === 'function') {
        showToast(`<strong>${item.title}</strong>${fabricToastText}${(qty > 1) ? ` (${qty} Adet)` : ''} sepete eklendi!`, "fa-bag-shopping");
    }
    renderCart();

    // Otomatik olarak sepeti aç
    document.getElementById("cartDrawer")?.classList.add("active");
    document.getElementById("cartOverlay")?.classList.add("active");
    document.body.classList.add("cart-open");
    if (typeof lockBodyScroll === 'function') lockBodyScroll();
};"""

    if old_add in code:
        code = code.replace(old_add, new_add, 1)
        print("Updated addToCart in detail.js!")

    # 2. Sync cart load inside renderCart in detail.js
    render_cart_sync = """const renderCart = () => {
    const drawer = document.getElementById("cartDrawer");
    const body = document.getElementById("cartBody");
    const footer = document.getElementById("cartFooter");
    if (!body || !footer) return;

    try {
        const saved = localStorage.getItem("mobelmor_cart");
        if (saved) {
            cart = JSON.parse(saved);
            if (!Array.isArray(cart)) cart = [];
            cart = cart.filter(c => c && c.id !== undefined && c.title && c.price);
        } else {
            cart = [];
        }
    } catch(e) {
        cart = [];
    }

    const totalQty = cart.reduce((sum, c) => sum + (c.qty || 1), 0);"""

    code = re.sub(
        r"const renderCart = \(\) => \{\s*const drawer = document\.getElementById\(\"cartDrawer\"\);\s*const body = document\.getElementById\(\"cartBody\"\);\s*const footer = document\.getElementById\(\"cartFooter\"\);\s*if \(!body \|\| !footer\) return;\s*const totalQty = cart\.reduce\(\(sum, c\) => sum \+ c\.qty, 0\);",
        render_cart_sync,
        code
    )

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(code)
    print("Saved detail.js with synced cart logic!")

def update_app_js():
    file_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\app.js"
    with open(file_path, "r", encoding="utf-8") as f:
        code = f.read()

    # 1. Update addToCart in app.js
    old_add_app = """const addToCart = (productId) => {
  const item = PRODUCTS.find(p => p.id === productId);
  if (!item) return;
  const existing = cart.find(c => c.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  saveCart();
  updateBadges();
  showToast(`<strong>${item.title}</strong> sepete eklendi!`, "fa-bag-shopping");
  renderCart();
  
  // Otomatik olarak sepeti aç
  document.getElementById("cartDrawer")?.classList.add("active");
  document.getElementById("cartOverlay")?.classList.add("active");
  document.body.classList.add("cart-open");
  lockBodyScroll();
};"""

    new_add_app = """const addToCart = (productId, qty = 1) => {
  const allProds = (typeof PRODUCTS !== 'undefined' && PRODUCTS && PRODUCTS.length) ? PRODUCTS : (window.StoreService ? window.StoreService.getProducts() : []);
  const item = allProds.find(p => p.id == productId);
  if (!item) return;

  try {
    const saved = localStorage.getItem("mobelmor_cart");
    if (saved) cart = JSON.parse(saved) || [];
  } catch(e) {}

  const existing = cart.find(c => c.id == item.id && c.price === item.price);
  if (existing) {
    existing.qty = (existing.qty || 1) + (qty || 1);
  } else {
    cart.push({ ...item, price: item.price, basePrice: item.price, qty: (qty || 1) });
  }
  saveCart();
  updateBadges();
  if (typeof showToast === 'function') {
    showToast(`<strong>${item.title}</strong>${(qty > 1) ? ` (${qty} Adet)` : ''} sepete eklendi!`, "fa-bag-shopping");
  }
  renderCart();
  
  // Otomatik olarak sepeti aç
  document.getElementById("cartDrawer")?.classList.add("active");
  document.getElementById("cartOverlay")?.classList.add("active");
  document.body.classList.add("cart-open");
  if (typeof lockBodyScroll === 'function') lockBodyScroll();
};"""

    if old_add_app in code:
        code = code.replace(old_add_app, new_add_app, 1)
        print("Updated addToCart in app.js!")

    # 2. Sync cart load inside renderCart in app.js
    render_cart_sync = """const renderCart = () => {
    const drawer = document.getElementById("cartDrawer");
    const body = document.getElementById("cartBody");
    const footer = document.getElementById("cartFooter");
    if (!body || !footer) return;

    try {
        const saved = localStorage.getItem("mobelmor_cart");
        if (saved) {
            cart = JSON.parse(saved);
            if (!Array.isArray(cart)) cart = [];
            cart = cart.filter(c => c && c.id !== undefined && c.title && c.price);
        } else {
            cart = [];
        }
    } catch(e) {
        cart = [];
    }

    const totalQty = cart.reduce((sum, c) => sum + (c.qty || 1), 0);"""

    code = re.sub(
        r"const renderCart = \(\) => \{\s*const drawer = document\.getElementById\(\"cartDrawer\"\);\s*const body = document\.getElementById\(\"cartBody\"\);\s*const footer = document\.getElementById\(\"cartFooter\"\);\s*if \(!body \|\| !footer\) return;\s*const totalQty = cart\.reduce\(\(sum, c\) => sum \+ c\.qty, 0\);",
        render_cart_sync,
        code
    )

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(code)
    print("Saved app.js with synced cart logic!")

update_detail_js()
update_app_js()
