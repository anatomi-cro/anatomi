const urun_l_sticky_kategori_html = () => {
    const html = `



    `;
    const body = document.querySelector("body");
    body.insertAdjacentHTML("beforeend", html);
};

const urun_l_sticky_kategori_css = () => {
    const style = `
      <style>    
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const urun_l_sticky_kategori_js = () => {

};

const urun_l_sticky_kategori_init = () => {
    urun_l_sticky_kategori_html();
    urun_l_sticky_kategori_css();
    urun_l_sticky_kategori_js();
};

const urun_l_sticky_kategori_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

if (urun_l_sticky_kategori_condition()) {
    urun_l_sticky_kategori_init();
}
