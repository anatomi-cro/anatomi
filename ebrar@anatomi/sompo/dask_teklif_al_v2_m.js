let popupAlreadyOpened = false; 

const dask_teklif_al_m_html = () => {
  const html = `
    <div id="anatomi-dask-popup" class="anatomi-dask-popup hidden">
      <div class="anatomi-popup-content">
        <span class="anatomi-close-btn">&times;</span>
        <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/sompo-dask-icon.png" />
        <h3>DASK Fiyatının tüm şirketlerde aynı olduğunu biliyor musunuz?</h3>
        <p>Aynı fiyata, anlaşmalı kartlara <span>3 taksit imkanı</span> ile hemen satın alın.</p>
        <button class="anatomi-satinAl-btn">Satın Al</button>
      </div>
    </div>
  `;
  if (!document.querySelector("#anatomi-dask-popup")) {
    document.body.insertAdjacentHTML("beforeend", html);
  }
};

const dask_teklif_al_m_css = () => {
  const style = `
    <style id="anatomi_dask_popup_style">
      .anatomi-dask-popup {
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.6);
        display: flex; justify-content: center; align-items: center;
        z-index: 9999;
      }
      .anatomi-dask-popup.hidden { display: none; }
      .anatomi-popup-content {
        background: #fff;
        padding: 20px 30px;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        position: relative;
        max-width: 400px;
        width: 90%;
      }
      .anatomi-popup-content img { width: 60px; }
      .anatomi-popup-content h3 { margin-bottom: 10px; color: #B61638; }
      .anatomi-popup-content p { margin-bottom: 20px; line-height: 25px; }
      .anatomi-popup-content p span { color: #22A314; font-weight: bold; }
      .anatomi-satinAl-btn {
        width: 100%;
        background-color: #B61638;
        color: white;
        border: none;
        display: block;
        padding: 10px 20px;
        border-radius: 20px;
        cursor: pointer;
        text-decoration: none;
      }
      .anatomi-close-btn {
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 40px;
        cursor: pointer;
      }
    </style>
  `;
  if (!document.querySelector("#anatomi_dask_popup_style")) {
    document.head.insertAdjacentHTML("beforeend", style);
  }
};

const dask_teklif_al_m_js = () => {
  if (popupAlreadyOpened) return; 
  popupAlreadyOpened = true;

  setTimeout(() => {
    const popup = document.querySelector("#anatomi-dask-popup");
    if (popup) popup.classList.remove("hidden");
  }, 10000);

  document.addEventListener("click", (e) => {
    const popup = document.querySelector("#anatomi-dask-popup");

    if (e.target.classList.contains("anatomi-close-btn")) {
      if (popup) popup.classList.add("hidden");
    }

    if (e.target.classList.contains("anatomi-satinAl-btn")) {
      const orjBtn = document.querySelector(
        "body > main > div.content > div.offer > div.offer__content > div > div > div.offer__content__pricing-table__row.order-2 > div.offer__content__pricing-table__col.-button-bar > button"
      );
      if (orjBtn) orjBtn.click();
      if (popup) popup.classList.add("hidden");
    }
  });
};

const dask_teklif_al_m_init = () => {
  if (!popupAlreadyOpened) {
    dask_teklif_al_m_html();
    dask_teklif_al_m_css();
    dask_teklif_al_m_js();
  }
};

const dask_teklif_al_m_condition = () => {
  const loaderWrapper = document.querySelector(".loader-wrapper");
  const device = window.innerWidth <= 768;
  const urlIncludesOffer = window.location.href.includes("offer");
  const urlExcludeConf = window.location.href.includes("confirmation");
  return device && !loaderWrapper && urlIncludesOffer && !urlExcludeConf;
};

let previousUrl = "";
setInterval(() => {
  const currentUrl = window.location.href;

  if (currentUrl !== previousUrl) {
    previousUrl = currentUrl;
    const popup = document.querySelector("#anatomi-dask-popup");
    if (popup && !currentUrl.includes("offer")) popup.remove();
  }

  
  if (!popupAlreadyOpened && dask_teklif_al_m_condition()) {
    dask_teklif_al_m_init();
  }
}, 500);


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


  const testID = "1004172944";
  const state = "orjinal";
  const url = "varyasyon";
  const className =  "";
  const divID = null;

  addOrUpdateTestState(testID, state, url, className, divID);
}, 1000);