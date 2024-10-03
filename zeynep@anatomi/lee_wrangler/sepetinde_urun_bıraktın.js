const a_style_new = `<style>

.a_new_container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  
    background: #ffffff;
    z-index: 99999;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
}
.product_list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    height: 152px;
    gap: 5px;
    margin-top: 10px;
}
.a_title {
  display: flex;
  justify-content: center;
  font-size: 15px;
  font-weight: 700;
  color: #333333;
  border-bottom: 1px solid #EEEEEE;

}
.anatomi_btn_box{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 15px;
  text-align: center;
  font-size: 14px;
}
.anatomi_new_product{
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.anatomi_btn_close{
  padding: 14px;
  border: 1px solid #9D9D9D;
  color: #9D9D9D;
  border-radius: 5px;
  width: 50%;
  text-decoration: none;
  font-weight:600;
  font-size:15px;
}
.anatomi_btn_sepet{
  padding: 14px;
  border: 1px solid #008B31;
  background-color: #008B31;
  color: #fff;
  border-radius: 5px;
  width: 50%;
  text-decoration: none;
  font-weight:600;
  font-size:16px;
}

.anatomi_img{
  width: 25%;

}
.anatomi_img img{
  width: 100%;
  height: 125px;
  border-radius: 5px;

}

.anatomi_info{
  width: 65%;

}
.anatomi_info h2{
  font-size: 14px;
  font-weight: 600 !important;
}

.a_price{
  font-size: 18px;
  font-weight: bold;
  color: #008B31;

}
.a_miktar{
  color: #888888;
  font-size: 13px;
}

@media only screen and (min-width: 900px) {
  .a_new_container {
      width: 35%;
      transform: translate(100%, 0);
  }
}

</style>`




const a_new_html = `
<div class="anatomi_alt_container">
<div class="a_title">
<p>Sepetinde Bıraktığın Ürünleri Tükeniyor! Hemen Satın Al</p>
</div>

<div class='product_list'>
</div>


<div class='anatomi_btn_box'>
<a class='anatomi_btn_close'>Kapat</a>
<a href="https://www.elektrix.com/sepet" class='anatomi_btn_sepet'>Sepete git</a>
</div>

</div>

`

const a_new_container = document.createElement('div');
a_new_container.classList.add('a_new_container');

const a_body = document.querySelector('body');
a_body.appendChild(a_new_container);

a_new_container.insertAdjacentHTML('afterbegin', a_new_html);

// Ürünlerin olduğu sayfada her ürünün bilgilerini içeren bir dizi oluşturun
const products = JSON.parse(localStorage.getItem('paid-products')).data;
console.log(products);

products.forEach((product, index) => {
    // Ürünün fotoğrafını, başlığını ve fiyatını değişkenlere atayın
    const productImage = product.img;
    const productTitle = decodeURIComponent(product.name)
      const productQuantity = product.quantity;
    const productPrice = product.originalPrice;

  // Bu bilgileri kullanarak, her ürün için bir HTML öğesi oluşturun ve anasayfaya ekleyin
  const productElement = `
    <div class="anatomi_new_product">
    <div class="anatomi_img">
    <img src="${productImage}" alt="${productTitle}">
    </div>
<div class="anatomi_info">
<h2>${productTitle}</h2>
<p class="a_miktar">Adet: ${productQuantity}</p>
<p class="a_price">${productPrice} TL</p>
</div>
     
    </div>
  `;
  
  // Oluşturulan HTML öğesini anasayfaya ekleyin
  document.querySelector('.product_list').insertAdjacentHTML('beforeend', productElement);
})

const a_close = document.querySelector('.anatomi_btn_close');

a_close.addEventListener('click', function() {
    a_new_container.classList.remove('a_new_container');

})

const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style_new);