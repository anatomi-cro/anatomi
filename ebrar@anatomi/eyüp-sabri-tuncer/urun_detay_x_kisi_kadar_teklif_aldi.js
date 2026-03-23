const x_kadar_kisi_teklif_aldi_html = () => {
  const html = `
        <div class="anatomi-x-kadar-kisi-aldi-container">
            <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/est-sepete-eklendi-icon.png" class="anatomi-x-kadar-kisi-aldi-img"></img>
            <p><span></span> kişi bugün bu ürünü sepete ekledi.</p>
        </div>
        `;
  const targetElement = document.querySelector("#divBarkod");
  const element = document.querySelector(
    ".anatomi-x-kadar-kisi-aldi-container",
  );
  if (!element) {
    targetElement.insertAdjacentHTML("beforebegin", html);
  }
};

const x_kadar_kisi_teklif_aldi_css = () => {
  const css = `
    <style id="anatomi-x-kadar-kisi-aldi-css">
    .anatomi-x-kadar-kisi-aldi-container {
        background-color: #2D4636;
        width: fit-content;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: flex-start;
        padding: 10px;
        border-radius: 5px;
    }

    .anatomi-x-kadar-kisi-aldi-container img {
        width: 15px;
    }
    .anatomi-x-kadar-kisi-aldi-container p {
        color: #fff;
        margin: 0px;
    }
    </style>
    `;
  const head = document.querySelector("head");
  const styleSheet = document.querySelector("#anatomi-x-kadar-kisi-aldi-css");
  if (!styleSheet) {
    head.insertAdjacentHTML("beforeend", css);
  }
};

const x_kadar_kisi_teklif_aldi_js = () => {
  const span = document.querySelector(
    ".anatomi-x-kadar-kisi-aldi-container > p > span",
  );

  if (!span) return;

  const currentPath = window.location.pathname;

  let pageData = {};
  try {
    pageData = JSON.parse(window.name || "{}");
  } catch (e) {
    pageData = {};
  }

  if (!pageData[currentPath]) {
    pageData[currentPath] = Math.floor(Math.random() * (999 - 740 + 1)) + 740;
    window.name = JSON.stringify(pageData);
  }

  span.textContent = pageData[currentPath];
};

const x_kadar_kisi_teklif_aldi_init = () => {
  x_kadar_kisi_teklif_aldi_html();
  x_kadar_kisi_teklif_aldi_css();
  x_kadar_kisi_teklif_aldi_js();
};

const x_kadar_kisi_teklif_aldi_condition = () => {
  const device = window.innerWidth <= 768;
  const element = document.querySelector(".productDetailContainer");
  return device && element;
};

setInterval(() => {
  if (x_kadar_kisi_teklif_aldi_condition()) {
    x_kadar_kisi_teklif_aldi_init();
  }
}, 50);
