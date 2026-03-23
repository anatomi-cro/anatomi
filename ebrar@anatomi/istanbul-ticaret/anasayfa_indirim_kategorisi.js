const anasayfa_indirim_kategorisi_html = () => {};

const anasayfa_indirim_kategorisi_css = () => {
    const style = `
      <style>    
      .anatomi_indirim_container{
          border: 1px solid;
          border-color: var(--border-light) !important;
          border-radius: var(--border-radius) !important;
          width: 36px;
          height: 36px;
          position: relative;
          display: flex;
    justify-content: center;
    align-items: center;
      }

  .anatomi_discount_badge {
   position: absolute;
    top: -7px;
    right: -5px;
    background-color: #E97925;
    color: white;
    font-size: 10px;
    font-weight: bold;
    padding: 7px;
    border-radius: 50%;
    width: 8px;
    height: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
    .anatomi_product_badge {
    position: absolute;
    top: 45px;
    right: -105px;
    width: 100vw;
    height: fit-content;
    background-color: white;
    border: 1px solid #ddd;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    z-index: 99;
}

    .anatomi_item_container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        gap: 10px;
    }
    .anatomi_product_image{
        width: 80px;
        border: 1px solid;
        border-color: var(--border-light) !important;
        border-radius: var(--border-radius) !important;

    }
    .anatomi_product_title{
        font-size: 11px;
        width: 70%;
    }
    .current-price {
    color: #E97925;
    font-weight: bold;
  }
    .discounted-price {
    color: var(--text-light) !important;
    text-decoration: line-through;
  }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const anasayfa_indirim_kategorisi_js = () => {

    const targetElement = document.querySelector("#header-main > div > div > div.col-auto.ml-auto > div")
    const indirimContainer = document.createElement("div");
    indirimContainer.classList.add("anatomi_indirim_container");

    const indirimImage = document.createElement("img");
    indirimImage.src = "https://r.resimlink.com/uSDYIxV.png"; 
    indirimImage.alt = "İndirim Görseli";
    indirimImage.classList.add("indirim-image");

    const discountBadge = document.createElement("div");
    discountBadge.textContent = "2";
    discountBadge.classList.add("anatomi_discount_badge");

    const productBadge = document.createElement("div");
    productBadge.classList.add("anatomi_product_badge");
    productBadge.style.display = "none"; 


async function loadProducts() {
        const response = await fetch("https://www.istanbulticaret.com/indirim-urunleri"); 
        const data = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");


        const productElements = doc.querySelectorAll(".product-item"); 
        const products = [];

        productElements.forEach((product) => {
            const imageContainers = product.querySelectorAll(".image-inner"); 
            const imageElement = imageContainers.length > 0 ? imageContainers[0].querySelector("img") : null;


            const titleElement = product.querySelector("a[id^='product-title']");
            const priceElement = product.querySelector(".product-price-wrapper");


            if (imageElement) {
                const imgSrc = imageElement.getAttribute("data-src");
        
                if (imgSrc && !imgSrc.includes("lazy_load_yukleniyor.gif")) {
                    if (titleElement && priceElement) {
                        const discountedPriceElement = priceElement.querySelector(".product-discounted-price");
                        const currentPriceElement = priceElement.querySelector(".current-price");
        
                        const discountedPrice = discountedPriceElement ? discountedPriceElement.textContent.trim() : null;
                        const currentPrice = currentPriceElement ? currentPriceElement.textContent.trim() : null;
        
                        products.push({
                            imgSrc,
                            title: titleElement.textContent.trim(),
                            link: titleElement.href,
                            discountedPrice,
                            currentPrice
                        });
                    }
                }
            }
        });
        
        if (products.length > 1) {
            const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 2);
            productBadge.innerHTML = ""; 
        
            randomProducts.forEach((product) => {
                const productDiv = document.createElement("div");
                productDiv.classList.add("anatomi_item_container");
        
                productDiv.innerHTML = `
                    <img src="${product.imgSrc}" class="anatomi_product_image" alt="${product.title}" />
                    <a href="${product.link}" class="anatomi_product_title">${product.title}</a>
                    <div class="anatomi_product_price">
                        ${product.discountedPrice ? `<span class="discounted-price">${product.discountedPrice}</span>` : ""}
                        ${product.currentPrice ? `<span class="current-price">${product.currentPrice}</span>` : ""}
                    </div>
                `;
        
                productBadge.appendChild(productDiv);
            });
        }
    }
        loadProducts();
        indirimContainer.addEventListener("click", () => {
            if (productBadge.style.display === "none") {
                productBadge.style.display = "block";  
            } else {
                productBadge.style.display = "none";
                loadProducts();
            }
        });

      

    indirimContainer.appendChild(indirimImage);
    indirimContainer.appendChild(discountBadge);
    indirimContainer.appendChild(productBadge);
    targetElement.insertAdjacentElement("afterbegin", indirimContainer);
};

const anasayfa_indirim_kategorisi_init = () => {
    anasayfa_indirim_kategorisi_html();
    anasayfa_indirim_kategorisi_css();
    anasayfa_indirim_kategorisi_js();
};

const anasayfa_indirim_kategorisi_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

if (anasayfa_indirim_kategorisi_condition()) {
    anasayfa_indirim_kategorisi_init();
}


