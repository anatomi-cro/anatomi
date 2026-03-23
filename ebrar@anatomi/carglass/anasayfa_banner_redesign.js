const anasayfa_banner_degisikligi_html = () => {};

const anasayfa_banner_degisikligi_css = () => {
    const style = `
      <style>   
      .anatomi_hero-exp{
        font-size: 24px;
        color: #fff;
        font-weight: bold;
        margin: 0;
        width: 40%;
        line-height: 40px;
      }
        .anatomi_form_phone_container{
          justify-content: flex-start;
          padding-top: 100px;
        }
        .anatomi_form_phone_btn{
          width: 30%;
        }
    
      @media screen and (max-width: 768px) {
      .anatomi_hero-section{
        height: 80vh;
        background-position: 60% center;

      }
        .anatomi_hero-exp{
         width: 100%;
         font-size: 16px;
         line-height: 25px;
         padding-right: 20px;
        }
        .anatomi_form_phone_container{
          display: flex !important;
          padding-top: 20px;
        }
        .anatomi_form_phone_btn{
          width: 43% !important;
        }
      }

      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const anasayfa_banner_degisikligi_js = () => {
    const heroSection = document.querySelector("#content > div.anatomi_hero-section > div.anatomi_form_phone_container")

    const heroExpContainer = document.createElement("div");
    heroExpContainer.classList.add("anatomi_hero-exp-container");
    
    const heroExp = document.createElement("p");
    heroExp.classList.add("anatomi_hero-exp");
    heroExp.textContent = "Aracınızın camında küçük bir çatlak mı var? Madeni 1 TL’den küçükse, tamir edebiliriz. Üstelik değişim maliyetinin sadece küçük bir kısmına! Hasar büyümeden, siz önleminizi alın. Arayın, hemen çözelim.";

    heroExpContainer.appendChild(heroExp);
    heroSection.insertAdjacentElement("afterbegin", heroExpContainer);
};

const anasayfa_banner_degisikligi_init = () => {
    anasayfa_banner_degisikligi_html();
    anasayfa_banner_degisikligi_css();
    anasayfa_banner_degisikligi_js();
};

const anasayfa_banner_degisikligi_condition = () => {
    return true;
};

if (anasayfa_banner_degisikligi_condition()) {
    anasayfa_banner_degisikligi_init();
}
