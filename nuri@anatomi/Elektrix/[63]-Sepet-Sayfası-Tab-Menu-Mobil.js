const satinAl = document.getElementById("addCartBtn");
const loginMobil = document.getElementById("loginMobile");


const anatomi_authenticate_style = `<style>
.anatomi_auth_menu_container {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: 1s ease-in-out 0s 1 normal none running
    anatomi_auth_menu_container_animation;
}

@keyframes anatomi_auth_menu_container_animation {
  0% {
    transform: translateX(-50%) translateY(100%);
  }
  100% {
    transform: translateX(-50%) translateY(0);
  }
}

.anatomi_auth_menu_content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 20px;
}

.anatomi_auth_menu_buttons {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 95%;
  cursor: pointer;
}

.anatomi_auth_menu_buttons::after {
  position: absolute;
  content: "";
  bottom: 0;
  left: 50%;
  width: 11px;
  height: 1px;
  background-color: #c4c4c4;
  transform: translateX(-50%);
}

.signIn {
  border-bottom: none !important;
  background-color: #fff !important;
}

.anatomi_auth_menu_buttons button {
  width: 50%;
  height: 55px;
  border-top: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
  border-left: 1px solid #c4c4c4;
  border-right: 1px solid #c4c4c4;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #f2f2f2;
  cursor: pointer;
  transition: 0.3s;
  color: #000;
}

.anatomi_auth_menu_buttons button p {
  font-size: 14px;
  font-weight: 600;
}

.anatomi_auth_menu_form {
  position: relative;
  width: 95%;
  height: 100%;
  background-color: #fff;
  border-bottom: 1px solid #c4c4c4;
  border-left: 1px solid #c4c4c4;
  border-right: 1px solid #c4c4c4;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-top: 40px;
  overflow: hidden;
}

.anatomi_auth_menu_form_login,
.anatomi_auth_menu_form_register {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
  margin: 0 auto;
  transform: translateX(-150%);
  height: 0;
  transition: transform 0.5s ease-in-out;
}

.anatomi_auth_menu_form_login.login_active {
  transform: translateX(0);
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.anatomi_auth_menu_form_login_email,
.anatomi_auth_menu_form_login_password,
.anatomi_auth_menu_form_register_name,
.anatomi_auth_menu_form_register_email,
.anatomi_auth_menu_form_register_password {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
}

.anatomi_auth_menu_form_login_email input,
.anatomi_auth_menu_form_login_password input,
.anatomi_auth_menu_form_register_name input,
.anatomi_auth_menu_form_register_email input,
.anatomi_auth_menu_form_register_password input {
  width: 100%;
  height: 40px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  padding: 0 10px;
  outline: none;
  background-color: #eeeeee;
}

.anatomi_auth_menu_form_login_email span,
.anatomi_auth_menu_form_login_password span,
.anatomi_auth_menu_form_register_name span,
.anatomi_auth_menu_form_register_email span,
.anatomi_auth_menu_form_register_password span {
  font-size: 14px;
  font-weight: 500;
}

.anatomi_auth_menu_form_login_checkBox_forgot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.anatomi_auth_menu_form_login_checkBox_forgot a {
  font-size: 14px;
  font-weight: 500;
  color: #000;
}

.anatomi_auth_menu_form_login_checkBox_forgot a:hover {
  text-decoration: underline;
}

.anatomi_auth_menu_form_login_checkBox_forgot div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.anatomi_auth_menu_form_login_checkBox_forgot div input {
  cursor: pointer;
}

.anatomi_auth_menu_form_login_checkBox_forgot div label {
  font-size: 14px;
  font-weight: 500;
}

.anatomi_auth_menu_form_login_button,
.anatomi_auth_menu_form_register_button {
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: #397fba;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  margin-top: 10px;
}

.anatomi_auth_menu_form_login_button:hover {
  background-color: #2e6e9e;
}

.anatomi_auth_menu_form_login_button:active {
  background-color: #1e5e8e;
}

.anatomi_auth_menu_form_login_button:focus {
  outline: none;
}

.anatomi_login_text_span,
.anatomi_register_text_span{
  font-size: 16px;
  font-weight: 500;
  color: #545454;
  text-align: center;
}

.anatomi_register_text_span span{
  text-decoration: underline;
  text-transform: capitalize;
  color: #000;
}

.anatomi_auth_menu_form_login_social_media {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-bottom: 20px;
}

.anatomi_auth_menu_form_login_social_media a {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  border: 1px solid #dddddd;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  padding: 0.5rem 1rem;
  text-decoration: none;
}

.anatomi_auth_menu_form_login_social_media a img {
  width: 20px;
  height: 20px;
}

/*----------register---------*/

.anatomi_auth_menu_form_register {
  transform: translateX(150%);
  height: 0;
  transition: transform 0.5s ease-in-out;
  padding-bottom: 20px;
}

.anatomi_auth_menu_form_register.register_active {
  transform: translateX(0);
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.anatomi_auth_menu_form_register_checkList {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
}

.anatomi_auth_menu_form_register_checkList_item {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.anatomi_auth_menu_form_register_checkList_item input {
  cursor: pointer;
  width: 20px;
  height: 20px;
}

.anatomi_auth_menu_form_register_checkList_item label {
  font-size: 14px;
  font-weight: 500;
}

.anatomi_auth_menu_form_register_checkList_item label a {
  text-decoration: underline;
  color: #000;
}
</style>`;

const anatomi_authentication_html = `
<div class="anatomi_auth_menu_container">
<div class="anatomi_auth_menu_content">
  <div class="anatomi_auth_menu_buttons">
    <button class="signIn">
      <p>Giriş Yap</p>
    </button>
    <button class="signUp">
      <p>Kayıt Ol</p>
    </button>
  </div>

  <div class="anatomi_auth_menu_form">
    <div class="anatomi_auth_menu_form_login login_active">
      <div class="anatomi_auth_menu_form_login_email">
        <span>E-Posta</span>
        <input type="email" />
      </div>
      <div class="anatomi_auth_menu_form_login_password">
        <span>Şifre</span>
        <input type="password" />
      </div>

      <div class="anatomi_auth_menu_form_login_checkBox_forgot">
        <div class="anatomi_auth_menu_form_login_checkBox">
          <input type="checkbox" id="rememberMe" />
          <label for="rememberMe">Beni Hatırla</label>
        </div>
        <a href="#">Şifremi Unuttum</a>
      </div>

      <button class="anatomi_auth_menu_form_login_button">
        Giriş Yap
      </button>

      <span class="anatomi_login_text_span">Ya da</span>
      <div class="anatomi_auth_menu_form_login_social_media">
        <a href="#">
          <img
            src="https://anatomi.s3.eu-north-1.amazonaws.com/icons8-facebook-48.png"
            alt=""
          />
          Facebook ile Giriş Yap
        </a>

        <a href="#">
          <img
            src="https://anatomi.s3.eu-north-1.amazonaws.com/icons8-twitter-48.png"
            alt=""
          />
          Twitter ile Giriş Yap
        </a>
      </div>
    </div>

    <div class="anatomi_auth_menu_form_register">
      <div class="anatomi_auth_menu_form_register_name">
        <span>Ad-Soyad</span>
        <input type="text" />
      </div>
      <div class="anatomi_auth_menu_form_register_email">
        <span>E-Posta</span>
        <input type="email" />
      </div>
      <div class="anatomi_auth_menu_form_register_password">
        <span>Şifre</span>
        <input type="password" />
      </div>
      <div class="anatomi_auth_menu_form_register_password">
        <span>Şifre Tekrar</span>
        <input type="password" />
      </div>

      <div class="anatomi_auth_menu_form_register_checkList">
        <div class="anatomi_auth_menu_form_register_checkList_item">
          <input type="checkbox" id="contract" />
          <label for="contract">Kullanıcı Sözleşmesi</label>
        </div>
        <div class="anatomi_auth_menu_form_register_checkList_item">
          <input type="checkbox" id="privacy" />
          <label for="privacy">Gizlilik Sözleşmesi</label>
        </div>

      </div>

      <button class="anatomi_auth_menu_form_register_button">
        Kayıt Ol
      </button>

      <span class="anatomi_register_text_span">Zaten Hesabın Var mı ? <span>Giriş Yap</span></span>
    </div>
  </div>
</div>
</div>`;



const ugEmail = document.getElementById("ug-email");
const loginEmail = document.querySelector(".anatomi_auth_menu_form_login_email");


if(loginMobil.textContent === "Üye Girişi") {
    satinAl.addEventListener("click", function (e) {
        e.preventDefault();
        document.head.insertAdjacentHTML("beforeend", anatomi_authenticate_style);
        document.body.insertAdjacentHTML("beforeend", anatomi_authentication_html);
        }
    );
}

var url = "https://www.elektrix.com/siparis-uye-giris";
var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.send();
xhr.onload = function () {
    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(xhr.responseText, 'text/html');
    var hedefDiv = htmlDoc.getElementById("ug-email")
    var hedefDiv2 = htmlDoc.getElementById("ug-password")
    loginEmail.appendChild(hedefDiv);
    loginEmail.appendChild(hedefDiv2);
};