import os
import re

modern_wishlist_js = """
// =========================================================================
// MOBELMOR MODERN LUXURY FAVORITES (WISHLIST) ENGINE (SEPET İLE TAM UYUMLU)
// =========================================================================

window.loadWishlist = () => {
    try {
        const raw = localStorage.getItem("mobelmor_wishlist");
        if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) return new Set(parsed.map(x => parseInt(x) || x));
        }
    } catch (e) {}
    return new Set();
};

window.saveWishlist = () => {
    try {
        localStorage.setItem("mobelmor_wishlist", JSON.stringify(Array.from(wishlist)));
    } catch (e) {}
};

window.toggleWishlist = (id) => {
    id = parseInt(id) || id;
    if (wishlist.has(id)) {
        wishlist.delete(id);
        if (typeof showToast === 'function') showToast("Ürün favorilerden çıkarıldı.", "fa-heart-crack");
    } else {
        wishlist.add(id);
        if (typeof showToast === 'function') showToast("Ürün favorilerinize eklendi!", "fa-heart");
    }
    saveWishlist();
    updateWishlistBadges();
    
    // Update active heart buttons on screen
    document.querySelectorAll(`.card-heart-btn[data-id="${id}"]`).forEach(btn => {
        btn.classList.toggle('active', wishlist.has(id));
        btn.innerHTML = `<i class="fa-${wishlist.has(id) ? 'solid' : 'regular'} fa-heart"></i>`;
    });

    renderWishlist();
};

window.toggleDetailWishlist = window.toggleWishlist;

window.updateWishlistBadges = () => {
    const wishBadge = document.getElementById("wishlistBadge");
    const mobileWishBadge = document.getElementById("mobileWishlistBadge");
    if (wishBadge) wishBadge.textContent = wishlist.size;
    if (mobileWishBadge) mobileWishBadge.textContent = wishlist.size;
};

window.addAllFavoritesToCart = () => {
    const allProds = (typeof PRODUCTS !== 'undefined' && PRODUCTS && PRODUCTS.length) ? PRODUCTS : (window.StoreService ? window.StoreService.getProducts() : []);
    const wishListItems = allProds.filter(p => wishlist.has(p.id) || wishlist.has(parseInt(p.id)));
    if (!wishListItems.length) return;

    wishListItems.forEach(i => {
        if (typeof addToCart === 'function') addToCart(i.id);
    });

    document.getElementById("wishlistDrawer")?.classList.remove("active");
    document.getElementById("wishlistOverlay")?.classList.remove("active");
    document.body.classList.remove("wishlist-open");
    
    if (typeof showToast === 'function') showToast("Tüm favoriler başarıyla sepete eklendi!", "fa-basket-shopping");
};

window.renderWishlist = () => {
    const drawer = document.getElementById("wishlistDrawer");
    const body = document.getElementById("wishlistBody");
    const footer = document.getElementById("wishlistFooter");
    if (!body || !footer) return;

    const allProds = (typeof PRODUCTS !== 'undefined' && PRODUCTS && PRODUCTS.length) ? PRODUCTS : (window.StoreService ? window.StoreService.getProducts() : []);
    const wishListItems = allProds.filter(p => wishlist.has(p.id) || wishlist.has(parseInt(p.id)));
    const totalCount = wishListItems.length;

    // 1. Header with Back Arrow & Centered Title
    const headerEl = drawer ? drawer.querySelector(".cart-header, .ty-wishlist-header") : null;
    if (headerEl) {
        headerEl.className = "cart-header ty-wishlist-header";
        headerEl.innerHTML = `
            <button type="button" class="ty-header-back-btn" onclick="document.getElementById('wishlistDrawer')?.classList.remove('active'); document.getElementById('wishlistOverlay')?.classList.remove('active'); document.body.classList.remove('wishlist-open'); if (typeof unlockBodyScroll === 'function') unlockBodyScroll();" aria-label="Geri">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <h3 class="ty-header-title">Favorilerim (${totalCount} Ürün)</h3>
            <button type="button" class="ty-header-back-btn" onclick="document.getElementById('wishlistDrawer')?.classList.remove('active'); document.getElementById('wishlistOverlay')?.classList.remove('active'); document.body.classList.remove('wishlist-open'); if (typeof unlockBodyScroll === 'function') unlockBodyScroll();" aria-label="Kapat">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;
    }

    // Empty State
    if (wishListItems.length === 0) {
        body.className = "ty-wishlist-body";
        body.innerHTML = `
            <div style="padding:60px 20px; text-align:center; display:flex; flex-direction:column; align-items:center; background:#ffffff; border-radius:12px; margin-top:10px; border:1px solid #e2e8f0;">
                <div style="width:64px; height:64px; border-radius:50%; background:#faf5ff; color:#6b21a8; display:flex; align-items:center; justify-content:center; margin-bottom:16px; font-size:1.6rem; border:1px solid #e9d5ff;">
                    <i class="fa-regular fa-heart"></i>
                </div>
                <h4 style="font-size:1.1rem; font-weight:800; color:#0f172a; margin:0 0 6px 0;">Favorileriniz Boş</h4>
                <p style="font-size:0.84rem; color:#64748b; margin:0 0 20px 0; max-width:240px; line-height:1.4;">Beğendiğiniz mobilyaları kalp butonuna basarak buraya kaydedebilirsiniz.</p>
                <a href="kategori.html?c=all" class="btn interactive-btn" style="background:#6b21a8; color:#ffffff; padding:12px 24px; font-weight:800; font-size:0.9rem; border-radius:10px; text-decoration:none;" onclick="document.getElementById('wishlistDrawer')?.classList.remove('active'); document.getElementById('wishlistOverlay')?.classList.remove('active'); document.body.classList.remove('wishlist-open');">
                    Koleksiyonu Keşfet
                </a>
            </div>
        `;
        footer.innerHTML = "";
        return;
    }

    const totalWishPrice = wishListItems.reduce((sum, item) => sum + (item.price || 0), 0);

    // 2. Body List
    body.className = "ty-wishlist-body";
    body.innerHTML = `
        <!-- Free Shipping Banner -->
        <div class="ty-free-shipping-strip" style="border-radius:10px; border:1px solid #bbf7d0;">
            <i class="fa-solid fa-truck-fast"></i>
            <span>Kargo Bedava &amp; Ücretsiz Daireye Kurulum!</span>
        </div>

        <div class="ty-store-card">
            ${wishListItems.map(item => {
                const popularFav = (18 + (item.id * 5)) % 60 + 12;
                return `
                <div class="ty-item-row">
                    <div class="ty-item-img-wrap">
                        <img src="${item.image}" alt="${item.title}" class="ty-item-img">
                    </div>
                    <div class="ty-item-details">
                        <div class="ty-item-top">
                            <h4 class="ty-item-title" title="${item.title}">${item.title}</h4>
                            <button type="button" class="ty-item-trash" onclick="toggleWishlist(${item.id})" title="Favorilerden Çıkar" aria-label="Sil">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </div>

                        <span class="ty-item-social-pill">
                            <i class="fa-solid fa-heart" style="font-size:0.65rem;"></i> ${popularFav} kişinin favorisinde
                        </span>

                        <span class="ty-item-delivery-info">
                            <i class="fa-solid fa-truck"></i> Özel Üretim &amp; Teslimat: 10-14 iş günü
                        </span>

                        <div style="margin-top:4px;">
                            <span class="ty-item-price">${formatPrice(item.price)}</span>
                        </div>

                        <div class="ty-wishlist-actions">
                            <button type="button" class="ty-wishlist-add-cart-btn interactive-btn" onclick="addToCart(${item.id}); toggleWishlist(${item.id});">
                                <i class="fa-solid fa-cart-plus"></i> Sepete Aktar
                            </button>
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

    // 3. Sticky Bottom Bar
    footer.className = "ty-wishlist-footer";
    footer.innerHTML = `
        <button type="button" class="ty-wishlist-all-btn interactive-btn" onclick="addAllFavoritesToCart()">
            <i class="fa-solid fa-cart-shopping"></i>
            <span>Tüm Favorileri Sepete Ekle (${formatPrice(totalWishPrice)})</span>
            <i class="fa-solid fa-arrow-right"></i>
        </button>
    `;
};
"""

# Update js/detail.js and js/app.js
def update_detail_js():
    file_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\detail.js"
    with open(file_path, "r", encoding="utf-8") as f:
        code = f.read()

    # Replace renderWishlist block in detail.js
    pattern = r"const loadWishlist = \(\) => \{[\s\S]*?const renderWishlist = \(\) => \{[\s\S]*?\n\};"
    if re.search(pattern, code):
        code = re.sub(pattern, modern_wishlist_js, code, count=1)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(code)
        print("Successfully updated modern wishlist in detail.js!")
    else:
        print("Wishlist pattern not matched in detail.js")

def update_app_js():
    file_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\app.js"
    with open(file_path, "r", encoding="utf-8") as f:
        code = f.read()

    # If modern wishlist not in app.js, insert before DOMContentLoaded
    if "window.renderWishlist" not in code:
        code = modern_wishlist_js + "\n\n" + code
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(code)
        print("Successfully inserted modern wishlist into app.js!")

update_detail_js()
update_app_js()
