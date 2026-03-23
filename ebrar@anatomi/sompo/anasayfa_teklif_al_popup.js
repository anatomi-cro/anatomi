const anasayfa_teklif_al_popup_html = () => {
  const html = `
    `;
};
const anasayfa_teklif_al_popup_css = () => {
  const style = `
      <style>
      .anatomi_stickyButon {
        display: none;
        flex-direction: column;
        justify-content: space-around;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: white;
        color: white;
        border-top: 3px solid #e7e7e7;
        text-align: center;
        padding: 15px 25px 20px;
        z-index: 9999999999999;
        transition: opacity 0.3s ease-in-out;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
      }

      .anatomi_stickyButon.show {
        display: flex;
      }
 
      .anatomi_teklifAlBtn{
        background-color: #b61539;
        border: none;
        color: white;
        font-weight: bold;
        font-size: 16px;
        padding: 10px 15px;
        text-align: center;
        border-radius: 5px;
      }
      .anatomi_teklifAl_desc{
        color: black;
        font-weight: bold;
        font-size: 16px;
      }
         .anatomi_closeBtn {
   position: absolute;
    top: 5px;
    right: 10px;
    background: none;
    border: none;
    color: #888686;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }

    </style>
    `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};


let isStickyButtonClosed = false;
let timeoutId;

const anasayfa_teklif_al_popup_js = () => {
  const generateStickyButon = () => {
    const main = document.querySelector("body > main");
    const stickyButon = document.createElement("div");
    stickyButon.classList.add("anatomi_stickyButon");
    main.appendChild(stickyButon);

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "X";
    closeBtn.classList.add("anatomi_closeBtn");
    stickyButon.appendChild(closeBtn);

    const pDesc = document.createElement("p");
    pDesc.textContent =
      "Trafik, Kasko, DASK ve Diğer Ürünlerde Hemen Ücretsiz Teklif Al!";
    pDesc.classList.add("anatomi_teklifAl_desc");
    stickyButon.appendChild(pDesc);

    const teklifAlHref = document.createElement("a");
    teklifAlHref.classList.add("anatomi_teklifAlBtn");
    teklifAlHref.href = "#";
    const teklifAlBtn = document.createElement("button");
    teklifAlBtn.textContent = "Ücretsiz Teklif Al";
    teklifAlBtn.classList.add("anatomi_teklifAlBtn");
    teklifAlHref.appendChild(teklifAlBtn);
    stickyButon.appendChild(teklifAlHref);

    closeBtn.addEventListener("click", () => {
      isStickyButtonClosed = true;
      stickyButon.classList.remove("show");
    });

    return stickyButon;
  };

  const stickyButon = generateStickyButon();

 let scrollTimer;

const handleScroll = () => {
  clearTimeout(scrollTimer);

  const scrollPosition = window.scrollY;
  console.log("Current scroll position:", scrollPosition); 

  if (scrollPosition < 400) {
    console.log("Removing show class"); 
    stickyButon.classList.remove("show");
    return; 
  }

  if (!isStickyButtonClosed) {
    scrollTimer = setTimeout(() => {
      console.log("Adding show class"); 
      stickyButon.classList.add("show");
    }, 10000);
  }
};

  window.addEventListener("scroll", handleScroll);
  document.addEventListener("click", scrollTimer);
  document.addEventListener("touchstart", scrollTimer);
};

window.addEventListener("DOMContentLoaded", () => {
  isStickyButtonClosed = false;
});

const anasayfa_teklif_al_popup_init = () => {
  anasayfa_teklif_al_popup_html();
  anasayfa_teklif_al_popup_css();
  anasayfa_teklif_al_popup_js();
};

const anasayfa_teklif_al_popup_condition = () => {
  return window.innerWidth <= 768;
};

if (anasayfa_teklif_al_popup_condition()) {
  anasayfa_teklif_al_popup_init();
}