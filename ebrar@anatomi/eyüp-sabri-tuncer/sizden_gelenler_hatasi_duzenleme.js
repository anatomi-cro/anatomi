const sizden_gelenler_hata_duzenlemesi_html = () => {};

const sizden_gelenler_hata_duzenlemesi_css = () => {
  const style = `
  <style id="sizden_gelenler_hata_duzenlemesi_css">
  .commentContainer .commentArea .commentsArea ul .box{
    margin: 240px 0 0 0 !important;
  }
  </style>
  `;
  const css = document.querySelector("#sizden_gelenler_hata_duzenlemesi_css");
  const head = document.querySelector("head");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const sizden_gelenler_hata_duzenlemesi_js = () => {
  document.querySelectorAll(".imgArea").forEach((imgArea) => {
    imgArea.querySelectorAll("br").forEach((br) => {
      const next = br.nextSibling;
      if (
        next &&
        next.nodeType === Node.TEXT_NODE &&
        next.textContent.replace(/\s/g, "") === ""
      ) {
        next.remove();
        br.remove();
      }
    });
  });
};

const sizden_gelenler_hata_duzenlemesi_init = () => {
  sizden_gelenler_hata_duzenlemesi_html();
  sizden_gelenler_hata_duzenlemesi_css();
  sizden_gelenler_hata_duzenlemesi_js();
};

const sizden_gelenler_hata_duzenlemesi_condition = () => {
  const device = window.innerWidth > 768;
  return device;
};

setInterval(() => {
  if (sizden_gelenler_hata_duzenlemesi_condition()) {
    sizden_gelenler_hata_duzenlemesi_init();
  }
}, 50);
