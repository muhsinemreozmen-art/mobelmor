import os
import re

clean_render_cart_js = """const renderCart = () => {
    const drawer = document.getElementById("cartDrawer");
    const body = document.getElementById("cartBody");
    const footer = document.getElementById("cartFooter");
    if (!body || !footer) return;

    const totalQty = cart.reduce((sum, c) => sum + c.qty, 0);

    // Clean Minimalist Header (No shipping bar, simple & calm)
    const headerEl = drawer ? drawer.querySelector(".cart-header") : null;
    if (headerEl) {
        headerEl.innerHTML = `
            <div style="display:flex; align-items:center; justify-content:space-between; width:100%;">
                <h3 class="cart-header-title"><i class="fa-solid fa-bag-shopping"></i> Alışveriş Sepetim (${totalQty})</h3>
                <button type="button" class="cart-close-circle-btn" id="closeCartBtn" aria-label="Sepeti Kapat" onclick="document.getElementById('cartDrawer')?.classList.remove('active'); document.getElementById('cartOverlay')?.classList.remove('active'); document.body.classList.remove('cart-open'); unlockBodyScroll();">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        `;
    }

    if (cart.length === 0) {
        body.innerHTML = `
            <div class="cart-empty-state" style="padding:40px 20px; text-align:center;">
                <div style="width:60px; height:60px; border-radius:50%; background:#f3e8ff; color:#7e22ce; display:flex; align-items:center; justify-content:center; margin:0 auto 16px auto; font-size:1.5rem;">
                    <i class="fa-solid fa-cart-arrow-down"></i>
                </div>
                <h4 style="font-size:1.1rem; font-weight:800; color:#0f172a; margin:0 0 6px 0;">Sepetiniz Boş</h4>
                <p style="font-size:0.85rem; color:#64748b; margin:0 0 16px 0;">Eviniz için mobilya modellerimizi keşfetmeye başlayın.</p>
                <a href="kategori.html?c=all" class="btn btn-primary interactive-btn" style="padding:10px 20px; font-weight:800; border-radius:10px; text-decoration:none;" onclick="document.getElementById('cartDrawer')?.classList.remove('active'); document.getElementById('cartOverlay')?.classList.remove('active'); document.body.classList.remove('cart-open');">
                    Alışverişe Başla
                </a>
            </div>
        `;
        footer.innerHTML = "";
        appliedCouponDiscount = 0;
        appliedCouponCode = "";
        return;
    }

    // Clean & Calm Product Cards List
    body.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:8px;">
            ${cart.map(item => `
                <div class="clean-cart-card">
                    <div class="clean-cart-img-wrap">
                        <img src="${item.image}" alt="${item.title}" class="clean-cart-img">
                    </div>
                    <div class="clean-cart-info">
                        <div class="clean-cart-top-row">
                            <h4 class="clean-cart-title">${item.title}</h4>
                            <button type="button" class="clean-cart-remove-btn" onclick="removeCartItem(${item.id})" title="Ürünü Sil" aria-label="Sil">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </div>

                        ${item.selectedFabric ? `
                            <div class="clean-cart-variant">
                                <span style="width:8px; height:8px; border-radius:50%; background-color:${item.colorHex || '#6b21a8'}; display:inline-block;"></span>
                                <span>${item.selectedFabric}: ${item.selectedColor}</span>
                            </div>
                        ` : ''}

                        <div class="clean-cart-bottom-row">
                            <span class="clean-cart-price">${formatPrice(item.price * item.qty)}</span>
                            <div class="clean-qty-counter">
                                <button type="button" class="clean-qty-btn" onclick="changeQty(${item.id}, -1)" aria-label="Azalt">-</button>
                                <span class="clean-qty-val">${item.qty}</span>
                                <button type="button" class="clean-qty-btn" onclick="changeQty(${item.id}, 1)" aria-label="Artır">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>

        <!-- Optional Clean Coupon Box -->
        <div class="clean-coupon-box">
            <div style="display:flex; align-items:center; justify-content:space-between;">
                <span style="font-size:0.76rem; font-weight:800; color:#334155;"><i class="fa-solid fa-ticket" style="color:#6b21a8;"></i> İndirim Kodu</span>
                ${appliedCouponDiscount > 0 ? `<span style="font-size:0.72rem; color:#15803d; font-weight:800;">-${formatPrice(appliedCouponDiscount)}</span>` : ''}
            </div>
            <div class="clean-coupon-group">
                <input type="text" id="cartCouponInput" class="clean-coupon-input" placeholder="KUPON KODU (örn: MOBELMOR500)" value="${appliedCouponCode}">
                <button type="button" class="clean-coupon-btn" onclick="applyCartCoupon()">Uygula</button>
            </div>
        </div>
    `;

    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const finalTotal = Math.max(0, subtotal - appliedCouponDiscount);

    footer.innerHTML = `
        <div class="clean-price-summary">
            <div class="clean-price-row">
                <span>Ara Toplam</span>
                <span>${formatPrice(subtotal)}</span>
            </div>
            <div class="clean-price-row">
                <span>Teslimat &amp; Kurulum</span>
                <span style="color:#10b981; font-weight:800;">Ücretsiz</span>
            </div>
            ${appliedCouponDiscount > 0 ? `
                <div class="clean-price-row">
                    <span>Kupon İndirimi</span>
                    <span style="color:#10b981; font-weight:800;">-${formatPrice(appliedCouponDiscount)}</span>
                </div>
            ` : ''}
            <div class="clean-price-row total">
                <span>Genel Toplam</span>
                <strong>${formatPrice(finalTotal)}</strong>
            </div>
        </div>

        <button type="button" class="clean-checkout-cta interactive-btn" id="openCheckoutBtn">
            <i class="fa-solid fa-lock"></i>
            <span>GÜVENLİ ÖDEMEYE GEÇ</span>
            <i class="fa-solid fa-arrow-right"></i>
        </button>

        <div class="clean-trust-strip">
            <span><i class="fa-solid fa-shield-halved"></i> 2 Yıl Garanti</span>
            <span><i class="fa-solid fa-truck"></i> Ücretsiz Teslimat</span>
            <span><i class="fa-solid fa-lock"></i> 256-Bit SSL</span>
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

# Function to replace renderCart in a file
def update_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        code = f.read()

    # Find const renderCart = () => { ... document.getElementById("openCheckoutBtn") ... };
    pattern = r"const renderCart = \(\) => \{[\s\S]*?document\.getElementById\(\"openCheckoutBtn\"\)[\s\S]*?\n\};"
    
    if re.search(pattern, code):
        new_code = re.sub(pattern, clean_render_cart_js, code, count=1)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_code)
        print(f"Successfully updated renderCart in: {file_path}")
    else:
        print(f"Pattern not found in: {file_path}")

update_file(r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\app.js")
update_file(r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\detail.js")
