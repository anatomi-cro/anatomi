const a_style = `
<style>
.anatomi_create_div{
    display: flex;
    align-items: center;
    gap:5px
}
.container_icon{
    padding-bottom: 7px;
}

.anatomi_text{
    font-size: 14px;
    font-weight: 600;
    color:#50A163;
    line-height: 16.41px;
}
.kargoContainer{
    display: flex;
    align-items: center;
    gap:5px;
    justify-content: center;
    height: 30px;
    
}

.anatomi_p{
    color:#2948E8;
    font-size: 14px;
}

@media screen and (max-width: 390px) {
    .anatomi_p {
      font-size:13px
    }
  }

</style>
`
//ücretsiz kargo için

//stickyde bulunan hepsijet spanına ulaşmak için önce bütün spanları secip istediğim spanın parent elemntine ulaşıyorum.
const anatomi_span = document.querySelectorAll('.uk-container span')
<<<<<<< HEAD
const hepsiJet = anatomi_span[23].parentElement;
=======
const hepsiJet = anatomi_span[32].parentElement;
>>>>>>> 498cbb0 (anatomi-task)
//hepsijectin karsısında tutulan 0 tl kargo ücreti alıyorum ve bu koşulun hemen içinde en altta siliyorum
const deger_sil = anatomi_span[23].parentElement.children[1];
const degerText = anatomi_span[23].parentElement.children[1].innerText;
hepsiJet.classList.add('anatomi_div');
// bu koşulda eğer yukarıda tuttugumuz degerText 0,00 tl ye eşitse yani ücretsiz kargoysa kargonuz ücretsiz textini yazdırıyorum.
if (degerText == '0,00TL') {
    const anatomi_text = document.querySelectorAll('.editable.ins-element-editable')
<<<<<<< HEAD
    anatomi_text[5].classList.add('anatomi_text');
=======
>>>>>>> 498cbb0 (anatomi-task)
    anatomi_text[5].innerText = "Tebrikler, Kargonuz Ücretsiz!"

    const a_html = `
<div class="container_icon">
<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6992 7.26923V17H5.78756C5.579 17 5.40974 16.8307 5.40974 16.6222V12.5583L10.6992 7.26923ZM17.1222 7.17666H12.2105V17H17.1222C17.3307 17 17.5 16.8307 17.5 16.6222V7.55448C17.5 7.34593 17.3307 7.17666 17.1222 7.17666ZM2.95881 8.78051L4.11457 7.62476C4.0458 7.65876 3.97666 7.69239 3.90979 7.7211C3.06271 8.08457 2.17257 8.17751 1.64249 7.958C1.45924 7.88205 1.33947 7.77664 1.2862 7.64403C1.0886 7.14984 1.78455 6.20604 3.09899 5.64195C4.08207 5.22031 4.93897 5.22408 5.37989 5.41488L5.85217 5.88716L6.3864 5.35292L5.91413 4.88065C5.72333 4.43935 5.71955 3.58245 6.1412 2.59974C6.70528 1.28493 7.64908 0.589357 8.14289 0.786957C8.27551 0.84023 8.3813 0.959621 8.45724 1.14324C8.67675 1.6737 8.58381 2.56347 8.22035 3.41054C8.19163 3.47742 8.15801 3.54656 8.124 3.61532L9.27976 2.45957C9.37459 1.85355 9.33718 1.29286 9.15583 0.853832C9.0013 0.480545 8.74816 0.214937 8.42399 0.0849665C7.45488 -0.302678 6.14724 0.670589 5.44714 2.30126C5.1071 3.09393 4.97675 3.89982 5.0595 4.55988C4.39982 4.47713 3.59393 4.60748 2.80126 4.94752C1.17059 5.64762 0.197322 6.95526 0.584966 7.92437C0.714559 8.24854 0.980167 8.50168 1.35345 8.65621C1.7921 8.83794 2.35279 8.87534 2.95881 8.78051ZM6.11928 6.6889L2.12005 10.6881C1.97232 10.8359 1.97232 11.075 2.12005 11.2224L3.63134 12.7336C3.77906 12.8814 4.01822 12.8814 4.16557 12.7336L8.16518 8.73404L6.11928 6.6889ZM13.2333 3.13171L11.722 1.62043C11.5743 1.4727 11.3351 1.4727 11.1877 1.62043L7.18814 5.62004L9.23366 7.66556L13.2333 3.66595C13.381 3.5186 13.381 3.27944 13.2333 3.13171Z" fill="#50A163"/>
</svg>
</div>
`

// burada ücretsiz kargo yazısını ve ikonu aynı classa almak için class yaratıyorum ve içine child kapsayıcılarını atıyorum
hepsiJet.appendChild(anatomi_text[5]);
const create_div = document.createElement("div");
create_div.classList.add('anatomi_create_div');
hepsiJet.appendChild(create_div);
create_div.appendChild(anatomi_text[5]);
create_div.insertAdjacentHTML("afterbegin",a_html)

deger_sil.remove();

const top_kargo_info = document.querySelector('#ins-purchase-trigger')
top_kargo_info.remove();



}else{
    // else in içinde eger ücretli kargo yani degerText 0,00tl degil ise hepsijet spanının parent divinin altına,
    // aşagıdaki oluşturduğum htmlyi gömüyorum.
    const deger = document.querySelector('.ins-left-amount.ins-dynamic-element-tag').innerText;
const anatomi_html = `
  <div class="kargoContainer">
  <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.39023 12.929L3.01254 8.3866L1.18793 9.54687C0.0519517 10.2735 -0.338455 11.8764 0.320357 13.1324C0.976457 14.3854 2.42964 14.816 3.56833 14.0923L5.39023 12.929Z" fill="#2948E8"/>
  <path d="M13.307 4.95064C13.3617 5.06239 13.4567 5.12525 13.5574 5.12525C13.6063 5.12525 13.6552 5.11129 13.7013 5.07986L16.0264 3.44898C16.1646 3.35119 16.2106 3.13817 16.1329 2.97054C16.0523 2.80291 15.8768 2.74703 15.7387 2.84133L13.4135 4.4722C13.2754 4.56999 13.2264 4.78301 13.307 4.95064Z" fill="#2948E8"/>
  <path d="M16.7332 6.9888L14.3438 7.06806C14.2028 7.07193 14.0926 7.16279 14.0977 7.26911C14.1028 7.3735 14.2182 7.45469 14.3541 7.45469H14.3643L16.7537 7.37543C16.8947 7.37156 17.0049 7.28071 16.9998 7.17438C16.9947 7.06613 16.8768 6.98687 16.7332 6.9888Z" fill="#2948E8"/>
  <path d="M11.7453 2.75019C11.7956 2.78136 11.8488 2.79552 11.9049 2.79552C12.0024 2.79552 12.0969 2.75019 12.1531 2.66521L13.6362 0.43572C13.7248 0.302574 13.6835 0.129767 13.5476 0.0447802C13.4087 -0.0402066 13.2285 -0.00054609 13.1399 0.1326L11.6567 2.36209C11.5681 2.4924 11.6094 2.66521 11.7453 2.75019Z" fill="#2948E8"/>
  <path d="M5.33936 13.5117L3.91531 14.5C3.72473 14.6302 3.52357 14.7287 3.31711 14.805C3.57121 16.3239 4.21971 17.7093 5.16995 18.7579C5.52464 19.1488 6.04873 19.2123 6.4643 18.9232C6.47489 18.9168 6.48283 18.9105 6.49341 18.9041C7.09956 18.4847 7.2372 17.4996 6.7687 16.8768C6.05932 15.9267 5.56435 14.7669 5.33936 13.5117Z" fill="#2948E8"/>
  <path d="M8.85093 7.46907C7.95962 5.7833 7.23781 4.11843 6.81949 2.77877C6.58163 2.01197 6.45312 1.4033 6.43672 0.931885C5.87623 1.73747 5.58915 3.06221 5.20637 4.20197C4.75525 5.74452 4.13461 6.96781 3.31711 7.81219L5.81334 12.5323C6.89332 12.1803 8.17561 12.2071 9.62468 12.5502C10.7265 12.7561 11.9323 13.1529 12.8537 13.0187C11.2487 11.9356 9.12434 7.98226 8.85093 7.46907Z" fill="#2948E8"/>
  <path d="M7.23877 0.507259C6.72391 0.829555 7.28887 2.97417 8.51897 5.63386C9.40676 5.18205 10.481 5.53145 10.9792 6.46821C11.4801 7.40498 11.2213 8.58874 10.4142 9.19417C11.9393 11.7033 13.3893 13.3298 13.9069 13.0045C14.5359 12.6099 13.5563 9.49237 11.7139 6.0405C9.87153 2.58862 7.87052 0.112674 7.23877 0.507259Z" fill="#2948E8"/>
  </svg>
    <p class="anatomi_p"><strong>${deger}</strong> değerinde ürün ekle, <strong>Kargon Ücretsiz</strong> Olsun !</p>
  </div>
`;
// burada ücretli kargo bilgisi eklemek için div yaratıyorum ve içine anatomi_html yi entegre ediyorum
const ücretli_kargo = document.createElement('div');
ücretli_kargo.classList.add('anatomi_ücretli_kargo');
ücretli_kargo.insertAdjacentHTML('afterbegin', anatomi_html);
// burada da yarattığım divi hepsijet parent elementinin içine atıyorum.
const anatomi_span = document.querySelectorAll('.uk-container span');
const hepsiJet = anatomi_span[23].parentElement;
hepsiJet.insertAdjacentElement('afterend', ücretli_kargo);

const top_kargo_info = document.querySelector('#ins-purchase-trigger')
top_kargo_info.remove();


}

const fiyat_info_remove = document.querySelectorAll('.uk-flex.uk-flex-between.uk-flex-middle');
fiyat_info_remove[4].remove();
fiyat_info_remove[5].remove();
fiyat_info_remove[6].remove();




const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style);



