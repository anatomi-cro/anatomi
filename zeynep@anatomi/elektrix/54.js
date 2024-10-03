const style = `
<style>
.pWrapper{
    background-color: rgba(0,0,0, 0.3) !important;
}

#cartPopup{
    padding: 15px;
    background-color: white;
    justify-content: center;
    align-items: center;
    border-radius:7px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.pBg.close{
    border-radius:5px !important;
}

.subContainer{
    height: auto;
    position: fixed;
    bottom: 0;
}

.image_container{
    width: 91px;
    height: 97px;
}

.image_container img{
    width: 100%;
    height: auto;
    object-fit: cover;
}

.product_info img {
    width: 91px;
    height: auto;
}

.product_info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

.product_success {
    color: #5C9C54;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
}

.product_info_subcontainer {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 16px;
    font-weight: 500;
}

span.product_name {
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
}

span.product_price{
    font-weight: 600 !important;
    padding-top: 5px !important; 
}

.product_buttons {
    display: flex;
    gap: 10px;
    margin-top: 25px;
    width: 100%;
    flex-direction: column;
}

.product_buttons button{
    width:100% !important;
    height: 45px;
}

.product_buttons * {
    border-radius: 5px;
    color: #0581BF;
    background-color: #D5D5D5;
}

.product_buttons .fr{
    background-color: #0581BF;
    color: white;
}

.pWrapper.pBg {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: block;
    background: #333;
    opacity: 0.5;
    z-index: 1000;
}

@media screen and (min-width: 769px){
    
    .anatomiSepetContainer{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    #cartPopup{
        width: auto !important;
        height: auto !important;
        width:45% !important;
        padding: 15px !important;
        background-color: white !important;
        justify-content: center !important;
        align-items: center !important;
        border-radius: 7px !important;
        border-bottom-left-radius: 7px !important;
        border-bottom-right-radius: 7px !important;
    }
    
    .subContainer {
        height: 100%;
        position: fixed;
        bottom: 0;
    }
    
    .product_info_subcontainer {
        gap: 8px;
        font-size: 18px;
    }
    
    .product_buttons {
        display: flex !important;
        align-item: center !important;
        flex-direction: column;
        align-items: center;
        margin-top: 0px !important;
        width: 75% !important;
    }
    
    .product_buttons .fr{
        background-color: #0581BF;
        
    }
    
    .product_buttons button {
        width: 75% !important;
        height: auto !important;
    }
    
    button.btn.btn-radius.btn-success.fr {
        grid-column-start: 1;
        grid-row-start: 1;
        
    }
    
    span.product_price {
        margin-top: 10px;
        
    }
 
    .product_info img {
        width: 120px;
        height: auto;
    }
    
    .product_info {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px !important;
    }
}

</style>
`;



//variables
const body = document.querySelector('body');

const item = {


    img: document.querySelector('.col-1.col-xs-2.line-right img').getAttribute('src'),
    name: document.querySelector('.col-4.col-xs-6.text-semibold.line-right span').innerText,
    price: document.querySelector('.productPrc').innerText,
}

const html = `
                <div class="anatomiSepetContainer">
                    <div class="product_info">
                        <img src=${item.img}>
                        <div class="product_info_subcontainer">
                            <div class="product_success">
                                <div class="anatomi_icon">
                                   <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2031 0.25C4.96462 0.25 0.703125 4.51149 0.703125 9.75C0.703125 14.9885 4.96462 19.25 10.2031 19.25C15.4416 19.25 19.7031 14.9885 19.7031 9.75C19.7031 4.51149 15.4416 0.25 10.2031 0.25Z" fill="#5C9C54"/>
                                        <path d="M15.0181 7.73685L9.87218 12.8826C9.7178 13.037 9.51515 13.1147 9.3125 13.1147C9.10985 13.1147 8.9072 13.037 8.75282 12.8826L6.17995 10.3097C5.87032 10.0002 5.87032 9.49983 6.17995 9.19035C6.48943 8.88071 6.98969 8.88071 7.29932 9.19035L9.3125 11.2035L13.8987 6.61748C14.2082 6.30785 14.7084 6.30785 15.0181 6.61748C15.3276 6.92696 15.3276 7.42722 15.0181 7.73685Z" fill="#FAFAFA"/>
                                   </svg>
                                </div>
                                <span>Ürün Sepetinize Eklendi</span>    
                            </div>
                            <span class="product_name">${item.name}</span>
                            <span class="product_price">${item.price} TL</span>
                        </div>
                    </div>
                    <div class="product_buttons">
                        <!-- buttons are come dynamically -->
                    </div>
                </div>
`;

//when container is visible
const mutationObserver = new MutationObserver(entries => {
    entries.forEach((item, index) => {
        if(item.target.lastChild.className == "pWrapper" && index == 0){
            const container = document.querySelector('.pWrapper');
            const cartContainer = document.querySelector('#cartPopup');
            //container'ın altında yer alan div yapısına class ismi verildi
            container.children[0].classList.add('subContainer');
            //aşağıda yer alan fiyat tablosu silindi
            document.querySelectorAll('#basketPopupItems div .whiteBg.box-border')[1].remove();
            //butonlar
            const buttonContinue = document.querySelector('.pButtons').children[0];
            const buttonBasket = document.querySelector('.pButtons').children[1];
            const a_text_change = document.querySelector('.pButtons').children[0].innerText = "Alışverişe Devam Et";
            cartContainer.insertAdjacentHTML('beforeend', html);
            //ürün detay tablosu kapalı bir hale getirildi
            document.querySelector('#cartPopup .pText').style.display = "none";
            //yönlendirme butonları container içerisinde dahil edildi
            document.querySelector('.anatomiSepetContainer .product_buttons').appendChild(buttonBasket);
            document.querySelector('.anatomiSepetContainer .product_buttons').appendChild(buttonContinue);
            //kapatma butonu kaldırıldı
            document.querySelector('#cartPopup .pClose.close').remove();
        }
    });
});

//when container is visible
mutationObserver.observe(body, {
    childList: true,
    attributes: true,
});


//style


//style implement
document.querySelector('head').insertAdjacentHTML('beforeend', style);