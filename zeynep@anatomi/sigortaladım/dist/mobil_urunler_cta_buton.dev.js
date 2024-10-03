const a_style = `
    <style>

    @media only screen and (min-width: 220px){

      .popup-container{
        position: relative !important;
      }
      
      .product_butons {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr;
          justify-items: center;
          align-items: center;
          background-color: white;
          gap:10px;
          padding-left: 35px;
          padding-right: 35px;
          margin: 20px 0 20px 0;
        }
      .product_buton {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          border: 0.5px solid #BBBBBB;
          border-radius: 5px;
          gap: 10px;
          padding: 10px 0 10px 0;
          cursor: pointer;
      }
      .product_buton img{
        width: 50px;
        height: 50px;
    
      }
      .anatomi_btn {
          width: 110px;
          height: 30px;
          background-color: #EA3625;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
  
      }
  
      .product_buton span{
        font-size: 14px;
        color: #333333;
        height: 30px;
        display: flex;
        align-items: center;
      }
  
  
  
      .white-popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow-y: auto;
          box-sizing: border-box;
          padding: 20px;
          margin: 0px !important;
        }
        
        .popup-container {
          background-color: #ffffff;
          max-width: 600px;
          width: 100%;
          border-radius: 5px;
          padding: 20px;
          text-align: center;
        }
  
        .mfp-close{
          color: #3074FF;
      border: 3px solid #3074FF !important;
      border-radius: 100%;
        }
      
        .popup-container .title{
          padding-top:15px;
        }
      }

    @media only screen and (min-width: 900px){
        
        .product_buton:not(:has(img)) {
          display: none;
        }

        .product_butons {
          width: 100%;
          height: 100%;
         display:flex;
          justify-content: center;
          align-items: center;
          background-color: white;
          gap:10px;
          padding-left: 35px;
          padding-right: 35px;
          margin: 20px 0 20px 0;
         }
      
      .product_buton {
          width: 180px;
          height: 170px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          border: 0.5px solid #BBBBBB;
          border-radius: 5px;
          gap: 10px;
          padding: 10px 0 10px 0;
          cursor: pointer;
      }
      
      
      .product_buton img{
          width: 50px;
          height: 50px;
      
      }
      
      .anatomi_btn {
          width: 110px;
          height: 30px;
          background-color: #EA3625;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
      
      }
      
      .product_buton span{
          font-size: 14px;
          color: #333333;
          height: 37px;
          display: flex;
          align-items: center;
      
      
      }

    }
    
    </style>

`;


const anatomi_sigorta_boxes = document.querySelector(".product-icon-btns.opened");
anatomi_sigorta_boxes.remove();

const a_html = `
    <div class="product_butons">

       <a class="product_buton" href="https://www.sigortaladim.com/trafik-sigortasi">
       <img class="anatomi_img" src='https://www.sigortaladim.com/Assets/Images/icon-red-car-leaf.svg' title='' />
       <span>Trafik Sigortası</span>
       <button class="anatomi_btn">Teklif Al</button>
       </a>

        <a class="product_buton" href="https://www.sigortaladim.com/kasko-sigortasi">
        <img class="anatomi_img" src='https://www.sigortaladim.com/Assets/Images/icon-red-car.svg' title='' />
        <span>Kasko Sigortası</span>
        <button class="anatomi_btn">Teklif Al</button>
        </a>


        <a class="product_buton" href="https://www.sigortaladim.com/dask-sigortasi">
        <img class="anatomi_img" src='https://www.sigortaladim.com/Assets/Images/icon-house.svg' title='' />
        <span>Dask Sigortası</span>
        <button class="anatomi_btn">Teklif Al</button>
        </a>


        <a class="product_buton" href="https://www.sigortaladim.com/seyahat-saglik-sigortasi">
        <img class="anatomi_img" src='https://svgshare.com/i/r8j.svg' title='' />
        <span>Seyahat Sağlık Sigortası</span>
        <button class="anatomi_btn">Teklif Al</button>
        </a>

        <a class="product_buton" href="https://www.sigortaladim.com/tamamlayici-saglik-sigortasi">
        <img class="anatomi_img" src='https://www.sigortaladim.com/Assets/Images/icon-heart.svg' title='' />
        <span>Tamamlayıcı Sağlık Sigortası</span>
        <button class="anatomi_btn">Teklif Al</button>
        </a>

        <a class="product_buton" id="a_motor">
        <img class="anatomi_img" src='https://www.sigortaladim.com/Assets/Images/icon-red-moto.svg' title='' />
        <span>Motorsiklet Sigortası</span>
        <button class="anatomi_btn">Teklif Al</button>
        </a>


        <a class="product_buton" href="https://www.sigortaladim.com/pet11">
        <span>Evcil Hayvan Sigortası</span>
        </a>

        <a class="product_buton" href="https://www.sigortaladim.com/esya-sigortasi">
        <span>Eşya Sigortası</span>
        </a>

        <a class="product_buton" href="https://www.sigortaladim.com/konut-sigortasi">
        <span>Konut Sigortası</span>
        </a>

        <a class="product_buton" href="https://www.sigortaladim.com/ikinciel-arac-garanti-sigortasi">
        <span>İkinci El Araç Sigortası</span>
        </a>

        <a class="product_buton" href="https://www.sigortaladim.com/saglik-sigortasi">
        <span>Özel Sağlık Sigortası</span>
        </a>

        <a class="product_buton" href="https://www.sigortaladim.com/yabancilara-ozel-saglik-sigortasi">
        <span>Yabancı Sağlık Sigortası</span>
        </a>

        
    </div>
`;

const product_container = document.querySelector(".product-icon-btn-container");
product_container.insertAdjacentHTML("afterbegin", a_html);



const a_motor = document.querySelector('#a_motor');
a_motor.addEventListener('click', function() {
  const b_html = `


  <div class="mfp-content">
    <div id="motorcycle-popup" class="white-popup no-header">
      <div class="popup-container">
          <div class="title">Hangi sigortayı seçmek istersin?</div>
          <div class="motorcycle-popup-container">
              <label class="check">
                  <img src="/Assets/Images/Icon/kask.webp" alt="kask" width="40" height="40">
                  <span>Trafik Sigortası</span>
                  <input type="radio" id="traffic" name="motorcycle-check" value="traffic">
              </label>
              <label class="check">
                  <img src="/Assets/Images/Icon/ceket.webp" alt="ceket" width="53" height="46">
                  <span>Kasko Sigortası</span>
                  <input type="radio" id="kasko" name="motorcycle-check" value="casco">
              </label>
          </div>
          <div class="button-container">
              <button id="motorcycleBtn" class="btn-solid">Devam Et</button>
          </div>
          <button title="Close (Esc)" type="button" class="mfp-close">×</button>
      </div>
      <div class="row-photo"></div>
  </div>
  </div>
  <div class="mfp-preloader">Loading...</div>


  `;

  const modal = document.createElement('div');
  modal.innerHTML = b_html;
  document.body.appendChild(modal);

  const motorcycleBtn = modal.querySelector('#motorcycleBtn');
  const trafficRadio = modal.querySelector('#traffic');
  const kaskoRadio = modal.querySelector('#kasko');

  motorcycleBtn.addEventListener('click', function() {
    if (trafficRadio.checked) {
      window.location.href = 'https://www.sigortaladim.com/trafik-sigortasi';
    } else if (kaskoRadio.checked) {
      window.location.href = 'https://www.sigortaladim.com/kasko-sigortasi';
    }
  });

  const closeButton = document.querySelector('.mfp-close');
closeButton.addEventListener('click', function() {
  const modal = document.querySelector('.mfp-content');
  modal.remove();
});
});

const head = document.querySelector("head");
head.insertAdjacentHTML("beforeend", a_style);