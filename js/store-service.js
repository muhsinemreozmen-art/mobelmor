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

    function encodeProductMeta(productData) {
        const meta = {};
        const knownNativeCols = new Set([
            'id', 'title', 'category', 'price', 'original_price', 'originalPrice',
            'main_image', 'image', 'gallery', 'dimensions', 'material', 'skeleton',
            'sponge', 'fabric', 'is_active', 'isActive', 'created_at'
        ]);

        for (const [k, v] of Object.entries(productData)) {
            if (!knownNativeCols.has(k) && v !== undefined && v !== null && v !== '') {
                meta[k] = v;
            }
        }
        if (productData.videoUrl || productData.youtubeUrl) {
            meta.videoUrl = (productData.videoUrl || productData.youtubeUrl || '').trim();
            meta.youtubeUrl = meta.videoUrl;
        }
        if (productData.productType) meta.productType = productData.productType;
        if (productData.subcategory) meta.subcategory = productData.subcategory;
        if (productData.warranty) meta.warranty = productData.warranty;
        if (productData.sortOrder !== undefined) meta.sortOrder = productData.sortOrder;
        if (productData.specs) meta.specs = productData.specs;

        let cleanMaterial = (productData.material || '').replace(/\|\|META:[^|]*\|\|/g, '').replace(/\|\|VIDEO:[^|]*\|\|/g, '').trim();
        if (Object.keys(meta).length > 0) {
            cleanMaterial = `${cleanMaterial} ||META:${JSON.stringify(meta)}||`;
        }
        return cleanMaterial;
    }

    function decodeProductMeta(product) {
        if (!product) return product;
        if (product.material && (product.material.includes('||META:') || product.material.includes('||VIDEO:'))) {
            if (product.material.includes('||META:')) {
                const match = product.material.match(/\|\|META:(\{.*?\})\|\|/);
                if (match && match[1]) {
                    try {
                        const parsed = JSON.parse(match[1]);
                        Object.assign(product, parsed);
                    } catch (e) {
                        console.error('Meta parse error:', e);
                    }
                }
            }
            if (product.material.includes('||VIDEO:')) {
                const vm = product.material.match(/\|\|VIDEO:([^|]+)\|\|/);
                if (vm && vm[1]) {
                    product.videoUrl = vm[1];
                    product.youtubeUrl = vm[1];
                }
            }
            product.material = product.material.replace(/\|\|META:[^|]*\|\|/g, '').replace(/\|\|VIDEO:[^|]*\|\|/g, '').trim();
        }
        return product;
    }

    // 3. StoreService Ana Motoru
    window.StoreService = {

        _pushProductToCloud: async function (productData) {
            if (!DEFAULT_CONFIG.supabaseUrl || !DEFAULT_CONFIG.supabaseKey) return false;
            const encodedMaterial = encodeProductMeta(productData);
            const payload = {
                id: parseInt(productData.id),
                title: productData.title,
                category: productData.category || 'living',
                price: parseFloat(productData.price) || 0,
                original_price: parseFloat(productData.originalPrice || productData.price) || 0,
                main_image: productData.image || (Array.isArray(productData.gallery) ? productData.gallery[0] : ''),
                gallery: Array.isArray(productData.gallery) ? productData.gallery : [productData.image],
                dimensions: productData.dimensions || '',
                material: encodedMaterial,
                skeleton: productData.skeleton || '',
                sponge: productData.sponge || '',
                fabric: productData.fabric || '',
                is_active: productData.isActive !== false
            };

            try {
                const res = await fetch(`${DEFAULT_CONFIG.supabaseUrl}/rest/v1/products`, {
                    method: 'POST',
                    headers: {
                        'apikey': DEFAULT_CONFIG.supabaseKey,
                        'Authorization': `Bearer ${DEFAULT_CONFIG.supabaseKey}`,
                        'Content-Type': 'application/json',
                        'Prefer': 'resolution=merge-duplicates'
                    },
                    body: JSON.stringify(payload)
                });
                if (res.ok) {
                    console.log('✅ Supabase Cloud Sync Success:', productData.title);
                    return true;
                } else {
                    const err = await res.text();
                    console.error('❌ Supabase Cloud Sync HTTP Error:', res.status, err);
                    return false;
                }
            } catch (e) {
                console.error('❌ Supabase Cloud Sync Exception:', e);
                return false;
            }
        },

        _deleteProductFromCloud: async function (id) {
            if (!DEFAULT_CONFIG.supabaseUrl || !DEFAULT_CONFIG.supabaseKey) return false;
            try {
                const res = await fetch(`${DEFAULT_CONFIG.supabaseUrl}/rest/v1/products?id=eq.${id}`, {
                    method: 'DELETE',
                    headers: {
                        'apikey': DEFAULT_CONFIG.supabaseKey,
                        'Authorization': `Bearer ${DEFAULT_CONFIG.supabaseKey}`
                    }
                });
                return res.ok;
            } catch (e) {
                console.error('Supabase Delete Error:', e);
                return false;
            }
        },

        // --- ÜRÜN İŞLEMLERİ (CRUD) ---
        getProducts: function (includeInactive = false) {
            let list = initProducts();
            if (!includeInactive) {
                list = list.filter(p => p.isActive !== false);
            }
            return list.map(decodeProductMeta);
        },

        getProductById: function (id) {
            const list = this.getProducts(true);
            const found = list.find(p => p.id === parseInt(id)) || null;
            return found ? decodeProductMeta(found) : null;
        },

        syncProductsFromCloud: async function () {
            if (!DEFAULT_CONFIG.supabaseUrl || !DEFAULT_CONFIG.supabaseKey) return [];
            try {
                const res = await fetch(`${DEFAULT_CONFIG.supabaseUrl}/rest/v1/products?select=*`, {
                    headers: {
                        'apikey': DEFAULT_CONFIG.supabaseKey,
                        'Authorization': `Bearer ${DEFAULT_CONFIG.supabaseKey}`
                    }
                });
                if (res.ok) {
                    const cloudProducts = await res.json();
                    if (Array.isArray(cloudProducts) && cloudProducts.length > 0) {
                        let list = initProducts();
                        cloudProducts.forEach(cp => {
                            let item = {
                                id: cp.id,
                                title: cp.title,
                                category: cp.category,
                                price: cp.price,
                                originalPrice: cp.original_price || cp.price,
                                image: cp.main_image || cp.image,
                                gallery: cp.gallery || (cp.main_image ? [cp.main_image] : []),
                                dimensions: cp.dimensions || '',
                                material: cp.material || '',
                                skeleton: cp.skeleton || '',
                                sponge: cp.sponge || '',
                                fabric: cp.fabric || '',
                                isActive: cp.is_active !== false
                            };
                            item = decodeProductMeta(item);

                            const idx = list.findIndex(p => p.id === cp.id);
                            if (idx !== -1) {
                                list[idx] = { ...list[idx], ...item };
                            } else {
                                list.push(item);
                            }
                        });
                        localStorage.setItem('mobelmor_custom_products', JSON.stringify(list));
                        return list;
                    }
                }
            } catch (e) {
                console.log('Cloud Sync Error:', e);
            }
            return [];
        },

        syncAllProductsToCloud: async function () {
            const list = this.getProducts(true);
            let successCount = 0;
            for (const p of list) {
                const ok = await this._pushProductToCloud(p);
                if (ok) successCount++;
            }
            return { total: list.length, success: successCount };
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

        registerCustomer: async function (userData) {
            const cleanEmail = (userData.email || '').trim().toLowerCase();
            const cleanPass = (userData.password || '').trim();
            const cleanName = (userData.fullName || userData.name || '').trim();
            const cleanPhone = (userData.phone || '').trim();

            if (!cleanEmail || !cleanPass || !cleanName) {
                throw new Error("Lütfen tüm zorunlu alanları (Ad Soyad, E-Posta, Şifre) doldurunuz.");
            }

            if (cleanPass.length < 6) {
                throw new Error("Şifreniz en az 6 karakter olmalıdır.");
            }

            // 1. Supabase Auth Signup
            if (DEFAULT_CONFIG.supabaseUrl && DEFAULT_CONFIG.supabaseKey) {
                try {
                    const res = await fetch(`${DEFAULT_CONFIG.supabaseUrl}/auth/v1/signup`, {
                        method: 'POST',
                        headers: {
                            'apikey': DEFAULT_CONFIG.supabaseKey,
                            'Authorization': `Bearer ${DEFAULT_CONFIG.supabaseKey}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: cleanEmail,
                            password: cleanPass,
                            data: {
                                full_name: cleanName,
                                phone: cleanPhone
                            }
                        })
                    });

                    const resData = await res.json();
                    if (!res.ok) {
                        const errMsg = (resData.msg || resData.error_description || "").toLowerCase();
                        if (errMsg.includes("already registered")) {
                            throw new Error("Bu e-posta adresi ile kayıtlı bir hesap zaten var.");
                        } else if (errMsg.includes("invalid")) {
                            throw new Error("Lütfen geçerli ve çalışan gerçek bir e-posta adresi giriniz.");
                        } else if (errMsg.includes("rate limit") || errMsg.includes("rate_limit") || errMsg.includes("exceeded")) {
                            // Supabase shared mailer rate limit hit -> fallback to direct account creation so customer is never blocked
                            const fallbackUser = {
                                id: 'cust_' + Date.now(),
                                fullName: cleanName,
                                name: cleanName,
                                email: cleanEmail,
                                phone: cleanPhone,
                                password: cleanPass,
                                createdAt: new Date().toISOString()
                            };

                            // Sync fallback user directly to Supabase cloud table
                            try {
                                await fetch(`${DEFAULT_CONFIG.supabaseUrl}/rest/v1/customers`, {
                                    method: 'POST',
                                    headers: {
                                        'apikey': DEFAULT_CONFIG.supabaseKey,
                                        'Authorization': `Bearer ${DEFAULT_CONFIG.supabaseKey}`,
                                        'Content-Type': 'application/json',
                                        'Prefer': 'resolution=merge-duplicates'
                                    },
                                    body: JSON.stringify({
                                        id: fallbackUser.id,
                                        full_name: cleanName,
                                        email: cleanEmail,
                                        phone: cleanPhone,
                                        password: cleanPass,
                                        created_at: fallbackUser.createdAt
                                    })
                                });
                            } catch (e) {
                                console.warn("Cloud fallback sync error:", e);
                            }

                            let users = this.getAllCustomers();
                            const idx = users.findIndex(u => u.email && u.email.toLowerCase() === cleanEmail);
                            if (idx === -1) {
                                users.push(fallbackUser);
                            } else {
                                users[idx] = { ...users[idx], ...fallbackUser };
                            }
                            localStorage.setItem('mobelmor_customers', JSON.stringify(users));
                            localStorage.setItem('mobelmor_users', JSON.stringify(users));

                            const sessionUser = { ...fallbackUser };
                            delete sessionUser.password;
                            localStorage.setItem('mobelmor_active_customer', JSON.stringify(sessionUser));
                            localStorage.setItem('mobelmor_current_user', JSON.stringify(sessionUser));

                            return { user: sessionUser, confirmationSent: false };
                        } else {
                            throw new Error(resData.msg || resData.error_description || "Kayıt işlemi gerçekleştirilemedi.");
                        }
                    }

                    const newUser = {
                        id: resData.id || ('cust_' + Date.now()),
                        fullName: cleanName,
                        name: cleanName,
                        email: cleanEmail,
                        phone: cleanPhone,
                        address: userData.address || '',
                        city: userData.city || '',
                        district: userData.district || '',
                        createdAt: new Date().toISOString()
                    };

                    // Sync directly to Supabase Cloud Database table 'customers'
                    try {
                        await fetch(`${DEFAULT_CONFIG.supabaseUrl}/rest/v1/customers`, {
                            method: 'POST',
                            headers: {
                                'apikey': DEFAULT_CONFIG.supabaseKey,
                                'Authorization': `Bearer ${DEFAULT_CONFIG.supabaseKey}`,
                                'Content-Type': 'application/json',
                                'Prefer': 'resolution=merge-duplicates'
                            },
                            body: JSON.stringify({
                                id: newUser.id,
                                full_name: cleanName,
                                email: cleanEmail,
                                phone: cleanPhone,
                                password: cleanPass,
                                address: newUser.address,
                                city: newUser.city,
                                district: newUser.district,
                                created_at: newUser.createdAt
                            })
                        });
                    } catch (e) {
                        console.warn("Cloud customer table sync:", e);
                    }

                    let users = this.getAllCustomers();
                    const existingIdx = users.findIndex(u => u.email && u.email.toLowerCase() === cleanEmail);
                    if (existingIdx === -1) {
                        users.push(newUser);
                    } else {
                        users[existingIdx] = { ...users[existingIdx], ...newUser };
                    }
                    localStorage.setItem('mobelmor_customers', JSON.stringify(users));
                    localStorage.setItem('mobelmor_users', JSON.stringify(users));

                    return { user: newUser, confirmationSent: true };
                } catch (err) {
                    throw err;
                }
            }

            // Local fallback
            let users = this.getAllCustomers();
            const exists = users.find(u => u.email && u.email.toLowerCase() === cleanEmail);
            if (exists) throw new Error("Bu e-posta adresi ile kayıtlı bir hesap zaten var.");
            const newUser = {
                id: 'cust_' + Date.now(),
                fullName: cleanName,
                name: cleanName,
                email: cleanEmail,
                phone: cleanPhone,
                password: cleanPass,
                createdAt: new Date().toISOString()
            };
            users.push(newUser);
            localStorage.setItem('mobelmor_customers', JSON.stringify(users));
            return { user: newUser, confirmationSent: false };
        },

        loginCustomer: async function (email, password) {
            const cleanEmail = (email || '').trim().toLowerCase();
            const cleanPass = (password || '').trim();

            if (!cleanEmail || !cleanPass) {
                throw new Error("Lütfen e-posta adresi ve şifrenizi giriniz.");
            }

            if (DEFAULT_CONFIG.supabaseUrl && DEFAULT_CONFIG.supabaseKey) {
                // 1. Try Supabase Auth Token
                try {
                    const res = await fetch(`${DEFAULT_CONFIG.supabaseUrl}/auth/v1/token?grant_type=password`, {
                        method: 'POST',
                        headers: {
                            'apikey': DEFAULT_CONFIG.supabaseKey,
                            'Authorization': `Bearer ${DEFAULT_CONFIG.supabaseKey}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: cleanEmail,
                            password: cleanPass
                        })
                    });

                    const resData = await res.json();
                    if (res.ok) {
                        const suUser = resData.user || {};
                        const sessionUser = {
                            id: suUser.id,
                            email: suUser.email,
                            fullName: suUser.user_metadata?.full_name || suUser.user_metadata?.name || 'Müşteri',
                            name: suUser.user_metadata?.full_name || suUser.user_metadata?.name || 'Müşteri',
                            phone: suUser.user_metadata?.phone || '',
                            token: resData.access_token
                        };

                        localStorage.setItem('mobelmor_active_customer', JSON.stringify(sessionUser));
                        localStorage.setItem('mobelmor_current_user', JSON.stringify(sessionUser));

                        let users = this.getAllCustomers();
                        const idx = users.findIndex(u => u.email && u.email.toLowerCase() === cleanEmail);
                        if (idx === -1) {
                            users.push(sessionUser);
                        } else {
                            users[idx] = { ...users[idx], ...sessionUser };
                        }
                        localStorage.setItem('mobelmor_customers', JSON.stringify(users));

                        return sessionUser;
                    }

                    if (resData.error_description && resData.error_description.includes("Email not confirmed")) {
                        throw new Error("⚠️ E-posta adresiniz henüz doğrulanmamış. Lütfen gelen kutunuzdaki onay bağlantısına tıklayarak hesabınızı aktif ediniz.");
                    }
                } catch (err) {
                    if (err.message && err.message.includes("doğrulanmamış")) {
                        throw err;
                    }
                }

                // 2. Cloud Customers table check (Cross-device sync & fallback with strict password matching)
                try {
                    const res = await fetch(`${DEFAULT_CONFIG.supabaseUrl}/rest/v1/customers?email=eq.${encodeURIComponent(cleanEmail)}&select=*`, {
                        headers: {
                            'apikey': DEFAULT_CONFIG.supabaseKey,
                            'Authorization': `Bearer ${DEFAULT_CONFIG.supabaseKey}`
                        }
                    });
                    if (res.ok) {
                        const cloudUsers = await res.json();
                        if (Array.isArray(cloudUsers) && cloudUsers.length > 0) {
                            const matched = cloudUsers[0];
                            if (matched.password && matched.password === cleanPass) {
                                const sessionUser = {
                                    id: matched.id,
                                    email: matched.email,
                                    fullName: matched.full_name || matched.fullName || matched.name || 'Müşteri',
                                    name: matched.full_name || matched.fullName || matched.name || 'Müşteri',
                                    phone: matched.phone || '',
                                    address: matched.address || '',
                                    city: matched.city || '',
                                    district: matched.district || ''
                                };
                                localStorage.setItem('mobelmor_active_customer', JSON.stringify(sessionUser));
                                localStorage.setItem('mobelmor_current_user', JSON.stringify(sessionUser));

                                let users = this.getAllCustomers();
                                const idx = users.findIndex(u => u.email && u.email.toLowerCase() === cleanEmail);
                                if (idx === -1) {
                                    users.push(sessionUser);
                                } else {
                                    users[idx] = { ...users[idx], ...sessionUser };
                                }
                                localStorage.setItem('mobelmor_customers', JSON.stringify(users));

                                return sessionUser;
                            }
                        }
                    }
                } catch (e) {
                    console.warn("Cloud customer login check:", e);
                }
            }

            // 3. Local fallback check with strict password matching
            let users = this.getAllCustomers();
            const localUser = users.find(u => u.email && u.email.toLowerCase() === cleanEmail && u.password && u.password === cleanPass);
            if (localUser) {
                const sessionUser = { ...localUser };
                delete sessionUser.password;
                localStorage.setItem('mobelmor_active_customer', JSON.stringify(sessionUser));
                localStorage.setItem('mobelmor_current_user', JSON.stringify(sessionUser));
                return sessionUser;
            }

            throw new Error("E-posta adresi veya şifre hatalı.");
        },

        logoutCustomer: function () {
            localStorage.removeItem('mobelmor_active_customer');
            localStorage.removeItem('mobelmor_current_user');
        },

        updateCustomerProfile: async function (profileData) {
            const current = this.getCurrentUser();
            if (!current) throw new Error("Giriş yapılmamış.");

            let users = JSON.parse(localStorage.getItem('mobelmor_customers') || '[]');
            const idx = users.findIndex(u => u.id === current.id || (u.email && u.email.toLowerCase() === current.email?.toLowerCase()));
            if (idx !== -1) {
                users[idx] = { ...users[idx], ...profileData };
                localStorage.setItem('mobelmor_customers', JSON.stringify(users));

                const sessionUser = { ...users[idx] };
                delete sessionUser.password;
                localStorage.setItem('mobelmor_active_customer', JSON.stringify(sessionUser));
                localStorage.setItem('mobelmor_current_user', JSON.stringify(sessionUser));

                // Push updated profile to Supabase
                if (DEFAULT_CONFIG.supabaseUrl && DEFAULT_CONFIG.supabaseKey) {
                    try {
                        await fetch(`${DEFAULT_CONFIG.supabaseUrl}/rest/v1/customers`, {
                            method: 'POST',
                            headers: {
                                'apikey': DEFAULT_CONFIG.supabaseKey,
                                'Authorization': `Bearer ${DEFAULT_CONFIG.supabaseKey}`,
                                'Content-Type': 'application/json',
                                'Prefer': 'resolution=merge-duplicates'
                            },
                            body: JSON.stringify({
                                id: users[idx].id,
                                full_name: users[idx].fullName || users[idx].name,
                                email: users[idx].email,
                                phone: users[idx].phone,
                                address: users[idx].address,
                                city: users[idx].city,
                                district: users[idx].district
                            })
                        });
                    } catch (e) {
                        console.warn("Cloud profile update error:", e);
                    }
                }

                return sessionUser;
            }
            return current;
        },

        getAllCustomers: function () {
            try {
                let custs = [];
                try {
                    const rawCusts = localStorage.getItem('mobelmor_customers');
                    if (rawCusts) custs = JSON.parse(rawCusts);
                } catch (e) { }
                if (!Array.isArray(custs)) custs = [];

                // Merge users from mobelmor_users if present
                try {
                    const rawUsers = localStorage.getItem('mobelmor_users');
                    if (rawUsers) {
                        const parsedUsers = JSON.parse(rawUsers);
                        if (Array.isArray(parsedUsers)) {
                            parsedUsers.forEach(u => {
                                if (u && u.email && !custs.some(c => c.email && c.email.toLowerCase() === u.email.toLowerCase())) {
                                    custs.push(u);
                                }
                            });
                        }
                    }
                } catch (e) { }

                // Merge active customer if not in list
                try {
                    const rawActive = localStorage.getItem('mobelmor_active_customer') || localStorage.getItem('mobelmor_current_user');
                    if (rawActive) {
                        const activeUser = JSON.parse(rawActive);
                        if (activeUser && activeUser.email && !custs.some(c => c.email && c.email.toLowerCase() === activeUser.email.toLowerCase())) {
                            custs.push({
                                id: activeUser.id || ('cust_' + Date.now()),
                                fullName: activeUser.fullName || activeUser.name || 'Kayıtlı Müşteri',
                                name: activeUser.fullName || activeUser.name || 'Kayıtlı Müşteri',
                                email: activeUser.email.toLowerCase(),
                                phone: activeUser.phone || '',
                                address: activeUser.address || '',
                                city: activeUser.city || '',
                                district: activeUser.district || '',
                                createdAt: activeUser.createdAt || new Date().toISOString()
                            });
                        }
                    }
                } catch (e) { }

                // Merge orders customers (guest buyers)
                try {
                    let orders = [];
                    const rawOrders = localStorage.getItem('mobelmor_orders') || localStorage.getItem('mobelmor_all_orders');
                    if (rawOrders) orders = JSON.parse(rawOrders);
                    if (Array.isArray(orders)) {
                        orders.forEach(o => {
                            const email = (o.customer?.email || o.customerEmail || '').trim().toLowerCase();
                            const name = o.customer?.name || o.customer?.fullName || o.customerName || 'Misafir Müşteri';
                            const phone = o.customer?.phone || o.customerPhone || '';
                            const address = o.customer?.address || o.address || '';
                            const city = o.customer?.city || o.city || '';
                            const district = o.customer?.district || o.district || '';
                            if (email && email.includes('@') && !custs.some(c => c.email && c.email.toLowerCase() === email)) {
                                custs.push({
                                    id: 'guest_' + (o.id || Date.now()),
                                    fullName: name,
                                    name: name,
                                    email: email,
                                    phone: phone,
                                    address: address,
                                    city: city,
                                    district: district,
                                    isGuest: true,
                                    createdAt: o.createdAt || o.date || new Date().toISOString()
                                });
                            }
                        });
                    }
                } catch (e) { }

                // Ensure valid record
                custs = custs.filter(c => c && (c.email || c.fullName || c.name) && !c.email?.endsWith('@example.com') && !String(c.id || '').startsWith('USR-'));
                localStorage.setItem('mobelmor_customers', JSON.stringify(custs));
                return custs;
            } catch (e) {
                return [];
            }
        },

        fetchCloudCustomers: async function () {
            let localCusts = this.getAllCustomers();
            if (DEFAULT_CONFIG.supabaseUrl && DEFAULT_CONFIG.supabaseKey) {
                try {
                    const res = await fetch(`${DEFAULT_CONFIG.supabaseUrl}/rest/v1/customers?select=*&order=created_at.desc`, {
                        headers: {
                            'apikey': DEFAULT_CONFIG.supabaseKey,
                            'Authorization': `Bearer ${DEFAULT_CONFIG.supabaseKey}`
                        }
                    });
                    if (res.ok) {
                        const cloudCusts = await res.json();
                        if (Array.isArray(cloudCusts)) {
                            cloudCusts.forEach(cc => {
                                const email = (cc.email || '').toLowerCase();
                                const name = cc.full_name || cc.name || 'Müşteri';
                                if (email && !localCusts.some(lc => lc.email && lc.email.toLowerCase() === email)) {
                                    localCusts.push({
                                        id: cc.id || ('cust_' + Date.now()),
                                        fullName: name,
                                        name: name,
                                        email: email,
                                        phone: cc.phone || '',
                                        address: cc.address || '',
                                        city: cc.city || '',
                                        district: cc.district || '',
                                        createdAt: cc.created_at || new Date().toISOString()
                                    });
                                }
                            });
                            localStorage.setItem('mobelmor_customers', JSON.stringify(localCusts));
                        }
                    }
                } catch (e) {
                    console.warn("Cloud customers fetch:", e);
                }
            }
            return localCusts;
        },

        deleteCustomer: async function (id, email) {
            try {
                // 1. Delete from Supabase Cloud Table
                if (DEFAULT_CONFIG.supabaseUrl && DEFAULT_CONFIG.supabaseKey) {
                    try {
                        if (id) {
                            await fetch(`${DEFAULT_CONFIG.supabaseUrl}/rest/v1/customers?id=eq.${encodeURIComponent(id)}`, {
                                method: 'DELETE',
                                headers: {
                                    'apikey': DEFAULT_CONFIG.supabaseKey,
                                    'Authorization': `Bearer ${DEFAULT_CONFIG.supabaseKey}`
                                }
                            });
                        }
                        if (email) {
                            await fetch(`${DEFAULT_CONFIG.supabaseUrl}/rest/v1/customers?email=eq.${encodeURIComponent(email)}`, {
                                method: 'DELETE',
                                headers: {
                                    'apikey': DEFAULT_CONFIG.supabaseKey,
                                    'Authorization': `Bearer ${DEFAULT_CONFIG.supabaseKey}`
                                }
                            });
                        }
                    } catch (e) {
                        console.warn("Cloud customer delete error:", e);
                    }
                }

                // 2. Delete from Local Storage
                let custs = this.getAllCustomers();
                custs = custs.filter(c => c.id !== id && c.email !== id && (!email || c.email !== email));
                localStorage.setItem('mobelmor_customers', JSON.stringify(custs));
                localStorage.setItem('mobelmor_users', JSON.stringify(custs));

                const active = localStorage.getItem('mobelmor_active_customer');
                if (active) {
                    try {
                        const actObj = JSON.parse(active);
                        if (actObj.id === id || actObj.email === id || (email && actObj.email === email)) {
                            localStorage.removeItem('mobelmor_active_customer');
                            localStorage.removeItem('mobelmor_current_user');
                        }
                    } catch (e) { }
                }

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
                        'Content-Type': 'application/json',
                        'Prefer': 'return=minimal'
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
                        items: typeof newOrder.items === 'string' ? newOrder.items : JSON.stringify(newOrder.items || []),
                        total_amount: newOrder.totalAmount,
                        payment_method: newOrder.paymentMethod,
                        payment_status: newOrder.paymentStatus,
                        status: newOrder.status,
                        created_at: newOrder.createdAt
                    })
                }).then(r => console.log('Supabase Order Synced:', newOrder.orderNumber))
                .catch(e => console.log('Supabase Order Sync Error:', e));
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

        fetchCloudOrders: async function () {
            let localOrders = this.getAllOrders();
            if (DEFAULT_CONFIG.supabaseUrl && DEFAULT_CONFIG.supabaseKey) {
                try {
                    const res = await fetch(`${DEFAULT_CONFIG.supabaseUrl}/rest/v1/orders?select=*&order=created_at.desc`, {
                        headers: {
                            'apikey': DEFAULT_CONFIG.supabaseKey,
                            'Authorization': `Bearer ${DEFAULT_CONFIG.supabaseKey}`
                        }
                    });
                    if (res.ok) {
                        const cloudOrders = await res.json();
                        if (Array.isArray(cloudOrders)) {
                            cloudOrders.forEach(co => {
                                const onum = co.order_number;
                                if (onum && !localOrders.some(lo => lo.orderNumber === onum)) {
                                    localOrders.push({
                                        orderNumber: onum,
                                        customerId: co.customer_id || 'guest',
                                        customerName: co.customer_name || 'Misafir Müşteri',
                                        customerEmail: co.customer_email || '',
                                        customerPhone: co.customer_phone || '',
                                        city: co.city || '',
                                        district: co.district || '',
                                        address: co.address || '',
                                        notes: co.notes || '',
                                        items: typeof co.items === 'string' ? JSON.parse(co.items || '[]') : (co.items || []),
                                        totalAmount: parseFloat(co.total_amount) || 0,
                                        paymentMethod: co.payment_method || 'Kredi Kartı / Havale',
                                        paymentStatus: co.payment_status || 'Tamamlandı',
                                        status: co.status || 'Yeni',
                                        createdAt: co.created_at || new Date().toISOString()
                                    });
                                }
                            });
                            localStorage.setItem('mobelmor_all_orders', JSON.stringify(localOrders));
                        }
                    }
                } catch (e) {
                    console.log('Cloud orders fetch error:', e);
                }
            }
            return localOrders;
        },

        getAllOrders: function () {
            try {
                return JSON.parse(localStorage.getItem('mobelmor_all_orders') || '[]');
            } catch (e) {
                return [];
            }
        },

        updateOrderStatus: async function (orderNumber, newStatus) {
            let orders = this.getAllOrders();
            const order = orders.find(o => o.orderNumber === orderNumber || o.id === orderNumber);
            
            let statusText = "İmalat & Hazırlık Aşamasında";
            if (newStatus === "Kargoda" || newStatus === "shipping" || newStatus === "Sevkiyatta") {
                statusText = "Sevkiyatta / Özel Mobilya Lojistiğinde";
            } else if (newStatus === "Teslim Edildi" || newStatus === "delivered") {
                statusText = "Teslim Edildi & Kuruldu";
            } else if (newStatus === "İptal" || newStatus === "cancelled") {
                statusText = "İptal Edildi";
            }

            if (order) {
                order.status = newStatus;
                order.statusText = statusText;
                localStorage.setItem('mobelmor_all_orders', JSON.stringify(orders));
            }

            // Also update mobelmor_orders for client tracking
            try {
                let userOrders = JSON.parse(localStorage.getItem('mobelmor_orders') || '[]');
                const uOrder = userOrders.find(o => o.orderNumber === orderNumber || o.id === orderNumber);
                if (uOrder) {
                    uOrder.status = newStatus;
                    uOrder.statusText = statusText;
                    localStorage.setItem('mobelmor_orders', JSON.stringify(userOrders));
                }
            } catch (e) {}

            // Push status update to Supabase Cloud
            if (DEFAULT_CONFIG.supabaseUrl && DEFAULT_CONFIG.supabaseKey) {
                try {
                    await fetch(`${DEFAULT_CONFIG.supabaseUrl}/rest/v1/orders?order_number=eq.${encodeURIComponent(orderNumber)}`, {
                        method: 'PATCH',
                        headers: {
                            'apikey': DEFAULT_CONFIG.supabaseKey,
                            'Authorization': `Bearer ${DEFAULT_CONFIG.supabaseKey}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            status: newStatus
                        })
                    });
                } catch (e) {
                    console.log('Supabase Order Status Sync Error:', e);
                }
            }

            return true;
        },

        deleteOrder: async function (orderNumber) {
            let orders = this.getAllOrders();
            orders = orders.filter(o => o.orderNumber !== orderNumber && o.id !== orderNumber);
            localStorage.setItem('mobelmor_all_orders', JSON.stringify(orders));

            if (DEFAULT_CONFIG.supabaseUrl && DEFAULT_CONFIG.supabaseKey) {
                try {
                    await fetch(`${DEFAULT_CONFIG.supabaseUrl}/rest/v1/orders?order_number=eq.${encodeURIComponent(orderNumber)}`, {
                        method: 'DELETE',
                        headers: {
                            'apikey': DEFAULT_CONFIG.supabaseKey,
                            'Authorization': `Bearer ${DEFAULT_CONFIG.supabaseKey}`
                        }
                    });
                } catch (e) {
                    console.log('Supabase Order Delete Error:', e);
                }
            }
            return true;
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
