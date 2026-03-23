const hamburger_menu_ikon_degisikligi_html = () => {};

const hamburger_menu_ikon_degisikligi_css = () => {};

const hamburger_menu_ikon_degisikligi_js = () => {
  const img = document.querySelector(
    "#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(1) > a > img"
  );

  if (img) {
    img.src =
      "https://cro-anatomi.s3.eu-north-1.amazonaws.com/eyup-sabri-tuncer-hamburger-firsat-icon.png";
  }
};

const hamburger_menu_ikon_degisikligi_init = () => {
  hamburger_menu_ikon_degisikligi_html();
  hamburger_menu_ikon_degisikligi_css();
  hamburger_menu_ikon_degisikligi_js();
};

const hamburger_menu_ikon_degisikligi_condition = () => {
  const device = window.innerWidth <= 768;
  return device;
};

setInterval(() => {
  if (hamburger_menu_ikon_degisikligi_condition()) {
    hamburger_menu_ikon_degisikligi_init();
  }
}, 50);
