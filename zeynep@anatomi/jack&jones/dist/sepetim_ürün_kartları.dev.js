"use strict";

var a_style = "\n<style>\n.a_product_title {\n    font-size: 12px !important;\n    font-weight: 600 !important;\n}\n.a_product_size {\n    font-size: 10px !important;\n    color: #91959B !important;\n    font-weight: 400 !important;\n}\n</style>\n"; // ürün kodunu silme

var product_code = document.querySelectorAll('.uk-text-muted.uk-flex');

for (var i = 0; i < product_code.length; i++) {
  product_code[i].parentNode.removeChild(product_code[i]); // product_code[i].remove();
} // ürün başlığı için yazılan kod


var a_product_title = document.querySelectorAll('.uk-text-xxsmall.uk-flex-1.content h6');

for (var _i = 0; _i < a_product_title.length; _i++) {
  a_product_title[_i].classList.add('a_product_title');
}

var section_basket = document.querySelector('.section-basket');
var a_price = section_basket.querySelectorAll('span.uk-text-bold');
var a_old_price = section_basket.querySelectorAll('s.uk-text-muted');
var a_discount = section_basket.querySelectorAll('.uk-text-success');
var anatomi_prices = document.createElement("div");
anatomi_prices.classList.add("anatomi_prices");
anatomi_prices.insertAdjacentElement('afterbegin', a_price);
anatomi_prices.insertAdjacentElement('afterbegin', a_old_price);
anatomi_prices.insertAdjacentElement('afterbegin', a_discount); // const section_basket = document.querySelector('.section-basket');
// const a_price = section_basket.querySelectorAll('span.uk-text-bold');
// const a_old_price = section_basket.querySelectorAll('s.uk-text-muted');
// const a_discount = section_basket.querySelectorAll('.uk-text-success');
// const anatomi_prices = document.createElement("div");
// anatomi_prices.classList.add("anatomi_prices");
// a_price.forEach(item => anatomi_prices.appendChild(item));
// a_old_price.forEach(item => anatomi_prices.appendChild(item));
// a_discount.forEach(item => anatomi_prices.appendChild(item));
// section_basket.appendChild(anatomi_prices);
// anatomi_prices.appendChild(a_price);
// anatomi_prices.appendChild(a_old_price);
// anatomi_prices.appendChild(a_discount);

var head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style);