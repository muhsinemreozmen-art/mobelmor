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

const addToCart = (productId) => {
  const item = PRODUCTS.find(p => p.id === productId);
  if (!item) return;
  const existing = cart.find(c => c.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  saveCart();
  updateBadges();
  showToast(`<strong>${item.title}</strong> sepete eklendi!`, "fa-bag-shopping");
  renderCart();
  
  // Otomatik olarak sepeti aç
  document.getElementById("cartDrawer")?.classList.add("active");
  document.getElementById("cartOverlay")?.classList.add("active");
  document.body.classList.add("cart-open");
  lockBodyScroll();
};

const updateBadges = () => {
  const cartBadge = document.getElementById("cartBadge");
  const wishBadge = document.getElementById("wishlistBadge");
  const mobWishBadge = document.getElementById("mobileWishlistBadge");
  if (cartBadge) cartBadge.textContent = cart.reduce((sum, c) => sum + c.qty, 0);
  if (wishBadge) wishBadge.textContent = wishlist.size;
  if (mobWishBadge) mobWishBadge.textContent = wishlist.size;
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
                ${item.selectedFabric ? `
                    <div class="cart-item-fabric-tag">
                        <span class="cart-fabric-dot" style="background-color:${item.colorHex || '#6b21a8'};"></span>
                        <span>${item.selectedFabric}: ${item.selectedColor}${item.fabricPriceDiff > 0 ? ` (+${formatPrice(item.fabricPriceDiff)})` : ''}</span>
                    </div>
                ` : ''}
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
    document.body.classList.remove("cart-open");
    const totalEl = document.getElementById("checkoutTotal");
    if (totalEl) totalEl.textContent = formatPrice(subtotal);
    document.getElementById("checkoutOverlay")?.classList.add("active");
    document.body.classList.add("modal-open");
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
  id = parseInt(id);
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

  const CATEGORY_CAMPAIGNS = {
    living: {
      badge: "OTURMA ODASINDA İNEGÖL İMZASI",
      discount: "%20",
      discountSub: "'ye varan",
      text: "İNDİRİM FIRSATLARINI KAÇIRMA!",
      image: "assets/minegolden_p1_1.webp"
    },
    dining: {
      badge: "MASİF VE DOĞAL YEMEK TAKIMLARI",
      discount: "%25",
      discountSub: "'e varan",
      text: "SEZON İNDİRİMLERİNİ KEŞFET!",
      image: "assets/minegolden_p3_1.webp"
    },
    bedroom: {
      badge: "HUZURLU VE ŞIK YATAK ODALARI",
      discount: "%20",
      discountSub: "'ye varan",
      text: "İNDİRİM FIRSATLARINI KAÇIRMA!",
      image: "assets/asya_main.webp"
    },
    garden: {
      badge: "BAHÇENE YAKIŞAN TAKIMLARDA",
      discount: "%20",
      discountSub: "'ye varan",
      text: "İNDİRİM FIRSATLARINI KAÇIRMA!",
      image: "assets/minegolden_p1_1.webp"
    },
    office: {
      badge: "VERİMLİ ÇALIŞMA ALANLARI",
      discount: "%15",
      discountSub: "'e varan",
      text: "ÖZEL KOLEKSİYON İNDİRİMİ!",
      image: "assets/minegolden_p2_1.webp"
    },
    all: {
      badge: "TÜM KOLEKSİYONDA SEZON FIRSATLARI",
      discount: "%30",
      discountSub: "'a varan",
      text: "MOBELMOR GÜVENCESİYLE KEŞFET!",
      image: "assets/hero_milo_sofa.webp"
    }
  };

  const CATEGORY_STORY_CIRCLES = {
    living: [
      { title: "Mobelmor Collection", isSpecial: true, specialType: "brand", badge: "Yeni", cat: "living", sub: "all", image: "assets/favicon.svg" },
      { title: "İnegöl Masif", isSpecial: true, specialType: "series", badge: "Özel", cat: "living", sub: "all", image: "assets/minegolden_p1_1.webp" },
      { title: "Koltuk Takımı", cat: "living", sub: "sofas", image: "assets/minegolden_p1_1.webp" },
      { title: "Köşe Koltuk", cat: "living", sub: "corner-sofas", image: "assets/hero_milo_sofa.webp" },
      { title: "Berjer", cat: "living", sub: "armchairs", image: "assets/armchair.webp" },
      { title: "Orta Sehpa", cat: "living", sub: "tables", image: "assets/minegolden_p2_1.webp" },
      { title: "TV Ünitesi", cat: "living", sub: "tv-units", image: "assets/minegolden_p8_1.webp" },
      { title: "Konsol & Dresuar", cat: "living", sub: "consoles", image: "assets/minegolden_p4_1.webp" },
      { title: "Puf & Tamamlayıcı", cat: "living", sub: "poufs", image: "assets/minegolden_p2_1.webp" }
    ],
    dining: [
      { title: "Mobelmor Collection", isSpecial: true, specialType: "brand", badge: "Yeni", cat: "dining", sub: "all", image: "assets/favicon.svg" },
      { title: "Masif Yemek Serisi", isSpecial: true, specialType: "series", badge: "Özel", cat: "dining", sub: "all", image: "assets/minegolden_p3_1.webp" },
      { title: "Yemek Odası Takımı", cat: "dining", sub: "dining-sets", image: "assets/minegolden_p3_1.webp" },
      { title: "Yemek Masası", cat: "dining", sub: "dining-tables", image: "assets/minegolden_p3_1.webp" },
      { title: "Sandalye", cat: "dining", sub: "chairs", image: "assets/armchair.webp" },
      { title: "Konsol & Ayna", cat: "dining", sub: "buffets", image: "assets/minegolden_p4_1.webp" },
      { title: "Vitrin & Gümüşlük", cat: "dining", sub: "buffets", image: "assets/minegolden_p4_1.webp" },
      { title: "Bench & Sandalye", cat: "dining", sub: "chairs", image: "assets/minegolden_p3_1.webp" }
    ],
    bedroom: [
      { title: "Mobelmor Collection", isSpecial: true, specialType: "brand", badge: "Yeni", cat: "bedroom", sub: "all", image: "assets/favicon.svg" },
      { title: "Luna Bedding", isSpecial: true, specialType: "series", badge: "Yeni", cat: "bedroom", sub: "all", image: "assets/bed.webp" },
      { title: "Yatak Odası Takımı", cat: "bedroom", sub: "bedroom-sets", image: "assets/asya_main.webp" },
      { title: "Baza & Başlık", cat: "bedroom", sub: "beds", image: "assets/minegolden_p6_1.webp" },
      { title: "Karyola", cat: "bedroom", sub: "beds", image: "assets/bed.webp" },
      { title: "Ortopedik Yatak", cat: "bedroom", sub: "beds", image: "assets/bed.webp" },
      { title: "Gardırop", cat: "bedroom", sub: "wardrobes", image: "assets/minegolden_p5_1.webp" },
      { title: "Şifonyer & Makyaj", cat: "bedroom", sub: "dressers", image: "assets/minegolden_p7_1.webp" },
      { title: "Komodin", cat: "bedroom", sub: "nightstands", image: "assets/minegolden_p7_1.webp" }
    ],
    garden: [
      { title: "Mobelmor Collection", isSpecial: true, specialType: "brand", badge: "Yeni", cat: "garden", sub: "all", image: "assets/favicon.svg" },
      { title: "Bahçe Mobilyası", cat: "garden", sub: "all", image: "assets/armchair.webp" },
      { title: "Balkon Oturma", cat: "garden", sub: "all", image: "assets/hero_milo_sofa.webp" },
      { title: "Masa & Sandalye", cat: "garden", sub: "all", image: "assets/minegolden_p3_1.webp" },
      { title: "Salıncak & Hamak", cat: "garden", sub: "all", image: "assets/armchair.webp" }
    ],
    office: [
      { title: "Mobelmor Collection", isSpecial: true, specialType: "brand", badge: "Yeni", cat: "office", sub: "all", image: "assets/favicon.svg" },
      { title: "Çalışma Masası", cat: "office", sub: "desks", image: "assets/minegolden_p2_1.webp" },
      { title: "Çalışma Koltuğu", cat: "office", sub: "desks", image: "assets/armchair.webp" },
      { title: "Kitaplık & Raf", cat: "office", sub: "bookcases", image: "assets/minegolden_p8_1.webp" },
      { title: "Keson & Çekmece", cat: "office", sub: "desks", image: "assets/minegolden_p7_1.webp" }
    ],
    all: [
      { title: "Mobelmor Collection", isSpecial: true, specialType: "brand", badge: "Yeni", cat: "all", sub: "all", image: "assets/favicon.svg" },
      { title: "Oturma Odası", cat: "living", sub: "all", image: "assets/minegolden_p1_1.webp" },
      { title: "Yemek Odası", cat: "dining", sub: "all", image: "assets/minegolden_p3_1.webp" },
      { title: "Yatak Odası", cat: "bedroom", sub: "all", image: "assets/asya_main.webp" },
      { title: "Koltuk Takımı", cat: "living", sub: "sofas", image: "assets/hero_milo_sofa.webp" },
      { title: "TV Ünitesi", cat: "living", sub: "tv-units", image: "assets/minegolden_p8_1.webp" },
      { title: "Yemek Masası", cat: "dining", sub: "dining-tables", image: "assets/minegolden_p3_1.webp" },
      { title: "Karyola & Baza", cat: "bedroom", sub: "beds", image: "assets/bed.webp" },
      { title: "Sehpalar", cat: "living", sub: "tables", image: "assets/minegolden_p2_1.webp" }
    ]
  };

  const renderCategoryHeaderAndSubchips = () => {
    const heroTitle = document.getElementById("categoryHeroTitle");
    const circlesTrack = document.getElementById("catSubcirclesTrack");
    const bannerTag = document.getElementById("catBannerTag");
    const discountNum = document.getElementById("catDiscountNum");
    const discountSub = document.getElementById("catDiscountSub");
    const bannerText = document.getElementById("catBannerText");
    const bannerImg = document.getElementById("catBannerImg");

    const catName = CATEGORY_NAMES[currentCategory] || "Tüm Koleksiyon";

    // 1. Update Clean Centered Category Title
    if (heroTitle) {
      heroTitle.textContent = catName.toUpperCase();
    }

    // 2. Update Promo Campaign Banner
    const promo = CATEGORY_CAMPAIGNS[currentCategory] || CATEGORY_CAMPAIGNS.all;
    if (bannerTag) bannerTag.textContent = promo.badge;
    if (discountNum) discountNum.textContent = promo.discount;
    if (discountSub) discountSub.textContent = promo.discountSub;
    if (bannerText) bannerText.textContent = promo.text;
    if (bannerImg) {
      bannerImg.src = promo.image;
      bannerImg.alt = promo.badge;
    }

    // 3. Render Stories Subcategory Circles
    if (circlesTrack) {
      const circleItems = CATEGORY_STORY_CIRCLES[currentCategory] || CATEGORY_STORY_CIRCLES.all;

      circlesTrack.innerHTML = circleItems.map(item => {
        const targetCat = item.cat || currentCategory;
        const targetSub = item.sub || "all";
        const isItemActive = (currentCategory === targetCat && (currentSubcategory === targetSub || (currentSubcategory === "all" && targetSub === "all" && !item.isSpecial)));

        let specialClass = "";
        let innerImgContent = `<img src="${item.image}" alt="${item.title}" onerror="this.onerror=null; this.src='assets/minegolden_p1_1.webp';">`;

        if (item.specialType === "brand") {
          specialClass = "special-brand";
          innerImgContent = `
                        <div class="brand-circle-content">
                            <span class="brand-logo-text">mobelmor</span>
                            <span class="brand-logo-text" style="font-size:0.55rem; opacity:0.8;">COLLECTION</span>
                        </div>
                    `;
        } else if (item.specialType === "series") {
          specialClass = "special-series";
          const firstWord = item.title.split(' ')[0];
          const restWords = item.title.split(' ').slice(1).join(' ');
          innerImgContent = `
                        <div class="brand-circle-content">
                            <span class="brand-logo-text" style="font-size:0.75rem; color:#facc15;">${firstWord}</span>
                            <span class="brand-logo-text" style="font-size:0.52rem; opacity:0.9;">${restWords}</span>
                        </div>
                    `;
        }

        const badgeHtml = item.badge ? `<span class="cat-circle-badge-yeni">${item.badge}</span>` : "";

        return `
                    <div class="cat-circle-card ${specialClass} ${isItemActive ? 'active' : ''}" data-cat="${targetCat}" data-sub="${targetSub}">
                        <div class="cat-circle-img-wrap">
                            ${innerImgContent}
                            ${badgeHtml}
                        </div>
                        <span class="cat-circle-label">${item.title}</span>
                    </div>
                `;
      }).join('');

      // Add click listeners to circles
      circlesTrack.querySelectorAll(".cat-circle-card").forEach(card => {
        card.addEventListener("click", (e) => {
          e.preventDefault();
          const cat = card.getAttribute("data-cat");
          const sub = card.getAttribute("data-sub");
          if (cat) {
            selectCategory(cat, sub || "all", true);
          }
        });
      });
    }
  };

  const updateActiveCategoryUI = () => {
    document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".dropdown-item").forEach(i => i.classList.remove("active"));
    document.querySelectorAll(".vivense-nav-item").forEach(item => item.classList.remove("active"));

    const targetPill = document.querySelector(`.cat-pill[data-category="${currentCategory}"]`);
    if (targetPill) targetPill.classList.add("active");

    if (currentSubcategory !== "all") {
      const targetSub = document.querySelector(`.dropdown-item[data-cat="${currentCategory}"][data-sub="${currentSubcategory}"]`);
      if (targetSub) targetSub.classList.add("active");
    }

    // Highlight single active Vivense category navbar link only on category pages
    const isCategoryPage = window.location.pathname.includes("kategori") || window.location.pathname.includes("category");
    if (isCategoryPage && currentCategory && currentCategory !== "all") {
      const catSlug = window.CATEGORY_SLUGS ? (window.CATEGORY_SLUGS[currentCategory] || currentCategory) : currentCategory;

      let matchedItem = null;
      // 1. Try exact subcategory match first
      if (currentSubcategory && currentSubcategory !== "all") {
        matchedItem = Array.from(document.querySelectorAll(".vivense-nav-item")).find(item => {
          const link = item.querySelector(".vivense-nav-link");
          if (!link) return false;
          const href = link.getAttribute("href") || "";
          return href.includes(`sub=${currentSubcategory}`) && (href.includes(`c=${catSlug}`) || href.includes(`c=${currentCategory}`));
        });
      }

      // 2. If no subcategory match, match exact primary category (no sub param)
      if (!matchedItem) {
        matchedItem = Array.from(document.querySelectorAll(".vivense-nav-item")).find(item => {
          const link = item.querySelector(".vivense-nav-link");
          if (!link) return false;
          const href = link.getAttribute("href") || "";
          return (href.includes(`c=${catSlug}`) || href.includes(`c=${currentCategory}`)) && !href.includes("sub=");
        });
      }

      if (matchedItem) {
        matchedItem.classList.add("active");
      }
    }

    renderCategoryHeaderAndSubchips();
  };

  const selectCategory = (cat, sub = "all", updateHistory = true) => {
    currentCategory = cat;
    currentSubcategory = sub;

    const catSlug = window.CATEGORY_SLUGS ? (window.CATEGORY_SLUGS[cat] || cat) : cat;
    const targetUrl = (sub && sub !== 'all') ? `kategori.html?c=${catSlug}&sub=${sub}` : `kategori.html?c=${catSlug}`;
    const isCategoryPage = window.location.pathname.includes("kategori") || window.location.pathname.includes("category");

    if (isCategoryPage) {
      if (updateHistory && window.history && window.history.pushState) {
        window.history.pushState({ cat, sub }, "", targetUrl);
      }
      document.querySelectorAll(".cat-dropdown-wrapper").forEach(w => w.classList.remove("open"));
      updateActiveCategoryUI();
      renderProducts();
    } else {
      window.location.href = targetUrl;
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
    const filterParam = urlParams.get("filter");

    let resolvedCat = "all";
    let resolvedSub = "all";

    if (cParam) {
      if (cParam === "tv-uniteleri" || cParam === "tv-unitesi") {
        resolvedCat = "living";
        resolvedSub = "tv-units";
      } else {
        resolvedCat = window.SLUG_TO_CATEGORY ? (window.SLUG_TO_CATEGORY[cParam] || cParam) : cParam;
      }
    } else if (catParam) {
      if (catParam === "tv-uniteleri" || catParam === "tv-unitesi") {
        resolvedCat = "living";
        resolvedSub = "tv-units";
      } else {
        resolvedCat = window.SLUG_TO_CATEGORY ? (window.SLUG_TO_CATEGORY[catParam] || catParam) : catParam;
      }
    } else {
      // Check direct pathname: /oturma-odasi or /oturma-odasi/sofas
      const pathParts = window.location.pathname.split('/').filter(Boolean);
      if (pathParts.length > 0) {
        const last = pathParts[pathParts.length - 1].replace(/\.html$/, '');
        if (last === "tv-uniteleri" || last === "tv-unitesi") {
          resolvedCat = "living";
          resolvedSub = "tv-units";
        } else if (window.SLUG_TO_CATEGORY && window.SLUG_TO_CATEGORY[last]) {
          resolvedCat = window.SLUG_TO_CATEGORY[last];
        }
      }
    }

    if (subParam) {
      resolvedSub = subParam;
    }

    const qParam = urlParams.get("q") || urlParams.get("query") || urlParams.get("search");
    if (qParam) {
      searchQuery = qParam;
      const sInput = document.getElementById("searchInput");
      if (sInput) sInput.value = qParam;
      const mInput = document.getElementById("mobileSearchInput");
      if (mInput) mInput.value = qParam;
      const cBtn = document.getElementById("clearSearchBtn");
      if (cBtn) cBtn.style.display = "inline-flex";
    }

    currentCategory = resolvedCat;
    currentSubcategory = resolvedSub;
    updateActiveCategoryUI();
    renderProducts();
  };

  handleUrlParams();

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

        // Add store shortcut at bottom
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
              searchQuery = term;
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
            if (pid && typeof window.addToCart === 'function') {
              window.addToCart(pid);
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
        searchQuery = val;
        updateClearBtnState(val);

        const isCategoryPage = window.location.pathname.includes("kategori") || window.location.pathname.includes("category");
        if (isCategoryPage) {
          renderProducts();
        }

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
          searchQuery = "";
          updateClearBtnState("");
          closeDropdown();
          const isCategoryPage = window.location.pathname.includes("kategori") || window.location.pathname.includes("category");
          if (isCategoryPage) {
            renderProducts();
          }
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

  window.addToCart = addToCart;
  initLiveSearchEngine();

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

  // Cart Drawer Trigger
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

  // Prevent background touch scrolling on overlays and fixed drawer sections
  const preventScrollTouch = (e) => {
    if (e.cancelable) e.preventDefault();
  };
  document.getElementById("cartOverlay")?.addEventListener("touchmove", preventScrollTouch, { passive: false });
  document.getElementById("wishlistOverlay")?.addEventListener("touchmove", preventScrollTouch, { passive: false });
  document.getElementById("checkoutOverlay")?.addEventListener("touchmove", (e) => {
    if (e.target.id === "checkoutOverlay") preventScrollTouch(e);
  }, { passive: false });
  document.getElementById("quickViewOverlay")?.addEventListener("touchmove", (e) => {
    if (e.target.id === "quickViewOverlay") preventScrollTouch(e);
  }, { passive: false });

  document.querySelector("#cartDrawer .cart-header")?.addEventListener("touchmove", preventScrollTouch, { passive: false });
  document.querySelector("#cartDrawer .cart-footer")?.addEventListener("touchmove", preventScrollTouch, { passive: false });
  document.querySelector("#wishlistDrawer .cart-header")?.addEventListener("touchmove", preventScrollTouch, { passive: false });
  document.querySelector("#wishlistDrawer .cart-footer")?.addEventListener("touchmove", preventScrollTouch, { passive: false });

  trapDrawerScroll(document.getElementById("cartBody"));
  trapDrawerScroll(document.getElementById("wishlistBody"));

  document.getElementById("closeQuickViewBtn")?.addEventListener("click", () => {
    document.getElementById("quickViewOverlay")?.classList.remove("active");
    document.body.classList.remove("modal-open");
    unlockBodyScroll(true);
  });
  document.getElementById("quickViewOverlay")?.addEventListener("click", (e) => {
    if (e.target.id === "quickViewOverlay") {
      document.getElementById("quickViewOverlay")?.classList.remove("active");
      document.body.classList.remove("modal-open");
      unlockBodyScroll(true);
    }
  });

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

  window.openAuthModal = (tab = "login") => {
    const overlay = document.getElementById("authModalOverlay");
    const loginFormEl = document.getElementById("loginForm");
    const registerFormEl = document.getElementById("registerForm");
    const tabLoginBtnEl = document.getElementById("tabLoginBtn");
    const tabRegisterBtnEl = document.getElementById("tabRegisterBtn");

    document.getElementById("userMenuDropdown")?.classList.remove("active");
    document.getElementById("orderTrackDropdown")?.classList.remove("active");

    if (overlay) {
      overlay.classList.add("active");
      document.body.classList.add("modal-open");
    }

    if (tab === "register") {
      if (tabRegisterBtnEl) {
        tabRegisterBtnEl.classList.add("active");
        tabRegisterBtnEl.style.color = "#6b21a8";
        tabRegisterBtnEl.style.borderBottom = "2px solid #6b21a8";
        tabRegisterBtnEl.style.fontWeight = "800";
      }
      if (tabLoginBtnEl) {
        tabLoginBtnEl.classList.remove("active");
        tabLoginBtnEl.style.color = "#71717a";
        tabLoginBtnEl.style.borderBottom = "none";
        tabLoginBtnEl.style.fontWeight = "700";
      }
      if (registerFormEl) registerFormEl.style.display = "flex";
      if (loginFormEl) loginFormEl.style.display = "none";
      setTimeout(() => document.getElementById("regName")?.focus(), 100);
    } else {
      if (tabLoginBtnEl) {
        tabLoginBtnEl.classList.add("active");
        tabLoginBtnEl.style.color = "#6b21a8";
        tabLoginBtnEl.style.borderBottom = "2px solid #6b21a8";
        tabLoginBtnEl.style.fontWeight = "800";
      }
      if (tabRegisterBtnEl) {
        tabRegisterBtnEl.classList.remove("active");
        tabRegisterBtnEl.style.color = "#71717a";
        tabRegisterBtnEl.style.borderBottom = "none";
        tabRegisterBtnEl.style.fontWeight = "700";
      }
      if (loginFormEl) loginFormEl.style.display = "flex";
      if (registerFormEl) registerFormEl.style.display = "none";
      setTimeout(() => document.getElementById("loginEmail")?.focus(), 100);
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
    const userGreetingOnPage = document.getElementById("userGreeting");

    if (user) {
      const rawName = user.fullName || user.name || "Müşteri";
      const dispName = formatDisplayName(rawName);
      const fullDispName = formatFullName(rawName);
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
      if (userGreetingOnPage) {
        userGreetingOnPage.innerHTML = `<span style="color:#16a34a; font-weight:700;"><i class="fa-solid fa-circle-check"></i> Giriş Yapıldı:</span> ${fullDispName} (${user.email || ''})`;
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
      if (userGreetingOnPage) {
        userGreetingOnPage.innerHTML = `<button type="button" class="btn interactive-btn" onclick="openAuthModal('login')" style="background:#f3e8ff; color:#6b21a8; font-size:0.82rem; padding:6px 14px; border-radius:999px; border:none; font-weight:700;"><i class="fa-regular fa-user"></i> Üye Girişi Yap</button>`;
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
    document.body.classList.remove("modal-open");
    unlockBodyScroll(true);
  });
  document.getElementById("authModalOverlay")?.addEventListener("click", (e) => {
    if (e.target.id === "authModalOverlay") {
      document.getElementById("authModalOverlay")?.classList.remove("active");
      document.body.classList.remove("modal-open");
      unlockBodyScroll(true);
    }
  });

  // Real Login Submit Handler
  loginForm?.addEventListener("submit", async (e) => {
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
      document.getElementById("authModalOverlay")?.classList.remove("active");
      document.body.classList.remove("modal-open");
      showToast(`Hoş geldiniz, ${sessionUser.fullName || sessionUser.name}!`, "fa-circle-check");
      loginForm.reset();
      if (window.location.pathname.includes("siparislerim") && typeof renderOrdersPage === "function") {
        renderOrdersPage();
      }
    } catch (err) {
      showToast(err.message, "fa-triangle-exclamation");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;
      }
    }
  });

  // Real Register Submit Handler
  registerForm?.addEventListener("submit", async (e) => {
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
        registerForm.reset();
        window.openAuthModal("login");
      } else {
        updateAuthUI();
        document.getElementById("authModalOverlay")?.classList.remove("active");
        document.body.classList.remove("modal-open");
        showToast(`Üyeliğiniz oluşturuldu! Hoş geldiniz, ${name}.`, "fa-circle-check");
        registerForm.reset();
      }
    } catch (err) {
      showToast(err.message, "fa-triangle-exclamation");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;
      }
    }
  });

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
        items: cart.map(i => ({ id: i.id, title: i.title, price: i.price, qty: i.qty, image: i.image })),
        total: subtotal,
        totalAmount: subtotal
      };

      // Save order in both user orders and admin store orders
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

  updateAuthUI();
  updateBadges();
  renderCart();

  // ── Clean Legacy Mock / Demo Orders from Storage ──
  const cleanupMockOrders = () => {
    try {
      let orders = JSON.parse(localStorage.getItem("mobelmor_orders") || "[]");
      const cleaned = orders.filter(o => o.id !== "MBL-782190" && o.orderNumber !== "MBL-782190" && o.customer?.email !== "ahmet@example.com");
      if (cleaned.length !== orders.length) {
        localStorage.setItem("mobelmor_orders", JSON.stringify(cleaned));
      }

      let allOrders = JSON.parse(localStorage.getItem("mobelmor_all_orders") || "[]");
      const cleanedAll = allOrders.filter(o => o.id !== "MBL-782190" && o.orderNumber !== "MBL-782190" && (o.customerEmail !== "ahmet@example.com" && o.customer?.email !== "ahmet@example.com"));
      if (cleanedAll.length !== allOrders.length) {
        localStorage.setItem("mobelmor_all_orders", JSON.stringify(cleanedAll));
      }
    } catch (e) {}
  };
  cleanupMockOrders();

  // ── Orders & Tracking Page Logic (siparislerim.html) ──
  const renderOrdersPage = () => {
    const listContainer = document.getElementById("ordersListContainer");
    if (!listContainer) return;

    cleanupMockOrders();

    const allOrders = JSON.parse(localStorage.getItem("mobelmor_orders") || "[]")
      .filter(o => o.id !== "MBL-782190" && o.orderNumber !== "MBL-782190");
    const currentUser = getCurrentUser();

    let displayOrders = [];
    if (currentUser) {
      displayOrders = allOrders.filter(o =>
        (o.customer?.email && o.customer.email.toLowerCase() === currentUser.email.toLowerCase()) ||
        (o.customerEmail && o.customerEmail.toLowerCase() === currentUser.email.toLowerCase()) ||
        (o.customer?.phone && o.customer.phone === currentUser.phone)
      );
    } else {
      // For guest visitors, show orders placed in their current browser session
      displayOrders = allOrders;
    }

    renderOrdersList(displayOrders);
  };

  const renderOrdersList = (orders) => {
    const listContainer = document.getElementById("ordersListContainer");
    if (!listContainer) return;

    if (!orders || orders.length === 0) {
      listContainer.innerHTML = `
                <div class="order-card" style="text-align:center; padding:48px 20px; color:#71717a;">
                    <i class="fa-solid fa-box-open" style="font-size:3rem; color:#cbd5e1; margin-bottom:16px;"></i>
                    <h3 style="color:#18181b; margin:0 0 8px 0;">Kayıtlı Sipariş Bulunamadı</h3>
                    <p style="margin:0 0 16px 0; font-size:0.9rem;">Henüz kayıtlı bir siparişiniz görünmüyor veya arama kriteriyle eşleşen sipariş yok.</p>
                    <a href="kategori.html?c=tum-koleksiyon" class="btn btn-primary interactive-btn" style="padding:10px 24px; text-decoration:none; display:inline-block;">Koleksiyonu İncele</a>
                </div>
            `;
      return;
    }

    listContainer.innerHTML = orders.map(order => {
      const statusKey = (order.status || "preparing").toLowerCase();
      let pillClass = "status-preparing";
      let statusLabel = "İmalat & Hazırlık Aşamasında";
      let stepIndex = 2; // Default when order is placed: Step 1 is done, Step 2 is Active (Hazırlanıyor)

      if (statusKey === "shipping" || statusKey === "kargoda" || statusKey === "sevkiyatta") {
        pillClass = "status-shipping";
        statusLabel = "Sevkiyatta / Özel Mobilya Lojistiğinde";
        stepIndex = 3;
      } else if (statusKey === "delivered" || statusKey === "teslim edildi" || statusKey === "tamamlandı") {
        pillClass = "status-delivered";
        statusLabel = "Teslim Edildi & Kuruldu";
        stepIndex = 4;
      } else if (statusKey === "cancelled" || statusKey === "iptal") {
        pillClass = "status-cancelled";
        statusLabel = "İptal Edildi";
        stepIndex = 0;
      } else {
        // "preparing", "yeni", "hazırlanıyor"
        pillClass = "status-preparing";
        statusLabel = "İmalat & Hazırlık Aşamasında";
        stepIndex = 2;
      }

      const orderNum = order.orderNumber || order.id || "MBL-000000";
      const orderDate = order.date || (order.createdAt ? new Date(order.createdAt).toLocaleDateString("tr-TR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" }) : "Bugün");

      return `
                <div class="order-card">
                    <div class="order-card-header">
                        <div class="order-id-group">
                            <span class="order-id-badge"><i class="fa-solid fa-hashtag" style="color:#7c3aed;"></i> ${orderNum}</span>
                            <span class="order-date-badge"><i class="fa-regular fa-calendar" style="color:#7c3aed;"></i> ${orderDate}</span>
                        </div>
                        <span class="order-status-pill ${pillClass}">
                            <i class="fa-solid fa-circle" style="font-size:0.55rem;"></i> ${order.statusText || statusLabel}
                        </span>
                    </div>

                    <!-- 4-Step Furniture Delivery Timeline -->
                    <div class="order-timeline-wrap">
                        <div class="order-timeline">
                            <div class="timeline-step ${stepIndex >= 1 ? 'completed' : ''}">
                                <div class="timeline-icon-box"><i class="fa-solid fa-check"></i></div>
                                <div class="timeline-label">Sipariş Alındı</div>
                            </div>
                            <div class="timeline-step ${stepIndex > 2 ? 'completed' : (stepIndex === 2 ? 'active' : '')}">
                                <div class="timeline-icon-box">${stepIndex > 2 ? '<i class="fa-solid fa-check"></i>' : (stepIndex === 2 ? '2' : '2')}</div>
                                <div class="timeline-label">İskelet &amp; Döşeme</div>
                            </div>
                            <div class="timeline-step ${stepIndex > 3 ? 'completed' : (stepIndex === 3 ? 'active' : '')}">
                                <div class="timeline-icon-box">${stepIndex > 3 ? '<i class="fa-solid fa-check"></i>' : (stepIndex === 3 ? '3' : '3')}</div>
                                <div class="timeline-label">Sevkiyat &amp; Nakliye</div>
                            </div>
                            <div class="timeline-step ${stepIndex === 4 ? 'completed' : ''}">
                                <div class="timeline-icon-box">${stepIndex === 4 ? '<i class="fa-solid fa-check"></i>' : '4'}</div>
                                <div class="timeline-label">Montaj &amp; Teslim</div>
                            </div>
                        </div>
                    </div>

                    <!-- Unified Product Items List -->
                    <div class="order-items-list">
                        ${(order.items || []).map(item => {
                          const itemImg = item.image ? `<img src="${item.image}" alt="${item.title}" class="order-item-img">` : `<div class="order-item-img-placeholder"><i class="fa-solid fa-couch"></i></div>`;
                          const fabricBadge = item.selectedFabric ? `<span class="order-item-badge"><i class="fa-solid fa-layer-group"></i> ${item.selectedFabric}${item.selectedColor ? ` - ${item.selectedColor}` : ''}</span>` : '';
                          return `
                            <div class="order-item-row">
                                <div class="order-item-left">
                                    ${itemImg}
                                    <div class="order-item-details">
                                        <div class="order-item-title">${item.title}</div>
                                        <div class="order-item-sub">
                                            ${fabricBadge}
                                            <span><i class="fa-solid fa-box" style="color:#7c3aed;"></i> ${item.qty || 1} Adet</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="order-item-price">${formatPrice((item.price || 0) * (item.qty || 1))}</div>
                            </div>
                          `;
                        }).join('')}
                    </div>

                    <!-- Info Box (Address, Notes, Payment) -->
                    <div class="order-info-box">
                        <div class="order-info-line">
                            <i class="fa-solid fa-location-dot"></i>
                            <div><strong>Teslimat Adresi:</strong> ${order.customer?.address || order.address || 'Belirtilmedi'}</div>
                        </div>
                        ${(order.customer?.note || order.notes) ? `
                            <div class="order-info-line">
                                <i class="fa-solid fa-note-sticky"></i>
                                <div><strong>Sipariş Notu:</strong> ${order.customer?.note || order.notes}</div>
                            </div>
                        ` : ''}
                        ${(order.paymentMethodLabel || order.paymentMethod) ? `
                            <div class="order-info-line">
                                <i class="fa-solid fa-credit-card"></i>
                                <div><strong>Ödeme:</strong> ${order.paymentMethodLabel || order.paymentMethod}</div>
                            </div>
                        ` : ''}
                    </div>

                    <!-- Order Footer -->
                    <div class="order-footer">
                        <div class="order-total-block">
                            <span class="order-total-label">Toplam:</span>
                            <span class="order-total-val">${formatPrice(order.total || order.totalAmount || 0)}</span>
                        </div>
                        <div class="order-actions-group" style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                            <button type="button" class="order-receipt-btn interactive-btn" onclick="openOrderReceipt('${orderNum}')" title="Sipariş Makbuzu & Teyit Formu">
                                <i class="fa-solid fa-receipt" style="color:#7c3aed;"></i> Sipariş Makbuzu
                            </button>
                            ${(order.invoiceData || order.invoiceUrl || order.invoiceAttached) ? `
                                <button type="button" class="order-invoice-btn-official interactive-btn" onclick="openOfficialInvoice('${orderNum}')" title="Yüklenen Resmi E-Arşiv Faturasını Aç / İndir">
                                    <i class="fa-solid fa-file-invoice" style="color:#15803d;"></i> E-Arşiv Faturası
                                </button>
                            ` : ''}
                            <a href="https://wa.me/905300000000?text=${encodeURIComponent(`Merhaba, ${orderNum} numaralı siparişim hakkında bilgi almak istiyorum.`)}" target="_blank" class="order-support-btn interactive-btn">
                                <i class="fa-brands fa-whatsapp" style="font-size:1.1rem;"></i> Destek Al
                            </a>
                        </div>
                    </div>
                </div>
            `;
    }).join('');
  };

  // 1. OTOMATİK SİPARİŞ MAKBUZU & BİLGİ FORMU (RESMİ E-ARŞİV DEĞİL)
  window.openOrderReceipt = (orderNum) => {
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

    const order = orders.find(o => o.orderNumber === orderNum || o.id === orderNum) || {
      orderNumber: orderNum,
      date: new Date().toLocaleDateString("tr-TR"),
      customerName: "Değerli Müşterimiz",
      totalAmount: 0,
      items: []
    };

    const cName = order.customerName || (order.customer && order.customer.fullName) || "Değerli Müşterimiz";
    const cEmail = order.customerEmail || (order.customer && order.customer.email) || "-";
    const cPhone = order.customerPhone || (order.customer && order.customer.phone) || "-";
    const cAddress = order.address || (order.customer && order.customer.address) || (order.city ? `${order.city} / ${order.district || ''}` : "Türkiye");
    const oDate = order.date || (order.createdAt ? new Date(order.createdAt).toLocaleDateString("tr-TR") : new Date().toLocaleDateString("tr-TR"));
    const receiptNum = `MBL-MKB-${orderNum.replace('MBL-', '')}`;
    const total = order.totalAmount || order.total || 0;
    
    // KDV Calculations
    const kdvRate = 0.10;
    const subTotal = Math.round(total / (1 + kdvRate));
    const kdvTotal = total - subTotal;

    let receiptOverlay = document.getElementById("orderInvoiceOverlay");
    if (!receiptOverlay) {
      receiptOverlay = document.createElement("div");
      receiptOverlay.id = "orderInvoiceOverlay";
      receiptOverlay.className = "modal-overlay invoice-modal-overlay";
      document.body.appendChild(receiptOverlay);
    }

    const itemsRows = (order.items || []).map((item, idx) => {
      const itemQty = item.qty || 1;
      const itemTotal = (item.price || 0) * itemQty;
      const itemSub = Math.round(itemTotal / (1 + kdvRate));
      const itemUnitSub = Math.round(itemSub / itemQty);
      const itemKdv = itemTotal - itemSub;
      const fabricDetail = item.selectedFabric ? ` (${item.selectedFabric}${item.selectedColor ? ' - ' + item.selectedColor : ''})` : '';

      return `
        <tr>
          <td style="text-align:center; padding:8px; border:1px solid #e4e4e7; font-size:0.85rem;">${idx + 1}</td>
          <td style="padding:8px 12px; border:1px solid #e4e4e7; font-size:0.85rem;">
            <strong>${item.title || 'Mobilya Ürünü'}</strong>
            ${fabricDetail ? `<div style="font-size:0.75rem; color:#71717a;">${fabricDetail}</div>` : ''}
          </td>
          <td style="text-align:center; padding:8px; border:1px solid #e4e4e7; font-size:0.85rem;">${itemQty} Adet</td>
          <td style="text-align:right; padding:8px; border:1px solid #e4e4e7; font-size:0.85rem;">${formatPrice(itemUnitSub)}</td>
          <td style="text-align:center; padding:8px; border:1px solid #e4e4e7; font-size:0.85rem;">%10</td>
          <td style="text-align:right; padding:8px; border:1px solid #e4e4e7; font-size:0.85rem;">${formatPrice(itemKdv)}</td>
          <td style="text-align:right; padding:8px; border:1px solid #e4e4e7; font-size:0.85rem; font-weight:700;">${formatPrice(itemTotal)}</td>
        </tr>
      `;
    }).join('') || `
      <tr>
        <td style="text-align:center; padding:8px; border:1px solid #e4e4e7;">1</td>
        <td style="padding:8px 12px; border:1px solid #e4e4e7;">Mobelmor Mobilya Siparişi (${orderNum})</td>
        <td style="text-align:center; padding:8px; border:1px solid #e4e4e7;">1 Adet</td>
        <td style="text-align:right; padding:8px; border:1px solid #e4e4e7;">${formatPrice(subTotal)}</td>
        <td style="text-align:center; padding:8px; border:1px solid #e4e4e7;">%10</td>
        <td style="text-align:right; padding:8px; border:1px solid #e4e4e7;">${formatPrice(kdvTotal)}</td>
        <td style="text-align:right; padding:8px; border:1px solid #e4e4e7; font-weight:700;">${formatPrice(total)}</td>
      </tr>
    `;

    receiptOverlay.innerHTML = `
      <div class="invoice-modal-card" id="printableInvoiceCard">
        <!-- Toolbar (hidden during print) -->
        <div class="invoice-toolbar no-print">
          <div style="display:flex; align-items:center; gap:8px;">
            <i class="fa-solid fa-receipt" style="color:#7c3aed; font-size:1.2rem;"></i>
            <span style="font-weight:800; font-size:1rem; color:#18181b;">Sipariş Makbuzu &amp; Teyit Belgesi</span>
          </div>
          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
            <button type="button" onclick="window.print()" class="invoice-btn-print">
              <i class="fa-solid fa-print"></i> Yazdır / PDF Kaydet
            </button>
            <button type="button" onclick="closeOrderReceipt()" class="invoice-btn-close" aria-label="Kapat">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        <!-- Official Sipariş Makbuzu Paper -->
        <div class="invoice-paper" id="invoicePaperArea">
          <!-- Top Header -->
          <div class="inv-header-grid">
            <div class="inv-seller-info">
              <div class="inv-logo-wrap">
                <img src="assets/mobelmor-logo-vector.svg" onerror="this.src='assets/favicon.svg'" alt="Mobelmor" style="height:36px; width:auto; margin-bottom:6px;">
              </div>
              <h3 style="font-size:0.95rem; font-weight:800; color:#18181b; margin:0 0 4px 0;">MOBELMOR MOBİLYA SAN. VE TİC. LTD. ŞTİ.</h3>
              <div style="font-size:0.8rem; color:#52525b; line-height:1.4;">
                Mobilya Sanayi İhtisas Bölgesi 4. Cadde No: 18<br>
                İnegöl / BURSA - TÜRKİYE<br>
                <strong>Vergi Dairesi:</strong> İnegöl V.D. | <strong>VKN:</strong> 6220819420<br>
                <strong>Mersis No:</strong> 0622081942000001 | <strong>Web:</strong> mobelmor.com
              </div>
            </div>

            <div class="inv-meta-box">
              <div class="inv-title-badge">SİPARİŞ MAKBUZU</div>
              <table style="width:100%; font-size:0.82rem; border-collapse:collapse; margin-top:8px;">
                <tr>
                  <td style="padding:3px 0; color:#71717a; font-weight:600;">Makbuz No:</td>
                  <td style="padding:3px 0; text-align:right; font-weight:800; color:#18181b;">${receiptNum}</td>
                </tr>
                <tr>
                  <td style="padding:3px 0; color:#71717a; font-weight:600;">Sipariş Tarihi:</td>
                  <td style="padding:3px 0; text-align:right; font-weight:700; color:#18181b;">${oDate}</td>
                </tr>
                <tr>
                  <td style="padding:3px 0; color:#71717a; font-weight:600;">Sipariş No:</td>
                  <td style="padding:3px 0; text-align:right; font-weight:700; color:#7c3aed;">${orderNum}</td>
                </tr>
                <tr>
                  <td style="padding:3px 0; color:#71717a; font-weight:600;">Ödeme Yöntemi:</td>
                  <td style="padding:3px 0; text-align:right; font-weight:700; color:#18181b;">${order.paymentMethodLabel || order.paymentMethod || 'Kredi Kartı / 3D Secure'}</td>
                </tr>
              </table>
            </div>
          </div>

          <!-- Customer & Buyer Box -->
          <div class="inv-customer-box">
            <div style="font-size:0.75rem; font-weight:800; color:#7c3aed; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:4px;">SAYIN (ALICI BİLGİLERİ)</div>
            <div style="font-size:0.95rem; font-weight:800; color:#18181b;">${cName}</div>
            <div style="font-size:0.82rem; color:#52525b; margin-top:3px; line-height:1.4;">
              <strong>Teslimat Adresi:</strong> ${cAddress}<br>
              <strong>E-Posta:</strong> ${cEmail} | <strong>Telefon:</strong> ${cPhone}<br>
              <strong>Müşteri Tipi:</strong> Bireysel / Nihai Tüketici
            </div>
          </div>

          <!-- Items Table -->
          <div class="table-scroll-hint no-print"><i class="fa-solid fa-arrows-left-right"></i> Tabloyu sağa/sola kaydırarak inceleyebilirsiniz</div>
          <div class="invoice-table-wrapper">
            <table class="invoice-table">
              <thead>
                <tr style="background:#f8fafc; color:#3f3f46; font-size:0.8rem; text-transform:uppercase; font-weight:700;">
                  <th style="padding:8px; border:1px solid #e4e4e7; width:45px; text-align:center;">Sıra</th>
                  <th style="padding:8px 12px; border:1px solid #e4e4e7; text-align:left; min-width:200px;">Sipariş Edilen Ürün &amp; Seçenekler</th>
                  <th style="padding:8px; border:1px solid #e4e4e7; width:75px; text-align:center;">Miktar</th>
                  <th style="padding:8px; border:1px solid #e4e4e7; width:95px; text-align:right;">Birim Fiyat</th>
                  <th style="padding:8px; border:1px solid #e4e4e7; width:55px; text-align:center;">KDV</th>
                  <th style="padding:8px; border:1px solid #e4e4e7; width:85px; text-align:right;">KDV Tutarı</th>
                  <th style="padding:8px 12px; border:1px solid #e4e4e7; width:110px; text-align:right;">Toplam Tutar</th>
                </tr>
              </thead>
              <tbody>
                ${itemsRows}
              </tbody>
            </table>
          </div>

          <!-- Bottom Totals & Notice -->
          <div class="inv-bottom-grid">
            <div class="inv-legal-notice">
              <div style="font-size:0.75rem; color:#71717a; line-height:1.4;">
                <i class="fa-solid fa-circle-info" style="color:#7c3aed;"></i> İşbu belge Mobelmor <strong>Sipariş Teyit Makbuzu ve Bilgi Formudur</strong>.<br>
                Resmi e-Arşiv faturanız muhasebe ve sevkiyat sürecinde düzenlenerek panelinize yüklenir.
              </div>
              <div style="margin-top:8px; font-size:0.72rem; color:#a1a1aa;">
                Düzenleme Saati: ${new Date().toLocaleTimeString('tr-TR')} | Durum: SİPARİŞ ONAYLANDI
              </div>
            </div>

            <div class="inv-totals-box">
              <table style="width:100%; font-size:0.85rem; border-collapse:collapse;">
                <tr>
                  <td style="padding:4px 0; color:#71717a;">Ara Toplam:</td>
                  <td style="padding:4px 0; text-align:right; font-weight:600; color:#18181b;">${formatPrice(subTotal)}</td>
                </tr>
                <tr>
                  <td style="padding:4px 0; color:#71717a;">KDV (%10):</td>
                  <td style="padding:4px 0; text-align:right; font-weight:600; color:#18181b;">${formatPrice(kdvTotal)}</td>
                </tr>
                <tr style="border-top:2px solid #18181b; border-bottom:2px solid #18181b;">
                  <td style="padding:8px 0; font-weight:800; font-size:0.95rem; color:#18181b;">ÖDENECEK TOPLAM:</td>
                  <td style="padding:8px 0; text-align:right; font-weight:900; font-size:1.1rem; color:#7c3aed;">${formatPrice(total)}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;

    receiptOverlay.classList.add("active");
    document.body.classList.add("modal-open");

    receiptOverlay.onclick = (e) => {
      if (e.target.id === "orderInvoiceOverlay") {
        closeOrderReceipt();
      }
    };
  };

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
      // Create a temporary anchor to view/download the uploaded PDF/File
      const a = document.createElement("a");
      a.href = order.invoiceData;
      a.download = `Mobelmor_EArsiv_Fatura_${orderNum}.pdf`;
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  // Lookup Form Submit
  const lookupForm = document.getElementById("orderLookupForm");
  if (lookupForm) {
    lookupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const orderIdInput = document.getElementById("lookupOrderId")?.value.trim().toUpperCase();
      const emailInput = document.getElementById("lookupEmail")?.value.trim().toLowerCase();

      const allOrders = JSON.parse(localStorage.getItem("mobelmor_orders") || "[]");
      const matched = allOrders.filter(o => {
        const idMatch = o.id && o.id.toUpperCase().includes(orderIdInput);
        const emailMatch = (o.customer?.email && o.customer.email.toLowerCase().includes(emailInput)) ||
          (o.customer?.phone && o.customer.phone.includes(emailInput));
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



