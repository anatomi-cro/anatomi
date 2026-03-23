const trafik_teklif_al_d_html = () => {
     const html = `
    <div id="anatomi-trafik-popup" class="anatomi-trafik-popup hidden">
      <div class="anatomi-popup-content">
        <span class="anatomi-close-btn">&times;</span>
        <h3>KENDİ ARACINIZDA OLUŞACAK HASARLARI GÜVENCE ALTINA ALMAYI UNUTMAYIN!</h3>
        <p>Sompo’ya güvenen yaklaşık 500.000 araç sahibinden biri olmak için hemen Full Kasko Sigortası alın.</p>
        <a target="_blank" href="https://www.somposigorta.com.tr/full-kasko" class="anatomi-kasko-btn">Devam</a>
      </div>
    </div>
  `;
  const element = document.querySelector("#anatomi-trafik-popup");
  if(!element){
  document.body.insertAdjacentHTML("beforeend", html);
  }
};

const trafik_teklif_al_d_css = () => {
    const style = `
      <style id="anatomi_trafik_popup_style">    
       .anatomi-trafik-popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }
      .anatomi-trafik-popup.hidden {
        display: none;
      }
      .anatomi-popup-content {
        background: #fff;
        padding: 20px 30px;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        position: relative;
        max-width: 400px;
        width: 90%;
      }
      .anatomi-popup-content img {
          width: 60px;
      }
      .anatomi-popup-content h3 {
        margin-bottom: 10px;
        color: #B61638;
      }
      .anatomi-popup-content p {
        margin-bottom: 20px;
        line-height: 25px;
      }
      .anatomi-kasko-btn {
        background-color: #B61638;
        color: white;
        border: none;
        display: block;
        padding: 10px 20px;
        border-radius: 20px;
        cursor: pointer;
        text-decoration: none;
      }
      .anatomi-close-btn {
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 22px;
        cursor: pointer;
      }
      </style>
    `;
    const css = document.querySelector("#anatomi_trafik_popup_style");
    const head = document.querySelector("head");
    if(!css){
      head.insertAdjacentHTML("beforeend", style);
    }
};

const trafik_teklif_al_d_js = () => {
     let popupShown = false;

  document.addEventListener("mousemove", (e) => {
    if (
      !popupShown &&
      e.clientY < 100 &
      window.innerWidth - e.clientX < 100 
    ) {
      const popup = document.querySelector("#anatomi-trafik-popup");
      if (popup) {
        popup.classList.remove("hidden");
        popupShown = true; 
      }
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("anatomi-close-btn")) {
      document.querySelector("#anatomi-trafik-popup").classList.add("hidden");
    }
  });
};

const trafik_teklif_al_d_init = () => {
    trafik_teklif_al_d_html();
    trafik_teklif_al_d_css();
    trafik_teklif_al_d_js();
};

const trafik_teklif_al_d_condition = () => {
         const loaderWrapper = document.querySelector(".loader-wrapper");
  const device = window.innerWidth > 768;
   const urlIncludesOffer = window.location.href.includes("offer");
   const urlExludeConf = window.location.href.includes("confirmation");
  return device && !loaderWrapper && urlIncludesOffer && !urlExludeConf;
};


setInterval(() => {
    if (trafik_teklif_al_d_condition()) {
        trafik_teklif_al_d_init();
    }
},50);

