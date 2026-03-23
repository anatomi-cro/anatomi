const hediye_karti_popup_html = () => {
  const html = `
    <div class="hediye-karti-popup">
      <p>Trafik Sigortasını Sompo’dan satın alan müşterilerimiz 500 TL Migros hediye kart kazanıyor!</p>
      <button class="hediye-karti-btn">Kampanya Detayı</button>
    </div>
    <div class="inner-arrow">&nbsp;</div>
  `;
  document.body.insertAdjacentHTML("beforeend", html);
};

const hediye_karti_popup_css = () => {
  const style = `
    <style>    
   
      .hediye-karti-popup {
        position: fixed;
        bottom: 80px;
        right: 80px;
        background: white;
        border-radius: 16px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        padding: 16px 20px;
        display: flex;
        align-items: center;
        gap: 12px;
        font-family: sans-serif;
        max-width: 530px;
        z-index: 9999;
        animation: slideIn 0.4s ease-out;
      }

      .inner-arrow {
        transform: rotate(42deg);
        background: white;
        width: 55px;
        height: 23px;
        position: fixed;
        bottom: 105px;
        right: 75px;
        box-shadow: 0 5px 3px 2px rgba(0, 1, 1, .09);
        animation: slideIn 0.4s ease-out;
        z-index: 9;
      }

      .hediye-karti-popup p {
        margin: 0;
        font-size: 14px;
        color: #960525;
        flex-grow: 1;
        text-align: left;
      }

      .hediye-karti-btn {
        background-color: #960525;
        color:white;
        border: none;
        border-radius: 8px;
        padding: 8px 12px;
        font-size: 14px;
        cursor: pointer;
        transition: background 0.3s;
        white-space: nowrap;
      }

      .hediye-karti-btn:hover {
        background-color: #fff;
        color:  #960525;
      }

      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    </style>
  `;
  document.head.insertAdjacentHTML("beforeend", style);
};

const hediye_karti_popup_js = () => {
  const interval = setInterval(() => {
    const iframe = document.querySelector(".jetlinkWidgetFrame");

    if (iframe && iframe.contentWindow && iframe.contentDocument) {
      try {
   
        const target = iframe.contentDocument.querySelector("#divJetlinkOpenText")
        

        if (target) {
          clearInterval(interval);
          const orjButton = iframe.contentDocument.querySelector(".open-widget");
          const varButton = document.querySelector(".hediye-karti-btn");
          iframe.contentDocument.querySelector("#divJetlinkOpenText").style.display = "none";



          if (orjButton && varButton) {
            varButton.addEventListener("click", () => {
              orjButton.click();
            });
          }
        }
      } catch (e) {
      
        console.warn("Iframe içeriğine erişilemedi:", e);
      }
    }
  }, 500); 
};



const hediye_karti_popup_init = () => {
       hediye_karti_popup_html();   
  hediye_karti_popup_css();
  hediye_karti_popup_js();        

};


if (window.innerWidth > 768) {
  const checkInterval = setInterval(() => {
    const iframe = document.querySelector(".jetlinkWidgetFrame");
    if (iframe && iframe.contentDocument) {
      try {
        const target = iframe.contentDocument.querySelector(".jetlink-launcher");
        if (target) {
          clearInterval(checkInterval);
          setTimeout(() => {
            hediye_karti_popup_init();
          }, 4000);
        }
      } catch (e) {
        console.warn("Iframe içeriğine erişilemedi:", e);
      }
    }
  }, 500);
}