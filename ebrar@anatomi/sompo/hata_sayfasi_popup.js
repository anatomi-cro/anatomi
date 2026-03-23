const hata_sayfasi_popup_html = () => {
  const html = `
    <div class="hata-popup">
      <div class="hata-popup-header">
        <img src="https://r.resimlink.com/So8ybcXELxm.png" alt="Hata Icon" />
        <p>Değerli Müşterimiz, 
          <span>Maalesef size uygun Full Kasko Sigortası teklifi sunamıyoruz. Bu durum, aracınızın eski model olması veya mevcut kasko poliçenizin bulunmaması gibi nedenlerden kaynaklanabilir.</span>
          <span>Aracınızı, belirleyeceğiniz teminat limitiyle çarpma/çarpışma, yangın ve çalınma gibi risklere karşı Mini Kasko Sigortası ile güvence altına alabilirsiniz.</span>
        </p>
      </div>
      <div class="hata-popup-footer">
        <a class="anatomi-mini-kasko-link" href="https://www.somposigorta.com.tr/mini-kasko">Hemen teklif almak için tıklayın</a>
      </div>
    </div>
  `;

  const target = document.querySelector("body > main > div.content.errorpagePage > div.error-page");
  if (target && !document.querySelector(".hata-popup")) {
    target.insertAdjacentHTML("afterbegin", html);
  }
};

const hata_sayfasi_popup_css = () => {
  const style = `
    <style> 
    body > main > div.content.errorpagePage > div.error-page > div.error-page__header {
        display: none;
    }
      .hata-popup {
        width: 100%;
        border: none;
        border-radius: 3px;
        background: #fff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-bottom:20px;
        padding: 20px;
      }
      .hata-popup-header {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        margin-bottom: 15px;
      }
      .hata-popup-header img {
        width: 54px;
        height: 54px;
        margin-top: 20px;
      }
      .hata-popup-header p {
        font-size: 13px;
        color: black;
        font-weight: bold;
      }
      .hata-popup-header span {
        display: block;
        margin-top: 10px;
      }
      .hata-popup-footer {
        text-align: center;
      }
      .hata-popup-footer a {
        display: inline-block;
        padding: 11px 20px;
        background: #B61638;
        color: white;
        border-radius: 16px;
        text-decoration: none;
        font-size: 9px;
        font-weight: bold;
        text-transform: uppercase;
      }  
    </style>
  `;
  const head = document.querySelector("head");
  if (!document.querySelector("head style[data-hata-popup]")) {
    head.insertAdjacentHTML("beforeend", style.replace("<style>", "<style data-hata-popup>"));
  }
};

const hata_sayfasi_popup_js = () => {};

const hata_sayfasi_popup_init = () => {
  hata_sayfasi_popup_html();
  hata_sayfasi_popup_css();
  hata_sayfasi_popup_js();
};

const hata_sayfasi_popup_condition = () => {
  return document.querySelector("body > main > div.content.errorpagePage > div.error-page");
};

const interval = setInterval(() => {
  if (hata_sayfasi_popup_condition()) {
    if (!document.querySelector(".hata-popup")) {
      hata_sayfasi_popup_init();
    }
    clearInterval(interval); 
  }
}, 100);
