const anasayfa_ikon_change_html = () => {
  const html = `
`;
};
const anasayfa_ikon_change_css = () => {
  const style = `
<style>
</style>
`;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};
const anasayfa_ikon_change_js = () => {

         const trafikLink = document.querySelector(
           "#app > div.product-icon-btn-container.container > div.product-icon-btns.opened > a.product-icon-btn.traffic"
         );
         if (trafikLink) {
           trafikLink.classList.add(
             "anatomi_ürün_kartları_link", "anatomi_ürün_kartları_link_trafik"
           );
         }

         const kaskoLink = document.querySelector(
           "#app > div.product-icon-btn-container.container > div.product-icon-btns.opened > a.product-icon-btn.casco"
         );
         if (kaskoLink) {
           kaskoLink.classList.add(
             "anatomi_ürün_kartları_link", "anatomi_ürün_kartları_link_kasko"
           );
         }

         const saglikLink = document.querySelector(
           "#app > div.product-icon-btn-container.container > div.product-icon-btns.opened > a.product-icon-btn.health"
         );
         if (saglikLink) {
           saglikLink.classList.add(
             "anatomi_ürün_kartları_link", "anatomi_ürün_kartları_link_saglik"
           );
         }

         const daskLink = document.querySelector(
           "#app > div.product-icon-btn-container.container > div.product-icon-btns.opened > a.product-icon-btn.dask"
         );
         if (daskLink) {
           daskLink.classList.add(
             "anatomi_ürün_kartları_link", "anatomi_ürün_kartları_link_dask"
           );
         }

         const aracımaSigortaLink = document.querySelector(
           "#app > div.product-icon-btn-container.container > div.product-icon-btns.opened > a.product-icon-btn.aracima-garanti"
         );
         if (aracımaSigortaLink) {
           aracımaSigortaLink.classList.add(
             "anatomi_ürün_kartları_link", "anatomi_ürün_kartları_link_aracımaSigorta"
           );
         }
         const seyahatSigortaLink = document.querySelector(
           "#app > div.product-icon-btn-container.container > div.product-icon-btns.opened > a.product-icon-btn.travel"
         );
         if (seyahatSigortaLink) {
           seyahatSigortaLink.classList.add(
             "anatomi_ürün_kartları_link", "anatomi_ürün_kartları_link_seyahat"
           );
         }
         const primHayatSigortasıLink = document.querySelector(
           "#app > div.product-icon-btn-container.container > div.product-icon-btns.opened > a.product-icon-btn.prim-iadeli"
         );
         if (primHayatSigortasıLink) {
           primHayatSigortasıLink.classList.add(
             "anatomi_ürün_kartları_link", "anatomi_ürün_kartları_link_primHayat"
           );
         }
         const konutLink = document.querySelector(
           "#app > div.product-icon-btn-container.container > div.product-icon-btns.opened > a.product-icon-btn.konut-sigortasi"
         );
         if (konutLink) {
           konutLink.classList.add(
             "anatomi_ürün_kartları_link", "anatomi_ürün_kartları_link_konut"
           );
         }
         const immLink = document.querySelector(
           "#app > div.product-icon-btn-container.container > div.product-icon-btns.opened > a.product-icon-btn.imm-sigortasi"
         );
         if (immLink) {
           immLink.classList.add(
             "anatomi_ürün_kartları_link", "anatomi_ürün_kartları_link_imm"
           );
         }
         const motorsikletLink = document.querySelector(
           "#app > div.product-icon-btn-container.container > div.product-icon-btns.opened > a.product-icon-btn.moto.motoPopup"
         );
         if (motorsikletLink) {
           motorsikletLink.classList.add(
             "anatomi_ürün_kartları_link", "anatomi_ürün_kartları_link_motorsiklet"
           );
         }





  const trafikIcon = document.querySelector(
    "#app > div.product-icon-btn-container.container > div.product-icon-btns.opened > a.product-icon-btn.traffic > span.icon > img"
  );
  if (trafikIcon) {
    trafikIcon.setAttribute(
      "src",
      "https://anatomi.s3.eu-north-1.amazonaws.com/sigortalad%C4%B1m+trafik+sigortas%C4%B1+icon.png"
    );
    trafikIcon.setAttribute("style", " height: 50px !important;");
  }

  const kaskoIcon = document.querySelector(
    "#app > div.product-icon-btn-container.container > div.product-icon-btns.opened > a.product-icon-btn.casco > span.icon > img"
  );
  if (kaskoIcon) {
    kaskoIcon.setAttribute(
      "src",
      "https://anatomi.s3.eu-north-1.amazonaws.com/sigortalad%C4%B1m+kasko+icon.png "
    );
    kaskoIcon.setAttribute(
      "style",
      "width: 100px !important; height: 45px !important;"
    );
  }

  const saglikIcon = document.querySelector(
    "#app > div.product-icon-btn-container.container > div.product-icon-btns.opened > a.product-icon-btn.health > span.icon > img"
  );
  if (saglikIcon) {
    saglikIcon.setAttribute(
      "src",
      "https://anatomi.s3.eu-north-1.amazonaws.com/sigortalad%C4%B1m+sa%C4%9Fl%C4%B1k+sigortas%C4%B1+icon.png"
    );
    saglikIcon.setAttribute(
      "style",
      "width: 100% !important; height: 50px !important;"
    );
  }

  const daskIcon = document.querySelector(
    "#app > div.product-icon-btn-container.container > div.product-icon-btns.opened > a.product-icon-btn.dask > span.icon > img"
  );
  if (daskIcon) {
    daskIcon.setAttribute(
      "src",
      "https://anatomi.s3.eu-north-1.amazonaws.com/sigortalad%C4%B1m+dask+icon.png"
    );
    daskIcon.setAttribute("style", " height: auto !important;");
  }

  const aracımaSigorta = document.querySelector(
    "#app > div.product-icon-btn-container.container > div.product-icon-btns.opened > a.product-icon-btn.aracima-garanti > span.icon > img"
  );
  if (aracımaSigorta) {
    aracımaSigorta.setAttribute(
      "src",
      "https://anatomi.s3.eu-north-1.amazonaws.com/sigortalad%C4%B1m+arac%C4%B1ma+sigorta+icon.png"
    );
  }

  const seyahatSigorta = document.querySelector(
    "#app > div.product-icon-btn-container.container > div.product-icon-btns.opened > a.product-icon-btn.travel > span.icon > img"
  );
  if (seyahatSigorta) {
    seyahatSigorta.setAttribute(
      "src",
      "https://anatomi.s3.eu-north-1.amazonaws.com/sigortalad%C4%B1m+seyahat+sigortas%C4%B1+icon.png"
    );
    seyahatSigorta.setAttribute(
      "style",
      "width: 100% !important; height: 50px!important;"
    );
  }

  const primHayatSigortası = document.querySelector(
    "#app > div.product-icon-btn-container.container > div.product-icon-btns.opened > a.product-icon-btn.prim-iadeli > span.icon > img"
  );
  if (primHayatSigortası) {
    primHayatSigortası.setAttribute(
      "src",
      "https://anatomi.s3.eu-north-1.amazonaws.com/sigortalad%C4%B1m+prim+iade+icon.png"
    );
    primHayatSigortası.setAttribute(
      "style",
      "width: 100% !important; height: 70px !important;"
    );
  }

  const konutSigortası = document.querySelector(
    "#app > div.product-icon-btn-container.container > div.product-icon-btns.opened > a.product-icon-btn.konut-sigortasi > span.icon > img"
  );
  if (konutSigortası) {
    konutSigortası.setAttribute(
      "src",
      "https://anatomi.s3.eu-north-1.amazonaws.com/sigortalad%C4%B1m+konut+sigortas%C4%B1+icon.png"
    );
    konutSigortası.setAttribute("style", " height: 70px !important;");
  }

  const imm = document.querySelector(
    "#app > div.product-icon-btn-container.container > div.product-icon-btns.opened > a.product-icon-btn.imm-sigortasi > span.icon > img"
  );
  if (imm) {
    imm.setAttribute(
      "src",
      "https://anatomi.s3.eu-north-1.amazonaws.com/sigortalad%C4%B1m+imm+icon.png"
    );
    imm.setAttribute(
      "style",
      "width: 100% !important; height: 50px !important;"
    );
  }

  const motorsikletSigortası = document.querySelector(
    "#app > div.product-icon-btn-container.container > div.product-icon-btns.opened > a.product-icon-btn.moto.motoPopup > span.icon > img"
  );
  if (motorsikletSigortası) {
    motorsikletSigortası.setAttribute(
      "src",
      "https://anatomi.s3.eu-north-1.amazonaws.com/sigortalad%C4%B1m+motorsiklet+sigortas%C4%B1+icon.png"
    );
    motorsikletSigortası.setAttribute(
      "style",
      " width: 100% !important; height: 50px !important;"
    );
  }

  const kaskoSpan = document.querySelector(
    "#app > div.product-icon-btn-container.container > div.product-icon-btns.opened > a.product-icon-btn.casco > span.left"
  );
  if (kaskoSpan) {
    kaskoSpan.setAttribute("style", "margin-top: 0px !important");
  }
};

const anasayfa_ikon_change_init = () => {
  anasayfa_ikon_change_html();
  anasayfa_ikon_change_css();
  anasayfa_ikon_change_js();
};
const anasayfa_ikon_change_condition = () => {
   return window.innerWidth <= 768;
};
if (anasayfa_ikon_change_condition()) {
  anasayfa_ikon_change_init();
}
