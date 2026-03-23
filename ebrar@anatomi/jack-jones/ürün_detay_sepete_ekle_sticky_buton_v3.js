let lastUrl = location.href;
const ürün_detay_sepete_ekle_sticky_btn_html = () => {
    const html = `
    <div class="anatomi_stickyBasketContainer"></div>
    `;
   document.body.insertAdjacentHTML("beforeend", html);
};

const ürün_detay_sepete_ekle_sticky_btn_css = () => {
    const style = `
      <style>   
      .anatomi_stickyBasketContainer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
        box-shadow: 0 -2px 6px rgba(0,0,0,0.2);
        z-index: 9999;
        padding: 0px 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      } 
         .anatomi_stickyBasketContainer .anatomi_product_title {
        font-size: 14px;
      }
      .anatomi_stickyBasketContainer .anatomi_product_price {
        font-size: 14px;
        font-weight: bold;
      }
    .anatomi_product_info {
            display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 15px 10px;
    gap: 5px;
    }
    .anatomi_stickyBasketContainer button {
        background-color: #000000 !important;
        margin-top: 0px !important;
    }
    .anatomi_stickyBasketContainer button:hover {
        color: #ffffff !important;
    }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const ürün_detay_sepete_ekle_sticky_btn_js = () => {
     const stickyContainer = document.querySelector(".anatomi_stickyBasketContainer");

    const priceElement = document.querySelector("#__layout > div > main > div > div > article.pdp-shopping-mode__detail.pdp-shopping-mode__detail > div.product-detail__price-section > div > div > span");
  const titleElement = document.querySelector("#__layout > div > main > div > div > article.pdp-shopping-mode__detail.pdp-shopping-mode__detail > h1");

  if (stickyContainer) {

  if (!stickyContainer.querySelector(".anatomi_product_info")) {
    const infoDiv = document.createElement("div");
    infoDiv.className = "anatomi_product_info"; 

    if (titleElement) {
      const titleDiv = document.createElement("div");
      titleDiv.className = "anatomi_product_title";
      titleDiv.textContent = titleElement.textContent.trim();
      infoDiv.appendChild(titleDiv);
    }
     if (priceElement) {
      const priceDiv = document.createElement("div");
      priceDiv.className = "anatomi_product_price";
      priceDiv.textContent = priceElement.textContent.trim();
      infoDiv.appendChild(priceDiv);
    }


    stickyContainer.appendChild(infoDiv);
  }
}



  const targetElement = document.querySelector("#__layout > div > main > div > div > article.pdp-shopping-mode__detail.pdp-shopping-mode__detail > div.variant-selector-bing > div > div.variant-selector-bing__basket.col--12 > div");

  if (stickyContainer && targetElement) {
    if (!stickyContainer.contains(targetElement)) {
      stickyContainer.appendChild(targetElement);
    }
  }
  const sepeteEkleBtn = document.querySelector("body > div.anatomi_stickyBasketContainer > div > button")
  if(sepeteEkleBtn){
    sepeteEkleBtn.classList.add("anatomi_sepete_ekle_btn");
    
  }
};

const ürün_detay_sepete_ekle_sticky_btn_init = () => {
    ürün_detay_sepete_ekle_sticky_btn_html();
    ürün_detay_sepete_ekle_sticky_btn_css();
    ürün_detay_sepete_ekle_sticky_btn_js();
};

const ürün_detay_sepete_ekle_sticky_btn_condition = () => {
    const element = document.querySelector(".pdp-shopping-mode");
    const device = window.innerWidth <= 768;
    return device && element;
};


setInterval(() => {
  const currentUrl = location.href;

  if (lastUrl !== currentUrl) {
    lastUrl = currentUrl;
    const stickyContainer = document.querySelector(".anatomi_stickyBasketContainer");
    if (stickyContainer) stickyContainer.remove();
  }

  if (currentUrl.includes("/product/") && window.innerWidth <= 768) {
    ürün_detay_sepete_ekle_sticky_btn_init();
  }
}, 100);

