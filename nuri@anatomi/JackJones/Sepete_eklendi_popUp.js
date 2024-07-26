const anatomi_popUp_html = () => {
  var cartAmount = document.querySelector(".uk-badge.uk-position-top-right.uk-position-z-index.cart-total");
  var cartAmount_text = +cartAmount.textContent + 1;

  const anatomi_popUp_html = `
    <div class="anatomi_sepet_popUp_container">
      <div class="anatomi_sepet_popUp_content">
        <div class="anatomi_sepet_popUp_header">
          <div class="anatomi_sepet_popUp_header_left">
            <img
              src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+2.png"
              alt=""
            />
            <span>Ürün Sepetinize Eklendi</span>
          </div>
          <div class="anatomi_sepet_popUp_header_right">
            <a href="https://jackjones.com.tr/sepetim">Sepeti görüntüle (${cartAmount_text})</a>
          </div>
        </div>
        <div class="anatomi_sepet_popUp_body">
          <h1 class="anatomi_sepet_popUp_body_title">Bunları Beğenebilirsin</h1>

          <div class="anatomi_sepet_popUp_body_product_list">
            <ul id="product-list">
            </ul>
          </div>
        </div>
      </div>
    </div>
    `;

  const sectionProduct = document.querySelector(".section-product");
  sectionProduct.insertAdjacentHTML("beforeend", anatomi_popUp_html);


  const productList = document.getElementById('product-list');
  products.forEach(product => {
    productList.appendChild(product);
  });
};

const anatomi_popUp_style = () => {
  const anatomi_popUp_style = `
        <style>
      .anatomi_sepet_popUp_container {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 100%;
        height: fit-content;
        background-color: white;
      }

      .anatomi_sepet_popUp_content {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .anatomi_sepet_popUp_header {
        position: absolute;
        top: 0%;
        left: 50%;
        right: 50%;
        transform: translate(-50%, -20%);
        height: 100%;
        z-index: -1;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        padding: 15px 10px 0px 10px;
        background-color: #5c9c54;
      }

      .anatomi_sepet_popUp_header img {
        margin: 0 0 0 5px;
        width: 20px;
        height: 20px;
        object-fit: contain;
      }

      .anatomi_sepet_popUp_header span {
        color: #fff;
        font-weight: 500;
        margin: 0 5px 0 0;
      }

      .anatomi_sepet_popUp_header_left {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
      }

      .anatomi_sepet_popUp_body {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background-color: #fff;
        width: 100%;
        padding-top: 20px;
        gap: 10px;
      }

      .anatomi_sepet_popUp_body_title {
        color: #000;
        font-size: 20px;
        font-weight: 800;
        margin: 0px 15px;
      }

      .anatomi_sepet_popUp_body_product_list {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        padding: 10px 15px;
        overflow: auto;
      }

      .anatomi_sepet_popUp_body_product_list::-webkit-scrollbar {
        display: none;
      }

      .anatomi_sepet_popUp_body_product_list ul {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;
        list-style: none;
      }

      .anatomi_sepet_popUp_body_product_item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        padding: 10px;
        border: 1px solid #D0D0D0;
        border-radius: 10px;
        width: 150px;
        height: 220px;
      }

      .anatomi_sepet_popUp_body_product_item img {
        width: 50px;
        height: 60px;
        object-fit: contain;
      }

      .anatomi_sepet_popUp_body_product_item_info {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;
      }

      .anatomi_sepet_popUp_body_product_item_name {
        color: #000;
        font-size: 16px;
      }

      .anatomi_sepet_popUp_body_product_item_price {
        color: #000;
        font-size: 16px;
        font-weight: 800;
      }

      .anatomi_sepet_popUp_body_product_item .mobile-card-image {
      display: flex !important;
      justify-content: center;
      }

       .anatomi_sepet_popUp_body_product_item .mobile-card-image div:first-child {
      display: none !important;
      }

      .anatomi_sepet_popUp_body_product_item .price-add-mobile div:nth-child(2) {
        display: none;
      }

      .anatomi_sepet_popUp_header_right a {
        color: #fff;
        font-weight: 500;
        text-decoration: none;
                margin: 0 5px 0 0;
      }
    </style>
    `;

  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", anatomi_popUp_style);
};

var products = [];
const anatomi_popUp_fetch = () => {
  fetch("https://jackjones.com.tr/indirimli-urunler")
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const items = doc.querySelectorAll('.scroll-product-item.item');
      var condition = 0;

      items.forEach((item) => {
        if (condition < 7) {
          item.classList.add("anatomi_sepet_popUp_body_product_item");
          products.push(item);
        }
        condition++;
      })

      console.log(products);
    })
}

const anatomi_popUp_script = () => {
  const button = document.querySelector(
    ".product-detail.product-detail-wrapper .uk-button.uk-button-primary"
  );

  const popup = document.getElementById("offcanvas-basket");

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.attributeName === "class" &&
        popup.classList.contains("uk-open")
      ) {
        popup.classList.remove("uk-open");
      }

      observer.disconnect();
    });
  });

  button.addEventListener("click", () => {
    if (popup.classList.contains("uk-open")) {
      popup.classList.remove("uk-open");
    }
    observer.observe(popup, {
      attributes: true,
      attributeFilter: ["class"],
      childList: false,
      subtree: false,
    });
  });

  const sizeSelect = document.querySelectorAll(
    ".count-container .size-button-group .uk-select.uk-link-reset.uk-text-truncate"
  );

  const observer2 = new MutationObserver((mutation) => {
    if (sizeSelect[1].textContent === "Beden Seçiniz") {
      return;
    } else {
      button.addEventListener("click", () => {
        anatomi_popUp_style();
        anatomi_popUp_html();
      })
    }
  });

  sizeSelect.forEach((select) => {
    observer2.observe(select, {
      childList: true,
      subtree: true,
    });
  });
};

const anatomi_popUp_init = () => {
  anatomi_popUp_script();
};

anatomi_popUp_fetch();
anatomi_popUp_init();
