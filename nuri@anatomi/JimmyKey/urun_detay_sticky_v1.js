const anatomi_productPage_sticky_html = () => {
  const anatomi_productPage_sticky_html = `
      <div class="anatomi_product_page_sticky_button_container">
      <div class="anatomi_product_page_sticky_button_content">
        <div class="anatomi_product_page_sticky_button_top">
          <div class="anatomi_product_page_sticky_button_productName"></div>
          <div class="anatomi_product_page_sticky_button_price PriceArea"></div>
        </div>
        <div class="anatomi_product_page_sticky_button_bottom">
          <div class="anatomi_product_page_sticky_button_colorOptions">
          <h4 class="colorOptions-count"></h4>
          </div>
          <div class="anatomi_product_page_sticky_button_addToCard AddToBasket ProductDetails AutoTextRep"></div>
        </div>
      </div>
           <div class="anatomi_product_page_sticky_button_colorOptions_popUp">
        <div class="anatomi_product_page_sticky_button_colorOptions_popUp_title">
          <h4>Mevcut Renkler</h4>
        </div>
      </div>
    </div>
  `;

  const body = document.querySelector("body");
  body.insertAdjacentHTML("beforeend", anatomi_productPage_sticky_html);
};

const anatomi_productPage_sticky_stlye = () => {
  const anatomi_productPage_sticky_stlye = `
    <style>
      .anatomi_product_page_sticky_button_container {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        z-index: 9999;
        border-radius: 10px 10px 0 0;
      }

      .anatomi_product_page_sticky_button_content {
        display: flex;
        flex-direction: column;
        padding: 13px;
        gap: 15px;
      }

      .anatomi_product_page_sticky_button_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
      }

      .anatomi_product_page_sticky_button_productName {
        font-size: 16px;
        margin-top: 0;
        text-transform: capitalize;
        color: #000;
        font-weight: 400;
      }

      .anatomi_product_page_sticky_button_price {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .anatomi_product_page_sticky_button_price .Price {
      color: #0b0b0b;
    font-size: 16px;
    width: 100%;
    line-height: normal;
    font-weight: 400;
      }

      .anatomi_product_page_sticky_button_price .PriceOld {
        color: #b2b2b2;
        font-size: 15px;
        text-decoration: line-through;
        line-height: normal;
        margin-top: 5px;
        margin-right: 8px;
        font-weight: 300;
      }

      .anatomi_product_page_sticky_button_price .DiscountedAmount {
        color: #dc3737;
        font-size: 17px;
        font-weight: 400;
      }

      .anatomi_product_page_sticky_button_bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        gap: 25px;
      }

        .anatomi_product_page_sticky_button_addToCard {
            width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
        }

      .anatomi_product_page_sticky_button_addToCard #Basket {
      position: relative;
    background-color: #000;
    /* height: 45px; */
    /* line-height: 45px; */
    font-size: 16px;
    width: 100% !important;
    border: none;
    color: #fff;
    font-weight: 400;
    margin-top: 15px;
    margin-bottom: 20px;
    right: 0;
    bottom: 3%;
    height: 55px;
    margin: 0 auto;
    border-radius: 5px;
      }

      .anatomi_product_page_sticky_button_colorOptions {
      position: relative;
        padding: 5px;
        border: 1px solid #BBBBBB;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 7px;
        border-radius: 5px;
      }

      .anatomi_product_page_sticky_button_colorOptions::after {
      position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: transparent;
      }

      .colorOptions-count {
        font-size: 14px;
        display: none;
      }

      .colorOptions-count.colorsOptions-count-active {
        display: block;
            white-space: nowrap;
            font-size: 12px;
      }

      .anatomi_product_page_sticky_button_colorOptions .ItemColorsContainer.product-colors {
        display: flex;
        }

      .anatomi_product_page_sticky_button_colorOptions img {
        width: 44px;
        height: 45px;
        object-fit: contain;
      }

      .anatomi_product_page_sticky_button_colorOptions_popUp {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        z-index: 9999;
        transform: translateY(100%);
        display: flex;
        flex-direction: column;
        gap: 10px;
                padding: 15px;
                height: 200px;
                   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                   border-radius: 10px 10px 0 0;
      }
    
      .anatomi_product_page_sticky_button_colorOptions_popUp.colorOptions_popUp_active {
        transform: translateY(-20%);
        transition: all 0.6s ease;
      }

        .anatomi_product_page_sticky_button_colorOptions_popUp_productColorTitle {
            margin-top: 10px;}

      .anatomi_product_page_sticky_button_colorOptions_popUp_title h4{
        font-size: 16px;
        font-weight: 400;
        color: #000;
      }

      .anatomi_product_page_sticky_button_colorOptions_popUp .ItemColorsContainer.product-colors {
        display: flex;
}

.anatomi_product_page_sticky_button_colorOptions_popUp img {
    width: 70px;
    height: 80px;
    object-fit: contain;
}

.anatomi_product_page_sticky_button_colorOptions_popUp_productColorTitle h4 {
    font-size: 14px;
    font-weight: 400;
    color: #000;
    text-align: center;
    margin-top: 5px;
    text-transform: capitalize;

    }


    </style>
    `;

  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", anatomi_productPage_sticky_stlye);
};

const anatomi_productPage_sticky_script = () => {
  const productPage = {
    productName: document.querySelector(".ProductHeader").innerText,
    price: document.querySelector(".ProductContent .PriceArea").innerHTML,
    colorOptions: document.querySelector(".ItemColorsContainer.product-colors"),
    addToCard: document.getElementById("Basket"),
  };

  const productName = document.querySelector(
    ".anatomi_product_page_sticky_button_productName"
  );
  const price = document.querySelector(
    ".anatomi_product_page_sticky_button_price"
  );
  const colorOptions = document.querySelector(
    ".anatomi_product_page_sticky_button_colorOptions"
  );
  const addToCard = document.querySelector(
    ".anatomi_product_page_sticky_button_addToCard"
  );

  productName.innerHTML = productPage.productName;
  price.innerHTML = productPage.price;
  colorOptions.insertAdjacentElement("afterbegin", productPage.colorOptions);
  addToCard.insertAdjacentElement("beforeend", productPage.addToCard);

  const checkColorOptions = () => {
    const colorOptions = document.querySelectorAll(
      ".anatomi_product_page_sticky_button_colorOptions .ColorOption.color-option-wrapper"
    );

    if (colorOptions.length > 2) {
      const colorOptionsCount = document.querySelector(".colorOptions-count");
      colorOptionsCount.classList.add("colorsOptions-count-active");
      colorOptionsCount.innerHTML = `+ ${colorOptions.length - 2}`;

      colorOptions.forEach((item, idx) => {
        if (idx > 1) {
          colorOptions[idx].style.display = "none";
        }
      });
    }
  };

  const colorOptionsPopUp = () => {
    const colorOptions = document.querySelector(
      ".anatomi_product_page_sticky_button_colorOptions"
    );
    const colorOptionsPopUp = document.querySelector(
      ".anatomi_product_page_sticky_button_colorOptions_popUp"
    );

    colorOptions.addEventListener("click", () => {
      colorOptionsPopUp.classList.add("colorOptions_popUp_active");
    });

    const colors = document.querySelector(
      ".ItemColorsContainer.product-colors"
    );

    colorOptionsPopUp.insertAdjacentElement(
      "beforeend",
      colors.cloneNode(true)
    );

    colors.addEventListener("click", (e) => {
      if (e.target.classList.contains("ColorOption")) {
        colorOptionsPopUp.classList.remove("colorOptions_popUp_active");
      }
    });

    const popUpColors = document.querySelectorAll(
      ".anatomi_product_page_sticky_button_colorOptions_popUp .ColorOption.color-option-wrapper"
    );

    popUpColors.forEach((item, idx) => {
      item.style.display = "flex";
    });
  };

  const imgTitle = () => {
    const imgContainer = document.querySelectorAll(
      ".anatomi_product_page_sticky_button_colorOptions_popUp .ColorOption .ColorOptionItem"
    );
    const imgContainer_a = document.querySelectorAll(
      ".anatomi_product_page_sticky_button_colorOptions_popUp .ColorOption .ColorOptionItem a"
    );

    imgContainer.forEach((item, idx) => {
      const imgTitles = document.createElement("div");
      imgTitles.classList.add(
        "anatomi_product_page_sticky_button_colorOptions_popUp_productColorTitle"
      );
      const imgTitleh4 = document.createElement("h4");
      imgTitleh4.innerHTML = imgContainer_a[idx]
        .getAttribute("title")
        .toLowerCase();
      imgTitles.appendChild(imgTitleh4);
      item.appendChild(imgTitles);
    });
  };

  checkColorOptions();
  colorOptionsPopUp();
  imgTitle();
};

const anatomi_productPage_sticky_init = () => {
  anatomi_productPage_sticky_html();
  anatomi_productPage_sticky_stlye();
  anatomi_productPage_sticky_script();
};

anatomi_productPage_sticky_init();
