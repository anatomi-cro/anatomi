const kategori_yonlendirme_html = () => {};

const kategori_yonlendirme_css = () => {
    const style = `
      <style id="anatomi_kategori_yonlendirme_css">    
      </style>
    `;
    const head = document.querySelector("head");
     const css = document.querySelector("#anatomi_kategori_yonlendirme_css");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const kategori_yonlendirme_js = () => {  
    const kampanyaContainer = document.querySelector("#__layout > div > main > div > div > article.pdp-shopping-mode__detail.pdp-shopping-mode__detail > div.product-promotion")
    const kampanyaTitle = document.querySelector("#__layout > div > main > div > div > article.pdp-shopping-mode__detail.pdp-shopping-mode__detail > div.product-promotion > div > div.accordion__title.accordion__icon-position-right > div.product-promotion__accordion__callout > div > p")
    if(kampanyaContainer && kampanyaTitle){
        if (kampanyaTitle.textContent === "Seçili T-shirtlerde 2.ye %70 İndirim") {
                    let aElement = document.querySelector(".anatomi_a_link")
                    if(!aElement) {
                    const aElement = document.createElement("a");
                    aElement.classList.add("anatomi_a_link");
                    aElement.textContent = kampanyaTitle.textContent;
                    aElement.href = "https://www.jackjones.com.tr/tr-tr/kampanyalar/secili-tisort-kampanyasi"; 
                    kampanyaTitle.replaceWith(aElement);
        }
        }           
        
        else if (kampanyaTitle.textContent === "Tüm Şortlarda 2.ye %50 İndirim") {
           let aElement = document.querySelector(".anatomi_a_link")
           if(!aElement) {
            const aElement = document.createElement("a");
            aElement.textContent = kampanyaTitle.textContent;
            aElement.href = "https://www.jackjones.com.tr/tr-tr/kampanyalar/secili-sortlarda-ikinci-urune-yuzde-50-indirim"; 
            aElement.classList.add("anatomi_a_link");
            kampanyaTitle.replaceWith(aElement);
    }
    }
   
    }
};

const kategori_yonlendirme_init = () => {
    kategori_yonlendirme_html();
    kategori_yonlendirme_css();
    kategori_yonlendirme_js();
};

const kategori_yonlendirme_condition = () => {
    return true;

};

if (kategori_yonlendirme_condition()) {
    setInterval(() => {
        kategori_yonlendirme_init();
    }, 100);

}







