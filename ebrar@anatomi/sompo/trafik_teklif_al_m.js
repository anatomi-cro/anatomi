const trafik_teklif_al_m_html = () => {
  const html = `
    <div id="anatomi-trafik-popup" class="anatomi-trafik-popup hidden">
      <div class="anatomi-popup-content">
        <span class="anatomi-close-btn">&times;</span>
        <h3>KENDİ ARACINIZDA OLUŞACAK HASARLARI GÜVENCE ALTINA ALMAYI UNUTMAYIN!</h3>
        <p>Sompo’ya güvenen yaklaşık 500.000 araç sahibinden biri olmak için hemen Full Kasko Sigortası alın.</p>
        <a href="https://www.somposigorta.com.tr/full-kasko" class="anatomi-kasko-btn">Devam</a>
      </div>
    </div>
  `;
  const element = document.querySelector("#anatomi-trafik-popup");
  if(!element){
    document.body.insertAdjacentHTML("beforeend", html);
  }
};

const trafik_teklif_al_m_css = () => {
  const style = `
    <style id="anatomi_trafik_popup_style_mobile">
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
        animation: fadeIn 0.5s ease;
      }
      @keyframes fadeIn {
        from {opacity: 0; transform: scale(0.9);}
        to {opacity: 1; transform: scale(1);}
      }
      .anatomi-popup-content img {
        width: 60px;
        margin-bottom: 10px;
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
  const css = document.querySelector("#anatomi_trafik_popup_style_mobile");
  const head = document.querySelector("head");
  if(!css){
  head.insertAdjacentHTML("beforeend", style);
  }
};

const trafik_teklif_al_m_js = () => {
  let popupShown = false;

  setTimeout(() => {
    if (!popupShown) {
      const popup = document.querySelector("#anatomi-trafik-popup");
      if (popup) {
        popup.classList.remove("hidden");
        popupShown = true;
      }
    }
  }, 15000);

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("anatomi-close-btn")) {
      document.querySelector("#anatomi-trafik-popup").classList.add("hidden");
    }
  })
  
};

const trafik_teklif_al_m_init = () => {
  trafik_teklif_al_m_html();
  trafik_teklif_al_m_css();
  trafik_teklif_al_m_js();
};

const trafik_teklif_al_m_condition = () => {
    const loaderWrapper = document.querySelector(".loader-wrapper");
  const device = window.innerWidth <= 768;
   const urlIncludesOffer = window.location.href.includes("offer");
   const urlExludeConf = window.location.href.includes("confirmation");
  return device && !loaderWrapper && urlIncludesOffer && !urlExludeConf;
};

setInterval(() => {
if (trafik_teklif_al_m_condition()) {
  trafik_teklif_al_m_init();
}
}, 50);
