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
  console.log("POPUP JS ÇALIŞTI");

  const dkView = window.location.href.includes("dijital-kopru");
  console.log("DK VIEW:", dkView);

  if (dkView) {
    localStorage.setItem("dk-view", "true");
    console.log("LOCAL STORAGE SET EDİLDİ");
  }

  const fullName = document.querySelector("#fullName");
  const phoneNumber = document.querySelector("#phone");
  const email = document.querySelector("#email");

  if (fullName && phoneNumber && email) {
    localStorage.setItem("fullName", fullName.value.trim());
    localStorage.setItem("phoneNumber", phoneNumber.value.trim());
    localStorage.setItem("email", email.value.trim());

    const form = fullName.closest("form");

    if (form && !form.dataset.storageListenerAdded) {
      form.addEventListener("input", (e) => {
        if (e.target.id === "fullName") {
          localStorage.setItem("fullName", e.target.value.trim());
        }

        if (e.target.id === "phone") {
          localStorage.setItem("phoneNumber", e.target.value.trim());
        }

        if (e.target.id === "email") {
          localStorage.setItem("email", e.target.value.trim());
        }
      });

      form.dataset.storageListenerAdded = "true";
    }
  }

  fetch("https://www.qnbesolutions.com.tr/dijital-kopru")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      if (document.querySelector(".anatomi_section_contact_form")) return;
      if (window.location.pathname.includes("dijital-kopru")) return;

      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "text/html");
      const bannerDiv = doc.querySelector(".section-contact-form");
      if (bannerDiv) {
        /* APPEND CHILD */
        document.body.appendChild(bannerDiv);
        bannerDiv.classList.add("anatomi_section_contact_form");

        const fullName = bannerDiv.querySelector("#fullName");
        const phoneNumber = bannerDiv.querySelector("#phone");
        const email = bannerDiv.querySelector("#email");

        if (fullName && phoneNumber && email) {
          fullName.value = localStorage.getItem("fullName") || "";
          fullName.style.color = "black";
          phoneNumber.value = localStorage.getItem("phoneNumber") || "";
          phoneNumber.style.color = "black";
          email.value = localStorage.getItem("email") || "";
          email.style.color = "black";
        }

        let cFormWrapper = document.querySelector(".anatomi_c_form_wrapper");
        if (!cFormWrapper) {
          cFormWrapper = document.createElement("div");
          cFormWrapper.classList.add("anatomi_c_form_wrapper");
          bannerDiv.appendChild(cFormWrapper);
        }

        let cFormWrapperClose = document.querySelector(
          ".anatomi_c_form_wrapper_close",
        );
        if (!cFormWrapperClose) {
          cFormWrapperClose = document.createElement("button");
          cFormWrapperClose.classList.add("anatomi_c_form_wrapper_close");
          cFormWrapperClose.textContent = "×";
          cFormWrapper.appendChild(cFormWrapperClose);
        }

        document.addEventListener("click", (e) => {
          if (e.target.closest(".anatomi_c_form_wrapper_close")) {
            localStorage.setItem("popup-close", true);
          }
        });

        let cFormWrapperTitle = document.querySelector(
          ".anatomi_c_form_wrapper_title",
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
  const device = window.innerWidth > 768;
  const popupWorks = localStorage.getItem("popup-close") === "true";
  const dkView = localStorage.getItem("dk-view") === "true";
  const dk = window.location.href.includes("dijital-kopru");
  return device && !popupWorks && (dkView || dk);
};

let popupInitialized = false;

setInterval(() => {
  if (popupInitialized) return;

  if (dijital_kopru_yonlendirme_popup_condition()) {
    popupInitialized = true;
    dijital_kopru_yonlendirme_popup_init();
  }
}, 50);

/******************************* EVENT TRACKING *******************************/

setTimeout(() => {
  function addOrUpdateTestState(testID, state, URL, className, divID) {
    if (URL && !window.location.href.includes(URL)) return;
    let element = null;
    if (className) element = document.querySelector(`.${className}`);
    if (!element && divID) element = document.querySelector(`#${divID}`);
    if (className && !element) return;

    if (typeof Storage === "undefined") {
      console.error("Session storage is not supported in this browser.");
      return;
    }

    const stateKey = `anatomiTestState_${testID}`;
    const idKey = `anatomiTestID_${testID}`;

    sessionStorage.setItem(stateKey, state);
    sessionStorage.setItem(idKey, testID);

    return { stateKey, idKey };
  }

  const testID = "1004185771";
  const state = "varyasyon";
  const url = "/";
  const className = "uk-navbar-container";
  const divID = null;

  addOrUpdateTestState(testID, state, url, className, divID);
}, 1000);
