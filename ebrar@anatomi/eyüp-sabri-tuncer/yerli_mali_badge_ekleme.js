const yerli_mali_badge_ekleme_html = () => {};

const yerli_mali_badge_ekleme_css = () => {
    const style = `
      <style>    
      .anatomi_yerli_mali_img {
          width: 40px !important;
      }

      @media screen and (max-width: 768px) {
          .anatomi_yerli_mali_img {
              width: 30px !important;
          }
      }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const yerli_mali_badge_ekleme_js = () => {

    const imageUrl = ""; 

document.querySelectorAll("#ProductPageProductList > div > div > div.productImage").forEach((div) => {
    if (div.querySelector(".custom-corner-label")) return;

  
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "etiket";
    img.className = "anatomi_yerli_mali_img";

    div.style.position = "relative";

    div.appendChild(img);
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
