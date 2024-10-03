const a_style = `<style>
.uk-dropdown{
    display: block !important;
    position: relative !important;
    margin-top: -48px !important;
    border:none !important;
    padding-left: 0px !important;
}
.a_create_div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
}
.count.conunt-input{
    border: 1px solid #000 !important;
    box-sizing: border-box !important;
    padding: 0 20px !important;
    width: 45% !important;
    height: 44px !important;
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;

}

.count-minus a{
    font-size: 24px !important;
    color: inherit !important;
    text-decoration: none !important; 
    text-decoration: none !important; 
}
.count-plus{
    text-decoration: none !important; 

}
#input-quantity{
    width: 75px !important;
    border: none !important;
}
.uk-button.uk-button-primary.uk-width-1-1.uk-margin-top{
    margin-top: 0 !important;
}

    .product-detail .count-container .dropdown .uk-dropdown {

        transform: none !important;
    }



    .anatomi_ul{
        display: flex !important;
        gap: 10px !important;
        list-style-type: none !important;
        padding-left: 0 !important;
        flex-wrap: wrap !important;
    }
    
    
    .anatomi_ul label {
        position: relative !important;
        text-align: center !important;
    
    }
    .anatomi_ul li{
        flex-basis: calc(15% - 10px); /* Her sıradaki öğenin genişliği 15%, 10px boşluk ile ayır */
    }
    .a_beden_input{
        width: 50px !important;
        height: 30px !important;
        background-color: #F1F1F1 !important;
        
        cursor: pointer !important;
    }
    

    .variant-groups input[type="radio"]:disabled + a::after{
        content: "" !important;
        position: absolute !important;
        width: calc(100% + -12px) !important;
        height: 1px !important;
        background: rgba(0, 0, 0, 0.2) !important;
        transform: rotate(180deg) !important;
    }

    .uk-dropdown span{
        font-size: 15px !important;
        font-weight: 600 !important;
    }
    .uk-checkbox:checked, .uk-checkbox:indeterminate, .uk-radio:checked{
        background-color: #F1F1F1 !important;
        border-color: #1D49F1 !important;
    }
    .uk-checkbox:checked {
        background-image: none !important;
    }
    
   
</style>`

// Yeni bir <div> elementi oluşturun
const anatomi_new_div = document.createElement('div');

// Oluşturulan <div> elementine "a_create_div" sınıfını ekleyin
anatomi_new_div.classList.add('a_create_div');

// Oluşturulan <div> elementini sayfanıza ekleyin (örneğin, body içerisine)
document.body.appendChild(anatomi_new_div);


const a_count = document.querySelector('.count.conunt-input')
const a_sepet_ekle = document.querySelector('.uk-button.uk-button-primary.uk-width-1-1.uk-margin-top')

anatomi_new_div.appendChild(a_count)
anatomi_new_div.appendChild(a_sepet_ekle)

const beden_container = document.querySelectorAll('.count-container')
beden_container[1].insertAdjacentElement('afterend', anatomi_new_div)


// 2 farklı beden 
const anatomi_ul = document.querySelectorAll('.size.product-variants.variant-groups.variant-has-error-Size.variant-group-index-1')
anatomi_ul[1].classList.add('anatomi_ul')

const anatomi_ul2 = document.querySelectorAll('.size.product-variants.variant-groups.variant-has-error-Length.variant-group-index-2');

if (anatomi_ul2.length > 1) {
  anatomi_ul2[1].classList.add('anatomi_ul');
}


const beden_input = document.querySelectorAll(".anatomi_ul input")
beden_input.forEach((item) => {
    item.classList.add('a_beden_input')
})

const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);





// .product-detail .count-container .dropdown ul>li input {
//     position: initial !important;
// }

// .product-detail .count-container .dropdown {
//     width: initial !important;
// }