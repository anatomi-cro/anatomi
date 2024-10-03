"use strict";

var a_style = "\n<style>\n.dropdown_menu {\n    display: none;\n  }\n  \n  .dropdown_menu.show {\n    display: block;\n  }\n  .a_svg.rotate{\n    transform: rotate(90deg);\n  }\n\n  .dropdown{\n    padding: 20px 20px 0 20px;\n  }\n  .dropdown_btn{\n    width: 100%;\n    height: 40px;\n    border: none;\n    border-radius: 8px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 15px;\n    cursor: pointer;\n  }\n</style>\n"; // her contract classının içeriği farklı olduğu için bunları farklı değişkenlere atıyorum.

var contract = document.querySelectorAll('.contract');
var newContract = contract[0];
var newContract2 = contract[1];
var newContract3 = contract[2]; // contractların içeriklerini yani atadğım değişkenleri html yapısına gömüyorum

var a_html = "\n<div class=\"dropdown\">\n  <button class=\"dropdown_btn\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n  Cayma Hakk\u0131\n  <svg class=\"a_svg\" width=\"9\" height=\"18\" viewBox=\"0 0 9 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.83692 0.838078L8.68483 8.18381C9.10506 8.63458 9.10506 9.36542 8.68483 9.81619L1.83692 17.1619C1.4167 17.6127 0.735388 17.6127 0.315166 17.1619C-0.105055 16.7112 -0.105055 15.9803 0.315166 15.5295L5.89495 9.54413L5.89495 8.45587L0.315166 2.47046C-0.105055 2.01969 -0.105055 1.28885 0.315166 0.838078C0.735388 0.387307 1.4167 0.387307 1.83692 0.838078Z\" fill=\"#333333\"/>\n</svg>\n  </button>\n  <div class=\"dropdown_menu\" aria-labelledby=\"dropdownMenuButton\">\n    <div class=\"dropdown-item\">\n    ".concat(newContract.outerHTML, "\n    </div>\n  </div>\n</div>\n\n<div class=\"dropdown\">\n  <button class=\"dropdown_btn\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n  \xD6n Bilgilendirme Formu\n  <svg class=\"a_svg\" width=\"9\" height=\"18\" viewBox=\"0 0 9 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.83692 0.838078L8.68483 8.18381C9.10506 8.63458 9.10506 9.36542 8.68483 9.81619L1.83692 17.1619C1.4167 17.6127 0.735388 17.6127 0.315166 17.1619C-0.105055 16.7112 -0.105055 15.9803 0.315166 15.5295L5.89495 9.54413L5.89495 8.45587L0.315166 2.47046C-0.105055 2.01969 -0.105055 1.28885 0.315166 0.838078C0.735388 0.387307 1.4167 0.387307 1.83692 0.838078Z\" fill=\"#333333\"/>\n</svg>\n  </button>\n  <div class=\"dropdown_menu\" aria-labelledby=\"dropdownMenuButton\">\n    <div class=\"dropdown-item\">\n    ").concat(newContract2.outerHTML, "\n    </div>\n  </div>\n</div>\n\n<div class=\"dropdown\">\n  <button class=\"dropdown_btn\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n  Mesafeli Sat\u0131\u015F S\xF6zle\u015Fmesi\n  <svg class=\"a_svg\" width=\"9\" height=\"18\" viewBox=\"0 0 9 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.83692 0.838078L8.68483 8.18381C9.10506 8.63458 9.10506 9.36542 8.68483 9.81619L1.83692 17.1619C1.4167 17.6127 0.735388 17.6127 0.315166 17.1619C-0.105055 16.7112 -0.105055 15.9803 0.315166 15.5295L5.89495 9.54413L5.89495 8.45587L0.315166 2.47046C-0.105055 2.01969 -0.105055 1.28885 0.315166 0.838078C0.735388 0.387307 1.4167 0.387307 1.83692 0.838078Z\" fill=\"#333333\"/>\n</svg>\n  </button>\n  <div class=\"dropdown_menu\" aria-labelledby=\"dropdownMenuButton\">\n    <div class=\"dropdown-item\">\n    ").concat(newContract3.outerHTML, "\n    </div>\n  </div>\n</div>\n\n"); // a_html yi sipariş özeti yazısının altına konumlandırıyorum.

var siparis_ozeti = document.querySelectorAll('.cl-payment-summary-col')[0];
siparis_ozeti.insertAdjacentHTML("afterend", a_html);
var dropdownBtns = document.querySelectorAll('.dropdown_btn');
var dropdownMenus = document.querySelectorAll('.dropdown_menu');
var svg_yon = document.querySelectorAll(".a_svg"); // burada dropdownın acılıp kapanması için show togglını ve içerik acıldığında okun yönünü aşagı gösterecek şekilde rotate toggle oluşturuyorum.

dropdownBtns.forEach(function (btn, index) {
  btn.addEventListener('click', function () {
    dropdownMenus[index].classList.toggle('show');
    svg_yon[index].classList.toggle('rotate');
  });
}); // eski contract ögelerini siliyorum.

contract.forEach(function (item) {
  item.remove();
});
var head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style);