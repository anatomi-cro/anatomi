const header_portal_girisi_html = () => {};

const header_portal_girisi_css = () => {
    const style = `
      <style>    
     

     /* navbar css */
     .anatomi-uk-navbar {
        justify-content: space-between;
     }
     .anatomi-navbar-right{
        margin-left: 0px !important;
        flex-wrap: nowrap;
        gap:10px !important;
     }
     .anatomi-portal-girisi{
        display: none !important;
     }
     .anatomi-dijital-kopru-btn {
       color: #fff;
        background: linear-gradient(180deg, #a961a5 0, #974192 100%);
        border: 1px solid;
        border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%);
        box-shadow: 0 0 0 1px #974192;
        padding: 10px 15px;
        border-radius: 6px;
        font-size: 12px;
     }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const header_portal_girisi_js = () => {

    //navbar kodlanması

    const navbarRight = document.querySelector("body > header > div.header-bottom.uk-sticky.notranslate > nav > div > div > div.uk-navbar-right.notranslate")
    if (navbarRight) {
        navbarRight.classList.add("anatomi-navbar-right");
    }
    const ucretsizDeneyinAnchor = document.createElement("a");
    ucretsizDeneyinAnchor.href = "https://www.qnb.com.tr/dijitalkopru/dijital-cozumlerimiz/e-donusum-basvuru-formu?p=QNBESOLUTIONS ";

    const ucretsizDeneyinBtn = document.createElement("button");
    ucretsizDeneyinBtn.classList.add("anatomi-dijital-kopru-btn");
    ucretsizDeneyinBtn.textContent = "Ücretsiz Deneyin";

    ucretsizDeneyinAnchor.appendChild(ucretsizDeneyinBtn);
    
    const targetElement2 = document.querySelector("body > header > div.header-bottom.uk-sticky.notranslate > nav > div > div > div.uk-navbar-right.notranslate")
    if (targetElement2) {
        targetElement2.appendChild(ucretsizDeneyinAnchor);
    }

    const ukContainer = document.querySelector("body > header > div.header-bottom.uk-sticky.notranslate > nav > div")
    if (ukContainer) {
        ukContainer.classList.add("anatomi-uk-container");
    }
    const ukNavbar = document.querySelector("body > header > div.header-bottom.uk-sticky.notranslate > nav > div > div")
    if (ukNavbar) {
        ukNavbar.classList.add("anatomi-uk-navbar");
    }

    const portalGirisi = document.querySelector("body > header > div.header-bottom.uk-sticky.notranslate > nav > div > div > div.uk-navbar-right.notranslate.anatomi-navbar-right > div ")
    if (portalGirisi) {
        portalGirisi.classList.add("anatomi-portal-girisi");
    }

};

const header_portal_girisi_init = () => {
    header_portal_girisi_html();
    header_portal_girisi_css();
    header_portal_girisi_js();
};

const header_portal_girisi_condition = () => {
    const device = window.innerWidth > 768;
    const location = window.location.href === "https://www.qnbesolutions.com.tr/dijital-kopru";
    return device && location;
};

if (header_portal_girisi_condition()) {
    header_portal_girisi_init();
}
