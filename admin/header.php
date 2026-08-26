<?php
require_once __DIR__ . '/auth.php';
checkAdminAuth();

$currentUser = $_SESSION['admin_user'];
$activePage = $activePage ?? 'dashboard';
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= e($adminTitle ?? 'Yönetim Paneli') ?> | Mobelmor Admin</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'Outfit', sans-serif;
            background: #090d16;
            color: #f1f5f9;
            min-height: 100vh;
            display: flex;
        }
        /* Sidebar */
        .admin-sidebar {
            width: 260px;
            background: #0f172a;
            border-right: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 100;
        }
        .sidebar-brand {
            padding: 24px 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .sidebar-brand h2 {
            font-size: 1.3rem;
            font-weight: 800;
            letter-spacing: 1px;
        }
        .sidebar-brand h2 span { color: #38bdf8; }
        .sidebar-brand .badge {
            background: #0284c7;
            font-size: 0.65rem;
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: 600;
        }
        .sidebar-menu {
            list-style: none;
            padding: 20px 12px;
            flex: 1;
            overflow-y: auto;
        }
        .menu-label {
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #64748b;
            padding: 12px 10px 6px 10px;
            font-weight: 700;
        }
        .menu-link {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 11px 14px;
            border-radius: 10px;
            color: #94a3b8;
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 500;
            transition: all 0.2s ease;
            margin-bottom: 4px;
        }
        .menu-link i { font-size: 1rem; width: 20px; text-align: center; }
        .menu-link:hover, .menu-link.active {
            background: rgba(56, 189, 248, 0.12);
            color: #38bdf8;
        }
        .sidebar-footer {
            padding: 16px 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #0b1120;
        }
        .user-info {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .user-avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: #0284c7;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            color: #fff;
        }
        .user-meta span { display: block; font-size: 0.85rem; font-weight: 600; }
        .user-meta small { color: #64748b; font-size: 0.75rem; }
        .logout-btn { color: #ef4444; font-size: 1.1rem; text-decoration: none; padding: 6px; }

        /* Main Content Container */
        .admin-main {
            margin-left: 260px;
            flex: 1;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }
        .admin-topbar {
            height: 70px;
            background: #0f172a;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 30px;
            position: sticky;
            top: 0;
            z-index: 90;
        }
        .topbar-left h1 { font-size: 1.25rem; font-weight: 700; color: #f8fafc; }
        .topbar-right { display: flex; align-items: center; gap: 15px; }
        .btn-live-site {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #f1f5f9;
            padding: 8px 14px;
            border-radius: 8px;
            font-size: 0.85rem;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: all 0.2s ease;
        }
        .btn-live-site:hover { background: rgba(255, 255, 255, 0.15); }
        .admin-content {
            padding: 30px;
            flex: 1;
        }

        /* Generic Admin Components */
        .btn-action-primary {
            background: #0284c7;
            color: #fff;
            padding: 10px 18px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border: none;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .btn-action-primary:hover { background: #0369a1; }
        .table-card {
            background: #0f172a;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }
        .table-responsive { width: 100%; overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; text-align: left; }
        th { background: #1e293b; padding: 14px 18px; font-size: 0.8rem; text-transform: uppercase; color: #94a3b8; letter-spacing: 0.5px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
        td { padding: 14px 18px; font-size: 0.9rem; border-bottom: 1px solid rgba(255, 255, 255, 0.05); color: #cbd5e1; }
        tr:hover td { background: rgba(255, 255, 255, 0.02); }
        .prod-thumb { width: 44px; height: 44px; border-radius: 6px; object-fit: cover; }
        .badge-pill-status { display: inline-block; padding: 3px 8px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; }
        .badge-set { background: rgba(56, 189, 248, 0.2); color: #38bdf8; }
        .badge-solo { background: rgba(148, 163, 184, 0.2); color: #94a3b8; }
        .badge-active { background: rgba(34, 197, 94, 0.2); color: #4ade80; }
        .badge-inactive { background: rgba(239, 68, 68, 0.2); color: #f87171; }
    </style>
</head>
<body>
    <!-- Sidebar -->
    <aside class="admin-sidebar">
        <div class="sidebar-brand">
            <h2>MOBEL<span>MOR</span></h2>
            <span class="badge">PANEL</span>
        </div>
        <ul class="sidebar-menu">
            <li class="menu-label">Ana Menü</li>
            <li><a href="index.php" class="menu-link <?= $activePage === 'dashboard' ? 'active' : '' ?>"><i class="fa-solid fa-chart-pie"></i> Kontrol Paneli</a></li>
            
            <li class="menu-label">Katalog Yönetimi</li>
            <li><a href="products.php" class="menu-link <?= $activePage === 'products' ? 'active' : '' ?>"><i class="fa-solid fa-couch"></i> Tüm Ürünler (85)</a></li>
            <li><a href="product-edit.php" class="menu-link <?= $activePage === 'product_add' ? 'active' : '' ?>"><i class="fa-solid fa-plus-circle"></i> Yeni Ürün Ekle</a></li>
            <li><a href="sliders.php" class="menu-link <?= $activePage === 'sliders' ? 'active' : '' ?>"><i class="fa-solid fa-images"></i> Slider & Vitrin</a></li>
            
            <li class="menu-label">Satış & Müşteri</li>
            <li><a href="orders.php" class="menu-link <?= $activePage === 'orders' ? 'active' : '' ?>"><i class="fa-solid fa-bag-shopping"></i> Siparişler</a></li>
            
            <li class="menu-label">Sistem</li>
            <li><a href="settings.php" class="menu-link <?= $activePage === 'settings' ? 'active' : '' ?>"><i class="fa-solid fa-gear"></i> Mağaza Ayarları</a></li>
        </ul>
        <div class="sidebar-footer">
            <div class="user-info">
                <div class="user-avatar"><?= strtoupper(substr($currentUser['username'], 0, 1)) ?></div>
                <div class="user-meta">
                    <span><?= e($currentUser['username']) ?></span>
                    <small>Yönetici</small>
                </div>
            </div>
            <a href="logout.php" class="logout-btn" title="Çıkış Yap"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
        </div>
    </aside>

    <!-- Main Container -->
    <div class="admin-main">
        <header class="admin-topbar">
            <div class="topbar-left">
                <h1><?= e($adminTitle ?? 'Kontrol Paneli') ?></h1>
            </div>
            <div class="topbar-right">
                <a href="../index.php" target="_blank" class="btn-live-site">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> Canlı Mağazayı Aç
                </a>
            </div>
        </header>
        <main class="admin-content">
