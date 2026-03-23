const blog_sayfasi_sticky_buton_html = () => {};

const blog_sayfasi_sticky_buton_css = () => {
  const style = `
      <style id="anatomi_blog_sayfasi_sticky_buton_css">    
      .anatomi_sticky_teklifAl_container{
            position: sticky;
            bottom: 0px;
            background-color: #ffffff;
            padding: 10px;
            display: flex;
            justify-content: space-between;
            border: 1px solid #bbbbbb;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
      }
      .anatomi_sticky_teklifAl_container a{
            text-decoration: none;
            background-color: #37424A;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            cursor: pointer;
            width: 48%;
            text-align: center;
            color: #ffff;
            font-weight: normal;
            white-space: nowrap;
      }
      .anatomi_seyahatSaglik_teklifAl{
            width: 100% !important;
        }
      #wa-button{
        bottom: 70px !important;
      }

      </style>
    `;
  const css = document.querySelector("#anatomi_blog_sayfasi_sticky_buton_css");
  const head = document.querySelector("head");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const blog_sayfasi_sticky_buton_js = () => {
  function trafikKaskoSigortasi() {
    let stickyContainer = document.querySelector(
      ".anatomi_sticky_teklifAl_container"
    );
    if (!stickyContainer) {
      stickyContainer = document.createElement("div");
      stickyContainer.className = "anatomi_sticky_teklifAl_container";

      const trafikTeklifAl = document.createElement("a");
      trafikTeklifAl.className = "anatomi_trafik_teklifAl";
      trafikTeklifAl.textContent = "Trafik Sigortası Teklif Al";
      trafikTeklifAl.href =
        "https://www.sigortaladim.com/zorunlu-trafik-sigortasi";

      const kaskoTeklifAl = document.createElement("a");
      kaskoTeklifAl.className = "anatomi_kasko_teklifAl";
      kaskoTeklifAl.textContent = "Kasko Teklif Al";
      kaskoTeklifAl.href = "https://www.sigortaladim.com/kasko-sigortasi";

      stickyContainer.appendChild(kaskoTeklifAl);
      stickyContainer.appendChild(trafikTeklifAl);
      document.body.appendChild(stickyContainer);
    }
  }

  function daskKonutSigortasi() {
    let stickyContainer = document.querySelector(
      ".anatomi_sticky_teklifAl_container"
    );
    if (!stickyContainer) {
      stickyContainer = document.createElement("div");
      stickyContainer.className = "anatomi_sticky_teklifAl_container";

      const daskTeklifAl = document.createElement("a");
      daskTeklifAl.className = "anatomi_dask_teklifAl";
      daskTeklifAl.textContent = "DASK Teklif Al";
      daskTeklifAl.href = "https://www.sigortaladim.com/dask-sigortasi";

      const konutTeklifAl = document.createElement("a");
      konutTeklifAl.className = "anatomi_konut_teklifAl";
      konutTeklifAl.textContent = "Konut Sigortası Teklif Al";
      konutTeklifAl.href = "https://www.sigortaladim.com/konut-sigortasi";

      stickyContainer.appendChild(daskTeklifAl);
      stickyContainer.appendChild(konutTeklifAl);
      document.body.appendChild(stickyContainer);
    }
  }

  function tssOssSigortasi() {
    let stickyContainer = document.querySelector(
      ".anatomi_sticky_teklifAl_container"
    );
    if (!stickyContainer) {
      stickyContainer = document.createElement("div");
      stickyContainer.className = "anatomi_sticky_teklifAl_container";

      const ossTeklifAl = document.createElement("a");
      ossTeklifAl.className = "anatomi_oss_teklifAl";
      ossTeklifAl.textContent = "ÖSS Teklif Al";
      ossTeklifAl.href = "https://www.sigortaladim.com/ozel-saglik-sigortasi";

      const tssTeklifAl = document.createElement("a");
      tssTeklifAl.className = "anatomi_tss_teklifAl";
      tssTeklifAl.textContent = "TSS Teklif Al";
      tssTeklifAl.href =
        "https://www.sigortaladim.com/tamamlayici-saglik-sigortasi";

      stickyContainer.appendChild(tssTeklifAl);
      stickyContainer.appendChild(ossTeklifAl);
      document.body.appendChild(stickyContainer);
    }
  }

  function seyahatSaglikSigortasi() {
    let stickyContainer = document.querySelector(
      ".anatomi_sticky_teklifAl_container"
    );
    if (!stickyContainer) {
      stickyContainer = document.createElement("div");
      stickyContainer.className = "anatomi_sticky_teklifAl_container";

      const seyahatSaglikTeklifAl = document.createElement("a");
      seyahatSaglikTeklifAl.className = "anatomi_seyahatSaglik_teklifAl";
      seyahatSaglikTeklifAl.textContent = "Seyahat Sağlık Sigortası Teklif Al";
      seyahatSaglikTeklifAl.href =
        "https://www.sigortaladim.com/seyahat-saglik-sigortasi";

      stickyContainer.appendChild(seyahatSaglikTeklifAl);
      document.body.appendChild(stickyContainer);
    }
  }

  const breadCrumb = document.querySelector(
    "#app > div > ul > li:nth-child(3) > a"
  );
  if (breadCrumb && breadCrumb.textContent.trim() === "Hasar Süreçleri") {
    const stickyContainer = document.querySelector(
      "anatomi_sticky_teklifAl_container"
    );
    if (!stickyContainer) {
      trafikKaskoSigortasi();
    }
  } else if (breadCrumb && breadCrumb.textContent.trim() === "Araç") {
    const stickyContainer = document.querySelector(
      "anatomi_sticky_teklifAl_container"
    );
    if (!stickyContainer) {
      trafikKaskoSigortasi();
    }
  } else if (breadCrumb && breadCrumb.textContent.trim() === "Ev, Yaşam") {
    const stickyContainer = document.querySelector(
      "anatomi_sticky_teklifAl_container"
    );
    if (!stickyContainer) {
      daskKonutSigortasi();
    }
  } else if (breadCrumb && breadCrumb.textContent.trim() === "Sağlık") {
    const stickyContainer = document.querySelector(
      "anatomi_sticky_teklifAl_container"
    );
    if (!stickyContainer) {
      tssOssSigortasi();
    }
  } else if (breadCrumb && breadCrumb.textContent.trim() === "Seyahat") {
    const stickyContainer = document.querySelector(
      "anatomi_sticky_teklifAl_container"
    );
    if (!stickyContainer) {
      seyahatSaglikSigortasi();
    }
  } else if (
    breadCrumb &&
    breadCrumb.textContent.trim() === "Elektrikli Yaşam"
  ) {
    const stickyContainer = document.querySelector(
      "anatomi_sticky_teklifAl_container"
    );
    if (!stickyContainer) {
      trafikKaskoSigortasi();
    }
  } else if (breadCrumb && breadCrumb.textContent.trim() === "Sigorta") {
    const stickyContainer = document.querySelector(
      "anatomi_sticky_teklifAl_container"
    );
    if (!stickyContainer) {
      trafikKaskoSigortasi();
    }
  }
};

const blog_sayfasi_sticky_buton_init = () => {
  blog_sayfasi_sticky_buton_html();
  blog_sayfasi_sticky_buton_css();
  blog_sayfasi_sticky_buton_js();
};

const blog_sayfasi_sticky_buton_condition = () => {
  const element = document.querySelector(".blog-detail");
  const device = window.innerWidth <= 768;
  return device && element;
};

setInterval(() => {
  if (blog_sayfasi_sticky_buton_condition()) {
    blog_sayfasi_sticky_buton_init();
  }
}, 50);
