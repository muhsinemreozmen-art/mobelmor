# Update js/store-service.js with sorting & detailed specs support
import re

c = open('js/store-service.js', encoding='utf-8').read()

# Add moveProduct and updateProduct functions to StoreService
helper_methods = """
        moveProduct: function (id, dir) {
            const products = this.getProducts(true);
            const idx = products.findIndex(p => p.id == id);
            if (idx === -1) return false;
            const targetIdx = idx + dir;
            if (targetIdx < 0 || targetIdx >= products.length) return false;

            const temp = products[idx];
            products[idx] = products[targetIdx];
            products[targetIdx] = temp;

            localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
            return true;
        },

        setProductSortOrder: function (id, order) {
            const products = this.getProducts(true);
            const idx = products.findIndex(p => p.id == id);
            if (idx === -1) return false;

            const item = products.splice(idx, 1)[0];
            const targetIdx = Math.max(0, Math.min(products.length, order - 1));
            products.splice(targetIdx, 0, item);

            localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
            return true;
        },
"""

c = c.replace("adminLogout: function () {", helper_methods + "\n        adminLogout: function () {")
open('js/store-service.js', 'w', encoding='utf-8').write(c)
print("Updated js/store-service.js with moveProduct and setProductSortOrder")
