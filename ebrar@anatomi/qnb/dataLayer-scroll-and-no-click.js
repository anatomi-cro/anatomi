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
    let hasScrolled60 = false;
let hasPushedReturnTopEvent = false;
let clickedFreeTrial = false;

document.addEventListener("DOMContentLoaded", () => {
  const freeTrialButton = document.querySelector("body > main > div.uk-position-relative.notranslate > section > div > div > div.uk-width-3-5\\@m.uk-first-column.notranslate.uk-grid-margin > a")

  if (freeTrialButton) {
    freeTrialButton.addEventListener("click", () => {
      clickedFreeTrial = true;
    });
  }

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    // Scroll %60'a ulaştıysa
    if (!hasScrolled60 && scrollPercent >= 60) {
      hasScrolled60 = true;
    }

    // Scroll %10'a geri dönerse ve tıklama olmadıysa ve daha önce pushlanmadıysa
    if (hasScrolled60 && !clickedFreeTrial && !hasPushedReturnTopEvent && scrollPercent <= 10) {
      hasPushedReturnTopEvent = true;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "scroll_back_to_top_no_trial_click",
        message: "User scrolled 60%, returned to top, but did not click CTA"
      });
    }
  });
});

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