const sepet_alisverise_devam_et_btn_v1_html = () => {};

const sepet_alisverise_devam_et_btn_v1_css = () => {
  const style = `
      <style id="anatomi_sepet_alisverise_devam_et_btn_v1_css">   
      .anatomi_back_btn{
      display: flex;
      justify-content: flex-start;
      background-color: #F9F9F9 !important;
      border: 1px solid #80808017 !important;
      color: black !important;
      text-transform: capitalize !important;
      } 
      </style>
    `;
  const css = document.querySelector(
    "#anatomi_sepet_alisverise_devam_et_btn_v1_css"
  );
  const head = document.querySelector("head");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const sepet_alisverise_devam_et_btn_v1_js = () => {
  const backBtn = document.querySelector("#cart-back-btn");
  if (backBtn) {
    backBtn.classList.add("anatomi_back_btn");
  }
};

const sepet_alisverise_devam_et_btn_v1_init = () => {
  sepet_alisverise_devam_et_btn_v1_html();
  sepet_alisverise_devam_et_btn_v1_css();
  sepet_alisverise_devam_et_btn_v1_js();
};

const sepet_alisverise_devam_et_btn_v1_condition = () => {
  const device = window.innerWidth <= 768;
  return device;
};

setInterval(() => {
  if (sepet_alisverise_devam_et_btn_v1_condition()) {
    sepet_alisverise_devam_et_btn_v1_init();
  }
}, 50);
