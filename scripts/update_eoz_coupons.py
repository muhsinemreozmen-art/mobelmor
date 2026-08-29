import re

eoz_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\eoz98.html"

with open(eoz_path, "r", encoding="utf-8") as f:
    html = f.read()

# 1. Add Sidebar item if not present
old_sidebar_items = """                <li><button class="menu-btn" onclick="switchAdminTab('orders', event)"><i class="fa-solid fa-receipt"></i> Gelen Siparişler</button></li>"""
new_sidebar_items = """                <li><button class="menu-btn" onclick="switchAdminTab('orders', event)"><i class="fa-solid fa-receipt"></i> Gelen Siparişler</button></li>
                <li><button class="menu-btn" onclick="switchAdminTab('coupons', event)"><i class="fa-solid fa-ticket"></i> Kupon Yönetimi</button></li>"""

if 'switchAdminTab(\'coupons\'' not in html:
    html = html.replace(old_sidebar_items, new_sidebar_items, 1)

# 2. Add TAB 5: KUPON YÖNETİMİ HTML before Tab 4 (Sync) or after Tab 3 (Customers)
coupons_tab_html = """
            <!-- TAB 5: KUPON & İNDİRİM YÖNETİMİ -->
            <div id="tabCoupons" style="display: none;">
                <div class="content-card">
                    <div class="action-bar">
                        <div class="search-box">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" id="couponSearchInput" class="admin-input" placeholder="Kupon kodu veya açıklama ara..." oninput="renderCouponsTable()">
                        </div>

                        <div style="display: flex; gap: 10px;">
                            <button class="btn-action-primary" onclick="openAddCouponModal()">
                                <i class="fa-solid fa-plus"></i> Yeni Kupon Oluştur
                            </button>
                        </div>
                    </div>

                    <div class="table-responsive">
                        <table class="admin-table">
                            <thead>
                                <tr>
                                    <th>KUPON KODU</th>
                                    <th>İNDİRİM DEĞERİ</th>
                                    <th>MİN. SEPET TUTARI</th>
                                    <th>AÇIKLAMA</th>
                                    <th>KULLANIM</th>
                                    <th>DURUM</th>
                                    <th style="text-align: right;">İŞLEMLER</th>
                                </tr>
                            </thead>
                            <tbody id="couponsTableBody">
                                <!-- Dynamic rows -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
"""

if 'id="tabCoupons"' not in html:
    # Insert before <div id="tabSync"
    html = html.replace('<div id="tabSync"', coupons_tab_html + '\n            <div id="tabSync"', 1)

# 3. Add Coupon Modal HTML before </body>
coupon_modal_html = """
    <!-- KUPON EKLE / DÜZENLE MODAL -->
    <div id="couponModal" class="admin-modal" style="display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(8px); z-index: 1050; align-items: center; justify-content: center; padding: 20px;">
        <div class="modal-card" style="background: #1e293b; border: 1px solid rgba(255,255,255,0.1); border-radius: 18px; padding: 28px; width: 100%; max-width: 480px; box-shadow: 0 25px 50px rgba(0,0,0,0.6);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px;">
                <h3 id="couponModalTitle" style="color: #fff; font-size: 1.2rem; font-weight: 700;"><i class="fa-solid fa-ticket" style="color: #38bdf8;"></i> Yeni Kupon Oluştur</h3>
                <button onclick="closeCouponModal()" style="background: transparent; border: none; color: #94a3b8; font-size: 1.2rem; cursor: pointer;"><i class="fa-solid fa-xmark"></i></button>
            </div>

            <form id="couponForm" onsubmit="return handleCouponFormSubmit(event)">
                <input type="hidden" id="couponId" value="">

                <div class="form-group">
                    <label>Kupon Kodu *</label>
                    <input type="text" id="couponCode" class="admin-input" placeholder="Örn: MOBELMOR500" required style="text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                    <div class="form-group">
                        <label>İndirim Türü *</label>
                        <select id="couponType" class="admin-input" style="padding-left: 14px;">
                            <option value="fixed">Sabit Tutar (TL)</option>
                            <option value="percent">Yüzde (%)</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>İndirim Değeri *</label>
                        <input type="number" id="couponValue" class="admin-input" placeholder="500" min="1" step="any" required>
                    </div>
                </div>

                <div class="form-group">
                    <label>Minimum Sepet Tutarı (TL)</label>
                    <input type="number" id="couponMinCart" class="admin-input" placeholder="0 (Sınır yok)" min="0" step="any">
                </div>

                <div class="form-group">
                    <label>Kupon Açıklaması (Opsiyonel)</label>
                    <input type="text" id="couponDescription" class="admin-input" placeholder="Örn: 20.000 TL üzeri alımlarda 1.000 TL indirim">
                </div>

                <div class="form-group" style="display: flex; align-items: center; justify-content: space-between; margin-top: 10px; padding: 12px; background: rgba(15,23,42,0.6); border-radius: 10px;">
                    <span style="font-size: 0.9rem; font-weight: 600; color: #cbd5e1;">Kupon Aktif mi?</span>
                    <label class="switch">
                        <input type="checkbox" id="couponIsActive" checked>
                        <span class="slider"></span>
                    </label>
                </div>

                <div style="display: flex; gap: 10px; margin-top: 24px;">
                    <button type="button" onclick="closeCouponModal()" class="btn-action-primary" style="background: #334155; flex: 1; justify-content: center;">İptal</button>
                    <button type="submit" class="btn-action-primary" style="flex: 2; justify-content: center;"><i class="fa-solid fa-floppy-disk"></i> Kuponu Kaydet</button>
                </div>
            </form>
        </div>
    </div>
"""

if 'id="couponModal"' not in html:
    html = html.replace('</body>', coupon_modal_html + '\n</body>', 1)

# 4. Add switchAdminTab handler & Coupon CRUD methods in <script>
coupon_js_logic = """
        // ==========================================
        // KUPON & İNDİRİM YÖNETİMİ PANEL FONKSİYONLARI
        // ==========================================
        function renderCouponsTable() {
            const tbody = document.getElementById('couponsTableBody');
            if (!tbody) return;

            const q = (document.getElementById('couponSearchInput')?.value || '').trim().toUpperCase();
            let coupons = window.StoreService ? window.StoreService.getCoupons() : [];

            if (q) {
                coupons = coupons.filter(c => c.code.toUpperCase().includes(q) || (c.description || '').toUpperCase().includes(q));
            }

            if (coupons.length === 0) {
                tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 30px; color:#64748b;"><i class="fa-solid fa-ticket-simple" style="font-size:1.8rem; margin-bottom:8px; display:block;"></i>Kupon bulunamadı.</td></tr>`;
                return;
            }

            tbody.innerHTML = coupons.map(c => {
                const discountText = c.type === 'percent' ? `%${c.value} İndirim` : `${(c.value).toLocaleString('tr-TR')} ₺ Sabit İndirim`;
                const minCartText = c.minCart > 0 ? `${(c.minCart).toLocaleString('tr-TR')} ₺` : 'Yok (Limitsiz)';
                return `
                    <tr>
                        <td>
                            <div style="display:flex; align-items:center; gap:8px;">
                                <i class="fa-solid fa-ticket" style="color:#38bdf8;"></i>
                                <strong style="color:#fff; font-size:0.95rem; letter-spacing:0.5px;">${c.code}</strong>
                            </div>
                        </td>
                        <td><span style="background:rgba(56,189,248,0.15); color:#38bdf8; padding:4px 8px; border-radius:6px; font-weight:700; font-size:0.82rem;">${discountText}</span></td>
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
        }

        function openAddCouponModal() {
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
        }

        function openEditCouponModal(id) {
            const coupons = window.StoreService ? window.StoreService.getCoupons() : [];
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
        }

        function closeCouponModal() {
            const modal = document.getElementById('couponModal');
            if (modal) modal.style.display = 'none';
        }

        function handleCouponFormSubmit(e) {
            e.preventDefault();
            const id = document.getElementById('couponId').value;
            const code = document.getElementById('couponCode').value.trim().toUpperCase();
            const type = document.getElementById('couponType').value;
            const value = parseFloat(document.getElementById('couponValue').value) || 0;
            const minCart = parseFloat(document.getElementById('couponMinCart').value) || 0;
            const description = document.getElementById('couponDescription').value.trim();
            const isActive = document.getElementById('couponIsActive').checked;

            if (!code || value <= 0) {
                alert('Lütfen geçerli bir kupon kodu ve indirim değeri giriniz.');
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
                    alert('Kupon başarıyla kaydedildi ve tüm sitede aktif hale getirildi!');
                } else {
                    alert(res.message || 'Kupon kaydedilemedi.');
                }
            }
            return false;
        }

        function deleteAdminCoupon(id) {
            if (!confirm('Bu kuponu silmek istediğinize emin misiniz?')) return;
            if (window.StoreService && window.StoreService.deleteCoupon) {
                window.StoreService.deleteCoupon(id);
                renderCouponsTable();
            }
        }

        function toggleAdminCoupon(id) {
            if (window.StoreService && window.StoreService.toggleCouponActive) {
                window.StoreService.toggleCouponActive(id);
                renderCouponsTable();
            }
        }
"""

# Check switchAdminTab in eoz98.html and update it to handle 'coupons'
if 'tabCoupons' not in html or 'function renderCouponsTable' not in html:
    # Update switchAdminTab
    tab_cases = """            document.getElementById('tabProducts').style.display = tabName === 'products' ? 'block' : 'none';
            document.getElementById('tabOrders').style.display = tabName === 'orders' ? 'block' : 'none';
            document.getElementById('tabCustomers').style.display = tabName === 'customers' ? 'block' : 'none';
            document.getElementById('tabCoupons').style.display = tabName === 'coupons' ? 'block' : 'none';
            document.getElementById('tabSync').style.display = tabName === 'sync' ? 'block' : 'none';

            if (tabName === 'products') renderProductsTable();
            if (tabName === 'orders') renderOrdersTable();
            if (tabName === 'customers') renderCustomersTable();
            if (tabName === 'coupons') renderCouponsTable();"""

    html = re.sub(
        r"document\.getElementById\('tabProducts'\)\.style\.display = tabName === 'products' \? 'block' : 'none';[\s\S]*?if \(tabName === 'customers'\) renderCustomersTable\(\);",
        tab_cases,
        html
    )

    html = html.replace('// --- APP INITIALIZATION ---', coupon_js_logic + '\n        // --- APP INITIALIZATION ---')

with open(eoz_path, "w", encoding="utf-8") as f:
    f.write(html)

print("Successfully updated eoz98.html with Coupon Management Tab & CRUD functions!")
