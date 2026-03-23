const formSayfasi_avantajlar_followup_html = () => {
  let sliderRoot = document.querySelector("#anatomi_slider_root")
  if(sliderRoot) return;
  const html = `
    <div id="anatomi_slider_root" class="anatomi_slider">
  <div class="anatomi_slider_container">
    <div class="anatomi_slide active">
      <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/qnb-form-avantaj-gorsel-1.jpg" alt="Resim 1">
    </div>
    <div class="anatomi_slide">
      <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/qnb-form-avantaj-gorsel-2.jpg" alt="Resim 2">
    </div>
     <div class="anatomi_slide">
      <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/qnb-form-avantaj-gorsel-3.jpg" alt="Resim 3">
    </div>
  </div>
  <div class="anatomi_slider_buttons">
    <button class="anatomi_prev"><img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/qnb-form-right.png"></img></button>
    <button class="anatomi_next"><img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/qnb-form-left.png"></img></button>
  </div>
</div>
    `;

  const targetElement = document.querySelector(
    "body > main > section > div > div.uk-grid.uk-grid-row-collapse.notranslate"
  );
  if (targetElement) {
    targetElement.insertAdjacentHTML("beforeend", html);
  }
};

const formSayfasi_avantajlar_followup_css = () => {
  const style = `
      <style id="anatomi_form_sayfasi_avantajlar_followup_css">   
      .uk-subnav-step{
        margin-bottom: 0px !important;
      }
      .anatomi_title_container{
        margin-bottom: 20px !important;
      }
      #formFirmInfo{
      padding-top: 25px !important;
      } 
      .anatomi_form_container{
        padding: 40px;
        padding-top: 5px !important;
        background-color: #fff !important;
        border: 1px solid #dfe3ec;
        border-radius: 8px;
        position: relative;
      }
      .anatomi_formContainer_title{
        font-size: 26px !important;
        margin-bottom: 0px !important;
      }
      .anatomi_form_alt_container{
        border: none;
        margin-bottom: 0px !important;
        margin-left: 0px !important;
        padding: 0px;
      }
      .anatomi_form_input_container{
       border-bottom: 1px solid #dfe3ec;
        border-top: none;
        border-left: none;
        border-right: none;
        border-radius: 0px;
        padding-bottom: 10px;
        margin-left: 0px !important;
      }
      .anatomi_uk_text_right{
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        padding-top: 20px;
      }
      .anatomi_price_container{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        cursor: pointer;
      }
        .anatomi_orj_ucret_container{
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.3s ease;
        position: absolute;
        left: 30px;
        top: 160px;
        width: 400px;
        height: 200px;
    }

    .anatomi_orj_ucret_container.active{
        visibility: visible;
        opacity: 1;
    }
   .anatomi_fiyat_step_2{
     top: 280px !important;
   }
    .anatomi_sticky_price_detail{
      border: 1px solid #080808 !important;
      border-radius: 30px;
    }

     .anatomi_slider {
     position: relative;
    width: fit-content;
    height: 700px;
    overflow: hidden;
    margin: 0px auto;
    border-radius: 12px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
    .anatomi_slider.anatomi_step_2{
      margin: 25px auto;
    }

.anatomi_slider_container {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 500px;
}

.anatomi_slide {
  min-width: 100%;
  transition: opacity 0.5s ease;
    text-align: center;       
  display: flex;
  flex-direction: column;
  align-items: center;      
  justify-content: center;
  padding: 0px;           
  box-sizing: border-box;
}

.anatomi_slide img {
    max-width: 100%;          
  max-height: 100%;         
  object-fit: contain;     
  border-radius: 8px;
}
.anatomi_slide p {
 font-size: 25px;
    width: 60%;
    margin-top: 50px;
}
    .anatomi_slider_buttons {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin: 15px 0;
      position: relative;
}

.anatomi_prev, .anatomi_next {
  background: none;
  border: none;
  padding: 0px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 20px;
  transition: background 0.3s ease;
}

.anatomi_prev img , .anatomi_next img{
  height: 40px;
}

.anatomi_prev { left: 10px; }
.anatomi_next { right: 10px; }

.anatomi_ust_general_form_container{
    gap: 100px;
    position: relative;
}
.anatomi_general_form_container{
    width: 55%;
}
.section-payment{
    display: flex;
    justify-content: center;
    align-items: center;
}
.anatomi_buttons_container{
    display: flex;
    gap: 20px;
}
.anatomi_buttons_container .back-button{
    padding: 4px 15px !important;
}

.anatomi_buttons_container .step-2-button{
    padding: 2px 10px !important;

}
    .anatomi_toplam_value{
      display:flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
    .arrow-up {
      width: 15px;
      transform: rotate(0deg);
      transition: transform 0.3s ease;
    }
    .arrow-up.active {
      transform: rotate(180deg);
    }

    @media screen and (max-width: 1024px){
      .anatomi_general_form_container{
        width: 53%;
      }
      .anatomi_slider_container{
       width: 350px;
      }
    }
      </style>
    `;
  const head = document.querySelector("head");
  const css = document.querySelector("#anatomi_form_sayfasi_avantajlar_followup");
  if (!css){
  head.insertAdjacentHTML("beforeend", style);
  }
};

const formSayfasi_avantajlar_followup_js = () => {
  const generalUstFormContainer = document.querySelector(
    "body > main > section > div > div.uk-grid.uk-grid-row-collapse.notranslate"
  );
  if (generalUstFormContainer) {
    generalUstFormContainer.classList.add("anatomi_ust_general_form_container");
  }
  const generalFormContainer = document.querySelector(
    "body > main > section > div > div.uk-grid.uk-grid-row-collapse.notranslate > div.uk-width-2-3\\@m.notranslate.uk-first-column"
  );
  if (generalFormContainer) {
    generalFormContainer.classList.add("anatomi_general_form_container");
  }
  const titleContainer = document.querySelector("body > main > section > div > div.uk-grid.uk-margin-24.uk-margin-48\\@m.notranslate");
  if (titleContainer) {
    titleContainer.classList.add("anatomi_title_container");
  }
  const formContainerTitle = document.querySelector("body > main > section > div > div.uk-grid.uk-margin-24.uk-margin-48\\@m.notranslate > div > h1");
  if (formContainerTitle) {
    formContainerTitle.classList.add("anatomi_formContainer_title");
    formContainerTitle.textContent = "Kredi Kartı Gerekmeden, Ücretsiz Deneme Sürenizi Hemen Başlatın!";
  }
  const formContainerAltTitle = document.querySelector("body > main > section > div > div.uk-grid.uk-margin-24.uk-margin-48\\@m.notranslate > div > div");
  if (formContainerAltTitle) {
    formContainerAltTitle.style.display = "none";
  }
  const generateFormStep1 = () => {
    const formTitle = document.querySelector("#formUserInfo > div.uk-background-default.uk-border.uk-border-rounded.uk-padding-20.uk-padding-40\\@m.uk-margin-24.uk-margin-32\\@m.contactInfo.notranslate.anatomi_form_alt_container > div > div:nth-child(2) > h2");
    if(formTitle){
      formTitle.style.display = "none";
    }
    const formUserInfo = document.querySelector("#formUserInfo");
    if (formUserInfo) formUserInfo.classList.add("anatomi_form_container");

    const formUserInfoAltDiv = document.querySelector(
      "#formUserInfo > div.uk-background-default.uk-border.uk-border-rounded.uk-padding-20.uk-padding-40\\@m.uk-margin-24.uk-margin-32\\@m.contactInfo.notranslate"
    );
    if (formUserInfoAltDiv)
      formUserInfoAltDiv.classList.add("anatomi_form_alt_container");

    const formInputContainer = document.querySelector(
      "#formUserInfo > div.uk-background-default.uk-border.uk-border-rounded.uk-padding-20.uk-padding-40\\@m.uk-margin-24.uk-margin-32\\@m.contactInfo.notranslate > div"
    );
    if (formInputContainer)
      formInputContainer.classList.add("anatomi_form_input_container");

    const ukTextRight = document.querySelector(
      "#formUserInfo > div.uk-text-right.notranslate"
    );
    if (ukTextRight) ukTextRight.classList.add("anatomi_uk_text_right");

    let fiyatContainer = ukTextRight?.querySelector(".anatomi_price_container");

    if (!fiyatContainer) {
      fiyatContainer = document.createElement("div");
      fiyatContainer.classList.add("anatomi_price_container");
      ukTextRight.appendChild(fiyatContainer);
    }
    if (fiyatContainer.dataset.added === "true") return;

    const fiyatElement = document.querySelector(
      "body > main > section > div > div.uk-grid.uk-grid-row-collapse.notranslate > div.uk-width-1-3\\@m.notranslate > div.uk-background-secondary.uk-background-default\\@m.uk-border.uk-border-rounded.uk-padding-24-32\\@m.uk-text-emphasis.uk-position-sticky.uk-top-124.sticky-price-detail.notranslate > div.uk-margin-small-top.uk-margin-top\\@m.uk-flex.uk-flex-between.uk-flex-middle.uk-text-default.uk-text-bold.uk-visible\\@m.notranslate > span:nth-child(2)"
    );

    if (fiyatElement) {
      const fiyatText = fiyatElement.textContent.trim();
      fiyatContainer.innerHTML = `
        <span class="anatomi_toplam_label">Toplam Tutar</span>
        <span class="anatomi_toplam_value">${fiyatText} <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/qnb-form-sayfasi-up-arrow-icon.png" class="arrow-up"></img></span>
      `;
      fiyatContainer.dataset.added = "true";
    }

    const orjUcretContainer = document.querySelector(
      "body > main > section > div > div.uk-grid.uk-grid-row-collapse.notranslate > div.uk-width-1-3\\@m.notranslate"
    );
    if (orjUcretContainer) {
      orjUcretContainer.classList.add("anatomi_orj_ucret_container");
    }
    const stickyPriceDetail = document.querySelector(
      "body > main > section > div > div.uk-grid.uk-grid-row-collapse.notranslate > div.uk-width-1-3\\@m.notranslate > div.uk-background-secondary.uk-background-default\\@m.uk-border.uk-border-rounded.uk-padding-24-32\\@m.uk-text-emphasis.uk-position-sticky.uk-top-124.sticky-price-detail.notranslate"
    );
    if (stickyPriceDetail) {
      stickyPriceDetail.classList.add("anatomi_sticky_price_detail");
    }

   fiyatContainer.addEventListener("click", () => {
      const arrows =  document.querySelectorAll(".arrow-up")

      if (!orjUcretContainer.classList.contains("active")) {
        orjUcretContainer.classList.add("active");
      arrows.forEach(element => {
        element.classList.add("active");    
      });
      } else {
        orjUcretContainer.classList.remove("active");
          arrows.forEach(element => {
        element.classList.remove("active");    
      });
      }
    });


    window.addEventListener("click", (event) => {
      if(event.target === orjUcretContainer){
        orjUcretContainer.classList.remove("active");
        arrows.forEach(element => {
          element.classList.remove("active");    
        });
      }
    })
  };

  const generateFormStep2 = () => {
    const formTitle = document.querySelector("#formFirmInfo > div.uk-background-default.uk-border.uk-border-rounded.uk-padding-20.uk-padding-40\\@m.accountInfo.notranslate.anatomi_form_alt_container > div > div:nth-child(1) > h2")
    if(formTitle){
      formTitle.style.display = "none";
    }
    const formUserInfo = document.querySelector("#formFirmInfo");
    if (formUserInfo) formUserInfo.classList.add("anatomi_form_container");

    const formUserInfoAltDiv = document.querySelector(
      "#formFirmInfo > div.uk-background-default.uk-border.uk-border-rounded.uk-padding-20.uk-padding-40\\@m.accountInfo.notranslate"
    );
    if (formUserInfoAltDiv)
      formUserInfoAltDiv.classList.add("anatomi_form_alt_container");

    const formInputContainer = document.querySelector(
      "#formFirmInfo > div.uk-background-default.uk-border.uk-border-rounded.uk-padding-20.uk-padding-40\\@m.accountInfo.notranslate > div"
    );
    if (formInputContainer)
      formInputContainer.classList.add("anatomi_form_input_container");

    const confirmInfoContainer = document.querySelector(
      "#formFirmInfo > div.uk-width-1-1.uk-margin-small.notranslate"
    );
    if (confirmInfoContainer) {
      formInputContainer.appendChild(confirmInfoContainer);
    }

    const ukTextRight = document.querySelector(
      "#formFirmInfo > div.uk-text-right.uk-flex.uk-flex-between.uk-flex-middle.notranslate"
    );
    if (ukTextRight) ukTextRight.classList.add("anatomi_uk_text_right");

    let buttonsContainer = document.querySelector(".anatomi_buttons_container");
    if (!buttonsContainer) {
      buttonsContainer = document.createElement("div");
      buttonsContainer.classList.add("anatomi_buttons_container");
      ukTextRight.appendChild(buttonsContainer);
    }

    const backButton = document.querySelector("#backButton");
    const submitButton = document.querySelector(
      "#formFirmInfo > div.uk-text-right.uk-flex.uk-flex-between.uk-flex-middle.notranslate.anatomi_uk_text_right > button"
    );
    if (backButton && submitButton) {
      buttonsContainer.appendChild(backButton);
      buttonsContainer.appendChild(submitButton);
    }
    let fiyatContainer = ukTextRight?.querySelector(".anatomi_price_container");

    if (!fiyatContainer) {
      fiyatContainer = document.createElement("div");
      fiyatContainer.classList.add("anatomi_price_container");
      ukTextRight.appendChild(fiyatContainer);
    }
    if (fiyatContainer.dataset.added === "true") return;

    const fiyatElement = document.querySelector(
      "body > main > section > div > div.uk-grid.uk-grid-row-collapse.notranslate > div.uk-width-1-3\\@m.notranslate > div.uk-background-secondary.uk-background-default\\@m.uk-border.uk-border-rounded.uk-padding-24-32\\@m.uk-text-emphasis.uk-position-sticky.uk-top-124.sticky-price-detail.notranslate > div.uk-margin-small-top.uk-margin-top\\@m.uk-flex.uk-flex-between.uk-flex-middle.uk-text-default.uk-text-bold.uk-visible\\@m.notranslate > span:nth-child(2)"
    );

    if (fiyatElement) {
      const fiyatText = fiyatElement.textContent.trim();
      fiyatContainer.innerHTML = `
        <span class="anatomi_toplam_label">Toplam Tutar</span>
        <span class="anatomi_toplam_value">${fiyatText} <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/qnb-form-sayfasi-up-arrow-icon.png" class="arrow-up"></img></span>
      `;
      fiyatContainer.dataset.added = "true";
    }

    const orjUcretContainer = document.querySelector(
      "body > main > section > div > div.uk-grid.uk-grid-row-collapse.notranslate > div.uk-width-1-3\\@m.notranslate"
    );
    if (orjUcretContainer) {
      orjUcretContainer.classList.add("anatomi_orj_ucret_container");
    }
    const stickyPriceDetail = document.querySelector(
      "body > main > section > div > div.uk-grid.uk-grid-row-collapse.notranslate > div.uk-width-1-3\\@m.notranslate > div.uk-background-secondary.uk-background-default\\@m.uk-border.uk-border-rounded.uk-padding-24-32\\@m.uk-text-emphasis.uk-position-sticky.uk-top-124.sticky-price-detail.notranslate"
    );
    if (stickyPriceDetail) {
      stickyPriceDetail.classList.add("anatomi_sticky_price_detail");
    }

    fiyatContainer.addEventListener("click", () => {
      const arrows =  document.querySelectorAll(".arrow-up")

      if (!orjUcretContainer.classList.contains("active")) {
        orjUcretContainer.classList.add("active");
      arrows.forEach(element => {
        element.classList.add("active");    
      });
      } else {
        orjUcretContainer.classList.remove("active");
          arrows.forEach(element => {
        element.classList.remove("active");    
      });
      }
    });
  }

  const generateSlider = () => {
    const slides = document.querySelectorAll(".anatomi_slide");
    const prevBtn = document.querySelector(".anatomi_prev");
    const nextBtn = document.querySelector(".anatomi_next");
    const sliderContainer = document.querySelector(".anatomi_slider_container");

    let currentIndex = 0;
    let autoSlideInterval;

    function showSlide(index) {
      if (index < 0) {
        currentIndex = slides.length - 1;
      } else if (index >= slides.length) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }

      const offset = -currentIndex * 100;
      sliderContainer.style.transform = `translateX(${offset}%)`;

      prevBtn.style.pointerEvents = currentIndex === 0 ? "none" : "all";
      prevBtn.disabled = currentIndex === 0 ? true : false;
      prevBtn.style.opacity = currentIndex === 0 ? "0.5" : "1";

      nextBtn.style.pointerEvents =
        currentIndex === slides.length - 1 ? "none" : "all";
      nextBtn.disabled = currentIndex === slides.length - 1 ? true : false;
      nextBtn.style.opacity = currentIndex === slides.length - 1 ? "0.5" : "1";
    }

    prevBtn.addEventListener("click", () => {
      showSlide(currentIndex - 1);
      resetAutoSlide();
    });
    nextBtn.addEventListener("click", () => {
      showSlide(currentIndex + 1);
      resetAutoSlide();
    });

    function autoSlide() {
      autoSlideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
      }, 7000);
    }

    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      autoSlide();
    }

    showSlide(currentIndex);
    autoSlide();
  };

  document.addEventListener('click', (e) => {
    const priceContainer = e.target.closest('.anatomi_price_container');
    if (!priceContainer) {
      const orjUcretContainer = document.querySelector('.anatomi_orj_ucret_container');
      if (orjUcretContainer) {
        orjUcretContainer.classList.remove('active');
      }
      const arrows = document.querySelectorAll('.arrow-up');
      arrows.forEach(arrow => {
        arrow.classList.remove('active');
      });
    }
  });

  const generateStepsClass = () => {
     const slider = document.querySelector("#anatomi_slider_root");
  const fiyatContainer = document.querySelector(".anatomi_orj_ucret_container");
  const userInfo = document.querySelector("#formUserInfo");

  if (!slider || !fiyatContainer || !userInfo) return; 

  if (userInfo.classList.contains("uk-hidden")) {
    slider.classList.add("anatomi_step_2");
    fiyatContainer.classList.add("anatomi_fiyat_step_2");
    slider.classList.remove("anatomi_step_1");
    fiyatContainer.classList.remove("anatomi_fiyat_step_1");
  } else {
    slider.classList.add("anatomi_step_1");
    slider.classList.remove("anatomi_step_2");
    fiyatContainer.classList.add("anatomi_fiyat_step_1");
    fiyatContainer.classList.remove("anatomi_fiyat_step_2");
  }
  };


  setInterval(() => {
  generateFormStep1();
  generateFormStep2();
  generateStepsClass();
  }, 50);
  generateSlider();
};

const formSayfasi_avantajlar_followup_init = () => {
  formSayfasi_avantajlar_followup_html();
  formSayfasi_avantajlar_followup_css();
  formSayfasi_avantajlar_followup_js();
};

const formSayfasi_avantajlar_followup_condition = () => {
  const device = window.innerWidth > 768;
  return device;
};


const initInterval = setInterval(() => {
  if (formSayfasi_avantajlar_followup_condition()) {
    if (!document.querySelector("#anatomi_slider_root")) {
      formSayfasi_avantajlar_followup_init();
      clearInterval(initInterval); 
    }
  }
}, 300);

/******************************* EVENT TRACKING *******************************/

setTimeout(() => {
  function addOrUpdateTestState(testID, state, URL, className, divID) {
    if (URL && !window.location.href.includes(URL)) return;
    let element = null;
    if (className) element = document.querySelector(`.${className}`);
    if (!element && divID) element = document.querySelector(`#${divID}`);
    if (className && !element) return;

    if (typeof Storage === "undefined") {
      console.error("Session storage is not supported in this browser.");
      return;
    }

    const stateKey = `anatomiTestState_${testID}`;
    const idKey = `anatomiTestID_${testID}`;

    sessionStorage.setItem(stateKey, state);
    sessionStorage.setItem(idKey, testID);

    return { stateKey, idKey };
  }


  const testID = "1004173311";
  const state = "varyasyon";
  const url = "ucretsiz-deneme";
  const className =  null;
  const divID = "formUserInfo";

  addOrUpdateTestState(testID, state, url, className, divID);
}, 1000);