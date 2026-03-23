const tss_resimsiz_orj_html = () => {};

const tss_resimsiz_orj_css = () => {
    const style = `
      <style>    
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const tss_resimsiz_orj_js = () => {
    const image = document.querySelector("body > main > section:nth-child(1)")
    if(image){
        image.style.display = "none";
    }
};

const tss_resimsiz_orj_init = () => {
    tss_resimsiz_orj_html();
    tss_resimsiz_orj_css();
    tss_resimsiz_orj_js();
};

const tss_resimsiz_orj_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

if (tss_resimsiz_orj_condition()) {
    tss_resimsiz_orj_init();
}
