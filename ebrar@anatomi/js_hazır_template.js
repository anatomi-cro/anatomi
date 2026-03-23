const deneme_html = () => {};

const deneme_css = () => {};

const deneme_js = () => {};

const deneme_init = () => {
  deneme_html();
  deneme_css();
  deneme_js();
};

const deneme_condition = () => {
  return true;
};

setInterval(() => {
  if (deneme_condition()) {
    deneme_init();
  }
}, 50);
