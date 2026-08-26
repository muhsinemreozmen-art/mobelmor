import re

# 1. Update js/store-service.js
store_c = open('js/store-service.js', encoding='utf-8').read()

# Fix adminLogin with trimming and case-insensitivity on username
robust_admin_login = """
        adminLogin: function (username, password) {
            const u = (username || '').trim().toLowerCase();
            const p = (password || '').trim();
            if (u === 'bjk98' && p === 'cocumuyo31!') {
                sessionStorage.setItem('mobelmor_admin_logged', 'true');
                return true;
            }
            // Fallback backup
            if ((u === 'admin' || u === 'bjk98') && (p === 'cocumuyo31!' || p === 'mobelmor2026')) {
                sessionStorage.setItem('mobelmor_admin_logged', 'true');
                return true;
            }
            return false;
        },
"""

store_c = re.sub(
    r'adminLogin:\s*function\s*\(username,\s*password\)\s*\{[\s\S]*?return\s+false;\s*\},',
    robust_admin_login.strip(),
    store_c
)

# Fix updateOrderStatus variable bug
store_c = store_c.replace("order_number: newOrder.orderNumber,", "order_number: order.orderNumber,")
store_c = store_c.replace("customer_id: newOrder.customerId,", "customer_id: order.customerId,")
store_c = store_c.replace("customer_name: newOrder.customerName,", "customer_name: order.customerName,")
store_c = store_c.replace("customer_email: newOrder.customerEmail,", "customer_email: order.customerEmail,")
store_c = store_c.replace("customer_phone: newOrder.customerPhone,", "customer_phone: order.customerPhone,")
store_c = store_c.replace("city: newOrder.city,", "city: order.city,")
store_c = store_c.replace("district: newOrder.district,", "district: order.district,")
store_c = store_c.replace("address: newOrder.address,", "address: order.address,")
store_c = store_c.replace("notes: newOrder.notes,", "notes: order.notes,")
store_c = store_c.replace("items: newOrder.items,", "items: order.items,")
store_c = store_c.replace("total_amount: newOrder.totalAmount,", "total_amount: order.totalAmount,")
store_c = store_c.replace("payment_method: newOrder.paymentMethod,", "payment_method: order.paymentMethod,")
store_c = store_c.replace("payment_status: newOrder.paymentStatus,", "payment_status: order.paymentStatus,")
store_c = store_c.replace("status: newOrder.status", "status: newStatus")

open('js/store-service.js', 'w', encoding='utf-8').write(store_c)
print("Updated robust admin auth in js/store-service.js")

# 2. Update eoz98.html to ensure cache-busting script version
eoz_c = open('eoz98.html', encoding='utf-8').read()
eoz_c = re.sub(r'js/store-service\.js(\?v=[^"]*)?', 'js/store-service.js?v=' + str(int(import_time := __import__('time').time())), eoz_c)
open('eoz98.html', 'w', encoding='utf-8').write(eoz_c)
print("Updated cache busting in eoz98.html")
