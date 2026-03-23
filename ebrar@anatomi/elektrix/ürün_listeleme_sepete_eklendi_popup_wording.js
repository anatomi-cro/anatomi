const sepete_eklendi_popup_wording_html = () => {};

const sepete_eklendi_popup_wording_css = () => {
    const style = `
      <style>    
      .pButtons{
        flex-direction: row;
      }
      #cartPopup > div.pButtons > button:nth-child(2){
        color: white;
        background-color: #0581BF;
      }
       #cartPopup > div.pButtons > button:nth-child(1){
        background-color: #D5D5D5;
        color: black;
      }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const sepete_eklendi_popup_wording_js = () => {
};

const sepete_eklendi_popup_wording_init = () => {
    sepete_eklendi_popup_wording_html();
    sepete_eklendi_popup_wording_css();
    sepete_eklendi_popup_wording_js();
};

const sepete_eklendi_popup_wording_condition = () => {
    const device = window.innerWidth <= 768;    
    return device;
};

if (sepete_eklendi_popup_wording_condition()) {
    sepete_eklendi_popup_wording_init();
}
