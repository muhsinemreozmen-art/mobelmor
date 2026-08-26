import re

eoz = open('eoz98.html', encoding='utf-8').read()

fetch_orders_func = """
        async function fetchCloudOrders() {
            const url = 'https://kzbqqollfqatrauacjhj.supabase.co';
            const key = 'sb_publishable_7cMrt7S85Iza4y7H01FghA_Le91PIhS';
            try {
                const res = await fetch(`${url}/rest/v1/orders?select=*&order=created_at.desc`, {
                    headers: { 'apikey': key, 'Authorization': `Bearer ${key}` }
                });
                if (res.ok) {
                    const cloudOrders = await res.json();
                    if (Array.isArray(cloudOrders) && cloudOrders.length > 0) {
                        const localOrders = window.StoreService.getAllOrders();
                        const merged = [...cloudOrders.map(o => ({
                            orderNumber: o.order_number,
                            customerId: o.customer_id,
                            customerName: o.customer_name,
                            customerEmail: o.customer_email,
                            customerPhone: o.customer_phone,
                            city: o.city,
                            district: o.district,
                            address: o.address,
                            notes: o.notes,
                            items: typeof o.items === 'string' ? JSON.parse(o.items) : (o.items || []),
                            totalAmount: parseFloat(o.total_amount || 0),
                            paymentMethod: o.payment_method,
                            paymentStatus: o.payment_status,
                            status: o.status,
                            createdAt: o.created_at
                        }))];
                        localStorage.setItem('mobelmor_all_orders', JSON.stringify(merged));
                        return merged;
                    }
                }
            } catch (e) {
                console.log('Error fetching cloud orders:', e);
            }
            return window.StoreService.getAllOrders();
        }
"""

eoz = eoz.replace("async function renderOrdersTable() {", fetch_orders_func + "\n        async function renderOrdersTable() {")
eoz = eoz.replace("const orders = window.StoreService.getAllOrders();", "const orders = await fetchCloudOrders();")

open('eoz98.html', 'w', encoding='utf-8').write(eoz)
print("Updated eoz98.html to load live orders from Supabase")
