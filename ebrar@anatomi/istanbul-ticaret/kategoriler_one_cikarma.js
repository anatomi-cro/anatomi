const kategoriler_one_cikarma_html = () => {};

const kategoriler_one_cikarma_css = () => {
    const style = `
      <style>    
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const kategoriler_one_cikarma_js = () => {
    const kategorilerContainer = document.querySelector("#relation\\|598")
    const targetElement = document.querySelector("body > div:nth-child(6)")

    if(kategorilerContainer && targetElement){
        targetElement.insertAdjacentElement("afterend", kategorilerContainer);
        }
};

const kategoriler_one_cikarma_init = () => {
    kategoriler_one_cikarma_html();
    kategoriler_one_cikarma_css();
    kategoriler_one_cikarma_js();
};

const kategoriler_one_cikarma_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

if (kategoriler_one_cikarma_condition()) {
    kategoriler_one_cikarma_init();
}
