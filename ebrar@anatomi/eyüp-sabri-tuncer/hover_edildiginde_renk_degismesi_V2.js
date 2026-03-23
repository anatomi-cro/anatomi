const navbar_hover_renk_degisikligi_html = () => {
  const html = `
    <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/eyup-sabri-tuncer-firsat-navbar.png" class="anatomi_navbar_firsat_img"></img>
    `;
  const targetElement = document.querySelector(
    "#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(1) > a"
  );
  const element = document.querySelector(".anatomi_navbar_firsat_img");
  if (!element) {
    targetElement.insertAdjacentHTML("afterbegin", html);
  }
};

const navbar_hover_renk_degisikligi_css = () => {
  const style = `
      <style id="navbar_hover_renk_degisikligi_css">    
      .newHeaderNavUl{
        align-items: center;
      }
      .anatomi_navbar_firsat_img{
        width: 20px;
        height: 20px;
      }
    #wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(1){
         padding: 0px 10px;
        height: 30px;
    }
        #wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(1) > a{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background-color: transparent !important;
        }

    #wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(1){
        background-color: #264734;
        color: white;
        border-radius: 5px;
        padding: 0px 10px;
    }
    #wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(1) > a{
    color: #ffff;
        }
    body .newHeaderNavigation:not(.mobileStyle) .newHeaderNavUl > li:nth-child(1) > a:before{
        display:none !important;
    }
    
      </style>
    `;
  const head = document.querySelector("head");
  const css = document.querySelector("#navbar_hover_renk_degisikligi_css");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const navbar_hover_renk_degisikligi_js = () => {};

const navbar_hover_renk_degisikligi_init = () => {
  navbar_hover_renk_degisikligi_html();
  navbar_hover_renk_degisikligi_css();
  navbar_hover_renk_degisikligi_js();
};

const navbar_hover_renk_degisikligi_condition = () => {
  const device = window.innerWidth > 768;
  return device;
};

setInterval(() => {
  if (navbar_hover_renk_degisikligi_condition()) {
    navbar_hover_renk_degisikligi_init();
  }
}, 50);
