<?php
require_once __DIR__ . '/auth.php';
$activePage = 'dashboard';
$adminTitle = 'Kontrol Paneli';

$db = getDB();

// 1. KPI Counts
$totalProducts = $db->query("SELECT COUNT(*) FROM products")->fetchColumn();
$totalSets     = $db->query("SELECT COUNT(*) FROM products WHERE product_type = 'Set'")->fetchColumn();
$totalSolos    = $db->query("SELECT COUNT(*) FROM products WHERE product_type = 'Solo'")->fetchColumn();
$totalSliders  = $db->query("SELECT COUNT(*) FROM sliders WHERE is_active = 1")->fetchColumn();
$totalOrders   = 0;
try {
    $totalOrders = $db->query("SELECT COUNT(*) FROM orders")->fetchColumn();
} catch (Exception $e) {}

// 2. Recent Products
$stmtRecent = $db->query("SELECT * FROM products ORDER BY id DESC LIMIT 6");
$recentProducts = $stmtRecent->fetchAll();

include __DIR__ . '/header.php';
?>

<!-- KPI Stat Cards Grid -->
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-bottom: 30px;">
    <div style="background: #0f172a; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 20px; display: flex; align-items: center; gap: 16px;">
        <div style="width: 50px; height: 50px; border-radius: 10px; background: rgba(56, 189, 248, 0.15); color: #38bdf8; display: flex; align-items: center; justify-content: center; font-size: 1.4rem;">
            <i class="fa-solid fa-couch"></i>
        </div>
        <div>
            <span style="font-size: 0.8rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Toplam Ürün</span>
            <h2 style="font-size: 1.6rem; font-weight: 800; color: #f8fafc; margin-top: 4px;"><?= $totalProducts ?></h2>
        </div>
    </div>

    <div style="background: #0f172a; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 20px; display: flex; align-items: center; gap: 16px;">
        <div style="width: 50px; height: 50px; border-radius: 10px; background: rgba(168, 85, 247, 0.15); color: #c084fc; display: flex; align-items: center; justify-content: center; font-size: 1.4rem;">
            <i class="fa-solid fa-layer-group"></i>
        </div>
        <div>
            <span style="font-size: 0.8rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Tam Takımlar</span>
            <h2 style="font-size: 1.6rem; font-weight: 800; color: #f8fafc; margin-top: 4px;"><?= $totalSets ?></h2>
        </div>
    </div>

    <div style="background: #0f172a; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 20px; display: flex; align-items: center; gap: 16px;">
        <div style="width: 50px; height: 50px; border-radius: 10px; background: rgba(34, 197, 94, 0.15); color: #4ade80; display: flex; align-items: center; justify-content: center; font-size: 1.4rem;">
            <i class="fa-solid fa-chair"></i>
        </div>
        <div>
            <span style="font-size: 0.8rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Tekil Parçalar</span>
            <h2 style="font-size: 1.6rem; font-weight: 800; color: #f8fafc; margin-top: 4px;"><?= $totalSolos ?></h2>
        </div>
    </div>

    <div style="background: #0f172a; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 20px; display: flex; align-items: center; gap: 16px;">
        <div style="width: 50px; height: 50px; border-radius: 10px; background: rgba(251, 191, 36, 0.15); color: #fbbf24; display: flex; align-items: center; justify-content: center; font-size: 1.4rem;">
            <i class="fa-solid fa-bag-shopping"></i>
        </div>
        <div>
            <span style="font-size: 0.8rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Siparişler</span>
            <h2 style="font-size: 1.6rem; font-weight: 800; color: #f8fafc; margin-top: 4px;"><?= $totalOrders ?></h2>
        </div>
    </div>
</div>

<!-- Quick Action & Recent Products -->
<div class="table-card">
    <div style="padding: 20px; border-bottom: 1px solid rgba(255,255,255,0.08); display: flex; justify-content: space-between; align-items: center;">
        <h3 style="font-size: 1.1rem; font-weight: 700;">Son Eklenen Ürünler</h3>
        <a href="product-edit.php" class="btn-action-primary"><i class="fa-solid fa-plus"></i> Yeni Ürün Ekle</a>
    </div>
    <div class="table-responsive">
        <table>
            <thead>
                <tr>
                    <th>Görsel</th>
                    <th>Ürün Adı</th>
                    <th>Kategori</th>
                    <th>Tip</th>
                    <th>Fiyat</th>
                    <th>Durum</th>
                    <th>İşlem</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($recentProducts as $p): ?>
                    <tr>
                        <td><img src="../<?= e($p['main_image']) ?>" class="prod-thumb" alt=""></td>
                        <td><strong><?= e($p['title']) ?></strong></td>
                        <td><?= e(ucfirst($p['category_slug'])) ?></td>
                        <td>
                            <span class="badge-pill-status <?= $p['product_type'] === 'Set' ? 'badge-set' : 'badge-solo' ?>">
                                <?= $p['product_type'] === 'Set' ? 'TAKIM' : 'TEKİL' ?>
                            </span>
                        </td>
                        <td><strong><?= formatPrice($p['price']) ?></strong></td>
                        <td><span class="badge-pill-status badge-active">Yayında</span></td>
                        <td>
                            <a href="product-edit.php?id=<?= $p['id'] ?>" style="color: #38bdf8; text-decoration: none; margin-right: 12px;"><i class="fa-solid fa-pen-to-square"></i> Düzenle</a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</div>

<?php
include __DIR__ . '/footer.php';
?>
