const anatomi_productPage_sticky_html = () => {
    const anatomi_productPage_sticky_html = `
        <div class="anatomi_product_page_sticky_button_container">
        <div class="anatomi_product_page_sticky_button_content">
          <div class="anatomi_product_page_sticky_button_top">
            <div class="anatomi_product_page_sticky_button_productName"></div>
            <div class="anatomi_product_page_sticky_button_price PriceArea"></div>
          </div>
          <div class="anatomi_product_page_sticky_button_bottom">
            <div class="anatomi_product_page_sticky_button_addToCard AddToBasket ProductDetails AutoTextRep"></div>
          </div>
        </div>
        </div>
      </div>
    `;
  
    const body = document.querySelector("body");
    body.insertAdjacentHTML("beforeend", anatomi_productPage_sticky_html);
  };
  
  const anatomi_productPage_sticky_stlye = () => {
    const anatomi_productPage_sticky_stlye = `
      <style>
        .anatomi_product_page_sticky_button_container {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          z-index: 9999;
          border-radius: 10px 10px 0 0;
        }
  
        .anatomi_product_page_sticky_button_content {
          display: flex;
          flex-direction: column;
          padding: 13px;
          gap: 15px;
        }
  
        .anatomi_product_page_sticky_button_top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
        }
  
        .anatomi_product_page_sticky_button_productName {
          font-size: 16px;
          margin-top: 0;
          text-transform: capitalize;
          color: #000;
          font-weight: 400;
        }
  
        .anatomi_product_page_sticky_button_price {
          display: flex;
          align-items: center;
          justify-content: center;
        }
  
        .anatomi_product_page_sticky_button_price .Price {
        color: #0b0b0b;
      font-size: 16px;
      width: 100%;
      line-height: normal;
      font-weight: 400;
        }
  
        .anatomi_product_page_sticky_button_price .PriceOld {
          color: #b2b2b2;
          font-size: 15px;
          text-decoration: line-through;
          line-height: normal;
          margin-top: 5px;
          margin-right: 8px;
          font-weight: 300;
        }
  
        .anatomi_product_page_sticky_button_price .DiscountedAmount {
          color: #dc3737;
          font-size: 17px;
          font-weight: 400;
        }
  
        .anatomi_product_page_sticky_button_bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          gap: 25px;
        }
  
          .anatomi_product_page_sticky_button_addToCard {
              width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
          }
  
        .anatomi_product_page_sticky_button_addToCard #Basket {
        position: relative;
      background-color: #000;
      /* height: 45px; */
      /* line-height: 45px; */
      font-size: 16px;
      width: 100% !important;
      border: none;
      color: #fff;
      font-weight: 400;
      margin-top: 15px;
      margin-bottom: 20px;
      right: 0;
      bottom: 3%;
      height: 55px;
      margin: 0 auto;
      border-radius: 5px;
        }
  
    
      </style>
      `;
  
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", anatomi_productPage_sticky_stlye);
  };
  
  const anatomi_productPage_sticky_script = () => {
    const productPage = {
      productName: document.querySelector(".ProductHeader").innerText,
      price: document.querySelector(".ProductContent .PriceArea").innerHTML,
      addToCard: document.getElementById("Basket"),
    };
  
    const productName = document.querySelector(
      ".anatomi_product_page_sticky_button_productName"
    );
    const price = document.querySelector(
      ".anatomi_product_page_sticky_button_price"
    );
    const addToCard = document.querySelector(
      ".anatomi_product_page_sticky_button_addToCard"
    );
  
    productName.innerHTML = productPage.productName;
    price.innerHTML = productPage.price;
    addToCard.insertAdjacentElement("beforeend", productPage.addToCard);
  
  };
  
  const anatomi_productPage_sticky_init = () => {
    anatomi_productPage_sticky_html();
    anatomi_productPage_sticky_stlye();
    anatomi_productPage_sticky_script();
  };
  
  anatomi_productPage_sticky_init();
  