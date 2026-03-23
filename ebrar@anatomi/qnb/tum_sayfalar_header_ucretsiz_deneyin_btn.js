const header_portal_girisi_html = () => { };

const header_portal_girisi_css = () => {
    const style = `
      <style>    
      /* search css */
      .anatomi-search-container, .anatomi-search-container-hamburger {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 40px;
        height: 40px;
        background: #f9f9f9;
        margin-bottom: 20px;
        border: 1px solid #80808047;
        position: relative;
        z-index: 99;
      }
        .anatomi-search-container-hamburger{
             display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        height: 40px;
        background: #f9f9f9;
        margin-bottom: 20px;
        border: 1px solid #80808047;
        position: relative;
        z-index: 99;
        }
    .anatomi-search-container-hamburger{
        margin-left: -20px;
        margin-right: -20px;
    }
     .anatomi-search-bar {
        position: absolute;
        width: 100%;
     }
     .anatomi-search {
        z-index: 999;
        width: 100%;
        left: 10px;
     }
    .anatomi-search svg , .anatomi_searchbar_hamburger svg{
        width: 20px;
        margin-left: 10px;
    }
    .anatomi_searchbar_hamburger a{
        width: 500px;
        z-index: 999;
        position: absolute;
        left: 5px;
    }
     .anatomi-search-title-container{
         margin-left: 40px;
     }
       .anatomi-search-title-container_hamburger{
           margin-left: 30px;
       }  
     .anatomi-search-input, .anatomi-search-input_hamburger{
        font-size: 15px;
        color: #929292;
        margin: 0px;
     }
     .anatomi-section-banner-main{
        padding-top: 140px;
        margin-top: -131px;
     }

     /* navbar css */
       .anatomi-uk-container{
        padding-left: 5px !important;
        padding-right: 5px !important;
     }
     .anatomi-uk-navbar {
        justify-content: space-around;
        gap: 20px;
     }
     .anatomi-navbar-right{
        margin-left: 0px !important;
        flex-wrap: nowrap;
        gap:10px !important;
     }
     .anatomi-portal-girisi, .anatomi_portal_girisi_hamburger{
        font-size: 14px !important;
        background: none !important;
        color: #974192 !important;
        border: none !important;
        box-shadow: none !important;
     }
     .anatomi-ucretsiz-deneyin-btn, .anatomi_ucretsiz_deneyin_btn_hamburger {
       color: #fff;
        background: linear-gradient(180deg, #a961a5 0, #974192 100%);
        border: 1px solid;
        border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%);
        box-shadow: 0 0 0 1px #974192;
        padding: 10px;
        border-radius: 6px;
        font-size: 14px;
     }
      .anatomi-ucretsiz-deneyin-btn:hover{
        background: linear-gradient(180deg, #974192 0, #a961a5 100%);
        color: #fff;
        text-decoration: none;
     }

    body > main > section.uk-section.uk-position-relative.section-banner-main.anatomi-section-banner-main > div > div > div.uk-width-1-2\\@m.uk-flex.uk-flex-column.notranslate.uk-first-column > h1 > p:nth-child(2) {
         height: fit-content;
    line-height: 0 !important;
     }
#modal-menu > div > div > div.uk-navbar-right.notranslate{
    flex-wrap: nowrap !important;
    gap: 5px !important;
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
    const search = document.querySelector("body > main > div.anatomi-search-container > div.uk-navbar-item.uk-padding-remove.uk-flex-first\\@l.notranslate.anatomi-search-bar > a")
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
    ucretsizDeneyinAnchor.href = "https://www.qnbesolutions.com.tr/ucretsiz-deneme?packageId=1094&utm_source=Headerbutton&utm_medium=header&utm_campaign=buttontest&utm_term=14gun_button";
    ucretsizDeneyinAnchor.classList.add("anatomi-ucretsiz-deneyin-btn");
    ucretsizDeneyinAnchor.textContent = "Ücretsiz Deneyin";

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

    const portalGirisi = document.querySelector("body > header > div.header-bottom.uk-sticky.notranslate > nav > div > div > div.uk-navbar-right.notranslate.anatomi-navbar-right > div > a")
    if (portalGirisi) {
        portalGirisi.classList.add("anatomi-portal-girisi");
        portalGirisi.textContent = "Mobil Giriş";
        portalGirisi.href = "https://onelink.to/7k7fxy";
    }

     const searchContainerHamburger = document.createElement("div");
    searchContainerHamburger.classList.add("anatomi-search-container-hamburger");

     const ucretsizDeneyinHamburger = document.createElement("a");
    ucretsizDeneyinHamburger.href = "https://www.qnbesolutions.com.tr/ucretsiz-deneme?packageId=1094&utm_source=Headerbutton&utm_medium=header&utm_campaign=buttontest&utm_term=14gun_button";
    ucretsizDeneyinHamburger.classList.add("anatomi_ucretsiz_deneyin_btn_hamburger");
    ucretsizDeneyinHamburger.textContent = "Ücretsiz Deneyin";

    const targetElement3 = document.querySelector("#modal-menu > div > div > div.uk-navbar-right.notranslate > div:nth-child(1)")
    if (targetElement3) {
        targetElement3.insertAdjacentElement("afterend" , ucretsizDeneyinHamburger);
    }

    const portalGirisiHamburger = document.querySelector("#modal-menu > div > div > div.uk-navbar-right.notranslate > div:nth-child(1) > a")
    if (portalGirisiHamburger) {
        portalGirisiHamburger.classList.add("anatomi_portal_girisi_hamburger");
        portalGirisiHamburger.textContent = "Mobil Giriş";
        portalGirisiHamburger.href = "https://onelink.to/7k7fxy";
    }    

    const searchBarHamburger = document.querySelector("#modal-menu > div > div > div.uk-navbar-right.notranslate > div.uk-navbar-item.uk-padding-remove.uk-flex-first\\@l.notranslate")
    if (searchBarHamburger) {
        searchBarHamburger.classList.add("anatomi_searchbar_hamburger");
        searchContainerHamburger.appendChild(searchBarHamburger);
    }
    const searchHamburger = document.querySelector("#modal-menu > div > div > div.uk-navbar-right.notranslate > div.uk-navbar-item.uk-padding-remove.uk-flex-first\\@l.notranslate > a")
    if (searchHamburger) {
        searchHamburger.classList.add("anatomi_search_hamburger");
        }

    const targetElement4 = document.querySelector("#modal-menu > div > ul:nth-child(2)")
    if (targetElement4) {
        targetElement4.insertAdjacentElement("beforebegin" , searchContainerHamburger);
    }

    const searchTitleHamburger = document.createElement("div");
    searchTitleHamburger.classList.add("anatomi-search-title-container_hamburger");

    const searchInputHamburger = document.createElement("p");
    searchInputHamburger.classList.add("anatomi-search-input_hamburger");
    searchInputHamburger.textContent = "Arama Yap";

    searchTitleHamburger.appendChild(searchInputHamburger);
    searchBarHamburger.insertAdjacentElement("afterend" , searchTitleHamburger);
 
};

const header_portal_girisi_init = () => {
    header_portal_girisi_html();
    header_portal_girisi_css();
    header_portal_girisi_js();
};

const header_portal_girisi_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

if (header_portal_girisi_condition()) {
    header_portal_girisi_init();
}