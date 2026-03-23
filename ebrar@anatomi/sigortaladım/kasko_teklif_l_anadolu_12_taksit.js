const taksitBelirtme_html = () => {};

const taksitBelirtme_css = () => {
  const style = `
    <style id="anatomiTaksitInfo-css">
    .anatomi-taksit-info {
    width: 80px;
    height: 80px;
    object-fit: contain;
    position: absolute;
    top: -8%;
    right: -2%;
    z-index: 9;
    }

    .offer-item-container {
      position: relative;
    }

    @media (max-width: 768px) {
      .anatomi-taksit-info {
        width: 60px;
        height: 60px;
        top: -5%;
        right: -4%;
      }
    }
  </style>
    `;

  const head = document.querySelector("head");
  const styleSheet = document.querySelector("#anatomiTaksitInfo-css");
  if (!styleSheet) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const taksitBelirtme_js = () => {
  function findElementByText() {
    const companies = ["Anadolu Sigorta"];

    const elements = document.querySelectorAll(
      ".offer-item-container .logo > div > .d-none.d-md-block"
    );

    if (!elements) return;

    elements.forEach((element) => {
      const text = element.textContent.trim();
      const textInsurance = element.parentElement
        .querySelector(".insurance-name")
        .textContent.trim();

      if (
        companies.find((company) => text.includes(company)) &&
        text === "Anadolu Sigorta" &&
        textInsurance !== "Pert Kasko"
      ) {
        const parent = element.closest(".offer-item-container");
        if (!parent) return;
        if (parent.querySelector(".anatomi-taksit-info")) return;
        const taksitInfo = document.createElement("img");
        taksitInfo.className = "anatomi-taksit-info";
        taksitInfo.src =
          "https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/sigortalaim_anatomi_12_taksit.png";
        parent.insertAdjacentElement("afterbegin", taksitInfo);
      }
    });
  }

  const interval = setInterval(() => {
    findElementByText();

    const anadoluDone = document.querySelector(
      ".offer-item-container .anatomi-taksit-info[src*='12_taksit']"
    );
    if (anadoluDone) clearInterval(interval);
  }, 500);
};

const taksitBelirtme_init = () => {
  taksitBelirtme_html();
  taksitBelirtme_css();
  taksitBelirtme_js();
};

const taksitBelirtme_conditions = () => {
  const element = document
    .querySelector("h2.d-flex.justify-content-center")
    ?.textContent.toLowerCase()
    .includes("kasko");
  const phone = matchMedia("(max-width: 768px)").matches;
  const desktop = matchMedia("(min-width: 768px)").matches;
  return element && (phone || desktop);
};

setInterval(() => {
  if (taksitBelirtme_conditions()) {
    taksitBelirtme_init();
  }
}, 50);
