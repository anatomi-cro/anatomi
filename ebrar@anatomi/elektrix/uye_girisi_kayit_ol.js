const uyeOl_GirisYap_html = () => {
  const html = `
    <div class="anatomi_authentication_tab_container">
      <div class="anatomi_authentication_tab_content">
        <div class="anatomi_authentication_tab_buttons">
                  <span class="anatomi_line"></span>
          <div
            class="anatomi_authentication_tab_button anatomi_authentication_tab_button_login anatomi_button_active"
          >
            <p class="anatomi_authentication_tab_button_text">Giriş Yap</p>
          </div>
          <div
            class="anatomi_authentication_tab_button anatomi_authentication_tab_button_register"
          >
            <p class="anatomi_authentication_tab_button_text">
              Üye Olmadan Devam Et
            </p>
          </div>
        </div>

        <div class="anatomi_authentication_tab_body">
          <div class="anatomi_authentication_tab_login anatomi_authentication_tab_body_active">
          </div>
          <div class="anatomi_authentication_tab_register"></div>
        </div>

              <a href="https://www.elektrix.com/uye-kayit" class="anatomi_uyeOl_button anatomi_uyeOl_button_active">Üye Ol</a>
      </div>
    </div>
  `;

  const container = document.querySelector("#skeleton");
  const element = document.querySelector(
    ".anatomi_authentication_tab_container"
  );

  if (container && !element) {
    container.insertAdjacentHTML("beforeend", html);
  }
};

const uyeOl_GirisYap_css = () => {
  const stlye = `
      <style id= "anatomi_authentication_tab_css">
      .anatomi_authentication_tab_container {
width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 0px 0 30px 0;
    box-sizing: border-box;
      }

      .anatomi_uyeOl_button {
          width: 400px;
    height: 40px;
    border: 2px solid #0581BF;
    display: none;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    border-radius: 6px;
    color: #0581BF;
    font-weight: 700;
      }

      .anatomi_uyeOl_button.anatomi_uyeOl_button_active {
      display:flex;
      }

      .anatomi_authentication_tab_content {
        width: 400px;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
      }

      .anatomi_authentication_tab_buttons {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        position: relative;
      }

      .anatomi_authentication_tab_button {
        width: 48%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-color: #F2F2F2;
        border: 1px solid #C4C4C4;
        font-size: 12px;
        font-weight: 500;
        color: #1D1D1D;
      }

      .anatomi_authentication_tab_button:nth-child(2){
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        border-bottom: 1px solid #C4C4C4 ;
        box-sizing: border-box;
      }

      .anatomi_authentication_tab_button:nth-child(3){
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
        border-bottom: 1px solid #C4C4C4;
        box-sizing: border-box;
      }

      .anatomi_button_active {
        background-color: #fff !important;
        border-bottom: none !important;
      }
      

      .anatomi_authentication_tab_body {
        position: relative;
        width: 99.6%;
        height: 300px;
        border: 1px solid #C4C4C4;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        border-top: none;
        overflow: hidden;
      }

      .anatomi_line {
        width: 4%;
        height: 1px;
        background-color: #C4C4C4;
        position: absolute;
        bottom: 0%;
        left: 50%;
        transform: translateX(-50%);
        box-sizing: border-box;
      }

       .anatomi_authentication_tab_login {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: translateX(-100%);
        transition: all 0.5s ease-in-out; 
        display: flex;
    justify-content: center;
    background-color: #fff;
      }

      .anatomi_authentication_tab_register {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: translateX(-100%);
        transition: all 0.5s ease-in-out; 
        display: flex;
    justify-content: center;
      background-color: #fff;
      }

      .anatomi_authentication_tab_body_active {
        transform: translateX(0);
        transition: all 0.5s ease-in-out; 
      }

      .anatomi_authentication_tab_login > div {
        width: 90%;
        height: 100%;
            margin-top: 40px;
      }

      .anatomi_authentication_tab_register > div {
        width: 90%;
        height: 100%;
            margin-top: 40px;
      }

      #header-wrap > div.inner {
      display: none;}

      #login-form > div > div.col.col-12.mb.line-bottom.pageTitle.small-title.forDesktop {
      display: none;}

      #login-inputs > li > div > span{
    position: absolute;
    top: -25px;
    left: 0px;
    font-size: 12px;
    font-weight: 500;
    color: #000;
    height: fit-content;
    width: fit-content;
    padding: 0;
    margin: 0;
    line-height: normal;
      }

      #login-form > div > div.fl.col-12.popupInnerBlock > div.box.col-12.form-control.large.tooltipWrapper > div > span{
    position: absolute;
    top: -25px;
    left: 0px;
    font-size: 12px;
    font-weight: 500;
    color: #000;
    height: fit-content;
    width: fit-content;
    padding: 0;
    margin: 0;
    line-height: normal;
      }

      #login-form > div > div.fl.col-12.popupInnerBlock > div.fl.col-12 {
      margin-bottom: 20px;}

      #ug-email,#ug-password {
      border-radius: 6px !important;
      }

      #member-register {
      display: none;}

      #login-form > div > div.fl.col-12.popupInnerBlock > div:nth-child(5) > div > div > div.col.fr.col-6.col-sm-12 {
      width: 100%;}

      #member-forgot-password {
      width: 50%;}

      #login-form > div > div.fl.col-12.popupInnerBlock > div:nth-child(5) > div > div > div.box.col-12 {
      display: none;}

      #member-login-btn {
      border-radius: 6px !important;}

      #skeleton > div.anatomi_authentication_tab_container > div > div.anatomi_authentication_tab_body > div.anatomi_authentication_tab_register.anatomi_authentication_tab_body_active > div > div.col.col-12.mb.line-bottom.pageTitle.small-title.forDesktop{
      display: none;}

      #order-login-form > div.row > div:nth-child(1) > div > span, #order-login-form > div.row > div:nth-child(2) > div > span ,#order-login-form > div:nth-child(2) > div > span, #order-login-form > div:nth-child(3) > div > span{
          position: absolute;
    top: -25px;
    left: 0px;
    font-size: 12px;
    font-weight: 500;
    color: #000;
    height: fit-content;
    width: fit-content;
    padding: 0;
    margin: 0;
    line-height: normal;
      }

      .form-control.large input[type="text"]:not(.withPlace), .form-control.large input[type="password"]:not(.withPlace), .form.large input[type="text"]:not(.withPlace), .form.large input[type="password"]:not(.withPlace) {
     padding-top: 0px; 
}

#order-login-form > div.row, #order-login-form > div:nth-child(2){
margin-bottom: 20px;
}

#order-login-form > div:nth-child(10) > div > div {
width: 100% !important;}

#order-login-btn {
border-radius: 6px !important;}


#aggrement_link , #kvkk_link{
color: #707070;
    text-decoration: underline;
    font-weight: 700;
}

.anatomi_authentication_tab_buttons p{
font-size: 13px;
    font-weight: 700;


}
    </style>
  `;

  const head = document.querySelector("head");
  const element = document.querySelector("#anatomi_authentication_tab_css");

  if (head && !element) {
    head.insertAdjacentHTML("beforeend", stlye);
  }
};

const uyeOl_GirisYap_js = () => {
  const handle_click = () => {
    const anatomi_authentication_tab_button_login = document.querySelector(
      ".anatomi_authentication_tab_button_login"
    );
    const anatomi_authentication_tab_button_register = document.querySelector(
      ".anatomi_authentication_tab_button_register"
    );
    const body = document.querySelector(".anatomi_authentication_tab_body");

    anatomi_authentication_tab_button_login.addEventListener("click", () => {
      anatomi_authentication_tab_button_login.classList.add(
        "anatomi_button_active"
      );
      anatomi_authentication_tab_button_register.classList.remove(
        "anatomi_button_active"
      );

      document
        .querySelector(".anatomi_authentication_tab_login")
        .classList.add("anatomi_authentication_tab_body_active");
      document
        .querySelector(".anatomi_authentication_tab_register")
        .classList.remove("anatomi_authentication_tab_body_active");

      body.style.height = "300px";


      const uyeOl_button = document.querySelector(".anatomi_uyeOl_button");
      uyeOl_button.classList.add("anatomi_uyeOl_button_active");
    });

    anatomi_authentication_tab_button_register.addEventListener("click", () => {
      anatomi_authentication_tab_button_register.classList.add(
        "anatomi_button_active"
      );
      anatomi_authentication_tab_button_login.classList.remove(
        "anatomi_button_active"
      );

      document
        .querySelector(".anatomi_authentication_tab_register")
        .classList.add("anatomi_authentication_tab_body_active");
      document
        .querySelector(".anatomi_authentication_tab_login")
        .classList.remove("anatomi_authentication_tab_body_active");

      body.style.height = "600px";

      const uyeOl_button = document.querySelector(".anatomi_uyeOl_button");
      uyeOl_button.classList.remove("anatomi_uyeOl_button_active");
    });
  };

  const handle_insert = () => {
    const login = document.querySelector("#login-form");
    const register = document.querySelector(
      "#membershipTabContainer > div:nth-child(2)"
    );

    const anatomi_login = document.querySelector(
      ".anatomi_authentication_tab_login"
    );
    const anatomi_register = document.querySelector(
      ".anatomi_authentication_tab_register"
    );

    if (login && register) {
      anatomi_login.insertAdjacentElement("afterbegin", login);
      anatomi_register.insertAdjacentElement("afterbegin", register);
    }
  };

  const handle_change_location = () => {
    const container = document.querySelector("#member-forgot-password");
    const beni_hatirla = document.querySelector(
      "#login-form > div > div.fl.col-12.popupInnerBlock > div:nth-child(5) > div > div > div:nth-child(2)"
    );

    if (container && beni_hatirla) {
      container.insertAdjacentElement("beforebegin", beni_hatirla);
    }
  };

  handle_click();
  handle_insert();
  handle_change_location();
};

const uyeOl_GirisYap_init = () => {
  uyeOl_GirisYap_html();
  uyeOl_GirisYap_css();
  uyeOl_GirisYap_js();
};

const uyeOl_GirisYap_conditions = () => {
  const device = matchMedia("(min-width: 768px)").matches;
  const url =
    window.location.href === "https://www.elektrix.com/siparis-uye-giris";
  return device && url;
};

if (uyeOl_GirisYap_conditions()) {
  uyeOl_GirisYap_init();
}

const uyeOl_html = () => {
  const html = `
  <div class="anatomi_authentication_tab_container">
    <div class="anatomi_authentication_tab_content">

      <div class="anatomi_authentication_tab_body">
                    <h2 class="anatomi_uyeOl_title">Üye Ol</h2>
        <div class="anatomi_authentication_tab_login anatomi_authentication_tab_body_active">
        </div>
      </div>
    </div>
  </div>
`;

  const container = document.querySelector("#skeleton");
  const element = document.querySelector(
    ".anatomi_authentication_tab_container"
  );

  if (container && !element) {
    container.insertAdjacentHTML("beforeend", html);
  }
};

const uyeOl_css = () => {
  const style = `
  <style id="anatomi_uyeOl_css">
  #page-login > div > div.col.col-12 > div > div {
    display: none;
  }

  #mainColumn > h1 {
    display: none;
  }

  .anatomi_authentication_tab_container {
width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 0px 0 30px 0;
    box-sizing: border-box;
      }

      .anatomi_authentication_tab_content {
        width: 500px;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
      }

      .anatomi_authentication_tab_buttons {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        position: relative;
      }

      .anatomi_authentication_tab_button {
        width: 48%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-color: #F2F2F2;
        border: 1px solid #C4C4C4;
        font-size: 12px;
        font-weight: 500;
        color: #1D1D1D;
      }

      .anatomi_authentication_tab_button:nth-child(2){
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        border-bottom: 1px solid #C4C4C4 ;
        box-sizing: border-box;
      }

      .anatomi_authentication_tab_button:nth-child(3){
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
        border-bottom: 1px solid #C4C4C4;
        box-sizing: border-box;
      }

      .anatomi_button_active {
        background-color: #fff !important;
        border-bottom: none !important;
      }
      

      .anatomi_authentication_tab_body {
        position: relative;
        width: 99.6%;
        height: 680px;
        border: 1px solid #C4C4C4;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        overflow-y: hidden;
            display: flex;
    justify-content: center;
    align-items: flex-start;
    border-radius: 10px;
      }

      .anatomi_uyeOl_title {
      z-index: 99;
    display: block;
    position: relative;
    font-size: 12px;
    font-weight: 700;
    margin-top: 20px;
      }

      .anatomi_line {
        width: 4%;
        height: 1px;
        background-color: #C4C4C4;
        position: absolute;
        bottom: 0%;
        left: 50%;
        transform: translateX(-50%);
        box-sizing: border-box;
      }

       .anatomi_authentication_tab_login {
        position: absolute;
        top: 3%;
        left: 0;
        width: 100%;
        height: 100%;
        transform: translateX(-100%);
        transition: all 0.5s ease-in-out; 
        display: flex;
    justify-content: center;
    background-color: #fff;
      }

      .anatomi_authentication_tab_register {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: translateX(-100%);
        transition: all 0.5s ease-in-out; 
        display: flex;
    justify-content: center;
      background-color: #fff;
      }

      .anatomi_authentication_tab_body_active {
        transform: translateX(0);
        transition: all 0.5s ease-in-out; 
      }

      .anatomi_authentication_tab_login > div {
        width: 90%;
        height: 100%;
            margin-top: 40px;
      }

      .anatomi_authentication_tab_register > div {
        width: 90%;
        height: 100%;
            margin-top: 40px;
      }

      #header-wrap > div.inner {
      display: none;}

      #login-form > div > div.col.col-12.mb.line-bottom.pageTitle.small-title.forDesktop {
      display: none;}

      #login-inputs > li > div > span{
    position: absolute;
    top: -25px;
    left: 0px;
    font-size: 12px;
    font-weight: 500;
    color: #000;
    height: fit-content;
    width: fit-content;
    padding: 0;
    margin: 0;
    line-height: normal;
      }

      #login-form > div > div.fl.col-12.popupInnerBlock > div.box.col-12.form-control.large.tooltipWrapper > div > span{
    position: absolute;
    top: -25px;
    left: 0px;
    font-size: 12px;
    font-weight: 500;
    color: #000;
    height: fit-content;
    width: fit-content;
    padding: 0;
    margin: 0;
    line-height: normal;
      }

      #login-form > div > div.fl.col-12.popupInnerBlock > div.fl.col-12 {
      margin-bottom: 20px;}

      #ug-email,#ug-password {
      border-radius: 6px !important;
      }

      #member-register {
      display: none;}

      #login-form > div > div.fl.col-12.popupInnerBlock > div:nth-child(5) > div > div > div.col.fr.col-6.col-sm-12 {
      width: 100%;}

      #member-forgot-password {
      width: 50%;}

      #login-form > div > div.fl.col-12.popupInnerBlock > div:nth-child(5) > div > div > div.box.col-12 {
      display: none;}

      #member-login-btn {
      border-radius: 6px !important;}

      #skeleton > div.anatomi_authentication_tab_container > div > div.anatomi_authentication_tab_body > div.anatomi_authentication_tab_register.anatomi_authentication_tab_body_active > div > div.col.col-12.mb.line-bottom.pageTitle.small-title.forDesktop{
      display: none;}

      #order-login-form > div.row > div:nth-child(1) > div > span, #order-login-form > div.row > div:nth-child(2) > div > span ,#order-login-form > div:nth-child(2) > div > span, #order-login-form > div:nth-child(3) > div > span{
          position: absolute;
    top: -25px;
    left: 0px;
    font-size: 12px;
    font-weight: 500;
    color: #000;
    height: fit-content;
    width: fit-content;
    padding: 0;
    margin: 0;
    line-height: normal;
      }

      .form-control.large input[type="text"]:not(.withPlace), .form-control.large input[type="password"]:not(.withPlace), .form.large input[type="text"]:not(.withPlace), .form.large input[type="password"]:not(.withPlace) {
     padding-top: 0px; 
}

#order-login-form > div.row, #order-login-form > div:nth-child(2){
margin-bottom: 20px;
}

#order-login-form > div:nth-child(10) > div > div {
width: 100% !important;}

#order-login-btn {
border-radius: 6px !important;}


#aggrement_link , #kvkk_link{
color: #707070;
    text-decoration: underline;
    font-weight: 700;
}

.anatomi_authentication_tab_buttons p{
font-size: 13px;
    font-weight: 700;
}

#memberForm {
display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
}

#memberForm div {
width: 100%;}

#memberForm > div:nth-child(1) > div:nth-child(1), #memberForm > div:nth-child(1) > div:nth-child(5),#memberForm > div:nth-child(2) > div.fl.col-12.text-title.text-semibold.d-flex.mt {
display: none;}

#alan_ad > div > span,#alan_soyad > div > span,#alan_eposta > div > span.col.ease.placeholder,#alan_parola > div > span,#alan_parola > div > span {
          position: absolute;
    top: -25px;
    left: 0px;
    font-size: 12px;
    font-weight: 500;
    color: #000;
    height: fit-content;
    width: fit-content;
    padding: 0;
    margin: 0;
    line-height: normal;
}

#alan_ad,#alan_soyad,#alan_eposta,#alan_parola,#alan_parola_tekrar {
margin-bottom: 20px;}

#memberForm > div.box.col-12.p-right {
display: none;}

#uye-kayit-btn {
border-radius: 6px !important;
font-weight: 700;
margin-top: 10px;
}


#name,#surname,#email,#password,#password_again {
border-radius: 6px !important;
}

#anatomi_parola_goster {
position: absolute;
top: 50%;
right: 3%;
transform: translateY(-50%);
cursor: pointer;
font-size: 12px;
font-weight: 700;
color: #707070;
}
</style>
  `;

  const container = document.querySelector("#anatomi_uyeOl_css");
  if (!container) {
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
  }
};

const uyeOl_js = () => {
  const insert_form = () => {
    const form = document.querySelector("#uye-kayit-form");
    const container = document.querySelector(
      ".anatomi_authentication_tab_login"
    );

    if (form && !container.querySelector("#uye-kayit-form")) {
      container.insertAdjacentElement("afterbegin", form);
    }
  };

  const change_text = () => {
    const button = document.querySelector("#uye-kayit-btn");
    if (button) {
      if (button.textContent !== "Hemen Üye Ol") {
        button.textContent = "Hemen Üye Ol";
      }
    }
  };

  const add_goster = () => {
    const container = document.querySelector("#alan_parola > div");
    const goster = document.createElement("div");
    goster.innerHTML = `
    <span id="anatomi_parola_goster">Göster</span>
    `;
    container.insertAdjacentElement("beforeend", goster);

    const parola = document.querySelector("#password");
    goster.addEventListener("click", () => {
      if (parola.type === "password") {
        parola.type = "text";
      } else {
        parola.type = "password";
      }
    });

    const parola_tekrar = document.querySelector("#password_again");

    const goster_tekrar = document.createElement("div");
    goster_tekrar.innerHTML = `
    <span id="anatomi_parola_goster">Göster</span>
    `;
    const container_tekrar = document.querySelectorAll("#alan_parola > div")[1];
    container_tekrar.insertAdjacentElement("beforeend", goster_tekrar);

    goster_tekrar.addEventListener("click", () => {
      if (parola_tekrar.type === "password") {
        parola_tekrar.type = "text";
      } else {
        parola_tekrar.type = "password";
      }
    });
    
  };

  insert_form();
  change_text();
  add_goster();
};

const uyeOl_init = () => {
  uyeOl_html();
  uyeOl_css();
  uyeOl_js();
};

const uyeOl_conditions = () => {
  const device = matchMedia("(min-width: 768px)").matches;
  const url = window.location.href === "https://www.elektrix.com/uye-kayit";
  const url2 = window.location.href === "https://www.elektrix.com/siparis-uye-giris";
  return device && (url || url2);
};

if (uyeOl_conditions()) {
  uyeOl_init();
}
