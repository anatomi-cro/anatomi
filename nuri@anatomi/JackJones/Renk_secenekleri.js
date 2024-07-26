const renk_secenekleri_style = () => {
  const renk_secenekleri_style = `
      <style>
        .anatomi_color_options {
            position: absolute;
            bottom: 2%;
            right: 2%;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1px;
        }

        .anatomi_color_options img {
            width: 15px;
            height: 15px;
            object-fit: contain;
        }

        .anatomi_color_options span {
            color: #000;
            font-weight: 500;
            font-size: 12px
        }
    </style>
  `;

  document
    .querySelector("head")
    .insertAdjacentHTML("beforeend", renk_secenekleri_style);
};

const renk_secenekleri_html = () => {
  const productElements = document.querySelectorAll(".section-product-list .uk-container .card-title");
  const productCount = {};
  productElements.forEach((product) => {
    const productName = product.textContent.trim();
    if (productCount[productName]) {
      productCount[productName]++;
    } else {
      productCount[productName] = 1;
    }
  });

  productElements.forEach((product) => {
    const productName = product.textContent.trim();
    const count = productCount[productName];
    if (count > 1) {
      const renk_secenekleri_html = `
                <div class="anatomi_color_options">
                    <img src="https://anatomi.s3.eu-north-1.amazonaws.com/image+1.png" alt="">
                    <span>${count}</span>
                </div>
            `;
      product.parentElement.querySelector(".desktop-card-image.card-image").insertAdjacentHTML("beforeend", renk_secenekleri_html);
    }
  });

  const renk_secenekleri_html = `
      <div class="anatomi_color_options">
        <img src="https://anatomi.s3.eu-north-1.amazonaws.com/image+1.png" alt="">
        <span>${count}</span>
    </div>
  `;

  /*const img = document.querySelectorAll(".desktop-card-image.card-image");
  img.forEach((item) => {
    item.insertAdjacentHTML("beforeend", renk_secenekleri_html);
  });*/
};

const renk_secenekleri_init = () => {
  renk_secenekleri_style();
  renk_secenekleri_html();
};

renk_secenekleri_init();

var count;

for (const [key, value] of Object.entries(productCount)) {
  count = value;
  console.log(count);
}
