const dk_form_sadelestirme_html = () => {};

const dk_form_sadelestirme_css = () => {};

const dk_form_sadelestirme_js = () => {
  const headerTop = document.querySelector(
    "#header > div.header-top.uk-border-bottom.uk-padding-small-vertical.uk-position-relative.uk-position-z-index.uk-visible\\@l.notranslate"
  );
  if (headerTop) {
    headerTop.style.display = "none";
  }

  const headerUl = document.querySelector(
    "#header > div.header-bottom.uk-sticky.notranslate > nav > div > div > div.uk-navbar-left.notranslate > ul"
  );
  if (headerUl) {
    headerUl.style.display = "none";
  }

  const headerRight = document.querySelector(
    "#header > div.header-bottom.uk-sticky.notranslate > nav > div > div > div.uk-navbar-right.notranslate"
  );
  if (headerRight) {
    headerRight.style.display = "none";
  }
};

const dk_form_sadelestirme_init = () => {
  dk_form_sadelestirme_html();
  dk_form_sadelestirme_css();
  dk_form_sadelestirme_js();
};

const dk_form_sadelestirme_condition = () => {
  return true;
};

setInterval(() => {
  if (dk_form_sadelestirme_condition()) {
    dk_form_sadelestirme_init();
  }
}, 50);
