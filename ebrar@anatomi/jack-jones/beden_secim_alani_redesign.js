const beden_secim_alani_redesign_html = () => {};

const beden_secim_alani_redesign_css = () => {
    const style = `
      <style>    
      .anatomi_beden_popup{
          position: fixed;
          bottom: 65px;
          left: 0;
          width: 100%;
          background: #fff;
          box-shadow: 0 -4px 10px rgba(0,0,0,0.1);
          z-index: 9999;
          paddding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: flex-start;
          max-height: 50vh;
          overflow-y: scroll;
      }
      .anatomi_beden_baslik{
          font-weight: bold;
          margin: 0;
          
      }
     .anatomi_beden_popup_baslik{
         font-size: 16px;
    padding-top: 20px;
    padding-left: 20px;
     }
      .anatomi_beden_label{
          display: flex;
          justify-content: flex-start !important;
        align-items: flex-start !important;
          gap: 8px;
          padding: 8px;
          border-bottom: 1px solid #ccc !important;
          border-top:none !important;
          width: 100%;
          border-right: none !important;
          border-left: none !important;
          margin: 0 !important;
          font-size: 16px;
      }
        .anatomi_beden_label .content .label{
                font-size: 16px;
        }
      .anatomi_beden_popup_close_btn{
          position: absolute;
          top: 16px;
          right: 16px;
          cursor: pointer;
          border: none;
          background: none;
          color: #737373;
          font-size: 20px;
      }
     .anatomi_beden_tetikleyici{
         padding: 12px 16px;
         background-color: #ffffff;
         color: #000000;
         width: 252px;
         border: 1px solid #000000;
         font-size: 16px;
         color: #000000;
     }
        .anatomi_beden_tetikleyici:hover{
            background-color: #000000;
            color: #ffffff;
        }
       .variant-selector-bing__size-options{
          display: none !important;
          }
      #__layout > div > main > div > div > article.pdp-shopping-mode__detail.pdp-shopping-mode__detail > div.variant-selector-bing > div{
            grid-column-gap: 0px !important;
        }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const beden_secim_alani_redesign_js = () => {
  let secilenBeden = "";
  let tetikleyiciBtn;

  const bedenleriPopupGoster = () => {
    const mevcutBedenDiv = document.querySelector(".variant-selector-bing__size-options");
    if (!mevcutBedenDiv) return;

    const popup = document.createElement("div");
    popup.classList.add("anatomi_beden_popup");

    const baslik = document.createElement("p");
    baslik.classList.add("anatomi_beden_popup_baslik");
    baslik.innerText = "BEDEN SEÇ";
    popup.appendChild(baslik);

    const labels = mevcutBedenDiv.querySelectorAll("label");
    labels.forEach((label) => {
      const yeniLabel = label.cloneNode(true);
      yeniLabel.classList.add("anatomi_beden_label");

      yeniLabel.querySelector("input").classList.remove("variant-swatch");
      yeniLabel.querySelector("input").classList.add("anatomi_beden_input" , "variant-swatch");

     yeniLabel.addEventListener("click", () => {
      const input = yeniLabel.querySelector("input")


      if (input?.disabled) {
        yeniLabel.style.opacity = "0.5"; 
        yeniLabel.style.pointerEvents = "none"; 
        return;
      }
      if (input) input.checked = true;
      const bedenMetni = label.innerText.trim() || label.textContent.trim();
      if (bedenMetni) {
        secilenBeden = bedenMetni;
        tetikleyiciBtn.innerText = `Beden Seç / ${secilenBeden}`;
      }

      input?.dispatchEvent(new Event("change", { bubbles: true }));

  popup.style.display = "none";
 
});

      popup.appendChild(yeniLabel);
    });

    const closeBtn = document.createElement("button");
    closeBtn.classList.add("anatomi_beden_popup_close_btn");
    closeBtn.innerText = "x";
    closeBtn.onclick = () => popup.remove();
    popup.appendChild(closeBtn);

    document.body.appendChild(popup);

    const eskiBedenAlani = document.querySelector(
      "#__layout > div > main > div > div > article.pdp-shopping-mode__detail.pdp-shopping-mode__detail > div.variant-selector-bing > div > div.variant-selector-bing__size-options.col--12"
    );
    if (eskiBedenAlani) {
      eskiBedenAlani.style.display = "none";
    }
  };

  tetikleyiciBtn = document.createElement("button");
  tetikleyiciBtn.innerText = "Beden Seç";
  tetikleyiciBtn.classList.add("anatomi_beden_tetikleyici");
  tetikleyiciBtn.onclick = bedenleriPopupGoster;

  const targetElement = document.querySelector(
    "#__layout > div > main > div > div > article.pdp-shopping-mode__detail.pdp-shopping-mode__detail > div.variant-selector-bing > div > section"
  );
  if (targetElement) {
    targetElement.insertAdjacentElement("afterend", tetikleyiciBtn);
  }
};


const beden_secim_alani_redesign_init = () => {
    beden_secim_alani_redesign_html();
    beden_secim_alani_redesign_css();
    beden_secim_alani_redesign_js();
};

const beden_secim_alani_redesign_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

if (beden_secim_alani_redesign_condition()) {
    beden_secim_alani_redesign_init();
}

