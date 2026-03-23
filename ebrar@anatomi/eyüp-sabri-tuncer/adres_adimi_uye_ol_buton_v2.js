const adres_adimi_uye_ol_buton_html = () => {
  const html = `
  <div class="adres_adimi_uye_ol_buton_container"
  </div>
        

    `;
  const targetElement = document.querySelector(
    "#app > div > div > div > main > div > div > div.v-container.v-container--fluid.v-locale--is-ltr.checkout-container > div:nth-child(2) > div:nth-child(1)",
  );
  const element = document.querySelector(".adres_adimi_uye_ol_buton_container");
  if (!element && targetElement) {
    targetElement.insertAdjacentHTML("beforebegin", html);
  }
};

const adres_adimi_uye_ol_buton_css = () => {
  const style = `
      <style id="adres_adimi_uye_ol_buton_css">     
      .adres_adimi_uye_ol_buton_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
     .adres_adimi_uye_ol_buton_container a {
        margin: 0px !important;
        background-color: #fffff;
        border: 1px solid #164734;
        color: #164734 !important;
        width: 60%;
        text-align: center;
        padding: 10px;
        border-radius: 8px;
     }
      </style>
    `;
  const css = document.querySelector("#adres_adimi_uye_ol_buton_css");
  const head = document.querySelector("head");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const adres_adimi_uye_ol_buton_js = () => {
  const uyeOlButon = document.querySelector(
    "#app > div > div > div > main > div > div > div.v-container.v-container--fluid.v-locale--is-ltr.checkout-container > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div.step-box--inner > div > div.buy-fast.pa-4.mb-3 > div.d-flex.justify-space-between.align-center.buy-fast--header > a",
  );
  const targetElement = document.querySelector(
    ".adres_adimi_uye_ol_buton_container",
  );
  if (uyeOlButon && targetElement && !targetElement.contains(uyeOlButon)) {
    targetElement.appendChild(uyeOlButon);
  }
};

const adres_adimi_uye_ol_buton_init = () => {
  adres_adimi_uye_ol_buton_html();
  adres_adimi_uye_ol_buton_css();
  adres_adimi_uye_ol_buton_js();
};

const adres_adimi_uye_ol_buton_condition = () => {
  const device = window.innerWidth <= 768;
  return device;
};

setInterval(() => {
  if (adres_adimi_uye_ol_buton_condition()) {
    adres_adimi_uye_ol_buton_init();
  }
}, 50);
