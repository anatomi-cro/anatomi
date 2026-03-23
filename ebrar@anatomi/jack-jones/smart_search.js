const smart_search_html = () => {};

const smart_search_css = () => {
    const style = `
      <style id="anatomi_smart_search_css">    
      #__layout > div > div:nth-child(6) > div:nth-child(2) > div > article > div.burger-menu-advanced__search > span > div > div.search-bar__suggestion-container {
          display: none !important;
      }
        .smart-suggestions {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding: 15px 0;
        }

        .smart-suggestions::-webkit-scrollbar {
          height: 6px;
        }

        .smart-suggestions::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 4px;
        }
        .anatomi_smart_suggestion_btn:nth-child(1) {
          margin-left: 10px;
        }
        .anatomi_smart_suggestion_btn {
          border: none;
          border-radius: 8px;
          padding: 10px 14px;
          white-space: nowrap;
          scroll-snap-align: start;
          background-color: #f2f2f2;
          font-size: 14px;
          text-transform: capitalize;
          cursor: pointer;
        }
          .smart-product-suggestions {
            display: flex;
        justify-content: flex-start;
        padding-left: 20px;
        margin-bottom: 20px;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 12px;
      }

      .smart-product-card {
        width: 45%;
        border: 1px solid #eee;
        border-radius: 8px;
        padding: 8px;
        box-sizing: border-box;
        background: #fff;
      }

      .smart-product-card img {
        width: 100%;
        height: auto;
        border-radius: 4px;
      }

      .smart-product-name {
        margin-top: 6px;
        font-size: 14px;
        font-weight: bold;
      }

      .smart-product-price {
        font-size: 13px;
        color: #555;
      }
      </style>
    `;
    const head = document.querySelector("head");
    const css = document.querySelector("#anatomi_smart_search_css");
    if (!css) {
      head.insertAdjacentHTML("beforeend", style);
    }
};

const renderRandomProducts = () => {
  const targetElement = document.querySelector("#__layout > div > div:nth-child(6) > div:nth-child(2) > div > article > div.burger-menu-advanced__search");
  if (!targetElement) return;

  const productsData = [
    { name: "Kadın Balon Etek Mini Elbise - Forest", price: "1.390,00 TL", img: "https://i.hizliresim.com/8zj6eys.jpg?_gl=1*qr0xip*_ga*MTQ4NTY0OTQ4Mi4xNzQxMjg5ODk2*_ga_M9ZRXYS2YN*czE3NTE0NjIyMjgkbzEzJGcxJHQxNzUxNDYyNzIzJGoxMyRsMCRoMA..",  url: "https://www.jackjones.com.tr/tr-tr/product/12285781_2161/stre%C3%A7-kal%C4%B1p-s%C4%B1f%C4%B1r-yaka-k%C4%B1sa-elbise" },
    { name: "Kadın Düğmeli Yelek - Ellis", price: "1.590,00 TL", img: "https://i.hizliresim.com/gq1kokt.jpg?_gl=1*dj6w34*_ga*MTQ4NTY0OTQ4Mi4xNzQxMjg5ODk2*_ga_M9ZRXYS2YN*czE3NTE0NjIyMjgkbzEzJGcxJHQxNzUxNDYyNTI3JGo2JGwwJGgw",  url: "https://www.jackjones.com.tr/tr-tr/product/12260411_1242/oezel-dikim-yelek" },
    { name: "Erkek RDD Logo Baskılı Tişört - Daniel", price: "490,00 TL", img: "https://i.hizliresim.com/hx7q6pa.jpg?_gl=1*1ya2yac*_ga*MTQ4NTY0OTQ4Mi4xNzQxMjg5ODk2*_ga_M9ZRXYS2YN*czE3NTE0NjIyMjgkbzEzJGcxJHQxNzUxNDYyNTUwJGo1NCRsMCRoMA..",  url: "https://www.jackjones.com.tr/tr-tr/product/12232815_2381/erkek-rdd-logo-bask%C4%B1l%C4%B1-tisoert-daniel" },
    { name: "Erkek Keten Karışımlı Gömlek - Breeze", price: "1.390,00 TL", img: "https://i.hizliresim.com/11wkxfj.jpg?_gl=1*1ntfg1r*_ga*MTQ4NTY0OTQ4Mi4xNzQxMjg5ODk2*_ga_M9ZRXYS2YN*czE3NTE0NjIyMjgkbzEzJGcxJHQxNzUxNDYyNTgzJGoyMSRsMCRoMA..",  url: "https://www.jackjones.com.tr/tr-tr/product/12269057_2206/geni%C5%9F-kal%C4%B1p-goemlek-yaka-goemlek" },
    { name: "Normal Kalıp Bisiklet Yaka Tişört", price: "890,00 TL", img: "https://i.hizliresim.com/f2evrnw.jpg?_gl=1*1ptyiry*_ga*MTQ4NTY0OTQ4Mi4xNzQxMjg5ODk2*_ga_M9ZRXYS2YN*czE3NTE0NjIyMjgkbzEzJGcxJHQxNzUxNDYyNzQzJGo1NCRsMCRoMA.." ,  url: "https://www.jackjones.com.tr/tr-tr/product/12281810_2161/normal-kal%C4%B1p-bisiklet-yaka-ti%C5%9Foert"},
    { name: "Erkek Kısa Kollu Gömlek - Enzo", price: "1.790,00 TL", img: "https://i.hizliresim.com/mqzep7c.jpg?_gl=1*1c9hcxk*_ga*MTQ4NTY0OTQ4Mi4xNzQxMjg5ODk2*_ga_M9ZRXYS2YN*czE3NTE0NjIyMjgkbzEzJGcxJHQxNzUxNDYyNjI0JGo0MiRsMCRoMA..",  url: "https://www.jackjones.com.tr/tr-tr/product/12268457_2077/rahat-kal%C4%B1p-resort-yaka-goemlek" },
    { name: "Kadın Müslin Şort - Pia", price: "1390,00 TL", img: "https://i.hizliresim.com/tazg6cy.jpg?_gl=1*1nfqqc1*_ga*MTQ4NTY0OTQ4Mi4xNzQxMjg5ODk2*_ga_M9ZRXYS2YN*czE3NTE0NjIyMjgkbzEzJGcxJHQxNzUxNDYyNjQ5JGoxNyRsMCRoMA.." ,  url: "https://www.jackjones.com.tr/tr-tr/product/12277909_2161/geni%C5%9F-bacak-kal%C4%B1p-%C5%9Fortlar"},
    { name: "Kadın Denim Elbise - Abra", price: "1.290,00 TL", img: "https://i.hizliresim.com/izzcygu.jpg?_gl=1*1fn1yhg*_ga*MTQ4NTY0OTQ4Mi4xNzQxMjg5ODk2*_ga_M9ZRXYS2YN*czE3NTE0NjIyMjgkbzEzJGcxJHQxNzUxNDYyNjc2JGo2MCRsMCRoMA..", url: "https://www.jackjones.com.tr/tr-tr/product/12277028_2115/slim-kal%C4%B1p-s%C4%B1f%C4%B1r-yaka-orta-elbise" }
  ];

  let productContainer = document.querySelector(".smart-product-suggestions");
  if (productContainer) productContainer.remove();

  const randomProducts = productsData.sort(() => 0.5 - Math.random()).slice(0, 4);

  productContainer = document.createElement("div");
  productContainer.className = "smart-product-suggestions";

  const title = document.createElement("p");
  title.textContent = "Diğer ürünleri incelemek ister misin?";
  title.style.fontSize = "16px";
  title.style.fontWeight = "bold";
  title.style.marginTop = "20px";
  title.style.marginBottom = "10px";
  productContainer.appendChild(title);

  randomProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "smart-product-card";

    const link = document.createElement("a");
    link.href = product.url;
    link.target = "_blank"; 
     const secondWord = product.name.split(" ")[1]?.toLowerCase().replace(/[^a-zğüşöçıİĞÜŞÖÇ0-9]/gi, "") || "default";
  link.className = `smart-product-link ${secondWord}`;

    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.name;

    link.appendChild(img);

    const name = document.createElement("div");
    name.className = "smart-product-name";
    name.textContent = product.name;

    const price = document.createElement("div");
    price.className = "smart-product-price";
    price.textContent = product.price;

    card.appendChild(link);
    card.appendChild(name);
    card.appendChild(price);

    productContainer.appendChild(card);
  });

  targetElement.appendChild(productContainer);
};

const smart_search_js = () => {
  const input = document.querySelector(
    "#__layout > div > div:nth-child(6) > div:nth-child(2) > div > article > div.burger-menu-advanced__search > span > div > input"
  );
  const targetElement = document.querySelector("#__layout > div > div:nth-child(6) > div:nth-child(2) > div > article > div.burger-menu-advanced__search")

  if (!input || !targetElement) return;

  let container = document.querySelector(".smart-suggestions");
  if (!container) {
    container = document.createElement("div");
    container.className = "smart-suggestions";
    targetElement.appendChild(container);
  }

 const suggestionsMap = {
  keten: [
    { text: "keten şort", url: "https://www.jackjones.com.tr/tr-tr/arama?q=keten%20%C5%9Fort" },
    { text: "keten elbise", url: "https://www.jackjones.com.tr/tr-tr/arama?q=keten%20elbise" },
    { text: "keten gömlek", url: "https://www.jackjones.com.tr/tr-tr/arama?q=keten%20g%C3%B6mlek" },
    { text: "keten pantolon", url: "https://www.jackjones.com.tr/tr-tr/arama?q=keten%20pantolon" },
  ],
  elbise: [
    { text: "mini elbise", url: "https://www.jackjones.com.tr/tr-tr/arama?q=mini%20elbise" },
    { text: "denim elbise", url: "https://www.jackjones.com.tr/tr-tr/arama?q=denim%20elbise" },
    { text: "askılı elbise", url: "https://www.jackjones.com.tr/tr-tr/arama?q=ask%C4%B1l%C4%B1%20elbise" },
    { text: "saten elbise", url: "https://www.jackjones.com.tr/tr-tr/arama?q=saten%20elbise" },
  ],
  tişört: [
    { text: "baskılı", url: "https://www.jackjones.com.tr/tr-tr/arama?q=bask%C4%B1l%C4%B1%20ti%C5%9F%C3%B6rt" },
    { text: "polo", url: "https://www.jackjones.com.tr/tr-tr/arama?q=polo%20ti%C5%9F%C3%B6rt" },
    { text: "düz", url: "https://www.jackjones.com.tr/tr-tr/arama?q=d%C3%BCz%20ti%C5%9F%C3%B6rt" },
    { text: "kadın tişört", url: "https://www.jackjones.com.tr/tr-tr/arama?q=kad%C4%B1n%20ti%C5%9F%C3%B6rt" },
    { text: "kadın bluz", url: "https://www.jackjones.com.tr/tr-tr/arama?q=kad%C4%B1n%20bluz" },
  ],
  şort: [
    { text: "sweat şort", url: "https://www.jackjones.com.tr/tr-tr/arama?q=sweat%20%C5%9Fort" },
    { text: "dokuma şort", url: "https://www.jackjones.com.tr/tr-tr/arama?q=dokuma%20%C5%9Fort" },
    { text: "denim şort", url: "https://www.jackjones.com.tr/tr-tr/arama?q=denim%20%C5%9Fort" },
    { text: "deniz şort", url: "https://www.jackjones.com.tr/tr-tr/erkek-giyim/sort/deniz-sort" },
    { text: "kadın şort", url: "https://www.jackjones.com.tr/tr-tr/arama?q=kad%C4%B1n%20%C5%9Fort" },
  ],
  boxer: [
    { text: "bambu", url: "https://www.jackjones.com.tr/tr-tr/erkek-giyim/boxer/bambu-boxer" },
    { text: "tekli", url: "https://www.jackjones.com.tr/tr-tr/erkek-giyim/boxer/tekli" },
    { text: "3lü paket", url: "https://www.jackjones.com.tr/tr-tr/erkek-giyim/boxer/3-lu-paket" },
    { text: "5li paket", url: "https://www.jackjones.com.tr/tr-tr/erkek-giyim/boxer/5-li-paket" },
  ],
};

if (!input.dataset.smartSearchAttached) {
input.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  container.innerHTML = "";
  let matchFound = false;
  const existingProductContainer = document.querySelector(".smart-product-suggestions");
  if (existingProductContainer) existingProductContainer.remove();

  Object.keys(suggestionsMap).forEach((key) => {
    if (value.includes(key)) {
      matchFound = true;
      suggestionsMap[key].forEach(({ text, url }) => {
        const btn = document.createElement("button");
        btn.textContent = text;
        const formattedTextClass = text.toLowerCase().replace(/\s+/g, "-");
          btn.className = `anatomi_smart_suggestion_btn ${formattedTextClass}`;
        btn.addEventListener("click", () => {
          window.location.href = url;
        });
        container.appendChild(btn);
      });
    }
  });

  if (matchFound) {
    renderRandomProducts();
  }
});
};
}
const smart_search_init = () => {
  smart_search_html();
  smart_search_css();
  smart_search_js();
};

const smart_search_condition = () => {
  const check = document.querySelector("#__layout > div > div:nth-child(6) > div:nth-child(2) > div")
  const device = window.innerWidth <= 768;
  return device && check;
};

let initialized = false;
const initInterval = setInterval(() => {
  if (smart_search_condition()) {
    if (!initialized) {
      smart_search_init();
      initialized = true;
    }
  } else {
    initialized = false;
  }
}, 1000);
