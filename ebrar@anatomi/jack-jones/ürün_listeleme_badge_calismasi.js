const urun_listeleme_badge_calismasi_html = () => {};

const urun_listeleme_badge_calismasi_css = () => {
    const style = `
      <style>    
      .anatomi_badge_container {
          background-color: #000000;
          color: white;
          padding: 5px 0px;
          text-align: center;
          font-size: 12px;
      }
      .anatomi_badge{
        margin: 0px !important;
      }
    .anatomi_badge span{
      font-weight: bold;
    }
    
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const urun_listeleme_badge_calismasi_js = () => {

  const badgeAhref = document.createElement("a");
  badgeAhref.href = "https://www.jackjones.com.tr/tr-tr/yaz-sezonu-indirimleri";
  badgeAhref.classList.add("anatomi_badge_link")

    const badgeContainer = document.createElement("div");
    badgeContainer.classList.add("anatomi_badge_container");

    const badge = document.createElement("p");
    badge.classList.add("anatomi_badge");
    badge.innerHTML = "Seçili Ürünlerde <span>İNDİRİM</span>!";


    badgeContainer.appendChild(badge);

    badgeAhref.appendChild(badgeContainer);
    const header = document.querySelector("#__layout > div > header")
    header.insertAdjacentElement("afterbegin", badgeAhref);
};

const urun_listeleme_badge_calismasi_init = () => {
    urun_listeleme_badge_calismasi_html();
    urun_listeleme_badge_calismasi_css();
    urun_listeleme_badge_calismasi_js();
};

const urun_listeleme_badge_calismasi_condition = () => {
  const checkLocation = document.querySelector("#__layout > div > main > div > section.content-middle > aside");
    const device = window.innerWidth <= 768;
    return device && checkLocation;
};

if (urun_listeleme_badge_calismasi_condition()) {
    urun_listeleme_badge_calismasi_init();
}
