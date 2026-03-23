const anatomi_bg_image_html = () => {
const html = `
   <img src="https://r.resimlink.com/P1GOnQ7TKB.webp"></img>
  `;

  const targetElement = document.querySelector("#divCenterBlock > div:nth-child(2) > img:nth-child(14)")
  targetElement.insertAdjacentHTML("beforebegin", html);
};

const anatomi_bg_image_css = () => {
    const style = `
      <style id="anatomi_bg_image">    
      #divCenterBlock > div:nth-child(2) > img:nth-child(13) {
          display: none !important;
      }
      
      </style>
    `;
    const head = document.querySelector("head");
    const css = document.querySelector("#anatomi_bg_image")
    if(!css){

    head.insertAdjacentHTML("beforeend", style);
    }
};

const anatomi_bg_image_js = () => {
};

const anatomi_bg_image_init = () => {
    anatomi_bg_image_html();
    anatomi_bg_image_css();
    anatomi_bg_image_js();
};

const anatomi_bg_image_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

setInterval(() =>{
if (anatomi_bg_image_condition()) {
    anatomi_bg_image_init();
}
},50)