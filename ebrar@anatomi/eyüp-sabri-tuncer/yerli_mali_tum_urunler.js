const yerli_mali_tum_urunler_html = () => {};

const yerli_mali_tum_urunler_css = () => {
  const style = `
    <style id="anatomi-yerliMali-tum-urunler-css">
      .productImage {
        position: relative;
      }
      .anatomi-yerli-mali-badge {
        position: absolute;
        top: auto !important;
        bottom: 4% !important;
        left: auto !important;
        right: 3% !important;
        width: 60px !important;
        height: 60px !important;
        z-index: 99 !important;
      }

      @media screen and (max-width: 768px) {
        .anatomi-yerli-mali-badge {
          width: 50px !important;
          height: 50px !important;
        }
      }
    </style>
        `;

  const head = document.querySelector("head");
  const styleSheet = document.querySelector(
    "#anatomi-yerliMali-tum-urunler-css",
  );
  if (!styleSheet) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const yerli_mali_tum_urunler_js = () => {
  const parents = document.querySelectorAll(".productItem");
  if (!parents.length) return;

  parents.forEach((parent) => {
    const img = parent.querySelector(".productImage");
    if (!img) return;

    // Daha önce eklenmişse tekrar ekleme
    if (img.querySelector(".anatomi-yerli-mali-badge")) return;

    const badge = document.createElement("img");
    badge.classList.add("anatomi-yerli-mali-badge");
    badge.src =
      "https://cro-anatomi.s3.eu-north-1.amazonaws.com/eyu%CC%88p-sabri-tuncer-yerli-mali-icon.png";
    badge.alt = "Yerli Malı";

    img.appendChild(badge);
  });
};

const yerli_mali_tum_urunler_init = () => {
  yerli_mali_tum_urunler_html();
  yerli_mali_tum_urunler_css();
  yerli_mali_tum_urunler_js();
};

const yerli_mali_tum_urunler_conditions = () => {
  const phone = matchMedia("(max-width: 768px)").matches;
  const desktop = matchMedia("(min-width: 768px)").matches;
  const location = document.querySelector("#ProductListMainContainer");
  return (desktop || phone) && location;
};

setInterval(() => {
  if (yerli_mali_tum_urunler_conditions()) {
    yerli_mali_tum_urunler_init();
  }
}, 50);
