const paketler_replaces_html = () => {};

const paketler_replaces_css = () => {
  const style = `
      <style>    
      </style>
    `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};

const paketler_replaces_js = () => {
  const bannerSection = document.querySelector(
    "body > main > div.uk-position-relative.uk-margin-32\\@m.notranslate > section"
  );
  if (bannerSection) {
    bannerSection.style.display = "none";
  }
};

const paketler_replaces_init = () => {
  paketler_replaces_html();
  paketler_replaces_css();
  paketler_replaces_js();
};

const paketler_replaces_condition = () => {
  return true;
};

if (paketler_replaces_condition()) {
  paketler_replaces_init();
}
