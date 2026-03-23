const navbar_eklemesi_html = () => {

  const html = `
       <nav id="anatomi_navbar">
          <div class="anatomi_navbar-container">
            <div class="anatomi_navbar-left">
            <a href= "https://www.carglass.com.tr/">
             <img
                src="https://i.hizliresim.com/lk5vvyy.JPG"
                alt="Logo"
                class="anatomi_navbar-logo" /></a>
             
            </div>
            <div class="anatomi_navbar-center">
              <div id="anatomi_responsive_hamburger_menu">
                <div class="anatomi_hamburger_icon" id="anatomi_hamburger_icon">
                  &#9776;
                </div>
                <div id="anatomi_sidebar" class="anatomi_sidebar">
                  <span id="anatomi_closebutton" class="anatomi_closebutton">
                    &times;
                  </span>
                  <ul id="anatomi_responsive_navbar">
                    <li onclick="location.href='/'">Ana Sayfa</li>
                    <li class="anatomi_dropdown-trigger" >Oto Cam Hasarı <i class="fa-solid fa-caret-down"></i>
                        <ul class="anatomi_dropdown">
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=15'">Oto Cam Hasarı</li>
                        <li class="anatomi_nested-dropdown-trigger">Ön Cam Hasarı <i class="fa-solid fa-caret-down"></i>
                            <ul class="anatomi_dropdown">
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=16'">Ön Cam Tamiri</li>
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=23'">Küçük Çatlak Tamiri</li>
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=24'">Ön Cam Çatlak Tamiri</li>
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=25'">Ön Cam Değişimi</li>
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=26'">Ön Cam Tamir Ücreti</li>
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=27'">Kalite ve Garantimiz</li>
                            </ul>
                        </li>
                        <li class="anatomi_nested-dropdown-trigger">Yan Cam Hasarı <i class="fa-solid fa-caret-down"></i>
                            <ul class="anatomi_dropdown">
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=28'">Yan Cam Değişimi</li>
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=29'">Yan Cam Ücreti</li>
                            </ul>
                        </li>
                        <li class="anatomi_nested-dropdown-trigger">Arka Cam Hasarı <i class="fa-solid fa-caret-down"></i>
                            <ul class="anatomi_dropdown">
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=30'">Arka Cam Değişimi</li>
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=31'">Arka Cam Değişim Ücreti</li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                     <li class="anatomi_dropdown-trigger" >Cam Fiyatları <i class="fa-solid fa-caret-down"></i>
                        <ul class="anatomi_dropdown">
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=35'">Cam Fiyatları</li>
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=32'">Ön Cam Ücreti</li>
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=33'">Yan Cam Ücreti</li>
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=34'">Arka Cam Ücreti</li>
                        </ul>
                    </li>
                    <li onclick="location.href='/Sayfa/Bayiler'">Hizmet Ağımız</li>
                    <li class="anatomi_dropdown-trigger" >Kurumsal<i class="fa-solid fa-caret-down"></i>
                        <ul class="anatomi_dropdown">
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='#'">Kurumsal</li>
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=36'">Hakkımızda</li>
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=1'">Biz Kimiz</li>
                         <li onclick="location.href='/insan-kaynaklari'">
                        İnsan Kaynakları
                        </li>
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=2'"> Global Ağımız</li>
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=37'">Hizmetlerimiz</li>
                        </ul>
                    </li>
                    <li onclick="location.href='/Sayfa/iletisim'">İletişim</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="anatomi_navbar-right">
              <button
                class="anatomi_randevu-btn"
                onclick="window.location.href='/Randevu/BayiSec';">
                Randevu Alın
              </button>
            </div>
          </div>
        </nav>
    `;
      const headerBtm = document.querySelector("#header-btm");
      if (headerBtm) {
        headerBtm.insertAdjacentHTML("beforebegin", html);
      }
};
const navbar_eklemesi_css = () => {
  const style = `
      <style>
       #header {
      padding-top: 0;
    }
    
    .menu-wrapper {
      border: none !important;
      margin-top: 0 !important;
      padding: 0 !important;
      font-weight: bold;
    }
    
    .menu-wrapper li a {
      font-weight: bold !important;
    }
    
    #anatomi_navbar {
      width: 100%;
      padding: 20px 0;
    }
    
    .anatomi_navbar-container {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 0px 20px;
    }
    
    .anatomi_navbar-logo {
    
      width: 200px;
    }
    .anatomi_navbar-right{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .anatomi_navbar_phone-number {  
    font-size: 18px !important;
    font-weight: bold !important;
    padding-bottom: 0px !important;
    white-space: nowrap !important;
    }
    .anatomi_randevu-btn {
      background-color: #fedd44;
      color: #1e1e1e;
      padding: 5px 20px;
      font-size: 15px;
      font-weight: bold;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
      white-space: nowrap;
    }


    .anatomi_hamburger_icon {
      font-size: 24px;
      cursor: pointer;
      display: none; 
    }
    
    .anatomi_sidebar {
      position: fixed;
      top: 0;
      right: -300px; 
      width: 250px;
      height: 100%;
      background-color: #000000f5;
      color: #fff;
      transition: right 0.3s ease;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      overflow-y: auto;
    }
    
    .anatomi_closebutton  {
      font-size: 24px;
      color: #fff;
      padding: 10px;
      cursor: pointer;
      align-self: flex-end;
      margin-right: 10px;
    }
    
    #anatomi_responsive_navbar {
      list-style-type: none;
      padding: 0;
      width: 100%;
    }
    
    #anatomi_responsive_navbar li {
      padding: 15px 20px;
      cursor: pointer;
      width: 100%;
      transition: background-color 0.3s ease;
    }
    
    .anatomi_dropdown-trigger {
        cursor: pointer; 
        padding: 10px 15px; 
    }
    
    .anatomi_dropdown-trigger i{
        position: absolute;
        right: 15px;
    }
    
    .anatomi_dropdown {
        display: none;
        padding-left: 20px;
        margin-top: 15px;
    }
    
    .anatomi_dropdown-trigger.active + .anatomi_dropdown {
        display: block;
    }
    
    .anatomi_dropdown-item {
        padding: 15px 0px; 
        cursor: pointer; 
    }
    
    .anatomi_nested-dropdown-trigger {
        padding:15px 0px !important; 
        cursor: pointer; 
    }
    
    .anatomi_nested-dropdown-trigger.active + .anatomi_nested-dropdown {
        display: block;
    }
    


       @media (max-width: 768px) {
    .anatomi_navbar-container {
      justify-content: space-between;
    }
      .anatomi_hamburger_icon {
        display: block;
      }
      .anatomi_navbar-right {
        display: none;
      }
}
      
    </style>
    `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};
const navbar_eklemesi_js = () => {
      const change_location_menu_wrapper = () => {
        const menu_wrapper = document.querySelector(
          "#header > div.menu-wrapper"
        );
        const anatomi_navbar_center = document.querySelector(
          ".anatomi_navbar-center"
        );

        if (menu_wrapper && anatomi_navbar_center) {
          anatomi_navbar_center.insertAdjacentElement(
            "afterbegin",
            menu_wrapper
          );
        }
      };

      change_location_menu_wrapper();

      const generate_homepage_section = () => {
        const header_in_container_remove = document.querySelector(
          "#header > div.container"
        );
        if (header_in_container_remove) {
          header_in_container_remove.style.display = "none";
        }

        const orijinal_anasayfa_footer = document.querySelector("#footer");
        if (orijinal_anasayfa_footer) {
          orijinal_anasayfa_footer.style.display = "none";
        }

        const orijinal_anasayfa_responsive_select_menu = document.querySelector(
          "#smoothmenu > select"
        );
        if (orijinal_anasayfa_responsive_select_menu) {
          orijinal_anasayfa_responsive_select_menu.style.display = "none";
        }

        const orijinal_menu_wrapper_container = document.querySelector(
          "#anatomi_navbar > div > div.anatomi_navbar-center > div.menu-wrapper > div"
        );
        if (orijinal_menu_wrapper_container) {
          orijinal_menu_wrapper_container.classList.remove("container");
        }

        const orijinal_menu_wrapper_row = document.querySelector(
          "#anatomi_navbar > div > div.anatomi_navbar-center > div.menu-wrapper > div > div"
        );
        if (orijinal_menu_wrapper_row) {
          orijinal_menu_wrapper_row.classList.remove("row");
        }

        const orijinal_menu_wrapper_span12 = document.querySelector(
          "#anatomi_navbar > div > div.anatomi_navbar-center > div.menu-wrapper > div > div > div"
        );
        if (orijinal_menu_wrapper_span12) {
          orijinal_menu_wrapper_span12.classList.remove("span12");
        }

        const anatomi_hero_section = document.querySelector(
          ".anatomi_hero-section"
        );
        if (anatomi_hero_section && anasayfa_orijinal_content) {
          anatomi_hero_section.insertAdjacentElement(
            "beforebegin",
            anasayfa_orijinal_content
          );
        }
      };

      generate_homepage_section();

        const handle_remove_old_menu = () => {
          const menu = document.querySelector(
            "#anatomi_navbar > div > div.anatomi_navbar-center > div.menu-wrapper"
          );
          if (menu && window.innerWidth <= 768) {
            menu.style.display = "none";
          }
        };
        handle_remove_old_menu();

         const generate_hamburger_menu = () => {
           document
             .querySelectorAll(".anatomi_dropdown-trigger")
             .forEach((trigger) => {
               trigger.addEventListener("click", function (e) {
                 e.stopPropagation();
                 const dropdown = this.querySelector(".anatomi_dropdown");

                 if (dropdown) {
                   if (dropdown.style.display === "block") {
                     dropdown.style.display = "none";
                   } else {
                     dropdown.style.display = "block";
                   }
                 }
               });
             });

           document
             .querySelectorAll(".anatomi_nested-dropdown-trigger")
             .forEach((trigger) => {
               trigger.addEventListener("click", function (e) {
                 e.stopPropagation();
                 const nestedDropdown = this.querySelector(".anatomi_dropdown");

                 if (nestedDropdown) {
                   if (nestedDropdown.style.display === "block") {
                     nestedDropdown.style.display = "none";
                   } else {
                     nestedDropdown.style.display = "block";
                   }
                 }
               });
             });

           document.addEventListener("click", () => {
             document.querySelectorAll(".anatomi_dropdown").forEach((menu) => {
               menu.style.display = "none";
             });
           });
         };

         generate_hamburger_menu();
}
const navbar_eklemesi_init = () => {
  navbar_eklemesi_html();
  navbar_eklemesi_css();
  navbar_eklemesi_js();
};
const navbar_eklemesi_condition = () => {
    return window.location.pathname !== "/";
};
if (navbar_eklemesi_condition()) {
  navbar_eklemesi_init();
}
