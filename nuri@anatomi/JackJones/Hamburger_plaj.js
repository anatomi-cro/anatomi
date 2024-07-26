const js_phone = function () {
  const menu_item = document.querySelectorAll(
    "#modal-menu .uk-modal-body .uk-nav.uk-nav-default li a"
  );
  var summer_icon =
    "https://anatomi.s3.eu-north-1.amazonaws.com/sun-umbrella+1.png";

  if (menu_item) {
    menu_item.forEach((item) => {
      if (item.textContent === "PLAJ GİYİM") {
        item.style.color = "#E59222";
        item.innerHTML += ` <img src="${summer_icon}" style="width: 20px; height: 20px; margin-left: 10px;">`;
      }
    });
  }
};

const js_desktop = function () {
  const menu_item = document.querySelectorAll(
    ".uk-container .uk-navbar-nav .uk-nav.uk-nav-primary li a h3"
  );
  var summer_icon =
    "https://anatomi.s3.eu-north-1.amazonaws.com/sun-umbrella+1.png";

  if (menu_item) {
    menu_item.forEach((item) => {
      if (item.textContent === "PLAJ GİYİM") {
        item.style.color = "#E59222";
        item.innerHTML += ` <img src="${summer_icon}" style="width: 20px; height: 20px; margin-left: 10px;">`;
      }
    });
  }
};

const init = function () {
  if (window.innerWidth < 1200) {
    js_phone();
  }else {
    js_desktop();
  }
};

init();

