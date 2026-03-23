const nav_sevgililer_gunu_icon_html = () => {
  const html = `
    <img class="anatomi_sevgililer_gunu_img_d" src="https://i.hizliresim.com/8477izz.png">
    `;
  const targetElement = document.querySelector(
    "#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(10) > div.menu-wrap > div > div.menu-list-kolon > ul:nth-child(4) > li > a",
  );
  const targetElement2 = document.querySelector(
    "#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(2) > div.menu-wrap > div > div.menu-list-kolon > ul:nth-child(1) > li > ul > li:nth-child(2) > a",
  );
  const element = document.querySelector(".anatomi_sevgililer_gunu_img_d");
  if (!targetElement.contains(element) && !targetElement2.contains(element)) {
    targetElement.insertAdjacentHTML("afterbegin", html);
    targetElement2.insertAdjacentHTML("afterbegin", html);
  }
};

const nav_sevgililer_gunu_icon_css = () => {
  const style = `
    <style id="anatomi_sevgililer_gunu_d">
        .anatomi_sevgililer_gunu{
            flex-direction: row !important;
            align-items: center;
            justify-content: center;
            gap: 5px;
        }
        .anatomi_sevgililer_gunu_img_d{
            width: 25px;
            height: 25px;
        }
        .anatomi_sevgililer_gunu span{
            color: #AA011F;
            font-weight: bold;
        }
    </style>

    `;
  const head = document.querySelector("head");
  const css = document.querySelector("#anatomi_sevgililer_gunu_d");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const nav_sevgililer_gunu_icon_js = () => {
  const targetElement = document.querySelector(
    "#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(10) > div.menu-wrap > div > div.menu-list-kolon > ul:nth-child(4) > li > a",
  );
  if (targetElement) {
    targetElement.classList.add("anatomi_sevgililer_gunu");
  }
};

const nav_sevgililer_gunu_icon_init = () => {
  nav_sevgililer_gunu_icon_html();
  nav_sevgililer_gunu_icon_css();
  nav_sevgililer_gunu_icon_js();
};

const nav_sevgililer_gunu_icon_condition = () => {
  const device = window.innerWidth > 768;
  return device;
};

setInterval(() => {
  if (nav_sevgililer_gunu_icon_condition()) {
    nav_sevgililer_gunu_icon_init();
  }
}, 50);
