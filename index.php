<?php
require_once __DIR__ . '/config/helpers.php';

$pageTitle = getSetting('site_title', 'Mobelmor - İnegöl Mobilyası & Lüks Ev Dekorasyonu');
$pageDesc  = getSetting('site_description', 'İnegöl usta zanaatkarlarının el işçiliği koltuk takımları, yemek odaları ve yatak odası koleksiyonları.');

$db = getDB();

// 1. Sliders
$stmtSliders = $db->query("SELECT * FROM sliders WHERE is_active = 1 ORDER BY sort_order ASC");
$sliders = $stmtSliders->fetchAll();

// 2. Featured Sets
$stmtFeatured = $db->query("SELECT * FROM products WHERE is_active = 1 AND is_featured = 1 ORDER BY id ASC LIMIT 8");
$featuredProducts = $stmtFeatured->fetchAll();

// 3. Category Showcases
$stmtLiving = $db->query("SELECT * FROM products WHERE category_slug = 'living' AND is_active = 1 ORDER BY product_type DESC, id ASC LIMIT 6");
$livingProducts = $stmtLiving->fetchAll();

$stmtDining = $db->query("SELECT * FROM products WHERE category_slug = 'dining' AND is_active = 1 ORDER BY product_type DESC, id ASC LIMIT 6");
$diningProducts = $stmtDining->fetchAll();

$stmtBedroom = $db->query("SELECT * FROM products WHERE category_slug = 'bedroom' AND is_active = 1 ORDER BY product_type DESC, id ASC LIMIT 6");
$bedroomProducts = $stmtBedroom->fetchAll();

include __DIR__ . '/includes/header.php';
include __DIR__ . '/includes/navbar.php';
?>

<main class="site-main-content">
    <!-- Hero Slider Section -->
    <section class="hero-slider-section">
        <div class="hero-slider-track" id="heroSliderTrack">
            <?php foreach ($sliders as $sIndex => $slider): ?>
                <div class="hero-slide <?= $sIndex === 0 ? 'active' : '' ?>" style="background-image: linear-gradient(to right, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.4) 60%, rgba(15, 23, 42, 0.1) 100%), url('<?= e($slider['image_url']) ?>');">
                    <div class="site-container hero-slide-content">
                        <span class="hero-badge"><?= e($slider['badge']) ?></span>
                        <h1 class="hero-title"><?= e($slider['title']) ?></h1>
                        <p class="hero-subtitle"><?= e($slider['subtitle']) ?></p>
                        <div class="hero-cta-group">
                            <a href="<?= e($slider['button_url']) ?>" class="btn-primary-glow"><?= e($slider['button_text']) ?> <i class="fa-solid fa-arrow-right"></i></a>
                            <a href="kategori.php" class="btn-secondary-glass">Tüm Kataloğu İncele</a>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
        
        <!-- Slider Navigation -->
        <button class="slider-arrow slider-prev" id="sliderPrev" aria-label="Önceki Slayt"><i class="fa-solid fa-chevron-left"></i></button>
        <button class="slider-arrow slider-next" id="sliderNext" aria-label="Sonraki Slayt"><i class="fa-solid fa-chevron-right"></i></button>
        
        <div class="slider-indicators">
            <?php foreach ($sliders as $sIndex => $slider): ?>
                <button class="indicator-dot <?= $sIndex === 0 ? 'active' : '' ?>" data-index="<?= $sIndex ?>" aria-label="Slayt <?= $sIndex + 1 ?>"></button>
            <?php endforeach; ?>
        </div>
    </section>

    <!-- Quick Features Bar -->
    <section class="features-bar-section">
        <div class="site-container features-grid">
            <div class="feature-card">
                <i class="fa-solid fa-gem"></i>
                <div>
                    <h3>%100 İnegöl Masif İskelet</h3>
                    <p>Fırınlanmış gürgen ağacından el işçiliği</p>
                </div>
            </div>
            <div class="feature-card">
                <i class="fa-solid fa-wand-magic-sparkles"></i>
                <div>
                    <h3>Kişiselleştirilebilir Modüller</h3>
                    <p>Evinize uygun renk, kumaş ve parça seçimi</p>
                </div>
            </div>
            <div class="feature-card">
                <i class="fa-solid fa-truck-fast"></i>
                <div>
                    <h3>Ücretsiz Randevulu Kurulum</h3>
                    <p>Kendi profesyonel montaj ekibimiz ile</p>
                </div>
            </div>
            <div class="feature-card">
                <i class="fa-solid fa-award"></i>
                <div>
                    <h3>2 Yıl Doğrudan Üretici Garantisi</h3>
                    <p>Fabrikadan aracısız güvenli teslimat</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Collections Showcase -->
    <section class="section-showcase site-container">
        <div class="section-header-row">
            <div>
                <span class="section-tag">ÖNE ÇIKAN TAKIMLAR</span>
                <h2 class="section-heading">2026 İnegöl Trend Koleksiyonu</h2>
            </div>
            <a href="kategori.php" class="view-all-link">Tümünü Gör <i class="fa-solid fa-chevron-right"></i></a>
        </div>

        <div class="product-cards-grid">
            <?php foreach ($featuredProducts as $item): ?>
                <div class="product-card" data-id="<?= $item['id'] ?>" onclick="location.href='<?= getProductUrl($item['id'], $item['title']) ?>'">
                    <div class="card-image-wrap">
                        <img src="<?= e($item['main_image']) ?>" alt="<?= e($item['title']) ?>" loading="lazy">
                        <?php if ($item['product_type'] === 'Set'): ?>
                            <span class="card-badge badge-set"><i class="fa-solid fa-layer-group"></i> TAM TAKIM</span>
                        <?php endif; ?>
                        <button type="button" class="card-fav-btn" onclick="event.stopPropagation(); window.toggleWishlist(<?= $item['id'] ?>);" aria-label="Favorilere Ekle">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                    </div>
                    <div class="card-info">
                        <div class="card-badges-row">
                            <span class="pill-badge pill-inegol">İNEGÖL KOLEKSİYONU</span>
                        </div>
                        <h3 class="card-title"><?= e($item['title']) ?></h3>
                        <div class="card-pricing">
                            <div class="price-wrap">
                                <?php if ($item['old_price'] > $item['price']): ?>
                                    <span class="old-price"><?= formatPrice($item['old_price']) ?></span>
                                <?php endif; ?>
                                <span class="current-price"><?= formatPrice($item['price']) ?></span>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

    <!-- Living Room Showcase -->
    <section class="section-showcase site-container">
        <div class="section-header-row">
            <div>
                <span class="section-tag">OTURMA ODASI</span>
                <h2 class="section-heading">Lüks & Modern Koltuk Takımları</h2>
            </div>
            <a href="kategori.php?c=living" class="view-all-link">Koltukları İncele <i class="fa-solid fa-chevron-right"></i></a>
        </div>
        <div class="product-cards-grid">
            <?php foreach ($livingProducts as $item): ?>
                <div class="product-card" data-id="<?= $item['id'] ?>" onclick="location.href='<?= getProductUrl($item['id'], $item['title']) ?>'">
                    <div class="card-image-wrap">
                        <img src="<?= e($item['main_image']) ?>" alt="<?= e($item['title']) ?>" loading="lazy">
                        <?php if ($item['product_type'] === 'Set'): ?>
                            <span class="card-badge badge-set"><i class="fa-solid fa-layer-group"></i> TAM TAKIM</span>
                        <?php endif; ?>
                    </div>
                    <div class="card-info">
                        <h3 class="card-title"><?= e($item['title']) ?></h3>
                        <div class="card-pricing">
                            <span class="current-price"><?= formatPrice($item['price']) ?></span>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

    <!-- Bedroom Showcase -->
    <section class="section-showcase site-container">
        <div class="section-header-row">
            <div>
                <span class="section-tag">YATAK ODASI</span>
                <h2 class="section-heading">Fonksiyonel & Estetik Yatak Odaları</h2>
            </div>
            <a href="kategori.php?c=bedroom" class="view-all-link">Yatak Odalarını İncele <i class="fa-solid fa-chevron-right"></i></a>
        </div>
        <div class="product-cards-grid">
            <?php foreach ($bedroomProducts as $item): ?>
                <div class="product-card" data-id="<?= $item['id'] ?>" onclick="location.href='<?= getProductUrl($item['id'], $item['title']) ?>'">
                    <div class="card-image-wrap">
                        <img src="<?= e($item['main_image']) ?>" alt="<?= e($item['title']) ?>" loading="lazy">
                        <?php if ($item['product_type'] === 'Set'): ?>
                            <span class="card-badge badge-set"><i class="fa-solid fa-layer-group"></i> TAM TAKIM</span>
                        <?php endif; ?>
                    </div>
                    <div class="card-info">
                        <h3 class="card-title"><?= e($item['title']) ?></h3>
                        <div class="card-pricing">
                            <span class="current-price"><?= formatPrice($item['price']) ?></span>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>
</main>

<?php
include __DIR__ . '/includes/footer.php';
?>
