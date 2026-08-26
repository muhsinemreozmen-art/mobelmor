import re

store_c = open('js/store-service.js', encoding='utf-8').read()

# Update DEFAULT_CONFIG
store_c = re.sub(
    r"const DEFAULT_CONFIG = \{[\s\S]*?\};",
    """const DEFAULT_CONFIG = {
        supabaseUrl: localStorage.getItem('mobelmor_supabase_url') || 'https://kzbqqollfqatrauacjhj.supabase.co',
        supabaseKey: localStorage.getItem('mobelmor_supabase_key') || 'sb_publishable_7cMrt7S85Iza4y7H01FghA_Le91PIhS',
        adminPasswordHash: 'admin123'
    };""",
    store_c
)

# Enhance saveOrder to push to Supabase in background
save_order_enhancement = """
            // Push order to Supabase Cloud
            if (DEFAULT_CONFIG.supabaseUrl && DEFAULT_CONFIG.supabaseKey) {
                fetch(`${DEFAULT_CONFIG.supabaseUrl}/rest/v1/orders`, {
                    method: 'POST',
                    headers: {
                        'apikey': DEFAULT_CONFIG.supabaseKey,
                        'Authorization': `Bearer ${DEFAULT_CONFIG.supabaseKey}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        order_number: newOrder.orderNumber,
                        customer_id: newOrder.customerId,
                        customer_name: newOrder.customerName,
                        customer_email: newOrder.customerEmail,
                        customer_phone: newOrder.customerPhone,
                        city: newOrder.city,
                        district: newOrder.district,
                        address: newOrder.address,
                        notes: newOrder.notes,
                        items: newOrder.items,
                        total_amount: newOrder.totalAmount,
                        payment_method: newOrder.paymentMethod,
                        payment_status: newOrder.paymentStatus,
                        status: newOrder.status
                    })
                }).catch(e => console.log('Supabase Order Sync:', e));
            }
"""

store_c = re.sub(
    r'(localStorage\.setItem\(\'mobelmor_all_orders\', JSON\.stringify\(orders\)\);)',
    r'\1\n' + save_order_enhancement,
    store_c
)

# Enhance syncFromCloud
sync_func = """
        syncFromCloud: async function () {
            if (!DEFAULT_CONFIG.supabaseUrl || !DEFAULT_CONFIG.supabaseKey) return false;
            try {
                const res = await fetch(`${DEFAULT_CONFIG.supabaseUrl}/rest/v1/products?select=*&order=id.asc`, {
                    headers: {
                        'apikey': DEFAULT_CONFIG.supabaseKey,
                        'Authorization': `Bearer ${DEFAULT_CONFIG.supabaseKey}`
                    }
                });
                if (res.ok) {
                    const data = await res.json();
                    if (Array.isArray(data) && data.length > 0) {
                        const mapped = data.map(row => ({
                            id: row.id,
                            title: row.title,
                            category: row.category,
                            price: parseFloat(row.price),
                            originalPrice: parseFloat(row.original_price || row.price),
                            image: row.main_image,
                            gallery: typeof row.gallery === 'string' ? JSON.parse(row.gallery) : (row.gallery || [row.main_image]),
                            dimensions: row.dimensions || '',
                            material: row.material || '',
                            skeleton: row.skeleton || '',
                            sponge: row.sponge || '',
                            fabric: row.fabric || '',
                            isActive: row.is_active !== false,
                            productType: row.title.toLowerCase().includes('takımı') ? 'Set' : 'Solo'
                        }));
                        localStorage.setItem('mobelmor_custom_products', JSON.stringify(mapped));
                        return mapped;
                    }
                }
            } catch (e) {
                console.log('Cloud Sync Error:', e);
            }
            return false;
        },
"""

store_c = store_c.replace("adminLogout: function () {", sync_func + "\n        adminLogout: function () {")
open('js/store-service.js', 'w', encoding='utf-8').write(store_c)
print("Configured StoreService with live Supabase integration")
