const dijital_kopru_avantaj_one_cikarma_html = () => {
  if (document.querySelector(".avantaj-container")) return;
    const html = `
      <div class="avantaj-container">
      <ul class="avantaj-list">
        <li>Ücretsiz ve sınırsız e-Fatura kullanımı</li>
        <li>Hızlı başvuru, kolay kullanım</li>
        <li>1 Yıl e-imza hediyesi</li>
      </ul>
    </div>
  `;

  const targetElement = document.querySelector("body > main > div.uk-position-relative.notranslate > section > div > div > div.uk-width-3-5\\@m.uk-grid-margin.uk-first-column.notranslate > h1")
  targetElement.insertAdjacentHTML("afterend", html);

};

const dijital_kopru_avantaj_one_cikarma_css = () => {
    const style = `
      <style id="dk_avantajlar_one_cikarma_css">    
      body > main > div.uk-position-relative.notranslate > section > div > div > div.uk-width-3-5\@m.uk-grid-margin.uk-first-column.notranslate > div.uk-text-large.uk-margin-remove-last-child.notranslate {
        display: none !important;
      }
       .avantaj-container {
       display: flex;
    justify-content: center;
    margin-top: 20px;
    height: 100px;
      }

      .avantaj-list {
            list-style: none;
    padding: 0;
    width: 100%;
      }

      .avantaj-list li {
        position: relative;
        padding-left: 25px;
        margin-bottom: 15px;
        font-size: 14px;
        color: white;
      }

      .avantaj-list li::before {
        content: "✔"; 
        color: #fff;  
        position: absolute;
        left: 0;
        top: 0;
      }
      .anatomi_dk_avantajlar_ucretsiz_deneyin_btn{
       background-color: #fff;
    color: #1f2152 !important;
    border-radius: 8px;
    font-size: 14px;
    text-decoration: none;
    margin: 10px 0px !important;
    width: 100% !important;
    height: 45px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
      }
      </style>
    `;
    const css = document.querySelector("#dk_avantajlar_one_cikarma_css")
    const head = document.querySelector("head");
    if(!css){
    head.insertAdjacentHTML("beforeend", style);
    }
};

const dijital_kopru_avantaj_one_cikarma_js = () => {
    const element = document.querySelector("body > main > div.uk-position-relative.notranslate > section > div > div > div.uk-width-3-5\\@m.uk-grid-margin.uk-first-column.notranslate > div.uk-text-large.uk-margin-remove-last-child.notranslate")
    if (element) {
        element.style.display = "none";
    }

    const btn = document.querySelector("body > main > div.uk-position-relative.notranslate > section > div > div > div.uk-width-3-5\\@m.uk-grid-margin.uk-first-column.notranslate > a")
    if(btn){
      btn.style.display = "none";
    }

    const anatomiBtn = document.querySelector(".anatomi_dk_avantajlar_ucretsiz_deneyin_btn");
    const targetElement = document.querySelector("body > main > div.uk-position-relative.notranslate > section > div > div > div.uk-width-3-5\\@m.uk-grid-margin.uk-first-column.notranslate");
    if(!anatomiBtn){
      const anatomiBtn = document.createElement("a");
      anatomiBtn.classList.add("anatomi_dk_avantajlar_ucretsiz_deneyin_btn");
      anatomiBtn.href = "https://www.qnb.com.tr/dijitalkopru/dijital-cozumlerimiz/e-donusum-basvuru-formu?p=QNBESOLUTIONS&utm_source=eSolutions&utm_medium=banner&utm_campaign=basvuru";
      anatomiBtn.target = "_blank";
      anatomiBtn.textContent = "Ücretsiz Deneyin";
      targetElement.appendChild(anatomiBtn);
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

setInterval(() =>{
if (dijital_kopru_avantaj_one_cikarma_condition()) {
    dijital_kopru_avantaj_one_cikarma_init();
}
},50);