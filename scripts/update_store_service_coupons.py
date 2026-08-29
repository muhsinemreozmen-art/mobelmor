import re

store_service_path = r"c:\Users\cocum\.gemini\antigravity\scratch\mobelmor\js\store-service.js"

with open(store_service_path, "r", encoding="utf-8") as f:
    code = f.read()

# Default coupons configuration
coupons_module = """
        // ==========================================
        // KUPON & İNDİRİM YÖNETİM MOTORU (STORESERVICE)
        // ==========================================
        COUPONS_STORAGE_KEY: 'mobelmor_coupons',

        getDefaultCoupons: function() {
            return [
                { id: 1, code: 'MOBELMOR500', type: 'fixed', value: 500, minCart: 5000, isActive: true, description: 'Tüm siparişlerde geçerli 500 TL açılış indirimi', usageCount: 12 },
                { id: 2, code: 'YAZ1000', type: 'fixed', value: 1000, minCart: 20000, isActive: true, description: '20.000 TL üzeri mobilya alımlarında 1.000 TL indirim', usageCount: 5 },
                { id: 3, code: 'HOSGELDIN', type: 'fixed', value: 500, minCart: 3000, isActive: true, description: 'Yeni üyelere özel 500 TL hoş geldin kuponu', usageCount: 8 },
                { id: 4, code: 'VIP10', type: 'percent', value: 10, minCart: 30000, isActive: true, description: '30.000 TL ve üzeri siparişlerde %10 VIP indirim', usageCount: 3 }
            ];
        },

        getCoupons: function() {
            try {
                const stored = localStorage.getItem(this.COUPONS_STORAGE_KEY);
                if (stored) {
                    const parsed = JSON.parse(stored);
                    if (Array.isArray(parsed) && parsed.length > 0) return parsed;
                }
            } catch(e) {}
            const defs = this.getDefaultCoupons();
            this.saveCoupons(defs);
            return defs;
        },

        saveCoupons: function(couponsList) {
            if (!Array.isArray(couponsList)) return false;
            try {
                localStorage.setItem(this.COUPONS_STORAGE_KEY, JSON.stringify(couponsList));
                this._syncCouponsToCloud(couponsList);
                return true;
            } catch(e) {
                return false;
            }
        },

        addOrUpdateCoupon: function(couponData) {
            const coupons = this.getCoupons();
            const cleanCode = (couponData.code || '').trim().toUpperCase();
            if (!cleanCode) return { success: false, message: 'Kupon kodu boş olamaz.' };

            const existingIdx = coupons.findIndex(c => c.id == couponData.id || c.code.toUpperCase() === cleanCode);
            
            const newObj = {
                id: couponData.id ? parseInt(couponData.id) : Date.now(),
                code: cleanCode,
                type: couponData.type === 'percent' ? 'percent' : 'fixed',
                value: parseFloat(couponData.value) || 0,
                minCart: parseFloat(couponData.minCart) || 0,
                isActive: couponData.isActive !== false,
                description: (couponData.description || '').trim(),
                usageCount: parseInt(couponData.usageCount) || 0,
                updatedAt: new Date().toISOString()
            };

            if (existingIdx !== -1) {
                coupons[existingIdx] = { ...coupons[existingIdx], ...newObj };
            } else {
                coupons.unshift(newObj);
            }

            this.saveCoupons(coupons);
            return { success: true, coupon: newObj };
        },

        deleteCoupon: function(idOrCode) {
            let coupons = this.getCoupons();
            const initialLen = coupons.length;
            coupons = coupons.filter(c => c.id != idOrCode && c.code.toUpperCase() !== String(idOrCode).toUpperCase());
            if (coupons.length < initialLen) {
                this.saveCoupons(coupons);
                return true;
            }
            return false;
        },

        toggleCouponActive: function(id) {
            const coupons = this.getCoupons();
            const item = coupons.find(c => c.id == id);
            if (item) {
                item.isActive = !item.isActive;
                this.saveCoupons(coupons);
                return item.isActive;
            }
            return false;
        },

        validateCoupon: function(inputCode, subtotal) {
            const cleanCode = (inputCode || '').trim().toUpperCase();
            if (!cleanCode) return { valid: false, message: 'Lütfen bir kupon kodu giriniz.' };

            const coupons = this.getCoupons();
            const coupon = coupons.find(c => c.code.toUpperCase() === cleanCode);

            if (!coupon) {
                return { valid: false, message: 'Geçersiz kupon kodu.' };
            }

            if (!coupon.isActive) {
                return { valid: false, message: 'Bu kupon kodunun kullanım süresi dolmuştur.' };
            }

            const currentSubtotal = parseFloat(subtotal) || 0;
            if (coupon.minCart > 0 && currentSubtotal < coupon.minCart) {
                return { 
                    valid: false, 
                    message: `Bu kupon en az ${(coupon.minCart).toLocaleString('tr-TR')} ₺ tutarındaki sepetlerde geçerlidir.` 
                };
            }

            let discount = 0;
            if (coupon.type === 'percent') {
                discount = Math.round((currentSubtotal * coupon.value) / 100);
            } else {
                discount = Math.min(coupon.value, currentSubtotal);
            }

            return {
                valid: true,
                coupon: coupon,
                discount: discount,
                message: `${coupon.code} kuponu başarıyla uygulandı! (${discount.toLocaleString('tr-TR')} ₺ İndirim)`
            };
        },

        _syncCouponsToCloud: async function(couponsList) {
            // Background cloud backup for coupons
            try {
                if (DEFAULT_CONFIG.supabaseUrl && DEFAULT_CONFIG.supabaseKey) {
                    // Supabase meta or settings table sync
                    fetch(`${DEFAULT_CONFIG.supabaseUrl}/rest/v1/store_settings?id=eq.coupons_data`, {
                        method: 'PATCH',
                        headers: {
                            'apikey': DEFAULT_CONFIG.supabaseKey,
                            'Authorization': `Bearer ${DEFAULT_CONFIG.supabaseKey}`,
                            'Content-Type': 'application/json',
                            'Prefer': 'return=minimal'
                        },
                        body: JSON.stringify({ data: couponsList, updated_at: new Date().toISOString() })
                    }).catch(() => {});
                }
            } catch(e) {}
        },
"""

# Insert coupons_module before adminLogout in StoreService
if "getDefaultCoupons" not in code:
    code = code.replace("adminLogout: function () {", coupons_module + "\n        adminLogout: function () {")
    with open(store_service_path, "w", encoding="utf-8") as f:
        f.write(code)
    print("Added Coupon Management Engine to StoreService!")
else:
    print("Coupons module already present in StoreService.")
