const a_style = `<style>
.a_title_info{
    text-align: center;
}
.a_price{
    display: flex;
    justify-content: center;
}
.a_button {
    height: auto;
    background: rgb(13, 126, 189);
    position: absolute;
    bottom: 0;
    left: 10px !important;
    width: 95% !important;
    padding: 0.6rem 0;
    text-align: center;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 250ms all;
}
.a_product_container{
    position: relative;
}
@media screen and (min-width: 768px) {
    .a_button{
        background-color: transparent;
        color: rgb(13, 126, 189);
        border: 1px solid rgb(13, 126, 189);
    }
    
    .a_button:hover{
        background-color: rgb(13, 126, 189);
        color: white;
        border: none;
    }
}
.listProductBrand{
    display: none;
}
.listProductName{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.row.drop-down-title{
    margin-top:20px;
}
.productDiscount{
    display: block !important;
}
</style>`


const a_products = document.querySelectorAll('.col.col-12.box-border.drop-down.hover')

a_products.forEach((product) => {
    product.classList.remove('hover');
  });

  const a_info_icon = document.querySelectorAll('.pos-a.pos-right.pos-bottom.pos-left.bottom.fixed.blockLightBg.forDesktop')
    a_info_icon.forEach((item) => {
        item.remove();
    });

    const title_info = document.querySelectorAll('.row.drop-down-title .row')
    title_info.forEach((item) => {
        item.classList.add('a_title_info')
    })

    const a_price = document.querySelectorAll('.fl.col-12.tooltipWrapper')
        a_price.forEach((item) => {
            item.classList.add('a_price')
        })

        

    // indirim aşagıya indirilmesi
    const a_tooltipWrapperList = document.querySelectorAll('.fl.col-12.tooltipWrapper');
    const a_discountList = document.querySelectorAll('.pos-a.pos-top.pos-right.col.btn-success.text-light.passive.d-flex.productDiscount');
    
    for (let i = 0; i < a_tooltipWrapperList.length; i++) {
      const tooltipWrapper = a_tooltipWrapperList[i];
      const discount = a_discountList[i];
    
      if (tooltipWrapper && discount) {
        tooltipWrapper.insertAdjacentElement('afterbegin', discount);
      }
    }

        //Element Düzenlenmesi
function addElements(){
    const html = `<div class="a_button">Sepete Ekle</div>`;
    //butonun ekleneceği alana class isimlendirmesi
    const items = document.querySelectorAll('.col.col-3.col-md-4.col-sm-6.col-xs-6.p-right.mb.productItem.zoom.ease');
    items.forEach(item => {
        item.classList.add('a_product_container');
    });

//butonun eklenmesi
    const aProductContainer = document.querySelectorAll(".a_product_container");
    aProductContainer.forEach(item => {
        item.insertAdjacentHTML("beforeend", html);
    });

//eklenen butona onclick özelliği tanımlanması
const aButtons =  document.querySelectorAll('.a_button');
aButtons.forEach(item => {
    let attr = item.parentElement.previousElementSibling.getAttribute('value');
    item.setAttribute('onclick', `Add2Cart(${attr}, $('#subPro${attr}').val(), $('#Adet${attr}').val());`)
});

    document.querySelectorAll('.out-of-stock-list').forEach(item => {
        const items = Array.from(item.closest('.row').nextElementSibling.children);
        items.forEach(sub => {
            if(sub.classList.contains('a_button')){
                sub.innerText = "Ürüne Git";
                let href = sub.closest('.row').previousElementSibling.children[0];
                sub.removeAttribute('onclick');
                sub.addEventListener('click', () => {
                    href.click();
                })
            }
        });
    });
}

//elementlerin eklenmesi
addElements();


    

    const a_head = document.querySelector('head');
    a_head.insertAdjacentHTML('afterbegin', a_style);





// const a_catalogContainer = document.querySelectorAll('.col.col-12.p-left')[1];
// const a_mb = new MutationObserver(entries => {
//     if(entries[0].addedNodes.length > 0 && entries[0].target.classList.contains('col col-12 p-left')){
//         addElements();
//     }
// });
// a_mb.observe(a_catalogContainer, { childList: true });


















//Stil entegrasyonu
function addStyle(){
    const style = `
<style>
/* eklenen buton */
.a_button {
    height: auto;
    background: rgb(13, 126, 189);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.6rem 0;
    text-align: center;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 250ms all;
}
/* eklenen butonun kapsayıcı container'ı */
.row.a_product_container{
    position: relative;
}
/* Ürün isimlerinin ... olarak düzenlenmesi */
.text-description.detailLink.blockTitleProduct{
    line-height: normal;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
/* stok sorunuz butonları gizleme */
/*.outofstock-button{*/
/*    display: none;*/
/*}*/

@media screen and (min-width: 768px) {
    .a_button{
        background-color: transparent;
        color: rgb(13, 126, 189);
        border: 1px solid rgb(13, 126, 189);
    }
    
    .a_button:hover{
        background-color: rgb(13, 126, 189);
        color: white;
        border: none;
    }
}
</style>
`;
    document.querySelector('head').insertAdjacentHTML('beforeend', style);
}
addStyle();

//Element Düzenlenmesi
function addElements(){
    const html = `<div class="a_button">Sepete Ekle</div>`;
    //butonun ekleneceği alana class isimlendirmesi
    const items = document.querySelectorAll('#katalog .fl.col-12.catalogWrapper li .box-border');
    items.forEach(item => {
        item.children[1].classList.add('a_product_container');
    });

//butonun eklenmesi
    const aProductContainer = document.querySelectorAll(".a_product_container");
    aProductContainer.forEach(item => {
        item.insertAdjacentHTML("beforeend", html);
    });

//eklenen butona onclick özelliği tanımlanması
    const aButtons =  document.querySelectorAll('.a_button');
    aButtons.forEach(item => {
        let attr = item.parentElement.parentElement.parentElement.previousElementSibling.getAttribute('value');
        item.setAttribute('onclick', `Add2Cart(${attr}, $('#subPro${attr}').val(), $('#Adet${attr}').val());`)
    });

    document.querySelectorAll('.out-of-stock-list').forEach(item => {
        const items = Array.from(item.closest('.row').nextElementSibling.children);
        items.forEach(sub => {
            if(sub.classList.contains('a_button')){
                sub.innerText = "Ürüne Git";
                let href = sub.closest('.row').previousElementSibling.children[0];
                sub.removeAttribute('onclick');
                sub.addEventListener('click', () => {
                    href.click();
                })
            }
        });
    });
}

//elementlerin eklenmesi
addElements();

const catalogContainer = document.querySelector('.catalogWrapper');
const mb = new MutationObserver(entries => {
    if(entries[0].addedNodes.length > 0 && entries[0].target.classList.contains('catalogWrapper')){
        addElements();
    }
});
mb.observe(catalogContainer, { childList: true });