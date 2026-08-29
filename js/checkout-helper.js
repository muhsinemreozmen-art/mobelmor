/**
 * ========================================================================
 * MOBELMOR ADVANCED CHECKOUT & INSTALLMENT ENGINE (2026 EDITION)
 * Türkiye İl/İlçe Veritabanı, 6 Büyük Banka Taksit Matrisi,
 * Bireysel/Kurumsal Fatura, BIN Algoritması, Havale İndirimi & WhatsApp Sipariş
 * ========================================================================
 */

(function () {
    // 1. TÜRKİYE 81 İL VE İLÇE LİSTESİ
    const TURKEY_CITIES = {
        "İstanbul": ["Kadıköy", "Beşiktaş", "Üsküdar", "Bakırköy", "Şişli", "Sarıyer", "Ataşehir", "Maltepe", "Pendik", "Kartal", "Ümraniye", "Beylikdüzü", "Başakşehir", "Esenyurt", "Bağcılar", "Fatih", "Zeytinburnu", "Büyükçekmece", "Küçükçekmece", "Kağıthane", "Eyüpsultan", "Tuzla", "Çekmeköy", "Sancaktepe", "Sultanbeyli", "Silivri", "Arnavutköy", "Gaziosmanpaşa", "Güngören", "Bayrampaşa", "Esenler", "Beykoz", "Sultangazi", "Şile", "Adalar"],
        "Ankara": ["Çankaya", "Keçiören", "Yenimahalle", "Mamak", "Etimesgut", "Sincan", "Altındağ", "Gölbaşı", "Pursaklar", "Polatlı", "Çubuk", "Kahramankazan", "Beypazarı", "Elmadağ", "Akyurt", "Kızılcahamam", "Nallıhan", "Haymana", "Bala", "Ayaş", "Kalecik", "Güdül", "Çamlıdere", "Evren"],
        "İzmir": ["Konak", "Karşıyaka", "Bornova", "Buca", "Çiğli", "Bayraklı", "Karabağlar", "Gaziemir", "Menemen", "Torbalı", "Kemalpaşa", "Aliağa", "Menderes", "Ödemiş", "Tire", "Bergama", "Urla", "Seferihisar", "Çeşme", "Dikili", "Foça", "Selçuk", "Güzelbahçe", "Kiraz", "Kınık", "Karaburun", "Beydağ"],
        "Bursa": ["İnegöl", "Nilüfer", "Osmangazi", "Yıldırım", "Mudanya", "Gemlik", "Gürsu", "Kestel", "Mustafakemalpaşa", "Karacabey", "Orhangazi", "Yenişehir", "İznik", "Keles", "Büyükorhan", "Orhaneli", "Harmancık"],
        "Antalya": ["Muratpaşa", "Kepez", "Konyaaltı", "Alanya", "Manavgat", "Serik", "Döşemealtı", "Aksu", "Kumluca", "Kaş", "Korkuteli", "Gazipaşa", "Finike", "Kemer", "Elmalı", "Demre", "Akseki", "Gündoğmuş", "İbradı"],
        "Adana": ["Seyhan", "Çukurova", "Yüreğir", "Sarıçam", "Ceyhan", "Kozan", "İmamoğlu", "Karataş", "Pozantı", "Karaisalı", "Yumurtalık", "Tufanbeyli", "Feke", "Aladağ", "Saimbeyli"],
        "Konya": ["Selçuklu", "Meram", "Karatay", "Ereğli", "Akşehir", "Beyşehir", "Cihanbeyli", "Seydişehir", "Kulu", "Ilgın", "Karapınar", "Çumra", "Doğanhisar", "Kadınhanı", "Sarayönü", "Bozkır", "Yunak", "Hüyük"],
        "Gaziantep": ["Şahinbey", "Şehitkamil", "Nizip", "İslahiye", "Nurdağı", "Araban", "Oğuzeli", "Yavuzeli", "Karkamış"],
        "Kocaeli": ["İzmit", "Gebze", "Darıca", "Körfez", "Gölcük", "Derince", "Çayırova", "Kartepe", "Başiskele", "Kandıra", "Karamürsel", "Dilovası"],
        "Mersin": ["Akdeniz", "Mezitli", "Toroslar", "Yenişehir", "Tarsus", "Erdemli", "Silifke", "Anamur", "Mut", "Bozyazı", "Gülnar", "Aydıncık", "Çamlıyayla"],
        "Kayseri": ["Melikgazi", "Kocasinan", "Talas", "Develi", "Yahyalı", "Bünyan", "Pınarbaşı", "İncesu", "Yeşilhisar", "Tomarza", "Sarıoğlan", "Hacılar", "Sarız", "Felahiye", "Akkışla", "Özvatan"],
        "Eskişehir": ["Odunpazarı", "Tepebaşı", "Sivrihisar", "Çifteler", "Seyitgazi", "Alpu", "Mihalıççık", "Mahmudiye", "Beylikova", "İnönü", "Günyüzü", "Han", "Mihalgazi", "Sarıcakaya"],
        "Diyarbakır": ["Bağlar", "Kayapınar", "Sur", "Yenişehir", "Ergani", "Bismil", "Silvan", "Çınar", "Dicle", "Kulp", "Hani", "Lice", "Eğil", "Hazro", "Kocaköy", "Çermik", "Çüngüş"],
        "Samsun": ["İlkadım", "Atakum", "Canik", "Tekkeköy", "Bafra", "Çarşamba", "Vezirköprü", "Terme", "Havza", "Alaçam", "19 Mayıs", "Salıpazarı", "Asarcık", "Kavak", "Ladik", "Yakakent", "Ayvacık"],
        "Denizli": ["Pamukkale", "Merkezefendi", "Çivril", "Acıpayam", "Tavas", "Honaz", "Sarayköy", "Buldan", "Kale", "Çal", "Çameli", "Serinhisar", "Güney", "Bozkurt", "Babadağ", "Bekilli", "Beyağaç", "Baklan"],
        "Şanlıurfa": ["Eyyübiye", "Haliliye", "Karaköprü", "Siverek", "Viranşehir", "Suruç", "Birecik", "Ceylanpınar", "Akçakale", "Harran", "Bozova", "Hilvan", "Halfeti"],
        "Balıkesir": ["Altıeylül", "Karesi", "Edremit", "Bandırma", "Gönen", "Ayvalık", "Burhaniye", "Bigadiç", "Susurluk", "Dursunbey", "Sındırgı", "Erdek", "İvrindi", "Havran", "Kepsut", "Manyas", "Savaştepe", "Balya", "Gömeç", "Marmara"],
        "Sakarya": ["Adapazarı", "Serdivan", "Akyazı", "Erenler", "Hendek", "Karasu", "Geyve", "Arifiye", "Sapanca", "Pamukova", "Ferizli", "Kaynarca", "Kocaali", "Söğütlü", "Karapürçek", "Taraklı"],
        "Manisa": ["Yunusemre", "Şehzadeler", "Akhisar", "Turgutlu", "Salihli", "Soma", "Alaşehir", "Saruhanlı", "Demirci", "Kula", "Kırkağaç", "Sarıgöl", "Gördes", "Selendi", "Ahmetli", "Gölmarmara", "Köprübaşı"],
        "Aydın": ["Efeler", "Nazilli", "Söke", "Kuşadası", "Didim", "İncirliova", "Çine", "Germencik", "Bozdoğan", "Köşk", "Kuyucak", "Sultanhisar", "Karacasu", "Yenipazar", "Buharkent", "Karpuzlu"],
        "Tekirdağ": ["Süleymanpaşa", "Çorlu", "Çerkezköy", "Kapaklı", "Ergene", "Malkara", "Saray", "Hayrabolu", "Şarköy", "Muratlı", "Marmaraereğlisi"],
        "Muğla": ["Bodrum", "Fethiye", "Milas", "Menteşe", "Marmaris", "Seydikemer", "Ortaca", "Yatağan", "Dalaman", "Köyceğiz", "Ula", "Datça", "Kavaklıdere"],
        "Hatay": ["Antakya", "İskenderun", "Defne", "Dörtyol", "Samandağ", "Kırıkhan", "Reyhanlı", "Arsuz", "Altınözü", "Hassa", "Payas", "Erzin", "Yayladağı", "Belen", "Kumlu"],
        "Trabzon": ["Ortahisar", "Akçaabat", "Araklı", "Of", "Yomra", "Arsin", "Vakfıkebir", "Sürmene", "Maçka", "Beşikdüzü", "Çarşıbaşı", "Tonya", "Düzköy", "Çaykara", "Şalpazarı", "Hayrat", "Köprübaşı", "Dernekpazarı"]
    };

    // 81 İlin tamamının listesi (Kalan iller için standart merkez ilçelerle doldurulur)
    const ALL_81_PROVINCES = [
        "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir",
        "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli",
        "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari",
        "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir",
        "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir",
        "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat",
        "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman",
        "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
    ];

    // 2. 6 BÜYÜK BANKA TAKSİT ORANLARI VE KAMPANYA MATRİSİ
    const BANK_RATES = {
        world: {
            name: "World",
            bank: "Yapı Kredi",
            logoClass: "fa-solid fa-credit-card",
            color: "#682b85",
            rates: {
                1: { count: 1, rate: 0.00, campaign: "Peşin Fiyatına" },
                2: { count: 2, rate: 0.00, campaign: "Vade Farksız" },
                3: { count: 3, rate: 0.00, campaign: "Vade Farksız" },
                6: { count: 6, rate: 0.00, campaign: "Peşin Fiyatına (Mobelmor Kampanyası)" },
                9: { count: 9, rate: 0.045, campaign: "Düşük Faizli" },
                12: { count: 12, rate: 0.085, campaign: "12 Ay Taksit" }
            }
        },
        bonus: {
            name: "Bonus",
            bank: "Garanti BBVA",
            logoClass: "fa-solid fa-credit-card",
            color: "#008542",
            rates: {
                1: { count: 1, rate: 0.00, campaign: "Peşin Fiyatına" },
                2: { count: 2, rate: 0.00, campaign: "Vade Farksız" },
                3: { count: 3, rate: 0.00, campaign: "Vade Farksız" },
                6: { count: 6, rate: 0.00, campaign: "Peşin Fiyatına 6 Taksit" },
                9: { count: 9, rate: 0.045, campaign: "Düşük Faizli" },
                12: { count: 12, rate: 0.085, campaign: "12 Ay Taksit" }
            }
        },
        maximum: {
            name: "Maximum",
            bank: "İş Bankası",
            logoClass: "fa-solid fa-credit-card",
            color: "#004889",
            rates: {
                1: { count: 1, rate: 0.00, campaign: "Peşin Fiyatına" },
                2: { count: 2, rate: 0.00, campaign: "Vade Farksız" },
                3: { count: 3, rate: 0.00, campaign: "Vade Farksız" },
                6: { count: 6, rate: 0.00, campaign: "Peşin Fiyatına (Özel Fırsat)" },
                9: { count: 9, rate: 0.045, campaign: "Düşük Faizli" },
                12: { count: 12, rate: 0.085, campaign: "12 Ay Taksit" }
            }
        },
        axess: {
            name: "Axess",
            bank: "Akbank",
            logoClass: "fa-solid fa-credit-card",
            color: "#e30613",
            rates: {
                1: { count: 1, rate: 0.00, campaign: "Peşin Fiyatına" },
                2: { count: 2, rate: 0.00, campaign: "Vade Farksız" },
                3: { count: 3, rate: 0.00, campaign: "Vade Farksız" },
                6: { count: 6, rate: 0.00, campaign: "Peşin Fiyatına 6 Taksit" },
                9: { count: 9, rate: 0.045, campaign: "Düşük Faizli" },
                12: { count: 12, rate: 0.085, campaign: "12 Ay Taksit" }
            }
        },
        cardfinans: {
            name: "CardFinans",
            bank: "QNB Finansbank",
            logoClass: "fa-solid fa-credit-card",
            color: "#003b64",
            rates: {
                1: { count: 1, rate: 0.00, campaign: "Peşin Fiyatına" },
                2: { count: 2, rate: 0.00, campaign: "Vade Farksız" },
                3: { count: 3, rate: 0.00, campaign: "Vade Farksız" },
                6: { count: 6, rate: 0.00, campaign: "Peşin Fiyatına" },
                9: { count: 9, rate: 0.045, campaign: "Düşük Faizli" },
                12: { count: 12, rate: 0.085, campaign: "12 Ay Taksit" }
            }
        },
        paraf: {
            name: "Paraf",
            bank: "Halkbank",
            logoClass: "fa-solid fa-credit-card",
            color: "#0093dd",
            rates: {
                1: { count: 1, rate: 0.00, campaign: "Peşin Fiyatına" },
                2: { count: 2, rate: 0.00, campaign: "Vade Farksız" },
                3: { count: 3, rate: 0.00, campaign: "Vade Farksız" },
                6: { count: 6, rate: 0.00, campaign: "Peşin Fiyatına" },
                9: { count: 9, rate: 0.045, campaign: "Düşük Faizli" },
                12: { count: 12, rate: 0.085, campaign: "12 Ay Taksit" }
            }
        }
    };

    // BIN Kart Tanıma Algoritması (İlk 6 Hane)
    function detectBankFromCardNumber(cardNum) {
        const clean = (cardNum || "").replace(/\D/g, "");
        if (clean.length < 4) {
            return { bankKey: "world", brand: "Bilinmeyen Kart", bankName: "Kredi Kartı" };
        }
        const bin6 = clean.substring(0, 6);
        const bin4 = clean.substring(0, 4);

        // Garanti Bonus
        if (["540061", "540062", "540667", "554960", "450634", "450635", "520922"].some(b => bin6.startsWith(b)) || bin4 === "5400" || bin4 === "5406") {
            return { bankKey: "bonus", brand: "Garanti Bonus", bankName: "Garanti BBVA" };
        }
        // Yapı Kredi World
        if (["450634", "454314", "454315", "402279", "542119", "554960"].some(b => bin6.startsWith(b)) || bin4 === "4022" || bin4 === "4543") {
            return { bankKey: "world", brand: "Yapı Kredi World", bankName: "Yapı Kredi" };
        }
        // İş Bankası Maximum
        if (["450634", "450635", "454359", "454360", "543783", "552608"].some(b => bin6.startsWith(b)) || bin4 === "4506") {
            return { bankKey: "maximum", brand: "İş Bankası Maximum", bankName: "Türkiye İş Bankası" };
        }
        // Akbank Axess
        if (["557829", "557830", "557831", "454314", "402279"].some(b => bin6.startsWith(b)) || bin4 === "5578") {
            return { bankKey: "axess", brand: "Akbank Axess", bankName: "Akbank" };
        }
        // QNB CardFinans
        if (["435508", "516480", "520023", "547287"].some(b => bin6.startsWith(b)) || bin4 === "4355") {
            return { bankKey: "cardfinans", brand: "CardFinans", bankName: "QNB Finansbank" };
        }
        // Halkbank Paraf
        if (["545616", "552879", "540058", "454358"].some(b => bin6.startsWith(b)) || bin4 === "5456") {
            return { bankKey: "paraf", brand: "Halkbank Paraf", bankName: "Halkbank" };
        }

        // Genel Visa / MasterCard
        if (clean.startsWith("4")) {
            return { bankKey: "world", brand: "Visa Kart", bankName: "Tüm Bankalar" };
        } else if (clean.startsWith("5")) {
            return { bankKey: "bonus", brand: "Mastercard", bankName: "Tüm Bankalar" };
        } else if (clean.startsWith("9792")) {
            return { bankKey: "maximum", brand: "Troy Kart", bankName: "Yerli Ödeme Sistemi (Troy)" };
        }

        return { bankKey: "world", brand: "Kredi Kartı", bankName: "Tüm Bankalar" };
    }

    // Para formatlayıcı
    function fmtPrice(amount) {
        return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 0 }).format(amount);
    }

    // 3. ÜRÜN DETAY SAYFASI DİNAMİK TAKSİT TABLOSU OLUŞTURUCU
    function renderBankInstallmentTable(containerEl, productPrice) {
        if (!containerEl) return;
        const price = Number(productPrice) || 45000;

        let tabsHtml = `<div class="bank-tabs-nav" id="bankTabsNav">`;
        let panelsHtml = `<div class="bank-tabs-content" id="bankTabsContent">`;

        let isFirst = true;
        for (const [key, bank] of Object.entries(BANK_RATES)) {
            const activeClass = isFirst ? "active" : "";
            tabsHtml += `
                <button type="button" class="bank-tab-btn ${activeClass}" data-bank="${key}" onclick="window.MobelmorCheckout.switchBankTab('${key}')">
                    <i class="${bank.logoClass}"></i>
                    <span>${bank.name}</span>
                </button>
            `;

            panelsHtml += `
                <div class="bank-tab-panel ${activeClass}" id="panelBank_${key}" style="${isFirst ? '' : 'display:none;'}">
                    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
                        <span style="font-weight:800; color:${bank.color}; font-size:0.9rem;">${bank.bank} ${bank.name} Kart Kampanyası</span>
                        <span style="font-size:0.75rem; background:#f3e8ff; color:#6b21a8; font-weight:800; padding:2px 8px; border-radius:4px;">Mobelmor Taksit Avantajı</span>
                    </div>
                    <table class="installment-table-matrix">
                        <thead>
                            <tr>
                                <th>Taksit Sayısı</th>
                                <th>Aylık Tutar</th>
                                <th>Toplam Tutar</th>
                                <th>Kampanya</th>
                            </tr>
                        </thead>
                        <tbody>
            `;

            for (const [cnt, rateObj] of Object.entries(bank.rates)) {
                const total = price * (1 + rateObj.rate);
                const monthly = total / rateObj.count;
                const isFree = rateObj.rate === 0;

                panelsHtml += `
                    <tr>
                        <td><strong>${rateObj.count === 1 ? 'Tek Çekim' : rateObj.count + ' Taksit'}</strong></td>
                        <td style="color:#6b21a8; font-weight:800;">${fmtPrice(monthly)}</td>
                        <td>${fmtPrice(total)}</td>
                        <td>${isFree ? `<span class="tag-no-interest"><i class="fa-solid fa-check"></i> ${rateObj.campaign}</span>` : `<span style="color:#64748b; font-size:0.75rem;">${rateObj.campaign}</span>`}</td>
                    </tr>
                `;
            }

            panelsHtml += `
                        </tbody>
                    </table>
                </div>
            `;
            isFirst = false;
        }

        tabsHtml += `</div>`;
        panelsHtml += `</div>`;

        containerEl.innerHTML = tabsHtml + panelsHtml;
    }

    function switchBankTab(bankKey) {
        document.querySelectorAll(".bank-tab-btn").forEach(btn => {
            if (btn.getAttribute("data-bank") === bankKey) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });

        document.querySelectorAll(".bank-tab-panel").forEach(panel => {
            if (panel.id === `panelBank_${bankKey}`) {
                panel.style.display = "block";
            } else {
                panel.style.display = "none";
            }
        });
    }

    // 4. İL VE İLÇE DROPDOWN'LARINI BAŞLATMA
    function populateCityAndDistrict(citySelectId, districtSelectId) {
        const cityEl = document.getElementById(citySelectId);
        const distEl = document.getElementById(districtSelectId);
        if (!cityEl || !distEl) return;

        cityEl.innerHTML = `<option value="">İl Seçiniz</option>`;
        ALL_81_PROVINCES.forEach(city => {
            const opt = document.createElement("option");
            opt.value = city;
            opt.textContent = city;
            if (city === "İstanbul") opt.selected = true;
            cityEl.appendChild(opt);
        });

        function updateDistricts(selectedCity) {
            distEl.innerHTML = `<option value="">İlçe Seçiniz</option>`;
            const districts = TURKEY_CITIES[selectedCity] || ["Merkez", "Diğer"];
            districts.forEach(d => {
                const opt = document.createElement("option");
                opt.value = d;
                opt.textContent = d;
                distEl.appendChild(opt);
            });
        }

        updateDistricts("İstanbul");

        cityEl.addEventListener("change", () => {
            updateDistricts(cityEl.value);
        });
    }

    // 5. GELİŞMİŞ CHECKOUT SİSTEMİ (ÖDEME MODALI VE AKIŞI)
    function initAdvancedCheckout() {
        populateCityAndDistrict("checkoutCity", "checkoutDistrict");

        // Fatura Tipi Toggle (Bireysel / Kurumsal)
        const btnBireysel = document.getElementById("invoiceTypeBireysel");
        const btnKurumsal = document.getElementById("invoiceTypeKurumsal");
        const kurumsalFields = document.getElementById("invoiceKurumsalFields");
        const tcknWrap = document.getElementById("tcknFieldWrap");

        btnBireysel?.addEventListener("click", (e) => {
            e.preventDefault();
            btnBireysel.classList.add("active");
            btnKurumsal?.classList.remove("active");
            kurumsalFields?.classList.remove("show");
            if (tcknWrap) tcknWrap.style.display = "block";
        });

        btnKurumsal?.addEventListener("click", (e) => {
            e.preventDefault();
            btnKurumsal.classList.add("active");
            btnBireysel?.classList.remove("active");
            kurumsalFields?.classList.add("show");
            if (tcknWrap) tcknWrap.style.display = "none";
        });

        // Lojistik & Montaj Kart Seçimleri
        document.querySelectorAll(".delivery-card-radio").forEach(card => {
            card.addEventListener("click", () => {
                const radio = card.querySelector('input[type="radio"]');
                if (radio) radio.checked = true;
                document.querySelectorAll(".delivery-card-radio").forEach(c => c.classList.remove("active"));
                card.classList.add("active");
            });
        });

        // Kart Numarası Otomatik Formatlama ve BIN Algoritması
        const cardNumInput = document.getElementById("cardNumber");
        const cardBinBadge = document.getElementById("cardBinBadge");
        const installmentSelect = document.getElementById("checkoutInstallmentSelect");

        function updateInstallmentOptions(bankKey, totalAmount) {
            if (!installmentSelect) return;
            const bank = BANK_RATES[bankKey] || BANK_RATES.world;
            installmentSelect.innerHTML = "";

            for (const [cnt, rateObj] of Object.entries(bank.rates)) {
                const total = totalAmount * (1 + rateObj.rate);
                const monthly = total / rateObj.count;
                const isFree = rateObj.rate === 0;

                const opt = document.createElement("option");
                opt.value = rateObj.count;
                opt.textContent = `${rateObj.count === 1 ? 'Tek Çekim' : rateObj.count + ' Taksit'} - ${fmtPrice(monthly)}/ay (Toplam: ${fmtPrice(total)}) ${isFree ? '★ Vade Farksız' : ''}`;
                installmentSelect.appendChild(opt);
            }
        }

        cardNumInput?.addEventListener("input", (e) => {
            let val = e.target.value.replace(/\D/g, "").substring(0, 16);
            let formatted = val.match(/.{1,4}/g)?.join(" ") || val;
            e.target.value = formatted;

            const detected = detectBankFromCardNumber(val);
            if (cardBinBadge) {
                cardBinBadge.innerHTML = `<i class="fa-solid fa-credit-card"></i> ${detected.brand}`;
            }

            // Sepet tutarına göre taksitleri güncelle
            const subtotal = (typeof cart !== 'undefined' && Array.isArray(cart))
                ? cart.reduce((sum, i) => sum + (i.price * i.qty), 0)
                : 45000;
            updateInstallmentOptions(detected.bankKey, subtotal);
        });

        // Son Kullanma Tarihi Formatlama (AA/YY)
        const cardExpInput = document.getElementById("cardExpiry");
        cardExpInput?.addEventListener("input", (e) => {
            let val = e.target.value.replace(/\D/g, "").substring(0, 4);
            if (val.length >= 2) {
                e.target.value = val.substring(0, 2) + "/" + val.substring(2);
            } else {
                e.target.value = val;
            }
        });

        // IBAN Kopyalama Butonları
        document.querySelectorAll(".iban-copy-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const iban = btn.getAttribute("data-iban") || "";
                navigator.clipboard?.writeText(iban).then(() => {
                    const originalText = btn.innerHTML;
                    btn.innerHTML = `<i class="fa-solid fa-check"></i> Kopyalandı!`;
                    btn.style.background = "#dcfce7";
                    btn.style.color = "#15803d";
                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.style.background = "";
                        btn.style.color = "";
                    }, 2000);
                });
            });
        });

        // WhatsApp ile Sipariş Butonu
        const btnWhatsappOrder = document.getElementById("btnWhatsappCheckout");
        btnWhatsappOrder?.addEventListener("click", (e) => {
            e.preventDefault();
            const name = document.getElementById("checkoutName")?.value.trim() || "Müşteri";
            const phone = document.getElementById("checkoutPhone")?.value.trim() || "";
            const city = document.getElementById("checkoutCity")?.value || "İstanbul";
            const district = document.getElementById("checkoutDistrict")?.value || "";

            const cartItems = (typeof cart !== 'undefined' && Array.isArray(cart)) ? cart : [];
            let itemsText = cartItems.map(i => `• ${i.title} (${i.qty} Adet) - ${fmtPrice(i.price * i.qty)}`).join("%0A");
            const total = cartItems.reduce((sum, i) => sum + (i.price * i.qty), 0);

            const msg = `Merhaba Mobelmor, sitemizden sipariş vermek istiyorum.%0A%0A*Müşteri:* ${name}%0A*Telefon:* ${phone}%0A*Teslimat Yeri:* ${city} / ${district}%0A%0A*Sepetteki Ürünler:*%0A${itemsText}%0A%0A*Toplam Tutar:* ${fmtPrice(total)}%0A%0ASipariş teyidi ve detaylı bilgi rica ederim.`;
            window.open(`https://wa.me/905300000000?text=${msg}`, "_blank");
        });
    }

    // 6. ÜCRETSİZ KUMAŞ NUMUNESİ MODALI YÖNETİCİSİ
    function initFabricSampleModal() {
        // Fabric Sample Modal Triggers
        document.querySelectorAll(".open-fabric-modal-btn, #vfabricSampleLink, [data-action='fabric-sample']").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                const overlay = document.getElementById("fabricSampleOverlay");
                if (overlay) {
                    overlay.classList.add("active");
                    document.body.classList.add("modal-open");
                }
            });
        });

        document.getElementById("closeFabricSampleBtn")?.addEventListener("click", () => {
            document.getElementById("fabricSampleOverlay")?.classList.remove("active");
            document.body.classList.remove("modal-open");
        });

        document.getElementById("fabricSampleOverlay")?.addEventListener("click", (e) => {
            if (e.target.id === "fabricSampleOverlay") {
                document.getElementById("fabricSampleOverlay")?.classList.remove("active");
                document.body.classList.remove("modal-open");
            }
        });

        const sampleChips = document.querySelectorAll(".fabric-sample-chip");
        sampleChips.forEach(chip => {
            chip.addEventListener("click", () => {
                const selectedCount = document.querySelectorAll(".fabric-sample-chip.selected").length;
                if (chip.classList.contains("selected")) {
                    chip.classList.remove("selected");
                } else {
                    if (selectedCount >= 4) {
                        if (typeof showToast === 'function') {
                            showToast("En fazla 4 kumaş numunesi seçebilirsiniz.", "fa-info-circle");
                        } else {
                            alert("En fazla 4 kumaş numunesi seçebilirsiniz.");
                        }
                        return;
                    }
                    chip.classList.add("selected");
                }
            });
        });

        const sampleForm = document.getElementById("fabricSampleForm");
        sampleForm?.addEventListener("submit", (e) => {
            e.preventDefault();
            const selectedChips = Array.from(document.querySelectorAll(".fabric-sample-chip.selected")).map(c => c.getAttribute("data-fabric"));
            if (selectedChips.length === 0) {
                if (typeof showToast === 'function') {
                    showToast("Lütfen en az 1 kumaş numunesi seçiniz.", "fa-triangle-exclamation");
                } else {
                    alert("Lütfen en az 1 kumaş numunesi seçiniz.");
                }
                return;
            }

            const name = document.getElementById("sampleName")?.value || "";
            const phone = document.getElementById("samplePhone")?.value || "";
            const address = document.getElementById("sampleAddress")?.value || "";

            const sampleRequest = {
                id: "SMP-" + Date.now(),
                name, phone, address,
                fabrics: selectedChips,
                date: new Date().toISOString()
            };

            const existing = JSON.parse(localStorage.getItem("mobelmor_sample_requests") || "[]");
            existing.push(sampleRequest);
            localStorage.setItem("mobelmor_sample_requests", JSON.stringify(existing));

            // Modalı Kapat & Teşekkür Göster
            const modal = document.getElementById("fabricSampleOverlay");
            if (modal) modal.classList.remove("active");

            if (typeof showToast === 'function') {
                showToast("Kumaş numunesi talebiniz alındı! 2 iş gününde kargoya verilecektir.", "fa-box-open");
            } else {
                alert("Kumaş numunesi talebiniz başarıyla alındı!");
            }
            sampleForm.reset();
            document.querySelectorAll(".fabric-sample-chip.selected").forEach(c => c.classList.remove("selected"));
        });
    }

    // Global Dışa Aktarım
    window.MobelmorCheckout = {
        TURKEY_CITIES,
        ALL_81_PROVINCES,
        BANK_RATES,
        detectBankFromCardNumber,
        renderBankInstallmentTable,
        switchBankTab,
        populateCityAndDistrict,
        initAdvancedCheckout,
        initFabricSampleModal,
        fmtPrice
    };

    // DOM Hazır Olduğunda Otomatik Başlatma
    document.addEventListener("DOMContentLoaded", () => {
        initAdvancedCheckout();
        initFabricSampleModal();
    });
})();
