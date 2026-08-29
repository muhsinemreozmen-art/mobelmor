import re

# 1. Update js/store-service.js with version check to reset existing coupons to 0 usage
store_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\store-service.js"
with open(store_path, "r", encoding="utf-8") as f:
    store_code = f.read()

coupons_version_logic = """        // ==========================================
        // KUPON & İNDİRİM YÖNETİM MOTORU (STORESERVICE)
        // ==========================================
        COUPONS_STORAGE_KEY: 'mobelmor_coupons',
        COUPONS_VERSION_KEY: 'mobelmor_coupons_v2',

        getDefaultCoupons: function() {
            return [
                { id: 1, code: 'MOBELMOR500', type: 'fixed', value: 500, minCart: 5000, isActive: true, description: 'Tüm siparişlerde geçerli 500 TL açılış indirimi', usageCount: 0 },
                { id: 2, code: 'YAZ1000', type: 'fixed', value: 1000, minCart: 20000, isActive: true, description: '20.000 TL üzeri mobilya alımlarında 1.000 TL indirim', usageCount: 0 },
                { id: 3, code: 'HOSGELDIN', type: 'fixed', value: 500, minCart: 3000, isActive: true, description: 'Yeni üyelere özel 500 TL hoş geldin kuponu', usageCount: 0 },
                { id: 4, code: 'VIP10', type: 'percent', value: 10, minCart: 30000, isActive: true, description: '30.000 TL ve üzeri siparişlerde %10 VIP indirim', usageCount: 0 }
            ];
        },

        getCoupons: function() {
            try {
                // Ensure fresh 0 count version reset
                if (!localStorage.getItem(this.COUPONS_VERSION_KEY)) {
                    const defs = this.getDefaultCoupons();
                    this.saveCoupons(defs);
                    localStorage.setItem(this.COUPONS_VERSION_KEY, '20260829_ZERO_V1');
                    return defs;
                }
                const stored = localStorage.getItem(this.COUPONS_STORAGE_KEY);
                if (stored) {
                    const parsed = JSON.parse(stored);
                    if (Array.isArray(parsed) && parsed.length > 0) return parsed;
                }
            } catch(e) {}
            const defs = this.getDefaultCoupons();
            this.saveCoupons(defs);
            return defs;
        },"""

store_code = re.sub(
    r"// ==========================================\s*// KUPON & İNDİRİM YÖNETİM MOTORU \(STORESERVICE\)[\s\S]*?const defs = this\.getDefaultCoupons\(\);\s*this\.saveCoupons\(defs\);\s*return defs;\s*\},",
    coupons_version_logic,
    store_code
)

with open(store_path, "w", encoding="utf-8") as f:
    f.write(store_code)

print("Updated store-service.js with automatic 0 reset version check!")

# 2. Update eoz98.html getAdminCoupons to also force 0 reset
eoz_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\eoz98.html"
with open(eoz_path, "r", encoding="utf-8") as f:
    eoz_code = f.read()

eoz_coupon_reset = """        function getAdminCoupons() {
            let list = [];
            // Force reset any old non-zero mock counts from localStorage on first load
            if (!localStorage.getItem('mobelmor_coupons_v2')) {
                list = [
                    { id: 1, code: 'MOBELMOR500', type: 'fixed', value: 500, minCart: 5000, isActive: true, description: 'Tüm siparişlerde geçerli 500 TL açılış indirimi', usageCount: 0 },
                    { id: 2, code: 'YAZ1000', type: 'fixed', value: 1000, minCart: 20000, isActive: true, description: '20.000 TL üzeri mobilya alımlarında 1.000 TL indirim', usageCount: 0 },
                    { id: 3, code: 'HOSGELDIN', type: 'fixed', value: 500, minCart: 3000, isActive: true, description: 'Yeni üyelere özel 500 TL hoş geldin kuponu', usageCount: 0 },
                    { id: 4, code: 'VIP10', type: 'percent', value: 10, minCart: 30000, isActive: true, description: '30.000 TL ve üzeri siparişlerde %10 VIP indirim', usageCount: 0 }
                ];
                localStorage.setItem('mobelmor_coupons', JSON.stringify(list));
                localStorage.setItem('mobelmor_coupons_v2', '20260829_ZERO_V1');
                if (window.StoreService && window.StoreService.saveCoupons) window.StoreService.saveCoupons(list);
                return list;
            }

            if (window.StoreService && typeof window.StoreService.getCoupons === 'function') {
                list = window.StoreService.getCoupons();
            }
            if (!list || !list.length) {
                try {
                    list = JSON.parse(localStorage.getItem('mobelmor_coupons') || '[]');
                } catch(e) {}
            }
            return list || [];
        }"""

eoz_code = re.sub(
    r"function getAdminCoupons\(\) \{[\s\S]*?return list;\s*\}",
    eoz_coupon_reset,
    eoz_code
)

with open(eoz_path, "w", encoding="utf-8") as f:
    f.write(eoz_code)

print("Updated eoz98.html getAdminCoupons with automatic 0 reset!")
