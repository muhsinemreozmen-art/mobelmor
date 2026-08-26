import json
import os
import re

# Perfectly matched 21 Sets + their exact Solo Modular Components
products_data = [
    # =========================================================================
    # OTURMA ODASI (7 ADET ANA TAKIM + MODÜLLERİ)
    # =========================================================================
    {
        "set_id": 1,
        "title": "Gold Lüks Koltuk Takımı",
        "category": "living",
        "subcategory": "sofas",
        "price_regular": 52000.0,
        "price_sale": 45000.0,
        "base_asset": "assets/minegolden_p1",
        "desc": "Gold Koltuk Takımı; antrasit kadife kumaşı, fırınlanmış masif gürgen iskeleti ve özel altın metal ayak detaylarıyla salonunuza lüks ve konforlu bir atmosfer katar.",
        "material": "İNEGÖL ÜRETİMİ FIRINLANMIŞ MASİF GÜRGEN & GOLD PASLANMAZ METAL",
        "specs": {
            "Üretim": "İnegöl / Bursa",
            "İskelet": "Fırınlanmış Masif Gürgen Ağacı",
            "Sünger": "32 DNS Soft Konfor Süngeri",
            "Kumaş": "Leke Tutmaz İthal Silinebilir Kadife Kumaş",
            "Garanti": "2 Yıl Üretici Garantisi",
            "Kargo": "Tüm Türkiye Ücretsiz Sigortalı Teslimat & Kurulum",
            "Takım Ölçüleri": "3'lü (G: 225 cm, D: 92 cm, Y: 77 cm) | 2'li (G: 180 cm, D: 92 cm, Y: 77 cm) | Berjer (G: 70 cm, D: 70 cm, Y: 90 cm)"
        },
        "solos": [
            {
                "title": "Gold 3'lü Koltuk",
                "subcategory": "sofas",
                "price_sale": 22500.0,
                "price_regular": 26000.0,
                "piece_num": 2,
                "desc": "Gold serisine ait 3'lü geniş ve konforlu kanepe modülü (G: 225 cm, D: 92 cm, Y: 77 cm)."
            },
            {
                "title": "Gold 2'li Koltuk",
                "subcategory": "sofas",
                "price_sale": 17500.0,
                "price_regular": 20000.0,
                "piece_num": 3,
                "desc": "Gold serisine ait 2'li şık salon kanepesi (G: 180 cm, D: 92 cm, Y: 77 cm)."
            },
            {
                "title": "Gold Tekli Berjer",
                "subcategory": "armchairs",
                "price_sale": 11000.0,
                "price_regular": 13000.0,
                "piece_num": 4,
                "desc": "Gold serisine ait ergonomik yüksek sırt destekli tekli berjer koltuk (G: 70 cm, D: 70 cm, Y: 90 cm)."
            }
        ]
    },

    {
        "set_id": 2,
        "title": "Zümrüt Avangarde Koltuk Takımı",
        "category": "living",
        "subcategory": "sofas",
        "price_regular": 54000.0,
        "price_sale": 46500.0,
        "base_asset": "assets/minegolden_p2",
        "desc": "Zümrüt Koltuk Takımı; canlı fuşya tonları, zarif kapitone dikiş işçiliği ve gold tasarım detaylarıyla yaşam alanınıza saray zarafetini getirir.",
        "material": "MASİF GÜRGEN İSKELET & EL İŞÇİLİĞİ KAPİTONE DÖŞEME",
        "specs": {
            "Üretim": "İnegöl / Bursa",
            "İskelet": "1. Sınıf Fırınlanmış Gürgen Ağacı",
            "Sünger": "35 DNS HR Sünger (Uzun Ömürlü Çökme Yapmaz)",
            "Kumaş": "Özel Dokuma Lüks Kadife Kumaş",
            "Garanti": "2 Yıl Resmi Üretici Garantisi",
            "Kargo": "Ücretsiz Teslimat & Odada Kurulum",
            "Takım Ölçüleri": "3'lü (G: 220 cm, D: 90 cm, Y: 80 cm) | 2'li (G: 175 cm, D: 90 cm, Y: 80 cm) | Berjer (G: 88 cm, D: 70 cm, Y: 65 cm)"
        },
        "solos": [
            {
                "title": "Zümrüt 3'lü Koltuk",
                "subcategory": "sofas",
                "price_sale": 23500.0,
                "price_regular": 27000.0,
                "piece_num": 2,
                "desc": "Zümrüt serisi kapitoneli lüks 3'lü salon kanepesi (G: 220 cm, D: 90 cm, Y: 80 cm)."
            },
            {
                "title": "Zümrüt 2'li Koltuk",
                "subcategory": "sofas",
                "price_sale": 18000.0,
                "price_regular": 21000.0,
                "piece_num": 3,
                "desc": "Zümrüt serisi 2'li kanepe ünitesi (G: 175 cm, D: 90 cm, Y: 80 cm)."
            },
            {
                "title": "Zümrüt Tekli Berjer",
                "subcategory": "armchairs",
                "price_sale": 11500.0,
                "price_regular": 13500.0,
                "piece_num": 4,
                "desc": "Zümrüt serisi yuvarlak hatlı tasarım berjer (G: 88 cm, D: 70 cm, Y: 65 cm)."
            }
        ]
    },

    {
        "set_id": 3,
        "title": "Bohem Natural Keten Koltuk Takımı",
        "category": "living",
        "subcategory": "sofas",
        "price_regular": 49000.0,
        "price_sale": 42900.0,
        "base_asset": "assets/minegolden_p3",
        "desc": "Bohem Koltuk Takımı Natural; doğal keten dokusu, geniş oturum derinliği ve organik formuyla sıcak, samimi ve huzurlu bir oturma odası deneyimi sunar.",
        "material": "ORGANİK DOKUMA KETEN & MASİF GÜRGEN KASA",
        "specs": {
            "Üretim": "İnegöl / Bursa",
            "İskelet": "Doğal Masif Ahşap Gövde",
            "Sünger": "Kuş Tüyü Sünger Katmanlı Ekstra Konfor",
            "Kumaş": "Nefes Alan %100 Doğal Keten Dokuma",
            "Garanti": "2 Yıl Üretici Garantisi",
            "Kargo": "Tüm Türkiye Ücretsiz Teslimat",
            "Takım Ölçüleri": "3'lü (G: 215 cm, D: 100 cm, Y: 78 cm) | Tekli (G: 85 cm, D: 85 cm, Y: 78 cm) | Puf (G: 90 cm, D: 60 cm, Y: 45 cm)"
        },
        "solos": [
            {
                "title": "Bohem 3'lü Natural Koltuk",
                "subcategory": "sofas",
                "price_sale": 22000.0,
                "price_regular": 25000.0,
                "piece_num": 2,
                "desc": "Bohem serisine ait doğal keten 3'lü kanepe (G: 215 cm, D: 100 cm)."
            },
            {
                "title": "Bohem Tekli Koltuk",
                "subcategory": "armchairs",
                "price_sale": 11000.0,
                "price_regular": 13000.0,
                "piece_num": 4,
                "desc": "Bohem serisi tekli rahat koltuk (G: 85 cm, D: 85 cm)."
            },
            {
                "title": "Bohem Natural Puf",
                "subcategory": "tables",
                "price_sale": 7500.0,
                "price_regular": 9000.0,
                "piece_num": 5,
                "desc": "Bohem serisi keten döşemeli dikdörtgen sehpa puf (G: 90 cm, D: 60 cm)."
            }
        ]
    },

    {
        "set_id": 4,
        "title": "Mono Modern Koltuk Takımı",
        "category": "living",
        "subcategory": "sofas",
        "price_regular": 51000.0,
        "price_sale": 44500.0,
        "base_asset": "assets/minegolden_p4",
        "desc": "Mono Koltuk Takımı; minimalist modern çizgileri, antrasit gri dokulu kumaşı ve ergonomik sırt desteğiyle çağdaş evlerin vazgeçilmezidir.",
        "material": "1. SINIF FIRINLANMIŞ GÜRGEN & DOKULU İTHAL KUMAŞ",
        "specs": {
            "Üretim": "İnegöl / Bursa",
            "İskelet": "Gürgen Ağacı & Çelik Yay Sistemi",
            "Sünger": "32 DNS Orta Sertlikte Ortopedik Sünger",
            "Garanti": "2 Yıl Üretici Garantisi",
            "Takım Ölçüleri": "3'lü (G: 210 cm, D: 96 cm, Y: 87 cm) | 2'li (G: 170 cm, D: 96 cm, Y: 87 cm) | Berjer (G: 75 cm, D: 90 cm, Y: 80 cm)"
        },
        "solos": [
            {
                "title": "Mono 3'lü Koltuk",
                "subcategory": "sofas",
                "price_sale": 22000.0,
                "price_regular": 25500.0,
                "piece_num": 2,
                "desc": "Mono serisi modern 3'lü kanepe (G: 210 cm, D: 96 cm, Y: 87 cm)."
            },
            {
                "title": "Mono 2'li Koltuk",
                "subcategory": "sofas",
                "price_sale": 17000.0,
                "price_regular": 19500.0,
                "piece_num": 3,
                "desc": "Mono serisi 2'li kanepe ünitesi (G: 170 cm, D: 96 cm, Y: 87 cm)."
            },
            {
                "title": "Mono Tekli Berjer",
                "subcategory": "armchairs",
                "price_sale": 10500.0,
                "price_regular": 12500.0,
                "piece_num": 4,
                "desc": "Mono serisi ergonomik berjer (G: 75 cm, D: 90 cm, Y: 80 cm)."
            }
        ]
    },

    {
        "set_id": 5,
        "title": "Leon Ahşap Ayaklı Koltuk Takımı",
        "category": "living",
        "subcategory": "sofas",
        "price_regular": 53000.0,
        "price_sale": 46000.0,
        "base_asset": "assets/minegolden_p5",
        "desc": "Leon Koltuk Takımı; doğal ceviz ahşap ayakları, geniş oturumu ve zarif dikiş detaylarıyla İskandinav ve modern tasarımın kusursuz birleşimidir.",
        "material": "DOĞAL CEVİZ AHŞAP AYAKLAR & FIRINLANMIŞ GÜRGEN KASA",
        "specs": {
            "Üretim": "İnegöl / Bursa",
            "İskelet": "Masif Gürgen & Doğal Ceviz Ayak",
            "Garanti": "2 Yıl Üretici Garantisi",
            "Takım Ölçüleri": "3'lü (G: 240 cm, D: 95 cm, Y: 70 cm) | 2'li (G: 190 cm, D: 95 cm, Y: 70 cm) | Berjer (G: 75 cm, D: 70 cm, Y: 95 cm)"
        },
        "solos": [
            {
                "title": "Leon Ahşap 3'lü Koltuk",
                "subcategory": "sofas",
                "price_sale": 23000.0,
                "price_regular": 26500.0,
                "piece_num": 2,
                "desc": "Leon serisi masif ceviz ayaklı geniş 3'lü koltuk (G: 240 cm, D: 95 cm, Y: 70 cm)."
            },
            {
                "title": "Leon Ahşap 2'li Koltuk",
                "subcategory": "sofas",
                "price_sale": 18000.0,
                "price_regular": 21000.0,
                "piece_num": 3,
                "desc": "Leon serisi 2'li koltuk ünitesi (G: 190 cm, D: 95 cm, Y: 70 cm)."
            },
            {
                "title": "Leon Tekli Ahşap Berjer",
                "subcategory": "armchairs",
                "price_sale": 11000.0,
                "price_regular": 13000.0,
                "piece_num": 4,
                "desc": "Leon serisi ahşap ayaklı şık tekli berjer (G: 75 cm, D: 70 cm, Y: 95 cm)."
            }
        ]
    },

    {
        "set_id": 6,
        "title": "Sahra Modern TV & Duvar Ünitesi",
        "category": "living",
        "subcategory": "consoles",
        "price_regular": 28000.0,
        "price_sale": 23900.0,
        "base_asset": "assets/minegolden_p19",
        "desc": "Sahra TV Ünitesi; doğal ceviz kaplama yüzeyi, şık füme cam kapakları ve geniş depolama çekmeceleriyle salonunuzun multimedya merkezidir.",
        "material": "1. SINIF DOĞAL CEVİZ KAPLAMA MDF & TEMPERLİ CAM",
        "specs": {
            "Üretim": "İnegöl / Bursa",
            "Gövde": "1. Sınıf MDF & Çizilmeye Dayanıklı Melamin",
            "Menteşe / Ray": "Frenli Teleskopik Ray & Soft-Close Menteşe",
            "Garanti": "2 Yıl Üretici Garantisi",
            "Ölçüler": "Alt Blok (G: 220 cm, D: 45 cm, Y: 50 cm) | Üst Raf (G: 140 cm, D: 22 cm, Y: 28 cm)"
        },
        "solos": [
            {
                "title": "Sahra TV Alt Blok Konsol",
                "subcategory": "consoles",
                "price_sale": 16500.0,
                "price_regular": 19500.0,
                "piece_num": 2,
                "desc": "Sahra TV alt sehpası ve çekmeceli konsol ünitesi (G: 220 cm, D: 45 cm, Y: 50 cm)."
            },
            {
                "title": "Sahra Asma Duvar Rafı & Üst Dolap",
                "subcategory": "consoles",
                "price_sale": 7400.0,
                "price_regular": 8500.0,
                "piece_num": 3,
                "desc": "Sahra serisi dekoratif duvar rafı ve kitaplık modülü."
            }
        ]
    },

    {
        "set_id": 7,
        "title": "Salvador Lüks TV & Yaşam Ünitesi",
        "category": "living",
        "subcategory": "consoles",
        "price_regular": 29500.0,
        "price_sale": 24900.0,
        "base_asset": "assets/minegolden_p20",
        "desc": "Salvador TV Ünitesi; antrasit lake boyalı gövdesi, gold metal şeritleri ve geniş televizyon yerleşimiyle modern salonların gözdesidir.",
        "material": "LAKE BOYALI MDF & GOLD METAL PROFİL",
        "specs": {
            "Üretim": "İnegöl / Bursa",
            "Gövde": "CNC İşlemeli 1. Sınıf MDF Lake Boya",
            "Garanti": "2 Yıl Üretici Garantisi",
            "Ölçüler": "Alt Blok (G: 210 cm, D: 53 cm, Y: 43 cm) | Üst Dolap Modülü"
        },
        "solos": [
            {
                "title": "Salvador TV Alt Konsol",
                "subcategory": "consoles",
                "price_sale": 17000.0,
                "price_regular": 20000.0,
                "piece_num": 2,
                "desc": "Salvador serisi TV alt sehpası (G: 210 cm, D: 53 cm, Y: 43 cm)."
            },
            {
                "title": "Salvador Asma Kitaplık & Dolap",
                "subcategory": "consoles",
                "price_sale": 7900.0,
                "price_regular": 9500.0,
                "piece_num": 3,
                "desc": "Salvador serisi duvara asılan dekoratif dolap modülü."
            }
        ]
    },

    # =========================================================================
    # YEMEK ODASI (7 ADET ANA TAKIM + MODÜLLERİ)
    # =========================================================================
    {
        "set_id": 8,
        "title": "İcon Yuvarlak Masa Sandalye Takımı",
        "category": "dining",
        "subcategory": "dining-tables",
        "price_regular": 46000.0,
        "price_sale": 39900.0,
        "base_asset": "assets/minegolden_p6",
        "desc": "İcon Yuvarlak Yemek Odası Takımı; mermer desenli şık yuvarlak masası ve 4 adet ergonomik kumaş kaplamalı sandalyesiyle samimi ve zarif sofralar kurar.",
        "material": "ÇİZİLMEZ MERMER DESENLİ YÜZEY & MASİF AHŞAP AYAKLAR",
        "specs": {
            "Üretim": "İnegöl / Bursa",
            "Masa Tablası": "1. Sınıf CNC Kesim Mermer Desen Kaplama",
            "Ayaklar": "Masif Gürgen Ağacı",
            "Garanti": "2 Yıl Üretici Garantisi",
            "Ölçüler": "Masa: Çap 120 cm, Y: 76 cm | Sandalye (4 Adet)"
        },
        "solos": [
            {
                "title": "İcon Yuvarlak Yemek Masası",
                "subcategory": "dining-tables",
                "price_sale": 21000.0,
                "price_regular": 24500.0,
                "piece_num": 2,
                "desc": "İcon serisine ait 120 cm çapında mermer desenli yuvarlak masa (Çap: 120 cm, Y: 76 cm)."
            },
            {
                "title": "İcon Ergonomik Sandalye (4 Adet)",
                "subcategory": "chairs",
                "price_sale": 18900.0,
                "price_regular": 21500.0,
                "piece_num": 4,
                "desc": "İcon serisi 4 adet kumaş döşemeli ergonomik yemek sandalyesi takımı."
            }
        ]
    },

    {
        "set_id": 9,
        "title": "İcon Meşe Ahşap Yemek Odası Takımı",
        "category": "dining",
        "subcategory": "dining-tables",
        "price_regular": 49000.0,
        "price_sale": 42500.0,
        "base_asset": "assets/minegolden_p7",
        "desc": "İcon Meşe Yemek Odası Takımı; doğal meşe kaplama sabit masası ve 6 adet konforlu sandalyesiyle sıcak, doğal ve uzun ömürlü bir kullanım sunar.",
        "material": "DOĞAL MEŞE KAPLAMA MDF & FIRINLANMIŞ GÜRGEN İSKELET",
        "specs": {
            "Üretim": "İnegöl / Bursa",
            "Masa Ölçüsü": "G: 180 cm, D: 90 cm, Y: 76 cm",
            "Sandalye Sayısı": "6 Adet Kumaş Kaplamalı Sandalye",
            "Garanti": "2 Yıl Resmi Üretici Garantisi"
        },
        "solos": [
            {
                "title": "İcon Meşe Yemek Masası",
                "subcategory": "dining-tables",
                "price_sale": 22500.0,
                "price_regular": 26000.0,
                "piece_num": 2,
                "desc": "İcon serisi doğal meşe kaplamalı 6 kişilik yemek masası (G: 180 cm, D: 90 cm, Y: 76 cm)."
            },
            {
                "title": "İcon Meşe Sandalye (6 Adet)",
                "subcategory": "chairs",
                "price_sale": 20000.0,
                "price_regular": 23000.0,
                "piece_num": 4,
                "desc": "İcon serisi ahşap ayaklı 6 adet konforlu sandalye seti."
            }
        ]
    },

    {
        "set_id": 10,
        "title": "Forte Meşe Modern Yemek Odası Takımı",
        "category": "dining",
        "subcategory": "dining-tables",
        "price_regular": 51000.0,
        "price_sale": 44900.0,
        "base_asset": "assets/minegolden_p8",
        "desc": "Forte Meşe Yemek Odası; dinamik çapraz ayak tasarımı, geniş tablası ve 6 adet özel döşeme sandalyesiyle modern yemek odalarının gözdesidir.",
        "material": "FIRINLANMIŞ MEŞE AĞACI & LEKE TUTMAZ DÖŞEME",
        "specs": {
            "Üretim": "İnegöl / Bursa",
            "Masa Ölçüsü": "G: 190 cm, D: 95 cm, Y: 77 cm",
            "Kapasite": "6-8 Kişilik",
            "Garanti": "2 Yıl Üretici Garantisi"
        },
        "solos": [
            {
                "title": "Forte Meşe Çapraz Ayak Masa",
                "subcategory": "dining-tables",
                "price_sale": 23900.0,
                "price_regular": 27500.0,
                "piece_num": 2,
                "desc": "Forte serisi modern çapraz ayaklı 190 cm yemek masası."
            },
            {
                "title": "Forte Kumaş Sandalye (6 Adet)",
                "subcategory": "chairs",
                "price_sale": 21000.0,
                "price_regular": 23500.0,
                "piece_num": 4,
                "desc": "Forte serisi 6 adet ergonomik kumaş döşemeli yemek sandalyesi."
            }
        ]
    },

    {
        "set_id": 11,
        "title": "Seramik Mutfak & Yemek Masası Takımı",
        "category": "dining",
        "subcategory": "dining-tables",
        "price_regular": 45000.0,
        "price_sale": 38900.0,
        "base_asset": "assets/minegolden_p9",
        "desc": "Seramik Yemek Takımı; ısıya ve çizilmeye dayanıklı porselen seramik tablası ve 4 adet modern sandalyesiyle hem mutfak hem yemek odası için idealdir.",
        "material": "ÇİZİLMEZ & LEKE TUTMAZ PORSELEN SERAMİK TABLA",
        "specs": {
            "Üretim": "İnegöl / Bursa",
            "Tabla": "İtalyan Porselen Seramik Yüzey",
            "Ayaklar": "Statik Fırın Boyalı Metal",
            "Masa Ölçüsü": "G: 160 cm, D: 85 cm, Y: 75 cm",
            "Garanti": "2 Yıl Üretici Garantisi"
        },
        "solos": [
            {
                "title": "Seramik Mutfak & Yemek Masası",
                "subcategory": "dining-tables",
                "price_sale": 21000.0,
                "price_regular": 24000.0,
                "piece_num": 2,
                "desc": "Seramik serisine ait ısıya dayanıklı masa (G: 160 cm, D: 85 cm, Y: 75 cm)."
            },
            {
                "title": "Seramik Takım Sandalyesi (4 Adet)",
                "subcategory": "chairs",
                "price_sale": 17900.0,
                "price_regular": 21000.0,
                "piece_num": 4,
                "desc": "Seramik serisi metal ayaklı 4 adet kolay silinebilir sandalye."
            }
        ]
    },

    {
        "set_id": 12,
        "title": "İpek Lüks Yemek Odası Takımı",
        "category": "dining",
        "subcategory": "dining-tables",
        "price_regular": 62000.0,
        "price_sale": 54900.0,
        "base_asset": "assets/minegolden_p10",
        "desc": "İpek Yemek Odası Takımı; aynalı lüks konsol dolabı, teleskopik raylı açılır fonksiyonel yemek masası ve 6 adet zarafet timsali sandalyesiyle tam bir salon takımıdır.",
        "material": "MDF LAKE & PASLANMAZ GOLD DETAYLAR",
        "specs": {
            "Üretim": "İnegöl / Bursa",
            "Konsol": "G: 205 cm, D: 48 cm, Y: 82 cm (Aynalı)",
            "Masa (Açılır)": "G: 175-215 cm, D: 90 cm, Y: 78 cm",
            "Sandalye": "6 Adet Lüks Kadife Sandalye",
            "Garanti": "2 Yıl Üretici Garantisi"
        },
        "solos": [
            {
                "title": "İpek Aynalı Konsol & Büfe",
                "subcategory": "buffets",
                "price_sale": 21000.0,
                "price_regular": 24000.0,
                "piece_num": 3,
                "desc": "İpek serisine ait aynalı geniş konsol ve büfe ünitesi (G: 205 cm, D: 48 cm, Y: 82 cm)."
            },
            {
                "title": "İpek Açılır Fonksiyonel Masa",
                "subcategory": "dining-tables",
                "price_sale": 19500.0,
                "price_regular": 22500.0,
                "piece_num": 2,
                "desc": "İpek serisi açılır mekanizmalı yemek masası (G: 175-215 cm, D: 90 cm, Y: 78 cm)."
            },
            {
                "title": "İpek Lüks Sandalye (6 Adet)",
                "subcategory": "chairs",
                "price_sale": 14400.0,
                "price_regular": 16500.0,
                "piece_num": 4,
                "desc": "İpek serisine ait 6 adet kadife lüks sandalye seti."
            }
        ]
    },

    {
        "set_id": 13,
        "title": "Marian Modern Ahşap Yemek Odası",
        "category": "dining",
        "subcategory": "dining-tables",
        "price_regular": 58000.0,
        "price_sale": 51000.0,
        "base_asset": "assets/minegolden_p18",
        "desc": "Marian Yemek Odası Takımı; ceviz ahşap konsolu, 180 cm sabit yemek masası ve 6 adet konforlu sandalyesiyle modern İnegöl işçiliğini evinize taşır.",
        "material": "DOĞAL CEVİZ KAPLAMA & CNC İŞLEMELİ KAPAKLAR",
        "specs": {
            "Üretim": "İnegöl / Bursa",
            "Konsol": "G: 200 cm, D: 46 cm, Y: 80 cm",
            "Masa": "G: 180 cm, D: 90 cm, Y: 76 cm",
            "Garanti": "2 Yıl Üretici Garantisi"
        },
        "solos": [
            {
                "title": "Marian Ahşap Konsol",
                "subcategory": "buffets",
                "price_sale": 19500.0,
                "price_regular": 22000.0,
                "piece_num": 3,
                "desc": "Marian serisi geniş ceviz konsol dolabı (G: 200 cm, D: 46 cm, Y: 80 cm)."
            },
            {
                "title": "Marian Sabit Yemek Masası",
                "subcategory": "dining-tables",
                "price_sale": 18000.0,
                "price_regular": 21000.0,
                "piece_num": 2,
                "desc": "Marian serisi 180 cm yemek masası."
            },
            {
                "title": "Marian Sandalye (6 Adet)",
                "subcategory": "chairs",
                "price_sale": 13500.0,
                "price_regular": 15000.0,
                "piece_num": 4,
                "desc": "Marian serisi 6 adet ahşap ayaklı sandalye."
            }
        ]
    },

    {
        "set_id": 14,
        "title": "Lisa Avangarde Yemek Odası Takımı",
        "category": "dining",
        "subcategory": "dining-tables",
        "price_regular": 64000.0,
        "price_sale": 56500.0,
        "base_asset": "assets/minegolden_p17",
        "desc": "Lisa Yemek Odası Takımı; gold kulplu konsol modülü, geniş tasarım masası ve 6 adet zarafet dolu sandalyesiyle lüks ev dekorasyonuna hitap eder.",
        "material": "LAKE BOYALI MDF & GOLD ÖZEL KULPLAR",
        "specs": {
            "Üretim": "İnegöl / Bursa",
            "Konsol": "G: 210 cm, D: 50 cm, Y: 84 cm",
            "Masa": "G: 190 cm, D: 95 cm, Y: 77 cm",
            "Garanti": "2 Yıl Üretici Garantisi"
        },
        "solos": [
            {
                "title": "Lisa Lüks Konsol & Büfe",
                "subcategory": "buffets",
                "price_sale": 22000.0,
                "price_regular": 25000.0,
                "piece_num": 3,
                "desc": "Lisa serisi gold detaylı lake konsol (G: 210 cm, D: 50 cm, Y: 84 cm)."
            },
            {
                "title": "Lisa Tasarım Yemek Masası",
                "subcategory": "dining-tables",
                "price_sale": 20000.0,
                "price_regular": 23000.0,
                "piece_num": 2,
                "desc": "Lisa serisi 190 cm yemek masası."
            },
            {
                "title": "Lisa Lüks Sandalye (6 Adet)",
                "subcategory": "chairs",
                "price_sale": 14500.0,
                "price_regular": 16000.0,
                "piece_num": 4,
                "desc": "Lisa serisi 6 adet avangarde sandalye takımı."
            }
        ]
    },

    # =========================================================================
    # YATAK ODASI (7 ADET ANA TAKIM + MODÜLLERİ)
    # =========================================================================
    {
        "set_id": 15,
        "title": "Zen Modern Yatak Odası Takımı",
        "category": "bedroom",
        "subcategory": "beds",
        "price_regular": 68000.0,
        "price_sale": 59900.0,
        "base_asset": "assets/minegolden_p11",
        "desc": "Zen Yatak Odası Takımı; 6 kapaklı LED aydınlatmalı gardırobu, kumaş başlıklı karyolası, aynalı şifonyeri ve 2 adet komodiniyle tam ve eksiksiz bir yatak odası konseptidir.",
        "material": "1. SINIF MDF GÖVDE & LED AYDINLATMALI İÇ DÜZEN",
        "specs": {
            "Üretim": "İnegöl / Bursa",
            "Gardırop": "6 Kapaklı (G: 260 cm, D: 60 cm, Y: 218 cm)",
            "Karyola": "160x200 Yatak Uyumlu (G: 180 cm, D: 215 cm, Y: 125 cm)",
            "Şifonyer": "Aynalı (G: 120 cm, D: 45 cm, Y: 85 cm)",
            "Komodin": "2 Adet (G: 60 cm, D: 45 cm, Y: 48 cm)",
            "Garanti": "2 Yıl Üretici Garantisi",
            "Kargo": "Tüm Türkiye Ücretsiz Sigortalı Teslimat & Montaj"
        },
        "solos": [
            {
                "title": "Zen 6 Kapaklı Gardırop",
                "subcategory": "wardrobes",
                "price_sale": 29500.0,
                "price_regular": 34000.0,
                "piece_num": 2,
                "desc": "Zen serisine ait 6 kapaklı LED sensör aydınlatmalı lüks gardırop (G: 260 cm, D: 60 cm, Y: 218 cm)."
            },
            {
                "title": "Zen Karyola & Yatak Başlığı",
                "subcategory": "beds",
                "price_sale": 16500.0,
                "price_regular": 19000.0,
                "piece_num": 3,
                "desc": "Zen serisi kumaş döşemeli yatak başlıklı karyola ünitesi (160x200 cm uyumlu)."
            },
            {
                "title": "Zen Aynalı Şifonyer",
                "subcategory": "consoles",
                "price_sale": 8500.0,
                "price_regular": 10000.0,
                "piece_num": 4,
                "desc": "Zen serisi geniş çekmeceli ve aynalı şifonyer modülü (G: 120 cm, D: 45 cm, Y: 85 cm)."
            },
            {
                "title": "Zen Komodin (2 Adet)",
                "subcategory": "nightstands",
                "price_sale": 5400.0,
                "price_regular": 6500.0,
                "piece_num": 5,
                "desc": "Zen serisi 2 adet frenli çekmeceli komodin çifti (G: 60 cm, D: 45 cm, Y: 48 cm)."
            }
        ]
    },

    {
        "set_id": 16,
        "title": "Dora Ahşap Yatak Odası Takımı",
        "category": "bedroom",
        "subcategory": "beds",
        "price_regular": 65000.0,
        "price_sale": 57500.0,
        "base_asset": "assets/minegolden_p12",
        "desc": "Dora Yatak Odası Takımı; doğal ahşap sıcaklığı, aynalı dolap kapakları ve fonksiyonel çekmece düzeniyle yatak odanıza huzur katar.",
        "material": "DOĞAL AHŞAP DOKULU MDF & FRENLİ RAY SİSTEMLERİ",
        "specs": {
            "Üretim": "İnegöl / Bursa",
            "Gardırop": "6 Kapaklı (G: 250 cm, D: 62 cm, Y: 215 cm)",
            "Karyola": "160x200 cm (G: 175 cm, D: 210 cm, Y: 120 cm)",
            "Şifonyer": "G: 115 cm, D: 46 cm, Y: 82 cm",
            "Komodin": "2 Adet (G: 55 cm, D: 42 cm, Y: 45 cm)",
            "Garanti": "2 Yıl Üretici Garantisi"
        },
        "solos": [
            {
                "title": "Dora 6 Kapaklı Ahşap Gardırop",
                "subcategory": "wardrobes",
                "price_sale": 28000.0,
                "price_regular": 32000.0,
                "piece_num": 2,
                "desc": "Dora serisi aynalı ve ahşap dokulu 6 kapaklı gardırop (G: 250 cm, D: 62 cm, Y: 215 cm)."
            },
            {
                "title": "Dora Karyola (Başlıklı)",
                "subcategory": "beds",
                "price_sale": 16000.0,
                "price_regular": 18500.0,
                "piece_num": 3,
                "desc": "Dora serisi ahşap detaylı karyola ve başlık ünitesi."
            },
            {
                "title": "Dora Şifonyer & Ayna",
                "subcategory": "consoles",
                "price_sale": 8200.0,
                "price_regular": 9500.0,
                "piece_num": 4,
                "desc": "Dora serisi aynalı şifonyer dolabı (G: 115 cm, D: 46 cm, Y: 82 cm)."
            },
            {
                "title": "Dora Komodin (2 Adet)",
                "subcategory": "nightstands",
                "price_sale": 5300.0,
                "price_regular": 6200.0,
                "piece_num": 5,
                "desc": "Dora serisi 2 adet ahşap komodin (G: 55 cm, D: 42 cm, Y: 45 cm)."
            }
        ]
    },

    {
        "set_id": 17,
        "title": "Elegance Lüks Cam Kapaklı Yatak Odası",
        "category": "bedroom",
        "subcategory": "beds",
        "price_regular": 74000.0,
        "price_sale": 66000.0,
        "base_asset": "assets/minegolden_p13",
        "desc": "Elegance Yatak Odası Takımı; füme temperli cam kapaklı lüks gardırobu, entegre aydınlatması ve özel kumaş başlığıyla üst düzey prestij sunar.",
        "material": "FÜME TEMPERLİ CAM & ALÜMİNYUM PROFİL & CNC İŞLEMELİ MDF",
        "specs": {
            "Üretim": "İnegöl / Bursa",
            "Gardırop": "Cam Kapaklı LED'li (G: 260 cm, D: 65 cm, Y: 220 cm)",
            "Karyola": "G: 185 cm, D: 215 cm, Y: 130 cm",
            "Şifonyer": "G: 125 cm, D: 48 cm, Y: 86 cm",
            "Komodin": "2 Adet (G: 60 cm, D: 45 cm, Y: 50 cm)",
            "Garanti": "2 Yıl Resmi Üretici Garantisi"
        },
        "solos": [
            {
                "title": "Elegance Füme Cam Kapaklı Gardırop",
                "subcategory": "wardrobes",
                "price_sale": 33000.0,
                "price_regular": 38000.0,
                "piece_num": 2,
                "desc": "Elegance serisi alüminyum çerçeveli füme cam kapaklı ve LED aydınlatmalı gardırop (G: 260 cm, D: 65 cm, Y: 220 cm)."
            },
            {
                "title": "Elegance Karyola & Lüks Başlık",
                "subcategory": "beds",
                "price_sale": 18500.0,
                "price_regular": 21000.0,
                "piece_num": 3,
                "desc": "Elegance serisi kadife kumaş döşemeli lüks karyola ünitesi."
            },
            {
                "title": "Elegance Şifonyer & Makyaj Aynası",
                "subcategory": "consoles",
                "price_sale": 9000.0,
                "price_regular": 10500.0,
                "piece_num": 4,
                "desc": "Elegance serisi çekmeceli şifonyer ve modern makyaj aynası."
            },
            {
                "title": "Elegance Komodin (2 Adet)",
                "subcategory": "nightstands",
                "price_sale": 5500.0,
                "price_regular": 6500.0,
                "piece_num": 5,
                "desc": "Elegance serisi 2 adet lüks komodin."
            }
        ]
    },

    {
        "set_id": 18,
        "title": "Luna Akrilik Modern Yatak Odası Takımı",
        "category": "bedroom",
        "subcategory": "beds",
        "price_regular": 64000.0,
        "price_sale": 56900.0,
        "base_asset": "assets/minegolden_p14",
        "desc": "Luna Yatak Odası Takımı; parlak akrilik beyaz yüzeyleri, ahşap sıcaklığı ve ferah tasarımıyla aydınlık ve modern bir yatak odası atmosferi sunar.",
        "material": "PARLAK AKRİLİK BEYAZ LAKE & MASİF CEVİZ DETAYLAR",
        "specs": {
            "Üretim": "İnegöl / Bursa",
            "Gardırop": "6 Kapaklı (G: 255 cm, D: 60 cm, Y: 216 cm)",
            "Karyola": "G: 175 cm, D: 210 cm, Y: 118 cm",
            "Şifonyer": "G: 110 cm, D: 44 cm, Y: 80 cm",
            "Komodin": "2 Adet (G: 55 cm, D: 40 cm, Y: 45 cm)",
            "Garanti": "2 Yıl Üretici Garantisi"
        },
        "solos": [
            {
                "title": "Luna 6 Kapaklı Beyaz Gardırop",
                "subcategory": "wardrobes",
                "price_sale": 27500.0,
                "price_regular": 31500.0,
                "piece_num": 2,
                "desc": "Luna serisi akrilik beyaz 6 kapaklı gardırop (G: 255 cm, D: 60 cm, Y: 216 cm)."
            },
            {
                "title": "Luna Karyola (Başlıklı)",
                "subcategory": "beds",
                "price_sale": 15500.0,
                "price_regular": 18000.0,
                "piece_num": 3,
                "desc": "Luna serisi modern karyola ve başlık."
            },
            {
                "title": "Luna Şifonyer",
                "subcategory": "consoles",
                "price_sale": 8400.0,
                "price_regular": 9800.0,
                "piece_num": 4,
                "desc": "Luna serisi beyaz şifonyer dolabı."
            },
            {
                "title": "Luna Komodin (2 Adet)",
                "subcategory": "nightstands",
                "price_sale": 5500.0,
                "price_regular": 6500.0,
                "piece_num": 5,
                "desc": "Luna serisi 2 adet komodin."
            }
        ]
    },

    {
        "set_id": 19,
        "title": "Masal Krem & Gold Yatak Odası Takımı",
        "category": "bedroom",
        "subcategory": "beds",
        "price_regular": 71000.0,
        "price_sale": 63500.0,
        "base_asset": "assets/minegolden_p15",
        "desc": "Masal Yatak Odası Takımı; soft krem tonları, gold metal kulp işçiliği ve geniş baza seçeneğiyle hem yüksek depolama hem de asil bir şıklık sunar.",
        "material": "SOFT KREM MAT LAKE & PASLANMAZ GOLD KULPLAR",
        "specs": {
            "Üretim": "İnegöl / Bursa",
            "Gardırop": "6 Kapaklı (G: 260 cm, D: 62 cm, Y: 220 cm)",
            "Karyola / Baza": "G: 180 cm, D: 215 cm, Y: 128 cm",
            "Şifonyer": "G: 120 cm, D: 48 cm, Y: 85 cm",
            "Komodin": "2 Adet (G: 58 cm, D: 44 cm, Y: 48 cm)",
            "Garanti": "2 Yıl Üretici Garantisi"
        },
        "solos": [
            {
                "title": "Masal 6 Kapaklı Krem Gardırop",
                "subcategory": "wardrobes",
                "price_sale": 31000.0,
                "price_regular": 35500.0,
                "piece_num": 2,
                "desc": "Masal serisi soft krem 6 kapaklı lüks gardırop (G: 260 cm, D: 62 cm, Y: 220 cm)."
            },
            {
                "title": "Masal Karyola & Yatak Başlığı",
                "subcategory": "beds",
                "price_sale": 17500.0,
                "price_regular": 20000.0,
                "piece_num": 3,
                "desc": "Masal serisi krem kumaş döşemeli şık karyola."
            },
            {
                "title": "Masal Şifonyer & Aynası",
                "subcategory": "consoles",
                "price_sale": 9200.0,
                "price_regular": 10800.0,
                "piece_num": 4,
                "desc": "Masal serisi gold kulplu aynalı şifonyer."
            },
            {
                "title": "Masal Komodin (2 Adet)",
                "subcategory": "nightstands",
                "price_sale": 5800.0,
                "price_regular": 6800.0,
                "piece_num": 5,
                "desc": "Masal serisi 2 adet krem komodin."
            }
        ]
    },

    {
        "set_id": 20,
        "title": "Respiro Bohem Yatak Odası Takımı",
        "category": "bedroom",
        "subcategory": "beds",
        "price_regular": 63000.0,
        "price_sale": 55900.0,
        "base_asset": "assets/minegolden_p16",
        "desc": "Respiro Yatak Odası Takımı; masif ahşap dokusu, sade minimalist hatları ve geniş iç hacimli dolabıyla yatak odanızda ferah bir dinlenme alanı oluşturur.",
        "material": "DOĞAL MASİF AHŞAP MEŞE & 1. SINIF E1 KALİTE MDF",
        "specs": {
            "Üretim": "İnegöl / Bursa",
            "Gardırop": "G: 245 cm, D: 60 cm, Y: 212 cm",
            "Karyola": "G: 170 cm, D: 210 cm, Y: 115 cm",
            "Garanti": "2 Yıl Üretici Garantisi"
        },
        "solos": [
            {
                "title": "Respiro Ahşap Gardırop",
                "subcategory": "wardrobes",
                "price_sale": 27500.0,
                "price_regular": 31000.0,
                "piece_num": 2,
                "desc": "Respiro serisi masif meşe dokulu gardırop (G: 245 cm, D: 60 cm, Y: 212 cm)."
            },
            {
                "title": "Respiro Masif Ahşap Karyola",
                "subcategory": "beds",
                "price_sale": 15500.0,
                "price_regular": 18000.0,
                "piece_num": 3,
                "desc": "Respiro serisi doğal ahşap karyola ve başlık."
            },
            {
                "title": "Respiro Şifonyer & Ayna",
                "subcategory": "consoles",
                "price_sale": 8000.0,
                "price_regular": 9400.0,
                "piece_num": 4,
                "desc": "Respiro serisi ahşap şifonyer."
            },
            {
                "title": "Respiro Komodin (2 Adet)",
                "subcategory": "nightstands",
                "price_sale": 4900.0,
                "price_regular": 5800.0,
                "piece_num": 5,
                "desc": "Respiro serisi 2 adet ahşap komodin."
            }
        ]
    },

    {
        "set_id": 21,
        "title": "Asya Modern Yatak Odası Takımı",
        "category": "bedroom",
        "subcategory": "beds",
        "price_regular": 66000.0,
        "price_sale": 58500.0,
        "base_asset": "assets/minegolden_p12",
        "desc": "Asya Yatak Odası Takımı; zarif antrasit ve ceviz renk kombinasyonu, 6 kapaklı geniş gardırobu ve konforlu karyolasıyla yatak odanızı baştan yaratır.",
        "material": "ANTRASİT MAT LAKE & DOĞAL CEVİZ KAPLAMA",
        "specs": {
            "Üretim": "İnegöl / Bursa",
            "Gardırop": "6 Kapaklı (G: 250 cm, D: 60 cm, Y: 215 cm)",
            "Karyola": "G: 175 cm, D: 210 cm, Y: 120 cm",
            "Garanti": "2 Yıl Üretici Garantisi"
        },
        "solos": [
            {
                "title": "Asya 6 Kapaklı Gardırop",
                "subcategory": "wardrobes",
                "price_sale": 28500.0,
                "price_regular": 32500.0,
                "piece_num": 2,
                "desc": "Asya serisi antrasit & ceviz 6 kapaklı gardırop (G: 250 cm, D: 60 cm, Y: 215 cm)."
            },
            {
                "title": "Asya Karyola (Başlıklı)",
                "subcategory": "beds",
                "price_sale": 16000.0,
                "price_regular": 18500.0,
                "piece_num": 3,
                "desc": "Asya serisi kumaş döşemeli şık karyola."
            },
            {
                "title": "Asya Şifonyer & Aynası",
                "subcategory": "consoles",
                "price_sale": 8600.0,
                "price_regular": 10000.0,
                "piece_num": 4,
                "desc": "Asya serisi aynalı şifonyer."
            },
            {
                "title": "Asya Komodin (2 Adet)",
                "subcategory": "nightstands",
                "price_sale": 5400.0,
                "price_regular": 6400.0,
                "piece_num": 5,
                "desc": "Asya serisi 2 adet komodin."
            }
        ]
    }
]

# Generate final structured products array
final_products = []
current_id = 1

for s in products_data:
    base = s["base_asset"]
    set_title = s["title"]
    
    # 1. Add Main Set Product
    gal = [f"{base}_{j}.webp" for j in range(1, 7) if os.path.exists(f"{base}_{j}.webp")]
    if not gal:
        gal = [f"{base}_1.webp"]
    
    components = [sol["title"] for sol in s["solos"]]
    
    set_entry = {
        "id": current_id,
        "title": set_title,
        "category": s["category"],
        "subcategory": s["subcategory"],
        "price": int(s["price_sale"]),
        "originalPrice": int(s["price_regular"]),
        "rating": round(4.8 + (current_id % 3) * 0.1, 1),
        "reviewsCount": 25 + (current_id * 4) % 35,
        "image": gal[0],
        "gallery": gal,
        "badges": ["İNEGÖL KOLEKSİYONU", "%100 ORİJİNAL", "ÜCRETSİZ MONTAJ"],
        "material": s["material"],
        "desc": s["desc"],
        "specs": s["specs"],
        "productType": "Set",
        "components": components,
        "parentSet": ""
    }
    final_products.append(set_entry)
    current_id += 1
    
    # 2. Add Solo Modular Products
    for sol in s["solos"]:
        p_num = sol.get("piece_num", 2)
        piece_img = f"{base}_{p_num}.webp"
        if not os.path.exists(piece_img):
            piece_img = f"{base}_1.webp"
            
        piece_gal = [piece_img] + [g for g in gal if g != piece_img]
        
        solo_specs = {
            "Üretim": "İnegöl / Bursa",
            "İskelet": s["specs"].get("İskelet", "Fırınlanmış Masif Gürgen & 1. Sınıf MDF"),
            "Garanti": "2 Yıl Üretici Garantisi",
            "Kargo": "Tüm Türkiye Ücretsiz Teslimat",
            "Ait Olduğu Takım": set_title
        }
        
        solo_entry = {
            "id": current_id,
            "title": sol["title"],
            "category": s["category"],
            "subcategory": sol["subcategory"],
            "price": int(sol["price_sale"]),
            "originalPrice": int(sol["price_regular"]),
            "rating": round(4.7 + (current_id % 4) * 0.1, 1),
            "reviewsCount": 15 + (current_id * 3) % 25,
            "image": piece_img,
            "gallery": piece_gal,
            "badges": ["İNEGÖL ÜRETİMİ", "%100 ORİJİNAL"],
            "material": s["material"],
            "desc": sol["desc"],
            "specs": solo_specs,
            "productType": "Solo",
            "components": [],
            "parentSet": set_title
        }
        final_products.append(solo_entry)
        current_id += 1

# Export to products.json, products.csv, and data/final_imported_products.json
with open('products.json', 'w', encoding='utf-8') as f:
    json.dump(final_products, f, ensure_ascii=False, indent=2)

with open('data/final_imported_products.json', 'w', encoding='utf-8') as f:
    json.dump(final_products, f, ensure_ascii=False, indent=2)

# Update app.js and detail.js
def update_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    json_str = json.dumps(final_products, ensure_ascii=False, indent=2)
    new_block = f"const PRODUCTS = {json_str};\n"

    pattern = r'const PRODUCTS = \[\s*[\s\S]*?\n\];'
    new_content = re.sub(pattern, new_block.strip(), content, count=1)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated {path}")

update_file('js/app.js')
update_file('js/detail.js')

sets = [p for p in final_products if p['productType'] == 'Set']
solos = [p for p in final_products if p['productType'] == 'Solo']

print(f"Başarıyla güncellendi!")
print(f"Ana Takımlar (Set): {len(sets)} adet (7 Oturma, 7 Yemek, 7 Yatak)")
print(f"Solo Modüller: {len(solos)} adet")
print(f"Toplam Ürün: {len(final_products)} adet")
