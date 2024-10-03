const a_style = `
<style>

#cart-wrapper .qtyBtns a {
    width: 45px !important;
}

.a_qtyBtn{
    background-color: #BFBFBF !important;
    color: #484848 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 75% !important;
    height: 47px !important;
    border-radius: 4px !important;
    order: 4 !important;
    margin:15px !important;

}
.qtyBtns a p.icon-minus:before {
    font-size: 3px !important;
}

.qtyBtns a p.icon-plus:before {
    font-size: 14px !important;
    
}

.a_qtyBtn input {
    font-size: 16px !important;
    border-top: 1px solid #bfbfbf !important;
    border-bottom: 1px solid #bfbfbf !important;
    width: calc(100% - 57px) !important;

}


.buttonGroup{
    display: flex !important;
    align-items: center !important;
    
}

.left_container{
    display: flex !important;
    align-items: center !important;
        flex-direction: column-reverse;
}

.fiyat_container{
    display: flex !important;
    align-items: center !important;
    gap: 6px !important;
    padding-left: 6px;

}

.a_buyBtn{
    width: 50% !important;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:5px !important;
    margin-bottom: 5px;
}
.a_buyBtn a{ 
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px !important;
    border-radius: 4px !important;

}
.sticky_container{
    width: 50% !important;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 5px;
}



.taksit span{
    font-size: 12px !important;
    color: #2F6C44 !important;
    font-weight: 700 !important;
    padding-left: 6px !important;
    
}

.alt_fiyat{
    color: grey !important;
    font-size: 15px !important;
    text-decoration: line-through !important;
}

.fiyat{
    font-size:19px !important;
    font-weight:600;
}


.container_icon{
    display: flex !important;
    align-items: center !important;
    
    
}

.container_icon svg{
    background-color: #0581BF !important;
}

@media only screen and (max-width : 415px){
    .taksit span{
        font-size: 11px !important;

    }
    .a_buyBtn a{
        font-size: 12px !important;
    }
    
}

@media only screen and (max-width : 375px){
    .taksit span{
        font-size: 10px !important;

    }
    .a_buyBtn a{
        font-size: 11px !important;
    }

}

@media only screen and (max-width : 340px){
    .taksit span{
        font-size: 8px !important;

    }
    .a_buyBtn a{
        font-size: 9px !important;
    }
    .a_qtyBtn input {
        font-size: 16px !important;
        border-top: 1px solid #bfbfbf !important;
        border-bottom: 1px solid #bfbfbf !important;
        width: calc(100% - 46px) !important;
    
    }

}

#price-flexer{
    display: grid !important;
    grid-template-columns: repeat(3, 1fr) !important;
}

#productRight .productDiscount{
    margin-left: 0 !important; 
    justify-content: start !important;
}

</style>
`
//artı eksi butonun yukarı çıkarılması
const a_qtyBtn = document.querySelector('.fl.col-sm-12.qtyBtns');
a_qtyBtn.classList.add('a_qtyBtn');

const container_btnBox = document.querySelector('.box.col-4.col-xs-12.p-left.qtyBox');
container_btnBox.classList.add('a_btnBox');
container_btnBox.remove();

const a_container = document.querySelectorAll('.pos-r.fl.col-12.d-flex.pos-r');

a_container[1].insertAdjacentElement('beforeend', a_qtyBtn);

// sticky butonun düzenlenmesi

function getElement(a_class, status){
    return status ? document.querySelector(a_class) : document.querySelectorAll(a_class);
}

// Satın al butonunun parent divinin seçilmesi
const container = getElement("#mobileBuyBtn", true);
container.classList.add("buttonGroup");

// Satın al butonunun seçilmesi
const a_buyBtn = getElement('.box.col-12.buyBtn', true);
a_buyBtn.classList.add('a_buyBtn');


// eski fiyat ve yeni fiyatların innerTextinin alınması 
const container_fiyat = document.querySelector('.product-price').innerText;
const container_alt_fiyat = document.querySelector('.product-price-not-discounted').innerText;

const sticky_container = document.querySelector('.sticky_container');


// Sticky bölgesinde sol tarafa gelecek içeriklerin html kodları
const html = `
<div class = "sticky_container">

            <div class = "taksit"><span>9 Aya varan taksit seçenekleri ile</span></div>
            <div class="fiyat_container">
            <div class = "alt_fiyat">${container_alt_fiyat} TL</div>
            <div class = "fiyat"> ${container_fiyat} TL</div>
            </div>
             
</div>
`

// Burada whatsapp, günün fırsatı gibi pop upları siliyorum
document.querySelectorAll('#DivId').forEach(item => {
    item.remove()
});

document.querySelectorAll('#whatsapp-wrap').forEach(item => {
    item.remove()
});

const bell = document.querySelector("#rvts-bell")
if (bell) {
    bell.remove();
}

//Satın al butonun yanındaki ikon için html 
const a_html = `
<div class = "container_icon">
<svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.35953 13.0898C5.39837 13.0473 5.41647 11.8763 6.35949 11.8356C9.03077 11.8436 16.0765 11.8378 18.8327 11.8394C19.5866 11.8394 20.2315 11.3951 20.4011 10.7589L21.9662 4.88846C22.0558 4.55234 21.9654 4.20445 21.7181 3.93405C21.4708 3.66366 21.1006 3.5064 20.7023 3.5064C19.5936 3.5064 10.1816 3.4695 5.36084 3.45285L4.59666 0.996817C4.41322 0.409891 3.79487 0 3.0929 0H0.644874C0.288732 0 0 0.250098 0 0.558587C0 0.867076 0.288732 1.11717 0.644874 1.11717H3.0929C3.21375 1.11717 3.32016 1.18774 3.35158 1.28818L6.2864 10.72C5.77038 10.7362 5.28973 10.918 4.92525 11.2383C4.54228 11.575 4.33661 12.0206 4.34611 12.4931C4.36511 13.4381 5.26832 14.207 6.35953 14.207H7.29984C7.16008 14.4611 7.08162 14.7452 7.08162 15.0449C7.08162 16.1229 8.09416 17 9.33877 17C10.5834 17 11.5959 16.1229 11.5959 15.0449C11.5959 14.7451 11.5174 14.4611 11.3776 14.207H15.4496C15.31 14.461 15.2315 14.7449 15.2315 15.0446C15.2315 16.1226 16.2441 16.9997 17.4887 16.9997C18.7333 16.9997 19.7459 16.1226 19.7459 15.0446C19.7459 14.7333 19.661 14.439 19.511 14.1775C19.7662 14.103 19.9502 13.8945 19.9502 13.6484C19.9502 13.3399 19.6614 13.0898 19.3053 13.0898H6.35953ZM10.3061 15.0449C10.3061 15.507 9.87216 15.8829 9.33872 15.8829C8.80528 15.8829 8.37132 15.507 8.37132 15.0449C8.37132 14.5831 8.80485 14.2074 9.3379 14.207H9.33954C9.87259 14.2074 10.3061 14.5831 10.3061 15.0449ZM17.4887 15.8826C16.9553 15.8826 16.5213 15.5066 16.5213 15.0446C16.5213 14.5871 16.9469 14.2143 17.473 14.207H17.5045C18.0307 14.2143 18.4562 14.5871 18.4562 15.0446C18.4562 15.5066 18.0222 15.8826 17.4887 15.8826ZM20.7071 4.62767C20.7109 4.63184 20.7103 4.63381 20.7095 4.63702L20.0501 7.11063H17.817L18.1973 4.61475L20.6972 4.62346C20.701 4.62354 20.7033 4.62354 20.7071 4.62767ZM14.0586 10.7222V8.2278H16.3459L15.9658 10.7222H14.0586ZM10.8608 10.7222L10.4777 8.2278H12.7689V10.7222H10.8608ZM7.89214 10.7222H7.89012C7.73294 10.7222 7.59447 10.6304 7.55358 10.4995L6.84671 8.2278H9.17656L9.5597 10.7222H7.89214ZM10.3061 7.11066L9.91825 4.58589L12.7688 4.59583V7.11066H10.3061ZM14.0586 7.11066V4.60034L16.897 4.61024L16.5161 7.11066H14.0586ZM8.61642 4.58131L9.00493 7.11063H6.49908L5.7089 4.57114L8.61642 4.58131ZM18.8327 10.7222H17.2667L17.6468 8.2278H19.7522L19.1444 10.5075C19.1107 10.6339 18.9826 10.7222 18.8327 10.7222Z" fill="white"/>
</svg>
</div>
`

//iconun satın al butonunun içine yerleştirilmesi
const a_etiketi = document.querySelector('.btn.col-12.btn-big.text-center.text-upper');
a_etiketi.classList.add('a_etiketi');
a_etiketi.insertAdjacentHTML('afterbegin', a_html);

// Stickynin sol tarafındaki fiyat ve statik yazının konumlandırılması
container.insertAdjacentHTML('afterbegin',html);

// css kodlarının konumlandırılması

const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style);