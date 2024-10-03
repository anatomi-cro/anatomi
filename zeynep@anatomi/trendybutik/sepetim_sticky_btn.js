const a_style = `<style>
.a_fiyat_kargo{
    height: 74px;
}
.a_product_price{
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
}
.a_product_kargo{
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
}
.whatsBtn{
bottom: 120px !important;
}
</style>`

const a_sticky = document.querySelector('.mobileAddition')
const a_price = document.querySelector('.sepetItemB4_2').innerText



const a_html = `
<div class="a_fiyat_kargo">
<div class="a_product_price">
<h3>Ürünler</h3>
<h4>${a_price}</h4>
</div>
<div class="a_product_kargo">
<h3>Kargo</h3>
<h4></h4>
</div>

`

a_sticky.insertAdjacentHTML('afterbegin', a_html)


const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);