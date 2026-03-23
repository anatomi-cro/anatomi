<script>
"use strict";

var anatomi_sticky_button_html = function anatomi_sticky_button_html() {
  var html = "\n      <div class=\"anatomi_sticky_button_container\">\n      <div class=\"anatomi_sticky_button_content\">\n        <button class=\"anatomi_sticky_button\">sepete ekle</button>\n      </div>\n    </div>\n  ";
  var element = document.querySelector(".anatomi_sticky_button_container");
  if (!element) {
    var container = document.querySelector("body");
    container.insertAdjacentHTML("beforeend", html);
  }
};
var anatomi_sticky_button_css = function anatomi_sticky_button_css() {
  var style = "\n    <style id=\"anatomiStickyButton\">\n.anatomi_sticky_button_container {\n    position: fixed;\n    bottom: 65px;\n    right: 0;\n    z-index: 99999;\n    width: 100%;\n    height: fit-content;\n    border: 1px solid #fff;\n    transform: translateY(100%);\n    transition: all 0.5s ease-in-out;\n}\n\n.anatomi_sticky_button_container.anatomi_sticky_button_active {\n    transform: translateY(0);\n    transition: all 0.5s ease-in-out;\n}\n\n      .anatomi_sticky_button_content {\n        display: flex;\n        justify-content: flex-start;\n        align-items: flex-start;\n        padding: 10px;\n        background-color: #fff;\n      }\n\n      .anatomi_sticky_button {\n        width: 100%;\n        height: 45px;\n        border: none;\n        font-size: 14px;\n        font-weight: 500;\n        color: #fff;\n        background-color: #000;\n        text-transform: uppercase;\n        cursor: pointer;\n        margin: 0;\n        padding: 0;\n      }\n    </style>\n      ";
  var container = document.querySelector("#anatomiStickyButton");
  if (!container) {
    var head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
  }
};
var anatomi_sticky_button_js = function anatomi_sticky_button_js() {
  var handle_addToCart = function handle_addToCart() {
    var newCart = document.querySelector(".anatomi_sticky_button");
    if (newCart) {
      newCart.addEventListener("click", function () {
        var oldCart = document.querySelector(".variant-selector-bing__basket-button");
        if (oldCart) {
          oldCart.click();
        }
      });
    }
  };
  var handle_scroll = function handle_scroll() {
    var oldCart = document.querySelector("#__layout > div > main > div > div > article.pdp-shopping-mode__detail.pdp-shopping-mode__detail > div.variant-selector-bing > div > div.variant-selector-bing__basket.col--12 > div > button");
    if (!oldCart) return;
    window.addEventListener("scroll", function () {
      var newCart = document.querySelector(".anatomi_sticky_button_container");
      if (!newCart) return;
      var oldCartTop = oldCart.getBoundingClientRect().bottom;
      if (oldCartTop < 10) {
        newCart.classList.add("anatomi_sticky_button_active");
      } else {
        newCart.classList.remove("anatomi_sticky_button_active");
      }
    });
  };
  var handle_display = function handle_display() {
    var button = document.querySelector(".anatomi_sticky_button_container");
    var cart = document.querySelector(".flyout--basket");
    if (!button) return;
    if (cart && button.style.display != "none") {
      button.style.display = "none";
    } else if (!cart && button.style.display != "block") {
      button.style.display = "block";
    }

    var sepet = document.querySelector("#app > div > div > div:nth-child(3) > div.flyout.flyout--basketflyout.flyout--right");
    if(sepet){
        sepet.style.zIndex = "999999";
    }
  };
  function handle_check_size() {
    var button = document.querySelector(".anatomi_sticky_button_container");
    var sizes = document.querySelectorAll("#__layout > div > main > div > div > article.pdp-shopping-mode__detail.pdp-shopping-mode__detail > div.variant-selector-bing > div > div.variant-selector-bing__size-options.col--12 > label");
    if (sizes && button) {
      button.addEventListener("click", function () {
        var scrolled = false;
        sizes.forEach(function (size) {
          if (!size.classList.contains("variant-swatch__radio--active") && !scrolled) {
            var sizeContainer = document.querySelector("#__layout > div > main > div > div > article.pdp-shopping-mode__detail.pdp-shopping-mode__detail > div.variant-selector-bing > div > div.variant-selector-bing__size-options.col--12");
            if (sizeContainer) {
              var topOffset = sizeContainer.getBoundingClientRect().top + window.scrollY - 300;
              window.scrollTo({
                top: topOffset,
                behavior: "smooth"
              });
              scrolled = true;
            }
          }
        });
      });
    }
  }
  function delete_container() {
    var container = document.querySelector(".product-detail__title");
    var sticky = document.querySelector(".anatomi_sticky_button_container");
    if (sticky) {
      if (!container && sticky.style.display != "none") {
        sticky.style.display = "none";
      }
    }
  }
  function deleteOldButton() {
    var oldButton = document.querySelector(".variant-selector-bing__basket__main-buttons");
    if (!oldButton) return;
    oldButton.style.display = "none";
  }
  handle_addToCart();
  handle_scroll();
  handle_check_size();
  setInterval(function () {
    handle_display();
    delete_container();
    deleteOldButton();
  }, 100);
};
var anatomi_sticky_button_init = function anatomi_sticky_button_init() {
  anatomi_sticky_button_html();
  anatomi_sticky_button_css();
  anatomi_sticky_button_js();
};
var anatomi_sticky_button_conditions = function anatomi_sticky_button_conditions() {
  var device = matchMedia("(max-width: 768px)").matches;
  var container = document.querySelector(".product-detail__title");
  return device && container;
};
setInterval(function () {
  if (anatomi_sticky_button_conditions() && !document.querySelector(".anatomi_sticky_button_container")) {
    anatomi_sticky_button_init();
  }
}, 50);
console.log("deneme");
</script>