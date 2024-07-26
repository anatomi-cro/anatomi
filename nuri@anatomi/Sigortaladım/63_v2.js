const body = document.querySelector('body');
const anaHead = document.querySelector('head');
var buttonContent1;
var buttonContent2;
var href1;
var href2;

const checkCasco = document.querySelector(".pre-form.casco");
const checkTrafik = document.querySelector(".pre-form.trafik");
const checkDask = document.querySelector(".pre-form.dask");
const checkKonut = document.querySelector(".pre-form.konut");
const checkTamalayici = document.querySelector(".pre-form.tamamlayici");
const checkOzel = document.querySelector(".pre-form.ozel");
const checkTravel = document.querySelector(".pre-form.travel")

if(checkCasco){
  buttonContent1 = "Trafik"
  buttonContent2 = "Kasko"
  href1 = "/trafik-sigortasi?kampanya"
  href2 = "/kasko-sigortasi?kampanya"
}else if (checkTrafik){
  buttonContent1= "Kasko"
  buttonContent2 = "Trafik"
  href1 = "/kasko-sigortasi?kampanya"
  href2 = "/trafik-sigortasi?kampanya"
}else if (checkDask){
  buttonContent1 = "Konut"
  buttonContent2 = "Dask"
  href1 = "/konut-sigortasi?kampanya"
  href2 = "/dask-sigortasi?kampanya"
}else if (checkKonut){
  buttonContent1 = "Dask"
  buttonContent2 = "Konut"
  href1 = "/dask-sigortasi?kampanya"
  href2 = "/konut-sigortasi?kampanya"
}else if (checkTamalayici){
  buttonContent1 = "Özel Sağlık"
  buttonContent2 = "Tamamlayıcı Sağlık"
  href1 = "/ozel-saglik-sigortasi?kampanya"
  href2 = "/tamamlayici-saglik-sigortasi?kampanya"
}else if (checkOzel){
  buttonContent1 = "Tamamlayıcı Sağlık"
  buttonContent2 = "Özel Sağlık"
  href1 = "/tamamlayici-saglik-sigortasi?kampanya"
  href2 = "/ozel-saglik-sigortasi?kampanya"
}else if (checkTravel) {
  buttonContent1 = "Seyahat"
  buttonContent2 = "Seyahat"
  href1 = "/seyahat-sigortasi?kampanya"
  href2 = "/seyahat-sigortasi?kampanya"
}

const oldSticky = document.querySelector(".sticky-button-container");
oldSticky.remove();

const anatomi_sticky_kampanya_html = `
<div class="anatomi_kampanya_sticky_container">
      <div class="anatomi_kampanya_sticky_content">
        <div class="anatomi_kampanya_sticky_info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M21.3358 4.69305L20.2464 3.60372V0.335693L16.8574 3.84582L16.6153 6.6297L13.1052 10.1398C12.8631 10.1398 12.7421 10.1398 12.5 10.1398C11.1686 10.1398 10.0793 11.2291 10.0793 12.5606C10.0793 13.892 11.1686 14.9813 12.5 14.9813C13.8315 14.9813 14.9208 13.892 14.9208 12.5606C14.9208 12.3185 14.9208 12.1975 14.7998 11.9554L18.3099 8.44527L21.0938 8.20317L24.6039 4.69305H21.3358Z"
              fill="white"
            />
            <path
              d="M19.036 9.53467H18.9149L17.2204 11.3502C17.3414 11.7134 17.3414 12.1975 17.3414 12.5606C17.3414 15.2235 15.1627 17.4022 12.4999 17.4022C9.83701 17.4022 7.65831 15.2235 7.65831 12.5606C7.65831 9.89779 9.83706 7.71909 12.4999 7.71909C12.9841 7.71909 13.3472 7.84012 13.7103 7.84012L15.5259 6.02454V5.90352C14.5576 5.54039 13.5893 5.29834 12.4999 5.29834C8.50564 5.29834 5.23761 8.56637 5.23761 12.5606C5.23761 16.5549 8.50564 19.8229 12.4999 19.8229C16.4942 19.8229 19.7622 16.5549 19.7622 12.5606C19.7622 11.4713 19.5201 10.503 19.036 9.53467Z"
              fill="white"
            />
            <path
              d="M23.5144 7.59807L21.6988 9.29262C21.9409 10.2609 22.183 11.3503 22.183 12.5606C22.183 17.8863 17.8256 22.2437 12.4999 22.2437C7.17422 22.2437 2.81687 17.8863 2.81687 12.5606C2.81687 7.23499 7.17422 2.87759 12.4999 2.87759C13.5893 2.87759 14.6786 3.11969 15.768 3.48276V3.36174L17.5835 1.54616C16.0101 0.819912 14.3155 0.456787 12.4999 0.456787C5.8428 0.456787 0.396118 5.90351 0.396118 12.5606C0.396118 19.2178 5.8428 24.6645 12.4999 24.6645C19.1571 24.6645 24.6037 19.2177 24.6037 12.5606C24.6037 10.7451 24.2407 9.05052 23.5144 7.59807Z"
              fill="white"
            />
          </svg>
          <p>
          ${buttonContent2} sigortası satın alanların 90% ı bu kampanyadan yararlandı,
            sen de <span>hemen teklif al ve kampanyadan yararlan!</span>
          </p>
        </div>

        <div class="anatomi_kampanya_sticky_buttons">
            <a href=${href1} class="anatomi_kampanya_sticky_button anatomi_kampanya_sticky_buttons_trafik">
                ${buttonContent1} Sigortası Teklifi Al
            </a>
            <a href=${href2} class="anatomi_kampanya_sticky_button anatomi_kampanya_sticky_buttons_kasko">
            ${buttonContent2} Sigortası Teklifi Al
            </a>
        </div>
      </div>
    </div>
`;

const anatomi_kampanya_sticky_style = `
<style>
.anatomi_kampanya_sticky_container {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 9999;
  width: 100%;
  height: fit-content;
}

.anatomi_kampanya_sticky_content {
  display: flex;
  flex-direction: column;
}

.anatomi_kampanya_sticky_info {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #4372f6;
  padding: 2px 15px;
}

.anatomi_kampanya_sticky_info svg {
  width: 60px;
  height: 60px;
}

.anatomi_kampanya_sticky_info p {
  color: white;
  font-size: 14px;
  margin: 0;
}

.anatomi_kampanya_sticky_info p span {
  font-weight: bold;
  text-decoration: underline;
}

.anatomi_kampanya_sticky_buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  background-color: #fff;
}

.anatomi_kampanya_sticky_buttons a {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  width: 45%;
  border: none;
  border-radius: 5px;
  background-color: #4372f6;
  color: white;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
}
</style>
`;

if (window.innerWidth < 768) {
    body.insertAdjacentHTML('beforeend', anatomi_sticky_kampanya_html);
    anaHead.insertAdjacentHTML('beforeend', anatomi_kampanya_sticky_style);
}

const button = document.querySelector(".sticky-button-container .sticky-button a");

button.classList.add("anatomi_kampanya_original_sticky_button");