const app_yonlendirme_html = () => {
  const html = `
  <div class="anatomi_app_yonlendirme">
  <img class="anatomi_app_yonlendirme_qr" src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/est-mobil-uygulama-qr.svg"/>
  <p class="anatomi_app_yonlendirme_text">HOSGELDINIZ10 | İlk Alışverişinize Özel %10 İndirim!</p>
  </div>
  `;
  const element = document.querySelector(".anatomi_app_yonlendirme");
  const targetElement = document.querySelector("#bodyGlobal");
  if (!element) {
    targetElement.insertAdjacentHTML("beforebegin", html);
  }
};

const app_yonlendirme_css = () => {
  const style = `
   <style id="anatomi_app_yonlendirme_css">
  .anatomi_app_yonlendirme {
    position: fixed;
    right: -210px;
    bottom: 20px;
    display: flex;
    align-items: center;
    background-color: #264735;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.4s ease;
    width: 350px;
    height: 140px;
    z-index: 9999;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .anatomi_app_yonlendirme:hover {
    padding: 10px 10px;
    right: 0px;
  }

  .anatomi_app_yonlendirme_qr {
    width: 120px;
    height: 120px;
    padding: 10px;
    margin: 0px 20px 0px 10px;
    background-color: white;
    border-radius: 8px;
  }

  .anatomi_app_yonlendirme_text {
  color: #fff;
  font-size: 18px;  
}

  </style>
  `;
  const css = document.querySelector("#anatomi_app_yonlendirme_css");
  const head = document.querySelector("head");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const app_yonlendirme_js = () => {};

const app_yonlendirme_init = () => {
  app_yonlendirme_html();
  app_yonlendirme_css();
  app_yonlendirme_js();
};

const app_yonlendirme_condition = () => {
  const device = window.innerWidth > 768;
  return device;
};

setInterval(() => {
  if (app_yonlendirme_condition()) {
    app_yonlendirme_init();
  }
}, 50);
