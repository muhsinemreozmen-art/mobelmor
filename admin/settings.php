<?php
require_once __DIR__ . '/auth.php';
$activePage = 'settings';
$adminTitle = 'Mağaza Ayarları';

$db = getDB();
$message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['save_settings'])) {
    foreach ($_POST['setting'] as $k => $v) {
        $stmt = $db->prepare("INSERT INTO settings (setting_key, setting_value) VALUES (?, ?) ON DUPLICATE KEY UPDATE setting_value = ?");
        try {
            $stmt->execute([$k, trim($v), trim($v)]);
        } catch (Exception $e) {
            // SQLite fallback
            $db->prepare("INSERT OR REPLACE INTO settings (setting_key, setting_value) VALUES (?, ?)")->execute([$k, trim($v)]);
        }
    }
    $message = "Mağaza ayarları başarıyla güncellendi!";
}

include __DIR__ . '/header.php';
?>

<?php if (!empty($message)): ?>
    <div style="background: rgba(34, 197, 94, 0.2); border: 1px solid rgba(34, 197, 94, 0.4); color: #86efac; padding: 14px 20px; border-radius: 10px; margin-bottom: 24px;">
        <i class="fa-solid fa-circle-check"></i> <?= e($message) ?>
    </div>
<?php endif; ?>

<div class="table-card" style="padding: 30px; max-width: 800px;">
    <form method="POST" action="settings.php">
        <input type="hidden" name="save_settings" value="1">

        <div style="margin-bottom: 20px;">
            <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #cbd5e1; margin-bottom: 8px;">Mağaza Başlığı (SEO Title)</label>
            <input type="text" name="setting[site_title]" value="<?= e(getSetting('site_title')) ?>" style="width: 100%; background: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 12px; border-radius: 8px; font-size: 0.95rem;">
        </div>

        <div style="margin-bottom: 20px;">
            <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #cbd5e1; margin-bottom: 8px;">Mağaza Açıklaması (Meta Description)</label>
            <textarea name="setting[site_description]" rows="3" style="width: 100%; background: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 12px; border-radius: 8px; font-size: 0.95rem;"><?= e(getSetting('site_description')) ?></textarea>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
            <div>
                <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #cbd5e1; margin-bottom: 8px;">Müşteri Hizmetleri Telefonu</label>
                <input type="text" name="setting[phone]" value="<?= e(getSetting('phone')) ?>" style="width: 100%; background: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 12px; border-radius: 8px; font-size: 0.95rem;">
            </div>
            <div>
                <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #cbd5e1; margin-bottom: 8px;">Destek E-Posta Adresi</label>
                <input type="email" name="setting[email]" value="<?= e(getSetting('email')) ?>" style="width: 100%; background: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 12px; border-radius: 8px; font-size: 0.95rem;">
            </div>
        </div>

        <div style="margin-bottom: 20px;">
            <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #cbd5e1; margin-bottom: 8px;">Mağaza / Showroom Adresi</label>
            <input type="text" name="setting[address]" value="<?= e(getSetting('address')) ?>" style="width: 100%; background: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 12px; border-radius: 8px; font-size: 0.95rem;">
        </div>

        <button type="submit" class="btn-action-primary" style="padding: 12px 30px; font-size: 1rem;">
            <i class="fa-solid fa-floppy-disk"></i> Ayarları Güncelle
        </button>
    </form>
</div>

<?php
include __DIR__ . '/footer.php';
?>
