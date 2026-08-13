# mobelmor.com - Modern Mobilya E-Ticaret Platformu

Bu proje **mobelmor.com** mobilya e-ticaret platformunun ön yüz (Web UI), veri işleme, scraping ve ürün kataloğu yönetim sistemini barındırmaktadır.

---

## 📁 Proje Dosya Yapısı

```text
mobelmor/
├── index.html                    # Ana sayfa ve ürün katalog görünümü
├── product-detail.html           # Ürün detay ve galeri sayfası
├── README.md                     # Proje dokümantasyonu
├── assets/                       # Ürün görselleri ve medya varlıkları
├── css/                          # Stil dosyaları
│   └── styles.css                # Tema, responsive düzen ve UI stilleri
├── js/                           # Web uygulama mantığı
│   ├── app.js                    # Katalog listeleme, filtreleme ve sepet logic'i
│   └── detail.js                 # Ürün detay sayfası dinamik içerik logic'i
├── data/                         # Aktif veri setleri
│   ├── clean_5_products.json     # Temizlenmiş ve güncel ürün kataloğu JSON verisi
│   ├── final_imported_products.json # İçe aktarılmış nihai katalog verisi
│   └── raw/                      # Scraping ve ham veri setleri
│       ├── bulk_imported_dataset.json
│       ├── deep_scraped_dataset.json
│       ├── exact_category_assets.json
│       ├── extracted_5_real_products.json
│       ├── imported_data.json
│       ├── real_imported_products.json
│       └── result.json
└── scripts/                      # Python veri ve katalog araçları
    ├── scrapers/                 # Scraping ve veri çekme araçları
    │   ├── deep_scrape_hd.py
    │   ├── fetch_asya.py
    │   ├── find_asya_live_url.py
    │   ├── parse.py
    │   ├── parse_saved_html.py
    │   ├── scrape_zumrut_exact.py
    │   └── test_scrape.py
    ├── importers/                # Veri temizleme ve katalog oluşturucular
    │   ├── build_clean_hd_catalog.py
    │   ├── clean_5_products.py
    │   └── extract_real_5_products.py
    ├── images/                   # Görsel indirme, kontrol ve haritalama araçları
    │   ├── audit_images.py
    │   ├── check_imgs.py
    │   ├── download_all_available_sizes.py
    │   ├── download_bohem.py
    │   ├── download_hd_real_images.py
    │   ├── download_real_fullsize.py
    │   ├── find_imgs.py
    │   └── map_best_local_images.py
    └── sync/                     # Veri ve JavaScript senkronizasyon araçları
        ├── add_product.py
        ├── add_product_fixed.py
        ├── fix_all_catalog.py
        ├── fix_main_images_clean.py
        ├── restore_zara_exact.py
        ├── set_zara_only.py
        ├── sync_both_js.py
        └── sync_detail.py
```

---

## 🚀 Çalıştırma & Geliştirme

### Web Uygulamasını Çalıştırma
Ön yüz HTML/CSS/JS dosyalarından oluştuğu için herhangi bir statik sunucu (ör. VS Code Live Server veya `python -m http.server`) üzerinden doğrudan `index.html` dosyasını açarak çalıştırabilirsiniz.

### Veri Senkronizasyonu
Katalog verilerinde (`data/clean_5_products.json`) güncelleme yapıldığında, ön yüz JS dosyalarını senkronize etmek için:

```bash
python scripts/sync/sync_both_js.py
```

bu komut `data/clean_5_products.json` verisini `js/app.js` ve `js/detail.js` içerisine otomatik aktarır.
