"use strict";

var a_style = "\n  <style>\n \n    @media screen and (max-width: 710px){\n      .buton_container {\n        display: flex !important;\n        position: fixed !important;\n        bottom: 0 !important;\n        width: 100% !important;\n        right: 0 !important;\n        height: 55px !important;\n      }\n  \n      .a_btn_input {\n        width: 100% !important;\n        border-bottom-right-radius: 0px !important;\n        border-bottom-left-radius: 0px !important;\n      }\n  \n  \n    }\n   \n  </style>\n";
var a_btn = document.querySelectorAll('.cl-checkout-tab-section-button.cl-big-button');
a_btn[0].value = 'Sonraki Adıma Devam Et';
a_btn[0].classList.add('a_btn_input');
var buton_container = document.querySelector('.cl-checkout-tab-section-buttons');
buton_container.classList.add('buton_container'); //kaydedilmi adres yoksa yani null sa .cl-address-card.active bu class kaydedilmis bir adres varsa gözüküyor.

var kayıtlı_adres = document.querySelector('.cl-address-card.active');
setTimeout(function () {
  var a_yeni_adres = document.querySelector('.cl-checkout-tab-section.allow.active');

  if (kayıtlı_adres == null) {
    buton_container.addEventListener('click', function () {
      a_yeni_adres.style.border = "2px solid #ff0000";
      a_yeni_adres.style.borderRadius = "10px";
    });
  } else {
    a_yeni_adres.style.border = "none";
    a_yeni_adres.style.borderRadius = "none";
  }
}, 1000);
var head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style); //yeni adres ekle ve düzele butonuna tıkladığımızda öalışacak kod

var yeni_adres = document.querySelectorAll('.cl-checkout-tab-section-header .add-new-address-button')[0];
yeni_adres.addEventListener('click', function () {
  var anatomi_form = document.querySelectorAll(".edit-address.row")[1]; // "Vergi Numarası" içeren elementleri seç ve bir array'e at

  var form_noactive = Array.from(anatomi_form.querySelectorAll("p.input-top-text:not(.active)")).filter(function (item) {
    return !item.innerText.includes("Vergi Numarası") && !item.innerText.inculudes("Ticari Unvan") && !item.innerText.inculudes("Vergi Dairesi");
  });
  form_noactive = Array.from(form_noactive);
  var form_active = anatomi_form.querySelectorAll("p.input-top-text.active");
  var anatomi_btn = document.querySelector(".cl-big-button.save-address-button.temp-shipping-save-button");
  anatomi_btn.classList.add("a_kaydet_btn");

  function changeButtonColor() {
    var noactiveLength = form_noactive.length;
    var activeLength = form_active.length;

    if (noactiveLength === 0 && activeLength > 0) {
      anatomi_btn.style.backgroundColor = "black";
    } else {
      anatomi_btn.style.backgroundColor = "grey";
    }
  } //benim aktif olmayan classlarım p elementleri


  form_noactive.forEach(function (item) {
    //onun altındaki inputlar
    item.nextElementSibling.addEventListener("input", function () {
      //class'ı aktif mi?
      if (item.classList.contains("active")) {
        //bu item'ın dizide bulunduğu yeri al
        var indexOf = form_noactive.indexOf(item);

        if (form_noactive[indexOf].classList.contains("active")) {
          console.log(form_noactive[indexOf]);
          form_noactive.splice(form_noactive[indexOf].indexOf, 1);
        }
      }

      if (!item.classList.contains("active")) {
        form_noactive.push(item);
      }

      if (form_noactive.length <= 0) {
        changeButtonColor();
      }
    });
    item.nextElementSibling.addEventListener("select", function () {
      if (item.classList.contains("active")) {
        var indexOf = form_noactive.indexOf(item);

        if (form_noactive[indexOf].classList.contains("active")) {
          form_noactive.splice(form_noactive[indexOf].indexOf, 1);
        }
      }

      if (!item.classList.contains("active")) {
        form_noactive.push(item);
      }

      if (form_noactive.length <= 0) {
        changeButtonColor();
      }
    });
  });
  changeButtonColor();
}); // ---------
// ilk adres ekleyecek olan hesaplarda adres sayfasın çalışacak kod -------------

var anatomi_form = document.querySelectorAll(".edit-address.row")[1]; // "Vergi Numarası" içeren elementleri seç ve bir array'e at

var form_noactive = Array.from(anatomi_form.querySelectorAll("p.input-top-text:not(.active)")).filter(function (item) {
  return !item.innerText.includes("Vergi Numarası");
});
form_noactive = Array.from(form_noactive);
var form_active = anatomi_form.querySelectorAll("p.input-top-text.active");
var anatomi_btn = document.querySelector(".cl-big-button.save-address-button.temp-shipping-save-button");
anatomi_btn.classList.add("a_kaydet_btn");

function changeButtonColor() {
  var noactiveLength = form_noactive.length;
  var activeLength = form_active.length;

  if (noactiveLength === 0 && activeLength > 0) {
    anatomi_btn.style.backgroundColor = "black";
  } else {
    anatomi_btn.style.backgroundColor = "grey";
  }
} //benim aktif olmayan classlarım p elementleri


form_noactive.forEach(function (item) {
  //onun altındaki inputlar
  item.nextElementSibling.addEventListener("input", function () {
    //class'ı aktif mi?
    if (item.classList.contains("active")) {
      //bu item'ın dizide bulunduğu yeri al
      var indexOf = form_noactive.indexOf(item);

      if (form_noactive[indexOf].classList.contains("active")) {
        console.log(form_noactive[indexOf]);
        form_noactive.splice(form_noactive[indexOf].indexOf, 1);
      }
    }

    if (!item.classList.contains("active")) {
      form_noactive.push(item);
    }

    if (form_noactive.length <= 0) {
      changeButtonColor();
    }
  });
  item.nextElementSibling.addEventListener("select", function () {
    if (item.classList.contains("active")) {
      var indexOf = form_noactive.indexOf(item);

      if (form_noactive[indexOf].classList.contains("active")) {
        form_noactive.splice(form_noactive[indexOf].indexOf, 1);
      }
    }

    if (!item.classList.contains("active")) {
      form_noactive.push(item);
    }

    if (form_noactive.length <= 0) {
      changeButtonColor();
    }
  });
});
changeButtonColor();