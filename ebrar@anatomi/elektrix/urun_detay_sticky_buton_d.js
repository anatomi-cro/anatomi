const doksan_bir_html = () => {
  const doksan_bir_html = `
   <div class="anatomi_urun_detay_sticky_desktop_container">
      <div class="anatomi_urun_detay_sticky_desktop_content">
        <div
          class="anatomi_urun_detay_sticky_desktop_col"
          id="anatomi_urun_detay_sticky_desktop_productName"
        ></div>
        <div
          class="anatomi_urun_detay_sticky_desktop_col"
          id="anatomi_urun_detay_sticky_desktop_productAttribute"
        ></div>
        <div
          class="anatomi_urun_detay_sticky_desktop_col"
          id="anatomi_urun_detay_sticky_desktop_productPrice"
        ></div>
        <div
          class="anatomi_urun_detay_sticky_desktop_col"
          id="anatomi_urun_detay_sticky_desktop_productAddToCart"
        ></div>
      </div>
    </div>
  `;

  const headerMain = document.getElementById("headerMain");
  const element = !document.querySelector(
    ".anatomi_urun_detay_sticky_desktop_container"
  );

  if (headerMain && element) {
    headerMain.insertAdjacentHTML("afterend", doksan_bir_html);
  }
};

const doksan_bir_css = () => {
  const urun_detay_sticky_desktop_style = `
    <style>
  .anatomi_urun_detay_sticky_desktop_container {
    position: fixed;
    bottom: 0px;
    left: 0;
    right: 0;
    width: 100%;
    background-color: #fff;
    z-index: 9999;
    display: none;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  }

  .anatomi_urun_detay_sticky_desktop_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 50px;
  }

  .anatomi_urun_detay_sticky_desktop_col {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 100%;
  }

  #anatomi_urun_detay_sticky_desktop_productAddToCart #mobileBuyBtn {
  flex-direction: row !important;
  width: 100%;
  }

  #anatomi_urun_detay_sticky_desktop_productAddToCart #mobileBuyBtn #addCartBtn {
  border-radius: 6px;
  }

  #anatomi_urun_detay_sticky_desktop_productAddToCart #shopListLink {
  white-space: nowrap;
  }

  #anatomi_urun_detay_sticky_desktop_productName #productName {
  font-size: 18px !important;
    font-weight: 800 !important;
    color: #000 !important;
  }

    #anatomi_urun_detay_sticky_desktop_productPrice .product-price {
    font-size: 18px !important;
    font-weight: 600 !important;
    color: #000 !important;
    white-space: nowrap;
    }

    #anatomi_urun_detay_sticky_desktop_productPrice .discountedPrice {
    font-size: 14px !important;
    }

    #anatomi_urun_detay_sticky_desktop_productAddToCart .box.col-4.col-xs-12.p-left.qtyBox{
    width: auto;
    }

    #anatomi_urun_detay_sticky_desktop_productAddToCart .fl.col-sm-12.qtyBtns {
    background: #E1E1E1;
    border-radius: 20px;
    }

      #anatomi_urun_detay_sticky_desktop_productAddToCart .fl.col-sm-12.qtyBtns a {
      border: none;
    }

    #anatomi_urun_detay_sticky_desktop_productAddToCart #cart-wrapper {
    flex-direction: row !important;
    }

    #anatomi_urun_detay_sticky_desktop_productAddToCart .qtyBtns input {
border-top: none;
border-bottom: none;
background-color: #E1E1E1
}
#anatomi_urun_detay_sticky_desktop_productAddToCart .col.p-left.col-6.FavSection.forDesktop {
display: none;
}

#anatomi_urun_detay_sticky_desktop_productAddToCart .buyBtn {
width: 100% !important;
}

.anatomi_new_variantList {
padding: 15px 50px;
color: #000;
background: transparent;
border: 1px solid #A3A3A3;
border-radius: 15px;
font-size: 15px;
box-shadow: none;
}

#anatomi_urun_detay_sticky_desktop_productPrice .productDiscount {
width: 100% !important;
height: 100% !important;
background-color: transparent !important;
color: green;
}

#anatomi_urun_detay_sticky_desktop_productPrice .productDiscount span {
font-size: 15px;
font-weight: 800;}

#anatomi_urun_detay_sticky_desktop_productPrice #price-flexer {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
gap: 10px;
}


#anatomi_urun_detay_sticky_desktop_productPrice .kffi333 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;
}

#anatomi_urun_detay_sticky_desktop_productPrice {
width: 50% !important;
}

#anatomi_urun_detay_sticky_desktop_productAttribute {
display: none;
}

.anatomi_new_variantList:focus {
box-shadow: none;
outline: none;}

.anatomi_new_variantList option {
  background-color: #f2f4f4;
  color: #333;
  padding: 10px;
}

@media (min-width: 1610px) {
.anatomi_urun_detay_sticky_desktop_content {
width: 100%;
}
}

@media (max-width: 1024px) {
#anatomi_urun_detay_sticky_desktop_productName #productName, #anatomi_urun_detay_sticky_desktop_productPrice .product-price {
  font-size: 18px !important;
  }

  .anatomi_new_variantList {
  padding: 10px 30px;
  }
}

@media (max-width: 900px) {
#anatomi_urun_detay_sticky_desktop_productAddToCart #cart-wrapper {
flex-direction: column !important;
}
}

.anatomi_urun_detay_sticky_desktop_container #fastBuyBtn {
white-space: nowrap;}

</style>
`;

  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", urun_detay_sticky_desktop_style);
};

const doksan_bir_js = () => {
  var scrollCheck = false;
  const handleAddToCard = () => {
    const productCount = document.querySelector(".inStock");
    const stickyProductCount = document.getElementById(
      "anatomi_urun_detay_sticky_desktop_productAddToCart"
    );

    window.addEventListener("scroll", () => {
      if (productCount && scrollCheck) {
        stickyProductCount.appendChild(productCount);
      }

      if (scrollCheck === false) {
        const oldProductCount = document.getElementById(
          "IS_STOCK_NOTIFICATION_SUBPRODUCT"
        );
        if (oldProductCount) {
          oldProductCount.insertAdjacentElement("afterend", productCount);
        }
      }
    });

  };

  const handleProductName = () => {
    const productName = document.getElementById("productName");
    const stickyProductName = document.getElementById(
      "anatomi_urun_detay_sticky_desktop_productName"
    );

    if (productName) {
      stickyProductName.insertAdjacentHTML(
        "beforeend",
        productName.cloneNode(true).outerHTML
      );
    }
  };

  const bize_ulasin_location = () => {
    const bize_ulasin = document.querySelector("#jvlabelWrap");

    if (bize_ulasin && scrollCheck) {
      bize_ulasin.style.bottom = "102px";
    } else if (bize_ulasin && !scrollCheck) {
      bize_ulasin.style.bottom = "0px";
    }
  };

  const handleProductPrice = () => {
    const productPrice = document.querySelector("#price-flexer");
    const stickyProductPrice = document.getElementById(
      "anatomi_urun_detay_sticky_desktop_productPrice"
    );

    if (productPrice) {
      stickyProductPrice.insertAdjacentHTML(
        "afterbegin",
        productPrice.cloneNode(true).outerHTML
      );

    }
  };

  const handleProductAttribute = () => {
    const attributeContainer = document.getElementById(
      "anatomi_urun_detay_sticky_desktop_productAttribute"
    );
    const variantList = document.querySelector(".variantList");
    const variantListElement = document.querySelectorAll(".variantList a");

    const newList = document.createElement("select");
    newList.classList.add("anatomi_new_variantList");

    const handleClickOption = () => {
      variantListElement.forEach((element) => {
        const option = document.createElement("option");
        option.textContent = element.textContent;
        newList.appendChild(option);
        option.dataset.index = Array.prototype.indexOf.call(
          variantListElement,
          element
        );
      });

      attributeContainer.appendChild(newList);

      newList.addEventListener("change", (event) => {
        const selectedOption = event.target.options[event.target.selectedIndex];
        const variantIndex = selectedOption.dataset.index;
        const variantBox = variantListElement[variantIndex];
        variantBox.click();
      });
    };

    if (variantList) {
      handleClickOption();
    }

    const handleCheckClass = () => {
      const newList = document.querySelector(".anatomi_new_variantList");
      const varianListOptions = document.querySelectorAll(
        ".variantList option"
      );

      newList.addEventListener("change", (event) => {
        const selectedOption = event.target.options[event.target.selectedIndex];
        const variantIndex = selectedOption.dataset.index;

        varianListOptions.forEach((option) => {
          option.classList.remove("selected");
        });

        varianListOptions[variantIndex].classList.add("selected");
      });
    };

    if (variantList) {
      handleCheckClass();
    }
  };

  window.addEventListener("scroll", () => {
    const urunTab = document.getElementById("urun-tab");
    const urunTabOffset = urunTab.getBoundingClientRect().top;
    const anatomi_urun_detay_sticky_desktop_container = document.querySelector(
      ".anatomi_urun_detay_sticky_desktop_container"
    );
    const jvLabelWrap = document.getElementById("jvLabelWrap");
    const fastBuyBtn = document.getElementById("fastBuyBtn");

    if (window.scrollY > urunTabOffset) {
      scrollCheck = true;
    } else {
      scrollCheck = false;
    }

    if (scrollCheck) {
      anatomi_urun_detay_sticky_desktop_container.style.display = "flex";
      jvLabelWrap.style.bottom = `${anatomi_urun_detay_sticky_desktop_container.clientHeight}`;
      jvLabelWrap.style.boxShadow = "none";
      fastBuyBtn.style.borderRadius = "6px";
    } else {
      anatomi_urun_detay_sticky_desktop_container.style.display = "none";
      jvLabelWrap.style.bottom = "0";
      jvLabelWrap.style.boxShadow = "0 12px 14px 8px rgba(0, 0, 0, .17);";
      fastBuyBtn.style.borderRadius = "0px";
    }



  });

  handleAddToCard();
  handleProductName();
  handleProductPrice();
  handleProductAttribute();

  setInterval(() => {
    bize_ulasin_location();
  }, 100);
};

const doksan_bir_init = () => {
  doksan_bir_html();
  doksan_bir_css();
  doksan_bir_js();
};

const doksan_bir_condition = () => {
  const device = window.innerWidth > 768;
  const element = !document.querySelector(
    ".anatomi_urun_detay_sticky_desktop_container"
  );
  const productDetail = document.getElementById("productDetail");

  return device && element && productDetail;
};

if (doksan_bir_condition()) {
  doksan_bir_init();
}