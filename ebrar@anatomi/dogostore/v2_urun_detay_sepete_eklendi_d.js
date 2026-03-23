const urun_detay_sepete_eklendi_html = () => {
  const html = `
      <div class="anatomi-sepete-eklendi-pop-up-container">
      <div class="anatomi-sepete-eklendi-pop-up-content">
        <div class="anatomi-sepete-eklendi-close">
          <img
            src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/dogo-store-close.png"
            alt="kapat"
          />
        </div>
        <!-- Yeni ürün bilgi bloğu -->
        <div class="anatomi-sepete-eklendi-urun">
          <img class="urun-resim" src="" alt="Ürün" />
          <div class="urun-bilgi">
          <div class="anatomi-sepete-eklendi-upper-col">
          <img
            src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/dogo-store-check-icon.png"
            alt="Onaylandı"
          />
          <h4>Ürün Sepetinize Eklendi</h4>
        </div>
            <p class="urun-isim"></p>
            <p class="urun-fiyat"></p>
          </div>
        </div>

        <div class="anatomi-sepete-eklendi-bottom-col">
          <a class="anatomi-sepete-eklendi-button-primary" href="https://www.dogostore.com/sepet">Sepete Git</a>
          <a class="anatomi-sepete-eklendi-button">Alışverişe Devam Et</a>
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
     body > div.pWrapper{
        display: none !important;
      }
        .anatomi-sepete-eklendi-pop-up-container {
        position: fixed;
        top: 0%;
        left: 0;
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
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
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 700px;
        height: 170px;
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        z-index: 9999;
      }
       .anatomi-sepete-eklendi-upper-col img  {
         height: 15px;
       }
         .anatomi-sepete-eklendi-close img {
           height: 10px;
         }

      .anatomi-sepete-eklendi-urun {
            display: flex;
    align-items: center;
    gap: 25px;
      }
    .urun-bilgi {
          display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    }
    .urun-bilgi p {
      padding: 0px;
    }
    .anatomi-sepete-eklendi-upper-col {
         display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    }

    .upper-col-right {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap:10px;
      width: fit-content;
    }

    .upper-col-notification {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    }

      .upper-col-notification img {
        width: 20px;
        height: 20px;
        margin: 0;
        padding: 0;
      }

      .upper-col-left img {
        width: 150px;
        height: 150px;
        margin: 0;
        padding: 0;
        object-fit: contain;
      }

      .anatomi-sepete-eklendi-upper-col h4 {
        font-size: 12px;
    font-weight: 500;
    color: #128F3E;
    margin: 0;
    padding: 0;
      }

      .anatomi-sepete-eklendi-bottom-col {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        align-self: center;
      }

      .urun-resim {
        width: 80px;
      }
      .urun-fiyat {
        font-weight: bold;
        font-size: 18px;
      }
      .anatomi-sepete-eklendi-bottom-col a {
      text-align: center;
      white-space: nowrap;
      }

      .anatomi-sepete-eklendi-close {
        position: absolute;
        top: 10px;
        right: 15px;
        cursor: pointer;
      }

         .anatomi-sepete-eklendi-button-primary {
      background-color: #128F3E;
      color: #fff;
      height: 40px;
      font-size: 14px;
      text-decoration: none;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      padding: 0 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
    }

    .anatomi-sepete-eklendi-button {
          background-color: #F2F2F2;
      color: #000;
      height: 40px;
      font-size: 14px;
      text-decoration: none;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      padding: 0 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
    }

      @media only screen and (max-width: 768px) {
        .anatomi-sepete-eklendi-pop-up-container {
          position: fixed;
          top: 50%;
          right: 50%;
          left: auto;
          width: 45%;
          height: fit-content;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
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
        flex-direction: column;
        justify-content: flex-start;
        align-items: center !important;
        height: fit-content;
        gap: 15px;
        width: 100%;
        background-color: #fff;
        padding: 20px;
        border-radius: 0px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        z-index: 9999;
      }

        .anatomi-sepete-eklendi-bottom-col {
          flex-direction: row-reverse;
        }
        .anatomi-sepete-eklendi-button {
          padding: 0px 30px;
        }
      .anatomi-sepete-eklendi-pop-up-container.anatomi-sepete-eklendi-pop-up-active {
        display: flex;
      }

      }
    </style>
    `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};

const urun_detay_sepete_eklendi_js = () => {
  function closePopUp() {
    const popUpContainer = document.querySelector(
      ".anatomi-sepete-eklendi-pop-up-container"
    );
    const closeButton = document.querySelector(".anatomi-sepete-eklendi-close");
    closeButton.addEventListener("click", () => {
      popUpContainer.classList.remove("anatomi-sepete-eklendi-pop-up-active");
    });

    const alisveriseDevamEtBtn = document.querySelector(
      ".anatomi-sepete-eklendi-button"
    );
    alisveriseDevamEtBtn.addEventListener("click", () => {
      closeButton.click();
    });
  }

  function openPopUp() {
    const popUpContainer = document.querySelector(
      ".anatomi-sepete-eklendi-pop-up-container"
    );
    const addToCartButton = document.querySelector("#addCartBtn");

    addToCartButton.addEventListener("click", () => {
      const sepetElement = document.querySelector("#cart-soft-count > span");
      if (!sepetElement) return;
      const productCount = parseInt(
        document.querySelector(".cart-soft-count").textContent.trim()
      );
      let timeoutId;

      const interval = setInterval(() => {
        const newProductCount = parseInt(
          document.querySelector(".cart-soft-count").textContent.trim()
        );
        if (newProductCount > productCount) {

          const urunResim = document.querySelector(".urun-resim")
          const urunIsim = document.querySelector(".urun-isim")
          const urunFiyat = document.querySelector(".urun-fiyat")

          urunResim.src = document
            .querySelector("#zoomImage0")
            ?.getAttribute("src") || "";
          urunIsim.textContent =
            document.querySelector("#productName")?.textContent.trim() ||
            "Ürün adı";
          urunFiyat.textContent =
            document.querySelector("#price-content")?.textContent.trim() ||
            "0 TL";

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

const urun_detay_sepete_eklendi_condition = () => {
    const element = document.querySelector(".page-product");
  const device = window.innerWidth > 768;
    return device && element;
};

if (urun_detay_sepete_eklendi_condition()) {
  urun_detay_sepete_eklendi_init();
}
