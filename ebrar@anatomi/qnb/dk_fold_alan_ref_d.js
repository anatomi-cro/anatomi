const dk_fold_alan_ref_d_html = () => {
  const html = `
  <div class="anatomi_ref_container">
    <h3>Güvenilir Hizmeti Seçen 100 Binden Fazla İşletme</h3>
    <div class="anatomi_ref_images">
      <div><img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/qnb-ref-1-logo.png"></img></div>
      <div><img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/qnb-ref-2-logo.png"></img></div>
      <div><img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/qnb-ref-3-logo.png"></img></div>
      <div><img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/qnb-ref-4-logo.png"></img></div>
      <div><img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/qnb-ref-5-logo.png"></img></div>
      <div><img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/qnb-ref-6-logo.png"></img></div>
    </div>
  </div>


    `;
  const targetElement = document.querySelector(
    "#DijitalKopru-Banner > section > div > div > div.uk-width-3-5\\@m.uk-first-column.notranslate"
  );
  const element = document.querySelector(".anatomi_ref_container");
  if (!element) {
    targetElement.insertAdjacentHTML("beforeend", html);
  }
};

const dk_fold_alan_ref_d_css = () => {
  const style = `
      <style id="anatomi_dk_fold_alan_ref_css">    
      .anatomi_ref_container {
        margin-top: 60px;
      }

      .anatomi_ref_images {
        display: flex;
        gap: 15px;
      }
      .anatomi_ref_images div {
        height: fit-content;
        background-color: #fff;
        border-radius: 10px;
        padding: 10px;
      }
      </style>
    `;
  const head = document.querySelector("head");
  const css = document.querySelector("#anatomi_dk_fold_alan_ref_css");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const dk_fold_alan_ref_d_js = () => {};

const dk_fold_alan_ref_d_init = () => {
  dk_fold_alan_ref_d_html();
  dk_fold_alan_ref_d_css();
  dk_fold_alan_ref_d_js();
};

const dk_fold_alan_ref_d_condition = () => {
  const device = window.innerWidth > 768;
  return device;
};

setInterval(() => {
  if (dk_fold_alan_ref_d_condition()) {
    dk_fold_alan_ref_d_init();
  }
}, 50);
