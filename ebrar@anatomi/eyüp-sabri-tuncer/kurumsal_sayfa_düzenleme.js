setTimeout(() => {
    const kurumsal_sayfa_düzenleme_html = () => {};

const kurumsal_sayfa_düzenleme_css = () => {
    const style = `
      <style>
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const kurumsal_sayfa_düzenleme_js = () => {
    const generateTarihcemiz = () => {
        const tarihcemizContainer = document.querySelector("#kurumsal-content-block");

        if (!tarihcemizContainer) return;
    
        const observer = new MutationObserver(() => {
            const transition = getComputedStyle(tarihcemizContainer).transitionDuration;
    
            if (transition === "0.4s") {
                tarihcemizContainer.style.marginTop = "350px";
            } else if (transition === "0.7s") {
                tarihcemizContainer.style.marginTop = "0px";
            }
        });
    
        observer.observe(tarihcemizContainer, {
            attributes: true,
            attributeFilter: ["style", "class"]
        });
    
        const kurumsalTarihcemiz = document.querySelector("#divCenterBlock > div:nth-child(2) > div.mainContainer4.d-flex > div.mainContainer5.container.col-12 > div.pagePath > ul > li:nth-child(2)")
        if(kurumsalTarihcemiz){
            kurumsalTarihcemiz.style.display = "none";
        }
    }

    const generatePolitikalar = () => {
       const kurumsalPolitikalar = document.querySelector("#divCenterBlock > div:nth-child(2) > div.mainContainer4.d-flex > div.mainContainer5.container > div.pagePath > ul > li:nth-child(2)")
        if(kurumsalPolitikalar){
            kurumsalPolitikalar.style.display = "none";
        }
    } 

    const generateHaberler = () => {
        const kurumsalHaberler = document.querySelector("#divCenterBlock > div:nth-child(2) > div.mainContainer4.d-flex > div.mainContainer5.container > div.pagePath > ul > li:nth-child(2)")
        if(kurumsalHaberler){
            kurumsalHaberler.style.display = "none";
        }

    }

    const currentUrl = window.location.pathname;
    if (currentUrl === "/tarihcemiz") {
        generateTarihcemiz();
    } else if (currentUrl === "/politikalar") {
        generatePolitikalar();
    } else if (currentUrl === "/haberler") {
        generateHaberler();
    }
  
};

const kurumsal_sayfa_düzenleme_init = () => {
    kurumsal_sayfa_düzenleme_html();
    kurumsal_sayfa_düzenleme_css();
    kurumsal_sayfa_düzenleme_js();
};

const kurumsal_sayfa_düzenleme_condition = () => {
    return true;
};

if (kurumsal_sayfa_düzenleme_condition()) {
    kurumsal_sayfa_düzenleme_init();
}
}, 500);