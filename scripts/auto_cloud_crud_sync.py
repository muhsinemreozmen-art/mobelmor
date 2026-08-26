import re

store_c = open('js/store-service.js', encoding='utf-8').read()

cloud_push_product = """
        _pushProductToCloud: function (productData) {
            if (!DEFAULT_CONFIG.supabaseUrl || !DEFAULT_CONFIG.supabaseKey) return;
            const payload = {
                id: parseInt(productData.id),
                title: productData.title,
                category: productData.category,
                price: parseFloat(productData.price),
                original_price: parseFloat(productData.originalPrice || productData.price),
                main_image: productData.image,
                gallery: Array.isArray(productData.gallery) ? productData.gallery : [productData.image],
                dimensions: productData.dimensions || '',
                material: productData.material || '',
                skeleton: productData.skeleton || '',
                sponge: productData.sponge || '',
                fabric: productData.fabric || '',
                is_active: productData.isActive !== false
            };

            fetch(`${DEFAULT_CONFIG.supabaseUrl}/rest/v1/products`, {
                method: 'POST',
                headers: {
                    'apikey': DEFAULT_CONFIG.supabaseKey,
                    'Authorization': `Bearer ${DEFAULT_CONFIG.supabaseKey}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'resolution=merge-duplicates'
                },
                body: JSON.stringify(payload)
            }).then(r => console.log('Supabase Product Synced:', productData.title))
              .catch(e => console.log('Supabase Product Sync Error:', e));
        },

        _deleteProductFromCloud: function (id) {
            if (!DEFAULT_CONFIG.supabaseUrl || !DEFAULT_CONFIG.supabaseKey) return;
            fetch(`${DEFAULT_CONFIG.supabaseUrl}/rest/v1/products?id=eq.${id}`, {
                method: 'DELETE',
                headers: {
                    'apikey': DEFAULT_CONFIG.supabaseKey,
                    'Authorization': `Bearer ${DEFAULT_CONFIG.supabaseKey}`
                }
            }).then(r => console.log('Supabase Product Deleted:', id))
              .catch(e => console.log('Supabase Product Delete Error:', e));
        },
"""

# Enhance saveProduct
store_c = re.sub(
    r'(localStorage\.setItem\(\'mobelmor_custom_products\', JSON\.stringify\(list\)\);)(\s*return productData;)',
    r'\1\n            this._pushProductToCloud(productData);\2',
    store_c
)

# Enhance deleteProduct
store_c = re.sub(
    r'(deleteProduct: function \(id\) \{[\s\S]*?localStorage\.setItem\(\'mobelmor_custom_products\', JSON\.stringify\(list\)\);)',
    r'\1\n            this._deleteProductFromCloud(id);',
    store_c
)

# Enhance updateProduct / toggleProductStatus
store_c = re.sub(
    r'(updateProduct: function \(id, data\) \{[\s\S]*?localStorage\.setItem\(\'mobelmor_custom_products\', JSON\.stringify\(list\)\);)',
    r'\1\n                this._pushProductToCloud(list[idx]);',
    store_c
)

store_c = store_c.replace("window.StoreService = {", "window.StoreService = {\n" + cloud_push_product)

open('js/store-service.js', 'w', encoding='utf-8').write(store_c)
print("Configured automatic cloud push on all Product CRUD actions in StoreService")
