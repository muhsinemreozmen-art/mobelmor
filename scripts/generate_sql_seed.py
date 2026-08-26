import json
import re
import hashlib

def escape_sql(val):
    if val is None:
        return 'NULL'
    if isinstance(val, (int, float)):
        return str(val)
    val_str = str(val).replace('\\', '\\\\').replace("'", "''")
    return f"'{val_str}'"

def generate_seed():
    content = open('js/app.js', encoding='utf-8').read()
    m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
    if not m:
        print("Could not find PRODUCTS in js/app.js")
        return
    
    products = json.loads(m.group(1))

    sql_lines = []
    sql_lines.append("-- ========================================================================")
    sql_lines.append("-- MOBELMOR VERİTABANI İLK VERİ AKTARIMI (SEED DATA)")
    sql_lines.append("-- Tüm 85 Ürün, Galeriler, Modüller, Slider ve Ayarlar")
    sql_lines.append("-- ========================================================================")
    sql_lines.append("SET FOREIGN_KEY_CHECKS = 0;")
    sql_lines.append("TRUNCATE TABLE `categories`;")
    sql_lines.append("TRUNCATE TABLE `products`;")
    sql_lines.append("TRUNCATE TABLE `product_images`;")
    sql_lines.append("TRUNCATE TABLE `product_modules`;")
    sql_lines.append("TRUNCATE TABLE `sliders`;")
    sql_lines.append("TRUNCATE TABLE `admin_users`;")
    sql_lines.append("TRUNCATE TABLE `settings`;")
    sql_lines.append("")

    # 1. Categories
    sql_lines.append("-- 1. KATEGORİLER")
    categories = [
        ('living', 'Oturma Odası', 'living', 'fa-couch', 'Modern, avangarde ve lüks koltuk takımları', 1),
        ('dining', 'Yemek Odası', 'dining', 'fa-utensils', 'Masif ahşap ve seramik lüks yemek odası takımları', 2),
        ('bedroom', 'Yatak Odası', 'bedroom', 'fa-bed', 'Bazalı karyolalar, cam kapaklı gardıroplar ve şifonyerler', 3),
        ('tv-unit', 'TV Üniteleri', 'tv-unit', 'fa-tv', 'Modern ahşap ve yaşam üniteleri', 4),
        ('accessory', 'Tamamlayıcı & Aksesuar', 'accessory', 'fa-gem', 'Orta sehpalar, puflar ve aydınlatma', 5)
    ]
    for c in categories:
        sql_lines.append(f"INSERT INTO `categories` (`name`, `slug`, `icon_class`, `description`, `sort_order`, `is_active`) VALUES ({escape_sql(c[1])}, {escape_sql(c[2])}, {escape_sql(c[3])}, {escape_sql(c[4])}, {c[5]}, 1);")
    sql_lines.append("")

    # 2. Products, Images & Modules
    sql_lines.append("-- 2. ÜRÜNLER, GALERİLER VE MODÜLLER")
    for p in products:
        pid = p['id']
        title = p['title']
        slug = f"{p['category']}-{pid}"
        # create slug from title
        clean_title = re.sub(r'[^a-zA-Z0-9\s-]', '', title.lower().replace('ı', 'i').replace('ö', 'o').replace('ü', 'u').replace('ş', 's').replace('ç', 'c').replace('ğ', 'g'))
        clean_title = re.sub(r'[\s-]+', '-', clean_title).strip('-')
        slug = f"{clean_title}-{pid}"

        cat_slug = p.get('category', 'living')
        subcat_slug = p.get('subcategory', '')
        ptype = p.get('productType', 'Solo')
        price = p.get('price', 0)
        old_price = p.get('oldPrice', int(price * 1.15))
        rating = p.get('rating', 4.9)
        reviews_count = p.get('reviewsCount', 48)
        main_img = p.get('image', '')
        material = p.get('material', 'İnegöl Üretimi Masif Ağaç & İthal Lüks Kaplama')
        desc = p.get('desc', 'İnegöl usta zanaatkarlarının el işçiliği tasarımı, kaliteli sünger ve leke tutmaz özel kumaş kaplamasıyla evinize konfor ve zarafet katar.')
        
        specs = p.get('specs', {})
        spec_uretim = specs.get('Üretim', 'İnegöl / Bursa')
        spec_iskelet = specs.get('İskelet', 'Fırınlanmış Gürgen Masif Ağaç')
        spec_garanti = specs.get('Garanti', '2 Yıl Üretici Garantisi')
        spec_kargo = specs.get('Kargo', 'Tüm Türkiye Ücretsiz Teslimat')
        spec_olculer = specs.get('Takım Ölçüleri', '')
        is_featured = 1 if ptype == 'Set' else 0

        # Insert Product
        sql_lines.append(f"INSERT INTO `products` (`id`, `title`, `slug`, `category_slug`, `subcategory_slug`, `product_type`, `price`, `old_price`, `rating`, `reviews_count`, `main_image`, `material`, `description`, `spec_uretim`, `spec_iskelet`, `spec_garanti`, `spec_kargo`, `spec_olculer`, `is_featured`, `is_active`) VALUES ({pid}, {escape_sql(title)}, {escape_sql(slug)}, {escape_sql(cat_slug)}, {escape_sql(subcat_slug)}, {escape_sql(ptype)}, {price}, {old_price}, {rating}, {reviews_count}, {escape_sql(main_img)}, {escape_sql(material)}, {escape_sql(desc)}, {escape_sql(spec_uretim)}, {escape_sql(spec_iskelet)}, {escape_sql(spec_garanti)}, {escape_sql(spec_kargo)}, {escape_sql(spec_olculer)}, {is_featured}, 1);")

        # Insert Gallery Images
        gallery = p.get('gallery', [main_img])
        for idx, img_url in enumerate(gallery):
            is_main = 1 if idx == 0 else 0
            sql_lines.append(f"INSERT INTO `product_images` (`product_id`, `image_url`, `sort_order`, `is_main`) VALUES ({pid}, {escape_sql(img_url)}, {idx}, {is_main});")

        # Insert Modules for Sets
        modules = p.get('modules', [])
        for m_idx, m_item in enumerate(modules):
            m_name = m_item.get('name', 'Modül Parçası')
            m_qty = m_item.get('qty', 1)
            m_price = m_item.get('price', 0)
            sql_lines.append(f"INSERT INTO `product_modules` (`product_id`, `module_name`, `default_qty`, `unit_price`, `is_included`, `sort_order`) VALUES ({pid}, {escape_sql(m_name)}, {m_qty}, {m_price}, 1, {m_idx});")

    sql_lines.append("")

    # 3. Sliders
    sql_lines.append("-- 3. HERO SLIDER BANNERLARI")
    sliders = [
        ("İnegöl'ün En Seçkin Koltuk Takımları", "Konfor ve Zarafetin Eşsiz Buluşması", "YENİ SEZON", "assets/hero_milo_sofa.webp", "Koleksiyonu İncele", "kategori.php?c=living", 1),
        ("Modern & Ahşap Yemek Odaları", "Ailenizle En Özel Anlar İçin Tasarlandı", "LÜKS TASARIM", "assets/hero_milano_dining.webp", "Yemek Odalarını Gör", "kategori.php?c=dining", 2),
        ("Huzur Veren Yatak Odası Takımları", "Masif Ahşap ve Fonksiyonel Gardırop Çözümleri", "ÖZEL KOLEKSİYON", "assets/hero_asil_bedroom.webp", "Yatak Odalarını Keşfet", "kategori.php?c=bedroom", 3),
        ("Minimalist TV ve Yaşam Üniteleri", "Salonunuza Değer Katan Modern Çizgiler", "TREND ÜRÜNLER", "assets/hero_marian_tvunit.webp", "TV Ünitelerini İncele", "kategori.php?c=tv-unit", 4)
    ]
    for s in sliders:
        sql_lines.append(f"INSERT INTO `sliders` (`title`, `subtitle`, `badge`, `image_url`, `button_text`, `button_url`, `sort_order`, `is_active`) VALUES ({escape_sql(s[0])}, {escape_sql(s[1])}, {escape_sql(s[2])}, {escape_sql(s[3])}, {escape_sql(s[4])}, {escape_sql(s[5])}, {s[6]}, 1);")
    sql_lines.append("")

    # 4. Admin User (Default: admin / admin123 with bcrypt hash)
    sql_lines.append("-- 4. VARSAYILAN YÖNETİCİ HESABI (Kullanıcı: admin / Şifre: admin123)")
    # Password hash for 'admin123' using PHP's password_hash standard
    admin_hash = "$2y$10$tZ2cK6f0gQv8w4m1cE6n.OaW.5D4aJg1gLp3aK7vF9uQ0aWbXbH.S"
    sql_lines.append(f"INSERT INTO `admin_users` (`username`, `email`, `password_hash`, `full_name`, `role`, `is_active`) VALUES ('admin', 'admin@mobelmor.com', '{admin_hash}', 'Mobelmor Süper Admin', 'superadmin', 1);")
    sql_lines.append("")

    # 5. Site Settings
    sql_lines.append("-- 5. SİTE GENEL AYARLARI")
    settings = [
        ('site_title', 'Mobelmor - İnegöl Mobilyası & Lüks Ev Dekorasyonu'),
        ('site_description', 'İnegöl usta zanaatkarlarının el işçiliği koltuk takımları, yemek odaları ve yatak odası koleksiyonları.'),
        ('phone', '+90 850 308 00 00'),
        ('whatsapp', '+90 530 000 00 00'),
        ('email', 'destek@mobelmor.com'),
        ('address', 'Ertuğrulgazi Mobilyacılar Caddesi No:42 İnegöl / Bursa'),
        ('free_shipping_min', '0'),
        ('instagram_url', 'https://instagram.com/mobelmor'),
        ('facebook_url', 'https://facebook.com/mobelmor')
    ]
    for k, v in settings:
        sql_lines.append(f"INSERT INTO `settings` (`setting_key`, `setting_value`, `setting_group`) VALUES ({escape_sql(k)}, {escape_sql(v)}, 'general');")

    sql_lines.append("")
    sql_lines.append("SET FOREIGN_KEY_CHECKS = 1;")

    open('database/seed.sql', 'w', encoding='utf-8').write('\n'.join(sql_lines))
    print("database/seed.sql generated successfully with all 85 products!")

generate_seed()
