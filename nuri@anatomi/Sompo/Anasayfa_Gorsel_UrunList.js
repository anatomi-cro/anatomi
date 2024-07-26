const ant_style = `
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
          width: 160px;
          height: 142px;
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
          text-decoration: none;
      }
      .product_buton img{
        width: 50px;
        height: 35px;
    
      }
      .anatomi_btn {
          width: 110px;
          height: 30px;
          background-color: #BB2646;
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

        .a_diger_popup {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-items: center;
            align-items: center;
            gap: 10px;
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
          text-decoration: none;
      }
      
      
      .product_buton img{
          width: 50px;
          height: 50px;
      
      }
      
      .anatomi_btn {
          width: 110px;
          height: 30px;
          background-color: #BB2646;
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

    .anatomi_overlay{
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99999998;
    }

    .a_creat_diger{
        width: 92%;
        height: fit-content;
        z-index: 999999999;
        background-color: white;
        position: fixed !important;
        top: 50%; 
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4) !important;
        position: fixed !important;
        padding: 20px;
        }
  
        .a_diger_popup{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
            height: 100%;
        }

        .a_banner{
            width: 100%;
        }

        .a_img_banner{
            height: 200px;
            width: 100%;
        }

        .a_creat_diger a:last-child {
            transform: translateX(50%);
        }

    </style>

`;

const a_anasayfa_ürünler = document.querySelector('section.promo')
a_anasayfa_ürünler.remove()

const ant_html = `
<div>
    <div class="a_banner">
   <img class="a_img_banner" src="https://anatomi.s3.eu-north-1.amazonaws.com/sompo_foto.webp"></img>
    </div>
    <div class="product_butons">

       <a class="product_buton" href="https://www.somposigorta.com.tr/full-kasko">
       <img class="anatomi_img" src='https://anatomi.s3.eu-north-1.amazonaws.com/Group+(3333).svg' title='' />
       <span>Kasko</span>
       <button class="anatomi_btn">Teklif Al</button>
       </a>

        <a class="product_buton" href="https://www.somposigorta.com.tr/trafik-sigortasi">
        <img class="anatomi_img" src='https://anatomi.s3.eu-north-1.amazonaws.com/Group+(25).svg' title='' />
        <span>Trafik</span>
        <button class="anatomi_btn">Teklif Al</button>
        </a>

        <a class="product_buton" href="https://www.somposigorta.com.tr/tamamlayici-saglik-sigortasi">
        <img class="anatomi_img" src='https://anatomi.s3.eu-north-1.amazonaws.com/Group+(21).svg' title='' />
        <span>Tamamlayıcı Sağlık</span>
        <button class="anatomi_btn">Teklif Al</button>
        </a>

        <a class="product_buton" href="https://www.somposigorta.com.tr/zorunlu-deprem-sigortasi-dask">
        <img class="anatomi_img" src='https://anatomi.s3.eu-north-1.amazonaws.com/Group+(26).svg' title='' />
        <span>Dask</span>
        <button class="anatomi_btn">Teklif Al</button>
        </a>

        
        <a class="product_buton" id="a_seyehat">
        <img class="anatomi_img" src='https://anatomi.s3.eu-north-1.amazonaws.com/Group+(20).svg' title='' />
        <span>Seyahat</span>
        <button class="anatomi_btn">Teklif Al</button>
        </a>

        <a class="product_buton" id="a_diğer">
        <img class="anatomi_img" src='https://anatomi.s3.eu-north-1.amazonaws.com/Layer+2.svg' title='' />
        <span>Diğer Ürünler</span>
        <button class="anatomi_btn">Teklif Al</button>
        </a>
        
    </div>
    <a class="urunler" href="https://www.somposigorta.com.tr/urunler">Tüm Ürünleri İncele</a>
    </div>
`;

const product_tümünü_gör = document.querySelector(".contracted-institutions");
product_tümünü_gör.insertAdjacentHTML("beforebegin", ant_html);

document.querySelector('#a_diğer').addEventListener('click', function () {



    const a_creat_diger = document.querySelector('div');

    if (a_creat_diger) {
        // Önce mevcut sınıfları temizle
        a_creat_diger.classList = [];

        // Sonra sadece a_creat_diger sınıfını ekle
        a_creat_diger.classList.add('a_creat_diger');
    }


    a_creat_diger.innerHTML = `
    <div class="a_diger_popup">
<a class="product_buton" href="https://www.somposigorta.com.tr/dijital-guvenlik-sigortasi">
<img class="anatomi_img" src='https://anatomi.s3.eu-north-1.amazonaws.com/Group+(24).svg' title='' />
<span>Dijital Güvenlik</span>
<button class="anatomi_btn">Teklif Al</button>
</a>

 <a class="product_buton" href="https://www.somposigorta.com.tr/iklim-sigortasi">
 <img class="anatomi_img" src='https://anatomi.s3.eu-north-1.amazonaws.com/Vector+(12).svg' title='' />
 <span>İklim</span>
 <button class="anatomi_btn">Teklif Al</button>
 </a>

 <a class="product_buton" href="https://www.somposigorta.com.tr/mini-kasko">
 <img class="anatomi_img" src='https://anatomi.s3.eu-north-1.amazonaws.com/Group+(23).svg' title='' />
 <span>Mini Kasko</span>
 <button class="anatomi_btn">Teklif Al</button>
 </a>

</div>

    `
    // arka planını koyulaştırmak için
    const overlay = document.createElement('div');
    overlay.classList.add('anatomi_overlay');
    document.body.appendChild(overlay);


    // Overlay'a tıklama olayını ekle
    overlay.addEventListener('click', () => {
        // Overlay'ı kaldırın
        overlay.remove();
        // a_container'ı kaldırın
        a_creat_diger.remove();
    });
    // Oluşturulan div'i <body> içine ekleyin
    const a_body = document.querySelector('body');
    a_body.appendChild(a_creat_diger);



});


// seyehat pop up

document.querySelector('#a_seyehat').addEventListener('click', function () {



    const a_creat_diger = document.querySelector('div');

    if (a_creat_diger) {
        // Önce mevcut sınıfları temizle
        a_creat_diger.classList = [];

        // Sonra sadece a_creat_diger sınıfını ekle
        a_creat_diger.classList.add('a_creat_diger');
    }


    a_creat_diger.innerHTML = `
    <div class="a_diger_popup">
<a class="product_buton" href="https://www.somposigorta.com.tr/covid-19-koronavirus-yurt-disi-seyahat-sigortasi">
<img class="anatomi_img" src='https://anatomi.s3.eu-north-1.amazonaws.com/Group+(20).svg' title='' />
<span>COVID-19 Yurt Dışı Seyahat</span>
<button class="anatomi_btn">Teklif Al</button>
</a>

 <a class="product_buton" href="https://www.somposigorta.com.tr/yurt-disi-egitim-seyahat-sigortasi">
 <img class="anatomi_img" src='https://anatomi.s3.eu-north-1.amazonaws.com/Group+(20).svg' title='' />
 <span>Yurt Dışı Eğitim Seyahat</span>
 <button class="anatomi_btn">Teklif Al</button>
 </a>

 <a class="product_buton" href="https://www.somposigorta.com.tr/yurt-disi-vize-seyahat-sigortasi">
 <img class="anatomi_img" src='https://anatomi.s3.eu-north-1.amazonaws.com/Group+(20).svg' title='' />
 <span>Yurt Dışı Vize Seyahat</span>
 <button class="anatomi_btn">Teklif Al</button>
 </a>

</div>

    `
    // arka planını koyulaştırmak için
    const overlay = document.createElement('div');
    overlay.classList.add('anatomi_overlay');
    document.body.appendChild(overlay);


    // Overlay'a tıklama olayını ekle
    overlay.addEventListener('click', () => {
        // Overlay'ı kaldırın
        overlay.remove();
        // a_container'ı kaldırın
        a_creat_diger.remove();
    });
    // Oluşturulan div'i <body> içine ekleyin
    const a_body = document.querySelector('body');
    a_body.appendChild(a_creat_diger);



});



const head = document.querySelector("head");
head.insertAdjacentHTML("afterbegin", ant_style);

