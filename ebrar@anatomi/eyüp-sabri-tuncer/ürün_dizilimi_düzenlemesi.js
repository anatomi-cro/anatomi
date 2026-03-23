setTimeout(() => {
const urun_dizilimi_duzenlemesi_html = () => {};

const urun_dizilimi_duzenlemesi_css = () => {
    const style = `
      <style>       
   .anatomi_menu_wrap1 , .anatomi_menu_wrap2 {
          display: none;
    justify-content: center !important; 
    width: 100% !important;
    max-width: none !important;
}
.newHeaderNav > ul > li:nth-child(3):hover .anatomi_menu_wrap1 {
    display: flex !important;
}
.newHeaderNav > ul > li:nth-child(5):hover .anatomi_menu_wrap2 {
    display: flex !important;}
      .anatomi_menu_list_row {
          max-width: 1150px !important;
    padding: 0px !important;
    gap: 50px !important;
        margin: 33px 10px !important;
        flex-flow: nowrap !important;
}

.anatomi_menu_list_kolon {
    width: 75% !important;
    flex-flow: nowrap !important;
    gap: 20px; 
}
.anatomi_menu_list_image {
    width: 25% !important;
    flex-flow: nowrap !important;
    flex: none !important;
}
        .menu-list-row {
          flex-flow: nowrap !important;
      }
      .menu-list-kolon {
          gap: 30px;
          flex-flow: nowrap !important;
      }
      .kolon {
          flex: 0 !important;
      }
      .nav-item-link span {
          white-space: nowrap;
      }
          @media screen and (min-width: 1200px) {
              #wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(3) > div.menu-wrap.anatomi_menu_wrap1 > div > div.menu-list-kolon.anatomi_menu_list_kolon > ul:nth-child(4) > li > a > span , #wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(5) > div.menu-wrap.anatomi_menu_wrap2 > div > div.menu-list-kolon.anatomi_menu_list_kolon > ul:nth-child(2) > li:nth-child(1) > a > span {
    white-space: nowrap !important;
}
          }

  @media screen and (max-width: 1200px) {
              #wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(3) > div.menu-wrap.anatomi_menu_wrap1 > div > div.menu-list-kolon.anatomi_menu_list_kolon > ul:nth-child(4) > li > a > span , #wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(5) > div.menu-wrap.anatomi_menu_wrap2 > div > div.menu-list-kolon.anatomi_menu_list_kolon > ul:nth-child(2) > li:nth-child(1) > a > span {
    white-space: wrap !important;
}
          }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const urun_dizilimi_duzenlemesi_js = () => {
    const menuWrap1 = document.querySelector("#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(3) > div.menu-wrap");
    if (menuWrap1) {
        menuWrap1.classList.add("anatomi_menu_wrap1");
    }
    const menuListRow1 = document.querySelector("#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(3) > div.menu-wrap > div");
    if (menuListRow1) {
        menuListRow1.classList.add("anatomi_menu_list_row");
    }
    const menuListKolon1 = document.querySelector("#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(3) > div.menu-wrap > div > div.menu-list-kolon")
    if (menuListKolon1) {
        menuListKolon1.classList.add("anatomi_menu_list_kolon");
    }
    const menuListImage1 = document.querySelector("#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(3) > div.menu-wrap > div > div.menu-list-image")
    if (menuListImage1) {
        menuListImage1.classList.add("anatomi_menu_list_image");
    }

const menuWrap2 = document.querySelector("#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(5) > div.menu-wrap");
    if (menuWrap2) {
        menuWrap2.classList.add("anatomi_menu_wrap2");
    }
    const menuListRow2 = document.querySelector("#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(5) > div.menu-wrap > div")
    if (menuListRow2) {
        menuListRow2.classList.add("anatomi_menu_list_row");
    }
    const menuListKolon2 = document.querySelector("#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(5) > div.menu-wrap > div > div.menu-list-kolon")
    if (menuListKolon2) {
        menuListKolon2.classList.add("anatomi_menu_list_kolon");
    }
    const menuListImage2 = document.querySelector("#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(5) > div.menu-wrap > div > div.menu-list-image")
    if (menuListImage2) {
        menuListImage2.classList.add("anatomi_menu_list_image");
    }

};

const urun_dizilimi_duzenlemesi_init = () => {
    urun_dizilimi_duzenlemesi_html();
    urun_dizilimi_duzenlemesi_css();
    urun_dizilimi_duzenlemesi_js();
};

const urun_dizilimi_duzenlemesi_condition = () => {
    const device = window.innerWidth > 768;
    return device;
};

if (urun_dizilimi_duzenlemesi_condition()) {
    urun_dizilimi_duzenlemesi_init();
}
},500);