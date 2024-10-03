const a_style = `
    <style>
    .a_svg {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .product_buton {
      text-decoration: none !important;
    }
    
    @media only screen and (min-width: 1200px){
    .product_butons{
        width: 1140px !important;
        padding: 0px !important;
    }

    .product-icon-btn-container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    }
    
    @media screen and (min-width: 900px) and (max-width: 1199px) {
        .product_butons{
            width: 940px !important;
            padding: 0px !important;
        }
        .product-icon-btn-container{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    
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
        padding: 5px;
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
        
               
        .product_buton:not(:has(button)){
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
      
      #a_motor {
        display: none;
      }

    }
    
    </style>

`;


const anatomi_sigorta_boxes = document.querySelector(".product-icon-btns.opened");
anatomi_sigorta_boxes.remove();

const a_html = `
    <div class="product_butons">

       <a class="product_buton traffic" href="https://www.sigortaladim.com/trafik-sigortasi">
       <img class="anatomi_img" src='https://www.sigortaladim.com/Assets/Images/icon-red-car-leaf.svg' title='' />
       <span>Trafik Sigortası</span>
       <button class="anatomi_btn">Teklif Al</button>
       </a>

        <a class="product_buton casco" href="https://www.sigortaladim.com/kasko-sigortasi">
        <img class="anatomi_img" src='https://www.sigortaladim.com/Assets/Images/icon-red-car.svg' title='' />
        <span>Kasko Sigortası</span>
        <button class="anatomi_btn">Teklif Al</button>
        </a>
        
        <a class="product_buton return_life" href="https://www.sigortaladim.com/prim-iadeli-hayat-sigortasi">
            <img class="anatomi_img" src='https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Group+(4).svg' title='' />
            <span>Prim İadeli Birikimli Hayat Sigortası</span>
            <button class="anatomi_btn">Teklif Al</button>
        </a>


 
        <a class="product_buton tss" href="https://www.sigortaladim.com/tamamlayici-saglik-sigortasi">
        <img class="anatomi_img" src='https://www.sigortaladim.com/Assets/Images/icon-heart.svg' title='' />
        <span>Tamamlayıcı Sağlık Sigortası</span>
        <button class="anatomi_btn">Teklif Al</button>
        </a>
        
        
        <a class="product_buton dask" href="https://www.sigortaladim.com/dask-sigortasi">
        <img class="anatomi_img" src='https://www.sigortaladim.com/Assets/Images/icon-house.svg' title='' />
        <span>Dask Sigortası</span>
        <button class="anatomi_btn">Teklif Al</button>
        </a>

        <a class="product_buton travel" href="https://www.sigortaladim.com/seyahat-saglik-sigortasi">
            <div class="a_svg">
                <svg width="50" height="50" viewBox="0 0 40 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.8755 16.4124H5.72824C3.42078 16.4124 1.55029 18.2829 1.55029 20.5903V46.2804C1.55029 48.5878 3.42078 50.4583 5.72824 50.4583H24.8755C27.1829 50.4583 29.0535 48.5878 29.0535 46.2804V20.5903C29.0535 18.2829 27.1829 16.4124 24.8755 16.4124Z" fill="#EB1305" stroke="#2D373A" stroke-width="1.12676" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.37842 20.5653V45.9089" stroke="#2D373A" stroke-width="1.12676" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.3027 20.5653V45.9089" stroke="#2D373A" stroke-width="1.12676" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.2275 20.5653V45.9089" stroke="#2D373A" stroke-width="1.12676" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23.1415 54.4072C24.1211 54.4072 24.9153 53.6131 24.9153 52.6334C24.9153 51.6538 24.1211 50.8596 23.1415 50.8596C22.1618 50.8596 21.3677 51.6538 21.3677 52.6334C21.3677 53.6131 22.1618 54.4072 23.1415 54.4072Z" fill="white" stroke="#2D373A" stroke-width="1.12676" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.45942 54.4072C8.43902 54.4072 9.23321 53.6131 9.23321 52.6334C9.23321 51.6538 8.43902 50.8596 7.45942 50.8596C6.47975 50.8596 5.68555 51.6538 5.68555 52.6334C5.68555 53.6131 6.47975 54.4072 7.45942 54.4072Z" fill="white" stroke="#2D373A" stroke-width="1.12676" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.215 1.12671H8.66829C7.37378 1.12671 6.32666 2.17635 6.32666 3.46832V7.84416C6.32666 8.11244 6.54287 8.32865 6.81116 8.32865H9.52262C9.79091 8.32865 10.0071 8.11244 10.0071 7.84416V5.31506C10.0071 4.83579 10.3952 4.45029 10.8719 4.45029H19.8165C20.2957 4.45029 20.6812 4.8384 20.6812 5.31506V7.84416C20.6812 8.11244 20.8974 8.32865 21.1657 8.32865H23.8851C24.1534 8.32865 24.3695 8.11244 24.3695 7.84416V3.46832C24.3695 2.17374 23.3199 1.12671 22.0279 1.12671H20.215Z" fill="white" stroke="#2D373A" stroke-width="1.12676" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.1836 8.55237V16.3404" stroke="#2D373A" stroke-width="1.12676" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.33496 8.55237V16.3404" stroke="#2D373A" stroke-width="1.12676" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M38.2541 24.6422C38.5844 24.6977 38.8591 24.8613 39.0505 25.1111C39.242 25.3581 39.3807 25.6605 39.3807 25.963V34.2711C39.4085 36.6104 38.7203 38.8913 37.455 40.8726C36.1896 42.8539 34.347 44.4494 32.1742 45.4651C31.3224 45.8508 30.3594 46.4002 29.5048 46.4002C28.6501 46.4002 27.6899 45.8508 26.8352 45.4651C24.6625 44.4467 22.8199 42.8511 21.5546 40.8726C20.2892 38.8913 19.601 36.6104 19.6287 34.2711V25.963C19.6287 25.6605 19.7398 25.3581 19.959 25.1111C20.1505 24.8641 20.4529 24.6977 20.7554 24.6422C23.2029 24.2287 26.1471 23.4046 28.7611 21.7812C28.9803 21.6425 29.255 21.562 29.5048 21.562C29.7545 21.562 30.0264 21.6453 30.2485 21.7812C32.8347 23.4046 35.7761 24.2287 38.2541 24.6422Z" fill="white" stroke="#2D373A" stroke-width="1.12676" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M35.1312 27.9842C35.3449 28.0259 35.5169 28.1341 35.6446 28.2839C35.7722 28.4337 35.8582 28.6474 35.8582 28.8389V34.1862C35.8804 35.6818 35.4309 37.1581 34.6178 38.4428C33.8048 39.7277 32.6282 40.7516 31.2186 41.3953C30.6636 41.6506 30.0419 41.9947 29.5064 41.9947C28.9709 41.9947 28.3298 41.6312 27.7943 41.3953C26.404 40.7322 25.2053 39.7054 24.3949 38.4428C23.5819 37.1803 23.1324 35.7068 23.1546 34.1862V28.8389C23.1546 28.6474 23.2184 28.4532 23.3682 28.2839C23.4959 28.1341 23.6901 28.0286 23.8816 27.9842C25.4633 27.7289 27.3447 27.1934 29.0346 26.1444C29.1845 26.0584 29.3566 25.9946 29.5064 25.9946C29.6563 25.9946 29.8477 26.0363 29.9781 26.1444C31.6458 27.1712 33.5494 27.7068 35.1312 27.9842Z" fill="white" stroke="#2D373A" stroke-width="1.12676" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <span>Seyahat Sağlık Sigortası</span>
            <button class="anatomi_btn">Teklif Al</button>
        </a>
    
         <a class="product_buton imm" href="https://www.sigortaladim.com/imm-sigortasi">
        <img class="anatomi_img" src='https://anatomi-cdn.s3.eu-west-2.amazonaws.com/Group+(5).svg' title='' />
        <span>İhtiyari Mali Mesuliyet Sigortası </span>
            <button class="anatomi_btn">Teklif Al</button>
        </a>
        
        <a class="product_buton motor" id="a_motor">
        <img class="anatomi_img" src='https://www.sigortaladim.com/Assets/Images/icon-red-moto.svg' title='' />
        <span>Motorsiklet Sigortası</span>
        <button class="anatomi_btn">Teklif Al</button>
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




document.querySelectorAll('.product_buton').forEach(function (item){
    item.addEventListener('click', function(e){
        console.log('tıklandı');
        var item = e.target.closest('a').classList[1];
        window.dataLayer.push({
            event: "click_homepage_product_anatomi",
            category: "vRed",
            value: item
        })
    })
})



