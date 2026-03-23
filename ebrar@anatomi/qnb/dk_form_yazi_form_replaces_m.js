const dk_form_yazi_replaces_html = () => {};

const dk_form_yazi_replaces_css = () => {};

const dk_form_yazi_replaces_js = () => {
  const baslik = document.querySelector(
    "#DijitalKopru-Banner > section > div > div > div.uk-width-3-5\\@m.uk-first-column.notranslate > h1"
  );
  if (
    baslik &&
    baslik.textContent !==
      "Formu Doldurun, Dijital Köprü ile Aynı Gün İçinde Ücretsiz e-Faturaya Geçin!"
  ) {
    baslik.textContent =
      "Formu Doldurun, Dijital Köprü ile Aynı Gün İçinde Ücretsiz e-Faturaya Geçin!";
  }
  const altBaslik = document.querySelector(
    "#DijitalKopru-Banner > section > div > div > div.uk-width-3-5\\@m.uk-first-column.notranslate > div > p"
  );

  if (altBaslik && !altBaslik.dataset.changed) {
    altBaslik.innerHTML = `Hemen Dijital Köprülü KOBİ'lere özel <strong style="color: #fff;">ömür boyu ücretsiz ve sınırsız</strong> e-Faturaya geçin, QNB ile çalıştığınız sürece e-Faturaya ücret ödemeyin.`;
    altBaslik.dataset.changed = "true";
  }
  const formAltBaslikContainer = document.querySelector(
    "#DijitalKopru-Banner > section > div > div > div.uk-width-3-5\\@m.uk-first-column.notranslate > div"
  );

  const formContainer = document.querySelector(
    "#DijitalKopru-Banner > section > div > div > div.uk-width-2-5\\@m.section-contact-form.uk-grid-margin.uk-first-column.notranslate"
  );
  if (formAltBaslikContainer && formContainer) {
    formContainer.insertAdjacentElement("afterend", formAltBaslikContainer);
  }
};

const dk_form_yazi_replaces_init = () => {
  dk_form_yazi_replaces_html();
  dk_form_yazi_replaces_css();
  dk_form_yazi_replaces_js();
};

const dk_form_yazi_replaces_condition = () => {
  const device = window.innerWidth <= 768;
  return device;
};

setInterval(() => {
  if (dk_form_yazi_replaces_condition()) {
    dk_form_yazi_replaces_init();
  }
}, 50);
