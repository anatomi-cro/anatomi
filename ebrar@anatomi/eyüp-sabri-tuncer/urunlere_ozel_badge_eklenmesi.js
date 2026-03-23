const urunlere_ozel_badge_eklenmesi_html = () => {};

const urunlere_ozel_badge_eklenmesi_css = () => {
  const style = `
    <style id="urunlere_ozel_badge_eklenmesi_css">
.anatomi_kalp_badge{
    position: absolute !important;
    top: 8px !important; 
    left: 8px !important;
    width: 27px !important;
    height: 27px !important;
    z-index: 99 !important;
}

}
    </style>
    `;
  const css = document.querySelector("#urunlere_ozel_badge_eklenmesi_css");
  const head = document.querySelector("head");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const urunlere_ozel_badge_eklenmesi_js = () => {
  const products = [
    { id: 1, name: "5'li 16 ml Kolonya - Set 1 - Kurdeleli Hediye&nbsp;Çanta" },
    { id: 2, name: "5'li 16 ml Kolonya - Set 2 - Kurdeleli Hediye Çanta" },
    {
      id: 3,
      name: "5'li 16 ml Kolonya - Citrus Serisi - Kurdeleli Hediye Çanta",
    },
    { id: 4, name: "5'li 16 ml Kolonya - Set 3 - Kurdeleli Hediye Çanta" },
    { id: 5, name: "Pure Love 3'lü Bakım Paketi" },
    { id: 6, name: "Blue Moon 3'lü Bakım Paketi" },
    { id: 7, name: "Love Kisses 3'lü Bakım Paketi" },
    { id: 8, name: "Sevgililer Günü Özel Bakım Seti-5" },
    { id: 9, name: "Sevgililer Günü Özel Bakım Seti-4" },
    { id: 10, name: "Sevgililer Günü Özel Bakım Seti-3" },
    { id: 11, name: "Erkek Bakım Seti-1" },
    { id: 12, name: "Frambuazlı Sirke Saç Bakım Seti" },
    { id: 13, name: "Sevgililer Günü Özel Bakım Seti-1" },
    { id: 14, name: "Beyaz Çay Kolonyası 200 ml - Cam Şişe" },
    { id: 15, name: "Bebek Kolonyası 190 ml" },
    { id: 16, name: "Tütün Kolonyası 5 lt - Bag in Box" },
    { id: 17, name: "Beyaz Çay Kolonyası 5 lt - Bag in Box" },
    { id: 18, name: "Empress El ve Vücut Kremi 50 ml Tüp" },
    { id: 19, name: "Indian Oud Kolonyası 185 ml - Cam Şişe" },
    { id: 20, name: "Velten Oud Parfümlü Kolonya 100 ml - Cam Şişe" },
    { id: 21, name: "Oud Istanbul Doğal Zeytinyağlı Losyon 250 ml" },
    { id: 22, name: "Rose Oud Doğal Zeytinyağlı Losyon 250 ml" },
    { id: 23, name: "Floriental Oud Parfüm 100 ml - Cam Şişe" },
    { id: 24, name: "Deluxoud Parfüm 100 ml - Cam Şişe" },
    { id: 25, name: "Efgalino Parfüm 100 ml - Cam Şişe" },
    { id: 26, name: "Leather Moon Parfüm 100 ml - Cam Şişe" },
    { id: 27, name: "Great Smoke Parfüm 100 ml - Cam Şişe" },
    { id: 28, name: "BlackOud Parfüm 100 ml - Cam Şişe" },
    { id: 29, name: "Hawaii Ananas El ve Vücut Peelingi - 400 gr" },
    { id: 30, name: "Sevgililer Günü Özel Bakım Seti-2" },
  ];

  const normalizeText = (text) => {
    return text
      .replace(/&nbsp;/g, " ")
      .replace(/\u00A0/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  };

  const itemContainer = document.querySelectorAll(".ItemOrj");

  let found = false;

  itemContainer.forEach((item) => {
    const productNameEl = item.querySelector(".productName a");
    if (!productNameEl) return;

    const productName = normalizeText(productNameEl.textContent);

    const product = products.find((p) => normalizeText(p.name) === productName);

    if (!product) return;

    found = true;

    const imageContainer = item.querySelector(".productImage");
    if (!imageContainer) return;

    if (imageContainer.querySelector(".ozel-badge")) return;

    imageContainer.style.position = "relative";

    const badge = document.createElement("img");
    badge.className = "anatomi_kalp_badge";
    badge.src = "https://i.hizliresim.com/8477izz.png";

    imageContainer.appendChild(badge);
  });

  if (!found) {
    console.log("bulunmadı");
  }
};

const urunlere_ozel_badge_eklenmesi_init = () => {
  urunlere_ozel_badge_eklenmesi_html();
  urunlere_ozel_badge_eklenmesi_css();
  urunlere_ozel_badge_eklenmesi_js();
};

const urunlere_ozel_badge_eklenmesi_condition = () => {
  return true;
};

setInterval(() => {
  if (urunlere_ozel_badge_eklenmesi_condition()) {
    urunlere_ozel_badge_eklenmesi_init();
  }
}, 50);
