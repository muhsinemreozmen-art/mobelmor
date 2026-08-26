<?php
require_once __DIR__ . '/auth.php';
$activePage = 'products';

$db = getDB();
$pid = isset($_GET['id']) ? (int)$_GET['id'] : 0;
$product = null;
$gallery = [];
$message = '';
$error = '';

if ($pid > 0) {
    $stmt = $db->prepare("SELECT * FROM products WHERE id = ? LIMIT 1");
    $stmt->execute([$pid]);
    $product = $stmt->fetch();
    
    if ($product) {
        $stmtImg = $db->prepare("SELECT image_url FROM product_images WHERE product_id = ? ORDER BY sort_order ASC");
        $stmtImg->execute([$pid]);
        $gallery = $stmtImg->fetchAll(PDO::FETCH_COLUMN);
    }
}

$isEdit = !empty($product);
$adminTitle = $isEdit ? "Ürün Düzenle: " . $product['title'] : "Yeni Ürün Ekle";

// Handle Form Submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title       = trim($_POST['title'] ?? '');
    $catSlug     = trim($_POST['category_slug'] ?? 'living');
    $subcatSlug  = trim($_POST['subcategory_slug'] ?? '');
    $productType = trim($_POST['product_type'] ?? 'Solo');
    $price       = (float)($_POST['price'] ?? 0);
    $oldPrice    = (float)($_POST['old_price'] ?? 0);
    $mainImage   = trim($_POST['main_image'] ?? '');
    $material    = trim($_POST['material'] ?? '');
    $desc        = trim($_POST['description'] ?? '');
    $specUretim  = trim($_POST['spec_uretim'] ?? 'İnegöl / Bursa');
    $specIskelet = trim($_POST['spec_iskelet'] ?? 'Fırınlanmış Gürgen Masif Ağaç');
    $specGaranti = trim($_POST['spec_garanti'] ?? '2 Yıl Üretici Garantisi');
    $specKargo   = trim($_POST['spec_kargo'] ?? 'Tüm Türkiye Ücretsiz Teslimat');
    $isFeatured  = isset($_POST['is_featured']) ? 1 : 0;
    $isActive    = isset($_POST['is_active']) ? 1 : 0;
    $galleryText = trim($_POST['gallery_urls'] ?? '');

    if (!empty($title) && !empty($mainImage) && $price > 0) {
        $slug = cleanSlug($title) . '-' . ($isEdit ? $pid : time());

        if ($isEdit) {
            // Update Existing Product
            $stmtUp = $db->prepare("UPDATE products SET title = ?, slug = ?, category_slug = ?, subcategory_slug = ?, product_type = ?, price = ?, old_price = ?, main_image = ?, material = ?, description = ?, spec_uretim = ?, spec_iskelet = ?, spec_garanti = ?, spec_kargo = ?, is_featured = ?, is_active = ? WHERE id = ?");
            $stmtUp->execute([$title, $slug, $catSlug, $subcatSlug, $productType, $price, $oldPrice, $mainImage, $material, $desc, $specUretim, $specIskelet, $specGaranti, $specKargo, $isFeatured, $isActive, $pid]);
            $targetId = $pid;
            $message = "Ürün bilgileri başarıyla güncellendi!";
        } else {
            // Insert New Product
            $stmtIn = $db->prepare("INSERT INTO products (title, slug, category_slug, subcategory_slug, product_type, price, old_price, main_image, material, description, spec_uretim, spec_iskelet, spec_garanti, spec_kargo, is_featured, is_active) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
            $stmtIn->execute([$title, $slug, $catSlug, $subcatSlug, $productType, $price, $oldPrice, $mainImage, $material, $desc, $specUretim, $specIskelet, $specGaranti, $specKargo, $isFeatured, $isActive]);
            $targetId = $db->lastInsertId();
            $message = "Yeni ürün başarıyla eklendi!";
        }

        // Update Gallery Images
        $db->prepare("DELETE FROM product_images WHERE product_id = ?")->execute([$targetId]);
        $newGalleryList = array_filter(array_map('trim', explode("\n", $galleryText)));
        if (!in_array($mainImage, $newGalleryList)) {
            array_unshift($newGalleryList, $mainImage);
        }
        foreach ($newGalleryList as $sortIdx => $imgUrl) {
            if (!empty($imgUrl)) {
                $db->prepare("INSERT INTO product_images (product_id, image_url, sort_order, is_main) VALUES (?, ?, ?, ?)")->execute([$targetId, $imgUrl, $sortIdx, $sortIdx === 0 ? 1 : 0]);
            }
        }

        // Refresh local product state
        if (!$isEdit) {
            header("Location: product-edit.php?id=$targetId&msg=created");
            exit;
        } else {
            $gallery = $newGalleryList;
        }
    } else {
        $error = "Lütfen ürün başlığı, fiyat ve ana görsel alanlarını eksiksiz doldurun.";
    }
}

include __DIR__ . '/header.php';
?>

<?php if (!empty($message)): ?>
    <div style="background: rgba(34, 197, 94, 0.2); border: 1px solid rgba(34, 197, 94, 0.4); color: #86efac; padding: 14px 20px; border-radius: 10px; margin-bottom: 24px;">
        <i class="fa-solid fa-circle-check"></i> <?= e($message) ?>
    </div>
<?php endif; ?>

<?php if (!empty($error)): ?>
    <div style="background: rgba(239, 68, 68, 0.2); border: 1px solid rgba(239, 68, 68, 0.4); color: #fca5a5; padding: 14px 20px; border-radius: 10px; margin-bottom: 24px;">
        <i class="fa-solid fa-triangle-exclamation"></i> <?= e($error) ?>
    </div>
<?php endif; ?>

<div class="table-card" style="padding: 30px;">
    <form method="POST" action="product-edit.php<?= $isEdit ? '?id=' . $product['id'] : '' ?>">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
            
            <!-- Left Column: Core Data -->
            <div>
                <div style="margin-bottom: 20px;">
                    <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #cbd5e1; margin-bottom: 8px;">Ürün Başlığı *</label>
                    <input type="text" name="title" value="<?= e($product['title'] ?? '') ?>" required style="width: 100%; background: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 12px; border-radius: 8px; font-size: 0.95rem;">
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                    <div>
                        <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #cbd5e1; margin-bottom: 8px;">Kategori *</label>
                        <select name="category_slug" style="width: 100%; background: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 12px; border-radius: 8px; font-size: 0.95rem;">
                            <option value="living" <?= ($product['category_slug'] ?? '') === 'living' ? 'selected' : '' ?>>Oturma Odası</option>
                            <option value="dining" <?= ($product['category_slug'] ?? '') === 'dining' ? 'selected' : '' ?>>Yemek Odası</option>
                            <option value="bedroom" <?= ($product['category_slug'] ?? '') === 'bedroom' ? 'selected' : '' ?>>Yatak Odası</option>
                            <option value="tv-unit" <?= ($product['category_slug'] ?? '') === 'tv-unit' ? 'selected' : '' ?>>TV Üniteleri</option>
                            <option value="accessory" <?= ($product['category_slug'] ?? '') === 'accessory' ? 'selected' : '' ?>>Aksesuar</option>
                        </select>
                    </div>
                    <div>
                        <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #cbd5e1; margin-bottom: 8px;">Ürün Tipi *</label>
                        <select name="product_type" style="width: 100%; background: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 12px; border-radius: 8px; font-size: 0.95rem;">
                            <option value="Set" <?= ($product['product_type'] ?? '') === 'Set' ? 'selected' : '' ?>>Tam Takım (Set)</option>
                            <option value="Solo" <?= ($product['product_type'] ?? '') === 'Solo' ? 'selected' : '' ?>>Tekil Parça (Solo)</option>
                        </select>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                    <div>
                        <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #cbd5e1; margin-bottom: 8px;">Satış Fiyatı (₺) *</label>
                        <input type="number" step="100" name="price" value="<?= e($product['price'] ?? 0) ?>" required style="width: 100%; background: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #38bdf8; font-weight: 700; padding: 12px; border-radius: 8px; font-size: 1rem;">
                    </div>
                    <div>
                        <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #cbd5e1; margin-bottom: 8px;">Liste / Eski Fiyat (₺)</label>
                        <input type="number" step="100" name="old_price" value="<?= e($product['old_price'] ?? 0) ?>" style="width: 100%; background: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #94a3b8; padding: 12px; border-radius: 8px; font-size: 1rem;">
                    </div>
                </div>

                <div style="margin-bottom: 20px;">
                    <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #cbd5e1; margin-bottom: 8px;">Malzeme & Kumaş Bilgisi</label>
                    <input type="text" name="material" value="<?= e($product['material'] ?? 'İnegöl Üretimi Masif Ağaç & İthal Lüks Kaplama') ?>" style="width: 100%; background: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 12px; border-radius: 8px; font-size: 0.95rem;">
                </div>

                <div style="margin-bottom: 20px;">
                    <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #cbd5e1; margin-bottom: 8px;">Açıklama</label>
                    <textarea name="description" rows="4" style="width: 100%; background: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 12px; border-radius: 8px; font-size: 0.95rem;"><?= e($product['description'] ?? '') ?></textarea>
                </div>
            </div>

            <!-- Right Column: Images & Specs -->
            <div>
                <div style="margin-bottom: 20px;">
                    <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #cbd5e1; margin-bottom: 8px;">Ana Görsel Dosya Yolu *</label>
                    <input type="text" name="main_image" value="<?= e($product['main_image'] ?? '') ?>" placeholder="assets/minegolden_p1_2.webp" required style="width: 100%; background: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 12px; border-radius: 8px; font-size: 0.95rem;">
                </div>

                <div style="margin-bottom: 20px;">
                    <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #cbd5e1; margin-bottom: 8px;">Galeri Fotoğrafları (Her satıra bir görsel)</label>
                    <textarea name="gallery_urls" rows="6" placeholder="assets/minegolden_p1_2.webp&#10;assets/minegolden_p1_1.webp" style="width: 100%; background: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 12px; border-radius: 8px; font-size: 0.9rem;"><?= e(implode("\n", $gallery)) ?></textarea>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                    <div>
                        <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #cbd5e1; margin-bottom: 8px;">İskelet</label>
                        <input type="text" name="spec_iskelet" value="<?= e($product['spec_iskelet'] ?? 'Fırınlanmış Gürgen Masif Ağaç') ?>" style="width: 100%; background: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 12px; border-radius: 8px; font-size: 0.9rem;">
                    </div>
                    <div>
                        <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #cbd5e1; margin-bottom: 8px;">Garanti</label>
                        <input type="text" name="spec_garanti" value="<?= e($product['spec_garanti'] ?? '2 Yıl Üretici Garantisi') ?>" style="width: 100%; background: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 12px; border-radius: 8px; font-size: 0.9rem;">
                    </div>
                </div>

                <div style="background: rgba(255,255,255,0.03); padding: 16px; border-radius: 8px; display: flex; gap: 24px; margin-bottom: 20px;">
                    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                        <input type="checkbox" name="is_featured" value="1" <?= (!empty($product['is_featured'])) ? 'checked' : '' ?>>
                        <span style="font-size: 0.9rem; font-weight: 600;">Vitrin / Öne Çıkan</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                        <input type="checkbox" name="is_active" value="1" <?= (!isset($product['is_active']) || !empty($product['is_active'])) ? 'checked' : '' ?>>
                        <span style="font-size: 0.9rem; font-weight: 600;">Satışa Açık (Aktif)</span>
                    </label>
                </div>
            </div>
        </div>

        <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.08); display: flex; justify-content: flex-end; gap: 15px;">
            <a href="products.php" style="background: rgba(255,255,255,0.08); color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">İptal</a>
            <button type="submit" class="btn-action-primary" style="padding: 12px 30px; font-size: 1rem;">
                <i class="fa-solid fa-floppy-disk"></i> <?= $isEdit ? 'Değişiklikleri Kaydet' : 'Ürünü Yayınla' ?>
            </button>
        </div>
    </form>
</div>

<?php
include __DIR__ . '/footer.php';
?>
