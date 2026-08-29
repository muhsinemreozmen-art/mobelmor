/* ==========================================
   mobelmor.com - Application Logic (v=9999)
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
  all: "Tüm Koleksiyon",
  living: "Oturma Odası",
  dining: "Yemek Odası",
  bedroom: "Yatak Odası",
  office: "Çalışma Odası"
};

const SUBCATEGORY_NAMES = {
  all: "Tümü",
  sofas: "Koltuk Takımları & Kanepeler",
  "corner-sofas": "Köşe Koltuklar",
  armchairs: "Berjerler",
  tables: "Sehpalar",
  "tv-units": "TV & Yaşam Üniteleri",
  "tv-uniteleri": "TV & Yaşam Üniteleri",
  consoles: "Konsollar & TV Üniteleri",
  poufs: "Puf & Tamamlayıcı",
  "dining-tables": "Yemek Masaları & Takımlar",
  "dining-sets": "Yemek Odası Takımları",
  chairs: "Sandalyeler",
  buffets: "Konsol & Büfeler",
  vitrines: "Vitrin & Gümüşlük",
  "bedroom-sets": "Yatak Odası Takımları",
  beds: "Karyola, Yatak & Bazalar",
  nightstands: "Komodinler",
  wardrobes: "Gardıroplar",
  dressers: "Şifonyer & Makyaj Masaları",
  sifonyer: "Şifonyerler",
  desks: "Çalışma Masaları",
  bookcases: "Kitaplıklar"
};

let currentCategory = "all";
let currentSubcategory = "all";
let searchQuery = "";
let currentSort = "featured";

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

const formatPrice = (num) => {
  return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 0 }).format(num);
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

const getFilteredProducts = () => {
  const query = (searchQuery || "").toLowerCase();
  const sourceList = (typeof window.StoreService !== 'undefined') ? window.StoreService.getProducts() : PRODUCTS;
  let filtered = sourceList.filter(product => {
    let matchesCat = true;
    const pCat = product.category || "";
    const pSub = product.subcategory || "";
    const pType = product.productType || "";
    const pTitle = (product.title || "").toLowerCase();

    if (currentCategory !== "all") {
      if (currentCategory === "living" || currentCategory === "oturma-odasi") {
        matchesCat = (pCat === "living");
      } else if (currentCategory === "dining" || currentCategory === "yemek-odasi") {
        matchesCat = (pCat === "dining");
      } else if (currentCategory === "bedroom" || currentCategory === "yatak-odasi") {
        matchesCat = (pCat === "bedroom");
      } else if (currentCategory === "office" || currentCategory === "calisma-odasi") {
        matchesCat = (pCat === "office" || pCat === "tv-unit" || pCat === "tv-uniteleri");
      } else if (currentCategory === "garden" || currentCategory === "bahce") {
        matchesCat = (pCat === "garden");
      } else if (currentCategory === "tv-unit" || currentCategory === "tv-uniteleri") {
        matchesCat = (pCat === "living" && (pSub === "consoles" || pTitle.includes("tv")));
      } else {
        matchesCat = (pCat === currentCategory);
      }
    }

    let matchesSubcat = true;
    if (currentSubcategory !== "all") {
      if (currentSubcategory === "sofas" || currentSubcategory === "koltuk") {
        matchesSubcat = (pSub === "sofas");
      } else if (currentSubcategory === "corner-sofas" || currentSubcategory === "kose-koltuk") {
        matchesSubcat = (pSub === "sofas" || pTitle.includes("köşe") || pTitle.includes("kose") || pType === "Set");
      } else if (currentSubcategory === "armchairs" || currentSubcategory === "berjer") {
        matchesSubcat = (pSub === "armchairs");
      } else if (currentSubcategory === "tables" || currentSubcategory === "sehpa") {
        matchesSubcat = (pSub === "tables");
      } else if (currentSubcategory === "tv-units" || currentSubcategory === "tv-uniteleri") {
        matchesSubcat = (pCat === "living" && (pSub === "consoles" || pTitle.includes("tv")));
      } else if (currentSubcategory === "consoles" || currentSubcategory === "konsol") {
        if (currentCategory === "bedroom") {
          matchesSubcat = (pSub === "consoles");
        } else {
          matchesSubcat = (pSub === "consoles");
        }
      } else if (currentSubcategory === "poufs" || currentSubcategory === "puf") {
        matchesSubcat = (pSub === "armchairs" || pSub === "tables" || pTitle.includes("puf"));
      } else if (currentSubcategory === "dining-sets" || currentSubcategory === "yemek-takimi") {
        matchesSubcat = (pCat === "dining" && pType === "Set");
      } else if (currentSubcategory === "dining-tables" || currentSubcategory === "yemek-masasi") {
        matchesSubcat = (pSub === "dining-tables");
      } else if (currentSubcategory === "chairs" || currentSubcategory === "sandalye") {
        matchesSubcat = (pSub === "chairs");
      } else if (currentSubcategory === "buffets" || currentSubcategory === "vitrines" || currentSubcategory === "bufe") {
        matchesSubcat = (pSub === "buffets");
      } else if (currentSubcategory === "bedroom-sets" || currentSubcategory === "yatak-takimi") {
        matchesSubcat = (pCat === "bedroom" && pType === "Set");
      } else if (currentSubcategory === "beds" || currentSubcategory === "karyola" || currentSubcategory === "baza") {
        matchesSubcat = (pSub === "beds");
      } else if (currentSubcategory === "wardrobes" || currentSubcategory === "gardirop") {
        matchesSubcat = (pSub === "wardrobes");
      } else if (currentSubcategory === "dressers" || currentSubcategory === "sifonyer" || currentSubcategory === "makyaj") {
        matchesSubcat = (pCat === "bedroom" && pSub === "consoles");
      } else if (currentSubcategory === "nightstands" || currentSubcategory === "komodin") {
        matchesSubcat = (pSub === "nightstands");
      } else if (currentSubcategory === "desks") {
        matchesSubcat = (pSub === "desks" || pSub === "tables");
      } else if (currentSubcategory === "bookcases") {
        matchesSubcat = (pSub === "bookcases");
      } else {
        matchesSubcat = (pSub === currentSubcategory);
      }
    }

    const specsText = Object.values(product.specs || {}).join(" ").toLowerCase();
    const matchesSearch = (!query ||
      (product.title || "").toLowerCase().includes(query) ||
      (product.material || "").toLowerCase().includes(query) ||
      (product.desc || "").toLowerCase().includes(query) ||
      specsText.includes(query)
    );
    return matchesCat && matchesSubcat && matchesSearch;
  });

  return filtered.sort((a, b) => {
    // 1. Always prioritize complete Sets (Takımlar) first
    const isSetA = a.productType === 'Set' ? 1 : 0;
    const isSetB = b.productType === 'Set' ? 1 : 0;
    if (isSetA !== isSetB) {
      return isSetB - isSetA;
    }

    // 2. Sort within the same group (Sets together, Solos together)
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

    // Authentic pricing and discount calculation
    const originalPrice = item.originalPrice || Math.round(item.price * 1.15);
    const discountRate = item.originalPrice ? Math.round((1 - item.price / item.originalPrice) * 100) : 15;
    const discountClass = discountRate >= 20 ? 'red' : discountRate >= 15 ? 'purple' : discountRate >= 10 ? 'orange' : 'green';
    const has3d = (item.id % 4 === 0);
    const isBestPrice = (item.id % 3 === 1);
    const isLiving = item.category === 'living' || (item.subcategory && item.subcategory.includes('sofa'));
    const isDining = item.category === 'dining' || (item.subcategory && item.subcategory.includes('table'));

    return `
            <article class="product-card" data-id="${item.id}">
                <div class="card-image-box">
                    <img src="${webpImage}" alt="${item.title}" class="card-img" width="400" height="300" ${imgAttr} onerror="this.onerror=null; this.src='${item.image}';">
                    
                    <!-- Top-Left Circle Sticker Badge -->
                    <div class="vcard-circle-sticker ${discountClass}">
                        <span class="vcs-sub">SEPETTE</span>
                        <strong class="vcs-pct">%${discountRate}</strong>
                        <span class="vcs-sub">İNDİRİM</span>
                    </div>

                    ${(item.id % 5 === 0) ? `<span class="vcard-top-tag">%${discountRate}</span>` : ''}

                    <!-- 3D Sticker -->
                    ${has3d ? `
                        <div class="vcard-3d-circle">
                            <i class="fa-solid fa-cube"></i>
                            <span>3D GÖRÜNTÜLE</span>
                        </div>
                    ` : ''}

                    <!-- Heart Wishlist Button -->
                    <button class="card-heart-btn ${isFav ? 'active' : ''}" data-id="${item.id}" title="Favorilere Ekle" aria-label="Favorilere Ekle">
                        <i class="fa-${isFav ? 'solid' : 'regular'} fa-heart"></i>
                    </button>
                </div>

                <div class="card-details">
                    <!-- Badges Row -->
                    <div class="vcard-badges-row">
                        ${isBestPrice
        ? `<span class="vbadge-pill pill-best-price"><i class="fa-solid fa-tag"></i> EN İYİ FİYAT</span>`
        : `<span class="vbadge-pill pill-collection">mobelmor collection</span>`
      }
                        <span class="vbadge-pill pill-campaign"><i class="fa-solid fa-bullhorn"></i> Kampanyalı Ürün</span>
                        ${item.rating >= 4.8 ? `<span class="vbadge-pill pill-rating"><i class="fa-solid fa-star"></i> Yüksek Puanlı</span>` : ''}
                        ${has3d ? `<span class="vbadge-pill pill-3d"><i class="fa-solid fa-cube"></i> 3D GÖRÜNTÜLE</span>` : ''}
                    </div>

                    <!-- Title -->
                    <h3 class="card-product-title">${item.title}</h3>

                    <!-- Pricing Block -->
                    <div class="vcard-pricing-block">
                        <span class="vcard-old-price">${formatPrice(originalPrice)}</span>
                        <div class="vcard-main-price">${formatPrice(item.price)}</div>
                        <div class="vcard-sepette-price"><i class="fa-solid fa-bolt"></i> Sepette: <strong>${formatPrice(item.price)}</strong></div>
                        ${(item.id % 2 === 0) ? `<div class="vcard-lowest-price"><i class="fa-solid fa-arrow-trend-down"></i> Son 30 günün en düşük fiyatı</div>` : ''}
                    </div>

                    <!-- Feature Delivery & Variant Pills -->
                    <div class="vcard-features-pills">
                        <span class="vfeat-pill"><i class="fa-solid fa-truck"></i> Ücretsiz Teslimat</span>
                        <span class="vfeat-pill teal"><i class="fa-solid fa-bolt"></i> Hızlı Teslimat</span>
                        ${isLiving ? `<span class="vfeat-pill"><i class="fa-solid fa-couch"></i> Kumaşı değiştirilebilir</span>` : ''}
                        ${isDining ? `<span class="vfeat-pill interactive"><i class="fa-solid fa-plus"></i> Masa Ölçüsü Seçenekleri</span>` : ''}
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
    card.style.cursor = "pointer";

    const goToDetail = (e) => {
      if (e.target.closest(".card-heart-btn") || e.target.closest(".add-to-cart-btn") || e.target.closest(".quick-view-btn")) return;
      const item = PRODUCTS.find(p => p.id === parseInt(id));
      if (item && window.getCleanProductUrl) {
        window.location.href = window.getCleanProductUrl(item.id, item.title);
      } else {
        window.location.href = `urun-detay.html?id=${id}`;
      }
    };

    card.addEventListener("click", goToDetail);
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
      saveWishlist();
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

const addToCart = (productId, qty = 1) => {
  const allProds = (typeof PRODUCTS !== 'undefined' && PRODUCTS && PRODUCTS.length) ? PRODUCTS : (window.StoreService ? window.StoreService.getProducts() : []);
  const item = allProds.find(p => p.id == productId);
  if (!item) return;

  try {
    const saved = localStorage.getItem("mobelmor_cart");
    if (saved) cart = JSON.parse(saved) || [];
  } catch(e) {}

  const existing = cart.find(c => c.id == item.id && c.price === item.price);
  if (existing) {
    existing.qty = (existing.qty || 1) + (qty || 1);
  } else {
    cart.push({ ...item, price: item.price, basePrice: item.price, qty: (qty || 1) });
  }
  saveCart();
  updateBadges();
  if (typeof showToast === 'function') {
    showToast(`<strong>${item.title}</strong>${(qty > 1) ? ` (${qty} Adet)` : ''} sepete eklendi!`, "fa-bag-shopping");
  }
  renderCart();
  
  // Otomatik olarak sepeti aç
  document.getElementById("cartDrawer")?.classList.add("active");
  document.getElementById("cartOverlay")?.classList.add("active");
  document.body.classList.add("cart-open");
  if (typeof lockBodyScroll === 'function') lockBodyScroll();
};

const updateBadges = () => {
  const cartBadge = document.getElementById("cartBadge");
  const wishBadge = document.getElementById("wishlistBadge");
  const mobWishBadge = document.getElementById("mobileWishlistBadge");
  if (cartBadge) cartBadge.textContent = cart.reduce((sum, c) => sum + c.qty, 0);
  if (wishBadge) wishBadge.textContent = wishlist.size;
  if (mobWishBadge) mobWishBadge.textContent = wishlist.size;
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

window.removeCartItem = (id) => {
    cart = cart.filter(c => c.id !== id && c.id != id);
    localStorage.setItem("mobelmor_cart", JSON.stringify(cart));
    renderCart();
    if (typeof updateBadges === 'function') updateBadges();
    if (typeof updateCartBadge === 'function') updateCartBadge();
    if (typeof showToast === 'function') showToast("Ürün sepetten çıkarıldı.", "fa-trash-can");
};

window.changeQty = (id, delta) => {
    const item = cart.find(c => c.id === id || c.id == id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(c => c.id !== id && c.id != id);
    }
    localStorage.setItem("mobelmor_cart", JSON.stringify(cart));
    renderCart();
    if (typeof updateBadges === 'function') updateBadges();
    if (typeof updateCartBadge === 'function') updateCartBadge();
};

const renderCart = () => {
    const drawer = document.getElementById("cartDrawer");
    const body = document.getElementById("cartBody");
    const footer = document.getElementById("cartFooter");
    if (!body || !footer) return;

    try {
        const saved = localStorage.getItem("mobelmor_cart");
        if (saved) {
            cart = JSON.parse(saved);
            if (!Array.isArray(cart)) cart = [];
            cart = cart.filter(c => c && c.id !== undefined && c.title && c.price);
        } else {
            cart = [];
        }
    } catch(e) {
        cart = [];
    }

    const totalQty = cart.reduce((sum, c) => sum + (c.qty || 1), 0);

    // 1. Mobelmor Header (< Back Arrow, Centered Title, X Button)
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
            <div style="padding:60px 20px; text-align:center; display:flex; flex-direction:column; align-items:center; background:#ffffff; border-radius:12px; margin-top:10px; border:1px solid #e2e8f0;">
                <div style="width:64px; height:64px; border-radius:50%; background:#f3e8ff; color:#6b21a8; display:flex; align-items:center; justify-content:center; margin-bottom:16px; font-size:1.6rem; border:1px solid #e9d5ff;">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <h4 style="font-size:1.1rem; font-weight:800; color:#0f172a; margin:0 0 6px 0;">Sepetiniz Boş</h4>
                <p style="font-size:0.84rem; color:#64748b; margin:0 0 20px 0; max-width:240px; line-height:1.4;">Eviniz için mobilya modellerimizi keşfetmeye başlayın.</p>
                <a href="kategori.html?c=all" class="btn interactive-btn" style="background:#6b21a8; color:#ffffff; padding:12px 24px; font-weight:800; font-size:0.9rem; border-radius:10px; text-decoration:none;" onclick="document.getElementById('cartDrawer')?.classList.remove('active'); document.getElementById('cartOverlay')?.classList.remove('active'); document.body.classList.remove('cart-open');">
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

    // 2. Direct Manufacturer Mobelmor Cart Body (No Multi-Vendor Marketplace Card)
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
                    <input type="text" id="cartCouponInput" class="ty-promo-input" placeholder="KUPON KODU" value="${appliedCouponCode}">
                    <button type="button" class="ty-promo-btn" onclick="applyCartCoupon()">Uygula</button>
                </div>
            `}
        </div>

        <!-- Free Shipping Banner -->
        <div class="ty-free-shipping-strip" style="border-radius:10px; border:1px solid #bbf7d0;">
            <i class="fa-solid fa-truck-fast"></i>
            <span>Kargo Bedava &amp; Ücretsiz Daireye Kurulum!</span>
        </div>

        <!-- Direct Manufacturer Items Container -->
        <div class="ty-store-card">
            <!-- Product Rows -->
            ${cart.map((item, idx) => {
                const popularPeople = (12 + (item.id * 3)) % 40 + 8;
                return `
                <div class="ty-item-row">
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
                            <i class="fa-solid fa-truck"></i> Özel Üretim &amp; Teslimat: 10-14 iş günü
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
                        <i class="fa-solid fa-shield-halved"></i>
                        <span>2 Yıl Mobelmor Üretici Garantisi Dahildir</span>
                    </div>
                    <i class="fa-solid fa-chevron-right" style="font-size:0.7rem;"></i>
                </div>
            `}).join('')}
        </div>
    `;

    // 3. Mobelmor Sticky Bottom Bar
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
                <div style="display:flex; justify-content:space-between; color:#6b21a8; font-weight:800;">
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

document.addEventListener("DOMContentLoaded", () => {
  createGlobalLightbox();
  renderProducts();
  updateBadges();
  renderCart();
  if (typeof initLiveSearchEngine === 'function') initLiveSearchEngine();

  window.closeOrderReceipt = () => {
    const overlay = document.getElementById("orderInvoiceOverlay");
    if (overlay) {
      overlay.classList.remove("active");
      document.body.classList.remove("modal-open");
    }
  };

  // 2. RESMİ PANEL E-ARŞİV FATURASINI AÇMA FONKSİYONU
  window.openOfficialInvoice = (orderNum) => {
    let orders = [];
    try {
      if (window.StoreService && typeof window.StoreService.getAllOrders === 'function') {
        orders = window.StoreService.getAllOrders();
      }
      if (!orders.length) {
        orders = JSON.parse(localStorage.getItem("mobelmor_all_orders") || "[]");
      }
      if (!orders.length) {
        orders = JSON.parse(localStorage.getItem("mobelmor_orders") || "[]");
      }
    } catch (e) {}

    const order = orders.find(o => o.orderNumber === orderNum || o.id === orderNum);
    if (!order || (!order.invoiceData && !order.invoiceUrl)) {
      alert("Bu sipariş için resmi e-Arşiv faturası muhasebe departmanımız tarafından hazırlanmaktadır.");
      return;
    }

    if (order.invoiceUrl && !order.invoiceData) {
      window.open(order.invoiceUrl, "_blank");
      return;
    }

    if (order.invoiceData) {
      let ext = ".pdf";
      if (order.invoiceData.startsWith("data:image/jpeg") || order.invoiceData.startsWith("data:image/jpg")) ext = ".jpg";
      else if (order.invoiceData.startsWith("data:image/png")) ext = ".png";
      else if (order.invoiceData.startsWith("data:image/webp")) ext = ".webp";
      
      const cleanOrderNum = (orderNum || "").replace(/[^a-zA-Z0-9_-]/g, "");
      const fileName = order.invoiceFileName || `Mobelmor_E_Arsiv_Fatura_${cleanOrderNum}${ext}`;

      // Create a temporary anchor to view/download the uploaded PDF/File
      const a = document.createElement("a");
      a.href = order.invoiceData;
      a.download = fileName;
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  // TOGGLE GUEST TRACK LOOKUP CARD
  window.toggleTrackSearchCard = () => {
    const card = document.getElementById("trackSearchCard");
    if (!card) return;
    if (card.style.display === "none" || !card.style.display) {
      card.style.display = "block";
      card.scrollIntoView({ behavior: "smooth", block: "nearest" });
      setTimeout(() => document.getElementById("lookupOrderId")?.focus(), 150);
    } else {
      card.style.display = "none";
    }
  };

  // Lookup Form Submit
  const lookupForm = document.getElementById("orderLookupForm");
  if (lookupForm) {
    lookupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const orderIdInput = (document.getElementById("lookupOrderId")?.value || "").trim().toUpperCase();
      const emailInput = (document.getElementById("lookupEmail")?.value || "").trim().toLowerCase();

      let allOrders = [];
      try {
        if (window.StoreService && typeof window.StoreService.getAllOrders === 'function') {
          allOrders = window.StoreService.getAllOrders();
        }
        if (!allOrders.length) {
          allOrders = JSON.parse(localStorage.getItem("mobelmor_all_orders") || "[]");
        }
        if (!allOrders.length) {
          allOrders = JSON.parse(localStorage.getItem("mobelmor_orders") || "[]");
        }
      } catch (err) {}

      const matched = allOrders.filter(o => {
        const oNum = (o.orderNumber || o.id || "").toUpperCase();
        const idMatch = orderIdInput && oNum.includes(orderIdInput);
        const cEmail = (o.customerEmail || (o.customer && o.customer.email) || "").toLowerCase();
        const cPhone = (o.customerPhone || (o.customer && o.customer.phone) || "");
        const emailMatch = (emailInput && (cEmail.includes(emailInput) || cPhone.includes(emailInput)));
        return idMatch || emailMatch;
      });

      if (matched.length > 0) {
        renderOrdersList(matched);
        showToast(`${matched.length} adet sipariş bulundu.`, "fa-circle-check");
        document.getElementById("ordersListContainer")?.scrollIntoView({ behavior: "smooth" });
      } else {
        showToast("Girdiğiniz bilgilere ait sipariş bulunamadı.", "fa-triangle-exclamation");
        renderOrdersList([]);
      }
    });
  }

  if (window.location.pathname.includes("siparislerim")) {
    renderOrdersPage();
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

  // Vivense-Style Hero Slider Engine (Full Drag / Swipe / Autoplay / Arrow / Dot Navigation)
  const heroSlider = document.getElementById("heroSlider");
  if (heroSlider) {
    const slides = heroSlider.querySelectorAll(".slider-slide");
    const prevBtn = document.getElementById("sliderPrevBtn");
    const nextBtn = document.getElementById("sliderNextBtn");
    const dots = heroSlider.querySelectorAll(".slider-dot");
    let currentSlide = 0;
    let sliderInterval = null;

    function goToSlide(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;

      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add("active");
        } else {
          slide.classList.remove("active");
        }
      });

      dots.forEach((dot) => {
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
      goToSlide(currentSlide + 1);
    }

    function prevSlide() {
      goToSlide(currentSlide - 1);
    }

    prevBtn?.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      prevSlide();
      resetInterval();
    });

    nextBtn?.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      nextSlide();
      resetInterval();
    });

    dots.forEach(dot => {
      dot.addEventListener("click", (e) => {
        e.preventDefault();
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
        sliderInterval = setInterval(nextSlide, 4500);
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

    // Universal Pointer & Touch Drag / Swipe Interaction
    let startX = 0;
    let startY = 0;
    let isDragging = false;
    let dragDistance = 0;

    function onDragStart(e) {
      isDragging = true;
      dragDistance = 0;
      stopAutoplay();
      startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      startY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
    }

    function onDragEnd(e) {
      if (!isDragging) return;
      isDragging = false;
      const endX = e.type.includes('touch') ? (e.changedTouches ? e.changedTouches[0].clientX : startX) : e.clientX;
      const endY = e.type.includes('touch') ? (e.changedTouches ? e.changedTouches[0].clientY : startY) : e.clientY;

      const diffX = startX - endX;
      const diffY = startY - endY;
      dragDistance = Math.hypot(diffX, diffY);

      // Only act if horizontal movement exceeds vertical movement and threshold
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
        if (diffX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      resetInterval();
    }

    heroSlider.addEventListener("touchstart", onDragStart, { passive: true });
    heroSlider.addEventListener("touchend", onDragEnd, { passive: true });
    heroSlider.addEventListener("mousedown", onDragStart);
    heroSlider.addEventListener("mouseup", onDragEnd);

    // Direct Click Navigation anywhere on the active slide
    slides.forEach((slide) => {
      slide.addEventListener("click", (e) => {
        // Ignore if clicking navigation buttons or dots
        if (e.target.closest("#sliderPrevBtn, #sliderNextBtn, .slider-dot, .slider-dots")) {
          return;
        }
        // If it was a swipe/drag, don't trigger click
        if (dragDistance > 15) {
          return;
        }

        const targetHref = slide.getAttribute("data-href") || 
                           slide.querySelector("a.btn-hero-cta, a.mv-cta-btn")?.getAttribute("href");
        if (targetHref) {
          window.location.href = targetHref;
        }
      });
    });

    // Keyboard navigation
    window.addEventListener("keydown", (e) => {
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
      if (e.key === "ArrowLeft") {
        prevSlide();
        resetInterval();
      } else if (e.key === "ArrowRight") {
        nextSlide();
        resetInterval();
      }
    });

    startAutoplay();
  }

  // Category Subcircles Carousel Scroll Controls
  const catCirclePrev = document.getElementById("catCirclePrev");
  const catCircleNext = document.getElementById("catCircleNext");
  const catSubcirclesTrack = document.getElementById("catSubcirclesTrack");

  catCirclePrev?.addEventListener("click", () => {
    catSubcirclesTrack?.scrollBy({ left: -260, behavior: "smooth" });
  });

  catCircleNext?.addEventListener("click", () => {
    catSubcirclesTrack?.scrollBy({ left: 260, behavior: "smooth" });
  });

  // Background Cloud Sync on site load (ensures mobile devices pull latest admin edits immediately)
  if (typeof window.StoreService !== 'undefined' && window.StoreService.syncProductsFromCloud) {
    window.StoreService.syncProductsFromCloud().then(updatedList => {
      if (Array.isArray(updatedList) && updatedList.length > 0 && typeof renderProducts === 'function') {
        renderProducts();
      }
    }).catch(e => console.log('App background sync:', e));
  }
});



