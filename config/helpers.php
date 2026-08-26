<?php
/**
 * MOBELMOR GENEL YARDIMCI FONKSİYONLAR (HELPERS)
 */

require_once __DIR__ . '/db.php';

// 1. Fiyat Formatlayıcı
function formatPrice($amount) {
    return '₺' . number_format((float)$amount, 0, ',', '.');
}

// 2. Güvenli HTML Kaçış Fonksiyonu (XSS Koruması)
function e($text) {
    return htmlspecialchars($text ?? '', ENT_QUOTES, 'UTF-8');
}

// 3. SEO Dostu Temiz Slug Üretici
function cleanSlug($text) {
    $turkish = ['ı', 'ğ', 'ü', 'ş', 'ö', 'ç', 'I', 'Ğ', 'Ü', 'Ş', 'Ö', 'Ç'];
    $latin   = ['i', 'g', 'u', 's', 'o', 'c', 'i', 'g', 'u', 's', 'o', 'c'];
    $text = str_replace($turkish, $latin, $text);
    $text = strtolower(trim($text));
    $text = preg_replace('/[^a-z0-9-]/', '-', $text);
    $text = preg_replace('/-+/', '-', $text);
    return trim($text, '-');
}

// 4. Temiz Ürün Bağlantı Üretici
function getProductUrl($id, $title) {
    $slug = cleanSlug($title);
    return "urun-detay.php?id=" . urlencode($id) . "&slug=" . urlencode($slug);
}

// 5. Temiz Kategori Bağlantı Üretici
function getCategoryUrl($category_slug) {
    return "kategori.php?c=" . urlencode($category_slug);
}

// 6. Site Ayarını Veritabanından Getirme
function getSetting($key, $default = '') {
    try {
        $db = getDB();
        $stmt = $db->prepare("SELECT setting_value FROM settings WHERE setting_key = ? LIMIT 1");
        $stmt->execute([$key]);
        $row = $stmt->fetch();
        return $row ? $row['setting_value'] : $default;
    } catch (Exception $e) {
        return $default;
    }
}

// 7. CSRF Güvenlik Tokenı
function generateCsrfToken() {
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

function verifyCsrfToken($token) {
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}

// 8. Admin Oturum Kontrolleri
function isAdminLoggedIn() {
    return isset($_SESSION['admin_user']) && !empty($_SESSION['admin_user']['id']);
}

function requireAdminLogin() {
    if (!isAdminLoggedIn()) {
        header("Location: login.php");
        exit;
    }
}
