const adresSticky_html = () => {
    const html = `
      <button class="anatomi-adressSubmit" onClick="clickHandler()">Ödeme Adımına Devam Et</button>
      `;

    const container = document.querySelector(".mobile-order-summary");
    const element = document.querySelector(".anatomi-adressSubmit");
    const location2 =
      document
        .querySelector(
          "#app > div > div > div > main > div > div > div.v-container.v-container--fluid.v-locale--is-ltr.checkout-container > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.step-box--inner > div > div.mt-3 > div"
        )
        ?.getAttribute("data-cy") === "address-inline-form";
    if (!element && container && location2) {
      container.insertAdjacentHTML("beforeend", html);
    }
};

const adresSticky_css = () => {
  const style = `
    <style id="anatomiAdressSticky-css">
    .anatomi-adressSubmit {
      background-color: #2e4635;
      width: 55%;
      height: 45px;
      font-size: 14px;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      color: #fff;
    }

    .anatomi-adressSubmit:disabled {
      background-color: #828282 !important;
    }

    #app > div > div > div > main > div > div > div.v-container.v-container--fluid.v-locale--is-ltr.checkout-container > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.step-box--inner > div > div.mt-3 > div > div > form > div.form-actions {
    display: none !important;
    }
  </style>
      `;

  const head = document.querySelector("head");
  const styleSheet = document.querySelector("#anatomiAdressSticky-css");
  if (!styleSheet) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const adresSticky_js = () => {
  const clickHandler = () => {
    const orjinalButton = document.querySelector(".address-form-submit");
    if (!orjinalButton) return;

    orjinalButton.click();
  };

  window.clickHandler = clickHandler;

  function checkStatus() {
    const button = document.querySelector(".anatomi-adressSubmit");

    if (!button) return;

    const email = document.querySelector(
      "#app > div > div > div > main > div > div > div.v-container.v-container--fluid.v-locale--is-ltr.checkout-container > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.step-box--inner > div > div.buy-fast.pa-4 > div.input-wrapper > div > div > div > div"
    );

    if (!email) return;

    const phone = document.querySelector(
      "#app > div > div > div > main > div > div > div.v-container.v-container--fluid.v-locale--is-ltr.checkout-container > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.step-box--inner > div > div.buy-fast.pa-4 > div.form-field"
    );

    if (!phone) return;

    const addressTitle = document.querySelector(
      "#app > div > div > div > main > div > div > div.v-container.v-container--fluid.v-locale--is-ltr.checkout-container > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.step-box--inner > div > div.mt-3 > div > div > form > div:nth-child(1) > div > div > div"
    );

    if (!addressTitle) return;

    const nameSurname = document.querySelector(
      "#app > div > div > div > main > div > div > div.v-container.v-container--fluid.v-locale--is-ltr.checkout-container > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.step-box--inner > div > div.mt-3 > div > div > form > div:nth-child(2) > div > div > div"
    );

    if (!nameSurname) return;

    const country = document.querySelector(
      "#app > div > div > div > main > div > div > div.v-container.v-container--fluid.v-locale--is-ltr.checkout-container > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.step-box--inner > div > div.mt-3 > div > div > form > div.form-inner-row.row-size-3 > div:nth-child(1) > div > div > div"
    );

    if (!country) return;

    const city = document.querySelector(
      "#app > div > div > div > main > div > div > div.v-container.v-container--fluid.v-locale--is-ltr.checkout-container > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.step-box--inner > div > div.mt-3 > div > div > form > div.form-inner-row.row-size-3 > div:nth-child(2) > div > div > div"
    );

    if (!city) return;

    const district = document.querySelector(
      "#app > div > div > div > main > div > div > div.v-container.v-container--fluid.v-locale--is-ltr.checkout-container > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.step-box--inner > div > div.mt-3 > div > div > form > div.form-inner-row.row-size-3 > div:nth-child(3) > div > div > div"
    );

    if (!district) return;

    const address = document.querySelector(
      "#app > div > div > div > main > div > div > div.v-container.v-container--fluid.v-locale--is-ltr.checkout-container > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.step-box--inner > div > div.mt-3 > div > div > form > div:nth-child(4) > div > div > div"
    );

    if (!address) return;

    const zipCode = document.querySelector(
      "#app > div > div > div > main > div > div > div.v-container.v-container--fluid.v-locale--is-ltr.checkout-container > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.step-box--inner > div > div.mt-3 > div > div > form > div:nth-child(5) > div > div > div"
    );

    if (!zipCode) return;

    let emailVerify = false;
    let phoneVerify = false;
    let addressTitleVerify = false;
    let nameSurnameVerify = false;
    let countryVerify = false;
    let cityVerify = false;
    let districtVerify = false;
    let addressVerify = false;
    let zipCodeVerify = false;

    if (
      email.classList.contains("v-field--active") &&
      email.classList.contains("v-field--dirty") &&
      !email.classList.contains("v-field--error")
    )
      emailVerify = true;
    if (!phone.classList.contains("error-input")) phoneVerify = true;
    if (
      addressTitle.classList.contains("v-field--active") &&
      addressTitle.classList.contains("v-field--dirty") &&
      !addressTitle.classList.contains("v-field--error")
    )
      addressTitleVerify = true;
    if (
      nameSurname.classList.contains("v-field--active") &&
      nameSurname.classList.contains("v-field--dirty") &&
      !nameSurname.classList.contains("v-field--error")
    )
      nameSurnameVerify = true;
    if (
      country.classList.contains("v-field--active") &&
      country.classList.contains("v-field--dirty") &&
      !country.classList.contains("v-field--error")
    )
      countryVerify = true;
    if (
      city.classList.contains("v-field--active") &&
      city.classList.contains("v-field--dirty") &&
      !city.classList.contains("v-field--error")
    )
      cityVerify = true;
    if (
      district.classList.contains("v-field--active") &&
      district.classList.contains("v-field--dirty") &&
      !district.classList.contains("v-field--error")
    )
      districtVerify = true;
    if (
      address.classList.contains("v-field--active") &&
      address.classList.contains("v-field--dirty") &&
      !address.classList.contains("v-field--error")
    )
      addressVerify = true;
    if (
      zipCode.classList.contains("v-field--active") &&
      zipCode.classList.contains("v-field--dirty") &&
      !zipCode.classList.contains("v-field--error")
    )
      zipCodeVerify = true;

    if (
      emailVerify &&
      phoneVerify &&
      addressTitleVerify &&
      nameSurnameVerify &&
      countryVerify &&
      cityVerify &&
      districtVerify &&
      addressVerify &&
      zipCodeVerify
    ) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }

  function removeStatus() {
    const location = document.querySelector(".checkout-page-mobile");
    const location2 =
      document
        .querySelector(
          "#app > div > div > div > main > div > div > div.v-container.v-container--fluid.v-locale--is-ltr.checkout-container > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.step-box--inner > div > div.mt-3 > div"
        )
        ?.getAttribute("data-cy") === "address-inline-form";

    if (!location2) {
      const button = document.querySelector(".anatomi-adressSubmit");
      if (button) {
        button.remove();
      }
    }
  }

  setInterval(checkStatus, 50);
  setInterval(removeStatus, 50);

};

const adresSticky_init = () => {
  adresSticky_html();
  adresSticky_css();
  adresSticky_js();
};

const adresSticky_conditions = () => {
  const adresSticky = !document.querySelector(".anatomi-adressSubmit");
  const phone = matchMedia("(max-width: 768px)").matches;
  const desktop = matchMedia("(min-width: 768px)").matches;
  const location = document.querySelector(".checkout-page-mobile");
  return adresSticky && phone && location;
};

setInterval(() => {
  if (adresSticky_conditions()) {
    adresSticky_init();
  }
}, 50);
window.addEventListener("load", () => {
  if (adresSticky_conditions()) {
    adresSticky_init();
  }
});

window.addEventListener("beforeunload", () => {
  if (adresSticky_conditions()) {
    adresSticky_init();
  }
});

window.addEventListener("popstate", () => {
  if (adresSticky_conditions()) {
    adresSticky_init();
  }
});

window.addEventListener("hashchange", () => {
  if (adresSticky_conditions()) {
    adresSticky_init();
  }
});

window.addEventListener("pagehide", () => {
  if (adresSticky_conditions()) {
    adresSticky_init();
  }
});

window.addEventListener("pageshow", () => {
  if (adresSticky_conditions()) {
    adresSticky_init();
  }
});

console.log("anatomi - adresSticky.js yüklendi");

console.log("anatomi - adresSticky.js yüklendi");
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


  const testID = "1004169214";
  const state = "varyasyon";
  const url = "checkout";
  const className = "anatomi-address";
  const divID = null;

  addOrUpdateTestState(testID, state, url, className, divID);
}, 1000);