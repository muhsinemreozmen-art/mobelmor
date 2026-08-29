import re

def update_cart_rendering_code(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        code = f.read()

    # Define the new luxury renderCart function
    new_render_cart = """let appliedCouponDiscount = 0;
let appliedCouponCode = "";

window.applyCartCoupon = () => {
    const input = document.getElementById("cartCouponInput");
    if (!input) return;
    const code = input.value.trim().toUpperCase();
    if (code === "MOBELMOR500" || code === "HOSGELDIN" || code === "MOBELMOR") {
        appliedCouponDiscount = 500;
        appliedCouponCode = code;
        if (typeof showToast === 'function') {
            showToast("500 TL Kupon İndirimi Başarıyla Uygulandı!", "fa-tag");
        }
    } else if (code === "YAZ1000") {
        appliedCouponDiscount = 1000;
        appliedCouponCode = code;
        if (typeof showToast === 'function') {
            showToast("1.000 TL Sezon Kupon İndirimi Uygulandı!", "fa-tag");
        }
    } else {
        if (typeof showToast === 'function') {
            showToast("Geçersiz veya süresi dolmuş kupon kodu.", "fa-circle-xmark");
        }
        return;
    }
    renderCart();
};

window.removeCartItem = (id) => {
    cart = cart.filter(c => c.id !== id);
    saveCart();
    updateBadges();
    renderCart();
    if (typeof showToast === 'function') {
        showToast("Ürün sepetten kaldırıldı.", "fa-trash");
    }
};

window.addCrossSellItem = (title, price, image) => {
    const existing = cart.find(c => c.title === title);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            id: 99000 + Math.floor(Math.random() * 999),
            title: title,
            price: price,
            originalPrice: Math.round(price * 1.2),
            image: image,
            qty: 1
        });
    }
    saveCart();
    updateBadges();
    renderCart();
    if (typeof showToast === 'function') {
        showToast(`<strong>${title}</strong> sepete eklendi!`, "fa-bag-shopping");
    }
};

const renderCart = () => {
    const drawer = document.getElementById("cartDrawer");
    const body = document.getElementById("cartBody");
    const footer = document.getElementById("cartFooter");
    if (!body || !footer) return;

    const totalQty = cart.reduce((sum, c) => sum + c.qty, 0);

    // Update Header
    const headerEl = drawer ? drawer.querySelector(".cart-header") : null;
    if (headerEl) {
        headerEl.innerHTML = `
            <div class="cart-header-top">
                <div class="cart-header-title-wrap">
                    <h3 class="cart-header-title"><i class="fa-solid fa-bag-shopping"></i> Alışveriş Sepetiniz</h3>
                    <span class="cart-header-count-badge">${totalQty} Ürün</span>
                </div>
                <button type="button" class="cart-close-circle-btn" id="closeCartBtn" aria-label="Sepeti Kapat" onclick="document.getElementById('cartDrawer')?.classList.remove('active'); document.getElementById('cartOverlay')?.classList.remove('active'); document.body.classList.remove('cart-open'); unlockBodyScroll();">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="cart-free-shipping-bar">
                <div class="cart-shipping-text">
                    <span><i class="fa-solid fa-truck-fast"></i> Ücretsiz Teslimat &amp; Montaj</span>
                    <span class="cart-shipping-badge">KAZANDINIZ</span>
                </div>
                <div class="cart-progress-track">
                    <div class="cart-progress-fill"></div>
                </div>
            </div>
        `;
    }

    if (cart.length === 0) {
        body.innerHTML = `
            <div class="cart-empty-state">
                <div class="cart-empty-icon-wrap">
                    <i class="fa-solid fa-cart-arrow-down"></i>
                </div>
                <h4>Sepetiniz Henüz Boş</h4>
                <p>Eviniz için seçkin mobilya ve koltuk modellerimizi hemen keşfedin.</p>
                <a href="kategori.html?c=all" class="btn btn-primary interactive-btn" style="padding:10px 20px; font-weight:800; border-radius:10px;" onclick="document.getElementById('cartDrawer')?.classList.remove('active'); document.getElementById('cartOverlay')?.classList.remove('active'); document.body.classList.remove('cart-open');">
                    Koleksiyonu Keşfet
                </a>
            </div>
        `;
        footer.innerHTML = "";
        appliedCouponDiscount = 0;
        appliedCouponCode = "";
        return;
    }

    body.innerHTML = `
        <!-- Cart Items List -->
        <div style="display:flex; flex-direction:column; gap:10px;">
            ${cart.map(item => {
                const origPrice = item.originalPrice || Math.round(item.price * 1.15);
                const monthlyInstallment = Math.round(item.price / 6);
                return `
                <div class="modern-cart-card">
                    <div class="cart-card-img-wrap">
                        <img src="${item.image}" alt="${item.title}" class="cart-card-img">
                    </div>
                    <div class="cart-card-content">
                        <div class="cart-card-header">
                            <div>
                                <span class="cart-card-tag"><i class="fa-solid fa-shield-halved"></i> İnegöl Üretimi</span>
                                <h4 class="cart-card-title">${item.title}</h4>
                            </div>
                            <button type="button" class="cart-card-remove-btn" onclick="removeCartItem(${item.id})" title="Ürünü Sepetten Kaldır" aria-label="Sil">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </div>

                        ${item.selectedFabric ? `
                            <div style="display:flex; align-items:center; gap:5px; font-size:0.75rem; color:#475569; margin-bottom:4px;">
                                <span style="width:10px; height:10px; border-radius:50%; background-color:${item.colorHex || '#6b21a8'}; border:1px solid #cbd5e1; display:inline-block;"></span>
                                <strong>${item.selectedFabric}:</strong> ${item.selectedColor}${item.fabricPriceDiff > 0 ? ` (+${formatPrice(item.fabricPriceDiff)})` : ''}
                            </div>
                        ` : ''}

                        <div class="cart-card-price-row">
                            <span class="cart-card-current-price">${formatPrice(item.price)}</span>
                            ${origPrice > item.price ? `<span class="cart-card-old-price">${formatPrice(origPrice)}</span>` : ''}
                            <span class="cart-card-installment-teaser">• 6 x ${formatPrice(monthlyInstallment)}</span>
                        </div>

                        <div class="cart-card-bottom-row">
                            <div class="modern-qty-counter">
                                <button type="button" class="modern-qty-btn" onclick="changeQty(${item.id}, -1)" aria-label="Azalt">-</button>
                                <span class="modern-qty-val">${item.qty}</span>
                                <button type="button" class="modern-qty-btn" onclick="changeQty(${item.id}, 1)" aria-label="Artır">+</button>
                            </div>
                            <span style="font-weight:900; color:#0f172a; font-size:0.95rem;">${formatPrice(item.price * item.qty)}</span>
                        </div>
                    </div>
                </div>
            `}).join('')}
        </div>

        <!-- Promo Code Accordion -->
        <div class="cart-promo-accordion">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:6px;">
                <span style="font-size:0.78rem; font-weight:800; color:#1e1b4b;"><i class="fa-solid fa-ticket"></i> İndirim Kuponu</span>
                ${appliedCouponDiscount > 0 ? `<span style="font-size:0.72rem; color:#15803d; font-weight:800; background:#dcfce7; padding:1px 6px; border-radius:4px;">Kupon Aktif (-${formatPrice(appliedCouponDiscount)})</span>` : ''}
            </div>
            <div class="cart-promo-input-group">
                <input type="text" id="cartCouponInput" class="cart-promo-input" placeholder="KUPON KODU (örn: MOBELMOR500)" value="${appliedCouponCode}">
                <button type="button" class="cart-promo-apply-btn" onclick="applyCartCoupon()">Uygula</button>
            </div>
        </div>

        <!-- Cross-Sell Furniture Extras -->
        <div class="cart-cross-sell-section">
            <div class="cart-cross-sell-header">
                <span class="cart-cross-sell-title"><i class="fa-solid fa-sparkles" style="color:#eab308;"></i> Sepetinize Özel Fırsat</span>
                <span style="font-size:0.7rem; color:#10b981; font-weight:800;">İndirimli Ekle</span>
            </div>
            <div class="cart-cross-sell-item">
                <div class="cart-cs-info">
                    <img src="assets/minegolden_p1_4.webp" alt="Kırlent" class="cart-cs-img" onerror="this.src='assets/favicon.svg'">
                    <div class="cart-cs-text">
                        <h6>Lüks Kırlent Seti (2 Adet)</h6>
                        <span>450 ₺</span>
                    </div>
                </div>
                <button type="button" class="cart-cs-add-btn" onclick="addCrossSellItem('Lüks Kırlent Seti (2 Adet)', 450, 'assets/minegolden_p1_4.webp')">
                    <i class="fa-solid fa-plus"></i> Ekle
                </button>
            </div>
        </div>
    `;

    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const finalTotal = Math.max(0, subtotal - appliedCouponDiscount);
    const monthlyInstallment = Math.round(finalTotal / 6);

    footer.innerHTML = `
        <div class="cart-pricing-breakdown">
            <div class="cart-price-row">
                <span>Ara Toplam:</span>
                <span>${formatPrice(subtotal)}</span>
            </div>
            <div class="cart-price-row">
                <span>Kargo &amp; Sevkiyat:</span>
                <span style="color:#10b981; font-weight:800;">ÜCRETSİZ (0 ₺)</span>
            </div>
            ${appliedCouponDiscount > 0 ? `
                <div class="cart-price-row">
                    <span>Kupon İndirimi (${appliedCouponCode}):</span>
                    <span style="color:#10b981; font-weight:800;">-${formatPrice(appliedCouponDiscount)}</span>
                </div>
            ` : ''}
            <div class="cart-price-row">
                <span>Taksit Fırsatı:</span>
                <span style="color:#6b21a8; font-weight:700;">6 x ${formatPrice(monthlyInstallment)}/ay</span>
            </div>
            <div class="cart-price-row total-row">
                <span>Genel Toplam:</span>
                <strong>${formatPrice(finalTotal)}</strong>
            </div>
        </div>

        <button type="button" class="cart-checkout-btn interactive-btn" id="openCheckoutBtn">
            <i class="fa-solid fa-lock"></i>
            <span>GÜVENLİ ÖDEMEYE GEÇ</span>
            <i class="fa-solid fa-arrow-right"></i>
        </button>

        <div class="cart-trust-footer-strip">
            <span><i class="fa-solid fa-lock"></i> 256-Bit SSL</span>
            <span><i class="fa-solid fa-shield-halved"></i> 2 Yıl Garanti</span>
            <span><i class="fa-solid fa-truck"></i> Ücretsiz Montaj</span>
            <span><i class="fa-solid fa-credit-card"></i> 6 Taksit</span>
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

    # Replace renderCart in the file
    pattern = re.compile(r'const renderCart = \(\) => \{[\s\S]*?document\.getElementById\("openCheckoutBtn"\)\?\.addEventListener[\s\S]*?\};\s*\}\;', re.MULTILINE)
    
    if pattern.search(code):
        code = pattern.sub(new_render_cart, code, count=1)
    else:
        # Fallback search if slightly different
        idx1 = code.find("const renderCart = () => {")
        if idx1 != -1:
            idx2 = code.find("window.changeQty =", idx1)
            if idx2 == -1:
                idx2 = code.find("window.buyNow =", idx1)
            if idx2 != -1:
                code = code[:idx1] + new_render_cart + "\n\n" + code[idx2:]

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(code)
    print(f"Updated renderCart in: {file_path}")

update_cart_rendering_code(r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\app.js")
update_cart_rendering_code(r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\detail.js")
