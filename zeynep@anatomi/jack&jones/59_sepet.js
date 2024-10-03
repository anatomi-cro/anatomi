const a_style = `<style>
.uk-offcanvas-bar {
    top: initial !important;
    bottom: initial !important;
}
.a_container_sepet_devam{
    display: flex !important;
    padding: 10px !important;
    gap: 10px !important;
    cursor: pointer !important;
}

    
.a_devam_et_btn {
        border: 1px solid black !important;
        color: initial !important;
        width: 50% !important;
        cursor: pointer !important;

}

.a_sepete_ekle{
    width: 50% !important;
    line-height: 45px !important;
    background-color: #1D49F1 !important;
}
a
.offcanvas-body.uk-flex.uk-flex-column.uk-flex-1{
    padding: 20px !important;
}
.a_product_wording{
    font-size: 15px !important;
    font-weight: 500 !important;
   
}
.a_info{
    display: flex !important;
    align-items: center !important;
    gap: 12px;

}
.a_miktar{
    margin: 0 !important; 
}
.a_price{
    margin: 0 !important;
    font-size: 14px;
    font-weight: 600;
}
.uk-text-small.uk-flex-1.content{
    margin-top: 23px !important;
    display: flex !impoetant;
    flex-direction: column !impoetant;
    gap: 10px !impoetant;
}

.uk-margin-remove{
    margin-top:15px !important;
}
@media (max-width: 959px) {
    .product-horizontal .delete {
        margin-top: 0 !important;
    }
}

.a_total{
    display: flex;
    justify-content: center;
}


.a_total {
    display: flex;
    justify-content: center;
    align-items: center;
}

.product_total {
    position: relative;
    font-size: 18px; /* İstediğiniz boyuta ayarlayabilirsiniz */
}

.product_total::before
{
    content: "";
    width: 150px;
    height: 1px;
    background-color: #d7d7d7;
    position: absolute;
    top: 50%;
    left: -170px !important;
}
.product_total::after {
    content: "";
    width: 150px;
    height: 1px;
    background-color: #d7d7d7;
    position: absolute;
    top: 50%;
    right: -170px !important;
}
.a_tik_icon{
    display: flex;
    align-item: center;
    justify-content: start;
    gap:6px;
    font-size: 17px;
}
#offcanvas-basket .offcanvas-body {
    padding: 20px !important;
}

#offcanvas-basket .product-horizontal{
    margin-top: 0px !important;
}

.uk-offcanvas-close.uk-text-primary.uk-position-static.uk-padding-remove.uk-icon.a_devam_et_btn{
    color: black !important;
}
#cart.uk-text-primary {
    color: black !important;
}
.a_tik_icon svg{
    padding-bottom: 5px !important;
}
.#offcanvas-basket .offcanvas-body{
    padding: 15px !important;
}
</style>`





// Hedef elementi seçin
const targetElement = document.querySelector('#offcanvas-basket');

// Mutation Observer oluşturun
const observer = new MutationObserver(function(mutationsList, observer) {
    // Her mutasyon için çalışacak kod
    mutationsList.forEach(function(mutation) {
        // Eğer bir elemente bir sınıf eklenirse (classList'te "uk-open" sınıfı varsa),
        // burada istediğiniz işlemleri yapabilirsiniz.
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const currentClasses = targetElement.classList;
            if (currentClasses.contains('uk-open')) {
                // İşlem yapmak istediğiniz kodu buraya ekleyin
                console.log('uk-open sınıfı eklendi!');

                const a_tik_icon = document.querySelectorAll('h3.uk-margin-remove')

a_tik_icon[0].classList.add("a_tik_icon")

const a_sepet_wording = document.querySelector('.offcanvas-header.uk-flex.uk-flex-between.uk-flex-middle.uk-flex-none h3')

a_sepet_wording.textContent = "ÜRÜN SEPETE EKLENDİ"

const a_icon = `
<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0C5.38294 0 0 5.38294 0 12C0 18.6171 5.38294 24 12 24C18.6171 24 24 18.6171 24 12C24 5.38294 18.6171 0 12 0Z" fill="black"/>
<path d="M18.082 9.45697L11.582 15.9568C11.387 16.1519 11.131 16.25 10.875 16.25C10.619 16.25 10.363 16.1519 10.168 15.9568L6.91809 12.7069C6.52698 12.316 6.52698 11.6839 6.91809 11.293C7.30902 10.9019 7.94092 10.9019 8.33203 11.293L10.875 13.8359L16.6681 8.04303C17.059 7.65192 17.6909 7.65192 18.082 8.04303C18.473 8.43396 18.473 9.06586 18.082 9.45697Z" fill="#FAFAFA"/>
</svg>

`

a_sepet_wording.insertAdjacentHTML('afterbegin',a_icon);

const a_down_container = document.querySelector('.uk-text-small.basket-summary-detail.uk-margin-auto-top')
a_down_container.remove();


//sepete ekle butonunun yanında alısverise devam et getirilmesi

const a_container_sepet_devam = document.querySelector('.offcanvas-footer.uk-background-default.uk-position-sticky.uk-position-bottom.uk-margin-auto-top')
a_container_sepet_devam.classList.add('a_container_sepet_devam')
const alısverise_devam_btn_html = `
<button class="uk-offcanvas-close uk-text-primary uk-position-static uk-padding-remove uk-icon a_devam_et_btn">
Alışverişe Devam Et
</button>
`

const a_sepete_ekle = document.querySelector('.uk-button.uk-button-success.uk-width-1-1')
a_sepete_ekle.classList.add('a_sepete_ekle')

//sepetim icon yazı silme 
const a_sepetim_icon = document.querySelector('.uk-margin-remove.uk-flex.uk-flex-gap-small')
a_sepetim_icon.remove();
a_container_sepet_devam.insertAdjacentHTML('afterbegin',alısverise_devam_btn_html);

//ürün adları

const a_product_wording = document.querySelectorAll('.uk-link-reset.item-wrapper .uk-margin-remove')
a_product_wording.forEach((item) => {

    item.classList.add('a_product_wording')
})




//adet ve fiyat remove

const adet_fiyat = document.querySelectorAll('.uk-link-reset.item-wrapper .uk-text-bold')
adet_fiyat.forEach((item) => {
    item.remove();
})

// ürün adeti alma




const products = JSON.parse(localStorage.getItem('paid-products')).data;
console.log(products);

products.forEach((product, index) => {
    // Ürünün fotoğrafını, başlığını ve fiyatını değişkenlere atayın
    
      const productQuantity = product.quantity;
      const productPrice = product.price;



    // const oldProductPrice = 

  // Bu bilgileri kullanarak, her ürün için bir HTML öğesi oluşturun ve anasayfaya ekleyin
  const productElement = `
  
<div class="a_info">

<p class="a_miktar">${productQuantity} Adet</p>
<p class="a_price">${productPrice} TL</p>
</div>
     
  `;
  
  // Oluşturulan HTML öğesini anasayfaya ekleyin
  const product_info = document.querySelectorAll('.uk-link-reset.item-wrapper')
    product_info[index].insertAdjacentHTML('afterend', productElement);
})



// alısverise devam et butonunua tıklandıgında 
const a_devam_et_btn = document.querySelector('.uk-offcanvas-close.uk-text-primary.uk-position-static.uk-padding-remove.uk-icon')
a_devam_et_btn.addEventListener('click', function() {
    const cartElement = document.getElementById('cart');
    if (cartElement) {
        cartElement.style.display = "none";

    }
});

a_devam_et_btn.style.color = "black";


// sepette kac ürün var html
const product_info = document.querySelector('.offcanvas-body.uk-flex.uk-flex-column.uk-flex-1');

const productsTotal = JSON.parse(localStorage.getItem('ins-cart-product-list'));
const totalQuantity = productsTotal.data.totalQuantity;

const productTotal = `
    <div class="a_total">
            <p class="product_total">+${totalQuantity} Ürün</p>
    </div>
`;

// Oluşturulan HTML öğesini sayfaya ekleyin
product_info.insertAdjacentHTML('afterend', productTotal);

// 1 den fazla ürün ekliyorsak 1. üründen sonra ki ürünler gözükmesin

const productHorizontalElements = document.querySelectorAll('.offcanvas-body.uk-flex.uk-flex-column.uk-flex-1 .product-horizontal');

// Sadece ilk ürünü görünür yap, diğerlerini gizle
for (let i = 1; i < productHorizontalElements.length; i++) {
    productHorizontalElements[i].style.display = 'none';
}

//sil iconunu silme

const a_delete = document.querySelector('.uk-flex.uk-flex-gap.uk-margin-small-top')
a_delete.remove();


// kapat butonunu display none yapma

const a_close_btn_none = document.querySelectorAll('.uk-offcanvas-close.uk-text-primary.uk-position-static.uk-padding-remove.uk-icon')
a_close_btn_none[0].style.display = "none";


            }
        }
    });
});

// İzleme başlatın
observer.observe(targetElement, { attributes: true });

//sepet bossa ve sepet butonuna tıklarsa 


const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);



