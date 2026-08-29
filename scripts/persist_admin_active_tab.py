import re

eoz_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\eoz98.html"
with open(eoz_path, "r", encoding="utf-8") as f:
    eoz_code = f.read()

# 1. Update switchAdminTab to persist active tab
old_switch = """        function switchAdminTab(tab, evt) {
            document.querySelectorAll('.sidebar-menu .menu-btn').forEach(btn => btn.classList.remove('active'));
            const targetBtn = evt ? (evt.target.closest('.menu-btn') || evt.target) : (window.event ? (window.event.target.closest('.menu-btn') || window.event.target) : null);
            if (targetBtn) {
                targetBtn.classList.add('active');
            } else {
                const btn = document.querySelector(`.sidebar-menu .menu-btn[onclick*="${tab}"]`);
                if (btn) btn.classList.add('active');
            }

            const tabProducts = document.getElementById('tabProducts');
            const tabOrders = document.getElementById('tabOrders');
            const tabCustomers = document.getElementById('tabCustomers');
            const tabCoupons = document.getElementById('tabCoupons');
            const tabSync = document.getElementById('tabSync');

            if (tabProducts) tabProducts.style.display = tab === 'products' ? 'block' : 'none';
            if (tabOrders) tabOrders.style.display = tab === 'orders' ? 'block' : 'none';
            if (tabCustomers) tabCustomers.style.display = tab === 'customers' ? 'block' : 'none';
            if (tabCoupons) tabCoupons.style.display = tab === 'coupons' ? 'block' : 'none';
            if (tabSync) tabSync.style.display = tab === 'sync' ? 'block' : 'none';

            if (tab === 'orders') renderOrdersTable();
            if (tab === 'customers') renderCustomersTable();
            if (tab === 'products') renderProductsTable();
            if (tab === 'coupons') renderCouponsTable();

            // Refresh KPI customer counter
            const customers = window.StoreService ? window.StoreService.getAllCustomers() : [];
            const cEl = document.getElementById('kpiTotalCustomers');
            if (cEl) cEl.textContent = customers.length;
        }"""

new_switch = """        function switchAdminTab(tab, evt) {
            if (!tab) tab = 'products';
            sessionStorage.setItem('mobelmor_admin_active_tab', tab);
            try {
                if (window.location.hash !== '#' + tab) {
                    history.replaceState(null, null, '#' + tab);
                }
            } catch(e) {}

            document.querySelectorAll('.sidebar-menu .menu-btn').forEach(btn => btn.classList.remove('active'));
            const targetBtn = evt ? (evt.target.closest('.menu-btn') || evt.target) : (window.event ? (window.event.target.closest('.menu-btn') || window.event.target) : null);
            if (targetBtn) {
                targetBtn.classList.add('active');
            } else {
                const btn = document.querySelector(`.sidebar-menu .menu-btn[onclick*="${tab}"]`);
                if (btn) btn.classList.add('active');
            }

            const tabProducts = document.getElementById('tabProducts');
            const tabOrders = document.getElementById('tabOrders');
            const tabCustomers = document.getElementById('tabCustomers');
            const tabCoupons = document.getElementById('tabCoupons');
            const tabSync = document.getElementById('tabSync');

            if (tabProducts) tabProducts.style.display = tab === 'products' ? 'block' : 'none';
            if (tabOrders) tabOrders.style.display = tab === 'orders' ? 'block' : 'none';
            if (tabCustomers) tabCustomers.style.display = tab === 'customers' ? 'block' : 'none';
            if (tabCoupons) tabCoupons.style.display = tab === 'coupons' ? 'block' : 'none';
            if (tabSync) tabSync.style.display = tab === 'sync' ? 'block' : 'none';

            if (tab === 'orders') renderOrdersTable();
            if (tab === 'customers') renderCustomersTable();
            if (tab === 'products') renderProductsTable();
            if (tab === 'coupons') renderCouponsTable();

            // Refresh KPI customer counter
            const customers = window.StoreService ? window.StoreService.getAllCustomers() : [];
            const cEl = document.getElementById('kpiTotalCustomers');
            if (cEl) cEl.textContent = customers.length;
        }"""

eoz_code = re.sub(
    r"function switchAdminTab\(tab, evt\) \{[\s\S]*?if \(cEl\) cEl\.textContent = customers\.length;\s*\}",
    new_switch,
    eoz_code
)

# 2. Update loadDashboardData to switch to saved active tab
old_load = """            renderProductsTable();
            renderCustomersTable();"""

new_load = """            const currentTab = (window.location.hash || '').replace('#', '') || sessionStorage.getItem('mobelmor_admin_active_tab') || 'products';
            switchAdminTab(currentTab);"""

if old_load in eoz_code:
    eoz_code = eoz_code.replace(old_load, new_load, 1)

with open(eoz_path, "w", encoding="utf-8") as f:
    f.write(eoz_code)

print("Added active tab persistence to eoz98.html!")
