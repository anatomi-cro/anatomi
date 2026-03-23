const kampanya_bari_html = () => {
    const html = `
    <div class="anatomi_kampanya_bari">
    <p>e-Faturaya Geçmeyen Kalmayacak! </p>
    <a class="anatomi_kampanya_banner_a" href="https://www.qnbesolutions.com.tr/ucretsiz-deneme?packageId=1094">Hemen 14 Gün Ücretsiz Deneyin</a>
    </div>
    `;
    const element = document.querySelector(".anatomi_kampanya_bari");
    if (!element) {
        const container = document.querySelector("body > header")
        container.insertAdjacentHTML("beforebegin", html);
    }

};

const kampanya_bari_css = () => {
  const style = `
    <style id="anatomi_kampanya_bari_css">    
     .uk-sticky-fixed {
    top: 45px !important;}
    .anatomi_kampanya_bari { 
      color: #fff;
      background: linear-gradient(180deg, #a961a5 0, #974192 100%);
      border: 1px solid;
      border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%);
      box-shadow: 0 0 0 1px #974192;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      gap: 10px;
      position: fixed;     
      top: 0;            
      left: 0;
      width: 100%;
      z-index: 9999;       
    }
    .anatomi_kampanya_bari p {
      margin: 0px !important;
      font-size: 16px; 
    }
    .anatomi_kampanya_bari a {
      background-color: #FAF8FB;
      text-decoration: underline;
      font-size: 16px;
      border-radius: 8px;
      padding: 5px 15px;
    }
    body {
      padding-top: 50px; 
    }
    @media screen and (max-width: 768px) {
      .anatomi_kampanya_bari { 
        height: 50px;
      }
      .anatomi_kampanya_bari p {
        font-size: 12px;
        width: 35%;
      }
      .anatomi_kampanya_bari a {
        font-size: 12px;
        width: 50%;
        padding: 5px 10px;
        text-align: center;
      }
      body {
        padding-top: 45px;
      }
    }
    </style>
  `;
  const css = document.querySelector("#anatomi_kampanya_bari_css");
  const head = document.querySelector("head");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};


const kampanya_bari_js = () => {

};

const kampanya_bari_init = () => {
    kampanya_bari_html();
    kampanya_bari_css();
    kampanya_bari_js();
};

const kampanya_bari_condition = () => {
    const device = window.innerWidth <= 768;
    const url = window.location.href == "https://www.qnbesolutions.com.tr/dijital-kopru";
    return device && !url;
};

setInterval(() => {
if (kampanya_bari_condition()) {
    kampanya_bari_init();
}    
},50);
