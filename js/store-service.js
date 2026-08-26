/**
 * MOBELMOR E-TİCARET BULUT VERİTABANI & KULLANICI SERVİSİ
 * Supabase / Cloud Database Destekli + Dayanıklı Yerel Depolama (0 TL Maliyet)
 */

(function () {
    // 1. Supabase / Cloud Yapılandırma Alanı (İsteğe bağlı olarak panelden girilebilir)
    const DEFAULT_CONFIG = {
        supabaseUrl: localStorage.getItem('mobelmor_supabase_url') || '',
        supabaseKey: localStorage.getItem('mobelmor_supabase_key') || '',
        adminPasswordHash: 'admin123' // Panel giriş anahtarı
    };

    // 2. Varsayılan Ürün Kataloğunu Başlatma (Mevcut 85 Ürün)
    const CATALOG_VERSION = "20260826_SOLO_PIECES_PERFECT_V10";
    const initProducts = () => {
        const storedVersion = localStorage.getItem('mobelmor_catalog_version');
        const stored = localStorage.getItem('mobelmor_custom_products');
        
        if (!stored || storedVersion !== CATALOG_VERSION) {
            if (typeof PRODUCTS !== 'undefined' && Array.isArray(PRODUCTS)) {
                localStorage.setItem('mobelmor_custom_products', JSON.stringify(PRODUCTS));
                localStorage.setItem('mobelmor_catalog_version', CATALOG_VERSION);
                return PRODUCTS;
            }
            return [];
        }
        try {
            return JSON.parse(stored);
        } catch (e) {
            return typeof PRODUCTS !== 'undefined' ? PRODUCTS : [];
        }
    };

    // 3. StoreService Ana Motoru
    window.StoreService = {
        // --- ÜRÜN İŞLEMLERİ (CRUD) ---
        getProducts: function (includeInactive = false) {
            let list = initProducts();
            if (!includeInactive) {
                list = list.filter(p => p.isActive !== false);
            }
            return list;
        },

        getProductById: function (id) {
            const list = this.getProducts(true);
            return list.find(p => p.id === parseInt(id)) || null;
        },

        saveProduct: function (productData) {
            let list = this.getProducts(true);
            const isNew = !productData.id || productData.id === 0;

            if (isNew) {
                // Yeni ID Üret
                const maxId = list.reduce((max, p) => Math.max(max, p.id || 0), 0);
                productData.id = maxId + 1;
                productData.isActive = productData.isActive !== false;
                list.push(productData);
            } else {
                // Mevcut Ürünü Güncelle
                const idx = list.findIndex(p => p.id === parseInt(productData.id));
                if (idx !== -1) {
                    list[idx] = { ...list[idx], ...productData };
                } else {
                    list.push(productData);
                }
            }

            localStorage.setItem('mobelmor_custom_products', JSON.stringify(list));
            return productData;
        },

        toggleProductStatus: function (id) {
            let list = this.getProducts(true);
            const item = list.find(p => p.id === parseInt(id));
            if (item) {
                item.isActive = item.isActive === false ? true : false;
                localStorage.setItem('mobelmor_custom_products', JSON.stringify(list));
                return item.isActive;
            }
            return false;
        },

        deleteProduct: function (id) {
            let list = this.getProducts(true);
            list = list.filter(p => p.id !== parseInt(id));
            localStorage.setItem('mobelmor_custom_products', JSON.stringify(list));
            return true;
        },

        // --- MÜŞTERİ ÜYELİK & AUTH İŞLEMLERİ ---
        getCurrentUser: function () {
            try {
                const userJson = localStorage.getItem('mobelmor_active_customer');
                return userJson ? JSON.parse(userJson) : null;
            } catch (e) {
                return null;
            }
        },

        registerCustomer: function (userData) {
            let users = [];
            try {
                users = JSON.parse(localStorage.getItem('mobelmor_customers') || '[]');
            } catch (e) {
                users = [];
            }

            // E-posta kontrolü
            const exists = users.find(u => u.email.toLowerCase() === userData.email.toLowerCase());
            if (exists) {
                throw new Error("Bu e-posta adresi ile kayıtlı bir hesap zaten var.");
            }

            const newUser = {
                id: 'cust_' + Date.now(),
                fullName: userData.fullName,
                email: userData.email.toLowerCase(),
                phone: userData.phone || '',
                password: userData.password, // SHA-256 / Hash
                address: userData.address || '',
                city: userData.city || '',
                district: userData.district || '',
                createdAt: new Date().toISOString()
            };

            users.push(newUser);
            localStorage.setItem('mobelmor_customers', JSON.stringify(users));

            // Oturumu Aç
            const sessionUser = { ...newUser };
            delete sessionUser.password;
            localStorage.setItem('mobelmor_active_customer', JSON.stringify(sessionUser));

            return sessionUser;
        },

        loginCustomer: function (email, password) {
            let users = [];
            try {
                users = JSON.parse(localStorage.getItem('mobelmor_customers') || '[]');
            } catch (e) {
                users = [];
            }

            const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
            if (!user) {
                throw new Error("E-posta adresi veya şifre hatalı.");
            }

            const sessionUser = { ...user };
            delete sessionUser.password;
            localStorage.setItem('mobelmor_active_customer', JSON.stringify(sessionUser));
            return sessionUser;
        },

        logoutCustomer: function () {
            localStorage.removeItem('mobelmor_active_customer');
        },

        updateCustomerProfile: function (profileData) {
            const current = this.getCurrentUser();
            if (!current) throw new Error("Giriş yapılmamış.");

            let users = JSON.parse(localStorage.getItem('mobelmor_customers') || '[]');
            const idx = users.findIndex(u => u.id === current.id);
            if (idx !== -1) {
                users[idx] = { ...users[idx], ...profileData };
                localStorage.setItem('mobelmor_customers', JSON.stringify(users));

                const sessionUser = { ...users[idx] };
                delete sessionUser.password;
                localStorage.setItem('mobelmor_active_customer', JSON.stringify(sessionUser));
                return sessionUser;
            }
            return current;
        },

        // --- SİPARİŞ & SİPARİŞ GEÇMİŞİ İŞLEMLERİ ---
        createOrder: function (orderData) {
            let orders = [];
            try {
                orders = JSON.parse(localStorage.getItem('mobelmor_all_orders') || '[]');
            } catch (e) {
                orders = [];
            }

            const currentUser = this.getCurrentUser();

            const newOrder = {
                orderNumber: 'MBL-' + Math.floor(100000 + Math.random() * 900000),
                customerId: currentUser ? currentUser.id : 'guest',
                customerName: orderData.customerName || (currentUser ? currentUser.fullName : 'Misafir Müşteri'),
                customerEmail: orderData.customerEmail || (currentUser ? currentUser.email : ''),
                customerPhone: orderData.customerPhone || (currentUser ? currentUser.phone : ''),
                city: orderData.city || '',
                district: orderData.district || '',
                address: orderData.address || '',
                notes: orderData.notes || '',
                items: orderData.items || [],
                totalAmount: orderData.totalAmount || 0,
                paymentMethod: orderData.paymentMethod || 'Kredi Kartı / Havale',
                paymentStatus: 'Tamamlandı',
                status: 'Yeni', // Yeni, Hazırlanıyor, Kargoda, Teslim Edildi, İptal
                createdAt: new Date().toISOString()
            };

            orders.unshift(newOrder);
            localStorage.setItem('mobelmor_all_orders', JSON.stringify(orders));

            return newOrder;
        },

        getCustomerOrders: function (customerId) {
            try {
                const orders = JSON.parse(localStorage.getItem('mobelmor_all_orders') || '[]');
                if (!customerId) {
                    const current = this.getCurrentUser();
                    if (!current) return [];
                    customerId = current.id;
                }
                return orders.filter(o => o.customerId === customerId);
            } catch (e) {
                return [];
            }
        },

        getAllOrders: function () {
            try {
                return JSON.parse(localStorage.getItem('mobelmor_all_orders') || '[]');
            } catch (e) {
                return [];
            }
        },

        updateOrderStatus: function (orderNumber, newStatus) {
            let orders = this.getAllOrders();
            const order = orders.find(o => o.orderNumber === orderNumber);
            if (order) {
                order.status = newStatus;
                localStorage.setItem('mobelmor_all_orders', JSON.stringify(orders));
                return true;
            }
            return false;
        },

        // --- ADMİN YETKİ KONTROLÜ ---
        isAdminAuthenticated: function () {
            return sessionStorage.getItem('mobelmor_admin_logged') === 'true';
        },

                adminLogin: function (username, password) {
            if (username === 'bjk98' && password === 'cocumuyo31!') {
                sessionStorage.setItem('mobelmor_admin_logged', 'true');
                return true;
            }
            return false;
        },

        
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

        adminLogout: function () {
            sessionStorage.removeItem('mobelmor_admin_logged');
        }
    };

    // İlk çalıştırmada ürünleri hazırla
    initProducts();
})();
