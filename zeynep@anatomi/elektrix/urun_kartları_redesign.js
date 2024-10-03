const a_style = `<style>
.a_container{
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    width: 100% !important;
}
.a_product_list{
    width: 100% !important;
}
.a_product{
    display: grid !important;
    grid-template-columns: 1fr 1.5fr !important;
    gap:10px !important;
}
.a_title{
    color: #333333 !important;
    font-size: 12px !important;
    font-weight: 600 !important;
}
.a_product_container{

    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    width: 100% !important;
}
.a_product_container::before {
    content: '';
    border-left: 1px solid #DDDDDD; /* dikey çizgiyi tanımlar */
    height: 70%; /* çizginin elemanın yüksekliği kadar olmasını sağlar */
    display: block; /* çizginin bir blok olarak görüntülenmesini sağlar */
    position: absolute; /* çizginin üst öğenin içindeki konumunu belirler */
    left: -14px; /* çizginin sol kenara hizalanmasını sağlar */
  }

.a_product_discount{
    display: flex;
    align-items: end;
    gap: 6px;
    color: #0F7EBD;
    font-weight: 700;
}

.box.col-12.proRowAct{
    padding-top: 0px !important;
    padding-bottom: 0px !important;

}

.priceWrapper{
    display: flex !important;
    align-items: center !important;
    justify-content: start;
    gap: 6px !important;
    margin-top: 13px;
}
.currentPrice{
    font-size: 16px !important;
    font-weight: 600 !important;
}
.a_button{
    margin-bottom: 15px;
    border-radius: 2px;
}

.stImage{
    max-width: calc(100% - 30px) !important;
    max-height: calc(100% - 30px) !important;
    
}

.proRowAct{
    padding: 0 !important;
}

.col.col-12.productDetails.loaderWrapper {
    height: auto !important;
}

.a_product > .row{
    display: flex !important;
}



</style>`


// sepete ekle butonun position absulutetini kaldır
const a_container = document.querySelector('.catalogWrapper');
a_container.classList.add('a_container');

function addClassesToProducts() {
    const a_product_list = document.querySelectorAll('.fl.col-3.col-md-4.col-sm-6.col-xs-6.productItem.zoom.ease');
    a_product_list.forEach(item => {
      item.classList.add('a_product_list');
    });
  
    const a_product = document.querySelectorAll('.col.col-12.box-border.drop-down.hover');
    a_product.forEach(item => {
      item.classList.add('a_product');
    });
  
    document.querySelectorAll('.blockTitleProduct').forEach(element => {
      element.classList.add('a_title');
    });
  
    const a_product_discount = document.querySelectorAll('.productDiscount');
    a_product_discount.forEach(element => {
      element.classList.add('a_product_discount');
    });
  }
  
  // Sayfa yüklendiğinde sınıfları mevcut öğelere ekle
  document.addEventListener('DOMContentLoaded', function() {
    addClassesToProducts();
  });
  
  // MutationObserver ile yeni eklenen veya değiştirilen öğeleri takip et
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        addClassesToProducts();
      }
    });
  });
  
  // Observer'ı belirli bir element üzerinde etkinleştirme
  const container = document.querySelector('.catalogWrapper');
  observer.observe(container, { childList: true, subtree: true });
  



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




const a_head = document.querySelector('head')
a_head.insertAdjacentHTML('afterbegin', a_style)


