import os
import re

cart_js_template = """let appliedCouponDiscount = 0;
let appliedCouponCode = "";

window.applyCartCoupon = () => {
    const input = document.getElementById("cartCouponInput");
    if (!input) return;
    const code = input.value.trim().toUpperCase();
    if (!code) {
        if (typeof showToast === 'function') showToast("Lütfen bir kupon kodu giriniz.", "fa-circle-exclamation");
        return;
    }

    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    
    // Validate via StoreService database engine
    if (window.StoreService && typeof window.StoreService.validateCoupon === 'function') {
        const result = window.StoreService.validateCoupon(code, subtotal);
        if (result.valid) {
            appliedCouponDiscount = result.discount;
            appliedCouponCode = result.coupon.code;
            renderCart();
            if (typeof showToast === 'function') showToast(result.message, "fa-tag");
            return;
        } else {
            if (typeof showToast === 'function') showToast(result.message, "fa-circle-xmark");
            return;
        }
    }

    // Fallback
    if (code === "MOBELMOR500" || code === "HOSGELDIN" || code === "MOBELMOR") {
        appliedCouponDiscount = 500;
        appliedCouponCode = code;
        renderCart();
        if (typeof showToast === 'function') showToast("500 TL Kupon İndirimi Uygulandı!", "fa-tag");
    } else if (code === "YAZ1000") {
        appliedCouponDiscount = 1000;
        appliedCouponCode = code;
        renderCart();
        if (typeof showToast === 'function') showToast("1.000 TL Sezon Kupon İndirimi Uygulandı!", "fa-tag");
    } else {
        if (typeof showToast === 'function') showToast("Geçersiz veya süresi dolmuş kupon kodu.", "fa-circle-xmark");
    }
};

window.removeCartCoupon = () => {
    appliedCouponDiscount = 0;
    appliedCouponCode = "";
    renderCart();
    if (typeof showToast === 'function') {
        showToast("Kupon iptal edildi.", "fa-circle-info");
    }
};

window.togglePriceBreakdown = () => {
    const details = document.getElementById("tyPriceBreakdown");
    const arrow = document.getElementById("tyPriceArrow");
    if (!details) return;
    if (details.style.display === "none" || !details.style.display) {
        details.style.display = "flex";
        if (arrow) arrow.classList.add("open");
    } else {
        details.style.display = "none";
        if (arrow) arrow.classList.remove("open");
    }
};

window.togglePromoAccordion = () => {
    const content = document.getElementById("tyPromoContent");
    if (!content) return;
    content.style.display = content.style.display === "none" || !content.style.display ? "block" : "none";
};

window.removeCartItem = (id) => {
    cart = cart.filter(c => c.id !== id && c.id != id);
    localStorage.setItem("mobelmor_cart", JSON.stringify(cart));
    renderCart();
    if (typeof updateBadges === 'function') updateBadges();
    if (typeof updateCartBadge === 'function') updateCartBadge();
    if (typeof showToast === 'function') showToast("Ürün sepetten çıkarıldı.", "fa-trash-can");
};

window.changeQty = (id, delta) => {
    const item = cart.find(c => c.id === id || c.id == id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(c => c.id !== id && c.id != id);
    }
    localStorage.setItem("mobelmor_cart", JSON.stringify(cart));
    renderCart();
    if (typeof updateBadges === 'function') updateBadges();
    if (typeof updateCartBadge === 'function') updateCartBadge();
};

const renderCart = () => {
    const drawer = document.getElementById("cartDrawer");
    const body = document.getElementById("cartBody");
    const footer = document.getElementById("cartFooter");
    if (!body || !footer) return;

    const totalQty = cart.reduce((sum, c) => sum + c.qty, 0);

    // 1. Mobelmor Header (< Back Arrow, Centered Title, X Button)
    const headerEl = drawer ? drawer.querySelector(".cart-header") : null;
    if (headerEl) {
        headerEl.className = "ty-cart-header";
        headerEl.innerHTML = `
            <button type="button" class="ty-header-back-btn" onclick="document.getElementById('cartDrawer')?.classList.remove('active'); document.getElementById('cartOverlay')?.classList.remove('active'); document.body.classList.remove('cart-open'); unlockBodyScroll();" aria-label="Geri">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <h3 class="ty-header-title">Sepetim (${totalQty} Ürün)</h3>
            <button type="button" class="ty-header-back-btn" onclick="document.getElementById('cartDrawer')?.classList.remove('active'); document.getElementById('cartOverlay')?.classList.remove('active'); document.body.classList.remove('cart-open'); unlockBodyScroll();" aria-label="Kapat">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;
    }

    if (cart.length === 0) {
        body.className = "ty-cart-body";
        body.innerHTML = `
            <div style="padding:60px 20px; text-align:center; display:flex; flex-direction:column; align-items:center; background:#ffffff; border-radius:12px; margin-top:10px; border:1px solid #e2e8f0;">
                <div style="width:64px; height:64px; border-radius:50%; background:#f3e8ff; color:#6b21a8; display:flex; align-items:center; justify-content:center; margin-bottom:16px; font-size:1.6rem; border:1px solid #e9d5ff;">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <h4 style="font-size:1.1rem; font-weight:800; color:#0f172a; margin:0 0 6px 0;">Sepetiniz Boş</h4>
                <p style="font-size:0.84rem; color:#64748b; margin:0 0 20px 0; max-width:240px; line-height:1.4;">Eviniz için mobilya modellerimizi keşfetmeye başlayın.</p>
                <a href="kategori.html?c=all" class="btn interactive-btn" style="background:#6b21a8; color:#ffffff; padding:12px 24px; font-weight:800; font-size:0.9rem; border-radius:10px; text-decoration:none;" onclick="document.getElementById('cartDrawer')?.classList.remove('active'); document.getElementById('cartOverlay')?.classList.remove('active'); document.body.classList.remove('cart-open');">
                    Alışverişe Başla
                </a>
            </div>
        `;
        footer.innerHTML = "";
        appliedCouponDiscount = 0;
        appliedCouponCode = "";
        return;
    }

    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const finalTotal = Math.max(0, subtotal - appliedCouponDiscount);

    // 2. Direct Manufacturer Mobelmor Cart Body (No Multi-Vendor Marketplace Card)
    body.className = "ty-cart-body";
    body.innerHTML = `
        <!-- Top Promo Bar -->
        <div class="ty-promo-bar" onclick="togglePromoAccordion()">
            <div style="display:flex; align-items:center; gap:8px;">
                <span>🎉</span>
                <span>${appliedCouponDiscount > 0 ? `Kupon Uygulandı (${appliedCouponCode} -${formatPrice(appliedCouponDiscount)})` : 'Sepetine Özel İndirim Kuponu!'}</span>
            </div>
            <i class="fa-solid fa-chevron-down" style="font-size:0.75rem;"></i>
        </div>

        <div class="ty-promo-content" id="tyPromoContent" style="${appliedCouponDiscount > 0 ? 'display:block;' : 'display:none;'}">
            ${appliedCouponDiscount > 0 ? `
                <div style="display:flex; align-items:center; justify-content:space-between; background:#f0fdf4; border:1px solid #bbf7d0; padding:8px 12px; border-radius:8px;">
                    <span style="font-size:0.82rem; color:#15803d; font-weight:800;"><i class="fa-solid fa-tag"></i> ${appliedCouponCode} (-${formatPrice(appliedCouponDiscount)})</span>
                    <button type="button" onclick="removeCartCoupon()" style="background:#fee2e2; border:1px solid #fca5a5; color:#dc2626; font-size:0.72rem; font-weight:800; padding:3px 8px; border-radius:6px; cursor:pointer;">İptal Et</button>
                </div>
            ` : `
                <div class="ty-promo-input-group">
                    <input type="text" id="cartCouponInput" class="ty-promo-input" placeholder="KUPON KODU" value="${appliedCouponCode}">
                    <button type="button" class="ty-promo-btn" onclick="applyCartCoupon()">Uygula</button>
                </div>
            `}
        </div>

        <!-- Free Shipping Banner -->
        <div class="ty-free-shipping-strip" style="border-radius:10px; border:1px solid #bbf7d0;">
            <i class="fa-solid fa-truck-fast"></i>
            <span>Kargo Bedava &amp; Ücretsiz Daireye Kurulum!</span>
        </div>

        <!-- Direct Manufacturer Items Container -->
        <div class="ty-store-card">
            <!-- Product Rows -->
            ${cart.map((item, idx) => {
                const popularPeople = (12 + (item.id * 3)) % 40 + 8;
                return `
                <div class="ty-item-row">
                    <div class="ty-item-img-wrap">
                        <img src="${item.image}" alt="${item.title}" class="ty-item-img">
                    </div>
                    <div class="ty-item-details">
                        <div class="ty-item-top">
                            <h4 class="ty-item-title" title="${item.title}">${item.title}</h4>
                            <button type="button" class="ty-item-trash" onclick="removeCartItem(${item.id})" title="Ürünü Sil" aria-label="Sil">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </div>

                        <span class="ty-item-social-pill">
                            <i class="fa-solid fa-cart-shopping" style="font-size:0.65rem;"></i> ${popularPeople} kişinin sepetinde
                        </span>

                        <span class="ty-item-delivery-info">
                            <i class="fa-solid fa-truck"></i> Özel Üretim &amp; Teslimat: 10-14 iş günü
                        </span>

                        ${item.selectedFabric ? `
                            <div style="font-size:0.72rem; color:#64748b; font-weight:600; display:flex; align-items:center; gap:4px;">
                                <span style="width:7px; height:7px; border-radius:50%; background-color:${item.colorHex || '#6b21a8'}; display:inline-block;"></span>
                                <span>${item.selectedFabric}: ${item.selectedColor}</span>
                            </div>
                        ` : ''}

                        <div class="ty-item-foot">
                            <div class="ty-qty-pill">
                                <button type="button" class="ty-qty-btn" onclick="changeQty(${item.id}, -1)" aria-label="Azalt">-</button>
                                <span class="ty-qty-val">${item.qty}</span>
                                <button type="button" class="ty-qty-btn" onclick="changeQty(${item.id}, 1)" aria-label="Artır">+</button>
                            </div>
                            <span class="ty-item-price">${formatPrice(item.price * item.qty)}</span>
                        </div>
                    </div>
                </div>

                <div class="ty-warranty-bar">
                    <div style="display:flex; align-items:center; gap:6px;">
                        <i class="fa-solid fa-shield-halved"></i>
                        <span>2 Yıl Mobelmor Üretici Garantisi Dahildir</span>
                    </div>
                    <i class="fa-solid fa-chevron-right" style="font-size:0.7rem;"></i>
                </div>
            `}).join('')}
        </div>
    `;

    // 3. Mobelmor Sticky Bottom Bar
    footer.className = "ty-cart-footer";
    footer.innerHTML = `
        <div class="ty-breakdown-details" id="tyPriceBreakdown">
            <div style="display:flex; justify-content:space-between;">
                <span>Ürünler Toplamı:</span>
                <span>${formatPrice(subtotal)}</span>
            </div>
            <div style="display:flex; justify-content:space-between; color:#16a34a; font-weight:700;">
                <span>Kargo &amp; Montaj:</span>
                <span>Bedava (0 TL)</span>
            </div>
            ${appliedCouponDiscount > 0 ? `
                <div style="display:flex; justify-content:space-between; color:#6b21a8; font-weight:800;">
                    <span>Kupon İndirimi (${appliedCouponCode}):</span>
                    <span>-${formatPrice(appliedCouponDiscount)}</span>
                </div>
            ` : ''}
        </div>

        <div class="ty-footer-bar-row">
            <div class="ty-footer-price-box" onclick="togglePriceBreakdown()" title="Fiyat Detayını Gör">
                <i class="fa-solid fa-chevron-up ty-footer-arrow" id="tyPriceArrow"></i>
                <span class="ty-footer-total">${formatPrice(finalTotal)}</span>
            </div>
            <button type="button" class="ty-checkout-btn interactive-btn" id="openCheckoutBtn">
                <span>Sepeti Onayla</span>
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    `;

    document.getElementById("openCheckoutBtn")?.addEventListener("click", () => {
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

def update_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        code = f.read()

    pattern = r"let appliedCouponDiscount = 0;[\s\S]*?const renderCart = \(\) => \{[\s\S]*?document\.getElementById\(\"openCheckoutBtn\"\)[\s\S]*?\n\};"
    
    if re.search(pattern, code):
        new_code = re.sub(pattern, cart_js_template, code, count=1)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_code)
        print(f"Successfully updated cart JS in: {file_path}")
    else:
        print(f"Pattern not found in: {file_path}")

update_file(r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\app.js")
update_file(r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\detail.js")
