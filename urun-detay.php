<?php
require_once __DIR__ . '/config/helpers.php';

$pid = isset($_GET['id']) ? (int)$_GET['id'] : 1;

$db = getDB();

// 1. Ürün Bilgisini Getir
$stmt = $db->prepare("SELECT * FROM products WHERE id = ? AND is_active = 1 LIMIT 1");
$stmt->execute([$pid]);
$product = $stmt->fetch();

if (!$product) {
    header("Location: index.php");
    exit;
}

// 2. Galeri Fotoğraflarını Getir
$stmtImages = $db->prepare("SELECT * FROM product_images WHERE product_id = ? ORDER BY sort_order ASC");
$stmtImages->execute([$pid]);
$galleryImages = $stmtImages->fetchAll();
if (empty($galleryImages)) {
    $galleryImages = [['image_url' => $product['main_image']]];
}

// 3. Modül Parçalarını Getir (Takımlar için)
$stmtModules = $db->prepare("SELECT * FROM product_modules WHERE product_id = ? ORDER BY sort_order ASC");
$stmtModules->execute([$pid]);
$modules = $stmtModules->fetchAll();

// 4. Benzer Ürünleri Getir (Aynı kategoriden)
$stmtRelated = $db->prepare("SELECT * FROM products WHERE category_slug = ? AND id != ? AND is_active = 1 ORDER BY id ASC LIMIT 4");
$stmtRelated->execute([$product['category_slug'], $pid]);
$relatedProducts = $stmtRelated->fetchAll();

$pageTitle = $product['title'] . " | Mobelmor İnegöl Mobilyası";
$pageDesc  = $product['description'];
$pageImg   = $product['main_image'];

include __DIR__ . '/includes/header.php';
include __DIR__ . '/includes/navbar.php';
?>

<main class="site-main-content">
    <!-- Breadcrumb Nav -->
    <div class="site-container breadcrumb-container">
        <nav class="breadcrumb-nav">
            <a href="index.php"><i class="fa-solid fa-house"></i> Ana Sayfa</a>
            <i class="fa-solid fa-chevron-right bread-sep"></i>
            <a href="<?= getCategoryUrl($product['category_slug']) ?>">
                <i class="fa-solid fa-layer-group"></i> <span><?= e(ucfirst($product['category_slug'])) ?></span>
            </a>
            <i class="fa-solid fa-chevron-right bread-sep"></i>
            <span class="bread-current"><?= e($product['title']) ?></span>
        </nav>
    </div>

    <!-- Product Detail Layout -->
    <div class="site-container product-detail-layout">
        <!-- Left: Gallery Section -->
        <div class="vdetail-gallery-col">
            <div class="vgallery-container">
                <!-- Vertical Thumbnails Strip (Desktop) -->
                <div class="vgallery-thumbs-col">
                    <button class="vthumb-nav-btn" onclick="window.scrollThumbs(-1)" aria-label="Yukarı Kaydır"><i class="fa-solid fa-chevron-up"></i></button>
                    <div class="vgallery-thumb-strip" id="galleryThumbStrip">
                        <?php foreach ($galleryImages as $tIdx => $tImg): ?>
                            <div class="vthumb-item <?= $tIdx === 0 ? 'active' : '' ?>" onclick="window.goToSlide(<?= $tIdx ?>)">
                                <img src="<?= e($tImg['image_url']) ?>" alt="<?= e($product['title']) ?> - Görsel <?= $tIdx + 1 ?>">
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <button class="vthumb-nav-btn" onclick="window.scrollThumbs(1)" aria-label="Aşağı Kaydır"><i class="fa-solid fa-chevron-down"></i></button>
                </div>

                <!-- Main Viewport Carousel -->
                <div class="vgallery-main-view">
                    <div class="vcard-circle-sticker">
                        <span class="vsticker-lbl">SEPETTE</span>
                        <span class="vsticker-val">%15</span>
                        <span class="vsticker-txt">İNDİRİM</span>
                    </div>

                    <button type="button" class="card-heart-btn" onclick="window.toggleDetailWishlist(<?= $product['id'] ?>)" aria-label="Favorilere Ekle">
                        <i class="fa-regular fa-heart"></i>
                    </button>

                    <div class="gallery-carousel-wrapper">
                        <div class="gallery-carousel-track" id="galleryCarouselTrack">
                            <?php foreach ($galleryImages as $gIdx => $gImg): ?>
                                <div class="gallery-slide" onclick="window.openLightbox(<?= $gIdx ?>)">
                                    <img src="<?= e($gImg['image_url']) ?>" alt="<?= e($product['title']) ?>" loading="<?= $gIdx === 0 ? 'eager' : 'lazy' ?>">
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>

                    <button type="button" class="vgallery-arrow-btn vgallery-arrow-prev" onclick="window.prevSlide()" aria-label="Önceki Fotoğraf"><i class="fa-solid fa-chevron-left"></i></button>
                    <button type="button" class="vgallery-arrow-btn vgallery-arrow-next" onclick="window.nextSlide()" aria-label="Sonraki Fotoğraf"><i class="fa-solid fa-chevron-right"></i></button>

                    <div class="vgallery-counter-badge">
                        <span id="currentSlideNum">1</span> / <span><?= count($galleryImages) ?></span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right: Product Information & Purchase Box -->
        <div class="vdetail-info-col">
            <div class="vdetail-header">
                <div class="vbadge-row">
                    <span class="vbrand-tag">MOBELMOR COLLECTION</span>
                    <span class="vbadge-pill pill-yellow"><i class="fa-solid fa-star"></i> YÜKSEK PUANLI (<?= e($product['rating']) ?>)</span>
                    <span class="vbadge-pill pill-cyan"><i class="fa-solid fa-truck-fast"></i> ÜCRETSİZ KURULUM</span>
                </div>
                <h1 class="vproduct-title"><?= e($product['title']) ?> <span class="vproduct-code">(MBL-<?= sprintf('%03d', $product['id']) ?>)</span></h1>
            </div>

            <!-- Price Card -->
            <div class="vprice-box">
                <div class="vprice-row">
                    <?php if ($product['old_price'] > $product['price']): ?>
                        <span class="vold-price"><?= formatPrice($product['old_price']) ?></span>
                    <?php endif; ?>
                    <span class="vcurrent-price" id="displayProductPrice"><?= formatPrice($product['price']) ?></span>
                </div>
                <div class="vcart-special-price">
                    <i class="fa-solid fa-bolt"></i> Sepette Özel İndirimli Fiyat: <strong><?= formatPrice($product['price']) ?></strong>
                </div>
            </div>

            <!-- Modular Pieces (For Sets) -->
            <?php if (!empty($modules)): ?>
                <div class="vmodules-section">
                    <h3 class="vmodules-heading"><i class="fa-solid fa-cubes"></i> Takım İçeriği ve Parça Seçimi</h3>
                    <div class="vmodules-list">
                        <?php foreach ($modules as $m): ?>
                            <div class="vmodule-item">
                                <span class="vmodule-name"><?= e($m['module_name']) ?> (<?= $m['default_qty'] ?> Adet)</span>
                                <span class="vmodule-price"><?= formatPrice($m['unit_price'] * $m['default_qty']) ?></span>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            <?php endif; ?>

            <!-- Add to Cart / Buy Actions -->
            <div class="vaction-buttons-group">
                <button type="button" class="btn-add-to-cart-glow" onclick="window.addToCart(<?= $product['id'] ?>)">
                    <i class="fa-solid fa-cart-plus"></i> SEPETE EKLE
                </button>
                <button type="button" class="btn-direct-buy" onclick="window.addToCart(<?= $product['id'] ?>); location.href='sepet.php';">
                    <i class="fa-solid fa-bolt-lightning"></i> HEMEN SATIN AL
                </button>
            </div>

            <!-- Delivery & Warranty Highlights -->
            <div class="vdelivery-card">
                <div class="vdelivery-item">
                    <i class="fa-solid fa-truck-ramp-box"></i>
                    <div>
                        <strong>Teslimat:</strong>
                        <span><?= e($product['spec_kargo']) ?></span>
                    </div>
                </div>
                <div class="vdelivery-item">
                    <i class="fa-solid fa-shield-halved"></i>
                    <div>
                        <strong>Garanti:</strong>
                        <span><?= e($product['spec_garanti']) ?></span>
                    </div>
                </div>
                <div class="vdelivery-item">
                    <i class="fa-solid fa-tree"></i>
                    <div>
                        <strong>İskelet:</strong>
                        <span><?= e($product['spec_iskelet']) ?></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Related Products -->
    <?php if (!empty($relatedProducts)): ?>
        <section class="site-container related-products-section">
            <h2 class="section-heading">Benzer Koleksiyon Ürünleri</h2>
            <div class="product-cards-grid">
                <?php foreach ($relatedProducts as $rel): ?>
                    <div class="product-card" onclick="location.href='<?= getProductUrl($rel['id'], $rel['title']) ?>'">
                        <div class="card-image-wrap">
                            <img src="<?= e($rel['main_image']) ?>" alt="<?= e($rel['title']) ?>" loading="lazy">
                        </div>
                        <div class="card-info">
                            <h3 class="card-title"><?= e($rel['title']) ?></h3>
                            <div class="card-pricing">
                                <span class="current-price"><?= formatPrice($rel['price']) ?></span>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </section>
    <?php endif; ?>
</main>

<script src="js/detail.js?v=20260826_0115"></script>

<?php
include __DIR__ . '/includes/footer.php';
?>
