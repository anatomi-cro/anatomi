const sevgililer_gunu_design_html = () => {
  const html = `
  <div class="anatomi-heart-container">
      <div class="anatomi-heart">
        <img
          src="https://i.hizliresim.com/h4jz06j.png"
          alt=""
        />
      </div>
    </div>
      `;

  const container = document.querySelector("body");
  const element = document.querySelector(".anatomi-heart-container");
  if (!element && container) {
    container.insertAdjacentHTML("beforeend", html);
  }
};

const sevgililer_gunu_design_css = () => {
  const style = `
    <style id="anatomi-heart-css">
      body {
        overflow-x: clip;
      }

      .anatomi-heart-container {
        position: fixed;
        top: 50px;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
        z-index: 9999;
      }

      .anatomi-heart {
        position: absolute;
        width: auto;
        height: auto;
        pointer-events: none;
        z-index: 9999;
        animation: anatomi-heart-fall linear infinite;
        animation-fill-mode: forwards;
      }

      .anatomi-heart img {
        width: 30px;
        height: 30px;
        display: block;
        pointer-events: none;
        transform: rotate(90deg);
      }

      @keyframes anatomi-heart-fall {
        0% {
          transform: translateX(0) translateY(0) rotate(90deg);
          opacity: 1;
        }
        100% {
          transform: translateX(var(--drift, 0px)) translateY(120vh)
          rotateX(180deg)  rotateY(180deg);
          opacity: 0;
        }
      }

      #ProductPageProductList > div > div > div.productDetail.videoAutoPlay > div.productName.detailUrl > a{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        
      }

      #ProductPageProductList > div > div > div.productDetail.videoAutoPlay > div.productName.detailUrl > a > img{
        width: 30px;
        height: 30px;
      }
     
    </style>
      `;
  const head = document.querySelector("head");
  const styleSheet = document.querySelector("#anatomi-heart-css");
  if (!styleSheet) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const sevgililer_gunu_design_js = () => {
  const items = document.querySelectorAll(
    "#ProductPageProductList > div > div > div.productDetail.videoAutoPlay > div.productName.detailUrl > a",
  );
  items.forEach((item) => {
    let img = item.querySelector("img");
    if (!img) {
      img = document.createElement("img");
      img.src = "https://i.hizliresim.com/8477izz.png";
      img.className = "anatomi-heart-img";
      item.appendChild(img);
    }
  });
  function initAnatomiSnow() {
    const container = document.querySelector(".anatomi-heart-container");
    if (!container) {
      return;
    }

    const template = container.querySelector(".anatomi-heart");
    if (!template) {
      return;
    }

    const numberOfHeart = 40;
    for (let i = 0; i < numberOfHeart; i++) {
      const clone = template.cloneNode(true);
      clone.style.position = "absolute";
      clone.style.left = Math.random() * 100 + "%";
      clone.style.top = -10 - Math.random() * 90 + "%";
      clone.style.animationName = "anatomi-heart-fall";
      clone.style.animationDuration = 5 + Math.random() * 6 + "s";
      clone.style.animationDelay = -(Math.random() * 6) + "s";
      clone.style.animationTimingFunction = "linear";
      clone.style.animationIterationCount = "infinite";
      clone.style.opacity = 0.8 + Math.random() * 0.4;
      clone.style.willChange = "transform";

      const img = clone.querySelector("img");
      if (img) {
        const scale = 0.6 + Math.random() * 0.9;
        img.style.width = Math.round(30 * scale) + "px";
        img.style.height = Math.round(30 * scale) + "px";
        img.style.display = "block";
      }

      container.appendChild(clone);
    }

    template.remove();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAnatomiSnow);
  } else {
    initAnatomiSnow();
  }
};

const sevgililer_gunu_design_init = () => {
  sevgililer_gunu_design_html();
  sevgililer_gunu_design_css();
  sevgililer_gunu_design_js();
};

const sevgililer_gunu_design_conditions = () => {
  const sevgililer_gunu_design = !document.querySelector(
    ".anatomi-heart-container",
  );
  const phone = matchMedia("(max-width: 768px)").matches;
  const desktop = matchMedia("(min-width: 768px)").matches;
  return sevgililer_gunu_design && (phone || desktop);
};

setInterval(() => {
  if (sevgililer_gunu_design_conditions()) {
    sevgililer_gunu_design_init();
  }
}, 50);
