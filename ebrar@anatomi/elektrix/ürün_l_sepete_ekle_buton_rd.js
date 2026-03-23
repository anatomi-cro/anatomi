if (window.innerWidth > 768 && document.querySelector("#catImg")) {
//Stil entegrasyonu
function addStyle() {
  var style = "\n<style>\n/* eklenen buton */\n.a_button {\n    height: auto;\n    background: rgb(13, 126, 189);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    padding: 0.6rem 0;\n    text-align: center;\n    color: white;\n    font-weight: bold;\n    cursor: pointer;\n    transition: 250ms all;\n}\n/* eklenen butonun kapsay\u0131c\u0131 container'\u0131 */\n.row.a_product_container{\n    position: relative;\n}\n/* \xDCr\xFCn isimlerinin ... olarak d\xFCzenlenmesi */\n.text-description.detailLink.blockTitleProduct{\n    line-height: normal;\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n}\n/* stok sorunuz butonlar\u0131 gizleme */\n/*.outofstock-button{*/\n/*    display: none;*/\n/*}*/\n\n@media screen and (min-width: 768px) {\n    .a_button{\n        background-color: transparent;\n        color: rgb(13, 126, 189);\n        border: 1px solid rgb(13, 126, 189);\n    }\n    \n    .a_button:hover{\n        background-color: rgb(13, 126, 189);\n        color: white;\n        border: none;\n    }\n}\n</style>\n";
  document.querySelector('head').insertAdjacentHTML('beforeend', style);
}


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

  addStyle();
  addElements();

  var catalogContainer = document.querySelector('.catalogWrapper');
  var mb = new MutationObserver(function(entries) {
    if (entries[0].addedNodes.length > 0 && entries[0].target.classList.contains('catalogWrapper')) {
      addElements();
    }
  });
  mb.observe(catalogContainer, {
    childList: true
  });



const ürün_l_sepete_ekle_rd_d_html = () => {};

const ürün_l_sepete_ekle_rd_d_css = () => {
  const style = `
  <style id="anatomi_ürün_l_sepete_ekle_rd_d">
  .col.passive.productDiscount.ml {
  background: #0F7EBD !important;
  }

  .a_button{
  display: none;}

  .anatomi_fast_delivery {
  position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #EA9025;
    padding: 5px 0;
    color: #fff;
    font-size: 10px;
    font-weight: 700;}

    .anatomi_new_addToCart_button {
position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    right: 5%;
    transform: translateY(-50%);
    color: black !important;
    }

    .productDetails  {
    padding-bottom: 0px !important;
    }

    .tooltipWrapper  {
    position: absolute;
    bottom: 0%;
    background-color: #dddddd94;
    width: 100%;
    left: 0;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    }


    .currentPrice {
    font-weight: 700 !important;
    color: black !important;}

    .discountedPrice {
        transform: translateY(15px);
    }

    .productDiscount {
    position: absolute;
    top: -200px;
       
    }
    .anatomi_formCloseBtn {
    top: 320px !important;}
    .out-of-stock-list {
          background-color: rgb(127, 127, 127) !important;
    }
  </style>
  `;

  const container = document.querySelector("#anatomi_ürün_l_sepete_ekle_rd_d");
  if (!container) {
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
  }
};

const ürün_l_sepete_ekle_rd_d_js = () => {
  const insert_fast_delivery = () => {
    const container = document.querySelectorAll(".imgInner");
    container &&
      container.forEach((item) => {
        if (item.querySelector(".anatomi_fast_delivery")) return;
        const fast_delivery = document.createElement("div");
        fast_delivery.classList.add("anatomi_fast_delivery");
        fast_delivery.innerHTML = `
      <div class="anatomi_fast_delivery_text">Hızlı Teslimat</div>
      `;
        item.appendChild(fast_delivery);
      });
  };

  const insert_new_addToCart = () => {
    const container = document.querySelectorAll(".priceWrapper");
    container &&
      container.forEach((item) => {
         if (!item.querySelector(".anatomi_new_addToCart_button")) {
             const old_addToCart =
          item.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.querySelector(
            ".a_button"
          );
       if (!old_addToCart) return;

        const new_cart = document.createElement("div");
        new_cart.classList.add("anatomi_new_addToCart_button");

        const buttonText = old_addToCart.textContent?.trim();

        if (buttonText === "Sepete Ekle") {
          new_cart.innerHTML = `
            <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/anatomi_elektrix_cart.png" alt="Sepete Ekle"/>
          `;
        } else {
          new_cart.innerHTML = old_addToCart.innerHTML;
        }
       

        new_cart.addEventListener("click", () => {
          old_addToCart && old_addToCart.click();
        });
        item.appendChild(new_cart);
          }
      });

  };

  const change_discountPrice_location = () => {
    const price = document.querySelectorAll(".discountedPrice");
    price &&
      price.forEach((item) => {
        const parent = item.closest(".tooltipWrapper");
        parent && parent.insertAdjacentElement("beforebegin", item);
      });
  };

  const change_color = () => {
    const discount = document.querySelectorAll(".productDiscount");
    discount &&
      discount.forEach((item) => {
        item.style.backgroundColor = "#0F7EBD !important";
      });
  };


  setInterval(() =>{
    insert_fast_delivery();
  insert_new_addToCart();
  change_discountPrice_location();
  change_color();
  },100);
  
};

const ürün_l_sepete_ekle_rd_d_init = () => {
  ürün_l_sepete_ekle_rd_d_html();
  ürün_l_sepete_ekle_rd_d_css();
  ürün_l_sepete_ekle_rd_d_js();
};

const ürün_l_sepete_ekle_rd_d_conditions = () => {
  const container = !document.querySelector("#anatomi_ürün_l_sepete_ekle_rd_d");
  return  container;
};

if (ürün_l_sepete_ekle_rd_d_conditions()) {
  ürün_l_sepete_ekle_rd_d_init();
}
}