const ürünler = [
  {img: "https://r.resimlink.com/odZL7.jpg", name: "Erkek Minimal Logo Baskılı Tişört - Brandy", price: "790,00 TL",  href: "https://www.jackjones.com.tr/tr-tr/product/12279100_2077/normal-kal%C4%B1p-bisiklet-yaka-ti%C5%9Foert"},
  {img: "https://r.resimlink.com/VufXT.jpg", name: "Erkek Minimal Logo Baskılı Tişört - Brandy", price: "790,00 TL",  href: "https://www.jackjones.com.tr/tr-tr/product/12279100_2161/normal-kal%C4%B1p-bisiklet-yaka-ti%C5%9Foert"},
  {img: "https://r.resimlink.com/qLWusAw.jpg", name: "Erkek Mike Original 556 Comfort Fit Jean", price: "2.190,99 TL",  href: "https://www.jackjones.com.tr/tr-tr/product/12269527_3561/kademeli-kal%C4%B1p-orta-bel-kot"},
  {img: "https://r.resimlink.com/JzQUa8y.jpg", name: "Erkek Minimal Logo Baskılı Tişört - Brandy", price: "790,00 TL",  href: "https://www.jackjones.com.tr/tr-tr/product/12279100_1717/normal-kal%C4%B1p-bisiklet-yaka-ti%C5%9Foert"},
  {img: "https://r.resimlink.com/KlNJ4.jpg", name: "Erkek Minimal Logo Baskılı Tişört - Brandy", price: "790,00 TL",  href: "https://www.jackjones.com.tr/tr-tr/product/12279100_2206/normal-kal%C4%B1p-bisiklet-yaka-ti%C5%9Foert"}
];
const sepet_bosken_urun_ekleme_html = () => {
  const parentElement = document.querySelector("#__layout > div > div:nth-child(6) > div:nth-child(2) > div > article > div")
  if (!parentElement || document.querySelector(".anatomi_emptyCartProducts")) return;
  const html = `
    <div class="anatomi_emptyCartProducts">
    <h3>Yeni Gelenler</h3>
      <div class="anatomi_products_wrapper">
        ${ürünler.map(u => `
          <div class="anatomi_product_item">
           <a class="anatomi_product_item" href="${u.href}">
            <img src="${u.img}" alt="${u.name}" />
            <div class="anatomi_product_name">${u.name}</div>
            <div class="anatomi_product_price">${u.price}</div>
           </a>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  parentElement.insertAdjacentHTML("beforeend", html);
};
const sepet_bosken_urun_ekleme_css = () => {
  const style = `
    <style>
      .anatomi_emptyCartProducts { overflow-x: auto; padding: 10px 15px; }
      .anatomi_products_wrapper { display: flex; gap: 10px; }
      .anatomi_product_item {
        flex: 0 0 48%; 
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 5px;
        box-sizing: border-box;
      }
      .anatomi_products_wrapper .anatomi_product_item:nth-child(3) { margin-right: 20px; }
      .anatomi_product_item img { width: 100%; height: auto; object-fit: cover; margin-bottom: 5px; }
      .anatomi_product_name { font-size: 14px;  margin-bottom: 2px; }
      .anatomi_product_price { font-weight: bold; font-size: 14px; text-align: center; }
    </style>
  `;
  document.head.insertAdjacentHTML("beforeend", style);
};
const sepet_bosken_urun_ekleme_init = () => {
  sepet_bosken_urun_ekleme_html();
  sepet_bosken_urun_ekleme_css();
};
const sepet_bosken_urun_ekleme_condition = () => {
  const element = document.querySelector("#__layout > div > div:nth-child(6) > div:nth-child(2) > div > article > div > article");
  const device = window.innerWidth <= 768;
  return device && element;
};
setInterval(() => {
  if (sepet_bosken_urun_ekleme_condition()) {
    sepet_bosken_urun_ekleme_init();
  }
}, 200);
