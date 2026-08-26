<?php
require_once __DIR__ . '/../config/helpers.php';
$pageTitle = $pageTitle ?? getSetting('site_title', 'Mobelmor - İnegöl Mobilyası & Lüks Ev Dekorasyonu');
$pageDesc  = $pageDesc ?? getSetting('site_description', 'İnegöl usta zanaatkarlarının el işçiliği koltuk takımları, yemek odaları ve yatak odası koleksiyonları.');
$pageImg   = $pageImg ?? 'assets/hero_milo_sofa.webp';
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
    <title><?= e($pageTitle) ?></title>
    <meta name="description" content="<?= e($pageDesc) ?>">
    
    <!-- OpenGraph / Social Meta -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="<?= e($pageTitle) ?>">
    <meta property="og:description" content="<?= e($pageDesc) ?>">
    <meta property="og:image" content="<?= e($pageImg) ?>">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
    <link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
    
    <!-- Google Fonts & Font Awesome -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- CSS Stylesheets -->
    <link rel="stylesheet" href="css/styles.min.css?v=20260826_0115">
    <link rel="stylesheet" href="css/detail.css?v=20260826_0115">
</head>
<body>
    <!-- Top Announcement Bar -->
    <div class="top-announcement-bar">
        <div class="site-container announcement-inner">
            <span class="announcement-badge"><i class="fa-solid fa-truck-fast"></i> ÜCRETSİZ TESLİMAT</span>
            <p class="announcement-text">Tüm Türkiye'ye <strong>Ücretsiz Sigortalı Teslimat & Profesyonel Kurulum</strong></p>
            <div class="announcement-contacts">
                <a href="tel:<?= e(getSetting('phone', '08503080000')) ?>"><i class="fa-solid fa-phone"></i> <?= e(getSetting('phone', '0850 308 00 00')) ?></a>
                <a href="https://wa.me/905300000000" target="_blank"><i class="fa-brands fa-whatsapp"></i> WhatsApp Destek</a>
            </div>
        </div>
    </div>
