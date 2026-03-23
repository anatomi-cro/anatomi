const cok_satanlar_html = () => {
  const html = `<div class="anatomi_cok_satanlar_products">
  <h2 class="anatomi_cok_satanlar_products_title">Çok Satanlar</h2>
  <div class="anatomi_cok_satanlar_products_content"></div>
  </div>`;
  const sepeteEkle = document.querySelector("#addCartBtn");

  sepeteEkle &&
    sepeteEkle.addEventListener("click", () => {
      setTimeout(() => {
        const container = document.querySelector(".anatomi_container");
        if (
          container &&
          !container.querySelector(".anatomi_cok_satanlar_products")
        ) {
          container.insertAdjacentHTML("beforeend", html);
        }
      }, 1000);
    });
};

const cok_satanlar_css = () => {
  const css = `  <style>
    .anatomi_cok_satanlar_products{
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      gap: 10px;
    }

    .anatomi_cok_satanlar_products_title {
    margin:0;
    padding:0;
    margin-top: 20px;
    }

    .anatomi_cok_satanlar_products_content {
          display: flex;
      width: 100%;
      height: 100%;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 10px;
      overflow-x: scroll;
      padding-bottom: 10px;
    }

    .anatomi_cok_satanlar_products .productItem  {
     width: 200px !important;
     height: 380px !important;
     flex-grow: 0;
    flex-shrink: 0;
    }
    .productDiscount {
   padding: 0px 0px 0px 0px !important; 
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center !important;
    gap: 5px !important;
    }
    .productDiscount span {
     padding-bottom: 0px !important;
    }
  </style>`;

  const head = document.querySelector("head");
  head.insertAdjacentHTML("afterbegin", css);
};

const cok_satanlar_js = () => {
  const fetch_data = () => {
    fetch("https://www.elektrix.com/cok-satanlar")
      .then((response) => response.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const products = doc.querySelectorAll(".productItem");

        const productsArray = Array.from(products);
        const randomProducts = productsArray
          .sort(() => Math.random() - 0.5)
          .slice(0, 5);

        const container = document.querySelector(
          ".anatomi_cok_satanlar_products_content"
        );

        if (container) {
          randomProducts.forEach((product) => {
            const clonedProduct = product.cloneNode(true);
            container.appendChild(clonedProduct);
            setTimeout(() => {
              const img = clonedProduct.querySelector(".imgInner img");
              const data_src = img.getAttribute("data-src");
              img.setAttribute("src", data_src);

              const proRowAct = clonedProduct.querySelector(".productDetails");
              const addToCart =
                clonedProduct.querySelector(".listProductAdd a");

              if (proRowAct && addToCart) {
                addToCart.innerHTML = "Sepete Ekle";
                proRowAct.insertAdjacentElement("afterend", addToCart);
              }
            }, 100);
          });
        }
      })
       setTimeout(() => {
          document.querySelectorAll(".anatomi_cok_satanlar_products .listProductName").forEach(el => {
            const text = el.textContent.trim();
            if (text.length > 50) {
              el.textContent = text.slice(0, 50) + "...";
            }
          });
        }, 500);
  };

  const sepeteEkle = document.querySelector("#addCartBtn");
  sepeteEkle &&
    sepeteEkle.addEventListener("click", () => {
      setTimeout(() => {
        fetch_data();
      }, 1000);
    });



};

const cok_satanlar_init = () => {
  cok_satanlar_html();
  cok_satanlar_css();
  cok_satanlar_js();
};

const cok_satanlar_conditions = () => {
  const device = matchMedia("(max-width: 768px)").matches;
  const element = document.querySelector("#product-detail")
  return device && element;
};

if (cok_satanlar_conditions()) {
  cok_satanlar_init();
}
