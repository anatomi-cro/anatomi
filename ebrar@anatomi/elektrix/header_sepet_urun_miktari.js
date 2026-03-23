const sepet_urun_miktari_html = () => {

  const sepet_urun_miktari_html = `
    <div class="anatomi_sepet_miktari_container">
    <div class="anatomi_sepet_miktari">
      <span class="anatomi_sepet_miktari_text">0</span>
    </div>
  </div>
  `;

  const a_sepetim = document.getElementById("a_sepetim");
  a_sepetim && a_sepetim.insertAdjacentHTML("beforeend", sepet_urun_miktari_html);
};

const sepet_urun_miktari_style = () => {
  const sepet_urun_miktari_style = `
    <style>
    #a_sepetim {
      position: relative;}
    .anatomi_sepet_miktari_container {
    position: absolute;
    top: -30%;
    left: 10%;
    width: 15px;
    height: 15px;
    background-color: #0d7ebd;
    border-radius: 50%;
    }

    .anatomi_sepet_miktari {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    .anatomi_sepet_miktari_text {
      color: white;
      font-size: 11px;
    }
  </style>
  `;

    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", sepet_urun_miktari_style);
};

const sepet_urun_miktari_script = () => {
    const startingCartAmount = () => {
        let cartAmount = localStorage.getItem("ins-cart-product-list");
        let cartAmountParsed = JSON.parse(cartAmount);
        let totalAmount = cartAmountParsed.data.totalQuantity;

        document.querySelector(".anatomi_sepet_miktari_text").textContent = totalAmount;
    };
    function monitorCartAmount() {
        let previousAmount = 0;
    
        setInterval(() => {
            let cartAmount = localStorage.getItem("ins-cart-product-list");
            let cartAmountParsed = JSON.parse(cartAmount);
    
            if (cartAmountParsed && cartAmountParsed.data && cartAmountParsed.data.totalQuantity) {
                let totalAmount = cartAmountParsed.data.totalQuantity;
    
                if (totalAmount !== previousAmount) {
                    document.querySelector(".anatomi_sepet_miktari_text").textContent = totalAmount;
                    previousAmount = totalAmount;
                }
            }
        }, 1000); 
    }
    
    monitorCartAmount();
    
};

const sepet_urun_miktari_init = () => {
    sepet_urun_miktari_html();
    sepet_urun_miktari_style();
    sepet_urun_miktari_script();
};

const sepet_urun_miktari_conditions = () => {
  const windowInnerWidth = window.innerWidth > 768;
  const checkContainer = !document.querySelector(".anatomi_sepet_miktari_container");

  return windowInnerWidth && checkContainer;
};

if(sepet_urun_miktari_conditions()){
    sepet_urun_miktari_init();
}

