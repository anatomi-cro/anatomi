const a_style = `<style>

.a_container{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 40%;
    left: 0;
    z-index: 999999999999;
    padding: 6px;
    background-color: #69DD9E;
    gap: 9px;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 600;
}
.anatomi_new_product{
  flex: 0 0 auto;
  width: calc(100% / 1); /* Tek ürün görünecek */
  display: flex;
  flex-direction: column;

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
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%;
  scroll-behavior: smooth;
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
</style>`



const a_html = `

<div class="a_container">
<p>SON <span>GEZDİKLERİM</span></p>
<svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.19817 0.849908L9.84681 8.49854C10.3162 8.96789 10.3162 9.72887 9.84681 10.1982L2.19818 17.8469C1.72882 18.3162 0.96784 18.3162 0.498481 17.8469C0.0291233 17.3775 0.0291239 16.6165 0.498482 16.1472L7.29726 9.34839L0.498477 2.5496C0.029119 2.08025 0.0291189 1.31927 0.498477 0.849909C0.967835 0.380551 1.72881 0.380551 2.19817 0.849908Z" fill="#2F3459"/>
</svg>
<hr></hr>
</div>

`
const a_body = document.querySelector('body');
a_body.insertAdjacentHTML('afterend', a_html);

const a_container = document.querySelector('.a_container');



const a_html_icerik = `

<div class="anatomi_icerik">
<div class="anatomi_icerik_başlık">
<p>Önceden Gezdiğin Ürünler</p>
<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 4.94074L9 8.88148M1 8.88148L5 4.94074L1 8.88148ZM9 1L4.99924 4.94074L9 1ZM4.99924 4.94074L1 1L4.99924 4.94074Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div class="product_container">
<div class="a_product_list">

</div>

</div>
</div>

`
// Tıklama olayını dinlemek için bir olay dinleyici ekleyin
// Tıklama olayını dinlemek için bir olay dinleyici ekleyin
a_container.addEventListener('click', function() {
  // a_html_icerik içeriğini ekleyin
  a_body.insertAdjacentHTML('afterend', a_html_icerik);
  a_container.style.display = "none";

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
      } else {
        console.error('Eleman bulunamadı.');
      }
    }
  });
  
  console.log([...h2Texts]);
  

  // close iconu


}

// İlk açılışta ürünleri yükleme işlemini çağırın
loadProducts();

const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);


