
    const style = `
    <style>
        .container_fiyat {
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-size: 15px;
            font-weight: 700;
        }
        .sticky_container {
            display: flex;
            flex-direction: row-reverse;
            position: fixed;
            bottom: 0;
            right: 0;
            width: 100%;
            background: white;
            align-items: center;
            justify-content: space-around;
            padding-bottom: 10px;
            padding-top: 10px;
            box-shadow: 0px 1px 40px -9px rgb(0 0 0 / 75%);
            z-index: 999;
        }
        .anatomi_buton{

            width: 200px;
            color: white;
            border-radius: 8px;
            font-weight: 500;
            font-family: sans-serif;
            
        }
        
    </style>
    `
    
function getElement(a_class, status){
    return status ? document.querySelector(a_class) : document.querySelectorAll(a_class);
}


const container = getElement(".nextOrder.btn.btn-big.col-12.btn-warning.btn-radius.fw600.a-center", true);
container.classList.add("anatomi_buton");
container.innerText = 'Ödeme Adımına Geç';
container.remove();

const a_fiyat = getElement(".box.fr.col-5.fw700.btn-upper.a-right", true).innerText;
const html = `
    <div class = "sticky_container">
        <div class = "container_fiyat">
                <div class = "fiyatToplam">Toplam</div>
                <div class = "fiyat"> ${a_fiyat} </div>
        </div>
    </div>
`

const a_bell = document.querySelector("#rvts-bell")
    if (a_bell) {
        a_bell.remove();
    }

const a_whatsapp = document.querySelector('#whatsapp-wrap')
    if (a_whatsapp) {
    a_whatsapp.remove();
    }

const a_firsat = document.querySelector("#DivId")
    if (a_firsat) {
        a_firsat.remove();
    }

const a_canliDestek = document.querySelector(`.globalClass_ec9a`)
    if(a_canliDestek) {
    a_canliDestek.remove();
    }


const a_container = getElement(`.tab-pane.contentApprove`, true);
a_container.insertAdjacentHTML(`beforebegin`,html);

const sticky_container = getElement(`.sticky_container`, true);
sticky_container.insertAdjacentElement(`afterbegin`, container);
    
const head = getElement('head', true);
head.insertAdjacentHTML(`beforeend`, style);






// const style = `
//     <style>
//         .container_fiyat {
//             display: flex;
//             flex-direction: column;
//             gap: 10px;
//             font-size: 15px;
//             font-weight: 700;
//         }
//         .sticky_container {
//             display: flex;
//             flex-direction: row-reverse;
//             position: fixed;
//             bottom: 0;
//             right: 0;
//             width: 100%;
//             background: white;
//             align-items: center;
//             justify-content: space-around;
//             padding-bottom: 10px;
//             padding-top: 10px;
//             box-shadow: 0px 1px 40px -9px rgb(0 0 0 / 75%);
//             z-index: 999;
//         }
//         .anatomi_buton{

//             width: 200px;
//             color: white;
//             border-radius: 8px;
//             font-weight: 500;
//             font-family: sans-serif;
            
//         }
        
//     </style>
//     `
    
// function getElement(a_class, status){
//     return status ? document.querySelector(a_class) : document.querySelectorAll(a_class);
// }


// const container = getElement(".nextOrder.btn.btn-big.col-12.btn-warning.btn-radius.fw600.a-center", true);
// container.classList.add("anatomi_buton");
// container.innerText = 'Ödeme Adımına Geç';
// container.remove();

// const a_fiyat = getElement(".box.fr.col-5.fw700.btn-upper.a-right", true).innerText;
// const html = `
//     <div class = "sticky_container">
//         <div class = "container_fiyat">
//                 <div class = "fiyatToplam">Toplam</div>
//                 <div class = "fiyat"> ${a_fiyat} </div>
//         </div>
//     </div>
// `

// const a_bell = document.querySelector("#rvts-bell")
//     if (a_bell) {
//         a_bell.remove();
//     }

// const a_whatsapp = document.querySelector('#whatsapp-wrap')
//     if (a_whatsapp) {
//     a_whatsapp.remove();
//     }

// const a_firsat = document.querySelector("#DivId")
//     if (a_firsat) {
//         a_firsat.remove();
//     }

// const a_canliDestek = document.querySelector(`.globalClass_ec9a`)
//             if(a_canliDestek) {
//                 a_canliDestek.remove();
//             }


// const a_container = getElement(`.tab-pane.contentApprove`, true);
// a_container.insertAdjacentHTML(`beforebegin`,html);

// const sticky_container = getElement(`.sticky_container`, true);
// sticky_container.insertAdjacentElement(`afterbegin`, container);
    
// const head = getElement('head', true);
// head.insertAdjacentHTML(`beforeend`, style);







const container = document.querySelector('#mainWrapper');
function aAddStyle(){
    const style = `
<style>
/* sticky container */
.a_sticky_container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: min(100% - 2rem, 2560px);
    padding: 20px;
    background: white;
    box-shadow: 0px -4px 5px rgba(137, 137, 137, 0.25), inset 0px -2px 5px rgba(0, 0, 0, 0.25);
    z-index: 999;
}

.a_sub_container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.a_info_container {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    font-weight: bold;
}

.a_total_text{
    font-size: 14px;
}

.a_total_value{
    font-size: 16px;
}

/* button */
button.nextOrder{
    width: auto;
    border-radius: 4px;
}

@media screen and (min-width: 1024px){
    .a_sub_container {
        width: 80%;
        margin: 0 auto;
    }
}
</style>
`;
    document.querySelector('head').insertAdjacentHTML('beforeend', style);
}
function aAddElement(){
    //buton
    const button = document.querySelector('.nextOrder');
    //eklenecek olan container
    const html = `
    <div class="a_sticky_container">
        <div class="a_sub_container">
            <div class="a_info_container">
                <span class="a_total_text">Toplam</span>
                <span class="a_total_value"></span>
            </div>
            <!-- buraya buton gelecek -->
        </div>
    </div>
    `;
    //container içerisine eklemek istenen alanın eklenmesi
    container.insertAdjacentHTML('beforeend', html);
    //alan eklendikten sonra butonun html içerisinde eklenmesi
    document.querySelector('.a_sub_container').appendChild(button);

    setTimeout(() => {
        //toplam tutar bilgisi
        let total_value = document.querySelector('#priceTotal').innerText;
        let a_total_value = document.querySelector('.a_total_value');
        a_total_value.innerText = total_value + " " + "TL";

        //butonun içerisinde ki yazının güncellenmesi
        if(button.innerText == "DEVAM"){
            button.innerText = "Ödeme Adımına Geç";
        }
    },300);

    setTimeout(() => {
        let total_value = document.querySelector('#priceTotal').innerText;
        let a_total_value = document.querySelector('.a_total_value');

        if(a_total_value.innerText = " "){
            a_total_value.innerText = total_value + " " + "TL";
        }

        //butonun içerisinde ki yazının güncellenmesi
        if(button.innerText == "DEVAM"){
            button.innerText = "Ödeme Adımına Geç";
        }
    },450)

    setTimeout(() => {
        let total_value = document.querySelector('#priceTotal').innerText;
        let a_total_value = document.querySelector('.a_total_value');

        if(a_total_value.innerText = " "){
            a_total_value.innerText = total_value + " " + "TL";
        }

        //butonun içerisinde ki yazının güncellenmesi
        if(button.innerText == "DEVAM"){
            button.innerText = "Ödeme Adımına Geç";
        }
    },600)
}
function removePopups(){
    let revotas = document.querySelector('#rvts-bell');
    if(revotas){
        revotas.remove();
    }

    let divID = document.querySelector('#DivId');
    if(divID){
        divID.remove();
    }
}

//eğer ki bir değer eklenmemişse
const status = document.querySelectorAll('.a_sticky_container').length <= 0;
if(status){
    aAddStyle();
    aAddElement();
}

setTimeout(() => {
    removePopups();
},450)








// ---------------


const container = document.querySelector('#mainWrapper');
function aAddStyle(){
    const style = `
<style>
/* sticky container */
.a_sticky_container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: min(100% - 2rem, 2560px);
    padding: 20px;
    background: white;
    box-shadow: 0px -4px 5px rgba(137, 137, 137, 0.25), inset 0px -2px 5px rgba(0, 0, 0, 0.25);
    z-index: 999;
}

.a_sub_container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.a_info_container {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    font-weight: bold;
}

.a_total_text{
    font-size: 14px;
}

.a_total_value{
    font-size: 16px;
}

/* button */
button.nextOrder{
    width: auto;
    border-radius: 4px;
}

@media screen and (min-width: 1024px){
    .a_sub_container {
        width: 80%;
        margin: 0 auto;
    }
}
</style>
`;
    document.querySelector('head').insertAdjacentHTML('beforeend', style);
}
function aAddElement(){
    //buton
    const button = document.querySelector('.nextOrder');
    //eklenecek olan container
    const html = `
    <div class="a_sticky_container">
        <div class="a_sub_container">
            <div class="a_info_container">
                <span class="a_total_text">Toplam</span>
                <span class="a_total_value"></span>
            </div>
            <!-- buraya buton gelecek -->
        </div>
    </div>
    `;
    //container içerisine eklemek istenen alanın eklenmesi
    container.insertAdjacentHTML('beforeend', html);
    //alan eklendikten sonra butonun html içerisinde eklenmesi
    document.querySelector('.a_sub_container').appendChild(button);

    setTimeout(() => {
        //toplam tutar bilgisi
        let total_value = document.querySelector('#priceTotal').innerText;
        let a_total_value = document.querySelector('.a_total_value');
        a_total_value.innerText = total_value + " " + "TL";

        //butonun içerisinde ki yazının güncellenmesi
        if(button.innerText == "DEVAM"){
            button.innerText = "Ödeme Adımına Geç";
        }
    },300);

    setTimeout(() => {
        let total_value = document.querySelector('#priceTotal').innerText;
        let a_total_value = document.querySelector('.a_total_value');

        if(a_total_value.innerText = " "){
            a_total_value.innerText = total_value + " " + "TL";
        }

        //butonun içerisinde ki yazının güncellenmesi
        if(button.innerText == "DEVAM"){
            button.innerText = "Ödeme Adımına Geç";
        }
    },450)

    setTimeout(() => {
        let total_value = document.querySelector('#priceTotal').innerText;
        let a_total_value = document.querySelector('.a_total_value');

        if(a_total_value.innerText = " "){
            a_total_value.innerText = total_value + " " + "TL";
        }

        //butonun içerisinde ki yazının güncellenmesi
        if(button.innerText == "DEVAM"){
            button.innerText = "Ödeme Adımına Geç";
        }
    },600)
}
function removePopups(){
    let revotas = document.querySelector('#rvts-bell');
    if(revotas){
        revotas.remove();
    }

    let divID = document.querySelector('#DivId');
    if(divID){
        divID.remove();
    }
}
function paymentPage(){
    const a_sticky_container = document.querySelector('.a_sticky_container');
    const buttonContainer = document.querySelector('#containerPaymentRoute div.row.mb');
    const button =  document.querySelector('.nextOrder');
    if(a_sticky_container){
        buttonContainer.appendChild(button);
        a_sticky_container.remove();
        button.style.width = "100%";
        button.style.borderRadius = "0";
    }
}
function addressPage(){
    const a_sticky_container = document.querySelector('.a_sticky_container');
    const buttonContainer = document.querySelector('#containerPaymentRoute div.row.mb');
    const button =  document.querySelector('.nextOrder');
    const subContainer = document.querySelector('.a_sub_container');
    if(a_sticky_container){
        a_sticky_container.style.display = "block";
        subContainer.appendChild('button');
    }
}
//eğer ki bir değer eklenmemişse
const status = document.querySelectorAll('.a_sticky_container').length <= 0;
//URL
let url = window.location.href == "https://www.elektrix.com/order/address";
if(status && url){
    aAddStyle();
    aAddElement();
}

setTimeout(() => {
    removePopups();
},450)

const body = document.querySelector('.contentAddress');

const mb = new MutationObserver(entries => {
    if(entries[0].target.baseURI == "https://www.elektrix.com/order/payment"){
        paymentPage();
    }if(entries[2].oldValue == "display: none;"){
        const status = document.querySelectorAll('.a_sticky_container').length <= 0;
        let url = window.location.href == "https://www.elektrix.com/order/address";
        if(status && url){
            aAddElement();
        }
        setTimeout(() => {
            removePopups();
        },450)
        const button =  document.querySelector('.nextOrder');
        button.style.width = "auto";
        button.style.borderRadius = "4px";
    }
});

mb.observe(body, {
    childList: true,
    attributesList: ["style"], // Only the "style" attribute
    attributeOldValue: true,
})







