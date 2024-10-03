// const style = `
// <style>
// #containerPaymentRoute{
//     position: absolute;
//     bottom: -330px;
//     width: 100%;
// }

// .btnRed{
//     width: 48%;
//     right: 11%;
//     position: absolute;
// }

// // .newOrderTotal{
// //     width: 40%;
// //     padding-top: 3px;
// // }

// </style>
// `

// const container = document.querySelector('#containerPaymentRoute');
// const redButton = document.querySelector('.nextOrder.btn.btn-big.col-12.btn-warning.btn-radius.fw600.a-center').classList.add('btnRed');
// const getBtnRow=document.querySelector("#containerPaymentRoute");
// getBtnRow.children[1].classList.add('rowRedBtn');


//  const node = document.querySelector('#orderTotal');
//   const clone = node.cloneNode(true);
//   document.querySelector('.rowRedBtn').appendChild(clone);

// const head = document.querySelector('head');
// head.insertAdjacentHTML("beforeend", style);

// const container2 = document.querySelector("#orderTotal")
// container2.remove()
// const container3 = document.querySelector(".rowRedBtn")
// container3.insertAdjacentElement('afterbegin',container2)



// MOBİL V1

const style = `
<style>
    .fiyat {
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
    }
    
    .anatomi_buton{
        width: 200px;
        color: black;
        border-radius: 8px;
        font-weight: 500;
        font-family: sans-serif;
        
    }
    
    .anatomi_buton_disable{
        background-color: #F6C345 !important;
    }
</style>
`


const fb = document.querySelector(`#fb-root`)
fb.remove()

const devamBtn = document.querySelector('.nextOrder.btn.btn-big.col-12.btn-warning.btn-radius.fw600.a-center');
devamBtn.innerText = 'Ödeme Adımına Geç'
devamBtn.classList.add("anatomi_buton");
devamBtn.remove();

const fiyat = document.querySelector('.box.fr.col-5.fw700.btn-upper.a-right').innerText

const html = `
    <div class = "sticky_container">
        <div class = "fiyat">
                <div class = "fiyatToplam">Toplam</div>
                <div class = "fiyat2"> ${fiyat} </div>
           </div>
    </div>
`


document.querySelector(`#backToTop`).remove()
document.querySelectorAll(`.wp-app-container`).forEach(item => {
    item.remove()
});

const container = document.querySelector(`.tab-pane.contentApprove`);
container.insertAdjacentHTML(`beforebegin`,html);

const sticky_container = document.querySelector(`.sticky_container`)
sticky_container.insertAdjacentElement(`afterbegin`, devamBtn)
devamBtn.classList.remove("nextOrder")
devamBtn.classList.add("anatomi_buton_disable");
const head = document.querySelector('head');
head.insertAdjacentHTML(`beforeend`, style);




// MOBİL V2

const style = `
<style>
    .fiyat {
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
    }
    
    .anatomi_buton{
        width: 200px;
        color: black;
        border-radius: 8px;
        font-weight: 500;
        font-family: sans-serif;
        
    }
    
    .anatomi_buton_disable{
        background-color: #F6C345 !important;
    }
</style>
`


const fb = document.querySelector(`#fb-root`)
fb.remove()

const devamBtn = document.querySelector('.nextOrder.btn.btn-big.col-12.btn-warning.btn-radius.fw600.a-center');
devamBtn.innerText = 'Satın Al'

devamBtn.classList.add("anatomi_buton");
devamBtn.remove();

const fiyat = document.querySelector('.box.fr.col-5.fw700.btn-upper.a-right').innerText

const html = `
    <div class = "sticky_container">
        <div class = "fiyat">
                <div class = "fiyatToplam">Toplam</div>
                <div class = "fiyat2"> ${fiyat} </div>
           </div>
    </div>
`


document.querySelector(`#backToTop`).remove()
document.querySelectorAll(`.wp-app-container`).forEach(item => {
    item.remove()
});

const container = document.querySelector(`.tab-pane.contentApprove`);
container.insertAdjacentHTML(`beforebegin`,html);

const sticky_container = document.querySelector(`.sticky_container`)
sticky_container.insertAdjacentElement(`afterbegin`, devamBtn)
devamBtn.classList.remove("nextOrder")
devamBtn.classList.add("anatomi_buton_disable");
const head = document.querySelector('head');
head.insertAdjacentHTML(`beforeend`, style);




// MOBİL V3

const style = `
<style>
    .fiyat {
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
    }
    
    .anatomi_buton{
        width: 200px;
        color: black;
        border-radius: 8px;
        font-weight: 500;
        font-family: sans-serif;
        
    }
    
    .anatomi_buton_disable{
        background-color: #F6C345 !important;
    }
</style>
`


const fb = document.querySelector(`#fb-root`)
fb.remove()

const devamBtn = document.querySelector('.nextOrder.btn.btn-big.col-12.btn-warning.btn-radius.fw600.a-center');
devamBtn.innerText = 'Siparişi Tamamla'

devamBtn.classList.add("anatomi_buton");
devamBtn.remove();

const fiyat = document.querySelector('.box.fr.col-5.fw700.btn-upper.a-right').innerText

const html = `
    <div class = "sticky_container">
        <div class = "fiyat">
                <div class = "fiyatToplam">Toplam</div>
                <div class = "fiyat2"> ${fiyat} </div>
           </div>
    </div>
`


document.querySelector(`#backToTop`).remove()
document.querySelectorAll(`.wp-app-container`).forEach(item => {
    item.remove()
});

const container = document.querySelector(`.tab-pane.contentApprove`);
container.insertAdjacentHTML(`beforebegin`,html);

const sticky_container = document.querySelector(`.sticky_container`)
sticky_container.insertAdjacentElement(`afterbegin`, devamBtn)
devamBtn.classList.remove("nextOrder")
devamBtn.classList.add("anatomi_buton_disable");
const head = document.querySelector('head');
head.insertAdjacentHTML(`beforeend`, style);








