const urun_incele_oneri_html = () => {};

const urun_incele_oneri_css = () => {
  const style = `
      <style id="anatomi_urun_incele_oneri_css">    
      .anatomi_kategori_one_cikarma_incele_button{
        width: 20% !important;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      }
      .anatomi_kategori_one_cikarma_sepete_ekle_button{
         width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
      }
      .examineIcon{
          width: 20% !important;
      }
      .mycartIcon{
          width: 80% !important;
      }
      .mycartIcon a{
          font-size: 18px !important;
    justify-content: center !important;
    display: flex !important;
    align-items: center !important;
      }
      #ProductPageProductList > div > div > div.productDetail.videoAutoPlay > div.productFaMyOr > div.examineIcon.tip.detailLink > a{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 5px;
      }
    .anatomi_incele_img{
        width: 30px;
        height: 30px;
    }
    .productItem .productName{
    height: 70px;
    }
    @media screen and (max-width: 768px) {
        .anatomi_incele_img{
        width: 20px;
        height: 20px;
    }
    .anatomi_kategori_one_cikarma_incele_button{
        width: 50px !important;
    }
     .mycartIcon a ,  .anatomi_kategori_one_cikarma_incele_button{
          font-size: 14px !important;
          height: 40px;
      }
    #ProductPageProductList > div > div > div.productDetail.videoAutoPlay > div.productFaMyOr > div.examineIcon.tip.detailLink > a , .anatomi_kategori_one_cikarma_sepete_ekle_button{
        height: 40px;
        font-size: 14px;
      }

    }
      </style>
    `;
  const css = document.querySelector("#anatomi_urun_incele_oneri_css");
  const head = document.querySelector("head");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const urun_incele_oneri_js = () => {
  const onerilenButton = document.querySelectorAll(
    "#ProductListMainContainer > div.personaclick-recommend.personaclick-kategori-populer-urunler.personaclick-recommend-rendered > div.recommended-items.owl-carousel.owl-loaded.owl-drag > div.owl-stage-outer > div > div > div > div.recommended-item-info > div.recommended-cta-area > a"
  );

  const onerilenSepetButton = document.querySelectorAll(
    "#ProductListMainContainer > div.personaclick-recommend.personaclick-kategori-populer-urunler.personaclick-recommend-rendered > div.recommended-items.owl-carousel.owl-loaded.owl-drag > div.owl-stage-outer > div > div > div > div.recommended-item-info > div.recommended-cta-area > span"
  );

  onerilenSepetButton.forEach((button) => {
    button.classList.add("anatomi_kategori_one_cikarma_sepete_ekle_button");
  });

  onerilenButton.forEach((button) => {
    button.classList.add("anatomi_kategori_one_cikarma_incele_button");
    const img = button.querySelector(".anatomi_incele_img");

    if (!img) {
      const newImg = document.createElement("img");
      newImg.src =
        "https://cro-anatomi.s3.eu-north-1.amazonaws.com/eyup-sabri-tuncer-incele-icon.png";
      newImg.alt = "etiket";
      newImg.className = "anatomi_incele_img";

      button.textContent = "";
      button.appendChild(newImg);
    }
  });

  const inceleButton = document.querySelectorAll(
    "#ProductPageProductList > div > div > div.productDetail.videoAutoPlay > div.productFaMyOr > div.examineIcon.tip.detailLink > a"
  );

  inceleButton.forEach((button) => {
    const img = button.querySelector(".anatomi_incele_img");

    if (!img) {
      const newImg = document.createElement("img");
      newImg.src =
        "https://cro-anatomi.s3.eu-north-1.amazonaws.com/eyup-sabri-tuncer-incele-icon.png";
      newImg.alt = "etiket";
      newImg.className = "anatomi_incele_img";

      button.textContent = "";
      button.appendChild(newImg);
    }
  });
};

const urun_incele_oneri_init = () => {
  urun_incele_oneri_html();
  urun_incele_oneri_css();
  urun_incele_oneri_js();
};

const urun_incele_oneri_condition = () => {
  const device = window.innerWidth <= 768;
  return device;
};

setInterval(() => {
  if (urun_incele_oneri_condition()) {
    urun_incele_oneri_init();
  }
}, 50);
ß;
