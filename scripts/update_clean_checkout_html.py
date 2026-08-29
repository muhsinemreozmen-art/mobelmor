import os
import re

clean_checkout_modal_html = """    <!-- ======================================================================== -->
    <!-- MOBELMOR ADVANCED MULTI-STEP CHECKOUT MODAL (2026 CLEAN & STRUCTURED)     -->
    <!-- ======================================================================== -->
    <div class="modal-overlay" id="checkoutOverlay">
        <div class="modal-card">
            <!-- Modal Header -->
            <div class="checkout-modal-header">
                <div class="checkout-modal-title-wrap">
                    <div class="checkout-shield-icon">
                        <i class="fa-solid fa-shield-halved"></i>
                    </div>
                    <div>
                        <h3 class="checkout-modal-title">Güvenli Sipariş &amp; Ödeme</h3>
                        <p class="checkout-modal-subtitle">256-Bit SSL Korumalı Güvenli Ödeme Altyapısı</p>
                    </div>
                </div>
                <button type="button" class="cart-close-theme-btn" id="closeCheckoutBtn" aria-label="Kapat">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <!-- Stepper Indicator -->
            <div class="checkout-stepper-row">
                <div class="checkout-stepper-item">
                    <span class="checkout-stepper-circle">1</span>
                    <span>Teslimat</span>
                </div>
                <div class="checkout-stepper-sep"></div>
                <div class="checkout-stepper-item">
                    <span class="checkout-stepper-circle">2</span>
                    <span>Lojistik</span>
                </div>
                <div class="checkout-stepper-sep"></div>
                <div class="checkout-stepper-item">
                    <span class="checkout-stepper-circle">3</span>
                    <span>Ödeme</span>
                </div>
            </div>

            <div id="checkoutMainContent">
                <form id="checkoutForm" style="display:flex; flex-direction:column; gap:12px;">
                    <!-- 1. Alıcı & Teslimat Bilgileri -->
                    <div class="checkout-section-badge">
                        <i class="fa-solid fa-user"></i>
                        <span>1. Alıcı &amp; İletişim Bilgileri</span>
                    </div>

                    <div class="checkout-grid-2">
                        <div>
                            <input type="text" id="checkoutName" class="checkout-input-modern" placeholder="Adınız ve Soyadınız *" required>
                        </div>
                        <div>
                            <input type="tel" id="checkoutPhone" class="checkout-input-modern" placeholder="Telefon Numaranız *" required>
                        </div>
                    </div>

                    <div>
                        <input type="email" id="checkoutEmail" class="checkout-input-modern" placeholder="E-Posta Adresiniz (Sipariş Takibi İçin) *" required>
                    </div>

                    <!-- Fatura Türü -->
                    <div>
                        <div class="invoice-type-modern">
                            <button type="button" class="invoice-toggle-btn-modern active" id="invoiceTypeBireysel">
                                <i class="fa-solid fa-user"></i> Bireysel Fatura
                            </button>
                            <button type="button" class="invoice-toggle-btn-modern" id="invoiceTypeKurumsal">
                                <i class="fa-solid fa-building"></i> Kurumsal Fatura
                            </button>
                        </div>
                    </div>

                    <!-- Bireysel TCKN -->
                    <div id="tcknFieldWrap">
                        <input type="text" id="checkoutTckn" class="checkout-input-modern" placeholder="T.C. Kimlik No (Fatura İçin - Opsiyonel)" maxlength="11">
                    </div>

                    <!-- Kurumsal Fatura Alanları -->
                    <div class="invoice-kurumsal-fields" id="invoiceKurumsalFields" style="display:none; flex-direction:column; gap:8px;">
                        <input type="text" id="checkoutCompanyTitle" class="checkout-input-modern" placeholder="Şirket Tam Ticari Unvanı *">
                        <div class="checkout-grid-2">
                            <input type="text" id="checkoutTaxOffice" class="checkout-input-modern" placeholder="Vergi Dairesi *">
                            <input type="text" id="checkoutTaxNumber" class="checkout-input-modern" placeholder="Vergi Numarası (10 Hane) *" maxlength="10">
                        </div>
                    </div>

                    <!-- İl & İlçe Seçimi -->
                    <div class="checkout-grid-2">
                        <select id="checkoutCity" class="checkout-input-modern" required>
                            <option value="">İl Seçiniz</option>
                        </select>
                        <select id="checkoutDistrict" class="checkout-input-modern" required>
                            <option value="">İlçe Seçiniz</option>
                        </select>
                    </div>

                    <div>
                        <textarea id="checkoutAddress" class="checkout-input-modern" placeholder="Açık Teslimat Adresi (Mahalle, Cadde/Sokak, Bina No, Daire No) *" rows="2" required style="resize:vertical;"></textarea>
                    </div>

                    <div>
                        <input type="text" id="checkoutNote" class="checkout-input-modern" placeholder="Özel Sipariş / Kumaş veya Teslimat Notunuz (Opsiyonel)">
                    </div>

                    <!-- 2. Lojistik ve Montaj Seçimi -->
                    <div class="checkout-section-badge" style="margin-top:6px;">
                        <i class="fa-solid fa-truck-ramp-box"></i>
                        <span>2. Lojistik &amp; Montaj Hizmeti</span>
                    </div>

                    <div class="delivery-options-modern">
                        <label class="delivery-card-modern active" id="deliveryCardStandard">
                            <input type="radio" name="deliveryOption" value="standard" checked>
                            <div>
                                <div class="delivery-card-title">Standart Teslimat</div>
                                <p class="delivery-card-desc">Sigortalı mobilya nakliyesi ile bina önü teslim.</p>
                                <span class="delivery-card-pill free">ÜCRETSİZ</span>
                            </div>
                        </label>

                        <label class="delivery-card-modern" id="deliveryCardAssembly">
                            <input type="radio" name="deliveryOption" value="assembly">
                            <div>
                                <div class="delivery-card-title">Daireye Teslim &amp; Montaj</div>
                                <p class="delivery-card-desc">Odaya kadar taşıma ve uzman ekipçe montaj.</p>
                                <span class="delivery-card-pill plus">MOBELMOR HİZMETİ</span>
                            </div>
                        </label>
                    </div>

                    <!-- 3. Ödeme Yöntemi -->
                    <div class="checkout-section-badge" style="margin-top:6px;">
                        <i class="fa-solid fa-credit-card"></i>
                        <span>3. Ödeme Seçeneği</span>
                    </div>

                    <div class="payment-tabs-modern">
                        <div class="payment-tab-btn-modern active" data-method="card" id="payMethodCard">
                            <i class="fa-solid fa-credit-card"></i>
                            <span>Kredi Kartı</span>
                        </div>
                        <div class="payment-tab-btn-modern" data-method="bank" id="payMethodBank">
                            <i class="fa-solid fa-building-columns"></i>
                            <span>Havale / EFT (-%5)</span>
                        </div>
                        <div class="payment-tab-btn-modern" data-method="cod" id="payMethodCod">
                            <i class="fa-solid fa-hand-holding-dollar"></i>
                            <span>Teslimatta Ödeme</span>
                        </div>
                    </div>

                    <!-- Panel 1: Kredi Kartı -->
                    <div class="payment-method-panel active" id="panelPayCard">
                        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:12px; display:flex; flex-direction:column; gap:10px;">
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <span style="font-size:0.78rem; font-weight:800; color:#1e1b4b;"><i class="fa-solid fa-lock" style="color:#6b21a8;"></i> 3D Secure Korumalı</span>
                                <div style="display:flex; gap:6px; color:#64748b; font-size:1.1rem;">
                                    <i class="fa-brands fa-cc-visa"></i>
                                    <i class="fa-brands fa-cc-mastercard"></i>
                                    <i class="fa-solid fa-credit-card"></i>
                                </div>
                            </div>

                            <div>
                                <label style="font-size:0.72rem; font-weight:700; color:#64748b; margin-bottom:2px; display:block;">Kart Üzerindeki İsim</label>
                                <input type="text" id="cardHolderName" placeholder="Ad Soyad" class="checkout-input-modern" autocomplete="cc-name">
                            </div>

                            <div>
                                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2px;">
                                    <label style="font-size:0.72rem; font-weight:700; color:#64748b; display:block;">Kart Numarası</label>
                                    <span id="cardBinBadge" class="bank-detected-pill-modern"><i class="fa-solid fa-credit-card"></i> Kredi Kartı</span>
                                </div>
                                <input type="text" id="cardNumber" placeholder="0000 0000 0000 0000" maxlength="19" class="checkout-input-modern" autocomplete="cc-number">
                            </div>

                            <div class="checkout-grid-2">
                                <div>
                                    <label style="font-size:0.72rem; font-weight:700; color:#64748b; margin-bottom:2px; display:block;">Son Kullanma (AA/YY)</label>
                                    <input type="text" id="cardExpiry" placeholder="AA/YY" maxlength="5" class="checkout-input-modern" autocomplete="cc-exp">
                                </div>
                                <div>
                                    <label style="font-size:0.72rem; font-weight:700; color:#64748b; margin-bottom:2px; display:block;">CVV Güvenlik Kodu</label>
                                    <input type="password" id="cardCvc" placeholder="CVV" maxlength="4" class="checkout-input-modern" autocomplete="cc-csc">
                                </div>
                            </div>

                            <div>
                                <label style="font-size:0.72rem; font-weight:700; color:#64748b; margin-bottom:2px; display:block;">Taksit Seçeneği</label>
                                <select id="checkoutInstallmentSelect" class="checkout-input-modern">
                                    <option value="1">Tek Çekim (Peşin Fiyatına)</option>
                                    <option value="2">2 Taksit - Vade Farksız</option>
                                    <option value="3">3 Taksit - Vade Farksız</option>
                                    <option value="6">6 Taksit - Vade Farksız (Kampanya)</option>
                                    <option value="9">9 Taksit</option>
                                    <option value="12">12 Taksit</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Panel 2: Havale / EFT -->
                    <div class="payment-method-panel" id="panelPayBank" style="display:none;">
                        <div style="background:#ecfdf5; border:1px solid #a7f3d0; padding:10px 12px; border-radius:10px; margin-bottom:8px;">
                            <span style="color:#047857; font-weight:800; font-size:0.82rem;"><i class="fa-solid fa-tags"></i> Havale / EFT Özel İndirimi: %5 Anında İndirim Uygulanır</span>
                        </div>
                        <p style="margin:0 0 8px 0; font-size:0.76rem; color:#64748b;">Açıklama alanına <strong>Ad Soyad veya Sipariş No</strong> yazarak havalenizi gerçekleştirebilirsiniz.</p>
                        
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

                    <!-- Panel 3: Teslimatta Ödeme -->
                    <div class="payment-method-panel" id="panelPayCod" style="display:none;">
                        <div style="background:#faf5ff; border:1px solid #e9d5ff; padding:12px; border-radius:10px;">
                            <h6 style="margin:0 0 4px 0; color:#6b21a8; font-size:0.86rem; font-weight:800;"><i class="fa-solid fa-hand-holding-dollar"></i> Teslimatta Kalan Bakiye Ödemesi</h6>
                            <p style="margin:0; font-size:0.78rem; color:#475569; line-height:1.4;">Özel üretim mobilyalarda sipariş onayı için sembolik %20 ön ödeme alınır, kalan bakiye ürünler dairenize kurulduktan sonra Nakit veya Kredi Kartı ile ödenir.</p>
                        </div>
                    </div>

                    <!-- Total Pill -->
                    <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:10px 14px; border-radius:10px; display:flex; align-items:center; justify-content:space-between; margin-top:4px;">
                        <span style="font-size:0.86rem; font-weight:700; color:#64748b;">Toplam Tutar:</span>
                        <span id="checkoutTotal" style="font-size:1.25rem; font-weight:900; color:#6b21a8;">₺0</span>
                    </div>

                    <!-- Contract Approval -->
                    <label style="display:flex; align-items:flex-start; gap:8px; font-size:0.75rem; color:#64748b; cursor:pointer; margin-top:2px;">
                        <input type="checkbox" id="checkoutTerms" required checked style="accent-color:#6b21a8; margin-top:2px; cursor:pointer; flex-shrink:0;">
                        <span><strong style="color:#6b21a8;">Mesafeli Satış Sözleşmesi</strong> ve <strong style="color:#6b21a8;">KVKK Aydınlatma Metni</strong>'ni okudum, kabul ediyorum.</span>
                    </label>

                    <button type="submit" class="checkout-submit-btn-modern interactive-btn" id="checkoutSubmitBtn">
                        <i class="fa-solid fa-lock"></i>
                        <span id="checkoutSubmitText">SİPARİŞİ VE ÖDEMEYİ TAMAMLA</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </form>
            </div>
            <div id="checkoutSuccessContent" style="display:none;"></div>
        </div>
    </div>"""

html_files = [
    r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\index.html",
    r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\urun-detay.html",
    r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\product-detail.html",
    r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\kategori.html",
    r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\category.html"
]

pattern = r"<!-- ======================================================================== -->\s*<!-- MOBELMOR ADVANCED MULTI-STEP CHECKOUT MODAL[\s\S]*?<!-- Universal Auth Modal"

for file_path in html_files:
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        
        replacement = clean_checkout_modal_html + "\n\n    <!-- Universal Auth Modal"
        new_content = re.sub(pattern, replacement, content, count=1)
        if new_content != content:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Successfully replaced checkout modal in: {file_path}")
        else:
            print(f"Pattern not matched directly in: {file_path}, checking alternative match")
