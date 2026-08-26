import re

# 1. Update js/store-service.js to have addProduct, updateProduct, and robust saveProduct
store_c = open('js/store-service.js', encoding='utf-8').read()

aliases = """
        addProduct: function (productData) {
            return this.saveProduct(productData);
        },

        updateProduct: function (id, data) {
            let list = this.getProducts(true);
            const idx = list.findIndex(p => p.id === parseInt(id));
            if (idx !== -1) {
                list[idx] = { ...list[idx], ...data, id: parseInt(id) };
                localStorage.setItem('mobelmor_custom_products', JSON.stringify(list));
                this._pushProductToCloud(list[idx]);
                return list[idx];
            }
            return this.saveProduct({ ...data, id: parseInt(id) });
        },
"""

store_c = store_c.replace("saveProduct: function (productData) {", aliases + "\n        saveProduct: function (productData) {")
open('js/store-service.js', 'w', encoding='utf-8').write(store_c)
print("Added addProduct and updateProduct methods to StoreService")

# 2. Update eoz98.html modal submit handler to be bulletproof
eoz_c = open('eoz98.html', encoding='utf-8').read()

save_func = """
        // Bulletproof Save Product Modal Function
        window.saveProductModal = function(e) {
            if (e) {
                if (typeof e.preventDefault === 'function') e.preventDefault();
                if (typeof e.stopPropagation === 'function') e.stopPropagation();
            }

            const id = parseInt(document.getElementById('editProdId').value) || 0;
            const title = (document.getElementById('editProdTitle').value || '').trim();
            const price = parseFloat(document.getElementById('editProdPrice').value) || 0;

            if (!title) {
                alert("Lütfen ürün başlığı girin.");
                return false;
            }

            const mainImg = currentMainImage || currentModalImages[0] || "assets/minegolden_p1_1.webp";
            const galleryList = currentModalImages.length > 0 ? currentModalImages : [mainImg];

            const updatedData = {
                id: id,
                title: title,
                category: document.getElementById('editProdCategory').value || 'living',
                productType: document.getElementById('editProdType').value || 'Solo',
                price: price,
                originalPrice: parseFloat(document.getElementById('editProdOldPrice').value) || Math.round(price * 1.15),
                image: mainImg,
                gallery: galleryList,
                dimensions: (document.getElementById('editProdDimensions').value || '').trim(),
                skeleton: (document.getElementById('editProdSkeleton').value || '').trim(),
                sponge: (document.getElementById('editProdSponge').value || '').trim(),
                fabric: (document.getElementById('editProdFabric').value || '').trim(),
                warranty: (document.getElementById('editProdWarranty').value || '').trim(),
                material: (document.getElementById('editProdFabric').value || '').trim() || 'İnegöl Masif Ahşap & İthal Kumaş'
            };

            if (window.StoreService) {
                window.StoreService.saveProduct(updatedData);
            }

            closeProductModal();
            loadDashboardData();
            alert("✅ Ürün başarıyla kaydedildi ve buluta senkronize edildi!");
            return false;
        };
"""

# Replace button in productModal with direct onclick
eoz_c = eoz_c.replace(
    '<button type="submit" class="btn-action-primary"><i class="fa-solid fa-floppy-disk"></i> Değişiklikleri Kaydet</button>',
    '<button type="button" onclick="saveProductModal(event)" class="btn-action-primary"><i class="fa-solid fa-floppy-disk"></i> Değişiklikleri Kaydet</button>'
)

# Replace form submit listener with save_func
eoz_c = re.sub(
    r"// Form Submit[\s\S]*?document\.getElementById\('productForm'\)\.addEventListener\('submit', function \(e\) \{[\s\S]*?\}\);",
    save_func.strip(),
    eoz_c
)

open('eoz98.html', 'w', encoding='utf-8').write(eoz_c)
print("Updated eoz98.html with saveProductModal bulletproof handler")
