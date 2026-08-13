import json

products = [
  {
    "id": 1,
    "title": "Zara Yemek Odası Takımı Siyah",
    "category": "dining",
    "subcategory": "dining-tables",
    "price": 66500,
    "rating": 4.9,
    "reviewsCount": 63,
    "image": "assets/p_zarayemeko_1e8f6324.jpg",
    "gallery": [
      "assets/p_zarayemeko_1e8f6324.jpg",
      "assets/p_zarayemeko_40ce0400.jpg",
      "assets/p_zarayemeko_484c0fc1.jpg",
      "assets/p_zarayemeko_db65958d.jpg",
      "assets/p_zarayemeko_77fadca0.jpg",
      "assets/p_zarayemeko_8f196103.jpg",
      "assets/p_zarayemeko_d7533b4e.jpg",
      "assets/p_zarayemeko_6d32aee1.jpg",
      "assets/p_zarayemeko_748042d5.jpg",
      "assets/p_zarayemeko_7e3680c9.jpg",
      "assets/p_zarayemeko_e8f87881.jpg",
      "assets/p_zarayemeko_1da2ba5c.jpg"
    ],
    "badges": ["İNEGÖL KOLEKSİYONU", "%100 ORİJİNAL"],
    "material": "AKRİLİK SİYAH LAKE MERMER DOKULU MASİF MASA & AYNALI KONSOL",
    "desc": "Zara Yemek Odası Takımı Siyah ile modern ve şık bir yemek alanı yaratın. Estetik detaylar, kaliteli malzeme ve fonksiyonel tasarım bir arada. Evinize değer katın.",
    "specs": {
      "Modül": "Genişlik",
      "Masa (Açılır)": "175-215 cm",
      "Sandalye (6 Adet)": "50 cm",
      "Aynalı Konsol": "205 cm",
      "Konsol Aynası": "120 cm"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/zara-yemek-odasi-siyah"
  },
  {
    "id": 2,
    "title": "Asel Yatak Odası Takımı Siyah Detaylı",
    "category": "bedroom",
    "subcategory": "beds",
    "price": 80500,
    "rating": 4.9,
    "reviewsCount": 42,
    "image": "assets/real_asel-yatak-odasi_1_58aa5bd8.jpg",
    "gallery": [
      "assets/real_asel-yatak-odasi_1_58aa5bd8.jpg",
      "assets/real_asel-yatak-odasi_2_bf0c126c.jpg",
      "assets/real_asel-yatak-odasi_3_9c60b515.jpg",
      "assets/real_asel-yatak-odasi_4_3ab37c2f.jpg",
      "assets/real_asel-yatak-odasi_5_30f3e7e5.jpg",
      "assets/real_asel-yatak-odasi_8_15c34c66.jpg",
      "assets/real_asel-yatak-odasi_9_ccb3db6d.jpg",
      "assets/real_asel-yatak-odasi_10_3a8ed488.jpg"
    ],
    "badges": ["İNEGÖL KOLEKSİYONU", "%100 ORİJİNAL"],
    "material": "MODERN KREM RENGİ TASARIM & FLÜTLÜ YÜZEYLİ BAZALI KARYOLA",
    "desc": "Asel Yatak Odası Takımı siyah detayları, modern krem rengi tasarımı ve flütlü yüzeyleriyle yatak odanıza zarafet katıyor. Fonksiyonel gardırop ve şık karyola ile konfor ve estetiği bir arada yaşayın.",
    "specs": {
      "Modül": "Genişlik",
      "6 Kapılı Dolap": "248 cm",
      "K.Bazalı Karyola": "295 cm",
      "Aynalı Şifonyer": "130 cm",
      "Komodin": "60 cm",
      "2 Kapılı Askılıklı Dolap": "84 cm"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/asel-yatak-odasi-siyah-detayli"
  },
  {
    "id": 3,
    "title": "Zümrüt Koltuk Takımı",
    "category": "living",
    "subcategory": "sofas",
    "price": 69500,
    "rating": 4.8,
    "reviewsCount": 53,
    "image": "assets/real_zumrut-koltuk-takimi_1_58aa5bd8.jpg",
    "gallery": [
      "assets/real_zumrut-koltuk-takimi_1_58aa5bd8.jpg",
      "assets/real_zumrut-koltuk-takimi_2_bf0c126c.jpg",
      "assets/real_zumrut-koltuk-takimi_3_9c60b515.jpg",
      "assets/real_zumrut-koltuk-takimi_4_3ab37c2f.jpg",
      "assets/real_zumrut-koltuk-takimi_5_30f3e7e5.jpg"
    ],
    "badges": ["İNEGÖL KOLEKSİYONU", "%100 ORİJİNAL"],
    "material": "MODERN & KLASİK ÇİZGİLİ LÜKS DÖŞEME & FIRINLANMIŞ MASİF GÜRGEN",
    "desc": "Zümrüt Koltuk Takımı, modern ve klasik çizgileri birleştirerek evinize zarafet katıyor. Konforlu oturum alanı ve şık tasarımıyla öne çıkıyor.",
    "specs": {
      "Modül": "Genişlik",
      "3'lü Koltuk": "235 cm",
      "Berjer": "76 cm",
      "İskelet Bilgisi": "%100 Fırınlanmış Gürgen"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/zumrut-koltuk-takimi"
  },
  {
    "id": 4,
    "title": "Pera Yemek Odası Takımı Ceviz",
    "category": "dining",
    "subcategory": "dining-tables",
    "price": 92000,
    "rating": 4.9,
    "reviewsCount": 64,
    "image": "assets/real_pera-yemek-odasi_1_58aa5bd8.jpg",
    "gallery": [
      "assets/real_pera-yemek-odasi_1_58aa5bd8.jpg",
      "assets/real_pera-yemek-odasi_2_bf0c126c.jpg",
      "assets/real_pera-yemek-odasi_3_9c60b515.jpg",
      "assets/real_pera-yemek-odasi_4_3ab37c2f.jpg",
      "assets/real_pera-yemek-odasi_5_30f3e7e5.jpg",
      "assets/real_pera-yemek-odasi_8_d3b15688.jpg",
      "assets/real_pera-yemek-odasi_9_bd3ba460.jpg",
      "assets/real_pera-yemek-odasi_10_441f77fe.jpg"
    ],
    "badges": ["İNEGÖL KOLEKSİYONU", "%100 ORİJİNAL"],
    "material": "DOĞAL CEVİZ KAPLAMA MASA & AYNLI KONSOL VE TV ÜNİTESİ",
    "desc": "Pera Yemek Odası Takımı Ceviz, modern tasarımı ve kaliteli işçiliğiyle yemek alanınıza zarafet katıyor. İnegöl mobilya kampanyaları ile şimdi keşfedin!",
    "specs": {
      "Modül": "Genişlik",
      "Sabit Masa": "200 cm",
      "Aynalı Konsol": "215 cm",
      "Sandalye (6 Adet)": "50 cm"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/pera-yemek-odasi-2-1773"
  },
  {
    "id": 5,
    "title": "Bohem Koltuk Takımı Krem",
    "category": "living",
    "subcategory": "sofas",
    "price": 56000,
    "rating": 4.9,
    "reviewsCount": 75,
    "image": "assets/real_bohem-koltuk-takimi_1_58aa5bd8.jpg",
    "gallery": [
      "assets/real_bohem-koltuk-takimi_1_58aa5bd8.jpg",
      "assets/real_bohem-koltuk-takimi_2_bf0c126c.jpg",
      "assets/real_bohem-koltuk-takimi_3_9c60b515.jpg",
      "assets/real_bohem-koltuk-takimi_4_3ab37c2f.jpg",
      "assets/real_bohem-koltuk-takimi_5_30f3e7e5.jpg"
    ],
    "badges": ["İNEGÖL KOLEKSİYONU", "%100 ORİJİNAL"],
    "material": "KREM RENGİ BOHEM LÜKS DÖŞEME & RAHAT SOFT OTURUM",
    "desc": "Krem rengi bohem koltuk takımı ile salonunuzda modern ve davetkar bir atmosfer yaratın. Rahat ve şık tasarımı İnegöl mobilya kalitesiyle sunuluyor.",
    "specs": {
      "Modül": "Genişlik",
      "3'lü Koltuk": "225 cm",
      "Berjer": "75 cm",
      "Sünger": "32 DNS Konfor Sünger"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/bohem-koltuk-takimi-krem"
  }
]

with open("clean_5_products.json", "w", encoding="utf-8") as f:
    json.dump(products, f, ensure_ascii=False, indent=2)

print("Saved clean_5_products.json successfully!")
