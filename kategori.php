<?php
require_once __DIR__ . '/config/helpers.php';

$catSlug = isset($_GET['c']) ? trim($_GET['c']) : '';
$searchQuery = isset($_GET['q']) ? trim($_GET['q']) : '';

$db = getDB();

// 1. Kategori Başlığı ve Açıklaması
$categoryName = "Tüm Mobilya Koleksiyonları";
$categoryDesc = "İnegöl üretimi salon, yemek ve yatak odası mobilyaları";

if (!empty($catSlug)) {
    $stmtCat = $db->prepare("SELECT * FROM categories WHERE slug = ? LIMIT 1");
    $stmtCat->execute([$catSlug]);
    $currentCat = $stmtCat->fetch();
    if ($currentCat) {
        $categoryName = $currentCat['name'];
        $categoryDesc = $currentCat['description'];
    }
}

// 2. Ürünleri Çekme Sorgusu (Takımlar Öncelikli Sıralama)
$sql = "SELECT * FROM products WHERE is_active = 1";
$params = [];

if (!empty($catSlug) && $catSlug !== 'firsat') {
    $sql .= " AND category_slug = ?";
    $params[] = $catSlug;
}

if (!empty($searchQuery)) {
    $sql .= " AND (title LIKE ? OR description LIKE ?)";
    $params[] = "%$searchQuery%";
    $params[] = "%$searchQuery%";
}

// Sıralama: Takımlar en önce (Set > Solo), ardından ID
$sql .= " ORDER BY product_type DESC, id ASC";

$stmtProducts = $db->prepare($sql);
$stmtProducts->execute($params);
$products = $stmtProducts->fetchAll();

$pageTitle = $categoryName . " | Mobelmor.com";
$pageDesc  = $categoryDesc;

include __DIR__ . '/includes/header.php';
include __DIR__ . '/includes/navbar.php';
?>

<main class="site-main-content site-container">
    <!-- Breadcrumbs -->
    <div class="breadcrumb-container">
        <nav class="breadcrumb-nav">
            <a href="index.php"><i class="fa-solid fa-house"></i> Ana Sayfa</a>
            <i class="fa-solid fa-chevron-right bread-sep"></i>
            <span class="bread-current"><?= e($categoryName) ?></span>
        </nav>
    </div>

    <!-- Category Header -->
    <div class="category-hero-header">
        <h1 class="category-page-title"><?= e($categoryName) ?></h1>
        <p class="category-page-desc"><?= e($categoryDesc) ?></p>
        <div class="category-stats-bar">
            <span>Toplam <strong><?= count($products) ?></strong> ürün listeleniyor</span>
        </div>
    </div>

    <!-- Products Grid -->
    <div class="product-cards-grid">
        <?php if (empty($products)): ?>
            <div class="no-products-box">
                <i class="fa-solid fa-couch"></i>
                <h3>Aradığınız kriterlere uygun ürün bulunamadı.</h3>
                <p>Lütfen farklı bir kategori seçin veya arama teriminizi değiştirin.</p>
                <a href="kategori.php" class="btn-primary-glow">Tüm Ürünleri İncele</a>
            </div>
        <?php else: ?>
            <?php foreach ($products as $item): ?>
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
        <?php endif; ?>
    </div>
</main>

<?php
include __DIR__ . '/includes/footer.php';
?>
