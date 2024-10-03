
const a_style = `
<style>
.anatomi_btn_eksiarti{
    background-color: #397FB9 !important;
    width: 38% !important;
}

.box.col-12.buyBtn{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

}

// #addCartBtn{
//     width: 45%;
// }

</style>


`


function getElement(a_class, status){
    return status ? document.querySelector(a_class) : document.querySelectorAll(a_class);
}
const container = getElement(".fl.col-sm-12.qtyBtns", true);
container.classList.add("anatomi_btn_eksiarti");
container.remove();

const a_firsat = document.querySelector(`#DivId`).remove();

const a_bell = document.querySelector(`#rvts-bell`).remove()

// const addCartBtn = document.querySelector('#addCartBtn');

const btn_container = document.querySelector('.box.col-12.buyBtn');
btn_container.insertAdjacentElement('afterbegin', container);

btn_container.insertAdjacentHTML('beforebegin',a_style);


//----------------------


const a_style = `
<style>


#mobileBuyBtn{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 0 10px 0 10px;

}

.fl.col-sm-12.qtyBtns{
    background-color: #BFBFBF !important;
    color: #484848;
    border-radius: 4px;

    //width: 56% !important; responseyi bozutor 100 olursa bozulmuyor
}

#addCartBtn{
    border-radius: 4px;
}

</style>


`

// const a_adet = document.querySelector('.col-4.detayAdet7174')


const buyBtn = document.querySelector('.box.col-12.buyBtn');

const qtyBtns = document.querySelector('.fl.col-sm-12.qtyBtns');

const a_container = document.querySelector(`#mobileBuyBtn`); 
//class="box col-12 buyBtn"

a_container.insertAdjacentElement('afterbegin', qtyBtns);

a_container.insertAdjacentHTML('beforebegin',a_style);





























