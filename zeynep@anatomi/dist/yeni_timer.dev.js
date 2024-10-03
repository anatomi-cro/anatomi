"use strict";

var a_style = "\n<select>\n.black {\n    background-color: #000;\n    color: #fff;\n  }\n  \n  .gray {\n    background-color: #ccc;\n    color: #000;\n  }\n  \n</select>\n";
var anatomi_form = document.querySelectorAll('.edit-address.row')[1];
var form_elements = anatomi_form.querySelectorAll('p.input-top-text');
var anatomi_btn = document.querySelector('.cl-big-button.save-address-button.temp-shipping-save-button');
anatomi_btn.classList.add('a_kaydet_btn');
form_elements.forEach(function (element) {
  element.addEventListener('input', function () {
    var all_active = true;
    form_elements.forEach(function (el) {
      if (!el.classList.contains('active')) {
        all_active = false;
      }
    });

    if (all_active) {
      anatomi_btn.classList.add('black');
      anatomi_btn.classList.remove('gray');
    } else {
      anatomi_btn.classList.add('gray');
      anatomi_btn.classList.remove('black');
    }
  });
  element.addEventListener('change', function () {
    var all_active = true;
    form_elements.forEach(function (el) {
      if (!el.classList.contains('active')) {
        all_active = false;
      }
    });

    if (all_active) {
      anatomi_btn.classList.add('black');
      anatomi_btn.classList.remove('gray');
    } else {
      anatomi_btn.classList.add('gray');
      anatomi_btn.classList.remove('black');
    }
  });
});
var head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style);