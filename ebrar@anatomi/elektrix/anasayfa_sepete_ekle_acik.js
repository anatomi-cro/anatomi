function addStyle() {
  var style = "\n<style>\n/* eklenen buton */\n.a_button {\n    height: auto;\n    background: rgb(13, 126, 189);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    padding: 0.6rem 0;\n    text-align: center;\n    color: white;\n    font-weight: bold;\n    cursor: pointer;\n    transition: 250ms all;\n}\n/* eklenen butonun kapsay\u0131c\u0131 container'\u0131 */\n.row.a_product_container{\n    position: relative;\n}\n/* \xDCr\xFCn isimlerinin ... olarak d\xFCzenlenmesi */\n.text-description.detailLink.blockTitleProduct{\n    line-height: normal;\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n}\n/* stok sorunuz butonlar\u0131 gizleme */\n/*.outofstock-button{*/\n/*    display: none;*/\n/*}*/\n\n@media screen and (min-width: 768px) {\n    .a_button{\n        background-color: transparent;\n        color: rgb(13, 126, 189);\n        border: 1px solid rgb(13, 126, 189);\n    }\n    \n    .a_button:hover{\n        background-color: rgb(13, 126, 189);\n        color: white;\n        border: none;\n    }\n}\n</style>\n";
  document.querySelector('head').insertAdjacentHTML('beforeend', style);
}
addStyle();

//Element Düzenlenmesi
function addElements() {
  var html = "<div class=\"a_button\">Sepete Ekle</div>";
  //butonun ekleneceği alana class isimlendirmesi
  var items = document.querySelectorAll('#katalog .fl.col-12.catalogWrapper li .box-border');
  items.forEach(function (item) {
    item.children[1].classList.add('a_product_container');
  });

  //butonun eklenmesi
  var aProductContainer = document.querySelectorAll(".a_product_container");
  aProductContainer.forEach(function (item) {
    item.insertAdjacentHTML("beforeend", html);
  });

  //eklenen butona onclick özelliği tanımlanması
  var aButtons = document.querySelectorAll('.a_button');
  aButtons.forEach(function (item) {
  var attr = item.parentElement.parentElement.parentElement.parentElement
               .querySelector("input").value;

  // adet kontrolü
  var adetInput = document.querySelector(`#Adet${attr}`);
  var subProInput = document.querySelector(`#subPro${attr}`);
  var adet = adetInput ? adetInput.value || 1 : 1; // default 1
  var subPro = subProInput ? subProInput.value || 0 : 0;

  item.addEventListener("click", function() {
    Add2Cart(attr, subPro, adet);
  });
});

  document.querySelectorAll('.out-of-stock-list').forEach(function (item) {
    var items = Array.from(item.closest('.row').nextElementSibling.children);
    items.forEach(function (sub) {
      if (sub.classList.contains('a_button')) {
        sub.innerText = "Ürüne Git";
        var href = sub.closest('.row').previousElementSibling.children[0];
        sub.removeAttribute('onclick');
        sub.addEventListener('click', function () {
          href.click();
        });
      }
    });
  });
}

//elementlerin eklenmesi
addElements();
var catalogContainer = document.querySelector('.catalogWrapper');
var mb = new MutationObserver(function (entries) {
  if (entries[0].addedNodes.length > 0 && entries[0].target.classList.contains('catalogWrapper')) {
    addElements();
  }
});
mb.observe(catalogContainer, {
  childList: true
});

const d = document.querySelector("#mainColumn > div > div.a_fırsat_container > div.a_product_container > div");

/* OPT-171322 START */
if (d) {
  d.style.display = "none";
}
/* OPT-171322 END */





