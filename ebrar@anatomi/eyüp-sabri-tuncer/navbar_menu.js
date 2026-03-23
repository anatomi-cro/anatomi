const navbar_menu_html = () => {
  const html = `
    <div class="anatomi_navbar_menu_container">
        <ul>
        <li>
        <a class="anatomi_ana_sayfa" href="/">
        <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/est-navbar-home.png"/>
        <p>Ana Sayfa</p>
        </a>
        </li>

         <li>
        <a class="anatomi_firsat" href="https://www.eyupsabrituncer.com/secili-urunlerde-30a-varan-indirim">
        <img class="anatomi_firsat_img" src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/est-navbar-firsat.png"/>
        <p>Fırsat</p>
        </a>
        </li>

        <div class="anatomi_sepetim_container">
        <li>
        <a class="anatomi_sepetim_link" href="/sepetim.aspx">
        <div class="anatomi_sepetim">
        <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/est-navbar-cart.png"/>
        </div>
        <p>Sepetim</p>
        </a>
        </li>
        </div>
       
         <li>
        <a class="anatomi_favorilerim" href="/Hesabim.aspx/#/Favorilerim)">
        <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/est-navbar-favori.png"/>
        <p>Favorilerim</p>
        </a>
        </li>

         <li>
        <a class="anatomi_uyeGiris" href="javascript:void(0)" onclick="GirisKontrol(0)">
        <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/est-navbar-u%CC%88yegirisi.png"/>
        <p>Üye Girişi</p>
        </a>
        </li>
       
        </ul>
    </div>
    `;
  const targetElement = document.querySelector("#bodyGlobal > div.bottomHead");
  const element = document.querySelector(".anatomi_navbar_menu_container");
  if (!element) {
    targetElement.insertAdjacentHTML("beforebegin", html);
  }
};

const navbar_menu_css = () => {
  const css = `
    <style id="anatomi_navbar_menu_css">
    .bottomHead{
        display: none !important;
    }
    .anatomi_navbar_menu_container{
        position: fixed;
        bottom: -2px;
        left: 0;
        width: 100%;
        background-color: #fff;
        z-index: 100;
        display: flex;
        height: 70px;
    }
    .anatomi_navbar_menu_container ul{
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 10px;
        width: 100%;

    }
        .anatomi_navbar_menu_container ul li {
            width: 72px;
        }
    .anatomi_navbar_menu_container ul li a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
     .anatomi_navbar_menu_container ul li a p{
         margin: 0;
     }

    .anatomi_navbar_menu_container img{
       width: 25px;
    }
    .anatomi_sepetim_container{
    position: relative;
    bottom: 30px;
    background-color: #fff;
    border-radius: 50%;
    height: 70px;
    width: 72px;
    }
    .anatomi_sepetim{
        background-color: #264734;
        padding: 15px;
        border-radius: 50%;
        margin: 10px 10px 5px 10px;
    }
    .anatomi_firsat{
        gap: 2px !important;
    }
    .anatomi_firsat_img{
        width: 30px !important;
    }
    </style>
    `;
  const head = document.querySelector("head");
  const styleSheet = document.querySelector("#anatomi_navbar_menu_css");
  if (!styleSheet) {
    head.insertAdjacentHTML("beforeend", css);
  }
};

const navbar_menu_js = () => {
  const originalEl = document.querySelector(
    "#bodyGlobal > div.bottomHead > ul > li.welcC > a > span",
  );

  const customLinkEl = document.querySelector(".anatomi_uyeGiris");
  const customTextEl = document.querySelector(".anatomi_uyeGiris p");

  if (!originalEl || !customLinkEl || !customTextEl) return;

  const updateUserArea = () => {
    const text = originalEl.textContent.trim().toLowerCase();

    if (text.includes("hesabım")) {
      customTextEl.textContent = "Hesabım";
      customLinkEl.setAttribute("href", "/hesabim.aspx");

      customLinkEl.removeAttribute("onclick");
    } else {
      customTextEl.textContent = "Üye Girişi";

      customLinkEl.setAttribute("href", "javascript:void(0)");
      customLinkEl.setAttribute("onclick", "GirisKontrol(0)");
    }
  };

  updateUserArea();

  const observer = new MutationObserver(updateUserArea);
  observer.observe(originalEl, {
    childList: true,
    subtree: true,
    characterData: true,
  });
};
const navbar_menu_init = () => {
  navbar_menu_html();
  navbar_menu_css();
  navbar_menu_js();
};

const navbar_menu_condition = () => {
  const device = window.innerWidth <= 768;
  return device;
};

setInterval(() => {
  if (navbar_menu_condition()) {
    navbar_menu_init();
  }
}, 50);
