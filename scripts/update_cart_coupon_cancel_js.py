import os
import re

cart_coupon_js = """let appliedCouponDiscount = 0;
let appliedCouponCode = "";

window.applyCartCoupon = () => {
    const input = document.getElementById("cartCouponInput");
    if (!input) return;
    const code = input.value.trim().toUpperCase();
    if (!code) {
        if (typeof showToast === 'function') showToast("Lütfen bir kupon kodu giriniz.", "fa-circle-exmark");
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

    // Fallback if StoreService is loading
    if (code === "MOBELMOR500" || code === "HOSGELDIN" || code === "MOBELMOR") {
        appliedCouponDiscount = 500;
        appliedCouponCode = code;
        renderCart();
        if (typeof showToast === 'function') showToast("500 TL Kupon İndirimi Başarıyla Uygulandı!", "fa-tag");
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

const renderCart = () => {
    const drawer = document.getElementById("cartDrawer");
    const body = document.getElementById("cartBody");
    const footer = document.getElementById("cartFooter");
    if (!body || !footer) return;

    const totalQty = cart.reduce((sum, c) => sum + c.qty, 0);

    // 1. Editorial Luxury Header
    const headerEl = drawer ? drawer.querySelector(".cart-header") : null;
    if (headerEl) {
        headerEl.innerHTML = `
            <div class="cart-header-title-luxury">
                <h3>Sepetiniz</h3>
                <span class="cart-count-pill">${totalQty} Ürün</span>
            </div>
            <button type="button" class="cart-close-luxury-btn" id="closeCartBtn" aria-label="Sepeti Kapat" onclick="document.getElementById('cartDrawer')?.classList.remove('active'); document.getElementById('cartOverlay')?.classList.remove('active'); document.body.classList.remove('cart-open'); unlockBodyScroll();">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;
    }

    if (cart.length === 0) {
        body.innerHTML = `
            <div style="padding:60px 20px; text-align:center; display:flex; flex-direction:column; align-items:center;">
                <div style="width:68px; height:68px; border-radius:50%; background:#faf5ff; color:#9333ea; display:flex; align-items:center; justify-content:center; margin-bottom:18px; font-size:1.6rem; border:1px solid #f3e8ff;">
                    <i class="fa-solid fa-bag-shopping"></i>
                </div>
                <h4 style="font-size:1.15rem; font-weight:800; color:#09090b; margin:0 0 6px 0; letter-spacing:-0.02em;">Sepetiniz Boş</h4>
                <p style="font-size:0.86rem; color:#64748b; margin:0 0 20px 0; max-width:240px; line-height:1.5;">Eviniz için seçkin mobilya koleksiyonlarımızı keşfedin.</p>
                <a href="kategori.html?c=all" class="btn interactive-btn" style="background:#09090b; color:#ffffff; padding:12px 24px; font-weight:800; font-size:0.88rem; border-radius:10px; text-decoration:none;" onclick="document.getElementById('cartDrawer')?.classList.remove('active'); document.getElementById('cartOverlay')?.classList.remove('active'); document.body.classList.remove('cart-open');">
                    Koleksiyonu İncele
                </a>
            </div>
        `;
        footer.innerHTML = "";
        appliedCouponDiscount = 0;
        appliedCouponCode = "";
        return;
    }

    // 2. Luxury Product Cards List
    body.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:12px;">
            ${cart.map(item => `
                <div class="luxury-cart-card">
                    <div class="luxury-cart-img-wrap">
                        <img src="${item.image}" alt="${item.title}" class="luxury-cart-img">
                    </div>
                    <div class="luxury-cart-details">
                        <div>
                            <div class="luxury-cart-head">
                                <div>
                                    <div class="luxury-cart-brand">Mobelmor Atelier</div>
                                    <h4 class="luxury-cart-title" title="${item.title}">${item.title}</h4>
                                </div>
                                <button type="button" class="luxury-cart-delete-btn" onclick="removeCartItem(${item.id})" title="Ürünü Sil" aria-label="Sil">
                                    <i class="fa-regular fa-trash-can"></i>
                                </button>
                            </div>

                            ${item.selectedFabric ? `
                                <div class="luxury-cart-fabric">
                                    <span class="luxury-fabric-dot" style="background-color:${item.colorHex || '#6b21a8'};"></span>
                                    <span>${item.selectedFabric} / ${item.selectedColor}</span>
                                </div>
                            ` : ''}
                        </div>

                        <div class="luxury-cart-foot">
                            <span class="luxury-cart-price">${formatPrice(item.price * item.qty)}</span>
                            <div class="luxury-qty-pill">
                                <button type="button" class="luxury-qty-btn" onclick="changeQty(${item.id}, -1)" aria-label="Azalt">-</button>
                                <span class="luxury-qty-val">${item.qty}</span>
                                <button type="button" class="luxury-qty-btn" onclick="changeQty(${item.id}, 1)" aria-label="Artır">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>

        <!-- 3. Minimalist Expandable Coupon & Cancel Pill -->
        <div class="luxury-coupon-toggle">
            ${appliedCouponDiscount > 0 ? `
                <div class="luxury-applied-coupon-row">
                    <div class="luxury-coupon-badge-info">
                        <i class="fa-solid fa-tag"></i>
                        <span><strong>${appliedCouponCode}</strong> (-${formatPrice(appliedCouponDiscount)})</span>
                    </div>
                    <button type="button" class="luxury-coupon-cancel-btn" onclick="removeCartCoupon()" title="Kuponu Kaldır">
                        <i class="fa-solid fa-xmark"></i> İptal Et
                    </button>
                </div>
            ` : `
                <button type="button" class="luxury-coupon-btn-toggle" onclick="const w=document.getElementById('luxuryCouponWrap'); w.style.display = w.style.display === 'none' ? 'flex' : 'none';">
                    <i class="fa-solid fa-ticket"></i>
                    <span>İndirim Kuponu Ekle +</span>
                </button>
                <div id="luxuryCouponWrap" class="luxury-coupon-input-wrap" style="display:none;">
                    <input type="text" id="cartCouponInput" class="luxury-coupon-input" placeholder="Örn: MOBELMOR500" value="${appliedCouponCode}">
                    <button type="button" class="luxury-coupon-apply-btn" onclick="applyCartCoupon()">Uygula</button>
                </div>
            `}
        </div>
    `;

    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const finalTotal = Math.max(0, subtotal - appliedCouponDiscount);

    // 4. Ultra-Luxury Footer
    footer.innerHTML = `
        <div class="luxury-summary-list">
            <div class="luxury-summary-row">
                <span>Ara Toplam</span>
                <span style="font-weight:700; color:#09090b;">${formatPrice(subtotal)}</span>
            </div>
            <div class="luxury-summary-row">
                <span>Teslimat &amp; Kurulum</span>
                <span style="color:#10b981; font-weight:800;">Ücretsiz</span>
            </div>
            ${appliedCouponDiscount > 0 ? `
                <div class="luxury-summary-row">
                    <span>Kupon İndirimi (${appliedCouponCode})</span>
                    <span style="color:#10b981; font-weight:800;">-${formatPrice(appliedCouponDiscount)}</span>
                </div>
            ` : ''}
            <div class="luxury-summary-row total-row">
                <span>Toplam</span>
                <span class="total-amount">${formatPrice(finalTotal)}</span>
            </div>
        </div>

        <button type="button" class="luxury-checkout-button interactive-btn" id="openCheckoutBtn">
            <i class="fa-solid fa-lock" style="font-size:0.88rem; opacity:0.85;"></i>
            <span>SİPARİŞİ TAMAMLA</span>
            <i class="fa-solid fa-arrow-right" style="font-size:0.85rem; transition:transform 0.2s ease;"></i>
        </button>

        <div class="luxury-trust-badges-row">
            <div class="luxury-trust-badge-item">
                <i class="fa-solid fa-shield-halved"></i>
                <span>2 Yıl Garanti</span>
            </div>
            <div class="luxury-trust-badge-item">
                <i class="fa-solid fa-truck"></i>
                <span>Ücretsiz Montaj</span>
            </div>
            <div class="luxury-trust-badge-item">
                <i class="fa-solid fa-credit-card"></i>
                <span>12 Taksit</span>
            </div>
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

    # Pattern starting from let appliedCouponDiscount up to end of renderCart
    pattern = r"let appliedCouponDiscount = 0;[\s\S]*?const renderCart = \(\) => \{[\s\S]*?document\.getElementById\(\"openCheckoutBtn\"\)[\s\S]*?\n\};"
    
    if re.search(pattern, code):
        new_code = re.sub(pattern, cart_coupon_js, code, count=1)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_code)
        print(f"Successfully updated coupon apply/cancel logic in: {file_path}")
    else:
        print(f"Pattern not found in: {file_path}")

update_file(r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\app.js")
update_file(r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\detail.js")
