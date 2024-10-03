const a_style = `<style>

.detayBottom.opacity1{
display: none !important;
}

</style>`


const a_product_title = document.querySelector('.ProductName span').innerText

const a_html = `

<div class="a_product_sticky">
<div class="a_title">${a_product_title}</div>



</div>


`

const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);
