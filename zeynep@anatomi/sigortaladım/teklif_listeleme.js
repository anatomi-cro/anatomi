const a_style = `<style>
.a_container {
    background-color: #3173FF;
    padding: 8px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}
.a_container p {
    color: white;
    text-align: center

}

.offer-item-container{
  position: relative;
    border-radius: 4px !important;
    margin-top: 20px !important;
}

</style>`
const brandElement = document.querySelector('.brand-name');
const brand_name = brandElement ? brandElement.textContent : "";
const a_logo = document.querySelectorAll('.offer-item-container .logo');
const a_ContainerElements = document.querySelectorAll('.offer-item-container');
const a_container = document.createElement('div');
a_container.classList.add('a_container');
a_container.innerHTML = `<p>Bu modelde en çok bu ürün alındı!</p>`;

let allianzLogosCount = 0;
let turkiyeLogoCount = 0;
let axaLogoCount = 0;
let rayLogoCount = 0;

Array.from(a_logo).forEach(logo => {
  const imgElement = logo.querySelector('img');
  if (brand_name === "VOLKSWAGEN" && imgElement && imgElement.getAttribute('title') === 'ALLIANZ SİGORTA A.Ş.') {
    allianzLogosCount++;
    console.log('allianz');
  }
  else if(brand_name === "TOYOTA" && imgElement && imgElement.getAttribute('title') === 'TÜRKİYE SİGORTA A.Ş.'){
    turkiyeLogoCount++;
  }else if(brand_name === "FIAT" && imgElement && imgElement.getAttribute('title') === 'ALLIANZ SİGORTA A.Ş.'){
    allianzLogosCount++;
  }else if(brand_name === "PEUGEOT" && imgElement && imgElement.getAttribute('title') === 'AXA SİGORTA'){
    axaLogoCount++;
    console.log('AXA SİGORTA');
  }else if(brand_name === "RENAULT" && imgElement && imgElement.getAttribute('title') === 'ALLIANZ SİGORTA A.Ş.'){
    allianzLogosCount++;
  }else if(brand_name === "OPEL" && imgElement && imgElement.getAttribute('title') === 'ALLIANZ SİGORTA A.Ş.'){
    allianzLogosCount++;
  }else if(brand_name === "HYUNDAI" && imgElement && imgElement.getAttribute('title') === 'ALLIANZ SİGORTA A.Ş.'){
    allianzLogosCount++;
  }else if(brand_name === "HONDA" && imgElement && imgElement.getAttribute('title') === 'AXA SİGORTA'){
    axaLogoCount++;
    console.log('AXA SİGORTA');
  }else if(brand_name === "FORD" && imgElement && imgElement.getAttribute('title') === 'ALLIANZ SİGORTA A.Ş.'){
    allianzLogosCount++;
  }else if(brand_name === "CITROEN" && imgElement && imgElement.getAttribute('title') === 'RAY SİGORTA'){
    rayLogoCount++;
  }
  
});

const prices = Array.from(a_ContainerElements).map(container => {
  const priceElement = container.querySelector('.gross');
  return parseFloat(priceElement.textContent);
});



// allianz start
const allianzPrices = Array.from(a_ContainerElements)
  .filter(container => {
    const logoImgTitle = container.querySelector('.logo img').getAttribute('title');
    return logoImgTitle === 'ALLIANZ SİGORTA A.Ş.';
  })
  .map(container => {
    const priceElement = container.querySelector('.gross');
    return parseFloat(priceElement.textContent);
  });

allianzPrices.sort((a, b) => a - b);
console.log('sıralama: ' + allianzPrices);

const ortancaFiyatAllianz = (allianzLogosCount === 3) ? allianzPrices[Math.floor(allianzPrices.length / 2)] : prices[prices.length - 1];
const yuksekFiyatAllianz = allianzPrices[allianzPrices.length - 1];

// allianz finish

// türkiye start
const turkiyePrices = Array.from(a_ContainerElements)
  .filter(container => {
    const logoImgTitle = container.querySelector('.logo img').getAttribute('title');
    return logoImgTitle === 'TÜRKİYE SİGORTA A.Ş.';
  })
  .map(container => {
    const priceElement = container.querySelector('.gross');
    return parseFloat(priceElement.textContent);
  });


turkiyePrices.sort((a, b) => a - b);
console.log('sıralama: ' + turkiyePrices);

const ortancaFiyatT = (turkiyeLogoCount === 3) ? turkiyePrices[Math.floor(turkiyePrices.length / 2)] : prices[prices.length - 1];
const yuksekFiyatT = turkiyePrices[turkiyePrices.length - 1];
// türkiye finish

// axa start
const axaPrices = Array.from(a_ContainerElements)
  .filter(container => {
    const logoImgTitle = container.querySelector('.logo img').getAttribute('title');
    return logoImgTitle === 'AXA SİGORTA';
  })
  .map(container => {
    const priceElement = container.querySelector('.gross');
    return parseFloat(priceElement.textContent);
  });


axaPrices.sort((a, b) => a - b);
console.log('sıralama: ' + axaPrices);

const ortancaFiyataxa = (axaLogoCount === 3) ? axaPrices[Math.floor(axaPrices.length / 2)] : prices[prices.length - 1];
const yuksekFiyataxa = axaPrices[axaPrices.length - 1];
// axa finish


// ray start
const rayPrices = Array.from(a_ContainerElements)
  .filter(container => {
    const logoImgTitle = container.querySelector('.logo img').getAttribute('title');
    return logoImgTitle === 'RAY SİGORTA';
  })
  .map(container => {
    const priceElement = container.querySelector('.gross');
    return parseFloat(priceElement.textContent);
  });


  rayPrices.sort((a, b) => a - b);
console.log('sıralama: ' + rayPrices);

const ortancaFiyatray = (rayLogoCount === 3) ? rayPrices[Math.floor(rayPrices.length / 2)] : prices[prices.length - 1];
const yuksekFiyatray = rayPrices[rayPrices.length - 1];
// ray finish

if ((brand_name === "VOLKSWAGEN" && allianzLogosCount === 3) || (brand_name === "TOYOTA" && turkiyeLogoCount === 3) || (brand_name === "FIAT" && allianzLogosCount === 3) || (brand_name === "PEUGEOT" && axaLogoCount === 3) || (brand_name === "RENAULT" && allianzLogosCount === 3) || (brand_name === "OPEL" && allianzLogosCount === 3) || (brand_name === "HYUNDAI" && allianzLogosCount === 3) || (brand_name === "HONDA" && axaLogoCount === 3) || (brand_name === "FORD" && allianzLogosCount === 3) || (brand_name === "CITROEN" && rayLogoCount === 3))  {

  Array.from(a_ContainerElements).forEach(container => {
    const priceElement = container.querySelector('.gross');
    const price = parseFloat(priceElement.textContent);
    const logoImgTitle = container.querySelector('.logo img').getAttribute('title');
    if (brand_name === "VOLKSWAGEN" && price === ortancaFiyatAllianz && logoImgTitle === 'ALLIANZ SİGORTA A.Ş.') {
      container.appendChild(a_container.cloneNode(true));
      container.style.border = "1px solid #3173FF";

    } else if(brand_name === "TOYOTA" && price === ortancaFiyatT && logoImgTitle === 'TÜRKİYE SİGORTA A.Ş.'){
      container.appendChild(a_container.cloneNode(true));
      container.style.border = "1px solid #3173FF";
    } else if(brand_name === "FIAT" && price === ortancaFiyatAllianz && logoImgTitle === 'ALLIANZ SİGORTA A.Ş.'){
      container.appendChild(a_container.cloneNode(true));
      container.style.border = "1px solid #3173FF";
    }
    else if(brand_name === "PEUGEOT" && price === ortancaFiyataxa && logoImgTitle === 'AXA SİGORTA'){
      container.appendChild(a_container.cloneNode(true));
      container.style.border = "1px solid #3173FF";
    }else if(brand_name === "RENAULT" && price === ortancaFiyatAllianz && logoImgTitle === 'ALLIANZ SİGORTA A.Ş.'){
      container.appendChild(a_container.cloneNode(true));
      container.style.border = "1px solid #3173FF";
    }else if(brand_name === "OPEL" && price === ortancaFiyatAllianz && logoImgTitle === 'ALLIANZ SİGORTA A.Ş.'){
      container.appendChild(a_container.cloneNode(true));
      container.style.border = "1px solid #3173FF";
    }else if(brand_name === "HYUNDAI" && price === ortancaFiyatAllianz && logoImgTitle === 'ALLIANZ SİGORTA A.Ş.'){
      container.appendChild(a_container.cloneNode(true));
      container.style.border = "1px solid #3173FF";
    }else if(brand_name === "HONDA" && price === ortancaFiyataxa && logoImgTitle === 'AXA SİGORTA'){
      container.appendChild(a_container.cloneNode(true));
      container.style.border = "1px solid #3173FF";
    }else if(brand_name === "FORD" && price === ortancaFiyatAllianz && logoImgTitle === 'ALLIANZ SİGORTA A.Ş.'){
      container.appendChild(a_container.cloneNode(true));
      container.style.border = "1px solid #3173FF";
    }else if(brand_name === "CITROEN" && price === ortancaFiyatray && logoImgTitle === 'RAY SİGORTA'){
      container.appendChild(a_container.cloneNode(true));
      container.style.border = "1px solid #3173FF";
    }
  });
  console.log('3 tane içinde en uygun bu');

} else if ((brand_name === "VOLKSWAGEN" && allianzLogosCount === 2) || (brand_name === "TOYOTA" && turkiyeLogoCount === 2) || (brand_name === "FIAT" && allianzLogosCount === 2) || (brand_name === "PEUGEOT" && axaLogoCount === 2) || (brand_name === "RENAULT" && allianzLogosCount === 2) || (brand_name === "OPEL" && allianzLogosCount === 3) || (brand_name === "HYUNDAI" && allianzLogosCount === 2) || (brand_name === "HONDA" && axaLogoCount === 2) || (brand_name === "FORD" && axaLogoCount === 2) || (brand_name === "CITROEN" && rayLogoCount === 2)) {
//   console.log('zzzz');
// console.log('Allianz Fiat' + allianzLogosCount);
// console.log('rena' + allianzLogosCount);
// console.log('rena' + yuksekFiyatAllianz);
// console.log('rena' + yuksekFiyatAllianz);
// console.log('rena' + allianzLogosCount);
// console.log('HYUNDAI' + yuksekFiyatAllianz);
// console.log('HYUNDAI' + allianzLogosCount);

// console.log(yuksekFiyatT);
// console.log(ortancaFiyatAllianz);
// console.log('AXA'+yuksekFiyataxa);
// console.log('türkiye sigorta' + turkiyeLogoCount);
console.log('Ray'+ yuksekFiyataxa);
// console.log('FORD'+ yuksekFiyataxa);

  Array.from(a_ContainerElements).forEach(container => {
    const priceElement = container.querySelector('.gross');
    const price = parseFloat(priceElement.textContent);
    const logoImgTitle = container.querySelector('.logo img').getAttribute('title');
    if (brand_name === "VOLKSWAGEN" && price === yuksekFiyatAllianz && logoImgTitle === 'ALLIANZ SİGORTA A.Ş.') {
      console.log('ALLIANZ sigorta hazır');
      container.appendChild(a_container.cloneNode(true));
      container.style.border = "1px solid #3173FF";
    }else if(brand_name === "TOYOTA" && price === yuksekFiyatT && logoImgTitle === 'TÜRKİYE SİGORTA A.Ş.'){
      container.appendChild(a_container.cloneNode(true));
      container.style.border = "1px solid #3173FF";
      console.log('türkiye sigorta hazır');
    }else if(brand_name === "FIAT" && price === yuksekFiyatAllianz && logoImgTitle === 'ALLIANZ SİGORTA A.Ş.'){
      container.appendChild(a_container.cloneNode(true));
      container.style.border = "1px solid #3173FF";
      console.log('fiyat ALLIANZ sigorta hazır');
    }else if(brand_name === "PEUGEOT" && price === yuksekFiyataxa && logoImgTitle === 'AXA SİGORTA'){
      container.appendChild(a_container.cloneNode(true));
      container.style.border = "1px solid #3173FF";
      console.log('fiyat AXA sigorta hazır');
    }
    else if(brand_name === "RENAULT" && price === yuksekFiyatAllianz && logoImgTitle === 'ALLIANZ SİGORTA A.Ş.'){
      container.appendChild(a_container.cloneNode(true));
      container.style.border = "1px solid #3173FF";
      console.log('rena ALLIANZ sigorta hazır');
    }else if(brand_name === "OPEL" && price === yuksekFiyatAllianz && logoImgTitle === 'ALLIANZ SİGORTA A.Ş.'){
      container.appendChild(a_container.cloneNode(true));
      container.style.border = "1px solid #3173FF";
      console.log('OPEL ALLIANZ sigorta hazır');
    }else if(brand_name === "HYUNDAI" && price === yuksekFiyatAllianz && logoImgTitle === 'ALLIANZ SİGORTA A.Ş.'){
      container.appendChild(a_container.cloneNode(true));
      container.style.border = "1px solid #3173FF";
      console.log('HYUNDAI ALLIANZ sigorta hazır');
    }else if(brand_name === "HONDA" && price === yuksekFiyataxa && logoImgTitle === 'AXA SİGORTA'){
      container.appendChild(a_container.cloneNode(true));
      container.style.border = "1px solid #3173FF";
      console.log('honda AXA sigorta hazır');
    }else if(brand_name === "FORD" && price === yuksekFiyatAllianz && logoImgTitle === 'ALLIANZ SİGORTA A.Ş.'){
      container.appendChild(a_container.cloneNode(true));
      container.style.border = "1px solid #3173FF";
      console.log('FORD ALLIANZ sigorta hazır');
    }else if(brand_name === "CITROEN" && price === yuksekFiyatray && logoImgTitle === 'RAY SİGORTA'){
      container.appendChild(a_container.cloneNode(true));
      container.style.border = "1px solid #3173FF";
      console.log('CITROEN Ray sigorta hazır');
    }
  });
  console.log('2 tane içinde en uygunu bu');
}


const a_head = document.querySelector('head')
a_head.insertAdjacentHTML('afterbegin', a_style)