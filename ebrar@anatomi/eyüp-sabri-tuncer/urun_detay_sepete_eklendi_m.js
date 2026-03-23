setTimeout(() => {
  const urun_detay_sepete_eklendi_html = () => {
  const html = `
    <div class="anatomi-sepete-eklendi-pop-up-container">
      <div class="anatomi-sepete-eklendi-pop-up-content">
        <div class="anatomi-sepete-eklendi-close">
          <img
            src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/eyup_sabri_close.png"
            alt="kapat"
          />
        </div>
        <div class="anatomi-sepete-eklendi-upper-col">
          <div class="upper-col-notification">
              <img
                src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/eyup_sabri_check.png"
                alt="Onaylandı"
              />
              <h4>Ürün sepetinize eklendi</h4>
            </div>
          <div class="upper-col-right">
              <div class="upper-col-left">
            <img
              src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/eyup_sabri_check.png"
              alt=""
            />
          </div>
            <div class="upper-col-productName">
              <h4>Ürün Adı</h4>
            </div>
          </div>
        </div>
        <div class="anatomi-sepete-eklendi-bottom-col">
          <a
            class="anatomi-sepete-eklendi-button"
            href="https://www.eyupsabrituncer.com/checkout"
            >Hemen Satın Al</a
          >
          <a
            class="anatomi-sepete-eklendi-button-primary"
            href="https://www.eyupsabrituncer.com/UyeGiris"
            >Giriş Yap</a
          >
        </div>
      </div>
    </div>`;

  const element = document.querySelector(
    ".anatomi-sepete-eklendi-pop-up-container"
  );
  if (!element) {
    const container = document.querySelector("body");
    container.insertAdjacentHTML("beforeend", html);
  }
};

const urun_detay_sepete_eklendi_css = () => {
  const style = `
      <style id="anatomiSepeteEklendiCss">
        .anatomi-sepete-eklendi-pop-up-container {
        position: fixed;
        top: 0%;
        left: 0;
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        z-index: 99999999;
        transition: transform 0.3s ease-in-out;
        display: none;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
      }

      .anatomi-sepete-eklendi-pop-up-container.anatomi-sepete-eklendi-pop-up-active {
        display: flex;
      }

      .anatomi-sepete-eklendi-pop-up-content {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 15px;
        width: 100%;
        max-height: 1000px;
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        z-index: 9999;
      }

    
    .anatomi-sepete-eklendi-upper-col {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      gap: 30px;
    }

    .upper-col-right {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap:10px;
      width: fit-content;
    }

    .upper-col-notification {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    }

    .upper-col-notification h4 {
      font-size: 16px;
      font-weight: 700 !important;
      color: #2E4635 !important;
      margin: 0;
      padding: 0;
      text-transform: capitalize;
    }

      .upper-col-notification img {
        width: 20px;
        height: 20px;
        margin: 0;
        padding: 0;
      }

      .upper-col-left img {
        width: 100px;
        height: 100px;
        margin: 0;
        padding: 0;
        object-fit: contain;
      }

      .anatomi-sepete-eklendi-upper-col h4 {
        font-size: 16px;
        font-weight: 500;
        color: #000;
        margin: 0;
        padding: 0;
      }

      .anatomi-sepete-eklendi-bottom-col {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 10px;
        align-self: center;
        width: 100%;
      }

      .anatomi-sepete-eklendi-bottom-col a {
      text-align: center;
      white-space: nowrap;
      }

      .anatomi-sepete-eklendi-close {
        position: absolute;
        top: 20px;
        right: 15px;
        cursor: pointer;
      }

         .anatomi-sepete-eklendi-button-primary {
      background-color: #F2F2F2;
      color: #000;
      height: 45px;
      font-size: 14px;
      font-weight: 700;
      text-decoration: none;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      padding: 0 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .anatomi-sepete-eklendi-button {
          background-color: #2e4635;
      color: #fff;
      height: 45px;
      font-size: 14px;
      font-weight: 700;
      text-decoration: none;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      padding: 0 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

            @media screen and (min-width: 768px) {
        .anatomi-sepete-eklendi-pop-up-container {
          position: fixed;
          top: 50%;
          right: 50%;
          left: auto;
          width: 45%;
          height: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          transform: translate(50%, -50%);
          transition: transform 0.3s ease-in-out;
          display: none;
          background-color: rgba(0, 0, 0, 0.5);
          width: 100%;
          height: 100%;
        }

              .anatomi-sepete-eklendi-pop-up-content {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 15px;
        width: 40%;
        max-height: 1000px;
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        z-index: 9999;
      }

        
      .anatomi-sepete-eklendi-pop-up-container.anatomi-sepete-eklendi-pop-up-active {
        display: flex;
      }

      }
    </style>
      `;

  const container = document.querySelector("#anatomiSepeteEklendiCss");
  if (!container) {
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
  }
};

const urun_detay_sepete_eklendi_js = () => {
  function closeCart() {
    const cart = document.getElementById("globalLiteCart");
    let count = 0;

    setInterval(() => {
      if (count === 0 && cart) {
        cart.remove();
        count++;
      }
    }, 10);
    const maxWait = 5000;
    const start = Date.now();
    const intervalId = setInterval(() => {
      const cart = document.getElementById("globalLiteCart");
      const body = document.querySelector("#bodyGlobal");
      if (cart) {
        if (body && body.classList.contains("modalOpen")) {
          body.classList.remove("modalOpen");
          body.style.overflow = "auto";
        }
        cart.remove();
        clearInterval(intervalId);
        return;
      }
      if (Date.now() - start > maxWait) {
        clearInterval(intervalId);
      }
    }, 10);
  }

  function getProductData() {
    const button = document.querySelector(".btnAddBasketOnDetail");
    if (!button) return;
    const container = document.querySelector(".ProductDetailMain");

    if (!container) return;
    const productImage = container?.querySelector(".lightItem img")?.src;
    const productName = container?.querySelector(".ProductName")?.textContent;

    const productData = {
      image: productImage,
      name: productName,
    };

    const productNameElement = document.querySelector(
      ".upper-col-productName h4"
    );

    if (!productNameElement) return;

    productNameElement.textContent = productData.name;

    const productImageElement = document.querySelector(".upper-col-left img");

    if (!productImageElement) return;

    productImageElement.src = productData.image;
  }
  function closePopUp() {
    const popUpContainer = document.querySelector(
      ".anatomi-sepete-eklendi-pop-up-container"
    );
    const closeButton = document.querySelector(".anatomi-sepete-eklendi-close");
    closeButton.addEventListener("click", () => {
      popUpContainer.classList.remove("anatomi-sepete-eklendi-pop-up-active");
    });
  }

  function closePopUp2() {
    const popUpContent = document.querySelector(
      ".anatomi-sepete-eklendi-pop-up-content"
    );
    const popUpContainer = document.querySelector(
      ".anatomi-sepete-eklendi-pop-up-container"
    );
    document.addEventListener("click", (event) => {
      if (!popUpContent.contains(event.target)) {
        popUpContainer.classList.remove("anatomi-sepete-eklendi-pop-up-active");
      }
    });
  }

  closePopUp2();

  function openPopUp() {
    const popUpContainer = document.querySelector(
      ".anatomi-sepete-eklendi-pop-up-container"
    );
    const addToCartButton = document.querySelector(
      "#divSatinAl > div > div.basketBtn > input"
    );

    addToCartButton.addEventListener("click", () => {
      const sepetElement = document.querySelector(".sepetUrunSayisi");
      if (!sepetElement) return;
      const productCount = parseInt(
        document.querySelector(".sepetUrunSayisi").textContent.trim()
      );
      let timeoutId;

      closeCart();

      const interval = setInterval(() => {
        const newProductCount = parseInt(
          document.querySelector(".sepetUrunSayisi").textContent.trim()
        );
        if (newProductCount > productCount) {
          if (
            popUpContainer.classList.contains(
              "anatomi-sepete-eklendi-pop-up-active"
            )
          ) {
            popUpContainer.classList.remove(
              "anatomi-sepete-eklendi-pop-up-active"
            );
            clearTimeout(timeoutId);
          }

          setTimeout(() => {
            popUpContainer.classList.add(
              "anatomi-sepete-eklendi-pop-up-active"
            );
            getProductData();
            timeoutId = setTimeout(() => {
              popUpContainer.classList.remove(
                "anatomi-sepete-eklendi-pop-up-active"
              );
            }, 5000);
          }, 100);

          clearInterval(interval);
        }
      }, 100);
    });
  }

  closePopUp();
  openPopUp();
};

const urun_detay_sepete_eklendi_init = () => {
  urun_detay_sepete_eklendi_html();
  urun_detay_sepete_eklendi_css();
  urun_detay_sepete_eklendi_js();
};

const urun_detay_sepete_eklendi_conditions = () => {
  const device = matchMedia("(max-width: 768px)").matches;
  const container = !document.querySelector(
    ".anatomi-sepete-eklendi-pop-up-container"
  );
  const location = document.querySelector(".ProductDetail");
  return container && location && device;
};

if (urun_detay_sepete_eklendi_conditions()) {
  urun_detay_sepete_eklendi_init();
}

},1000)