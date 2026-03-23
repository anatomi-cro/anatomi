const teklif_al_btn_navbar_html = () => {};

const teklif_al_btn_navbar_css = () => {
    const style = `
      <style>   
      .anatomi_offer_btn{
          position: static !important;
          writing-mode: unset !important;
          border-top-left-radius: 5px !important;
          border-bottom-left-radius: 5px !important;
          border-radius: 5px;
          padding: 10px 25px !important;
          transition: unset !important;
          animation: unset !important;
          animation-fill-mode: unset !important;
          margin-left: 30px;
      } 
    .offer-btn-wrp .offer-btn.offer-open{
        transform: unset !important;
        animation: unset !important;
        animation-fill-mode: unset !important;
    }
    .anatomi_form_content{
    transition-duration: unset !important;
    transition-timing-function: unset !important;
    transition-delay: unset !important;
    }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const teklif_al_btn_navbar_js = () => {
    const teklifAlContainer = document.querySelector("body > div.offer-btn-wrp")
    const targetElement = document.querySelector("body > header > nav > div.navbar-nav.align-items-lg-center.nav-right")
    if(teklifAlContainer && targetElement){
        targetElement.insertAdjacentElement("beforebegin", teklifAlContainer);
    }
    const teklifAlBtn = document.querySelector("body > header > nav > div.offer-btn-wrp > div.offer-btn")
    if(teklifAlBtn){
        teklifAlBtn.classList.add("anatomi_offer_btn");
        teklifAlBtn.textContent = "Teklif Al";
    }
    const header = document.querySelector("body > header");
    const targetElement2 = document.querySelector("body > header > nav > div.offer-btn-wrp > div.offer-form-content");
    if(targetElement2){
        targetElement2.classList.add("anatomi_form_content"); 
    }

    const updateTopStyle = () => {
        if (!header || !targetElement2) return;

        if (header.classList.contains("fixed-top")) {
            if (targetElement2.style.top !== "800%") {
                targetElement2.style.top = "800%";
            }
        } else {
            if (targetElement2.style.top) {
                targetElement2.style.removeProperty("top");
            }
        }
    };
    setInterval(updateTopStyle, 100);
      

};

const teklif_al_btn_navbar_init = () => {
    teklif_al_btn_navbar_html();
    teklif_al_btn_navbar_css();
    teklif_al_btn_navbar_js();
};

const teklif_al_btn_navbar_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

if (teklif_al_btn_navbar_condition()) {
    teklif_al_btn_navbar_init();
}