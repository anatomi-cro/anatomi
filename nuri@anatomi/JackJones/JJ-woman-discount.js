const data = [
    {
      id: 1,
      productcode: 12253330,
      name: "kadın-beyzbol-yakalı-bomber-ceket-leila",
      colours_name: "siyah-black",
      categories: "256, 262,271",
      ilkfiyat: "1,990.00 TL",
      indirimlifiyat: "1,592.00 TL",
    },
    {
      id: 2,
      productcode: 12207160,
      name: "kadın-mom-fit-jean-lisbon",
      colours_name: "mavi-dark-blue-denim",
      categories: "258, 262, 265,271",
      ilkfiyat: "1,390.00 TL",
      indirimlifiyat: "1,112.00 TL",
    },
    {
      id: 3,
      productcode: 12225756,
      name: "kadın-örme-crop-kazak-carlota",
      colours_name: "beyaz-snow-white",
      categories: "257, 262,271",
      ilkfiyat: "1,590.00 TL",
      indirimlifiyat: "1,272.00 TL",
    },
    {
      id: 4,
      productcode: 12251644,
      name: "kadın-3li-logo-nakışlı-çorap-paketi-moreno",
      colours_name: "beyaz-white",
      categories: "260, 262,271",
      ilkfiyat: "390.00 TL",
      indirimlifiyat: "312.00 TL",
    },
    {
      id: 5,
      productcode: 12252454,
      name: "kadın-askılı-bluz-olivia",
      colours_name: "bej-bone-white",
      categories: "252, 262,271",
      ilkfiyat: "990.00 TL",
      indirimlifiyat: "792.00 TL",
    },
    {
      id: 6,
      productcode: 12200167,
      name: "kadın-askılı-saten-elbise-cleo",
      colours_name: "gri-asphalt",
      categories: "259, 262,271",
      ilkfiyat: "1,990.00 TL",
      indirimlifiyat: "1,592.00 TL",
    },
    {
      id: 7,
      productcode: 12200353,
      name: "kadın-basic-poplin-gömlek-jamie",
      colours_name: "beyaz-white",
      categories: "255, 262,271",
      ilkfiyat: "1,790.00 TL",
      indirimlifiyat: "1,432.00 TL",
    },
    {
      id: 8,
      productcode: 12254345,
      name: "kadın-bisiklet-yaka-baskılı-tişört-kora",
      colours_name: "siyah-black",
      categories: "252, 262,271",
      ilkfiyat: "590.00 TL",
      indirimlifiyat: "472.00 TL",
    },
    {
      id: 9,
      productcode: 12251609,
      name: "kadın-çapraz-askılı-çanta-tucson",
      colours_name: "siyah-black",
      categories: "260, 262,271",
      ilkfiyat: "1,390.00 TL",
      indirimlifiyat: "1,112.00 TL",
    },
    {
      id: 10,
      productcode: 12253992,
      name: "kadın-cep-detaylı-denim-gömlek-kayla",
      colours_name: "mavi-light-blue-denim",
      categories: "255, 262,271",
      ilkfiyat: "1,990.00 TL",
      indirimlifiyat: "1,592.00 TL",
    },
    {
      id: 11,
      productcode: 12252770,
      name: "kadın-çizgili-bisiklet-yaka-kazak-ana",
      colours_name: "beyaz-cloud-dancer",
      categories: "257, 262,271",
      ilkfiyat: "1,590.00 TL",
      indirimlifiyat: "1,272.00 TL",
    },
    {
      id: 12,
      productcode: 12213517,
      name: "kadın-çizgili-bisiklet-yaka-örme-kazak-mila",
      colours_name: "mor-lilac-breeze",
      categories: "257, 262,271",
      ilkfiyat: "1,590.00 TL",
      indirimlifiyat: "1,272.00 TL",
    },
    {
      id: 13,
      productcode: 12253668,
      name: "kadın-çizgili-desenli-uzun-kollu-tişört-amalie",
      colours_name: "yeşil-medium-green",
      categories: "252, 262,271",
      ilkfiyat: "990.00 TL",
      indirimlifiyat: "792.00 TL",
    },
    {
      id: 14,
      productcode: 12254283,
      name: "kadın-cut-out-pencereli-uzun-kollu-crop-top-fillipa",
      colours_name: "siyah-black",
      categories: "252, 262,271",
      ilkfiyat: "790.00 TL",
      indirimlifiyat: "632.00 TL",
    },
    {
      id: 15,
      productcode: 12253107,
      name: "kadın-denim-ceket-elza",
      colours_name: "mavi-light-blue-denim",
      categories: "256, 262,271",
      ilkfiyat: "2,390.00 TL",
      indirimlifiyat: "1,912.00 TL",
    },
    {
      id: 16,
      productcode: 12206262,
      name: "kadın-fermuar-detaylı-deri-ceket-gail",
      colours_name: "gri-brindle",
      categories: "256,271",
      ilkfiyat: "1,990.00 TL",
      indirimlifiyat: "1,592.00 TL",
    },
    {
      id: 17,
      productcode: 12253012,
      name: "kadın-fonksiyonel-cepli-kargo-pantolon-maddy",
      colours_name: "kahverengi-incense",
      categories: "253, 262,271",
      ilkfiyat: "1,790.00 TL",
      indirimlifiyat: "1,432.00 TL",
    },
    {
      id: 18,
      productcode: 12224655,
      name: "kadın-fonksiyonel-cepli-kargo-pantolon-yoko",
      colours_name: "siyah-black",
      categories: "253, 262,271",
      ilkfiyat: "1,790.00 TL",
      indirimlifiyat: "1,432.00 TL",
    },
    {
      id: 19,
      productcode: 12248959,
      name: "kadın-geniş-paça-pantolon-cali",
      colours_name: "beyaz-seedpearl",
      categories: "253, 262,271",
      ilkfiyat: "1,590.00 TL",
      indirimlifiyat: "1,272.00 TL",
    },
    {
      id: 20,
      productcode: 12223962,
      name: "kadın-göğüste-jjxx-logolu-sweatshirt-abbie",
      colours_name: "bej-moonbeam",
      categories: "254, 262,271",
      ilkfiyat: "990.00 TL",
      indirimlifiyat: "792.00 TL",
    },
    {
      id: 21,
      productcode: 12249892,
      name: "kadın-kapitone-ceket-mari",
      colours_name: "mavi-silver-lake-blue",
      categories: "256, 262,271",
      ilkfiyat: "2,990.00 TL",
      indirimlifiyat: "2,392.00 TL",
    },
    {
      id: 22,
      productcode: 12223961,
      name: "kadın-kapüşonlu-minimal-logo-baskılı-sweatshirt-abbie",
      colours_name: "mor-lilac-breeze",
      categories: "254, 262,271",
      ilkfiyat: "990.00 TL",
      indirimlifiyat: "792.00 TL",
    },
    {
      id: 23,
      productcode: 12253952,
      name: "kadın-keten-pantolon-poppy",
      colours_name: "kahverengi-aloe",
      categories: "253, 262,271",
      ilkfiyat: "1,590.00 TL",
      indirimlifiyat: "1,272.00 TL",
    },
    {
      id: 24,
      productcode: 12251568,
      name: "kadın-kısa-askılı-omuz-çantası-kenya",
      colours_name: "siyah-black",
      categories: "260, 262,271",
      ilkfiyat: "1,390.00 TL",
      indirimlifiyat: "1,112.00 TL",
    },
    {
      id: 25,
      productcode: 12248654,
      name: "kadın-kısa-trençkot-carlie",
      colours_name: "kahverengi-dusty-olive",
      categories: "256, 262,271",
      ilkfiyat: "2,390.00 TL",
      indirimlifiyat: "1,912.00 TL",
    },
    {
      id: 26,
      productcode: 12200590,
      name: "kadın-kruvaze-ceket-mary",
      colours_name: "mavi-blue-iolite",
      categories: "261, 262,271",
      ilkfiyat: "2,490.00 TL",
      indirimlifiyat: "1,992.00 TL",
    },
    {
      id: 27,
      productcode: 12203700,
      name: "kadın-logo-nakışlı-denim-şapka-basic",
      colours_name: "mavi-dark-blue-denim",
      categories: "260, 262,271",
      ilkfiyat: "490.00 TL",
      indirimlifiyat: "392.00 TL",
    },
    {
      id: 28,
      productcode: 12219609,
      name: "kadın-logolu-kapüşonlu-sweatshirt-abbie",
      colours_name: "mor-lilac-breeze",
      categories: "254, 262,271",
      ilkfiyat: "1,190.00 TL",
      indirimlifiyat: "952.00 TL",
    },
    {
      id: 29,
      productcode: 12223960,
      name: "kadın-logolu-sweat-pantolon-abbie",
      colours_name: "yeşil-grayed-jade",
      categories: "253, 262,271",
      ilkfiyat: "990.00 TL",
      indirimlifiyat: "792.00 TL",
    },
    {
      id: 30,
      productcode: 12203881,
      name: "kadın-loose-fit-jean-seville",
      colours_name: "siyah-black-denim",
      categories: "258, 262, 270,271",
      ilkfiyat: "1,390.00 TL",
      indirimlifiyat: "1,112.00 TL",
    },
    {
      id: 31,
      productcode: 12236352,
      name: "kadın-loose-fit-jean-seville",
      colours_name: "mavi-medium-blue-denim",
      categories: "258, 262, 270,271",
      ilkfiyat: "1,590.00 TL",
      indirimlifiyat: "1,272.00 TL",
    },
    {
      id: 32,
      productcode: 12251588,
      name: "kadın-metal-toka-tasarımlı-omuz-çantası-orlando",
      colours_name: "mavi-denim-blue",
      categories: "260, 262,271",
      ilkfiyat: "990.00 TL",
      indirimlifiyat: "792.00 TL",
    },
    {
      id: 33,
      productcode: 12250268,
      name: "kadın-midi-boy-saten-etek-kimmie",
      colours_name: "yeşil-medium-green",
      categories: "259, 262,271",
      ilkfiyat: "1,390.00 TL",
      indirimlifiyat: "1,112.00 TL",
    },
    {
      id: 34,
      productcode: 12205777,
      name: "kadın-minimal-jjxx-logolu-kısa-kollu-tişört-andrea",
      colours_name: "beyaz-bright-white",
      categories: "252, 262,271",
      ilkfiyat: "590.00 TL",
      indirimlifiyat: "472.00 TL",
    },
    {
      id: 35,
      productcode: 12204490,
      name: "kadın-mom-fit-jean-lisbon",
      colours_name: "beyaz-white-denim",
      categories: "258, 262, 265,271",
      ilkfiyat: "1,390.00 TL",
      indirimlifiyat: "1,112.00 TL",
    },
    {
      id: 36,
      productcode: 12227293,
      name: "kadın-mom-fit-jean-lisbon",
      colours_name: "mavi-light-blue-denim",
      categories: "258, 262, 265,271",
      ilkfiyat: "1,390.00 TL",
      indirimlifiyat: "1,112.00 TL",
    },
    {
      id: 37,
      productcode: 12252453,
      name: "kadın-örme-uzun-kollu-kazak-olivia",
      colours_name: "bej-bone-white",
      categories: "257,271",
      ilkfiyat: "1,390.00 TL",
      indirimlifiyat: "1,112.00 TL",
    },
    {
      id: 38,
      productcode: 12236944,
      name: "kadın-pile-detaylı-kumaş-pantolon-mary",
      colours_name: "gri-brindle",
      categories: "253, 261, 262,271",
      ilkfiyat: "1,990.00 TL",
      indirimlifiyat: "1,592.00 TL",
    },
    {
      id: 39,
      productcode: 12255922,
      name: "kadın-rahat-kesim-saten-pantolon-rose",
      colours_name: "siyah-black",
      categories: "253, 262,271",
      ilkfiyat: "1,590.00 TL",
      indirimlifiyat: "1,272.00 TL",
    },
    {
      id: 40,
      productcode: 12253069,
      name: "kadın-relaxed-fit-jean-elza",
      colours_name: "mavi-light-blue-denim",
      categories: "258, 262, 265,271",
      ilkfiyat: "1,790.00 TL",
      indirimlifiyat: "1,432.00 TL",
    },
    {
      id: 41,
      productcode: 12203522,
      name: "kadın-relaxed-fit-uzun-kollu-gömlek-mission",
      colours_name: "pembe-carmine-rose",
      categories: "255, 262,271",
      ilkfiyat: "1,190.00 TL",
      indirimlifiyat: "952.00 TL",
    },
    {
      id: 42,
      productcode: 12244363,
      name: "kadın-sırt-baskılı-sweatshirt-jada",
      colours_name: "sarı-bone-white",
      categories: "254, 262,271",
      ilkfiyat: "1,190.00 TL",
      indirimlifiyat: "952.00 TL",
    },
    {
      id: 43,
      productcode: 12203792,
      name: "kadın-skinny-fit-jean-vienna",
      colours_name: "mavi-medium-blue-denim",
      categories: "258, 262, 264,271",
      ilkfiyat: "1,190.00 TL",
      indirimlifiyat: "952.00 TL",
    },
    {
      id: 44,
      productcode: 12203836,
      name: "kadın-slim-fit-jean-berlin",
      colours_name: "mavi-light-blue-denim",
      categories: "258, 262, 266,271",
      ilkfiyat: "1,390.00 TL",
      indirimlifiyat: "1,112.00 TL",
    },
    {
      id: 45,
      productcode: 12203863,
      name: "kadın-slim-fit-jean-turin",
      colours_name: "mavi-dark-blue-denim",
      categories: "258, 262, 269,271",
      ilkfiyat: "1,390.00 TL",
      indirimlifiyat: "1,112.00 TL",
    },
    {
      id: 46,
      productcode: 12229026,
      name: "kadın-straight-fit-jean-seoul",
      colours_name: "siyah-black-denim",
      categories: "258, 262, 267,271",
      ilkfiyat: "1,390.00 TL",
      indirimlifiyat: "1,112.00 TL",
    },
    {
      id: 47,
      productcode: 12229033,
      name: "kadın-straight-fit-jean-seoul",
      colours_name: "mavi-light-blue-denim",
      categories: "258, 262, 267,271",
      ilkfiyat: "1,390.00 TL",
      indirimlifiyat: "1,112.00 TL",
    },
    {
      id: 48,
      productcode: 12248129,
      name: "kadın-straight-fit-jean-seoul",
      colours_name: "mavi-light-blue-denim",
      categories: "258, 262, 267,271",
      ilkfiyat: "1,590.00 TL",
      indirimlifiyat: "1,272.00 TL",
    },
    {
      id: 49,
      productcode: 12204642,
      name: "kadın-suya-dayanıklı-suni-deri-ceket-luna",
      colours_name: "siyah-black",
      categories: "256, 262,271",
      ilkfiyat: "1,990.00 TL",
      indirimlifiyat: "1,592.00 TL",
    },
    {
      id: 50,
      productcode: 12253309,
      name: "kadın-uzun-kollu-gömlek-korse-annie",
      colours_name: "beyaz-blanc-de-blanc",
      categories: "255, 262,271",
      ilkfiyat: "1,790.00 TL",
      indirimlifiyat: "1,432.00 TL",
    },
    {
      id: 51,
      productcode: 12236442,
      name: "kadın-wide-fit-jean-tokyo",
      colours_name: "siyah-black-denim",
      categories: "258, 262, 268,271",
      ilkfiyat: "1,590.00 TL",
      indirimlifiyat: "1,272.00 TL",
    },
    {
      id: 52,
      productcode: 12254792,
      name: "kadın-yırtmaçlı-maxi-denim-etek-adya",
      colours_name: "gri-grey-denim",
      categories: "259, 262,271",
      ilkfiyat: "1,990.00 TL",
      indirimlifiyat: "1,592.00 TL",
    },
    {
      id: 53,
      productcode: 12248958,
      name: "kadın-yüksek-bel-dokuma-pantolon-ellis",
      colours_name: "siyah-black",
      categories: "253, 262,271",
      ilkfiyat: "1,790.00 TL",
      indirimlifiyat: "1,432.00 TL",
    },
    {
      id: 54,
      productcode: 12200674,
      name: "kadın-yüksek-bel-kumaş-pantolon-marry",
      colours_name: "mavi-blue-iolite",
      categories: "253, 261, 262,271",
      ilkfiyat: "1,790.00 TL",
      indirimlifiyat: "1,432.00 TL",
    },
    {
      id: 55,
      productcode: 12157417,
      name: "unisex-balıkçı-yaka-kazak-emil",
      colours_name: "gri-dark-grey-melange",
      categories: "257,271",
      ilkfiyat: "990.00 TL",
      indirimlifiyat: "792.00 TL",
    },
    {
      id: 56,
      productcode: 12137190,
      name: "unisex-bisiklet-yaka-basic-kazak",
      colours_name: "kahverengi-seal-brown",
      categories: "257,271",
      ilkfiyat: "999.00 TL",
      indirimlifiyat: "799.20 TL",
    },
    {
      id: 57,
      productcode: 12251330,
      name: "unisex-bisiklet-yaka-basic-sweatshirt-collective",
      colours_name: "sarı-lemon-verbena",
      categories: "254,271",
      ilkfiyat: "1,591.99 TL",
      indirimlifiyat: "1,273.59 TL",
    },
    {
      id: 58,
      productcode: 12237187,
      name: "unisex-denim-ceket-491",
      colours_name: "mavi-blue-denim",
      categories: "256,271",
      ilkfiyat: "1,799.00 TL",
      indirimlifiyat: "1,439.20 TL",
    },
    {
      id: 59,
      productcode: 12202249,
      name: "unisex-denim-dog-logolu-tişört",
      colours_name: "siyah-black",
      categories: "252,271",
      ilkfiyat: "499.99 TL",
      indirimlifiyat: "399.99 TL",
    },
    {
      id: 60,
      productcode: 12243689,
      name: "unisex-harf-işlemeli-bomber-ceket-varsity",
      colours_name: "mavi-navy-blazer",
      categories: "256,271",
      ilkfiyat: "1,800.99 TL",
      indirimlifiyat: "1,440.79 TL",
    },
    {
      id: 61,
      productcode: 12242462,
      name: "unisex-henry-050-denim-gömlek",
      colours_name: "mavi-blue-denim",
      categories: "255,271",
      ilkfiyat: "1,300.00 TL",
      indirimlifiyat: "1,040.00 TL",
    },
    {
      id: 62,
      productcode: 12243251,
      name: "unisex-japon-teması-baskılı-kısa-kollu-tişört-tora",
      colours_name: "siyah-black",
      categories: "252,271",
      ilkfiyat: "590.00 TL",
      indirimlifiyat: "472.00 TL",
    },
    {
      id: 63,
      productcode: 12233972,
      name: "unisex-kabartma-baskili-kapüsonlu-sweatshirt-star",
      colours_name: "siyah-black",
      categories: "254,271",
      ilkfiyat: "1,399.00 TL",
      indirimlifiyat: "1,119.20 TL",
    },
    {
      id: 64,
      productcode: 12240121,
      name: "unisex-kabartma-logo-baskılı-tişört-vesterbro",
      colours_name: "beyaz-bright-white",
      categories: "252,271",
      ilkfiyat: "649.00 TL",
      indirimlifiyat: "519.20 TL",
    },
    {
      id: 65,
      productcode: 12241687,
      name: "unisex-kapüşonlu-göğüs-baskılı-sweatshirt-vesterbro",
      colours_name: "mor-twilight-purple",
      categories: "254,271",
      ilkfiyat: "1,549.00 TL",
      indirimlifiyat: "1,239.20 TL",
    },
    {
      id: 66,
      productcode: 12245087,
      name: "unisex-logo-nakış-işlemeli-tişört-paulos",
      colours_name: "beyaz-white",
      categories: "252,271",
      ilkfiyat: "599.00 TL",
      indirimlifiyat: "479.20 TL",
    },
    {
      id: 67,
      productcode: 12242357,
      name: "unisex-nakış-işlemeli-sweatshirt-silverlake",
      colours_name: "mor-twilight-purple",
      categories: "254,271",
      ilkfiyat: "1,750.00 TL",
      indirimlifiyat: "1,400.00 TL",
    },
    {
      id: 68,
      productcode: 12226633,
      name: "unisex-örgü-hırka-rollie",
      colours_name: "siyah-black",
      categories: "257,271",
      ilkfiyat: "990.00 TL",
      indirimlifiyat: "792.00 TL",
    },
    {
      id: 69,
      productcode: 12250734,
      name: "unisex-rüzgara-dayanıklı-bomber-ceket-karl",
      colours_name: "siyah-black",
      categories: "256,271",
      ilkfiyat: "2,299.00 TL",
      indirimlifiyat: "1,839.20 TL",
    },
    {
      id: 70,
      productcode: 12216768,
      name: "unisex-yarım-fermuar-yakalı-kazak-perfect",
      colours_name: "bej-island-fossil",
      categories: "257,271",
      ilkfiyat: "1,399.00 TL",
      indirimlifiyat: "1,119.20 TL",
    },
    {
      id: 71,
      productcode: 12238164,
      name: "unisex-yazılı-kısa-kollu-tişört-toonie",
      colours_name: "sarı-french-vanilla",
      categories: "252,271",
      ilkfiyat: "490.00 TL",
      indirimlifiyat: "392.00 TL",
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


const loading = document.getElementById("infinite-loading");

const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            if (mutation.target.style.display == 'none') {
                applyPriceStyles();
                break;
            }
        }
    }
});

observer.observe(loading, { attributes: true });

function applyPriceStyles() {
    console.log("applyPriceStyles");
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


    if (window.innerWidth < 768) {
        data.forEach((item) => {
            secondLinks.forEach((link, index) => {
                if (link.href.includes(item.productcode) && link.href.includes(item.colours_name)) {
                    const parentNode = link.closest(".card-product.uk-transition-toggle.product-detail-wrapper").querySelector(".price-wrapper .uk-hidden\\@m >  .uk-first-column");
                    parentNode.classList.add("anatomi_price_parent");
                    const newPrice = document.createElement("span");
                    newPrice.textContent = item.indirimlifiyat;
                    newPrice.className = "uk-text-bold anatomi_new_price";
                    if (parentNode.querySelector(".anatomi_new_price") == null) {
                        parentNode.appendChild(newPrice);
                    }

                    const oldPrice = parentNode.querySelectorAll("span");
                    oldPrice[0].classList.add("anatomi_old_price");
                    oldPrice[0].textContent = item.ilkfiyat;

                    const indirim = document.createElement("span");
                    indirim.textContent = "%20 İndirim";
                    indirim.className = "uk-text-success uk-text-bold";
                    const parentParent = parentNode.closest(".price-wrapper");
                    if (parentParent.querySelector(".uk-text-success.uk-text-bold") == null) {
                        parentParent.insertAdjacentHTML("afterbegin", indirim.outerHTML);
                    }
                }
            });
        });
    } else {
        data.forEach((item) => {
            secondLinks.forEach((link, index) => {
                if (link.href.includes(item.productcode) && link.href.includes(item.colours_name)) {
                    const parentNode = link.closest(".card-product.uk-transition-toggle.product-detail-wrapper").querySelector(".price-wrapper .uk-first-column");
                    parentNode.classList.add("anatomi_price_parent");
                    const newPrice = document.createElement("span");
                    newPrice.textContent = item.indirimlifiyat;
                    newPrice.className = "uk-text-bold anatomi_new_price";
                    if (parentNode.querySelector(".anatomi_new_price") == null) {
                        parentNode.appendChild(newPrice);
                    }

                    const oldPrice = parentNode.querySelectorAll("span");
                    oldPrice[0].classList.add("anatomi_old_price");
                    oldPrice[0].textContent = item.ilkfiyat;

                    const indirim = document.createElement("span");
                    indirim.textContent = "%20 İndirim";
                    indirim.className = "uk-text-success uk-text-bold";
                    const parentParent = parentNode.closest(".price-wrapper");
                    if (parentParent.querySelector(".uk-text-success.uk-text-bold") == null) {
                        parentParent.insertAdjacentHTML("afterbegin", indirim.outerHTML);
                    }
                }
            });
        });
    }
}


if (window.innerWidth < 768) {
    data.forEach((item) => {
        secondLinks.forEach((link, index) => {
            if (link.href.includes(item.productcode) && link.href.includes(item.colours_name)) {
                const parentNode = link.closest(".card-product.uk-transition-toggle.product-detail-wrapper").querySelector(".price-wrapper .uk-hidden\\@m >  .uk-first-column");
                parentNode.classList.add("anatomi_price_parent");
                const newPrice = document.createElement("span");
                newPrice.textContent = item.indirimlifiyat;
                newPrice.className = "uk-text-bold anatomi_new_price";
                parentNode.appendChild(newPrice);

                const oldPrice = parentNode.querySelectorAll("span");
                oldPrice[0].classList.add("anatomi_old_price");
                oldPrice[0].textContent = item.ilkfiyat;

                const indirim = document.createElement("span");
                indirim.textContent = "%20 İndirim";
                indirim.className = "uk-text-success uk-text-bold";
                const parentParent = parentNode.closest(".price-wrapper");
                parentParent.insertAdjacentHTML("afterbegin", indirim.outerHTML);
            }
        });
    });
} else {
    data.forEach((item) => {
        secondLinks.forEach((link, index) => {
            if (link.href.includes(item.productcode) && link.href.includes(item.colours_name)) {
                const parentNode = link.closest(".card-product.uk-transition-toggle.product-detail-wrapper").querySelector(".price-wrapper .uk-first-column");
                parentNode.classList.add("anatomi_price_parent");
                const newPrice = document.createElement("span");
                newPrice.textContent = item.indirimlifiyat;
                newPrice.className = "uk-text-bold anatomi_new_price";
                parentNode.appendChild(newPrice);

                const oldPrice = parentNode.querySelectorAll("span");
                oldPrice[0].classList.add("anatomi_old_price");
                oldPrice[0].textContent = item.ilkfiyat;

                const indirim = document.createElement("span");
                indirim.textContent = "%20 İndirim";
                indirim.className = "uk-text-success uk-text-bold";
                const parentParent = parentNode.closest(".price-wrapper");
                parentParent.insertAdjacentHTML("afterbegin", indirim.outerHTML);
            }
        });
    });
}

const anotomihead = document.querySelector("head");
anotomihead.insertAdjacentHTML("beforeend", anatomi_price_stlye);
