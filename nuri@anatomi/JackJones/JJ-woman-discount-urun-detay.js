const data = [
  {
    id: 1,
    ProductCode: 12253330,
    name: "Kadın Beyzbol Yakalı Bomber Ceket - Leila",
    colours_name: "Siyah / Black",
    categories: "256, 262,271",
    IlkFiyat: "1,990.00 TL",
    IndirimliFiyat: "1,592.00 TL",
  },
  {
    id: 2,
    ProductCode: 12207160,
    name: "Kadın Mom Fit Jean - Lisbon",
    colours_name: "Mavi / Dark Blue Denim",
    categories: "258, 262, 265,271",
    IlkFiyat: "1,390.00 TL",
    IndirimliFiyat: "1,112.00 TL",
  },
  {
    id: 3,
    ProductCode: 12225756,
    name: "Kadın Örme Crop Kazak - Carlota",
    colours_name: "Beyaz / Snow White",
    categories: "257, 262,271",
    IlkFiyat: "1,590.00 TL",
    IndirimliFiyat: "1,272.00 TL",
  },
  {
    id: 4,
    ProductCode: 12251644,
    name: "Kadın 3'li Logo Nakışlı Çorap Paketi - Moreno",
    colours_name: "Beyaz / White",
    categories: "260, 262,271",
    IlkFiyat: "390.00 TL",
    IndirimliFiyat: "312.00 TL",
  },
  {
    id: 5,
    ProductCode: 12252454,
    name: "Kadın Askılı Bluz - Olivia",
    colours_name: "Bej / Bone White",
    categories: "252, 262,271",
    IlkFiyat: "990.00 TL",
    IndirimliFiyat: "792.00 TL",
  },
  {
    id: 6,
    ProductCode: 12200167,
    name: "Kadın Askılı Saten Elbise - Cleo",
    colours_name: "Gri / Asphalt",
    categories: "259, 262,271",
    IlkFiyat: "1,990.00 TL",
    IndirimliFiyat: "1,592.00 TL",
  },
  {
    id: 7,
    ProductCode: 12200353,
    name: "Kadın Basic Poplin Gömlek - Jamie",
    colours_name: "Beyaz / White",
    categories: "255, 262,271",
    IlkFiyat: "1,790.00 TL",
    IndirimliFiyat: "1,432.00 TL",
  },
  {
    id: 8,
    ProductCode: 12254345,
    name: "Kadın Bisiklet Yaka Baskılı Tişört - Kora",
    colours_name: "Siyah / Black",
    categories: "252, 262,271",
    IlkFiyat: "590.00 TL",
    IndirimliFiyat: "472.00 TL",
  },
  {
    id: 9,
    ProductCode: 12251609,
    name: "Kadın Çapraz Askılı Çanta - Tucson",
    colours_name: "Siyah / Black",
    categories: "260, 262,271",
    IlkFiyat: "1,390.00 TL",
    IndirimliFiyat: "1,112.00 TL",
  },
  {
    id: 10,
    ProductCode: 12253992,
    name: "Kadın Cep Detaylı Denim Gömlek - Kayla",
    colours_name: "Mavi / Light Blue Denim",
    categories: "255, 262,271",
    IlkFiyat: "1,990.00 TL",
    IndirimliFiyat: "1,592.00 TL",
  },
  {
    id: 11,
    ProductCode: 12252770,
    name: "Kadın Çizgili Bisiklet Yaka Kazak - Ana",
    colours_name: "Beyaz / Cloud Dancer",
    categories: "257, 262,271",
    IlkFiyat: "1,590.00 TL",
    IndirimliFiyat: "1,272.00 TL",
  },
  {
    id: 12,
    ProductCode: 12213517,
    name: "Kadın Çizgili Bisiklet Yaka Örme Kazak - Mila",
    colours_name: "Mor / Lilac Breeze",
    categories: "257, 262,271",
    IlkFiyat: "1,590.00 TL",
    IndirimliFiyat: "1,272.00 TL",
  },
  {
    id: 13,
    ProductCode: 12253668,
    name: "Kadın Çizgili Desenli Uzun Kollu Tişört - Amalie",
    colours_name: "Yeşil / Medium Green",
    categories: "252, 262,271",
    IlkFiyat: "990.00 TL",
    IndirimliFiyat: "792.00 TL",
  },
  {
    id: 14,
    ProductCode: 12254283,
    name: "Kadın Cut Out / Pencereli Uzun Kollu Crop Top - Fillipa",
    colours_name: "Siyah / Black",
    categories: "252, 262,271",
    IlkFiyat: "790.00 TL",
    IndirimliFiyat: "632.00 TL",
  },
  {
    id: 15,
    ProductCode: 12253107,
    name: "Kadın Denim Ceket - Elza",
    colours_name: "Mavi / Light Blue Denim",
    categories: "256, 262,271",
    IlkFiyat: "2,390.00 TL",
    IndirimliFiyat: "1,912.00 TL",
  },
  {
    id: 16,
    ProductCode: 12206262,
    name: "Kadın Fermuar Detaylı Deri Ceket - Gail",
    colours_name: "Gri / Brindle",
    categories: "256,271",
    IlkFiyat: "1,990.00 TL",
    IndirimliFiyat: "1,592.00 TL",
  },
  {
    id: 17,
    ProductCode: 12253012,
    name: "Kadın Fonksiyonel Cepli Kargo Pantolon - Maddy",
    colours_name: "Kahverengi / Incense",
    categories: "253, 262,271",
    IlkFiyat: "1,790.00 TL",
    IndirimliFiyat: "1,432.00 TL",
  },
  {
    id: 18,
    ProductCode: 12224655,
    name: "Kadın Fonksiyonel Cepli Kargo Pantolon - Yoko",
    colours_name: "Siyah / Black",
    categories: "253, 262,271",
    IlkFiyat: "1,790.00 TL",
    IndirimliFiyat: "1,432.00 TL",
  },
  {
    id: 19,
    ProductCode: 12248959,
    name: "Kadın Geniş Paça Pantolon - Cali",
    colours_name: "Beyaz / Seedpearl",
    categories: "253, 262,271",
    IlkFiyat: "1,590.00 TL",
    IndirimliFiyat: "1,272.00 TL",
  },
  {
    id: 20,
    ProductCode: 12223962,
    name: "Kadın Göğüste JJXX Logolu Sweatshirt - Abbie",
    colours_name: "Bej / Moonbeam",
    categories: "254, 262,271",
    IlkFiyat: "990.00 TL",
    IndirimliFiyat: "792.00 TL",
  },
  {
    id: 21,
    ProductCode: 12249892,
    name: "Kadın Kapitone Ceket - Mari",
    colours_name: "Mavi / Silver Lake Blue",
    categories: "256, 262,271",
    IlkFiyat: "2,990.00 TL",
    IndirimliFiyat: "2,392.00 TL",
  },
  {
    id: 22,
    ProductCode: 12223961,
    name: "Kadın Kapüşonlu Minimal Logo Baskılı Sweatshirt - Abbie",
    colours_name: "Mor / Lilac Breeze",
    categories: "254, 262,271",
    IlkFiyat: "990.00 TL",
    IndirimliFiyat: "792.00 TL",
  },
  {
    id: 23,
    ProductCode: 12253952,
    name: "Kadın Keten Pantolon - Poppy",
    colours_name: "Kahverengi / Aloe",
    categories: "253, 262,271",
    IlkFiyat: "1,590.00 TL",
    IndirimliFiyat: "1,272.00 TL",
  },
  {
    id: 24,
    ProductCode: 12251568,
    name: "Kadın Kısa Askılı Omuz Çantası - Kenya",
    colours_name: "Siyah / Black",
    categories: "260, 262,271",
    IlkFiyat: "1,390.00 TL",
    IndirimliFiyat: "1,112.00 TL",
  },
  {
    id: 25,
    ProductCode: 12248654,
    name: "Kadın Kısa Trençkot - Carlie",
    colours_name: "Kahverengi / Dusty Olive",
    categories: "256, 262,271",
    IlkFiyat: "2,390.00 TL",
    IndirimliFiyat: "1,912.00 TL",
  },
  {
    id: 26,
    ProductCode: 12200590,
    name: "Kadın Kruvaze Ceket - Mary",
    colours_name: "Mavi / Blue Iolite",
    categories: "261, 262,271",
    IlkFiyat: "2,490.00 TL",
    IndirimliFiyat: "1,992.00 TL",
  },
  {
    id: 27,
    ProductCode: 12203700,
    name: "Kadın Logo Nakışlı Denim Şapka - Basic",
    colours_name: "Mavi / Dark Blue Denim",
    categories: "260, 262,271",
    IlkFiyat: "490.00 TL",
    IndirimliFiyat: "392.00 TL",
  },
  {
    id: 28,
    ProductCode: 12219609,
    name: "Kadın Logolu Kapüşonlu Sweatshirt - Abbie",
    colours_name: "Mor / Lilac Breeze",
    categories: "254, 262,271",
    IlkFiyat: "1,190.00 TL",
    IndirimliFiyat: "952.00 TL",
  },
  {
    id: 29,
    ProductCode: 12223960,
    name: "Kadın Logolu Sweat Pantolon - Abbie",
    colours_name: "Yeşil / Grayed Jade",
    categories: "253, 262,271",
    IlkFiyat: "990.00 TL",
    IndirimliFiyat: "792.00 TL",
  },
  {
    id: 30,
    ProductCode: 12203881,
    name: "Kadın Loose Fit Jean - Seville",
    colours_name: "Siyah / Black Denim",
    categories: "258, 262, 270,271",
    IlkFiyat: "1,390.00 TL",
    IndirimliFiyat: "1,112.00 TL",
  },
  {
    id: 31,
    ProductCode: 12236352,
    name: "Kadın Loose Fit Jean - Seville",
    colours_name: "Mavi / Medium Blue Denim",
    categories: "258, 262, 270,271",
    IlkFiyat: "1,590.00 TL",
    IndirimliFiyat: "1,272.00 TL",
  },
  {
    id: 32,
    ProductCode: 12251588,
    name: "Kadın Metal Toka Tasarımlı Omuz Çantası - Orlando",
    colours_name: "Mavi / Denim Blue",
    categories: "260, 262,271",
    IlkFiyat: "990.00 TL",
    IndirimliFiyat: "792.00 TL",
  },
  {
    id: 33,
    ProductCode: 12250268,
    name: "Kadın Midi Boy Saten Etek - Kimmie",
    colours_name: "Yeşil / Medium Green",
    categories: "259, 262,271",
    IlkFiyat: "1,390.00 TL",
    IndirimliFiyat: "1,112.00 TL",
  },
  {
    id: 34,
    ProductCode: 12205777,
    name: "Kadın Minimal JJXX Logolu Kısa Kollu Tişört - Andrea",
    colours_name: "Beyaz / Bright White",
    categories: "252, 262,271",
    IlkFiyat: "590.00 TL",
    IndirimliFiyat: "472.00 TL",
  },
  {
    id: 35,
    ProductCode: 12204490,
    name: "Kadın Mom Fit Jean - Lisbon",
    colours_name: "Beyaz / White Denim",
    categories: "258, 262, 265,271",
    IlkFiyat: "1,390.00 TL",
    IndirimliFiyat: "1,112.00 TL",
  },
  {
    id: 36,
    ProductCode: 12227293,
    name: "Kadın Mom Fit Jean - Lisbon",
    colours_name: "Mavi / Light Blue Denim",
    categories: "258, 262, 265,271",
    IlkFiyat: "1,390.00 TL",
    IndirimliFiyat: "1,112.00 TL",
  },
  {
    id: 37,
    ProductCode: 12252453,
    name: "Kadın Örme Uzun Kollu Kazak - Olivia",
    colours_name: "Bej / Bone White",
    categories: "257,271",
    IlkFiyat: "1,390.00 TL",
    IndirimliFiyat: "1,112.00 TL",
  },
  {
    id: 38,
    ProductCode: 12236944,
    name: "Kadın Pile Detaylı Kumaş Pantolon - Mary",
    colours_name: "Gri / Brindle",
    categories: "253, 261, 262,271",
    IlkFiyat: "1,990.00 TL",
    IndirimliFiyat: "1,592.00 TL",
  },
  {
    id: 39,
    ProductCode: 12255922,
    name: "Kadın Rahat Kesim Saten Pantolon - Rose",
    colours_name: "Siyah / Black",
    categories: "253, 262,271",
    IlkFiyat: "1,590.00 TL",
    IndirimliFiyat: "1,272.00 TL",
  },
  {
    id: 40,
    ProductCode: 12253069,
    name: "Kadın Relaxed Fit Jean - Elza",
    colours_name: "Mavi / Light Blue Denim",
    categories: "258, 262, 265,271",
    IlkFiyat: "1,790.00 TL",
    IndirimliFiyat: "1,432.00 TL",
  },
  {
    id: 41,
    ProductCode: 12203522,
    name: "Kadın Relaxed Fit Uzun Kollu Gömlek - Mission",
    colours_name: "Pembe / Carmine Rose",
    categories: "255, 262,271",
    IlkFiyat: "1,190.00 TL",
    IndirimliFiyat: "952.00 TL",
  },
  {
    id: 42,
    ProductCode: 12244363,
    name: "Kadın Sırt Baskılı Sweatshirt - Jada",
    colours_name: "Sarı / Bone White",
    categories: "254, 262,271",
    IlkFiyat: "1,190.00 TL",
    IndirimliFiyat: "952.00 TL",
  },
  {
    id: 43,
    ProductCode: 12203792,
    name: "Kadın Skinny Fit Jean - Vienna",
    colours_name: "Mavi / Medium Blue Denim",
    categories: "258, 262, 264,271",
    IlkFiyat: "1,190.00 TL",
    IndirimliFiyat: "952.00 TL",
  },
  {
    id: 44,
    ProductCode: 12203836,
    name: "Kadın Slim Fit Jean - Berlin",
    colours_name: "Mavi / Light Blue Denim",
    categories: "258, 262, 266,271",
    IlkFiyat: "1,390.00 TL",
    IndirimliFiyat: "1,112.00 TL",
  },
  {
    id: 45,
    ProductCode: 12203863,
    name: "Kadın Slim Fit Jean - Turin",
    colours_name: "Mavi / Dark Blue Denim",
    categories: "258, 262, 269,271",
    IlkFiyat: "1,390.00 TL",
    IndirimliFiyat: "1,112.00 TL",
  },
  {
    id: 46,
    ProductCode: 12229026,
    name: "Kadın Straight Fit Jean - Seoul",
    colours_name: "Siyah / Black Denim",
    categories: "258, 262, 267,271",
    IlkFiyat: "1,390.00 TL",
    IndirimliFiyat: "1,112.00 TL",
  },
  {
    id: 47,
    ProductCode: 12229033,
    name: "Kadın Straight Fit Jean - Seoul",
    colours_name: "Mavi / Light Blue Denim",
    categories: "258, 262, 267,271",
    IlkFiyat: "1,390.00 TL",
    IndirimliFiyat: "1,112.00 TL",
  },
  {
    id: 48,
    ProductCode: 12248129,
    name: "Kadın Straight Fit Jean - Seoul",
    colours_name: "Mavi / Light Blue Denim",
    categories: "258, 262, 267,271",
    IlkFiyat: "1,590.00 TL",
    IndirimliFiyat: "1,272.00 TL",
  },
  {
    id: 49,
    ProductCode: 12204642,
    name: "Kadın Suya Dayanıklı Suni Deri Ceket - Luna",
    colours_name: "Siyah / Black",
    categories: "256, 262,271",
    IlkFiyat: "1,990.00 TL",
    IndirimliFiyat: "1,592.00 TL",
  },
  {
    id: 50,
    ProductCode: 12253309,
    name: "Kadın Uzun Kollu Gömlek Korse - Annie",
    colours_name: "Beyaz / Blanc de Blanc",
    categories: "255, 262,271",
    IlkFiyat: "1,790.00 TL",
    IndirimliFiyat: "1,432.00 TL",
  },
  {
    id: 51,
    ProductCode: 12236442,
    name: "Kadın Wide Fit Jean - Tokyo",
    colours_name: "Siyah / Black Denim",
    categories: "258, 262, 268,271",
    IlkFiyat: "1,590.00 TL",
    IndirimliFiyat: "1,272.00 TL",
  },
  {
    id: 52,
    ProductCode: 12254792,
    name: "Kadın Yırtmaçlı Maxi Denim Etek - Adya",
    colours_name: "Gri / Grey Denim",
    categories: "259, 262,271",
    IlkFiyat: "1,990.00 TL",
    IndirimliFiyat: "1,592.00 TL",
  },
  {
    id: 53,
    ProductCode: 12248958,
    name: "Kadın Yüksek Bel Dokuma Pantolon - Ellis",
    colours_name: "Siyah / Black",
    categories: "253, 262,271",
    IlkFiyat: "1,790.00 TL",
    IndirimliFiyat: "1,432.00 TL",
  },
  {
    id: 54,
    ProductCode: 12200674,
    name: "Kadın Yüksek Bel Kumaş Pantolon - Marry",
    colours_name: "Mavi / Blue Iolite",
    categories: "253, 261, 262,271",
    IlkFiyat: "1,790.00 TL",
    IndirimliFiyat: "1,432.00 TL",
  },
  {
    id: 55,
    ProductCode: 12157417,
    name: "Unisex Balıkçı Yaka Kazak - Emil",
    colours_name: "Gri / Dark Grey Melange",
    categories: "257,271",
    IlkFiyat: "990.00 TL",
    IndirimliFiyat: "792.00 TL",
  },
  {
    id: 56,
    ProductCode: 12137190,
    name: "Unisex Bisiklet Yaka Basic Kazak",
    colours_name: "Kahverengi / Seal Brown",
    categories: "257,271",
    IlkFiyat: "999.00 TL",
    IndirimliFiyat: "799.20 TL",
  },
  {
    id: 57,
    ProductCode: 12251330,
    name: "Unisex Bisiklet Yaka Basic Sweatshirt - Collective",
    colours_name: "Sarı / Lemon Verbena",
    categories: "254,271",
    IlkFiyat: "1,591.99 TL",
    IndirimliFiyat: "1,273.59 TL",
  },
  {
    id: 58,
    ProductCode: 12237187,
    name: "Unisex Denim Ceket 491",
    colours_name: "Mavi / Blue Denim",
    categories: "256,271",
    IlkFiyat: "1,799.00 TL",
    IndirimliFiyat: "1,439.20 TL",
  },
  {
    id: 59,
    ProductCode: 12202249,
    name: "Unisex Denim Dog Logolu Tişört",
    colours_name: "Siyah / Black",
    categories: "252,271",
    IlkFiyat: "499.99 TL",
    IndirimliFiyat: "399.99 TL",
  },
  {
    id: 60,
    ProductCode: 12243689,
    name: "Unisex Harf İşlemeli Bomber Ceket - Varsity",
    colours_name: "Mavi / Navy Blazer",
    categories: "256,271",
    IlkFiyat: "1,800.99 TL",
    IndirimliFiyat: "1,440.79 TL",
  },
  {
    id: 61,
    ProductCode: 12242462,
    name: "Unisex Henry 050 Denim Gömlek",
    colours_name: "Mavi / Blue Denim",
    categories: "255,271",
    IlkFiyat: "1,300.00 TL",
    IndirimliFiyat: "1,040.00 TL",
  },
  {
    id: 62,
    ProductCode: 12243251,
    name: "Unisex Japon Teması Baskılı Kısa Kollu Tişört - Tora",
    colours_name: "Siyah / Black",
    categories: "252,271",
    IlkFiyat: "590.00 TL",
    IndirimliFiyat: "472.00 TL",
  },
  {
    id: 63,
    ProductCode: 12233972,
    name: "Unisex Kabartma Baskili Kapüsonlu Sweatshirt - Star",
    colours_name: "Siyah / Black",
    categories: "254,271",
    IlkFiyat: "1,399.00 TL",
    IndirimliFiyat: "1,119.20 TL",
  },
  {
    id: 64,
    ProductCode: 12240121,
    name: "Unisex Kabartma Logo Baskılı Tişört - Vesterbro",
    colours_name: "Beyaz / Bright White",
    categories: "252,271",
    IlkFiyat: "649.00 TL",
    IndirimliFiyat: "519.20 TL",
  },
  {
    id: 65,
    ProductCode: 12241687,
    name: "Unisex Kapüşonlu Göğüs Baskılı Sweatshirt - Vesterbro",
    colours_name: "Mor / Twilight Purple",
    categories: "254,271",
    IlkFiyat: "1,549.00 TL",
    IndirimliFiyat: "1,239.20 TL",
  },
  {
    id: 66,
    ProductCode: 12245087,
    name: "Unisex Logo Nakış İşlemeli Tişört - Paulos",
    colours_name: "Beyaz / White",
    categories: "252,271",
    IlkFiyat: "599.00 TL",
    IndirimliFiyat: "479.20 TL",
  },
  {
    id: 67,
    ProductCode: 12242357,
    name: "Unisex Nakış İşlemeli Sweatshirt - Silverlake",
    colours_name: "Mor / Twilight Purple",
    categories: "254,271",
    IlkFiyat: "1,750.00 TL",
    IndirimliFiyat: "1,400.00 TL",
  },
  {
    id: 68,
    ProductCode: 12226633,
    name: "Unisex Örgü Hırka - Rollie",
    colours_name: "Siyah / Black",
    categories: "257,271",
    IlkFiyat: "990.00 TL",
    IndirimliFiyat: "792.00 TL",
  },
  {
    id: 69,
    ProductCode: 12250734,
    name: "Unisex Rüzgara Dayanıklı Bomber Ceket - Karl",
    colours_name: "Siyah / Black",
    categories: "256,271",
    IlkFiyat: "2,299.00 TL",
    IndirimliFiyat: "1,839.20 TL",
  },
  {
    id: 70,
    ProductCode: 12216768,
    name: "Unisex Yarım Fermuar Yakalı Kazak - Perfect",
    colours_name: "Bej / Island Fossil",
    categories: "257,271",
    IlkFiyat: "1,399.00 TL",
    IndirimliFiyat: "1,119.20 TL",
  },
  {
    id: 71,
    ProductCode: 12238164,
    name: "Unisex Yazılı Kısa Kollu Tişört - Toonie",
    colours_name: "Sarı / French Vanilla",
    categories: "252,271",
    IlkFiyat: "490.00 TL",
    IndirimliFiyat: "392.00 TL",
  },
];

const anatomi_price_stlye = `
<style>
.anatomi_price_parent {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row-reverse;
}

.anatomi_old_price {
    text-decoration: line-through;
    color: #91959c !important;
    font-weight: 500;
}

@media (max-width: 768px){
    .anatomi_price_parent {
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-direction: column-reverse;
        gap: 3px;
    }

    .anatomi_new_price {
        font-size: 16px;
    }
    
    .anatomi_old_price {
        text-decoration: line-through;
        color: #91959c !important;
        font-weight: 500;
        font-size: 14px !important;
    }
}
</style>
`;


const products = document.querySelectorAll(
    ".uk-inline-clip.uk-width-1-1.desktop-card-image.card-image"
);
var secondLinks = [];

products.forEach((product) => {
    const links = Array.from(product.querySelectorAll("a"));
    if (links.length >= 2) {
        const secondLink = links[1];
        secondLinks.push(secondLink);
    }
});


var productCode = document.querySelector(".uk-text-xsmall.uk-text-muted.uk-display-block");
var productCodeText = productCode.textContent;
console.log(productCodeText)
data.forEach(function (item) {
  if (productCodeText.includes(item.ProductCode) && productCodeText.includes(item.colours_name)){
    var parentNode = document.querySelectorAll(".price-container .uk-text-medium.price .uk-first-column");
    parentNode[1].classList.add("anatomi_price_parent");
    var newPrice = document.createElement("span");
    newPrice.className = "uk-text-bold anatomi_new_price";
    parentNode[1].appendChild(newPrice);
    newPrice.textContent = item.IndirimliFiyat;
    var oldPrice = document.querySelectorAll(".anatomi_price_parent span");
    oldPrice[0].classList.add("anatomi_old_price");
    oldPrice[0].textContent = item.IlkFiyat;
    var indirim = document.createElement("span");
    indirim.textContent = "%20 İndirim";
    indirim.className = "uk-text-success uk-text-bold";
    var parentParent = document.querySelectorAll(".uk-text-medium.price");
    parentParent[1].insertAdjacentHTML("afterbegin", indirim.outerHTML);
  }
});
if (window.innerWidth < 768) {
  data.forEach(function (item) {
    if (productCodeText.includes(item.ProductCode)  && productCodeText.includes(item.colours_name)) {
      var parentNode = document.querySelectorAll(".price-container .uk-text-medium.price .uk-first-column");
      parentNode[2].classList.add("anatomi_price_parent");
      var newPrice = document.createElement("span");
      newPrice.className = "uk-text-bold anatomi_new_price";
      parentNode[2].appendChild(newPrice);
      newPrice.textContent = item.IndirimliFiyat;
      var oldPrice = document.querySelectorAll(".anatomi_price_parent span");
      oldPrice[2].classList.add("anatomi_old_price");
      oldPrice[2].textContent = item.IlkFiyat;
    }
  });
}


const anotomihead = document.querySelector("head");
anotomihead.insertAdjacentHTML("beforeend", anatomi_price_stlye);