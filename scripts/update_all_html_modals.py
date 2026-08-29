import re
import os

HTML_FILES = [
    r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\index.html",
    r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\urun-detay.html",
    r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\product-detail.html",
    r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\kategori.html",
    r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\category.html",
]

NEW_CHECKOUT_MODAL_HTML = """    <!-- ======================================================================== -->
    <!-- MOBELMOR ADVANCED MULTI-STEP CHECKOUT MODAL (2026 UPDATE)                -->
    <!-- ======================================================================== -->
    <div class="modal-overlay" id="checkoutOverlay">
        <div class="modal-card" style="max-width:540px; max-height:92vh; overflow-y:auto;">
            <button class="close-btn modal-close interactive-btn" id="closeCheckoutBtn" aria-label="Ödeme Ekranını Kapat"><i class="fa-solid fa-xmark"></i></button>
            
            <div id="checkoutMainContent">
                <div style="display:flex; align-items:center; gap:10px; margin-bottom:6px;">
                    <div style="width:36px; height:36px; border-radius:50%; background:#f3e8ff; color:#6b21a8; display:flex; align-items:center; justify-content:center; font-size:1.1rem; flex-shrink:0;">
                        <i class="fa-solid fa-shield-halved"></i>
                    </div>
                    <div>
                        <h3 style="margin:0; font-size:1.1rem; color:#1e1b4b; font-weight:800;">Güvenli Sipariş &amp; Ödeme</h3>
                        <p style="margin:0; color:#64748b; font-size:0.76rem;">256-Bit SSL korumalı iyzico &amp; Banka altyapısı</p>
                    </div>
                </div>

                <div class="checkout-steps-bar">
                    <div class="checkout-step-item active">
                        <span class="checkout-step-num">1</span>
                        <span>Teslimat &amp; Fatura</span>
                    </div>
                    <div class="checkout-step-divider"></div>
                    <div class="checkout-step-item active">
                        <span class="checkout-step-num">2</span>
                        <span>Kargo &amp; Montaj</span>
                    </div>
                    <div class="checkout-step-divider"></div>
                    <div class="checkout-step-item active">
                        <span class="checkout-step-num">3</span>
                        <span>Ödeme</span>
                    </div>
                </div>

                <form id="checkoutForm" style="display:flex; flex-direction:column; gap:10px;">
                    <!-- 1. İletişim & Adres Bilgileri -->
                    <div class="checkout-section-header">
                        <i class="fa-solid fa-user-check"></i>
                        <span>1. Alıcı &amp; Teslimat Bilgileri</span>
                    </div>

                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                        <input type="text" id="checkoutName" placeholder="Adınız ve Soyadınız *" required style="padding:9px 12px; border:1px solid #e2e8f0; border-radius:8px; font-size:0.85rem; width:100%; box-sizing:border-box;">
                        <input type="tel" id="checkoutPhone" placeholder="Telefon Numaranız *" required style="padding:9px 12px; border:1px solid #e2e8f0; border-radius:8px; font-size:0.85rem; width:100%; box-sizing:border-box;">
                    </div>

                    <input type="email" id="checkoutEmail" placeholder="E-Posta Adresiniz (Sipariş Takibi İçin) *" required style="padding:9px 12px; border:1px solid #e2e8f0; border-radius:8px; font-size:0.85rem; width:100%; box-sizing:border-box;">

                    <!-- Fatura Türü Seçimi -->
                    <div style="margin-top:2px;">
                        <label style="font-size:0.76rem; font-weight:700; color:#475569; margin-bottom:3px; display:block;">Fatura Türü</label>
                        <div class="invoice-type-toggle">
                            <button type="button" class="invoice-toggle-btn active" id="invoiceTypeBireysel">
                                <i class="fa-solid fa-user"></i> Bireysel Fatura
                            </button>
                            <button type="button" class="invoice-toggle-btn" id="invoiceTypeKurumsal">
                                <i class="fa-solid fa-building"></i> Kurumsal Fatura
                            </button>
                        </div>
                    </div>

                    <!-- Bireysel TCKN Alanı -->
                    <div id="tcknFieldWrap">
                        <input type="text" id="checkoutTckn" placeholder="T.C. Kimlik No (Fatura İçin - Opsiyonel)" maxlength="11" style="padding:9px 12px; border:1px solid #e2e8f0; border-radius:8px; font-size:0.85rem; width:100%; box-sizing:border-box;">
                    </div>

                    <!-- Kurumsal Fatura Alanları -->
                    <div class="invoice-kurumsal-fields" id="invoiceKurumsalFields">
                        <input type="text" id="checkoutCompanyTitle" placeholder="Şirket Tam Ticari Unvanı *" style="padding:9px 12px; border:1px solid #e2e8f0; border-radius:8px; font-size:0.85rem; width:100%; box-sizing:border-box;">
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                            <input type="text" id="checkoutTaxOffice" placeholder="Vergi Dairesi *" style="padding:9px 12px; border:1px solid #e2e8f0; border-radius:8px; font-size:0.85rem; width:100%; box-sizing:border-box;">
                            <input type="text" id="checkoutTaxNumber" placeholder="Vergi Numarası (10 Hane) *" maxlength="10" style="padding:9px 12px; border:1px solid #e2e8f0; border-radius:8px; font-size:0.85rem; width:100%; box-sizing:border-box;">
                        </div>
                    </div>

                    <!-- İl & İlçe Dropdown Seçimi -->
                    <div class="city-district-row">
                        <select id="checkoutCity" class="checkout-select" required>
                            <option value="">İl Seçiniz</option>
                        </select>
                        <select id="checkoutDistrict" class="checkout-select" required>
                            <option value="">İlçe Seçiniz</option>
                        </select>
                    </div>

                    <textarea id="checkoutAddress" placeholder="Açık Teslimat Adresi (Mahalle, Cadde/Sokak, Bina No, Daire No) *" rows="2" required style="padding:9px 12px; border:1px solid #e2e8f0; border-radius:8px; font-size:0.85rem; resize:vertical; box-sizing:border-box; width:100%;"></textarea>
                    <input type="text" id="checkoutNote" placeholder="Özel Sipariş / Kumaş veya Teslimat Notunuz (Opsiyonel)" style="padding:9px 12px; border:1px solid #e2e8f0; border-radius:8px; font-size:0.85rem; width:100%; box-sizing:border-box;">

                    <!-- 2. Kargo ve Montaj Hizmetleri -->
                    <div class="checkout-section-header" style="margin-top:6px;">
                        <i class="fa-solid fa-truck-ramp-box"></i>
                        <span>2. Lojistik &amp; Montaj Seçimi</span>
                    </div>

                    <div class="delivery-options-grid">
                        <label class="delivery-card-radio active" id="deliveryCardStandard">
                            <input type="radio" name="deliveryOption" value="standard" checked>
                            <div class="delivery-card-info">
                                <h6>Standart Teslimat</h6>
                                <p>Sigortalı mobilya nakliyesi ile bina önü teslim.</p>
                                <span class="delivery-card-badge free">ÜCRETSİZ</span>
                            </div>
                        </label>

                        <label class="delivery-card-radio" id="deliveryCardAssembly">
                            <input type="radio" name="deliveryOption" value="assembly">
                            <div class="delivery-card-info">
                                <h6>Daireye Teslim &amp; Montaj</h6>
                                <p>Odaya kadar taşıma ve uzman ekipçe kurulum.</p>
                                <span class="delivery-card-badge plus">MOBELMOR AVANTAJI</span>
                            </div>
                        </label>
                    </div>

                    <!-- 3. Ödeme Yöntemi -->
                    <div class="checkout-section-header" style="margin-top:6px;">
                        <i class="fa-solid fa-credit-card"></i>
                        <span>3. Ödeme Yöntemi</span>
                    </div>

                    <div class="payment-method-selector">
                        <div class="payment-method-btn active" data-method="card" id="payMethodCard">
                            <i class="fa-regular fa-credit-card"></i>
                            <span>Kredi Kartı / Taksit</span>
                        </div>
                        <div class="payment-method-btn" data-method="bank" id="payMethodBank">
                            <i class="fa-solid fa-building-columns"></i>
                            <span>Havale / EFT (-%5)</span>
                        </div>
                        <div class="payment-method-btn" data-method="cod" id="payMethodCod">
                            <i class="fa-solid fa-hand-holding-dollar"></i>
                            <span>Teslimatta Bakiye</span>
                        </div>
                    </div>

                    <!-- Panel 1: Kredi Kartı & Taksit (iyzico / 3D Secure Ready) -->
                    <div class="payment-method-panel active" id="panelPayCard">
                        <div class="iyzico-badge-row">
                            <span class="iyzico-security-tag"><i class="fa-solid fa-lock"></i> 3D Secure Korumalı Ödeme</span>
                            <div class="card-brands-icons">
                                <i class="fa-brands fa-cc-visa" title="Visa"></i>
                                <i class="fa-brands fa-cc-mastercard" title="Mastercard"></i>
                                <i class="fa-solid fa-credit-card" title="Troy"></i>
                            </div>
                        </div>

                        <div class="card-grid">
                            <div class="card-grid-full">
                                <label class="card-input-label">Kart Üzerindeki İsim</label>
                                <input type="text" id="cardHolderName" placeholder="Ad Soyad" class="card-input" autocomplete="cc-name">
                            </div>
                            <div class="card-grid-full">
                                <div style="display:flex; justify-content:space-between; align-items:center;">
                                    <label class="card-input-label">Kart Numarası</label>
                                    <span id="cardBinBadge" class="bank-detected-pill"><i class="fa-solid fa-credit-card"></i> Kredi Kartı</span>
                                </div>
                                <input type="text" id="cardNumber" placeholder="0000 0000 0000 0000" maxlength="19" class="card-input" autocomplete="cc-number">
                            </div>
                            <div>
                                <label class="card-input-label">Son Kullanma</label>
                                <input type="text" id="cardExpiry" placeholder="AA/YY" maxlength="5" class="card-input" autocomplete="cc-exp">
                            </div>
                            <div>
                                <label class="card-input-label">CVV Kodu</label>
                                <input type="password" id="cardCvc" placeholder="CVV" maxlength="4" class="card-input" autocomplete="cc-csc">
                            </div>
                        </div>

                        <div class="installment-select-wrap">
                            <label><i class="fa-solid fa-layer-group"></i> Taksit Seçeneği</label>
                            <select id="checkoutInstallmentSelect" class="checkout-select">
                                <option value="1">Tek Çekim (Peşin Fiyatına)</option>
                                <option value="2">2 Taksit - Vade Farksız</option>
                                <option value="3">3 Taksit - Vade Farksız</option>
                                <option value="6">6 Taksit - Vade Farksız (Kampanya)</option>
                                <option value="9">9 Taksit</option>
                                <option value="12">12 Taksit</option>
                            </select>
                        </div>
                    </div>

                    <!-- Panel 2: Havale / EFT -->
                    <div class="payment-method-panel" id="panelPayBank">
                        <div style="background:#ecfdf5; border:1px solid #a7f3d0; padding:8px 12px; border-radius:8px; margin-bottom:8px;">
                            <span style="color:#047857; font-weight:800; font-size:0.8rem;"><i class="fa-solid fa-tags"></i> Havale / EFT İndirimi: %5 Anında İndirim Uygulanır</span>
                        </div>
                        <p style="margin:0 0 8px 0; font-size:0.76rem; color:#475569;">Açıklama alanına <strong>Ad Soyad veya Sipariş No</strong> yazarak havalenizi gerçekleştirebilirsiniz.</p>
                        
                        <div class="bank-info-card">
                            <div class="bank-name">
                                <span>Türkiye İş Bankası</span>
                                <button type="button" class="iban-copy-btn" data-iban="TR450006400000000000000002"><i class="fa-regular fa-copy"></i> IBAN Kopyala</button>
                            </div>
                            <div class="bank-iban">TR45 0006 4000 0000 0000 0000 02</div>
                            <div class="bank-holder">Mobelmor Mobilya San. ve Tic. Ltd. Şti.</div>
                        </div>

                        <div class="bank-info-card" style="margin-top:6px;">
                            <div class="bank-name">
                                <span>Ziraat Bankası</span>
                                <button type="button" class="iban-copy-btn" data-iban="TR120001000000000000000001"><i class="fa-regular fa-copy"></i> IBAN Kopyala</button>
                            </div>
                            <div class="bank-iban">TR12 0001 0000 0000 0000 0000 01</div>
                            <div class="bank-holder">Mobelmor Mobilya San. ve Tic. Ltd. Şti.</div>
                        </div>
                    </div>

                    <!-- Panel 3: Kapıda / Teslimatta Bakiye -->
                    <div class="payment-method-panel" id="panelPayCod">
                        <div style="background:#eff6ff; border:1px solid #bfdbfe; padding:10px 12px; border-radius:8px;">
                            <h6 style="margin:0 0 4px 0; color:#1e40af; font-size:0.84rem; font-weight:800;"><i class="fa-solid fa-hand-holding-dollar"></i> Teslimatta Kalan Bakiye Ödemesi</h6>
                            <p style="margin:0; font-size:0.76rem; color:#475569; line-height:1.4;">Özel üretim mobilyalarda sipariş onayı için sembolik %20 ön ödeme alınır, kalan bakiye ürünler dairenize kurulduktan sonra Nakit veya Kredi Kartı ile ödenir.</p>
                        </div>
                    </div>

                    <!-- WhatsApp ile Sipariş Alternatifi Butonu -->
                    <button type="button" id="btnWhatsappCheckout" class="btn btn-block" style="background:#25D366; color:#ffffff; font-weight:800; padding:10px; border-radius:8px; border:none; display:flex; align-items:center; justify-content:center; gap:8px; margin-top:4px; cursor:pointer;">
                        <i class="fa-brands fa-whatsapp" style="font-size:1.1rem;"></i> WhatsApp ile Sipariş Teyidi Al
                    </button>

                    <!-- Mesafeli Satış Sözleşmesi Onayı -->
                    <div style="display:flex; align-items:flex-start; gap:8px; margin-top:4px;">
                        <input type="checkbox" id="checkoutTerms" required checked style="accent-color:#6b21a8; margin-top:3px;">
                        <label for="checkoutTerms" style="font-size:0.75rem; color:#64748b; line-height:1.35;">
                            <a href="mesafeli-satis-sozlesmesi.html" target="_blank" style="color:#6b21a8; font-weight:700; text-decoration:none;">Ön Bilgilendirme Koşulları</a> ve <a href="mesafeli-satis-sozlesmesi.html" target="_blank" style="color:#6b21a8; font-weight:700; text-decoration:none;">Mesafeli Satış Sözleşmesi</a>'ni okudum, onaylıyorum.
                        </label>
                    </div>

                    <!-- Fiyat ve Gönderim Özeti -->
                    <div class="checkout-summary-box" style="background:#f8fafc; padding:12px; border-radius:10px; border:1px solid #e2e8f0; margin-top:6px;">
                        <div style="display:flex; justify-content:space-between; font-size:0.82rem; color:#64748b; margin-bottom:4px;">
                            <span>Kargo &amp; Sevkiyat:</span>
                            <span style="color:#16a34a; font-weight:800;">ÜCRETSİZ</span>
                        </div>
                        <div style="display:flex; justify-content:space-between; font-size:0.82rem; color:#64748b; margin-bottom:4px;" id="discountRowSummary">
                            <span>Havale İndirimi:</span>
                            <span style="color:#16a34a; font-weight:800;" id="checkoutDiscountText">-%0</span>
                        </div>
                        <div style="display:flex; justify-content:space-between; font-size:1.05rem; font-weight:900; color:#1e1b4b; border-top:1px solid #e2e8f0; padding-top:6px; margin-top:4px;">
                            <span>Ödenecek Tutar:</span>
                            <span style="color:#6b21a8;" id="checkoutTotal">0 ₺</span>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary btn-block interactive-btn" id="btnSubmitOrder" style="padding:13px; font-size:0.95rem; font-weight:800; border-radius:10px;">
                        <i class="fa-solid fa-lock" style="margin-right:6px;"></i> Siparişi Güvenle Tamamla
                    </button>
                </form>
            </div>

            <!-- Sipariş Başarı Ekranı (Order Success) -->
            <div id="checkoutSuccessContent" style="display:none;" class="order-success-card">
                <div class="order-success-icon-wrap">
                    <i class="fa-solid fa-check"></i>
                </div>
                <h3 style="color:#0f172a; font-weight:900; margin:0 0 6px 0; font-size:1.25rem;">Siparişiniz Başarıyla Alındı!</h3>
                <p style="color:#64748b; font-size:0.82rem; margin:0 0 8px 0;">İnegöl fabrikamızda üretim ve hazırlık süreci başlatılmıştır.</p>
                
                <div class="order-code-badge" id="successOrderCode">MBM-000000</div>

                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:12px; text-align:left; margin:12px 0; font-size:0.8rem; color:#334155;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                        <span>Teslimat Süresi:</span>
                        <strong style="color:#10b981;">14 - 21 İş Günü</strong>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                        <span>Kurulum &amp; Montaj:</span>
                        <strong>Ücretsiz Dahil</strong>
                    </div>
                    <div style="display:flex; justify-content:space-between;">
                        <span>Sipariş Teyit Bildirimi:</span>
                        <strong id="successCustomerPhone">05XX XXX XX XX</strong>
                    </div>
                </div>

                <div style="display:flex; flex-direction:column; gap:8px; margin-top:14px;">
                    <a id="btnSuccessWhatsapp" href="#" target="_blank" class="btn btn-block" style="background:#25D366; color:#ffffff; font-weight:800; padding:10px; border-radius:8px; text-decoration:none; display:flex; align-items:center; justify-content:center; gap:8px;">
                        <i class="fa-brands fa-whatsapp"></i> WhatsApp ile Temsilciye Bağlan
                    </a>
                    <a href="siparislerim.html" class="btn btn-outline btn-block" style="padding:10px; border-radius:8px; text-decoration:none; font-weight:700; color:#6b21a8; border:1px solid #d8b4fe;">
                        <i class="fa-solid fa-boxes-stacked"></i> Siparişlerime Git
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- ======================================================================== -->
    <!-- MOBELMOR ÜCRETSİZ KUMAŞ NUMUNESİ MODALI (FURNITURE CRO FEATURE)           -->
    <!-- ======================================================================== -->
    <div class="modal-overlay" id="fabricSampleOverlay">
        <div class="modal-card" style="max-width:480px; max-height:90vh; overflow-y:auto;">
            <button class="close-btn modal-close interactive-btn" id="closeFabricSampleBtn" aria-label="Numune Penceresini Kapat"><i class="fa-solid fa-xmark"></i></button>
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
                <div style="width:36px; height:36px; border-radius:50%; background:#fef3c7; color:#d97706; display:flex; align-items:center; justify-content:center; font-size:1.1rem; flex-shrink:0;">
                    <i class="fa-solid fa-swatchbook"></i>
                </div>
                <div>
                    <h3 style="margin:0; font-size:1.1rem; color:#1e1b4b; font-weight:800;">Ücretsiz Kumaş Numunesi İste</h3>
                    <p style="margin:0; color:#64748b; font-size:0.76rem;">Kumaş dokularını ve renklerini evinizde inceleyin (Kargo Ücretsiz)</p>
                </div>
            </div>

            <form id="fabricSampleForm" style="display:flex; flex-direction:column; gap:10px; margin-top:8px;">
                <label style="font-size:0.78rem; font-weight:700; color:#334155; margin-bottom:-4px;">İstediğiniz Kumaşları Seçiniz (En Fazla 4 Adet):</label>
                <div class="fabric-sample-grid">
                    <div class="fabric-sample-chip selected" data-fabric="Taytüyü Antrasit">
                        <span class="fabric-chip-color" style="background:#334155;"></span>
                        <span class="fabric-chip-name">Taytüyü Antrasit</span>
                    </div>
                    <div class="fabric-sample-chip" data-fabric="Teddy Krem">
                        <span class="fabric-chip-color" style="background:#fef3c7;"></span>
                        <span class="fabric-chip-name">Teddy Krem</span>
                    </div>
                    <div class="fabric-sample-chip" data-fabric="Bukle Vizon">
                        <span class="fabric-chip-color" style="background:#d6d3d1;"></span>
                        <span class="fabric-chip-name">Bukle Vizon</span>
                    </div>
                    <div class="fabric-sample-chip" data-fabric="Keten Gri">
                        <span class="fabric-chip-color" style="background:#94a3b8;"></span>
                        <span class="fabric-chip-name">Keten Gri</span>
                    </div>
                    <div class="fabric-sample-chip" data-fabric="Nubuk Taba / Kahve">
                        <span class="fabric-chip-color" style="background:#9a3412;"></span>
                        <span class="fabric-chip-name">Nubuk Taba</span>
                    </div>
                    <div class="fabric-sample-chip" data-fabric="Kadife Zümrüt Yeşili">
                        <span class="fabric-chip-color" style="background:#047857;"></span>
                        <span class="fabric-chip-name">Zümrüt Yeşili</span>
                    </div>
                </div>

                <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                    <input type="text" id="sampleName" placeholder="Adınız Soyadınız *" required style="padding:9px 12px; border:1px solid #e2e8f0; border-radius:8px; font-size:0.85rem; width:100%; box-sizing:border-box;">
                    <input type="tel" id="samplePhone" placeholder="Telefon Numaranız *" required style="padding:9px 12px; border:1px solid #e2e8f0; border-radius:8px; font-size:0.85rem; width:100%; box-sizing:border-box;">
                </div>

                <textarea id="sampleAddress" placeholder="Numunelerin Gönderileceği Açık Adres (İl, İlçe, Mahalle, Sokak, Kapı No) *" rows="2" required style="padding:9px 12px; border:1px solid #e2e8f0; border-radius:8px; font-size:0.85rem; resize:vertical; width:100%; box-sizing:border-box;"></textarea>

                <button type="submit" class="btn btn-primary btn-block interactive-btn" style="padding:11px; font-weight:800; border-radius:8px; background:#d97706; border-color:#d97706;">
                    <i class="fa-solid fa-paper-plane" style="margin-right:6px;"></i> Ücretsiz Numuneleri Adresime Gönder
                </button>
            </form>
        </div>
    </div>
"""

# Regex to match existing checkout modal
pattern = re.compile(r'<!-- Checkout Modal[\s\S]*?id="checkoutOverlay"[\s\S]*?</div>\s*</div>', re.MULTILINE)
pattern2 = re.compile(r'<div class="modal-overlay" id="checkoutOverlay">[\s\S]*?</div>\s*</div>', re.MULTILINE)

for file_path in HTML_FILES:
    if not os.path.exists(file_path):
        continue
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Add js/checkout-helper.js script if not present
    if "js/checkout-helper.js" not in content:
        content = content.replace('</body>', '    <script src="js/checkout-helper.js?v=20260829_01" defer></script>\n</body>')

    # Replace checkout modal
    if 'id="checkoutOverlay"' in content:
        if pattern.search(content):
            content = pattern.sub(NEW_CHECKOUT_MODAL_HTML.strip(), content, count=1)
        elif pattern2.search(content):
            content = pattern2.sub(NEW_CHECKOUT_MODAL_HTML.strip(), content, count=1)
        
        # Ensure fabricSampleOverlay is also added if not present
        if 'id="fabricSampleOverlay"' not in content:
            content = content.replace('</body>', NEW_CHECKOUT_MODAL_HTML.split('<!-- ======================================================================== -->\n    <!-- MOBELMOR ÜCRETSİZ KUMAŞ NUMUNESİ MODALI')[1] + '\n</body>')

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Updated: {os.path.basename(file_path)}")

print("All HTML files updated successfully!")
