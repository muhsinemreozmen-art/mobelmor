-- ========================================================================
-- MOBELMOR E-TİCARET VERİTABANI ŞEMASI (MySQL / MariaDB / SQLite Uyumlu)
-- Versiyon: 1.0.0
-- Karakter Seti: UTF8MB4
-- ========================================================================

SET FOREIGN_KEY_CHECKS = 0;

-- 1. KATEGORİLER TABLOSU
CREATE TABLE IF NOT EXISTS `categories` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `slug` VARCHAR(100) NOT NULL UNIQUE,
    `icon_class` VARCHAR(50) DEFAULT 'fa-layer-group',
    `description` TEXT NULL,
    `sort_order` INT DEFAULT 0,
    `is_active` TINYINT(1) DEFAULT 1,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. ÜRÜNLER TABLOSU
CREATE TABLE IF NOT EXISTS `products` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255) NOT NULL UNIQUE,
    `category_slug` VARCHAR(100) NOT NULL,
    `subcategory_slug` VARCHAR(100) DEFAULT NULL,
    `product_type` ENUM('Set', 'Solo') DEFAULT 'Solo',
    `price` DECIMAL(12, 2) NOT NULL DEFAULT 0.00,
    `old_price` DECIMAL(12, 2) NOT NULL DEFAULT 0.00,
    `rating` DECIMAL(3, 1) DEFAULT 4.9,
    `reviews_count` INT DEFAULT 45,
    `main_image` VARCHAR(255) NOT NULL,
    `material` VARCHAR(255) DEFAULT 'İnegöl Üretimi Masif Ağaç & İthal Lüks Kumaş',
    `description` TEXT DEFAULT NULL,
    `spec_uretim` VARCHAR(100) DEFAULT 'İnegöl / Bursa',
    `spec_iskelet` VARCHAR(150) DEFAULT 'Fırınlanmış Gürgen Masif Ağaç',
    `spec_garanti` VARCHAR(100) DEFAULT '2 Yıl Üretici Garantisi',
    `spec_kargo` VARCHAR(100) DEFAULT 'Tüm Türkiye Ücretsiz Teslimat & Kurulum',
    `spec_olculer` VARCHAR(255) DEFAULT NULL,
    `is_featured` TINYINT(1) DEFAULT 0,
    `is_active` TINYINT(1) DEFAULT 1,
    `stock_status` VARCHAR(50) DEFAULT 'InStock',
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_category` (`category_slug`),
    INDEX `idx_product_type` (`product_type`),
    INDEX `idx_is_active` (`is_active`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. ÜRÜN GALERİ FOTOĞRAFLARI TABLOSU
CREATE TABLE IF NOT EXISTS `product_images` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `product_id` INT NOT NULL,
    `image_url` VARCHAR(255) NOT NULL,
    `sort_order` INT DEFAULT 0,
    `is_main` TINYINT(1) DEFAULT 0,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX `idx_product_id` (`product_id`),
    CONSTRAINT `fk_product_images_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. MODÜLER TAKIM PARÇALARI & FİYATLANDIRMA
CREATE TABLE IF NOT EXISTS `product_modules` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `product_id` INT NOT NULL,
    `module_name` VARCHAR(150) NOT NULL,
    `default_qty` INT DEFAULT 1,
    `unit_price` DECIMAL(12, 2) NOT NULL DEFAULT 0.00,
    `is_included` TINYINT(1) DEFAULT 1,
    `sort_order` INT DEFAULT 0,
    INDEX `idx_module_product` (`product_id`),
    CONSTRAINT `fk_product_modules_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. SLIDER & HERO BANNER TABLOSU
CREATE TABLE IF NOT EXISTS `sliders` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `subtitle` VARCHAR(255) DEFAULT NULL,
    `badge` VARCHAR(100) DEFAULT NULL,
    `image_url` VARCHAR(255) NOT NULL,
    `button_text` VARCHAR(50) DEFAULT 'Koleksiyonu Keşfet',
    `button_url` VARCHAR(255) DEFAULT 'kategori.php',
    `sort_order` INT DEFAULT 0,
    `is_active` TINYINT(1) DEFAULT 1,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. SİPARİŞLER TABLOSU
CREATE TABLE IF NOT EXISTS `orders` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `order_number` VARCHAR(50) NOT NULL UNIQUE,
    `customer_name` VARCHAR(150) NOT NULL,
    `customer_email` VARCHAR(150) NOT NULL,
    `customer_phone` VARCHAR(30) NOT NULL,
    `city` VARCHAR(100) NOT NULL,
    `district` VARCHAR(100) NOT NULL,
    `shipping_address` TEXT NOT NULL,
    `order_notes` TEXT NULL,
    `total_amount` DECIMAL(12, 2) NOT NULL,
    `payment_method` VARCHAR(50) DEFAULT 'Kredi Kartı',
    `payment_status` ENUM('Pending', 'Paid', 'Failed', 'Refunded') DEFAULT 'Pending',
    `order_status` ENUM('Yeni', 'Hazirlaniyor', 'Kargoda', 'TeslimEdildi', 'Iptal') DEFAULT 'Yeni',
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7. SİPARİŞ KALEMLERİ TABLOSU
CREATE TABLE IF NOT EXISTS `order_items` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `order_id` INT NOT NULL,
    `product_id` INT NULL,
    `product_title` VARCHAR(255) NOT NULL,
    `product_image` VARCHAR(255) NULL,
    `unit_price` DECIMAL(12, 2) NOT NULL,
    `quantity` INT NOT NULL DEFAULT 1,
    `subtotal` DECIMAL(12, 2) NOT NULL,
    `custom_modules` TEXT NULL,
    INDEX `idx_order_id` (`order_id`),
    CONSTRAINT `fk_order_items_order` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 8. YÖNETİCİ HESAPLARI (ADMIN)
CREATE TABLE IF NOT EXISTS `admin_users` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(50) NOT NULL UNIQUE,
    `email` VARCHAR(150) NOT NULL UNIQUE,
    `password_hash` VARCHAR(255) NOT NULL,
    `full_name` VARCHAR(100) DEFAULT 'Mobelmor Yöneticisi',
    `role` ENUM('superadmin', 'admin', 'editor') DEFAULT 'admin',
    `is_active` TINYINT(1) DEFAULT 1,
    `last_login` DATETIME NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 9. SİTE AYARLARI TABLOSU
CREATE TABLE IF NOT EXISTS `settings` (
    `setting_key` VARCHAR(100) PRIMARY KEY,
    `setting_value` TEXT NOT NULL,
    `setting_group` VARCHAR(50) DEFAULT 'general',
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET FOREIGN_KEY_CHECKS = 1;
