const a_style = `<style>
.a_text{
  display: flex !important;
  align-items: center !important;
  gap: 160px !important;
  padding: 8px !important;

}


.a_span_detail{
  padding: 0 10px 10px 10px !important;
  background: white !important;
}

.a_svg_icon{
  position: absolute !important;
    right: 55px !important;
}

.cl-product-info-col .cl-product-details-container .cl-product-details span{
  font-weight: 600 !important;
    line-height: 25px !important;
}

@media only screen and (max-width: 992px){
.cl-product-info-col .cl-product-details-container .cl-product-details {
    padding: 0 !important;
}

}

.a_line {
  display: grid;
  grid-template-columns: 100px 350px;
  font-size: 10px;
  margin-left: 10px !important;
}

.a_description{
  padding-left : 20px;
}
</style>`




const a_detail = document.querySelector('.cl-product-details-container .cl-product-details')
a_detail.style.padding = "0"
const a_product_detail = document.querySelector('.cl-product-details-container span');
a_product_detail.style.display = 'none';
a_product_detail.classList.add('a_span_detail')


// prdoduct detail split 
// 'a_span_detail' class'ına sahip <span> elementini seçiyoruz
const a_detail_text = document.querySelector('.a_span_detail');
// <span> içindeki metni satırlara bölen bir dizi oluşturuyoruz
const lines = a_detail_text.innerText.split('\n');

// Dizi elemanları üzerinde işlem yapmak için map() fonksiyonunu kullanıyoruz
a_detail_text.innerHTML = lines.map((line, index) => {
    // ':' karakterinin indeksini buluyoruz
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
        // ':' karakterinden önceki kısmı 'label' olarak alıyoruz ve boşlukları temizliyoruz
        const label = line.slice(0, colonIndex).trim();
        // ':' karakterinden sonraki kısmı 'description' olarak alıyoruz ve boşlukları temizliyoruz
        const description = line.slice(colonIndex + 1).trim();
        // Sonuç olarak bir satır oluşturuyoruz ve 'label' kısmını kalın (bold) olarak işaretliyoruz.
        // 'description' kısmını ise ayrı bir <div> içinde gösteriyoruz.
        return `<div class="a_line" style="margin-left: 20px"><b>${label}</b> <div class="a_description">: ${description}</div></div>`;
    }
    // Eğer satırda ':' karakteri yoksa, sadece metni içeren bir <div> oluşturuyoruz
    return `<div class="a_line" style="margin-left: 20px">${line}</div>`;
}).join('');



// ürün deyaının acılıp kapanması
const a_detail_container = document.querySelector('.cl-product-details-container');
a_detail_container.addEventListener('click', function() {
  if (a_product_detail.style.display === 'none') {
    a_product_detail.style.display = 'block';
  } else {
    a_product_detail.style.display = 'none';
  }
});



// ok ikonun eklenmesi
const a_detail_wording = document.querySelector('.cl-product-details p')
a_detail_wording.classList.add('a_text')

const a_html = `
<div class="a_svg_icon">
<svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Arrow+1+(Stroke)+(2).svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.24513 0.377852L10.6148 8.58779C11.1284 9.09159 11.1284 9.90841 10.6148 10.4122L2.24513 18.6221C1.73152 19.126 0.898808 19.126 0.385203 18.6221C-0.128401 18.1183 -0.128401 17.3015 0.385203 16.7977L7.82491 9.5L0.385203 2.20228C-0.128401 1.69848 -0.128401 0.881655 0.385203 0.377852C0.898808 -0.125951 1.73152 -0.125951 2.24513 0.377852Z" fill="#333333"/>
</svg>
</div>

`
a_detail_wording.insertAdjacentHTML('beforeend',a_html )


const svgIcon = document.querySelector('.a_svg_icon');
// İlk durumu saklamak için başlangıç açısını tanımlayın
let rotationAngle = 0;

// SVG ikonuna tıklama olayı ekleyin
a_detail_container.addEventListener('click', () => {
  // Her tıklamada 90 derece döndürün
  rotationAngle += 90;
  svgIcon.style.transform = `rotate(${rotationAngle}deg)`;

  if (rotationAngle === 180) {
    rotationAngle = 0;
    svgIcon.style.transform = `rotate(${rotationAngle}deg)`;
  }
});



const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('beforeend', a_style);


