const a_style = `<style>

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
    width: 40% !important;
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
    width: 100px !important;
    border: none !important;
}

.uk-button.uk-button-primary.uk-width-1-1.uk-margin-top{
    margin-top: 0 !important;
    width: 60% !important;
}
.uk-dropdown.uk-open{
    display: block !important;
}

.a_acık_beden{
    display: block !important;
    position: initial !important;
    border: none !important;
    padding: 0 !important;
    
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
    height: 27px !important;
    background-color: #F1F1F1 !important;
    border: 1px solid #93959B !important;
    cursor: pointer !important;
}
.a_beden_input:focus { 
    border-color: #1D49F1 !important; /* Tıklandığında border rengini mavi yap */
}

.beden_a_etiket{
    position: absolute !important;
    top: -4px !important;
    left: 17px !important;
    color: #1E1E1E !important;
    pointer-events: none !important;
}

.uk-checkbox:indeterminate{
    background-image : none !important;
}
.variant-groups input[type="radio"]:disabled + a{
    opacity: 1 !important; 

}
body .variant-groups input[type="radio"]:disabled + a{
    background: #F1F1F1  !important;
}

.a_acık_beden span{
    font-weight: bold !important;
    font-size: 14px !important;
}

.a_beden_input {
    position: relative;
  }
  
  .a_beden_input:disabled::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 8px;
    right: 8px;
    height: 1px;
    background-color: #b9b9b9;
    z-index: 99999999999;
  }

  body .variant-groups input[type="radio"]:disabled + a {
    color: #1d1d1d6e !important;
}


  label[for^="variant-"][class*="disabled"]::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 6px;
    right: 11px;
    height: 1px;
    background-color: #747474;
    z-index: 99999999999;
  }
  .uk-dropdown span{
    font-weight: 600;
    font-size: 14px;
    
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



    // Beden seç tablosunu kaldır
    const bedenLink = document.querySelectorAll('.uk-select.uk-link-reset.uk-text-truncate');
    bedenLink[1].style.display = 'none';
  
    // Açık olan beden tablosunu görünür yap
    const dropdownDiv = document.querySelectorAll('.size-button-group.dropdown .uk-dropdown');

    dropdownDiv[1].classList.add('a_acık_beden')
    

  
    // Beden tablosunu açmak için gereken sınıfı ekleyin



  // anatomi_new_div in üstüne acık bedeni getirme 

    const a_acık_beden = document.querySelector('.a_acık_beden')
    const a_create_div = document.querySelector('.a_create_div')

a_create_div.insertAdjacentElement('beforebegin', a_acık_beden)


//ul yeni class verme // input ve a lara da yeni class ve css verme

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

const beden_a_etiket = document.querySelectorAll(".anatomi_ul a")
beden_a_etiket.forEach((item) => {
    item.classList.add('beden_a_etiket')
})



const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);
