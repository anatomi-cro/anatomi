setTimeout(() => {
  const style = `
<style>
  .satinAlContainer{
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 9999;
      width: 100%;
      background: white;
      box-shadow: rgba(0,0,0,.15) 0 3px 12px;
  }
  .kargoBilgi{
      display: flex;
      align-items: center;
      padding: 5px 15px 5px 15px;
      justify-content: center;
      gap: 10px;
  }
  .kargoText{
      font-size: 14px;
      font-weight: 600;
      color: #DE9440;
      text-align: center;
  }
  .kargoFiyatContainer{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 15px 5px 15px;
      color: #656364;
      font-size: 14px;
      font-weight: 700;
  }
  .butonContainer{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 15px 15px 15px;
  }
  .butonText{
      font-size: 16px;
      color: #1E1E1E;
      font-weight: 799;
  }
  .buyBtn{
      width: 60% !important;
      border-radius: 5px !important;
  }
  .a_cizgi{
      border-top: 0.5px solid #A9A9A9;
  }
  
  #rvts-bell{
      display: none;
  }
  .sepetToplamSayi {
      text-align: end;
  }
  
  .kargoFiyatSayi{
      text-align: end;
  }
  
  .ucretsizKargoText{
      color: #50A163;
      font-weight: 600;
  }
  
</style>
`
  const satinAl = document.querySelector('.btn.btn-big.col-12.btn-custom-pink.text-center.text-upper.buyBtn')
  const arrayList = document.querySelectorAll('.box.col-6.a-right').length
  let sepetToplam, kargoFiyat, genelToplam, sepetToplamInt;

  if (arrayList == 3){
      sepetToplam = document.querySelectorAll('.box.col-6.a-right')[0].innerText
      kargoFiyat = document.querySelectorAll('.box.col-6.a-right')[1].innerText
      genelToplam = document.querySelectorAll('.box.col-6.a-right')[2].innerText
      sepetToplamInt = parseFloat(sepetToplam);
  } else {
      sepetToplam = document.querySelectorAll('.box.col-6.a-right')[0].innerText
      genelToplam = document.querySelectorAll('.box.col-6.a-right')[1].innerText
      sepetToplamInt = parseFloat(sepetToplam);
      sepetToplamInt = parseInt(sepetToplam.replace('.', ''))
  }

  const siteContainer = document.querySelector('#SepetForm')
  const HTML = `
<div class = "satinAlContainer">
  <div class="kargoBilgi">
      <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.39023 12.9291L3.01254 8.38663L1.18793 9.5469C0.0519517 10.2736 -0.338455 11.8764 0.320357 13.1324C0.976457 14.3854 2.42964 14.816 3.56833 14.0923L5.39023 12.9291Z" fill="#DE9440"/>
      <path d="M13.307 4.95058C13.3617 5.06233 13.4567 5.12519 13.5574 5.12519C13.6063 5.12519 13.6552 5.11123 13.7013 5.07979L16.0264 3.44892C16.1646 3.35113 16.2106 3.13811 16.1329 2.97048C16.0523 2.80285 15.8768 2.74697 15.7387 2.84126L13.4135 4.47214C13.2754 4.56993 13.2264 4.78295 13.307 4.95058Z" fill="#DE9440"/>
      <path d="M16.7332 6.9888L14.3438 7.06806C14.2028 7.07193 14.0926 7.16279 14.0977 7.26911C14.1028 7.3735 14.2182 7.45469 14.3541 7.45469H14.3643L16.7537 7.37543C16.8947 7.37156 17.0049 7.28071 16.9998 7.17438C16.9947 7.06613 16.8768 6.98687 16.7332 6.9888Z" fill="#DE9440"/>
      <path d="M11.7453 2.75019C11.7956 2.78136 11.8488 2.79552 11.9049 2.79552C12.0024 2.79552 12.0969 2.75019 12.1531 2.66521L13.6362 0.43572C13.7248 0.302574 13.6835 0.129767 13.5476 0.0447802C13.4087 -0.0402066 13.2285 -0.00054609 13.1399 0.1326L11.6567 2.36209C11.5681 2.4924 11.6094 2.66521 11.7453 2.75019Z" fill="#DE9440"/>
      <path d="M5.33936 13.5117L3.91531 14.5C3.72473 14.6302 3.52357 14.7287 3.31711 14.805C3.57121 16.3239 4.21971 17.7093 5.16995 18.7579C5.52464 19.1488 6.04873 19.2123 6.4643 18.9232C6.47489 18.9168 6.48283 18.9105 6.49341 18.9041C7.09956 18.4847 7.2372 17.4996 6.7687 16.8768C6.05932 15.9267 5.56435 14.7669 5.33936 13.5117Z" fill="#DE9440"/>
      <path d="M8.85093 7.4691C7.95962 5.78334 7.23781 4.11846 6.81949 2.7788C6.58163 2.012 6.45312 1.40333 6.43672 0.931915C5.87623 1.7375 5.58915 3.06224 5.20637 4.202C4.75525 5.74455 4.13461 6.96785 3.31711 7.81222L5.81334 12.5324C6.89332 12.1803 8.17561 12.2071 9.62468 12.5503C10.7265 12.7561 11.9323 13.153 12.8537 13.0187C11.2487 11.9356 9.12434 7.98229 8.85093 7.4691Z" fill="#DE9440"/>
      <path d="M7.23877 0.50729C6.72391 0.829585 7.28887 2.9742 8.51897 5.63389C9.40676 5.18208 10.481 5.53148 10.9792 6.46825C11.4801 7.40501 11.2213 8.58877 10.4142 9.1942C11.9393 11.7033 13.3893 13.3298 13.9069 13.0045C14.5359 12.6099 13.5563 9.4924 11.7139 6.04053C9.87153 2.58865 7.87052 0.112704 7.23877 0.50729Z" fill="#DE9440"/>
      </svg>
      <span class="kargoText"></span>
  </div>
  
  <div class="kargoFiyatContainer">
      <div class="kargoFiyatText">
          <p class="kargoFiyat">Kargo</p>
          <p class="sepetToplam">Ürünler</p>
      </div>
      <div class="kargoFiyatInfo">
          <p class="kargoFiyatSayi"></p>
          <p class="sepetToplamSayi"></p>
      </div>
  </div>

  <hr class="a_cizgi">
  <div class="butonContainer">
      <div class="butonText">
          <p class="toplamText">Toplam</p>
          <span class="genelToplam"></span>
      </div>
  </div>
</div>

`

  const ucretsizKargo =`
  <div class="ucretsizKargo">
      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6992 7.26923V17H5.78756C5.579 17 5.40974 16.8307 5.40974 16.6222V12.5583L10.6992 7.26923ZM17.1222 7.17666H12.2105V17H17.1222C17.3307 17 17.5 16.8307 17.5 16.6222V7.55448C17.5 7.34593 17.3307 7.17666 17.1222 7.17666ZM2.95881 8.78051L4.11457 7.62476C4.0458 7.65876 3.97666 7.69239 3.90979 7.7211C3.06271 8.08457 2.17257 8.17751 1.64249 7.958C1.45924 7.88205 1.33947 7.77664 1.2862 7.64403C1.0886 7.14984 1.78455 6.20604 3.09899 5.64195C4.08207 5.22031 4.93897 5.22408 5.37989 5.41488L5.85217 5.88716L6.3864 5.35292L5.91413 4.88065C5.72333 4.43935 5.71955 3.58245 6.1412 2.59974C6.70528 1.28493 7.64908 0.589357 8.14289 0.786957C8.27551 0.84023 8.3813 0.959621 8.45724 1.14324C8.67675 1.6737 8.58381 2.56347 8.22035 3.41054C8.19163 3.47742 8.15801 3.54656 8.124 3.61532L9.27976 2.45957C9.37459 1.85355 9.33718 1.29286 9.15583 0.853832C9.0013 0.480545 8.74816 0.214937 8.42399 0.0849665C7.45488 -0.302678 6.14724 0.670589 5.44714 2.30126C5.1071 3.09393 4.97675 3.89982 5.0595 4.55988C4.39982 4.47713 3.59393 4.60748 2.80126 4.94752C1.17059 5.64762 0.197322 6.95526 0.584966 7.92437C0.714559 8.24854 0.980167 8.50168 1.35345 8.65621C1.7921 8.83794 2.35279 8.87534 2.95881 8.78051ZM6.11928 6.6889L2.12005 10.6881C1.97232 10.8359 1.97232 11.075 2.12005 11.2224L3.63134 12.7336C3.77906 12.8814 4.01822 12.8814 4.16557 12.7336L8.16518 8.73404L6.11928 6.6889ZM13.2333 3.13171L11.722 1.62043C11.5743 1.4727 11.3351 1.4727 11.1877 1.62043L7.18814 5.62004L9.23366 7.66556L13.2333 3.66595C13.381 3.5186 13.381 3.27944 13.2333 3.13171Z" fill="#50A163"/>
      </svg>
      <span class="ucretsizKargoText">Tebrikler, Kargonuz Ücretsiz!</span>
  </div>

`



  siteContainer.insertAdjacentHTML('afterend',HTML)
  document.querySelector('.col.col-3.col-md-6.col-sm-12.fr').remove()
  const a_kargoFiyat = document.querySelector('.kargoFiyatSayi')
  a_kargoFiyat.insertAdjacentText('afterbegin',kargoFiyat)
  const a_sepetToplam = document.querySelector('.sepetToplamSayi')
  a_sepetToplam.insertAdjacentText('afterbegin',sepetToplam)
  const a_genelToplam =document.querySelector('.genelToplam')
  a_genelToplam.insertAdjacentText('afterbegin',genelToplam)
  const butonContainer = document.querySelector('.butonText')
  butonContainer.insertAdjacentElement('afterend',satinAl)
  const kalanDeger = 2000 - sepetToplamInt;
  satinAl.removeAttribute('id')
  if(sepetToplamInt > 2000){
      document.querySelector('.kargoBilgi').remove()
      a_kargoFiyat.innerText = ""
      a_kargoFiyat.insertAdjacentHTML('afterbegin',ucretsizKargo)
      console.log('2000 den buyuk')
  } else {
      document.querySelector('.kargoText').innerHTML = `<strong>${kalanDeger} TL</strong> değerinde ürün ekle, <strong>Kargon Ücretsiz</strong> Olsun!`;
      console.log('2000 den kucuk')
  }


  const container = document.querySelector('#cartDetail');
  const config = { attributes: true, childList: true, subtree: true };
  const callback = function(mutationList, observer) {
      for (const mutation of mutationList) {
          if (mutation.target.classList.contains('basketWrapper')) {
              const arrayList = document.querySelectorAll('.box.col-6.a-right').length;
              let newSepetToplam, newKargoFiyat, newGenelToplam, newSepetToplamInt;

              if (arrayList == 3) {
                  newSepetToplam = document.querySelectorAll('.box.col-6.a-right')[0].innerText;
                  newKargoFiyat = document.querySelectorAll('.box.col-6.a-right')[1].innerText;
                  newGenelToplam = document.querySelectorAll('.box.col-6.a-right')[2].innerText;
                  newSepetToplamInt = parseFloat(newSepetToplam);
              } else {
                  newSepetToplam = document.querySelectorAll('.box.col-6.a-right')[0].innerText;
                  newGenelToplam = document.querySelectorAll('.box.col-6.a-right')[1].innerText;
                  newSepetToplamInt = parseFloat(newSepetToplam);
                  newSepetToplamInt = parseInt(newSepetToplam.replace('.', ''))
              }

              // update the variables with the new values
              sepetToplam = newSepetToplam;
              kargoFiyat = newKargoFiyat;
              genelToplam = newGenelToplam;
              sepetToplamInt = newSepetToplamInt;
              const siteContainer = document.querySelector('#SepetForm')
              siteContainer.insertAdjacentHTML('afterend',HTML)
              document.querySelector('.col.col-3.col-md-6.col-sm-12.fr').remove()
              const a_kargoFiyat = document.querySelector('.kargoFiyatSayi')
              a_kargoFiyat.insertAdjacentText('afterbegin',kargoFiyat)
              const a_sepetToplam = document.querySelector('.sepetToplamSayi')
              a_sepetToplam.insertAdjacentText('afterbegin',sepetToplam)
              const a_genelToplam =document.querySelector('.genelToplam')
              a_genelToplam.insertAdjacentText('afterbegin',genelToplam)

              const butonContainer = document.querySelector('.butonText')
              butonContainer.insertAdjacentElement('afterend',satinAl)
              satinAl.removeAttribute('id')
              const kalanDeger = 2000 - sepetToplamInt;

              if(sepetToplamInt > 2000){
                  document.querySelector('.kargoBilgi').remove()
                  a_kargoFiyat.innerText = ""
                  a_kargoFiyat.insertAdjacentHTML('afterbegin',ucretsizKargo)
                  console.log('2000 den buyuk')
              }else {
                  document.querySelector('.kargoText').innerHTML = `<strong>${kalanDeger} TL</strong> değerinde ürün ekle, <strong>Kargon Ücretsiz</strong> Olsun!`;
                  console.log('2000 den kucuk')
              }
              console.log('Değişiklik yapıldı.')

          }
      }
  };
  const observer = new MutationObserver(callback);
  observer.observe(container, config);


  const head = document.querySelector('head');
  head.insertAdjacentHTML("beforebegin", style);
}, 250);
