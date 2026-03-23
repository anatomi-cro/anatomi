const dk_sayfa_duzenleme_html = () => {};

const dk_sayfa_duzenleme_css = () => {};

const dk_sayfa_duzenleme_js = () => {
  const section = document.querySelector(
    "body > main > section.uk-section.section-video"
  );

  if (!section) return;

  if (section.dataset.moved === "true") return;

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const targetElement = document.querySelector(
    isMobile
      ? "body > main > section:nth-child(3)"
      : "body > main > section:nth-child(4)"
  );

  if (!targetElement) return;

  targetElement.insertAdjacentElement("afterend", section);
  section.dataset.moved = "true";
};

const dk_sayfa_duzenleme_init = () => {
  dk_sayfa_duzenleme_html();
  dk_sayfa_duzenleme_css();
  dk_sayfa_duzenleme_js();
};

const dk_sayfa_duzenleme_condition = () => {
  return true;
};

setInterval(() => {
  if (dk_sayfa_duzenleme_condition()) {
    dk_sayfa_duzenleme_init();
  }
}, 50);
