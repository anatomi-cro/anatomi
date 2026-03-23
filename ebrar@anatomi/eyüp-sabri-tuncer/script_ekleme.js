const deneme_html = () => {};

const deneme_css = () => {
    const style = `
      <style>    
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const deneme_js = () => {
    setTimeout(() => {
        var script = document.createElement("script");
        script.async = true;
        script.src = "https://cdn.primewidgets.com/customers/eyupsabrituncer/init.js";
        document.head.insertAdjacentElement("beforeend", script);
    },500);


};

const deneme_init = () => {
    deneme_html();
    deneme_css();
    deneme_js();
};

const deneme_condition = () => {
    return true;
};

if (deneme_condition()) {
    deneme_init();
}
