const style = `
<style>
    .stickySepetContainer{
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 999999999;
        background: #fff;
        box-sizing: border-box;
        box-shadow: 0 -3px 3px rgba(0, 0, 0, .1);
        width: 100%;
        padding: 5px 15px 5px 15px;
    }
    
    .count.conunt-input a {
        font-size: 30px !important;
        color: black !important;
    }
    
    .count.conunt-input .product-quantity{
        border: none !important;
        width: 50% !important;
    }
    
    .count.conunt-input{
        border: 1px solid !important;
        width: 120px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
    }
    
    .altContainer{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5%;
        margin-bottom: 15px;
    }
    
    .addToCartSection{
        width: 100%;
    }
    
    .addToCartSection button{
        margin-top: 0px !important;
    }
    
    .originalPrice{
        font-size: 16px;
        color: #4C904B;
    }
    
    .oldPrice{
        color: grey;
        text-decoration: line-through;
    }
    
    .priceContainer{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    
    .productName{
        font-weight: 700;
        display: flex;
        align-items: center;
        font-size: 13px;
    }
    
    .productNameContainer{
        display: flex;
        justify-content: space-between;
        margin: 10px 0px;
    }
    
    .product-detail .count-container .dropdown{
        width: 100%;
    }
    
    .product-detail .price-container .colors{
        padding: 10px;
        width: 100%;
    }
    
    .product-detail .price-container{
        gap: 10%;
    }
    
    .uk-select.uk-link-reset.uk-text-truncate{
        display: none !important;
    }
    
    .anatomiBedenTablosu{
        display: none;
        background: white;
        padding: 20px 0px 20px 20px;
        width: 100%;
        position: fixed;
        z-index: 9999999999;
        bottom: 0;
        left: 0;
        border-top: 0.5px solid #F4F4F4;
        box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
    }
    .anatomiBedenInfo{
        display: flex;
        align-items: center;
        justify-content: center;
        right: 7%;
        position: absolute;
        top: 8%;
    }
    .ins-preview-wrapper.ins-preview-wrapper-1083.ins-pos-bottom-left{
        display: none !important;
    }

    .a_discount{
        margin-bottom: 0 !important;
    margin-top: 22px !important;
    color:#4C904B;
    }
    
</style>

`
const siteContainer = document.querySelector('section')
// Selection
const productContainer = document.querySelectorAll('.uk-margin-auto-left')[0]
const productName = document.querySelector('.uk-h3').innerText
const originalPrice = document.querySelectorAll('span.uk-text-bold')[2].innerText
const oldPrice = document.querySelectorAll('.uk-text-muted')[4]
//indirim
const a_discount = document.querySelector('b.uk-text-success');

// // Sadece "%" ve sonrasındaki sayıyı al
// const indirimYuzdesi = a_discount.match(/%(\d+)/);

// // Şimdi indirim yüzdesini kullanabilirsiniz
// const indirimYuzdesiMetni = indirimYuzdesi ? `${indirimYuzdesi[0]}` : '';


const counter = document.querySelector('.count.conunt-input')
const addToCart = document.querySelector('.uk-button.uk-button-primary.uk-width-1-1.uk-margin-top')
const bedenTablosu = document.querySelector('.uk-text-small.uk-text-muted.uk-link-text')
// const bedenButon = document.querySelectorAll('.size-button-group.dropdown .uk-dropdown')[1]

document.querySelector('#scroll-to-top').remove()
// document.querySelector('.ins-custom-wrapper-c43').remove()

// bedenButon.classList.remove('uk-dropdown')
// bedenButon.classList.add('anatomiBedenTablosu')

const HTML = ` 
    <div class="stickySepetContainer"> 
        <div class="productNameContainer">
            <div class="productName">${productName}</div>
            <div class="zey">
            <p class="a_discount"></p>
            </div>
            <div class="priceContainer">
             
                <div class="oldPrice"></div>
                <div class="originalPrice">${originalPrice}</div>
            </div>
        </div>
        
        <div class="altContainer">
            <div class="counterSection">
            
            </div>
            
            <div class="addToCartSection">
            
            </div>
            
        </div>
    </div>
`
siteContainer.insertAdjacentHTML('beforeend', HTML)
const oldPriceSection = document.querySelector('.oldPrice');

// eski fiyat
if (oldPrice != null && oldPriceSection != null) {
    oldPriceSection.innerText = oldPrice.textContent;
}

// indirim
const a_discount_bl = document.querySelector('.a_discount');
if (a_discount != null && a_discount_bl != null) {
    // Orjinal metni al
    const orjinalMetin = a_discount.textContent;

  const indirimYuzdesi = orjinalMetin.match(/%(\d+)/);

// Şimdi indirim yüzdesini kullanabilirsiniz
const indirimYuzdesiMetni = indirimYuzdesi ? `-${indirimYuzdesi[0]}` : '';

    // Düzeltilmiş metni ayarla
    a_discount_bl.innerText = indirimYuzdesiMetni;
}

const addToCartSection = document.querySelector('.addToCartSection')
addToCartSection.insertAdjacentElement('afterbegin',addToCart)
const counterSection = document.querySelector('.counterSection')
counterSection.insertAdjacentElement('afterbegin',counter)
// document.querySelectorAll('.uk-grid.uk-grid-small.uk-text-medium.price.uk-grid-stack')[1].remove()

// const anatomiBedenTablosu = document.querySelector(".anatomiBedenTablosu");
// const sizeElemanlari = anatomiBedenTablosu.querySelectorAll("[data-key='Size']");
// const sizeSayisi = sizeElemanlari.length;

// if (sizeSayisi == 1){
//     anatomiBedenTablosu.style.height = '10%'
// }else if (sizeSayisi == 2) {
//     anatomiBedenTablosu.style.height = '15%'
// }

const sepeteEkleButton = document.querySelector(".uk-button.uk-button-primary.uk-width-1-1.uk-margin-top");
// sepeteEkleButton.addEventListener("click", function() {
//     anatomiBedenTablosu.style.display = "flex";
//     anatomiBedenTablosu.style.alignItems = "flex-start";
//     anatomiBedenTablosu.style.justifyContent = "center";
//     anatomiBedenTablosu.style.flexDirection = "column";
//     console.log('beden tablosu açıldı')
// });

const ulSayisi = document.querySelectorAll('.anatomiBedenTablosu ul');
function updateRadios() {
    const radios = document.querySelectorAll(".anatomiBedenTablosu input[type=radio]");
    const checkedCount = Array.from(radios).filter(radio => radio.checked).length;
    console.log(checkedCount);

    if (ulSayisi.length === 1) {
        if (checkedCount === 1) {
            console.log('sepete eklendi');
            const onClickValue = sepeteEkleButton.getAttribute('onClick');
            eval(onClickValue);
            anatomiBedenTablosu.style.zIndex = '3';
        }
    } else if (ulSayisi.length === 2) {
        if (checkedCount === 2) {
            console.log('sepete eklendi');
            const onClickValue = sepeteEkleButton.getAttribute('onClick');
            eval(onClickValue);
            anatomiBedenTablosu.style.zIndex = '3';
        }
    }
}
updateRadios();
document.querySelectorAll('.anatomiBedenTablosu ul').forEach((ul) => {
    ul.addEventListener('click', updateRadios);
});


const head = document.querySelector('head');
head.insertAdjacentHTML("beforeend", style);


