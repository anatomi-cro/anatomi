const urun_detay_avantajlar_html = () => {
  const html = `
    <div class="anatomi-urun-avantajlar-container">
      <div class="anatomi-urun-avantajlar-yazi">Randevunuzu birkaç dakikada alın.</div>

      <div class="anatomi-urun-avantajlar-resimler">
        <div class="anatomi-urun-avantaj-kutu">
          <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/carglass-urun-detay-avantaj-icon1-red.png" alt="Avantaj 1">
          <p>Ücretsiz</p>
        </div>
        <div class="anatomi-urun-avantaj-kutu">
          <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/carglass-urun-detay-avantaj-icon2-red.png" alt="Avantaj 2">
          <p>Hızlı Çözüm</p>
        </div>
        <div class="anatomi-urun-avantaj-kutu">
          <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/carglass-urun-detay-avantaj-icon3-red.png" alt="Avantaj 3">
          <p>Orijinal Kalite</p>
        </div>
      </div>

      <a href="https://www.carglass.com.tr/randevu/bayi-sec" class="anatomi-urun-avantajlar-buton">Randevu Al</a>
    </div>
  `;
  const element = document.querySelector(".anatomi-urun-avantajlar-container");
  if (!element) {
    const p = document.querySelector("#content > div > div > div > div > div.span9 > p:nth-child(8)");
    if (p) p.insertAdjacentHTML("afterend", html);
  }
};

const urun_detay_avantajlar_css = () => {
  const style = `
    <style id="anatomi_urun_detay_avantajlar_css">
      .anatomi-urun-avantajlar-container {
        position: relative;
        width: 100%;
        max-width: 360px;
        margin: 30px auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 12px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .anatomi-urun-avantajlar-yazi {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 14px;
        font-weight: 600;
        background-color: #D95B44;
        border-radius: 2px;
        color: #fff;
        padding: 5px 20px;
      }

      .anatomi-urun-avantajlar-resimler {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 15px;
        margin: 40px 0 20px 0;
      }

      .anatomi-urun-avantaj-kutu {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90px;
      }

      .anatomi-urun-avantaj-kutu img {
        width: 60px;
        height: 60px;
        border-radius: 10px;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      .anatomi-urun-avantaj-kutu img:hover {
        transform: scale(1.05);
      }

      .anatomi-urun-avantaj-kutu p {
        margin-top: 8px;
        font-size: 12px;
        font-weight: 500;
        color: #333;
      }

      .anatomi-urun-avantajlar-buton {
        background-color: #D95B44;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 10px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s ease;
        width: 70%;
        text-transform: uppercase;
        text-decoration: none;
      }

      .anatomi-urun-avantajlar-buton:hover {
        background-color: #D95B44;
        color: #fff;
      }

    </style>
  `;
  const css = document.querySelector("#anatomi_urun_detay_avantajlar_css");
  const head = document.querySelector("head");
  if (!css) head.insertAdjacentHTML("beforeend", style);
};

const urun_detay_avantajlar_js = () => {};

const urun_detay_avantajlar_init = () => {
  urun_detay_avantajlar_html();
  urun_detay_avantajlar_css();
  urun_detay_avantajlar_js();
};

const urun_detay_avantajlar_condition = () => {
  const device = window.innerWidth <= 768;
  return device;
};

setInterval(() => {
  if (urun_detay_avantajlar_condition()) {
    urun_detay_avantajlar_init();
  }
}, 50);
