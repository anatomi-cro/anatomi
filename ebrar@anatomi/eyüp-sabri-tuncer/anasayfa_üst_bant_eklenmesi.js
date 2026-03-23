const anasayfa_üst_bant_eklenmesi_html = () => {
  const html = `
<div class="marquee">
   <ul class="marquee__content">
    <li class="anatomi_first_item"> 1250 TL ve Üzeri Siparişlerinizde KARGO BEDAVA! | Siparişleriniz 1-3 İş Günü İçerisinde Kargoya Teslim Edilir. 50 Desi Ve Üzeri Siparişleriniz 7 İş Günü İçerisinde Anlaşmalı Lojistik Firmaları Tarafından Teslim Edilir.</li>
    <li> Hediye Kodu: HOSGELDINIZ10 | İlk Alışverişinize Özel %10 İndirim Hesabınızda Sizi Bekliyor!</li>
    <li class="anatomi_last_item">Fırsat Ürünlerinde 30%'a Varan İndirim! <a href="#" class="anatomi_last_item_link">Hemen İncele!</a></li>
  </ul>
  <ul class="marquee__content" aria-hidden="true">
    <li class="anatomi_first_item"> 1250 TL ve Üzeri Siparişlerinizde KARGO BEDAVA! | Siparişleriniz 1-3 İş Günü İçerisinde Kargoya Teslim Edilir. 50 Desi Ve Üzeri Siparişleriniz 7 İş Günü İçerisinde Anlaşmalı Lojistik Firmaları Tarafından Teslim Edilir.</li>
    <li> Hediye Kodu: HOSGELDINIZ10 | İlk Alışverişinize Özel %10 İndirim Hesabınızda Sizi Bekliyor!</li>
    <li class="anatomi_last_item">Fırsat Ürünlerinde 30%'a Varan İndirim! <a href="#" class="anatomi_last_item_link">Hemen İncele!</li>
  </ul>
</div>



    `;
  const targetElement = document.querySelector("#masthead");
  const element = document.querySelector(".marquee");
  if (!element) {
    targetElement.insertAdjacentHTML("beforebegin", html);
  }
};

const anasayfa_üst_bant_eklenmesi_css = () => {
  const style = `
      <style id="anatomi_text_mark">    
      #top-bar {
          display: none !important;
      }
.marquee {
  display: flex;
  overflow: hidden;
  user-select: none;
  background-color: #264734;
  height: 50px;
}

.marquee__content {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  white-space: nowrap;            
  animation: scroll 50s linear infinite;
  color: white;
}

.marquee__content li {
  white-space: nowrap; 
    width: 1000px;
    display: flex;
    justify-content: center;
}
.anatomi_last_item, .anatomi_first_item {
  position: relative;
  left: -200px;
}
  .anatomi_last_item_link {
    text-decoration: underline;
    color: #ffffff;
    margin-left: 10px;
  }


@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100%));
  }
}


      </style>
    `;
  const head = document.querySelector("head");
  const css = document.querySelector("#anatomi_text_mark");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const anasayfa_üst_bant_eklenmesi_js = () => {};

const anasayfa_üst_bant_eklenmesi_init = () => {
  anasayfa_üst_bant_eklenmesi_html();
  anasayfa_üst_bant_eklenmesi_css();
  anasayfa_üst_bant_eklenmesi_js();
};

const anasayfa_üst_bant_eklenmesi_condition = () => {
  return true;
};

setInterval(() => {
  if (anasayfa_üst_bant_eklenmesi_condition()) {
    anasayfa_üst_bant_eklenmesi_init();
  }
}, 50);
