const randevu_form_odeme_turu_duzenleme_html = () => {
    const html = `
    `;
  }
  const randevu_form_odeme_turu_duzenleme_css =() => {
    const style = `
      <style id="randevu_form_odeme_turu_css">

      /* --- generateOdemeTitle style ---*/

      .anatomi_odeme_title{
        font-style: normal !important;
        color: black !important;
      }
      .anatomi_odeme_title_span{
      float: unset !important;
      }
  
      /* --- generateOdemeButtons style ---*/

      .anatomi_odeme_buttons_container{
          display: flex !important;
          justify-content: center !important;
          flex-wrap: wrap !important;
          gap: 10px !important;
      }
      .anatomi_odeme_button{
      display: flex;
      justify-content: space-around;
      align-items: center;
            color: black !important;
            border: 1px solid #ccc;
            background: none;
            text-shadow: none;
      }
    .anatomi_odeme_button:hover{
        font-weight: bold !important;
        border: none;
        background: none;
        text-shadow: none;
        background-color: #fedd44 !important;
        color: black !important;
    }
      .anatomi_odeme_button span{
       padding: 2px 4px 4px !important;
       border-radius: 15px;
       order: 1;
      }
    /* --- responsive style --- */
     @media screen and (max-width: 769px) {
       .anatomi_randevu_ilerleme_row_container{
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
     .anatomi_odeme_title{
       text-align: left !important;
     }
      .anatomi_odeme_title_small{
        font-size: 15px;
        line-height: normal;
      }
    .anatomi_odeme_buttons_container{
        flex-wrap: nowrap;
        flex-direction: column;
        width: 60%;
        margin: 0 auto;
    }
   }
  
    </style>
    `;
    const css = document.querySelector("#randevu_form_odeme_turu_css");
    const head = document.querySelector("head");
    if(!css){
    head.insertAdjacentHTML("beforeend", style);
    }
  }
  const randevu_form_odeme_turu_duzenleme_js = () => {
    
    const  generateRandevuİlerleme = () => {
      const randevuİlerlemeRowContainer = document.querySelector("#header-btm > div > div > div")
      if(randevuİlerlemeRowContainer){
        randevuİlerlemeRowContainer.classList.add("anatomi_randevu_ilerleme_row_container");
      }
    }

    const generateOdemeTitle = () => {
      const odemeTitleH1 = document.querySelector("#frmRandevu > div.steps.step3 > h1")
      if(odemeTitleH1){
        odemeTitleH1.classList.add("anatomi_odeme_title");
      }
      const odemeTitleSpan = document.querySelector("#frmRandevu > div.steps.step3 > h1 > span")
      if(odemeTitleSpan){
        odemeTitleSpan.classList.add("anatomi_odeme_title_span");
        }
      const odemeTitleSmall = document.querySelector("#frmRandevu > div.steps.step3 > h1 > small")
      if(odemeTitleSmall){
        odemeTitleSmall.classList.add("anatomi_odeme_title_small");
        }
      const odemeTitleBadge = document.querySelector("#frmRandevu > div.steps.step3 > div > div > a > span")
      if(odemeTitleBadge){
        odemeTitleBadge.forEach((badge) => {
        badge.classList.add("anatomi_odeme_title_badge");
        });
        } 
      
    }
    const generateOdemeButtons = () => {
        const odemeButtonsContainer= document.querySelector("#frmRandevu > div.steps.step3 > div")
    if(odemeButtonsContainer){
        odemeButtonsContainer.classList.add("anatomi_odeme_buttons_container");
    }
    const odemeButtons = document.querySelectorAll("#frmRandevu > div.steps.step3 > div > div > a")
    if(odemeButtons){
        odemeButtons.forEach(button => {
            button.classList.add("anatomi_odeme_button");
            });
    }
    const yadaButtons = document.querySelectorAll("#frmRandevu > div.steps.step3 > div > div > div")
    if(yadaButtons){
        yadaButtons.forEach(button => {
            button.style.display = "none";
            });
    }
  
    }
    generateRandevuİlerleme();
    generateOdemeTitle();
    generateOdemeButtons();

  }


  const randevu_form_odeme_turu_duzenleme_init = () => {
    randevu_form_odeme_turu_duzenleme_html();
    randevu_form_odeme_turu_duzenleme_css();
    randevu_form_odeme_turu_duzenleme_js();
  }


  const randevu_form_odeme_turu_duzenleme_condition = () => {
    const step = document.querySelector("#frmRandevu > div.steps.step3");
      const checkStep = step && step.style.display === "block";
      return checkStep;
};

  setInterval(() => {
      if (randevu_form_odeme_turu_duzenleme_condition()) {
        randevu_form_odeme_turu_duzenleme_init();
      }
    },50)