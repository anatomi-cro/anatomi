

setTimeout(() => {
  const urun_listeleme_avantajlar_rd_v4_html = () => {};

const urun_listeleme_avantajlar_rd_v4_css = () => {
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
        margin-top: 10px;
    }
    .anatomi_hizli_teslimat_p {
        margin: 0px;
        color: #000000;
        font-size: 10px;
    }
    .anatomi_taksit_container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #42B54C;
       width: 100%;
       padding: 3px 0px;
    }
    
    .anatomi_taksit_p {
        margin: 0px;
        color: #ffffff;
        font-size: 10px;
    }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const urun_listeleme_avantajlar_rd_v4_js = () => {
    const generateAvantajlar = () => {
   const orjHizliTeslimatContainer = document.querySelectorAll(".product-symbols");

orjHizliTeslimatContainer.forEach(container => {
  const children = container.querySelectorAll("div");

  children.forEach(child => {
    if (!child.classList.contains("anatomi-badge")) {
      child.setAttribute("style", "display: none !important;");
    }
  });
});


    const productStars = document.querySelectorAll(".product-stars");
    productStars.forEach(element => {
        if (element) {
        element.setAttribute("style", "display: none !important;");
        }
    });

     const allStars = document.querySelectorAll(".product-title");
  allStars.forEach(star => {
   if (
        star.nextElementSibling &&
        star.nextElementSibling.classList.contains("anatomi_hizli_teslimat")
      ) {
        return;
      }

    const anatomiHizliTeslimat = document.createElement("div");
    anatomiHizliTeslimat.classList.add("anatomi_hizli_teslimat");

    const hizliTeslimatImg = document.createElement("img");
    hizliTeslimatImg.classList.add("anatomi_hizli_teslimat_img");
    hizliTeslimatImg.src = "https://i.hizliresim.com/96wp8xl.png?_gl=1*1hhy06q*_ga*MTQ4NTY0OTQ4Mi4xNzQxMjg5ODk2*_ga_M9ZRXYS2YN*czE3NDc3MzgwMTYkbzYkZzEkdDE3NDc3MzgwMzkkajM3JGwwJGgwJGRWak5YZ2xSRWRMZFlRMURBZmZ4ZzRZZm1BbFdjOFozRjdB";
    hizliTeslimatImg.alt = "Hızlı Teslimat";

    const hizliTeslimatP = document.createElement("p");
    hizliTeslimatP.classList.add("anatomi_hizli_teslimat_p");
    hizliTeslimatP.textContent = "Hızlı Teslimat";

    anatomiHizliTeslimat.appendChild(hizliTeslimatImg);
    anatomiHizliTeslimat.appendChild(hizliTeslimatP);

    star.insertAdjacentElement("afterend", anatomiHizliTeslimat);

    });

  const allImageContainer = document.querySelectorAll("div.product-item > div > div:nth-child(1)");

allImageContainer.forEach(imageContainer => {
  if (!imageContainer.parentElement.querySelector(".anatomi_taksit_container")) {
    const taksitContainer = document.createElement("div");
    taksitContainer.classList.add("anatomi_taksit_container");

    const taksitP = document.createElement("p");
    taksitP.classList.add("anatomi_taksit_p");
    taksitP.textContent = "Kredi kartına 3 taksit*";

    taksitContainer.appendChild(taksitP);
    imageContainer.insertAdjacentElement("afterend", taksitContainer);
  }
});




    };

   setInterval (() => {
        generateAvantajlar();
    }, 100)
};

const urun_listeleme_avantajlar_rd_v4_init = () => {
    urun_listeleme_avantajlar_rd_v4_html();
    urun_listeleme_avantajlar_rd_v4_css();
    urun_listeleme_avantajlar_rd_v4_js();
};

const urun_listeleme_avantajlar_rd_v4_condition = () => {
    return true;
};

if (urun_listeleme_avantajlar_rd_v4_condition()) {
    urun_listeleme_avantajlar_rd_v4_init();
}

  
}, 1000);