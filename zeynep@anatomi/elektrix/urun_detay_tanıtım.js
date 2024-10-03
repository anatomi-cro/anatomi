const a_style = `<style>
#nav-wrapper{
    display: none !important;
}
.a_top_tel{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    border: 0.5px solid #DDDDDD;
}
.tel_text{
    padding: 0 !important;
}
.a_svg{
    margin-top: 6px; 
}
.a_discount_new{
    color: #fff !important;
    background: #449845 !important;
    padding: 5px !important;
    border-radius: 2px !important;
}
#product-brand span{
    color: #0781BF !important;
    font-weight: 400 !important;
    font-size: 12px !important;
    text-transform: uppercase !important;
}

#productName{
    font-size: 14px !important;
    font-weight: 700 !important;
    color: #000000 !important;
    line-height: 23px !important;
    text-align: start;
    font-family: inherit !important;
}
#productInfo{
margin-bottom: 30px !important;
}

.anatomi_price_group{
    display: flex !important;
}

#price-flexer .discountPrice{
    color: #449845 !important;

}

.qtyBox .qtyBtns a{
    width: 25px !important;
}
.qtyBtns input{
    width: calc(100% - 52px) !important;
}

#productMobileInfo > .row{
    display: flex;
    flex-direction: column;
}


#price-flexer{
    width: 50% !important;
}
.table.table-params.anatomi_table tr{
    display: flex !important;
    align-items: center !important;
    text-align: center !important;
    justify-content: center !important;

}

.table.table-params.anatomi_table td{
    border : none !important;
    width: 100% !important;

}
.table.table-params.anatomi_table .text-right{
    text-align: left;

}
.table.table-params.anatomi_table td:nth-child(2) {
    text-align: left;
    border : none !important;
    width: 100% !important;
    font-weight: 600;
    color: black;
  }

  td:nth-child(2)::before {
    content: ": ";
  }


  #productInfo {
    display: flex;
    flex-wrap: wrap;
    margin-bottom : 15px !important;
  }

  #productInfo > :nth-child(1),
#productInfo > :nth-child(2) {
  flex-basis: 50%;
  margin-bottom: 10px !important;
}
#productInfo > :nth-child(2){
    display: flex !important;
    justify-content: end;

}

.color{
    color: #808080 !important;
}


#productInfo > :last-child {
  flex-basis: 100%;
  margin-top: 10px !important;
}

#comment-btn{
    background: none !important;
}

.imgInner{
    z-index: -1 !important;
}

</style>`

const a_html = `<div class="a_top_tel">
<svg class="a_svg" width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_3_66)">
<path d="M19.024 12.7733C18.6345 12.3677 18.1646 12.1508 17.6666 12.1508C17.1727 12.1508 16.6988 12.3636 16.2932 12.7693L15.0242 14.0343C14.9197 13.978 14.8153 13.9258 14.7149 13.8736C14.5704 13.8013 14.4338 13.7331 14.3174 13.6608C13.1286 12.9058 12.0484 11.9219 11.0123 10.6488C10.5103 10.0143 10.1729 9.48022 9.92795 8.93807C10.2573 8.63687 10.5625 8.32363 10.8596 8.02244C10.9721 7.90999 11.0845 7.79353 11.197 7.68109C12.0403 6.83774 12.0403 5.74541 11.197 4.90207L10.1006 3.80573C9.97615 3.68123 9.84764 3.55272 9.72716 3.42421C9.4862 3.17523 9.2332 2.91821 8.97217 2.67725C8.58262 2.29173 8.11678 2.08691 7.62683 2.08691C7.13689 2.08691 6.66301 2.29173 6.26142 2.67725C6.25741 2.68127 6.25741 2.68127 6.25339 2.68529L4.88798 4.06275C4.37394 4.57678 4.08078 5.20327 4.01652 5.93015C3.92014 7.1028 4.26551 8.19512 4.53056 8.90996C5.18114 10.6649 6.15299 12.2914 7.60274 14.0343C9.36171 16.1346 11.4781 17.7932 13.8957 18.9618C14.8193 19.3995 16.0522 19.9176 17.4297 20.0059C17.514 20.01 17.6024 20.014 17.6827 20.014C18.6104 20.014 19.3895 19.6806 19.9999 19.018C20.0039 19.01 20.0119 19.006 20.0159 18.9979C20.2248 18.7449 20.4657 18.516 20.7187 18.2711C20.8914 18.1064 21.0681 17.9337 21.2408 17.753C21.6384 17.3394 21.8472 16.8575 21.8472 16.3635C21.8472 15.8655 21.6344 15.3876 21.2287 14.986L19.024 12.7733ZM20.4617 17.002C20.4577 17.002 20.4577 17.006 20.4617 17.002C20.3051 17.1707 20.1444 17.3233 19.9718 17.492C19.7107 17.741 19.4457 18.002 19.1967 18.2952C18.7911 18.7289 18.3132 18.9337 17.6867 18.9337C17.6265 18.9337 17.5622 18.9337 17.502 18.9297C16.3092 18.8534 15.2009 18.3875 14.3696 17.9899C12.0965 16.8896 10.1006 15.3274 8.44207 13.3475C7.07264 11.697 6.15701 10.171 5.55061 8.53246C5.17712 7.5325 5.04058 6.75341 5.10082 6.0185C5.14098 5.54863 5.3217 5.15909 5.65502 4.82577L7.02445 3.45634C7.22123 3.27161 7.43005 3.17121 7.63487 3.17121C7.88787 3.17121 8.09268 3.32382 8.22119 3.45233C8.22521 3.45634 8.22922 3.46036 8.23324 3.46437C8.47821 3.69328 8.71113 3.93022 8.9561 4.18322C9.0806 4.31173 9.20911 4.44024 9.33762 4.57277L10.434 5.66911C10.8596 6.0948 10.8596 6.48836 10.434 6.91405C10.3175 7.03051 10.2051 7.14697 10.0886 7.25942C9.75125 7.60478 9.42998 7.92606 9.0806 8.2393C9.07256 8.24733 9.06453 8.25135 9.06052 8.25938C8.71515 8.60475 8.7794 8.94208 8.85169 9.17099C8.8557 9.18304 8.85972 9.19509 8.86374 9.20714C9.14887 9.89787 9.55046 10.5485 10.1609 11.3235L10.1649 11.3275C11.2733 12.693 12.4419 13.7572 13.731 14.5724C13.8957 14.6768 14.0643 14.7611 14.225 14.8415C14.3696 14.9138 14.5061 14.982 14.6226 15.0543C14.6386 15.0623 14.6547 15.0744 14.6708 15.0824C14.8073 15.1507 14.9358 15.1828 15.0683 15.1828C15.4016 15.1828 15.6105 14.974 15.6787 14.9057L17.0522 13.5323C17.1887 13.3957 17.4056 13.2311 17.6586 13.2311C17.9076 13.2311 18.1124 13.3877 18.2369 13.5242C18.2409 13.5283 18.2409 13.5283 18.2449 13.5323L20.4577 15.745C20.8713 16.1547 20.8713 16.5763 20.4617 17.002Z" fill="#333333"/>
<path d="M14.2692 5.51238C15.3213 5.68908 16.2771 6.18706 17.0401 6.95008C17.8032 7.7131 18.2971 8.66889 18.4778 9.72106C18.522 9.98611 18.7509 10.1708 19.012 10.1708C19.0441 10.1708 19.0722 10.1668 19.1043 10.1628C19.4015 10.1146 19.5983 9.83351 19.5501 9.53633C19.3332 8.26329 18.7308 7.10268 17.8112 6.18304C16.8916 5.2634 15.731 4.66101 14.4579 4.44415C14.1607 4.39596 13.8836 4.59274 13.8314 4.8859C13.7792 5.17906 13.972 5.46419 14.2692 5.51238Z" fill="#333333"/>
<path d="M22.9917 9.37971C22.6343 7.2834 21.6464 5.37584 20.1284 3.85782C18.6104 2.3398 16.7028 1.35189 14.6065 0.994471C14.3134 0.942264 14.0363 1.14306 13.984 1.43622C13.9359 1.7334 14.1326 2.0105 14.4298 2.06271C16.3012 2.37996 18.008 3.26748 19.3654 4.62084C20.7228 5.97822 21.6063 7.68499 21.9235 9.55641C21.9677 9.82146 22.1966 10.0062 22.4576 10.0062C22.4898 10.0062 22.5179 10.0022 22.55 9.99816C22.8432 9.95398 23.044 9.67287 22.9917 9.37971Z" fill="#333333"/>
</g>
<defs>
<filter id="filter0_d_3_66" x="0" y="0.986206" width="27" height="27.0277" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_66"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_66" result="shape"/>
</filter>
</defs>
</svg>


<p class="tel_text">Tüm Soruların için hemen <strong> Müşteri Hizmetlerini Ara </strong> </p>
</div>`


const zey = document.querySelectorAll('.text-right').forEach(item =>{
    item.style = ''
})



const anatomi_table = document.querySelector('.table.table-params');
if (anatomi_table !== null) {
    anatomi_table.classList.add('anatomi_table')
const product_info = document.querySelector('#productInfo');
product_info.insertAdjacentElement('afterend', anatomi_table)
}else{
    console.log('anatomi_table bulunamadı')
}




const telLink = document.querySelector('a[href="tel://+905346260534"]');
const parentElement = telLink.parentElement;
parentElement.style.display = 'none';

const a_discount = document.querySelector('.col.passive.productDiscount.ml')
a_discount.className = "a_discount_new";

const a_container_img = document.querySelector('.pos-r.box.col-12.box-border')

a_container_img.insertAdjacentElement('afterbegin',a_discount);


const productDetail = document.querySelector('#productDetail')
productDetail.insertAdjacentHTML('beforebegin', a_html)


const anatomi_price_group = document.querySelectorAll('.row.priceLine')[0];
anatomi_price_group.classList.add('anatomi_price_group')
const anatomi_amount = document.querySelector('.box.col-4.col-xs-12.p-left.qtyBox');

anatomi_price_group.insertAdjacentElement('beforeend', anatomi_amount);

const a_kdv = document.querySelector('.fl.col-12.kdv')
a_kdv.remove();

document.querySelectorAll('.pos-r.fl.btn.loaded')[0].remove();
document.querySelectorAll('#tabPanel li')[0].remove();
document.querySelectorAll('#tabPanel li')[0].classList.add('current');
document.querySelectorAll('#tabPanel li')[0].style.display = 'list-item';
document.querySelectorAll('.pos-r.btn')[0].classList.add('loaded', 'active');

fetch("https://www.elektrix.com/srv/service/product-detail/payment-options/7195/0")
  .then(response => response.text())
  .then(data => {
    const gul = document.querySelectorAll('#tabPanel .fl.loaderWrapper')[0]
    gul.innerHTML = data;
  })
  .catch(error => console.log(error));



const product_brand = document.querySelector('#product-brand');
const add_commet = document.querySelector('#comment-btn');





product_brand.insertAdjacentElement('afterend', add_commet);

const a_head = document.querySelector('head')
a_head.insertAdjacentHTML('afterbegin', aa_style)





