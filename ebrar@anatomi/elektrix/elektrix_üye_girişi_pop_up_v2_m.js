const deneme_html = () => {
  const html = `
  `;
};
const deneme_css = () => {
  const style = `
    <style>
    .popupInnerBlock {
      padding-top: 20px !important; 
    }
    .pWrapper {
    height: 450px !important;}

    .pWrapper .pBg {
      opacity: 0 !important;
      background-color: white !important;
    }
      #myPopupWin > div.box.col-12 > div {
  padding: 0px !important;
}
  .btn.active {
  background-color: white !important; 
  color: black !important;
  border-bottom: none !important;
  font-weight: bold;
}

 
  </style>
  `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};
const deneme_js = () => {
  const passwordBtn = document.querySelector(
    "#login-form > div.fl.col-12.popupInnerBlock > div.box.col-12.form-control.large.tooltipWrapper"
  );
  if (passwordBtn) {
    passwordBtn.classList.remove("tooltipWrapper");
  }


  const emailContainer = document.querySelector(
    "#popup-login-inputs > li > div"
  );
  if (emailContainer) {
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "E-Posta";
    emailLabel.setAttribute("for", "email"); 
    const emailInput = emailContainer.querySelector("input");
    if (emailInput) {
      emailInput.setAttribute("id", "email");
    }

    emailContainer.insertAdjacentElement("beforebegin", emailLabel); 
  }
  const emailInput = document.querySelector(
    "#popup-login-inputs > li > div > div > span"
  );
  if (emailInput) {
    emailInput.style.display = "none"; 
  }

  const passwordContainer = document.querySelector(
    "#login-form > div.fl.col-12.popupInnerBlock > div.box.col-12.form-control.large"
  );
  if (passwordContainer) {
    const passwordLabel = document.createElement("label");
    passwordLabel.textContent = "Şifre";
    passwordLabel.setAttribute("for", "password"); 
    const passwordInput = passwordContainer.querySelector("input");
    if (passwordInput) {
      passwordInput.setAttribute("id", "password");
    }

    passwordContainer.insertAdjacentElement("beforebegin", passwordLabel); 
  }
   const passwordInput = document.querySelector(
     "#login-form > div.fl.col-12.popupInnerBlock > div.box.col-12.form-control.large > div > span"
   );
   if (passwordInput) {
     passwordInput.style.display = "none";
   }

   const emailPlaceholder = document.querySelector("#email");
   if(emailPlaceholder){
     emailPlaceholder.setAttribute("style", "padding: 5px !important; background-color: #F2F2F2 !important;");
   }

   const passwordPlaceholder = document.querySelector("#password");
   passwordPlaceholder.setAttribute(
     "style",
     "padding: 5px !important; background-color: #F2F2F2 !important;"
   );

   
  const üye_giris_title = document.querySelector(
    "#login-form > div.col.col-12.mb.line-bottom.pageTitle.small-title"
  );
  if (üye_giris_title) {
    üye_giris_title.style.display = "none";
  }

  const üye_giris_info_p = document.querySelector(
    "#login-form > div.box.col-12"
  );
  if (üye_giris_info_p) {
    üye_giris_info_p.style.display = "none";
  }
  const üye_giris_facebook = document.querySelector(
    "#login-form > div.fl.col-12.popupInnerBlock > div:nth-child(5) > div > div > div > div:nth-child(2) > div > div:nth-child(1)"
  );
  if (üye_giris_facebook) {
    üye_giris_facebook.style.display = "none";
  }

  const üye_giris_twitter = document.querySelector(
    "#login-form > div.fl.col-12.popupInnerBlock > div:nth-child(5) > div > div > div > div:nth-child(2) > div > div:nth-child(2)"
  );
  if (üye_giris_twitter) {
    üye_giris_twitter.style.display = "none";
  }
  const üye_giris_container_wrapper = document.querySelector("#myPopupWin");
  if (üye_giris_container_wrapper) {
    üye_giris_container_wrapper.setAttribute(
      "style",
      "display: flex !important; align-items: center !important; justify-content: center !important; flex-direction: column !important; padding: 40px 0px;"
    );
  }

  const üye_giris_container = document.querySelector(
    "#myPopupWin > div.pText.col.col-12"
  );
  if (üye_giris_container) {
    üye_giris_container.setAttribute(
      "style",
      "background-color: white !important; width: 80% !important; border: 1px solid #80808073; border-top: none !important;"
    );
  }

  const üyeOlButonu = document.querySelector("a[href='/uye-kayit']");
  const pWin = document.querySelector("#myPopupWin");

  if (üyeOlButonu && pWin) {
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("box", "col-12", "anatomi_buttons_container");

    buttonContainer.style.display = "flex";
    buttonContainer.style.padding = "0px";
    buttonContainer.style.width = "80%";

    üyeOlButonu.style.backgroundColor = "#F2F2F2";
    üyeOlButonu.style.color = "black";

    const girisYapButonu = document.createElement("button");
    girisYapButonu.textContent = "GİRİŞ YAP";
    girisYapButonu.classList.add("btn", "active");
    girisYapButonu.style.backgroundColor = "#F2F2F2";
    girisYapButonu.style.color = "black";
    girisYapButonu.style.marginRight = "10px";
    girisYapButonu.style.width = "100%";
    girisYapButonu.style.height = "40px";
    girisYapButonu.style.borderTopLeftRadius = "8px";
    girisYapButonu.style.borderTopRightRadius = "8px";
    girisYapButonu.style.border = "1px solid #80808073";

    üyeOlButonu.style.borderTopLeftRadius = "8px";
    üyeOlButonu.style.borderTopRightRadius = "8px";
    üyeOlButonu.style.border = "1px solid #80808073";


    buttonContainer.appendChild(girisYapButonu);
    buttonContainer.appendChild(üyeOlButonu.closest(".box"));
    pWin.insertAdjacentElement("afterbegin", buttonContainer);
  }

  /*beni hatirla ve sifremi unuttum container olusturma*/

  const element1 = document.querySelector(
    "#login-form > div.fl.col-12.popupInnerBlock > div:nth-child(5) > div > div > div > div.box.p-left.fl"
  );

  const element2 = document.querySelector(
    "#login-form > div.fl.col-12.popupInnerBlock > div:nth-child(5) > div > div > div > div.box.fr.col-sm-12.p-bottom"
  );

  if (element1 && element2) {
    const newDiv = document.createElement("div");
    if (newDiv) {
      newDiv.setAttribute(
        "style",
        "display: flex !important; float:left; gap: 45px; padding-bottom: 20px;"
      );
    }

    newDiv.appendChild(element1);
    newDiv.appendChild(element2);

   const targetContainer = document.querySelector(
     "#login-form > div.fl.col-12.popupInnerBlock > div:nth-child(5) > div > div > div > div.row"
   );

   if (targetContainer) {
     targetContainer.insertAdjacentElement("beforebegin", newDiv); 
   }


  }

  const beniHatırlaLabel = document.querySelector(
    "#login-form > div.fl.col-12.popupInnerBlock > div:nth-child(5) > div > div > div > div:nth-child(1) > div.box.p-left.fl > span > label"
  );
  if (beniHatırlaLabel) {
    beniHatırlaLabel.style.whiteSpace = "nowrap";
    beniHatırlaLabel.style.fontSize = "14px";
    beniHatırlaLabel.style.color = "black";
  }


  const sifremiUnuttum = document.querySelector(
    "#popup-member-forgot-password"
  );
  if(sifremiUnuttum){
        sifremiUnuttum.style.whiteSpace = "nowrap";
        sifremiUnuttum.style.fontSize = "14px";
        sifremiUnuttum.style.color = "black";
        sifremiUnuttum.style.textDecoration = "underline";
        sifremiUnuttum.style.padding = "1px !important";
 
  }
  const infoİcon = document.querySelector("#popup-member-forgot-password > i");
  if(infoİcon){
    infoİcon.style.display = "none";
  
  }
  const container = document.querySelector(".box.col-12.anatomi_buttons_container");
  const buttons = container.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });






};
const deneme_init = () => {
  deneme_html();
  deneme_css();
  deneme_js();
};
const deneme_condition = () => {
    return window.innerWidth <= 768;
};
if (deneme_condition()) {
  deneme_init();
}
