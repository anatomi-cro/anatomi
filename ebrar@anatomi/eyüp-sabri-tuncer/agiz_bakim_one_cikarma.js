const agiz_bakim_one_cikarma_html = () => {};

const agiz_bakim_one_cikarma_css = () => {
    const style = `
      <style>    
      .anatomi-agiz-bakim {
          flex-direction: row !important;
    align-items: center;
    gap: 5px;
    justify-content: flex-start !important;
      }
      .anatomi-agiz-bakim-icon {
          width: 18px;
      }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const agiz_bakim_one_cikarma_js = () => {

    const targetElement = document.querySelector("#wide-nav > div > div > div > div > div.newHeaderNav > ul > li:nth-child(6) > a")
    if(targetElement) {
        targetElement.classList.add("anatomi-agiz-bakim");
        const image = document.createElement("img");
        image.src = "https://cro-anatomi.s3.eu-north-1.amazonaws.com/eyu%CC%88p-sabri-tuncer-agiz-bakim.png";
        image.alt = "Agiz Bakim";
        image.classList.add("anatomi-agiz-bakim-icon");

        targetElement.insertAdjacentElement("afterbegin", image);
    }
};

const agiz_bakim_one_cikarma_init = () => {
    agiz_bakim_one_cikarma_html();
    agiz_bakim_one_cikarma_css();
    agiz_bakim_one_cikarma_js();
};

const agiz_bakim_one_cikarma_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

if (agiz_bakim_one_cikarma_condition()) {
    agiz_bakim_one_cikarma_init();
}
