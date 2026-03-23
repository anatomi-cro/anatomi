let fetchCount = 0;
let initialized = false;

const firsat_urunleri_html = () => {
  const html = `
        <div class="anatomi-firsat-urunleri">
        <a class="anatomi_firsat_urunleri_button">
          <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/elektix_firsat_urunleri.png" alt="firsat-urunleri">
          <span class="firsat-notify">2</span>
        </a>

           <div class="anatomi-firsat-urunleri-products">
        <a class="anatomi-firsat-urunleri-product">
          <img class="anatomi-firsat-urunleri-product-image" src="" alt="" />
          <h2 class="anatomi-firsat-urunleri-product-name"></h2>
          <div class="anatomi-firsat-urunleri-product-price"></div>
        </a>
        
        <a class="anatomi-firsat-urunleri-product">
          <img class="anatomi-firsat-urunleri-product-image" src="" alt="" />
          <h2 class="anatomi-firsat-urunleri-product-name"></h2>
          <div class="anatomi-firsat-urunleri-product-price"></div>
        </a>
      </div>
      </div>
          `;

  const container = document.querySelector("#headerMain > div > div.inner > div > div.pos-r.fr.col-sm-7.col-xs-5.forMobile > div:nth-child(2)")
  const element = document.querySelector(".anatomi-firsat-urunleri");

  if (!element && container) {
    container.insertAdjacentHTML("beforebegin", html);
  }
};

const firsat_urunleri_css = () => {
  const style = `
        <style id="firsat_urunleri_anatomi">
        .anatomi_search_button_container {
        display:none;}
    
        .anatomi-firsat-urunleri {
        position: absolute;
        top: 50%;
        left: 25%;
        transform: translateY(-50%);
        }

           .firsat-notify {
position: absolute;
    top: -23%;
    right: -20%;
    background-color: #0d7ebd;
    color: white;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
      }

 .anatomi-firsat-urunleri-products {
    width: 100vw;
    height: 200px;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    background-color: #fff;
    position: absolute;
    top: 100%;
    left: 0;
    transform: translateX(-70.5%);
    display: none;
}

.anatomi-firsat-urunleri-products.anatomi-firsat-urunleri-products-active {
    display: flex;}

      .anatomi-firsat-urunleri-product {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
    padding: 10px;
      }

      .anatomi-firsat-urunleri-product-image {
      width: 60px;
      height: 60px;
      }

      .anatomi-firsat-urunleri-product-name {
      font-size: 12px;
      margin:0;
          width: 50%;}
      </style>
      `;

  const head = document.querySelector("head");
  const element = document.querySelector("#firsat_urunleri_anatomi");

  if (!element) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const firsat_urunleri_js = () => {
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
          .slice(0, 2);

        const productsContainers = document.querySelectorAll(
          ".anatomi-firsat-urunleri-product"
        );

        randomProducts.forEach((product, index) => {
          const clonedProduct = product.cloneNode(true);
          const image = clonedProduct.querySelector(".imgInner img");
          const name = clonedProduct.querySelector("span[itemprop='name']");
          const price = clonedProduct.querySelector(".productPrice");
          const href = clonedProduct.querySelector(
            ".image-wrapper.fl.detailLink"
          ).href;


          const container = productsContainers[index];
          if (container) {
            const productImage = container.querySelector(
              ".anatomi-firsat-urunleri-product-image"
            );
            const productName = container.querySelector(
              ".anatomi-firsat-urunleri-product-name"
            );
            const productPrice = container.querySelector(
              ".anatomi-firsat-urunleri-product-price"
            );

            container.href = href;

            if (image) productImage.src = image.getAttribute("data-src");
            if (name)
              productName.textContent =
                name.getAttribute("content").slice(0, 50) + "...";
            if (price) productPrice.innerHTML = price.innerHTML;
          }
        });
        fetchCount++;
      })
  };

  if (fetchCount < 1) {
    fetch_data();
  }

  const handle_open_products = () => {
    const button = document.querySelector(".anatomi_firsat_urunleri_button");
    const products = document.querySelector(
      ".anatomi-firsat-urunleri-products"
    );

    if (button && products) {
      button.addEventListener("click", () => {
        products.classList.toggle("anatomi-firsat-urunleri-products-active");
      });
    }
  };

  if (!initialized) {
    handle_open_products();
    initialized = true;
  }
};

const firsat_urunleri_init = () => {
  firsat_urunleri_html();
  firsat_urunleri_css();
  firsat_urunleri_js();
};

const firsat_urunleri_conditions = () => {
  const device = matchMedia("(max-width: 768px)").matches;
  return device;
};

if (firsat_urunleri_conditions()) {
  firsat_urunleri_init();
}
