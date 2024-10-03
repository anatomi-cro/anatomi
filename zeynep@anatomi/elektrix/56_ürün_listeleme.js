const a_style = `<style>
.a_product{
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    
}

.row.img_container {
    width: 45%;
}
.a_product_container{
    width:55%;
}

.a_product_li{
    width: 100% !important;
}

.anatomi_span{
  
    left: -25px !important;
   
}

.col.passive.productDiscount.ml{
    background: none !important;
    color: #1a7eba !important;
    padding: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
}
.productDiscount span {
    padding-bottom: 0 !important;
}
.col.col-10.col-sm-12.col-12.tooltipWrapper.text-center{
    display: flex !important;
    align-items: start !important;
    justify-content: center !important;
    flex-direction: column !important;
}
.box{
    padding-bottom: 0 !important;
}
.priceWrapper{
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 18px !important;
}
.currentPrice{
    font-size: 16px !important;
    font-weight: 700 !important;
}
.col.passive.productDiscount.ml {
    font-size: 12px !important;
    display: flex !important;
    gap: 5px;
    justify-content: start !important;
}
.discountedPrice{
    color: #BBBBBB !important;
}
.a_button{
    border-radius: 2px !important;
}
.blockTitleProduct{
    font-size: 12px !important;
    color: #333333 !important;
}
</style>`


const a_product = document.querySelectorAll('.col.col-12.box-border.drop-down.hover')

a_product.forEach((item, index) => {

    item.classList.add('a_product')

    const firstChild = item.firstElementChild;

    // Sadece ilk çocuğu olan öğelere img_container sınıfını ekleyin
    if (firstChild) {
      firstChild.classList.add('img_container');
    }

})

const a_product_li = document.querySelectorAll('.fl.col-3.col-md-4.col-sm-6.col-xs-6.productItem.zoom.ease')

a_product_li.forEach((item, index) => {
    
        item.classList.add('a_product_li')
})

const anatomi_span = document.querySelectorAll('span.imgInner')

anatomi_span.forEach((item, index) => {
        
            item.classList.add('anatomi_span')
})

const product_info = document.querySelector('.box.col-12.proRowAct')

product_info.classList.add('a_product_info')

const brElements = document.querySelectorAll('.col.passive.productDiscount.ml br');

brElements.forEach((brElement) => {
  brElement.remove(); // veya brElement.parentNode.removeChild(brElement);
});


const discountContainers = document.querySelectorAll('.col.passive.productDiscount.ml');

discountContainers.forEach((discountContainer) => {
  const discountText = discountContainer.lastChild; // Son çocuk elementi (text node) alır

  if (discountText.nodeType === Node.TEXT_NODE) {
    // Eğer son çocuk bir metin düğümü ise (text node), yeni bir span elementi oluşturun ve metni bu yeni span içine taşıyın
    const spanElement = document.createElement('span');
    spanElement.textContent = discountText.textContent;

    // Yeni span'i son çocuk ile yer değiştirin
    discountContainer.replaceChild(spanElement, discountText);
    

    

  }
});



const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);