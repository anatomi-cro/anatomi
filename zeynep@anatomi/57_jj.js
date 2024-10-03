const a_style = `<style>

.a_container{
    position: absolute;
    top: 40%;
    left: 0;
    z-index: 999999999999;
    padding: 6px;
    background-color: #69DD9E;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 600;
}
.a_container_inner{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
}
.anatomi_new_product{
  flex: 0 0 auto;
  width: calc(100% / 1); /* Tek ürün görünecek */
    display: none;


}

.anatomi_new_product.active {
    display: block; 
}


.a_alt_container{
  display: flex;
    gap: 10px;
    padding: 20px;
    
}
.anatomi_img{
  width: 30%;
}
.anatomi_info{
  width: 70%;
  display: flex;
    flex-direction: column;
    justify-content: center;
}
.a_container p{
    margin-bottom: 0px !important;
    color: white;
}
.a_container span{
    display: block;
    color: #2F3459 !important;
}
.anatomi_icerik{
  position: absolute;
  top: 35%;
  left: 0;
  z-index: 999999999999;
  background-color: white;
  width: 50%;
}
.anatomi_icerik_başlık{
    display: flex;
    gap: 14px;
    align-items: center;
    height: 34px;
    align-items: center;
    justify-content: center;
    font-size: 15px;
}
.anatomi_icerik_başlık p{
    margin-bottom: 0px !important;
}
.product_container{
  width: 100%;
  overflow: hidden;
}
.a_product_list {
  display: flex;
  gap: 10px;
  
}


.anatomi_info h2{
  font-size: 14px;
  white-space: break-spaces;
  margin: 0 !important;
}
.anatomi_info p{
  font-size: 12px;
  margin: 0 !important;
}
.urunu_incele{
  background-color: #1D49F1;
  background-color: #1D49F1;
  border: none;
  color: white;
  font-size: 16px;
  width: 100%;
  height: 35px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none !important;
}
.urunu_incele:active, .urunu_incele:focus{
  color: white !important;
}
.urunu_incele:visited{
  text-decoration: none !important;
}
.a_back{
  position: absolute;
  top: 82px;
  border: none;
  background: none;
}
.a_next{
      position: absolute;
    top: 81px;
    right: 0px;
    border: none;
    background: none;
}
</style>`



const a_html = `

<div class="a_container">
<div class="a_container_inner">
<p>SON <span>GEZDİKLERİM</span></p>
<svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.19817 0.849908L9.84681 8.49854C10.3162 8.96789 10.3162 9.72887 9.84681 10.1982L2.19818 17.8469C1.72882 18.3162 0.96784 18.3162 0.498481 17.8469C0.0291233 17.3775 0.0291239 16.6165 0.498482 16.1472L7.29726 9.34839L0.498477 2.5496C0.029119 2.08025 0.0291189 1.31927 0.498477 0.849909C0.967835 0.380551 1.72881 0.380551 2.19817 0.849908Z" fill="#2F3459"/>
</svg>
<hr></hr>
</div>
</div>

`
const a_body = document.querySelector('body');
a_body.insertAdjacentHTML('afterend', a_html);

const a_container = document.querySelector('.a_container');



const a_html_icerik = `

<div class="anatomi_icerik">
<div class="anatomi_icerik_başlık">
<p>Önceden Gezdiğin Ürünler</p>

<svg width="10" id="a_svg_close" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 4.94074L9 8.88148M1 8.88148L5 4.94074L1 8.88148ZM9 1L4.99924 4.94074L9 1ZM4.99924 4.94074L1 1L4.99924 4.94074Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
<div class="product_container">


<button class="a_back" type="button">
<svg  width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.57128 10.7812L0.24513 6.02812C-0.0817094 5.73645 -0.0817094 5.26355 0.24513 4.97188L5.57128 0.218757C5.89812 -0.0729189 6.42803 -0.0729189 6.75487 0.218757C7.08171 0.510432 7.08171 0.983331 6.75487 1.27501L2.02051 5.5L6.75487 9.72499C7.08171 10.0167 7.08171 10.4896 6.75487 10.7812C6.42803 11.0729 5.89812 11.0729 5.57128 10.7812Z" fill="black"/>
</svg>
  </button>


<div class="a_product_list">

</div>

  <button class="a_next" type="button">
  <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.42872 10.7812L6.75487 6.02812C7.08171 5.73645 7.08171 5.26355 6.75487 4.97188L1.42872 0.218757C1.10188 -0.0729185 0.571969 -0.0729185 0.24513 0.218757C-0.0817099 0.510432 -0.0817099 0.98333 0.24513 1.27501L4.97949 5.5L0.24513 9.72499C-0.0817099 10.0167 -0.0817099 10.4896 0.24513 10.7812C0.571969 11.0729 1.10188 11.0729 1.42872 10.7812Z" fill="black"/>
  </svg>
  </button>
</div>
</div>

`


// Başlangıçta icerik gizli olsun
// Tıklama olayını dinlemek için bir olay dinleyici ekleyin
a_container.addEventListener('click', function() {
  // a_html_icerik içeriğini ekleyin

  a_container.style.display = "none";
  if (document.querySelector('.anatomi_icerik')) {
    document.querySelector('.anatomi_icerik').style.display="block"
console.log('xxx');
    return;
    
  }
  
  a_body.insertAdjacentHTML('afterend', a_html_icerik);

  //active classı ekleme ve ileri geri butonunun işlevi
  let activeIndex = 0; // İlk ürün aktif olarak başlasın


  // İleri düğmesine tıklanınca
  document.querySelector(".a_next").addEventListener("click", function () {
      const products = document.querySelectorAll(".anatomi_new_product");
      
      // Mevcut ürünün active sınıfını kaldırın
      products[activeIndex].classList.remove("active");
      
      // Bir sonraki ürüne geçin (eğer son ürünse başa dönün)
      activeIndex = (activeIndex + 1) % products.length;
      
      // Yeni ürüne active sınıfını ekleyin
      products[activeIndex].classList.add("active");
  });
  
  // Geri düğmesine tıklanınca
  document.querySelector(".a_back").addEventListener("click", function () {
      const products = document.querySelectorAll(".anatomi_new_product");
      
      // Mevcut ürünün active sınıfını kaldırın
      products[activeIndex].classList.remove("active");
      
      // Bir önceki ürüne geçin (eğer ilk ürünse sona dönün)
      activeIndex = (activeIndex - 1 + products.length) % products.length;
      
      // Yeni ürüne active sınıfını ekleyin
      products[activeIndex].classList.add("active");
  });


  // a_svg_close 

  const a_svg_close = document.querySelector('#a_svg_close');
  a_svg_close.addEventListener('click', function() {
    console.log('a_içerik kapandı');

    a_container.style.display = "block";
    const anatomi_icerik = document.querySelector('.anatomi_icerik');
    anatomi_icerik.style.display = "none";
  })





  // Ürünleri yükleme işlemini burada başlatın
  loadProducts();
});




function loadProducts() {

  // Ürünleri yükleme işlemini burada gerçekleştirin
  const products = JSON.parse(sessionStorage.getItem('57_items_arr'));
  console.log(products);

  const h2Texts = new Set();
  
  products.forEach((product, index) => {
    const productTitle = product.itemName;
  
    // Yinelenen başlıkları önlemek için Set'e ekleyin
    if (!h2Texts.has(productTitle)) {
      h2Texts.add(productTitle);
  
      // Diğer ürün bilgilerini kullanarak HTML öğesini oluşturun
      const productElement = `
        <div class="anatomi_new_product">
          <div class="a_alt_container">
            <div class="anatomi_img">
              <img src="${product.itemImg}" alt="${productTitle}">
            </div>
            <div class="anatomi_info">
              <h2>${productTitle}</h2>
              <p class="a_price">${product.itemPrice} TL</p>
            </div>
          </div>
          <a class="urunu_incele" href="${product.itemUrl}"><span>Ürünü İncele</span></a>
        </div>
      `;
  
      const productContainer = document.querySelector('.a_product_list');
      if (productContainer) {
        productContainer.insertAdjacentHTML('afterbegin', productElement);


        // İlk ürünü seçin ve ona active sınıfını ekleyin
        const firstProduct = document.querySelector(".anatomi_new_product");

        if (firstProduct) {
        firstProduct.classList.add("active");
        }


              // 3 nokta
// Tüm .a_product_info p öğelerini seçin
const productInfo = document.querySelectorAll('.anatomi_info h2');

// Her bir p öğesini döngü içinde işleyin
productInfo.forEach(item => {
  // Metni kelimelere ayır
  const words = item.textContent.trim().split(' ');

  // İlk 4 kelimeyi alın
  const firstFourWords = words.slice(0, 4).join(' ');

  // Eksik kelimeleri ve üç noktayı ekleyin
  const abbreviatedText = firstFourWords + (words.length > 4 ? ' ...' : '');

  // Metni güncelleyin
  item.textContent = abbreviatedText;
});
      } else {
        console.error('Eleman bulunamadı.');
      }
    }
  });

  console.log([...h2Texts]);
  
}





// İlk açılışta ürünleri yükleme işlemini çağırın
loadProducts();

const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);


