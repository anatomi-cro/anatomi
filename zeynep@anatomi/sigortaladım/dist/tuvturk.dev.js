"use strict";

var a_style = "\n    <style>\n    .modal{\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: end;\n        padding-bottom: 20px;\n        padding-right: 25px;\n\n    }\n    .modal-content{\n        width: 450px !important;\n        border: 1px solid red;\n        background-color: white;\n        color: red;\n        width: 100%;\n        padding: 15px;\n        text-align: center;\n        display: flex;\n        font-size:12px;\n        position: relative;\n\n    }\n    .modal-content::before {\n        content: \"\";\n        position: absolute;\n        top: -20px;\n        right: 5%;\n        margin-left: -10px;\n        border-style: solid;\n        border-width: 0 10px 20px 10px;\n        border-color: white transparent red transparent;\n      }\n    </style>\n";
var scales = document.querySelectorAll('.offer-item-container .scale');
var tuvturkScales = Array.from(scales).filter(function (scale) {
  return scale.textContent.includes('TUVTURK');
}); // tuvturk yazısını içeren classların parentını seçiyorum

var tuvturkParents = tuvturkScales.map(function (scale) {
  return scale.closest('.campaign');
});
var currentModal = null;

if (tuvturkParents.length > 0) {
  tuvturkParents.forEach(function (textBox) {
    var observer = new MutationObserver(function (mutationsList, observer) {
      console.log('Metin kutusunun değeri değişti!');

      if (currentModal) {
        currentModal.style.display = 'none';
      }

      var modal = document.createElement('div');
      modal.classList.add('modal');
      modal.innerHTML = "\n          <div class=\"modal-content\">\n            <p>Kasko poli\xE7esinin sona erdi\u011Fi g\xFCn, poli\xE7ede yer alan arac\u0131n plakas\u0131na tan\u0131mlanacakt\u0131r. Poli\xE7enin 1 y\u0131l aktif/ya\u015Fam\u0131\u015F olmas\u0131 gerekmektedir, 1 y\u0131l tamamlanmadan iptal edilen poli\xE7eler kampanyadan yararlanamayacakt\u0131r.</p>\n          </div>\n        "; // modalın konumunu ayarlıyorum
      // const modalLocation = scale.closest('.campaign-table-container').querySelector('.campaign-table');

      if (textBox) {
        textBox.insertAdjacentElement("afterend", modal);
      } // oluşturulan modalı sakla


      currentModal = modal;
    });
    var config = {
      attributes: true,
      childList: true,
      characterData: true
    };
    observer.observe(textBox, config);
  });
} else {// tuvturk yazısı içermeyen classların içindeki öğelere tıklandığında modal saklanır
}

var head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style);