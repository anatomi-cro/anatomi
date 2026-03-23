const dijital_kopru_avantaj_one_cikarma_html = () => {
    const html = `
    <div class="avantaj-container">
      <div class="avantaj-box">
        <img src="https://r.resimlink.com/W7X8uLc.png" alt="Avantaj 1" />
        <p>e-Dönüşüm Çözümleri</p>
      </div>
      <div class="avantaj-box">
        <img src="https://r.resimlink.com/5taCF.png" alt="Avantaj 2" />
        <p>Ücretsiz ve Sınırsız Kullanım</p>
      </div>
      <div class="avantaj-box">
        <img src="https://r.resimlink.com/CWANgq.png" alt="Avantaj 3" />
        <p>İndirimli Fiyatlar</p>
      </div>
    </div>
  `;

  const targetElement = document.querySelector("body > main > div.uk-position-relative.notranslate > section > div > div > div.uk-width-3-5\\@m.uk-grid-margin.uk-first-column.notranslate > h1")
  targetElement.insertAdjacentHTML("afterend", html);

};

const dijital_kopru_avantaj_one_cikarma_css = () => {
    const style = `
      <style>    
      body > main > div.uk-position-relative.notranslate > section > div > div > div.uk-width-3-5\@m.uk-grid-margin.uk-first-column.notranslate > div.uk-text-large.uk-margin-remove-last-child.notranslate {
        display: none !important;
      }
        .avantaj-container {
            display: flex;
    justify-content: space-around;
    gap: 20px;
    margin: 0 auto;
    width: 100%;
      }

      .avantaj-box {
          display: flex;
    flex-direction: column;
    gap: 10px;
        flex: 1;
        height: 70px;
        text-align: center;
        background: #9A4895;
        border-radius: 8px;
        padding: 15px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      }

      .avantaj-box img {
        display: block;
        margin: 0 auto;
        width: 40px;
        height: 40px;
      }

      .avantaj-box p {
        font-size: 10px;
        color: white;
        font-weight: bold;
        margin: 0;
      }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const dijital_kopru_avantaj_one_cikarma_js = () => {
    const element = document.querySelector("body > main > div.uk-position-relative.notranslate > section > div > div > div.uk-width-3-5\\@m.uk-grid-margin.uk-first-column.notranslate > div.uk-text-large.uk-margin-remove-last-child.notranslate")
    if (element) {
        element.style.display = "none";
    }
};

const dijital_kopru_avantaj_one_cikarma_init = () => {
    dijital_kopru_avantaj_one_cikarma_html();
    dijital_kopru_avantaj_one_cikarma_css();
    dijital_kopru_avantaj_one_cikarma_js();
};

const dijital_kopru_avantaj_one_cikarma_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

if (dijital_kopru_avantaj_one_cikarma_condition()) {
    dijital_kopru_avantaj_one_cikarma_init();
}
