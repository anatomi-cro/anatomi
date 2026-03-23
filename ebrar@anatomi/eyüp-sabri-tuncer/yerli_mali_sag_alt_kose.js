setTimeout(() => {
  const yerli_mali_badge_ekleme_html = () => {};

  const yerli_mali_badge_ekleme_css = () => {
    const style = `
      <style>    
      .anatomi_yerli_mali_img {
          width: 70px !important;
          z-index: 9;
          position: absolute;
          bottom: 40%;
          right: 0px;
      }
@media screen and (min-width: 1040px) and (max-width: 1200px) {
.anatomi_yerli_mali_img {
      bottom: 50%;
      right: -15px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1040px) {
.anatomi_yerli_mali_img {
      bottom: 57%;
      right: -15px;
  }
}

       @media screen and (max-width: 768px) {
          .anatomi_yerli_mali_img {
              width: 50px !important;
          }
      }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
  };

  const yerli_mali_badge_ekleme_js = () => {
    const imageUrl =
      "https://cro-anatomi.s3.eu-north-1.amazonaws.com/eyu%CC%88p-sabri-tuncer-yerli-mali-icon.png";

    document
      .querySelectorAll(
        "#ProductPageProductList > div > div > div.productImage"
      )
      .forEach((div) => {
        if (div.querySelector(".custom-corner-label")) return;

        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "etiket";
        img.className = "anatomi_yerli_mali_img";

        div.insertAdjacentElement("afterend", img);
      });
  };

  const yerli_mali_badge_ekleme_init = () => {
    yerli_mali_badge_ekleme_html();
    yerli_mali_badge_ekleme_css();
    yerli_mali_badge_ekleme_js();
  };

  const yerli_mali_badge_ekleme_condition = () => {
    return true;
  };

  if (yerli_mali_badge_ekleme_condition()) {
    yerli_mali_badge_ekleme_init();
  }
}, 1000);
