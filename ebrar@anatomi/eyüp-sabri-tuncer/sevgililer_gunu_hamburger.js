const sevgililer_gunu_hamburger_html = () => {
  const html = `
    <li class="anatomi_sevgililer_gunu">
    <a class="anatomi_sevgililer_gunu_link" href="https://www.eyupsabrituncer.com/sevgililer-gunu-hediyeleri">
    <img class="anatomi_sevgililer_gunu_img" src="https://i.hizliresim.com/8477izz.png"/>
    <p>Sevgililer Günü Hediyeleri</p>
    </a>
    </li>
    `;
  const targetElement = document.querySelector(
    "#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(1)",
  );
  const element = document.querySelector(".anatomi_sevgililer_gunu");
  if (!element) {
    targetElement.insertAdjacentHTML("afterend", html);
  }

  const html2 = `
    <img class="anatomi_sevgililer_gunu_img" src="https://i.hizliresim.com/8477izz.png"/> 
    `;
  const targetElement2 = document.querySelector(
    "#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(3) > div.menu-wrap.active > div > div.menu-list-kolon > ul:nth-child(1) > li > ul > li:nth-child(2) > a",
  );
  const element2 = document.querySelector(".anatomi_sevgililer_gunu_img");
  if (!targetElement2.contains(element2)) {
    targetElement2.insertAdjacentHTML("afterend", html2);
  }
};

const sevgililer_gunu_hamburger_css = () => {
  const style = `
    <style id="sevgililer_gunu_hamburger_css">
    .anatomi_sevgililer_gunu_link{
        display: flex;
        flex-direction: row !important;
        justify-content: flex-start !important;
        align-items: center;
        gap: 5px;
    }
    .anatomi_sevgililer_gunu_img{
      width: 27px;
      height: 27px;
    }
    .anatomi_sevgililer_gunu_link p , .anatomi_sevgililer_gunu_link span{
      margin: 0px !important;
      text-transform: uppercase;
      color: #FA0000;
      font-weight: bold;
    }
    
    
    </style>
    `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};

const sevgililer_gunu_hamburger_js = () => {
  const targetElement2 = document.querySelector(
    "#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(3) > div.menu-wrap.active > div > div.menu-list-kolon > ul:nth-child(1) > li > ul > li:nth-child(2) > a",
  );
  if (targetElement2) {
    targetElement2.classList.add("anatomi_sevgililer_gunu_link");
  }
};

const sevgililer_gunu_hamburger_init = () => {
  sevgililer_gunu_hamburger_html();
  sevgililer_gunu_hamburger_css();
  sevgililer_gunu_hamburger_js();
};

const sevgililer_gunu_hamburger_condition = () => {
  const device = window.innerWidth <= 768;
  return device;
};

setInterval(() => {
  if (sevgililer_gunu_hamburger_condition()) {
    sevgililer_gunu_hamburger_init();
  }
}, 50);
