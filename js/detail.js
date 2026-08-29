/* ==========================================
   mobelmor.com - Product Detail JS (v=9999)
   ========================================== */

const PRODUCTS = [
  {
    "id": 1,
    "title": "Gold Lüks Koltuk Takımı",
    "category": "living",
    "subcategory": "sofas",
    "productType": "Set",
    "price": 45000,
    "originalPrice": 52000,
    "image": "assets/minegolden_p1_5.webp",
    "gallery": [
      "assets/minegolden_p1_5.webp",
      "assets/minegolden_p1_1.webp",
      "assets/minegolden_p1_3.webp",
      "assets/minegolden_p1_4.webp",
      "assets/minegolden_p1_2.webp",
      "assets/minegolden_p1_6.webp"
    ],
    "badges": [
      "İNEGÖL KOLEKSİYONU",
      "LÜKS DİZAYN"
    ],
    "material": "Gürgen Ağacı & Gold Metal Detaylar",
    "desc": "Antrasit ve pudra kadife kumaşı, fırınlanmış gürgen iskeleti ve gold metal ayak detaylarıyla komple salon takımı."
  },
  {
    "id": 2,
    "title": "Gold 3'lü Koltuk",
    "category": "living",
    "subcategory": "sofas",
    "productType": "Solo",
    "price": 23500,
    "originalPrice": 27000,
    "image": "assets/minegolden_p1_1.webp",
    "gallery": [
      "assets/minegolden_p1_1.webp",
      "assets/minegolden_p1_5.webp",
      "assets/minegolden_p1_2.webp",
      "assets/minegolden_p1_6.webp"
    ],
    "badges": [
      "TEKİL PARÇA"
    ],
    "material": "Gürgen İskelet & 32 DNS Sünger",
    "desc": "Geniş oturum alanı ve konforlu sırt minderi ile 3'lü koltuk."
  },
  {
    "id": 3,
    "title": "Gold 2'li Koltuk",
    "category": "living",
    "subcategory": "sofas",
    "productType": "Solo",
    "price": 18500,
    "originalPrice": 21000,
    "image": "assets/minegolden_p1_3.webp",
    "gallery": [
      "assets/minegolden_p1_3.webp",
      "assets/minegolden_p1_5.webp",
      "assets/minegolden_p1_2.webp"
    ],
    "badges": [
      "TEKİL PARÇA"
    ],
    "material": "Gürgen İskelet & Kadife Kumaş",
    "desc": "Kompakt ölçüleri ve şık gold detaylarıyla modern 2'li koltuk."
  },
  {
    "id": 4,
    "title": "Gold Tekli Berjer",
    "category": "living",
    "subcategory": "armchairs",
    "productType": "Solo",
    "price": 11500,
    "originalPrice": 13500,
    "image": "assets/minegolden_p1_4.webp",
    "gallery": [
      "assets/minegolden_p1_4.webp",
      "assets/minegolden_p1_5.webp",
      "assets/minegolden_p1_1.webp"
    ],
    "badges": [
      "ÖZEL BERJER"
    ],
    "material": "Masif Ahşap & Gold Metal Ayak",
    "desc": "Pembe kadife kumaşı ve zarif altın metal ayaklarıyla tekli berjer koltuk."
  },
  {
    "id": 5,
    "title": "Zümrüt Avangarde Koltuk Takımı",
    "category": "living",
    "subcategory": "sofas",
    "productType": "Set",
    "price": 48000,
    "originalPrice": 56000,
    "image": "assets/minegolden_p2_1.webp",
    "gallery": [
      "assets/minegolden_p2_1.webp",
      "assets/minegolden_p2_2.webp",
      "assets/minegolden_p2_3.webp",
      "assets/pieces/zumrut_berjer.webp",
      "assets/minegolden_p2_5.webp",
      "assets/minegolden_p2_6.webp"
    ],
    "badges": [
      "KAPİTONE İŞÇİLİK",
      "LÜKS KADİFE"
    ],
    "material": "El İşçiliği Kapitone & Fırınlanmış Kayın Ağacı",
    "desc": "Kapitone detayları ve yumuşak kadife kumaşıyla salonunuza zarafet getiren koltuk takımı."
  },
  {
    "id": 6,
    "title": "Zümrüt 3'lü Kapitone Koltuk",
    "category": "living",
    "subcategory": "sofas",
    "productType": "Solo",
    "price": 24500,
    "originalPrice": 28500,
    "image": "assets/minegolden_p2_2.webp",
    "gallery": [
      "assets/minegolden_p2_2.webp",
      "assets/minegolden_p2_1.webp",
      "assets/minegolden_p2_5.webp"
    ],
    "badges": [
      "KAPİTONE İŞÇİLİK"
    ],
    "material": "Gürgen Ağacı & 35 DNS Sünger",
    "desc": "El işçiliği sırt kapitone detaylarıyla 3'lü koltuk."
  },
  {
    "id": 7,
    "title": "Zümrüt 2'li Koltuk",
    "category": "living",
    "subcategory": "sofas",
    "productType": "Solo",
    "price": 19500,
    "originalPrice": 22500,
    "image": "assets/minegolden_p2_3.webp",
    "gallery": [
      "assets/minegolden_p2_3.webp",
      "assets/minegolden_p2_1.webp",
      "assets/minegolden_p2_6.webp"
    ],
    "badges": [
      "TEKİL PARÇA"
    ],
    "material": "Gürgen İskelet & İthal Kadife Kumaş",
    "desc": "Konforlu oturum ve şık kapitone sırt tasarımıyla 2'li koltuk."
  },
  {
    "id": 8,
    "title": "Zümrüt Tekli Berjer",
    "category": "living",
    "subcategory": "armchairs",
    "productType": "Solo",
    "price": 11500,
    "originalPrice": 13500,
    "image": "assets/pieces/zumrut_berjer.webp",
    "gallery": [
      "assets/pieces/zumrut_berjer.webp",
      "assets/minegolden_p2_1.webp",
      "assets/minegolden_p2_4.webp"
    ],
    "badges": [
      "ÖZEL BERJER"
    ],
    "material": "Masif Kayın Ayak & Ergonomik Döşeme",
    "desc": "Ergonomik oturum minderi ve şık kol yapısıyla tekli berjer."
  },
  {
    "id": 9,
    "title": "Bohem Natural Keten Koltuk Takımı",
    "category": "living",
    "subcategory": "sofas",
    "productType": "Set",
    "price": 42000,
    "originalPrice": 49000,
    "image": "assets/minegolden_p3_2.webp",
    "gallery": [
      "assets/minegolden_p3_2.webp",
      "assets/minegolden_p3_1.webp",
      "assets/minegolden_p3_3.webp",
      "assets/minegolden_p3_4.webp",
      "assets/pieces/bohem_berjer.webp",
      "assets/minegolden_p3_5.webp"
    ],
    "badges": [
      "DOĞAL KETEN",
      "%100 ORGANİK"
    ],
    "material": "Doğal Dokuma Keten & Masif Meşe İskelet",
    "desc": "Nefes alabilen doğal keten kumaşı ve ahşap ayak detaylarıyla komple salon takımı."
  },
  {
    "id": 10,
    "title": "Bohem 3'lü Natural Koltuk",
    "category": "living",
    "subcategory": "sofas",
    "productType": "Solo",
    "price": 22000,
    "originalPrice": 25000,
    "image": "assets/minegolden_p3_1.webp",
    "gallery": [
      "assets/minegolden_p3_1.webp",
      "assets/minegolden_p3_2.webp",
      "assets/minegolden_p3_5.webp"
    ],
    "badges": [
      "ORGANİK DOKU"
    ],
    "material": "Masif Meşe İskelet & Doğal Keten Kumaş",
    "desc": "Ferah ve minimalist tasarımıyla geniş 3'lü keten koltuk."
  },
  {
    "id": 11,
    "title": "Bohem 2'li Koltuk / Daybed",
    "category": "living",
    "subcategory": "sofas",
    "productType": "Solo",
    "price": 18000,
    "originalPrice": 21000,
    "image": "assets/minegolden_p3_3.webp",
    "gallery": [
      "assets/minegolden_p3_3.webp",
      "assets/minegolden_p3_2.webp",
      "assets/minegolden_p3_5.webp"
    ],
    "badges": [
      "KOMPAKT ÖLÇÜ"
    ],
    "material": "Doğal Keten & Masif Ahşap Ayak",
    "desc": "Doğal ahşap ayakları ve keten kumaşıyla şık 2'li koltuk."
  },
  {
    "id": 12,
    "title": "Bohem Yuvarlak Ahşap Orta Sehpa",
    "category": "living",
    "subcategory": "tables",
    "productType": "Solo",
    "price": 7500,
    "originalPrice": 9000,
    "image": "assets/minegolden_p3_4.webp",
    "gallery": [
      "assets/minegolden_p3_4.webp",
      "assets/minegolden_p3_2.webp"
    ],
    "badges": [
      "METAL AYAK"
    ],
    "material": "Doğal Ahşap Tabla & Siyah Metal Ayak",
    "desc": "Zarif siyah metal ayaklı yuvarlak ahşap orta sehpa."
  },
  {
    "id": 13,
    "title": "Mono Modern Bukle Koltuk Takımı",
    "category": "living",
    "subcategory": "sofas",
    "productType": "Set",
    "price": 44000,
    "originalPrice": 51000,
    "image": "assets/minegolden_p4_1.webp",
    "gallery": [
      "assets/minegolden_p4_1.webp",
      "assets/minegolden_p4_2.webp",
      "assets/minegolden_p4_4.webp",
      "assets/minegolden_p4_3.webp",
      "assets/minegolden_p4_5.webp",
      "assets/minegolden_p4_6.webp"
    ],
    "badges": [
      "BUKLE KUMAŞ",
      "MODERN TREND"
    ],
    "material": "Teddy Bukle Kumaş & Gürgen Ağacı",
    "desc": "Dokulu bukle kumaşı ve yuvarlak hatlarıyla modern salon takımı."
  },
  {
    "id": 14,
    "title": "Mono 3'lü Bukle Koltuk",
    "category": "living",
    "subcategory": "sofas",
    "productType": "Solo",
    "price": 22000,
    "originalPrice": 25500,
    "image": "assets/minegolden_p4_2.webp",
    "gallery": [
      "assets/minegolden_p4_2.webp",
      "assets/minegolden_p4_1.webp",
      "assets/minegolden_p4_5.webp"
    ],
    "badges": [
      "BUKLE DOKU"
    ],
    "material": "Bukle Kumaş & 35 DNS Sünger",
    "desc": "Trend bukle dokusu ve geniş oturumu ile 3'lü modern koltuk."
  },
  {
    "id": 15,
    "title": "Mono 2'li Bukle Koltuk",
    "category": "living",
    "subcategory": "sofas",
    "productType": "Solo",
    "price": 17000,
    "originalPrice": 19500,
    "image": "assets/pieces/mono_2li.webp",
    "gallery": [
      "assets/pieces/mono_2li.webp",
      "assets/minegolden_p4_1.webp",
      "assets/minegolden_p4_4.webp"
    ],
    "badges": [
      "KOMPAKT ÖLÇÜ"
    ],
    "material": "Gürgen İskelet & Yumuşak Bukle Kumaş",
    "desc": "Kompakt salonlar için konfor sunan 2'li bukle koltuk."
  },
  {
    "id": 16,
    "title": "Mono Tekli Berjer",
    "category": "living",
    "subcategory": "armchairs",
    "productType": "Solo",
    "price": 11500,
    "originalPrice": 13500,
    "image": "assets/minegolden_p4_3.webp",
    "gallery": [
      "assets/minegolden_p4_3.webp",
      "assets/minegolden_p4_1.webp",
      "assets/minegolden_p4_6.webp"
    ],
    "badges": [
      "DİZAYN BERJER"
    ],
    "material": "Bukle Kumaş & Masif Ayaklar",
    "desc": "Kavisli arkalığı ve yumuşak minderiyle tekli dinlenme berjeridir."
  },
  {
    "id": 17,
    "title": "Leon Ahşap Ayaklı Koltuk Takımı",
    "category": "living",
    "subcategory": "sofas",
    "productType": "Set",
    "price": 46000,
    "originalPrice": 53000,
    "image": "assets/minegolden_p5_1.webp",
    "gallery": [
      "assets/minegolden_p5_1.webp",
      "assets/minegolden_p5_2.webp",
      "assets/minegolden_p5_3.webp",
      "assets/minegolden_p5_4.webp",
      "assets/minegolden_p5_5.webp",
      "assets/minegolden_p5_6.webp"
    ],
    "badges": [
      "MASİF AHŞAP",
      "İNEGÖL İMZASI"
    ],
    "material": "Fırınlanmış Masif Ceviz Ayaklar & İthal Kumaş",
    "desc": "Masif ceviz ayak yapısı ve ergonomik oturum desteğiyle salon takımı."
  },
  {
    "id": 18,
    "title": "Leon Ahşap 3'lü Koltuk",
    "category": "living",
    "subcategory": "sofas",
    "productType": "Solo",
    "price": 23000,
    "originalPrice": 26500,
    "image": "assets/minegolden_p5_2.webp",
    "gallery": [
      "assets/minegolden_p5_2.webp",
      "assets/minegolden_p5_1.webp",
      "assets/minegolden_p5_5.webp"
    ],
    "badges": [
      "MASİF DETAY"
    ],
    "material": "Masif Gürgen Gövde & Ceviz Ahşap Ayak",
    "desc": "Sağlam ahşap iskeleti ve kaliteli dokuma kumaşıyla 3'lü koltuk."
  },
  {
    "id": 19,
    "title": "Leon Ahşap 2'li Koltuk",
    "category": "living",
    "subcategory": "sofas",
    "productType": "Solo",
    "price": 18000,
    "originalPrice": 20500,
    "image": "assets/minegolden_p5_3.webp",
    "gallery": [
      "assets/minegolden_p5_3.webp",
      "assets/minegolden_p5_1.webp",
      "assets/minegolden_p5_6.webp"
    ],
    "badges": [
      "TEKİL PARÇA"
    ],
    "material": "Fırınlanmış Ahşap & İthal Kumaş",
    "desc": "Şık ceviz ayakları ve konforlu minder yapısıyla 2'li koltuk."
  },
  {
    "id": 20,
    "title": "Leon Tekli Ahşap Berjer",
    "category": "living",
    "subcategory": "armchairs",
    "productType": "Solo",
    "price": 11500,
    "originalPrice": 13500,
    "image": "assets/pieces/leon_berjer.webp",
    "gallery": [
      "assets/pieces/leon_berjer.webp",
      "assets/minegolden_p5_1.webp",
      "assets/minegolden_p5_4.webp"
    ],
    "badges": [
      "MASİF BERJER"
    ],
    "material": "Masif Ceviz Ayak & Ortopedik Oturum",
    "desc": "Ahşap kavisli ayakları ve rahat oturumu ile tekli dinlenme koltuğu."
  },
  {
    "id": 21,
    "title": "Respiro Country Beyaz TV & Duvar Ünitesi",
    "category": "living",
    "subcategory": "consoles",
    "productType": "Set",
    "price": 27500,
    "originalPrice": 32000,
    "image": "assets/minegolden_p16_1.webp",
    "gallery": [
      "assets/minegolden_p16_1.webp",
      "assets/minegolden_p16_2.webp",
      "assets/minegolden_p16_3.webp",
      "assets/minegolden_p16_4.webp",
      "assets/minegolden_p16_5.webp",
      "assets/minegolden_p16_6.webp"
    ],
    "badges": [
      "COUNTRY DİZAYN",
      "TV ÜNİTESİ"
    ],
    "material": "MDF Lake Gövde & Masif Ahşap Üst Tabla",
    "desc": "Beyaz country kapakları, ahşap üst tablası ve geniş depolama dolaplarıyla komple TV yaşam ünitesi."
  },
  {
    "id": 22,
    "title": "Respiro TV Alt Konsol",
    "category": "living",
    "subcategory": "consoles",
    "productType": "Solo",
    "price": 16000,
    "originalPrice": 19000,
    "image": "assets/minegolden_p16_2.webp",
    "gallery": [
      "assets/minegolden_p16_2.webp",
      "assets/minegolden_p16_1.webp",
      "assets/minegolden_p16_3.webp"
    ],
    "badges": [
      "KAPAKLI KONSOL"
    ],
    "material": "MDF & Masif Ayak",
    "desc": "Geniş dolaplı ve orta raflı TV alt sehpası."
  },
  {
    "id": 23,
    "title": "Respiro Ahşap Orta Sehpa",
    "category": "living",
    "subcategory": "tables",
    "productType": "Solo",
    "price": 8500,
    "originalPrice": 10500,
    "image": "assets/minegolden_p16_4.webp",
    "gallery": [
      "assets/minegolden_p16_4.webp",
      "assets/minegolden_p16_1.webp",
      "assets/minegolden_p16_5.webp"
    ],
    "badges": [
      "ORTA SEHPA"
    ],
    "material": "Doğal Ahşap & Lake Gövde",
    "desc": "TV ünitesiyle tam uyumlu country orta sehpa."
  },
  {
    "id": 24,
    "title": "Asya Lake Krem Gold TV & Duvar Ünitesi",
    "category": "living",
    "subcategory": "consoles",
    "productType": "Set",
    "price": 28500,
    "originalPrice": 33500,
    "image": "assets/minegolden_p17_1.webp",
    "gallery": [
      "assets/minegolden_p17_1.webp",
      "assets/minegolden_p17_2.webp",
      "assets/minegolden_p17_3.webp",
      "assets/minegolden_p17_4.webp",
      "assets/minegolden_p17_5.webp",
      "assets/minegolden_p17_6.webp"
    ],
    "badges": [
      "GOLD DETAYLI",
      "LAKE YÜZEY"
    ],
    "material": "İpek Mat Krem Lake & Gold Metal Kulplar",
    "desc": "Krem lake yüzeyi, altın halka kulpları ve zarif ayaklarıyla modern TV yaşam ünitesi."
  },
  {
    "id": 25,
    "title": "Asya TV Alt Konsol",
    "category": "living",
    "subcategory": "consoles",
    "productType": "Solo",
    "price": 17000,
    "originalPrice": 20000,
    "image": "assets/minegolden_p17_2.webp",
    "gallery": [
      "assets/minegolden_p17_2.webp",
      "assets/minegolden_p17_1.webp",
      "assets/minegolden_p17_4.webp"
    ],
    "badges": [
      "ÇEKMECELİ KONSOL"
    ],
    "material": "MDF Lake & Gold Kulplar",
    "desc": "Geniş çekmeceli krem lake TV alt sehpası."
  },
  {
    "id": 26,
    "title": "Asya Krem Orta Sehpa",
    "category": "living",
    "subcategory": "tables",
    "productType": "Solo",
    "price": 8900,
    "originalPrice": 11000,
    "image": "assets/minegolden_p17_4.webp",
    "gallery": [
      "assets/minegolden_p17_4.webp",
      "assets/minegolden_p17_1.webp",
      "assets/minegolden_p17_5.webp"
    ],
    "badges": [
      "ORTA SEHPA"
    ],
    "material": "MDF Lake & Gold Ayak",
    "desc": "Krem lake ve gold ayaklı şık salon orta sehpası."
  },
  {
    "id": 27,
    "title": "Akdeniz Antrasit Modern TV & Yaşam Ünitesi",
    "category": "living",
    "subcategory": "consoles",
    "productType": "Set",
    "price": 29000,
    "originalPrice": 34000,
    "image": "assets/minegolden_p18_1.webp",
    "gallery": [
      "assets/minegolden_p18_1.webp",
      "assets/minegolden_p18_2.webp",
      "assets/minegolden_p18_3.webp"
    ],
    "badges": [
      "ANTRASİT & GÜMÜŞ",
      "MODERN ÇİZGİ"
    ],
    "material": "Antrasit MDF & Gümüş Halka Kulplar",
    "desc": "Antrasit gri gövdesi, aynalı çerçeveli çekmeceleri ve şık ayaklarıyla TV yaşam ünitesi."
  },
  {
    "id": 28,
    "title": "Akdeniz TV Alt Konsol",
    "category": "living",
    "subcategory": "consoles",
    "productType": "Solo",
    "price": 17500,
    "originalPrice": 20500,
    "image": "assets/minegolden_p18_2.webp",
    "gallery": [
      "assets/minegolden_p18_2.webp",
      "assets/minegolden_p18_1.webp"
    ],
    "badges": [
      "AYNALI ÇEKMECE"
    ],
    "material": "MDF & Gümüş Kulplar",
    "desc": "Geniş çekmeceli antrasit TV alt sehpası."
  },
  {
    "id": 29,
    "title": "Akdeniz Antrasit Orta Sehpa",
    "category": "living",
    "subcategory": "tables",
    "productType": "Solo",
    "price": 9000,
    "originalPrice": 11500,
    "image": "assets/minegolden_p18_3.webp",
    "gallery": [
      "assets/minegolden_p18_3.webp",
      "assets/minegolden_p18_1.webp"
    ],
    "badges": [
      "ORTA SEHPA"
    ],
    "material": "Antrasit Gövde & Aynalı Detay",
    "desc": "Antrasit renkli modern salon orta sehpası."
  },
  {
    "id": 30,
    "title": "Sahra Modern TV & Duvar Ünitesi",
    "category": "living",
    "subcategory": "consoles",
    "productType": "Set",
    "price": 28000,
    "originalPrice": 33000,
    "image": "assets/minegolden_p19_1.webp",
    "gallery": [
      "assets/minegolden_p19_1.webp",
      "assets/minegolden_p19_2.webp",
      "assets/minegolden_p19_3.webp",
      "assets/minegolden_p19_4.webp",
      "assets/minegolden_p19_5.webp"
    ],
    "badges": [
      "LED AYDINLATMALI",
      "FRENLİ SİSTEM"
    ],
    "material": "E1 Doğal Meşe Kaplama & MDF Gövde",
    "desc": "Alt konsol, üst asma dolap ve LED aydınlatmalı duvar paneli ile komple TV ünitesi."
  },
  {
    "id": 31,
    "title": "Sahra TV Alt Blok Konsol",
    "category": "living",
    "subcategory": "consoles",
    "productType": "Solo",
    "price": 16500,
    "originalPrice": 19500,
    "image": "assets/minegolden_p19_2.webp",
    "gallery": [
      "assets/minegolden_p19_2.webp",
      "assets/minegolden_p19_1.webp",
      "assets/minegolden_p19_4.webp"
    ],
    "badges": [
      "GİZLİ KABLO KANALI"
    ],
    "material": "Doğal Meşe MDF Gövde & Frenli Ray",
    "desc": "Geniş çekmeceleri ve şık ahşap dokusuyla TV alt sehpası."
  },
  {
    "id": 32,
    "title": "Sahra Dikdörtgen Ahşap Orta Sehpa",
    "category": "living",
    "subcategory": "tables",
    "productType": "Solo",
    "price": 12500,
    "originalPrice": 14500,
    "image": "assets/minegolden_p19_3.webp",
    "gallery": [
      "assets/minegolden_p19_3.webp",
      "assets/minegolden_p19_1.webp",
      "assets/minegolden_p19_5.webp"
    ],
    "badges": [
      "MASİF SEHPA"
    ],
    "material": "MDF & Doğal Meşe Ayak",
    "desc": "Geniş dikdörtgen üst tablası ve sağlam ayaklarıyla modern salon orta sehpası."
  },
  {
    "id": 33,
    "title": "Salvador Lüks TV & Yaşam Ünitesi",
    "category": "living",
    "subcategory": "consoles",
    "productType": "Set",
    "price": 29500,
    "originalPrice": 35000,
    "image": "assets/minegolden_p20_5.webp",
    "gallery": [
      "assets/minegolden_p20_5.webp",
      "assets/minegolden_p20_1.webp",
      "assets/minegolden_p20_3.webp",
      "assets/minegolden_p20_2.webp",
      "assets/minegolden_p20_4.webp"
    ],
    "badges": [
      "LÜKS KAPLAMA",
      "ÖZEL MEKANİZMA"
    ],
    "material": "Lüks Ahşap Kaplama & Metal Detaylar",
    "desc": "Göz alıcı ahşap paneli ve geniş depolama alanıyla lüks TV yaşam ünitesi."
  },
  {
    "id": 34,
    "title": "Salvador TV Alt Konsol",
    "category": "living",
    "subcategory": "consoles",
    "productType": "Solo",
    "price": 17500,
    "originalPrice": 20500,
    "image": "assets/minegolden_p20_1.webp",
    "gallery": [
      "assets/minegolden_p20_1.webp",
      "assets/minegolden_p20_5.webp",
      "assets/minegolden_p20_2.webp"
    ],
    "badges": [
      "FRENLİ ÇEKMECE"
    ],
    "material": "MDF Gövde & Metal Ayaklar",
    "desc": "Şık alt TV sehpası ve depolama modülü."
  },
  {
    "id": 35,
    "title": "Salvador Ahşap 3'lü Orta & Yan Sehpa Seti",
    "category": "living",
    "subcategory": "tables",
    "productType": "Solo",
    "price": 13000,
    "originalPrice": 15500,
    "image": "assets/minegolden_p20_3.webp",
    "gallery": [
      "assets/minegolden_p20_3.webp",
      "assets/minegolden_p20_5.webp",
      "assets/minegolden_p20_4.webp"
    ],
    "badges": [
      "3'LÜ SEHPA SETİ"
    ],
    "material": "Doğal Ahşap Masif Kaplama",
    "desc": "Farklı boylarda 3 adet yuvarlak masif ahşap orta ve yan sehpa seti."
  },
  {
    "id": 36,
    "title": "İcon Yuvarlak Masa Sandalye Takımı",
    "category": "dining",
    "subcategory": "dining-tables",
    "productType": "Set",
    "price": 34000,
    "originalPrice": 39500,
    "image": "assets/minegolden_p7_1.webp",
    "gallery": [
      "assets/minegolden_p7_1.webp",
      "assets/minegolden_p7_2.webp",
      "assets/minegolden_p7_3.webp",
      "assets/minegolden_p7_4.webp",
      "assets/minegolden_p7_5.webp"
    ],
    "badges": [
      "YUVARLAK MASA",
      "MASİF AYAK"
    ],
    "material": "Masif Meşe Ayak & Doğal Kaplama",
    "desc": "Samimi yemek sohbetleri için yuvarlak masa ve 4 adet ergonomik sandalye seti."
  },
  {
    "id": 37,
    "title": "İcon Yuvarlak Yemek Masası",
    "category": "dining",
    "subcategory": "dining-tables",
    "productType": "Solo",
    "price": 18500,
    "originalPrice": 21500,
    "image": "assets/pieces/icon_yuvarlak_masa.webp",
    "gallery": [
      "assets/pieces/icon_yuvarlak_masa.webp",
      "assets/minegolden_p7_2.webp",
      "assets/minegolden_p7_1.webp",
      "assets/minegolden_p7_5.webp"
    ],
    "badges": [
      "DOĞAL MEŞE"
    ],
    "material": "Masif Ahşap Ayaklar & Dayanıklı Tabla",
    "desc": "120 cm çapında doğal ahşap yuvarlak yemek masası."
  },
  {
    "id": 38,
    "title": "İcon Ergonomik Sandalye (4 Adet)",
    "category": "dining",
    "subcategory": "chairs",
    "productType": "Solo",
    "price": 16500,
    "originalPrice": 19000,
    "image": "assets/pieces/icon_yuvarlak_sandalye.webp",
    "gallery": [
      "assets/pieces/icon_yuvarlak_sandalye.webp",
      "assets/minegolden_p7_3.webp",
      "assets/minegolden_p7_1.webp"
    ],
    "badges": [
      "4'LÜ SET"
    ],
    "material": "Masif Ahşap Ayak & Silinebilir Kumaş",
    "desc": "Ergonomik sırt yapısı ve yumuşak oturumuyla 4 adet yemek sandalyesi."
  },
  {
    "id": 39,
    "title": "İcon Meşe Ahşap Yemek Odası Takımı",
    "category": "dining",
    "subcategory": "dining-tables",
    "productType": "Set",
    "price": 49000,
    "originalPrice": 58000,
    "image": "assets/minegolden_p8_1.webp",
    "gallery": [
      "assets/minegolden_p8_1.webp",
      "assets/minegolden_p8_2.webp",
      "assets/minegolden_p8_3.webp",
      "assets/minegolden_p8_4.webp",
      "assets/minegolden_p8_5.webp"
    ],
    "badges": [
      "AÇILIR MASA",
      "KONSOL DAHİL"
    ],
    "material": "Masif Meşe Ağacı & Lüks Konsol Aynası",
    "desc": "Açılır yemek masası, 6 adet sandalye ve aynalı konsoluyla yemek odası takımı."
  },
  {
    "id": 40,
    "title": "İcon Meşe Yemek Masası",
    "category": "dining",
    "subcategory": "dining-tables",
    "productType": "Solo",
    "price": 21000,
    "originalPrice": 24500,
    "image": "assets/pieces/icon_mese_masa.webp",
    "gallery": [
      "assets/pieces/icon_mese_masa.webp",
      "assets/minegolden_p8_2.webp",
      "assets/minegolden_p8_1.webp",
      "assets/minegolden_p8_5.webp"
    ],
    "badges": [
      "AÇILIR FONKSİYON"
    ],
    "material": "Masif Meşe Gövde",
    "desc": "Ortadan açılır mekanizmasıyla 6-8 kişilik geniş yemek masası."
  },
  {
    "id": 41,
    "title": "İcon Meşe Sandalye (6 Adet)",
    "category": "dining",
    "subcategory": "chairs",
    "productType": "Solo",
    "price": 18000,
    "originalPrice": 21000,
    "image": "assets/pieces/icon_mese_sandalye.webp",
    "gallery": [
      "assets/pieces/icon_mese_sandalye.webp",
      "assets/pieces/icon_chairs.webp",
      "assets/minegolden_p8_1.webp"
    ],
    "badges": [
      "6'LI SET"
    ],
    "material": "Masif Ağaç & Leke Tutmaz Kumaş",
    "desc": "Şık dikiş detayları ve konforlu oturumuyla 6 adet sandalye seti."
  },
  {
    "id": 42,
    "title": "İcon Aynalı Ahşap Konsol & Büfe",
    "category": "dining",
    "subcategory": "buffets",
    "productType": "Solo",
    "price": 19500,
    "originalPrice": 23000,
    "image": "assets/pieces/icon_mese_konsol.webp",
    "gallery": [
      "assets/pieces/icon_mese_konsol.webp",
      "assets/minegolden_p8_4.webp",
      "assets/minegolden_p8_1.webp"
    ],
    "badges": [
      "AYNA DAHİL"
    ],
    "material": "Doğal Meşe MDF & Frenli Kapaklar",
    "desc": "Geniş iç hacmi ve şık aynasıyla yemek odası konsolu."
  },
  {
    "id": 43,
    "title": "Forte Meşe Modern Yemek Odası Takımı",
    "category": "dining",
    "subcategory": "dining-tables",
    "productType": "Set",
    "price": 52000,
    "originalPrice": 61000,
    "image": "assets/minegolden_p9_1.webp",
    "gallery": [
      "assets/minegolden_p9_1.webp",
      "assets/minegolden_p9_2.webp",
      "assets/minegolden_p9_3.webp",
      "assets/minegolden_p9_4.webp",
      "assets/minegolden_p9_5.webp",
      "assets/minegolden_p9_6.webp"
    ],
    "badges": [
      "ÇAPRAZ AYAK",
      "MODERN TASARIM"
    ],
    "material": "Fırınlanmış Masif Ağaç & Çapraz Ayaklar",
    "desc": "Çapraz metal ayaklı yemek masası, 6 adet tasarım sandalye ve konsol takımı."
  },
  {
    "id": 44,
    "title": "Forte Meşe Çapraz Ayak Masa",
    "category": "dining",
    "subcategory": "dining-tables",
    "productType": "Solo",
    "price": 23500,
    "originalPrice": 27500,
    "image": "assets/pieces/forte_masa.webp",
    "gallery": [
      "assets/pieces/forte_masa.webp",
      "assets/minegolden_p9_3.webp",
      "assets/minegolden_p9_1.webp",
      "assets/minegolden_p9_6.webp"
    ],
    "badges": [
      "ÖZEL AYAK"
    ],
    "material": "Masif Meşe Tabla & Elektrostatik Metal Ayak",
    "desc": "Endüstriyel ve modern dokuyu buluşturan şık yemek masası."
  },
  {
    "id": 45,
    "title": "Forte Kumaş Sandalye (6 Adet)",
    "category": "dining",
    "subcategory": "chairs",
    "productType": "Solo",
    "price": 19000,
    "originalPrice": 22000,
    "image": "assets/pieces/forte_sandalye.webp",
    "gallery": [
      "assets/pieces/forte_sandalye.webp",
      "assets/minegolden_p9_4.webp",
      "assets/minegolden_p9_1.webp",
      "assets/minegolden_p9_5.webp"
    ],
    "badges": [
      "6'LI SET"
    ],
    "material": "Metal İskelet & Nubuk Kumaş",
    "desc": "Yüksek sırt konforu sunan 6 adet modern yemek sandalyesi."
  },
  {
    "id": 46,
    "title": "Forte Aynalı Konsol & Büfe",
    "category": "dining",
    "subcategory": "buffets",
    "productType": "Solo",
    "price": 21000,
    "originalPrice": 24500,
    "image": "assets/pieces/forte_konsol.webp",
    "gallery": [
      "assets/pieces/forte_konsol.webp",
      "assets/minegolden_p9_2.webp",
      "assets/minegolden_p9_1.webp"
    ],
    "badges": [
      "LÜKS BÜFE"
    ],
    "material": "MDF Gövde & Aynalı Ön Kapaklar",
    "desc": "Geniş iç rafları ve amortisörlü kapak sistemiyle şık büfe."
  },
  {
    "id": 47,
    "title": "Seramik Mutfak & Yemek Masası Takımı",
    "category": "dining",
    "subcategory": "dining-tables",
    "productType": "Set",
    "price": 31000,
    "originalPrice": 36000,
    "image": "assets/minegolden_p6_1.webp",
    "gallery": [
      "assets/minegolden_p6_1.webp",
      "assets/minegolden_p6_2.webp",
      "assets/minegolden_p6_3.webp",
      "assets/minegolden_p6_4.webp"
    ],
    "badges": [
      "ÇİZİLMEZ SERAMİK",
      "ISIYA DAYANIKLI"
    ],
    "material": "Porselen Seramik Üst Tabla & Metal Ayak",
    "desc": "Çizilmez, leke tutmaz seramik masa ve 4 adet sandalye seti."
  },
  {
    "id": 48,
    "title": "Seramik Mutfak & Yemek Masası",
    "category": "dining",
    "subcategory": "dining-tables",
    "productType": "Solo",
    "price": 17500,
    "originalPrice": 20500,
    "image": "assets/pieces/seramik_masa.webp",
    "gallery": [
      "assets/pieces/seramik_masa.webp",
      "assets/minegolden_p6_2.webp",
      "assets/minegolden_p6_1.webp",
      "assets/minegolden_p6_4.webp"
    ],
    "badges": [
      "PORSELEN YÜZEY"
    ],
    "material": "Porselen Seramik Tabla",
    "desc": "Günlük mutfak ve salon kullanımı için dayanıklı seramik masa."
  },
  {
    "id": 49,
    "title": "Seramik Takım Sandalyesi (4 Adet)",
    "category": "dining",
    "subcategory": "chairs",
    "productType": "Solo",
    "price": 14500,
    "originalPrice": 17000,
    "image": "assets/pieces/seramik_sandalye.webp",
    "gallery": [
      "assets/pieces/seramik_sandalye.webp",
      "assets/minegolden_p6_3.webp",
      "assets/minegolden_p6_1.webp"
    ],
    "badges": [
      "KOLAY TEMİZLENİR"
    ],
    "material": "Metal Ayak & Su İtici Kumaş",
    "desc": "Leke tutmaz kumaşı ve dayanıklı metal ayaklarıyla 4 adet sandalye."
  },
  {
    "id": 50,
    "title": "İpek Lüks Yemek Odası Takımı",
    "category": "dining",
    "subcategory": "dining-tables",
    "productType": "Set",
    "price": 56000,
    "originalPrice": 65000,
    "image": "assets/minegolden_p10_1.webp",
    "gallery": [
      "assets/minegolden_p10_1.webp",
      "assets/minegolden_p10_2.webp",
      "assets/minegolden_p10_3.webp",
      "assets/minegolden_p10_4.webp",
      "assets/minegolden_p10_5.webp",
      "assets/minegolden_p10_6.webp"
    ],
    "badges": [
      "LÜKS SERİ",
      "GOLD DETAYLI"
    ],
    "material": "Aynalı Konsol & Açılır Masa",
    "desc": "Açılır masa, 6 adet sandalye ve aynalı büfesiyle yemek odası takımı."
  },
  {
    "id": 51,
    "title": "İpek Aynalı Konsol & Büfe",
    "category": "dining",
    "subcategory": "buffets",
    "productType": "Solo",
    "price": 22500,
    "originalPrice": 26500,
    "image": "assets/pieces/ipek_konsol.webp",
    "gallery": [
      "assets/pieces/ipek_konsol.webp",
      "assets/minegolden_p10_2.webp",
      "assets/minegolden_p10_1.webp",
      "assets/minegolden_p10_6.webp"
    ],
    "badges": [
      "AYNA DAHİL"
    ],
    "material": "MDF & Füme Ayna Detaylar",
    "desc": "Geniş iç çekmeceleri ve lüks kulplarıyla göz alıcı konsol."
  },
  {
    "id": 52,
    "title": "İpek Açılır Fonksiyonel Masa",
    "category": "dining",
    "subcategory": "dining-tables",
    "productType": "Solo",
    "price": 23000,
    "originalPrice": 27000,
    "image": "assets/pieces/ipek_masa.webp",
    "gallery": [
      "assets/pieces/ipek_masa.webp",
      "assets/minegolden_p10_3.webp",
      "assets/minegolden_p10_1.webp",
      "assets/minegolden_p10_5.webp"
    ],
    "badges": [
      "AÇILIR MASA"
    ],
    "material": "Doğal Kaplama & Gizli Mekanizma",
    "desc": "Kolay açılan teleskopik mekanizmalı lüks yemek masası."
  },
  {
    "id": 53,
    "title": "İpek Lüks Sandalye (6 Adet)",
    "category": "dining",
    "subcategory": "chairs",
    "productType": "Solo",
    "price": 19500,
    "originalPrice": 23000,
    "image": "assets/pieces/ipek_sandalye.webp",
    "gallery": [
      "assets/pieces/ipek_sandalye.webp",
      "assets/minegolden_p10_4.webp",
      "assets/minegolden_p10_1.webp"
    ],
    "badges": [
      "6'LI SET"
    ],
    "material": "Kadife Kumaş & Masif Ayaklar",
    "desc": "Altın detaylı ayakları ve kapitone sırt dikişleriyle 6 adet sandalye."
  },
  {
    "id": 54,
    "title": "Zen Modern Yatak Odası Takımı",
    "category": "bedroom",
    "subcategory": "beds",
    "productType": "Set",
    "price": 54000,
    "originalPrice": 63000,
    "image": "assets/minegolden_p11_5.webp",
    "gallery": [
      "assets/minegolden_p11_5.webp",
      "assets/minegolden_p11_4.webp",
      "assets/minegolden_p11_6.webp",
      "assets/minegolden_p11_2.webp",
      "assets/minegolden_p11_3.webp",
      "assets/minegolden_p11_1.webp"
    ],
    "badges": [
      "6 KAPAKLI GARDROP",
      "BAZALI KARYOLA"
    ],
    "material": "MDF Gövde & Doğal Meşe Kaplama",
    "desc": "6 kapaklı gardırop, LED aydınlatmalı karyola, şifonyer ve 2 adet komodin seti."
  },
  {
    "id": 55,
    "title": "Zen 6 Kapaklı Gardırop",
    "category": "bedroom",
    "subcategory": "wardrobes",
    "productType": "Solo",
    "price": 26000,
    "originalPrice": 30500,
    "image": "assets/minegolden_p11_4.webp",
    "gallery": [
      "assets/minegolden_p11_4.webp",
      "assets/minegolden_p11_5.webp",
      "assets/minegolden_p11_1.webp"
    ],
    "badges": [
      "GENİŞ İÇ HACİM"
    ],
    "material": "MDF Gövde & Frenli Menteşeler",
    "desc": "Askılıklar, pantolonluk ve çekmeceleriyle 6 kapaklı gardırop."
  },
  {
    "id": 56,
    "title": "Zen Karyola & Yatak Başlığı",
    "category": "bedroom",
    "subcategory": "beds",
    "productType": "Solo",
    "price": 19500,
    "originalPrice": 23000,
    "image": "assets/minegolden_p11_6.webp",
    "gallery": [
      "assets/minegolden_p11_6.webp",
      "assets/minegolden_p11_5.webp",
      "assets/minegolden_p11_3.webp"
    ],
    "badges": [
      "160x200 BAZALI"
    ],
    "material": "Kumaş Kaplı Başlık & Çelik Baza",
    "desc": "Geniş sandıklı bazası ve LED ışıklı yatak başlığı."
  },
  {
    "id": 57,
    "title": "Zen Aynalı Şifonyer & Makyaj Masası",
    "category": "bedroom",
    "subcategory": "consoles",
    "productType": "Solo",
    "price": 14500,
    "originalPrice": 17000,
    "image": "assets/minegolden_p11_2.webp",
    "gallery": [
      "assets/minegolden_p11_2.webp",
      "assets/minegolden_p11_5.webp",
      "assets/minegolden_p11_1.webp"
    ],
    "badges": [
      "AYNA DAHİL"
    ],
    "material": "MDF Gövde & Özel Kesim Ayna",
    "desc": "Mücevher çekmeceli ve geniş saklama alanlı aynalı şifonyer."
  },
  {
    "id": 58,
    "title": "Zen Komodin (2 Adet)",
    "category": "bedroom",
    "subcategory": "nightstands",
    "productType": "Solo",
    "price": 8500,
    "originalPrice": 10000,
    "image": "assets/minegolden_p11_3.webp",
    "gallery": [
      "assets/minegolden_p11_3.webp",
      "assets/minegolden_p11_5.webp",
      "assets/minegolden_p11_6.webp"
    ],
    "badges": [
      "2'Lİ SET"
    ],
    "material": "MDF & Frenli Çekmece",
    "desc": "Yatak başı için 2 adet şık ahşap komodin."
  },
  {
    "id": 59,
    "title": "Dora Ahşap Yatak Odası Takımı",
    "category": "bedroom",
    "subcategory": "beds",
    "productType": "Set",
    "price": 52000,
    "originalPrice": 61000,
    "image": "assets/minegolden_p12_1.webp",
    "gallery": [
      "assets/minegolden_p12_1.webp",
      "assets/minegolden_p12_2.webp",
      "assets/minegolden_p12_4.webp",
      "assets/minegolden_p12_3.webp",
      "assets/minegolden_p12_5.webp",
      "assets/minegolden_p12_6.webp"
    ],
    "badges": [
      "DOĞAL AHŞAP"
    ],
    "material": "Masif Meşe Kaplama & MDF Gövde",
    "desc": "Gardırop, başlıklı karyola, aynalı şifonyer ve 2 adet komodin seti."
  },
  {
    "id": 60,
    "title": "Dora 6 Kapaklı Ahşap Gardırop",
    "category": "bedroom",
    "subcategory": "wardrobes",
    "productType": "Solo",
    "price": 25000,
    "originalPrice": 29000,
    "image": "assets/minegolden_p12_2.webp",
    "gallery": [
      "assets/minegolden_p12_2.webp",
      "assets/minegolden_p12_1.webp",
      "assets/minegolden_p12_6.webp"
    ],
    "badges": [
      "FRENLİ KAPAK"
    ],
    "material": "Doğal Meşe MDF Gövde",
    "desc": "Geniş depolama rafları ve askılık alanlarıyla 6 kapaklı gardırop."
  },
  {
    "id": 61,
    "title": "Dora Karyola (Başlıklı)",
    "category": "bedroom",
    "subcategory": "beds",
    "productType": "Solo",
    "price": 18500,
    "originalPrice": 22000,
    "image": "assets/minegolden_p12_4.webp",
    "gallery": [
      "assets/minegolden_p12_4.webp",
      "assets/minegolden_p12_1.webp",
      "assets/minegolden_p12_5.webp"
    ],
    "badges": [
      "160x200"
    ],
    "material": "Masif Ahşap Karyola İskeleti",
    "desc": "Açılır sandıklı bazası ve konforlu ahşap başlığıyla karyola."
  },
  {
    "id": 62,
    "title": "Dora Şifonyer & Ayna",
    "category": "bedroom",
    "subcategory": "consoles",
    "productType": "Solo",
    "price": 13500,
    "originalPrice": 16000,
    "image": "assets/minegolden_p12_3.webp",
    "gallery": [
      "assets/minegolden_p12_3.webp",
      "assets/minegolden_p12_1.webp",
      "assets/minegolden_p12_6.webp"
    ],
    "badges": [
      "AYNA DAHİL"
    ],
    "material": "MDF & Masif Ahşap Ayak",
    "desc": "Fonksiyonel çekmeceli şifonyer ve yuvarlak ahşap ayna."
  },
  {
    "id": 63,
    "title": "Dora Komodin (2 Adet)",
    "category": "bedroom",
    "subcategory": "nightstands",
    "productType": "Solo",
    "price": 8000,
    "originalPrice": 9500,
    "image": "assets/minegolden_p12_5.webp",
    "gallery": [
      "assets/minegolden_p12_5.webp",
      "assets/minegolden_p12_1.webp",
      "assets/minegolden_p12_4.webp"
    ],
    "badges": [
      "2'Lİ SET"
    ],
    "material": "MDF & Frenli Ray",
    "desc": "2 adet ahşap yatak başı komodini."
  },
  {
    "id": 64,
    "title": "Elegance Lüks Cam Kapaklı Yatak Odası",
    "category": "bedroom",
    "subcategory": "beds",
    "productType": "Set",
    "price": 59000,
    "originalPrice": 69000,
    "image": "assets/minegolden_p13_1.webp",
    "gallery": [
      "assets/minegolden_p13_1.webp",
      "assets/minegolden_p13_2.webp",
      "assets/minegolden_p13_4.webp",
      "assets/minegolden_p13_6.webp",
      "assets/minegolden_p13_5.webp",
      "assets/minegolden_p13_3.webp"
    ],
    "badges": [
      "FÜME CAMLI",
      "İÇ AYDINLATMA"
    ],
    "material": "Füme Temperli Cam & Alüminyum Profil",
    "desc": "LED aydınlatmalı cam kapaklı gardırop, lüks karyola, makyaj masası ve komodin takımı."
  },
  {
    "id": 65,
    "title": "Elegance Füme Cam Kapaklı Gardırop",
    "category": "bedroom",
    "subcategory": "wardrobes",
    "productType": "Solo",
    "price": 29000,
    "originalPrice": 34000,
    "image": "assets/minegolden_p13_2.webp",
    "gallery": [
      "assets/minegolden_p13_2.webp",
      "assets/minegolden_p13_1.webp",
      "assets/minegolden_p13_3.webp"
    ],
    "badges": [
      "LED AYDINLATMALI"
    ],
    "material": "Temperli Füme Cam & Siyah Profil",
    "desc": "Giyinme odası konseptini evinize getiren lüks cam kapaklı gardırop."
  },
  {
    "id": 66,
    "title": "Elegance Karyola & Lüks Başlık",
    "category": "bedroom",
    "subcategory": "beds",
    "productType": "Solo",
    "price": 21000,
    "originalPrice": 24500,
    "image": "assets/minegolden_p13_4.webp",
    "gallery": [
      "assets/minegolden_p13_4.webp",
      "assets/minegolden_p13_1.webp",
      "assets/minegolden_p13_5.webp"
    ],
    "badges": [
      "LÜKS DÖŞEME"
    ],
    "material": "Kadife Döşeme Başlık & Baza",
    "desc": "Özel dikişli yüksek yatak başlığı ve sandıklı baza."
  },
  {
    "id": 67,
    "title": "Elegance Şifonyer & Makyaj Aynası",
    "category": "bedroom",
    "subcategory": "consoles",
    "productType": "Solo",
    "price": 15500,
    "originalPrice": 18000,
    "image": "assets/minegolden_p13_6.webp",
    "gallery": [
      "assets/minegolden_p13_6.webp",
      "assets/minegolden_p13_1.webp",
      "assets/minegolden_p13_3.webp"
    ],
    "badges": [
      "LEDLİ AYNA"
    ],
    "material": "MDF & LED Makyaj Aynası",
    "desc": "Dokunmatik LED ışıklı aynasıyla şık makyaj masası."
  },
  {
    "id": 68,
    "title": "Elegance Komodin (2 Adet)",
    "category": "bedroom",
    "subcategory": "nightstands",
    "productType": "Solo",
    "price": 9000,
    "originalPrice": 10500,
    "image": "assets/minegolden_p13_5.webp",
    "gallery": [
      "assets/minegolden_p13_5.webp",
      "assets/minegolden_p13_1.webp",
      "assets/minegolden_p13_4.webp"
    ],
    "badges": [
      "2'Lİ SET"
    ],
    "material": "Cam Üst Yüzey & MDF",
    "desc": "Cam üst tablalı 2 adet modern komodin."
  },
  {
    "id": 69,
    "title": "Luna Akrilik Modern Yatak Odası Takımı",
    "category": "bedroom",
    "subcategory": "beds",
    "productType": "Set",
    "price": 51000,
    "originalPrice": 60000,
    "image": "assets/minegolden_p14_1.webp",
    "gallery": [
      "assets/minegolden_p14_1.webp",
      "assets/minegolden_p14_2.webp",
      "assets/minegolden_p14_4.webp",
      "assets/minegolden_p14_6.webp",
      "assets/minegolden_p14_3.webp",
      "assets/minegolden_p14_5.webp"
    ],
    "badges": [
      "PARLAK BEYAZ"
    ],
    "material": "Parlak Beyaz Akrilik & MDF Gövde",
    "desc": "Ferah beyaz tasarımıyla 6 kapaklı gardırop, karyola, şifonyer ve komodin takımı."
  },
  {
    "id": 70,
    "title": "Luna 6 Kapaklı Beyaz Gardırop",
    "category": "bedroom",
    "subcategory": "wardrobes",
    "productType": "Solo",
    "price": 24500,
    "originalPrice": 28500,
    "image": "assets/minegolden_p14_2.webp",
    "gallery": [
      "assets/minegolden_p14_2.webp",
      "assets/minegolden_p14_1.webp",
      "assets/minegolden_p14_5.webp"
    ],
    "badges": [
      "ÇİZİLMEZ AKRİLİK"
    ],
    "material": "Parlak Akrilik Kapak",
    "desc": "Aydınlık yatak odaları için 6 kapaklı gardırop."
  },
  {
    "id": 71,
    "title": "Luna Karyola (Başlıklı)",
    "category": "bedroom",
    "subcategory": "beds",
    "productType": "Solo",
    "price": 18000,
    "originalPrice": 21000,
    "image": "assets/minegolden_p14_4.webp",
    "gallery": [
      "assets/minegolden_p14_4.webp",
      "assets/minegolden_p14_1.webp",
      "assets/minegolden_p14_3.webp"
    ],
    "badges": [
      "BAZALI"
    ],
    "material": "Beyaz Gövde & Kumaş Başlık",
    "desc": "Modern beyaz karyola ve baza."
  },
  {
    "id": 72,
    "title": "Luna Şifonyer",
    "category": "bedroom",
    "subcategory": "consoles",
    "productType": "Solo",
    "price": 13000,
    "originalPrice": 15500,
    "image": "assets/minegolden_p14_6.webp",
    "gallery": [
      "assets/minegolden_p14_6.webp",
      "assets/minegolden_p14_1.webp",
      "assets/minegolden_p14_5.webp"
    ],
    "badges": [
      "AYNA DAHİL"
    ],
    "material": "Akrilik Yüzey & MDF",
    "desc": "Geniş çekmeceli beyaz şifonyer."
  },
  {
    "id": 73,
    "title": "Luna Komodin (2 Adet)",
    "category": "bedroom",
    "subcategory": "nightstands",
    "productType": "Solo",
    "price": 7800,
    "originalPrice": 9200,
    "image": "assets/minegolden_p14_3.webp",
    "gallery": [
      "assets/minegolden_p14_3.webp",
      "assets/minegolden_p14_1.webp",
      "assets/minegolden_p14_4.webp"
    ],
    "badges": [
      "2'Lİ SET"
    ],
    "material": "Beyaz Akrilik & Raylı",
    "desc": "2 adet beyaz yatak başı komodini."
  },
  {
    "id": 74,
    "title": "Masal Krem & Gold Yatak Odası Takımı",
    "category": "bedroom",
    "subcategory": "beds",
    "productType": "Set",
    "price": 55000,
    "originalPrice": 64000,
    "image": "assets/minegolden_p15_1.webp",
    "gallery": [
      "assets/minegolden_p15_1.webp",
      "assets/minegolden_p15_3.webp",
      "assets/minegolden_p15_4.webp",
      "assets/minegolden_p15_5.webp",
      "assets/minegolden_p15_6.webp",
      "assets/minegolden_p15_2.webp"
    ],
    "badges": [
      "KREM & GOLD"
    ],
    "material": "Mat Krem MDF & Gold Metal Kulplar",
    "desc": "Zarif krem lake yüzeyi ve altın detaylarıyla komple yatak odası takımı."
  },
  {
    "id": 75,
    "title": "Masal 6 Kapaklı Krem Gardırop",
    "category": "bedroom",
    "subcategory": "wardrobes",
    "productType": "Solo",
    "price": 26500,
    "originalPrice": 31000,
    "image": "assets/minegolden_p15_3.webp",
    "gallery": [
      "assets/minegolden_p15_3.webp",
      "assets/minegolden_p15_1.webp",
      "assets/minegolden_p15_2.webp"
    ],
    "badges": [
      "GOLD KULPLAR"
    ],
    "material": "MDF Gövde & Lake Kapaklar",
    "desc": "Özel desenli kapakları ve geniş iç hacmiyle gardırop."
  },
  {
    "id": 76,
    "title": "Masal Karyola & Yatak Başlığı",
    "category": "bedroom",
    "subcategory": "beds",
    "productType": "Solo",
    "price": 19500,
    "originalPrice": 23000,
    "image": "assets/minegolden_p15_4.webp",
    "gallery": [
      "assets/minegolden_p15_4.webp",
      "assets/minegolden_p15_1.webp",
      "assets/minegolden_p15_6.webp"
    ],
    "badges": [
      "KAPİTONE BAŞLIK"
    ],
    "material": "Krem Kumaş & Baza",
    "desc": "Altın çerçeveli kapitone yatak başlığı ve baza."
  },
  {
    "id": 77,
    "title": "Masal Şifonyer & Aynası",
    "category": "bedroom",
    "subcategory": "consoles",
    "productType": "Solo",
    "price": 14000,
    "originalPrice": 16500,
    "image": "assets/minegolden_p15_5.webp",
    "gallery": [
      "assets/minegolden_p15_5.webp",
      "assets/minegolden_p15_1.webp",
      "assets/minegolden_p15_2.webp"
    ],
    "badges": [
      "AYNA DAHİL"
    ],
    "material": "MDF Lake & Gold Ayna",
    "desc": "Gold çerçeveli aynasıyla lüks krem şifonyer."
  },
  {
    "id": 78,
    "title": "Masal Komodin (2 Adet)",
    "category": "bedroom",
    "subcategory": "nightstands",
    "productType": "Solo",
    "price": 8200,
    "originalPrice": 9800,
    "image": "assets/minegolden_p15_6.webp",
    "gallery": [
      "assets/minegolden_p15_6.webp",
      "assets/minegolden_p15_1.webp",
      "assets/minegolden_p15_4.webp"
    ],
    "badges": [
      "2'Lİ SET"
    ],
    "material": "Lake Yüzey & Gold Kulp",
    "desc": "2 adet lüks krem komodin."
  }
];

const CATEGORY_NAMES = {
    living: "Oturma Odası",
    dining: "Yemek Odası",
    bedroom: "Yatak Odası",
    office: "Çalışma Odası"
};

// Cart State with LocalStorage Persistence across reloads (Ctrl+F5)
let cart = [];
try {
    const savedCart = localStorage.getItem("mobelmor_cart");
    if (savedCart) {
        cart = JSON.parse(savedCart);
        if (!Array.isArray(cart)) cart = [];
    }
} catch (e) {
    cart = [];
}

const saveCart = () => {
    try {
        localStorage.setItem("mobelmor_cart", JSON.stringify(cart));
    } catch (e) {
        console.error("Cart storage save error:", e);
    }
};

const loadWishlist = () => {
    try {
        const raw = localStorage.getItem("mobelmor_wishlist");
        if (raw) {
            const arr = JSON.parse(raw);
            if (Array.isArray(arr)) {
                return new Set(arr.map(Number));
            }
        }
    } catch (e) {
        console.error("Wishlist load error:", e);
    }
    return new Set();
};

const saveWishlist = () => {
    try {
        localStorage.setItem("mobelmor_wishlist", JSON.stringify(Array.from(wishlist)));
    } catch (e) {
        console.error("Wishlist save error:", e);
    }
};

let wishlist = loadWishlist();
let selectedQty = 1;

const updateWishlistBadges = () => {
    const wishBadge = document.getElementById("wishlistBadge");
    if (wishBadge) wishBadge.textContent = wishlist.size;
    const mobileWishBadge = document.getElementById("mobileWishlistBadge");
    if (mobileWishBadge) mobileWishBadge.textContent = wishlist.size;
};

const renderWishlist = () => {
    const body = document.getElementById("wishlistBody");
    const footer = document.getElementById("wishlistFooter");
    if (!body || !footer) return;

    const sourceList = (typeof window.StoreService !== 'undefined') ? window.StoreService.getProducts(true) : PRODUCTS;
    const wishListItems = sourceList.filter(p => wishlist.has(p.id));

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
                <button class="pill-add-btn" onclick="addToCart(${item.id}); toggleDetailWishlist(${item.id}); renderWishlist();" title="Sepete Aktar" style="padding:4px 8px; font-size:0.75rem;">
                    <i class="fa-solid fa-cart-plus"></i>
                </button>
                <button class="qty-btn" onclick="toggleDetailWishlist(${item.id}); renderWishlist();" title="Kaldır" style="color:#ef4444 !important;">
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

// ── YouTube Video Player & Modal Engine ──
function getYouTubeEmbedUrl(url) {
    if (!url) return null;
    try {
        let decoded = decodeURIComponent(url).trim();
        let match = decoded.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([\w-]{11})/i);
        if (match && match[1]) {
            return `https://www.youtube-nocookie.com/embed/${match[1]}?autoplay=1&rel=0`;
        }
    } catch (e) {
        console.error("YouTube URL parse error:", e);
    }
    return null;
}

window.openYouTubeVideoModal = function(rawUrl) {
    const embedUrl = getYouTubeEmbedUrl(rawUrl);
    if (!embedUrl) {
        showToast("Geçersiz veya bulunamayan video bağlantısı.", "fa-triangle-exclamation");
        return;
    }
    let modal = document.getElementById("youtubeVideoModal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "youtubeVideoModal";
        modal.className = "yt-video-modal-overlay";
        modal.innerHTML = `
            <div class="yt-video-modal-container" style="position:relative; width:94%; max-width:880px; background:#0f172a; border-radius:18px; box-shadow:0 25px 60px rgba(0,0,0,0.85), 0 0 35px rgba(107,33,168,0.3); overflow:hidden; border:1px solid rgba(255,255,255,0.15);">
                <button type="button" class="yt-video-close-btn" onclick="closeYouTubeVideoModal()" aria-label="Videoyu Kapat" style="position:absolute; top:12px; right:12px; z-index:20; background:rgba(0,0,0,0.7); border:1px solid rgba(255,255,255,0.3); color:#fff; width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:1.1rem;">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <div class="yt-video-iframe-wrapper" style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; background:#000;">
                    <iframe id="ytVideoIframe" src="" title="Mobelmor Ürün Tanıtım Videosu" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;"></iframe>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeYouTubeVideoModal();
        });
    }
    const iframe = document.getElementById("ytVideoIframe");
    if (iframe) iframe.src = embedUrl;
    modal.classList.add("active");
    modal.style.display = "flex";
    modal.style.opacity = "1";
    lockBodyScroll();
};

window.closeYouTubeVideoModal = function() {
    const modal = document.getElementById("youtubeVideoModal");
    if (modal) {
        modal.classList.remove("active");
        modal.style.display = "none";
        modal.style.opacity = "0";
        const iframe = document.getElementById("ytVideoIframe");
        if (iframe) iframe.src = "";
    }
    unlockBodyScroll();
};

// ── Fabric Macro Texture Zoom Lightbox Modal ──
window.openFabricZoomModal = function() {
    let modal = document.getElementById("fabricZoomModal");
    const currentImg = currentFabricState.colorImage || 'assets/fabrics/bf_krem.webp';
    const currentTitle = `${currentFabricState.fabricName} • ${currentFabricState.colorName} (${currentFabricState.colorCode})`;
    
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "fabricZoomModal";
        modal.className = "fabric-zoom-modal-overlay";
        modal.innerHTML = `
            <div class="fabric-zoom-modal-container">
                <button type="button" class="fabric-zoom-close-btn" onclick="closeFabricZoomModal()" aria-label="Kapat">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <div class="fabric-zoom-header">
                    <div class="fabric-zoom-badge"><i class="fa-solid fa-magnifying-glass-plus"></i> Makro Doku Büyüteci</div>
                    <h3 id="fabricZoomModalTitle" class="fabric-zoom-title">${currentTitle}</h3>
                    <p id="fabricZoomModalSubtitle" class="fabric-zoom-subtitle">1. Sınıf Dokuma &amp; Leke Tutmaz Silinebilir Özel Mobilya Kumaşı</p>
                </div>
                <div class="fabric-zoom-image-wrapper">
                    <img id="fabricZoomModalImg" src="${currentImg}" alt="${currentTitle}" class="fabric-zoom-img">
                </div>
                <div class="fabric-zoom-footer">
                    <span class="fabric-zoom-info-tag"><i class="fa-solid fa-circle-check"></i> %100 Orijinal Renk ve Doku</span>
                    <a href="${document.getElementById('vfabricSampleLink')?.href || '#'}" target="_blank" class="fabric-zoom-sample-btn" id="fabricZoomModalSampleLink">
                        <i class="fa-solid fa-truck-fast"></i> Ücretsiz Numune İste
                    </a>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeFabricZoomModal();
        });
    } else {
        const titleEl = document.getElementById("fabricZoomModalTitle");
        const imgEl = document.getElementById("fabricZoomModalImg");
        const sampleLinkEl = document.getElementById("fabricZoomModalSampleLink");
        if (titleEl) titleEl.textContent = currentTitle;
        if (imgEl) {
            imgEl.src = currentImg;
            imgEl.alt = currentTitle;
        }
        if (sampleLinkEl) {
            sampleLinkEl.href = document.getElementById('vfabricSampleLink')?.href || '#';
        }
    }
    modal.classList.add("active");
    lockBodyScroll();
};

window.closeFabricZoomModal = function() {
    const modal = document.getElementById("fabricZoomModal");
    if (modal) {
        modal.classList.remove("active");
    }
    unlockBodyScroll();
};

let bodyScrollPos = 0;
let activeScrollLocks = 0;

const lockBodyScroll = () => {
    activeScrollLocks++;
    if (activeScrollLocks === 1) {
        bodyScrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        document.documentElement.classList.add("scroll-locked", "cart-open");
        document.body.classList.add("scroll-locked", "cart-open");
        document.body.style.top = `-${bodyScrollPos}px`;
    }
};

const unlockBodyScroll = (force = false) => {
    if (force) {
        activeScrollLocks = 0;
    } else if (activeScrollLocks > 0) {
        activeScrollLocks--;
    }

    // Check if any modal or drawer is truly active in DOM
    const anyActive = document.querySelector(
        ".modal-overlay.active, .cart-drawer.active, .wishlist-drawer.active, .cart-overlay.active, .wishlist-overlay.active, .yt-video-modal-overlay.active, .fabric-zoom-modal-overlay.active, .mbl-lightbox-overlay.active"
    );

    if (activeScrollLocks === 0 || !anyActive || force) {
        activeScrollLocks = 0;
        document.documentElement.classList.remove("scroll-locked", "cart-open", "wishlist-open", "modal-open");
        document.body.classList.remove("scroll-locked", "cart-open", "wishlist-open", "modal-open");
        const top = document.body.style.top;
        document.body.style.top = "";
        document.body.style.position = "";
        document.body.style.overflow = "";
        document.body.style.width = "";
        document.documentElement.style.overflow = "";
        const targetY = top ? Math.abs(parseInt(top, 10)) : bodyScrollPos;
        window.scrollTo(0, targetY);
    }
};

const trapDrawerScroll = (element) => {
    if (!element) return;
    let startY = 0;
    element.addEventListener("touchstart", (e) => {
        if (e.touches.length === 1) {
            startY = e.touches[0].clientY;
        }
    }, { passive: true });

    element.addEventListener("touchmove", (e) => {
        if (e.touches.length !== 1) return;
        const currentY = e.touches[0].clientY;
        const deltaY = currentY - startY;
        const scrollTop = element.scrollTop;
        const isAtTop = scrollTop <= 0;
        const isAtBottom = (scrollTop + element.clientHeight) >= (element.scrollHeight - 1);

        if ((isAtTop && deltaY > 0) || (isAtBottom && deltaY < 0)) {
            if (e.cancelable) e.preventDefault();
        }
    }, { passive: false });
};

const formatPrice = (num) => {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 0 }).format(num);
};

const showToast = (message, icon = "fa-circle-check") => {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
        <div class="toast-icon-badge"><i class="fa-solid ${icon}"></i></div>
        <div class="toast-text">${message}</div>
    `;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add("toast-fade-out");
        setTimeout(() => toast.remove(), 320);
    }, 2800);
};

const getProductIdFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    const idStr = params.get("id");
    const slugStr = params.get("slug");

    // 1. If slug is explicitly provided, resolve exact product by slug
    if (slugStr) {
        const foundBySlug = PRODUCTS.find(p => (window.slugify ? window.slugify(p.title) : p.title.toLowerCase()) === slugStr);
        if (foundBySlug) return foundBySlug.id;
    }

    // 2. If valid ID is provided and exists in DB
    if (idStr) {
        const parsed = parseInt(idStr);
        if (!isNaN(parsed) && PRODUCTS.some(p => p.id === parsed)) return parsed;
    }

    // 3. Also check pathname: /urun/slug or /slug
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
        <div class="lb-mobile-header">
            <span class="lb-mobile-counter" id="lbMobileCounter">1 / 1</span>
            <button type="button" class="lb-mobile-close-btn" onclick="closeLightbox()" title="Kapat (Esc)" aria-label="Kapat">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
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
        if (!e.target.closest('#lbCard') && !e.target.closest('#lbPrev') && !e.target.closest('#lbNext') && !e.target.closest('.lb-mobile-header')) {
            closeLightbox();
        }
    });

    // Touch swipe on card or overlay on mobile
    let touchStartX = 0;
    let touchStartY = 0;

    lb.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }
    }, { passive: true });

    lb.addEventListener('touchend', (e) => {
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

window.openLightbox = (startIndex = 0) => {
    const pid = getProductIdFromUrl();
    const product = (typeof window.StoreService !== 'undefined' ? window.StoreService.getProductById(pid) : null) || PRODUCTS.find(p => p.id === pid) || PRODUCTS[0];
    lightboxGallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
    lightboxCurrentIndex = typeof startIndex === 'number' && startIndex >= 0 && startIndex < lightboxGallery.length ? startIndex : 0;

    const lb = window.createLightbox();
    const titleEl = document.getElementById('lbTitle');
    if (titleEl && product) {
        titleEl.textContent = (product.title || 'ÜRÜN GÖRSELİ').toUpperCase();
    }

    window.updateLightboxView();
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
};

window.closeLightbox = () => {
    const lb = document.getElementById('mbl-lightbox');
    if (lb) {
        lb.classList.remove('active');
    }
    document.body.style.overflow = '';
};

window.navigateLightbox = (direction) => {
    if (!lightboxGallery || lightboxGallery.length === 0) return;
    lightboxCurrentIndex = (lightboxCurrentIndex + direction + lightboxGallery.length) % lightboxGallery.length;
    window.updateLightboxView();
};

window.updateLightboxView = () => {
    const lbImg = document.getElementById('lbImg');
    const lbCounter = document.getElementById('lbCounter');
    const lbMobileCounter = document.getElementById('lbMobileCounter');
    if (!lightboxGallery || lightboxGallery.length === 0) return;

    const src = lightboxGallery[lightboxCurrentIndex] || '';
    if (lbImg) {
        lbImg.src = src;
        lbImg.alt = `Görsel ${lightboxCurrentIndex + 1} / ${lightboxGallery.length}`;
    }
    if (lbCounter) {
        lbCounter.textContent = `${lightboxCurrentIndex + 1} / ${lightboxGallery.length}`;
    }
    if (lbMobileCounter) {
        lbMobileCounter.textContent = `${lightboxCurrentIndex + 1} / ${lightboxGallery.length}`;
    }

    const prevBtn = document.getElementById('lbPrev');
    const nextBtn = document.getElementById('lbNext');
    if (prevBtn) prevBtn.style.display = lightboxGallery.length > 1 ? 'flex' : 'none';
    if (nextBtn) nextBtn.style.display = lightboxGallery.length > 1 ? 'flex' : 'none';
};

window.goToSlide = (idx) => {
    const track = document.getElementById('galleryCarouselTrack');
    const pid = getProductIdFromUrl();
    const product = (typeof window.StoreService !== 'undefined' ? window.StoreService.getProductById(pid) : null) || PRODUCTS.find(p => p.id === pid) || PRODUCTS[0];
    let gallery = product.gallery && product.gallery.length > 0 ? [...product.gallery] : [product.image];
    if (product.image && gallery[0] !== product.image) {
        gallery = [product.image, ...gallery.filter(g => g !== product.image)];
    }

    if (idx < 0) idx = 0;
    if (idx >= gallery.length) idx = gallery.length - 1;

    currentActiveGalleryIndex = idx;
    if (track) {
        const slideWidth = track.clientWidth || track.offsetWidth;
        track.scrollTo({ left: idx * slideWidth, behavior: 'smooth' });
    }
    updateActiveSlide(idx);
};

const setupGalleryCarousel = () => {
    const track = document.getElementById('galleryCarouselTrack');
    const wrapper = document.querySelector('.gallery-carousel-wrapper');
    if (!track || !wrapper) return;

    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;
    let hasMoved = false;

    // Detect tap to open lightbox while leaving swipe 100% native and fluid
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
        if (Math.abs(diffX) > 10 || Math.abs(diffY) > 10) {
            hasMoved = true;
        }
    }, { passive: true });

    wrapper.addEventListener('touchend', (e) => {
        if (e.target.closest('.card-heart-btn') || e.target.closest('.vcard-circle-sticker') || e.target.closest('.gallery-dots-strip') || e.target.closest('.vgallery-arrow-btn')) return;
        
        const touchDuration = Date.now() - touchStartTime;
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const diffX = touchEndX - touchStartX;
        const diffY = touchEndY - touchStartY;

        // Clean quick tap on image -> Open Lightbox Zoom!
        if (!hasMoved && Math.abs(diffX) < 10 && Math.abs(diffY) < 10 && touchDuration < 300) {
            openLightbox(currentActiveGalleryIndex);
        }
    }, { passive: true });

    // Ultra-smooth RAF scroll tracking for dots & counter
    let ticking = false;
    track.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const slideWidth = track.clientWidth;
                if (slideWidth > 0) {
                    const idx = Math.round(track.scrollLeft / slideWidth);
                    if (idx !== currentActiveGalleryIndex) {
                        updateActiveSlide(idx);
                    }
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
};

const updateActiveSlide = (idx) => {
    currentActiveGalleryIndex = idx;
    const numEl = document.getElementById('currentSlideNum');
    if (numEl) numEl.textContent = idx + 1;
    
    const thumbs = document.querySelectorAll('.vthumb-item');
    const strip = document.getElementById('galleryThumbStrip');
    
    thumbs.forEach((thumb, i) => {
        if (i === idx) {
            thumb.classList.add('active');
            if (strip) {
                const thumbTop = thumb.offsetTop;
                const thumbHeight = thumb.offsetHeight;
                const stripHeight = strip.offsetHeight;
                strip.scrollTo({ top: thumbTop - (stripHeight / 2) + (thumbHeight / 2), behavior: 'smooth' });
            }
        } else {
            thumb.classList.remove('active');
        }
    });

    const dots = document.querySelectorAll('.gallery-dot');
    dots.forEach((dot, i) => {
        if (i === idx) dot.classList.add('active');
        else dot.classList.remove('active');
    });
};

window.prevSlide = () => {
    goToSlide(currentActiveGalleryIndex - 1);
};

window.nextSlide = () => {
    goToSlide(currentActiveGalleryIndex + 1);
};

window.scrollThumbs = (dir) => {
    const strip = document.getElementById('galleryThumbStrip');
    if (strip) strip.scrollBy({ top: dir * 100, behavior: 'smooth' });
};

window.toggleDetailWishlist = (id) => {
    id = parseInt(id);
    if (wishlist.has(id)) {
        wishlist.delete(id);
        showToast("Favorilerden çıkarıldı", "fa-heart-crack");
    } else {
        wishlist.add(id);
        showToast("Favorilere eklendi!", "fa-heart");
    }
    saveWishlist();
    updateWishlistBadges();
    const btn = document.querySelector('.vgallery-main-view .card-heart-btn');
    if (btn) {
        btn.classList.toggle('active', wishlist.has(id));
        btn.innerHTML = `<i class="fa-${wishlist.has(id) ? 'solid' : 'regular'} fa-heart"></i>`;
    }
    renderWishlist();
};

window.selectOption = (el, optIdx) => {
    document.querySelectorAll('.voption-card').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    goToSlide(optIdx);
};

let currentModuleState = {
    mainQty: 1,
    extraQty: 0,
    mainUnitPrice: 0,
    extraUnitPrice: 0,
    productBasePrice: 0,
    modules: []
};

// ── Interactive Fabric & Color Studio Data (Top 5 Real Fabrics + Price Differential) ──
const FABRIC_COLLECTIONS = [
    {
        id: 'babyface',
        name: 'Baby Face Kadife',
        badge: 'Baz Fiyat (0 TL)',
        desc: 'Su itici, silinebilir, ipeksi yumuşak kadife doku.',
        priceDiff: 0,
        colors: [
            { code: 'BF-01', name: 'Krem Bej',        image: 'assets/fabrics/bf_krem.webp', hex: '#f5f0eb', textColor: '#1e293b' },
            { code: 'BF-02', name: 'Antrasit Gri',     image: 'assets/fabrics/bf_antrasit.webp', hex: '#334155', textColor: '#ffffff' },
            { code: 'BF-03', name: 'Zümrüt Yeşili',    image: 'assets/fabrics/bf_zumrut.webp', hex: '#166534', textColor: '#ffffff' },
            { code: 'BF-04', name: 'Terracotta',       image: 'assets/fabrics/bf_terracotta.webp', hex: '#c2410c', textColor: '#ffffff' },
            { code: 'BF-05', name: 'Gece Mavisi',      image: 'assets/fabrics/bf_gecemavisi.webp', hex: '#1e3a8a', textColor: '#ffffff' },
            { code: 'BF-06', name: 'Vizon Latte',      image: 'assets/fabrics/bf_vizon.webp', hex: '#a89484', textColor: '#ffffff' },
            { code: 'BF-07', name: 'Hardal Sarısı',    image: 'assets/fabrics/bf_hardal.webp', hex: '#ca8a04', textColor: '#ffffff' },
            { code: 'BF-08', name: 'Adaçayı Yeşili',   image: 'assets/fabrics/bf_adacayi.webp', hex: '#57755f', textColor: '#ffffff' },
        ]
    },
    {
        id: 'nubuk',
        name: 'Silinebilir Nubuk',
        badge: '+3.120 TL',
        desc: 'Tırnak takılmayan, leke tutmaz pürüzsüz süet nubuk dokusu.',
        priceDiff: 3120,
        colors: [
            { code: 'NB-01', name: 'Taba Kahve',       image: 'assets/fabrics/nb_taba.webp', hex: '#b46937', textColor: '#ffffff' },
            { code: 'NB-02', name: 'Duman Gri',        image: 'assets/fabrics/nb_duman.webp', hex: '#64748b', textColor: '#ffffff' },
            { code: 'NB-03', name: 'Kum Beji',         image: 'assets/fabrics/nb_kum.webp', hex: '#d4c4b0', textColor: '#1e293b' },
            { code: 'NB-04', name: 'Çikolata Kahve',   image: 'assets/fabrics/nb_cikolata.webp', hex: '#4e342e', textColor: '#ffffff' },
            { code: 'NB-05', name: 'Petrol Yeşili',    image: 'assets/fabrics/nb_petrol.webp', hex: '#155e75', textColor: '#ffffff' },
            { code: 'NB-06', name: 'Kül Grisi',        image: 'assets/fabrics/nb_kul.webp', hex: '#8c8c91', textColor: '#ffffff' },
        ]
    },
    {
        id: 'sonil',
        name: 'Lüks Şönil / Jakar',
        badge: '+5.460 TL',
        desc: 'Ağır gramajlı, tok ve dökümlü şık jakarlı mobilya şönili.',
        priceDiff: 5460,
        colors: [
            { code: 'SN-01', name: 'Lüks Antrasit',    image: 'assets/fabrics/sn_antrasit.webp', hex: '#2d3748', textColor: '#ffffff' },
            { code: 'SN-02', name: 'Vizon Şönil',      image: 'assets/fabrics/sn_vizon.webp', hex: '#9b8778', textColor: '#ffffff' },
            { code: 'SN-03', name: 'Zümrüt Şönil',     image: 'assets/fabrics/sn_zumrut.webp', hex: '#145537', textColor: '#ffffff' },
            { code: 'SN-04', name: 'Krem Şönil',       image: 'assets/fabrics/sn_krem.webp', hex: '#f2ece2', textColor: '#1e293b' },
            { code: 'SN-05', name: 'Bakır Şönil',      image: 'assets/fabrics/sn_bakir.webp', hex: '#af502d', textColor: '#ffffff' },
            { code: 'SN-06', name: 'Lacivert Şönil',   image: 'assets/fabrics/sn_lacivert.webp', hex: '#192d5a', textColor: '#ffffff' },
        ]
    },
    {
        id: 'keten',
        name: 'Doğal Dokuma Keten',
        badge: '+7.800 TL',
        desc: 'Doğal lifli, ferah ve organik nefes alabilen keten dokuma.',
        priceDiff: 7800,
        colors: [
            { code: 'KT-01', name: 'Doğal Keten',      image: 'assets/fabrics/kt_dogal.webp', hex: '#e1d7c6', textColor: '#1e293b' },
            { code: 'KT-02', name: 'Açık Bej',         image: 'assets/fabrics/kt_acikbej.webp', hex: '#f0e9de', textColor: '#1e293b' },
            { code: 'KT-03', name: 'Taş Rengi',        image: 'assets/fabrics/kt_tas.webp', hex: '#b9afa0', textColor: '#1e293b' },
            { code: 'KT-04', name: 'Grafit Keten',     image: 'assets/fabrics/kt_grafit.webp', hex: '#4b5563', textColor: '#ffffff' },
            { code: 'KT-05', name: 'Zeytin Yeşili',    image: 'assets/fabrics/kt_zeytin.webp', hex: '#5f6e50', textColor: '#ffffff' },
            { code: 'KT-06', name: 'Çöl Kumu',         image: 'assets/fabrics/kt_colkumu.webp', hex: '#cdb99b', textColor: '#1e293b' },
        ]
    },
    {
        id: 'bukle',
        name: 'İtalyan Bukle',
        badge: '+14.820 TL',
        desc: 'Özel 3D bukle dokuma, hacimli ve sıcak lüks doku.',
        priceDiff: 14820,
        colors: [
            { code: 'BK-01', name: 'Ekru Bukle',       image: 'assets/fabrics/bk_ekru.webp', hex: '#f8f5ee', textColor: '#1e293b' },
            { code: 'BK-02', name: 'Fildişi Bukle',    image: 'assets/fabrics/bk_fildisi.webp', hex: '#eee8dc', textColor: '#1e293b' },
            { code: 'BK-03', name: 'Sıcak Bej',        image: 'assets/fabrics/bk_bej.webp', hex: '#daccb9', textColor: '#1e293b' },
            { code: 'BK-04', name: 'Taş Grisi',        image: 'assets/fabrics/bk_tasgri.webp', hex: '#949ba2', textColor: '#ffffff' },
            { code: 'BK-05', name: 'Vizon Bukle',      image: 'assets/fabrics/bk_vizon.webp', hex: '#a08c7d', textColor: '#ffffff' },
            { code: 'BK-06', name: 'Fıstık Yeşili',    image: 'assets/fabrics/bk_fistik.webp', hex: '#78916e', textColor: '#ffffff' },
        ]
    }
];

let currentFabricState = {
    fabricId: 'babyface',
    fabricName: 'Baby Face Kadife',
    colorCode: 'BF-01',
    colorName: 'Krem Bej',
    colorHex: '#f5f0eb',
    colorImage: 'assets/fabrics/bf_krem.webp',
    priceDiff: 0
};

let currentDetailProduct = null;

window.recalculateDetailProductTotal = () => {
    const baseTotal = (currentModuleState && currentModuleState.modules && currentModuleState.modules.length > 0)
        ? currentModuleState.modules.reduce((s, m) => s + (m.price * m.qty), 0)
        : (currentDetailProduct ? currentDetailProduct.price : 0);
    
    const fabricDiff = (currentFabricState && currentFabricState.priceDiff) ? currentFabricState.priceDiff : 0;
    const grandTotal = baseTotal + fabricDiff;
    
    syncCalculatedPrices(grandTotal);
};

const renderFabricSwatchesHtml = (colId) => {
    const col = FABRIC_COLLECTIONS.find(c => c.id === colId);
    if (!col) return '';
    return col.colors.map(color => `
        <button type="button" 
            class="vcolor-swatch-btn ${color.code === currentFabricState.colorCode ? 'active' : ''}" 
            data-code="${color.code}" 
            style="background-image: url('${color.image}'); background-size: cover; background-position: center;" 
            onclick="selectFabricColor('${color.code}', '${color.name}', '${color.hex}', '${color.image}')" 
            title="${color.name} (${color.code})"
            aria-label="${color.name}">
            <i class="fa-solid fa-check vswatch-check"></i>
        </button>
    `).join('');
};

window.selectFabricCollection = (colId) => {
    const col = FABRIC_COLLECTIONS.find(c => c.id === colId);
    if (!col) return;
    currentFabricState.fabricId = col.id;
    currentFabricState.fabricName = col.name;
    currentFabricState.priceDiff = col.priceDiff || 0;

    const firstColor = col.colors[0];
    currentFabricState.colorCode = firstColor.code;
    currentFabricState.colorName = firstColor.name;
    currentFabricState.colorHex = firstColor.hex;
    currentFabricState.colorImage = firstColor.image;

    document.querySelectorAll(".vfabric-pill-btn").forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("onclick")?.includes(colId));
    });

    const grid = document.getElementById("vfabricSwatchesGrid");
    if (grid) grid.innerHTML = renderFabricSwatchesHtml(col.id);

    updateFabricLensAndBadge(col, firstColor);
    recalculateDetailProductTotal();
};

window.selectFabricColor = (code, name, hex, image) => {
    currentFabricState.colorCode = code;
    currentFabricState.colorName = name;
    currentFabricState.colorHex = hex;
    currentFabricState.colorImage = image || currentFabricState.colorImage;

    document.querySelectorAll(".vcolor-swatch-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.code === code);
    });

    const col = FABRIC_COLLECTIONS.find(c => c.id === currentFabricState.fabricId);
    updateFabricLensAndBadge(col, { code, name, hex, image: currentFabricState.colorImage });
};

const updateFabricLensAndBadge = (col, color) => {
    const activeLabel = document.getElementById("vfabricActiveColorLabel");
    const lensCircle = document.getElementById("vfabricLensCircle");
    const selectedTitle = document.getElementById("vfabricSelectedTitle");
    const selectedDesc = document.getElementById("vfabricSelectedDesc");
    const sampleLink = document.getElementById("vfabricSampleLink");
    const freeBadge = document.getElementById("vfabricHeaderBadge");

    const priceTag = col.priceDiff > 0 ? ` (+${formatPrice(col.priceDiff)})` : ' (0 TL Fark)';

    if (activeLabel) activeLabel.textContent = `${color.name} (${color.code})${priceTag}`;
    if (lensCircle) {
        lensCircle.style.backgroundImage = `url('${color.image || currentFabricState.colorImage}')`;
        lensCircle.style.backgroundSize = 'cover';
        lensCircle.style.backgroundPosition = 'center';
    }
    if (selectedTitle && col) selectedTitle.textContent = `${col.name} • ${color.name}`;
    if (selectedDesc && col) {
        const diffDesc = col.priceDiff > 0 ? ` [Kumaş Farkı: +${formatPrice(col.priceDiff)}]` : ' [Standart Baz Fiyat]';
        selectedDesc.textContent = `${col.desc}${diffDesc}`;
    }
    if (freeBadge) {
        if (col.priceDiff > 0) {
            freeBadge.textContent = `+${formatPrice(col.priceDiff)}`;
            freeBadge.style.background = '#faf5ff';
            freeBadge.style.color = '#7e22ce';
            freeBadge.style.borderColor = '#d8b4fe';
        } else {
            freeBadge.textContent = 'Baz Fiyat (0 TL)';
            freeBadge.style.background = '#f0fdf4';
            freeBadge.style.color = '#15803d';
            freeBadge.style.borderColor = '#bbf7d0';
        }
    }
    if (sampleLink && currentDetailProduct) {
        sampleLink.href = `https://wa.me/905300000000?text=Merhaba,%20Mobelmor.com'dan%20${encodeURIComponent(currentDetailProduct.title)}%20ürünü%20için%20${encodeURIComponent((col ? col.name : '') + ' - ' + color.name + ' [' + color.code + ']' + (col.priceDiff > 0 ? ' (+' + formatPrice(col.priceDiff) + ')' : ''))}%20kumaş%20kartelası%20talep%20etmek%20istiyorum.`;
    }
};

const renderProductDetail = () => {
    const pid = getProductIdFromUrl();
    let product = (typeof window.StoreService !== 'undefined' ? window.StoreService.getProductById(pid) : null) || PRODUCTS.find(p => p.id === pid) || PRODUCTS[0];
    
    // Extract video if embedded in material
    if (product && product.material) {
        if (product.material.includes('||META:')) {
            const match = product.material.match(/\|\|META:(\{.*?\})\|\|/);
            if (match && match[1]) {
                try {
                    const parsed = JSON.parse(match[1]);
                    if (parsed.videoUrl || parsed.youtubeUrl) {
                        product.videoUrl = parsed.videoUrl || parsed.youtubeUrl;
                        product.youtubeUrl = product.videoUrl;
                    }
                } catch(e) {}
            }
        }
        if (product.material.includes('||VIDEO:')) {
            const m = product.material.match(/\|\|VIDEO:([^|]+)\|\|/);
            if (m && m[1]) {
                product.videoUrl = m[1];
                product.youtubeUrl = m[1];
            }
        }
    }

    let gallery = product.gallery && product.gallery.length > 0 ? [...product.gallery] : [product.image];
    if (product.image && gallery[0] !== product.image) {
        gallery = [product.image, ...gallery.filter(g => g !== product.image)];
    }

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

    // Highlight single active category in Vivense nav bar on detail page
    document.querySelectorAll(".vivense-nav-item").forEach(item => item.classList.remove("active"));
    if (product.category) {
        const catSlug = window.CATEGORY_SLUGS ? (window.CATEGORY_SLUGS[product.category] || product.category) : product.category;
        let matchedItem = null;
        if (product.subcategory) {
            matchedItem = Array.from(document.querySelectorAll(".vivense-nav-item")).find(item => {
                const link = item.querySelector(".vivense-nav-link");
                if (!link) return false;
                const href = link.getAttribute("href") || "";
                return href.includes(`sub=${product.subcategory}`) && (href.includes(`c=${catSlug}`) || href.includes(`c=${product.category}`));
            });
        }
        if (!matchedItem) {
            matchedItem = Array.from(document.querySelectorAll(".vivense-nav-item")).find(item => {
                const link = item.querySelector(".vivense-nav-link");
                if (!link) return false;
                const href = link.getAttribute("href") || "";
                return (href.includes(`c=${catSlug}`) || href.includes(`c=${product.category}`)) && !href.includes("sub=");
            });
        }
        if (matchedItem) {
            matchedItem.classList.add("active");
        }
    }

    currentDetailProduct = product;
    currentModuleState.productBasePrice = product.price;
    currentModuleState.mainUnitPrice = product.price;
    currentModuleState.extraUnitPrice = Math.round(product.price * 0.18);
    currentModuleState.mainQty = 1;
    currentModuleState.extraQty = 0;

    const isFav = wishlist.has(product.id);
    const discountRate = (product.id % 4 === 0) ? 20 : (product.id % 3 === 0) ? 15 : (product.id % 2 === 0) ? 10 : 15;
    const discountClass = discountRate === 15 ? 'purple' : discountRate === 10 ? 'orange' : discountRate === 20 ? 'red' : 'green';
    const originalPrice = Math.round(product.price * (1 + discountRate / 100));
    const isLiving = product.category === 'living' || (product.subcategory && product.subcategory.includes('sofa'));
    const isDining = product.category === 'dining' || (product.subcategory && product.subcategory.includes('table'));
    const modules = getCategoryModuleConfig(product);
    currentModuleState.modules = modules.map(m => ({ ...m }));

    // Delivery calculation (15-20 days forward)
    const delDate = new Date();
    delDate.setDate(delDate.getDate() + 14);
    const monthsTr = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    const formattedDeliveryDate = `${delDate.getDate()} ${monthsTr[delDate.getMonth()]}`;

    const detailGrid = document.getElementById("detailGrid");
    if (detailGrid) {
        detailGrid.innerHTML = `
            <!-- Left Column: Gallery & Options -->
            <div class="product-gallery-box vgallery-modern-container">
                <!-- Vertical Thumbnail Column on Left -->
                <div class="vgallery-side-thumbs" id="gallerySideThumbs">
                    <button class="vthumb-scroll-btn up" onclick="scrollThumbs(-1)" aria-label="Yukarı"><i class="fa-solid fa-chevron-up"></i></button>
                    <div class="vthumb-list-track" id="galleryThumbStrip">
                        ${gallery.map((gImg, idx) => `
                            <div class="vthumb-item ${idx === 0 ? 'active' : ''}" onclick="goToSlide(${idx})">
                                <img src="${gImg}" alt="Thumbnail ${idx + 1}" onerror="this.onerror=null; this.src='assets/zumrut_main.jpg';">
                            </div>
                        `).join('')}
                    </div>
                    <button class="vthumb-scroll-btn down" onclick="scrollThumbs(1)" aria-label="Aşağı"><i class="fa-solid fa-chevron-down"></i></button>
                </div>

                <!-- Main Viewport Carousel -->
                <div class="gallery-carousel-wrapper vgallery-main-view">
                    <div class="gallery-carousel-track" id="galleryCarouselTrack">
                        ${gallery.map((gImg, idx) => `
                            <div class="gallery-slide" data-index="${idx}" onclick="handleSlideClick(event, ${idx})" title="Fotoğrafı Büyüt">
                                <img src="${gImg}" alt="${product.title} - Görsel ${idx + 1}" class="gallery-slide-img" onerror="this.onerror=null; this.src='assets/zumrut_main.jpg';">
                            </div>
                        `).join('')}
                    </div>

                    <!-- Top-Left Circle Sticker Badge -->
                    <div class="vcard-circle-sticker ${discountClass}">
                        <span class="vcs-sub">SEPETTE</span>
                        <strong class="vcs-pct">%${discountRate}</strong>
                        <span class="vcs-sub">İNDİRİM</span>
                    </div>

                    <!-- Top-Right Wishlist Heart Button -->
                    <button class="card-heart-btn ${isFav ? 'active' : ''}" data-id="${product.id}" title="Favorilere Ekle" aria-label="Favorilere Ekle" onclick="toggleDetailWishlist(${product.id})">
                        <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
                    </button>

                    <!-- Carousel Side Nav Arrows -->
                    <button class="vgallery-arrow-btn prev" onclick="prevSlide()" aria-label="Önceki Görsel"><i class="fa-solid fa-chevron-left"></i></button>
                    <button class="vgallery-arrow-btn next" onclick="nextSlide()" aria-label="Sonraki Görsel"><i class="fa-solid fa-chevron-right"></i></button>

                    <!-- Counter pill -->
                    <div class="gallery-counter-pill">
                        <span id="currentSlideNum">1</span> / ${gallery.length}
                    </div>

                    <!-- Bottom Dot Indicators (Mobile & Tablet) -->
                    <div class="gallery-dots-strip" id="galleryDotsStrip">
                        ${gallery.map((_, idx) => `
                            <span class="gallery-dot ${idx === 0 ? 'active' : ''}" onclick="goToSlide(${idx})"></span>
                        `).join('')}
                    </div>
                </div>

                <!-- Left Column Below Gallery: Product Title, Badges & Quick Perks -->
                <div class="vdetail-left-bottom">
                    <h1 class="vdetail-product-title">${product.title.toUpperCase()} <span class="vcode-text">(MBL-${String(product.id).padStart(3,'0')})</span></h1>
                    
                    <!-- Meta Tags & Video Button Row (Matching Photo 2) -->
                    <div class="vdetail-meta-row">
                        <div class="vdetail-tags-group">
                            <span class="vtag-collection">mobelmor collection</span>
                            <span class="vtag-rating"><i class="fa-solid fa-star"></i> Yüksek Puanlı</span>
                            <span class="vtag-custom">Siparişe Özel Üretim</span>
                        </div>
                        ${(product.videoUrl || product.youtubeUrl) ? `
                        <button type="button" class="vdetail-video-btn" onclick="openYouTubeVideoModal('${encodeURIComponent(product.videoUrl || product.youtubeUrl)}')" title="Ürün Tanıtım Videosunu İzle">
                            <span class="vvideo-play-icon"><i class="fa-solid fa-play"></i></span>
                            <span>VİDEO İZLE</span>
                        </button>
                        ` : ''}
                    </div>

                    <!-- Quick Perks & Action Rows (Matching Photo 2) -->
                    <div class="vdetail-quick-actions-list">
                        <div class="vquick-action-item">
                            <i class="fa-regular fa-clock vqa-icon-time"></i>
                            <span>Hızlı Teslimat: <strong>${formattedDeliveryDate} Günü Yolda</strong></span>
                        </div>
                        <a href="#modulePriceSection" class="vquick-action-item is-link" onclick="document.getElementById('modulePriceSection')?.scrollIntoView({behavior:'smooth'}); event.preventDefault();">
                            <i class="fa-solid fa-couch vqa-icon-couch"></i>
                            <span>Takım İçeriğini Değiştir</span>
                            <i class="fa-solid fa-chevron-right vqa-arrow"></i>
                        </a>
                        <a href="kumas-kartelasi.html" class="vquick-action-item is-link">
                            <i class="fa-solid fa-swatchbook vqa-icon-fabric"></i>
                            <span>Kumaşını Değiştir</span>
                            <i class="fa-solid fa-chevron-right vqa-arrow"></i>
                        </a>
                        <div class="vquick-action-item">
                            <i class="fa-solid fa-check vqa-icon-check"></i>
                            <span>Ücretsiz Teslimat ve Kurulum</span>
                        </div>
                    </div>

                    <div class="vdetail-options-card">
                        <h4 class="voptions-heading">${isDining ? 'Masa & Takım Seçenekleri' : isLiving ? 'Ölçü & Modül Seçenekleri' : 'Koleksiyon Seçenekleri'}</h4>
                        <div class="voptions-grid">
                            <div class="voption-card active" onclick="selectOption(this, 0)">
                                <div class="vopt-img-wrap">
                                    <img src="${gallery[0]}" alt="Tam Takım">
                                </div>
                                <div class="vopt-info">
                                    <span class="vopt-name">${isLiving ? "3'lü + 3'lü + Berjer (Tam Takım)" : isDining ? "Masa + Konsol + Sandalye" : "Standart Tam Takım"}</span>
                                    <span class="vopt-price">${formatPrice(product.price)}</span>
                                </div>
                            </div>
                            <div class="voption-card" onclick="selectOption(this, 1)">
                                <div class="vopt-img-wrap">
                                    <img src="${gallery[1] || gallery[0]}" alt="Kompakt Takım">
                                </div>
                                <div class="vopt-info">
                                    <span class="vopt-name">${isLiving ? "3'lü + Berjer (Kompakt)" : isDining ? "Masa + Sandalye (Minimal)" : "Kompakt Takım"}</span>
                                    <span class="vopt-price">${formatPrice(isLiving ? Math.round(product.price * 0.61) : Math.round(product.price * 0.64))}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Column: Sticky Smart Buy Box -->
            <div class="product-info-box vsmart-buy-box">
                <!-- Top Price Block -->
                <div class="vbuy-pricing-section">
                    <div class="vbuy-original-price">${formatPrice(originalPrice)}</div>
                    <div class="vbuy-discount-tag">Sepette %${discountRate} İndirim!</div>
                    <div class="vbuy-sepet-price" id="topMainPriceDisplay">
                        ${formatPrice(product.price)} <span class="vbuy-info-icon" title="KDV Dahil, Sepette İndirimli Fiyattır"><i class="fa-regular fa-circle-question"></i></span>
                    </div>
                </div>

                <!-- Set Content Breakdown (Takım İçeriği) -->
                <div class="vset-breakdown-card">
                    <div class="vset-header">
                        <span class="vset-title">Takım İçeriği</span>
                        <a href="#modulePriceSection" class="vset-change-link" onclick="document.getElementById('modulePriceSection')?.scrollIntoView({behavior:'smooth'}); event.preventDefault();">Değiştir / Özelleştir</a>
                    </div>
                    <div class="vset-items-list" id="vsetItemsList">
                        ${modules.map(m => `
                            <div class="vset-item-row">
                                <span class="vset-item-name">${m.label}</span>
                                <span class="vset-item-calc">${m.qty} x ${formatPrice(m.price)}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="vset-total-row">
                        <span>Toplam</span>
                        <strong id="vsetTotalPrice">${formatPrice(product.price)}</strong>
                    </div>
                    <div class="vset-tooltip-callout">
                        <i class="fa-solid fa-lightbulb"></i>
                        <span>Bu takımın içeriğini dilediğiniz gibi değiştirebilirsiniz.</span>
                    </div>
                </div>

                <!-- Interactive Fabric & Color Studio Card -->
                <div class="vfabric-studio-card" id="fabricStudioCard">
                    <div class="vfabric-studio-header">
                        <div class="vfabric-title-group">
                            <span class="vfabric-main-title"><i class="fa-solid fa-swatchbook"></i> Kumaş & Renk Stüdyosu</span>
                            <span class="vfabric-free-badge" id="vfabricHeaderBadge">Baz Fiyat (0 TL)</span>
                        </div>
                        <span class="vfabric-sub-text">Dilediğiniz kumaş dokusu ve rengini seçerek anında önizleyin.</span>
                    </div>

                    <!-- 1. Fabric Type Selector Pills -->
                    <div class="vfabric-types-wrap">
                        <span class="vfabric-section-label">1. Kumaş Dokusu:</span>
                        <div class="vfabric-type-pills">
                            ${FABRIC_COLLECTIONS.map(fc => `
                                <button type="button" class="vfabric-pill-btn ${fc.id === currentFabricState.fabricId ? 'active' : ''}" onclick="selectFabricCollection('${fc.id}')" title="${fc.desc}">
                                    <span class="vfp-name">${fc.name}</span>
                                    <span class="vfp-badge">${fc.badge}</span>
                                </button>
                            `).join('')}
                        </div>
                    </div>

                    <!-- 2. Color Swatches for selected Fabric Collection -->
                    <div class="vfabric-colors-wrap">
                        <div class="vfabric-color-header">
                            <span class="vfabric-section-label">2. Renginizi Seçin:</span>
                            <span class="vfabric-active-color-name" id="vfabricActiveColorLabel">${currentFabricState.colorName} (${currentFabricState.colorCode})</span>
                        </div>
                        <div class="vfabric-swatches-grid" id="vfabricSwatchesGrid">
                            ${renderFabricSwatchesHtml(currentFabricState.fabricId)}
                        </div>
                    </div>

                    <!-- 3. Macro Texture Zoom Lens & Sample Request -->
                    <div class="vfabric-preview-card">
                        <div class="vfabric-macro-lens" onclick="openFabricZoomModal()" style="cursor: pointer;" title="Kumaş Dokusunu Büyütmek İçin Tıklayın">
                            <div class="vfabric-lens-circle" id="vfabricLensCircle" style="background-image: url('${currentFabricState.colorImage}'); background-size: cover; background-position: center;">
                                <div class="vfabric-lens-pattern" id="vfabricLensPattern"></div>
                                <span class="vfabric-lens-mag" title="Doku Büyüteci"><i class="fa-solid fa-magnifying-glass-plus"></i></span>
                            </div>
                            <div class="vfabric-lens-info">
                                <strong id="vfabricSelectedTitle">${currentFabricState.fabricName} • ${currentFabricState.colorName}</strong>
                                <span id="vfabricSelectedDesc">Leke tutmaz, silinebilir 1. sınıf dokuma.</span>
                                <div class="vfabric-verified-tag"><i class="fa-solid fa-magnifying-glass-plus" style="color:#6b21a8;"></i> Dokuyu Büyütmek İçin Tıklayın</div>
                            </div>
                        </div>
                        <a href="https://wa.me/905300000000?text=Merhaba,%20Mobelmor.com'dan%20${encodeURIComponent(product.title)}%20ürünü%20için%20ücretsiz%20kumaş%20kartelası%20talep%20etmek%20istiyorum." target="_blank" class="vfabric-sample-cta-btn" id="vfabricSampleLink" title="Evinizde ışık altında denemeniz için ücretsiz numune gönderiyoruz.">
                            <i class="fa-solid fa-truck-fast"></i>
                            <span>Adresime Ücretsiz Kumaş Numunesi İste</span>
                        </a>
                    </div>
                </div>

                <!-- Primary Buy Button -->
                <button class="vbuy-primary-btn interactive-btn" id="topDetailAddToCartBtn">
                    <i class="fa-solid fa-bag-shopping"></i> SEPETE EKLE
                </button>

                <!-- Financing & Credit Card Info Box -->
                <div class="vcredit-info-box" onclick="window.openInstallmentAccordion()" style="cursor: pointer;" title="Tüm Taksit ve Ödeme Seçeneklerini İncele">
                    <div class="vcredit-row">
                        <i class="fa-solid fa-credit-card"></i>
                        <div>
                            <strong>${formatPrice(Math.round(product.price / 6))}/ay x 6 Ay Taksit</strong>
                            <p>Tüm kredi kartlarına peşin fiyatına vade farksız taksit imkanı.</p>
                            <a href="javascript:void(0)" onclick="window.openInstallmentAccordion(); event.stopPropagation();" class="vcredit-link">Taksit Seçenekleri &gt;</a>
                        </div>
                    </div>
                </div>

                <!-- Delivery & Service Guarantees -->
                <div class="vtrust-perks-box">
                    <div class="vtrust-item">
                        <i class="fa-solid fa-check vtrust-check"></i>
                        <span>✓ Ücretsiz Teslimat ve Profesyonel Kurulum</span>
                    </div>
                    <div class="vtrust-item">
                        <i class="fa-solid fa-bolt vtrust-bolt"></i>
                        <span>⚡ Hızlı Teslimat: <strong>${formattedDeliveryDate}</strong> Günü Yolda</span>
                    </div>
                    <div class="vtrust-item">
                        <i class="fa-solid fa-shield-halved vtrust-shield"></i>
                        <span>🛡️ 2 Yıl Resmi İnegöl Üretici Garantisi</span>
                    </div>
                </div>

                <!-- Showroom & WhatsApp Inquiry -->
                <div class="vshowroom-inquiry-row">
                    <a href="https://wa.me/905300000000?text=${encodeURIComponent(product.title + ' hakkında detaylı bilgi almak istiyorum.')}" target="_blank" class="vconsultant-btn whatsapp interactive-btn">
                        <i class="fa-brands fa-whatsapp"></i> Satış Danışmanı ile WhatsApp'ta Görüş
                    </a>
                </div>
            </div>
        `;
    }

    setupGalleryCarousel();
    renderModulePriceSection(product);
    renderSpecsAndGeneralInfo(product);
    renderRelatedProducts(product);

    // Create & Inject Floating Sticky Buy Bar (for Mobile & Continuous Scroll Access)
    let stickyBar = document.getElementById('mobileStickyBuyBar');
    if (!stickyBar) {
        stickyBar = document.createElement('div');
        stickyBar.id = 'mobileStickyBuyBar';
        stickyBar.className = 'mobile-sticky-buy-bar';
        document.body.appendChild(stickyBar);
    }
    stickyBar.innerHTML = `
        <div class="sticky-buy-price-wrap">
            <span class="sticky-buy-sub">Sepette İndirimli</span>
            <strong class="sticky-buy-price" id="stickyBottomPrice">${formatPrice(product.price)}</strong>
        </div>
        <div class="sticky-buy-actions">
            <a href="https://wa.me/905300000000?text=${encodeURIComponent(product.title + ' hakkında detaylı bilgi almak istiyorum.')}" target="_blank" class="sticky-buy-wa-btn" title="Satış Danışmanı ile Görüş">
                <i class="fa-brands fa-whatsapp"></i>
            </a>
            <button class="sticky-buy-btn interactive-btn" id="stickyAddToCartBtn">
                <i class="fa-solid fa-bag-shopping"></i> SEPETE EKLE
            </button>
        </div>
    `;

    // Real-Time Background Cloud Sync (Guarantees Mobile Phone fetches video URL instantly from Supabase)
    if (!window._cloudDetailSynced) {
        window._cloudDetailSynced = true;
        fetch(`https://kzbqqollfqatrauacjhj.supabase.co/rest/v1/products?id=eq.${product.id}&select=*`, {
            headers: {
                'apikey': 'sb_publishable_7cMrt7S85Iza4y7H01FghA_Le91PIhS',
                'Authorization': 'Bearer sb_publishable_7cMrt7S85Iza4y7H01FghA_Le91PIhS'
            }
        }).then(r => r.json()).then(rows => {
            if (rows && rows.length > 0) {
                const cp = rows[0];
                let vUrl = cp.video_url || cp.videoUrl || '';
                if (!vUrl && cp.material && cp.material.includes('||META:')) {
                    const match = cp.material.match(/\|\|META:(\{.*?\})\|\|/);
                    if (match && match[1]) {
                        try {
                            const parsed = JSON.parse(match[1]);
                            if (parsed.videoUrl || parsed.youtubeUrl) vUrl = parsed.videoUrl || parsed.youtubeUrl;
                        } catch(e) {}
                    }
                }
                if (!vUrl && cp.material && cp.material.includes('||VIDEO:')) {
                    const m = cp.material.match(/\|\|VIDEO:([^|]+)\|\|/);
                    if (m && m[1]) vUrl = m[1];
                }
                if (vUrl && (!product.videoUrl || product.videoUrl !== vUrl)) {
                    product.videoUrl = vUrl;
                    product.youtubeUrl = vUrl;
                    
                    // Update/Inject meta row video button under title
                    const metaRow = document.querySelector('.vdetail-meta-row');
                    if (metaRow && !document.querySelector('.vdetail-video-btn')) {
                        const metaBtn = document.createElement('button');
                        metaBtn.type = 'button';
                        metaBtn.className = 'vdetail-video-btn';
                        metaBtn.onclick = () => window.openYouTubeVideoModal(vUrl);
                        metaBtn.title = 'Ürün Tanıtım Videosunu İzle';
                        metaBtn.innerHTML = `<span class="vvideo-play-icon"><i class="fa-solid fa-play"></i></span><span>VİDEO İZLE</span>`;
                        metaRow.appendChild(metaBtn);
                    }
                }
            }
        }).catch(e => console.log('Detail real-time sync error:', e));
    }

    document.getElementById("topDetailAddToCartBtn")?.addEventListener("click", () => {
        addToCart(product.id, 1);
    });

    document.getElementById("stickyAddToCartBtn")?.addEventListener("click", () => {
        addToCart(product.id, 1);
    });

    // Render Dimension Specs, Features, Installments & Related Products
    renderSpecsAndGeneralInfo(product);
    renderRelatedProducts(product);
};

const getCategoryModuleConfig = (product) => {
    const isSet = product.productType === 'Set' || (product.title && product.title.toLowerCase().includes('takım')) || (product.badges && product.badges.some(b => b.toLowerCase().includes('takım')));
    const cat = product.category || '';
    const sub = product.subcategory || '';

    // 1. If explicit components array is provided on product object
    if (product.components && product.components.length > 0) {
        const count = product.components.length;
        let weights = [];
        if (count === 2) weights = [0.70, 0.30];
        else if (count === 3) weights = [0.39, 0.39, 0.22];
        else if (count === 4) weights = [0.42, 0.30, 0.16, 0.12];
        else weights = product.components.map(() => 1 / count);

        let allocated = 0;
        return product.components.map((compName, idx) => {
            let price;
            if (idx === count - 1) {
                price = product.price - allocated;
            } else {
                price = Math.round(product.price * weights[idx]);
                allocated += price;
            }
            return {
                id: 'comp_' + idx,
                label: compName,
                price: price,
                qty: 1
            };
        });
    }

    // 2. Living Room (Oturma Odası)
    if (cat === 'living' || sub.includes('sofa')) {
        if (isSet) {
            const sofa1Price = Math.round(product.price * 0.39);
            const sofa2Price = Math.round(product.price * 0.39);
            const berjerPrice = product.price - (sofa1Price + sofa2Price); // 22%
            return [
                { id: 'sofa1',  label: "3'lü Koltuk (1. Adet)", price: sofa1Price, qty: 1 },
                { id: 'sofa2',  label: "3'lü Koltuk (2. Adet)", price: sofa2Price, qty: 1 },
                { id: 'berjer', label: "Berjer / Tekli Koltuk",  price: berjerPrice, qty: 1 }
            ];
        } else {
            const berjerAddon = Math.round(product.price * 0.42);
            return [
                { id: 'main',   label: product.title,              price: product.price, qty: 1 },
                { id: 'berjer', label: "Ekstra Berjer (Opsiyonel)", price: berjerAddon,   qty: 0 }
            ];
        }
    }

    // 3. Dining Room (Yemek Odası)
    if (cat === 'dining' || sub.includes('table') || sub.includes('dining')) {
        if (isSet) {
            const tablePrice = Math.round(product.price * 0.40);
            const consolePrice = Math.round(product.price * 0.36);
            const chairSetPrice = product.price - (tablePrice + consolePrice); // 24%
            return [
                { id: 'table',   label: "Yemek Masası (Açılır)",    price: tablePrice,     qty: 1 },
                { id: 'console', label: "Konsol & Ayna",            price: consolePrice,   qty: 1 },
                { id: 'chairs',  label: "Sandalye Seti (4 Adet)",   price: chairSetPrice,  qty: 1 }
            ];
        } else {
            const chairAddon = Math.round(product.price * 0.18);
            return [
                { id: 'main',   label: product.title,                   price: product.price, qty: 1 },
                { id: 'chairs', label: "Ekstra Sandalye (2 Adet Set)", price: chairAddon,   qty: 0 }
            ];
        }
    }

    // 4. Bedroom (Yatak Odası)
    if (cat === 'bedroom' || sub.includes('bed') || sub.includes('wardrobe')) {
        if (isSet) {
            const wardrobePrice = Math.round(product.price * 0.42);
            const bedPrice = Math.round(product.price * 0.30);
            const dresserPrice = Math.round(product.price * 0.16);
            const nightstandPrice = product.price - (wardrobePrice + bedPrice + dresserPrice); // 12%
            return [
                { id: 'wardrobe',   label: "Gardırop (6 Kapaklı / Sürgülü)", price: wardrobePrice,   qty: 1 },
                { id: 'bed',        label: "Karyola & Başlık Seti",          price: bedPrice,        qty: 1 },
                { id: 'dresser',    label: "Şifonyer & Ayna",                price: dresserPrice,    qty: 1 },
                { id: 'nightstand', label: "Komodin Seti (2 Adet)",          price: nightstandPrice, qty: 1 }
            ];
        } else {
            const nightstandAddon = Math.round(product.price * 0.15);
            return [
                { id: 'main',       label: product.title,             price: product.price,    qty: 1 },
                { id: 'nightstand', label: "Ekstra Komodin (1 Adet)", price: nightstandAddon,  qty: 0 }
            ];
        }
    }

    // 5. Default single product
    return [
        { id: 'main', label: product.title, price: product.price, qty: 1 }
    ];
};

// Global Sync for Calculated Prices across UI
window.syncCalculatedPrices = (grandTotal) => {
    const fmt = formatPrice(grandTotal);
    const grandEl = document.getElementById('moduleGrandTotal');
    const topEl = document.getElementById('topMainPriceDisplay');
    const vsetTotalEl = document.getElementById('vsetTotalPrice');
    const vsetListEl = document.getElementById('vsetItemsList');
    const stickyBottomEl = document.getElementById('stickyBottomPrice');

    if (grandEl) grandEl.textContent = fmt;
    if (stickyBottomEl) stickyBottomEl.textContent = fmt;
    if (topEl) {
        topEl.innerHTML = `${fmt} <span class="vbuy-info-icon" title="KDV Dahil, Sepette İndirimli Fiyattır"><i class="fa-regular fa-circle-question"></i></span>`;
    }
    if (vsetTotalEl) vsetTotalEl.textContent = fmt;
    if (vsetListEl && currentModuleState.modules) {
        vsetListEl.innerHTML = currentModuleState.modules.filter(m => m.qty > 0).map(m => `
            <div class="vset-item-row">
                <span class="vset-item-name">${m.label}</span>
                <span class="vset-item-calc">${m.qty} x ${formatPrice(m.price)}</span>
            </div>
        `).join('');
    }

    // Update Installment Matrix dynamically
    const installmentContainer = document.getElementById("installmentTableContainer");
    if (installmentContainer) {
        const p = grandTotal;
        installmentContainer.innerHTML = `
            <div style="margin-bottom:12px; font-weight:700; color:#0f172a; font-size:0.9rem;">
                <i class="fa-solid fa-shield-halved" style="color:#16a34a;"></i> Peşin Fiyatına 6 Taksit İmkanı (Vade Farksız)
            </div>
            <div style="overflow-x:auto;">
                <table class="installment-matrix-table" style="width:100%; border-collapse:collapse; text-align:center; font-size:0.86rem;">
                    <thead>
                        <tr style="background:#f8fafc; color:#475569; border-bottom:2px solid #e2e8f0;">
                            <th style="padding:10px 14px; text-align:left;">Taksit Sayısı</th>
                            <th style="padding:10px 14px;">Aylık Ödeme</th>
                            <th style="padding:10px 14px;">Toplam Tutar</th>
                            <th style="padding:10px 14px;">Vade Farkı</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom:1px solid #f1f5f9;">
                            <td style="padding:10px 14px; text-align:left; font-weight:700; color:#1e293b;">Tek Çekim (Peşin)</td>
                            <td style="padding:10px 14px; font-weight:800; color:#0f172a;">${formatPrice(p)}</td>
                            <td style="padding:10px 14px; font-weight:700;">${formatPrice(p)}</td>
                            <td style="padding:10px 14px; color:#16a34a; font-weight:700;">Ücretsiz (0 TL)</td>
                        </tr>
                        <tr style="border-bottom:1px solid #f1f5f9; background:#faf5ff;">
                            <td style="padding:10px 14px; text-align:left; font-weight:700; color:#6b21a8;">3 Taksit (Peşin Fiyatına)</td>
                            <td style="padding:10px 14px; font-weight:800; color:#6b21a8;">${formatPrice(Math.round(p / 3))} x 3</td>
                            <td style="padding:10px 14px; font-weight:700; color:#6b21a8;">${formatPrice(p)}</td>
                            <td style="padding:10px 14px; color:#16a34a; font-weight:700;">Vade Farksız</td>
                        </tr>
                        <tr style="border-bottom:1px solid #f1f5f9; background:#faf5ff;">
                            <td style="padding:10px 14px; text-align:left; font-weight:700; color:#6b21a8;">6 Taksit (Peşin Fiyatına)</td>
                            <td style="padding:10px 14px; font-weight:800; color:#6b21a8;">${formatPrice(Math.round(p / 6))} x 6</td>
                            <td style="padding:10px 14px; font-weight:700; color:#6b21a8;">${formatPrice(p)}</td>
                            <td style="padding:10px 14px; color:#16a34a; font-weight:700;">Vade Farksız</td>
                        </tr>
                        <tr style="border-bottom:1px solid #f1f5f9;">
                            <td style="padding:10px 14px; text-align:left; font-weight:600; color:#475569;">9 Taksit</td>
                            <td style="padding:10px 14px; font-weight:700; color:#334155;">${formatPrice(Math.round((p * 1.08) / 9))} x 9</td>
                            <td style="padding:10px 14px; font-weight:600;">${formatPrice(Math.round(p * 1.08))}</td>
                            <td style="padding:10px 14px; color:#64748b;">+%8</td>
                        </tr>
                        <tr style="border-bottom:1px solid #f1f5f9;">
                            <td style="padding:10px 14px; text-align:left; font-weight:600; color:#475569;">12 Taksit</td>
                            <td style="padding:10px 14px; font-weight:700; color:#334155;">${formatPrice(Math.round((p * 1.14) / 12))} x 12</td>
                            <td style="padding:10px 14px; font-weight:600;">${formatPrice(Math.round(p * 1.14))}</td>
                            <td style="padding:10px 14px; color:#64748b;">+%14</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div style="margin-top:14px; padding:12px 16px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; display:flex; align-items:center; gap:10px; font-size:0.85rem; color:#166534;">
                <i class="fa-solid fa-money-bill-transfer" style="font-size:1.1rem;"></i>
                <span><strong>Havale / EFT İndirimi:</strong> Havale ile yapılan ödemelerde ekstra <strong>%5 Anında İndirim</strong> uygulanır!</span>
            </div>
        `;
    }
};

window.selectOption = (cardEl, optIdx) => {
    document.querySelectorAll('.voption-card').forEach(c => c.classList.remove('active'));
    cardEl.classList.add('active');
    if (!currentModuleState.modules) return;

    if (optIdx === 0) {
        // Option 0: Tam Takım (Default 1 of each set piece)
        currentModuleState.modules.forEach(m => {
            if (m.id.startsWith('sofa') || m.id === 'berjer' || m.id === 'table' || m.id === 'console' || m.id === 'chairs' || m.id === 'wardrobe' || m.id === 'bed' || m.id === 'dresser' || m.id === 'nightstand' || m.id.startsWith('comp_') || m.id === 'main') {
                m.qty = 1;
            }
        });
    } else if (optIdx === 1) {
        // Option 1: Kompakt Takım (e.g. 1 sofa + 1 berjer or minimal set)
        currentModuleState.modules.forEach(m => {
            if (m.id === 'sofa1') m.qty = 1;
            else if (m.id === 'sofa2') m.qty = 0; // Remove 2nd 3'lü
            else if (m.id === 'berjer') m.qty = 1;
            else if (m.id === 'chairs') m.qty = 1;
            else if (m.id === 'console') m.qty = 0;
            else if (m.id === 'nightstand') m.qty = 0;
            else if (m.id === 'dresser') m.qty = 0;
            else if (m.id === 'main') m.qty = 1;
        });
    }

    currentModuleState.modules.forEach(m => {
        const qtyEl = document.getElementById(`mod_${m.id}_qty`);
        const subEl = document.getElementById(`mod_${m.id}_sub`);
        if (qtyEl) qtyEl.textContent = m.qty;
        if (subEl) subEl.textContent = formatPrice(m.price * m.qty);
    });

    recalculateDetailProductTotal();
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
            <td style="font-weight:800;color:#0f172a;" id="mod_${m.id}_sub">${formatPrice(m.price * m.qty)}</td>
        </tr>
    `).join('');

    const initialBaseTotal = modules.reduce((s, m) => s + m.price * m.qty, 0);
    const fabricDiff = (currentFabricState && currentFabricState.priceDiff) ? currentFabricState.priceDiff : 0;
    const initialTotal = initialBaseTotal + fabricDiff;

    container.innerHTML = `
        <div class="module-header-title">
            <span class="module-header-text">MODÜL & FİYAT HESAPLAYICI</span>
            <span class="module-live-tag"><i class="fa-solid fa-bolt"></i> CANLI HESAPLAMA</span>
        </div>
        <div class="module-table-wrapper">
            <table class="module-table">
                <thead><tr><th>Modül</th><th>Birim Fiyat</th><th>Adet</th><th>Ara Toplam</th></tr></thead>
                <tbody>${rows}</tbody>
            </table>
            <div class="module-total-side">
                <span style="font-size:0.80rem;font-weight:700;color:#64748b;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.04em;">Hesaplanan Toplam:</span>
                <span class="grand-total-val" id="moduleGrandTotal">${formatPrice(initialTotal)}</span>
            </div>
        </div>
    `;
};

// DYNAMIC LIVE CALCULATOR
window.updateModuleQty = (id, delta) => {
    const mod = currentModuleState.modules?.find(m => m.id === id);
    if (!mod) return;
    mod.qty = Math.max(0, mod.qty + delta);

    const qtyEl = document.getElementById(`mod_${id}_qty`);
    const subEl = document.getElementById(`mod_${id}_sub`);
    if (qtyEl) qtyEl.textContent = mod.qty;
    if (subEl) subEl.textContent = formatPrice(mod.price * mod.qty);

    recalculateDetailProductTotal();
};

const renderSpecsAndGeneralInfo = (product) => {
    const dimsTable = document.getElementById('moduleDimsTable');
    const featureTable = document.getElementById('featureSpecsTable');
    const cat = product.category || 'living';

    // 1. Ölçü Tablosu (Dimensions Table)
    if (dimsTable) {
        let dimRows = [];
        if (product.specs && typeof product.specs === 'object') {
            dimRows = Object.entries(product.specs).filter(([k, v]) => k && v && k.trim() && v.trim() && k !== 'Modül' && k !== 'Genişlik' && v !== 'Genişlik');
        }
        
        if (dimRows.length === 0 && product.dimensions && typeof product.dimensions === 'string' && product.dimensions.trim()) {
            dimRows = product.dimensions.split(';').map(d => {
                const parts = d.split(':');
                if (parts.length === 2) return [parts[0].trim(), parts[1].trim()];
                return ['Genel Ölçü', d.trim()];
            }).filter(([k, v]) => k && v);
        }

        // Akıllı Kategori Varsayılan Ölçüleri (Eğer ürün ölçüsü boşsa daima şık ve net göster)
        if (dimRows.length === 0) {
            if (cat === 'living') {
                dimRows = [
                    ["3'lü Koltuk / Kanepe", "Genişlik: 230 cm | Derinlik: 95 cm | Yükseklik: 85 cm"],
                    ["Berjer / Tekli Koltuk", "Genişlik: 85 cm | Derinlik: 90 cm | Yükseklik: 95 cm"],
                    ["Oturum Yüksekliği", "45 cm (Ergonomik Konfor)"],
                    ["Yatak Konumu", "Açıldığında 180 x 120 cm"]
                ];
            } else if (cat === 'dining') {
                dimRows = [
                    ["Yemek Masası (Açılır)", "Genişlik: 180 - 220 cm | Derinlik: 90 cm | Yükseklik: 78 cm"],
                    ["Konsol & Ayna Bloğu", "Genişlik: 200 cm | Derinlik: 48 cm | Yükseklik: 82 cm"],
                    ["Sandalye (6 Adet)", "Genişlik: 50 cm | Derinlik: 55 cm | Yükseklik: 92 cm"],
                    ["Konsol Aynası", "Genişlik: 160 cm | Yükseklik: 75 cm"]
                ];
            } else {
                dimRows = [
                    ["Gardırop (6 Kapaklı / Sürgülü)", "Genişlik: 260 cm | Derinlik: 65 cm | Yükseklik: 220 cm"],
                    ["Karyola & Başlık Seti", "Genişlik: 180 cm | Derinlik: 215 cm | Yükseklik: 125 cm (160x200 yatak uyumlu)"],
                    ["Şifonyer & Makyaj Aynası", "Genişlik: 125 cm | Derinlik: 48 cm | Yükseklik: 85 cm"],
                    ["Komodin (2 Adet)", "Genişlik: 60 cm | Derinlik: 45 cm | Yükseklik: 52 cm"]
                ];
            }
        }

        dimsTable.innerHTML = '<tbody>' + dimRows.map(([k, v]) => 
            '<tr><td style="font-weight:700; color:#334155; width:45%; padding:9px 12px; border-bottom:1px solid #f1f5f9;">' + k + '</td><td style="color:#475569; padding:9px 12px; border-bottom:1px solid #f1f5f9;">' + v + (typeof v === 'string' && /^\d+$/.test(v.trim()) ? ' cm' : '') + '</td></tr>'
        ).join('') + '</tbody>';
    }

    // 2. Özellikler Tablosu (Features Table)
    if (featureTable) {
        const cleanMat = (product.material || '').replace(/\|\|META:[^|]*\|\|/g, '').replace(/\|\|VIDEO:[^|]*\|\|/g, '').trim();
        const features = [
            ['İskelet Yapısı', product.skeleton || '1. Sınıf Fırınlanmış Masif Gürgen Ağacı & Çelik Bağlantı'],
            ['Sünger & Oturum', product.sponge || '32 DNS Soft HR Yüksek Yoğunluklu Çökmeye Dayanıklı Sünger'],
            ['Kumaş / Doku', product.fabric || cleanMat || 'İthal Leke Tutmaz, Silinebilir ve Nefes Alan Lüks Doku'],
            ['Garanti Kapsamı', product.warranty || '2 Yıl Mobelmor Üretici ve İskelet Garantisi'],
            ['Kategori & Tür', (cat === 'living' ? 'Oturma Odası' : cat === 'dining' ? 'Yemek Odası' : 'Yatak Odası') + ' / ' + (product.productType || 'Koleksiyon Seti')],
            ['Üretim / Menşei', 'Orijinal İnegöl Üretimi (%100 Yerli Usta Zanaatı)'],
            ['Teslimat & Montaj', 'Türkiye ve Avrupa Geneli Sigortalı Nakliye & Ücretsiz Kurulum']
        ];

        featureTable.innerHTML = '<tbody>' + features.map(([k, v]) => 
            '<tr><th style="font-weight:700; color:#334155; width:38%; padding:9px 12px; border-bottom:1px solid #f1f5f9; text-align:left; background:#f8fafc;">' + k + '</th><td style="color:#475569; padding:9px 12px; border-bottom:1px solid #f1f5f9;">' + v + '</td></tr>'
        ).join('') + '</tbody>';
    }

    // Dynamic Installment Matrix Table for Accordion (6 Bank Tabbed Matrix)
    const installmentContainer = document.getElementById("installmentTableContainer");
    if (installmentContainer) {
        const p = product.price;
        if (window.MobelmorCheckout && typeof window.MobelmorCheckout.renderBankInstallmentTable === 'function') {
            window.MobelmorCheckout.renderBankInstallmentTable(installmentContainer, p);
        } else {
            installmentContainer.innerHTML = `
                <div style="margin-bottom:12px; font-weight:700; color:#0f172a; font-size:0.9rem;">
                    <i class="fa-solid fa-shield-halved" style="color:#16a34a;"></i> Peşin Fiyatına 6 Taksit İmkanı (Vade Farksız)
                </div>
                <div style="overflow-x:auto;">
                    <table class="installment-matrix-table" style="width:100%; border-collapse:collapse; text-align:center; font-size:0.86rem;">
                        <thead>
                            <tr style="background:#f8fafc; color:#475569; border-bottom:2px solid #e2e8f0;">
                                <th style="padding:10px 14px; text-align:left;">Taksit Sayısı</th>
                                <th style="padding:10px 14px;">Aylık Ödeme</th>
                                <th style="padding:10px 14px;">Toplam Tutar</th>
                                <th style="padding:10px 14px;">Vade Farkı</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="border-bottom:1px solid #f1f5f9;">
                                <td style="padding:10px 14px; text-align:left; font-weight:700; color:#1e293b;">Tek Çekim (Peşin)</td>
                                <td style="padding:10px 14px; font-weight:800; color:#0f172a;">${formatPrice(p)}</td>
                                <td style="padding:10px 14px; font-weight:700;">${formatPrice(p)}</td>
                                <td style="padding:10px 14px; color:#16a34a; font-weight:700;">Ücretsiz (0 TL)</td>
                            </tr>
                            <tr style="border-bottom:1px solid #f1f5f9; background:#faf5ff;">
                                <td style="padding:10px 14px; text-align:left; font-weight:700; color:#6b21a8;">3 Taksit (Peşin Fiyatına)</td>
                                <td style="padding:10px 14px; font-weight:800; color:#6b21a8;">${formatPrice(Math.round(p / 3))} x 3</td>
                                <td style="padding:10px 14px; font-weight:700; color:#6b21a8;">${formatPrice(p)}</td>
                                <td style="padding:10px 14px; color:#16a34a; font-weight:700;">Vade Farksız</td>
                            </tr>
                            <tr style="border-bottom:1px solid #f1f5f9; background:#faf5ff;">
                                <td style="padding:10px 14px; text-align:left; font-weight:700; color:#6b21a8;">6 Taksit (Peşin Fiyatına)</td>
                                <td style="padding:10px 14px; font-weight:800; color:#6b21a8;">${formatPrice(Math.round(p / 6))} x 6</td>
                                <td style="padding:10px 14px; font-weight:700; color:#6b21a8;">${formatPrice(p)}</td>
                                <td style="padding:10px 14px; color:#16a34a; font-weight:700;">Vade Farksız</td>
                            </tr>
                            <tr style="border-bottom:1px solid #f1f5f9;">
                                <td style="padding:10px 14px; text-align:left; font-weight:600; color:#475569;">9 Taksit</td>
                                <td style="padding:10px 14px; font-weight:700; color:#334155;">${formatPrice(Math.round((p * 1.08) / 9))} x 9</td>
                                <td style="padding:10px 14px; font-weight:600;">${formatPrice(Math.round(p * 1.08))}</td>
                                <td style="padding:10px 14px; color:#64748b;">+%8</td>
                            </tr>
                            <tr style="border-bottom:1px solid #f1f5f9;">
                                <td style="padding:10px 14px; text-align:left; font-weight:600; color:#475569;">12 Taksit</td>
                                <td style="padding:10px 14px; font-weight:700; color:#334155;">${formatPrice(Math.round((p * 1.14) / 12))} x 12</td>
                                <td style="padding:10px 14px; font-weight:600;">${formatPrice(Math.round(p * 1.14))}</td>
                                <td style="padding:10px 14px; color:#64748b;">+%14</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style="margin-top:14px; padding:12px 16px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; display:flex; align-items:center; gap:10px; font-size:0.85rem; color:#166534;">
                    <i class="fa-solid fa-money-bill-transfer" style="font-size:1.1rem;"></i>
                    <span><strong>Havale / EFT İndirimi:</strong> Havale ile yapılan ödemelerde ekstra <strong>%5 Anında İndirim</strong> uygulanır!</span>
                </div>
            `;
        }
    }
};

// Global Detail Accordion Toggle
window.toggleDetailAccordion = (btn) => {
    const item = btn.closest('.detail-accordion-item');
    if (!item) return;
    item.classList.toggle('open');
};

window.openInstallmentAccordion = () => {
    const accItem = document.getElementById('accItemInstallment');
    if (accItem) {
        accItem.classList.add('open');
        accItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
        const originalPrice = item.originalPrice || Math.round(item.price * 1.15);
        const discountRate = item.originalPrice ? Math.round((1 - item.price / item.originalPrice) * 100) : 15;
        const discountClass = discountRate >= 20 ? 'red' : discountRate >= 15 ? 'purple' : discountRate >= 10 ? 'orange' : 'green';
        const isBestPrice = (item.id % 3 === 1);
        const isLiving = item.category === 'living' || (item.subcategory && item.subcategory.includes('sofa'));
        const isDining = item.category === 'dining' || (item.subcategory && item.subcategory.includes('table'));

        return `
        <article class="product-card" onclick="window.location.href='${itemUrl}'" style="cursor: pointer;">
            <div class="card-image-box">
                <img src="${item.image}" alt="${item.title}" class="card-img" loading="lazy">
                
                <!-- Top-Left Circle Sticker Badge -->
                <div class="vcard-circle-sticker ${discountClass}">
                    <span class="vcs-sub">SEPETTE</span>
                    <strong class="vcs-pct">%${discountRate}</strong>
                    <span class="vcs-sub">İNDİRİM</span>
                </div>
            </div>
            <div class="card-details">
                <!-- Badges Row -->
                <div class="vcard-badges-row">
                    ${isBestPrice 
                        ? `<span class="vbadge-pill pill-best-price"><i class="fa-solid fa-tag"></i> EN İYİ FİYAT</span>` 
                        : `<span class="vbadge-pill pill-collection">mobelmor collection</span>`
                    }
                    <span class="vbadge-pill pill-campaign"><i class="fa-solid fa-bullhorn"></i> Kampanyalı Ürün</span>
                </div>

                <!-- Title -->
                <h3 class="card-product-title">${item.title}</h3>

                <!-- Pricing Block -->
                <div class="vcard-pricing-block">
                    <span class="vcard-old-price">${formatPrice(originalPrice)}</span>
                    <div class="vcard-main-price">${formatPrice(item.price)}</div>
                    <div class="vcard-sepette-price"><i class="fa-solid fa-bolt"></i> Sepette: <strong>${formatPrice(item.price)}</strong></div>
                </div>

                <!-- Feature Delivery & Variant Pills -->
                <div class="vcard-features-pills">
                    <span class="vfeat-pill"><i class="fa-solid fa-truck"></i> Ücretsiz Teslimat</span>
                    <span class="vfeat-pill teal"><i class="fa-solid fa-bolt"></i> Hızlı Teslimat</span>
                    ${isLiving ? `<span class="vfeat-pill"><i class="fa-solid fa-couch"></i> Kumaşı değiştirilebilir</span>` : ''}
                    ${isDining ? `<span class="vfeat-pill interactive"><i class="fa-solid fa-plus"></i> Masa Ölçüsü</span>` : ''}
                </div>
            </div>
        </article>
    `}).join('');
};

const addToCart = (productId, qty = 1) => {
    const item = PRODUCTS.find(p => p.id === productId);
    if (!item) return;

    const basePrice = (currentModuleState && currentModuleState.modules && currentModuleState.modules.length > 0)
        ? currentModuleState.modules.reduce((s, m) => s + (m.price * m.qty), 0)
        : item.price;
    const fabricDiff = (currentFabricState && currentFabricState.priceDiff) ? currentFabricState.priceDiff : 0;
    const finalUnitPrice = basePrice + fabricDiff;

    const fabricInfo = currentFabricState ? {
        selectedFabric: currentFabricState.fabricName,
        selectedColor: currentFabricState.colorName,
        colorHex: currentFabricState.colorHex,
        fabricPriceDiff: fabricDiff
    } : {};

    const existing = cart.find(c => c.id === productId && c.selectedColor === fabricInfo.selectedColor && c.price === finalUnitPrice);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ ...item, price: finalUnitPrice, basePrice: item.price, qty, ...fabricInfo });
    }
    saveCart();
    updateBadges();
    const fabricToastText = fabricInfo.selectedFabric ? ` — ${fabricInfo.selectedFabric}, ${fabricInfo.selectedColor}${fabricDiff > 0 ? ` (+${formatPrice(fabricDiff)})` : ''}` : '';
    showToast(`<strong>${item.title}</strong>${fabricToastText}${qty > 1 ? ` (${qty} Adet)` : ''} sepete eklendi!`, "fa-bag-shopping");
    renderCart();

    // Otomatik olarak sepeti aç
    document.getElementById("cartDrawer")?.classList.add("active");
    document.getElementById("cartOverlay")?.classList.add("active");
    document.body.classList.add("cart-open");
    lockBodyScroll();
};

const updateBadges = () => {
    const cartBadge = document.getElementById("cartBadge");
    if (cartBadge) cartBadge.textContent = cart.reduce((sum, c) => sum + c.qty, 0);
};

const openCheckoutModal = () => {
    const overlay = document.getElementById("checkoutOverlay");
    if (!overlay) return;
    document.getElementById("cartDrawer")?.classList.remove("active");
    document.getElementById("cartOverlay")?.classList.remove("active");
    document.body.classList.remove("cart-open");
    overlay.classList.add("active");
    document.body.classList.add("modal-open");
};

let appliedCouponDiscount = 0;
let appliedCouponCode = "";

window.applyCartCoupon = () => {
    const input = document.getElementById("cartCouponInput");
    if (!input) return;
    const code = input.value.trim().toUpperCase();
    if (!code) {
        if (typeof showToast === 'function') showToast("Lütfen bir kupon kodu giriniz.", "fa-circle-exclamation");
        return;
    }

    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    
    // Validate via StoreService database engine
    if (window.StoreService && typeof window.StoreService.validateCoupon === 'function') {
        const result = window.StoreService.validateCoupon(code, subtotal);
        if (result.valid) {
            appliedCouponDiscount = result.discount;
            appliedCouponCode = result.coupon.code;
            renderCart();
            if (typeof showToast === 'function') showToast(result.message, "fa-tag");
            return;
        } else {
            if (typeof showToast === 'function') showToast(result.message, "fa-circle-xmark");
            return;
        }
    }

    // Fallback
    if (code === "MOBELMOR500" || code === "HOSGELDIN" || code === "MOBELMOR") {
        appliedCouponDiscount = 500;
        appliedCouponCode = code;
        renderCart();
        if (typeof showToast === 'function') showToast("500 TL Kupon İndirimi Uygulandı!", "fa-tag");
    } else if (code === "YAZ1000") {
        appliedCouponDiscount = 1000;
        appliedCouponCode = code;
        renderCart();
        if (typeof showToast === 'function') showToast("1.000 TL Sezon Kupon İndirimi Uygulandı!", "fa-tag");
    } else {
        if (typeof showToast === 'function') showToast("Geçersiz veya süresi dolmuş kupon kodu.", "fa-circle-xmark");
    }
};

window.removeCartCoupon = () => {
    appliedCouponDiscount = 0;
    appliedCouponCode = "";
    renderCart();
    if (typeof showToast === 'function') {
        showToast("Kupon iptal edildi.", "fa-circle-info");
    }
};

window.togglePriceBreakdown = () => {
    const details = document.getElementById("tyPriceBreakdown");
    const arrow = document.getElementById("tyPriceArrow");
    if (!details) return;
    if (details.style.display === "none" || !details.style.display) {
        details.style.display = "flex";
        if (arrow) arrow.classList.add("open");
    } else {
        details.style.display = "none";
        if (arrow) arrow.classList.remove("open");
    }
};

window.togglePromoAccordion = () => {
    const content = document.getElementById("tyPromoContent");
    if (!content) return;
    content.style.display = content.style.display === "none" || !content.style.display ? "block" : "none";
};

const renderCart = () => {
    const drawer = document.getElementById("cartDrawer");
    const body = document.getElementById("cartBody");
    const footer = document.getElementById("cartFooter");
    if (!body || !footer) return;

    const totalQty = cart.reduce((sum, c) => sum + c.qty, 0);

    // 1. Trendyol Style Header (< Back Arrow, Centered Title, X Button)
    const headerEl = drawer ? drawer.querySelector(".cart-header") : null;
    if (headerEl) {
        headerEl.className = "ty-cart-header";
        headerEl.innerHTML = `
            <button type="button" class="ty-header-back-btn" onclick="document.getElementById('cartDrawer')?.classList.remove('active'); document.getElementById('cartOverlay')?.classList.remove('active'); document.body.classList.remove('cart-open'); unlockBodyScroll();" aria-label="Geri">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <h3 class="ty-header-title">Sepetim (${totalQty} Ürün)</h3>
            <button type="button" class="ty-header-back-btn" onclick="document.getElementById('cartDrawer')?.classList.remove('active'); document.getElementById('cartOverlay')?.classList.remove('active'); document.body.classList.remove('cart-open'); unlockBodyScroll();" aria-label="Kapat">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;
    }

    if (cart.length === 0) {
        body.className = "ty-cart-body";
        body.innerHTML = `
            <div style="padding:60px 20px; text-align:center; display:flex; flex-direction:column; align-items:center; background:#ffffff; border-radius:12px; margin-top:10px;">
                <div style="width:64px; height:64px; border-radius:50%; background:#fff7ed; color:#ea580c; display:flex; align-items:center; justify-content:center; margin-bottom:16px; font-size:1.6rem; border:1px solid #ffedd5;">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <h4 style="font-size:1.1rem; font-weight:800; color:#0f172a; margin:0 0 6px 0;">Sepetiniz Boş</h4>
                <p style="font-size:0.84rem; color:#64748b; margin:0 0 20px 0; max-width:240px; line-height:1.4;">Eviniz için mobilya modellerimizi keşfetmeye başlayın.</p>
                <a href="kategori.html?c=all" class="btn interactive-btn" style="background:#f97316; color:#ffffff; padding:12px 24px; font-weight:800; font-size:0.9rem; border-radius:10px; text-decoration:none;" onclick="document.getElementById('cartDrawer')?.classList.remove('active'); document.getElementById('cartOverlay')?.classList.remove('active'); document.body.classList.remove('cart-open');">
                    Alışverişe Başla
                </a>
            </div>
        `;
        footer.innerHTML = "";
        appliedCouponDiscount = 0;
        appliedCouponCode = "";
        return;
    }

    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const finalTotal = Math.max(0, subtotal - appliedCouponDiscount);

    // 2. Trendyol Style Body
    body.className = "ty-cart-body";
    body.innerHTML = `
        <!-- Top Promo Bar -->
        <div class="ty-promo-bar" onclick="togglePromoAccordion()">
            <div style="display:flex; align-items:center; gap:8px;">
                <span>🎉</span>
                <span>${appliedCouponDiscount > 0 ? `Kupon Uygulandı (${appliedCouponCode} -${formatPrice(appliedCouponDiscount)})` : 'Sepetine Özel İndirim Kuponu!'}</span>
            </div>
            <i class="fa-solid fa-chevron-down" style="font-size:0.75rem;"></i>
        </div>

        <div class="ty-promo-content" id="tyPromoContent" style="${appliedCouponDiscount > 0 ? 'display:block;' : 'display:none;'}">
            ${appliedCouponDiscount > 0 ? `
                <div style="display:flex; align-items:center; justify-content:space-between; background:#f0fdf4; border:1px solid #bbf7d0; padding:8px 12px; border-radius:8px;">
                    <span style="font-size:0.82rem; color:#15803d; font-weight:800;"><i class="fa-solid fa-tag"></i> ${appliedCouponCode} (-${formatPrice(appliedCouponDiscount)})</span>
                    <button type="button" onclick="removeCartCoupon()" style="background:#fee2e2; border:1px solid #fca5a5; color:#dc2626; font-size:0.72rem; font-weight:800; padding:3px 8px; border-radius:6px; cursor:pointer;">İptal Et</button>
                </div>
            ` : `
                <div class="ty-promo-input-group">
                    <input type="text" id="cartCouponInput" class="ty-promo-input" placeholder="KUPON KODU (örn: MOBELMOR500)" value="${appliedCouponCode}">
                    <button type="button" class="ty-promo-btn" onclick="applyCartCoupon()">Uygula</button>
                </div>
            `}
        </div>

        <!-- Store & Items Card -->
        <div class="ty-store-card">
            <div class="ty-store-header">
                <input type="checkbox" class="ty-store-checkbox" checked disabled>
                <span>Mobelmor İnegöl Fabrika</span>
                <span class="ty-store-rating">9.9</span>
                <i class="fa-solid fa-chevron-right" style="font-size:0.7rem; color:#94a3b8; margin-left:auto;"></i>
            </div>
            <div class="ty-free-shipping-strip">
                <i class="fa-solid fa-truck-fast"></i>
                <span>Kargo Bedava &amp; Ücretsiz Daireye Kurulum!</span>
            </div>

            <!-- Product Rows -->
            ${cart.map((item, idx) => {
                const popularPeople = (12 + (item.id * 3)) % 40 + 8;
                return `
                <div class="ty-item-row">
                    <input type="checkbox" class="ty-item-checkbox" checked disabled>
                    <div class="ty-item-img-wrap">
                        <img src="${item.image}" alt="${item.title}" class="ty-item-img">
                    </div>
                    <div class="ty-item-details">
                        <div class="ty-item-top">
                            <h4 class="ty-item-title" title="${item.title}">${item.title}</h4>
                            <button type="button" class="ty-item-trash" onclick="removeCartItem(${item.id})" title="Ürünü Sil" aria-label="Sil">
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </div>

                        <span class="ty-item-social-pill">
                            <i class="fa-solid fa-cart-shopping" style="font-size:0.65rem;"></i> ${popularPeople} kişinin sepetinde
                        </span>

                        <span class="ty-item-delivery-info">
                            <i class="fa-solid fa-truck"></i> Hızlı Teslimat: 3-5 gün içinde kargoda
                        </span>

                        ${item.selectedFabric ? `
                            <div style="font-size:0.72rem; color:#64748b; font-weight:600; display:flex; align-items:center; gap:4px;">
                                <span style="width:7px; height:7px; border-radius:50%; background-color:${item.colorHex || '#6b21a8'}; display:inline-block;"></span>
                                <span>${item.selectedFabric}: ${item.selectedColor}</span>
                            </div>
                        ` : ''}

                        <div class="ty-item-foot">
                            <div class="ty-qty-pill">
                                <button type="button" class="ty-qty-btn" onclick="changeQty(${item.id}, -1)" aria-label="Azalt">-</button>
                                <span class="ty-qty-val">${item.qty}</span>
                                <button type="button" class="ty-qty-btn" onclick="changeQty(${item.id}, 1)" aria-label="Artır">+</button>
                            </div>
                            <span class="ty-item-price">${formatPrice(item.price * item.qty)}</span>
                        </div>
                    </div>
                </div>

                <div class="ty-warranty-bar">
                    <div style="display:flex; align-items:center; gap:6px;">
                        <i class="fa-solid fa-shield-halved" style="color:#f59e0b;"></i>
                        <span>2 Yıl Mobelmor Üretici Garantisi Dahildir</span>
                    </div>
                    <i class="fa-solid fa-chevron-right" style="font-size:0.7rem;"></i>
                </div>
            `}).join('')}
        </div>
    `;

    // 3. Trendyol Sticky Bottom Bar
    footer.className = "ty-cart-footer";
    footer.innerHTML = `
        <div class="ty-breakdown-details" id="tyPriceBreakdown">
            <div style="display:flex; justify-content:space-between;">
                <span>Ürünler Toplamı:</span>
                <span>${formatPrice(subtotal)}</span>
            </div>
            <div style="display:flex; justify-content:space-between; color:#16a34a; font-weight:700;">
                <span>Kargo &amp; Montaj:</span>
                <span>Bedava (0 TL)</span>
            </div>
            ${appliedCouponDiscount > 0 ? `
                <div style="display:flex; justify-content:space-between; color:#ea580c; font-weight:800;">
                    <span>Kupon İndirimi (${appliedCouponCode}):</span>
                    <span>-${formatPrice(appliedCouponDiscount)}</span>
                </div>
            ` : ''}
        </div>

        <div class="ty-footer-bar-row">
            <div class="ty-footer-price-box" onclick="togglePriceBreakdown()" title="Fiyat Detayını Gör">
                <i class="fa-solid fa-chevron-up ty-footer-arrow" id="tyPriceArrow"></i>
                <span class="ty-footer-total">${formatPrice(finalTotal)}</span>
            </div>
            <button type="button" class="ty-checkout-btn interactive-btn" id="openCheckoutBtn">
                <span>Sepeti Onayla</span>
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    `;

    document.getElementById("openCheckoutBtn")?.addEventListener("click", () => {
        document.getElementById("cartDrawer")?.classList.remove("active");
        document.getElementById("cartOverlay")?.classList.remove("active");
        document.body.classList.remove("cart-open");
        const totalEl = document.getElementById("checkoutTotal");
        if (totalEl) totalEl.textContent = formatPrice(finalTotal);
        if (typeof openCheckoutModal === 'function') {
            openCheckoutModal();
        } else {
            document.getElementById("checkoutOverlay")?.classList.add("active");
            document.body.classList.add("modal-open");
        }
    });
};

window.changeQty = (id, delta) => {
    const item = cart.find(c => c.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
    saveCart();
    updateBadges();
    renderCart();
};

window.addToCart = addToCart;

// --- ADVANCED TRENDYOL-STYLE 2-COLUMN LIVE SEARCH & POPULAR PRODUCTS ENGINE ---
const initLiveSearchEngine = () => {
    const searchConfigs = [
        { input: document.getElementById("searchInput"), wrap: document.querySelector(".desktop-search-wrap"), isDesktop: true },
        { input: document.getElementById("mobileSearchInput"), wrap: document.querySelector(".mobile-search-row"), isDesktop: false }
    ];

    const keywordTaxonomy = [
        "koltuk", "koltuk takımı", "köşe koltuk", "berjer koltuk", "tekli koltuk", "yataklı koltuk", "chester koltuk takımı", "ahşap koltuk", "l koltuk", "bohem koltuk",
        "yemek masası", "ahşap yemek masası", "yemek odası takımı", "açılır yemek masası", "sandalye", "ahşap sandalye", "yemek masası seti",
        "yatak", "yatak odası takımı", "karyola", "karyola ve yatak", "çift kişilik yatak", "bazalı yatak", "gardırop", "sürgülü gardırop", "şifonyer", "komodin",
        "tv ünitesi", "duvar ünitesi", "tv alt konsol", "kitaplıklı tv ünitesi", "orta sehpa", "yan sehpa", "zigon sehpa", "dresuar", "çalışma masası", "kitaplık"
    ];

    const escapeRegExp = (str) => {
        return (str || "").replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    const highlightText = (text, q) => {
        if (!q || !text) return text || "";
        const words = q.trim().split(/\s+/).filter(Boolean);
        if (words.length === 0) return text;
        const pattern = words.map(escapeRegExp).join("|");
        const regex = new RegExp(`(${pattern})`, "gi");
        return text.replace(regex, "<strong>$1</strong>");
    };

    const getPopularProducts = () => {
        const sourceList = (typeof window.StoreService !== 'undefined') ? window.StoreService.getProducts() : PRODUCTS;
        const featuredIds = [1, 17, 36, 54];
        let selected = sourceList.filter(p => featuredIds.includes(p.id));
        if (selected.length < 4) {
            selected = sourceList.slice(0, 4);
        }
        return selected;
    };

    searchConfigs.forEach(({ input, wrap, isDesktop }) => {
        if (!input || !wrap) return;

        let dropdown = wrap.querySelector(".live-search-dropdown");
        if (!dropdown) {
            dropdown = document.createElement("div");
            dropdown.className = "live-search-dropdown";
            wrap.appendChild(dropdown);
        }

        const closeDropdown = () => {
            dropdown.classList.remove("active");
            dropdown.innerHTML = "";
            const searchBox = wrap.querySelector(".search-box") || input.closest(".search-box");
            if (searchBox) searchBox.classList.remove("has-dropdown-open");
        };

        const executeSearchRedirect = (val) => {
            const query = (val || "").trim();
            if (!query) return;
            closeDropdown();
            window.location.href = `kategori.html?c=tum-koleksiyon&q=${encodeURIComponent(query)}`;
        };

        const renderSearchResults = (query) => {
            const q = (query || "").trim().toLowerCase();
            if (!q) {
                closeDropdown();
                return;
            }

            const searchBox = wrap.querySelector(".search-box") || input.closest(".search-box");
            if (searchBox) searchBox.classList.add("has-dropdown-open");

            const sourceList = (typeof window.StoreService !== 'undefined') ? window.StoreService.getProducts() : PRODUCTS;
            const popularProducts = getPopularProducts();

            // Matching keyword suggestions
            let matchedKeywords = keywordTaxonomy.filter(k => k.includes(q));
            sourceList.forEach(p => {
                const t = (p.title || "").toLowerCase();
                if (t.includes(q) && !matchedKeywords.includes(t)) {
                    matchedKeywords.push(t);
                }
            });
            matchedKeywords = matchedKeywords.slice(0, 8);

            let leftColHtml = "";
            if (matchedKeywords.length > 0) {
                leftColHtml = matchedKeywords.map(kw => `
                    <div class="trendyol-suggest-item" data-query="${kw}">
                        <div class="trendyol-suggest-left">
                            <i class="fa-solid fa-magnifying-glass trendyol-suggest-icon"></i>
                            <span class="trendyol-suggest-text">${highlightText(kw, q)}</span>
                        </div>
                    </div>
                `).join('');
            } else {
                leftColHtml = `
                    <div class="trendyol-suggest-item" data-query="${q}">
                        <div class="trendyol-suggest-left">
                            <i class="fa-solid fa-magnifying-glass trendyol-suggest-icon"></i>
                            <span class="trendyol-suggest-text">"<strong>${q}</strong>" ile ara</span>
                        </div>
                    </div>
                `;
            }

            // Store shortcut
            leftColHtml += `
                <div class="trendyol-suggest-item" data-url="kategori.html?c=tum-koleksiyon">
                    <div class="trendyol-suggest-left">
                        <div class="trendyol-store-logo">MM</div>
                        <span class="trendyol-suggest-text" style="font-weight:600;">MOBELMOR COLLECTION</span>
                    </div>
                    <span class="trendyol-store-tag">Mağaza</span>
                </div>
            `;

            // Matching / popular products for query
            let queryProducts = sourceList.filter(p => (p.title || "").toLowerCase().includes(q) || (p.category || "").toLowerCase().includes(q)).slice(0, 4);
            if (queryProducts.length === 0) {
                queryProducts = popularProducts;
            }

            const badges = ["Sepette %10 İndirim", "Ücretsiz Teslimat", "İnegöl Masif", "Günün Fırsatı"];
            const ratings = ["4.9 (142)", "4.8 (98)", "5.0 (64)", "4.9 (115)"];

            const popularCardsHtml = queryProducts.map((p, idx) => {
                const pSlug = window.slugify ? window.slugify(p.title) : "";
                const prodUrl = `urun-detay.html?id=${p.id}${pSlug ? `&slug=${pSlug}` : ''}`;
                const prodImage = p.image || 'assets/zumrut_main.jpg';
                const badgeText = badges[idx % badges.length];
                const ratingText = ratings[idx % ratings.length];

                return `
                    <div class="trendyol-pop-card" data-url="${prodUrl}">
                        <img src="${prodImage}" alt="${p.title}" class="trendyol-pop-thumb" onerror="this.onerror=null; this.src='assets/zumrut_main.jpg';">
                        <div class="trendyol-pop-info">
                            <span class="trendyol-pop-badge">${badgeText}</span>
                            <h5 class="trendyol-pop-name">${p.title}</h5>
                            <div class="trendyol-pop-rating">
                                <i class="fa-solid fa-star"></i>
                                <span>${ratingText}</span>
                            </div>
                            <div class="trendyol-pop-bottom-row">
                                <span class="trendyol-pop-price">${formatPrice(p.price)}</span>
                            </div>
                        </div>
                        <button type="button" class="trendyol-pop-add-btn" data-add-id="${p.id}" title="Sepete Ekle" aria-label="Sepete Ekle">
                            <i class="fa-solid fa-cart-plus"></i>
                        </button>
                    </div>
                `;
            }).join('');

            dropdown.innerHTML = `
                <div class="trendyol-search-grid">
                    <div class="trendyol-suggest-col">
                        ${leftColHtml}
                    </div>
                    <div class="trendyol-popular-col">
                        <div class="trendyol-pop-title">
                            <span><i class="fa-solid fa-star" style="color:#f59e0b;"></i> Önerilen Ürünler</span>
                        </div>
                        <div class="trendyol-pop-list">
                            ${popularCardsHtml}
                        </div>
                    </div>
                </div>
            `;

            dropdown.classList.add("active");

            // Click on suggestion row
            dropdown.querySelectorAll(".trendyol-suggest-item").forEach(item => {
                item.addEventListener("click", (e) => {
                    e.stopPropagation();
                    const targetUrl = item.getAttribute("data-url");
                    const term = item.getAttribute("data-query");
                    if (targetUrl) {
                        window.location.href = targetUrl;
                    } else if (term) {
                        input.value = term;
                        executeSearchRedirect(term);
                    }
                });
            });

            // Click on popular product card
            dropdown.querySelectorAll(".trendyol-pop-card").forEach(card => {
                card.addEventListener("click", (e) => {
                    if (e.target.closest(".trendyol-pop-add-btn")) return;
                    const url = card.getAttribute("data-url");
                    if (url) window.location.href = url;
                });
            });

            // Click on quick add-to-cart button
            dropdown.querySelectorAll(".trendyol-pop-add-btn").forEach(btn => {
                btn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    const pid = parseInt(btn.getAttribute("data-add-id"));
                    if (pid) {
                        addToCart(pid, 1);
                        btn.innerHTML = '<i class="fa-solid fa-check" style="color:#16a34a;"></i>';
                        setTimeout(() => {
                            btn.innerHTML = '<i class="fa-solid fa-cart-plus"></i>';
                        }, 1200);
                    }
                });
            });
        };

        let clearBtn = wrap.querySelector(".clear-btn");
        if (!clearBtn) {
            clearBtn = document.createElement("button");
            clearBtn.type = "button";
            clearBtn.className = "clear-btn";
            clearBtn.style.display = "none";
            clearBtn.setAttribute("aria-label", "Temizle");
            clearBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            const searchBox = wrap.querySelector(".search-box") || input.parentElement;
            if (searchBox) searchBox.appendChild(clearBtn);
        }

        const searchIcon = wrap.querySelector(".search-icon");

        const updateClearBtnState = (val) => {
            const hasText = !!(val && val.trim().length > 0);
            if (clearBtn) clearBtn.style.display = hasText ? "inline-flex" : "none";
            if (searchIcon) searchIcon.style.display = hasText ? "none" : "block";
        };

        let debounceTimer = null;
        input.addEventListener("input", (e) => {
            const val = e.target.value;
            updateClearBtnState(val);

            clearTimeout(debounceTimer);
            if (!val.trim()) {
                closeDropdown();
                return;
            }

            debounceTimer = setTimeout(() => {
                renderSearchResults(val);
            }, 80);
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                executeSearchRedirect(input.value);
            } else if (e.key === "Escape") {
                closeDropdown();
            }
        });

        input.addEventListener("focus", () => {
            updateClearBtnState(input.value);
            if (input.value.trim()) {
                renderSearchResults(input.value);
            }
        });

        if (searchIcon) {
            searchIcon.addEventListener("click", () => {
                if (input.value.trim().length > 0) {
                    executeSearchRedirect(input.value);
                } else {
                    input.focus();
                }
            });
        }

        if (clearBtn) {
            clearBtn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                input.value = "";
                updateClearBtnState("");
                closeDropdown();
                input.focus();
            });
        }
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".desktop-search-wrap") && !e.target.closest(".mobile-search-row") && !e.target.closest(".live-search-dropdown")) {
            document.querySelectorAll(".live-search-dropdown").forEach(d => {
                d.classList.remove("active");
            });
            document.querySelectorAll(".search-box").forEach(sb => {
                sb.classList.remove("has-dropdown-open");
            });
        }
    });
};

document.addEventListener("DOMContentLoaded", () => {
    createLightbox();
    renderProductDetail();
    updateBadges();
    renderCart();
    initLiveSearchEngine();

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
        document.body.classList.add("cart-open");
        lockBodyScroll();
    });

    document.getElementById("closeCartBtn")?.addEventListener("click", () => {
        document.getElementById("cartDrawer")?.classList.remove("active");
        document.getElementById("cartOverlay")?.classList.remove("active");
        document.body.classList.remove("cart-open");
        unlockBodyScroll();
    });

    document.getElementById("cartOverlay")?.addEventListener("click", () => {
        document.getElementById("cartDrawer")?.classList.remove("active");
        document.getElementById("cartOverlay")?.classList.remove("active");
        document.body.classList.remove("cart-open");
        unlockBodyScroll();
    });

    document.getElementById("wishlistBtn")?.addEventListener("click", () => {
        renderWishlist();
        document.getElementById("wishlistDrawer")?.classList.add("active");
        document.getElementById("wishlistOverlay")?.classList.add("active");
        document.body.classList.add("wishlist-open");
        lockBodyScroll();
    });

    document.getElementById("closeWishlistBtn")?.addEventListener("click", () => {
        document.getElementById("wishlistDrawer")?.classList.remove("active");
        document.getElementById("wishlistOverlay")?.classList.remove("active");
        document.body.classList.remove("wishlist-open");
        unlockBodyScroll();
    });

    document.getElementById("wishlistOverlay")?.addEventListener("click", () => {
        document.getElementById("wishlistDrawer")?.classList.remove("active");
        document.getElementById("wishlistOverlay")?.classList.remove("active");
        document.body.classList.remove("wishlist-open");
        unlockBodyScroll();
    });

    // Prevent background touch scrolling on overlays and fixed drawer sections
    const preventScrollTouch = (e) => {
        if (e.cancelable) e.preventDefault();
    };
    document.getElementById("cartOverlay")?.addEventListener("touchmove", preventScrollTouch, { passive: false });
    document.getElementById("wishlistOverlay")?.addEventListener("touchmove", preventScrollTouch, { passive: false });
    document.getElementById("checkoutOverlay")?.addEventListener("touchmove", (e) => {
        if (e.target.id === "checkoutOverlay") preventScrollTouch(e);
    }, { passive: false });

    document.querySelector("#cartDrawer .cart-header")?.addEventListener("touchmove", preventScrollTouch, { passive: false });
    document.querySelector("#cartDrawer .cart-footer")?.addEventListener("touchmove", preventScrollTouch, { passive: false });
    document.querySelector("#wishlistDrawer .cart-header")?.addEventListener("touchmove", preventScrollTouch, { passive: false });
    document.querySelector("#wishlistDrawer .cart-footer")?.addEventListener("touchmove", preventScrollTouch, { passive: false });

    trapDrawerScroll(document.getElementById("cartBody"));
    trapDrawerScroll(document.getElementById("wishlistBody"));

    const closeCheckout = () => {
        document.getElementById("checkoutOverlay")?.classList.remove("active");
        document.body.classList.remove("modal-open");
        unlockBodyScroll(true);
    };
    document.getElementById("closeCheckoutBtn")?.addEventListener("click", closeCheckout);
    document.getElementById("checkoutOverlay")?.addEventListener("click", (e) => {
        if (e.target.id === "checkoutOverlay") {
            closeCheckout();
        }
    });

    // ── Contract & KVKK Tab Switcher in Checkout Modal ──
    const btnContractMss = document.getElementById("btnContractMss");
    const btnContractKvkk = document.getElementById("btnContractKvkk");
    const contractContentBox = document.getElementById("contractContentBox");

    const mssHtml = `
        <div class="contract-clause">
            <div class="contract-clause-header">
                <span class="clause-badge">MADDE 1</span>
                <span class="clause-title">Taraflar</span>
            </div>
            <div class="contract-clause-body">
                <p><strong>Satıcı:</strong> Mobelmor İnegöl Mobilya San. ve Tic. Ltd. Şti.</p>
                <p><strong>Alıcı:</strong> Mobelmor.com üzerinden sipariş veren nihai tüketici.</p>
            </div>
        </div>
        <div class="contract-clause">
            <div class="contract-clause-header">
                <span class="clause-badge">MADDE 2</span>
                <span class="clause-title">Konu &amp; Kapsam</span>
            </div>
            <div class="contract-clause-body">
                <p>İşbu sözleşmenin konusu, ALICI'nın SATICI'ya ait www.mobelmor.com internet sitesinden siparişini verdiği mobilya ve ev dekorasyon ürünlerinin 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince satışı ve teslimidir.</p>
            </div>
        </div>
        <div class="contract-clause">
            <div class="contract-clause-header">
                <span class="clause-badge">MADDE 3</span>
                <span class="clause-title">Teslimat &amp; Montaj</span>
            </div>
            <div class="contract-clause-body">
                <p>Mobilya ürünleri, özel korumalı ambalajında sigortalı mobilya lojistik araçlarımızla ALICI'nın belirttiği teslimat adresine kata teslim ve ücretsiz profesyonel montaj hizmeti ile ulaştırılır.</p>
            </div>
        </div>
        <div class="contract-clause">
            <div class="contract-clause-header">
                <span class="clause-badge">MADDE 4</span>
                <span class="clause-title">Cayma Hakkı &amp; İade</span>
            </div>
            <div class="contract-clause-body">
                <p>ALICI, standart ürünlerde 14 gün içinde cayma hakkına sahiptir. Tüketicinin özel istekleri doğrultusunda özel ölçü üretilen veya özel kumaş/renk döşemesi yapılan ürünler, 6502 Sayılı Kanun Madde 15/b uyarınca cayma hakkı istisnası kapsamındadır.</p>
            </div>
        </div>
        <div class="contract-clause">
            <div class="contract-clause-header">
                <span class="clause-badge">MADDE 5</span>
                <span class="clause-title">Garanti</span>
            </div>
            <div class="contract-clause-body">
                <p>Tüm ürünlerimiz 2 Yıl Mobelmor Üretici ve İskelet Garantisi altındadır.</p>
            </div>
        </div>
    `;

    const kvkkHtml = `
        <div class="contract-clause">
            <div class="contract-clause-header">
                <span class="clause-badge">KVKK 1</span>
                <span class="clause-title">Veri Sorumlusu</span>
            </div>
            <div class="contract-clause-body">
                <p>6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında Mobelmor İnegöl Mobilya San. ve Tic. Ltd. Şti. veri sorumlusudur.</p>
            </div>
        </div>
        <div class="contract-clause">
            <div class="contract-clause-header">
                <span class="clause-badge">KVKK 2</span>
                <span class="clause-title">İşlenen Veriler ve Amaç</span>
            </div>
            <div class="contract-clause-body">
                <p>Sipariş sürecinde paylaştığınız Ad, Soyad, Telefon, E-posta ve Teslimat Adresi bilgileriniz; siparişin teyit edilmesi, özel mobilya üretim/döşeme planlaması, sigortalı nakliye ile adresinize teslimatın sağlanması ve faturalandırma amacıyla işlenmektedir.</p>
            </div>
        </div>
        <div class="contract-clause">
            <div class="contract-clause-header">
                <span class="clause-badge">KVKK 3</span>
                <span class="clause-title">Veri Aktarımı</span>
            </div>
            <div class="contract-clause-body">
                <p>Kişisel verileriniz yalnızca teslimatın gerçekleştirilebilmesi amacıyla yetkili mobilya lojistik ekiplerimiz ve yasal yükümlülükler çerçevesinde yetkili kamu kurumlarıyla paylaşılmaktadır. Üçüncü şahıslara veya reklam şirketlerine asla devredilmez.</p>
            </div>
        </div>
        <div class="contract-clause">
            <div class="contract-clause-header">
                <span class="clause-badge">KVKK 4</span>
                <span class="clause-title">Haklarınız</span>
            </div>
            <div class="contract-clause-body">
                <p>KVKK'nın 11. maddesi uyarınca verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini talep etme ve silinmesini isteme hakkına sahipsiniz.</p>
            </div>
        </div>
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

    // ── Unified Customer & Auth System ──
    const getCustomersList = () => {
        try {
            let list = JSON.parse(localStorage.getItem("mobelmor_customers") || "[]");
            if (!Array.isArray(list)) list = [];
            list = list.filter(c => c && (c.email || c.fullName || c.name) && !c.id?.startsWith("USR-"));
            localStorage.setItem("mobelmor_customers", JSON.stringify(list));
            return list;
        } catch {
            return [];
        }
    };

    const saveCustomersList = (list) => {
        try {
            localStorage.setItem("mobelmor_customers", JSON.stringify(list));
            localStorage.setItem("mobelmor_users", JSON.stringify(list));
        } catch (e) {
            console.error("Customer storage save error:", e);
        }
    };

    const getCurrentUser = () => {
        try {
            const userJson = localStorage.getItem("mobelmor_active_customer") || localStorage.getItem("mobelmor_current_user");
            if (!userJson) return null;
            const user = JSON.parse(userJson);
            if (!user || (!user.email && !user.name && !user.fullName) || (user.id && String(user.id).startsWith("USR-"))) {
                localStorage.removeItem("mobelmor_active_customer");
                localStorage.removeItem("mobelmor_current_user");
                return null;
            }
            return user;
        } catch {
            return null;
        }
    };

    window.openAuthModal = (view = "login", data = {}) => {
        let overlay = document.getElementById("authModalOverlay");
        if (!overlay) {
            overlay = document.createElement("div");
            overlay.id = "authModalOverlay";
            overlay.className = "modal-overlay";
            document.body.appendChild(overlay);
        }

        document.getElementById("userMenuDropdown")?.classList.remove("active");
        document.getElementById("orderTrackDropdown")?.classList.remove("active");

        let cardHtml = "";

        if (view === "register") {
            cardHtml = `
                <div class="auth-modal-card">
                    <button class="close-btn modal-close interactive-btn" onclick="closeAuthModal()" aria-label="Kapat"><i class="fa-solid fa-xmark"></i></button>
                    
                    <div class="auth-tabs-modern">
                        <button type="button" class="auth-tab-btn-modern" onclick="openAuthModal('login')">Giriş Yap</button>
                        <button type="button" class="auth-tab-btn-modern active">Üye Ol</button>
                    </div>

                    <form id="registerForm" style="display:flex; flex-direction:column; gap:12px;">
                        <input type="text" id="regName" class="auth-input-modern" placeholder="Adınız Soyadınız" required>
                        <input type="email" id="regEmail" class="auth-input-modern" placeholder="E-Posta Adresiniz" required>
                        <input type="tel" id="regPhone" class="auth-input-modern" placeholder="Telefon Numaranız" required>
                        <input type="password" id="regPassword" class="auth-input-modern" placeholder="Şifreniz (En az 6 karakter)" required>
                        <button type="submit" class="btn-auth-primary interactive-btn">
                            <i class="fa-solid fa-user-plus"></i> ÜCRETSİZ ÜYE OL
                        </button>
                    </form>
                </div>
            `;
        } else if (view === "forgot") {
            cardHtml = `
                <div class="auth-modal-card">
                    <button class="close-btn modal-close interactive-btn" onclick="closeAuthModal()" aria-label="Kapat"><i class="fa-solid fa-xmark"></i></button>
                    
                    <div style="margin-bottom:20px; text-align:center;">
                        <div style="width:48px; height:48px; border-radius:50%; background:#f3e8ff; color:#7c3aed; display:inline-flex; align-items:center; justify-content:center; font-size:1.3rem; margin-bottom:10px;">
                            <i class="fa-solid fa-key"></i>
                        </div>
                        <h3 style="font-size:1.25rem; font-weight:800; color:#18181b; margin:0 0 6px 0;">Şifremi Unuttum</h3>
                        <p style="font-size:0.86rem; color:#71717a; margin:0; line-height:1.4;">
                            Kayıtlı e-posta adresinizi giriniz. Şifrenizi yenilemeniz için 6 haneli doğrulama kodu iletilecektir.
                        </p>
                    </div>

                    <form id="forgotReqForm" style="display:flex; flex-direction:column; gap:14px;">
                        <input type="email" id="forgotEmail" class="auth-input-modern" placeholder="Kayıtlı E-Posta Adresiniz" required>
                        <button type="submit" class="btn-auth-primary interactive-btn">
                            <i class="fa-solid fa-paper-plane"></i> SIFIRLAMA KODU GÖNDER
                        </button>
                        <div style="text-align:center;">
                            <button type="button" class="auth-back-link" onclick="openAuthModal('login')">
                                <i class="fa-solid fa-arrow-left"></i> Giriş Yap'a Dön
                            </button>
                        </div>
                    </form>
                </div>
            `;
        } else if (view === "forgot_step2") {
            const resetEmail = data.email || "";
            cardHtml = `
                <div class="auth-modal-card">
                    <button class="close-btn modal-close interactive-btn" onclick="closeAuthModal()" aria-label="Kapat"><i class="fa-solid fa-xmark"></i></button>
                    
                    <div style="margin-bottom:18px; text-align:center;">
                        <div style="width:48px; height:48px; border-radius:50%; background:#f0fdf4; color:#16a34a; display:inline-flex; align-items:center; justify-content:center; font-size:1.3rem; margin-bottom:10px;">
                            <i class="fa-solid fa-shield-check"></i>
                        </div>
                        <h3 style="font-size:1.25rem; font-weight:800; color:#18181b; margin:0 0 6px 0;">Yeni Şifre Belirle</h3>
                        <p style="font-size:0.85rem; color:#71717a; margin:0; line-height:1.4;">
                            <strong style="color:#18181b;">${resetEmail}</strong> adresine iletilen 6 haneli kodu ve yeni şifrenizi giriniz.
                        </p>
                        ${data.code ? `
                            <div style="margin-top:10px; padding:8px 12px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; font-size:0.84rem; color:#15803d; font-weight:700;">
                                <i class="fa-solid fa-circle-check"></i> Doğrulama Kodunuz: ${data.code}
                            </div>
                        ` : ''}
                    </div>

                    <form id="forgotVerifyForm" style="display:flex; flex-direction:column; gap:12px;">
                        <input type="hidden" id="resetTargetEmail" value="${resetEmail}">
                        <input type="text" id="resetCode" class="auth-input-modern otp-code-input" placeholder="000000" maxlength="6" required>
                        <input type="password" id="resetNewPassword" class="auth-input-modern" placeholder="Yeni Şifreniz (En az 6 karakter)" required>
                        <button type="submit" class="btn-auth-primary interactive-btn">
                            <i class="fa-solid fa-check"></i> ŞİFREMİ GÜNCELLE &amp; GİRİŞ YAP
                        </button>
                        <div style="text-align:center;">
                            <button type="button" class="auth-back-link" onclick="openAuthModal('forgot')">
                                <i class="fa-solid fa-arrow-left"></i> E-Postayı Değiştir
                            </button>
                        </div>
                    </form>
                </div>
            `;
        } else if (view === "magic_otp") {
            cardHtml = `
                <div class="auth-modal-card">
                    <button class="close-btn modal-close interactive-btn" onclick="closeAuthModal()" aria-label="Kapat"><i class="fa-solid fa-xmark"></i></button>
                    
                    <div style="margin-bottom:20px; text-align:center;">
                        <div style="width:48px; height:48px; border-radius:50%; background:#f3e8ff; color:#7c3aed; display:inline-flex; align-items:center; justify-content:center; font-size:1.3rem; margin-bottom:10px;">
                            <i class="fa-solid fa-envelope-circle-check"></i>
                        </div>
                        <h3 style="font-size:1.25rem; font-weight:800; color:#18181b; margin:0 0 6px 0;">Şifresiz Hızlı Giriş</h3>
                        <p style="font-size:0.86rem; color:#71717a; margin:0; line-height:1.4;">
                            Şifre hatırlamanıza gerek yok! E-postanızı girin, size tek kullanımlık 6 haneli giriş kodu gönderelim.
                        </p>
                    </div>

                    <form id="magicOtpReqForm" style="display:flex; flex-direction:column; gap:14px;">
                        <input type="email" id="magicOtpEmail" class="auth-input-modern" placeholder="E-Posta Adresiniz" required>
                        <button type="submit" class="btn-auth-primary interactive-btn">
                            <i class="fa-solid fa-paper-plane"></i> GİRİŞ KODU GÖNDER
                        </button>
                        <div style="text-align:center;">
                            <button type="button" class="auth-back-link" onclick="openAuthModal('login')">
                                <i class="fa-solid fa-arrow-left"></i> Şifre ile Normal Giriş
                            </button>
                        </div>
                    </form>
                </div>
            `;
        } else if (view === "magic_otp_step2") {
            const loginEmail = data.email || "";
            cardHtml = `
                <div class="auth-modal-card">
                    <button class="close-btn modal-close interactive-btn" onclick="closeAuthModal()" aria-label="Kapat"><i class="fa-solid fa-xmark"></i></button>
                    
                    <div style="margin-bottom:18px; text-align:center;">
                        <div style="width:48px; height:48px; border-radius:50%; background:#f0fdf4; color:#16a34a; display:inline-flex; align-items:center; justify-content:center; font-size:1.3rem; margin-bottom:10px;">
                            <i class="fa-solid fa-envelope-open-text"></i>
                        </div>
                        <h3 style="font-size:1.25rem; font-weight:800; color:#18181b; margin:0 0 6px 0;">Giriş Kodunu Giriniz</h3>
                        <p style="font-size:0.85rem; color:#71717a; margin:0; line-height:1.4;">
                            <strong style="color:#18181b;">${loginEmail}</strong> adresinize 6 haneli tek kullanımlık kod iletildi.
                        </p>
                        ${data.code ? `
                            <div style="margin-top:10px; padding:8px 12px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; font-size:0.84rem; color:#15803d; font-weight:700;">
                                <i class="fa-solid fa-circle-check"></i> Giriş Kodunuz: ${data.code}
                            </div>
                        ` : ''}
                    </div>

                    <form id="magicOtpVerifyForm" style="display:flex; flex-direction:column; gap:14px;">
                        <input type="hidden" id="magicTargetEmail" value="${loginEmail}">
                        <input type="text" id="magicCode" class="auth-input-modern otp-code-input" placeholder="000000" maxlength="6" required>
                        <button type="submit" class="btn-auth-primary interactive-btn">
                            <i class="fa-solid fa-right-to-bracket"></i> ŞİFRESİZ GİRİŞ YAP
                        </button>
                        <div style="text-align:center;">
                            <button type="button" class="auth-back-link" onclick="openAuthModal('magic_otp')">
                                <i class="fa-solid fa-arrow-left"></i> Farklı E-Posta Kullan
                            </button>
                        </div>
                    </form>
                </div>
            `;
        } else {
            // Default: Standard Login
            cardHtml = `
                <div class="auth-modal-card">
                    <button class="close-btn modal-close interactive-btn" onclick="closeAuthModal()" aria-label="Kapat"><i class="fa-solid fa-xmark"></i></button>
                    
                    <div class="auth-tabs-modern">
                        <button type="button" class="auth-tab-btn-modern active">Giriş Yap</button>
                        <button type="button" class="auth-tab-btn-modern" onclick="openAuthModal('register')">Üye Ol</button>
                    </div>

                    <form id="loginForm" style="display:flex; flex-direction:column; gap:12px;">
                        <input type="email" id="loginEmail" class="auth-input-modern" placeholder="E-Posta Adresiniz" required>
                        <input type="password" id="loginPassword" class="auth-input-modern" placeholder="Şifreniz" required>
                        
                        <div class="auth-link-row">
                            <label class="auth-checkbox-wrap">
                                <input type="checkbox" id="rememberMe" checked>
                                <span>Beni Hatırla</span>
                            </label>
                            <a href="javascript:void(0)" onclick="openAuthModal('forgot')" class="auth-forgot-link">Şifremi Unuttum?</a>
                        </div>

                        <button type="submit" class="btn-auth-primary interactive-btn">
                            <i class="fa-solid fa-right-to-bracket"></i> GİRİŞ YAP
                        </button>

                        <div class="auth-divider">
                            <div class="auth-divider-line"></div>
                            <span class="auth-divider-text">veya</span>
                            <div class="auth-divider-line"></div>
                        </div>

                        <button type="button" class="btn-auth-secondary interactive-btn" onclick="openAuthModal('magic_otp')">
                            <i class="fa-solid fa-envelope-circle-check" style="color:#7c3aed; font-size:1rem;"></i> E-Posta ile Şifresiz Giriş Yap (Kodlu)
                        </button>

                        <p style="text-align:center; font-size:0.82rem; color:#71717a; margin:8px 0 0 0;">
                            Üye olmadan sipariş takip etmek için <a href="siparislerim.html" style="color:#6b21a8; font-weight:700; text-decoration:none;">tıklayınız</a>.
                        </p>
                    </form>
                </div>
            `;
        }

        overlay.innerHTML = cardHtml;
        overlay.style.display = "flex";
        overlay.classList.add("active");
        document.body.classList.add("modal-open");

        attachAuthModalEvents(view);
    };

    window.closeAuthModal = () => {
        const overlay = document.getElementById("authModalOverlay");
        if (overlay) {
            overlay.classList.remove("active");
            overlay.style.display = "none";
            document.body.classList.remove("modal-open");
            unlockBodyScroll(true);
        }
    };

    const formatDisplayName = (name) => {
        if (!name) return "Hesabım";
        const firstWord = name.trim().split(/\s+/)[0];
        if (!firstWord) return "Hesabım";
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
            const rawName = user.fullName || user.name || "Müşteri";
            const dispName = formatDisplayName(rawName);
            authBtn?.classList.add("logged-in");
            if (authText) authText.textContent = dispName;
            if (dropdown) {
                dropdown.innerHTML = `
                    <div style="padding:10px 14px; font-size:0.84rem; font-weight:800; color:#18181b; border-bottom:1px solid #f4f4f5;">
                        <i class="fa-solid fa-circle-user" style="color:#6b21a8;"></i> Hoş geldiniz, ${dispName}
                    </div>
                    <a href="hesabim.html" class="user-dropdown-item"><i class="fa-solid fa-user-gear" style="color:#6b21a8;"></i> Hesabım &amp; Profil</a>
                    <a href="siparislerim.html" class="user-dropdown-item"><i class="fa-solid fa-box-open" style="color:#6b21a8;"></i> Siparişlerim &amp; Takip</a>
                    <div class="user-dropdown-divider"></div>
                    <a href="javascript:void(0)" class="user-dropdown-item" id="logoutBtn" style="color:#ef4444;"><i class="fa-solid fa-arrow-right-from-bracket"></i> Çıkış Yap</a>
                `;
                document.getElementById("logoutBtn")?.addEventListener("click", () => {
                    localStorage.removeItem("mobelmor_active_customer");
                    localStorage.removeItem("mobelmor_current_user");
                    updateAuthUI();
                    showToast("Başarıyla çıkış yapıldı.", "fa-arrow-right-from-bracket");
                    if (window.location.pathname.includes("siparislerim") || window.location.pathname.includes("hesabim")) {
                        setTimeout(() => window.location.reload(), 500);
                    }
                });
            }

            // Autofill checkout fields if empty
            const cName = document.getElementById("checkoutName");
            const cEmail = document.getElementById("checkoutEmail");
            const cPhone = document.getElementById("checkoutPhone");
            const cAddr = document.getElementById("checkoutAddress");
            if (cName && !cName.value) cName.value = rawName;
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
            orderTrackDropdown.classList.toggle("active");
        }
    });

    // Auth Button Click Handling
    const headerAuthBtn = document.getElementById("headerAuthBtn");
    const userMenuDropdown = document.getElementById("userMenuDropdown");

    headerAuthBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        orderTrackDropdown?.classList.remove("active");
        const user = getCurrentUser();
        if (!user) {
            window.openAuthModal("login");
        } else {
            if (userMenuDropdown) {
                userMenuDropdown.classList.toggle("active");
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

    // Auth Modal Event Handlers (Multi-View: Login, Register, Forgot Password, Magic OTP Login)
    const attachAuthModalEvents = (view) => {
        const overlay = document.getElementById("authModalOverlay");
        
        // Close overlay backdrop & close button
        if (overlay) {
            overlay.onclick = (e) => {
                if (e.target.id === "authModalOverlay") {
                    closeAuthModal();
                }
            };
            const closeBtn = overlay.querySelector(".modal-close, .close-btn");
            if (closeBtn) {
                closeBtn.onclick = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    closeAuthModal();
                };
            }
        }

        // 1. LOGIN FORM
        const loginForm = document.getElementById("loginForm");
        if (loginForm) {
            setTimeout(() => document.getElementById("loginEmail")?.focus(), 150);
            loginForm.onsubmit = async (e) => {
                e.preventDefault();
                const email = (document.getElementById("loginEmail")?.value || "").trim().toLowerCase();
                const pass = (document.getElementById("loginPassword")?.value || "").trim();
                const submitBtn = loginForm.querySelector('button[type="submit"]');
                const origText = submitBtn ? submitBtn.innerHTML : "Giriş Yap";
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Kontrol Ediliyor...';
                }

                try {
                    const sessionUser = await window.StoreService.loginCustomer(email, pass);
                    updateAuthUI();
                    closeAuthModal();
                    showToast(`Hoş geldiniz, ${sessionUser.fullName || sessionUser.name}!`, "fa-circle-check");
                } catch (err) {
                    showToast(err.message, "fa-triangle-exclamation");
                } finally {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = origText;
                    }
                }
            };
        }

        // 2. REGISTER FORM
        const registerForm = document.getElementById("registerForm");
        if (registerForm) {
            setTimeout(() => document.getElementById("regName")?.focus(), 150);
            registerForm.onsubmit = async (e) => {
                e.preventDefault();
                const name = (document.getElementById("regName")?.value || "").trim();
                const email = (document.getElementById("regEmail")?.value || "").trim().toLowerCase();
                const phone = (document.getElementById("regPhone")?.value || "").trim();
                const password = (document.getElementById("regPassword")?.value || "").trim();
                const submitBtn = registerForm.querySelector('button[type="submit"]');
                const origText = submitBtn ? submitBtn.innerHTML : "Ücretsiz Üye Ol";

                if (!name || !email || !password) {
                    showToast("Lütfen zorunlu alanları doldurunuz.", "fa-triangle-exclamation");
                    return;
                }

                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Kayıt Yapılıyor...';
                }

                try {
                    const res = await window.StoreService.registerCustomer({
                        fullName: name,
                        name: name,
                        email: email,
                        phone: phone,
                        password: password
                    });

                    if (res && res.confirmationSent) {
                        showToast(`Doğrulama bağlantısı ${email} adresinize gönderildi! Lütfen e-postanızı onaylayınız.`, "fa-envelope-circle-check");
                        window.openAuthModal("login");
                    } else {
                        updateAuthUI();
                        closeAuthModal();
                        showToast(`Üyeliğiniz oluşturuldu! Hoş geldiniz, ${name}.`, "fa-circle-check");
                    }
                } catch (err) {
                    showToast(err.message, "fa-triangle-exclamation");
                } finally {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = origText;
                    }
                }
            };
        }

        // 3. FORGOT PASSWORD REQUEST FORM (STEP 1)
        const forgotReqForm = document.getElementById("forgotReqForm");
        if (forgotReqForm) {
            setTimeout(() => document.getElementById("forgotEmail")?.focus(), 150);
            forgotReqForm.onsubmit = async (e) => {
                e.preventDefault();
                const email = (document.getElementById("forgotEmail")?.value || "").trim().toLowerCase();
                const submitBtn = forgotReqForm.querySelector('button[type="submit"]');
                const origText = submitBtn ? submitBtn.innerHTML : "Sıfırlama Kodu Gönder";

                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Kod Gönderiliyor...';
                }

                try {
                    const res = await window.StoreService.requestPasswordReset(email);
                    showToast(`Sıfırlama kodu ${email} adresinize iletildi!`, "fa-envelope-circle-check");
                    window.openAuthModal("forgot_step2", { email: res.email, code: res.code });
                } catch (err) {
                    showToast(err.message, "fa-triangle-exclamation");
                } finally {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = origText;
                    }
                }
            };
        }

        // 4. FORGOT PASSWORD VERIFY & RESET FORM (STEP 2)
        const forgotVerifyForm = document.getElementById("forgotVerifyForm");
        if (forgotVerifyForm) {
            setTimeout(() => document.getElementById("resetCode")?.focus(), 150);
            forgotVerifyForm.onsubmit = async (e) => {
                e.preventDefault();
                const email = document.getElementById("resetTargetEmail")?.value || "";
                const code = (document.getElementById("resetCode")?.value || "").trim();
                const newPass = (document.getElementById("resetNewPassword")?.value || "").trim();
                const submitBtn = forgotVerifyForm.querySelector('button[type="submit"]');
                const origText = submitBtn ? submitBtn.innerHTML : "Şifremi Güncelle & Giriş Yap";

                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Güncelleniyor...';
                }

                try {
                    const sessionUser = await window.StoreService.verifyAndResetPassword(email, code, newPass);
                    updateAuthUI();
                    closeAuthModal();
                    showToast(`Şifreniz başarıyla güncellendi! Hoş geldiniz, ${sessionUser.fullName || sessionUser.name}.`, "fa-circle-check");
                } catch (err) {
                    showToast(err.message, "fa-triangle-exclamation");
                } finally {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = origText;
                    }
                }
            };
        }

        // 5. MAGIC OTP LOGIN REQUEST FORM (STEP 1)
        const magicOtpReqForm = document.getElementById("magicOtpReqForm");
        if (magicOtpReqForm) {
            setTimeout(() => document.getElementById("magicOtpEmail")?.focus(), 150);
            magicOtpReqForm.onsubmit = async (e) => {
                e.preventDefault();
                const email = (document.getElementById("magicOtpEmail")?.value || "").trim().toLowerCase();
                const submitBtn = magicOtpReqForm.querySelector('button[type="submit"]');
                const origText = submitBtn ? submitBtn.innerHTML : "Tek Kullanımlık Kod Gönder";

                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Kod Gönderiliyor...';
                }

                try {
                    const res = await window.StoreService.requestEmailOtpLogin(email);
                    showToast(`Giriş kodu ${email} adresinize iletildi!`, "fa-envelope-circle-check");
                    window.openAuthModal("magic_otp_step2", { email: res.email, code: res.code });
                } catch (err) {
                    showToast(err.message, "fa-triangle-exclamation");
                } finally {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = origText;
                    }
                }
            };
        }

        // 6. MAGIC OTP LOGIN VERIFY FORM (STEP 2)
        const magicOtpVerifyForm = document.getElementById("magicOtpVerifyForm");
        if (magicOtpVerifyForm) {
            setTimeout(() => document.getElementById("magicCode")?.focus(), 150);
            magicOtpVerifyForm.onsubmit = async (e) => {
                e.preventDefault();
                const email = document.getElementById("magicTargetEmail")?.value || "";
                const code = (document.getElementById("magicCode")?.value || "").trim();
                const submitBtn = magicOtpVerifyForm.querySelector('button[type="submit"]');
                const origText = submitBtn ? submitBtn.innerHTML : "Şifresiz Giriş Yap";

                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Giriş Yapılıyor...';
                }

                try {
                    const sessionUser = await window.StoreService.verifyEmailOtpLogin(email, code);
                    updateAuthUI();
                    closeAuthModal();
                    showToast(`Giriş başarılı! Hoş geldiniz, ${sessionUser.fullName || sessionUser.name}.`, "fa-circle-check");
                } catch (err) {
                    showToast(err.message, "fa-triangle-exclamation");
                } finally {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = origText;
                    }
                }
            };
        }
    };

    // Payment method selection & card input formatters
    let selectedPayMethod = "card";
    const payMethodBtns = document.querySelectorAll(".payment-method-btn");
    payMethodBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            payMethodBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            selectedPayMethod = btn.getAttribute("data-method") || "card";
            
            document.getElementById("panelPayCard")?.classList.toggle("active", selectedPayMethod === "card");
            document.getElementById("panelPayBank")?.classList.toggle("active", selectedPayMethod === "bank");
            document.getElementById("panelPayCod")?.classList.toggle("active", selectedPayMethod === "cod");

            const submitText = document.getElementById("checkoutSubmitText");
            if (submitText) {
                if (selectedPayMethod === "card") submitText.textContent = "iyzico ile Güvenli Ödeme Yap";
                else if (selectedPayMethod === "bank") submitText.textContent = "Havale ile Siparişi Tamamla";
                else if (selectedPayMethod === "cod") submitText.textContent = "Kapıda Ödeme ile Siparişi Onayla";
            }
        });
    });

    document.getElementById("cardNumber")?.addEventListener("input", (e) => {
        let val = e.target.value.replace(/\D/g, '').substring(0, 16);
        val = val.replace(/(\d{4})(?=\d)/g, '$1 ');
        e.target.value = val;
    });

    document.getElementById("cardExpiry")?.addEventListener("input", (e) => {
        let val = e.target.value.replace(/\D/g, '').substring(0, 4);
        if (val.length >= 2) {
            val = val.substring(0, 2) + '/' + val.substring(2);
        }
        e.target.value = val;
    });

    // Checkout Form Submit Handler (iyzico & Online Payment Ready)
    const checkoutForm = document.getElementById("checkoutForm");
    if (checkoutForm) {
        checkoutForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("checkoutName")?.value.trim() || "";
            const email = document.getElementById("checkoutEmail")?.value.trim().toLowerCase() || "";
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

            let paymentMethodLabel = "Kredi Kartı (iyzico 3D Secure)";
            let paymentStatus = "paid";
            let paymentGateway = "iyzico";

            if (selectedPayMethod === "bank") {
                paymentMethodLabel = "Banka Havalesi / EFT";
                paymentStatus = "pending_bank";
                paymentGateway = "bank_transfer";
            } else if (selectedPayMethod === "cod") {
                paymentMethodLabel = "Kapıda Ödeme (Teslimatta)";
                paymentStatus = "pending_cod";
                paymentGateway = "cod";
            }

            // Record customer into mobelmor_customers so Admin panel has the customer data
            if (email) {
                const customers = getCustomersList();
                let existingCust = customers.find(c => c.email && c.email.toLowerCase() === email);
                if (existingCust) {
                    if (name) { existingCust.fullName = name; existingCust.name = name; }
                    if (phone) existingCust.phone = phone;
                    if (address) existingCust.address = address;
                    existingCust.lastOrderDate = new Date().toISOString();
                } else {
                    customers.push({
                        id: "cust_" + Date.now(),
                        fullName: name,
                        name: name,
                        email: email,
                        phone: phone || "",
                        address: address || "",
                        city: address ? address.split(',')[0].trim() : "",
                        createdAt: new Date().toISOString(),
                        lastOrderDate: new Date().toISOString(),
                        isGuest: true
                    });
                }
                saveCustomersList(customers);
            }

            const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
            const orderDate = new Date().toLocaleDateString("tr-TR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
            const newOrderId = "MBL-" + Math.floor(100000 + Math.random() * 900000);

            // Store order locally in both user orders and admin store orders
            const orderData = {
                id: newOrderId,
                orderNumber: newOrderId,
                date: orderDate,
                createdAt: new Date().toISOString(),
                status: "Hazırlanıyor",
                statusText: "İmalat & Hazırlık Aşamasında",
                customer: { name, email, phone, address, note },
                customerName: name,
                customerEmail: email,
                customerPhone: phone,
                address: address,
                notes: note,
                paymentMethod: selectedPayMethod,
                paymentMethodLabel: paymentMethodLabel,
                paymentStatus: paymentStatus,
                paymentGateway: paymentGateway,
                items: cart.map(i => ({ id: i.id, title: i.title, price: i.price, qty: i.qty, image: i.image, selectedFabric: i.selectedFabric, selectedColor: i.selectedColor })),
                total: subtotal,
                totalAmount: subtotal
            };

            try {
                if (window.StoreService && typeof window.StoreService.createOrder === "function") {
                    window.StoreService.createOrder(orderData);
                } else {
                    const prevOrders = JSON.parse(localStorage.getItem("mobelmor_orders") || "[]");
                    prevOrders.unshift(orderData);
                    localStorage.setItem("mobelmor_orders", JSON.stringify(prevOrders));

                    const allOrders = JSON.parse(localStorage.getItem("mobelmor_all_orders") || "[]");
                    allOrders.unshift(orderData);
                    localStorage.setItem("mobelmor_all_orders", JSON.stringify(allOrders));
                }
            } catch (err) {
                console.error("Order save error:", err);
            }

            // Clear cart & persist empty cart
            cart = [];
            saveCart();
            updateBadges();
            renderCart();

            // Show in-modal Order Success screen
            const mainContent = document.getElementById("checkoutMainContent");
            const successContent = document.getElementById("checkoutSuccessContent");
            if (mainContent && successContent) {
                mainContent.style.display = "none";
                successContent.style.display = "block";
                successContent.innerHTML = `
                    <div class="order-success-box">
                        <div class="success-icon-badge"><i class="fa-solid fa-check"></i></div>
                        <h3 style="margin:0; color:#15803d; font-size:1.25rem;">Siparişiniz Başarıyla Alındı!</h3>
                        <p style="color:#64748b; font-size:0.85rem; margin:4px 0 10px 0;">Ödeme ve sipariş bilgileriniz ${selectedPayMethod === 'card' ? 'iyzico 3D Secure güvencesiyle' : ''} sisteme kaydedildi.</p>
                        <div class="order-success-num">Sipariş No: <strong>${newOrderId}</strong></div>
                        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:12px; margin:12px 0; text-align:left; font-size:0.82rem;">
                            <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                                <span style="color:#64748b;">Ödeme Yöntemi:</span>
                                <strong style="color:#1e1b4b;">${paymentMethodLabel}</strong>
                            </div>
                            <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                                <span style="color:#64748b;">Toplam Tutar:</span>
                                <strong style="color:#6b21a8;">${formatPrice(subtotal)}</strong>
                            </div>
                            <div style="display:flex; justify-content:space-between;">
                                <span style="color:#64748b;">Teslimat Adresi:</span>
                                <span style="color:#1e1b4b; max-width:180px; text-align:right; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${address}</span>
                            </div>
                        </div>
                        <div style="display:flex; flex-direction:column; gap:8px; margin-top:14px;">
                            <a href="siparislerim.html" class="btn btn-primary btn-block interactive-btn" style="text-decoration:none; display:flex; align-items:center; justify-content:center; gap:8px; padding:12px;">
                                <i class="fa-solid fa-box"></i> Siparişlerimi Görüntüle
                            </a>
                            <button type="button" class="btn btn-block interactive-btn" id="successCloseBtn" style="background:#f1f5f9; color:#475569; padding:10px; border:none; border-radius:8px; font-weight:600; cursor:pointer;">
                                Alışverişe Devam Et
                            </button>
                        </div>
                    </div>
                `;

                document.getElementById("successCloseBtn")?.addEventListener("click", () => {
                    document.getElementById("checkoutOverlay")?.classList.remove("active");
                    document.body.classList.remove("modal-open");
                    unlockBodyScroll();
                    mainContent.style.display = "block";
                    successContent.style.display = "none";
                    checkoutForm.reset();
                });
            }

            showToast(`Siparişiniz Alındı! Takip No: ${newOrderId}`, "fa-circle-check");
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
        lockBodyScroll();
    }

    function closeMobileDrawer() {
        mobileMenuDrawer?.classList.remove("active");
        mobileMenuOverlay?.classList.remove("active");
        unlockBodyScroll();
    }

    mobileMenuBtn?.addEventListener("click", openMobileDrawer);
    closeMobileMenuBtn?.addEventListener("click", closeMobileDrawer);
    mobileMenuOverlay?.addEventListener("click", closeMobileDrawer);

    // Mobile Drawer Wishlist / Cart Triggers
    document.getElementById("mobileDrawerCartBtn")?.addEventListener("click", () => {
        closeMobileDrawer();
        document.getElementById("cartBtn")?.click();
    });

    document.getElementById("mobileDrawerWishlistBtn")?.addEventListener("click", () => {
        closeMobileDrawer();
        document.getElementById("wishlistBtn")?.click();
    });

    updateWishlistBadges();

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


