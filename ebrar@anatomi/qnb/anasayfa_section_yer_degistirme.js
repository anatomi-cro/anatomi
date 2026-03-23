let section_yer_degisikligi_done = false; 
const section_yer_degisikligi_html = () => {};

const section_yer_degisikligi_css = () => {
  const style = `
    <style id="anatomi_section_yer_degisikligi_css">   
     </style>
  `;
  const css = document.querySelector("#anatomi_section_yer_degisikligi_css");
  const head = document.querySelector("head");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const section_yer_degisikligi_js = () => {
  const paketUstSection = document.querySelector(
    "body > main > section.uk-section.section-products-tab"
  );
  const dkUstSection = document.querySelector(
    "body > main > section.uk-section.uk-padding-xlarge-top\\@m.uk-overflow-hidden"
  );
  const dkSection = document.querySelector(
    "body > main > section.uk-section.uk-section-medium.uk-background-gradient-primary.uk-light"
  );
  const paketSection = document.querySelector("#section-survey");

  if (
    paketUstSection &&
    dkUstSection &&
    dkSection &&
    paketSection &&
    !section_yer_degisikligi_done
  ) {
    paketUstSection.insertAdjacentElement("afterend", dkSection);
    dkUstSection.insertAdjacentElement("afterend", paketSection);
    section_yer_degisikligi_done = true; 
  }
};

const section_yer_degisikligi_init = () => {
  section_yer_degisikligi_html();
  section_yer_degisikligi_css();
  section_yer_degisikligi_js();
};

const section_yer_degisikligi_condition = () => {
  const device = window.innerWidth <= 768;
  return device;
};

setInterval(() => {
if (section_yer_degisikligi_condition()) {
    section_yer_degisikligi_init();
}    
},50);