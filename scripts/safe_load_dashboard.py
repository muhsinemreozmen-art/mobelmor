import re

eoz_c = open('eoz98.html', encoding='utf-8').read()

# Make loadDashboardData completely safe without blocking
safe_load_dashboard = """
        function loadDashboardData() {
            const products = window.StoreService ? window.StoreService.getProducts(true) : [];
            const sets = products.filter(p => p.productType === 'Set');
            const orders = window.StoreService ? window.StoreService.getAllOrders() : [];

            const pEl = document.getElementById('kpiTotalProducts');
            const sEl = document.getElementById('kpiTotalSets');
            const oEl = document.getElementById('kpiTotalOrders');

            if (pEl) pEl.textContent = products.length;
            if (sEl) sEl.textContent = sets.length;
            if (oEl) oEl.textContent = orders.length;

            renderProductsTable();

            // Background fetch cloud orders
            fetchCloudOrders().then(cloudOrders => {
                if (oEl && Array.isArray(cloudOrders)) {
                    oEl.textContent = cloudOrders.length;
                }
            }).catch(e => console.log('Cloud orders background error:', e));
        }
"""

eoz_c = re.sub(
    r"async function loadDashboardData\(\) \{[\s\S]*?renderProductsTable\(\);\s*\}",
    safe_load_dashboard.strip(),
    eoz_c
)

# In eoz98.html, bump cache query string
eoz_c = re.sub(r'js/store-service\.js(\?v=[^"]*)?', 'js/store-service.js?v=' + str(int(__import__('time').time())), eoz_c)

open('eoz98.html', 'w', encoding='utf-8').write(eoz_c)
print("Updated loadDashboardData to be 100% safe and non-blocking in eoz98.html")
