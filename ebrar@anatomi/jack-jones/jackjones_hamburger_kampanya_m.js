const jack_jones_hamburger_kampanya_html = () => {
  const html = `
    <li class="anatomi_hamburger_menu_kampanya_image">
        <a class="anatomi_hamburger_menu_kampanya_link" href="https://jackjones.com.tr/black-friday"><img src="https://anatomi.s3.eu-north-1.amazonaws.com/jackjones_hamburger_menu_image.jpg" alt="Kampanya Resmi" /></a>
      </li>
  `;
  const mobile_navbar = document.querySelector("#modal-menu > div > div.uk-modal-body > ul.uk-nav.uk-nav-primary.uk-position-relative");
  mobile_navbar.insertAdjacentHTML("afterbegin", html);
};

const jack_jones_hamburger_kampanya_css = () => {
  const style = `
    <style>
    .anatomi_hamburger_menu_kampanya_image img {
        width: 300px;
        height: 100px;
        display: block;
        margin: 0 auto;
        border-radius: 5px;
      }
    </style>
  `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};
const jack_jones_hamburger_kampanya_js = () => {

};

const jack_jones_hamburger_kampanya_init = () => {
  jack_jones_hamburger_kampanya_html();
  jack_jones_hamburger_kampanya_css();
  jack_jones_hamburger_kampanya_js();
};

const jack_jones_hamburger_kampanya_condition = () => {
  return window.innerWidth <= 768;
};

if (jack_jones_hamburger_kampanya_condition()) {
  jack_jones_hamburger_kampanya_init();
}
