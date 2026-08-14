/* ==========================================
   mobelmor.com - Application Logic (v=9999)
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
    all: "Tüm Koleksiyon",
    living: "Oturma Odası",
    dining: "Yemek Odası",
    bedroom: "Yatak Odası",
    office: "Çalışma Odası"
};

const SUBCATEGORY_NAMES = {
    all: "Tümü",
    sofas: "Koltuk & Takımlar",
    armchairs: "Berjerler",
    tables: "Sehpalar",
    consoles: "Konsollar",
    "dining-tables": "Yemek Masaları",
    chairs: "Sandalyeler",
    buffets: "Büfeler & Konsollar",
    beds: "Karyola & Yataklar",
    nightstands: "Komodinler",
    wardrobes: "Gardıroplar",
    desks: "Çalışma Masaları",
    bookcases: "Kitaplıklar"
};

let currentCategory = "all";
let currentSubcategory = "all";
let searchQuery = "";
let currentSort = "featured";
let cart = [];
let wishlist = new Set();

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

const getFilteredProducts = () => {
    const query = (searchQuery || "").toLowerCase();
    let filtered = PRODUCTS.filter(product => {
        const matchesCat = (currentCategory === "all" || product.category === currentCategory);
        const matchesSubcat = (currentSubcategory === "all" || product.subcategory === currentSubcategory);
        
        const specsText = Object.values(product.specs || {}).join(" ").toLowerCase();
        const matchesSearch = (!query || 
            (product.title || "").toLowerCase().includes(query) || 
            (product.material || "").toLowerCase().includes(query) ||
            (product.desc || "").toLowerCase().includes(query) ||
            specsText.includes(query)
        );
        return matchesCat && matchesSubcat && matchesSearch;
    });

    if (filtered.length === 0) {
        filtered = PRODUCTS;
    }

    return filtered.sort((a, b) => {
        if (currentSort === "price-low") return a.price - b.price;
        if (currentSort === "price-high") return b.price - a.price;
        if (currentSort === "rating") return b.rating - a.rating;
        return a.id - b.id;
    });
};

const renderProducts = () => {
    const grid = document.getElementById("productGrid");
    const countBadge = document.getElementById("productCountBadge");
    if (!grid) return;

    const filtered = getFilteredProducts();

    if (countBadge) {
        let label = CATEGORY_NAMES[currentCategory] || "Tüm Koleksiyon";
        if (currentSubcategory !== "all" && SUBCATEGORY_NAMES[currentSubcategory]) {
            label += ` > ${SUBCATEGORY_NAMES[currentSubcategory]}`;
        }
        countBadge.textContent = `${label} (${filtered.length} Ürün Listeleniyor)`;
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: white; border-radius: 18px; border: 1px solid #e4e4e7;">
                <i class="fa-solid fa-box-open" style="font-size: 3rem; color: #a1a1aa; margin-bottom: 12px;"></i>
                <h3 style="margin: 0 0 8px 0; color: #18181b;">Aradığınız Kriterde Ürün Bulunamadı</h3>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map((item, idx) => {
        const isFav = wishlist.has(item.id);
        const isLCP = idx === 0;
        const imgAttr = isLCP 
            ? 'loading="eager" fetchpriority="high" decoding="sync"' 
            : 'loading="lazy" decoding="async"';
        const webpImage = item.image ? item.image.replace(/\.(jpg|jpeg|png)$/i, '.webp') : 'assets/zumrut_main.webp';
        return `
            <article class="product-card" data-id="${item.id}">
                <div class="card-image-box">
                    <img src="${webpImage}" alt="${item.title}" class="card-img" width="400" height="300" ${imgAttr} onerror="this.onerror=null; this.src='${item.image}';">
                    <div class="badge-pills-stack">
                        ${item.badges.map(b => `<span class="${b.includes('MASİF') || b.includes('YENİ') ? 'pill-purple' : 'pill-dark'}">${b}</span>`).join('')}
                    </div>
                    <button class="card-heart-btn ${isFav ? 'active' : ''}" data-id="${item.id}" title="Favorilere Ekle" aria-label="Favorilere Ekle">
                        <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
                    </button>
                </div>
                <div class="card-details">
                    <span class="card-material-tag">${item.material}</span>
                    <h3 class="card-product-title">${item.title}</h3>
                    <div class="rating-line">
                        <i class="fa-solid fa-star"></i>
                        <span style="font-weight: 800; color: #18181b;">${item.rating}</span>
                        <span class="rating-count-text">(${item.reviewsCount})</span>
                    </div>
                    <div class="card-price-row">
                        <span class="card-price-text">${formatPrice(item.price)}</span>
                        <div class="card-actions-group">
                            <button class="circle-view-btn quick-view-btn" data-id="${item.id}" title="Hızlı İncele" aria-label="Hızlı İncele">
                                <i class="fa-regular fa-eye"></i>
                            </button>
                            <button class="pill-add-btn add-to-cart-btn" data-id="${item.id}" aria-label="Sepete Ekle">
                                <i class="fa-solid fa-cart-plus"></i> Ekle
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }).join('');

    attachCardEventListeners();
};

const attachCardEventListeners = () => {
    document.querySelectorAll(".product-card").forEach(card => {
        const id = card.getAttribute("data-id");
        const imgBox = card.querySelector(".card-image-box");
        const titleEl = card.querySelector(".card-product-title");

        const goToDetail = (e) => {
            if (e.target.closest(".card-heart-btn") || e.target.closest(".add-to-cart-btn") || e.target.closest(".quick-view-btn")) return;
            const item = PRODUCTS.find(p => p.id === parseInt(id));
            if (item && window.getCleanProductUrl) {
                window.location.href = window.getCleanProductUrl(item.id, item.title);
            } else {
                window.location.href = `urun-detay.html?id=${id}`;
            }
        };

        if (imgBox) imgBox.addEventListener("click", goToDetail);
        if (titleEl) {
            titleEl.style.cursor = "pointer";
            titleEl.addEventListener("click", goToDetail);
        }
    });

    document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute("data-id"));
            addToCart(id);
        });
    });

    document.querySelectorAll(".card-heart-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute("data-id"));
            if (wishlist.has(id)) {
                wishlist.delete(id);
                showToast("Ürün favorilerinizden çıkarıldı.", "fa-heart-crack");
            } else {
                wishlist.add(id);
                showToast("Ürün favorilerinize eklendi!", "fa-heart");
            }
            updateBadges();
            renderProducts();
        });
    });

    document.querySelectorAll(".quick-view-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute("data-id"));
            openQuickView(id);
        });
    });
};

const addToCart = (productId) => {
    const item = PRODUCTS.find(p => p.id === productId);
    if (!item) return;
    const existing = cart.find(c => c.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...item, qty: 1 });
    }
    updateBadges();
    showToast(`"${item.title}" sepete eklendi!`, "fa-bag-shopping");
    renderCart();
};

const updateBadges = () => {
    const cartBadge = document.getElementById("cartBadge");
    const wishBadge = document.getElementById("wishlistBadge");
    if (cartBadge) cartBadge.textContent = cart.reduce((sum, c) => sum + c.qty, 0);
    if (wishBadge) wishBadge.textContent = wishlist.size;
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
        document.getElementById("cartDrawer").classList.remove("active");
        document.getElementById("cartOverlay").classList.remove("active");
        document.getElementById("checkoutTotal").textContent = formatPrice(subtotal);
        document.getElementById("checkoutOverlay").classList.add("active");
    });
};

window.changeQty = (id, delta) => {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
    updateBadges();
    renderCart();
};

// ── Lightbox Gallery System for app.js (Vivense Design) ────────────────
let lbGallery = [];
let lbCurrentIndex = 0;

const createGlobalLightbox = () => {
    let lb = document.getElementById('mbl-lightbox');
    if (lb) return lb;

    lb = document.createElement('div');
    lb.id = 'mbl-lightbox';
    lb.className = 'mbl-lightbox-overlay';
    lb.innerHTML = `
        <button type="button" class="lb-vivense-close" id="mbl-lb-close-btn" onclick="closeGlobalLightbox()" title="Kapat (Esc)" aria-label="Kapat">
            <i class="fa-solid fa-xmark"></i>
        </button>
        <button type="button" class="lb-vivense-nav lb-vivense-prev" id="mbl-lb-prev" title="Önceki" aria-label="Önceki Fotoğraf">
            <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button type="button" class="lb-vivense-nav lb-vivense-next" id="mbl-lb-next" title="Sonraki" aria-label="Sonraki Fotoğraf">
            <i class="fa-solid fa-chevron-right"></i>
        </button>
        <div class="lb-vivense-card" id="mbl-lb-card">
            <div class="lb-vivense-header">
                <span class="lb-vivense-title" id="mbl-lb-title">ÜRÜN GÖRSELİ</span>
            </div>
            <div class="lb-vivense-body" id="mbl-lb-wrapper">
                <img id="mbl-lightbox-img" class="lb-vivense-img" src="" alt="Büyük Ürün Görseli">
            </div>
            <div class="lb-vivense-footer">
                <span class="lb-vivense-counter" id="mbl-lb-counter">1/1</span>
            </div>
        </div>
    `;
    document.body.appendChild(lb);

    document.getElementById('mbl-lb-prev')?.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateGlobalLightbox(-1);
    });
    document.getElementById('mbl-lb-next')?.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateGlobalLightbox(1);
    });

    lb.addEventListener('click', (e) => {
        if (!e.target.closest('#mbl-lb-card') && !e.target.closest('#mbl-lb-prev') && !e.target.closest('#mbl-lb-next')) {
            closeGlobalLightbox();
        }
    });

    // Touch swipe support
    const lbCard = document.getElementById('mbl-lb-card');
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
                if (diffX < 0) navigateGlobalLightbox(1);
                else navigateGlobalLightbox(-1);
            }
        }
    }, { passive: true });

    document.addEventListener('keydown', (e) => {
        const activeLb = document.getElementById('mbl-lightbox');
        if (!activeLb || !activeLb.classList.contains('active')) return;

        if (e.key === 'Escape') closeGlobalLightbox();
        else if (e.key === 'ArrowLeft') navigateGlobalLightbox(-1);
        else if (e.key === 'ArrowRight') navigateGlobalLightbox(1);
    });

    return lb;
};

window.openGlobalLightbox = (gallery, startIndex = 0, title = '') => {
    const lb = createGlobalLightbox();
    lbGallery = Array.isArray(gallery) && gallery.length > 0 ? gallery : [];
    if (lbGallery.length === 0) return;

    lbCurrentIndex = Math.max(0, Math.min(startIndex, lbGallery.length - 1));

    const titleEl = document.getElementById('mbl-lb-title');
    if (titleEl) titleEl.textContent = (title || 'ÜRÜN GÖRSELİ').toUpperCase();

    updateGlobalLightboxView();

    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
};

window.closeGlobalLightbox = () => {
    const lb = document.getElementById('mbl-lightbox');
    if (lb) lb.classList.remove('active');
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
};

window.navigateGlobalLightbox = (direction) => {
    if (!lbGallery || lbGallery.length === 0) return;

    if (typeof direction === 'number' && (direction === 1 || direction === -1)) {
        lbCurrentIndex = (lbCurrentIndex + direction + lbGallery.length) % lbGallery.length;
    } else if (typeof direction === 'number') {
        lbCurrentIndex = Math.max(0, Math.min(direction, lbGallery.length - 1));
    }

    updateGlobalLightboxView();
};

const updateGlobalLightboxView = () => {
    const lbImg = document.getElementById('mbl-lightbox-img');
    const lbCounter = document.getElementById('mbl-lb-counter');
    if (!lbImg) return;

    lbImg.style.opacity = '0.3';

    setTimeout(() => {
        lbImg.src = lbGallery[lbCurrentIndex];
        lbImg.style.opacity = '1';
    }, 80);

    if (lbCounter) {
        lbCounter.textContent = `${lbCurrentIndex + 1}/${lbGallery.length}`;
    }
};

const openQuickView = (productId) => {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const overlay = document.getElementById("quickViewOverlay");
    const content = document.getElementById("quickViewContent");
    if (!overlay || !content) return;

    const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
    let activeQuickIdx = 0;

    content.innerHTML = `
        <div style="display:flex; gap:24px; flex-wrap:wrap;">
            <div style="flex:1; min-width:280px; display:flex; flex-direction:column; gap:10px;">
                <div style="position:relative; width:100%; height:290px; border-radius:14px; overflow:hidden; background:#f4f4f6; cursor:zoom-in;" id="quickMainImgBox" title="Fotoğrafı Büyüt (Tıkla)">
                    <img id="quickMainImg" src="${gallery[0]}" alt="${product.title}" style="width:100%; height:100%; object-fit:contain; background:#ffffff; transition:transform 0.3s ease;">
                    <button type="button" class="gallery-zoom-trigger-btn" id="quickZoomBtn" title="Büyük Fotoğrafı Görüntüle" style="position:absolute; top:8px; right:8px; z-index:10;">
                        <i class="fa-solid fa-magnifying-glass-plus"></i> <span>Büyüt</span>
                    </button>
                    <div class="gallery-counter-pill" id="quickCounterPill" style="position:absolute; bottom:8px; right:8px; z-index:10;">
                        1 / ${gallery.length}
                    </div>
                </div>
                ${gallery.length > 1 ? `
                    <div style="display:flex; gap:8px; overflow-x:auto; padding:2px 0;" id="quickThumbStrip">
                        ${gallery.map((g, idx) => `
                            <img src="${g}" class="thumb-img ${idx === 0 ? 'active' : ''}" data-idx="${idx}" style="width:54px; height:54px; border-radius:8px; object-fit:contain; background:#fff; cursor:pointer; flex-shrink:0;">
                        `).join('')}
                    </div>
                ` : ''}
            </div>
            <div style="flex:1.2; min-width:260px; display:flex; flex-direction:column;">
                <span style="color:#6b21a8; font-weight:800; font-size:0.75rem; text-transform:uppercase; letter-spacing:0.04em;">${product.material || 'İnegöl Mobilyası'}</span>
                <h2 style="margin:6px 0 10px 0; color:#18181b; font-size:1.45rem; line-height:1.3;">${product.title}</h2>
                <div style="color:#16a34a; font-weight:700; font-size:0.8rem; margin-bottom:12px;"><i class="fa-solid fa-circle-check"></i> Stokta Var &nbsp;·&nbsp; Ücretsiz Kurulum</div>
                <p style="color:#52525b; font-size:0.88rem; line-height:1.5; margin-bottom:16px;">${product.desc || ''}</p>
                <div style="margin-top:auto; padding-top:16px; border-top:1px solid #f4f4f5; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
                    <span style="font-size:1.6rem; font-weight:900; color:#6b21a8;">${formatPrice(product.price)}</span>
                    <div style="display:flex; gap:8px;">
                        <a href="${window.getCleanProductUrl ? window.getCleanProductUrl(product.id, product.title) : `urun-detay.html?id=${product.id}`}" class="btn interactive-btn" style="background:#f4f4f5; color:#18181b; padding:10px 16px; border-radius:999px; font-weight:700; font-size:0.85rem; text-decoration:none; display:inline-flex; align-items:center; gap:6px;">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i> Detay
                        </a>
                        <button class="pill-add-btn interactive-btn" id="modalAddCart" style="padding:10px 20px; font-size:0.88rem;">
                            <i class="fa-solid fa-cart-shopping"></i> Sepete Ekle
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Quick view thumbnail switching
    content.querySelectorAll('#quickThumbStrip img').forEach(thumb => {
        thumb.addEventListener('click', () => {
            const idx = parseInt(thumb.getAttribute('data-idx'));
            activeQuickIdx = idx;
            const mainImg = document.getElementById('quickMainImg');
            const pill = document.getElementById('quickCounterPill');
            if (mainImg) mainImg.src = gallery[idx];
            if (pill) pill.textContent = `${idx + 1} / ${gallery.length}`;
            content.querySelectorAll('#quickThumbStrip img').forEach((t, i) => {
                if (i === idx) t.classList.add('active');
                else t.classList.remove('active');
            });
        });
    });

    // Open lightbox on clicking quick view main image or zoom button
    const openLB = () => {
        openGlobalLightbox(gallery, activeQuickIdx, product.title);
    };

    document.getElementById('quickMainImgBox')?.addEventListener('click', openLB);
    document.getElementById('quickZoomBtn')?.addEventListener('click', (e) => {
        e.stopPropagation();
        openLB();
    });

    overlay.classList.add("active");
    document.getElementById("modalAddCart")?.addEventListener("click", () => {
        addToCart(product.id);
        overlay.classList.remove("active");
    });
};

const renderWishlist = () => {
    const body = document.getElementById("wishlistBody");
    const footer = document.getElementById("wishlistFooter");
    if (!body || !footer) return;

    const wishListItems = PRODUCTS.filter(p => wishlist.has(p.id));

    if (wishListItems.length === 0) {
        body.innerHTML = `<div style="text-align:center; padding:40px 20px; color:#71717a;"><i class="fa-regular fa-heart" style="font-size:2.5rem; color:#cbd5e1; margin-bottom:12px;"></i><p style="margin:0;">Henüz favorilere ürün eklemediniz.</p></div>`;
        footer.innerHTML = "";
        return;
    }

    body.innerHTML = wishListItems.map(item => `
        <div class="cart-item-row">
            <img src="${item.image}" alt="${item.title}" class="cart-item-img">
            <div class="cart-item-info">
                <h5 class="cart-item-title">${item.title}</h5>
                <span class="cart-item-price">${formatPrice(item.price)}</span>
            </div>
            <div style="display:flex; gap:6px;">
                <button class="pill-add-btn" onclick="addToCart(${item.id}); toggleWishlist(${item.id}); renderWishlist();" title="Sepete Aktar" style="padding:4px 8px; font-size:0.75rem;">
                    <i class="fa-solid fa-cart-plus"></i>
                </button>
                <button class="qty-btn" onclick="toggleWishlist(${item.id}); renderWishlist();" title="Kaldır" style="color:#ef4444 !important;">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>
    `).join('');

    footer.innerHTML = `
        <button class="btn btn-primary btn-block interactive-btn" onclick="wishListItems.forEach(i => addToCart(i.id)); showToast('Tüm favoriler sepete eklendi!', 'fa-basket-shopping');">
            Tüm Favorileri Sepete Ekle
        </button>
    `;
};

window.toggleWishlist = (id) => {
    if (wishlist.has(id)) wishlist.delete(id);
    else wishlist.add(id);
    updateBadges();
    renderProducts();
};

document.addEventListener("DOMContentLoaded", () => {
    const CATEGORY_DESCS = {
        all: "İnegöl usta zanaatkarları tarafından üretilen %100 masif ve organik mobilya tasarımlarımız.",
        living: "İnegöl zanaatkarlarından %100 masif ahşap iskeletli koltuk takımları, berjerler, sehpalar ve TV üniteleri.",
        dining: "Doğal ahşap dokusu ve zarafetiyle yemek masaları, ergonomik sandalyeler ve şık büfeler.",
        bedroom: "Konforlu karyolalar, fonksiyonel komodinler ve geniş gardıroplar ile huzurlu uyku alanları.",
        office: "Ergonomik çalışma masaları ve şık kitaplıklar ile verimli çalışma alanları."
    };

    const CATEGORY_ICONS = {
        all: "fa-border-all",
        living: "fa-couch",
        dining: "fa-utensils",
        bedroom: "fa-bed",
        office: "fa-briefcase"
    };

    const renderCategoryHeaderAndSubchips = () => {
        const heroTitle = document.getElementById("categoryHeroTitle");
        const heroDesc = document.getElementById("categoryHeroDesc");
        const breadcrumbTitle = document.getElementById("categoryBreadcrumbTitle");
        const subcatBar = document.getElementById("subcatChipBar");

        const catName = CATEGORY_NAMES[currentCategory] || "Tüm Koleksiyon";
        const catIcon = CATEGORY_ICONS[currentCategory] || "fa-border-all";
        const catDesc = CATEGORY_DESCS[currentCategory] || CATEGORY_DESCS.all;

        if (heroTitle) {
            heroTitle.innerHTML = `<i class="fa-solid ${catIcon}"></i> ${catName}`;
        }
        if (heroDesc) {
            heroDesc.textContent = catDesc;
        }
        if (breadcrumbTitle) {
            breadcrumbTitle.textContent = (currentSubcategory !== "all" && SUBCATEGORY_NAMES[currentSubcategory]) 
                ? `${catName} > ${SUBCATEGORY_NAMES[currentSubcategory]}` 
                : catName;
        }

        if (subcatBar) {
            const availableSubs = Object.entries(SUBCATEGORY_NAMES).filter(([subKey, subName]) => {
                if (subKey === "all") return true;
                if (currentCategory === "all") return true;
                return PRODUCTS.some(p => p.category === currentCategory && p.subcategory === subKey);
            });

            const catSlug = window.CATEGORY_SLUGS ? (window.CATEGORY_SLUGS[currentCategory] || currentCategory) : currentCategory;
            subcatBar.innerHTML = availableSubs.map(([subKey, subName]) => `
                <a href="kategori.html?c=${catSlug}&sub=${subKey}" class="subcat-chip ${currentSubcategory === subKey ? 'active' : ''}">
                    ${subName}
                </a>
            `).join('');
        }
    };

    const updateActiveCategoryUI = () => {
        document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
        document.querySelectorAll(".dropdown-item").forEach(i => i.classList.remove("active"));

        const targetPill = document.querySelector(`.cat-pill[data-category="${currentCategory}"]`);
        if (targetPill) targetPill.classList.add("active");

        if (currentSubcategory !== "all") {
            const targetSub = document.querySelector(`.dropdown-item[data-cat="${currentCategory}"][data-sub="${currentSubcategory}"]`);
            if (targetSub) targetSub.classList.add("active");
        }

        renderCategoryHeaderAndSubchips();
    };

    const selectCategory = (cat, sub = "all", updateHistory = true) => {
        currentCategory = cat;
        currentSubcategory = sub;

        const rawUrl = window.getCleanCategoryUrl ? window.getCleanCategoryUrl(cat, sub) : `kategori.html?c=${cat}&sub=${sub}`;
        const isCategoryPage = window.location.pathname.includes("kategori") || window.location.pathname.includes("category");

        if (isCategoryPage) {
            const cleanUrl = rawUrl.replace(/\.html/, '');
            if (updateHistory && window.history.pushState) {
                window.history.pushState({ cat, sub }, "", cleanUrl);
            }
            document.querySelectorAll(".cat-dropdown-wrapper").forEach(w => w.classList.remove("open"));
            updateActiveCategoryUI();
            renderProducts();
        } else {
            window.location.href = rawUrl;
        }
    };

    document.querySelectorAll(".cat-pill").forEach(pill => {
        pill.addEventListener("click", (e) => {
            const cat = pill.getAttribute("data-category");
            if (cat) {
                e.preventDefault();
                selectCategory(cat, "all", true);
                showToast(`Kategori Seçildi: ${CATEGORY_NAMES[cat] || cat}`, "fa-layer-group");
            }
        });
    });

    document.querySelectorAll(".dropdown-item").forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const cat = item.getAttribute("data-cat");
            const sub = item.getAttribute("data-sub");
            if (cat) {
                selectCategory(cat, sub || "all", true);
                showToast(`Filtrelendi: ${CATEGORY_NAMES[cat] || cat} > ${SUBCATEGORY_NAMES[sub] || 'Tümü'}`, "fa-filter");
            }
        });
    });

    const handleUrlParams = () => {
        let search = window.location.search;
        if (!search && window.location.href.includes("?")) {
            search = window.location.href.substring(window.location.href.indexOf("?"));
        }
        const urlParams = new URLSearchParams(search);
        const cParam = urlParams.get("c");
        const catParam = urlParams.get("cat");
        const subParam = urlParams.get("sub");

        let resolvedCat = "all";
        if (cParam) {
            resolvedCat = window.SLUG_TO_CATEGORY ? (window.SLUG_TO_CATEGORY[cParam] || cParam) : cParam;
        } else if (catParam) {
            resolvedCat = window.SLUG_TO_CATEGORY ? (window.SLUG_TO_CATEGORY[catParam] || catParam) : catParam;
        }

        currentCategory = resolvedCat;
        currentSubcategory = subParam || "all";
        updateActiveCategoryUI();
        renderProducts();
    };

    handleUrlParams();

    const searchInput = document.getElementById("searchInput");
    const clearSearchBtn = document.getElementById("clearSearchBtn");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value;
            if (clearSearchBtn) clearSearchBtn.style.display = searchQuery ? "inline-flex" : "none";
            renderProducts();
        });
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener("click", () => {
            if (searchInput) searchInput.value = "";
            searchQuery = "";
            clearSearchBtn.style.display = "none";
            renderProducts();
        });
    }

    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            currentSort = e.target.value;
            renderProducts();
        });
    }

    // Wishlist Drawer Trigger
    document.getElementById("wishlistBtn")?.addEventListener("click", () => {
        renderWishlist();
        document.getElementById("wishlistDrawer")?.classList.add("active");
        document.getElementById("wishlistOverlay")?.classList.add("active");
    });

    document.getElementById("closeWishlistBtn")?.addEventListener("click", () => {
        document.getElementById("wishlistDrawer")?.classList.remove("active");
        document.getElementById("wishlistOverlay")?.classList.remove("active");
    });

    document.getElementById("wishlistOverlay")?.addEventListener("click", () => {
        document.getElementById("wishlistDrawer")?.classList.remove("active");
        document.getElementById("wishlistOverlay")?.classList.remove("active");
    });

    // Cart Drawer Trigger
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

    document.getElementById("closeQuickViewBtn")?.addEventListener("click", () => {
        document.getElementById("quickViewOverlay")?.classList.remove("active");
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

    window.addEventListener("popstate", () => {
        handleUrlParams();
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
    const closeMobileMenuBtn = document.getElementById("mobileDrawerCloseBtn") || document.getElementById("closeMobileMenuBtn");
    const mobileMenuOverlay = document.getElementById("mobileDrawerOverlay") || document.getElementById("mobileMenuOverlay");
    const mobileMenuDrawer = document.getElementById("mobileCatDrawer") || document.getElementById("mobileMenuDrawer");

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
    document.getElementById("mobileDrawerWishlistBtn")?.addEventListener("click", () => {
        closeMobileDrawer();
        document.getElementById("wishlistBtn")?.click();
    });
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

    // Vivense-Style Hero Slider Engine
    const heroSlider = document.getElementById("heroSlider");
    if (heroSlider) {
        const slides = heroSlider.querySelectorAll(".slider-slide");
        const prevBtn = document.getElementById("sliderPrevBtn");
        const nextBtn = document.getElementById("sliderNextBtn");
        let currentSlide = 0;
        let sliderInterval = null;

        function goToSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add("active");
                } else {
                    slide.classList.remove("active");
                }
            });
            heroSlider.querySelectorAll(".slider-dot").forEach((dot) => {
                const idx = parseInt(dot.getAttribute("data-index"), 10);
                if (idx === index) {
                    dot.classList.add("active");
                } else {
                    dot.classList.remove("active");
                }
            });
            currentSlide = index;
        }

        function nextSlide() {
            let next = (currentSlide + 1) % slides.length;
            goToSlide(next);
        }

        function prevSlide() {
            let prev = (currentSlide - 1 + slides.length) % slides.length;
            goToSlide(prev);
        }

        prevBtn?.addEventListener("click", (e) => {
            e.stopPropagation();
            prevSlide();
            resetInterval();
        });

        nextBtn?.addEventListener("click", (e) => {
            e.stopPropagation();
            nextSlide();
            resetInterval();
        });

        heroSlider.querySelectorAll(".slider-dot").forEach(dot => {
            dot.addEventListener("click", (e) => {
                e.stopPropagation();
                const idx = parseInt(dot.getAttribute("data-index"), 10);
                if (!isNaN(idx)) {
                    goToSlide(idx);
                    resetInterval();
                }
            });
        });

        function startAutoplay() {
            if (!sliderInterval) {
                sliderInterval = setInterval(nextSlide, 5500);
            }
        }

        function stopAutoplay() {
            if (sliderInterval) {
                clearInterval(sliderInterval);
                sliderInterval = null;
            }
        }

        function resetInterval() {
            stopAutoplay();
            startAutoplay();
        }

        heroSlider.addEventListener("mouseenter", stopAutoplay);
        heroSlider.addEventListener("mouseleave", startAutoplay);

        // Touch Swipe Support
        let touchStartX = 0;
        let touchEndX = 0;
        heroSlider.addEventListener("touchstart", (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        heroSlider.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) {
                nextSlide();
                resetInterval();
            } else if (touchEndX - touchStartX > 50) {
                prevSlide();
                resetInterval();
            }
        }, { passive: true });

        startAutoplay();
    }
});



