setTimeout(() => {

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
        .anatomi_buton_disable{
            background-color: #F6C345 !important;
        }
    </style>
    `
    
    
    function getElement(a_class, status){
        return status ? document.querySelector(a_class) : document.querySelectorAll(a_class);
    }
    const container = getElement(".nextOrder.btn.btn-big.col-12.btn-warning.btn-radius.fw600.a-center", true);
    container.innerText = 'Ödeme Adımına Geç';
    container.classList.add("anatomi_buton");
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

    
    const a_container = getElement(`.tab-pane.contentApprove`, true);
    a_container.insertAdjacentHTML(`beforebegin`,html);
    
    const sticky_container = getElement(`.sticky_container`, true);
    sticky_container.insertAdjacentElement(`afterbegin`, container);
    
    
    const head = getElement('head', true);
    head.insertAdjacentHTML(`beforeend`, style);
    

}, 250);




