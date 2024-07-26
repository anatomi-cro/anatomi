setTimeout(() => {
  const head = document.querySelector('head');
  const aParent = document.getElementById('cart-wrapper');
  
  const anatomi_addToCard_html = `
  <div class="anatomi_addToCard_container">
      <div class="anatomi_addToCard_info">
        <div class="anatomi_addToCard_info_productName">
          <h3>Ürün Adı</h3>
        </div>
        <div class="anatomi_addToCard_info_discount">
        <h3></h3>
          <h3>İskonto</h3>
        </div>
        <div class="anatomi_addToCard_info_productPrice">
        </div>
      </div>
  
      <div class="anatomi_addToCard_buttons">
        <button class="anatomi_addToCard_buyNow">Hemen Al</button>
        <button class="anatomi_addToCard_button"></button>
      </div>
    </div>
  `;
  
  const anatomi_addToCard_style = `
  <style>
    .anatomi_addToCard_container {
      position: fixed;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100vw;
      height: fit-content;
      background-color: #fff;
      z-index: 9999;
      padding: 5px 10px;
      overflow: hidden;
      box-sizing: border-box;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    }
  
    .anatomi_addToCard_info {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
      width: 100%;
    }
  
    .anatomi_addToCard_info_productName{
      width: 40%;
    }
  
    .anatomi_addToCard_info_discount{
      margin-left: 30px;
    }
  
    .anatomi_addToCard_info_discount {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }
  
    .anatomi_addToCard_info_productPrice .fiyat_container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  
    .anatomi_addToCard_info_productName h3 {
      font-size: 14px;
      font-weight: 600;
      color: #000;
      width: 100%;
    }
  
    .anatomi_addToCard_info_discount h3 {
      font-size: 12px;
      font-weight: 600;
      color: green;
      white-space: nowrap;
    }
  
    .anatomi_addToCard_buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 100%;
    }
  
    .anatomi_addToCard_buyNow {
      background-color: #EA9025;
      color: #fff;
      padding: 5px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      width: 45%;
      line-height: 40px;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
    }
  
    .anatomi_addToCard_button {
      border: none;
      width: 55%;
      padding: 0;
    }
  
    .anatomi_addToCard_button-2 {
      width: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
    }
  
    .anatomi_addToCard_button-2 .container_icon svg{
      display: none;
    }
  
  </style>
  `;
  
  head.insertAdjacentHTML('beforeend', anatomi_addToCard_style);
  aParent.insertAdjacentHTML('beforeend', anatomi_addToCard_html);
  
  const price = document.querySelector('.fiyat_container');
  const aPrice = document.querySelector('.anatomi_addToCard_info_productPrice');
  
  aPrice.appendChild(price);
  
  const productName = document.getElementById('productName');
  const aProductName = document.querySelector('.anatomi_addToCard_info_productName h3');
  
  aProductName.innerHTML = productName.innerHTML;
  
  
  const discount = document.querySelectorAll('.a_discount span');
  const aDiscount = document.querySelectorAll('.anatomi_addToCard_info_discount h3');
  
  aDiscount[0].innerHTML = discount[0].innerHTML;
  
  
  const addToCard = document.querySelector('.box.col-12.buyBtn.a_buyBtn');
  addToCard.classList.add('anatomi_addToCard_button-2');
  const aAddToCard = document.querySelector('.anatomi_addToCard_button');
  
  aAddToCard.appendChild(addToCard);
  
  const buyNow = document.querySelector('.anatomi_addToCard_buyNow');
  buyNow.addEventListener('click', () => {
    window.location.href = 'https://www.elektrix.com/order/address';
  });
  
  let productNameText = productName.innerHTML;
  if (productNameText.length > 30) {
    productNameText = productNameText.substring(0, 30) + '...';
    aProductName.innerHTML = productNameText;
  }
  
  
  
  
  

}, 2000)