const urun_l_filtreleme_sticky_html = () => {};

const urun_l_filtreleme_sticky_css = () => {
  const style = `
      <style>    
      .anatomi_filtreleme_scrolled {
          position: fixed !important;
          top: 0px;
          left: 0;
          width: 100% !important;
          background-color: #fff !important;
          padding: 10px !important;
          margin-top: 0 !important;
          height: 60px;
          z-index: 98 !important;
      }
      .anatomi-scrolled{
        top: 50px !important;
        z-index: 97 !important;
      }
      </style>
    `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};

const urun_l_filtreleme_sticky_js = () => {
  const targetEl = document.querySelector("#divSayfalamaUst");
  if (!targetEl) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 300) {
      targetEl.classList.add("anatomi_filtreleme_scrolled");
    } else {
      targetEl.classList.remove("anatomi_filtreleme_scrolled");
    }
  });
};

const urun_l_filtreleme_sticky_init = () => {
  urun_l_filtreleme_sticky_html();
  urun_l_filtreleme_sticky_css();
  urun_l_filtreleme_sticky_js();
};

const urun_l_filtreleme_sticky_condition = () => {
  const device = window.innerWidth <= 768;
  return device;
};

if (urun_l_filtreleme_sticky_condition()) {
  urun_l_filtreleme_sticky_init();
}
