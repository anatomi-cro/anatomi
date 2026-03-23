if (window.innerWidth < 768 && document.querySelector("#catImg")) {
const kargo_redesign_html = () => {};

const kargo_redesign_css = () => {
  const style = `
  <style id="anatomi_kargo_redesign">
  .col.passive.productDiscount.ml {
  background: #0F7EBD !important;
  }

  .a_button{
  display: none;}

  .anatomi_fast_delivery {
  position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #EA9025;
    padding: 5px 0;
    color: #fff;
    font-size: 10px;
    font-weight: 700;}

    .anatomi_new_addToCart_button {
position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    right: 5%;
    transform: translateY(-50%);
    color: black !important;
    }

    .productDetails  {
    padding-bottom: 0px !important;
    }

    .tooltipWrapper  {
    position: absolute;
    bottom: -7%;
    background-color: #dddddd94;
    width: 100%;
    left: 0;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    }

    .productPrice {
    padding: 0 10px;
    }

    .currentPrice {
    font-weight: 700 !important;}

    .discountedPrice {
        transform: translateY(15px);
    }

    .anatomi_formCloseBtn {
    top: 320px !important;}
  </style>
  `;

  const container = document.querySelector("#anatomi_kargo_redesign");
  if (!container) {
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
  }
};

const kargo_redesign_js = () => {
  const insert_fast_delivery = () => {
    const container = document.querySelectorAll(".imgInner");
    container &&
      container.forEach((item) => {
        if (item.querySelector(".anatomi_fast_delivery")) return;
        const fast_delivery = document.createElement("div");
        fast_delivery.classList.add("anatomi_fast_delivery");
        fast_delivery.innerHTML = `
      <div class="anatomi_fast_delivery_text">Hızlı Teslimat</div>
      `;
        item.appendChild(fast_delivery);
      });
  };

  const insert_new_addToCart = () => {
    const container = document.querySelectorAll(".priceWrapper");
    container &&
      container.forEach((item) => {
         if (!item.querySelector(".anatomi_new_addToCart_button")) {
             const old_addToCart =
          item.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.querySelector(
            ".a_button"
          );
       if (!old_addToCart) return;

        const new_cart = document.createElement("div");
        new_cart.classList.add("anatomi_new_addToCart_button");

        const buttonText = old_addToCart.textContent?.trim();

        if (buttonText === "Sepete Ekle") {
          new_cart.innerHTML = `
            <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/anatomi_elektrix_cart.png" alt="Sepete Ekle"/>
          `;
        } else {
          new_cart.innerHTML = old_addToCart.innerHTML;
        }
       

        new_cart.addEventListener("click", () => {
          old_addToCart && old_addToCart.click();
        });
        item.appendChild(new_cart);
          }
      });

  };

  const change_discountPrice_location = () => {
    const price = document.querySelectorAll(".discountedPrice");
    price &&
      price.forEach((item) => {
        const parent = item.closest(".tooltipWrapper");
        parent && parent.insertAdjacentElement("beforebegin", item);
      });
  };

  const change_color = () => {
    const discount = document.querySelectorAll(".productDiscount");
    discount &&
      discount.forEach((item) => {
        item.style.backgroundColor = "#0F7EBD !important";
      });
  };

  console.log("kargo_redesign_js");

  setInterval(() =>{
    insert_fast_delivery();
  insert_new_addToCart();
  change_discountPrice_location();
  change_color();
  },100);
  
};

const kargo_redesign_init = () => {
  kargo_redesign_html();
  kargo_redesign_css();
  kargo_redesign_js();
};

const kargo_redesign_conditions = () => {
  const device = matchMedia("(max-width: 768px)").matches;
  const container = !document.querySelector("#anatomi_kargo_redesign");
  return device && container;
};

if (kargo_redesign_conditions()) {
  kargo_redesign_init();
}
}