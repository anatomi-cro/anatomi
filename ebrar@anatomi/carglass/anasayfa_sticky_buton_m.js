setTimeout(() => {
  const anasayfa_sticky_buton_html = () => {
    const html = `
  `;
  };

  const anasayfa_sticky_buton_css = () => {
    const style = `
    <style>
      .anatomi_stickyButon {
        display: none;
        justify-content: space-around;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: white;
        color: white;
        border-top: 3px solid #e7e7e7;
        text-align: center;
        padding: 15px 0;
        z-index: 9999999999999;
        transition: opacity 0.3s ease-in-out;
      }

      .anatomi_stickyButon.show {
        display: flex;
      }

      .anatomi_randevuAlınBtn,
      .anatomi_siziArayalımBtn {
        background-color: #fedd44;
        border: none;
        color: black;
        font-weight: bold;
        font-size: 16px;
        padding: 10px 35px;
        text-align: center;
        border-radius: 5px;
      }
    </style>
  `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
  };

  const anasayfa_sticky_buton_js = () => {
    const generateStickyButon = () => {
      const header = document.querySelector("#header");
      const stickyButon = document.createElement("div");
      stickyButon.classList.add("anatomi_stickyButon");
      header.appendChild(stickyButon);

      const randevuAlınHref = document.createElement("a");
      randevuAlınHref.classList.add("anatomi_randevuAlinButon");
      randevuAlınHref.href = "https://www.carglass.com.tr/Randevu/BayiSec";
      const randevuAlınBtn = document.createElement("button");
      randevuAlınBtn.textContent = "Randevu Alın";
      randevuAlınBtn.classList.add("anatomi_randevuAlınBtn");
      randevuAlınHref.appendChild(randevuAlınBtn);
      stickyButon.appendChild(randevuAlınHref);

      const siziArayalımHref = document.createElement("a");
      siziArayalımHref.classList.add("anatomi_siziArayalimButon");
      siziArayalımHref.href =
        "https://www.carglass.com.tr/Randevu/SiziArayalim";
      const siziArayalımBtn = document.createElement("button");
      siziArayalımBtn.textContent = "Sizi Arayalım";
      siziArayalımBtn.classList.add("anatomi_siziArayalımBtn");
      siziArayalımHref.appendChild(siziArayalımBtn);
      stickyButon.appendChild(siziArayalımHref);

      return stickyButon;
    };

    const stickyButon = generateStickyButon();

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      if (
        scrollPosition > 300 &&
        scrollPosition < documentHeight - windowHeight
      ) {
        stickyButon.classList.add("show");
      } else if (scrollPosition <= 300) {
        stickyButon.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
  };

  const anasayfa_sticky_buton_init = () => {
    anasayfa_sticky_buton_html();
    anasayfa_sticky_buton_css();
    anasayfa_sticky_buton_js();
  };

  const anasayfa_sticky_buton_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
  };

  if (anasayfa_sticky_buton_condition()) {
    anasayfa_sticky_buton_init();
  }
}, 500);
