
  const hamburger_menu_redesign_html = () => {
    const html = `
    `;
  }
  const hamburger_menu_redesign_css =() => {
    const style = `
      <style>
      .anatomi_login_and_language_container{
    order: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    padding: 10px 10px;
      }
    .anatomi_login_container{
    display: flex !important;
    margin: 0px !important;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 500px !important;
    max-width: 300px !important;
    }
    .anatomi_login_container a {
        margin: 0px !important;
        text-align: center;
        font-size: .8rem !important;
        height: 31.5px;
        display: flex !important;
        align-items: center;
        justify-content: center;
        padding: 0px !important;
    }
    .anatomi_language_container{
     margin-bottom: 0px;
    margin-top: 0px;
    justify-content: center;
    align-items: center;
  }
    .anatomi_language_container a{
        padding: 8px 15px !important;
        font-weight: bold;
    }
    .anatomi_dropdown_item{
        margin: 0px !important;
        transition: background-color 0.3s ease, color 0.3s ease;
    }
    .anatomi_dropdown_item:hover{
      color: white;
      background-color: #2A338F;
    }
    .anatomi_hb_navbar{
      padding: 0px !important;
    }
    .anatomi_hb_navbar_li:first-child {
     border-top: none !important;
  }
  
    .anatomi_hb_navbar_li{
      border-top: 1px solid #80808054;
      margin: 0px !important;
      padding: 10px 20px;
    }
    .anatomi_hb_navbar_anchor{
      font-size: 14px !important;
    }
    .anatomi_hb_submenu_content{
    height: fit-content !important;
      padding: 0px;
  
    }
      .anatomi_hb_submenu_content_a{
            border-bottom: none !important;
      font-size: 12px !important;
      opacity: 1 !important;
      font-weight: bold !important;
      }
      .anatomi_hb_submenu_right{
        padding: 10px 0px !important;
      }
     .submenu>.submenu-toggle:after {
      float: right !important;
      }
      .submenu-content .submenu-list li a {
      position: relative; 
  }
  
  .submenu-content .submenu-list li a:after {
      content: "";
      width: 0;
      height: 0;
      border-top: 3px solid transparent;
      border-left: 6px solid #2a338f;
      border-bottom: 3px solid transparent;
      position: absolute;
      right: 10px;
      top: 10px;
      transition: transform 0.3s ease-in-out;
  }
  
  .submenu-content .submenu-list li a.active:after {
      transform: rotate(90deg);
  }
  .submenu>.submenu-toggle:after {
    transform: rotate(270deg);
    transition: transform 0.3s ease-in-out;
  }
  .submenu.active>.submenu-toggle:after {
    transform: rotate(360deg);
    transition: transform 0.3s ease-in-out;
  }
      .donusum-menu .submenu-list .last-link a::after, .submenu-content .submenu-list li.last-link a:after  {
        top: 0px !important;
        width: 15px !important;
        height: 15px !important;
      }
  header.header .navbar-collapse .close{
    right: 0px !important;
    background: none;
    }
  .header.header .navbar-collapse .close a{
    background: url("https://r.resimlink.com/Pp6wIe2.png") center center / 100% no-repeat;
    width: 15px;
  
  }
  .anatomi_hb_advertise_image_container{
       order: 4;
      display: flex;
      justify-content: center;
      padding: 20px 0px;
  }  
  .anatomi_hb_advertise_image{
    width: 320px;
    height: 250px;
  }
  
  
    </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
  }
  const hamburger_menu_redesign_js = () => {
    generateHamburgerMenuCss = () => {

        const hamburgerMenuGorsel = document.querySelector("#top-bar-container")
        if(hamburgerMenuGorsel){
          hamburgerMenuGorsel.style.display = "none";
        }
        const mobileHeadContainer = document.querySelector("#navbarSupportedContent > div > div.mobile-head.hidden")
        let loginAndLanguageContainer = document.querySelector(".anatomi_login_and_language_container");

        if (!loginAndLanguageContainer) {
            loginAndLanguageContainer = document.createElement("div");
            loginAndLanguageContainer.classList.add("anatomi_login_and_language_container");
        
            if (mobileHeadContainer) {
                mobileHeadContainer.insertAdjacentElement("afterend", loginAndLanguageContainer);
            }
        }
        
        const loginContainer = document.querySelector("#navbarSupportedContent > div > div.login-group.hidden")
        if(loginContainer){
            loginContainer.classList.add("anatomi_login_container");
        }
        const languageContainer= document.querySelector("#navbarSupportedContent > div > div.languages.d-flex.mx-0.mx-lg-3")
        if(languageContainer){
            languageContainer.classList.add("anatomi_language_container");
            }
        if(loginAndLanguageContainer && loginContainer && languageContainer){
            loginAndLanguageContainer.appendChild(loginContainer);
            loginAndLanguageContainer.appendChild(languageContainer);
        }
        const dropdownItem = document.querySelector("#navbarSupportedContent > div > div.anatomi_login_and_language_container > div.languages.d-flex.mx-0.mx-lg-3.anatomi_language_container > a")
        if(dropdownItem){
            dropdownItem.classList.add("anatomi_dropdown_item");
        }
        const navbar = document.querySelector("#navbarSupportedContent > div > ul")
        if(navbar && !navbar.classList.contains("anatomi_hb_navbar")){
          navbar.classList.add("anatomi_hb_navbar");
        }
        const navbarLi = document.querySelectorAll("#navbarSupportedContent > div > ul > li");
        navbarLi.forEach(li => {
          if(li && !li.classList.contains("anatomi_hb_navbar_li")){
          li.classList.add("anatomi_hb_navbar_li");
          }
        });
     
        const navbarAnchors = document.querySelectorAll("#navbarSupportedContent > div > ul > li > a");
        if(navbarAnchors){
          navbarAnchors.forEach(anchor => {
            if(anchor && !anchor.classList.contains("anatomi_hb_navbar_a")){
              anchor.classList.add("anatomi_hb_navbar_anchor");
              }
          });}
        const submenuContent = document.querySelectorAll("#navbarSupportedContent > div > ul > li.nav-item.submenu > div")
        if(submenuContent){
          submenuContent.forEach(content => {
            if(content && !content.classList.contains("anatomi_hb_submenu_content")){
              content.classList.add("anatomi_hb_submenu_content");
              }
          });
        }
        const submenuContentA = document.querySelectorAll("#navbarSupportedContent > div > ul > li.nav-item.submenu > div > div.right > ul > li> a")
        if(submenuContentA){
          submenuContentA.forEach(a => {
            if(a && !a.classList.contains("anatomi_hb_submenu_content_a")){
              a.classList.add("anatomi_hb_submenu_content_a");
              }
          });
        }
        const submenuRight = document.querySelectorAll("#navbarSupportedContent > div > ul > li.nav-item.submenu > div > div.right")
        if(submenuRight){
          submenuRight.forEach(right => {
            if(right && !right.classList.contains("anatomi_hb_submenu_right")){
              right.classList.add("anatomi_hb_submenu_right");
              }
          });
        }
        document.querySelectorAll(".submenu-content .submenu-list li a").forEach(item => {
          item.addEventListener("click", () => {
              item.classList.toggle("active");
          });
      });
      
        const secondSubmenuA = document.querySelectorAll("#navbarSupportedContent > div > ul > li.nav-item.submenu> div > div.right> ul > li > ul > li> a")
        if(secondSubmenuA){
          secondSubmenuA.forEach(a => {
            if(a && !a.classList.contains("anatomi_hb_submenu_content_a")){
              a.classList.add("anatomi_hb_submenu_content_a");
              } });
            };
            let advertiseImageContainer = document.querySelector(".anatomi_hb_advertise_image_container");

            if (!advertiseImageContainer) {
                advertiseImageContainer = document.createElement("div");
                advertiseImageContainer.classList.add("anatomi_hb_advertise_image_container");
            
                const advertiseImage = document.createElement("img");
                advertiseImage.classList.add("anatomi_hb_advertise_image");
                advertiseImage.src = "https://r.resimlink.com/m8SqO-eZ.png";
            
                advertiseImageContainer.appendChild(advertiseImage);
            
                const targetElement = document.querySelector("#navbarSupportedContent > div > ul");
                if (targetElement) {
                    targetElement.insertAdjacentElement("afterend", advertiseImageContainer);
                }
            }
            
      }
    generateHamburgerMenuCss();
    
  }
  const hamburger_menu_redesign_init = () => {
    hamburger_menu_redesign_html();
    hamburger_menu_redesign_css();
    hamburger_menu_redesign_js();
  }
  const hamburger_menu_redesign_condition = () => {
        const device = window.innerWidth <= 768;
        return device;
  }
  if(hamburger_menu_redesign_condition()){
    hamburger_menu_redesign_init();
  }
  
  
  
