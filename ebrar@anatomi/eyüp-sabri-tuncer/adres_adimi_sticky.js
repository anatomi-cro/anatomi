const adresSticky_html = () => {
    const html = `
      <button class="anatomi-adressSubmit" onClick="clickHandler()">Ödeme Adımına Devam Et</button>
      `;

    const container = document.querySelector(".mobile-order-summary");
    const element = document.querySelector(".anatomi-adressSubmit");
    const location2 =
      document.querySelector("#app > div > div > div > main > div > div > div.v-container.v-container--fluid.v-locale--is-ltr.checkout-container > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.step-box--inner > div > div:nth-child(2) > div")?.getAttribute("data-cy") === "address-inline-form";
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


  const selectors = {
    email: "#app > div > div > div > main > div > div > div.v-container.v-container--fluid.v-locale--is-ltr.checkout-container > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.step-box--inner > div > div.buy-fast.pa-4 > div.input-wrapper > div > div > div > div",
    phone: "#app > div > div > div > main > div > div > div.v-container.v-container--fluid.v-locale--is-ltr.checkout-container > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.step-box--inner > div > div.buy-fast.pa-4 > div.form-field",
    addressTitle: "#app > div > div > div > main > div > div > div.v-container.v-container--fluid.v-locale--is-ltr.checkout-container > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.step-box--inner > div > div:nth-child(2) > div > div > form > div:nth-child(1) > div > div.v-input__control > div",
    nameSurname: "#app > div > div > div > main > div > div > div.v-container.v-container--fluid.v-locale--is-ltr.checkout-container > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.step-box--inner > div > div:nth-child(2) > div > div > form > div:nth-child(2) > div > div.v-input__control > div",
    country: "#app > div > div > div > main > div > div > div.v-container.v-container--fluid.v-locale--is-ltr.checkout-container > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.step-box--inner > div > div:nth-child(2) > div > div > form > div.form-inner-row.row-size-3 > div:nth-child(1) > div > div > div",
    city: "#app > div > div > div > main > div > div > div.v-container.v-container--fluid.v-locale--is-ltr.checkout-container > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.step-box--inner > div > div:nth-child(2) > div > div > form > div.form-inner-row.row-size-3 > div:nth-child(2) > div > div > div",
    address: "#app > div > div > div > main > div > div > div.v-container.v-container--fluid.v-locale--is-ltr.checkout-container > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.step-box--inner > div > div:nth-child(2) > div > div > form > div:nth-child(4) > div > div.v-input__control > div",
    zipCode: "#app > div > div > div > main > div > div > div.v-container.v-container--fluid.v-locale--is-ltr.checkout-container > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.step-box--inner > div > div:nth-child(2) > div > div > form > div:nth-child(5) > div > div > div"
  };

  const elements = {};
  for (const key in selectors) {
    elements[key] = document.querySelector(selectors[key]);
    if (!elements[key]) {
      return; 
    }
  }

  let emailVerify = elements.email.classList.contains("v-field--active") &&
    elements.email.classList.contains("v-field--dirty") &&
    !elements.email.classList.contains("v-field--error");

  let phoneVerify = !elements.phone.classList.contains("error-input");

  let addressTitleVerify = elements.addressTitle.classList.contains("v-field--active") &&
    elements.addressTitle.classList.contains("v-field--dirty") &&
    !elements.addressTitle.classList.contains("v-field--error");

  let nameSurnameVerify = elements.nameSurname.classList.contains("v-field--active") &&
    elements.nameSurname.classList.contains("v-field--dirty") &&
    !elements.nameSurname.classList.contains("v-field--error");

  let countryVerify = elements.country.classList.contains("v-field--active") &&
    elements.country.classList.contains("v-field--dirty") &&
    !elements.country.classList.contains("v-field--error");

  let cityVerify = elements.city.classList.contains("v-field--active") &&
    elements.city.classList.contains("v-field--dirty") &&
    !elements.city.classList.contains("v-field--error");

  let addressVerify = elements.address.classList.contains("v-field--active") &&
    elements.address.classList.contains("v-field--dirty") &&
    !elements.address.classList.contains("v-field--error");

  let zipCodeVerify = elements.zipCode.classList.contains("v-field--active") &&
    elements.zipCode.classList.contains("v-field--dirty") &&
    !elements.zipCode.classList.contains("v-field--error");

  if (
    emailVerify &&
    phoneVerify &&
    addressTitleVerify &&
    nameSurnameVerify &&
    countryVerify &&
    cityVerify &&
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
      document.querySelector("#app > div > div > div > main > div > div > div.v-container.v-container--fluid.v-locale--is-ltr.checkout-container > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div.step-box--inner > div > div:nth-child(2) > div")?.getAttribute("data-cy") === "address-inline-form";

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
},500);


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