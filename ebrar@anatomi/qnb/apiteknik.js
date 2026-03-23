const apiTeknik_html = () => {};

const apiTeknik_css = () => {
  const style = `
      <style id="anatomiAPITeknik-css">
    .anatomi-menu-item a{
      width: fit-content;
      color: #1f2152;
      font-size: 12px !important;
    }
  </style>
        `;

  const head = document.querySelector("head");
  const styleSheet = document.querySelector("#anatomiAPITeknik-css");
  if (!styleSheet) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const apiTeknik_js = () => {
  function apiTeknikInsert() {
    const parent = document.querySelector(
      "body > header > div.header-top.uk-border-bottom.uk-padding-small-vertical.uk-position-relative.uk-position-z-index.uk-visible\\@l.notranslate > div > div > div > ul"
    );

    if (!parent) return;

    const alreadyExists = parent.querySelector(".anatomi-menu-item");
    if (alreadyExists) return;

    const newElement = document.createElement("li");
    newElement.className = "anatomi-menu-item";
    newElement.innerHTML = `
      <a href="https://www.qnbesolutions.com.tr/destek/api-teknik" class="anatomi-menu-link">
        API Destek
      </a>
    `;
    parent.appendChild(newElement);
  }
  apiTeknikInsert();
};

const apiTeknik_init = () => {
  apiTeknik_html();
  apiTeknik_css();
  apiTeknik_js();
};

const apiTeknik_conditions = () => {
  const phone = matchMedia("(max-width: 768px)").matches;
  const desktop = matchMedia("(min-width: 768px)").matches;
  return desktop;
};

setInterval(() => {
  if (apiTeknik_conditions()) {
    apiTeknik_init();
  }
}, 50);

/******************************* EVENT TRACKING *******************************/

setTimeout(() => {
  function addOrUpdateTestState(testID, state, URL, className, divID) {
    if (URL && !window.location.href.includes(URL)) return;
    let element = null;
    let element2 = null;
    if (className) element = document.querySelector(`.${className}`);
    if (divID) element2 = document.querySelector(`#${divID}`);
    if (element || element2) return;


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


  const testID = "1004173517";
  const state = "varyasyon";
  const url = "/";
  const className =  "uk-navbar-container";
  const divID = null;
  

  addOrUpdateTestState(testID, state, url, className, divID);
}, 1000);