const a_style = `
<style>

@media only screen and (max-width : 560px){

    .a_buyBtn{
        padding-right: 0 !important;
    }

.buttonGroup{
    display: flex !important;
    align-items: center !important; 
    justify-content: center !important;
    gap: 30px !important;
    padding: 0 10px 0 10px !important;

}
#cart-wrapper .qtyBtns a {
    width: 45px !important;
}

.a_qtyBtn{
    background-color: #BFBFBF !important;
    color: #484848 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 40% !important;
    height: 44px !important;
    border-radius: 4px !important;
}

#addCartBtn{
    border-radius: 4px !important;
    font-size: 11px !important;
}

.qtyBtns a p.icon-minus:before {
    font-size: 3px !important;
}

.qtyBtns a p.icon-plus:before {
    font-size: 14px !important;
    
}

#cart-wrapper .qtyBtns input {
    font-size: 16px !important;
    border-top: 1px solid #bfbfbf !important;
    border-bottom: 1px solid #bfbfbf !important;
    width: calc(100% - 57px) !important;

}
}

@media only screen and (max-width : 775px){

    .a_buyBtn{
        padding-right: 0 !important;
    }

.buttonGroup{
    display: flex !important;
    align-items: center !important;
    width: 100% !important;

}

#cart-wrapper .qtyBtns a {
    width: 45px !important;
}

.a_qtyBtn{
    background-color: #BFBFBF !important;
    color: #484848 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 40% !important;
    height: 44px !important;
    border-radius: 4px !important;
}

#addCartBtn{
    border-radius: 4px !important;
    font-size: 13px !important;
}

.qtyBtns a p.icon-minus:before {
    font-size: 3px !important;
}

.qtyBtns a p.icon-plus:before {
    font-size: 14px !important;
    
}


#cart-wrapper .qtyBtns input {
    font-size: 16px !important;
    border-top: 1px solid #bfbfbf !important;
    border-bottom: 1px solid #bfbfbf !important;
    width: calc(100% - 57px) !important;

} 
}
 @media only screen and (min-width : 775px){

    .a_buyBtn{
        padding-right: 0 !important;
    }

.buttonGroup{
    display: flex !important;
    align-items: center !important;
    width: 100% !important;

}
#cart-wrapper .qtyBtns a {
    width: 45px !important;
}

.a_qtyBtn{
    background-color: #BFBFBF !important;
    color: #484848 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 40% !important;
    height: 44px !important;
    border-radius: 4px !important;
}

#addCartBtn{
    border-radius: 4px !important;
    font-size: 14px !important;
}

.qtyBtns a p.icon-minus:before {
    font-size: 3px !important;
}

.qtyBtns a p.icon-plus:before {
    font-size: 14px !important;
    
}

#cart-wrapper .qtyBtns input {
    font-size: 16px !important;
    border-top: 1px solid #bfbfbf !important;
    border-bottom: 1px solid #bfbfbf !important;
    width: calc(100% - 57px) !important;

}

}

</style>

`
function getElement(a_class, status){
    return status ? document.querySelector(a_class) : document.querySelectorAll(a_class);
}


document.querySelectorAll('#DivId').forEach(item => {
    item.remove()
});

document.querySelectorAll('#whatsapp-wrap').forEach(item => {
    item.remove()
});

document.querySelectorAll("#rvts-bell").forEach(item => {
    item.remove()
});



const container = getElement("#mobileBuyBtn", true);
container.classList.add("buttonGroup");
const a_buyBtn = getElement('.box.col-12.buyBtn', true);
a_buyBtn.classList.add('a_buyBtn');

// artı eksi btn
const a_qtyBtn = getElement('.fl.col-sm-12.qtyBtns', true);
a_qtyBtn.classList.add('a_qtyBtn');

const container_btnBox = getElement('.box.col-4.col-xs-12.p-left.qtyBox', true);
container_btnBox.classList.add('a_btnBox');
container_btnBox.remove();


container.insertAdjacentElement('afterbegin', a_qtyBtn);

const head = document.querySelector('head');
head.insertAdjacentHTML('beforebegin',a_style);


