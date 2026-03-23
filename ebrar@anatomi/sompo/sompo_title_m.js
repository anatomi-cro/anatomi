const sompo_title_html = () => {
  const html = `
    `;
};
const sompo_title_css = () => {
  const style = `
      <style>
      .anatomi_promo_section {
          height: 100% !important;
      }
      .anatomi_promo_content {
          flex-direction: column;
      }
      .anatomi_promo_image {
          position: unset !important;
      }
      .anatomi_promo_title {
          display: block !important;
          line-height: 30px !important;
          padding-top: 20px;
      }
      .anatomi_promo_desc {
          display: block !important;
          padding: 0px 10px !important;
      }
    </style>
    `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};
const sompo_title_js = () => {
  generatePromoTitle = () => {
    const promoSection = document.querySelector("body > main > section.promo");
    if (
      promoSection &&
      !promoSection.classList.contains("anatomi_promo_section")
    ) {
      promoSection.classList.add("anatomi_promo_section");
    }
    const promoContent = document.querySelector(
      "body > main > section.promo.anatomi_promo_section > div.promo__content"
    );
    if (
      promoContent &&
      !promoContent.classList.contains("anatomi_promo_content")
    ) {
      promoContent.classList.add("anatomi_promo_content");
    }
    const promoImage = document.querySelector(
      "body > main > section.promo.anatomi_promo_section > div.promo__content > picture"
    );
    if (promoImage && !promoImage.classList.contains("anatomi_promo_image")) {
      promoImage.classList.add("anatomi_promo_image");
    }
    const promoTitle = document.querySelector(
      "body > main > section.promo > div.promo__content > div > article.promo__item.-active > h1"
    );
    if (promoTitle && !promoTitle.classList.contains("anatomi_promo_title")) {
      promoTitle.classList.add("anatomi_promo_title");
    }
    const promoDesc = document.querySelector(
      "body > main > section.promo > div.promo__content > div > article.promo__item.-active > p"
    );
    if (promoDesc && !promoDesc.classList.contains("anatomi_promo_desc")) {
      promoDesc.classList.add("anatomi_promo_desc");
      promoDesc.textContent =
        "Kurumsal ve bireysel sigortacılık sektörünün öncü markası Sompo’dan trafik sigortası, kasko, tamamlayıcı sağlık sigortası, DASK ve yurt dışı seyahat sigortası teklifi almak için tıklayın.";
    }
  };

  generatePromoTitle();
};
const sompo_title_init = () => {
  sompo_title_html();
  sompo_title_css();
  sompo_title_js();
};
const sompo_title_condition = () => {
  const device = window.innerWidth <= 768;
  return device;
};
if (sompo_title_condition()) {
  sompo_title_init();
}
