<?php
require_once __DIR__ . '/auth.php';
$activePage = 'orders';
$adminTitle = 'Sipariş Yönetimi';

$db = getDB();
$message = '';

// Update Order Status
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['update_order_status'])) {
    $orderId = (int)$_POST['order_id'];
    $newStatus = trim($_POST['order_status']);
    
    $stmt = $db->prepare("UPDATE orders SET order_status = ? WHERE id = ?");
    $stmt->execute([$newStatus, $orderId]);
    $message = "Sipariş durumu başarıyla güncellendi.";
}

// Fetch orders
$orders = [];
try {
    $stmt = $db->query("SELECT * FROM orders ORDER BY id DESC");
    $orders = $stmt->fetchAll();
} catch (Exception $e) {}

include __DIR__ . '/header.php';
?>

<?php if (!empty($message)): ?>
    <div style="background: rgba(34, 197, 94, 0.2); border: 1px solid rgba(34, 197, 94, 0.4); color: #86efac; padding: 14px 20px; border-radius: 10px; margin-bottom: 24px;">
        <i class="fa-solid fa-circle-check"></i> <?= e($message) ?>
    </div>
<?php endif; ?>

<div class="table-card">
    <div class="table-responsive">
        <table>
            <thead>
                <tr>
                    <th>Sipariş No</th>
                    <th>Müşteri</th>
                    <th>İletişim</th>
                    <th>Şehir / İlçe</th>
                    <th>Toplam Tutar</th>
                    <th>Ödeme</th>
                    <th>Sipariş Durumu</th>
                </tr>
            </thead>
            <tbody>
                <?php if (empty($orders)): ?>
                    <tr>
                        <td colspan="7" style="text-align: center; padding: 50px 20px; color: #94a3b8;">
                            <i class="fa-solid fa-bag-shopping" style="font-size: 2rem; margin-bottom: 10px; display: block; color: #64748b;"></i>
                            Henüz kayıtlı bir sipariş bulunmamaktadır.
                        </td>
                    </tr>
                <?php else: ?>
                    <?php foreach ($orders as $ord): ?>
                        <tr>
                            <td><strong>#<?= e($ord['order_number']) ?></strong></td>
                            <td><?= e($ord['customer_name']) ?></td>
                            <td>
                                <span><?= e($ord['customer_phone']) ?></span><br>
                                <small style="color: #64748b;"><?= e($ord['customer_email']) ?></small>
                            </td>
                            <td><?= e($ord['city']) ?> / <?= e($ord['district']) ?></td>
                            <td><strong style="color: #38bdf8;"><?= formatPrice($ord['total_amount']) ?></strong></td>
                            <td><span class="badge-pill-status badge-active"><?= e($ord['payment_method']) ?></span></td>
                            <td>
                                <form method="POST" action="orders.php" style="display: flex; gap: 8px;">
                                    <input type="hidden" name="update_order_status" value="1">
                                    <input type="hidden" name="order_id" value="<?= $ord['id'] ?>">
                                    <select name="order_status" onchange="this.form.submit()" style="background: #1e293b; border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 6px 10px; border-radius: 6px; font-size: 0.85rem;">
                                        <option value="Yeni" <?= $ord['order_status'] === 'Yeni' ? 'selected' : '' ?>>Yeni Sipariş</option>
                                        <option value="Hazirlaniyor" <?= $ord['order_status'] === 'Hazirlaniyor' ? 'selected' : '' ?>>Hazırlanıyor</option>
                                        <option value="Kargoda" <?= $ord['order_status'] === 'Kargoda' ? 'selected' : '' ?>>Kargoda / Montajda</option>
                                        <option value="TeslimEdildi" <?= $ord['order_status'] === 'TeslimEdildi' ? 'selected' : '' ?>>Teslim Edildi</option>
                                        <option value="Iptal" <?= $ord['order_status'] === 'Iptal' ? 'selected' : '' ?>>İptal</option>
                                    </select>
                                </form>
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
