const elektrix_üye_girişi_pop_up_html = () => {
  const html = `
  `;
};
const elektrix_üye_girişi_pop_up_css = () => {
  const style = `
    <style>
   
    .popupClose:before, .close:before {
    font-size: 20px !important;
    padding: 5px 0px;
    }

    .anatomi_uyeGirisTitle {
        border:none !important;
        color:black !important;
    }

    .anatomi_uyeGirisiIcon {
        color:black !important;

    }
    .anatomi_formCloseBtn {
        z-index:99999 !important; 
        background: none !important; 
        left:unset !important; 
        right:10px !important; 
        width:30px !important; 
        height:30px !important;
    }
    .anatomi_passwordInput {
        display: none !important;
    }
  
    .anatomi_uyeGirisInfoP {
        display: none !important;
    }
    .anatomi_uyeGirisContainerWrapper {
        display: flex !important; 
        align-items: center !important; 
        justify-content: center !important; 
        flex-direction: column !important; 
        padding: 30px 0px; 
        background: white !important;
    }
    .anatomi_uyeGirisContainer {
    background-color: white !important; 
    width: 80% !important; 
    height:500px; 
    border: 1px solid #80808043; 
    border-radius: 5px; 
    padding-top: 15px !important; 
    overflow-y: hidden !important;
}

    .anatomi_infoIcon {
        display: none !important;
    }
    .anatomi_socialMediaContainer {
    display: flex !important;
    justify-content: center !important;
    padding: 10px 0px !important;

    }

    .anatomi_beniHatirlaLabel {
        white-space: nowrap !important;
        color: black !important;
        font-weight: 600 !important;
    }
    
    .anatomi_sifremiUnuttum{
        color: black !important;
        font-weight: 600 !important;
        white-space: nowrap !important;
        text-decoration: underline !important;
        padding: 1px !important;
    }
    .anatomi_girisYapBtn {
    border-radius: 5px !important; 
    text-transform: capitalize;
    font-weight: 600 !important;
    }
    .anatomi_orText{
        color: black !important;
        font-weight: 600 !important;
        text-align: center !important;

    }
    .anatomi_emailLabel , .anatomi_passwordLabel {
        font-weight: 600 !important;
    }
    .anatomi_emailInput {
        display: none !important;
    }

    .anatomi_uyeOlBtn{
    color:black !important; 
    background-color:white !important; 
    font-weight:bold !important; 
    text-transform:capitalize !important; 
    border:1px solid #80808073 !important; 
    border-radius:5px !important;
    }
  </style>
  `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};
const elektrix_üye_girişi_pop_up_js = () => {

    
           const uyeOlBtn = document.querySelector(
             "#login-form > div.fl.col-12.popupInnerBlock > div:nth-child(4) > div > div > div > div.row > div:nth-child(2) > a"
           );
           if (uyeOlBtn) {
            uyeOlBtn.classList.add("anatomi_uyeOlBtn");
           }

   
        const üyeGirisTitle = document.querySelector(
          "#login-form > div.col.col-12.mb.line-bottom.pageTitle.small-title"
        );
        if (üyeGirisTitle) {
          üyeGirisTitle.classList.add("anatomi_uyeGirisTitle");
        }

        const üyeGirisiİcon = document.querySelector(
          "#login-form > div.col.col-12.mb.line-bottom.pageTitle.small-title > i"
        );
        if (üyeGirisiİcon) {
          üyeGirisiİcon.classList.remove = "text-custom-pink";
          üyeGirisiİcon.classList.add("anatomi_uyeGirisiIcon");
        }

        const formCloseBtn = document.querySelector(
          "body > div.pWrapper > div > div.pBg.close"
        );
        if (formCloseBtn) {
          formCloseBtn.classList.add("anatomi_formCloseBtn");
        }

        const passwordBtn = document.querySelector(
          "#login-form > div.fl.col-12.popupInnerBlock > div.box.col-12.form-control.large.tooltipWrapper"
        );
        if (passwordBtn) {
          passwordBtn.classList.remove("tooltipWrapper");
        }

        const pWrapper = document.querySelector("body > div.pWrapper");
        if (pWrapper) {
          if (getComputedStyle(pWrapper).height === "220px") {
            pWrapper.style.height = "550px";
          } else {
            pWrapper.style.height = "100%";
            formCloseBtn.style.display = "none";
            üyeGirisTitle.style.marginBottom = "20px";
          }
        }

        const emailContainer = document.querySelector(
          "#popup-login-inputs > li > div"
        );
        if (emailContainer) {
          const emailLabel = document.createElement("label");
          emailLabel.textContent = "E-Posta";
          emailLabel.classList.add("anatomi_emailLabel");

          emailContainer.insertAdjacentElement("beforebegin", emailLabel);
        }

        const emailInput = document.querySelector(
          "#popup-login-inputs > li > div > div > span"
        );
        if (emailInput) {
          emailInput.classList.add("anatomi_emailInput");
        }

        const passwordContainer = document.querySelector(
          "#login-form > div.fl.col-12.popupInnerBlock > div.box.col-12.form-control.large"
        );
        if (passwordContainer) {
          const passwordLabel = document.createElement("label");
          passwordLabel.textContent = "Şifre";
          passwordLabel.classList.add("anatomi_passwordLabel");
          passwordContainer.insertAdjacentElement("beforebegin", passwordLabel);
        }

        const passwordInput = document.querySelector(
          "#login-form > div.fl.col-12.popupInnerBlock > div.box.col-12.form-control.large > div > span"
        );
        if (passwordInput) {
          passwordInput.classList.add("anatomi_passwordInput");
        }

        const emailPlaceholder = document.querySelector("#pop-email");
        if (emailPlaceholder) {
          emailPlaceholder.setAttribute(
            "style",
            "padding: 5px !important; background-color: #F2F2F2 !important; border-radius: 5px !important;"
          );
        }

        const passwordPlaceholder = document.querySelector("#pop-password");
        if (passwordPlaceholder) {
          passwordPlaceholder.setAttribute(
            "style",
            "padding: 5px !important; background-color: #F2F2F2 !important; border-radius: 5px !important;"
          );
        }

        const üye_giris_info_p = document.querySelector(
          "#login-form > div.box.col-12"
        );
        if (üye_giris_info_p) {
          üye_giris_info_p.classList.add("anatomi_uyeGirisInfoP");
        }

        const üye_giris_container_wrapper =
          document.querySelector("#myPopupWin");
        if (üye_giris_container_wrapper) {
          üye_giris_container_wrapper.classList.add(
            "anatomi_uyeGirisContainerWrapper"
          );
        }

        const üye_giris_container = document.querySelector(
          "#myPopupWin > div.pText.col.col-12"
        );
        if (üye_giris_container) {
          üye_giris_container.classList.add("anatomi_uyeGirisContainer");
        }

        const infoİcon = document.querySelector(
          "#popup-member-forgot-password > i"
        );
        if (infoİcon) {
          infoİcon.classList.add("anatomi_infoIcon");
        }

        const element1 = document.querySelector(
          "#login-form > div.fl.col-12.popupInnerBlock > div:nth-child(5) > div > div > div > div.box.p-left.fl"
        );

        const element2 = document.querySelector(
          "#login-form > div.fl.col-12.popupInnerBlock > div:nth-child(5) > div > div > div > div.box.fr.col-sm-12.p-bottom"
        );

        if (element1 && element2) {
          const newDiv = document.createElement("div");
          if (newDiv) {
            (newDiv.className = "box"), "col-sm-12";
            newDiv.setAttribute(
              "style",
              "display: flex !important; padding:0px; gap: 65px;"
            );
          }

          newDiv.appendChild(element1);
          newDiv.appendChild(element2);

          const targetContainer = document.querySelector(
            "#login-form > div.fl.col-12.popupInnerBlock > div:nth-child(5) > div > div > div > div:nth-child(2)"
          );

          if (targetContainer) {
            targetContainer.insertAdjacentElement("beforebegin", newDiv);
          }
        }

        const socialMediaContainer = document.querySelector(
          "#login-form > div.fl.col-12.popupInnerBlock > div:nth-child(5) > div > div > div > div.box.col-sm-12.p-bottom > div"
        );

        if (socialMediaContainer) {
          socialMediaContainer.classList.add("anatomi_socialMediaContainer");
        }

        const facebookContainer = document.querySelector(
          "#login-form > div.fl.col-12.popupInnerBlock > div:nth-child(5) > div > div > div > div:nth-child(2)"
        );
        const twitterContainer = document.querySelector(
          "#login-form > div.fl.col-12.popupInnerBlock > div:nth-child(5) > div > div > div > div.box.col-sm-12.p-bottom"
        );
        const girisContainer = document.querySelector(
          "#login-form > div.fl.col-12.popupInnerBlock > div:nth-child(5) > div > div > div > div.row"
        );
        if (facebookContainer && twitterContainer && girisContainer) {
          girisContainer.insertAdjacentElement(
            "beforebegin",
            facebookContainer
          );
          girisContainer.insertAdjacentElement("beforebegin", twitterContainer);
        }
        if (girisContainer) {
          girisContainer.style.paddingTop = "10px";
        }

        const beniHatirlaLabel = document.querySelector(
          "#login-form > div.fl.col-12.popupInnerBlock > div:nth-child(5) > div > div > div > div:nth-child(1) > div.box.p-left.fl > span > label > span:nth-child(3)"
        );
        if (beniHatirlaLabel) {
          beniHatirlaLabel.classList.add("anatomi_beniHatirlaLabel");
        }

        const sifremiUnuttum = document.querySelector(
          "#popup-member-forgot-password"
        );
        if (sifremiUnuttum) {
          sifremiUnuttum.classList.add("anatomi_sifremiUnuttum");
        }

        const facebookIleGiris = document.querySelector(
          "#popup-member-login-facebook"
        );
        if (facebookIleGiris) {
          facebookIleGiris.style.whiteSpace = "nowrap";
        }
     

        const girisYapBtn = document.querySelector("#popup-member-login");
        if (girisYapBtn) {
          girisYapBtn.classList.add("anatomi_girisYapBtn");
        }

        const girisYapButonu = document.querySelector(
          "#login-form > div.fl.col-12.popupInnerBlock > div:nth-child(5) > div > div > div > div.row > div.box.p-top.fr.col-6.col-sm-12"
        );
        if (girisYapButonu) {
          const orText = document.createElement("p");
          orText.textContent = "Ya da";
          orText.classList.add("anatomi_orText");

          girisYapButonu.insertAdjacentElement("afterend", orText);
        }
   
  
};
const elektrix_üye_girişi_pop_up_init = () => {
  elektrix_üye_girişi_pop_up_html();
  elektrix_üye_girişi_pop_up_css();
  elektrix_üye_girişi_pop_up_js();
};
const elektrix_üye_girişi_pop_up_condition = () => {
    return window.innerWidth <= 768;
};
if (elektrix_üye_girişi_pop_up_condition()) {
  elektrix_üye_girişi_pop_up_init();
}
