setTimeout(()=>{
const urun_detay_sepete_eklendi_d_html = () => {
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
          <img
            src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/eyup_sabri_check.png"
            alt="Onaylandı"
          />
          <h4>Ürün sepete eklendi</h4>
        </div>
        <div class="anatomi-sepete-eklendi-bottom-col">
          <a href="https://www.eyupsabrituncer.com/checkout">Sepete Git</a>
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

const urun_detay_sepete_eklendi_d_css = () => {
  const style = `
      <style id="anatomiSepeteEklendiCss">
        .anatomi-sepete-eklendi-pop-up-container {
         position: fixed;
        top: 10%;
        right: 0;
        left: auto;
        width: 450px;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
      }

      .anatomi-sepete-eklendi-pop-up-container.anatomi-sepete-eklendi-pop-up-active {
        transform: translateX(0);
        transition: transform 0.3s ease-in-out;
      }

      .anatomi-sepete-eklendi-pop-up-content {
           position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 40px;
    width: 95%;
    height: 100px;
    background-color: #fff;
    padding: 0px 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
    

      .anatomi-sepete-eklendi-upper-col {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
      }

      .anatomi-sepete-eklendi-upper-col img {
        width: 20px;
        height: 20px;
        margin: 0;
        padding: 0;
      }

      .anatomi-sepete-eklendi-upper-col h4 {
        font-size: 16px;
        font-weight: 500;
        color: #000;
        margin: 0;
        padding: 0;
      }

      .anatomi-sepete-eklendi-bottom-col a {
        font-size: 14px;
        font-weight: 700;
           color: #ffffff;
    background-color: #264734;
    padding: 10px 30px;
    border-radius: 8px;
        margin: 0;
        text-decoration: none;
      }

      .anatomi-sepete-eklendi-close {
        position: absolute;
        top: 20px;
        right: 15px;
        cursor: pointer;
      }

    </style>
      `;

  const container = document.querySelector("#anatomiSepeteEklendiCss");
  if (!container) {
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
  }
};

const urun_detay_sepete_eklendi_d_js = () => {
  function closePopUp() {
    const popUpContainer = document.querySelector(
      ".anatomi-sepete-eklendi-pop-up-container"
    );
    const closeButton = document.querySelector(".anatomi-sepete-eklendi-close");
    closeButton.addEventListener("click", () => {
      popUpContainer.classList.remove("anatomi-sepete-eklendi-pop-up-active");
    });
  }

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


const urun_detay_sepete_eklendi__init = () => {
  urun_detay_sepete_eklendi_d_html();
  urun_detay_sepete_eklendi_d_css();
  urun_detay_sepete_eklendi_d_js();
};


const urun_detay_sepete_eklendi_d_conditions = () => {
  const device = matchMedia("(min-width: 768px)").matches;
  const container = !document.querySelector(
    ".anatomi-sepete-eklendi-pop-up-container"
  );
  const location = document.querySelector(".ProductDetail")
  return container && location && device;
};


if (urun_detay_sepete_eklendi_d_conditions()) {
  urun_detay_sepete_eklendi_d_init();
}
},1000)