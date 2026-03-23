setTimeout(() => {
  const dk_section_degisikligi_html = () => { };

  const dk_section_degisikligi_css = () => {
    const style = `
      <style>    
        .anatomi-uc-adım-section{
          background-image: none;
          padding-bottom: 0px !important;
      }
      .anatomi-uc-adım-section h2 , .anatomi-uc-adım-section p , .anatomi-uc-adım-section h3, .anatomi-uc-adım-section svg{
        color: #1f2152;
          
      }
        .anatomi-uc-adım-section > div > div:nth-of-type(2) > div > div {
        border: 1px solid  #1f21526b;
     }

     body > main > section.uk-section.uk-background-gradient-primary.uk-light.anatomi-uc-adım-section > div > div.uk-grid.uk-grid-20.uk-child-width-1-3\\@m.uk-margin-32.uk-margin-medium\\@m.uk-grid-match.notranslate > div.notranslate{
     transition: transform 0.3s ease-in-out;
     }

     .anatomi-underline {
     text-decoration: underline !important;}

      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
  };

  const dk_section_degisikligi_js = () => {
    const ucAdımSection = document.querySelector(
      "body > main > section.uk-section.uk-background-gradient-primary.uk-light"
    );
    if (ucAdımSection) {
      ucAdımSection.classList.add("anatomi-uc-adım-section");
    }
    const fiyatSection = document.querySelector(
      "body > main > section:nth-child(8)"
    );
    if (fiyatSection) {
      fiyatSection.style.display = "none";
    }
    const banner = document.querySelector(
      "body > main > div.uk-position-relative.notranslate"
    );
    if (banner && ucAdımSection) {
      banner.insertAdjacentElement("afterend", ucAdımSection);
    }

    const ucrestsizDeneyin = document.querySelector(
      "body > main > div.uk-position-relative.notranslate > section > div.uk-container.uk-position-relative.notranslate > div > div.uk-width-3-5\\@m.uk-first-column.notranslate > a"
    );

    if (ucrestsizDeneyin) {
      ucrestsizDeneyin.setAttribute("target", "_blank");
    }

    function handleClick() {
      const containers = document.querySelectorAll(
        "body > main > section.uk-section.uk-background-gradient-primary.uk-light.anatomi-uc-adım-section > div > div.uk-grid.uk-grid-20.uk-child-width-1-3\\@m.uk-margin-32.uk-margin-medium\\@m.uk-grid-match.notranslate > div.notranslate"
      );

      if (containers) {
        containers.forEach((item) => {
          item.addEventListener("mousedown", () => {
            item.style.transform = "scale(0.95)";
          });
          item.addEventListener("mouseup", () => {
            item.style.transform = "";
          });
          item.addEventListener("mouseleave", () => {
            item.style.transform = "";
          });

          item.addEventListener("touchstart", () => {
            item.style.transform = "scale(0.95)";
          });
          item.addEventListener("touchend", () => {
            item.style.transform = "";
          });
          item.addEventListener("touchcancel", () => {
            item.style.transform = "";
          });

          item.addEventListener("click", () => {
            window.location.href =
              "https://www.qnb.com.tr/dijitalkopru/dijital-cozumlerimiz/e-donusum-basvuru-formu?p=QNBESOLUTIONS&utm_source=esolutions&utm_medium=cobranded&utm_campaign=hizli-basvuru";
          });

          item.classList.add("anatomi-box");

          item.style.cursor = "pointer";
        });
      }

      const span = document.querySelectorAll(
        "body > main > section.uk-section.uk-background-gradient-primary.uk-light.anatomi-uc-adım-section > div > div.uk-grid.uk-grid-20.uk-child-width-1-3\\@m.uk-margin-32.uk-margin-medium\\@m.uk-grid-match.notranslate > div.notranslate > div > span"
      );

      const wrapper = document.querySelectorAll(
        "body > main > section.uk-section.uk-background-gradient-primary.uk-light.anatomi-uc-adım-section > div > div.uk-grid.uk-grid-20.uk-child-width-1-3\\@m.uk-margin-32.uk-margin-medium\\@m.uk-grid-match.notranslate > div.notranslate > div"
      );

      if (wrapper) {
        wrapper.forEach((item) => {
          item.style.display = "flex";
          item.style.alignItems = "center";
          item.style.gap = "10px";
        });
      }

      if (span) {
        span.forEach((item) => {
          item.style.marginBottom = "0px";
        });
      }
    }

    function changeText() {
      const text1 = document.querySelector(
        "body > main > section.uk-section.uk-background-gradient-primary.uk-light.anatomi-uc-adım-section > div > div.uk-grid.uk-grid-20.uk-child-width-1-3\\@m.uk-margin-32.uk-margin-medium\\@m.uk-grid-match.notranslate > div.notranslate.uk-first-column > div > h3"
      );

      const text2 = document.querySelector(
        "body > main > section.uk-section.uk-background-gradient-primary.uk-light.anatomi-uc-adım-section > div > div.uk-grid.uk-grid-20.uk-child-width-1-3\\@m.uk-margin-32.uk-margin-medium\\@m.uk-grid-match.notranslate > div:nth-child(3) > div > h3"
      );

      if (text1) {
        text1.innerHTML = text1.innerHTML.replace(
          /(başvuru formunu)/,
          "<span class='anatomi-underline'>başvuru formunu</span>"
        );
      }

      if (text2) {
        text2.innerHTML = text2.innerHTML.replace(
          /(Dijital Köprü'yü)/,
          "<span class='anatomi-underline'>Dijital Köprü'yü</span>"
        );
      }
    }

    handleClick();
    changeText();
  };

  const dk_section_degisikligi_init = () => {
    dk_section_degisikligi_html();
    dk_section_degisikligi_css();
    dk_section_degisikligi_js();
  };

  const dk_section_degisikligi_condition = () => {
    return true;
  };

  if (dk_section_degisikligi_condition()) {
    dk_section_degisikligi_init();
  }
}, 1000);