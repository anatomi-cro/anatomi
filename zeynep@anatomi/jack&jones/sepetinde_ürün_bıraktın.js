const a_style = ` 
<style>


.anatomi_new_container {
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
    padding: 20px;
    overflow: auto;
    max-height: 330px;
    margin-bottom: 10px;
    gap: 10px;
    display: flex;
    flex-direction: column;
}


.anatomi_btn_box{
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    text-align: center;
    font-size: 14px;
    padding: 0px 20px;
    height: 27px;
  
}

.a_title {
    display: flex;
    justify-content: center;
    font-size: 15px;
    color: #333333;
    border-bottom: 1px solid #EEEEEE;
    padding: 13px;
    text-align: center;

}
.a_title p{
    margin: 0 !important;
    color: #0D37A4;

}

.anatomi_btn_kapat{
    padding: 14px;
    border: 1.5px solid #0D37A4;
    color: #0D37A4;
    border-radius: 5px;
    width: 50%;
    text-decoration: none;
}
.anatomi_btn_sepet{
    padding: 14px;
    border: 1.5px solid #0D37A4;
    background-color: #0D37A4;
    color: #fff;
    border-radius: 5px;
    width: 50%;
    text-decoration: none;
}

.anatomi_new_product{
    display: flex;
    gap:20px;
}


.anatomi_info h2{
margin: 0 !important;
font-size:14px;
}

.anatomi_info p{
    margin: 0 !important;

}


.anatomi_img img{
    border-radius: 7px;
}

.anatomi_info{
    gap: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.a_price{
    font-size:14px;
    font-weight: 700;
    color: #0D37A4;

}
.a_miktar{
    color: #888888;
    font-size: 13px;
}


.alt_container{
    margin-bottom: 20px;
}

</style>
`



const a_new_html = `
<div class="anatomi_alt_container">

<div class="a_title">
<p>Sepetindeki ürünler seni bekliyor, tükenmeden satın al! </p>
</div>


<div class="alt_container">
<div class='product_list'>
</div>

<div class='anatomi_btn_box'>
<a class='anatomi_btn_kapat'>Kapat</a>
<a href="https://jackjones.com.tr/sepetim" class='anatomi_btn_sepet'>Sepete git</a>
</div>


</div>

</div>

`

const a_new_container = document.createElement('div');
a_new_container.classList.add('anatomi_new_container');

const a_body = document.querySelector('body');
a_body.appendChild(a_new_container);

a_new_container.insertAdjacentHTML('afterbegin', a_new_html);


const products = JSON.parse(localStorage.getItem('paid-products')).data;
console.log(products);

products.forEach((product, index) => {
    // Ürünün fotoğrafını, başlığını ve fiyatını değişkenlere atayın
    const productImage = product.img;
    const productTitle = decodeURIComponent(product.name)
      const productQuantity = product.quantity;
    const productPrice = product.price;
    // const oldProductPrice = 

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


const cart_icon = document.querySelector('.ins-floating-cart-button')
cart_icon.style.display = "none";

const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);


const a_devam = document.querySelector('.anatomi_btn_kapat');

a_devam.addEventListener('click', function() {
    a_new_container.classList.remove('anatomi_new_container');

})


const üc_al_iki_öde = document.querySelector('.a_new_container');

if (üc_al_iki_öde) {

    üc_al_iki_öde.style.display = "none";
    
}