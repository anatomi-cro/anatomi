const kargo_ucretsiz_html = () => {};

const kargo_ucretsiz_css = () => {
    const style = `
      <style class ="anatomi_kargo_ucretsiz_css">   
      .anatomi_kargo_ucretsiz {
         position: fixed;
        left: 0;
        bottom: 0;
        text-align: center;
        right: 0;
        margin-bottom: 118px;
        z-index: 80;
        padding: 8px;
        width: 100%;
        background: #43B54C;
        font-size: 14px;
        color: white;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        justify-content: center;
        align-items: center;
           padding: 10px 0px;
} 
         .anatomi_kargo_ucretsiz::before {
        content: "";
        background: url("https://r.resimlink.com/dEoTG-lg6.png") no-repeat center;
        background-size: contain;
        width: 20px;
        height: 20px;
        display: inline-block;
        margin-right: 8px;
      }
    .anatomi_kargo_fiyat{
     padding-right: 3px;
    }
    .anatomi_kargo_strong{
    padding: 0px 3px;
    }
#ls-openButton {
    bottom: 160px !important;
}
   
      </style>
    `;
    const head = document.querySelector("head");
    const css = document.querySelector(".anatomi_kargo_ucretsiz_css");
    if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const kargo_ucretsiz_js = () => {

        let kargoUcretsizContainer = document.querySelector(".anatomi_kargo_ucretsiz");
        
        if (!kargoUcretsizContainer) {
            kargoUcretsizContainer = document.createElement("div");
            kargoUcretsizContainer.classList.add("anatomi_kargo_ucretsiz");
            document.body.appendChild(kargoUcretsizContainer);

            kargoUcretsizContainer.innerHTML = `
            <strong class="anatomi_kargo_fiyat"></strong> değerinde ürün ekle, 
            <strong class="anatomi_kargo_strong">Kargo Ücretsiz</strong> Olsun!
        `;
        }
        const ucretsizLimit = 1250; 
        function updateFreeShippingMessage() {
            const cartItems = document.querySelectorAll(".cart-item");
            const priceElement = document.querySelector(
                "#cart-price-container > div.w-100.bg-white.buy-sticky.anatomi-sepet-sticky > div.row.align-items-center > div.col-5.d-block.d-md-none > div > div > div.fw-bold"
            );
            let kargoUcretsizContainer = document.querySelector(".anatomi_kargo_ucretsiz");
    
            if (cartItems.length === 0) {
                kargoUcretsizContainer.style.display = "none"; 
                return;
            } else {
                kargoUcretsizContainer.style.display = "flex"; 
            }

            if (!priceElement || !kargoUcretsizContainer) return;
    
            let priceText = priceElement.textContent.trim(); 
            priceText = priceText.replace(/\./g, "").replace(",", "."); 
            let mevcutUcret = parseFloat(priceText);
            
            let difference = ucretsizLimit - mevcutUcret;
    
            if (mevcutUcret >= ucretsizLimit) {
                kargoUcretsizContainer.style.display = "none"; 
            } else {
                kargoUcretsizContainer.style.display = "flex";
                let priceStrong = kargoUcretsizContainer.querySelector(".anatomi_kargo_fiyat");
                if (priceStrong) {
                    priceStrong.textContent = `${difference.toFixed(2).replace(".", ",")} TL`;

                }
                
            }
        }
      

       const observer = new MutationObserver(updateFreeShippingMessage);
    
    const cartContainer = document.querySelector(".cart-item"); 
    const priceContainer = document.querySelector(
        "#cart-price-container > div.w-100.bg-white.buy-sticky.anatomi-sepet-sticky"
    );

    if (cartContainer) {
        observer.observe(cartContainer, { childList: true, subtree: true });
    }

    if (priceContainer) {
        observer.observe(priceContainer, { childList: true, subtree: true, characterData: true });
    }
    setInterval(updateFreeShippingMessage, 100);


    };
    

const kargo_ucretsiz_init = () => {
    kargo_ucretsiz_html();
    kargo_ucretsiz_css();
    kargo_ucretsiz_js();

};



const kargo_ucretsiz_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

setTimeout (() => {
if (kargo_ucretsiz_condition()) {
    kargo_ucretsiz_init();
}
}, 1500);