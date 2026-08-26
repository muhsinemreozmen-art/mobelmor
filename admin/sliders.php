<?php
require_once __DIR__ . '/auth.php';
$activePage = 'sliders';
$adminTitle = 'Slider ve Vitrin Yönetimi';

$db = getDB();
$message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['update_sliders'])) {
    foreach ($_POST['slider'] as $sId => $sData) {
        $stmt = $db->prepare("UPDATE sliders SET title = ?, subtitle = ?, badge = ?, button_text = ?, button_url = ?, is_active = ? WHERE id = ?");
        $stmt->execute([
            trim($sData['title']),
            trim($sData['subtitle']),
            trim($sData['badge']),
            trim($sData['button_text']),
            trim($sData['button_url']),
            isset($sData['is_active']) ? 1 : 0,
            (int)$sId
        ]);
    }
    $message = "Slider banner ayarları başarıyla kaydedildi!";
}

$stmtSliders = $db->query("SELECT * FROM sliders ORDER BY sort_order ASC");
$sliders = $stmtSliders->fetchAll();

include __DIR__ . '/header.php';
?>

<?php if (!empty($message)): ?>
    <div style="background: rgba(34, 197, 94, 0.2); border: 1px solid rgba(34, 197, 94, 0.4); color: #86efac; padding: 14px 20px; border-radius: 10px; margin-bottom: 24px;">
        <i class="fa-solid fa-circle-check"></i> <?= e($message) ?>
    </div>
<?php endif; ?>

<form method="POST" action="sliders.php">
    <input type="hidden" name="update_sliders" value="1">
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; margin-bottom: 30px;">
        <?php foreach ($sliders as $s): ?>
            <div class="table-card" style="padding: 20px;">
                <div style="height: 140px; border-radius: 8px; overflow: hidden; margin-bottom: 15px; background-size: cover; background-position: center; background-image: url('../<?= e($s['image_url']) ?>');">
                </div>

                <div style="margin-bottom: 12px;">
                    <label style="font-size: 0.75rem; color: #94a3b8; font-weight: 600; text-transform: uppercase;">Rozet / Etiket</label>
                    <input type="text" name="slider[<?= $s['id'] ?>][badge]" value="<?= e($s['badge']) ?>" style="width: 100%; background: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 8px 12px; border-radius: 6px; font-size: 0.85rem; margin-top: 4px;">
                </div>

                <div style="margin-bottom: 12px;">
                    <label style="font-size: 0.75rem; color: #94a3b8; font-weight: 600; text-transform: uppercase;">Ana Başlık</label>
                    <input type="text" name="slider[<?= $s['id'] ?>][title]" value="<?= e($s['title']) ?>" style="width: 100%; background: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 8px 12px; border-radius: 6px; font-size: 0.9rem; font-weight: 600; margin-top: 4px;">
                </div>

                <div style="margin-bottom: 12px;">
                    <label style="font-size: 0.75rem; color: #94a3b8; font-weight: 600; text-transform: uppercase;">Alt Başlık</label>
                    <input type="text" name="slider[<?= $s['id'] ?>][subtitle]" value="<?= e($s['subtitle']) ?>" style="width: 100%; background: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 8px 12px; border-radius: 6px; font-size: 0.85rem; margin-top: 4px;">
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
                    <div>
                        <label style="font-size: 0.75rem; color: #94a3b8; font-weight: 600; text-transform: uppercase;">Buton Yazısı</label>
                        <input type="text" name="slider[<?= $s['id'] ?>][button_text]" value="<?= e($s['button_text']) ?>" style="width: 100%; background: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 8px 12px; border-radius: 6px; font-size: 0.85rem; margin-top: 4px;">
                    </div>
                    <div>
                        <label style="font-size: 0.75rem; color: #94a3b8; font-weight: 600; text-transform: uppercase;">Buton Linki</label>
                        <input type="text" name="slider[<?= $s['id'] ?>][button_url]" value="<?= e($s['button_url']) ?>" style="width: 100%; background: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 8px 12px; border-radius: 6px; font-size: 0.85rem; margin-top: 4px;">
                    </div>
                </div>

                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; margin-top: 10px;">
                    <input type="checkbox" name="slider[<?= $s['id'] ?>][is_active]" value="1" <?= $s['is_active'] ? 'checked' : '' ?>>
                    <span style="font-size: 0.85rem; font-weight: 600; color: #cbd5e1;">Aktif Yayında</span>
                </label>
            </div>
        <?php endforeach; ?>
    </div>

    <button type="submit" class="btn-action-primary" style="padding: 14px 32px; font-size: 1rem;">
        <i class="fa-solid fa-floppy-disk"></i> Tüm Slider Ayarlarını Kaydet
    </button>
</form>

<?php
include __DIR__ . '/footer.php';
?>
