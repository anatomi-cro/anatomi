const hamburger_indirim_one_cikarma_html = () => {
  const html = `
    <li class="anatomi_cok_arananlar">
    <div class="anatomi_cok_arananlar_title">ÇOK ARANANLAR</div>
    <div>
    <a href="https://www.istanbulticaret.com/maxeo" class="anatomi_cok_arananlar_item">MAXEO</a>
    <a href="https://www.istanbulticaret.com/goodyear" class="anatomi_cok_arananlar_item">GOODYEAR</a>
    <a href="https://www.istanbulticaret.com/3m" class="anatomi_cok_arananlar_item">3M</a>
    </div>
    </li>

    `;
  const element = document.querySelector(".anatomi_cok_arananlar");
  const targetElement = document.querySelector(
    "#mobile-menu-564 > div.drawer-body > nav:nth-child(1) > ul"
  );
  if (!element) {
    targetElement.insertAdjacentHTML("afterbegin", html);
  }

  const html2 = `
    <li class="anatomi_indirimli_urunler">
    <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/istanbul-ticaret-indirim-icon-hm.png"></img>
    <a href="https://www.istanbulticaret.com/indirim-urunleri" class="anatomi_indirimli_urunler_title">İNDİRİM</a>
    </li>
    `;
  const element2 = document.querySelector(".anatomi_indirimli_urunler");
  const targetElement2 = document.querySelector(
    "#mobile-menu-564 > div.drawer-body > nav:nth-child(1) > ul"
  );
  if (!element2) {
    targetElement2.insertAdjacentHTML("beforeend", html2);
  }

  const html3 = `
    <li class="anatomi_cok_satanlar">
    <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/istanbul-ticaret-cok-satanlar-icon-hm.png"></img>
    <a href="https://www.istanbulticaret.com/cok-satanlar" class="anatomi_cok_satanlar_title">ÇOK SATANLAR</a>
    </li>
    `;
  const element3 = document.querySelector(".anatomi_cok_satanlar");
  const targetElement3 = document.querySelector(
    "#mobile-menu-564 > div.drawer-body > nav:nth-child(1) > ul"
  );
  if (!element3) {
    targetElement3.insertAdjacentHTML("beforeend", html3);
  }

  const html4 = `
    <li class="anatomi_siparis_takip">
    <a herf="https://www.istanbulticaret.com/siparis-takip" class="anatomi_siparis_takip_title">SİPARİŞ TAKİP</a>
    </li>
    `;
  const element4 = document.querySelector(".anatomi_siparis_takip");
  const targetElement4 = document.querySelector(
    "#mobile-menu-564 > div.drawer-body > nav:nth-child(1) > ul"
  );
  if (!element4) {
    targetElement4.insertAdjacentHTML("beforeend", html4);
  }
};

const hamburger_indirim_one_cikarma_css = () => {
  const style = `
      <style id="anatomi_hamburger_indirim_one_cikarma_css">    
      .anatomi_ul li {
        margin-top: 10px;
      }
      .anatomi_ul li > div {
          text-transform: uppercase;
      }
      .anatomi_ul li > div > span.ti-arrow-right {
          font-size: 20px;
      }
      .menu-img {
          display: none !important;
      }
      .anatomi_cok_arananlar, .anatomi_indirimli_urunler, .anatomi_cok_satanlar, .anatomi_siparis_takip {
        padding: 0px 10px;
      }
      .anatomi_indirimli_urunler, .anatomi_cok_satanlar, .anatomi_siparis_takip {
       font-size: 15px;
        height: 55px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px solid #80808021;
      }
      .anatomi_cok_arananlar_title {
        padding: 15px 0px;
        font-size: 14px;
      }
      .anatomi_cok_arananlar_item {
        background: linear-gradient(to bottom, #E87926 0%, #E87926 30%, #B74C13 100%);
        color: white;
        background-color: orange;
        padding: 5px 15px;
        border-radius: 5px;
      }
      .anatomi_indirimli_urunler_title {
          color: #ED3800;
      }
      .anatomi_cok_satanlar_title {
        color: #E87926;
      }
      .anatomi_cok_satanlar img , .anatomi_indirimli_urunler img {
        width: 20px;
        margin-right: 5px;
      }
      #cct-open-btn, #ls-openButton{
        z-index: 9 !important;
      }
      </style>
    `;
  const css = document.querySelector(
    "#anatomi_hamburger_indirim_one_cikarma_css"
  );
  const head = document.querySelector("head");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const hamburger_indirim_one_cikarma_js = () => {
  const ul = document.querySelector(
    "#mobile-menu-564 > div.drawer-body > nav:nth-child(1) > ul"
  );
  if (ul) {
    ul.classList.add("anatomi_ul");
  }
  const indirimliUrunler = document.querySelector(
    "#mobile-menu-564 > div.drawer-body > nav:nth-child(1) > ul > li:nth-child(2)"
  );
  if (indirimliUrunler) {
    indirimliUrunler.style.display = "none";
  }
  const secondNav = document.querySelector(
    "#mobile-menu-564 > div.drawer-body > nav.w-100.bg-light.mobile-bottom-menu.mt-2"
  );
  if (secondNav) {
    secondNav.style.display = "none";
  }
};

const hamburger_indirim_one_cikarma_init = () => {
  hamburger_indirim_one_cikarma_html();
  hamburger_indirim_one_cikarma_css();
  hamburger_indirim_one_cikarma_js();
};

const hamburger_indirim_one_cikarma_condition = () => {
  const device = window.innerWidth <= 768;
  return device;
};

setInterval(() => {
  if (hamburger_indirim_one_cikarma_condition()) {
    hamburger_indirim_one_cikarma_init();
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
    if (!element && !element2) return;

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

  const testID = "1004176831";
  const state = "varyasyon";
  const url = "/";
  const className = "drawer-wrapper closable-active active";
  const divID = "mobile-menu-564";

  addOrUpdateTestState(testID, state, url, className, divID);
}, 1000);
