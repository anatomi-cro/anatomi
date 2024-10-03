"use strict";

var a_style = "\n    <style>\n    .modal{\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: end;\n        padding-bottom: 20px;\n        padding-right: 25px;\n\n    }\n    .modal-content{\n        width: 450px !important;\n        border: 1px solid red;\n        background-color: white;\n        color: red;\n        width: 100%;\n        padding: 15px;\n        text-align: center;\n        display: flex;\n        font-size:12px;\n        position: relative;\n\n    }\n    .modal-content::before {\n        content: \"\";\n        position: absolute;\n        top: -20px;\n        right: 5%;\n        margin-left: -10px;\n        border-style: solid;\n        border-width: 0 10px 20px 10px;\n        border-color: white transparent red transparent;\n      }\n    </style>\n"; // tuvturk yazısını içeren classları seçiyorum

var scales = document.querySelectorAll('.offer-item-container .scale');
var tuvturkScales = Array.from(scales).filter(function (scale) {
  return scale.textContent.includes('TUVTURK');
}); // tuvturk yazısını içeren classların parentını seçiyorum

var tuvturkParents = tuvturkScales.map(function (scale) {
  return scale.closest('.campaign');
}); // mevcut modalı saklamak için bir değişken tanımlıyorum

var currentModal = null; // seçtiğim üst divlere tıklandığında bir div oluşturup içinde modal oluşturuyorum.

tuvturkParents.forEach(function (scale) {
  scale.addEventListener('click', function () {
    // eğer önceden bir modal gösterildiyse, onu sakla ve yeni modal oluştur
    if (currentModal) {
      currentModal.style.display = 'none';
    }

    var modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = "\n      <div class=\"modal-content\">\n        <p>Kasko poli\xE7esinin sona erdi\u011Fi g\xFCn, poli\xE7ede yer alan arac\u0131n plakas\u0131na tan\u0131mlanacakt\u0131r. Poli\xE7enin 1 y\u0131l aktif/ya\u015Fam\u0131\u015F olmas\u0131 gerekmektedir, 1 y\u0131l tamamlanmadan iptal edilen poli\xE7eler kampanyadan yararlanamayacakt\u0131r.</p>\n      </div>\n    "; // modalın konumunu ayarlıyorum
    // const modalLocation = scale.closest('.campaign-table-container').querySelector('.campaign-table');

    if (scale) {
      scale.insertAdjacentElement("afterend", modal);
    } // oluşturulan modalı sakla


    currentModal = modal;
  });
}); // tuvturk yazısı içermeyen classların içindeki öğelere tıklandığında modal saklanır

document.addEventListener('click', function (event) {
  var target = event.target; // eğer tıklanan öğe tuvturk yazısı içermiyor ve bir modal gösteriliyorsa, modalı sakla

  if (!target.closest('.offer-item-container .scale') && currentModal) {
    currentModal.style.display = 'none';
  }
});
var head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style);