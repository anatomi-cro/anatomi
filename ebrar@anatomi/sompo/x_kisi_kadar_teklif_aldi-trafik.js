const x_kisi_kadar_teklif_aldi_html = () => {
  let element = document.querySelector(".x_kadar_kisi_teklif_al");
  if(element){
    return;
  }
    const html = `
    <div class="x_kadar_kisi_teklif_al">
        <button class="teklif-al-close-btn">&times;</button>
        <div class="x_kadar_kisi_teklif_al-img">
            <img src="https://r.resimlink.com/FW20IBjh.png" alt="icon">
        </div>
        <div>
            <p>Sompo’dan aylık ortalama 165 bin kişi Trafik Sigortası satın alıyor. <a href="#">Hemen sen de teklif al.</a></p>
        </div> 
    </div>
  `;
    document.body.insertAdjacentHTML("beforeend", html);

    document.querySelector(".teklif-al-close-btn").addEventListener("click", () => {
        document.querySelector(".x_kadar_kisi_teklif_al").style.display = "none";
    });
};

const x_kisi_kadar_teklif_aldi_css = () => {
    const style = `
      <style id="x_kisi_kadar_teklif_aldi_css">    
      .x_kadar_kisi_teklif_al {
        position: fixed;
   
        margin: 0 auto;
      width: 80%;
         left: 50%;
    transform: translateX(-50%);
        bottom: 20px;
        background: white;
        border: 1px solid #960525;
        color: #960525;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        padding: 10px 30px;
        display: flex;
        align-items: center;
        gap: 12px;
        text-align: left;
        z-index: 99999999999;
        animation: slideIn 0.4s ease-out;
      }
      .x_kadar_kisi_teklif_al p{
        font-weight: bold;
        margin: 0;
      }
      .x_kadar_kisi_teklif_al a{
        text-decoration: underline;
        font-weight: normal !important;
        color: #960525;
      }
      .x_kadar_kisi_teklif_al-img img{
        width: 20px;
      }
      .teklif-al-close-btn {
        position: absolute;
        top: 0px;
        right: 0px;
        border: none;
        background: transparent;
        font-size: 20px;
        cursor: pointer;
        color: #960525;
      }
      @keyframes slideIn {
        from {
          opacity: 0;
          
        }
        to {
          opacity: 1;
     
        }
      }
      </style>
    `;
    const css = document.querySelector("#x_kisi_kadar_teklif_aldi_css");
    if(!css){
    document.querySelector("head").insertAdjacentHTML("beforeend", style);
    }
};

const x_kisi_kadar_teklif_aldi_js = () => {
    const aElement = document.querySelector("body > div.x_kadar_kisi_teklif_al > div:nth-child(3) > p > a")
    const input = document.querySelector("body > main > section.image-detail > div.image-detail__content > div > div.get-offer > div.get-offer__form > div:nth-child(1) > input")
    aElement.addEventListener("click", () => {
        input.focus();
    })



}


const x_kisi_kadar_teklif_aldi_init = () => {
    x_kisi_kadar_teklif_aldi_html();
    x_kisi_kadar_teklif_aldi_css();
    x_kisi_kadar_teklif_aldi_js();
};

const x_kisi_kadar_teklif_aldi_condition = () => {
    return window.innerWidth <= 768;
};

if (x_kisi_kadar_teklif_aldi_condition()) {
    let shown = false;
    window.addEventListener("scroll", () => {
        if (!shown && window.scrollY > 800) { 
            shown = true;
            setInterval(() =>{
            x_kisi_kadar_teklif_aldi_init();
            },500);
        }
    });
}


/******************************* EVENT TRACKING *******************************/

setTimeout(() => {
  function addOrUpdateTestState(testID, state, URL, className, divID) {
    if (URL && !window.location.href.includes(URL)) return;
    let element = null;
    if (className) element = document.querySelector(`.${className}`);
    if (!element && divID) element = document.querySelector(`#${divID}`);
    if (className && !element) return;

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


  const testID = "1004162976";
  const state = "varyasyon";
  const url = "trafik-sigortasi";
  const className =  null;
  const divID = "page-container";

  addOrUpdateTestState(testID, state, url, className, divID);
}, 1000);