const anasayfa_indirim_kategorisi_html = () => {};

const anasayfa_indirim_kategorisi_css = () => {
    const style = `
      <style>    
      .anatomi_indirim_container{
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
    background-color: #0581BF;
    color: white;
    font-size: 10px;
    font-weight: bold;
    padding: 7px;
    border-radius: 50%;
    width: 4px;
    height: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
    .anatomi_product_badge {
    position: absolute;
    top: 45px;
    width: 35vw;
    left: 0px;
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
    .anatomi_item_container:hover{
        border: 1px solid #BBBBBB;
        border-radius: 5px;
        cursor: pointer;
    }
    .anatomi_product_image{
        width: 60px;

    }
    .anatomi_product_title{
        font-size: 11px;
        width: 50%;
    }
    .anatomi_product_price{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .current-price {
    color: black;
    font-weight: bold;
  }
    .discounted-price {
    color: #BBBBBB !important;
    text-decoration: line-through;
    font-size: 10px;
  }
    .anatomi_close_btn{
        position: absolute;
        top: 0px;
        right: 5px;
        cursor: pointer;
        color: #BBBBBB;
        border: none;
        background: none;
        font-size: 20px;
}
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const anasayfa_indirim_kategorisi_js = () => {

    const targetElement = document.querySelector("#headerMain > div > div.inner > div > div.col.col-6.forDesktop > div");
    const indirimContainer = document.createElement("div");
    indirimContainer.classList.add("anatomi_indirim_container");

    const indirimImage = document.createElement("img");
    indirimImage.src = "https://resmim.net/cdn/2025/06/01/Tdw7t3.png"; 
    indirimImage.alt = "İndirim Görseli";
    indirimImage.classList.add("indirim-image");

    const discountBadge = document.createElement("div");
    discountBadge.textContent = "2";
    discountBadge.classList.add("anatomi_discount_badge");

    const productBadge = document.createElement("div");
    productBadge.classList.add("anatomi_product_badge");
    productBadge.style.display = "none"; 

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "×";
    closeBtn.classList.add("anatomi_close_btn");

async function loadProducts() {
        const response = await fetch("https://www.elektrix.com/firsat-urunleri"); 
        const data = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");


        const productElements = doc.querySelectorAll(".productItem"); 
        const products = [];
        console.log(productElements);

        productElements.forEach((product) => {
             const image = product.querySelector("img.lazy.stImage");
            const titleElement = product.querySelector(".detailLink");
            const priceElement = product.querySelector(".priceWrapper");

                    if (titleElement && priceElement && image) {

                      const imgSrc = image?.getAttribute("data-src") || image?.getAttribute("src");


                        const discountedPriceElement = priceElement.querySelector(".discountedPrice");
                        const currentPriceElement = priceElement.querySelector(".currentPrice");
        
                        const discountedPrice = discountedPriceElement ? discountedPriceElement.textContent.trim() : null;
                        const currentPrice = currentPriceElement ? currentPriceElement.textContent.trim() : null;
        
                        products.push({
                            imgSrc,
                            title: image.title,
                            link: titleElement.href,
                            discountedPrice,
                            currentPrice
                        });
                    }
        });
        
     if (products.length > 1) {
    const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 2);
    productBadge.innerHTML = ""; 

    randomProducts.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("anatomi_item_container");

        const titleClass = index === 0 ? "anatomi_product_title" : "anatomi_product_title_2";

        productDiv.innerHTML = `
            <img src="${product.imgSrc}" class="anatomi_product_image" alt="${product.title}" />
            <a href="${product.link}" class="${titleClass}">${product.title}</a>
            <div class="anatomi_product_price">
                ${product.discountedPrice ? `<span class="discounted-price">${product.discountedPrice}</span>` : ""}
                ${product.currentPrice ? `<span class="current-price">${product.currentPrice}</span>` : ""}
            </div>
        `;
        
        productBadge.appendChild(productDiv);
        productBadge.appendChild(closeBtn);
    });
}

}
        loadProducts();

          closeBtn.addEventListener("click", (e) => {
          e.stopPropagation(); 
        productBadge.style.display = "none";
        loadProducts();
         });

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
    targetElement.insertAdjacentElement("beforebegin", indirimContainer);
};

const anasayfa_indirim_kategorisi_init = () => {
    anasayfa_indirim_kategorisi_html();
    anasayfa_indirim_kategorisi_css();
    anasayfa_indirim_kategorisi_js();
};

const anasayfa_indirim_kategorisi_condition = () => {
    const device = window.innerWidth > 768;
    return device;
};

if (anasayfa_indirim_kategorisi_condition()) {
    anasayfa_indirim_kategorisi_init();
}


