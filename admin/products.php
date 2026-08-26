<?php
require_once __DIR__ . '/auth.php';
$activePage = 'products';
$adminTitle = 'Ürün Yönetimi';

$db = getDB();

// Delete Action
if (isset($_GET['action']) && $_GET['action'] === 'delete' && isset($_GET['id'])) {
    $delId = (int)$_GET['id'];
    $db->prepare("DELETE FROM products WHERE id = ?")->execute([$delId]);
    header("Location: products.php?msg=deleted");
    exit;
}

// Search & Filter
$search = trim($_GET['q'] ?? '');
$filterCat = trim($_GET['cat'] ?? '');
$filterType = trim($_GET['type'] ?? '');

$sql = "SELECT * FROM products WHERE 1=1";
$params = [];

if (!empty($search)) {
    $sql .= " AND (title LIKE ? OR description LIKE ?)";
    $params[] = "%$search%";
    $params[] = "%$search%";
}

if (!empty($filterCat)) {
    $sql .= " AND category_slug = ?";
    $params[] = $filterCat;
}

if (!empty($filterType)) {
    $sql .= " AND product_type = ?";
    $params[] = $filterType;
}

$sql .= " ORDER BY id ASC";

$stmt = $db->prepare($sql);
$stmt->execute($params);
$products = $stmt->fetchAll();

include __DIR__ . '/header.php';
?>

<!-- Filter & Search Bar -->
<div style="background: #0f172a; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 20px; margin-bottom: 24px; display: flex; flex-wrap: wrap; gap: 15px; justify-content: space-between; align-items: center;">
    <form method="GET" action="products.php" style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; flex: 1;">
        <input type="text" name="q" value="<?= e($search) ?>" placeholder="Ürün adı ile ara..." style="background: rgba(15,23,42,0.6); border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 10px 14px; border-radius: 8px; font-size: 0.9rem; min-width: 220px;">
        
        <select name="cat" style="background: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 10px 14px; border-radius: 8px; font-size: 0.9rem;">
            <option value="">Tüm Kategoriler</option>
            <option value="living" <?= $filterCat === 'living' ? 'selected' : '' ?>>Oturma Odası</option>
            <option value="dining" <?= $filterCat === 'dining' ? 'selected' : '' ?>>Yemek Odası</option>
            <option value="bedroom" <?= $filterCat === 'bedroom' ? 'selected' : '' ?>>Yatak Odası</option>
            <option value="tv-unit" <?= $filterCat === 'tv-unit' ? 'selected' : '' ?>>TV Üniteleri</option>
        </select>

        <select name="type" style="background: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 10px 14px; border-radius: 8px; font-size: 0.9rem;">
            <option value="">Tüm Tipler</option>
            <option value="Set" <?= $filterType === 'Set' ? 'selected' : '' ?>>Tam Takımlar</option>
            <option value="Solo" <?= $filterType === 'Solo' ? 'selected' : '' ?>>Tekil Parçalar</option>
        </select>

        <button type="submit" class="btn-action-primary" style="padding: 10px 16px;"><i class="fa-solid fa-filter"></i> Filtrele</button>
        <?php if (!empty($search) || !empty($filterCat) || !empty($filterType)): ?>
            <a href="products.php" style="color: #94a3b8; font-size: 0.85rem; text-decoration: none;"><i class="fa-solid fa-xmark"></i> Temizle</a>
        <?php endif; ?>
    </form>

    <a href="product-edit.php" class="btn-action-primary"><i class="fa-solid fa-plus"></i> Yeni Ürün Ekle</a>
</div>

<!-- Products Table -->
<div class="table-card">
    <div class="table-responsive">
        <table>
            <thead>
                <tr>
                    <th style="width: 50px;">ID</th>
                    <th style="width: 60px;">Görsel</th>
                    <th>Ürün Başlığı</th>
                    <th>Kategori</th>
                    <th>Ürün Tipi</th>
                    <th>Fiyat</th>
                    <th>Durum</th>
                    <th style="text-align: right;">İşlemler</th>
                </tr>
            </thead>
            <tbody>
                <?php if (empty($products)): ?>
                    <tr>
                        <td colspan="8" style="text-align: center; padding: 40px; color: #94a3b8;">
                            Kriterlere uygun ürün bulunamadı.
                        </td>
                    </tr>
                <?php else: ?>
                    <?php foreach ($products as $p): ?>
                        <tr>
                            <td>#<?= $p['id'] ?></td>
                            <td><img src="../<?= e($p['main_image']) ?>" class="prod-thumb" alt=""></td>
                            <td><strong><?= e($p['title']) ?></strong></td>
                            <td><?= e(ucfirst($p['category_slug'])) ?></td>
                            <td>
                                <span class="badge-pill-status <?= $p['product_type'] === 'Set' ? 'badge-set' : 'badge-solo' ?>">
                                    <?= $p['product_type'] === 'Set' ? 'TAM TAKIM' : 'TEKİL PARÇA' ?>
                                </span>
                            </td>
                            <td><strong style="color: #38bdf8;"><?= formatPrice($p['price']) ?></strong></td>
                            <td>
                                <span class="badge-pill-status <?= $p['is_active'] ? 'badge-active' : 'badge-inactive' ?>">
                                    <?= $p['is_active'] ? 'Yayında' : 'Pasif' ?>
                                </span>
                            </td>
                            <td style="text-align: right;">
                                <a href="../<?= getProductUrl($p['id'], $p['title']) ?>" target="_blank" style="color: #94a3b8; margin-right: 12px;" title="Sitede Gör"><i class="fa-solid fa-eye"></i></a>
                                <a href="product-edit.php?id=<?= $p['id'] ?>" style="color: #38bdf8; margin-right: 12px;" title="Düzenle"><i class="fa-solid fa-pen-to-square"></i></a>
                                <a href="products.php?action=delete&id=<?= $p['id'] ?>" onclick="return confirm('Bu ürünü silmek istediğinize emin misiniz?');" style="color: #ef4444;" title="Sil"><i class="fa-solid fa-trash"></i></a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
</div>

<?php
include __DIR__ . '/footer.php';
?>
