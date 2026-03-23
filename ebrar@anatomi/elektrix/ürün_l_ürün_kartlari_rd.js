if (window.innerWidth < 768 && document.querySelector("#catImg")) {
const processDiscounts = () => {
  const styleId = "custom-discount-style"; // Eklediğimiz stil için bir ID belirleyelim
  if (!document.getElementById(styleId)) {
    const a_list_style = `<style id="${styleId}">
    .col.col-12.text-description.detailLink.blockTitleProduct.text-center{
        text-align: left;
    }
    .ins-product-attributes{
        display: flex !important;
    padding-left: 5px !important;
    }
    .ins-product-discount-container.ins-selectable-element.ins-element-wrap.ins-element-discount.ins-show{
    padding-top: 15px !important;      
    }
       .ins-preview-wrapper-78 .ins-product-attributes{
display: flex !important;
}
  .col.col-10.col-sm-12.col-12.tooltipWrapper.text-center{
      text-align: left;
    margin: 10px 0;
    padding: 0 !important;
  }
    .currentPrice{z
    font-size: 17px !important;
    color: black !important;
    }
    .priceWrapper{
        text-align: left !important;
    }
    .col.passive.productDiscount.ml{
        position: absolute !important;
        top: 5px !important;
        left: 3px !important;
        background: #0F7EBD !important;
        }
        .a_fırsat_wording span{
            background: #EA9025;
    padding: 3px;
    color: white;
    border-radius: 5px;
        }
      </style>`;

    document.head.insertAdjacentHTML("beforeend", a_list_style); // Style öğesini head'e ekliyoruz
  }

  const a_discount = document.querySelectorAll(
    ".col.passive.productDiscount.ml"
  );
  const a_img_container = document.querySelectorAll(
    ".image-wrapper.fl.detailLink"
  );
  const fullContainers = document.querySelectorAll(".col.col-12.p-right.mb");

  // `a_discount` öğelerini içeren `fullContainers` öğelerini bulun
  const discountContainers = Array.from(fullContainers).filter((container) => {
    return Array.from(a_discount).some((discount) =>
      container.contains(discount)
    );
  });

  discountContainers.forEach((container) => {
    // Bu container'ın içindeki `a_discount` öğesini bulun
    const discount = Array.from(a_discount).find((discount) =>
      container.contains(discount)
    );

    // Bu container ile ilişkili `a_img_container` öğesini bulun
    const imgContainer = Array.from(a_img_container).find((imgContainer) =>
      container.contains(imgContainer)
    );

    if (imgContainer && discount) {
      // `a_discount` öğesini `a_img_container` öğesine taşı
      imgContainer.insertAdjacentElement("afterbegin", discount);
    }
  });
};

// popüler ürünlerin indirim arka rengi değişikliği
const elements = document.querySelectorAll(
  ".ins-discount-badge.ins-element-content"
);

elements.forEach((element) => {
  element.style.setProperty("background-color", "#388E3C", "important");
});

// ürün fiyat ve fırsat yazısı düzenleme

const a_popüler_ürünler = document.querySelectorAll(".ins-product-price");
a_popüler_ürünler.forEach((element) => {
  element.style.setProperty("font-size", "17px", "important");
  element.style.setProperty("color", "black", "important");
});

const a_product_info = document.querySelectorAll(".box.col-12.proRowAct");
const a_discount = document.querySelectorAll(".col.passive.productDiscount.ml");
const a_firsat_wording = `<div class="a_fırsat_wording"><span>Fırsatı kaçırma</span></div>`;

a_product_info.forEach((productInfo) => {
  // `a_discount` öğesi içeriyorsa
  const discount = Array.from(a_discount).find((discount) =>
    productInfo.contains(discount)
  );

  if (discount) {
    // `a_fırsat_wording` öğesini `productInfo` öğesinin ilk çocuğundan önce ekle
    productInfo.insertAdjacentHTML("afterbegin", a_firsat_wording);
  }
});

// Sayfa yüklendiğinde ve her kaydırıldığında işlemi çalıştır
window.addEventListener("load", processDiscounts);
window.addEventListener("scroll", () => {
  // Sayfa kaydırıldığında yeni içerikler yüklenmiş olabilir
  processDiscounts();
});

}