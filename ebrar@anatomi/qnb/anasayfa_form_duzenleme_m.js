setTimeout(() => {
    const anasayfa_form_duzenleme_html = () => {};

const anasayfa_form_duzenleme_css = () => {
    const style = `
      <style>    
      .anatomi-form-button {
        width: 100%;
        height: 50px;
        background: #a75da3;
        background: linear-gradient(
          90deg,
          rgba(167, 93, 163, 1) 0%,
          rgba(153, 70, 149, 1) 100%
        );
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
      }
     .anatomi-form-button:hover{
        background: linear-gradient(180deg, #974192 0, #a961a5 100%);
     }
     

      .anatomi-form-button-link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
      }
     .anatomi-form-button-link:hover{
        color: #fff;
        text-decoration: none;
     }

      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const anasayfa_form_duzenleme_js = () => {
    const telefonInput = document.querySelector("#banner-contact-phone > div")
    if(telefonInput) {
        telefonInput.style.display = "none";
    }

    const ucretsizDeneyinBtnContainer = document.createElement("div");
    ucretsizDeneyinBtnContainer.classList.add("anatomi-form-button");

    const ucretsizDeneyinAnchor = document.createElement("a");
    ucretsizDeneyinAnchor.classList.add("anatomi-form-button-link");
    ucretsizDeneyinAnchor.href = "https://www.qnbesolutions.com.tr/ucretsiz-deneme?packageId=1094";
    ucretsizDeneyinAnchor.textContent = "Ücretsiz Deneyin";

    ucretsizDeneyinBtnContainer.appendChild(ucretsizDeneyinAnchor);

    const targetElement = document.querySelector("#banner-contact-phone > span")
    if (targetElement) {
        targetElement.insertAdjacentElement("afterend", ucretsizDeneyinBtnContainer);
    }

};

const anasayfa_form_duzenleme_init = () => {
    anasayfa_form_duzenleme_html();
    anasayfa_form_duzenleme_css();
    anasayfa_form_duzenleme_js();
};

const anasayfa_form_duzenleme_condition = () => {
    const device = window.matchMedia("(max-width: 768px)").matches;
    const url = window.location.href == "https://www.qnbesolutions.com.tr/";
  
    return device;
};

if (anasayfa_form_duzenleme_condition()) {
    anasayfa_form_duzenleme_init();
}
},500)





