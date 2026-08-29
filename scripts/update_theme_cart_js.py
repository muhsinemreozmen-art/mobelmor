import os
import re

theme_render_cart_js = """const renderCart = () => {
    const drawer = document.getElementById("cartDrawer");
    const body = document.getElementById("cartBody");
    const footer = document.getElementById("cartFooter");
    if (!body || !footer) return;

    const totalQty = cart.reduce((sum, c) => sum + c.qty, 0);

    // 1. Theme-Harmonious Cart Header
    const headerEl = drawer ? drawer.querySelector(".cart-header") : null;
    if (headerEl) {
        headerEl.innerHTML = `
            <div class="cart-header-title-theme">
                <h3><i class="fa-solid fa-bag-shopping"></i> Alışveriş Sepetim</h3>
                <span class="theme-count-badge">${totalQty} Ürün</span>
            </div>
            <button type="button" class="cart-close-theme-btn" id="closeCartBtn" aria-label="Sepeti Kapat" onclick="document.getElementById('cartDrawer')?.classList.remove('active'); document.getElementById('cartOverlay')?.classList.remove('active'); document.body.classList.remove('cart-open'); unlockBodyScroll();">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;
    }

    if (cart.length === 0) {
        body.innerHTML = `
            <div style="padding:60px 20px; text-align:center; display:flex; flex-direction:column; align-items:center;">
                <div style="width:64px; height:64px; border-radius:50%; background:#f3e8ff; color:#6b21a8; display:flex; align-items:center; justify-content:center; margin-bottom:16px; font-size:1.5rem; border:1px solid #e9d5ff;">
                    <i class="fa-solid fa-bag-shopping"></i>
                </div>
                <h4 style="font-size:1.15rem; font-weight:800; color:#18181b; margin:0 0 6px 0;">Sepetiniz Boş</h4>
                <p style="font-size:0.86rem; color:#71717a; margin:0 0 20px 0; max-width:240px; line-height:1.5;">Eviniz için seçkin mobilya koleksiyonlarımızı keşfedin.</p>
                <a href="kategori.html?c=all" class="btn interactive-btn" style="background:#6b21a8; color:#ffffff; padding:12px 24px; font-weight:800; font-size:0.9rem; border-radius:10px; text-decoration:none;" onclick="document.getElementById('cartDrawer')?.classList.remove('active'); document.getElementById('cartOverlay')?.classList.remove('active'); document.body.classList.remove('cart-open');">
                    Koleksiyonu İncele
                </a>
            </div>
        `;
        footer.innerHTML = "";
        appliedCouponDiscount = 0;
        appliedCouponCode = "";
        return;
    }

    // 2. Theme-Harmonious Product Cards List
    body.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:10px;">
            ${cart.map(item => `
                <div class="theme-cart-card">
                    <div class="theme-cart-img-wrap">
                        <img src="${item.image}" alt="${item.title}" class="theme-cart-img">
                    </div>
                    <div class="theme-cart-details">
                        <div>
                            <div class="theme-cart-head">
                                <h4 class="theme-cart-title" title="${item.title}">${item.title}</h4>
                                <button type="button" class="theme-cart-delete-btn" onclick="removeCartItem(${item.id})" title="Ürünü Sepetten Kaldır" aria-label="Sil">
                                    <i class="fa-regular fa-trash-can"></i>
                                </button>
                            </div>

                            ${item.selectedFabric ? `
                                <div class="theme-cart-fabric">
                                    <span class="theme-fabric-dot" style="background-color:${item.colorHex || '#6b21a8'};"></span>
                                    <span>${item.selectedFabric} / ${item.selectedColor}</span>
                                </div>
                            ` : ''}
                        </div>

                        <div class="theme-cart-foot">
                            <span class="theme-cart-price">${formatPrice(item.price * item.qty)}</span>
                            <div class="theme-qty-pill">
                                <button type="button" class="theme-qty-btn" onclick="changeQty(${item.id}, -1)" aria-label="Azalt">-</button>
                                <span class="theme-qty-val">${item.qty}</span>
                                <button type="button" class="theme-qty-btn" onclick="changeQty(${item.id}, 1)" aria-label="Artır">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>

        <!-- 3. Minimalist Expandable Coupon & Cancel Pill -->
        <div class="theme-coupon-toggle">
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
                <button type="button" class="theme-coupon-btn-toggle" onclick="const w=document.getElementById('themeCouponWrap'); w.style.display = w.style.display === 'none' ? 'flex' : 'none';">
                    <i class="fa-solid fa-ticket"></i>
                    <span>İndirim Kuponu Ekle +</span>
                </button>
                <div id="themeCouponWrap" class="theme-coupon-input-wrap" style="display:none;">
                    <input type="text" id="cartCouponInput" class="theme-coupon-input" placeholder="Örn: MOBELMOR500" value="${appliedCouponCode}">
                    <button type="button" class="theme-coupon-apply-btn" onclick="applyCartCoupon()">Uygula</button>
                </div>
            `}
        </div>
    `;

    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const finalTotal = Math.max(0, subtotal - appliedCouponDiscount);

    // 4. Theme-Harmonious Footer
    footer.innerHTML = `
        <div class="theme-summary-list">
            <div class="theme-summary-row">
                <span>Ara Toplam</span>
                <span style="font-weight:700; color:#18181b;">${formatPrice(subtotal)}</span>
            </div>
            <div class="theme-summary-row">
                <span>Teslimat &amp; Kurulum</span>
                <span style="color:#16a34a; font-weight:800;">Ücretsiz</span>
            </div>
            ${appliedCouponDiscount > 0 ? `
                <div class="theme-summary-row">
                    <span>Kupon İndirimi (${appliedCouponCode})</span>
                    <span style="color:#16a34a; font-weight:800;">-${formatPrice(appliedCouponDiscount)}</span>
                </div>
            ` : ''}
            <div class="theme-summary-row total-row">
                <span>Genel Toplam</span>
                <span class="theme-total-amount">${formatPrice(finalTotal)}</span>
            </div>
        </div>

        <button type="button" class="theme-checkout-button interactive-btn" id="openCheckoutBtn">
            <i class="fa-solid fa-lock" style="font-size:0.92rem; opacity:0.9;"></i>
            <span>GÜVENLİ SİPARİŞİ TAMAMLA</span>
            <i class="fa-solid fa-arrow-right" style="font-size:0.9rem; transition:transform 0.2s ease;"></i>
        </button>

        <div class="theme-trust-badges-row">
            <div class="theme-trust-badge-item">
                <i class="fa-solid fa-shield-halved"></i>
                <span>2 Yıl Garanti</span>
            </div>
            <div class="theme-trust-badge-item">
                <i class="fa-solid fa-truck"></i>
                <span>Ücretsiz Montaj</span>
            </div>
            <div class="theme-trust-badge-item">
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

    pattern = r"const renderCart = \(\) => \{[\s\S]*?document\.getElementById\(\"openCheckoutBtn\"\)[\s\S]*?\n\};"
    
    if re.search(pattern, code):
        new_code = re.sub(pattern, theme_render_cart_js, code, count=1)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_code)
        print(f"Successfully updated theme renderCart in: {file_path}")
    else:
        print(f"Pattern not found in: {file_path}")

update_file(r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\app.js")
update_file(r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\detail.js")
