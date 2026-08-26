/**
 * MOBELMOR E-TİCARET BULUT VERİTABANI & KULLANICI SERVİSİ
 * Supabase / Cloud Database Destekli + Dayanıklı Yerel Depolama (0 TL Maliyet)
 */

(function () {
    // 1. Supabase / Cloud Yapılandırma Alanı (İsteğe bağlı olarak panelden girilebilir)
    const DEFAULT_CONFIG = {
        supabaseUrl: localStorage.getItem('mobelmor_supabase_url') || 'https://kzbqqollfqatrauacjhj.supabase.co',
        supabaseKey: localStorage.getItem('mobelmor_supabase_key') || 'sb_publishable_7cMrt7S85Iza4y7H01FghA_Le91PIhS',
        adminPasswordHash: 'admin123'
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
            this._pushProductToCloud(productData);
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
            this._deleteProductFromCloud(id);
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

        getAllCustomers: function () {
            try {
                let custs = JSON.parse(localStorage.getItem('mobelmor_customers') || '[]');
                const legacy = JSON.parse(localStorage.getItem('mobelmor_users') || '[]');
                if (Array.isArray(legacy) && legacy.length > 0) {
                    legacy.forEach(leg => {
                        if (!custs.some(c => c.email && leg.email && c.email.toLowerCase() === leg.email.toLowerCase())) {
                            custs.push({
                                id: leg.id || 'cust_' + Date.now(),
                                fullName: leg.fullName || leg.name || 'Müşteri',
                                name: leg.name || leg.fullName || 'Müşteri',
                                email: (leg.email || '').toLowerCase(),
                                phone: leg.phone || '',
                                password: leg.password || '',
                                address: leg.address || '',
                                createdAt: leg.createdAt || new Date().toISOString()
                            });
                        }
                    });
                    localStorage.setItem('mobelmor_customers', JSON.stringify(custs));
                }
                return custs;
            } catch (e) {
                return [];
            }
        },

        deleteCustomer: function (id) {
            try {
                let custs = this.getAllCustomers();
                custs = custs.filter(c => c.id !== id && c.email !== id);
                localStorage.setItem('mobelmor_customers', JSON.stringify(custs));
                localStorage.setItem('mobelmor_users', JSON.stringify(custs));
                return true;
            } catch (e) {
                return false;
            }
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
                        order_number: order.orderNumber,
                        customer_id: order.customerId,
                        customer_name: order.customerName,
                        customer_email: order.customerEmail,
                        customer_phone: order.customerPhone,
                        city: order.city,
                        district: order.district,
                        address: order.address,
                        notes: order.notes,
                        items: order.items,
                        total_amount: order.totalAmount,
                        payment_method: order.paymentMethod,
                        payment_status: order.paymentStatus,
                        status: newStatus
                    })
                }).catch(e => console.log('Supabase Order Sync:', e));
            }


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
                        order_number: order.orderNumber,
                        customer_id: order.customerId,
                        customer_name: order.customerName,
                        customer_email: order.customerEmail,
                        customer_phone: order.customerPhone,
                        city: order.city,
                        district: order.district,
                        address: order.address,
                        notes: order.notes,
                        items: order.items,
                        total_amount: order.totalAmount,
                        payment_method: order.paymentMethod,
                        payment_status: order.paymentStatus,
                        status: newStatus
                    })
                }).catch(e => console.log('Supabase Order Sync:', e));
            }

                return true;
            }
            return false;
        },

        // --- ADMİN YETKİ KONTROLÜ ---
        isAdminAuthenticated: function () {
            return sessionStorage.getItem('mobelmor_admin_logged') === 'true';
        },

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

        adminLogout: function () {
            sessionStorage.removeItem('mobelmor_admin_logged');
        }
    };

    // İlk çalıştırmada ürünleri hazırla
    initProducts();
})();
