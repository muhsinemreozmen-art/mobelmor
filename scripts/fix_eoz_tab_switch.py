import re

# 1. FIX eoz98.html switchAdminTab
eoz_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\eoz98.html"
with open(eoz_path, "r", encoding="utf-8") as f:
    eoz_code = f.read()

# Replace switchAdminTab in eoz98.html to properly handle 'coupons'
old_switch = """        function switchAdminTab(tab, evt) {
            document.querySelectorAll('.sidebar-menu .menu-btn').forEach(btn => btn.classList.remove('active'));
            const targetBtn = evt ? (evt.target.closest('.menu-btn') || evt.target) : (window.event ? (window.event.target.closest('.menu-btn') || window.event.target) : null);
            if (targetBtn) {
                targetBtn.classList.add('active');
            } else {
                const btn = document.querySelector(`.sidebar-menu .menu-btn[onclick*="${tab}"]`);
                if (btn) btn.classList.add('active');
            }

            document.getElementById('tabProducts').style.display = tab === 'products' ? 'block' : 'none';
            document.getElementById('tabOrders').style.display = tab === 'orders' ? 'block' : 'none';
            document.getElementById('tabCustomers').style.display = tab === 'customers' ? 'block' : 'none';
            document.getElementById('tabSync').style.display = tab === 'sync' ? 'block' : 'none';

            if (tab === 'orders') renderOrdersTable();
            if (tab === 'customers') renderCustomersTable();
            if (tab === 'products') renderProductsTable();"""

new_switch = """        function switchAdminTab(tab, evt) {
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
            if (tab === 'coupons') renderCouponsTable();"""

if old_switch in eoz_code:
    eoz_code = eoz_code.replace(old_switch, new_switch)
    with open(eoz_path, "w", encoding="utf-8") as f:
        f.write(eoz_code)
    print("Fixed switchAdminTab in eoz98.html to handle coupons!")
else:
    print("Old switch pattern not matched directly, applying regex replace")
    eoz_code = re.sub(
        r"function switchAdminTab\(tab, evt\) \{[\s\S]*?if \(tab === 'products'\) renderProductsTable\(\);",
        new_switch,
        eoz_code
    )
    with open(eoz_path, "w", encoding="utf-8") as f:
        f.write(eoz_code)
    print("Applied regex switchAdminTab fix to eoz98.html")
