const a_style = `<style>

.a_new_btn{
    background: white !important;
    border: 1px solid black !important;
    color: black !important;
    margin-top: 10px !important;
    height: 32px !important;
    width: 100%;
    border-radius: 4px;
}

.cl-product-addTocart-button{
    visibility: hidden;
    height: 0px !important;
    
}

.cl-product-addTocart-box {
    transform: translateY(-100px) !important;
}



</style>`

const a_info = document.querySelectorAll('.cl-product-info');
const a_cart_btn = document.querySelectorAll('.cl-product-addTocart-button');

a_cart_btn.forEach(function(item, index) {
    console.log(index);
    const itemId = 'a_cart_btn' + index;
    item.id = itemId;
    const a_html = `<button class='a_new_btn' onclick='document.querySelector("#${itemId}").click();'>Sepete Ekle</button>`;

    a_info[index].insertAdjacentHTML('afterend', a_html);
   
});





const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);