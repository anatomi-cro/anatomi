const odeme_sayfasi_sticky = `
<style>
.mobile-cart .bottom {
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.mobile-cart .bottom .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: #000 !important;
    font-size: 16px !important;
    font-weight: 700 !important;
    pointer-events: none;
}

.mobile-cart .bottom .total .total-cost {
    color: #000 !important;
}

.mobile-cart .bottom .total .total-cost .fa-chevron-up {
    display: none;
}

.mobile-cart .bottom .btn-solid.submit-btn {
    width: 100%;
}

.mobile-cart .bottom .name {
    font-size: 14px;
    color: #000;
    font-weight: 700;
}


.mobile-cart .bottom .cost {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #000;
    font-weight: 700;
}

.mobile-cart .bottom .cost .price {
    font-size: 14px !important;
}


.payment-page .mobile-cart .items .item .cost small {
    width: auto !important;
}

.item.campaign .cost small {
    font-size: 14px !important;
    color: #4EC95A !important;
    font-weight: 400 !important;
}

.item.campaign .cost {
    margin-right: 30px !important;
}

.item.campaign .price {
    display: none;
}

.item .remove {
    display: none;
}

.mobile-cart .items .item .cost small {
    font-size: 14px;
    color: #000;
    font-weight: 700;
}

.mobile-cart .items .item  .name {
    font-size: 16px !important;
    color: #000;
    font-weight: 700;
}

.mobile-cart .items .item .cost .price {
    font-size: 14px !important;
    color: #000;
    margin-right: 0px !important;
}

.mobile-cart .items .item .cost {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.item.campaign .name{
    font-size: 14px !important;
    color: #4EC95A !important;
    font-weight: 500 !important;
    width: fit-content !important;
}

.payment-page .mobile-cart .items .item .cost {
    display: flex;
    margin-left: null !important;
    text-align: right;
    margin-right: 5px;
    width: fit-content;
}

.payment-page .mobile-cart .items .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 5px;
    margin-bottom: 5px;
    border-bottom: 1px solid #c7c7c7;
}

@media (max-width: 400px) {
    .payment-page .mobile-cart .items .item .name {
         width: auto !important; 
        place-content: flex-start; 
    }
}
</style>
`;

const kasko_name = document.querySelector("#app > div.mobile-cart > div.items > div:nth-child(1) > div.name")

if(kasko_name.innerHTML.includes("Kasko")){
    kasko_name.innerHTML = "Kasko Sigortası"
}

const kampanya_name = document.querySelector("#app > div.mobile-cart > div.items > div.item.campaign > div.name")

if(kampanya_name){
    kampanya_name.textContent = kampanya_name.textContent + " Kampanyası"
}


const sepetim_strong = document.querySelector("#app > div.mobile-cart > div.bottom > div > strong")

if(sepetim_strong){
    sepetim_strong.innerHTML = "Toplam Tutar:"
}



const sepetim = document.querySelector("#app > div.mobile-cart > div.bottom > div")

if(sepetim){
    if(sepetim.innerHTML.includes("(2 ürün)")){
        sepetim.innerHTML = sepetim.innerHTML.replace("(2 ürün)", "")
    }

    if(sepetim.innerHTML.includes("(1 ürün)")){
        sepetim.innerHTML = sepetim.innerHTML.replace("(1 ürün)", "")
    }

    if(sepetim.innerHTML.includes("(3 ürün)")){
        sepetim.innerHTML = sepetim.innerHTML.replace("(3 ürün)", "")
    }
}


const full_sepet = document.querySelector("#app > div.mobile-cart > div.bottom");

if(full_sepet){
    full_sepet.classList.add("showed");
}

const show_item = document.querySelector("#app > div.mobile-cart > div.items")

if(show_item){
    show_item.style.display = "flex";
}


const anatomi_head = document.querySelector('head');
anatomi_head.insertAdjacentHTML('beforeend', odeme_sayfasi_sticky);