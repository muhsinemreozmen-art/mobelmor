/* ==========================================
   mobelmor.com - Application Logic (v=9999)
   ========================================== */

const PRODUCTS = [
  {
    "id": 1,
    "title": "Zara Yemek Odası Takımı Siyah",
    "category": "dining",
    "subcategory": "dining-tables",
    "price": 66500,
    "rating": 4.9,
    "reviewsCount": 63,
    "image": "assets/p_zarayemeko_1e8f6324.jpg",
    "gallery": [
      "assets/p_zarayemeko_1e8f6324.jpg",
      "assets/p_zarayemeko_40ce0400.jpg",
      "assets/p_zarayemeko_484c0fc1.jpg",
      "assets/p_zarayemeko_db65958d.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "AKRİLİK SİYAH LAKE MERMER DOKULU MASİF MASA & AYNALI KONSOL",
    "desc": "Zara Yemek Odası Takımı Siyah ile modern ve şık bir yemek alanı yaratın. Estetik detaylar, kaliteli malzeme ve fonksiyonel tasarım bir arada. Evinize değer katın.",
    "specs": {
      "Modül": "Genişlik",
      "Masa (Açılır)": "175-215 cm",
      "Sandalye (6 Adet)": "50 cm",
      "Aynalı Konsol": "205 cm",
      "Konsol Aynası": "120 cm"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/zara-yemek-odasi-siyah"
  },
  {
    "id": 2,
    "title": "Zümrüt Koltuk Takımı",
    "category": "living",
    "subcategory": "sofas",
    "price": 83500,
    "rating": 4.9,
    "reviewsCount": 52,
    "image": "assets/zumrut_main.jpg",
    "gallery": [
      "assets/zumrut_main.jpg",
      "assets/zumrut_1.jpg"
    ],
    "badges": [
      "İNEGÖL ÖZEL KOLEKSİYON",
      "AHŞAP AYAKLI"
    ],
    "material": "MASİF AHŞAP AYAKLI LÜKS KUMAŞ İNEGÖL TASARIMI",
    "desc": "Zümrüt Koltuk Takımı, ergonomik sırt yapısı, masif ahşap ayak detayları ve zengin kumaş alternatifiyle oturma odanıza lüks ve konfor katıyor. Orijinal İnegöl zanaatıyla üretilmiştir.",
    "specs": {
      "Modül": "Genişlik",
      "3'lü Koltuk": "235 cm",
      "Berjer": "72 cm"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/zumrut-koltuk-takimi-2-3130"
  },
  {
    "id": 3,
    "title": "Pablo Koltuk Takımı",
    "category": "living",
    "subcategory": "sofas",
    "price": 83000,
    "rating": 4.8,
    "reviewsCount": 42,
    "image": "assets/pablo_main.jpg",
    "gallery": [
      "assets/pablo_main.jpg",
      "assets/pablo_1.jpg",
      "assets/pablo_2.jpg"
    ],
    "badges": [
      "YENİ KOLEKSİYON",
      "BOHEM TARZ"
    ],
    "material": "AHŞAP AYAKLI MODERN TASARIM - 32 DANSİTE SÜNGER",
    "desc": "Pablo Koltuk Takımı ile evinizde modern konforu yaşayın. Şık tasarımı, açık renk kumaşları ve zarif ahşap detaylarıyla ferah bir atmosfer sunar. İnegöl mobilya kalitesiyle uzun yıllar kullanın.",
    "specs": {
      "Modül": "Genişlik",
      "3'lü Koltuk": "230 cm",
      "Berjer": "68 cm"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/pablo-koltuk-takimi-modeli-mobilyam-inegolden"
  },
  {
    "id": 4,
    "title": "Asya Yatak Odası Takımı",
    "category": "bedroom",
    "subcategory": "beds",
    "price": 94500,
    "rating": 4.9,
    "reviewsCount": 38,
    "image": "assets/asya_main.jpg",
    "gallery": [
      "assets/asya_main.jpg",
      "assets/asya_1.jpg"
    ],
    "badges": [
      "İNEGÖL ÖZEL KOLEKSİYON",
      "MASİF MEŞE DOKU"
    ],
    "material": "MASİF MEŞE KAPLAMA & AKRİLİK KREM LAKE & AYNALI GARDIRAP",
    "desc": "Asya Yatak Odası Takımı, doğal meşe dokusu ve krem lake kombinasyonuyla yatak odanıza huzurlu ve lüks bir hava katar. Geniş gardırop hacmi ve LED aydınlatmalı başlığıyla fonksiyonel şıklık sunar.",
    "specs": {
      "Modül": "Genişlik",
      "Gardırop (6 Kapaklı)": "260 cm",
      "Karyola & Başlık": "180 cm",
      "Şifonyer & Ayna": "125 cm",
      "Komodin (2 Adet)": "60 cm"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/asya-yatak-odasi-takimi"
  }
];

const CATEGORY_NAMES = {
    all: "Tüm Koleksiyon",
    living: "Oturma Odası",
    dining: "Yemek Odası",
    bedroom: "Yatak Odası",
    office: "Çalışma Odası"
};

const SUBCATEGORY_NAMES = {
    all: "Tümü",
    sofas: "Koltuk & Takımlar",
    armchairs: "Berjerler",
    tables: "Sehpalar",
    consoles: "Konsollar",
    "dining-tables": "Yemek Masaları",
    chairs: "Sandalyeler",
    buffets: "Büfeler & Konsollar",
    beds: "Karyola & Yataklar",
    nightstands: "Komodinler",
    wardrobes: "Gardıroplar",
    desks: "Çalışma Masaları",
    bookcases: "Kitaplıklar"
};

let currentCategory = "all";
let currentSubcategory = "all";
let searchQuery = "";
let currentSort = "featured";
let cart = [];
let wishlist = new Set();

const formatPrice = (num) => {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 0 }).format(num);
};

const showToast = (message, icon = "fa-circle-check") => {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 300);
    }, 2800);
};

const getFilteredProducts = () => {
    return PRODUCTS.filter(product => {
        const matchesCat = (currentCategory === "all" || product.category === currentCategory);
        const matchesSubcat = (currentSubcategory === "all" || product.subcategory === currentSubcategory);
        const matchesSearch = (!searchQuery || 
            product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
            product.material.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCat && matchesSubcat && matchesSearch;
    }).sort((a, b) => {
        if (currentSort === "price-low") return a.price - b.price;
        if (currentSort === "price-high") return b.price - a.price;
        if (currentSort === "rating") return b.rating - a.rating;
        return a.id - b.id;
    });
};

const renderProducts = () => {
    const grid = document.getElementById("productGrid");
    const countBadge = document.getElementById("productCountBadge");
    if (!grid) return;

    const filtered = getFilteredProducts();

    if (countBadge) {
        let label = CATEGORY_NAMES[currentCategory] || "Tüm Koleksiyon";
        if (currentSubcategory !== "all" && SUBCATEGORY_NAMES[currentSubcategory]) {
            label += ` > ${SUBCATEGORY_NAMES[currentSubcategory]}`;
        }
        countBadge.textContent = `${label} (${filtered.length} Ürün Listeleniyor)`;
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: white; border-radius: 18px; border: 1px solid #e4e4e7;">
                <i class="fa-solid fa-box-open" style="font-size: 3rem; color: #a1a1aa; margin-bottom: 12px;"></i>
                <h3 style="margin: 0 0 8px 0; color: #18181b;">Aradığınız Kriterde Ürün Bulunamadı</h3>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(item => {
        const isFav = wishlist.has(item.id);
        return `
            <article class="product-card" data-id="${item.id}">
                <div class="card-image-box">
                    <img src="${item.image}" alt="${item.title}" class="card-img">
                    <div class="badge-pills-stack">
                        ${item.badges.map(b => `<span class="${b.includes('MASİF') || b.includes('YENİ') ? 'pill-purple' : 'pill-dark'}">${b}</span>`).join('')}
                    </div>
                    <button class="card-heart-btn ${isFav ? 'active' : ''}" data-id="${item.id}" title="Favorilere Ekle">
                        <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
                    </button>
                </div>
                <div class="card-details">
                    <span class="card-material-tag">${item.material}</span>
                    <h3 class="card-product-title">${item.title}</h3>
                    <div class="rating-line">
                        <i class="fa-solid fa-star"></i>
                        <span style="font-weight: 800; color: #18181b;">${item.rating}</span>
                        <span class="rating-count-text">(${item.reviewsCount})</span>
                    </div>
                    <div class="card-price-row">
                        <span class="card-price-text">${formatPrice(item.price)}</span>
                        <div class="card-actions-group">
                            <button class="circle-view-btn quick-view-btn" data-id="${item.id}" title="Hızlı İncele">
                                <i class="fa-regular fa-eye"></i>
                            </button>
                            <button class="pill-add-btn add-to-cart-btn" data-id="${item.id}">
                                <i class="fa-solid fa-cart-plus"></i> Ekle
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }).join('');

    attachCardEventListeners();
};

const attachCardEventListeners = () => {
    document.querySelectorAll(".product-card").forEach(card => {
        const id = card.getAttribute("data-id");
        const imgBox = card.querySelector(".card-image-box");
        const titleEl = card.querySelector(".card-product-title");

        const goToDetail = (e) => {
            if (e.target.closest(".card-heart-btn") || e.target.closest(".add-to-cart-btn") || e.target.closest(".quick-view-btn")) return;
            window.location.href = `product-detail.html?id=${id}`;
        };

        if (imgBox) imgBox.addEventListener("click", goToDetail);
        if (titleEl) {
            titleEl.style.cursor = "pointer";
            titleEl.addEventListener("click", goToDetail);
        }
    });

    document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute("data-id"));
            addToCart(id);
        });
    });

    document.querySelectorAll(".card-heart-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute("data-id"));
            if (wishlist.has(id)) {
                wishlist.delete(id);
                showToast("Ürün favorilerinizden çıkarıldı.", "fa-heart-crack");
            } else {
                wishlist.add(id);
                showToast("Ürün favorilerinize eklendi!", "fa-heart");
            }
            updateBadges();
            renderProducts();
        });
    });

    document.querySelectorAll(".quick-view-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute("data-id"));
            openQuickView(id);
        });
    });
};

const addToCart = (productId) => {
    const item = PRODUCTS.find(p => p.id === productId);
    if (!item) return;
    const existing = cart.find(c => c.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...item, qty: 1 });
    }
    updateBadges();
    showToast(`"${item.title}" sepete eklendi!`, "fa-bag-shopping");
    renderCart();
};

const updateBadges = () => {
    const cartBadge = document.getElementById("cartBadge");
    const wishBadge = document.getElementById("wishlistBadge");
    if (cartBadge) cartBadge.textContent = cart.reduce((sum, c) => sum + c.qty, 0);
    if (wishBadge) wishBadge.textContent = wishlist.size;
};

const renderCart = () => {
    const body = document.getElementById("cartBody");
    const footer = document.getElementById("cartFooter");
    if (!body || !footer) return;

    if (cart.length === 0) {
        body.innerHTML = `<p style="text-align:center; padding:30px; color:#71717a;">Sepetiniz boş.</p>`;
        footer.innerHTML = "";
        return;
    }

    body.innerHTML = cart.map(item => `
        <div class="cart-item-row">
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-info">
                <h5 class="cart-item-title">${item.title}</h5>
                <span class="cart-item-price">${formatPrice(item.price)}</span>
            </div>
            <div class="cart-qty-controls">
                <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                <span style="font-weight:800;">${item.qty}</span>
                <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
            </div>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);

    footer.innerHTML = `
        <div class="cart-total-line">
            <span>Toplam:</span>
            <span style="color:#6b21a8;">${formatPrice(subtotal)}</span>
        </div>
        <button class="btn btn-primary btn-block interactive-btn" id="openCheckoutBtn">Güvenli Ödemeye Geç</button>
    `;

    document.getElementById("openCheckoutBtn")?.addEventListener("click", () => {
        document.getElementById("cartDrawer").classList.remove("active");
        document.getElementById("cartOverlay").classList.remove("active");
        document.getElementById("checkoutTotal").textContent = formatPrice(subtotal);
        document.getElementById("checkoutOverlay").classList.add("active");
    });
};

window.changeQty = (id, delta) => {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
    updateBadges();
    renderCart();
};

const openQuickView = (productId) => {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const overlay = document.getElementById("quickViewOverlay");
    const content = document.getElementById("quickViewContent");
    if (!overlay || !content) return;

    content.innerHTML = `
        <div style="display:flex; gap:20px; flex-wrap:wrap;">
            <div style="flex:1; min-width:240px;">
                <img src="${product.image}" alt="${product.title}" style="width:100%; height:260px; object-fit:cover; border-radius:14px;">
            </div>
            <div style="flex:1.2; min-width:260px;">
                <span style="color:#6b21a8; font-weight:800; font-size:0.75rem;">${product.material}</span>
                <h2 style="margin:4px 0 8px 0; color:#18181b;">${product.title}</h2>
                <p style="color:#52525b; font-size:0.88rem;">${product.desc}</p>
                <div style="margin-top:20px; display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:1.4rem; font-weight:800;">${formatPrice(product.price)}</span>
                    <button class="pill-add-btn interactive-btn" id="modalAddCart">Sepete Ekle</button>
                </div>
            </div>
        </div>
    `;

    overlay.classList.add("active");
    document.getElementById("modalAddCart")?.addEventListener("click", () => {
        addToCart(product.id);
        overlay.classList.remove("active");
    });
};

const renderWishlist = () => {
    const body = document.getElementById("wishlistBody");
    const footer = document.getElementById("wishlistFooter");
    if (!body || !footer) return;

    const wishListItems = PRODUCTS.filter(p => wishlist.has(p.id));

    if (wishListItems.length === 0) {
        body.innerHTML = `<div style="text-align:center; padding:40px 20px; color:#71717a;"><i class="fa-regular fa-heart" style="font-size:2.5rem; color:#cbd5e1; margin-bottom:12px;"></i><p style="margin:0;">Henüz favorilere ürün eklemediniz.</p></div>`;
        footer.innerHTML = "";
        return;
    }

    body.innerHTML = wishListItems.map(item => `
        <div class="cart-item-row">
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-info">
                <h5 class="cart-item-title">${item.title}</h5>
                <span class="cart-item-price">${formatPrice(item.price)}</span>
            </div>
            <div style="display:flex; gap:6px;">
                <button class="pill-add-btn" onclick="addToCart(${item.id}); toggleWishlist(${item.id}); renderWishlist();" title="Sepete Aktar" style="padding:4px 8px; font-size:0.75rem;">
                    <i class="fa-solid fa-cart-plus"></i>
                </button>
                <button class="qty-btn" onclick="toggleWishlist(${item.id}); renderWishlist();" title="Kaldır" style="color:#ef4444 !important;">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>
    `).join('');

    footer.innerHTML = `
        <button class="btn btn-primary btn-block interactive-btn" onclick="wishListItems.forEach(i => addToCart(i.id)); showToast('Tüm favoriler sepete eklendi!', 'fa-basket-shopping');">
            Tüm Favorileri Sepete Ekle
        </button>
    `;
};

window.toggleWishlist = (id) => {
    if (wishlist.has(id)) wishlist.delete(id);
    else wishlist.add(id);
    updateBadges();
    renderProducts();
};

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();

    document.querySelectorAll(".cat-dropdown-wrapper").forEach(wrapper => {
        const pill = wrapper.querySelector(".cat-pill");
        if (pill) {
            pill.addEventListener("click", () => {
                const cat = pill.getAttribute("data-category");
                const isOpen = wrapper.classList.contains("open");
                document.querySelectorAll(".cat-dropdown-wrapper").forEach(w => w.classList.remove("open"));
                if (!isOpen) wrapper.classList.add("open");
                if (cat) {
                    document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
                    pill.classList.add("active");
                    currentCategory = cat;
                    currentSubcategory = "all";
                    renderProducts();
                }
            });
        }
    });

    document.querySelectorAll(".dropdown-item").forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const cat = item.getAttribute("data-cat");
            const sub = item.getAttribute("data-sub");
            currentCategory = cat;
            currentSubcategory = sub;
            document.querySelectorAll(".cat-dropdown-wrapper").forEach(w => w.classList.remove("open"));
            document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
            const targetPill = document.querySelector(`.cat-pill[data-category="${cat}"]`);
            if (targetPill) targetPill.classList.add("active");
            renderProducts();
            showToast(`Filtrelendi: ${CATEGORY_NAMES[cat]} > ${SUBCATEGORY_NAMES[sub] || 'Tümü'}`, "fa-filter");
        });
    });

    document.querySelectorAll(".cat-pill[data-category='all']").forEach(p => {
        p.addEventListener("click", () => {
            currentCategory = "all";
            currentSubcategory = "all";
            document.querySelectorAll(".cat-pill").forEach(el => el.classList.remove("active"));
            p.classList.add("active");
            renderProducts();
        });
    });

    const searchInput = document.getElementById("searchInput");
    const clearSearchBtn = document.getElementById("clearSearchBtn");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value;
            if (clearSearchBtn) clearSearchBtn.style.display = searchQuery ? "inline-flex" : "none";
            renderProducts();
        });
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener("click", () => {
            if (searchInput) searchInput.value = "";
            searchQuery = "";
            clearSearchBtn.style.display = "none";
            renderProducts();
        });
    }

    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            currentSort = e.target.value;
            renderProducts();
        });
    }

    // Wishlist Drawer Trigger
    document.getElementById("wishlistBtn")?.addEventListener("click", () => {
        renderWishlist();
        document.getElementById("wishlistDrawer")?.classList.add("active");
        document.getElementById("wishlistOverlay")?.classList.add("active");
    });

    document.getElementById("closeWishlistBtn")?.addEventListener("click", () => {
        document.getElementById("wishlistDrawer")?.classList.remove("active");
        document.getElementById("wishlistOverlay")?.classList.remove("active");
    });

    document.getElementById("wishlistOverlay")?.addEventListener("click", () => {
        document.getElementById("wishlistDrawer")?.classList.remove("active");
        document.getElementById("wishlistOverlay")?.classList.remove("active");
    });

    // Cart Drawer Trigger
    document.getElementById("cartBtn")?.addEventListener("click", () => {
        renderCart();
        document.getElementById("cartDrawer")?.classList.add("active");
        document.getElementById("cartOverlay")?.classList.add("active");
    });

    document.getElementById("closeCartBtn")?.addEventListener("click", () => {
        document.getElementById("cartDrawer")?.classList.remove("active");
        document.getElementById("cartOverlay")?.classList.remove("active");
    });

    document.getElementById("cartOverlay")?.addEventListener("click", () => {
        document.getElementById("cartDrawer")?.classList.remove("active");
        document.getElementById("cartOverlay")?.classList.remove("active");
    });

    document.getElementById("closeQuickViewBtn")?.addEventListener("click", () => {
        document.getElementById("quickViewOverlay")?.classList.remove("active");
    });

    document.getElementById("closeCheckoutBtn")?.addEventListener("click", () => {
        document.getElementById("checkoutOverlay")?.classList.remove("active");
    });

    // Checkout Form Submit Handling
    const checkoutForm = document.getElementById("checkoutForm");
    if (checkoutForm) {
        checkoutForm.addEventListener("submit", (e) => {
            e.preventDefault();
            cart = [];
            updateBadges();
            renderCart();
            document.getElementById("checkoutOverlay")?.classList.remove("active");
            showToast("Siparişiniz başarıyla alındı! Müşteri temsilcimiz sizinle iletişime geçecektir.", "fa-circle-check");
            checkoutForm.reset();
        });
    }
});

