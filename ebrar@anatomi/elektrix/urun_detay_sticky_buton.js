const urun_detay_sticky_html = () => {
  const anatomi_addToCard_html = `
          <div class="anatomi_addToCard_container">
              <div class="anatomi_addToCard_info">
                <div class="anatomi_addToCard_info_productName">
                  <h3></h3>
                </div>
                <div class="anatomi_product_price_area">
            <div class="anatomi_addToCard_info_discount">
              <h3></h3>
              <h3>İskonto</h3>
            </div>
            <div class="anatomi_addToCard_info_productPrice">
              <div class="anatomi_addToCard_info_productPrice_old">
                <h3></h3>
              </div>
              <div class="anatomi_addToCard_info_productPrice_new">
                <h3></h3>
              </div>
            </div>
          </div>
              </div>
          
              <div class="anatomi_addToCard_buttons">
                <a class="anatomi_addToCard_buyNow">Hemen Al</a>
                <div class="anatomi_addToCard_button"></div>
              </div>
            </div>
          `;

  const anatomi_addToCard_container = document.querySelector(
    ".anatomi_addToCard_container"
  );
  if (!anatomi_addToCard_container) {
    const aParent = document.getElementById("cart-wrapper");
    aParent.insertAdjacentHTML("beforeend", anatomi_addToCard_html);
  }
};

const urun_detay_sticky_css = () => {
  const anatomi_addToCard_style = `
        <style>
          .anatomi_addToCard_container {
            position: fixed;
            bottom: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100vw;
            height: fit-content;
            background-color: #fff;
            z-index: 9999;
            padding: 0px 10px 15px 10px;
            overflow: hidden;
            box-sizing: border-box;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
          }
        
          .anatomi_addToCard_info {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 10px;
            width: 100%;
          }
        
          .anatomi_addToCard_info_productName{
            width: 60%;
          }
        
          .anatomi_addToCard_info_productPrice .fiyat_container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        
          .anatomi_addToCard_info_productName h3 {
            font-size: 14px;
            font-weight: 600;
            color: #000;
            width: 100%;
          }
        
          .anatomi_addToCard_buttons {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            gap: 10px;
          }
        
          .anatomi_addToCard_buyNow {
            background-color: #EA9025;
            color: #fff;
            padding: 5px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            width: 40%;
            line-height: 40px;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            text-align: center;
          }
        
          .anatomi_addToCard_button {
            border: none;
            width: 60%;
            padding: 0;
          }
        
          .anatomi_addToCard_button-2 {
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
        
          .anatomi_addToCard_button-2 .container_icon svg{
            display: none;
          }
      
              .anatomi_product_price_area {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 40%;
            gap: 10px;
          }
          
          .anatomi_addToCard_info_discount {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 3px;
          }
      
          .anatomi_addToCard_info_discount h3 {
          font-weight: 600 !important;
          }
      
          .anatomi_addToCard_info_productPrice {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 3px;
          }
      
          .anatomi_addToCard_info_productPrice_old h3 {
            text-decoration: line-through;
            font-size: 11px !important;
            color: #92959B !important;
            font-weight: 400 !important;
          }
      
          .anatomi_product_price_area h3 {
            font-size: 14px;
            color: #6CB357;
            font-weight: 700;
            margin: 0;
          }
      
          .anatomi_addToCard_container #mobileBuyBtn {
          position: relative;
          box-shadow: none;
          }
      
          .anatomi_addToCard_container .buyBtn {
          padding: 0 !important;}
        
          .anatomi_addToCard_container #addCartBtn {
          border-radius: 5px !important;anatomi_product_price_area h3
          }
    
            .anatomi_addToCard_container {
        padding: 0px 10px 0px 10px !important;
    }
      .qtyBox {
      width: 45% !important;
      }
    
      .anatomi_addToCard_button {
      width: 55% !important;
      }
      .qtyBtns {
      width: fit-content !important;}
    
      #cart-wrapper .qtyBtns input {
        width: 45px !important;
        height: 45px !important;
    }
    
    #cart-wrapper .qtyBtns a{
        width: 45px !important;
         height: 45px !important;
    }
    
    .anatomi_addToCard_buyNow {
    display: none !important;}
    
    .anatomi_addToCard_info_productName {
        width: 55% !important!;
    }
    
    .anatomi_product_price_area h3 {
        font-size: 14px;
        color: #6CB357;
        font-weight: 700;
        margin: 0;
        white-space: nowrap;
    }

 #cart-wrapper .qtyBtns {
    border: 1px solid #A3A3A3 !important;
    border-radius: 3px;
    height: 45px !important;
    padding: 0 !important;
    }

  #cart-wrapper .qtyBtns input {
        border-left: 1px solid #A3A3A3  !important;
        border-right: 1px solid #A3A3A3 !important;
}
        </style>
        `;

  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", anatomi_addToCard_style);
};

const urun_detay_sticky_js = () => {
  const update_product_name = () => {
    const productName = document.querySelector("#productName");
    const anatomi_addToCard_info_productName = document.querySelector(
      ".anatomi_addToCard_info_productName h3"
    );

    if (productName && anatomi_addToCard_info_productName) {
      if (
        anatomi_addToCard_info_productName.textContent !==
        productName.textContent.substring(0, 50) + "..."
      ) {
        anatomi_addToCard_info_productName.textContent =
          productName.textContent;
        if (anatomi_addToCard_info_productName.textContent.length > 50) {
          anatomi_addToCard_info_productName.textContent =
            anatomi_addToCard_info_productName.textContent.substring(0, 50) +
            "...";
        }
      }
    }
  };

  const transport_addToCart = () => {
    const mobileBuyBtn = document.querySelector("#mobileBuyBtn");
    const anatomi_addToCard_button = document.querySelector(
      ".anatomi_addToCard_button"
    );

    if (mobileBuyBtn && anatomi_addToCard_button) {
      if (!anatomi_addToCard_button.querySelector("#mobileBuyBtn")) {
        anatomi_addToCard_button.appendChild(mobileBuyBtn);
      }
    }
  };

  const update_product_price = () => {
    const old_price = () => {
      const old_price = document.querySelector(".product-price-not-discounted");
      const anatomi_addToCard_info_productPrice_old = document.querySelector(
        ".anatomi_addToCard_info_productPrice_old h3"
      );

      if (old_price && anatomi_addToCard_info_productPrice_old) {
        if (
          anatomi_addToCard_info_productPrice_old.textContent !==
          old_price.textContent
        ) {
          anatomi_addToCard_info_productPrice_old.textContent =
            old_price.textContent + " TL";
        }
      }
    };

    const new_price = () => {
      const new_price = document.querySelector(".product-price");
      const anatomi_addToCard_info_productPrice_new = document.querySelector(
        ".anatomi_addToCard_info_productPrice_new h3"
      );

      if (new_price && anatomi_addToCard_info_productPrice_new) {
        if (
          anatomi_addToCard_info_productPrice_new.textContent !==
          new_price.textContent
        ) {
          anatomi_addToCard_info_productPrice_new.textContent =
            new_price.textContent + " TL";
        }
      }
    };

    const discount = () => {
      const discount = document.querySelector(
        ".productDiscount > span:nth-child(1)"
      );
      const anatomi_addToCard_info_discount = document.querySelector(
        ".anatomi_addToCard_info_discount h3"
      );

      if (discount && anatomi_addToCard_info_discount) {
        if (
          anatomi_addToCard_info_discount.textContent !== discount.textContent
        ) {
          anatomi_addToCard_info_discount.textContent = discount.textContent;
        }
      }
    };
    discount();
    new_price();
    old_price();
  };

  const remove_wp_icon = () => {
    const wp_icon = document.querySelector("#cart-button-1492688272087 > div");
    if (wp_icon) {
      wp_icon.style.display = "none";
    }
  };

  const handle_buyNow = () => {
    const buyNow = document.querySelector(".anatomi_addToCard_buyNow");
    const addToCard = document.querySelector("#addCartBtn");
    buyNow.addEventListener("click", () => {
      addToCard.click();
      setTimeout(() => {
        window.location.href = "https://www.elektrix.com/order/address";
      }, 1000);
    });
  };

  const remove_idle_area = () => {
    const a_discount = document.querySelector(".a_container .a_discount");
    if (a_discount) {
      a_discount.style.display = "none";
    }

    const oldPrice = document.querySelector(".a_container .oldPrice");
    if (oldPrice) {
      oldPrice.style.display = "none";
    }

    const originPrice = document.querySelector(".a_container .originPrice");
    if (originPrice) {
      originPrice.style.display = "none";
    }
  };

  handle_buyNow();
  setInterval(() => {
    remove_idle_area();
    remove_wp_icon();
    update_product_name();
    transport_addToCart();
    update_product_price();
  }, 100);
};

const urun_detay_sticky_init = () => {
  urun_detay_sticky_html();
  urun_detay_sticky_css();
  urun_detay_sticky_js();
};

urun_detay_sticky_css();

const urun_detay_sticky_condition = () => {
  const window_innerWidth = window.innerWidth < 768;
  const anatomi_addToCard_container = !document.querySelector(
    ".anatomi_addToCard_container"
  );
  const tabBtn = document.querySelector("#tabBtn");

  return window_innerWidth && anatomi_addToCard_container && tabBtn;
};

if (urun_detay_sticky_condition()) {
  urun_detay_sticky_init();
}

const qtyBox = document.querySelector(".qtyBox");

const container = document.querySelector(".anatomi_addToCard_buttons");

if (qtyBox && container) {
  container.insertAdjacentElement("afterbegin", qtyBox);
}
