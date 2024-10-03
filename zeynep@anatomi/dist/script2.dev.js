"use strict";

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