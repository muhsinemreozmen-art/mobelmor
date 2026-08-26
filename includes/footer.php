<?php
require_once __DIR__ . '/../config/helpers.php';
?>
<!-- Footer Section -->
<footer class="site-footer">
    <div class="site-container footer-top-row">
        <!-- Trust Pillars -->
        <div class="trust-pillar">
            <i class="fa-solid fa-truck-ramp-box"></i>
            <div>
                <h4>Ücretsiz Teslimat & Montaj</h4>
                <p>Tüm Türkiye'ye kapınıza kadar sigortalı teslimat</p>
            </div>
        </div>
        <div class="trust-pillar">
            <i class="fa-solid fa-shield-halved"></i>
            <div>
                <h4>2 Yıl Üretici Garantisi</h4>
                <p>İnegöl masif iskelet ve kumaş kalitesi güvencesi</p>
            </div>
        </div>
        <div class="trust-pillar">
            <i class="fa-solid fa-lock"></i>
            <div>
                <h4>%100 Güvenli Ödeme</h4>
                <p>256-bit SSL ve 3D Secure güvenli altyapı</p>
            </div>
        </div>
        <div class="trust-pillar">
            <i class="fa-solid fa-headset"></i>
            <div>
                <h4>Müşteri Desteği</h4>
                <p>Haftanın 7 günü uzman mimari danışmanlık</p>
            </div>
        </div>
    </div>

    <div class="site-container footer-main-content">
        <div class="footer-col about-col">
            <h3 class="footer-logo">MOBEL<span>MOR</span></h3>
            <p class="about-desc"><?= e(getSetting('site_description', 'İnegöl usta zanaatkarlarının el işçiliği koltuk takımları, yemek odaları ve yatak odası koleksiyonları.')) ?></p>
            <div class="footer-contact-info">
                <p><i class="fa-solid fa-location-dot"></i> <?= e(getSetting('address', 'Ertuğrulgazi Mobilyacılar Caddesi İnegöl / Bursa')) ?></p>
                <p><i class="fa-solid fa-phone"></i> <?= e(getSetting('phone', '0850 308 00 00')) ?></p>
                <p><i class="fa-solid fa-envelope"></i> <?= e(getSetting('email', 'destek@mobelmor.com')) ?></p>
            </div>
        </div>

        <div class="footer-col">
            <h4>Koleksiyonlar</h4>
            <ul>
                <li><a href="kategori.php?c=living">Koltuk Takımları</a></li>
                <li><a href="kategori.php?c=dining">Yemek Odaları</a></li>
                <li><a href="kategori.php?c=bedroom">Yatak Odaları</a></li>
                <li><a href="kategori.php?c=tv-unit">TV Üniteleri</a></li>
                <li><a href="kategori.php?c=firsat">Kampanyalı Ürünler</a></li>
            </ul>
        </div>

        <div class="footer-col">
            <h4>Kurumsal & Destek</h4>
            <ul>
                <li><a href="hakkimizda.php">Hakkımızda</a></li>
                <li><a href="teslimat-ve-iade.php">Teslimat & Kurulum</a></li>
                <li><a href="garanti-kosullari.php">Garanti Koşulları</a></li>
                <li><a href="gizlilik-politikasi.php">Gizlilik Politikası</a></li>
                <li><a href="iletisim.php">İletişim & Showroom</a></li>
            </ul>
        </div>

        <div class="footer-col">
            <h4>Güvenli Alışveriş</h4>
            <p>Ödemeleriniz en yüksek banka güvenlik standartlarında 3D Secure ile korunmaktadır.</p>
            <div class="payment-methods-icons">
                <i class="fa-brands fa-cc-visa"></i>
                <i class="fa-brands fa-cc-mastercard"></i>
                <i class="fa-brands fa-cc-apple-pay"></i>
                <i class="fa-solid fa-shield"></i>
            </div>
        </div>
    </div>

    <div class="footer-bottom-bar">
        <div class="site-container footer-bottom-inner">
            <p>&copy; <?= date('Y') ?> Mobelmor İnegöl Dizayn Mobilya A.Ş. Tüm hakları saklıdır.</p>
            <div class="footer-social-links">
                <a href="<?= e(getSetting('instagram_url', 'https://instagram.com')) ?>" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                <a href="<?= e(getSetting('facebook_url', 'https://facebook.com')) ?>" target="_blank" aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://wa.me/905300000000" target="_blank" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
            </div>
        </div>
    </div>
</footer>

<!-- Toast Message Container -->
<div id="toastContainer" class="toast-container"></div>

<!-- Scripts -->
<script src="js/app.js?v=20260826_0115"></script>
</body>
</html>
