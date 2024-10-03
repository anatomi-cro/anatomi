"use strict";

var a_style = "\n<style>\n.anatomi_mont_ceket{\n    display:flex;\n    align-items: center;\n    gap: 10px;\n    color: #2948E8 !important;\n\n}\n.anatomi_mont_ceket::after{\n    color: #2948E8 !important;\n}\n\n.anatomi_span{\n    color: #2948E8;\n    font-size: 14px;\n    font-weight:600;\n    font-style: italic;\n    padding-right: 85px !important;\n}\n\n\n.anatomi_li{\n    display:flex;\n    align-items: center;\n    gap: 10px;\n    color: #2948E8 !important;\n}\n\n.anatomi_li a{\n    color: #2948E8 !important;\n    font-style: italic;\n    font-weight: 500 !important;\n    \n}\n\n.container_icon{\n    color:#2948E8 !important;    \n}\n\n</style>\n"; //Mont - ceket kategorisinin a linklerini seçiyoruz

var anatomi_mont_ceket = document.querySelectorAll('.sub.uk-background-default .uk-nav.uk-nav-default .uk-parent a');
anatomi_mont_ceket[0].classList.add('anatomi_mont_ceket');

if (anatomi_mont_ceket[0]) {
  var a_div = document.createElement('span');
  a_div.classList.add('anatomi_span');
  a_div.innerText = 'POPÜLER';
  anatomi_mont_ceket[0].insertAdjacentElement('beforeend', a_div);
} //Mont / ceket kategorisinin alt kategorisi olan li etiketlerinin iiçindeki fonksiyonel mondtu seçiyoruz


var a_container = document.querySelectorAll('.uk-parent .uk-nav-sub li');
a_container[1].classList.add('anatomi_li');

if (a_container[1]) {
  var _a_div = document.createElement('div');

  var html = "\n  <div class = \"container_icon\">\n  <svg width=\"24\" height=\"23\" viewBox=\"0 0 24 23\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M19.4082 6.45222L15.4459 5.87646L13.6739 2.28607C12.9897 0.8996 11.0106 0.899084 10.3262 2.28602L8.55416 5.87646L4.59186 6.45222C3.06187 6.6745 2.44991 8.55649 3.55738 9.63611L6.42453 12.4309L5.74771 16.3771C5.48633 17.9008 7.08693 19.0645 8.4561 18.3449L12 16.4816L15.5441 18.3449C16.9148 19.0654 18.5132 17.8974 18.2523 16.3771L17.5755 12.4309L20.4427 9.63611C21.5497 8.55686 20.9388 6.67464 19.4082 6.45222Z\" fill=\"#2948E8\"/>\n  <path d=\"M6.31546 1.6466L5.3587 0.329787C5.09897 -0.0275882 4.59867 -0.106854 4.24129 0.152881C3.88387 0.412568 3.80465 0.912864 4.06434 1.27029L5.02111 2.5871C5.28098 2.94466 5.78132 3.02364 6.13851 2.764C6.49593 2.50436 6.57515 2.00402 6.31546 1.6466Z\" fill=\"#2948E8\"/>\n  <path d=\"M3.14047 13.4476C3.00392 13.0275 2.5527 12.7973 2.13242 12.934L0.552968 13.4473C0.132781 13.5837 -0.0971406 14.0351 0.0393593 14.4553C0.17614 14.8763 0.628296 15.1053 1.04741 14.9689L2.6269 14.4557C3.04709 14.3192 3.27701 13.8679 3.14047 13.4476Z\" fill=\"#2948E8\"/>\n  <path d=\"M19.7586 0.152879C19.4013 -0.106856 18.901 -0.0276369 18.6412 0.329785L17.6845 1.6466C17.4247 2.00402 17.504 2.50436 17.8614 2.764C18.219 3.02378 18.7192 2.94438 18.9788 2.5871L19.9356 1.27028C20.1953 0.912862 20.1161 0.412566 19.7586 0.152879Z\" fill=\"#2948E8\"/>\n  <path d=\"M23.447 13.4473L21.8675 12.934C21.4473 12.7973 20.996 13.0275 20.8594 13.4477C20.7229 13.8678 20.9528 14.3192 21.3731 14.4557L22.9526 14.9689C23.3719 15.1053 23.8239 14.8761 23.9606 14.4553C24.0971 14.0351 23.8672 13.5838 23.447 13.4473Z\" fill=\"#2948E8\"/>\n  <path d=\"M11.9999 19.6491C11.5581 19.6491 11.2 20.0073 11.2 20.4491V22.0727C11.2 22.5145 11.5581 22.8727 11.9999 22.8727C12.4417 22.8727 12.7999 22.5145 12.7999 22.0727V20.4491C12.7999 20.0073 12.4418 19.6491 11.9999 19.6491Z\" fill=\"#2948E8\"/>\n  </svg>\n     </div>\n\n";

  _a_div.insertAdjacentHTML('beforeend', html);

  a_container[1].insertAdjacentElement('beforeend', _a_div);
} //


var head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style);