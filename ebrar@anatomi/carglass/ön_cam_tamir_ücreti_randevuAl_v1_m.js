setTimeout(() => {
  const on_cam_tamir_ucreti_sticky_buton_html = () => {
    const html = `
    `;
  };
  const on_cam_tamir_ucreti_sticky_buton_css = () => {
    const style = `
      <style>
       .anatomi_stickyButon {
        display: flex;
        justify-content: center;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: white;
        color: white;
        border-top : 3px solid #e7e7e7;
        text-align: center;
        padding: 15px 0;
        z-index: 9999999999999;
        }
     .anatomi_randevuAlınBtn {
        background-color: #FEDD44;
        border: none;
        color: black;
        font-weight: bold;
        font-size: 16px;
        padding: 7px 90px;
        text-align: center;
        border-radius: 5px;

        }
    </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
  };
  const on_cam_tamir_ucreti_sticky_buton_js = () => {
    const generateStickyButon = () => {
      const content = document.querySelector("#content");
      const stickyButon = document.createElement("div");
      stickyButon.classList.add("anatomi_stickyButon");
      content.appendChild(stickyButon);

      const randevuAlınHref = document.createElement("a");
      randevuAlınHref.classList.add("anatomi_oncamtamir_randevuAlınBtn");
      randevuAlınHref.href = "https://www.carglass.com.tr/Randevu/BayiSec";
      const randevuAlınBtn = document.createElement("button");
      randevuAlınBtn.textContent = "Hemen Randevu Alın";
      randevuAlınBtn.classList.add("anatomi_randevuAlınBtn");
      randevuAlınHref.appendChild(randevuAlınBtn);
      stickyButon.appendChild(randevuAlınHref);
    };

    generateStickyButon();
  };
  const on_cam_tamir_ucreti_sticky_buton_init = () => {
    on_cam_tamir_ucreti_sticky_buton_html();
    on_cam_tamir_ucreti_sticky_buton_css();
    on_cam_tamir_ucreti_sticky_buton_js();
  };
  const on_cam_tamir_ucreti_sticky_buton_condition = () => {
    const device = window.innerWidth <= 768;
    const url = "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=26";
    return device;
  };
  if (on_cam_tamir_ucreti_sticky_buton_condition()) {
    on_cam_tamir_ucreti_sticky_buton_init();
  }
}, 1000);
