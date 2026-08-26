import sqlite3
import json
import re

def create_sqlite_db():
    conn = sqlite3.connect('database/mobelmor.db')
    cursor = conn.cursor()

    # Drop existing tables
    cursor.executescript("""
    DROP TABLE IF EXISTS product_modules;
    DROP TABLE IF EXISTS product_images;
    DROP TABLE IF EXISTS products;
    DROP TABLE IF EXISTS categories;
    DROP TABLE IF EXISTS sliders;
    DROP TABLE IF EXISTS order_items;
    DROP TABLE IF EXISTS orders;
    DROP TABLE IF EXISTS admin_users;
    DROP TABLE IF EXISTS settings;

    CREATE TABLE categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        slug TEXT NOT NULL UNIQUE,
        icon_class TEXT DEFAULT 'fa-layer-group',
        description TEXT,
        sort_order INTEGER DEFAULT 0,
        is_active INTEGER DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        slug TEXT NOT NULL UNIQUE,
        category_slug TEXT NOT NULL,
        subcategory_slug TEXT,
        product_type TEXT DEFAULT 'Solo',
        price REAL DEFAULT 0,
        old_price REAL DEFAULT 0,
        rating REAL DEFAULT 4.9,
        reviews_count INTEGER DEFAULT 45,
        main_image TEXT NOT NULL,
        material TEXT,
        description TEXT,
        spec_uretim TEXT,
        spec_iskelet TEXT,
        spec_garanti TEXT,
        spec_kargo TEXT,
        spec_olculer TEXT,
        is_featured INTEGER DEFAULT 0,
        is_active INTEGER DEFAULT 1,
        stock_status TEXT DEFAULT 'InStock',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE product_images (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_id INTEGER NOT NULL,
        image_url TEXT NOT NULL,
        sort_order INTEGER DEFAULT 0,
        is_main INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE product_modules (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_id INTEGER NOT NULL,
        module_name TEXT NOT NULL,
        default_qty INTEGER DEFAULT 1,
        unit_price REAL DEFAULT 0,
        is_included INTEGER DEFAULT 1,
        sort_order INTEGER DEFAULT 0
    );

    CREATE TABLE sliders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        subtitle TEXT,
        badge TEXT,
        image_url TEXT NOT NULL,
        button_text TEXT DEFAULT 'Koleksiyonu Keşfet',
        button_url TEXT DEFAULT 'kategori.php',
        sort_order INTEGER DEFAULT 0,
        is_active INTEGER DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_number TEXT NOT NULL UNIQUE,
        customer_name TEXT NOT NULL,
        customer_email TEXT NOT NULL,
        customer_phone TEXT NOT NULL,
        city TEXT NOT NULL,
        district TEXT NOT NULL,
        shipping_address TEXT NOT NULL,
        order_notes TEXT,
        total_amount REAL NOT NULL,
        payment_method TEXT DEFAULT 'Kredi Kartı',
        payment_status TEXT DEFAULT 'Pending',
        order_status TEXT DEFAULT 'Yeni',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE order_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        order_id INTEGER NOT NULL,
        product_id INTEGER,
        product_title TEXT NOT NULL,
        product_image TEXT,
        unit_price REAL NOT NULL,
        quantity INTEGER NOT NULL DEFAULT 1,
        subtotal REAL NOT NULL,
        custom_modules TEXT
    );

    CREATE TABLE admin_users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        full_name TEXT DEFAULT 'Mobelmor Yöneticisi',
        role TEXT DEFAULT 'superadmin',
        is_active INTEGER DEFAULT 1,
        last_login TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE settings (
        setting_key TEXT PRIMARY KEY,
        setting_value TEXT NOT NULL,
        setting_group TEXT DEFAULT 'general'
    );
    """)

    # Populate Categories
    categories = [
        ('Oturma Odası', 'living', 'fa-couch', 'Modern, avangarde ve lüks koltuk takımları', 1),
        ('Yemek Odası', 'dining', 'fa-utensils', 'Masif ahşap ve seramik lüks yemek odası takımları', 2),
        ('Yatak Odası', 'bedroom', 'fa-bed', 'Bazalı karyolalar, cam kapaklı gardıroplar ve şifonyerler', 3),
        ('TV Üniteleri', 'tv-unit', 'fa-tv', 'Modern ahşap ve yaşam üniteleri', 4),
        ('Tamamlayıcı & Aksesuar', 'accessory', 'fa-gem', 'Orta sehpalar, puflar ve aydınlatma', 5)
    ]
    for c in categories:
        cursor.execute("INSERT INTO categories (name, slug, icon_class, description, sort_order) VALUES (?, ?, ?, ?, ?)", c)

    # Populate Products
    content = open('js/app.js', encoding='utf-8').read()
    m = re.search(r'const PRODUCTS = (\[[\s\S]*?\n\]);', content)
    products = json.loads(m.group(1))

    for p in products:
        pid = p['id']
        title = p['title']
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
        desc = p.get('desc', 'İnegöl usta zanaatkarlarının el işçiliği tasarımı.')
        specs = p.get('specs', {})
        is_featured = 1 if ptype == 'Set' else 0

        cursor.execute("""
        INSERT INTO products (id, title, slug, category_slug, subcategory_slug, product_type, price, old_price, rating, reviews_count, main_image, material, description, spec_uretim, spec_iskelet, spec_garanti, spec_kargo, spec_olculer, is_featured, is_active)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)
        """, (pid, title, slug, cat_slug, subcat_slug, ptype, price, old_price, rating, reviews_count, main_img, material, desc, specs.get('Üretim', 'İnegöl / Bursa'), specs.get('İskelet', 'Fırınlanmış Gürgen Masif Ağaç'), specs.get('Garanti', '2 Yıl'), specs.get('Kargo', 'Ücretsiz'), specs.get('Takım Ölçüleri', ''), is_featured))

        for idx, img_url in enumerate(p.get('gallery', [main_img])):
            cursor.execute("INSERT INTO product_images (product_id, image_url, sort_order, is_main) VALUES (?, ?, ?, ?)", (pid, img_url, idx, 1 if idx == 0 else 0))

        for m_idx, m_item in enumerate(p.get('modules', [])):
            cursor.execute("INSERT INTO product_modules (product_id, module_name, default_qty, unit_price, is_included, sort_order) VALUES (?, ?, ?, ?, 1, ?)", (pid, m_item.get('name', ''), m_item.get('qty', 1), m_item.get('price', 0), m_idx))

    # Populate Sliders
    sliders = [
        ("İnegöl'ün En Seçkin Koltuk Takımları", "Konfor ve Zarafetin Eşsiz Buluşması", "YENİ SEZON", "assets/hero_milo_sofa.webp", "Koleksiyonu İncele", "kategori.php?c=living", 1),
        ("Modern & Ahşap Yemek Odaları", "Ailenizle En Özel Anlar İçin Tasarlandı", "LÜKS TASARIM", "assets/hero_milano_dining.webp", "Yemek Odalarını Gör", "kategori.php?c=dining", 2),
        ("Huzur Veren Yatak Odası Takımları", "Masif Ahşap ve Fonksiyonel Gardırop Çözümleri", "ÖZEL KOLEKSİYON", "assets/hero_asil_bedroom.webp", "Yatak Odalarını Keşfet", "kategori.php?c=bedroom", 3),
        ("Minimalist TV ve Yaşam Üniteleri", "Salonunuza Değer Katan Modern Çizgiler", "TREND ÜRÜNLER", "assets/hero_marian_tvunit.webp", "TV Ünitelerini İncele", "kategori.php?c=tv-unit", 4)
    ]
    for s in sliders:
        cursor.execute("INSERT INTO sliders (title, subtitle, badge, image_url, button_text, button_url, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?)", s)

    # Admin user
    admin_hash = "$2y$10$tZ2cK6f0gQv8w4m1cE6n.OaW.5D4aJg1gLp3aK7vF9uQ0aWbXbH.S"
    cursor.execute("INSERT INTO admin_users (username, email, password_hash, full_name, role) VALUES ('admin', 'admin@mobelmor.com', ?, 'Mobelmor Süper Admin', 'superadmin')", (admin_hash,))

    # Settings
    settings = [
        ('site_title', 'Mobelmor - İnegöl Mobilyası & Lüks Ev Dekorasyonu'),
        ('site_description', 'İnegöl usta zanaatkarlarının el işçiliği koltuk takımları.'),
        ('phone', '+90 850 308 00 00'),
        ('whatsapp', '+90 530 000 00 00'),
        ('email', 'destek@mobelmor.com'),
        ('address', 'Ertuğrulgazi Mobilyacılar Caddesi No:42 İnegöl / Bursa')
    ]
    for k, v in settings:
        cursor.execute("INSERT INTO settings (setting_key, setting_value) VALUES (?, ?)", (k, v))

    conn.commit()
    conn.close()
    print("database/mobelmor.db (SQLite) generated successfully with all tables and data!")

create_sqlite_db()
