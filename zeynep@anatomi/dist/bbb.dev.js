"use strict";

var a_style = "\n<style>\n.a_product_title {\n    font-size: 12px !important;\n    font-weight: 600 !important;\n}\n.a_product_size {\n    font-size: 10px !important;\n    color: #91959B !important;\n    font-weight: 400 !important;\n}\n</style>\n"; // ürün kodunu silme

var product_code = document.querySelectorAll('.uk-text-muted.uk-flex');

for (var i = 0; i < product_code.length; i++) {
  product_code[i].parentNode.removeChild(product_code[i]); // product_code[i].remove();
} // ürün başlığı için yazılan kod


var a_product_title = document.querySelectorAll('.uk-text-xxsmall.uk-flex-1.content h6');

for (var _i = 0; _i < a_product_title.length; _i++) {
  a_product_title[_i].classList.add('a_product_title');
} // beden textini ürün başlığının altına taşımak için yazılan kod


var a_size = document.querySelectorAll('.uk-text-xxsmall.uk-flex-1.content span');

for (var _i2 = 0; _i2 < a_size.length; _i2++) {
  a_size[_i2].classList.add('a_product_size');
}

var myClass = 'anatomi_product_horizontal';
var myArray = document.querySelectorAll('.product-horizontal');

for (var _i3 = 2; _i3 < myArray.length; _i3++) {
  myArray[_i3].classList.add(myClass);
} // discount ve suanki ve eski için yer değiştirdiğim kod burada


var parentContainers = document.querySelectorAll('.product-horizontal');

for (var _i4 = 0; _i4 < parentContainers.length; _i4++) {
  var parentContainer = parentContainers[_i4];
  var sizeElement = parentContainer.querySelector('.uk-text-xxsmall.uk-flex-1.content span');
  var a_price = parentContainer.querySelector('.anatomi_product_horizontal span.uk-text-bold');
  var a_old_price = parentContainer.querySelector('.anatomi_product_horizontal span.uk-text-muted');
  var a_discount = parentContainer.querySelector('.uk-text-success');

  if (a_discount) {
    a_discount.classList.add('a_discount');

    if (sizeElement) {
      sizeElement.insertAdjacentElement('afterend', a_discount);
    }

    if (a_price) {
      a_price.classList.add('a_price');
      a_discount.insertAdjacentElement('afterend', a_price);
    }

    if (a_old_price) {
      a_old_price.classList.add('a_old_price');
      a_price.insertAdjacentElement('afterend', a_old_price);
    }
  } else {
    if (a_price) {
      a_price.classList.add('a_price');

      if (sizeElement) {
        sizeElement.insertAdjacentElement('afterend', a_price);
      }
    }
  }
} // fiyatın ve varsa eski fiyatın  yerini değiştirdiğim kod


var head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style);