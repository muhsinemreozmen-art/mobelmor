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
    "price": 56000.0,
    "rating": 4.9,
    "reviewsCount": 42,
    "image": "assets/bohem_p5_1.jpg",
    "gallery": [
      "assets/bohem_p5_1.jpg"
    ],
    "badges": [
      "BOHEM KOLEKSİYONU",
      "%100 İNEGÖL MOBİLYASI"
    ],
    "material": "BOHEM TARZ LÜKS DOKUMA KUMAŞ & FIRINLANMIŞ MASİF AHŞAP",
    "desc": "Bohem Koltuk Takımı Krem, keten dokulu lüks silinebilir kumaşı ve fırınlanmış gürgen ağacından masif ayakları ile salonunuza ferahlık ve bohem zarafet katar.",
    "specs": {
      "3'lü Koltuk": "230 cm",
      "Berjer": "78 cm",
      "Kumaş Tipi": "Silinebilir Keten Dokulu Lüks Kumaş",
      "Sünger Desteği": "35 Dns Soft Kuştüyü Sünger"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/bohem-koltuk-takimi-krem"
  },
  {
    "id": 6,
    "title": "Viyana Masif Berjer Koltuk",
    "category": "living",
    "subcategory": "armchairs",
    "price": 18500,
    "rating": 4.9,
    "reviewsCount": 28,
    "image": "assets/armchair.jpg",
    "gallery": [
      "assets/armchair.jpg"
    ],
    "badges": [
      "ZANAATKAR SERİSİ",
      "%100 MASİF MEŞE"
    ],
    "material": "İŞLENMİŞ MASİF İSKELET & DOKUMA NUBUK KUMAŞ",
    "desc": "Viyana Masif Berjer, kavisli masif meşe kolçakları ve ergonomik bel desteği ile okuma köşelerinize ve salonlarınıza zamansız bir estetik sunar.",
    "specs": {
      "Genişlik": "82 cm",
      "Derinlik": "85 cm",
      "Yükseklik": "90 cm",
      "İskelet": "%100 Fırınlanmış Masif Meşe"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/viyana-berjer"
  },
  {
    "id": 7,
    "title": "Lotus Masif Ceviz Orta Sehpa",
    "category": "living",
    "subcategory": "tables",
    "price": 12400,
    "rating": 4.8,
    "reviewsCount": 35,
    "image": "assets/bohem_p6_1.jpg",
    "gallery": [
      "assets/bohem_p6_1.jpg"
    ],
    "badges": [
      "DOĞAL AHŞAP",
      "ORGANİK CİLA"
    ],
    "material": "ORGANİK YAĞ CİLALI MASİF CEVİZ KAPLAMA",
    "desc": "Lotus Orta Sehpa, organik yağ cila kaplı doğal ceviz yüzeyi ve flüt kesim masif ayak yapısı ile oturma odanızın merkezinde lüks bir hava estirir.",
    "specs": {
      "Çap / Genişlik": "110 cm",
      "Yükseklik": "42 cm",
      "Malzeme": "%100 Doğal Ceviz Kaplama & Masif Ayak"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/lotus-orta-sehpa"
  },
  {
    "id": 8,
    "title": "Mera Aynalı TV Ünitesi & Konsol",
    "category": "living",
    "subcategory": "consoles",
    "price": 29800,
    "rating": 4.9,
    "reviewsCount": 19,
    "image": "assets/bohem_p7_1.jpg",
    "gallery": [
      "assets/bohem_p7_1.jpg"
    ],
    "badges": [
      "MODERN İNEGÖL",
      "FRENLİ MENTEŞE"
    ],
    "material": "AKRİLİK LAKE & MASİF AHŞAP AYAKLAR",
    "desc": "Mera TV Ünitesi, bronz aynalı kapakları, gizli kablo kanalları ve frenli çekmece mekanizmalarıyla salonunuzda düzen ve şıklık yaratır.",
    "specs": {
      "Genişlik": "210 cm",
      "Derinlik": "48 cm",
      "Yükseklik": "58 cm",
      "Mekanizma": "Soft-Close Frenli Sistem"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/mera-tv-unitesi"
  },
  {
    "id": 9,
    "title": "Zanaat Ahşap Sandalye Seti (4 Adet)",
    "category": "dining",
    "subcategory": "chairs",
    "price": 14600,
    "rating": 4.7,
    "reviewsCount": 31,
    "image": "assets/bulk_prod_10.jpg",
    "gallery": [
      "assets/bulk_prod_10.jpg"
    ],
    "badges": [
      "ERGONOMİK SEÇİM",
      "MASİF GÜRGEN"
    ],
    "material": "FIRINLANMIŞ MASİF GÜRGEN & SİLİNEBİLİR KUMAŞ",
    "desc": "Zanaat Ahşap Sandalye Seti, kavisli masif sırt desteği ve leke tutmaz tay tüyü dokuması ile uzun yemek sohbetlerinde maksimum konfor sağlar.",
    "specs": {
      "Adet": "4 Sandalye",
      "Oturum Yüksekliği": "48 cm",
      "Genişlik": "50 cm",
      "İskelet": "Masif Fırınlanmış Gürgen"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/zanaat-sandalye-seti"
  },
  {
    "id": 10,
    "title": "Verona Masif Büfe & Aynalı Konsol",
    "category": "dining",
    "subcategory": "buffets",
    "price": 34500,
    "rating": 4.9,
    "reviewsCount": 22,
    "image": "assets/fullsize_p4_8.jpg",
    "gallery": [
      "assets/fullsize_p4_8.jpg"
    ],
    "badges": [
      "İNEGÖL ÖZEL",
      "BRONZ AYNA"
    ],
    "material": "DOĞAL MASİF MEŞE & FLÜTLÜ AHŞAP KAPAKLAR",
    "desc": "Verona Masif Büfe, geniş iç raf bölmeleri, özel kesim bronz aynaları ve flüt detaylı masif ahşap kapaklarıyla yemek odanızın en göz alıcı parçası olur.",
    "specs": {
      "Genişlik": "215 cm",
      "Derinlik": "50 cm",
      "Yükseklik": "82 cm",
      "Ayna Ölçüsü": "120x80 cm"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/verona-bufe-konsol"
  },
  {
    "id": 11,
    "title": "Milan Masif Ahşap Komodin Seti (Çift)",
    "category": "bedroom",
    "subcategory": "nightstands",
    "price": 9800,
    "rating": 4.8,
    "reviewsCount": 16,
    "image": "assets/bohem_p8_1.jpg",
    "gallery": [
      "assets/bohem_p8_1.jpg"
    ],
    "badges": [
      "İKİLİ SET",
      "%100 ÇAM MASİF"
    ],
    "material": "DOĞAL ÇAM MASİF AHŞAP & PİRİNÇ KULP",
    "desc": "Milan Masif Komodin Seti, 2 adet çift çekmeceli masif ahşap komodini kapsar. Yatak baş ucunda doğal ve sıcak bir doku sunar.",
    "specs": {
      "Set İçeriği": "2 Adet Komodin",
      "Genişlik": "55 cm",
      "Derinlik": "42 cm",
      "Yükseklik": "52 cm"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/milan-komodin-seti"
  },
  {
    "id": 12,
    "title": "Aura 6 Kapılı Masif Gardırop",
    "category": "bedroom",
    "subcategory": "wardrobes",
    "price": 48900,
    "rating": 4.9,
    "reviewsCount": 27,
    "image": "assets/fullsize_p2_10.jpg",
    "gallery": [
      "assets/fullsize_p2_10.jpg"
    ],
    "badges": [
      "MÜKEMMEL DÜZEN",
      "FRENLİ SÜRGÜ"
    ],
    "material": "AKRİLİK KREM LAKE & İÇ AYDINLATMALI LED RAF",
    "desc": "Aura 6 Kapılı Gardırop, pantolon askılıkları, sensörlü LED iç aydınlatması ve temperli füme cam kapak bölmesi ile yatak odanızda lüks giyinme alanı sunar.",
    "specs": {
      "Genişlik": "260 cm",
      "Yükseklik": "220 cm",
      "Derinlik": "65 cm",
      "Aydınlatma": "Hareket Sensörlü LED Strip"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/aura-gardirop"
  },
  {
    "id": 13,
    "title": "Nordic Masif Ahşap Çalışma Masası",
    "category": "office",
    "subcategory": "desks",
    "price": 19500,
    "rating": 4.9,
    "reviewsCount": 38,
    "image": "assets/desk.jpg",
    "gallery": [
      "assets/desk.jpg"
    ],
    "badges": [
      "ÇALIŞMA ODASI",
      "KABLO KANALLI"
    ],
    "material": "%100 MASİF MEŞE AĞACI & GİZLİ ÇEKMECE",
    "desc": "Nordic Masif Çalışma Masası, geniş yüzey alanı, dahili kablo toplama kanalı ve gizli çekmeceleri ile evden çalışmayı ultra keyifli ve konforlu hale getirir.",
    "specs": {
      "Genişlik": "140 cm",
      "Derinlik": "70 cm",
      "Yükseklik": "75 cm",
      "Malzeme": "%100 Fırınlanmış Masif Meşe"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/nordic-calisma-masasi"
  },
  {
    "id": 14,
    "title": "Loft Ahşap Kitaplık & Raf Sistemi",
    "category": "office",
    "subcategory": "bookcases",
    "price": 16200,
    "rating": 4.8,
    "reviewsCount": 24,
    "image": "assets/bulk_prod_16.jpg",
    "gallery": [
      "assets/bulk_prod_16.jpg"
    ],
    "badges": [
      "ENDÜSTRİYEL TASARIM",
      "MASİF ÇAM"
    ],
    "material": "STATİK SİYAH METAL İSKELET & MASİF ÇAM RAF",
    "desc": "Loft Ahşap Kitaplık, elektrostatik siyah fırın boyalı metal profilleri ve masif çam rafları ile hem çalışma odalarına hem salonlara güçlü bir tarz katar.",
    "specs": {
      "Genişlik": "100 cm",
      "Derinlik": "35 cm",
      "Yükseklik": "190 cm",
      "Raf Sayısı": "5 Adet Masif Ahşap Raf"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/loft-kitaplik"
  },

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
    const query = (searchQuery || "").toLowerCase();
    return PRODUCTS.filter(product => {
        const matchesCat = (currentCategory === "all" || product.category === currentCategory);
        const matchesSubcat = (currentSubcategory === "all" || product.subcategory === currentSubcategory);
        
        const specsText = Object.values(product.specs || {}).join(" ").toLowerCase();
        const matchesSearch = (!query || 
            (product.title || "").toLowerCase().includes(query) || 
            (product.material || "").toLowerCase().includes(query) ||
            (product.desc || "").toLowerCase().includes(query) ||
            specsText.includes(query)
        );
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
                    <img src="${item.image}" alt="${item.title}" class="card-img" onerror="this.onerror=null; this.src='assets/zumrut_main.jpg';">
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
    const CATEGORY_DESCS = {
        all: "İnegöl usta zanaatkarları tarafından üretilen %100 masif ve organik mobilya tasarımlarımız.",
        living: "İnegöl zanaatkarlarından %100 masif ahşap iskeletli koltuk takımları, berjerler, sehpalar ve TV üniteleri.",
        dining: "Doğal ahşap dokusu ve zarafetiyle yemek masaları, ergonomik sandalyeler ve şık büfeler.",
        bedroom: "Konforlu karyolalar, fonksiyonel komodinler ve geniş gardıroplar ile huzurlu uyku alanları.",
        office: "Ergonomik çalışma masaları ve şık kitaplıklar ile verimli çalışma alanları."
    };

    const CATEGORY_ICONS = {
        all: "fa-border-all",
        living: "fa-couch",
        dining: "fa-utensils",
        bedroom: "fa-bed",
        office: "fa-briefcase"
    };

    const renderCategoryHeaderAndSubchips = () => {
        const heroTitle = document.getElementById("categoryHeroTitle");
        const heroDesc = document.getElementById("categoryHeroDesc");
        const breadcrumbTitle = document.getElementById("categoryBreadcrumbTitle");
        const subcatBar = document.getElementById("subcatChipBar");

        const catName = CATEGORY_NAMES[currentCategory] || "Tüm Koleksiyon";
        const catIcon = CATEGORY_ICONS[currentCategory] || "fa-border-all";
        const catDesc = CATEGORY_DESCS[currentCategory] || CATEGORY_DESCS.all;

        if (heroTitle) {
            heroTitle.innerHTML = `<i class="fa-solid ${catIcon}"></i> ${catName}`;
        }
        if (heroDesc) {
            heroDesc.textContent = catDesc;
        }
        if (breadcrumbTitle) {
            breadcrumbTitle.textContent = (currentSubcategory !== "all" && SUBCATEGORY_NAMES[currentSubcategory]) 
                ? `${catName} > ${SUBCATEGORY_NAMES[currentSubcategory]}` 
                : catName;
        }

        if (subcatBar) {
            const availableSubs = Object.entries(SUBCATEGORY_NAMES).filter(([subKey, subName]) => {
                if (subKey === "all") return true;
                if (currentCategory === "all") return true;
                return PRODUCTS.some(p => p.category === currentCategory && p.subcategory === subKey);
            });

            subcatBar.innerHTML = availableSubs.map(([subKey, subName]) => `
                <a href="category.html?cat=${currentCategory}&sub=${subKey}" class="subcat-chip ${currentSubcategory === subKey ? 'active' : ''}">
                    ${subName}
                </a>
            `).join('');
        }
    };

    const updateActiveCategoryUI = () => {
        document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
        document.querySelectorAll(".dropdown-item").forEach(i => i.classList.remove("active"));

        const targetPill = document.querySelector(`.cat-pill[data-category="${currentCategory}"]`);
        if (targetPill) targetPill.classList.add("active");

        if (currentSubcategory !== "all") {
            const targetSub = document.querySelector(`.dropdown-item[data-cat="${currentCategory}"][data-sub="${currentSubcategory}"]`);
            if (targetSub) targetSub.classList.add("active");
        }

        renderCategoryHeaderAndSubchips();
    };

    const selectCategory = (cat, sub = "all", updateHistory = true) => {
        currentCategory = cat;
        currentSubcategory = sub;

        let newUrl = window.location.pathname.includes("category.html") ? "category.html" : "index.html";
        if (cat !== "all" || sub !== "all") {
            newUrl += `?cat=${cat}`;
            if (sub !== "all") {
                newUrl += `&sub=${sub}`;
            }
        }

        if (updateHistory && window.history.pushState) {
            window.history.pushState({ cat, sub }, "", newUrl);
        }

        document.querySelectorAll(".cat-dropdown-wrapper").forEach(w => w.classList.remove("open"));
        updateActiveCategoryUI();
        renderProducts();
    };

    document.querySelectorAll(".cat-pill").forEach(pill => {
        pill.addEventListener("click", (e) => {
            const cat = pill.getAttribute("data-category");
            if (cat) {
                e.preventDefault();
                selectCategory(cat, "all", true);
                showToast(`Kategori Seçildi: ${CATEGORY_NAMES[cat] || cat}`, "fa-layer-group");
            }
        });
    });

    document.querySelectorAll(".dropdown-item").forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const cat = item.getAttribute("data-cat");
            const sub = item.getAttribute("data-sub");
            if (cat) {
                selectCategory(cat, sub || "all", true);
                showToast(`Filtrelendi: ${CATEGORY_NAMES[cat] || cat} > ${SUBCATEGORY_NAMES[sub] || 'Tümü'}`, "fa-filter");
            }
        });
    });

    const handleUrlParams = () => {
        let search = window.location.search;
        if (!search && window.location.href.includes("?")) {
            search = window.location.href.substring(window.location.href.indexOf("?"));
        }
        const urlParams = new URLSearchParams(search);
        const catParam = urlParams.get("cat");
        const subParam = urlParams.get("sub");
        if (catParam) {
            currentCategory = catParam;
            currentSubcategory = subParam || "all";
        } else {
            currentCategory = "all";
            currentSubcategory = "all";
        }
        updateActiveCategoryUI();
        renderProducts();
    };

    handleUrlParams();

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

    // Info Modals (Garanti, Kumaş, SSS, Gizlilik)
    const INFO_MODALS = {
        warranty: {
            title: '<i class="fa-solid fa-shield-cat"></i> Garanti & İade Koşulları',
            body: `
                <div style="display:flex; flex-direction:column; gap:12px;">
                    <div style="background:#f4f4f5; padding:12px; border-radius:8px; border-left:4px solid #6b21a8;">
                        <h4 style="margin:0 0 4px 0; color:#18181b;">2 Yıl Üretici Garantisi</h4>
                        <p style="margin:0; font-size:0.85rem;">Tüm İnegöl mobilyası ürünlerimiz 2 yıl boyunca %100 orijinal imalat ve malzeme garantisi altındadır.</p>
                    </div>
                    <div style="background:#f4f4f5; padding:12px; border-radius:8px; border-left:4px solid #10b981;">
                        <h4 style="margin:0 0 4px 0; color:#18181b;">14 Gün Koşulsuz İade Hakkı</h4>
                        <p style="margin:0; font-size:0.85rem;">Eksiksiz ambalajında hasarsız ürünler için 14 gün içerisinde cayma hakkınızı kullanabilirsiniz.</p>
                    </div>
                    <div style="background:#f4f4f5; padding:12px; border-radius:8px; border-left:4px solid #3b82f6;">
                        <h4 style="margin:0 0 4px 0; color:#18181b;">Sigortalı Sevkiyat & Kurulum</h4>
                        <p style="margin:0; font-size:0.85rem;">Taşıma ve kurulum esnasında oluşabilecek tüm zararlar Mobelmor garantisi ile anında yenisi ile değiştirilir.</p>
                    </div>
                </div>
            `
        },
        fabric: {
            title: '<i class="fa-solid fa-swatchbook"></i> Kumaş & Renk Kartelası',
            body: `
                <p>Mobelmor ürünlerinde kullanılan tüm kumaşlar leke tutmaz, silinebilir ve yüksek sürtünme dayanımlı 1. sınıf akıllı kumaş teknolojisine sahiptir.</p>
                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(120px, 1fr)); gap:10px; margin:16px 0;">
                    <div style="background:#fdf4ff; border:1px solid #f0abfc; padding:10px; text-align:center; border-radius:8px; font-weight:700; color:#86198f;">Krem Kadife</div>
                    <div style="background:#f1f5f9; border:1px solid #cbd5e1; padding:10px; text-align:center; border-radius:8px; font-weight:700; color:#334155;">Antrasit Keten</div>
                    <div style="background:#fff7ed; border:1px solid #ffedd5; padding:10px; text-align:center; border-radius:8px; font-weight:700; color:#c2410c;">Kiremit Taytüyü</div>
                    <div style="background:#ecfdf5; border:1px solid #a7f3d0; padding:10px; text-align:center; border-radius:8px; font-weight:700; color:#047857;">Zümrüt Yeşili</div>
                </div>
                <a href="https://wa.me/905300000000?text=Merhaba,%20ücretsiz%20kumaş%20kartelası%20istiyorum." target="_blank" class="btn btn-primary btn-block interactive-btn" style="text-align:center; display:block; padding:12px; margin-top:12px; text-decoration:none;">
                    <i class="fa-brands fa-whatsapp"></i> Ücretsiz Kumaş Numunesi İste
                </a>
            `
        },
        faq: {
            title: '<i class="fa-solid fa-circle-question"></i> Sıkça Sorulan Sorular',
            body: `
                <div style="display:flex; flex-direction:column; gap:10px;">
                    <div>
                        <strong style="color:#6b21a8;">S: Teslimat süresi ne kadar?</strong>
                        <p style="margin:2px 0 0 0; font-size:0.85rem;">C: Türkiye geneline 7 - 14 iş günü içerisinde ücretsiz teslimat ve kurulum yapılmaktadır.</p>
                    </div>
                    <hr style="border:none; border-top:1px solid #f4f4f5; margin:4px 0;">
                    <div>
                        <strong style="color:#6b21a8;">S: Kurulum ücretli mi?</strong>
                        <p style="margin:2px 0 0 0; font-size:0.85rem;">C: Hayır, uzman ekiplerimiz tarafından tüm ürünlerin montajı ücretsiz yapılmaktadır.</p>
                    </div>
                    <hr style="border:none; border-top:1px solid #f4f4f5; margin:4px 0;">
                    <div>
                        <strong style="color:#6b21a8;">S: Ödeme seçenekleri nelerdir?</strong>
                        <p style="margin:2px 0 0 0; font-size:0.85rem;">C: Kredi kartına 12 aya varan taksit, Kapıda ödeme ve Havale/EFT kabul edilmektedir.</p>
                    </div>
                </div>
            `
        },
        privacy: {
            title: '<i class="fa-solid fa-lock"></i> Gizlilik & Güvenlik Politikası',
            body: `
                <p>Mobelmor.com müşteri güvenliğini en üst düzeyde tutmaktadır.</p>
                <ul style="padding-left:20px; margin:10px 0; font-size:0.88rem;">
                    <li><strong>256-Bit SSL:</strong> Tüm kart işlemleri yüksek şifrelemeli SSL alt yapısı ile korunur.</li>
                    <li><strong>KVKK Uyumlu:</strong> Kişisel verileriniz 6698 sayılı kanun gereğince güvenle muhafaza edilir.</li>
                    <li><strong>3D Secure:</strong> Tüm ödemeler bankanızın onay kodu ile gerçekleşir.</li>
                </ul>
            `
        }
    };

    document.querySelectorAll(".info-modal-trigger").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const type = btn.getAttribute("data-type");
            const data = INFO_MODALS[type];
            if (!data) return;
            const overlay = document.getElementById("infoModalOverlay");
            const title = document.getElementById("infoModalTitle");
            const body = document.getElementById("infoModalBody");
            if (overlay && title && body) {
                title.innerHTML = data.title;
                body.innerHTML = data.body;
                overlay.classList.add("active");
            }
        });
    });

    document.getElementById("closeInfoModalBtn")?.addEventListener("click", () => {
        document.getElementById("infoModalOverlay")?.classList.remove("active");
    });
    document.getElementById("infoModalOverlay")?.addEventListener("click", (e) => {
        if (e.target.id === "infoModalOverlay") {
            document.getElementById("infoModalOverlay")?.classList.remove("active");
        }
    });

    window.addEventListener("popstate", () => {
        handleUrlParams();
    });
});

