const kategori_sticky_html = () => {};

const kategori_sticky_css = () => {
    const style = `
      <style>    
      .anatomi_sticky {
        position: sticky;
        top: 40px;
        background-color: white;
        z-index: 99999;

      }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const kategori_sticky_js = () => {
    const asideBar = document.querySelector("#__layout > div > main > div > section.content-middle > aside");
    if(asideBar) {
        asideBar.classList.add("anatomi_sticky");
    }
};

const kategori_sticky_init = () => {
    kategori_sticky_html();
    kategori_sticky_css();
    kategori_sticky_js();
};

const kategori_sticky_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

if (kategori_sticky_condition()) {
    kategori_sticky_init();
}
