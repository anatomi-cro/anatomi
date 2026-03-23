const deneme_html = () => {
  const html = `
`;
};
const deneme_css = () => {
  const style = `
<style>
</style>
`;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};
const deneme_js = () => {


const navbar = document.querySelector("#dealHeader > nav");

const logo = document.querySelector(
  "#dealHeader > div.desktop-header.d-none.d-md-block.p-3.bg-white > div > div > div.d-flex.align-items-center.mr-auto"
);
if (navbar && logo) {
    logo.insertAdjacentElement("afterend", navbar);
}
if(navbar){
    navbar.setAttribute("style", "background: none !important");
}


 const navDiv = document.querySelector(
   "#dealHeader > div.desktop-header.d-none.d-md-block.p-3.bg-white > div > div > nav > div"
 );
 if (navDiv) {
   navDiv.style.backgroundColor = "white";;
   navDiv.setAttribute("style", "box-shadow: none !important");
 }

const itemTrafik = document.querySelector("#item-trafik");
const itemKasko = document.querySelector("#item-kasko");
const itemHesaplama = document.querySelector(
  "#dealHeader > div.desktop-header.d-none.d-md-block.p-3.bg-white > div > div > nav > div > div:nth-child(5)"
);
if (itemTrafik && itemKasko && itemHesaplama) {
    itemTrafik.setAttribute("style", "display: none !important");
    itemKasko.setAttribute("style", "display: none !important");
    itemHesaplama.setAttribute("style", "display: none !important");
}
const callCenterBtn = document.querySelector(
  "#dealHeader > div.desktop-header.d-none.d-md-block.p-3.bg-white > div > div > a.callcenter-btn.d-flex.flex-shrink-0.flex-column.ml-2.mr-2.mb-4.mb-md-0.px-2.py-1.bg-danger.text-white.text-center.rounded.text-decoration-none"
);
if (callCenterBtn) {
        callCenterBtn.setAttribute("style", "display: none !important");
    }
const loginCont = document.querySelector(
  "#dealHeader > div.desktop-header.d-none.d-md-block.p-3.bg-white > div > div > a.login-cont.d-flex.flex-column.flex-xl-row.justify-content-center.align-items-center.flex-wrap.bg-success.rounded.text-white.font-weight-normal.ml-2.px-3.px-xl-2.py-1.py-xl-2"
);
 if (loginCont) {
   loginCont.innerHTML = "Giriş Yap";
   loginCont.setAttribute("style", "background-color: #37424A !important");
 }
const partnersLogo = document.querySelector(
  "#dealHeader > div.desktop-header.d-none.d-md-block.p-3.bg-white > div > div > div.partners-logo.d-flex.align-items-center.p-0"
);
if (loginCont && partnersLogo) {
  partnersLogo.insertAdjacentElement("afterend", loginCont);
}

};
const deneme_init = () => {
  deneme_html();
  deneme_css();
  deneme_js();
};
const deneme_condition = () => {
    return true;
};
if (deneme_condition()) {
  deneme_init();
}
