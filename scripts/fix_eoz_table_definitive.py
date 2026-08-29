import re

# =========================================================================
# 1. FIX EOZ98.HTML (ADMIN PANEL COUPON TABLE)
# =========================================================================
eoz_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\eoz98.html"
with open(eoz_path, "r", encoding="utf-8") as f:
    html = f.read()

coupon_js_functions = """
        // ==========================================
        // KUPON & İNDİRİM YÖNETİM MOTORU
        // ==========================================
        function getAdminCoupons() {
            let list = [];
            if (window.StoreService && typeof window.StoreService.getCoupons === 'function') {
                list = window.StoreService.getCoupons();
            }
            if (!list || !list.length) {
                try {
                    list = JSON.parse(localStorage.getItem('mobelmor_coupons') || '[]');
                } catch(e) {}
            }
            if (!list || !list.length) {
                list = [
                    { id: 1, code: 'MOBELMOR500', type: 'fixed', value: 500, minCart: 5000, isActive: true, description: 'Tüm siparişlerde geçerli 500 TL açılış indirimi', usageCount: 12 },
                    { id: 2, code: 'YAZ1000', type: 'fixed', value: 1000, minCart: 20000, isActive: true, description: '20.000 TL üzeri mobilya alımlarında 1.000 TL indirim', usageCount: 5 },
                    { id: 3, code: 'HOSGELDIN', type: 'fixed', value: 500, minCart: 3000, isActive: true, description: 'Yeni üyelere özel 500 TL hoş geldin kuponu', usageCount: 8 },
                    { id: 4, code: 'VIP10', type: 'percent', value: 10, minCart: 30000, isActive: true, description: '30.000 TL ve üzeri siparişlerde %10 VIP indirim', usageCount: 3 }
                ];
                if (window.StoreService && window.StoreService.saveCoupons) {
                    window.StoreService.saveCoupons(list);
                } else {
                    localStorage.setItem('mobelmor_coupons', JSON.stringify(list));
                }
            }
            return list;
        }

        window.renderCouponsTable = function() {
            const tbody = document.getElementById('couponsTableBody');
            if (!tbody) return;

            const q = (document.getElementById('couponSearchInput')?.value || '').trim().toUpperCase();
            let coupons = getAdminCoupons();

            if (q) {
                coupons = coupons.filter(c => c.code.toUpperCase().includes(q) || (c.description || '').toUpperCase().includes(q));
            }

            if (!coupons || coupons.length === 0) {
                tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 30px; color:#94a3b8;"><i class="fa-solid fa-ticket-simple" style="font-size:1.8rem; margin-bottom:8px; display:block;"></i>Henüz kupon bulunamadı.</td></tr>`;
                return;
            }

            tbody.innerHTML = coupons.map(c => {
                const discountText = c.type === 'percent' ? `%${c.value} İndirim` : `${(c.value).toLocaleString('tr-TR')} ₺ Sabit İndirim`;
                const minCartText = c.minCart > 0 ? `${(c.minCart).toLocaleString('tr-TR')} ₺` : 'Limitsiz';
                return `
                    <tr>
                        <td>
                            <div style="display:flex; align-items:center; gap:8px;">
                                <i class="fa-solid fa-ticket" style="color:#38bdf8; font-size:1.1rem;"></i>
                                <strong style="color:#fff; font-size:0.95rem; letter-spacing:0.5px;">${c.code}</strong>
                            </div>
                        </td>
                        <td><span style="background:rgba(56,189,248,0.15); color:#38bdf8; padding:4px 10px; border-radius:6px; font-weight:700; font-size:0.82rem;">${discountText}</span></td>
                        <td style="color:#cbd5e1; font-weight:600;">${minCartText}</td>
                        <td style="color:#94a3b8; font-size:0.84rem; max-width:220px;">${c.description || '-'}</td>
                        <td><span style="background:#0f172a; border:1px solid rgba(255,255,255,0.08); padding:3px 8px; border-radius:12px; font-size:0.78rem; font-weight:700; color:#38bdf8;">${c.usageCount || 0} Kez</span></td>
                        <td>
                            <label class="switch">
                                <input type="checkbox" ${c.isActive ? 'checked' : ''} onchange="toggleAdminCoupon(${c.id})">
                                <span class="slider"></span>
                            </label>
                        </td>
                        <td style="text-align: right;">
                            <div style="display:flex; gap:6px; justify-content:flex-end;">
                                <button onclick="openEditCouponModal(${c.id})" class="btn-action-primary" style="padding:6px 10px; font-size:0.8rem; background:#334155;" title="Düzenle">
                                    <i class="fa-solid fa-pen"></i>
                                </button>
                                <button onclick="deleteAdminCoupon(${c.id})" class="btn-action-primary" style="padding:6px 10px; font-size:0.8rem; background:#ef4444;" title="Sil">
                                    <i class="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                `;
            }).join('');
        };

        window.openAddCouponModal = function() {
            document.getElementById('couponModalTitle').innerHTML = '<i class="fa-solid fa-ticket" style="color: #38bdf8;"></i> Yeni Kupon Oluştur';
            document.getElementById('couponId').value = '';
            document.getElementById('couponCode').value = '';
            document.getElementById('couponType').value = 'fixed';
            document.getElementById('couponValue').value = '';
            document.getElementById('couponMinCart').value = '';
            document.getElementById('couponDescription').value = '';
            document.getElementById('couponIsActive').checked = true;
            const modal = document.getElementById('couponModal');
            if (modal) modal.style.display = 'flex';
        };

        window.openEditCouponModal = function(id) {
            let coupons = getAdminCoupons();
            const c = coupons.find(item => item.id == id);
            if (!c) return;

            document.getElementById('couponModalTitle').innerHTML = '<i class="fa-solid fa-pen-to-square" style="color: #38bdf8;"></i> Kuponu Düzenle';
            document.getElementById('couponId').value = c.id;
            document.getElementById('couponCode').value = c.code;
            document.getElementById('couponType').value = c.type || 'fixed';
            document.getElementById('couponValue').value = c.value;
            document.getElementById('couponMinCart').value = c.minCart || '';
            document.getElementById('couponDescription').value = c.description || '';
            document.getElementById('couponIsActive').checked = c.isActive !== false;
            const modal = document.getElementById('couponModal');
            if (modal) modal.style.display = 'flex';
        };

        window.closeCouponModal = function() {
            const modal = document.getElementById('couponModal');
            if (modal) modal.style.display = 'none';
        };

        window.handleCouponFormSubmit = function(e) {
            e.preventDefault();
            const id = document.getElementById('couponId').value;
            const code = document.getElementById('couponCode').value.trim().toUpperCase();
            const type = document.getElementById('couponType').value;
            const value = parseFloat(document.getElementById('couponValue').value) || 0;
            const minCart = parseFloat(document.getElementById('couponMinCart').value) || 0;
            const description = document.getElementById('couponDescription').value.trim();
            const isActive = document.getElementById('couponIsActive').checked;

            if (!code || value <= 0) {
                alert('Lütfen geçerli bir kupon kodu ve indirim tutarı giriniz.');
                return false;
            }

            if (window.StoreService && window.StoreService.addOrUpdateCoupon) {
                const res = window.StoreService.addOrUpdateCoupon({
                    id: id ? parseInt(id) : null,
                    code: code,
                    type: type,
                    value: value,
                    minCart: minCart,
                    description: description,
                    isActive: isActive
                });
                if (res.success) {
                    closeCouponModal();
                    renderCouponsTable();
                    alert('Kupon başarıyla kaydedildi!');
                } else {
                    alert(res.message || 'Kupon kaydedilemedi.');
                }
            } else {
                let coupons = getAdminCoupons();
                const newObj = {
                    id: id ? parseInt(id) : Date.now(),
                    code: code,
                    type: type,
                    value: value,
                    minCart: minCart,
                    description: description,
                    isActive: isActive,
                    usageCount: 0
                };
                const idx = coupons.findIndex(c => c.id == newObj.id || c.code === code);
                if (idx !== -1) coupons[idx] = newObj; else coupons.unshift(newObj);
                localStorage.setItem('mobelmor_coupons', JSON.stringify(coupons));
                closeCouponModal();
                renderCouponsTable();
                alert('Kupon kaydedildi!');
            }
            return false;
        };

        window.deleteAdminCoupon = function(id) {
            if (!confirm('Bu kuponu silmek istediğinize emin misiniz?')) return;
            if (window.StoreService && window.StoreService.deleteCoupon) {
                window.StoreService.deleteCoupon(id);
            } else {
                let coupons = getAdminCoupons();
                coupons = coupons.filter(c => c.id != id);
                localStorage.setItem('mobelmor_coupons', JSON.stringify(coupons));
            }
            renderCouponsTable();
        };

        window.toggleAdminCoupon = function(id) {
            if (window.StoreService && window.StoreService.toggleCouponActive) {
                window.StoreService.toggleCouponActive(id);
            } else {
                let coupons = getAdminCoupons();
                const item = coupons.find(c => c.id == id);
                if (item) item.isActive = !item.isActive;
                localStorage.setItem('mobelmor_coupons', JSON.stringify(coupons));
            }
            renderCouponsTable();
        };
"""

# Insert coupon_js_functions right after <script> in eoz98.html
html = re.sub(r"<script>\s*", "<script>\n" + coupon_js_functions + "\n", html, count=1)

with open(eoz_path, "w", encoding="utf-8") as f:
    f.write(html)

print("Injected coupon_js_functions into eoz98.html script block!")
