const a_style = `<style>

.anatomi_container{
    height: 135px;
    background: white;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 9999999999;
}
.a_up_info{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 15px 10px;
}
.a_product_price{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
}
.a_product_kargo{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
}
.a_up_info h4{
    margin: 0 !important;
    color: #656364 !important;
}
.a_up_info span{
    color: #656364 !important;
}
hr{
    border-width: 0.2px !important;
    border-color: #e2e2e266 !important;
}
#addCartBtn{
    position: initial !important;
    width: 50% !important;
    margin-right : 30px !important;
    border-radius: 3px !important;
    padding: 0px !important;
    color: black !important;

}
.a_sepet_container{
    width: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px !important;
}
.a_sepet_container h4{
    margin: 0 !important;
}
.a_total{
    width: 50% !important;
    gap: 12px;
    display: flex;
    flex-direction: column;
    font-size: 15px
}
.wp-app-container{
    display: none !important;
}



</style>`


    const anatomi_create_div = document.createElement('div')
anatomi_create_div.classList.add('anatomi_container')


const a_body = document.querySelector('body');
a_body.appendChild(anatomi_create_div);


const a_sepet_btn = document.querySelector('#addCartBtn')
a_sepet_btn.classList.add('a_sepet_btn')



//sepet toplam
const a_product_price = document.querySelectorAll('.box.col-6.a-right')[0].innerText;

// kargo fiyatı 
let a_product_kargo = '';
const kargoElement = document.querySelectorAll('.box.col-6.line-right')[1];
if (kargoElement.innerText == "Kargo Fiyatı") {
a_product_kargo = document.querySelectorAll('.box.col-6.a-right')[1].innerText.trim();

}else{
    a_product_kargo = 'Ücretsiz';
}



// a_total_fiyat'ı alalım (konumu değişebilir)
let a_total_fiyat = '';
const totalElement = document.querySelectorAll('.box.col-6.a-right')[2] || document.querySelectorAll('.box.col-6.a-right')[1];
if (totalElement) {
  a_total_fiyat = totalElement.innerText;
}

console.log('a_product_price:', a_product_price);
console.log('a_product_kargo:', a_product_kargo);
console.log('a_total_fiyat:', a_total_fiyat);



const a_html = `
<div class="a_up_info">
<div class="a_product_price">
<h4>Ürünler</h4>
<span>${a_product_price}</span>
</div>
<div class="a_product_kargo">
<h4>Kargo</h4>
<span>${a_product_kargo}</span>
</div>
</div>

<hr>
<div class="a_sepet_container">
<div class="a_total">
<h4>Toplam</h4>
<span>${a_total_fiyat}</span>
</div>
</div>

`

anatomi_create_div.innerHTML = a_html

const a_sepet_container = document.querySelector('.a_sepet_container')
a_sepet_container.insertAdjacentElement('beforeend',a_sepet_btn)


const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);



function inputChange(sessId, newCount) {

    Cart.update(sessId, newCount, function (msg) {
        $('.cart-soft-count').text(msg.totalQuantity);
        $('.cart-soft-price').text(msg.totalPrice);

        createAnatomiCart();
    });
    

}


function qtyChange(sessId, newCount) {
    var inc = parseFloat($('#SepetForm #Adet' + sessId).parent('.qtyBtns').attr('data-increment') || '1');
    Cart.update(sessId, newCount, function (msg) {

        if (msg.status > 0) {
            $('#cartDetail').angularTemplate();
            $('.cart-soft-count').text(msg.totalQuantity);
            $('.cart-soft-price').text(msg.totalPrice);
        }
        else {
            Message.showDialog(msg.statusText, 500, 50);
            $('#SepetForm input[data-cart-id="' + sessId + '"]').val(newCount - inc);
        }

        createAnatomiCart();
    
        console.log("test")
    });
}

createAnatomiCart();


// .col.col-3.col-md-6.col-sm-12.fr{
//     display: none !important;
// }