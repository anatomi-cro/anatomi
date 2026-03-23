const navbar_menu_followup_html = () => {
    const html = `
    <div class="anatomi_navbar">
      <a href="https://www.istanbulticaret.com/" class="anatomi_nav_item">
        <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-anasayfa-icon.png" alt="Ana Sayfa">
        <span>Ana Sayfa</span>
      </a>
      <a class="anatomi_nav_item anatomi_kategoriler">
        <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-kategoriler-icon.png" alt="Kategoriler">
        <span>Kategoriler</span>
      </a>
      <a href="https://www.istanbulticaret.com/sepet" class="anatomi_nav_item">
        <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-sepetim-icon.png" alt="Sepetim">
        <span>Sepetim</span>
      </a>
      <a href="https://www.istanbulticaret.com/indirim-urunleri" class="anatomi_nav_item anatomi_indirim">
        <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-indirim-v1-icon.png" alt="Indirim">
        <span>İndirim</span>
      </a>
      <a class="anatomi_nav_item anatomi_hesabim">
        <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-hesabim-icon.png" alt="Hesabım">
        <span>Hesabım</span>
      </a>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", html);
};

const navbar_menu_followup_css = () => {
    const style = `
      <style>    
       .anatomi_navbar {
        position: sticky;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 15px 0;
        border-top: 1px solid #ddd;
        box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
        z-index: 9;
      }
      .anatomi_nav_item {
        flex: 1;
        text-align: center;
        color: #333;
        font-size: 14px;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
      }
      .anatomi_nav_item img {
       width: 24px;
      }
      .anatomi_nav_item span {
        font-size: 12px;
      }
      .anatomi_indirim {
        color: #E87926;
      }
        #ls-openButton , #cct-open-btn {
            bottom: 100px !important;
        }
      #header-main > div > div > div.col-auto.ml-auto{
        display:none !important;
      }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const navbar_menu_followup_js = () => {
  const hesabim = document.querySelector(".anatomi_hesabim");
  const orjHesabim = document.querySelector("#header-account");
  if(hesabim && orjHesabim) {
      hesabim.addEventListener("click", () => {
          orjHesabim.click();
      })
  }

  const kategoriler = document.querySelector(".anatomi_kategoriler");
  const orjKategoriler = document.querySelector("#header-main > div > div > div.col-auto.d-lg-none > a")
  if(kategoriler && orjKategoriler) {
      kategoriler.addEventListener("click", () => {
          orjKategoriler.click();
      })
  }
};

const navbar_menu_followup_init = () => {
    navbar_menu_followup_html();
    navbar_menu_followup_css();
    navbar_menu_followup_js();
};

const navbar_menu_followup_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

if (navbar_menu_followup_condition()) {
    navbar_menu_followup_init();
}