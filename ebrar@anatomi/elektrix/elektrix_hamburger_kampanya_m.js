const elektrix_hamburger_kampanya_html = () => {
  const html = `
    <div class="anatomi_hamburger_menu_kampanya_image">
        <a class="anatomi_hamburger_menu_kampanya_link" href="https://www.elektrix.com/kasim-firsatlari-24"><img src="https://anatomi.s3.eu-north-1.amazonaws.com/elektrix_hamburger_menu_l.jpg" alt="Kampanya Resmi" /></a>
      </div>
  `;
  const mobile_navbar = document.querySelector(
    "#mobileMenuMain > div.fl.col-12.text-title.text-semibold.text-upper.pb.d-flex"
  );
  mobile_navbar.insertAdjacentHTML("beforebegin", html);
};

const elektrix_hamburger_kampanya_css = () => {
  const style = `
    <style>
    .anatomi_hamburger_menu_kampanya_image img {
        width: 305px;
        height: 100px;
        display: block;
        margin: 0 auto;
        border-radius: 3px;
      }
    </style>
  `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};
const elektrix_hamburger_kampanya_js = () => {};

const elektrix_hamburger_kampanya_init = () => {
  elektrix_hamburger_kampanya_html();
  elektrix_hamburger_kampanya_css();
  elektrix_hamburger_kampanya_js();
};

const elektrix_hamburger_kampanya_condition = () => {
  return window.innerWidth <= 768;
};

if (elektrix_hamburger_kampanya_condition()) {
  elektrix_hamburger_kampanya_init();
}
