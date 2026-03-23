const urun_detay_acele_et_badge_html = () => {};

const urun_detay_acele_et_badge_css = () => {
    const style = `
      <style> 
      .anatomi_icon_contanier{
        margin: 0px !important;
        justify-content: flex-start;
      }   
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const urun_detay_acele_et_badge_js = () => {
    const targetElement = document.querySelector("#pageContent > div");
    const anatomiIcon = document.querySelector("div > div.anatomi_icon_contanier")
    if(targetElement && anatomiIcon){
        targetElement.insertAdjacentElement("beforebegin", anatomiIcon);
    }
};

const urun_detay_acele_et_badge_init = () => {
    urun_detay_acele_et_badge_html();
    urun_detay_acele_et_badge_css();
    urun_detay_acele_et_badge_js();
};

const urun_detay_acele_et_badge_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

if (urun_detay_acele_et_badge_condition()) {
    urun_detay_acele_et_badge_init();
}
