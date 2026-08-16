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
    // Also check pathname: /urun/slug or /slug
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const lastPart = pathParts[pathParts.length - 1];
    if (lastPart && !lastPart.includes('detail') && !lastPart.includes('detay')) {
        const cleanLast = lastPart.replace(/\.html$/, '');
        const found = PRODUCTS.find(p => (window.slugify ? window.slugify(p.title) : p.title.toLowerCase()) === cleanLast);
        if (found) return found.id;
    }
    return 1;
};

// ── Lightbox Gallery State & Logic ───────────────────────────────────────
let lightboxGallery = [];
let lightboxCurrentIndex = 0;
let currentActiveGalleryIndex = 0;

window.handleSlideClick = (event, idx) => {
    if (event) {
        event.stopPropagation();
    }
    const targetIdx = typeof idx === 'number' ? idx : currentActiveGalleryIndex;
    openLightbox(targetIdx);
};

window.createLightbox = () => {
    let lb = document.getElementById('mbl-lightbox');
    if (lb) return lb;

    lb = document.createElement('div');
    lb.id = 'mbl-lightbox';
    lb.className = 'mbl-lightbox-overlay';
    lb.innerHTML = `
        <button type="button" class="lb-vivense-close" id="lbClose" onclick="closeLightbox()" title="Kapat (Esc)" aria-label="Kapat">
            <i class="fa-solid fa-xmark"></i>
        </button>
        <button type="button" class="lb-vivense-nav lb-vivense-prev" id="lbPrev" onclick="navigateLightbox(-1)" title="Önceki" aria-label="Önceki Fotoğraf">
            <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button type="button" class="lb-vivense-nav lb-vivense-next" id="lbNext" onclick="navigateLightbox(1)" title="Sonraki" aria-label="Sonraki Fotoğraf">
            <i class="fa-solid fa-chevron-right"></i>
        </button>
        <div class="lb-vivense-card" id="lbCard">
            <div class="lb-vivense-header">
                <span class="lb-vivense-title" id="lbTitle">ÜRÜN GÖRSELİ</span>
            </div>
            <div class="lb-vivense-body" id="lbImgWrapper">
                <img id="lbImg" class="lb-vivense-img" src="" alt="Büyük Ürün Görseli">
            </div>
            <div class="lb-vivense-footer">
                <span class="lb-vivense-counter" id="lbCounter">1/1</span>
            </div>
        </div>
    `;
    document.body.appendChild(lb);

    // Close on clicking backdrop outside the card
    lb.addEventListener('click', (e) => {
        if (!e.target.closest('#lbCard') && !e.target.closest('#lbPrev') && !e.target.closest('#lbNext')) {
            closeLightbox();
        }
    });

    // Touch swipe on card
    const lbCard = document.getElementById('lbCard');
    let touchStartX = 0;
    let touchStartY = 0;

    lbCard?.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }
    }, { passive: true });

    lbCard?.addEventListener('touchend', (e) => {
        if (e.changedTouches.length > 0) {
            const diffX = e.changedTouches[0].clientX - touchStartX;
            const diffY = e.changedTouches[0].clientY - touchStartY;
            if (Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY)) {
                if (diffX < 0) navigateLightbox(1);
                else navigateLightbox(-1);
            }
        }
    }, { passive: true });

    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        const activeLb = document.getElementById('mbl-lightbox');
        if (!activeLb || !activeLb.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        else if (e.key === 'ArrowLeft') navigateLightbox(-1);
        else if (e.key === 'ArrowRight') navigateLightbox(1);
    });

    return lb;
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
    let touchStartTime = 0;
    let hasMoved = false;

    // Direct touch gesture handler that reliably detects TAP vs SWIPE
    wrapper.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchStartTime = Date.now();
        hasMoved = false;
    }, { passive: true });

    wrapper.addEventListener('touchmove', (e) => {
        if (e.touches.length !== 1) return;
        const diffX = e.touches[0].clientX - touchStartX;
        const diffY = e.touches[0].clientY - touchStartY;
        if (Math.abs(diffX) > 18 || Math.abs(diffY) > 18) {
            hasMoved = true;
        }
    }, { passive: true });

    wrapper.addEventListener('touchend', (e) => {
        if (e.target.closest('.gallery-zoom-trigger-btn') || e.target.closest('.gallery-badges')) return;
        
        const touchDuration = Date.now() - touchStartTime;
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;

        // If it was a quick touch with minimal displacement -> TAP to open Lightbox!
        if (!hasMoved && Math.abs(diffX) < 18 && Math.abs(diffY) < 18 && touchDuration < 380) {
            openLightbox(currentActiveGalleryIndex);
            return;
        }

        // If it was a deliberate swipe gesture
        if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX < 0) {
                goToSlide(currentActiveGalleryIndex + 1);
            } else {
                goToSlide(currentActiveGalleryIndex - 1);
            }
        }
    }, { passive: true });

    // Track native horizontal scroll update
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
    const lb = createLightbox();
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

    const titleEl = document.getElementById('lbTitle');
    if (titleEl) titleEl.textContent = (product.title || 'ÜRÜN GÖRSELİ').toUpperCase();

    updateLightboxView();

    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
};

window.closeLightbox = () => {
    const lb = document.getElementById('mbl-lightbox');
    if (lb) lb.classList.remove('active');
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
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

    setTimeout(() => {
        lbImg.src = lightboxGallery[lightboxCurrentIndex];
        lbImg.style.opacity = '1';
    }, 60);

    if (lbCounter) {
        lbCounter.textContent = `${lightboxCurrentIndex + 1}/${lightboxGallery.length}`;
    }

    goToSlide(lightboxCurrentIndex);
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
        const cleanUrl = window.getCleanProductUrl(product.id, product.title);
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

    // Highlight active category in Vivense nav bar on detail page
    document.querySelectorAll(".vivense-nav-item").forEach(item => item.classList.remove("active"));
    if (product.category) {
        const catSlug = window.CATEGORY_SLUGS ? (window.CATEGORY_SLUGS[product.category] || product.category) : product.category;
        document.querySelectorAll(".vivense-nav-item").forEach(item => {
            const link = item.querySelector(".vivense-nav-link");
            if (link) {
                const href = link.getAttribute("href") || "";
                if (href.includes(`c=${catSlug}`) || href.includes(`c=${product.category}`)) {
                    item.classList.add("active");
                }
            }
        });
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
                            <div class="gallery-slide" data-index="${idx}" onclick="handleSlideClick(event, ${idx})" title="Fotoğrafı Büyüt">
                                <img src="${gImg}" alt="${product.title} - Görsel ${idx + 1}" class="gallery-slide-img" onerror="this.onerror=null; this.src='assets/zumrut_main.jpg';">
                            </div>
                        `).join('')}
                    </div>
                    <div class="gallery-badges">
                        <span class="badge-tag"><i class="fa-solid fa-gem"></i> ${product.badges?.[0] || 'İNEGÖL KOLEKSİYONU'}</span>
                        <span class="badge-tag badge-dark-glass"><i class="fa-solid fa-shield-check"></i> %100 ORİJİNAL</span>
                    </div>
                    <button type="button" class="gallery-zoom-trigger-btn" onclick="openLightbox(currentActiveGalleryIndex)" title="Fotoğrafı Büyüt">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                        <span>Büyüt</span>
                    </button>
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
    document.body.classList.add("modal-open");
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

    document.getElementById("openCheckoutBtn")?.addEventListener("click", () => {
        document.getElementById("cartDrawer")?.classList.remove("active");
        document.getElementById("cartOverlay")?.classList.remove("active");
        const totalEl = document.getElementById("checkoutTotal");
        if (totalEl) totalEl.textContent = formatPrice(subtotal);
        openCheckoutModal();
    });
};

window.buyNow = (productId) => {
    addToCart(productId, 1);
    const item = PRODUCTS.find(p => p.id === productId);
    const subtotal = item ? item.price : 0;
    const totalEl = document.getElementById("checkoutTotal");
    if (totalEl) totalEl.textContent = formatPrice(subtotal);
    openCheckoutModal();
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
    createLightbox();
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
        document.body.classList.remove("modal-open");
    });
    document.getElementById("checkoutOverlay")?.addEventListener("click", (e) => {
        if (e.target.id === "checkoutOverlay") {
            document.getElementById("checkoutOverlay")?.classList.remove("active");
            document.body.classList.remove("modal-open");
        }
    });

    // ── Contract & KVKK Tab Switcher in Checkout Modal ──
    const btnContractMss = document.getElementById("btnContractMss");
    const btnContractKvkk = document.getElementById("btnContractKvkk");
    const contractContentBox = document.getElementById("contractContentBox");

    const mssHtml = `
        <p style="margin:0 0 6px 0;"><strong>MADDE 1 - TARAFLAR:</strong><br>
        <strong>SATICI:</strong> Mobelmor İnegöl Mobilya San. ve Tic. Ltd. Şti.<br>
        <strong>ALICI:</strong> Mobelmor.com üzerinden sipariş veren nihai tüketici.</p>
        
        <p style="margin:0 0 6px 0;"><strong>MADDE 2 - KONU &amp; KAPSAM:</strong><br>
        İşbu sözleşmenin konusu, ALICI'nın SATICI'ya ait www.mobelmor.com internet sitesinden siparişini verdiği mobilya ve ev dekorasyon ürünlerinin 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince satışı ve teslimidir.</p>
        
        <p style="margin:0 0 6px 0;"><strong>MADDE 3 - TESLİMAT &amp; MONTAJ:</strong><br>
        Mobilya ürünleri, özel korumalı ambalajında sigortalı mobilya lojistik araçlarımızla ALICI'nın belirttiği teslimat adresine kata teslim ve ücretsiz profesyonel montaj hizmeti ile ulaştırılır.</p>
        
        <p style="margin:0 0 6px 0;"><strong>MADDE 4 - CAYMA HAKKI &amp; İADE:</strong><br>
        ALICI, standart ürünlerde 14 gün içinde cayma hakkına sahiptir. Tüketicinin özel istekleri doğrultusunda özel ölçü üretilen veya özel kumaş/renk döşemesi yapılan ürünler, 6502 Sayılı Kanun Madde 15/b uyarınca cayma hakkı istisnası kapsamındadır.</p>
        
        <p style="margin:0;"><strong>MADDE 5 - GARANTİ:</strong><br>
        Tüm ürünlerimiz 2 Yıl Mobelmor Üretici ve İskelet Garantisi altındadır.</p>
    `;

    const kvkkHtml = `
        <p style="margin:0 0 6px 0;"><strong>1. VERİ SORUMLUSU:</strong><br>
        6698 sayılı KVKK kapsamında Mobelmor İnegöl Mobilya San. ve Tic. Ltd. Şti. veri sorumlusudur.</p>
        
        <p style="margin:0 0 6px 0;"><strong>2. İŞLENEN VERİLER VE AMAÇ:</strong><br>
        Sipariş sürecinde paylaştığınız Ad, Soyad, Telefon, E-posta ve Teslimat Adresi bilgileriniz; siparişin teyit edilmesi, özel mobilya üretim/döşeme planlaması, sigortalı nakliye ile adresinize teslimatın sağlanması ve faturalandırma amacıyla işlenmektedir.</p>
        
        <p style="margin:0 0 6px 0;"><strong>3. VERİ AKTARIMI:</strong><br>
        Kişisel verileriniz yalnızca teslimatın gerçekleştirilebilmesi amacıyla yetkili mobilya lojistik ekiplerimiz ve yasal yükümlülükler çerçevesinde yetkili kamu kurumlarıyla paylaşılmaktadır. Üçüncü şahıslara veya reklam şirketlerine asla devredilmez.</p>
        
        <p style="margin:0;"><strong>4. HAKLARINIZ:</strong><br>
        KVKK'nın 11. maddesi uyarınca verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini talep etme ve silinmesini isteme hakkına sahipsiniz.</p>
    `;

    btnContractMss?.addEventListener("click", () => {
        btnContractMss.classList.add("active");
        btnContractKvkk?.classList.remove("active");
        if (contractContentBox) contractContentBox.innerHTML = mssHtml;
    });

    btnContractKvkk?.addEventListener("click", () => {
        btnContractKvkk.classList.add("active");
        btnContractMss?.classList.remove("active");
        if (contractContentBox) contractContentBox.innerHTML = kvkkHtml;
    });

    // ── User Authentication & Account System (Simulation & Persistence) ──
    const getCurrentUser = () => {
        try {
            return JSON.parse(localStorage.getItem("mobelmor_current_user") || "null");
        } catch {
            return null;
        }
    };

    window.openAuthModal = (tab = "login") => {
        const overlay = document.getElementById("authModalOverlay");
        if (overlay) {
            overlay.classList.add("active");
            document.body.classList.add("modal-open");
        }
        if (tab === "register") {
            tabRegisterBtn?.click();
        } else {
            tabLoginBtn?.click();
        }
    };

    const formatDisplayName = (name) => {
        if (!name) return "Giriş";
        const firstWord = name.trim().split(/\s+/)[0];
        if (!firstWord) return "Giriş";
        return firstWord.charAt(0).toLocaleUpperCase('tr-TR') + firstWord.slice(1).toLocaleLowerCase('tr-TR');
    };

    const formatFullName = (name) => {
        if (!name) return "";
        return name.trim().split(/\s+/).map(word => 
            word.charAt(0).toLocaleUpperCase('tr-TR') + word.slice(1).toLocaleLowerCase('tr-TR')
        ).join(' ');
    };

    const updateAuthUI = () => {
        const user = getCurrentUser();
        const authBtn = document.getElementById("headerAuthBtn");
        const authText = document.getElementById("headerAuthText");
        const dropdown = document.getElementById("userMenuDropdown");

        if (user) {
            const dispName = formatDisplayName(user.name);
            authBtn?.classList.add("logged-in");
            if (authText) authText.textContent = dispName;
            if (dropdown) {
                dropdown.innerHTML = `
                    <div style="padding:10px 14px; font-size:0.84rem; font-weight:800; color:#18181b; border-bottom:1px solid #f4f4f5;">
                        <i class="fa-solid fa-circle-user" style="color:#6b21a8;"></i> Hoş geldiniz, ${dispName}
                    </div>
                    <a href="siparislerim.html" class="user-dropdown-item"><i class="fa-solid fa-box-open" style="color:#6b21a8;"></i> Siparişlerim &amp; Takip</a>
                    <a href="siparislerim.html#profile" class="user-dropdown-item"><i class="fa-solid fa-id-card" style="color:#6b21a8;"></i> Adres &amp; Bilgilerim</a>
                    <div class="user-dropdown-divider"></div>
                    <a href="javascript:void(0)" class="user-dropdown-item" id="logoutBtn" style="color:#ef4444;"><i class="fa-solid fa-arrow-right-from-bracket"></i> Çıkış Yap</a>
                `;
                document.getElementById("logoutBtn")?.addEventListener("click", () => {
                    localStorage.removeItem("mobelmor_current_user");
                    updateAuthUI();
                    showToast("Başarıyla çıkış yapıldı.", "fa-arrow-right-from-bracket");
                    if (window.location.pathname.includes("siparislerim")) {
                        setTimeout(() => window.location.reload(), 500);
                    }
                });
            }

            // Autofill checkout fields if empty
            const cName = document.getElementById("checkoutName");
            const cEmail = document.getElementById("checkoutEmail");
            const cPhone = document.getElementById("checkoutPhone");
            const cAddr = document.getElementById("checkoutAddress");
            if (cName && !cName.value) cName.value = user.name || "";
            if (cEmail && !cEmail.value) cEmail.value = user.email || "";
            if (cPhone && !cPhone.value) cPhone.value = user.phone || "";
            if (cAddr && !cAddr.value && user.address) cAddr.value = user.address;
        } else {
            authBtn?.classList.remove("logged-in");
            if (authText) authText.textContent = "Giriş";
            if (dropdown) {
                dropdown.innerHTML = `
                    <div style="padding:10px 14px; font-size:0.84rem; font-weight:800; color:#18181b; border-bottom:1px solid #f4f4f5;">
                        <i class="fa-regular fa-user" style="color:#6b21a8;"></i> Mobelmor Üyelik
                    </div>
                    <a href="javascript:void(0)" onclick="openAuthModal('login')" class="user-dropdown-item"><i class="fa-solid fa-arrow-right-to-bracket" style="color:#6b21a8;"></i> Giriş Yap</a>
                    <a href="javascript:void(0)" onclick="openAuthModal('register')" class="user-dropdown-item"><i class="fa-solid fa-user-plus" style="color:#6b21a8;"></i> Ücretsiz Kayıt Ol</a>
                    <div class="user-dropdown-divider"></div>
                    <a href="siparislerim.html" class="user-dropdown-item"><i class="fa-solid fa-truck-fast" style="color:#6b21a8;"></i> Sipariş Takip</a>
                `;
            }
        }
    };

    // Order Track Button Click / Tap Handling (Desktop & Mobile)
    const orderTrackBtn = document.getElementById("orderTrackBtn");
    const orderTrackDropdown = document.getElementById("orderTrackDropdown");

    orderTrackBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        document.getElementById("userMenuDropdown")?.classList.remove("active");
        if (orderTrackDropdown) {
            const isCurrentlyActive = orderTrackDropdown.classList.contains("active");
            if (isCurrentlyActive) {
                orderTrackDropdown.classList.remove("active");
                orderTrackBtn.blur();
            } else {
                orderTrackDropdown.classList.add("active");
            }
        }
    });

    // Auth Button Click Handling
    const headerAuthBtn = document.getElementById("headerAuthBtn");
    const userMenuDropdown = document.getElementById("userMenuDropdown");

    headerAuthBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        orderTrackDropdown?.classList.remove("active");
        if (userMenuDropdown) {
            const isCurrentlyActive = userMenuDropdown.classList.contains("active");
            if (isCurrentlyActive) {
                userMenuDropdown.classList.remove("active");
                headerAuthBtn.blur();
            } else {
                userMenuDropdown.classList.add("active");
            }
        }
    });

    // Close header dropdowns on outside click
    document.addEventListener("click", (e) => {
        if (!e.target.closest("#orderTrackContainer")) {
            orderTrackDropdown?.classList.remove("active");
        }
        if (!e.target.closest("#headerAuthContainer")) {
            userMenuDropdown?.classList.remove("active");
        }
    });

    // Logout Handling
    document.getElementById("logoutBtn")?.addEventListener("click", () => {
        localStorage.removeItem("mobelmor_current_user");
        document.getElementById("userMenuDropdown")?.classList.remove("active");
        updateAuthUI();
        showToast("Başarıyla çıkış yapıldı.", "fa-arrow-right-from-bracket");
    });

    // Auth Modal Tabs
    const tabLoginBtn = document.getElementById("tabLoginBtn");
    const tabRegisterBtn = document.getElementById("tabRegisterBtn");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    tabLoginBtn?.addEventListener("click", () => {
        tabLoginBtn.classList.add("active");
        tabLoginBtn.style.color = "#6b21a8";
        tabLoginBtn.style.borderBottom = "2px solid #6b21a8";
        tabLoginBtn.style.fontWeight = "800";
        tabRegisterBtn.classList.remove("active");
        tabRegisterBtn.style.color = "#71717a";
        tabRegisterBtn.style.borderBottom = "none";
        tabRegisterBtn.style.fontWeight = "700";
        if (loginForm) loginForm.style.display = "flex";
        if (registerForm) registerForm.style.display = "none";
    });

    tabRegisterBtn?.addEventListener("click", () => {
        tabRegisterBtn.classList.add("active");
        tabRegisterBtn.style.color = "#6b21a8";
        tabRegisterBtn.style.borderBottom = "2px solid #6b21a8";
        tabRegisterBtn.style.fontWeight = "800";
        tabLoginBtn.classList.remove("active");
        tabLoginBtn.style.color = "#71717a";
        tabLoginBtn.style.borderBottom = "none";
        tabLoginBtn.style.fontWeight = "700";
        if (registerForm) registerForm.style.display = "flex";
        if (loginForm) loginForm.style.display = "none";
    });

    document.getElementById("closeAuthModalBtn")?.addEventListener("click", () => {
        document.getElementById("authModalOverlay")?.classList.remove("active");
    });
    document.getElementById("authModalOverlay")?.addEventListener("click", (e) => {
        if (e.target.id === "authModalOverlay") {
            document.getElementById("authModalOverlay")?.classList.remove("active");
        }
    });

    // Login Submit
    loginForm?.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail")?.value.trim().toLowerCase();
        const pass = document.getElementById("loginPassword")?.value.trim();

        const users = JSON.parse(localStorage.getItem("mobelmor_users") || "[]");
        const existing = users.find(u => u.email === email && u.password === pass);

        if (existing) {
            localStorage.setItem("mobelmor_current_user", JSON.stringify(existing));
            updateAuthUI();
            document.getElementById("authModalOverlay")?.classList.remove("active");
            showToast(`Hoş geldiniz, ${existing.name}!`, "fa-circle-check");
            loginForm.reset();
        } else {
            const userObj = {
                id: "USR-" + Date.now().toString().slice(-4),
                name: email.split("@")[0].toUpperCase(),
                email: email,
                phone: "0530 000 00 00",
                password: pass
            };
            users.push(userObj);
            localStorage.setItem("mobelmor_users", JSON.stringify(users));
            localStorage.setItem("mobelmor_current_user", JSON.stringify(userObj));
            updateAuthUI();
            document.getElementById("authModalOverlay")?.classList.remove("active");
            showToast(`Giriş başarılı! Hoş geldiniz.`, "fa-circle-check");
            loginForm.reset();
        }
    });

    // Register Submit
    registerForm?.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("regName")?.value.trim();
        const email = document.getElementById("regEmail")?.value.trim().toLowerCase();
        const phone = document.getElementById("regPhone")?.value.trim();
        const password = document.getElementById("regPassword")?.value.trim();

        const users = JSON.parse(localStorage.getItem("mobelmor_users") || "[]");
        const newUser = {
            id: "USR-" + Date.now().toString().slice(-4),
            name,
            email,
            phone,
            password
        };
        users.push(newUser);
        localStorage.setItem("mobelmor_users", JSON.stringify(users));
        localStorage.setItem("mobelmor_current_user", JSON.stringify(newUser));

        updateAuthUI();
        document.getElementById("authModalOverlay")?.classList.remove("active");
        showToast(`Üyeliğiniz oluşturuldu! Hoş geldiniz, ${name}.`, "fa-circle-check");
        registerForm.reset();
    });

    updateAuthUI();

    // Checkout Form Submit Handling (WhatsApp & LocalStorage Persistent with Order ID & Tracking)
    const checkoutForm = document.getElementById("checkoutForm");
    if (checkoutForm) {
        checkoutForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("checkoutName")?.value.trim() || "";
            const email = document.getElementById("checkoutEmail")?.value.trim() || "";
            const phone = document.getElementById("checkoutPhone")?.value.trim() || "";
            const address = document.getElementById("checkoutAddress")?.value.trim() || "";
            const note = document.getElementById("checkoutNote")?.value.trim() || "";
            const termsChecked = document.getElementById("checkoutTerms")?.checked;

            if (!termsChecked) {
                showToast("Lütfen Mesafeli Satış Sözleşmesini onaylayınız.", "fa-triangle-exclamation");
                return;
            }

            if (cart.length === 0) {
                showToast("Sepetiniz boş!", "fa-basket-shopping");
                return;
            }

            const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
            const orderDate = new Date().toLocaleDateString("tr-TR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
            const newOrderId = "MBL-" + Math.floor(100000 + Math.random() * 900000);

            // Store order locally
            const orderData = {
                id: newOrderId,
                date: orderDate,
                status: "preparing",
                statusText: "İmalat & Hazırlık Aşamasında",
                customer: { name, email, phone, address, note },
                items: cart.map(i => ({ id: i.id, title: i.title, price: i.price, qty: i.qty })),
                total: subtotal
            };

            try {
                const prevOrders = JSON.parse(localStorage.getItem("mobelmor_orders") || "[]");
                prevOrders.unshift(orderData);
                localStorage.setItem("mobelmor_orders", JSON.stringify(prevOrders));
            } catch (err) {
                console.error("Order save error:", err);
            }

            // Build formatted WhatsApp message
            let waMsg = `🛋️ *MOBELMOR SİPARİŞ TALEBİ* (${orderData.id})\n`;
            waMsg += `━━━━━━━━━━━━━━━━━━━━\n`;
            waMsg += `👤 *Müşteri:* ${name}\n`;
            waMsg += `📧 *E-Posta:* ${email}\n`;
            waMsg += `📞 *Telefon:* ${phone}\n`;
            waMsg += `📍 *Adres:* ${address}\n`;
            if (note) waMsg += `📝 *Not:* ${note}\n`;
            waMsg += `━━━━━━━━━━━━━━━━━━━━\n`;
            waMsg += `📦 *Sipariş Edilen Ürünler:*\n`;
            cart.forEach((item, idx) => {
                waMsg += `${idx + 1}. ${item.qty}x ${item.title} - ${formatPrice(item.price * item.qty)}\n`;
            });
            waMsg += `━━━━━━━━━━━━━━━━━━━━\n`;
            waMsg += `💰 *Toplam Tutar:* ${formatPrice(subtotal)}\n`;
            waMsg += `📅 *Tarih:* ${orderDate}\n\n`;
            waMsg += `Siparişimin teyit edilmesini ve teslimat planlamasının başlatılmasını rica ederim.`;

            const waUrl = `https://wa.me/905300000000?text=${encodeURIComponent(waMsg)}`;

            // Clear cart & close modal
            cart = [];
            updateBadges();
            renderCart();
            document.getElementById("checkoutOverlay")?.classList.remove("active");
            showToast(`Siparişiniz Alındı! Takip No: ${newOrderId}`, "fa-circle-check");
            checkoutForm.reset();

            // Open WhatsApp with prefilled order
            setTimeout(() => {
                window.open(waUrl, "_blank");
            }, 600);
        });
    }

    // Initialize Cookie Consent Banner
    const initCookieConsent = () => {
        if (localStorage.getItem("mobelmor_cookie_accepted") === "true") return;

        const banner = document.createElement("div");
        banner.className = "cookie-consent-banner";
        banner.id = "cookieConsentBanner";
        banner.innerHTML = `
            <div class="cookie-content">
                <i class="fa-solid fa-cookie-bite cookie-icon"></i>
                <div class="cookie-text">
                    Sitemizde size en iyi alışveriş deneyimini sunabilmek için çerezler kullanılmaktadır. Detaylar için <a href="gizlilik-guvenlik.html" target="_blank">Çerez ve Gizlilik Politikamızı</a> inceleyebilirsiniz.
                </div>
            </div>
            <div class="cookie-actions">
                <button class="cookie-btn-accept" id="acceptCookiesBtn">Kabul Et</button>
                <button class="cookie-btn-close" id="closeCookiesBtn" title="Kapat" aria-label="Kapat"><i class="fa-solid fa-xmark"></i></button>
            </div>
        `;
        document.body.appendChild(banner);

        setTimeout(() => banner.classList.add("show"), 800);

        const closeBanner = () => {
            localStorage.setItem("mobelmor_cookie_accepted", "true");
            banner.classList.remove("show");
            setTimeout(() => banner.remove(), 400);
        };

        banner.querySelector("#acceptCookiesBtn")?.addEventListener("click", closeBanner);
        banner.querySelector("#closeCookiesBtn")?.addEventListener("click", closeBanner);
    };

    initCookieConsent();

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

    // Vivense-Style Mega Menu Interaction (Desktop)
    const megaNavItems = document.querySelectorAll(".vivense-nav-item.has-mega");
    megaNavItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            megaNavItems.forEach(other => { if (other !== item) other.classList.remove("is-open"); });
            item.classList.add("is-open");
        });
        item.addEventListener("mouseleave", () => {
            item.classList.remove("is-open");
        });
    });

    // Vivense-Style Mobile Menu Drawer & Accordion
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const closeMobileMenuBtn = document.getElementById("closeMobileMenuBtn");
    const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
    const mobileMenuDrawer = document.getElementById("mobileMenuDrawer");

    function openMobileDrawer() {
        mobileMenuDrawer?.classList.add("active");
        mobileMenuOverlay?.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeMobileDrawer() {
        mobileMenuDrawer?.classList.remove("active");
        mobileMenuOverlay?.classList.remove("active");
        document.body.style.overflow = "";
    }

    mobileMenuBtn?.addEventListener("click", openMobileDrawer);
    closeMobileMenuBtn?.addEventListener("click", closeMobileDrawer);
    mobileMenuOverlay?.addEventListener("click", closeMobileDrawer);

    // Mobile Drawer Wishlist / Cart Triggers
    document.getElementById("mobileDrawerCartBtn")?.addEventListener("click", () => {
        closeMobileDrawer();
        document.getElementById("cartBtn")?.click();
    });

    // Mobile Drawer Category Accordions
    document.querySelectorAll(".mobile-cat-header").forEach(header => {
        header.addEventListener("click", (e) => {
            e.preventDefault();
            const accordion = header.closest(".mobile-cat-accordion");
            const isOpen = accordion.classList.contains("open");
            document.querySelectorAll(".mobile-cat-accordion").forEach(acc => acc.classList.remove("open"));
            if (!isOpen) {
                accordion.classList.add("open");
            }
        });
    });
});


