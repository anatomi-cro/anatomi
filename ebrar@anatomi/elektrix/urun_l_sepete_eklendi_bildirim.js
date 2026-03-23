const urunList_sepeteEklendi_pop_html = () => {
  const html = `
    <div class="anatomi-sepeteEklendi-container">
      <div class="anatomi-sepeteEklendi-content">
        <div
          class="anatomi-sepeteEklendi-close"
          onclick="closeSepeteEklendi(this)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.94993 19.2344C15.0778 19.2344 19.2346 15.0777 19.2346 9.94981C19.2346 4.8219 15.0778 0.665161 9.94993 0.665161C4.82202 0.665161 0.665283 4.8219 0.665283 9.94981C0.665283 15.0777 4.82202 19.2344 9.94993 19.2344Z"
              stroke="#979797"
              stroke-width="1.33034"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12.5761 7.32364L7.32373 12.576M7.32373 7.32364L12.5761 12.576"
              stroke="#979797"
              stroke-width="1.33034"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <div class="product-contents">
          <div class="sepeteEklendi-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M9.5 0C4.26149 0 0 4.26149 0 9.5C0 14.7385 4.26149 19 9.5 19C14.7385 19 19 14.7385 19 9.5C19 4.26149 14.7385 0 9.5 0Z"
                fill="#5C9C54"
              ></path>
              <path
                d="M14.315 7.48679L9.16909 12.6325C9.01471 12.7869 8.81206 12.8646 8.60941 12.8646C8.40675 12.8646 8.2041 12.7869 8.04972 12.6325L5.47685 10.0597C5.16722 9.75017 5.16722 9.24977 5.47685 8.94028C5.78634 8.63065 6.28659 8.63065 6.59622 8.94028L8.60941 10.9535L13.1956 6.36742C13.5051 6.05779 14.0053 6.05779 14.315 6.36742C14.6245 6.6769 14.6245 7.17715 14.315 7.48679Z"
                fill="#FAFAFA"
              ></path>
            </svg>
            <h2>Ürün Sepetinize Eklendi</h2>
          </div>

          <div class="anatomi-product-list">
          </div>
        </div>

        <div class="button-group">
          <button
            class="continue-shopping-button"
            onclick="closeSepeteEklendi(this)"
          >
            Alışverişe Devam Et
          </button>
          <button class="go-to-cart-button" onclick="sepeteGit(this)">
            Sepete Git
          </button>
        </div>
      </div>
    </div>
        `;

  const container = document.querySelector("body");
  const element = document.querySelector(".anatomi-sepeteEklendi-container");
  if (!element && container) {
    container.insertAdjacentHTML("beforeend", html);
  }
};

const urunList_sepeteEklendi_pop_css = () => {
  const style = `
        <style id="anatomi-sepeteEklendiUrunList-css">
        .anatomi-sepeteEklendi-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: none;
          justify-content: center;
          align-items: center;
          z-index: 9999999999999;
        }

        .anatomi-sepeteEklendi-container.anatomi-active {
          display: flex;
        }

        .anatomi-sepeteEklendi-content {
          position: relative;
          background-color: #ffffff;
          padding: 20px 30px;
          border-radius: 8px;
          width: 600px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .product-contents {
          display: flex;
          flex-direction: column;
        }

        .anatomi-product-image {
          width: 25%;
          height: 100px;
          overflow: hidden;
          border-radius: 8px;
        }

        .anatomi-product-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 8px;
        }

        .anatomi-product-list {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 10px;
          overflow-y: scroll;
          max-height: 400px;
          padding: 20px;
        }

        .anatomi-product-item {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .anatomi-product-item:not(:first-child) {
         border-top: 1px solid #d9d9d9;
         padding-top: 15px;
        }

        .anatomi-product-info {
          width: 85%;
          margin-left: 20px;
          flex-grow: 1;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sepeteEklendi-info {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }

        .sepeteEklendi-info svg {
          margin-right: 10px;
        }

        .sepeteEklendi-info h2 {
          margin: 0;
          font-size: 14px;
          color: #5c9c54;
        }

        .anatomi-product-title h2 {
          margin: 0;
          font-size: 16px;
        }

        .button-group {
          display: flex;
          justify-content: space-between;
          padding-top: 20px;
        }

        .continue-shopping-button,
        .go-to-cart-button {
          width: 48%;
          height: 45px;
          font-weight: 600;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }

        .continue-shopping-button {
          background-color: #f0f0f0;
          color: #333333;
        }

        .go-to-cart-button {
          background-color: #0581bf;
          color: #ffffff;
        }

        .anatomi-sepeteEklendi-close {
          position: absolute;
          top: 15px;
          right: 15px;
          cursor: pointer;
        }

        .anatomi-product-price-group {
          display: flex;
          gap: 20px;
          align-items: center;
          width: 100%;
          height: fit-content;
          margin-top: 13px;
        }

        .qtyBtns a {
        width: 30px !important;
        height: 30px !important;
        }

        .qtyBtns input {
        width: 30px !important;
        height: 30px !important;
        }

        .anatomi-product-quantity {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .anatomi-product-quantity .box.col-md-12.forDesktop {
          display: none !important;
        }

        .anatomi-product-price {
        font-weight: 600;
        font-size: 16px;
        width: 30%;
        }

        .qtyBtns {
          height: 30px !important;
        }
      </style>
        `;

  const head = document.querySelector("head");
  const styleSheet = document.querySelector(
    "#anatomi-sepeteEklendiUrunList-css"
  );
  if (!styleSheet) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const urunList_sepeteEklendi_pop_js = () => {
  window.anatomiSepeteEklendiManuallyClosed = false;

  function closeSepeteEklendi(element) {
    const container = element.closest(".anatomi-sepeteEklendi-container");
    if (container) {
      container.classList.remove("anatomi-active");
    }
    window.anatomiSepeteEklendiManuallyClosed = true;

    const cartPopup = document.querySelector("#cartPopup");
    if (cartPopup) {
      const closeButton = cartPopup.querySelector(".close");
      if (closeButton) {
        closeButton.click();
      }
    }
  }

  function takeProduct() {
    let runTime = 0;
    if (runTime > 0) return;
    const container = document.querySelector("#cartPopup");
    if (!container) return;

    const products = container.querySelectorAll("tr.line-bottom");
    if (!products || products.length === 0) return;

    const array = Array.from(products);

    runTime++;

    return array;
  }

  function insertProductsToPopup(product) {
    const popup = document.querySelector(".anatomi-sepeteEklendi-container");
    if (!popup) return;

    const productList = popup.querySelector(".anatomi-product-list");
    if (!productList) return;

    productList.innerHTML = "";

    for (let i = 0; i < product.length; i++) {
      const imgElement = product[i].querySelector("td:first-child img");
      const titleElement = product[i].querySelector("td:nth-child(2) span");
      const priceElement = product[i].querySelector(".priceBasketProduct");
      const quantityElement = product[i].querySelector(".proQty");

      if (!imgElement || !titleElement || !priceElement || !quantityElement) {
        continue;
      }

      const createNewItem = document.createElement("div");
      createNewItem.classList.add("anatomi-product-item");

      const newImageContainer = document.createElement("div");
      newImageContainer.classList.add("anatomi-product-image");
      const newImage = document.createElement("img");
      newImage.src = imgElement.src;
      newImage.alt = titleElement.textContent.trim();
      newImageContainer.appendChild(newImage);

      const newInfoContainer = document.createElement("div");
      newInfoContainer.classList.add("anatomi-product-info");

      const newTitleContainer = document.createElement("div");
      newTitleContainer.classList.add("anatomi-product-title");
      const newTitle = document.createElement("h2");
      newTitle.textContent = titleElement.textContent.trim();
      newTitleContainer.appendChild(newTitle);

      const newPriceGroup = document.createElement("div");
      newPriceGroup.classList.add("anatomi-product-price-group");
      const newPrice = document.createElement("span");
      newPrice.classList.add("anatomi-product-price");
      newPrice.textContent = priceElement.textContent.trim();
      const newQuantity = document.createElement("div");
      newQuantity.classList.add("anatomi-product-quantity");
      newQuantity.innerHTML = quantityElement.innerHTML;
      newPriceGroup.appendChild(newPrice);
      newPriceGroup.appendChild(newQuantity);

      newInfoContainer.appendChild(newTitleContainer);
      newInfoContainer.appendChild(newPriceGroup);

      createNewItem.appendChild(newImageContainer);
      createNewItem.appendChild(newInfoContainer);

      productList.appendChild(createNewItem);
    }
  }

  function sepeteGit(e) {
    window.location.href = "https://www.elektrix.com/sepet";
  }

  function openSepeteEklendi() {
    const anatomiCartPopup = document.querySelector(
      ".anatomi-sepeteEklendi-container"
    );
    const cartPopup = document.querySelector("#cartPopup");
    if (!cartPopup || !anatomiCartPopup) return;

    const style = getComputedStyle(cartPopup);
    const cartVisible =
      style.display !== "none" &&
      style.visibility !== "hidden" &&
      cartPopup.offsetParent !== null;

    if (cartVisible && !window.anatomiSepeteEklendiManuallyClosed) {
      cartPopup.style.display = "none";
      anatomiCartPopup.classList.add("anatomi-active");
    }
  }
  window.closeSepeteEklendi = closeSepeteEklendi;
  window.sepeteGit = sepeteGit;

  let isPopupProcessing = false;

  setInterval(() => {
    const cartPopup = document.querySelector("#cartPopup");
    if (!cartPopup) return;

    const style = getComputedStyle(cartPopup);
    const cartVisible =
      style.display !== "none" && style.visibility !== "hidden";

    if (
      cartVisible &&
      !window.anatomiSepeteEklendiManuallyClosed &&
      !isPopupProcessing
    ) {
      isPopupProcessing = true;

      const product = takeProduct();
      if (product && product.length > 0) {
        insertProductsToPopup(product);
        openSepeteEklendi();
      }

      setTimeout(() => {
        isPopupProcessing = false;
      }, 500);
    } else if (!cartVisible) {
      window.anatomiSepeteEklendiManuallyClosed = false;
    }
  }, 100);
};

const urunList_sepeteEklendi_pop_init = () => {
  urunList_sepeteEklendi_pop_html();
  urunList_sepeteEklendi_pop_js();
  urunList_sepeteEklendi_pop_css();
};

const urunList_sepeteEklendi_pop_conditions = () => {
  const urunList_sepeteEklendi_pop = !document.querySelector(
    ".anatomi-sepeteEklendi-container"
  );
  const phone = matchMedia("(max-width: 768px)").matches;
  const desktop = matchMedia("(min-width: 768px)").matches;
  const element = document.querySelector("#catImg");
  return urunList_sepeteEklendi_pop && desktop && element;
};

if (urunList_sepeteEklendi_pop_conditions()) {
  urunList_sepeteEklendi_pop_init();
}
