const form_sayfasi_avantajlar_one_cikarma_html = () => {
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

    const targetElement = document.querySelector("body > main > section > div > div.uk-grid.uk-grid-row-collapse.notranslate")
    if (targetElement) {
        targetElement.insertAdjacentHTML("beforeend", html);
    }
   };

const form_sayfasi_avantajlar_one_cikarma_css = () => {
    const style = `
      <style id="anatomi_form_sayfasi_avantajlar_one_cikarma_css">   

      body > main > section > div > div.uk-grid.uk-grid-row-collapse.notranslate{
      margin-left: 50px !important;
      flex-wrap: nowrap !important;
      }
      .anatomi_form_container{
       background: white;
        padding: 50px;
      }
     .anatomi_form_alt_container{
        width: 550px;
     }
   .anatomi_subnav{
    width: 550px;
    margin-bottom: 30px;
    }
    .anatomi_form_info {
    width: fit-content;
    border: none;
    padding: 0px;
    }
    .anatomi_form_inputs {
    display: flex;
    flex-direction: column !important;
    width: 500px !important;
    }

   .anatomi_form_input, .anatomi_second_form_input{
        width: 100%;
    }
    body > main > section > div > div.uk-grid.uk-grid-row-collapse.notranslate{
      gap: 100px;
    }
    #formUserInfo > div.uk-background-default.uk-border.uk-border-rounded.uk-padding-20.uk-padding-40\@m.uk-margin-24.uk-margin-32\@m.contactInfo.notranslate > div > div.uk-width-1-1.uk-margin-16-bottom.notranslate.uk-grid-margin.uk-first-column > label {
        width: 360px;
    }
    #formUserInfo > div.uk-text-right.notranslate {
        text-align: unset !important;
    }
    .anatomi_second_form_container{
      display: flex; 
      flex-direction: column;
    }
    .anatomi_second_form_alt_container{
        padding: 0px !important;
        border: none !important;
    }
   .anatomi_second_form_no_translate_container{
    display: flex;
   }

    .anatomi_slider {
     position: relative;
    width: 50%;
    height: 700px;
    overflow: hidden;
    margin: -100px auto;
    border-radius: 12px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.anatomi_slider_container {
  display: flex;
  transition: transform 0.5s ease-in-out;
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
    max-width: 90%;          
  max-height: 80%;         
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
    top: -70px;
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


@media (max-width: 1420px) {
.anatomi_form_alt_container {
    width: 40% !important;
}
  .anatomi_subnav {
    width: 400px !important;
}
    .anatomi_form_inputs {
    width: 400px !important;
}
.anatomi_slider_buttons{
  top: -45px !important;
}
.back-button{
  padding: 4px 10px !important;
}
}

      </style>
    `;
    const head = document.querySelector("head");
    const css = document.querySelector("#anatomi_form_sayfasi_avantajlar_one_cikarma_css")
    if (!css) {
        
        head.insertAdjacentHTML("beforeend", style);
    }
};

const form_sayfasi_avantajlar_one_cikarma_js = () => {
    const generateFormClass = () => {
         const formContainer = document.querySelector("body > main > section > div")
    if(formContainer && !formContainer.classList.contains("anatomi_form_container")) {
        formContainer.classList.add("anatomi_form_container");
    }
    const formAltContainer = document.querySelector("body > main > section > div > div.uk-grid.uk-grid-row-collapse.notranslate > div.uk-width-2-3\\@m.uk-first-column.notranslate")
    if(formAltContainer && !formAltContainer.classList.contains("anatomi_form_alt_container")) {
        formAltContainer.classList.add("anatomi_form_alt_container");
    }
    const subNav = document.querySelector("body > main > section > div > div.uk-grid.uk-grid-row-collapse.notranslate > div.uk-width-2-3\\@m.uk-first-column.notranslate > ul")
    if(subNav && !subNav.classList.contains("anatomi_subnav")) {
        subNav.classList.add("anatomi_subnav");
    }

    const formInfo = document.querySelector("#formUserInfo > div.uk-background-default.uk-border.uk-border-rounded.uk-padding-20.uk-padding-40\\@m.uk-margin-24.uk-margin-32\\@m.contactInfo.notranslate")
    if(formInfo && !formInfo.classList.contains("anatomi_form_info")) {
        formInfo.classList.add("anatomi_form_info");
    }
    const formInputs = document.querySelector("#formUserInfo > div.uk-background-default.uk-border.uk-border-rounded.uk-padding-20.uk-padding-40\\@m.uk-margin-24.uk-margin-32\\@m.contactInfo.notranslate > div")
    if(formInputs && !formInputs.classList.contains("anatomi_form_inputs")) {
        formInputs.classList.add("anatomi_form_inputs");
        }
    const formTitle = document.querySelector("#formUserInfo > div.uk-background-default.uk-border.uk-border-rounded.uk-padding-20.uk-padding-40\\@m.uk-margin-24.uk-margin-32\\@m.contactInfo.notranslate > div > div:nth-child(2)")
    if(formTitle) {
        formTitle.style.display = "none";
    }
    const formInput = document.querySelectorAll("#formUserInfo > div.uk-background-default.uk-border.uk-border-rounded.uk-padding-20.uk-padding-40\\@m.uk-margin-24.uk-margin-32\\@m.contactInfo.notranslate.anatomi_form_info > div > div")
    if(formInput) {
        formInput.forEach((input) => {
            if(!input.classList.contains("anatomi_form_input")) {
                input.classList.add("anatomi_form_input");
            }
        })
    }
  const formBtnContainer = document.querySelector("#formUserInfo > div.uk-text-right.notranslate > button");

if (formBtnContainer && !formBtnContainer.classList.contains("anatomi_form_btn_container")) {
    const updateWidth = () => {
        if (window.innerWidth >= 1440) {
            formBtnContainer.style.setProperty("width", "480px", "important");
        } else {
            formBtnContainer.style.setProperty("width", "380px", "important");
        }
    };
    updateWidth();

    window.addEventListener("resize", updateWidth);

    formBtnContainer.classList.add("anatomi_form_btn_container");
}

const backButton = document.querySelector(".back-button");

if (backButton && !backButton.classList.contains("anatomi_back_button")) {
    const updatePadding = () => {
        if (window.innerWidth <= 1440) {
            backButton.style.setProperty("padding", "4px 10px", "important");
        } else {
            backButton.style.removeProperty("padding"); 
        }
    };

    updatePadding();

    window.addEventListener("resize", updatePadding);

    backButton.classList.add("anatomi_back_button");
}


    const formFiyat = document.querySelector("body > main > section > div > div.uk-grid.uk-grid-row-collapse.notranslate > div.uk-width-1-3\\@m.notranslate")
    if(formFiyat ){
        formFiyat.style.display = "none";
    }

    const secondFormContainer = document.querySelector("#formFirmInfo > div.uk-background-default.uk-border.uk-border-rounded.uk-padding-20.uk-padding-40\\@m.accountInfo.notranslate > div");
    if(secondFormContainer && !secondFormContainer.classList.contains("anatomi_second_form_container")) {
        secondFormContainer.classList.add("anatomi_second_form_container");
    }

    const secondFormInput = document.querySelectorAll("#formFirmInfo > div.uk-background-default.uk-border.uk-border-rounded.uk-padding-20.uk-padding-40\\@m.accountInfo.notranslate > div > div")
    if(secondFormInput) {
        secondFormInput.forEach((input) => {
            if(!input.classList.contains("anatomi_second_form_input")) {
                input.classList.add("anatomi_second_form_input");
            }
        })
    }
    const secondFormTitle = document.querySelector("#formFirmInfo > div.uk-background-default.uk-border.uk-border-rounded.uk-padding-20.uk-padding-40\\@m.accountInfo.notranslate > div > div:nth-child(1)")
    if(secondFormTitle ) {
        secondFormTitle.style.display = "none";
    }

    const secondFormAltContainer = document.querySelector("#formFirmInfo > div.uk-background-default.uk-border.uk-border-rounded.uk-padding-20.uk-padding-40\\@m.accountInfo.notranslate")
    if(secondFormAltContainer && !secondFormAltContainer.classList.contains("anatomi_second_form_alt_container")) {
        secondFormAltContainer.classList.add("anatomi_second_form_alt_container");
    }
    const secondFormNoTranslateContainer = document.querySelector("body > main > section > div > div.uk-grid.uk-grid-row-collapse.notranslate > div.uk-width-2-3\\@m.uk-first-column.notranslate.anatomi_form_alt_container > div")
    if(secondFormNoTranslateContainer && !secondFormNoTranslateContainer.classList.contains("anatomi_second_form_no_translate_container")) {
        secondFormNoTranslateContainer.classList.add("anatomi_second_form_no_translate_container");
    }
    const title = document.querySelector("body > main > section > div > div.uk-grid.uk-margin-24.uk-margin-48\\@m.notranslate > div");
    if(title){
      title.style.paddingLeft = "90px";
    }

    }
   
 

    const generateSlider = () => {

        const h1 = document.querySelector("body > main > section > div > div.uk-grid.uk-margin-24.uk-margin-48\\@m.notranslate > div > h1")
   if(h1){
    h1.textContent = "Ücretsiz Deneme Sürenizi Başlatın"
   }
   const btn = document.querySelector("#formFirmInfo > div.uk-text-right.uk-flex.uk-flex-between.uk-flex-middle.notranslate > button");
   if(btn){
    btn.textContent = "Ücretsiz Deneme Süresi Başlat"
   }
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

  nextBtn.style.pointerEvents = currentIndex === slides.length - 1 ? "none" : "all";
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
    }
   

setInterval(() => {
    generateFormClass();
},100)
    generateSlider();
};

const form_sayfasi_avantajlar_one_cikarma_init = () => {
    form_sayfasi_avantajlar_one_cikarma_html();
    form_sayfasi_avantajlar_one_cikarma_css();        
    form_sayfasi_avantajlar_one_cikarma_js();
};

const form_sayfasi_avantajlar_one_cikarma_condition = () => {
    const device = window.innerWidth > 768;
    return device;
};



if (form_sayfasi_avantajlar_one_cikarma_condition()) {
    form_sayfasi_avantajlar_one_cikarma_init();
}