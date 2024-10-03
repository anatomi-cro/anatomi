"use strict";

var a_style = "\n<style>\n\n\n.a_wp_wrap{\n    position: fixed;\n    top: calc(70%) !important;\n    right: 15px !important;\n    overflow: visible;\n    z-index: 10000;\n    cursor:pointer;\n}\n.sepet_icon{\n    position: fixed;\n    top: calc(70%) !important;\n    left: 15px;\n    overflow: visible;\n    z-index: 10000;\n    \n}\n.yeni_sayac{\n    position: absolute;\n    top: -4px;\n    left: 40px;\n\n}\n\n.anatomi_sayac{\n    width: 25px;\n    height: 25px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #DD9440;\n    border: 1px solid #DD9440;\n}\n\n#professional-whatsapp-active{\n    top: -115px !important;\n    display: none;\n    \n}\n\n\n\n</style>\n"; // Anasayfadaki görünen wp nin class, id ve içindekilerinin silinmesi

var icon_container = document.querySelector("#professional-whatsapp-passive");
icon_container.classList.remove("ease");
icon_container.classList.add("icon_container");
icon_container.innerText = "";
icon_container.removeAttribute("id"); // Anasayfadaki görünen wp icon grubun en üst parent divi

var a_wp_wrap = document.querySelector('#whatsapp-wrap');
a_wp_wrap.classList.add('a_wp_wrap'); // wp iconun tklandığında acılan side bar 

var active_pr_wp = document.querySelector('#professional-whatsapp-active'); //sepet iconunu konumlandıracagım div etiketinin classını seçiyorum

var anatomi_container = document.querySelector('.contentWrapper.col.col-12');
var wp_html = "\n\n<div class=\"container_icon\">\n<svg xmlns=\"http://www.w3.org/2000/svg\"  width=\"58\" height=\"58\" viewBox=\"0 0 28.87 28.87\"><g data-name=\"Layer 2\"><g data-name=\"Layer 1\"><rect width=\"28.87\" height=\"28.87\" fill=\"#189d0e\" rx=\"6.48\" ry=\"6.48\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"m7.09 21.82.23-.87c.24-.89.49-1.77.72-2.66a.65.65 0 0 0 0-.43 7.32 7.32 0 1 1 3.16 3.08.73.73 0 0 0-.45 0c-1.98.44-3.26.8-3.66.88zm1.71-1.68c.73-.19 1.4-.36 2.07-.54a.6.6 0 0 1 .5.07 6 6 0 0 0 4.05.77 6.12 6.12 0 1 0-6.31-3.09 1.28 1.28 0 0 1 .14 1.16c-.18.49-.25 1.04-.45 1.63z\"/><path fill=\"#fff\" fill-rule=\"evenodd\" d=\"M16.37 17.89c-1.43-.05-3.71-1.18-5.27-3.89a2.2 2.2 0 0 1 .34-2.81 1 1 0 0 1 .94-.14c.08 0 .16.13.2.22.21.47.41.95.59 1.43.1.26-.08.5-.45.92a.32.32 0 0 0 0 .42 5 5 0 0 0 2.54 2.18.3.3 0 0 0 .39-.1c.58-.71.64-.92 1-.78 1.48.71 1.59.74 1.6.9a1.61 1.61 0 0 1-1.88 1.65z\"/></g></g></svg>\n\n\n</div>\n\n";
var sepet_html = "\n<div class=\"sepet_icon\">\n<a href=\"https://www.elektrix.com/sepet\">\n<svg width=\"61\" height=\"62\" viewBox=\"0 0 61 62\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M61 32C61 48.5685 47.3447 62 30.5 62C13.6553 62 0 48.5685 0 32C0 15.4315 13.6553 2 30.5 2C47.3447 2 61 15.4315 61 32Z\" fill=\"#DD9440\"/>\n<path d=\"M22.2104 43.9112C22.2104 45.6231 23.6036 47.0163 25.3155 47.0163C27.0275 47.0163 28.4207 45.6231 28.4207 43.9112C28.4207 42.1992 27.0275 40.806 25.3155 40.806C23.6036 40.806 22.2104 42.1992 22.2104 43.9112ZM26.3506 43.9112C26.3506 44.4815 25.8858 44.9462 25.3155 44.9462C24.7452 44.9462 24.2805 44.4815 24.2805 43.9112C24.2805 43.3409 24.7452 42.8761 25.3155 42.8761C25.8858 42.8761 26.3506 43.3409 26.3506 43.9112Z\" fill=\"white\"/>\n<path d=\"M40.8412 43.9112C40.8412 42.1992 39.448 40.806 37.7361 40.806C36.0241 40.806 34.6309 42.1992 34.6309 43.9112C34.6309 45.6231 36.0241 47.0163 37.7361 47.0163C39.448 47.0163 40.8412 45.6231 40.8412 43.9112ZM36.701 43.9112C36.701 43.3409 37.1658 42.8761 37.7361 42.8761C38.3064 42.8761 38.7711 43.3409 38.7711 43.9112C38.7711 44.4815 38.3064 44.9462 37.7361 44.9462C37.1658 44.9462 36.701 44.4815 36.701 43.9112Z\" fill=\"white\"/>\n<path d=\"M19.2086 19.0701C19.337 20.2925 20.7654 33.8599 20.9858 35.9558C21.1525 37.5405 22.4804 38.736 24.0744 38.736H40.2035C41.6578 38.736 42.935 37.703 43.2403 36.2808L45.7265 24.679C45.858 24.0642 45.7069 23.4318 45.3115 22.9443C44.9161 22.4557 44.3292 22.1752 43.7009 22.1752H21.6172L21.1701 17.9274C21.1142 17.3995 20.6701 17 20.1402 17H17.035C16.4637 17 16 17.4637 16 18.035C16 18.6064 16.4637 19.0701 17.035 19.0701H19.2086ZM43.7009 24.2453L41.2158 35.8472C41.1133 36.3212 40.6879 36.6659 40.2025 36.6659H24.0744C23.5424 36.6659 23.1004 36.2674 23.0445 35.7395L21.8346 24.2453H43.7009Z\" fill=\"white\"/>\n</svg>\n\n</a>\n\n<a href=\"https://www.elektrix.com/sepet\">\n<div class=\"yeni_sayac\">\n</div>\n</a>\n\n</div>\n\n"; // burada icona tıklandığında side bar acıldığından a_wp_wrap classına active classı ekleniyor.
// tıklandığında tıkladığımız iconun görünmez olmalı, side bar ise görünür olmalı.

a_wp_wrap.addEventListener('click', function () {
  var active_wp = document.querySelector('.a_wp_wrap.active');

  if (active_wp) {
    icon_container.style.display = "none";
    active_pr_wp.style.display = "block";
  } else {
    icon_container.style.display = "block";
    active_pr_wp.style.display = "none";
  }
}); // sepet ikonunun üzerindeki sayac koyalanmadan önce sepet_htmlyi basıyorum.

anatomi_container.insertAdjacentHTML('afterbegin', sepet_html); // sepetim ikonu ve yazısının üstündeki sayacın htmlsini ve aynı zamanda foksiyonlarını kopyaladım ko

var a_count = document.querySelector('.fr.btn-black.btn-round.passive.text-center.cart-soft-count');
a_count.classList.add('anatomi_sayac');
var a_countHTML = a_count.outerHTML;
var yeniSayac = document.querySelector('.yeni_sayac');
yeniSayac.innerHTML = a_countHTML; // wp_html kodlarının basıldığı yer.

icon_container.insertAdjacentHTML('afterbegin', wp_html);
var head = document.querySelector('head');
head.insertAdjacentHTML('beforebegin', a_style);