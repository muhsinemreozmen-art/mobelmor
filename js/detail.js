/* ==========================================
   mobelmor.com - Product Detail JS (v=9999)
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
    "image": "assets/fullsize_p1_8.jpg",
    "gallery": [
      "assets/fullsize_p1_8.jpg"
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
    "title": "Asel Yatak Odası Takımı Siyah Detaylı",
    "category": "bedroom",
    "subcategory": "beds",
    "price": 80500,
    "rating": 4.9,
    "reviewsCount": 42,
    "image": "assets/fullsize_p2_8.jpg",
    "gallery": [
      "assets/fullsize_p2_8.jpg",
      "assets/fullsize_p2_9.jpg",
      "assets/fullsize_p2_10.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "MODERN KREM RENGİ TASARIM & FLÜTLÜ YÜZEYLİ BAZALI KARYOLA",
    "desc": "Asel Yatak Odası Takımı siyah detayları, modern krem rengi tasarımı ve flütlü yüzeyleriyle yatak odanıza zarafet katıyor. Fonksiyonel gardırop ve şık karyola ile konfor ve estetiği bir arada yaşayın.",
    "specs": {
      "Modül": "Genişlik",
      "6 Kapılı Dolap": "248 cm",
      "K.Bazalı Karyola": "295 cm",
      "Aynalı Şifonyer": "130 cm",
      "Komodin": "60 cm",
      "2 Kapılı Askılıklı Dolap": "84 cm"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/asel-yatak-odasi-siyah-detayli"
  },
  {
    "id": 3,
    "title": "Zümrüt Koltuk Takımı",
    "category": "living",
    "subcategory": "sofas",
    "price": 69500,
    "rating": 4.8,
    "reviewsCount": 53,
    "image": "assets/real_zumrut-koltuk-takimi_5_30f3e7e5.jpg",
    "gallery": [
      "assets/real_zumrut-koltuk-takimi_5_30f3e7e5.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "MODERN & KLASİK ÇİZGİLİ LÜKS DÖŞEME & FIRINLANMIŞ MASİF GÜRGEN",
    "desc": "Zümrüt Koltuk Takımı, modern ve klasik çizgileri birleştirerek evinize zarafet katıyor. Konforlu oturum alanı ve şık tasarımıyla öne çıkıyor.",
    "specs": {
      "Modül": "Genişlik",
      "3'lü Koltuk": "235 cm",
      "Berjer": "76 cm",
      "İskelet Bilgisi": "%100 Fırınlanmış Gürgen"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/zumrut-koltuk-takimi"
  },
  {
    "id": 4,
    "title": "Pera Yemek Odası Takımı Ceviz",
    "category": "dining",
    "subcategory": "dining-tables",
    "price": 92000,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "assets/fullsize_p4_9.jpg",
    "gallery": [
      "assets/fullsize_p4_9.jpg",
      "assets/fullsize_p4_8.jpg",
      "assets/fullsize_p4_10.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "DOĞAL CEVİZ KAPLAMA MASA & AYNLI KONSOL VE TV ÜNİTESİ",
    "desc": "Pera Yemek Odası Takımı Ceviz, modern tasarımı ve kaliteli işçiliğiyle yemek alanınıza zarafet katıyor. İnegöl mobilya kampanyaları ile şimdi keşfedin!",
    "specs": {
      "Modül": "Genişlik",
      "Sabit Masa": "200 cm",
      "Aynalı Konsol": "215 cm",
      "Sandalye (6 Adet)": "50 cm"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/pera-yemek-odasi-2-1773"
  },
  {
    "id": 5,
    "title": "Bohem Koltuk Takımı Krem",
    "category": "living",
    "subcategory": "sofas",
    "price": 56000,
    "rating": 4.9,
    "reviewsCount": 75,
    "image": "assets/real_bohem-koltuk-takimi_5_30f3e7e5.jpg",
    "gallery": [
      "assets/real_bohem-koltuk-takimi_5_30f3e7e5.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "KREM RENGİ BOHEM LÜKS DÖŞEME & RAHAT SOFT OTURUM",
    "desc": "Krem rengi bohem koltuk takımı ile salonunuzda modern ve davetkar bir atmosfer yaratın. Rahat ve şık tasarımı İnegöl mobilya kalitesiyle sunuluyor.",
    "specs": {
      "Modül": "Genişlik",
      "3'lü Koltuk": "225 cm",
      "Berjer": "75 cm",
      "Sünger": "32 DNS Konfor Sünger"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/bohem-koltuk-takimi-krem"
  }
];

const CATEGORY_NAMES = {
    living: "Oturma Odası",
    dining: "Yemek Odası",
    bedroom: "Yatak Odası",
    office: "Çalışma Odası"
};

let cart = [];
let wishlist = new Set();
let selectedQty = 1;

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

const getProductIdFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    const idStr = params.get("id");
    return idStr ? parseInt(idStr) : 1;
};



// ── Lightbox Gallery State & Logic ───────────────────────────────────────
let lightboxGallery = [];
let lightboxCurrentIndex = 0;
let currentActiveGalleryIndex = 0;
let touchStartX = 0;

const createLightbox = () => {
    if (document.getElementById('mbl-lightbox')) return;
    const lb = document.createElement('div');
    lb.id = 'mbl-lightbox';
    lb.className = 'mbl-lightbox-overlay';
    lb.innerHTML = `
        <div class="mbl-lightbox-header">
            <div class="lb-header-info">
                <span class="lb-counter" id="lbCounter">1 / 1</span>
                <span class="lb-title" id="lbTitle">Ürün Görseli</span>
            </div>
            <button class="lb-close-btn" id="lbClose" title="Kapat (Esc)">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
        <div class="mbl-lightbox-body" id="lbBody">
            <button class="lb-nav-btn lb-prev-btn" id="lbPrev" title="Önceki (Sol Ok)"><i class="fa-solid fa-chevron-left"></i></button>
            <div class="lb-img-wrapper">
                <img id="lbImg" class="lb-img" src="" alt="Büyütülmüş Ürün Görseli">
            </div>
            <button class="lb-nav-btn lb-next-btn" id="lbNext" title="Sonraki (Sağ Ok)"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
        <div class="mbl-lightbox-footer">
            <div class="lb-thumb-strip" id="lbThumbStrip"></div>
        </div>
    `;
    document.body.appendChild(lb);

    // Event listeners
    document.getElementById('lbClose').addEventListener('click', closeLightbox);
    document.getElementById('lbPrev').addEventListener('click', () => navigateLightbox(-1));
    document.getElementById('lbNext').addEventListener('click', () => navigateLightbox(1));

    // Close on clicking overlay background
    lb.addEventListener('click', (e) => {
        if (e.target.classList.contains('mbl-lightbox-body') || e.target.classList.contains('lb-img-wrapper')) {
            closeLightbox();
        }
    });

    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        const activeLb = document.getElementById('mbl-lightbox');
        if (!activeLb || !activeLb.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        else if (e.key === 'ArrowLeft') navigateLightbox(-1);
        else if (e.key === 'ArrowRight') navigateLightbox(1);
    });

    // Touch swipe support
    const lbBody = document.getElementById('lbBody');
    lbBody.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lbBody.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;
        if (Math.abs(diff) > 40) {
            if (diff < 0) navigateLightbox(1);
            else navigateLightbox(-1);
        }
    }, { passive: true });
};

window.swapMainImg = (src, thumb, idx) => {
    if (typeof idx === 'number') {
        currentActiveGalleryIndex = idx;
    } else {
        const pid = getProductIdFromUrl();
        const product = PRODUCTS.find(p => p.id === pid) || PRODUCTS[0];
        const gallery = product.gallery || [product.image];
        const found = gallery.indexOf(src);
        if (found !== -1) currentActiveGalleryIndex = found;
    }
    const main = document.getElementById('mainDetailImg');
    if (main) {
        main.src = src;
        main.style.transition = 'opacity .18s';
        main.style.opacity = '0.5';
        setTimeout(() => main.style.opacity = '1', 180);
    }
    document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
    if (thumb) thumb.classList.add('active');
};

window.openLightbox = (startIndex = 0) => {
    createLightbox();
    const pid = getProductIdFromUrl();
    const product = PRODUCTS.find(p => p.id === pid) || PRODUCTS[0];
    lightboxGallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

    if (typeof startIndex === 'string') {
        const foundIdx = lightboxGallery.indexOf(startIndex);
        lightboxCurrentIndex = foundIdx !== -1 ? foundIdx : currentActiveGalleryIndex;
    } else if (typeof startIndex === 'number') {
        lightboxCurrentIndex = Math.max(0, Math.min(startIndex, lightboxGallery.length - 1));
    } else {
        lightboxCurrentIndex = currentActiveGalleryIndex;
    }

    const lb = document.getElementById('mbl-lightbox');
    const titleEl = document.getElementById('lbTitle');
    if (titleEl) titleEl.textContent = product.title;

    renderLightboxThumbs();
    updateLightboxView();

    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.closeLightbox = () => {
    const lb = document.getElementById('mbl-lightbox');
    if (lb) lb.classList.remove('active');
    document.body.style.overflow = '';
};

window.navigateLightbox = (direction) => {
    if (!lightboxGallery || lightboxGallery.length === 0) return;

    if (typeof direction === 'number' && (direction === 1 || direction === -1)) {
        lightboxCurrentIndex = (lightboxCurrentIndex + direction + lightboxGallery.length) % lightboxGallery.length;
    } else if (typeof direction === 'number') {
        lightboxCurrentIndex = Math.max(0, Math.min(direction, lightboxGallery.length - 1));
    }

    updateLightboxView();
};

const updateLightboxView = () => {
    const lbImg = document.getElementById('lbImg');
    const lbCounter = document.getElementById('lbCounter');
    if (!lbImg) return;

    lbImg.style.opacity = '0.3';
    lbImg.style.transform = 'scale(0.96)';

    setTimeout(() => {
        lbImg.src = lightboxGallery[lightboxCurrentIndex];
        lbImg.style.opacity = '1';
        lbImg.style.transform = 'scale(1)';
    }, 120);

    if (lbCounter) {
        lbCounter.textContent = `${lightboxCurrentIndex + 1} / ${lightboxGallery.length}`;
    }

    const currentSrc = lightboxGallery[lightboxCurrentIndex];
    const thumbs = document.querySelectorAll('.thumb-img');
    if (thumbs[lightboxCurrentIndex]) {
        swapMainImg(currentSrc, thumbs[lightboxCurrentIndex], lightboxCurrentIndex);
    }

    document.querySelectorAll('.lb-thumb-img').forEach((t, i) => {
        if (i === lightboxCurrentIndex) {
            t.classList.add('active');
            t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            t.classList.remove('active');
        }
    });
};

const renderLightboxThumbs = () => {
    const strip = document.getElementById('lbThumbStrip');
    if (!strip) return;

    strip.innerHTML = lightboxGallery.map((src, i) => `
        <img src="${src}" class="lb-thumb-img ${i === lightboxCurrentIndex ? 'active' : ''}" 
             onclick="navigateLightbox(${i})" title="Görsel ${i + 1}">
    `).join('');
};

let currentModuleState = {
    mainQty: 1,
    extraQty: 0,
    mainUnitPrice: 0,
    extraUnitPrice: 0,
    productBasePrice: 0
};

const renderProductDetail = () => {
    const pid = getProductIdFromUrl();
    const product = PRODUCTS.find(p => p.id === pid) || PRODUCTS[0];

    document.title = `${product.title} | Mobelmor.com`;

    const breadCat = document.getElementById("breadCatLink");
    const breadTitle = document.getElementById("breadTitle");
    if (breadCat) breadCat.textContent = CATEGORY_NAMES[product.category] || "Koleksiyon";
    if (breadTitle) breadTitle.textContent = product.title;

    currentModuleState.productBasePrice = product.price;
    currentModuleState.mainUnitPrice = product.price;
    currentModuleState.extraUnitPrice = Math.round(product.price * 0.18);
    currentModuleState.mainQty = 1;
    currentModuleState.extraQty = 0;

    const detailGrid = document.getElementById("detailGrid");
    if (detailGrid) {
        detailGrid.innerHTML = `
            <div class="product-gallery-box">
                <div class="main-image-container" style="position:relative; height:450px; cursor:pointer;" onclick="openLightbox(currentActiveGalleryIndex)" title="Büyütmek için tıklayın">
                    <img src="${product.image}" alt="${product.title}" id="mainDetailImg" class="main-detail-img" style="pointer-events:none;">
                    <div class="gallery-badges">
                        <span class="badge-tag" style="background:#6b21a8 !important;">${product.badges?.[0] || 'İNEGÖL'}</span>
                        <span class="badge-tag" style="background:#18181b !important;">%100 ORİJİNAL</span>
                    </div>
                    <div class="zoom-hint-badge">
                        <i class="fa-solid fa-expand"></i> Tam Ekran Büyüt
                    </div>
                </div>
                <div class="thumbnail-strip">
                    ${(product.gallery || [product.image]).map((gImg, idx) => `
                        <img src="${gImg}" class="thumb-img ${idx === 0 ? 'active' : ''}" onclick="swapMainImg('${gImg}', this, ${idx})" title="Görüntüle" style="cursor:pointer;">
                    `).join('')}
                </div>
            </div>

            <div class="product-info-box" style="padding-left:10px;">
                <span style="font-size:0.72rem; font-weight:700; color:#94a3b8; text-transform:uppercase; letter-spacing:0.06em;">Ürün Kodu: MBL-${String(product.id).padStart(3,'0')}</span>
                <h1 class="detail-title" style="font-size:1.75rem; margin:4px 0 8px 0; color:#18181b; line-height:1.25;">${product.title}</h1>
                <span style="color:#16a34a; font-weight:700; font-size:0.78rem; margin-bottom:14px; display:flex; align-items:center; gap:5px;"><i class="fa-solid fa-circle-check"></i> Stokta Var &nbsp;·&nbsp; Ücretsiz Kurulum</span>

                <div style="font-size:2.2rem; font-weight:900; color:#6b21a8; margin-bottom:14px; letter-spacing:-0.5px;" id="topMainPriceDisplay">
                    ${formatPrice(product.price)}
                </div>

                <div style="background:#faf5ff; border:1px solid #e9d5ff; border-radius:10px; padding:12px 14px; display:flex; flex-direction:column; gap:8px; margin-bottom:14px;">
                    <div style="display:flex; align-items:center; gap:10px; font-size:0.8rem; color:#52525b;">
                        <i class="fa-solid fa-euro-sign" style="color:#6b21a8;width:14px;text-align:center;"></i>
                        <span>Euro fiyatı için tıklayın</span>
                    </div>
                    <div style="display:flex; align-items:center; justify-content:space-between; font-size:0.8rem; color:#52525b; padding:8px 0; border-top:1px dashed #e9d5ff;">
                        <span style="display:flex;align-items:center;gap:10px;"><i class="fa-solid fa-percent" style="color:#6b21a8;width:14px;text-align:center;"></i> 6 Ay Vade Farksız Taksit</span>
                        <strong id="installmentPriceVal" style="color:#6b21a8;">${formatPrice(Math.round(product.price / 6))}/ay</strong>
                    </div>
                    <div style="display:flex; align-items:center; justify-content:space-between; font-size:0.8rem; color:#52525b; padding:8px 0; border-top:1px dashed #e9d5ff;">
                        <span style="display:flex;align-items:center;gap:10px;"><i class="fa-solid fa-tag" style="color:#6b21a8;width:14px;text-align:center;"></i> %10 Ön Ödeme İndirimi</span>
                        <strong id="prepaymentPriceVal" style="color:#16a34a;">${formatPrice(Math.round(product.price * 0.9))}</strong>
                    </div>
                    <div style="display:flex; align-items:center; gap:10px; font-size:0.8rem; color:#52525b; padding-top:8px; border-top:1px dashed #e9d5ff;">
                        <i class="fa-solid fa-truck-fast" style="color:#6b21a8;width:14px;text-align:center;"></i>
                        <span>Tahmini Teslimat: <strong>05.09.2026</strong></span>
                    </div>
                </div>

                <div style="display:flex; flex-direction:column; gap:8px;">
                    <button class="mobelmor-cart-btn interactive-btn" id="topDetailAddToCartBtn" style="width:100%;padding:13px;font-size:0.95rem;border-radius:10px;letter-spacing:0.02em;">
                        <i class="fa-solid fa-cart-shopping"></i> Sepete Ekle
                    </button>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                        <button style="display:flex;align-items:center;justify-content:center;gap:7px;padding:11px 8px;background:#25D366;color:#fff;border:none;border-radius:10px;font-size:0.8rem;font-weight:700;cursor:pointer;transition:opacity .18s;" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">
                            <i class="fa-brands fa-whatsapp" style="font-size:1.05rem;"></i> WhatsApp Sipariş
                        </button>
                        <button style="display:flex;align-items:center;justify-content:center;gap:7px;padding:11px 8px;background:#18181b;color:#fff;border:none;border-radius:10px;font-size:0.8rem;font-weight:700;cursor:pointer;transition:opacity .18s;" onmouseover="this.style.opacity='.75'" onmouseout="this.style.opacity='1'">
                            <i class="fa-solid fa-palette" style="font-size:0.95rem;"></i> Kumaş Seçenekleri
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    renderModulePriceSection(product);
    renderSpecsAndGeneralInfo(product);
    renderRelatedProducts(product);

    document.getElementById("topDetailAddToCartBtn")?.addEventListener("click", () => {
        addToCart(product.id, 1);
    });
};

const getCategoryModuleConfig = (product) => {
    const cat = product.category;
    const sub = product.subcategory || '';
    const specs = product.specs || {};
    const specEntries = Object.entries(specs).filter(([k,v]) => k && v && k !== 'Modül' && k !== 'Genişlik');

    if (cat === 'living' && sub === 'sofas') {
        return [
            { id: 'main',  label: "3'lü Koltuk",          price: Math.round(product.price * 0.55), qty: 1 },
            { id: 'extra', label: 'Berjer (isteğe bağlı)', price: Math.round(product.price * 0.22), qty: 0 },
        ];
    } else if (cat === 'dining') {
        return [
            { id: 'main',  label: 'Masa + Sandalye Takımı', price: product.price,                    qty: 1 },
            { id: 'extra', label: 'Ekstra Sandalye',         price: Math.round(product.price * 0.08), qty: 0 },
        ];
    } else if (cat === 'bedroom') {
        return [
            { id: 'main',  label: 'Yatak Odası Takımı',  price: product.price,                    qty: 1 },
            { id: 'extra', label: 'Baza & Başlık',        price: Math.round(product.price * 0.20), qty: 0 },
        ];
    } else {
        return [
            { id: 'main',  label: product.title, price: product.price, qty: 1 },
        ];
    }
};

const renderModulePriceSection = (product) => {
    const container = document.getElementById("modulePriceSection");
    if (!container) return;

    const modules = getCategoryModuleConfig(product);
    currentModuleState.modules = modules.map(m => ({ ...m }));

    const rows = modules.map(m => `
        <tr>
            <td style="font-weight:800;text-align:left;padding-left:20px;">${m.label}</td>
            <td style="color:#18181b;font-weight:700;">${formatPrice(m.price)}</td>
            <td>
                <div class="qty-counter-box">
                    <button class="qty-counter-btn" onclick="updateModuleQty('${m.id}',-1)">-</button>
                    <span class="qty-counter-val" id="mod_${m.id}_qty">${m.qty}</span>
                    <button class="qty-counter-btn" onclick="updateModuleQty('${m.id}',1)">+</button>
                </div>
            </td>
            <td style="font-weight:800;color:#6b21a8;" id="mod_${m.id}_sub">${formatPrice(m.price * m.qty)}</td>
        </tr>
    `).join('');

    container.innerHTML = `
        <div class="module-header-title">${product.title.toUpperCase()} FİYAT HESAPLAYICI</div>
        <div class="module-table-wrapper">
            <table class="module-table">
                <thead><tr><th>Modül</th><th>Birim Fiyat</th><th>Adet</th><th>Ara Toplam</th></tr></thead>
                <tbody>${rows}</tbody>
            </table>
            <div class="module-total-side">
                <span style="font-size:0.85rem;font-weight:800;color:#71717a;margin-bottom:4px;">Hesaplanan Toplam:</span>
                <span class="grand-total-val" id="moduleGrandTotal">${formatPrice(product.price)}</span>
                <button class="mobelmor-cart-btn interactive-btn" id="moduleAddToCartBtn">
                    <i class="fa-solid fa-cart-shopping"></i> Sepete Ekle
                </button>
            </div>
        </div>
    `;

    document.getElementById("moduleAddToCartBtn")?.addEventListener("click", () => addToCart(product.id, 1));
};

// DYNAMIC LIVE CALCULATOR
window.updateModuleQty = (id, delta) => {
    const mod = currentModuleState.modules?.find(m => m.id === id);
    if (!mod) return;
    if (id === 'main') mod.qty = Math.max(1, mod.qty + delta);
    else mod.qty = Math.max(0, mod.qty + delta);

    const qtyEl = document.getElementById(`mod_${id}_qty`);
    const subEl = document.getElementById(`mod_${id}_sub`);
    if (qtyEl) qtyEl.textContent = mod.qty;
    if (subEl) subEl.textContent = formatPrice(mod.price * mod.qty);

    const grandTotal = (currentModuleState.modules || []).reduce((s, m) => s + m.price * m.qty, 0);
    const fmt = formatPrice(grandTotal);
    const grandEl = document.getElementById('moduleGrandTotal');
    const topEl = document.getElementById('topMainPriceDisplay');
    const instEl = document.getElementById('installmentPriceVal');
    const preEl = document.getElementById('prepaymentPriceVal');
    if (grandEl) grandEl.textContent = fmt;
    if (topEl) topEl.textContent = fmt;
    if (instEl) instEl.textContent = formatPrice(Math.round(grandTotal / 6));
    if (preEl) preEl.textContent = formatPrice(Math.round(grandTotal * 0.1));
};

const renderSpecsAndGeneralInfo = (product) => {
    const dimsTable = document.getElementById('moduleDimsTable');
    const featureTable = document.getElementById('featureSpecsTable');
    const specs = product.specs || {};
    const specEntries = Object.entries(specs).filter(([k, v]) => k && v && k.trim() && v.trim() && k !== 'Modül' && k !== 'Genişlik' && v !== 'Genişlik');

    // Ölçü tablosu - gerçek ürün specs'inden ölçü verilerini çek
    if (dimsTable) {
        if (specEntries.length > 0) {
            const rows = specEntries.map(([k, v]) =>
                `<tr><td style="font-weight:700;color:#334155;width:55%;">${k}</td><td>${v}${/^\d+$/.test(v.trim()) ? ' cm' : ''}</td></tr>`
            ).join('');
            dimsTable.innerHTML = `<tbody>${rows}</tbody>`;
        } else {
            dimsTable.innerHTML = '<tbody><tr><td colspan="2" style="color:#94a3b8;padding:12px;">Ölçü bilgisi mevcut değil.</td></tr></tbody>';
        }
    }

    // Özellik tablosu - gerçek ürün bilgileri
    if (featureTable) {
        const cat = product.category;
        const generalFeatures = [
            cat === 'bedroom' ? ['Garanti', '2 Yıl Üretici Garantisi'] : null,
            cat === 'living' ? ['İskelet', '%100 Masif Gürgen'] : null,
            cat === 'living' ? ['Sünger', '28 Dansite HR Konfor'] : null,
            cat === 'dining' ? ['Malzeme', 'MDF & Masif Ahşap'] : null,
            cat === 'dining' ? ['Garanti', '2 Yıl Üretici Garantisi'] : null,
            ['Teslimat', 'Türkiye & Avrupa Geneli'],
            ['Kurulum', 'Ücretsiz Profesyonel Kurulum'],
            ['Kaynak', 'Orijinal İnegöl Mobilyası'],
        ].filter(Boolean);

        featureTable.innerHTML = `<tbody>${generalFeatures.map(([k,v]) =>
            `<tr><th style="width:45%;font-weight:700;">${k}</th><td>${v}</td></tr>`
        ).join('')}</tbody>`;
    }
};

const renderRelatedProducts = (currentProduct) => {
    const grid = document.getElementById("relatedGrid");
    if (!grid) return;

    let related = PRODUCTS.filter(p => p.id !== currentProduct.id && p.category === currentProduct.category && p.subcategory === currentProduct.subcategory).slice(0, 4);
    if (related.length === 0) {
        related = PRODUCTS.filter(p => p.id !== currentProduct.id && p.category === currentProduct.category).slice(0, 4);
    }

    grid.innerHTML = related.map(item => `
        <article class="product-card" onclick="window.location.href='product-detail.html?id=${item.id}'" style="cursor: pointer;">
            <div class="card-image-box">
                <img src="${item.image}" alt="${item.title}" class="card-img">
            </div>
            <div class="card-details">
                <span class="card-material-tag">${item.material}</span>
                <h3 class="card-product-title">${item.title}</h3>
                <div class="card-price-row">
                    <span class="card-price-text">${formatPrice(item.price)}</span>
                    <button class="pill-add-btn" onclick="event.stopPropagation(); window.location.href='product-detail.html?id=${item.id}'">İncele</button>
                </div>
            </div>
        </article>
    `).join('');
};

const addToCart = (productId, qty = 1) => {
    const item = PRODUCTS.find(p => p.id === productId);
    if (!item) return;
    const existing = cart.find(c => c.id === productId);
    if (existing) existing.qty += qty;
    else cart.push({ ...item, qty });
    updateBadges();
    showToast(`"${item.title}" (${qty} Adet) sepete eklendi!`, "fa-bag-shopping");
};

const updateBadges = () => {
    const cartBadge = document.getElementById("cartBadge");
    if (cartBadge) cartBadge.textContent = cart.reduce((sum, c) => sum + c.qty, 0);
};

const openCheckoutModal = () => {
    const overlay = document.getElementById("checkoutOverlay");
    if (!overlay) return;
    overlay.classList.add("active");
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
};

window.changeQty = (id, delta) => {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
    updateBadges();
    renderCart();
};

document.addEventListener("DOMContentLoaded", () => {
    renderProductDetail();

    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-tab");
            document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
            btn.classList.add("active");
            document.getElementById(targetId)?.classList.add("active");
        });
    });

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

    document.getElementById("closeCheckoutBtn")?.addEventListener("click", () => {
        document.getElementById("checkoutOverlay")?.classList.remove("active");
    });
});

