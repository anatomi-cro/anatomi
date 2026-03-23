const sticky_firsat_urunleri_one_cikarma_html = () => {
  if (document.querySelector(".anatomi-sticky-popup")) return;

  const html = `
    <div class="anatomi-sticky-popup anatomi-closed">
      <div class="anatomi-sticky-mini">
        <span>%30'a varan indirim</span>
        <img class="anatomi_sticky_firsat_icon anatomi_arrow" src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/eyup-sabri-tuncer-sticky-firsat-arrow.png"></img>
      </div>

      <div class="anatomi-sticky-expanded">
        <button class="anatomi-close"><img class="anatomi_sticky_firsat_icon" src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/eyup-sabri-tuncer-sticky-firsat-close.png"></img></button>
        <h3 class="anatomi-sticky-title">Seçili Ürünlerde 
%30’a Varan İndirim Fırsatı!</h3>
        <div class="anatomi-products"></div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", html);
};

const sticky_firsat_urunleri_one_cikarma_css = () => {
  const style = `
       <style id="sticky_firsat_urunleri_one_cikarma_css">
.anatomi-sticky-popup {
  position: fixed;
  right: -60px;
  bottom: 20%;
  transform: translateY(-50%);
  z-index: 99999;
  font-family: Arial, sans-serif;
}
.anatomi_sticky_firsat_icon{
  width: 20px;
  height: 20px;
}

.anatomi-sticky-mini {
  background: linear-gradient(360deg, #1D2D22, #5E9371);
  color: #fff;
  padding: 10px 8px;
rotate: 270deg;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 10px 10px 0px 10px;
  transition: transform 0.55s cubic-bezier(0.22, 1.4, 0.36, 1), opacity 0.45s ease;
  will-change: transform, opacity;
}

.anatomi-arrow { font-size: 18px; }

.anatomi-sticky-expanded {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   background: linear-gradient(360deg, #1D2D22, #5E9371);
  width: 250px;
  max-width: 90vw;
  padding: 15px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.18);
  border-radius: 12px 0 0 12px;
  opacity: 0;
  transform: translateX(120%) scale(0.92);
  pointer-events: none;
  position: absolute;
  right: 60px;
  top: -150%;
  transform-origin: right center;
  transition: transform 0.62s cubic-bezier(0.22, 1.4, 0.36, 1), 
pacity 0.45s cubic-bezier(0.22, 1.4, 0.36, 1);
  will-change: transform, opacity;
}

.anatomi-sticky-popup.anatomi-open .anatomi-sticky-expanded {
  opacity: 1;
  transform: translateX(0) scale(1);
  pointer-events: auto;
}

.anatomi-sticky-popup.anatomi-open .anatomi-sticky-mini {
  opacity: 0;
  transform: translateY(50px) scale(0.8);
  pointer-events: none;
}
.anatomi-sticky-title {
    color: white;
    width: 80%;
    text-align: center;
}

.anatomi-products {
  display: flex;
  margin-top: 10px;
}

.anatomi-products a {
  display: block;
  width: 80px;
  height: 90px;
  overflow: hidden;
  border-left: 1px solid #80808057;
  background: #f6f6f6;
}
.anatomi-products a:nth-child(1) {
border-top-left-radius: 8px;
border-bottom-left-radius: 8px;
}

.anatomi-products a:nth-child(3) {
border-top-right-radius: 8px;
border-bottom-right-radius: 8px;
  
}
.anatomi-products img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.anatomi-close {
  position: absolute;
  top: 8px;
  right: 0px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
.anatomi_arrow{
    rotate: 90deg;
}


  </style>
    `;
  const head = document.querySelector("head");
  const css = document.querySelector("#sticky_firsat_urunleri_one_cikarma_css");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const sticky_firsat_urunleri_one_cikarma_js = () => {
  const popup = document.querySelector(".anatomi-sticky-popup");
  const mini = popup?.querySelector(".anatomi-sticky-mini");
  const close = popup?.querySelector(".anatomi-close");

  if (!popup || popup.dataset.ready) return;
  popup.dataset.ready = "true";

  mini.addEventListener("click", () => {
    popup.classList.add("anatomi-open");
    loadProducts();
  });

  close.addEventListener("click", () => {
    popup.classList.remove("anatomi-open");
  });

  function loadProducts() {
    fetch("https://www.eyupsabrituncer.com/secili-urunlerde-30a-varan-indirim")
      .then((response) => response.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const productItems = [...doc.querySelectorAll(".productItem")];
        const productBox = document.querySelector(".anatomi-products");

        const products = productItems
          .map((item) => {
            const imgEl = item.querySelector("img");
            const linkEl = item.querySelector("a");

            const img =
              imgEl?.getAttribute("data-src") ||
              imgEl?.getAttribute("data-original") ||
              imgEl?.getAttribute("data-lazy") ||
              imgEl?.getAttribute("src");

            const link = linkEl?.getAttribute("href");

            return { img, link };
          })
          .filter((p) => p.img && !p.img.includes("loader") && p.link);

        const random3 = products.sort(() => Math.random() - 0.5).slice(0, 3);

        productBox.innerHTML = random3
          .map(
            (p) => `
      <a href="${p.link}" target="_blank">
        <img src="${p.img}" />
      </a>
    `
          )
          .join("");
      })
      .catch((error) => console.error("❌ Ürün çekilemedi:", error));
  }
};

const sticky_firsat_urunleri_one_cikarma_init = () => {
  sticky_firsat_urunleri_one_cikarma_html();
  sticky_firsat_urunleri_one_cikarma_css();
  sticky_firsat_urunleri_one_cikarma_js();
};

const sticky_firsat_urunleri_one_cikarma_condition = () => {
  const device = window.innerWidth <= 768;
  return device;
};

setInterval(() => {
  if (sticky_firsat_urunleri_one_cikarma_condition()) {
    sticky_firsat_urunleri_one_cikarma_init();
  }
}, 50);
