setTimeout(() => {
  const on_cam_catlak_tamiri_sticky_buton_html = () => {
    const html = `
    `;
  };
  const on_cam_catlak_tamiri_sticky_buton_css = () => {
    const style = `
      <style>
      .anatomi_randevuAlınBtn {
        background-color: #FEDD44;
        border: none;
        color: black;
        font-weight: bold;
        font-size: 16px;
        padding: 7px 35px;
        text-align: center;
        border-radius: 5px;

        }
    </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
  };
  const on_cam_catlak_tamiri_sticky_buton_js = () => {
    const generateStickyButon = () => {
      const targetElement = document.querySelector(
        "#content > div > div > div > div > div.span9 > p:nth-child(5)"
      );
      if (targetElement) {
        const randevuAlınHref = document.createElement("a");
        randevuAlınHref.classList.add("anatomi_oncamcatlak_randevuAlınBtn");
        randevuAlınHref.href = "https://www.carglass.com.tr/Randevu/BayiSec";
        const randevuAlınBtn = document.createElement("button");
        randevuAlınBtn.textContent = "Hemen Randevu Alın";
        randevuAlınBtn.classList.add("anatomi_randevuAlınBtn");
        randevuAlınHref.appendChild(randevuAlınBtn);

        if (targetElement && randevuAlınHref) {
          targetElement.insertAdjacentElement("afterend", randevuAlınHref);
        }
      }
    };
    generateStickyButon();
  };
  const on_cam_catlak_tamiri_sticky_buton_init = () => {
    on_cam_catlak_tamiri_sticky_buton_html();
    on_cam_catlak_tamiri_sticky_buton_css();
    on_cam_catlak_tamiri_sticky_buton_js();
  };
  const on_cam_catlak_tamiri_sticky_buton_condition = () => {
    const device = window.innerWidth > 768;
    const url =
      window.location.href ===
      "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=24";
    return device;
  };
  if (on_cam_catlak_tamiri_sticky_buton_condition()) {
    on_cam_catlak_tamiri_sticky_buton_init();
  }
}, 1000);
