const hero_alan_redesign_html = () => {
     const html = `
      <h3 class="anatomi-banner-title">100 Binden Fazla İşletmenin e-Dönüşümde
      <span class="anatomi-banner-span">Çözüm Adresi</span>
      </h3>
    
`;
 const targetElement = document.querySelector("body > main > section.uk-section.uk-position-relative.section-banner-main > div > div > div.uk-width-1-2\\@m.uk-flex.uk-flex-column.uk-first-column.notranslate")
  if (targetElement) {
    targetElement.insertAdjacentHTML("afterbegin", html);
  }
};

const hero_alan_redesign_css = () => {
    const style = `
      <style>    
     .anatomi-banner-title {
        font-size: 45px !important;
         opacity: 0;
      transform: translateY(30px);
      animation: fadeInUp 1s ease-out forwards;
        }
       @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
            
    .anatomi-banner-span {
        color: #974192 !important;
        margin-left: 10px;
    }
        body > main > section.uk-section.uk-position-relative.section-banner-main > div > div{
          justify-content: space-between !important;
        }

    
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const hero_alan_redesign_js = () => {

  const bannerH3 = document.querySelector("body > main > section.uk-section.uk-position-relative.section-banner-main > div > div > div.uk-width-1-2\\@m.uk-flex.uk-flex-column.uk-first-column.notranslate > h3:not(.anatomi-banner-title)")
  if (bannerH3) {
    bannerH3.style.display = "none";
  }
  const bannerSpan = document.querySelector("body > main > section.uk-section.uk-position-relative.section-banner-main > div > div > div.uk-width-1-2\\@m.uk-flex.uk-flex-column.uk-first-column.notranslate > span:not(.anatomi-banner-span)")
  if (bannerSpan) {
    bannerSpan.style.display = "none";
    }

  const img = document.querySelector("body > main > section.uk-section.uk-position-relative.section-banner-main > div > picture > img")
  if (img) {
    img.style.display = "none";
  }
};


const hero_alan_redesign_init = () => {
    hero_alan_redesign_html();
    hero_alan_redesign_css();
    hero_alan_redesign_js();
};

const hero_alan_redesign_condition = () => {
    const device = window.innerWidth > 768;
    return device;
};


if (hero_alan_redesign_condition()) {
    hero_alan_redesign_init();
}
