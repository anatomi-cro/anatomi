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
        <div class="anatomi_kampanya_sticky_buttons">
            <a href=${href1} class="anatomi_kampanya_sticky_button anatomi_kampanya_v1_sticky_buttons_trafik">
                ${buttonContent1} Teklifi Al
            </a>
            <a href=${href2} class="anatomi_kampanya_sticky_button anatomi_kampanya_v1_sticky_buttons_kasko">
                ${buttonContent2} Teklifi Al
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
  .anatomi_kampanya_sticky_buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
  }
  .anatomi_kampanya_sticky_buttons a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    width: 40%;
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