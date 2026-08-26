<?php
require_once __DIR__ . '/../config/helpers.php';

// Veritabanından aktif kategorileri getir
$categories = [];
try {
    $db = getDB();
    $stmt = $db->query("SELECT * FROM categories WHERE is_active = 1 ORDER BY sort_order ASC");
    $categories = $stmt->fetchAll();
} catch (Exception $e) {
    $categories = [];
}
?>
<!-- Main Header & Navigation -->
<header class="site-header" id="siteHeader">
    <div class="site-container header-main-row">
        <!-- Mobile Menu Toggle -->
        <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Menüyü Aç">
            <i class="fa-solid fa-bars"></i>
        </button>

        <!-- Brand Logo -->
        <a href="index.php" class="brand-logo">
            <span class="logo-text">MOBEL<span>MOR</span></span>
            <span class="logo-subtext">İNEGÖL DİZAYN</span>
        </a>

        <!-- Search Bar -->
        <div class="header-search-box">
            <form action="kategori.php" method="GET" class="search-form">
                <i class="fa-solid fa-magnifying-glass search-icon"></i>
                <input type="text" name="q" placeholder="Mobilya, koltuk takımı veya model ara..." autocomplete="off">
                <button type="submit">ARA</button>
            </form>
        </div>

        <!-- Header Actions (Wishlist & Cart) -->
        <div class="header-actions">
            <a href="favoriler.php" class="action-btn wishlist-btn" title="Favorilerim">
                <div class="icon-wrap">
                    <i class="fa-regular fa-heart"></i>
                    <span class="action-badge wishlist-count-badge">0</span>
                </div>
                <span class="btn-label">Favorilerim</span>
            </a>
            
            <a href="sepet.php" class="action-btn cart-btn" title="Sepetim">
                <div class="icon-wrap">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <span class="action-badge cart-count-badge">0</span>
                </div>
                <span class="btn-label">Sepetim</span>
            </a>
        </div>
    </div>

    <!-- Category Navigation Bar -->
    <nav class="category-nav-bar">
        <div class="site-container">
            <ul class="nav-list">
                <li class="nav-item">
                    <a href="index.php" class="nav-link <?= empty($_GET['c']) ? 'active' : '' ?>">
                        <i class="fa-solid fa-house"></i> Ana Sayfa
                    </a>
                </li>
                <?php foreach ($categories as $cat): ?>
                    <li class="nav-item">
                        <a href="<?= getCategoryUrl($cat['slug']) ?>" class="nav-link <?= (isset($_GET['c']) && $_GET['c'] === $cat['slug']) ? 'active' : '' ?>">
                            <i class="fa-solid <?= e($cat['icon_class']) ?>"></i> <?= e($cat['name']) ?>
                        </a>
                    </li>
                <?php endforeach; ?>
                <li class="nav-item nav-highlight">
                    <a href="kategori.php?c=firsat" class="nav-link">
                        <i class="fa-solid fa-percent"></i> Fırsat Ürünleri
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</header>
