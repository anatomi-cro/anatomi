const kampanya_header_html = () => {};

const kampanya_header_css = () => {
    const style = `
      <style>
      .anatomi_header_section{
              background: none !important;
        background-color: #D60D0D !important;
      }
        .anatomi_header_section::before {
        content: "";
        background: url("https://r.resimlink.com/LsRdkYhq0l37.png") no-repeat center;
        background-size: contain;
        width: 20px;
        height: 20px;
        display: inline-block;
        margin-right: 8px;
      }
     
        @media (max-width: 768px) {
          #header-bar {
            overflow: hidden;
            position: relative;
          }

        
        }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const kampanya_header_js = () => {
    const addInfoSectionDesktop = () => {
        const kargoInfoContainer = document.querySelector("#header-bar")
        if(kargoInfoContainer && !kargoInfoContainer.classList.contains("anatomi_header_section")){
            kargoInfoContainer.classList.add("anatomi_header_section")
            kargoInfoContainer.textContent = "7-8-9 Mayıs tarihlerinde 5.000 TL üzeri Alışverişlerinizde %10 İndirim!"
        }
        
     
    };
    const addInfoSectionMobile = () => {
       
        const kargoInfoContainer = document.querySelector("#header-bar");

        if (kargoInfoContainer && !kargoInfoContainer.classList.contains("anatomi_header_section")) {
            kargoInfoContainer.classList.add("anatomi_header_section");
            kargoInfoContainer.textContent = "7-8-9 Mayıs tarihlerinde 5.000 TL üzeri Alışverişlerinizde %10 İndirim!"
        }
          
    };
    

    const checkScreenSize = () => {
        if (window.innerWidth > 768) {
            addInfoSectionDesktop();
        } else {
            addInfoSectionMobile();
        }
    };

    setInterval(() => {
        checkScreenSize();
        }, 100);
};

const kampanya_header_init = () => {
    kampanya_header_html();
    kampanya_header_css();
    kampanya_header_js();
};

const kampanya_header_condition = () => {
    return true;
};

if (kampanya_header_condition()) {
    kampanya_header_init();
}