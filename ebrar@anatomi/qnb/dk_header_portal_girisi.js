const header_portal_girisi_html = () => {};

const header_portal_girisi_css = () => {
    const style = `
      <style>    
      /* search css */
      .anatomi-search-container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 40px;
        height: 40px;
        background: #f9f9f9;
        border: 1px solid #80808047;
        position: relative;
        z-index: 99;
      }
     .anatomi-search-bar{
        position: absolute;
        width: 100%;
     }
     .anatomi-search {
        z-index: 999;
        width: 100%;
        left: 10px;
     }
    .anatomi-search svg{
        width: 20px;
        margin-left: 10px;
    }
     .anatomi-search-title-container{
         margin-left: 40px;
     }
     .anatomi-search-input{
        font-size: 15px;
        color: #929292;
        margin: 0px;
     }
     .anatomi-section-banner-main{
        padding-top: 140px;
        margin-top: -131px;
     }

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

    //search kodlanması
    const searchContainer = document.createElement("div");
    searchContainer.classList.add("anatomi-search-container");

    const targetElement = document.querySelector("body > main")
    if (targetElement) {
        targetElement.insertAdjacentElement("afterbegin", searchContainer);
    }

    const sectionBannerMain = document.querySelector("body > main > section.uk-section.uk-position-relative.section-banner-main")
    if (sectionBannerMain) {
        sectionBannerMain.classList.add("anatomi-section-banner-main");
    }
    const searchBar = document.querySelector("body > header > div.header-bottom.uk-sticky.notranslate > nav > div > div > div.uk-navbar-right.notranslate > div.uk-navbar-item.uk-padding-remove.uk-flex-first\\@l.notranslate")
    if (searchBar) {
        searchContainer.appendChild(searchBar);
        searchBar.classList.add("anatomi-search-bar");
    }
    const search =document.querySelector("body > main > div.anatomi-search-container > div.uk-navbar-item.uk-padding-remove.uk-flex-first\\@l.notranslate.anatomi-search-bar > a")
    if (search) {
        search.classList.add("anatomi-search");
    }
    const searchTitle = document.createElement("div");
    searchTitle.classList.add("anatomi-search-title-container");

    const searchInput = document.createElement("p");
    searchInput.classList.add("anatomi-search-input");
    searchInput.textContent = "Arama Yap";

    searchTitle.appendChild(searchInput);

   searchBar.insertAdjacentElement("afterend", searchTitle);
    


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
    const device = window.innerWidth <= 768;
    const location = window.location.href === "https://www.qnbesolutions.com.tr/dijital-kopru";
    return device && location;
};

if (header_portal_girisi_condition()) {
    header_portal_girisi_init();
}
