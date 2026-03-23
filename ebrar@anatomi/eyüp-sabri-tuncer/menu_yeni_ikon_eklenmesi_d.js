const menu_yeni_ikon_eklenmesi_html = () => {
  const html1 = `
    <img class="anatomi_yeni_disMacunu" src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/est-yeni-disMacunu-icon.png"/>

    `;

  const targetElement = document.querySelector(
    "#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(2) > div.menu-wrap > div > div.menu-list-kolon > ul:nth-child(1) > li > ul > li:nth-child(1) > a",
  );
  const element = document.querySelector(".anatomi_yeni_disMacunu");
  if (!element) {
    targetElement.insertAdjacentHTML("beforeend", html1);
  }

  const html2 = `
    <img class="anatomi_yeni_disMacunu2" src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/est-yeni-disMacunu-icon.png"/>
    `;

  const targetElement2 = document.querySelector(
    "#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(2) > div.menu-wrap > div > div.menu-list-kolon > ul:nth-child(1) > li > ul > li:nth-child(2) > a",
  );
  const element2 = document.querySelector(".anatomi_yeni_disMacunu2");
  if (!element2) {
    targetElement2.insertAdjacentHTML("beforeend", html2);
  }
};

const menu_yeni_ikon_eklenmesi_css = () => {
  const style = `
  <style id="anatomi_menu_yeni_ikon_eklenmesi_css">
   .anatomi_yeni_disMacunu_container {
      flex-direction: row !important;
      align-items: center;
      gap: 10px !important;
   }
   .anatomi_yeni_disMacunu, .anatomi_yeni_disMacunu2 {
      height: 20px;
      width: 20px;
    }
  </style>
   
    `;
  const css = document.querySelector("#anatomi_menu_yeni_ikon_eklenmesi_css");
  const head = document.querySelector("head");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const menu_yeni_ikon_eklenmesi_js = () => {
  const firstLi = document.querySelector(
    "#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(2) > div.menu-wrap > div > div.menu-list-kolon > ul:nth-child(1) > li > ul > li:nth-child(1) > a",
  );
  const secondLi = document.querySelector(
    "#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(2) > div.menu-wrap > div > div.menu-list-kolon > ul:nth-child(1) > li > ul > li:nth-child(2) > a",
  );
  if (firstLi && secondLi) {
    firstLi.classList.add("anatomi_yeni_disMacunu_container");
    secondLi.classList.add("anatomi_yeni_disMacunu_container");
  }
};

const menu_yeni_ikon_eklenmesi_init = () => {
  menu_yeni_ikon_eklenmesi_html();
  menu_yeni_ikon_eklenmesi_css();
  menu_yeni_ikon_eklenmesi_js();
};

const menu_yeni_ikon_eklenmesi_condition = () => {
  return true;
};

setInterval(() => {
  if (menu_yeni_ikon_eklenmesi_condition()) {
    menu_yeni_ikon_eklenmesi_init();
  }
}, 50);
