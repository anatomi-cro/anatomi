const blog_formda_tekli_yapi_html = () => {};

const blog_formda_tekli_yapi_css = () => {
  const style = `
      <style id="anatomi_blog_formda_tekli_yapi_css">    
     .blog .content .right-side{
            flex-basis: 40% !important;
        }
     .anatomi_form_container{
         margin-bottom: 30px;
         display: flex;
         flex-direction: column;
         gap: 20px;
     }
     .anatomi_form_container div{
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #ffff;
        padding: 15px;
        border: 1px solid #8080805e;
        border-radius: 5px;

     }
     .anatomi_trafik_sigortasi img ,   .anatomi_konut_sigortasi img,  .anatomi_dask_sigortasi img{
        width: 40px;
        height: 100%;
     }
     .anatomi_kasko_sigortasi img{
         width: 50px;
        height: 100%;
     }
    .anatomi_seyahat_sigortasi img{
        width: 30px;
        height: 100%;
    }
     .anatomi_form_container div p{
         color: #333333;
     }
     .anatomi_form_container div a{
        background-color: #37424A;
        color: #ffff;
        padding: 5px 25px;
        border-radius: 5px;
        font-weight: normal;
     }

     @media (max-width: 1200px){
        .blog .content .right-side{
            flex-basis: 45% !important;
        }
     }
      </style>
    `;
  const css = document.querySelector("#anatomi_blog_formda_tekli_yapi_css");
  const head = document.querySelector("head");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const blog_formda_tekli_yapi_js = () => {
  function trafikKaskoButons() {
    let formContainer = document.querySelector(".anatomi_form_container");

    if (!formContainer) {
      formContainer = document.createElement("div");
      formContainer.classList.add("anatomi_form_container");
      document
        .querySelector("#app > div > div.content > div.right-side")
        .insertAdjacentElement("afterbegin", formContainer);
    }

    formContainer.innerHTML = `
    <div class="anatomi_trafik_sigortasi">
    <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/sigortaladim-trafik-icon-blog.png"></img>
      <p>Trafik Sigortası </p>
      <a class="anatomi_trafik_sigortasi_link" href="https://www.sigortaladim.com/zorunlu-trafik-sigortasi">Teklif Al</a>
    </div>

    <div class="anatomi_kasko_sigortasi">
    <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/sigortaladim-kasko-icon-blog.png"></img>
      <p>Kasko Sigortası</p>
      <a class="anatomi_kasko_sigortasi_link" href="https://www.sigortaladim.com/kasko-sigortasi">Teklif Al</a>
    </div>
  `;
  }

  function daskKonutButons() {
    let formContainer = document.querySelector(".anatomi_form_container");

    if (!formContainer) {
      formContainer = document.createElement("div");
      formContainer.classList.add("anatomi_form_container");
      document
        .querySelector("#app > div > div.content > div.right-side")
        .insertAdjacentElement("afterbegin", formContainer);
    }

    formContainer.innerHTML = `
    <div class="anatomi_dask_sigortasi">
    <img src="https://r.resimlink.com/WMJI1gn.png"></img>
      <p>DASK Sigortası </p>
      <a class="anatomi_dask_sigortasi_link" href="https://www.sigortaladim.com/dask-sigortasi">Teklif Al</a>
    </div>

    <div class="anatomi_konut_sigortasi">
    <img src="https://r.resimlink.com/huS6ZgqL4vVr.png"></img>
      <p>Konut Sigortası</p>
      <a class="anatomi_konut_sigortasi_link" href="https://www.sigortaladim.com/konut-sigortasi">Teklif Al</a>
    </div>
  `;
  }

  function tssOssButons() {
    let formContainer = document.querySelector(".anatomi_form_container");

    if (!formContainer) {
      formContainer = document.createElement("div");
      formContainer.classList.add("anatomi_form_container");
      document
        .querySelector("#app > div > div.content > div.right-side")
        .insertAdjacentElement("afterbegin", formContainer);
    }

    formContainer.innerHTML = `
    <div class="anatomi_tss_sigortasi">
      <p>Tamamlayıcı Sağlık Sigortası </p>
      <a class="anatomi_tss_sigortasi_link" href="https://www.sigortaladim.com/tamamlayici-saglik-sigortasi">Teklif Al</a>
    </div>

    <div class="anatomi_oss_sigortasi">
      <p>Özel Sağlık Sigortası</p>
      <a class="anatomi_oss_sigortasi_link" href="https://www.sigortaladim.com/ozel-saglik-sigortasi">Teklif Al</a>
    </div>
  `;
  }

  function seyahatSaglikButons() {
    let formContainer = document.querySelector(".anatomi_form_container");

    if (!formContainer) {
      formContainer = document.createElement("div");
      formContainer.classList.add("anatomi_form_container");
      document
        .querySelector("#app > div > div.content > div.right-side")
        .insertAdjacentElement("afterbegin", formContainer);
    }

    formContainer.innerHTML = `
    <div class="anatomi_seyahat_sigortasi">
    <img src="https://r.resimlink.com/gG2y1x.png"></img>
      <p>Seyahat Sağlık Sigortası </p>
      <a class="anatomi_seyahat_sigortasi_link" href="https://www.sigortaladim.com/seyahat-saglik-sigortasi">Teklif Al</a>
    </div>

  `;
  }

  const url = window.location.href;
  if (
    url.includes("https://www.sigortaladim.com/hasar-surecleri") ||
    url.includes("https://www.sigortaladim.com/arac") ||
    url.includes("https://www.sigortaladim.com/elektrikli-yasam") ||
    url.includes("https://www.sigortaladim.com/sigorta")
  ) {
    const formContainer = document.querySelector(".anatomi_form_container");
    if (!formContainer) {
      trafikKaskoButons();
    }
  } else if (url.includes("https://www.sigortaladim.com/ev-yasam")) {
    const formContainer = document.querySelector(".anatomi_form_container");
    if (!formContainer) {
      daskKonutButons();
    }
  } else if (url.includes("https://www.sigortaladim.com/saglik")) {
    const formContainer = document.querySelector(".anatomi_form_container");
    if (!formContainer) {
      tssOssButons();
    }
  } else if (url.includes("https://www.sigortaladim.com/seyahat")) {
    const formContainer = document.querySelector(".anatomi_form_container");
    if (!formContainer) {
      seyahatSaglikButons();
    }
  }

  const form1 = document.querySelectorAll(
    "#app > div.container > div.content > div.right-side > div.pre-form"
  );
  if (form1) {
    form1.forEach((form) => {
      form.style.display = "none";
    });
  }
};

const blog_formda_tekli_yapi_init = () => {
  blog_formda_tekli_yapi_html();
  blog_formda_tekli_yapi_css();
  blog_formda_tekli_yapi_js();
};

const blog_formda_tekli_yapi_condition = () => {
  const element = document.querySelector(".blog");
  const device = window.innerWidth > 768;
  return device && element;
};

setInterval(() => {
  if (blog_formda_tekli_yapi_condition()) {
    blog_formda_tekli_yapi_init();
  }
}, 50);
