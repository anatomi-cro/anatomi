setTimeout(() => {
  const firsat_badge_eklenmesi_html = () => {};

  const firsat_badge_eklenmesi_css = () => {
    const style = `
      <style>    
      .anatomi_firsat_img_1 , .anatomi_firsat_img_2 , .anatomi_firsat_img_3 , .anatomi_firsat_img_4, .anatomi_firsat_img_5 {
          width: 50px !important;
          z-index: 9;
      }
      .productItem .productImage img{
        top: 20px !important; 
      }
       @media screen and (max-width: 768px) {
           .anatomi_firsat_img_1 , .anatomi_firsat_img_2 , .anatomi_firsat_img_3 , .anatomi_firsat_img_4, .anatomi_firsat_img_5  {
              width: 40px !important;
          }
      }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
  };

  const firsat_badge_eklenmesi_js = () => {
    const imageUrl =
      "https://cro-anatomi.s3.eu-north-1.amazonaws.com/eyu%CC%88p-sabri-tuncer-f%C4%B1rsat-icon.png";
    const img1 = document.createElement("img");
    img1.src = imageUrl;
    img1.setAttribute("style", "top: 0px !important");
    img1.alt = "etiket";
    img1.className = "anatomi_firsat_img_1";

    const product1 = document.querySelector(
      "#ProductPageProductList > div:nth-child(1) > div > div.productImage"
    );
    product1.style.position = "relative";
    product1.appendChild(img1);

    const img2 = document.createElement("img");
    img2.src = imageUrl;
    img2.setAttribute("style", "top: 0px !important");
    img2.alt = "etiket";
    img2.className = "anatomi_firsat_img_2";

    const product2 = document.querySelector(
      "#ProductPageProductList > div:nth-child(2) > div > div.productImage"
    );
    product2.style.position = "relative";
    product2.appendChild(img2);

    const img3 = document.createElement("img");
    img3.src = imageUrl;
    img3.setAttribute("style", "top: 0px !important");
    img3.alt = "etiket";
    img3.className = "anatomi_firsat_img_3";

    const product3 = document.querySelector(
      "#ProductPageProductList > div:nth-child(3) > div > div.productImage"
    );
    product3.style.position = "relative";
    product3.appendChild(img3);

    const img4 = document.createElement("img");
    img4.src = imageUrl;
    img4.setAttribute("style", "top: 0px !important");
    img4.alt = "etiket";
    img4.className = "anatomi_firsat_img_4";

    const product4 = document.querySelector(
      "#ProductPageProductList > div:nth-child(4) > div > div.productImage"
    );
    product4.style.position = "relative";
    product4.appendChild(img4);

    const img5 = document.createElement("img");
    img5.src = imageUrl;
    img5.setAttribute("style", "top: 0px !important");
    img5.alt = "etiket";
    img5.className = "anatomi_firsat_img_5";

    const product5 = document.querySelector(
      "#ProductPageProductList > div:nth-child(5) > div > div.productImage"
    );
    product5.style.position = "relative";
    product5.appendChild(img5);
  };

  const firsat_badge_eklenmesi_init = () => {
    firsat_badge_eklenmesi_html();
    firsat_badge_eklenmesi_css();
    firsat_badge_eklenmesi_js();
  };

  const firsat_badge_eklenmesi_condition = () => {
    return true;
  };

  if (firsat_badge_eklenmesi_condition()) {
    firsat_badge_eklenmesi_init();
  }
}, 1000);
