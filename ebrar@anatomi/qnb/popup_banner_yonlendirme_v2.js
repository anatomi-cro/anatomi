const popup_banner_yonlendirme_html = () => {
  const html = `
    <div class="anatomi_kampanya_bari">
    <p>e-Faturaya Hızlı Geçiş İçin </p>
    <a class="anatomi_kampanya_tel_a">0850 250 67 50</a>
    </div>
    `;
  const element = document.querySelector(".anatomi_kampanya_bari");
  if (!element) {
    const container = document.querySelector("body > header");
    container.insertAdjacentHTML("beforebegin", html);
  }

  const overlay = document.querySelector("#anatomi_overlay");
  if (!overlay) {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<div id="anatomi_overlay"></div>`
    );
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

    .anatomi_sizi_arayalim_orj_popup {
      display: block;
    z-index: 999999 !important;
    position: relative !important;
    }

    .anatomi_sizi_arayalim_orj_popup .uk-offcanvas-bar {
    height: 550px !important;
    width: 500px !important;
    border-radius: 20px;
    position: fixed;
    scrollbar-width: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }

     #anatomi_overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
        z-index: 99999;
        display: none;
    }

    @media screen and (max-width: 768px) {
      .anatomi_kampanya_bari { 
        height: 50px;
      }
      .anatomi_kampanya_bari p {
        font-size: 12px;
        width: 40%;
      }
      .anatomi_kampanya_bari a {
        font-size: 12px;
        width: 30%;
        padding: 5px 10px;
        text-align: center;
      }
      body {
        padding-top: 45px;
      }
    .anatomi_sizi_arayalim_orj_popup .uk-offcanvas-bar {
     width: 90% !important;
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
  const kampanyaBannerLink = document.querySelector(".anatomi_kampanya_tel_a");

  if (kampanyaBannerLink) {
    kampanyaBannerLink.addEventListener("click", () => {
      const siziArayalimPopupContainer =
        document.querySelector("#offcanvas-contact");
      const overlay = document.querySelector("#anatomi_overlay");
      const popup = document.querySelector("#sizi_arayalim_popup");
      if (popup) {
        const observer = new MutationObserver(() => {
          const currentDisplay = getComputedStyle(popup).display;

          if (currentDisplay === "flex") {
            popup.style.setProperty("display", "none", "important");
          }
        });

        observer.observe(popup, {
          attributes: true,
          attributeFilter: ["style"],
        });
      }

      if (siziArayalimPopupContainer) {
        siziArayalimPopupContainer.classList.add(
          "anatomi_sizi_arayalim_orj_popup"
        );
        overlay.style.display = "block";
      }
    });
  }

  const closeBtn = document.querySelector(
    "#offcanvas-contact > div > div.uk-flex.uk-flex-column.uk-flex-1.form-container.notranslate > div > div.uk-grid.uk-margin-12.notranslate > div.uk-width-auto.notranslate > button"
  );
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      const siziArayalimPopupContainer =
        document.querySelector("#offcanvas-contact");
      const overlay = document.querySelector("#anatomi_overlay");
      if (overlay) {
        overlay.style.display = "none";
        siziArayalimPopupContainer.classList.remove(
          "anatomi_sizi_arayalim_orj_popup"
        );
      }
    });
  }

  const button = document.querySelector(
    "#form-lets-call-you-form > div.uk-position-sticky.uk-offcanvas-bottom.uk-border-top.uk-background-muted.uk-margin-auto-top.notranslate > button"
  );

  const adSoyad = document.querySelector("#contactName");
  const tel = document.querySelector("#Phone");
  const mail = document.querySelector("#contactEmail");
  const kvkk = document.querySelector("#privacyPolicyCheckbox2");

  function checkForm() {
    const isValid =
      adSoyad.value.trim() !== "" &&
      tel.value.trim() !== "" &&
      mail.value.trim() !== "" &&
      kvkk.checked;

    button.disabled = !isValid;
  }

  adSoyad.addEventListener("input", checkForm);
  tel.addEventListener("input", checkForm);
  mail.addEventListener("input", checkForm);
  kvkk.addEventListener("change", checkForm);

  checkForm();

  button.addEventListener("click", () => {
    if (!adSoyad.value.trim().includes("Anatomi3")) {
      adSoyad.value = "Anatomi3 " + adSoyad.value;
    }
  });
};

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
