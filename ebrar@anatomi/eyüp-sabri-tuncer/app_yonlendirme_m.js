const app_yonlendirme_html = () => {
  const html = `
    <div class="anatomi_app_yonlendirme">
    <div class="anatomi_app_yonlendirme_closeBtn"><img class="anatomi_app_yonlendirme_closeImg" src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/est-mobil-uygulama-close.png"/></div>
    <img class="anatomi_app_yonlendirme_logo" src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/est-mobil-uygulama-logo.png"/>
    <p class="anatomi_app_yonlendirme_text">HOSGELDINIZ10 | İlk Alışverişinize Özel %10 İndirim!</p>
    <a class="anatomi_app_yonlendirme_button">Uygulamaya Git</a>
    </div>


    `;
  const element = document.querySelector(".anatomi_app_yonlendirme");
  const targetElement = document.querySelector(
    "#headerNew > div.header.nav-dropdown-has-arrow.logo-left",
  );
  if (!element) {
    targetElement.insertAdjacentHTML("beforebegin", html);
  }
};

const app_yonlendirme_css = () => {
  const style = `
    <style id="anatomi_app_yonlendirme_css">
    .anatomi-app-container {
     display: none !important;
    }
    .anatomi_app_yonlendirme{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #F8F8F8;
    padding: 10px 0px;
    }
    .anatomi_app_yonlendirme_closeBtn{
    background-color: transparent;
    border: none;
    }
    .anatomi_app_yonlendirme_closeImg{
    width: 10px;
    height: 10px;
    }
    .anatomi_app_yonlendirme_logo{
    width: 60px;
    height: 60px;
    }
    .anatomi_app_yonlendirme_text{
    width: 45%;
    font-weight: bold;
    margin: 0px !important;
    }
    .anatomi_app_yonlendirme_button{
    background-color: #264735;
    padding: 10px;
    border-radius: 8px;
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    }
    
    </style>
    `;
  const css = document.querySelector("#anatomi_app_yonlendirme_css");
  const head = document.querySelector("head");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const app_yonlendirme_js = () => {
  const html = document.querySelector("#htmlGlobal");
  if (html) {
    html.setAttribute("style", "margin-top: 0px !important;");
  }
  const button = document.querySelector(".anatomi_app_yonlendirme_button");
  const closeBtn = document.querySelector(".anatomi_app_yonlendirme_closeBtn");
  const box = document.querySelector(".anatomi_app_yonlendirme");

  const userAgent = navigator.userAgent.toLowerCase();

  const iosLink =
    "https://apps.apple.com/us/app/ey%C3%BCp-sabri-tuncer/id1550779142";
  const androidLink =
    "https://play.google.com/store/apps/details?id=com.ticimax.androidbase.eyupsabrituncer";

  if (/iphone|ipad|ipod/.test(userAgent)) {
    button.href = iosLink;
  } else if (/android/.test(userAgent)) {
    button.href = androidLink;
  } else {
    button.href = androidLink;
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      box.style.display = "none";
    });
  }
};

const app_yonlendirme_init = () => {
  app_yonlendirme_html();
  app_yonlendirme_css();
  app_yonlendirme_js();
};

const app_yonlendirme_condition = () => {
  const device = window.innerWidth <= 768;
  return device;
};

setInterval(() => {
  if (app_yonlendirme_condition()) {
    app_yonlendirme_init();
  }
}, 50);
