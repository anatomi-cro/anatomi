const header_teklif_al_btn_html = () => {
    const html = `<a class="anatomi_teklif_al_btn" href="#">Teklif Al</a>`;
    const targetElement = document.querySelector(
        "#dealHeader > div.desktop-header.d-none.d-md-block.p-3.bg-white > div > div > a.login-cont.d-flex.flex-column.flex-xl-row.justify-content-center.align-items-center.flex-wrap.rounded.text-white.font-weight-normal.ml-2.px-3.px-xl-2.py-1.py-xl-2.anatomi_giris_yap_btn"
    );

   if (targetElement && !document.querySelector(".anatomi_teklif_al_btn")) {
        targetElement.insertAdjacentHTML("afterend", html);

        window.addEventListener("scroll", () => {
            if (window.scrollY >= 800) {
                document.querySelector(".anatomi_teklif_al_btn").style.display = "flex";
            } else {
                document.querySelector(".anatomi_teklif_al_btn").style.display = "none";
            }
        });
    }
};

const header_teklif_al_btn_css = () => {
    const style = `
      <style id="anatomi_header_teklif_al_btn_css">    
      html {
    scroll-behavior: smooth;
}

      .anatomi_giris_yap_btn {
          background-color: transparent !important;
          border: 1px solid #37424A !important;
          color: #37424A !important;
          font-weight: bold !important;
          width: 145px;
          height: 40px !important;
      }
     .anatomi_giris_yap_btn:hover {
          text-decoration: none !important;
          cursor: pointer !important;
      }

      .anatomi_teklif_al_btn {
          background-color: #37424A !important;
    border: 1px solid #37424A !important;
    color: #fff !important;
    font-weight: bold !important;
    width: 145px;
    height: 40px;
    text-align: center;
    display: none;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-left: 10px;
      }
     .anatomi_teklif_al_btn:hover {
          text-decoration: none !important;
          cursor: pointer !important;
      }
    .anatomi_telefon_btn{
        display: none !important;
    }
      </style>
    `;
    const head = document.querySelector("head");
    const css = document.querySelector("#anatomi_header_teklif_al_btn_css");
    if (!css) {
    head.insertAdjacentHTML("beforeend", style);
    }
    
};

const header_teklif_al_btn_js = () => {

    const girisYapBtn = document.querySelector("#dealHeader > div.desktop-header.d-none.d-md-block.p-3.bg-white > div > div > a.login-cont.d-flex.flex-column.flex-xl-row.justify-content-center.align-items-center.flex-wrap.bg-success.rounded.text-white.font-weight-normal.ml-2.px-3.px-xl-2.py-1.py-xl-2")
    if(girisYapBtn && !girisYapBtn.classList.contains("anatomi_giris_yap_btn")){
        girisYapBtn.classList.add("anatomi_giris_yap_btn");
        if(girisYapBtn.classList.contains("bg-success")){
            girisYapBtn.classList.remove("bg-success");
        }
    }   

    const teklifAlBtn = document.querySelector("#dealHeader > div.desktop-header.d-none.d-md-block.p-3.bg-white > div > div > a.callcenter-btn.d-flex.flex-shrink-0.flex-column.ml-2.mr-2.mb-4.mb-md-0.px-2.py-1.bg-danger.text-white.text-center.rounded.text-decoration-none")
    if(teklifAlBtn && !teklifAlBtn.classList.contains("anatomi_telefon_btn")){
        teklifAlBtn.classList.add("anatomi_telefon_btn");
       
    }
     
};

const header_teklif_al_btn_init = () => {
    header_teklif_al_btn_html();
    header_teklif_al_btn_css();
    header_teklif_al_btn_js();
};

const header_teklif_al_btn_condition = () => {
    const device = window.innerWidth > 768;
    return device;
};


setInterval(() => {
    
    if (header_teklif_al_btn_condition()) {
        header_teklif_al_btn_init();
    }
}, 50);
