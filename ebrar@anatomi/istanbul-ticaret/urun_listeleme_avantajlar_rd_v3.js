const urun_listeleme_avantajlar_rd_v3_html = () => {};

const urun_listeleme_avantajlar_rd_v3_css = () => {
    const style = `
      <style>    
      .anatomi_hizli_teslimat {
        display: flex;
        align-items: center;
        gap: 5px;
        background-color: #F5F5F5;
        border-radius: 5px;
        width: fit-content;
        margin-bottom: 5px;
        padding: 0px 5px;
    }
    .anatomi_hizli_teslimat_p {
        margin: 0px;
        color: #E97925;
        font-size: 10px;
    }
    .anatomi_taksitli_banner {
        position: absolute;
        top: 10px;
        right: 10px;

    }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const urun_listeleme_avantajlar_rd_v3_js = () => {
    const generateAvantajlar = () => {
  const orjKargoTeslimatContainer = document.querySelectorAll(".product-symbols");
  orjKargoTeslimatContainer.forEach(element => {
    if (element) {
      element.style.display = "none";
    }
  });

  const allStars = document.querySelectorAll(".product-stars");
  allStars.forEach(star => {
    const existing = star.previousElementSibling;
    if (existing && existing.classList.contains("anatomi_hizli_teslimat")) return;

    const anatomiHizliTeslimat = document.createElement("div");
    anatomiHizliTeslimat.classList.add("anatomi_hizli_teslimat");

    const hizliTeslimatImg = document.createElement("img");
    hizliTeslimatImg.classList.add("anatomi_hizli_teslimat_img");
    hizliTeslimatImg.src = "https://i.hizliresim.com/b8nc35v.png?_gl=1*b5y9m5*_ga*MTQ4NTY0OTQ4Mi4xNzQxMjg5ODk2*_ga_M9ZRXYS2YN*czE3NDc3MzIxMzUkbzUkZzEkdDE3NDc3MzIxNjUkajMwJGwwJGgwJGRWak5YZ2xSRWRMZFlRMURBZmZ4ZzRZZm1BbFdjOFozRjdB";
    hizliTeslimatImg.alt = "Hızlı Teslimat";

    const hizliTeslimatP = document.createElement("p");
    hizliTeslimatP.classList.add("anatomi_hizli_teslimat_p");
    hizliTeslimatP.textContent = "Hızlı Teslimat";

    anatomiHizliTeslimat.appendChild(hizliTeslimatImg);
    anatomiHizliTeslimat.appendChild(hizliTeslimatP);

    star.insertAdjacentElement("beforebegin", anatomiHizliTeslimat);

   const allImageContainer = document.querySelectorAll("div.product-item > div > div:nth-child(1)");

allImageContainer.forEach(imageContainer => {
  const taksitliBanner = document.createElement("div");
  taksitliBanner.classList.add("anatomi_taksitli_banner");

  const taksitliBannerImg = document.createElement("img");
  taksitliBannerImg.classList.add("anatomi_taksitli_banner_img");
  taksitliBannerImg.src = "https://i.hizliresim.com/afa3qhn.png?_gl=...";
  taksitliBannerImg.alt = "Taksitli Ödeme";

  taksitliBanner.appendChild(taksitliBannerImg);
  if (!imageContainer.querySelector(".anatomi_taksitli_banner")) {
  imageContainer.appendChild(taksitliBanner);
}

});


  });

    const productStars = document.querySelectorAll(".product-stars");
    productStars.forEach(element => {
        if (element) {
        element.setAttribute("style", "display: none !important;");
        }
    });
};


    setInterval (() => {
        generateAvantajlar();
    }, 100)
};

const urun_listeleme_avantajlar_rd_v3_init = () => {
    urun_listeleme_avantajlar_rd_v3_html();
    urun_listeleme_avantajlar_rd_v3_css();
    urun_listeleme_avantajlar_rd_v3_js();
};

const urun_listeleme_avantajlar_rd_v3_condition = () => {
  const device = window.innerWidth <= 768;
    return device;
};

if (urun_listeleme_avantajlar_rd_v3_condition()) {
    urun_listeleme_avantajlar_rd_v3_init();
}
