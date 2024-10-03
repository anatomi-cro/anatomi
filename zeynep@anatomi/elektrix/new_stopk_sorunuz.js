// ürün listeleme
const a_style = `<style>
span.out-of-stock-list{
    position:inherit;
    top:inherit;
    left: inherit !important;
    background-color: inherit;
    transform: inherit !important;
    font-size: inherit !important;
    width: inherit !important;
}
@media screen and (max-width: 500px)
span.out-of-stock-list {
    position:inherit;
    top:inherit;
    left: inherit !important;
    background-color: inherit;
    transform: inherit !important;
    font-size: inherit !important;
    width: inherit !important;
}
.a_stok{
    top: calc(94% - 15px) !important;
    right: 10px !important;
    left: 10px !important;
    line-height: 30px !important;
    color: #fff !important;
    font-size: 14px !important;
    z-index: 3 !important;
    margin-left: -19px !important;
    margin-right: -19px !important;
    background-color: #AFAFAF !important;
}

</style>`


const product_containers = document.querySelectorAll('.col.col-12.box-border.drop-down.hover');
const product_infos = document.querySelectorAll('span.pos-a.text-upper.text-bold.text-center.darkFluBg.out-of-stock-list');
product_infos.forEach(item => {
item.classList.add('a_stok')
item.innerText = 'TÜKENDİ';
})

if (product_containers.length === product_infos.length) {
  for (let i = 0; i < product_containers.length; i++) {
    product_containers[i].appendChild(product_infos[i]);
  }
} else {
  console.error('Uyarı: product_containers ve product_infos NodeList\'leri farklı uzunluklarda!');
}

const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);



// ürün detay
const a_style = `<style>
.a_new_stok{
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 10px !important;
    background-color: #397CB8 !important;
    border-radius: 4px !important;
    color: white !important;
    cursor: pointer !important;
   
}
span.out-of-stock-list{
    position:inherit;
    top:inherit;
    left: inherit !important;
    background-color: inherit;
    transform: inherit !important;
    font-size: inherit !important;
    width: inherit !important;
}
@media screen and (max-width: 500px)
span.out-of-stock-list {
    position:inherit;
    top:inherit;
    left: inherit !important;
    background-color: inherit;
    transform: inherit !important;
    font-size: inherit !important;
    width: inherit !important;
}
.a_stok{
    top: calc(94% - 15px) !important;
    right: 10px !important;
    left: 10px !important;
    line-height: 30px !important;
    color: #fff !important;
    font-size: 14px !important;
    z-index: 3 !important;
    margin-left: -19px !important;
    margin-right: -19px !important;
    background-color: #AFAFAF !important;
    width: 100% !important;
}
.out-of-stock {
    transform: inherit !important;
}


</style>
`

// const product_containers = document.querySelectorAll('.col.col-12.box-border.drop-down.hover');
const product_infos = document.querySelector('.pos-a.text-upper.text-bold.text-center.darkFluBg.out-of-stock');
if (product_infos) {
    product_infos.classList.add('a_stok')
product_infos.innerText = 'TÜKENDİ';
const a_stok_info = document.querySelector('span.box.productFunction')
a_stok_info.style.display = "none";

const a_new_stok = document.querySelector('.popupWin.box.productFunction.popupHide.priceAlertLink')
a_new_stok.classList.add('a_new_stok')
const a_html = `
<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.92872 0.75853L7.25487 6.37585C7.58171 6.72056 7.58171 7.27944 7.25487 7.62415L1.92872 13.2415C1.60188 13.5862 1.07197 13.5862 0.745129 13.2415C0.41829 12.8968 0.41829 12.3379 0.745129 11.9932L5.47949 7L0.745129 2.00682C0.41829 1.66212 0.41829 1.10324 0.745129 0.75853C1.07197 0.413823 1.60188 0.413823 1.92872 0.75853Z" fill="white"/>
</svg>
`

a_new_stok.insertAdjacentHTML('beforeend', a_html)
}else{
    console.log('stok var')
}


const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterend', a_style);