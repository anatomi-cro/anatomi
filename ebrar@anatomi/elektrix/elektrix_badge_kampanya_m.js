const elektrix_badge_kampanya_html = () => {
  const html = `
    <div class="anatomi_badge_kampanya_image">
        <a class="anatomi_badge_kampanya_link" href="https://www.elektrix.com/kasim-firsatlari-24"><img src="https://anatomi.s3.eu-north-1.amazonaws.com/elektrix_badge_kampanya.png" alt="Kampanya Resmi" /></a>
      </div>
  `;
  const mobile_navbar = document.querySelector("#headerMain > div");
  mobile_navbar.insertAdjacentHTML("afterbegin", html);
};

const elektrix_badge_kampanya_css = () => {
  const style = `
    <style>
    .anatomi_badge_kampanya_image {
        position: absolute;
        z-index: 9999;
        width: 100%;
        transform: translateX(-10px);
    }
    .anatomi_badge_kampanya_image img {
        width: 100%;
        height: 50px;

      }

    .contentWrapper{
    margin-top: 50px !important;}
    </style>
  `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};
const elektrix_badge_kampanya_js = () => {

  const orijinal_navbar_inner_logoSatırı = document.querySelector(
    "#headerMain > div > div:nth-child(2) > div"
  );

  if (orijinal_navbar_inner_logoSatırı) {
    orijinal_navbar_inner_logoSatırı.setAttribute("style", "margin-top: 35px !important;");
  }

};

const elektrix_badge_kampanya_init = () => {
  elektrix_badge_kampanya_html();
  elektrix_badge_kampanya_css();
  elektrix_badge_kampanya_js();
};

const elektrix_badge_kampanya_condition = () => {
  return window.innerWidth <= 768;
};

if (elektrix_badge_kampanya_condition()) {
  elektrix_badge_kampanya_init();
}
