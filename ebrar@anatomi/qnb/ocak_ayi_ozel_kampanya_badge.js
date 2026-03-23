const ocak_ayi_ozel_kampanya_badge_html = () => {
  const paketler = document.querySelectorAll(".anatomi-paketler-ocak-ayi");

  paketler.forEach((paket) => {
    if (paket.querySelector(".anatomi-ocak-ayi-ozel-kampanya-badge")) return;

    paket.insertAdjacentHTML(
      "beforeend",
      `<div class="anatomi-ocak-ayi-ozel-kampanya-badge">
        Ocak Ayına Özel
      </div>`
    );
  });
};

const ocak_ayi_ozel_kampanya_badge_css = () => {
  const style = `
      <style id="ocak_ayi_ozel_kampanya_badge_css">    
      .anatomi-paketler-ocak-ayi{
          position: relative;
      }
      .anatomi-ocak-ayi-ozel-kampanya-badge{
        position: absolute;
        top: 0;
        right: 0;
        background-color: #974192!important;
        color: #ffffff;
        padding: 5px 10px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }
     
      </style>
    `;
  const css = document.querySelector("#ocak_ayi_ozel_kampanya_badge_css");
  const head = document.querySelector("head");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const ocak_ayi_ozel_kampanya_badge_js = () => {
  const paketler =
    document.querySelectorAll("#switcher-packages > li > div > div > div") ||
    document.querySelectorAll("#switcher-packages > li > div > div > div");

  paketler.forEach((paket) => {
    paket.classList.add("anatomi-paketler-ocak-ayi");

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      paket.parentNode.setAttribute("style", "width: 100% !important");
    }
  });
};

const ocak_ayi_ozel_kampanya_badge_init = () => {
  ocak_ayi_ozel_kampanya_badge_js();
  ocak_ayi_ozel_kampanya_badge_html();
  ocak_ayi_ozel_kampanya_badge_css();
};

const ocak_ayi_ozel_kampanya_badge_condition = () => {
  return true;
};

setInterval(() => {
  if (ocak_ayi_ozel_kampanya_badge_condition()) {
    ocak_ayi_ozel_kampanya_badge_init();
  }
}, 50);
