setTimeout(() => {
  const on_cam_tamir_ucreti_sticky_buton_html = () => {
    const html = `
    `;
  };
  const on_cam_tamir_ucreti_sticky_buton_css = () => {
    const style = `
      <style>
       .anatomi_randevuAlınBtnContainer {
        display: flex;
        justify-content: center;
        width: 95%;
        padding: 10px 0px;
       }
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
  const on_cam_tamir_ucreti_sticky_buton_js = () => {
    const generateStickyButon = () => {
      const targetElement = document.querySelector(
        "#content > div > div > div > div > div.span9 > p:nth-child(8)"
      );
      const randevuAlınBtnContainer = document.createElement("div");
      randevuAlınBtnContainer.className = "anatomi_randevuAlınBtnContainer";
      const randevuAlınBtnHref = document.createElement("a");
      randevuAlınBtnHref.classList.add("anatomi_oncamtamir_randevuAlınBtn");
      randevuAlınBtnHref.href = "https://www.carglass.com.tr/Randevu/BayiSec";
      const randevuAlınBtn = document.createElement("button");
      randevuAlınBtn.textContent = "Hemen Randevu Alın";
      randevuAlınBtn.classList.add("anatomi_randevuAlınBtn");
      randevuAlınBtnHref.appendChild(randevuAlınBtn);
      randevuAlınBtnContainer.appendChild(randevuAlınBtnHref);

      if (targetElement && randevuAlınBtnContainer) {
        targetElement.insertAdjacentElement(
          "afterend",
          randevuAlınBtnContainer
        );
      }
    };

    generateStickyButon();
  };
  const on_cam_tamir_ucreti_sticky_buton_init = () => {
    on_cam_tamir_ucreti_sticky_buton_html();
    on_cam_tamir_ucreti_sticky_buton_css();
    on_cam_tamir_ucreti_sticky_buton_js();
  };
  const on_cam_tamir_ucreti_sticky_buton_condition = () => {
    const device = window.innerWidth > 768;
    const url =
      window.location.href ===
      "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=26";
    return device;
  };
  if (on_cam_tamir_ucreti_sticky_buton_condition()) {
    on_cam_tamir_ucreti_sticky_buton_init();
  }
}, 1000);
