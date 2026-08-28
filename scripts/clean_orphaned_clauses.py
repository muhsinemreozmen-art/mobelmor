import glob
import re

CHECKOUT_MODAL_HTML = '''    <!-- Checkout Modal (iyzico 3D Secure Ready) -->
    <div class="modal-overlay" id="checkoutOverlay">
        <div class="modal-card">
            <button class="close-btn modal-close interactive-btn" id="closeCheckoutBtn" aria-label="Ödeme Ekranını Kapat"><i class="fa-solid fa-xmark"></i></button>
            <div id="checkoutMainContent">
                <div style="display:flex; align-items:center; gap:10px; margin-bottom:4px;">
                    <div style="width:36px; height:36px; border-radius:50%; background:#f3e8ff; color:#6b21a8; display:flex; align-items:center; justify-content:center; font-size:1.1rem; flex-shrink:0;">
                        <i class="fa-solid fa-shield-halved"></i>
                    </div>
                    <div>
                        <h3 style="margin:0; font-size:1.12rem; color:#1e1b4b; font-weight:800;">Güvenli Sipariş &amp; Ödeme</h3>
                        <p style="margin:0; color:#64748b; font-size:0.78rem;">256-Bit SSL korumalı iyzico ödeme altyapısı</p>
                    </div>
                </div>

                <form id="checkoutForm" style="display:flex; flex-direction:column; gap:10px; margin-top:12px;">
                    <div class="checkout-section-header">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>1. Teslimat &amp; İletişim Bilgileri</span>
                    </div>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                        <input type="text" id="checkoutName" placeholder="Adınız ve Soyadınız" required style="padding:9px 12px; border:1px solid #e2e8f0; border-radius:8px; font-size:0.85rem; width:100%; box-sizing:border-box;">
                        <input type="tel" id="checkoutPhone" placeholder="Telefon Numaranız" required style="padding:9px 12px; border:1px solid #e2e8f0; border-radius:8px; font-size:0.85rem; width:100%; box-sizing:border-box;">
                    </div>
                    <input type="email" id="checkoutEmail" placeholder="E-Posta Adresiniz (Sipariş Takibi İçin)" required style="padding:9px 12px; border:1px solid #e2e8f0; border-radius:8px; font-size:0.85rem;">
                    <textarea id="checkoutAddress" placeholder="Teslimat Adresi (İl, İlçe, Mahalle, Cadde/Sokak, Bina/Daire No)" rows="2" required style="padding:9px 12px; border:1px solid #e2e8f0; border-radius:8px; font-size:0.85rem; resize:vertical;"></textarea>
                    <input type="text" id="checkoutNote" placeholder="Varsa Özel Sipariş/Kumaş Notunuz (Opsiyonel)" style="padding:9px 12px; border:1px solid #e2e8f0; border-radius:8px; font-size:0.85rem;">

                    <div class="checkout-section-header" style="margin-top:6px;">
                        <i class="fa-solid fa-credit-card"></i>
                        <span>2. Ödeme Yöntemi</span>
                    </div>

                    <div class="payment-method-selector">
                        <div class="payment-method-btn active" data-method="card" id="payMethodCard">
                            <i class="fa-regular fa-credit-card"></i>
                            <span>Kredi Kartı / iyzico</span>
                        </div>
                        <div class="payment-method-btn" data-method="bank" id="payMethodBank">
                            <i class="fa-solid fa-building-columns"></i>
                            <span>Havale / EFT</span>
                        </div>
                        <div class="payment-method-btn" data-method="cod" id="payMethodCod">
                            <i class="fa-solid fa-hand-holding-dollar"></i>
                            <span>Kapıda Ödeme</span>
                        </div>
                    </div>

                    <!-- Panel 1: Credit Card / iyzico -->
                    <div class="payment-method-panel active" id="panelPayCard">
                        <div class="iyzico-badge-row">
                            <span class="iyzico-security-tag"><i class="fa-solid fa-lock"></i> iyzico 3D Secure Koruma</span>
                            <div class="card-brands-icons">
                                <i class="fa-brands fa-cc-visa" title="Visa"></i>
                                <i class="fa-brands fa-cc-mastercard" title="Mastercard"></i>
                                <i class="fa-solid fa-credit-card" title="Troy / Diğer"></i>
                            </div>
                        </div>
                        <div class="card-grid">
                            <div class="card-grid-full">
                                <label class="card-input-label">Kart Üzerindeki İsim</label>
                                <input type="text" id="cardHolderName" placeholder="Ad Soyad" class="card-input" autocomplete="cc-name">
                            </div>
                            <div class="card-grid-full">
                                <label class="card-input-label">Kart Numarası</label>
                                <input type="text" id="cardNumber" placeholder="0000 0000 0000 0000" maxlength="19" class="card-input" autocomplete="cc-number">
                            </div>
                            <div>
                                <label class="card-input-label">Son Kullanma (AA/YY)</label>
                                <input type="text" id="cardExpiry" placeholder="AA/YY" maxlength="5" class="card-input" autocomplete="cc-exp">
                            </div>
                            <div>
                                <label class="card-input-label">Güvenlik Kodu (CVV)</label>
                                <input type="password" id="cardCvc" placeholder="CVV" maxlength="4" class="card-input" autocomplete="cc-csc">
                            </div>
                        </div>
                    </div>

                    <!-- Panel 2: Bank Transfer / EFT -->
                    <div class="payment-method-panel" id="panelPayBank">
                        <p style="margin:0 0 8px 0; font-size:0.78rem; color:#475569;">Siparişinizi tamamladıktan sonra aşağıdaki hesaplarımızdan birine açıklama kısmına <strong>Ad Soyad veya Sipariş No</strong> yazarak havalenizi gerçekleştirebilirsiniz.</p>
                        <div class="bank-info-card">
                            <div class="bank-name"><span>Ziraat Bankası</span> <span style="font-size:0.7rem; color:#15803d; background:#dcfce7; padding:1px 6px; border-radius:4px;">TL Hesabı</span></div>
                            <div class="bank-iban">TR12 0001 0000 0000 0000 0000 01</div>
                            <div class="bank-holder">Mobelmor İnegöl Mobilya San. ve Tic. Ltd. Şti.</div>
                        </div>
                        <div class="bank-info-card" style="margin-top:6px;">
                            <div class="bank-name"><span>Türkiye İş Bankası</span> <span style="font-size:0.7rem; color:#15803d; background:#dcfce7; padding:1px 6px; border-radius:4px;">TL Hesabı</span></div>
                            <div class="bank-iban">TR45 0006 4000 0000 0000 0000 02</div>
                            <div class="bank-holder">Mobelmor İnegöl Mobilya San. ve Tic. Ltd. Şti.</div>
                        </div>
                    </div>

                    <!-- Panel 3: Cash / POS on Delivery -->
                    <div class="payment-method-panel" id="panelPayCod">
                        <div style="display:flex; align-items:center; gap:8px;">
                            <i class="fa-solid fa-truck-ramp-box" style="font-size:1.4rem; color:#7c3aed;"></i>
                            <p style="margin:0; font-size:0.8rem; color:#334155; line-height:1.4;">
                                Kata teslimat ve profesyonel montaj anında nakit veya mobil POS cihazımızla kredi kartına taksitli ödeme yapabilirsiniz.
                            </p>
                        </div>
                    </div>

                    <div style="background:#faf5ff; padding:10px 14px; border-radius:10px; border:1px solid #e9d5ff; display:flex; justify-content:space-between; align-items:center; font-weight:800; margin-top:2px;">
                        <span style="font-size:0.85rem; color:#334155;">Toplam Ödenecek:</span>
                        <span id="checkoutTotal" style="color:#6b21a8; font-size:1.15rem;">₺0</span>
                    </div>

                    <!-- Inline Scrollable Contract & KVKK Reader -->
                    <div class="checkout-contract-container">
                        <div class="contract-tabs-row">
                            <div class="contract-tab-buttons">
                                <button type="button" class="contract-tab-btn active" id="btnContractMss">Mesafeli Satış Sözleşmesi</button>
                                <button type="button" class="contract-tab-btn" id="btnContractKvkk">KVKK Metni</button>
                            </div>
                            <span class="contract-scroll-hint"><i class="fa-solid fa-arrows-up-down"></i> Kaydırılabilir</span>
                        </div>
                        <div class="contract-content-box" id="contractContentBox">
                            <div class="contract-clause">
                                <div class="contract-clause-header">
                                    <span class="clause-badge">MADDE 1</span>
                                    <span class="clause-title">Taraflar</span>
                                </div>
                                <div class="contract-clause-body">
                                    <p><strong>Satıcı:</strong> Mobelmor İnegöl Mobilya San. ve Tic. Ltd. Şti.</p>
                                    <p><strong>Alıcı:</strong> Mobelmor.com üzerinden sipariş veren nihai tüketici.</p>
                                </div>
                            </div>
                            <div class="contract-clause">
                                <div class="contract-clause-header">
                                    <span class="clause-badge">MADDE 2</span>
                                    <span class="clause-title">Konu &amp; Kapsam</span>
                                </div>
                                <div class="contract-clause-body">
                                    <p>İşbu sözleşmenin konusu, ALICI'nın SATICI'ya ait www.mobelmor.com internet sitesinden siparişini verdiği mobilya ve ev dekorasyon ürünlerinin 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince satışı ve teslimidir.</p>
                                </div>
                            </div>
                            <div class="contract-clause">
                                <div class="contract-clause-header">
                                    <span class="clause-badge">MADDE 3</span>
                                    <span class="clause-title">Teslimat &amp; Montaj</span>
                                </div>
                                <div class="contract-clause-body">
                                    <p>Mobilya ürünleri, özel korumalı ambalajında sigortalı mobilya lojistik araçlarımızla ALICI'nın belirttiği teslimat adresine kata teslim ve ücretsiz profesyonel montaj hizmeti ile ulaştırılır.</p>
                                </div>
                            </div>
                            <div class="contract-clause">
                                <div class="contract-clause-header">
                                    <span class="clause-badge">MADDE 4</span>
                                    <span class="clause-title">Cayma Hakkı &amp; İade</span>
                                </div>
                                <div class="contract-clause-body">
                                    <p>ALICI, standart ürünlerde 14 gün içinde cayma hakkına sahiptir. Tüketicinin özel istekleri doğrultusunda özel ölçü üretilen veya özel kumaş/renk döşemesi yapılan ürünler, 6502 Sayılı Kanun Madde 15/b uyarınca cayma hakkı istisnası kapsamındadır.</p>
                                </div>
                            </div>
                            <div class="contract-clause">
                                <div class="contract-clause-header">
                                    <span class="clause-badge">MADDE 5</span>
                                    <span class="clause-title">Garanti</span>
                                </div>
                                <div class="contract-clause-body">
                                    <p>Tüm ürünlerimiz 2 Yıl Mobelmor Üretici ve İskelet Garantisi altındadır.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <label class="checkout-terms-label" style="cursor:pointer;">
                        <input type="checkbox" id="checkoutTerms" required checked style="accent-color:#6b21a8; width:16px; height:16px; cursor:pointer; flex-shrink:0;">
                        <span>Yukarıdaki <strong style="color:#6b21a8;">Mesafeli Satış Sözleşmesi</strong> ve <strong style="color:#6b21a8;">KVKK Metni</strong>'ni okudum, onaylıyorum.</span>
                    </label>

                    <button type="submit" class="btn btn-primary btn-block interactive-btn" id="checkoutSubmitBtn" style="padding:14px; margin-top:2px;">
                        <i class="fa-solid fa-lock"></i> <span id="checkoutSubmitText">iyzico ile Güvenli Ödeme Yap</span>
                    </button>
                </form>
            </div>
            <div id="checkoutSuccessContent" style="display:none;"></div>
        </div>
    </div>'''

# Match from <!-- Checkout Modal all the way to <!-- Universal Auth Modal
target_pattern = re.compile(r'<!-- Checkout Modal[\s\S]*?(?=<!-- Universal Auth Modal)', re.MULTILINE)

for fpath in glob.glob("*.html"):
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    if 'id="checkoutOverlay"' in content:
        if target_pattern.search(content):
            new_content = target_pattern.sub(CHECKOUT_MODAL_HTML + '\n\n    ', content)
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Cleaned orphaned clauses and updated checkout in {fpath}")
        else:
            print(f"Could not find target pattern in {fpath}")
