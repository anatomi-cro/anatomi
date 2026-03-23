const dijital_kopru_yonlendirme_popup_html = () => {};

const dijital_kopru_yonlendirme_popup_css = () => {
  const style = `
      <style id="dijital_kopru_yonlendirme_popup_css">    
        .anatomi_section_contact_form {
      position: fixed;
      top: 0;
      left: 0;
      width: 100% !important;
      height: 100%;
      z-index: 9999;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .anatomi_c_form_wrapper {
      background-color: #F7F9FC;
      padding: 30px;
      border-radius: 8px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 33%;
    }
    
    .anatomi_c_form_wrapper_close {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: transparent;
      border: none;
      font-size: 24px;
      color: gray;
    }

    .anatomi_c_form_wrapper_title {
      font-size: 20px;
      width: 65%;
      text-align: center;
      padding-bottom: 20px;
      font-weight: bold;
    }
    
    .hidden {
      display: none;
    }

      @media screen and (max-width: 768px) {
    .anatomi_c_form_wrapper {
        width: 80%;
    }
    .anatomi_c_form_wrapper_title {
        font-size: 18px;
        width: 100%;
    }
}
      </style>
    `;
  const css = document.querySelector("#dijital_kopru_yonlendirme_popup_css");
  const head = document.querySelector("head");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const dijital_kopru_yonlendirme_popup_js = () => {
  fetch("https://www.qnbesolutions.com.tr/dijital-kopru")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      if (document.querySelector(".anatomi_section_contact_form")) return;

      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "text/html");
      const bannerDiv = doc.querySelector(".section-contact-form");
      if (bannerDiv) {
        /* APPEND CHILD */
        document.body.appendChild(bannerDiv);
        bannerDiv.classList.add("anatomi_section_contact_form");

        let cFormWrapper = document.querySelector(".anatomi_c_form_wrapper");
        if (!cFormWrapper) {
          cFormWrapper = document.createElement("div");
          cFormWrapper.classList.add("anatomi_c_form_wrapper");
          bannerDiv.appendChild(cFormWrapper);
        }

        let cFormWrapperClose = document.querySelector(
          ".anatomi_c_form_wrapper_close"
        );
        if (!cFormWrapperClose) {
          cFormWrapperClose = document.createElement("button");
          cFormWrapperClose.classList.add("anatomi_c_form_wrapper_close");
          cFormWrapperClose.textContent = "×";
          cFormWrapper.appendChild(cFormWrapperClose);
        }

        let cFormWrapperTitle = document.querySelector(
          ".anatomi_c_form_wrapper_title"
        );
        if (!cFormWrapperTitle) {
          cFormWrapperTitle = document.createElement("div");
          cFormWrapperTitle.classList.add("anatomi_c_form_wrapper_title");
          cFormWrapperTitle.textContent =
            "Dijital Köprü ile Aynı Gün İçinde Ücretsiz e-Faturaya Geçin!";
          cFormWrapper.appendChild(cFormWrapperTitle);
        }

        const cForm = bannerDiv.querySelector(".c-form");
        if (cForm && cFormWrapper) {
          cFormWrapper.appendChild(cForm);
        }

        cFormWrapperClose.addEventListener("click", () => {
          bannerDiv.classList.add("hidden");
        });
      }
      const linkElements = doc.querySelectorAll('link[rel="stylesheet"]');
      linkElements.forEach((link) => {
        const newLink = document.createElement("link");
        newLink.rel = "stylesheet";
        newLink.href = link.href;
        document.head.appendChild(newLink);
      });
      const styleElements = doc.querySelectorAll("style");
      styleElements.forEach((style) => {
        const newStyle = document.createElement("style");
        newStyle.textContent = style.textContent;
        document.head.appendChild(newStyle);
      });
      const scriptElements = doc.querySelectorAll("script[src]");
      scriptElements.forEach((script) => {
        const newScript = document.createElement("script");
        newScript.src = script.src;
        newScript.async = script.async || false;
        newScript.defer = script.defer || false;
        document.head.appendChild(newScript);
      });
      const inlineScripts = doc.querySelectorAll("script:not([src])");
      inlineScripts.forEach((script) => {
        const newScript = document.createElement("script");
        newScript.textContent = script.textContent;
        document.head.appendChild(newScript);
      });
    })
    .catch((error) => {});
};

const dijital_kopru_yonlendirme_popup_init = () => {
  dijital_kopru_yonlendirme_popup_html();
  dijital_kopru_yonlendirme_popup_css();
  dijital_kopru_yonlendirme_popup_js();
};

const dijital_kopru_yonlendirme_popup_condition = () => {
  const notLocation = !window.location.href.includes("dijital-kopru");
  return notLocation;
};

let popupInitialized = false;

setInterval(() => {
  if (popupInitialized) return;

  if (dijital_kopru_yonlendirme_popup_condition()) {
    popupInitialized = true;
    dijital_kopru_yonlendirme_popup_init();
  }
}, 50);
