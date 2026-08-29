import re

store_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\store-service.js"
with open(store_path, "r", encoding="utf-8") as f:
    code = f.read()

# Update default coupons to start at 0 usage count, and add recordCouponUsage
old_defs = """        getDefaultCoupons: function() {
            return [
                { id: 1, code: 'MOBELMOR500', type: 'fixed', value: 500, minCart: 5000, isActive: true, description: 'Tüm siparişlerde geçerli 500 TL açılış indirimi', usageCount: 12 },
                { id: 2, code: 'YAZ1000', type: 'fixed', value: 1000, minCart: 20000, isActive: true, description: '20.000 TL üzeri mobilya alımlarında 1.000 TL indirim', usageCount: 5 },
                { id: 3, code: 'HOSGELDIN', type: 'fixed', value: 500, minCart: 3000, isActive: true, description: 'Yeni üyelere özel 500 TL hoş geldin kuponu', usageCount: 8 },
                { id: 4, code: 'VIP10', type: 'percent', value: 10, minCart: 30000, isActive: true, description: '30.000 TL ve üzeri siparişlerde %10 VIP indirim', usageCount: 3 }
            ];
        },"""

new_defs = """        getDefaultCoupons: function() {
            return [
                { id: 1, code: 'MOBELMOR500', type: 'fixed', value: 500, minCart: 5000, isActive: true, description: 'Tüm siparişlerde geçerli 500 TL açılış indirimi', usageCount: 0 },
                { id: 2, code: 'YAZ1000', type: 'fixed', value: 1000, minCart: 20000, isActive: true, description: '20.000 TL üzeri mobilya alımlarında 1.000 TL indirim', usageCount: 0 },
                { id: 3, code: 'HOSGELDIN', type: 'fixed', value: 500, minCart: 3000, isActive: true, description: 'Yeni üyelere özel 500 TL hoş geldin kuponu', usageCount: 0 },
                { id: 4, code: 'VIP10', type: 'percent', value: 10, minCart: 30000, isActive: true, description: '30.000 TL ve üzeri siparişlerde %10 VIP indirim', usageCount: 0 }
            ];
        },

        recordCouponUsage: function(code) {
            if (!code) return;
            const coupons = this.getCoupons();
            const cleanCode = code.trim().toUpperCase();
            const item = coupons.find(c => c.code.toUpperCase() === cleanCode);
            if (item) {
                item.usageCount = (item.usageCount || 0) + 1;
                this.saveCoupons(coupons);
            }
        },"""

if old_defs in code:
    code = code.replace(old_defs, new_defs)
    with open(store_path, "w", encoding="utf-8") as f:
        f.write(code)
    print("Updated default coupons to start at 0 and added recordCouponUsage!")

# Also hook recordCouponUsage into checkout submission in js/checkout-helper.js
checkout_helper_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\checkout-helper.js"
with open(checkout_helper_path, "r", encoding="utf-8") as f:
    chk_code = f.read()

if "window.StoreService.recordCouponUsage" not in chk_code and "localStorage.removeItem('mobelmor_cart')" in chk_code:
    chk_code = chk_code.replace(
        "localStorage.removeItem('mobelmor_cart');",
        """if (window.StoreService && typeof window.StoreService.recordCouponUsage === 'function' && typeof appliedCouponCode !== 'undefined' && appliedCouponCode) {
            window.StoreService.recordCouponUsage(appliedCouponCode);
        }
        localStorage.removeItem('mobelmor_cart');"""
    )
    with open(checkout_helper_path, "w", encoding="utf-8") as f:
        f.write(chk_code)
    print("Wired recordCouponUsage to checkout submission!")
