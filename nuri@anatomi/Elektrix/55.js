

var mobilGenislik = 540;

// Tarayıcının ekran genişliğini al
var ekranGenislik = window.innerWidth;

// Ekran genişliği eşik değerinden küçükse
if (ekranGenislik < mobilGenislik) {
  var a_style = "<style>\n.whatsapp-floating-button{\ndisplay: none !important;\n}\n.anatomi_container{\n    height: 185px;\n    background: white;\n    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    z-index: 9999999999;\n}\n.a_up_info{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    margin: 15px 10px;\n}\n.a_product_price{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 15px;\n}\n.a_product_price span{\n\n}\n.a_product_kargo{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 15px;\n}\n.a_product_kargo span{\n    color: #388E3C !important;\n    font-size: 14px;\n\n}\n.a_up_info h4{\n    margin: 0 !important;\n    color: #656364 !important;\n}\n\nhr{\n    border-width: 0.2px !important;\n    border-color: #e2e2e266 !important;\n}\n#addCartBtn{\n    position: initial !important;\n    width: 50% !important;\n    margin-right : 30px !important;\n    border-radius: 3px !important;\n    padding: 0px !important;\n    color: black !important;\n\n}\n.a_sepet_container{\n    width: 100% !important;\n    display: flex !important;\n    flex-direction: row !important;\n    align-items: center !important;\n    padding: 0px 18px !important;\n}\n.a_sepet_container h4{\n    margin: 0 !important;\n}\n.a_total{\n    width: 40% !important;\n    gap: 12px;\n    display: flex;\n    flex-direction: column;\n    font-size: 15px\n}\n.wp-app-container{\n    display: none !important;\n}\n\n.a_kargo_group{\ndisplay: flex !important;\ngap: 5px !important;\n    \n}\n.a_toplam_tutar_ek{\ncolor: #DE9440 !important;\nfont-size: 14px !important;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n}\n#addCartBtn{\ncolor: white !important;\n}\n.a_toplam_tutar_ek span{\nfont-weight: 700;\n}\n</style>";
  var anatomi_create_div = document.createElement("div");
  anatomi_create_div.classList.add("anatomi_container");
  var a_body = document.querySelector("body");
  a_body.appendChild(anatomi_create_div);
  var a_sepet_btn = document.querySelector("#addCartBtn");
  a_sepet_btn.classList.add("a_sepet_btn");
  var a_product_price = document.querySelectorAll(".box.col-6.a-right")[0].innerText;

  // Fiyatı string olarak aldığımız için, önce formatı dönüştürmemiz gerekiyor
  var formattedPrice = a_product_price.replace(/[^\d,.-]/g, "") // "TL" ve diğer harfleri kaldır
  .replace(/\./g, "") // Binlik ayırıcı noktaları kaldır
  .replace(/,/g, "."); // Ondalık ayırıcı virgülleri nokta ile değiştir

  // Fiyatı sayıya çevir
  var priceNumber = parseFloat(formattedPrice);

  // 2000 TL'yi fiyat değerinden çıkar
  var resultPrice = 2000 - priceNumber;

  // Virgülden sonra sadece 2 basamak al
  var formattedResultPrice = resultPrice.toFixed(2);
  console.log(formattedResultPrice); // Sonucu konsola yazdır

  // Eğer string yerine sayı olarak kullanmanız gerekirse:
  var numericResultPrice = parseFloat(formattedResultPrice);

  // kargo fiyatı
  var a_product_kargo = "";
  var kargoElement = document.querySelectorAll(".box.col-6.line-right")[1];
  if (kargoElement.innerText == "Kargo Fiyatı") {
    a_product_kargo = document.querySelectorAll(".box.col-6.a-right")[1].innerText.trim();
  } else {
    a_product_kargo = "\n  <svg width=\"18\" height=\"17\" viewBox=\"0 0 18 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10.6992 7.26923V17H5.78756C5.579 17 5.40974 16.8307 5.40974 16.6222V12.5583L10.6992 7.26923ZM17.1222 7.17666H12.2105V17H17.1222C17.3307 17 17.5 16.8307 17.5 16.6222V7.55448C17.5 7.34593 17.3307 7.17666 17.1222 7.17666ZM2.95881 8.78051L4.11457 7.62476C4.0458 7.65876 3.97666 7.69239 3.90979 7.7211C3.06271 8.08457 2.17257 8.17751 1.64249 7.958C1.45924 7.88205 1.33947 7.77664 1.2862 7.64403C1.0886 7.14984 1.78455 6.20604 3.09899 5.64195C4.08207 5.22031 4.93897 5.22408 5.37989 5.41488L5.85217 5.88716L6.3864 5.35292L5.91413 4.88065C5.72333 4.43935 5.71955 3.58245 6.1412 2.59974C6.70528 1.28493 7.64908 0.589357 8.14289 0.786957C8.27551 0.84023 8.3813 0.959621 8.45724 1.14324C8.67675 1.6737 8.58381 2.56347 8.22035 3.41054C8.19163 3.47742 8.15801 3.54656 8.124 3.61532L9.27976 2.45957C9.37459 1.85355 9.33718 1.29286 9.15583 0.853832C9.0013 0.480545 8.74816 0.214937 8.42399 0.0849665C7.45488 -0.302678 6.14724 0.670589 5.44714 2.30126C5.1071 3.09393 4.97675 3.89982 5.0595 4.55988C4.39982 4.47713 3.59393 4.60748 2.80126 4.94752C1.17059 5.64762 0.197322 6.95526 0.584966 7.92437C0.714559 8.24854 0.980167 8.50168 1.35345 8.65621C1.7921 8.83794 2.35279 8.87534 2.95881 8.78051ZM6.11928 6.6889L2.12005 10.6881C1.97232 10.8359 1.97232 11.075 2.12005 11.2224L3.63134 12.7336C3.77906 12.8814 4.01822 12.8814 4.16557 12.7336L8.16518 8.73404L6.11928 6.6889ZM13.2333 3.13171L11.722 1.62043C11.5743 1.4727 11.3351 1.4727 11.1877 1.62043L7.18814 5.62004L9.23366 7.66556L13.2333 3.66595C13.381 3.5186 13.381 3.27944 13.2333 3.13171Z\" fill=\"#50A163\"/>\n</svg>\n\n  <p>Tebrikler, Kargonuz \xDCcretsiz!</p>";
    var anatomi_container = document.querySelector(".anatomi_container");
    anatomi_container.style.height = "150px";
  }

  // a_total_fiyat'ı alalım (konumu değişebilir)
  var a_total_fiyat = "";
  var totalElement = document.querySelectorAll(".box.col-6.a-right")[2] || document.querySelectorAll(".box.col-6.a-right")[1];
  if (totalElement) {
    a_total_fiyat = totalElement.innerText;
  }
  var a_html = "\n<div class=\"a_up_info\">\n<p class=\"a_toplam_tutar_ek\">\n<svg width=\"17\" height=\"20\" viewBox=\"0 0 17 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.39023 12.9291L3.01254 8.38663L1.18793 9.54691C0.0519517 10.2736 -0.338455 11.8764 0.320357 13.1324C0.976457 14.3854 2.42964 14.816 3.56833 14.0923L5.39023 12.9291Z\" fill=\"#DE9440\"/>\n<path d=\"M13.307 4.95059C13.3617 5.06234 13.4567 5.1252 13.5574 5.1252C13.6063 5.1252 13.6552 5.11123 13.7013 5.0798L16.0264 3.44892C16.1646 3.35114 16.2106 3.13811 16.1329 2.97049C16.0523 2.80286 15.8768 2.74698 15.7387 2.84127L13.4135 4.47215C13.2754 4.56993 13.2265 4.78296 13.307 4.95059Z\" fill=\"#DE9440\"/>\n<path d=\"M16.7332 6.98879L14.3438 7.06805C14.2028 7.07191 14.0926 7.16277 14.0977 7.26909C14.1028 7.37348 14.2182 7.45467 14.3541 7.45467H14.3643L16.7537 7.37542C16.8947 7.37155 17.0049 7.28069 16.9998 7.17437C16.9947 7.06611 16.8768 6.98686 16.7332 6.98879Z\" fill=\"#DE9440\"/>\n<path d=\"M11.7453 2.75019C11.7956 2.78136 11.8488 2.79552 11.9049 2.79552C12.0024 2.79552 12.0969 2.75019 12.1531 2.66521L13.6362 0.43572C13.7248 0.302574 13.6835 0.129767 13.5476 0.0447802C13.4087 -0.0402066 13.2285 -0.00054609 13.1399 0.1326L11.6567 2.36209C11.5681 2.4924 11.6094 2.66521 11.7453 2.75019Z\" fill=\"#DE9440\"/>\n<path d=\"M5.33936 13.5117L3.91531 14.4999C3.72473 14.6302 3.52357 14.7287 3.31711 14.805C3.57121 16.3239 4.21971 17.7093 5.16995 18.7579C5.52464 19.1488 6.04873 19.2123 6.4643 18.9232C6.47489 18.9168 6.48283 18.9105 6.49341 18.9041C7.09956 18.4847 7.2372 17.4996 6.7687 16.8768C6.05932 15.9267 5.56435 14.7669 5.33936 13.5117Z\" fill=\"#DE9440\"/>\n<path d=\"M8.85093 7.46911C7.95962 5.78334 7.23781 4.11846 6.81949 2.7788C6.58163 2.01201 6.45312 1.40334 6.43672 0.931923C5.87623 1.73751 5.58915 3.06225 5.20637 4.20201C4.75525 5.74456 4.13461 6.96785 3.31711 7.81223L5.81334 12.5324C6.89332 12.1803 8.17561 12.2071 9.62468 12.5503C10.7265 12.7561 11.9323 13.153 12.8537 13.0187C11.2487 11.9356 9.12434 7.9823 8.85093 7.46911Z\" fill=\"#DE9440\"/>\n<path d=\"M7.23877 0.507275C6.72391 0.82957 7.28887 2.97419 8.51897 5.63388C9.40676 5.18206 10.481 5.53147 10.9792 6.46823C11.4801 7.40499 11.2213 8.58875 10.4142 9.19418C11.9393 11.7033 13.3893 13.3298 13.9069 13.0045C14.5359 12.6099 13.5563 9.49238 11.7139 6.04051C9.87153 2.58864 7.87052 0.112689 7.23877 0.507275Z\" fill=\"#DE9440\"/>\n</svg>\n<span>".concat(formattedResultPrice, " TL</span> de\u011Ferinde \xFCr\xFCn ekle, <span>Kargon \xDCcretsiz</span> Olsun!\n</p>\n<div class=\"a_product_kargo\">\n<h4>Kargo</h4>\n<span class=\"a_kargo_group\">").concat(a_product_kargo, "</span>\n</div>\n<div class=\"a_product_price\">\n<h4>\xDCr\xFCnler</h4>\n<span>").concat(a_product_price, "</span>\n</div>\n\n</div>\n\n<hr>\n<div class=\"a_sepet_container\">\n<div class=\"a_total\">\n<h4>Toplam</h4>\n<span>").concat(a_total_fiyat, "</span>\n</div>\n</div>\n\n");
  anatomi_create_div.innerHTML = a_html;
  var a_sepet = document.querySelector(".col.col-3.col-md-6.col-sm-12.fr");
  a_sepet.style.display = "none";
  var a_sepet_container = document.querySelector(".a_sepet_container");
  a_sepet_container.insertAdjacentElement("beforeend", a_sepet_btn);
  var a_head = document.querySelector("head");
  a_head.insertAdjacentHTML("afterbegin", a_style);
  // Hedef DOM öğesini seçiyoruz.

  if (formattedPrice > 2000) {
    var a_toplam_tutar_ek = document.querySelector(".a_toplam_tutar_ek");
    a_toplam_tutar_ek.style.display = "none";
  }
  var targetNode = document.querySelector("#cartDetail");

  // Gözlemleyici için yapılandırmayı belirliyoruz.
  var config = {
    attributes: true,
    childList: true,
    subtree: true
  };

  // Gözlemci için geri çağırım fonksiyonunu tanımlıyoruz.
  var callback = function callback(mutationList, observer) {
    var _iterator = _createForOfIteratorHelper(mutationList),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var mutation = _step.value;
        if (mutation.type === "childList") {
          // Eğer DOM ağacında alt öğelerde değişiklik olduysa bu blok çalışır.

          //sepet toplam
          var _a_product_price = document.querySelectorAll(".box.col-6.a-right")[0].innerText;

          // kargo fiyatı
          var _a_product_kargo = "";
          var _kargoElement = document.querySelectorAll(".box.col-6.line-right")[1];
          if (_kargoElement.innerText == "Kargo Fiyatı") {
            _a_product_kargo = document.querySelectorAll(".box.col-6.a-right")[1].innerText.trim();
          } else {
            _a_product_kargo = "Ücretsiz";
          }

          // a_total_fiyat'ı alalım (konumu değişebilir)
          var _a_total_fiyat = "";
          var _totalElement = document.querySelectorAll(".box.col-6.a-right")[2] || document.querySelectorAll(".box.col-6.a-right")[1];
          if (_totalElement) {
            _a_total_fiyat = _totalElement.innerText;
          }
          var _a_html = "\n            <div class=\"a_up_info\">\n            <div class=\"a_product_price\">\n            <h4>\xDCr\xFCnler</h4>\n            <span>".concat(_a_product_price, "</span>\n            </div>\n            <div class=\"a_product_kargo\">\n            <h4>Kargo</h4>\n            <span>").concat(_a_product_kargo, "</span>\n            </div>\n            </div>\n            \n            <hr>\n            <div class=\"a_sepet_container\">\n            <div class=\"a_total\">\n            <h4>Toplam</h4>\n            <span>").concat(_a_total_fiyat, "</span>\n            </div>\n            </div>\n            \n            ");
          anatomi_create_div.innerHTML = _a_html;
          var _a_sepet_container = document.querySelector(".a_sepet_container");
          _a_sepet_container.insertAdjacentElement("beforeend", a_sepet_btn);
          var _a_head = document.querySelector("head");
          _a_head.insertAdjacentHTML("afterbegin", a_style);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  // Gözlemciyi oluşturuyoruz ve hedef DOM öğesini gözlemlemeye başlıyoruz.
  var observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}
var a_whatsapp = document.querySelector(".whatsapp-floating-button");
a_whatsapp.remove();
var a_btn_basket = document.querySelector("#basketBtns");
a_btn_basket.remove();
