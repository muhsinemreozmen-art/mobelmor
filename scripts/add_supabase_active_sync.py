# Enhance eoz98.html with active Supabase live sync
import re

c = open('eoz98.html', encoding='utf-8').read()

supabase_func = """
        // Supabase Canlı Senkronizasyon Fonksiyonları
        function loadSupabaseConfig() {
            const url = localStorage.getItem('mobelmor_supabase_url') || '';
            const key = localStorage.getItem('mobelmor_supabase_key') || '';
            document.getElementById('supabaseUrl').value = url;
            document.getElementById('supabaseKey').value = key;
        }

        window.saveSupabaseConfig = async () => {
            const url = document.getElementById('supabaseUrl').value.trim();
            const key = document.getElementById('supabaseKey').value.trim();

            if (!url || !key) {
                alert("Lütfen hem Supabase URL hem de Anon Key değerlerini girin.");
                return;
            }

            localStorage.setItem('mobelmor_supabase_url', url);
            localStorage.setItem('mobelmor_supabase_key', key);

            // Test connection and push current products
            try {
                const btn = event.target;
                const origText = btn.innerHTML;
                btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Bağlanıyor ve Senkronize Ediliyor...';
                
                // Test products table
                const res = await fetch(`${url}/rest/v1/products?select=id&limit=1`, {
                    headers: {
                        "apikey": key,
                        "Authorization": `Bearer ${key}`
                    }
                });

                if (res.ok) {
                    // Push all current products to Supabase
                    const allProducts = window.StoreService.getProducts(true);
                    const upsertRes = await fetch(`${url}/rest/v1/products`, {
                        method: 'POST',
                        headers: {
                            "apikey": key,
                            "Authorization": `Bearer ${key}`,
                            "Content-Type": "application/json",
                            "Prefer": "resolution=merge-duplicates"
                        },
                        body: JSON.stringify(allProducts.map(p => ({
                            id: p.id,
                            title: p.title,
                            category: p.category,
                            price: p.price,
                            original_price: p.originalPrice || p.price,
                            main_image: p.image,
                            gallery: JSON.stringify(p.gallery || [p.image]),
                            dimensions: p.dimensions || '',
                            material: p.material || '',
                            skeleton: p.skeleton || '',
                            sponge: p.sponge || '',
                            fabric: p.fabric || '',
                            is_active: p.isActive !== false
                        })))
                    });

                    btn.innerHTML = origText;
                    alert("✅ Tebrikler! Supabase Bulut Veritabanı başarıyla bağlandı ve tüm ürünleriniz buluta senkronize edildi.");
                } else {
                    btn.innerHTML = origText;
                    alert("❌ Bağlantı hatası: Supabase tablonuz henüz oluşturulmamış veya anahtarlar hatalı. Lütfen SQL Editor adımını tamamladığınızdan emin olun.");
                }
            } catch (err) {
                alert("Bağlantı hatası: " + err.message);
            }
        };
"""

c = c.replace("// Init Check\n        checkLoginState();", supabase_func + "\n        loadSupabaseConfig();\n        // Init Check\n        checkLoginState();")
open('eoz98.html', 'w', encoding='utf-8').write(c)
print("Added active Supabase live sync to eoz98.html")
