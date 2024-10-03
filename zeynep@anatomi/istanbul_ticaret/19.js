const a_style = `<style>
.anatomi_container{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  z-index: 99999;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    }

    .a_product_list{
    display: flex !important;
    align-items: end !important;
    justify-content: center !important;
    gap: 12px !important;
    flex-wrap: wrap !important;
    overflow-y: auto !important;
    height: 150px;

    }

    .a_alt_container{
      display: flex;
    }

    .anatomi_img{
      width: 25%;
    border: 1px solid #b6b6b64a;
    padding: 10px;
    box-sizing: border-box;
    margin-left: 10px;
    margin-top: 5px;
    }
    .anatomi_info{
      width: 75%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px;
    }
    .anatomi_info h2{
      font-size: 14px;
      font-weight: 500 !important;
    }
    .anatomi_button{
      display: flex;
      width: 100%;
      gap: 20px;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin: 10px 0px;
    }


    .close_btn{
      padding: 14px;
      border: 1px solid #BBBBBB;
      color: #BBBBBB;
      border-radius: 5px;
      width: 50%;
      margin-left: 10px;
      font-size: 15px;
  }
  .sepet_btn{
    padding: 14px;
    border: 1px solid #FFC10D;
    background-color: #FFC10D;
    color: #000;
    border-radius: 5px;
    width: 50%;
    margin-right: 10px;
    font-size: 15px;
    font-weight: 600;
      
  }

 .a_icerik .a_title{
      color: #333333 !important;
      font-size: 15px !important;
      font-weight: 600 !important;
      text-align: center !important;
      padding: 10px !important;
    }
    .a_icerik .a_title p{
        padding: 0px !important;
    }
   .a_price{
  color: #FFC10D;
    font-size: 18px;
    font-weight: 500;

}
  
    hr{
        border: 0.5px solid #E5E5E5 !important;
 
    }



</style>`



const a_new_container = document.createElement('div');
a_new_container.classList.add('anatomi_container');

// Oluşturulan div'i <body> içine ekleyin
const a_body = document.querySelector('body');
a_body.appendChild(a_new_container);

a_new_container.innerHTML = `
  <div class="a_icerik">
    <div class="a_title">
    <p>Sepetine Eklediğin Ürünleri Unutma, Hemen Satın Al!</p>  
    </div>
    <hr></hr>
        <div class="a_product_list">
        </div>
        <hr></hr>
    <div class="anatomi_button">
    <a class="close_btn">
    Kapat
    </a> 
<a href="https://www.istanbulticaret.com/sepet" class="sepet_btn">
Sepete git
</a>
    </div>
  </div>
`;


const products = JSON.parse(sessionStorage.getItem('userItems'));
  console.log(products);

  

  
  products.forEach((product, index) => {
    const productTitle = product.itemName;
  
    // Yinelenen başlıkları önlemek için Set'e ekleyin


      // Diğer ürün bilgilerini kullanarak HTML öğesini oluşturun
      const productElement = `
        <div class="anatomi_new_product">
          <div class="a_alt_container">
            <div class="anatomi_img">
              <img src="${product.item_img_url}" alt="${productTitle}">
            </div>
            <div class="anatomi_info">
              <h2>${product.item_name}</h2>
              <p class="a_price">${product.item_price} TL</p>
            </div>
          </div>
          
        </div>
      `;
  
      const productContainer = document.querySelector('.a_product_list');
      if (productContainer) {
        productContainer.insertAdjacentHTML('afterbegin', productElement);
      } else {
        console.error('Eleman bulunamadı.');
      }
    })
  
  
    const a_close = document.querySelector('.close_btn');

    a_close.addEventListener('click', function() {
        a_new_container.classList.remove('anatomi_container');
    
    })


  const a_head = document.querySelector('head');
  a_head.insertAdjacentHTML('afterbegin', a_style);


  