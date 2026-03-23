const popup_banner_yonlendirme_html = () => {
  const html = `
    <div class="anatomi_kampanya_bari">
    <p>e-Faturaya Hızlı Geçiş İçin </p>
    <a class="anatomi_kampanya_tel_a" href="https://www.qnbesolutions.com.tr/destek">0850 250 67 50</a>
    </div>
    `;
  const element = document.querySelector(".anatomi_kampanya_bari");
  if (!element) {
    const container = document.querySelector("body > header");
    container.insertAdjacentHTML("beforebegin", html);
  }
};

const popup_banner_yonlendirme_css = () => {
  const style = `
     <style id="anatomi_kampanya_bari_css">    
     .uk-sticky-fixed {
    top: 45px !important;}
    .anatomi_kampanya_bari { 
      color: #fff;
      background: linear-gradient(180deg, #a961a5 0, #974192 100%);
      border: 1px solid;
      border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%);
      box-shadow: 0 0 0 1px #974192;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      gap: 10px;
      position: fixed;     
      top: 0;            
      left: 0;
      width: 100%;
      z-index: 9999;       
    }
    .anatomi_kampanya_bari p {
      margin: 0px !important;
      font-size: 16px; 
    }
    .anatomi_kampanya_bari a {
      background-color: #FAF8FB;
      text-decoration: underline;
      font-size: 16px;
      border-radius: 8px;
      padding: 5px 15px;
    }
    body {
      padding-top: 50px; 
    }
    @media screen and (max-width: 768px) {
      .anatomi_kampanya_bari { 
        height: 50px;
      }
      .anatomi_kampanya_bari p {
        font-size: 12px;
        width: 35%;
      }
      .anatomi_kampanya_bari a {
        font-size: 12px;
        width: 50%;
        padding: 5px 10px;
        text-align: center;
      }
      body {
        padding-top: 45px;
      }
    }
    </style>
    `;
  const css = document.querySelector("#anatomi_kampanya_bari_css");
  const head = document.querySelector("head");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};
const popup_banner_yonlendirme_js = () => {
  const telClick = document.querySelector(".anatomi_kampanya_tel_a");

  if (telClick) {
    telClick.addEventListener("click", () => {
      localStorage.setItem("anatomi_kampanya_tel", "clicked");
    });
  }
};

if (
  localStorage.getItem("anatomi_kampanya_tel") === "clicked" &&
  window.location.href.includes("https://www.qnbesolutions.com.tr/destek")
) {
  const btn = document.querySelector(
    "body > main > div > section > div.uk-container.uk-position-relative.banner-text-section.notranslate > div > div > a"
  );

  if (btn) {
    btn.click();
  }

  const button = document.querySelector(
    "#form-lets-call-you-form > div.uk-position-sticky.uk-offcanvas-bottom.uk-border-top.uk-background-muted.uk-margin-auto-top.notranslate > button"
  );
  const adSoyad = document.querySelector("#contactName");

  button.addEventListener("click", () => {
    if (!adSoyad.value.trim().includes("Anatomi2")) {
      adSoyad.value = "Anatomi2 " + adSoyad.value;
    }
  });
}

const popup_banner_yonlendirme_init = () => {
  popup_banner_yonlendirme_html();
  popup_banner_yonlendirme_css();
  popup_banner_yonlendirme_js();
};

const popup_banner_yonlendirme_condition = () => {
  const device = window.innerWidth > 768;
  return device;
};

setInterval(() => {
  if (popup_banner_yonlendirme_condition()) {
    popup_banner_yonlendirme_init();
  }
}, 50);
