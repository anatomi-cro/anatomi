const a_style = `<style>

.a_container{
    background-color: #3173FF;
    padding: 8px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}
.a_container p{
    color: white;
    text-align: center

}

</style>`


const brand_name = document.querySelector('.brand-name').textContent;
const a_logo = document.querySelectorAll('.offer-item-container .logo');
const a_ContainerElements = document.querySelectorAll('.offer-item-container');
const a_container = document.createElement('div');
a_container.classList.add('a_container');
a_container.innerHTML = `<p>Bu modelde en çok bu ürün alındı!</p>`;

let allianzLogosCount = 0;
Array.from(a_logo).forEach(logo => {
  const imgElement = logo.querySelector('img');
  if (imgElement && imgElement.getAttribute('title') === 'ALLIANZ SİGORTA A.Ş.') {
    allianzLogosCount++;
  }
});

const prices = Array.from(a_ContainerElements).map(container => {
  const priceElement = container.querySelector('.gross');
  return parseFloat(priceElement.textContent);
});

prices.sort((a, b) => a - b);

const ortancaFiyat = (allianzLogosCount === 3) ? prices[Math.floor(prices.length / 2)] : prices[prices.length - 1];
const yuksekFiyat = prices[prices.length - 1];

if (brand_name === "VOLKSWAGEN" || allianzLogosCount === 3) {
  console.log(ortancaFiyat);
  console.log('Allianz' + allianzLogosCount);
  Array.from(a_ContainerElements).forEach(container => {
    const priceElement = container.querySelector('.gross');
    const price = parseFloat(priceElement.textContent);
    const logoImgTitle = container.querySelector('.logo img').getAttribute('title');
    if (price === ortancaFiyat && logoImgTitle === 'ALLIANZ SİGORTA A.Ş.') {
      container.appendChild(a_container.cloneNode(true));
    }
  });
  console.log('3 tane içinde en uygun bu');
} else if (brand_name === "VOLKSWAGEN" || allianzLogosCount === 2) {
  console.log(yuksekFiyat);
  console.log('Allianz' + allianzLogosCount);
  Array.from(a_ContainerElements).forEach(container => {
    const priceElement = container.querySelector('.gross');
    const price = parseFloat(priceElement.textContent);
    const logoImgTitle = container.querySelector('.logo img').getAttribute('title');
    if (price === yuksekFiyat && logoImgTitle === 'ALLIANZ SİGORTA A.Ş.') {
      container.appendChild(a_container.cloneNode(true));
    }
  });
  console.log('2 tane içinde en uygunu bu');
}


const a_head = document.querySelector('head')
a_head.insertAdjacentHTML('afterbegin', a_style)