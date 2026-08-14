/* ==========================================
   mobelmor.com - Product Detail JS (v=9999)
   ========================================== */

const PRODUCTS = [
  {
    "id": 1,
    "title": "Gold Koltuk Takımı",
    "category": "living",
    "subcategory": "sofas",
    "price": 45000,
    "rating": 4.9,
    "reviewsCount": 38,
    "image": "assets/minegolden_p1_1.jpg",
    "gallery": [
      "assets/minegolden_p1_1.jpg",
      "assets/minegolden_p1_2.jpg",
      "assets/minegolden_p1_3.jpg",
      "assets/minegolden_p1_4.jpg",
      "assets/minegolden_p1_5.jpg",
      "assets/minegolden_p1_6.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "İNEGÖL ÜRETİMİ MASİF AĞAÇ & İTHAL LÜKS KAPLAMA",
    "desc": "İnegöl usta zanaatkarlarının el işçiliği tasarımı, kaliteli sünger ve leke tutmaz özel kumaş kaplamasıyla evinize konfor ve zarafet katar.",
    "specs": {
      "Üretim": "İnegöl / Bursa",
      "İskelet": "Fırınlanmış Gürgen Masif Ağaç",
      "Garanti": "2 Yıl Üretici Garantisi",
      "Kargo": "Tüm Türkiye Ücretsiz Teslimat",
      "Takım Ölçüleri": "3'lü (G: 225 cm, D: 92 cm, Y: 77 cm) | Berjer (G: 70 cm, D: 70 cm, Y: 90 cm)"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/gold-koltuk-takimi"
  },
  {
    "id": 2,
    "title": "Zümrüt Koltuk Takımı",
    "category": "living",
    "subcategory": "sofas",
    "price": 45000,
    "rating": 4.9,
    "reviewsCount": 41,
    "image": "assets/minegolden_p2_1.jpg",
    "gallery": [
      "assets/minegolden_p2_1.jpg",
      "assets/minegolden_p2_2.jpg",
      "assets/minegolden_p2_3.jpg",
      "assets/minegolden_p2_4.jpg",
      "assets/minegolden_p2_5.jpg",
      "assets/minegolden_p2_6.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "İNEGÖL ÜRETİMİ MASİF AĞAÇ & İTHAL LÜKS KAPLAMA",
    "desc": "İnegöl usta zanaatkarlarının el işçiliği tasarımı, kaliteli sünger ve leke tutmaz özel kumaş kaplamasıyla evinize konfor ve zarafet katar.",
    "specs": {
      "Üretim": "İnegöl / Bursa",
      "İskelet": "Fırınlanmış Gürgen Masif Ağaç",
      "Garanti": "2 Yıl Üretici Garantisi",
      "Kargo": "Tüm Türkiye Ücretsiz Teslimat",
      "Takım Ölçüleri": "3'lü (G: 220 cm, D: 90 cm, Y: 80 cm) | Berjer (G: 88 cm, D: 70 cm, Y: 65 cm)"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/zumrut-koltuk-takimi-2-3130"
  },
  {
    "id": 3,
    "title": "Bohem Koltuk Takımı Natural",
    "category": "living",
    "subcategory": "sofas",
    "price": 45000,
    "rating": 4.9,
    "reviewsCount": 44,
    "image": "assets/minegolden_p3_1.jpg",
    "gallery": [
      "assets/minegolden_p3_1.jpg",
      "assets/minegolden_p3_2.jpg",
      "assets/minegolden_p3_3.jpg",
      "assets/minegolden_p3_4.jpg",
      "assets/minegolden_p3_5.jpg",
      "assets/minegolden_p3_6.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "İNEGÖL ÜRETİMİ MASİF AĞAÇ & İTHAL LÜKS KAPLAMA",
    "desc": "İnegöl usta zanaatkarlarının el işçiliği tasarımı, kaliteli sünger ve leke tutmaz özel kumaş kaplamasıyla evinize konfor ve zarafet katar.",
    "specs": {
      "Üretim": "İnegöl / Bursa",
      "İskelet": "Fırınlanmış Gürgen Masif Ağaç",
      "Garanti": "2 Yıl Üretici Garantisi",
      "Kargo": "Tüm Türkiye Ücretsiz Teslimat",
      "Takım Ölçüleri": "3'lü (G: 215 cm, D: 100 cm)"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/bohem-koltuk-takimi-natural"
  },
  {
    "id": 4,
    "title": "Mono Koltuk Takımı",
    "category": "living",
    "subcategory": "sofas",
    "price": 45000,
    "rating": 4.9,
    "reviewsCount": 47,
    "image": "assets/minegolden_p4_1.jpg",
    "gallery": [
      "assets/minegolden_p4_1.jpg",
      "assets/minegolden_p4_2.jpg",
      "assets/minegolden_p4_3.jpg",
      "assets/minegolden_p4_4.jpg",
      "assets/minegolden_p4_5.jpg",
      "assets/minegolden_p4_6.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "İNEGÖL ÜRETİMİ MASİF AĞAÇ & İTHAL LÜKS KAPLAMA",
    "desc": "İnegöl usta zanaatkarlarının el işçiliği tasarımı, kaliteli sünger ve leke tutmaz özel kumaş kaplamasıyla evinize konfor ve zarafet katar.",
    "specs": {
      "Üretim": "İnegöl / Bursa",
      "İskelet": "Fırınlanmış Gürgen Masif Ağaç",
      "Garanti": "2 Yıl Üretici Garantisi",
      "Kargo": "Tüm Türkiye Ücretsiz Teslimat",
      "Takım Ölçüleri": "3'lü (G: 210 cm, D: 96 cm, Y: 87 cm) | Berjer (G: 75 cm, D: 90 cm, Y: 80 cm)"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/mono-koltuk-takimi-2-3126"
  },
  {
    "id": 5,
    "title": "Leon Koltuk Takımı Ahşap",
    "category": "living",
    "subcategory": "sofas",
    "price": 45000,
    "rating": 4.9,
    "reviewsCount": 50,
    "image": "assets/minegolden_p5_1.jpg",
    "gallery": [
      "assets/minegolden_p5_1.jpg",
      "assets/minegolden_p5_2.jpg",
      "assets/minegolden_p5_3.jpg",
      "assets/minegolden_p5_4.jpg",
      "assets/minegolden_p5_5.jpg",
      "assets/minegolden_p5_6.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "İNEGÖL ÜRETİMİ MASİF AĞAÇ & İTHAL LÜKS KAPLAMA",
    "desc": "İnegöl usta zanaatkarlarının el işçiliği tasarımı, kaliteli sünger ve leke tutmaz özel kumaş kaplamasıyla evinize konfor ve zarafet katar.",
    "specs": {
      "Üretim": "İnegöl / Bursa",
      "İskelet": "Fırınlanmış Gürgen Masif Ağaç",
      "Garanti": "2 Yıl Üretici Garantisi",
      "Kargo": "Tüm Türkiye Ücretsiz Teslimat",
      "Takım Ölçüleri": "3'lü Koltuk (G: 240 cm, D: 95 cm, Y: 70 cm) | Berjer (G: 75 cm, D: 70 cm, Y: 95 cm)"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/leon-koltuk-takimi-ahsap"
  },
  {
    "id": 6,
    "title": "İcon Yuvarlak Masa Sandalye",
    "category": "dining",
    "subcategory": "dining-tables",
    "price": 45000,
    "rating": 4.9,
    "reviewsCount": 53,
    "image": "assets/minegolden_p6_1.jpg",
    "gallery": [
      "assets/minegolden_p6_1.jpg",
      "assets/minegolden_p6_2.jpg",
      "assets/minegolden_p6_3.jpg",
      "assets/minegolden_p6_4.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "İNEGÖL ÜRETİMİ MASİF AĞAÇ & İTHAL LÜKS KAPLAMA",
    "desc": "İnegöl usta zanaatkarlarının el işçiliği tasarımı, kaliteli sünger ve leke tutmaz özel kumaş kaplamasıyla evinize konfor ve zarafet katar.",
    "specs": {
      "Üretim": "İnegöl / Bursa",
      "İskelet": "Fırınlanmış Gürgen Masif Ağaç",
      "Garanti": "2 Yıl Üretici Garantisi",
      "Kargo": "Tüm Türkiye Ücretsiz Teslimat",
      "Takım Ölçüleri": "Masa (G: 100 cm, D: 100 cm, Y: 77 cm)"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/icon-yuvarlak-masa-sandalye"
  },
  {
    "id": 7,
    "title": "İcon Meşe Masa Sandalye",
    "category": "dining",
    "subcategory": "dining-tables",
    "price": 45000,
    "rating": 4.9,
    "reviewsCount": 56,
    "image": "assets/minegolden_p7_1.jpg",
    "gallery": [
      "assets/minegolden_p7_1.jpg",
      "assets/minegolden_p7_2.jpg",
      "assets/minegolden_p7_3.jpg",
      "assets/minegolden_p7_4.jpg",
      "assets/minegolden_p7_5.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "İNEGÖL ÜRETİMİ MASİF AĞAÇ & İTHAL LÜKS KAPLAMA",
    "desc": "İnegöl usta zanaatkarlarının el işçiliği tasarımı, kaliteli sünger ve leke tutmaz özel kumaş kaplamasıyla evinize konfor ve zarafet katar.",
    "specs": {
      "Üretim": "İnegöl / Bursa",
      "İskelet": "Fırınlanmış Gürgen Masif Ağaç",
      "Garanti": "2 Yıl Üretici Garantisi",
      "Kargo": "Tüm Türkiye Ücretsiz Teslimat",
      "Takım Ölçüleri": "Masa (G: 120 cm, D: 120 cm, Y: 80 cm)"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/icon-mese-masa-sandalye"
  },
  {
    "id": 8,
    "title": "Forte Meşe Masa Sandalye",
    "category": "dining",
    "subcategory": "dining-tables",
    "price": 45000,
    "rating": 4.9,
    "reviewsCount": 59,
    "image": "assets/minegolden_p8_1.jpg",
    "gallery": [
      "assets/minegolden_p8_1.jpg",
      "assets/minegolden_p8_2.jpg",
      "assets/minegolden_p8_3.jpg",
      "assets/minegolden_p8_4.jpg",
      "assets/minegolden_p8_5.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "İNEGÖL ÜRETİMİ MASİF AĞAÇ & İTHAL LÜKS KAPLAMA",
    "desc": "İnegöl usta zanaatkarlarının el işçiliği tasarımı, kaliteli sünger ve leke tutmaz özel kumaş kaplamasıyla evinize konfor ve zarafet katar.",
    "specs": {
      "Üretim": "İnegöl / Bursa",
      "İskelet": "Fırınlanmış Gürgen Masif Ağaç",
      "Garanti": "2 Yıl Üretici Garantisi",
      "Kargo": "Tüm Türkiye Ücretsiz Teslimat",
      "Takım Ölçüleri": "Masa (G: 100 cm, D: 100 cm, Y: 77 cm)"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/forte-mese-masa-sandalye"
  },
  {
    "id": 9,
    "title": "Seramik Mutfak Masası 81",
    "category": "dining",
    "subcategory": "dining-tables",
    "price": 45000,
    "rating": 4.9,
    "reviewsCount": 62,
    "image": "assets/minegolden_p9_1.jpg",
    "gallery": [
      "assets/minegolden_p9_1.jpg",
      "assets/minegolden_p9_2.jpg",
      "assets/minegolden_p9_3.jpg",
      "assets/minegolden_p9_4.jpg",
      "assets/minegolden_p9_5.jpg",
      "assets/minegolden_p9_6.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "İNEGÖL ÜRETİMİ MASİF AĞAÇ & İTHAL LÜKS KAPLAMA",
    "desc": "İnegöl usta zanaatkarlarının el işçiliği tasarımı, kaliteli sünger ve leke tutmaz özel kumaş kaplamasıyla evinize konfor ve zarafet katar.",
    "specs": {
      "Üretim": "İnegöl / Bursa",
      "İskelet": "Fırınlanmış Gürgen Masif Ağaç",
      "Garanti": "2 Yıl Üretici Garantisi",
      "Kargo": "Tüm Türkiye Ücretsiz Teslimat",
      "Takım Ölçüleri": "Masa (G: 140 cm, D: 80 cm, Y: 75 cm)"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/seramik-mutfak-masasi-81"
  },
  {
    "id": 10,
    "title": "İpek Yemek Odası Takımı",
    "category": "dining",
    "subcategory": "dining-tables",
    "price": 45000,
    "rating": 4.9,
    "reviewsCount": 65,
    "image": "assets/minegolden_p10_1.jpg",
    "gallery": [
      "assets/minegolden_p10_1.jpg",
      "assets/minegolden_p10_2.jpg",
      "assets/minegolden_p10_3.jpg",
      "assets/minegolden_p10_4.jpg",
      "assets/minegolden_p10_5.jpg",
      "assets/minegolden_p10_6.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "İNEGÖL ÜRETİMİ MASİF AĞAÇ & İTHAL LÜKS KAPLAMA",
    "desc": "İnegöl usta zanaatkarlarının el işçiliği tasarımı, kaliteli sünger ve leke tutmaz özel kumaş kaplamasıyla evinize konfor ve zarafet katar.",
    "specs": {
      "Üretim": "İnegöl / Bursa",
      "İskelet": "Fırınlanmış Gürgen Masif Ağaç",
      "Garanti": "2 Yıl Üretici Garantisi",
      "Kargo": "Tüm Türkiye Ücretsiz Teslimat",
      "Takım Ölçüleri": "Masa (G: 150 cm, D: 90 cm, Y: 78 cm) | Aynalı Konsol (G: 190 cm, D: 41 cm, Y: 78 cm)"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/ipek-yemek-odasi-2"
  },
  {
    "id": 11,
    "title": "Zen Yatak Odası Takımı",
    "category": "bedroom",
    "subcategory": "beds",
    "price": 45000,
    "rating": 4.9,
    "reviewsCount": 68,
    "image": "assets/minegolden_p11_1.jpg",
    "gallery": [
      "assets/minegolden_p11_1.jpg",
      "assets/minegolden_p11_2.jpg",
      "assets/minegolden_p11_3.jpg",
      "assets/minegolden_p11_4.jpg",
      "assets/minegolden_p11_5.jpg",
      "assets/minegolden_p11_6.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "İNEGÖL ÜRETİMİ MASİF AĞAÇ & İTHAL LÜKS KAPLAMA",
    "desc": "İnegöl usta zanaatkarlarının el işçiliği tasarımı, kaliteli sünger ve leke tutmaz özel kumaş kaplamasıyla evinize konfor ve zarafet katar.",
    "specs": {
      "Üretim": "İnegöl / Bursa",
      "İskelet": "Fırınlanmış Gürgen Masif Ağaç",
      "Garanti": "2 Yıl Üretici Garantisi",
      "Kargo": "Tüm Türkiye Ücretsiz Teslimat"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/zen-yatak-odasi-takimi-2-3262"
  },
  {
    "id": 12,
    "title": "Dora Yatak Odası Takımı",
    "category": "bedroom",
    "subcategory": "beds",
    "price": 45000,
    "rating": 4.9,
    "reviewsCount": 71,
    "image": "assets/minegolden_p12_1.jpg",
    "gallery": [
      "assets/minegolden_p12_1.jpg",
      "assets/minegolden_p12_2.jpg",
      "assets/minegolden_p12_3.jpg",
      "assets/minegolden_p12_4.jpg",
      "assets/minegolden_p12_5.jpg",
      "assets/minegolden_p12_6.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "İNEGÖL ÜRETİMİ MASİF AĞAÇ & İTHAL LÜKS KAPLAMA",
    "desc": "İnegöl usta zanaatkarlarının el işçiliği tasarımı, kaliteli sünger ve leke tutmaz özel kumaş kaplamasıyla evinize konfor ve zarafet katar.",
    "specs": {
      "Üretim": "İnegöl / Bursa",
      "İskelet": "Fırınlanmış Gürgen Masif Ağaç",
      "Garanti": "2 Yıl Üretici Garantisi",
      "Kargo": "Tüm Türkiye Ücretsiz Teslimat",
      "Takım Ölçüleri": "Gardırop (G: 241 cm, D: 52 cm, Y: 210 cm) | Karyola (G: 205 cm, D: 200 cm, Y: 125 cm) | Aynalı Şifonyer (G: 107 cm, D: 41 cm, Y: 78 cm) | Komodin (G: 52 cm, D: 41 cm, Y: 47 cm)"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/dora-yatak-odasi-takimi"
  },
  {
    "id": 13,
    "title": "Elegance Yatak Odası Takımı",
    "category": "bedroom",
    "subcategory": "beds",
    "price": 45000,
    "rating": 4.9,
    "reviewsCount": 74,
    "image": "assets/minegolden_p13_1.jpg",
    "gallery": [
      "assets/minegolden_p13_1.jpg",
      "assets/minegolden_p13_2.jpg",
      "assets/minegolden_p13_3.jpg",
      "assets/minegolden_p13_4.jpg",
      "assets/minegolden_p13_5.jpg",
      "assets/minegolden_p13_6.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "İNEGÖL ÜRETİMİ MASİF AĞAÇ & İTHAL LÜKS KAPLAMA",
    "desc": "İnegöl usta zanaatkarlarının el işçiliği tasarımı, kaliteli sünger ve leke tutmaz özel kumaş kaplamasıyla evinize konfor ve zarafet katar.",
    "specs": {
      "Üretim": "İnegöl / Bursa",
      "İskelet": "Fırınlanmış Gürgen Masif Ağaç",
      "Garanti": "2 Yıl Üretici Garantisi",
      "Kargo": "Tüm Türkiye Ücretsiz Teslimat",
      "Takım Ölçüleri": "Gardırop (G: 241 cm, D: 210 cm, Y: 52 cm) | Karyola (G: 205 cm, D: 200 cm, Y: 125 cm) | Aynalı Şifonyer (G: 107 cm, D: 41 cm, Y: 78 cm) | Komodin (G: 52 cm, D: 41 cm, Y: 47 cm)"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/elegance-yatak-odasi-takimi"
  },
  {
    "id": 14,
    "title": "Luna Yatak Odası Takımı",
    "category": "bedroom",
    "subcategory": "beds",
    "price": 45000,
    "rating": 4.9,
    "reviewsCount": 37,
    "image": "assets/minegolden_p14_1.jpg",
    "gallery": [
      "assets/minegolden_p14_1.jpg",
      "assets/minegolden_p14_2.jpg",
      "assets/minegolden_p14_3.jpg",
      "assets/minegolden_p14_4.jpg",
      "assets/minegolden_p14_5.jpg",
      "assets/minegolden_p14_6.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "İNEGÖL ÜRETİMİ MASİF AĞAÇ & İTHAL LÜKS KAPLAMA",
    "desc": "İnegöl usta zanaatkarlarının el işçiliği tasarımı, kaliteli sünger ve leke tutmaz özel kumaş kaplamasıyla evinize konfor ve zarafet katar.",
    "specs": {
      "Üretim": "İnegöl / Bursa",
      "İskelet": "Fırınlanmış Gürgen Masif Ağaç",
      "Garanti": "2 Yıl Üretici Garantisi",
      "Kargo": "Tüm Türkiye Ücretsiz Teslimat",
      "Takım Ölçüleri": "6 Kapılı Dolap (G: 241 cm, D: 52 cm, Y: 210 cm) | Karyola (G: 205 cm, D: 200 cm, Y: 125 cm) | Aynalı Şifonyer (G: 104 cm, D: 41 cm, Y: 78 cm) | Komodin (G: 52 cm, D: 41 cm, Y: 47 cm)"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/luna-yatak-odasi-takimi"
  },
  {
    "id": 15,
    "title": "Masal Yatak Odası Takımı Krem",
    "category": "bedroom",
    "subcategory": "beds",
    "price": 45000,
    "rating": 4.9,
    "reviewsCount": 40,
    "image": "assets/minegolden_p15_1.jpg",
    "gallery": [
      "assets/minegolden_p15_1.jpg",
      "assets/minegolden_p15_3.jpg",
      "assets/minegolden_p15_4.jpg",
      "assets/minegolden_p15_5.jpg",
      "assets/minegolden_p15_6.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "İNEGÖL ÜRETİMİ MASİF AĞAÇ & İTHAL LÜKS KAPLAMA",
    "desc": "İnegöl usta zanaatkarlarının el işçiliği tasarımı, kaliteli sünger ve leke tutmaz özel kumaş kaplamasıyla evinize konfor ve zarafet katar.",
    "specs": {
      "Üretim": "İnegöl / Bursa",
      "İskelet": "Fırınlanmış Gürgen Masif Ağaç",
      "Garanti": "2 Yıl Üretici Garantisi",
      "Kargo": "Tüm Türkiye Ücretsiz Teslimat",
      "Takım Ölçüleri": "Gardırop (G: 242 cm, D: 52 cm, Y: 210 cm) | Karyola (G: 205 cm, D: 200 cm, Y: 125 cm) | Aynalı Şifonyer (G: 92 cm, D: 42 cm, Y: 165 cm) | Komodin (G: 52 cm, D: 42 cm, Y: 47 cm)"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/masal-yatak-odasi-krem"
  },
  {
    "id": 16,
    "title": "Respiro Tv Ünitesi",
    "category": "office",
    "subcategory": "tv-units",
    "price": 45000,
    "rating": 4.9,
    "reviewsCount": 43,
    "image": "assets/minegolden_p16_1.jpg",
    "gallery": [
      "assets/minegolden_p16_1.jpg",
      "assets/minegolden_p16_2.jpg",
      "assets/minegolden_p16_3.jpg",
      "assets/minegolden_p16_4.jpg",
      "assets/minegolden_p16_5.jpg",
      "assets/minegolden_p16_6.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "İNEGÖL ÜRETİMİ MASİF AĞAÇ & İTHAL LÜKS KAPLAMA",
    "desc": "İnegöl usta zanaatkarlarının el işçiliği tasarımı, kaliteli sünger ve leke tutmaz özel kumaş kaplamasıyla evinize konfor ve zarafet katar.",
    "specs": {
      "Üretim": "İnegöl / Bursa",
      "İskelet": "Fırınlanmış Gürgen Masif Ağaç",
      "Garanti": "2 Yıl Üretici Garantisi",
      "Kargo": "Tüm Türkiye Ücretsiz Teslimat",
      "Takım Ölçüleri": "TV Ünitesi (G: 180 cm, D: 46 cm, Y: 64 cm)"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/respiro-tv-unitesi"
  },
  {
    "id": 17,
    "title": "Lisa Tv Ünitesi",
    "category": "office",
    "subcategory": "tv-units",
    "price": 45000,
    "rating": 4.9,
    "reviewsCount": 46,
    "image": "assets/minegolden_p17_1.jpg",
    "gallery": [
      "assets/minegolden_p17_1.jpg",
      "assets/minegolden_p17_2.jpg",
      "assets/minegolden_p17_3.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "İNEGÖL ÜRETİMİ MASİF AĞAÇ & İTHAL LÜKS KAPLAMA",
    "desc": "İnegöl usta zanaatkarlarının el işçiliği tasarımı, kaliteli sünger ve leke tutmaz özel kumaş kaplamasıyla evinize konfor ve zarafet katar.",
    "specs": {
      "Üretim": "İnegöl / Bursa",
      "İskelet": "Fırınlanmış Gürgen Masif Ağaç",
      "Garanti": "2 Yıl Üretici Garantisi",
      "Kargo": "Tüm Türkiye Ücretsiz Teslimat",
      "Takım Ölçüleri": "Alt Blok (G: 200 cm, D: 43 cm, Y: 57 cm)"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/lisa-tv-unitesi"
  },
  {
    "id": 18,
    "title": "Marian Tv Ünitesi",
    "category": "office",
    "subcategory": "tv-units",
    "price": 45000,
    "rating": 4.9,
    "reviewsCount": 49,
    "image": "assets/minegolden_p18_1.jpg",
    "gallery": [
      "assets/minegolden_p18_1.jpg",
      "assets/minegolden_p18_2.jpg",
      "assets/minegolden_p18_3.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "İNEGÖL ÜRETİMİ MASİF AĞAÇ & İTHAL LÜKS KAPLAMA",
    "desc": "İnegöl usta zanaatkarlarının el işçiliği tasarımı, kaliteli sünger ve leke tutmaz özel kumaş kaplamasıyla evinize konfor ve zarafet katar.",
    "specs": {
      "Üretim": "İnegöl / Bursa",
      "İskelet": "Fırınlanmış Gürgen Masif Ağaç",
      "Garanti": "2 Yıl Üretici Garantisi",
      "Kargo": "Tüm Türkiye Ücretsiz Teslimat",
      "Takım Ölçüleri": "Alt Blok (G: 200 cm, D: 43 cm, Y: 57 cm)"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/marian-tv-unitesi"
  },
  {
    "id": 19,
    "title": "Sahra Tv Ünitesi",
    "category": "office",
    "subcategory": "tv-units",
    "price": 45000,
    "rating": 4.9,
    "reviewsCount": 52,
    "image": "assets/minegolden_p19_1.jpg",
    "gallery": [
      "assets/minegolden_p19_1.jpg",
      "assets/minegolden_p19_2.jpg",
      "assets/minegolden_p19_3.jpg",
      "assets/minegolden_p19_4.jpg",
      "assets/minegolden_p19_5.jpg",
      "assets/minegolden_p19_6.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "İNEGÖL ÜRETİMİ MASİF AĞAÇ & İTHAL LÜKS KAPLAMA",
    "desc": "İnegöl usta zanaatkarlarının el işçiliği tasarımı, kaliteli sünger ve leke tutmaz özel kumaş kaplamasıyla evinize konfor ve zarafet katar.",
    "specs": {
      "Üretim": "İnegöl / Bursa",
      "İskelet": "Fırınlanmış Gürgen Masif Ağaç",
      "Garanti": "2 Yıl Üretici Garantisi",
      "Kargo": "Tüm Türkiye Ücretsiz Teslimat",
      "Takım Ölçüleri": "Tv Ünite (G: 180 cm, D: 42 cm, Y: 43 cm) | Orta Sehpa (İsteğe Bağlı) (G: 105 cm, D: 70 cm, Y: 45 cm)"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/sahra-tv-unitesi-2-3195"
  },
  {
    "id": 20,
    "title": "Salvador Tv Üntesi",
    "category": "office",
    "subcategory": "tv-units",
    "price": 45000,
    "rating": 4.9,
    "reviewsCount": 55,
    "image": "assets/minegolden_p20_1.jpg",
    "gallery": [
      "assets/minegolden_p20_1.jpg",
      "assets/minegolden_p20_2.jpg",
      "assets/minegolden_p20_3.jpg",
      "assets/minegolden_p20_4.jpg",
      "assets/minegolden_p20_5.jpg",
      "assets/minegolden_p20_6.jpg"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "%100 ORİJİNAL"
    ],
    "material": "İNEGÖL ÜRETİMİ MASİF AĞAÇ & İTHAL LÜKS KAPLAMA",
    "desc": "İnegöl usta zanaatkarlarının el işçiliği tasarımı, kaliteli sünger ve leke tutmaz özel kumaş kaplamasıyla evinize konfor ve zarafet katar.",
    "specs": {
      "Üretim": "İnegöl / Bursa",
      "İskelet": "Fırınlanmış Gürgen Masif Ağaç",
      "Garanti": "2 Yıl Üretici Garantisi",
      "Kargo": "Tüm Türkiye Ücretsiz Teslimat",
      "Takım Ölçüleri": "Alt Blok (G: 210 cm, D: 53 cm, Y: 43 cm)"
    },
    "sourceUrl": "https://www.mobilyaminegolden.com/salvador-tv-untesi"
  }
];

const CATEGORY_NAMES = {
    living: "Oturma Odası",
    dining: "Yemek Odası",
    bedroom: "Yatak Odası",
    office: "Çalışma Odası"
};

let cart = [];
let wishlist = new Set();
let selectedQty = 1;

const formatPrice = (num) => {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 0 }).format(num);
};

const showToast = (message, icon = "fa-circle-check") => {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 300);
    }, 2800);
};

const getProductIdFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    const idStr = params.get("id");
    if (idStr) {
        const parsed = parseInt(idStr);
        if (!isNaN(parsed)) return parsed;
    }
    const slugStr = params.get("slug");
    if (slugStr) {
        const found = PRODUCTS.find(p => (window.slugify ? window.slugify(p.title) : p.title.toLowerCase()) === slugStr);
        if (found) return found.id;
    }
    return 1;
};



// ── Lightbox Gallery State & Logic ───────────────────────────────────────
let lightboxGallery = [];
let lightboxCurrentIndex = 0;
let currentActiveGalleryIndex = 0;
let touchStartX = 0;

const createLightbox = () => {
    if (document.getElementById('mbl-lightbox')) return;
    const lb = document.createElement('div');
    lb.id = 'mbl-lightbox';
    lb.className = 'mbl-lightbox-overlay';
    lb.innerHTML = `
        <div class="mbl-lightbox-header">
            <div class="lb-header-info">
                <span class="lb-counter" id="lbCounter">1 / 1</span>
                <span class="lb-title" id="lbTitle">Ürün Görseli</span>
            </div>
            <button class="lb-close-btn" id="lbClose" title="Kapat (Esc)">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
        <div class="mbl-lightbox-body" id="lbBody">
            <button class="lb-nav-btn lb-prev-btn" id="lbPrev" title="Önceki (Sol Ok)"><i class="fa-solid fa-chevron-left"></i></button>
            <div class="lb-img-wrapper">
                <img id="lbImg" class="lb-img" src="" alt="Büyütülmüş Ürün Görseli">
            </div>
            <button class="lb-nav-btn lb-next-btn" id="lbNext" title="Sonraki (Sağ Ok)"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
        <div class="mbl-lightbox-footer">
            <div class="lb-thumb-strip" id="lbThumbStrip"></div>
        </div>
    `;
    document.body.appendChild(lb);

    // Event listeners
    document.getElementById('lbClose').addEventListener('click', closeLightbox);
    document.getElementById('lbPrev').addEventListener('click', () => navigateLightbox(-1));
    document.getElementById('lbNext').addEventListener('click', () => navigateLightbox(1));

    // Close on clicking overlay background
    lb.addEventListener('click', (e) => {
        if (e.target.classList.contains('mbl-lightbox-body') || e.target.classList.contains('lb-img-wrapper')) {
            closeLightbox();
        }
    });

    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        const activeLb = document.getElementById('mbl-lightbox');
        if (!activeLb || !activeLb.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        else if (e.key === 'ArrowLeft') navigateLightbox(-1);
        else if (e.key === 'ArrowRight') navigateLightbox(1);
    });

    // Touch swipe support
    const lbBody = document.getElementById('lbBody');
    lbBody.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lbBody.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;
        if (Math.abs(diff) > 40) {
            if (diff < 0) navigateLightbox(1);
            else navigateLightbox(-1);
        }
    }, { passive: true });
};

window.goToSlide = (idx) => {
    const track = document.getElementById('galleryCarouselTrack');
    const pid = getProductIdFromUrl();
    const product = PRODUCTS.find(p => p.id === pid) || PRODUCTS[0];
    const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

    if (idx < 0) idx = 0;
    if (idx >= gallery.length) idx = gallery.length - 1;

    currentActiveGalleryIndex = idx;
    if (track) {
        const slideWidth = track.clientWidth || track.offsetWidth;
        track.scrollTo({ left: idx * slideWidth, behavior: 'smooth' });
    }
    updateActiveSlide(idx);
};

let galleryScrollDebounce = null;
const setupGalleryCarousel = () => {
    const track = document.getElementById('galleryCarouselTrack');
    const wrapper = document.querySelector('.gallery-carousel-wrapper');
    if (!track || !wrapper) return;

    let touchStartX = 0;
    let touchStartY = 0;
    let isHorizontalSwipe = false;

    wrapper.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        isHorizontalSwipe = false;
    }, { passive: true });

    wrapper.addEventListener('touchmove', (e) => {
        if (e.touches.length !== 1) return;
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;
        const diffX = currentX - touchStartX;
        const diffY = currentY - touchStartY;

        // If horizontal movement is greater than vertical, prevent page scroll
        if (Math.abs(diffX) > 8 && Math.abs(diffX) > Math.abs(diffY)) {
            isHorizontalSwipe = true;
            if (e.cancelable) e.preventDefault();
        }
    }, { passive: false });

    wrapper.addEventListener('touchend', (e) => {
        if (!isHorizontalSwipe) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diffX = touchEndX - touchStartX;

        if (diffX < -30) {
            // Swipe left -> Next image
            goToSlide(currentActiveGalleryIndex + 1);
        } else if (diffX > 30) {
            // Swipe right -> Previous image
            goToSlide(currentActiveGalleryIndex - 1);
        }
    }, { passive: true });

    track.addEventListener('scroll', () => {
        if (galleryScrollDebounce) clearTimeout(galleryScrollDebounce);
        galleryScrollDebounce = setTimeout(() => {
            const slideWidth = track.clientWidth;
            if (slideWidth <= 0) return;
            const idx = Math.round(track.scrollLeft / slideWidth);
            updateActiveSlide(idx);
        }, 50);
    }, { passive: true });
};

const updateActiveSlide = (idx) => {
    currentActiveGalleryIndex = idx;
    const numEl = document.getElementById('currentSlideNum');
    if (numEl) numEl.textContent = idx + 1;
    
    const thumbs = document.querySelectorAll('#galleryThumbStrip .thumb-img');
    const strip = document.getElementById('galleryThumbStrip');
    
    thumbs.forEach((thumb, i) => {
        if (i === idx) {
            thumb.classList.add('active');
            if (strip) {
                const thumbLeft = thumb.offsetLeft;
                const thumbWidth = thumb.offsetWidth;
                const stripWidth = strip.offsetWidth;
                strip.scrollTo({ left: thumbLeft - (stripWidth / 2) + (thumbWidth / 2), behavior: 'smooth' });
            }
        } else {
            thumb.classList.remove('active');
        }
    });
};

window.swapMainImg = (src, thumb, idx) => {
    if (typeof idx === 'number') {
        goToSlide(idx);
    }
};

window.openLightbox = (startIndex = 0) => {
    createLightbox();
    const pid = getProductIdFromUrl();
    const product = PRODUCTS.find(p => p.id === pid) || PRODUCTS[0];
    lightboxGallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

    if (typeof startIndex === 'string') {
        const foundIdx = lightboxGallery.indexOf(startIndex);
        lightboxCurrentIndex = foundIdx !== -1 ? foundIdx : currentActiveGalleryIndex;
    } else if (typeof startIndex === 'number') {
        lightboxCurrentIndex = Math.max(0, Math.min(startIndex, lightboxGallery.length - 1));
    } else {
        lightboxCurrentIndex = currentActiveGalleryIndex;
    }

    const lb = document.getElementById('mbl-lightbox');
    const titleEl = document.getElementById('lbTitle');
    if (titleEl) titleEl.textContent = product.title;

    renderLightboxThumbs();
    updateLightboxView();

    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.closeLightbox = () => {
    const lb = document.getElementById('mbl-lightbox');
    if (lb) lb.classList.remove('active');
    document.body.style.overflow = '';
};

window.navigateLightbox = (direction) => {
    if (!lightboxGallery || lightboxGallery.length === 0) return;

    if (typeof direction === 'number' && (direction === 1 || direction === -1)) {
        lightboxCurrentIndex = (lightboxCurrentIndex + direction + lightboxGallery.length) % lightboxGallery.length;
    } else if (typeof direction === 'number') {
        lightboxCurrentIndex = Math.max(0, Math.min(direction, lightboxGallery.length - 1));
    }

    updateLightboxView();
};

const updateLightboxView = () => {
    const lbImg = document.getElementById('lbImg');
    const lbCounter = document.getElementById('lbCounter');
    if (!lbImg) return;

    lbImg.style.opacity = '0.3';
    lbImg.style.transform = 'scale(0.96)';

    setTimeout(() => {
        lbImg.src = lightboxGallery[lightboxCurrentIndex];
        lbImg.style.opacity = '1';
        lbImg.style.transform = 'scale(1)';
    }, 120);

    if (lbCounter) {
        lbCounter.textContent = `${lightboxCurrentIndex + 1} / ${lightboxGallery.length}`;
    }

    goToSlide(lightboxCurrentIndex);

    document.querySelectorAll('.lb-thumb-img').forEach((t, i) => {
        if (i === lightboxCurrentIndex) {
            t.classList.add('active');
            t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            t.classList.remove('active');
        }
    });
};

const renderLightboxThumbs = () => {
    const strip = document.getElementById('lbThumbStrip');
    if (!strip) return;

    strip.innerHTML = lightboxGallery.map((src, i) => `
        <img src="${src}" class="lb-thumb-img ${i === lightboxCurrentIndex ? 'active' : ''}" 
             onclick="navigateLightbox(${i})" title="Görsel ${i + 1}">
    `).join('');
};

let currentModuleState = {
    mainQty: 1,
    extraQty: 0,
    mainUnitPrice: 0,
    extraUnitPrice: 0,
    productBasePrice: 0
};

const renderProductDetail = () => {
    const pid = getProductIdFromUrl();
    const product = PRODUCTS.find(p => p.id === pid) || PRODUCTS[0];
    const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

    document.title = `${product.title} | Mobelmor.com`;

    if (window.history && window.history.replaceState && window.getCleanProductUrl) {
        const cleanUrl = window.getCleanProductUrl(product.id, product.title).replace(/\.html/, '');
        window.history.replaceState(null, '', cleanUrl);
    }

    const breadCat = document.getElementById("breadCatLink");
    const breadTitle = document.getElementById("breadTitle");
    if (breadCat) {
        breadCat.innerHTML = `<i class="fa-solid fa-layer-group"></i> <span>${CATEGORY_NAMES[product.category] || "Koleksiyon"}</span>`;
        breadCat.href = window.getCleanCategoryUrl ? window.getCleanCategoryUrl(product.category) : `kategori.html?c=${product.category}`;
    }
    if (breadTitle) {
        breadTitle.innerHTML = `<span class="mb-live-dot"></span> <span>${product.title}</span>`;
    }

    currentModuleState.productBasePrice = product.price;
    currentModuleState.mainUnitPrice = product.price;
    currentModuleState.extraUnitPrice = Math.round(product.price * 0.18);
    currentModuleState.mainQty = 1;
    currentModuleState.extraQty = 0;

    const detailGrid = document.getElementById("detailGrid");
    if (detailGrid) {
        detailGrid.innerHTML = `
            <div class="product-gallery-box">
                <div class="gallery-carousel-wrapper">
                    <div class="gallery-carousel-track" id="galleryCarouselTrack">
                        ${gallery.map((gImg, idx) => `
                            <div class="gallery-slide" data-index="${idx}">
                                <img src="${gImg}" alt="${product.title} - Görsel ${idx + 1}" class="gallery-slide-img" onerror="this.onerror=null; this.src='assets/zumrut_main.jpg';">
                            </div>
                        `).join('')}
                    </div>
                    <div class="gallery-badges">
                        <span class="badge-tag"><i class="fa-solid fa-gem"></i> ${product.badges?.[0] || 'İNEGÖL KOLEKSİYONU'}</span>
                        <span class="badge-tag badge-dark-glass"><i class="fa-solid fa-shield-check"></i> %100 ORİJİNAL</span>
                    </div>
                    <div class="gallery-counter-pill">
                        <span id="currentSlideNum">1</span> / ${gallery.length}
                    </div>
                </div>
                <div class="thumbnail-strip" id="galleryThumbStrip">
                    ${gallery.map((gImg, idx) => `
                        <img src="${gImg}" class="thumb-img ${idx === 0 ? 'active' : ''}" onclick="goToSlide(${idx})" title="Görsel ${idx + 1}" onerror="this.onerror=null; this.src='assets/zumrut_main.jpg';">
                    `).join('')}
                </div>
            </div>

            <div class="product-info-box">
                <span class="detail-product-code">Ürün Kodu: MBL-${String(product.id).padStart(3,'0')}</span>
                <h1 class="detail-title">${product.title}</h1>
                <div class="detail-stock-badge"><i class="fa-solid fa-circle-check"></i> Stokta Var &nbsp;·&nbsp; Ücretsiz Kurulum</div>

                <div class="detail-price-main" id="topMainPriceDisplay">
                    ${formatPrice(product.price)}
                </div>

                <div class="detail-features-card">
                    <div class="feature-card-item">
                        <i class="fa-solid fa-euro-sign feature-icon"></i>
                        <span>Euro fiyatı için tıklayın</span>
                    </div>
                    <div class="feature-card-item feature-bordered-top">
                        <span class="feature-label-wrap"><i class="fa-solid fa-percent feature-icon"></i> 6 Ay Vade Farksız Taksit</span>
                        <strong id="installmentPriceVal" class="feature-highlight-purple">${formatPrice(Math.round(product.price / 6))}/ay</strong>
                    </div>
                    <div class="feature-card-item feature-bordered-top">
                        <span class="feature-label-wrap"><i class="fa-solid fa-tag feature-icon"></i> %10 Ön Ödeme İndirimi</span>
                        <strong id="prepaymentPriceVal" class="feature-highlight-green">${formatPrice(Math.round(product.price * 0.9))}</strong>
                    </div>
                    <div class="feature-card-item feature-bordered-top">
                        <i class="fa-solid fa-truck-fast feature-icon"></i>
                        <span>Tahmini Teslimat: <strong>05.09.2026</strong></span>
                    </div>
                </div>

                <div class="product-action-buttons-group">
                    <button class="mobelmor-cart-btn interactive-btn" id="topDetailAddToCartBtn">
                        <i class="fa-solid fa-cart-shopping"></i> Sepete Ekle
                    </button>
                    <div class="secondary-actions-grid">
                        <a href="https://wa.me/905320000000?text=${encodeURIComponent(product.title + ' hakkında bilgi almak istiyorum')}" target="_blank" class="action-btn-whatsapp interactive-btn">
                            <i class="fa-brands fa-whatsapp"></i> WhatsApp Sipariş
                        </a>
                        <a href="kumas-kartelasi.html" class="action-btn-fabric interactive-btn">
                            <i class="fa-solid fa-palette"></i> Kumaş Seçenekleri
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    setupGalleryCarousel();
    renderModulePriceSection(product);
    renderSpecsAndGeneralInfo(product);
    renderRelatedProducts(product);

    document.getElementById("topDetailAddToCartBtn")?.addEventListener("click", () => {
        addToCart(product.id, 1);
    });
};

const getCategoryModuleConfig = (product) => {
    const cat = product.category;
    const sub = product.subcategory || '';
    const specs = product.specs || {};
    const specEntries = Object.entries(specs).filter(([k,v]) => k && v && k !== 'Modül' && k !== 'Genişlik');

    if (cat === 'living' && sub === 'sofas') {
        return [
            { id: 'main',  label: "3'lü Koltuk",          price: Math.round(product.price * 0.55), qty: 1 },
            { id: 'extra', label: 'Berjer (isteğe bağlı)', price: Math.round(product.price * 0.22), qty: 0 },
        ];
    } else if (cat === 'dining') {
        return [
            { id: 'main',  label: 'Masa + Sandalye Takımı', price: product.price,                    qty: 1 },
            { id: 'extra', label: 'Ekstra Sandalye',         price: Math.round(product.price * 0.08), qty: 0 },
        ];
    } else if (cat === 'bedroom') {
        return [
            { id: 'main',  label: 'Yatak Odası Takımı',  price: product.price,                    qty: 1 },
            { id: 'extra', label: 'Baza & Başlık',        price: Math.round(product.price * 0.20), qty: 0 },
        ];
    } else {
        return [
            { id: 'main',  label: product.title, price: product.price, qty: 1 },
        ];
    }
};

const renderModulePriceSection = (product) => {
    const container = document.getElementById("modulePriceSection");
    if (!container) return;

    const modules = getCategoryModuleConfig(product);
    currentModuleState.modules = modules.map(m => ({ ...m }));

    const rows = modules.map(m => `
        <tr>
            <td style="font-weight:700;text-align:left;padding-left:20px;color:#1e293b;">${m.label}</td>
            <td style="color:#334155;font-weight:700;">${formatPrice(m.price)}</td>
            <td>
                <div class="qty-counter-box">
                    <button class="qty-counter-btn" onclick="updateModuleQty('${m.id}',-1)" aria-label="Adet Azalt"><i class="fa-solid fa-minus"></i></button>
                    <span class="qty-counter-val" id="mod_${m.id}_qty">${m.qty}</span>
                    <button class="qty-counter-btn" onclick="updateModuleQty('${m.id}',1)" aria-label="Adet Artır"><i class="fa-solid fa-plus"></i></button>
                </div>
            </td>
            <td style="font-weight:800;color:#6b21a8;" id="mod_${m.id}_sub">${formatPrice(m.price * m.qty)}</td>
        </tr>
    `).join('');

    container.innerHTML = `
        <div class="module-header-title">
            <span class="module-header-text">Modül & Fiyat Hesaplayıcı</span>
            <span class="module-live-tag"><i class="fa-solid fa-bolt"></i> Canlı Hesaplama</span>
        </div>
        <div class="module-table-wrapper">
            <table class="module-table">
                <thead><tr><th>Modül</th><th>Birim Fiyat</th><th>Adet</th><th>Ara Toplam</th></tr></thead>
                <tbody>${rows}</tbody>
            </table>
            <div class="module-total-side">
                <span style="font-size:0.85rem;font-weight:800;color:#71717a;margin-bottom:4px;">Hesaplanan Toplam:</span>
                <span class="grand-total-val" id="moduleGrandTotal">${formatPrice(product.price)}</span>
                <button class="mobelmor-cart-btn interactive-btn" id="moduleAddToCartBtn">
                    <i class="fa-solid fa-cart-shopping"></i> Sepete Ekle
                </button>
            </div>
        </div>
    `;

    document.getElementById("moduleAddToCartBtn")?.addEventListener("click", () => addToCart(product.id, 1));
};

// DYNAMIC LIVE CALCULATOR
window.updateModuleQty = (id, delta) => {
    const mod = currentModuleState.modules?.find(m => m.id === id);
    if (!mod) return;
    if (id === 'main') mod.qty = Math.max(1, mod.qty + delta);
    else mod.qty = Math.max(0, mod.qty + delta);

    const qtyEl = document.getElementById(`mod_${id}_qty`);
    const subEl = document.getElementById(`mod_${id}_sub`);
    if (qtyEl) qtyEl.textContent = mod.qty;
    if (subEl) subEl.textContent = formatPrice(mod.price * mod.qty);

    const grandTotal = (currentModuleState.modules || []).reduce((s, m) => s + m.price * m.qty, 0);
    const fmt = formatPrice(grandTotal);
    const grandEl = document.getElementById('moduleGrandTotal');
    const topEl = document.getElementById('topMainPriceDisplay');
    const instEl = document.getElementById('installmentPriceVal');
    const preEl = document.getElementById('prepaymentPriceVal');
    if (grandEl) grandEl.textContent = fmt;
    if (topEl) topEl.textContent = fmt;
    if (instEl) instEl.textContent = formatPrice(Math.round(grandTotal / 6));
    if (preEl) preEl.textContent = formatPrice(Math.round(grandTotal * 0.1));
};

const renderSpecsAndGeneralInfo = (product) => {
    const dimsTable = document.getElementById('moduleDimsTable');
    const featureTable = document.getElementById('featureSpecsTable');
    const specs = product.specs || {};
    const specEntries = Object.entries(specs).filter(([k, v]) => k && v && k.trim() && v.trim() && k !== 'Modül' && k !== 'Genişlik' && v !== 'Genişlik');

    // Ölçü tablosu - gerçek ürün specs'inden ölçü verilerini çek
    if (dimsTable) {
        if (specEntries.length > 0) {
            const rows = specEntries.map(([k, v]) =>
                `<tr><th class="spec-label">${k}</th><td class="spec-value">${v}${/^\d+$/.test(v.trim()) ? ' cm' : ''}</td></tr>`
            ).join('');
            dimsTable.innerHTML = `<tbody>${rows}</tbody>`;
        } else {
            dimsTable.innerHTML = '<tbody><tr><td colspan="2" style="color:#94a3b8;padding:14px;text-align:left;">Ölçü bilgisi mevcut değil.</td></tr></tbody>';
        }
    }

    // Özellik tablosu - gerçek ürün bilgileri
    if (featureTable) {
        const cat = product.category;
        const generalFeatures = [
            cat === 'bedroom' ? ['Garanti', '2 Yıl Üretici Garantisi'] : null,
            cat === 'living' ? ['İskelet', '%100 Masif Gürgen'] : null,
            cat === 'living' ? ['Sünger', '28 Dansite HR Konfor'] : null,
            cat === 'dining' ? ['Malzeme', 'MDF & Masif Ahşap'] : null,
            cat === 'dining' ? ['Garanti', '2 Yıl Üretici Garantisi'] : null,
            ['Teslimat', 'Türkiye & Avrupa Geneli'],
            ['Kurulum', 'Ücretsiz Profesyonel Kurulum'],
            ['Kaynak', 'Orijinal İnegöl Mobilyası'],
        ].filter(Boolean);

        featureTable.innerHTML = `<tbody>${generalFeatures.map(([k,v]) =>
            `<tr><th class="spec-label">${k}</th><td class="spec-value">${v}</td></tr>`
        ).join('')}</tbody>`;
    }
};

const renderRelatedProducts = (currentProduct) => {
    const grid = document.getElementById("relatedGrid");
    if (!grid) return;

    let related = PRODUCTS.filter(p => p.id !== currentProduct.id && p.category === currentProduct.category && p.subcategory === currentProduct.subcategory).slice(0, 4);
    if (related.length === 0) {
        related = PRODUCTS.filter(p => p.id !== currentProduct.id && p.category === currentProduct.category).slice(0, 4);
    }

    grid.innerHTML = related.map(item => {
        const itemUrl = window.getCleanProductUrl ? window.getCleanProductUrl(item.id, item.title) : `urun-detay.html?id=${item.id}`;
        return `
        <article class="product-card" onclick="window.location.href='${itemUrl}'" style="cursor: pointer;">
            <div class="card-image-box">
                <img src="${item.image}" alt="${item.title}" class="card-img">
            </div>
            <div class="card-details">
                <span class="card-material-tag">${item.material}</span>
                <h3 class="card-product-title">${item.title}</h3>
                <div class="card-price-row">
                    <span class="card-price-text">${formatPrice(item.price)}</span>
                    <button class="pill-add-btn" onclick="event.stopPropagation(); window.location.href='${itemUrl}'">İncele</button>
                </div>
            </div>
        </article>
    `}).join('');
};

const addToCart = (productId, qty = 1) => {
    const item = PRODUCTS.find(p => p.id === productId);
    if (!item) return;
    const existing = cart.find(c => c.id === productId);
    if (existing) existing.qty += qty;
    else cart.push({ ...item, qty });
    updateBadges();
    showToast(`"${item.title}" (${qty} Adet) sepete eklendi!`, "fa-bag-shopping");
};

const updateBadges = () => {
    const cartBadge = document.getElementById("cartBadge");
    if (cartBadge) cartBadge.textContent = cart.reduce((sum, c) => sum + c.qty, 0);
};

const openCheckoutModal = () => {
    const overlay = document.getElementById("checkoutOverlay");
    if (!overlay) return;
    overlay.classList.add("active");
};

const renderCart = () => {
    const body = document.getElementById("cartBody");
    const footer = document.getElementById("cartFooter");
    if (!body || !footer) return;

    if (cart.length === 0) {
        body.innerHTML = `<p style="text-align:center; padding:30px; color:#71717a;">Sepetiniz boş.</p>`;
        footer.innerHTML = "";
        return;
    }

    body.innerHTML = cart.map(item => `
        <div class="cart-item-row">
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-info">
                <h5 class="cart-item-title">${item.title}</h5>
                <span class="cart-item-price">${formatPrice(item.price)}</span>
            </div>
            <div class="cart-qty-controls">
                <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                <span style="font-weight:800;">${item.qty}</span>
                <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
            </div>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);

    footer.innerHTML = `
        <div class="cart-total-line">
            <span>Toplam:</span>
            <span style="color:#6b21a8;">${formatPrice(subtotal)}</span>
        </div>
        <button class="btn btn-primary btn-block interactive-btn" id="openCheckoutBtn">Güvenli Ödemeye Geç</button>
    `;
};

window.changeQty = (id, delta) => {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
    updateBadges();
    renderCart();
};

document.addEventListener("DOMContentLoaded", () => {
    renderProductDetail();

    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-tab");
            document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
            btn.classList.add("active");
            document.getElementById(targetId)?.classList.add("active");
        });
    });

    document.getElementById("cartBtn")?.addEventListener("click", () => {
        renderCart();
        document.getElementById("cartDrawer")?.classList.add("active");
        document.getElementById("cartOverlay")?.classList.add("active");
    });

    document.getElementById("closeCartBtn")?.addEventListener("click", () => {
        document.getElementById("cartDrawer")?.classList.remove("active");
        document.getElementById("cartOverlay")?.classList.remove("active");
    });

    document.getElementById("cartOverlay")?.addEventListener("click", () => {
        document.getElementById("cartDrawer")?.classList.remove("active");
        document.getElementById("cartOverlay")?.classList.remove("active");
    });

    document.getElementById("wishlistBtn")?.addEventListener("click", () => {
        document.getElementById("wishlistDrawer")?.classList.add("active");
        document.getElementById("wishlistOverlay")?.classList.add("active");
    });

    document.getElementById("closeWishlistBtn")?.addEventListener("click", () => {
        document.getElementById("wishlistDrawer")?.classList.remove("active");
        document.getElementById("wishlistOverlay")?.classList.remove("active");
    });

    document.getElementById("closeCheckoutBtn")?.addEventListener("click", () => {
        document.getElementById("checkoutOverlay")?.classList.remove("active");
    });

    // Checkout Form Submit Handling
    const checkoutForm = document.getElementById("checkoutForm");
    if (checkoutForm) {
        checkoutForm.addEventListener("submit", (e) => {
            e.preventDefault();
            cart = [];
            updateBadges();
            renderCart();
            document.getElementById("checkoutOverlay")?.classList.remove("active");
            showToast("Siparişiniz başarıyla alındı! Müşteri temsilcimiz sizinle iletişime geçecektir.", "fa-circle-check");
            checkoutForm.reset();
        });
    }

    // Info Modals (Garanti, Kumaş, SSS, Gizlilik)
    const INFO_MODALS = {
        warranty: {
            title: '<i class="fa-solid fa-shield-cat"></i> Garanti & İade Koşulları',
            body: `
                <div style="display:flex; flex-direction:column; gap:12px;">
                    <div style="background:#f4f4f5; padding:12px; border-radius:8px; border-left:4px solid #6b21a8;">
                        <h4 style="margin:0 0 4px 0; color:#18181b;">2 Yıl Üretici Garantisi</h4>
                        <p style="margin:0; font-size:0.85rem;">Tüm İnegöl mobilyası ürünlerimiz 2 yıl boyunca %100 orijinal imalat ve malzeme garantisi altındadır.</p>
                    </div>
                    <div style="background:#f4f4f5; padding:12px; border-radius:8px; border-left:4px solid #10b981;">
                        <h4 style="margin:0 0 4px 0; color:#18181b;">14 Gün Koşulsuz İade Hakkı</h4>
                        <p style="margin:0; font-size:0.85rem;">Eksiksiz ambalajında hasarsız ürünler için 14 gün içerisinde cayma hakkınızı kullanabilirsiniz.</p>
                    </div>
                    <div style="background:#f4f4f5; padding:12px; border-radius:8px; border-left:4px solid #3b82f6;">
                        <h4 style="margin:0 0 4px 0; color:#18181b;">Sigortalı Sevkiyat & Kurulum</h4>
                        <p style="margin:0; font-size:0.85rem;">Taşıma ve kurulum esnasında oluşabilecek tüm zararlar Mobelmor garantisi ile anında yenisi ile değiştirilir.</p>
                    </div>
                </div>
            `
        },
        fabric: {
            title: '<i class="fa-solid fa-swatchbook"></i> Kumaş & Renk Kartelası',
            body: `
                <p>Mobelmor ürünlerinde kullanılan tüm kumaşlar leke tutmaz, silinebilir ve yüksek sürtünme dayanımlı 1. sınıf akıllı kumaş teknolojisine sahiptir.</p>
                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(120px, 1fr)); gap:10px; margin:16px 0;">
                    <div style="background:#fdf4ff; border:1px solid #f0abfc; padding:10px; text-align:center; border-radius:8px; font-weight:700; color:#86198f;">Krem Kadife</div>
                    <div style="background:#f1f5f9; border:1px solid #cbd5e1; padding:10px; text-align:center; border-radius:8px; font-weight:700; color:#334155;">Antrasit Keten</div>
                    <div style="background:#fff7ed; border:1px solid #ffedd5; padding:10px; text-align:center; border-radius:8px; font-weight:700; color:#c2410c;">Kiremit Taytüyü</div>
                    <div style="background:#ecfdf5; border:1px solid #a7f3d0; padding:10px; text-align:center; border-radius:8px; font-weight:700; color:#047857;">Zümrüt Yeşili</div>
                </div>
                <a href="https://wa.me/905300000000?text=Merhaba,%20ücretsiz%20kumaş%20kartelası%20istiyorum." target="_blank" class="btn btn-primary btn-block interactive-btn" style="text-align:center; display:block; padding:12px; margin-top:12px; text-decoration:none;">
                    <i class="fa-brands fa-whatsapp"></i> Ücretsiz Kumaş Numunesi İste
                </a>
            `
        },
        faq: {
            title: '<i class="fa-solid fa-circle-question"></i> Sıkça Sorulan Sorular',
            body: `
                <div style="display:flex; flex-direction:column; gap:10px;">
                    <div>
                        <strong style="color:#6b21a8;">S: Teslimat süresi ne kadar?</strong>
                        <p style="margin:2px 0 0 0; font-size:0.85rem;">C: Türkiye geneline 7 - 14 iş günü içerisinde ücretsiz teslimat ve kurulum yapılmaktadır.</p>
                    </div>
                    <hr style="border:none; border-top:1px solid #f4f4f5; margin:4px 0;">
                    <div>
                        <strong style="color:#6b21a8;">S: Kurulum ücretli mi?</strong>
                        <p style="margin:2px 0 0 0; font-size:0.85rem;">C: Hayır, uzman ekiplerimiz tarafından tüm ürünlerin montajı ücretsiz yapılmaktadır.</p>
                    </div>
                    <hr style="border:none; border-top:1px solid #f4f4f5; margin:4px 0;">
                    <div>
                        <strong style="color:#6b21a8;">S: Ödeme seçenekleri nelerdir?</strong>
                        <p style="margin:2px 0 0 0; font-size:0.85rem;">C: Kredi kartına 12 aya varan taksit, Kapıda ödeme ve Havale/EFT kabul edilmektedir.</p>
                    </div>
                </div>
            `
        },
        privacy: {
            title: '<i class="fa-solid fa-lock"></i> Gizlilik & Güvenlik Politikası',
            body: `
                <p>Mobelmor.com müşteri güvenliğini en üst düzeyde tutmaktadır.</p>
                <ul style="padding-left:20px; margin:10px 0; font-size:0.88rem;">
                    <li><strong>256-Bit SSL:</strong> Tüm kart işlemleri yüksek şifrelemeli SSL alt yapısı ile korunur.</li>
                    <li><strong>KVKK Uyumlu:</strong> Kişisel verileriniz 6698 sayılı kanun gereğince güvenle muhafaza edilir.</li>
                    <li><strong>3D Secure:</strong> Tüm ödemeler bankanızın onay kodu ile gerçekleşir.</li>
                </ul>
            `
        }
    };

    document.querySelectorAll(".info-modal-trigger").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const type = btn.getAttribute("data-type");
            const data = INFO_MODALS[type];
            if (!data) return;
            const overlay = document.getElementById("infoModalOverlay");
            const title = document.getElementById("infoModalTitle");
            const body = document.getElementById("infoModalBody");
            if (overlay && title && body) {
                title.innerHTML = data.title;
                body.innerHTML = data.body;
                overlay.classList.add("active");
            }
        });
    });

    document.getElementById("closeInfoModalBtn")?.addEventListener("click", () => {
        document.getElementById("infoModalOverlay")?.classList.remove("active");
    });
    document.getElementById("infoModalOverlay")?.addEventListener("click", (e) => {
        if (e.target.id === "infoModalOverlay") {
            document.getElementById("infoModalOverlay")?.classList.remove("active");
        }
    });
});

