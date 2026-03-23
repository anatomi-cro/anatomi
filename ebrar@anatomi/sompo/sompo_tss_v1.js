const sompo_urun_detay_tss_html = () => {
  const html = `
  `;
};
const sompo_urun_detay_tss_css = () => {
  const style = `
      <style>
    .anatomi_header_container{
        background-color: #f9f9f9 !important;
        justify-content: center !important;
        background-image: none !important;
    }
    .anatomi_form_container{
        width: 450px !important;
        transform: translateX(-30px) !important;
    }
    .anatomi_form_image_title{
       display: none !important;
    }
    .anatomi_form_image_desc{
        display: none !important;
    }
    .anatomi_get_offer{
        width: 450px !important;
        height: fit-content !important;
        padding: 24px 24px !important;
        justify-content: space-around;
        background: white !important;
    }

    .anatomi_get_offer_form{
    flex-direction: column !important;
    gap: 20px;
    height: auto !important; 

    }

    .anatomi_get_offer_disclaimer_first{
        margin: 15px 0 0 !important;
    }

    .anatomi_get_offer_item_label{
    position: unset !important;
    transition: none !important;
    translate: none !important;
    opacity: 1 !important;
    }

    .anatomi_slider_container{
    z-index: 2;
    width: 100%;
    overflow: hidden;
    transform: translateX(-30px);
    }

    .anatomi_slider_container img{
       width: 77%;
    height: 550px;
    border-radius: 10px;
      }

    .anatomi_form_image_wrapper{
    display: flex !important;
    align-items: center !important;
    justify-content: flex-start;
    padding: 20px 0px;
    background: #f7f2f3;
    width: 1245px;
    border-radius: 10px;
    }

    .anatomi_slider_wrapper{
    display: flex;
    transition: transform 0.3s ease-in-out;
    }

    .anatomi_slider_wrapper {
      display: flex;
      width: 100%;
      overflow: hidden;
      position: relative;
    }

    .anatomi_first_slide,
    .anatomi_second_slide {
      width: 100%;
      height: 100%;
      display: none; 
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    .anatomi_first_slide.active,
    .anatomi_second_slide.active {
      display: flex; 
    }

 
    .anatomi_second_slide{
    padding: 0px 30px;
    width: 800px;
    margin: 0 auto;
    height: 550px;
    }

    .anatomi_slide_title{
    margin-bottom: 50px;
    font-size: 25px;
    text-align: left;
    }

    .anatomi_slide_list{
     font-size: 16px;
     text-align: left;
     padding: 30px;

    }

    .anatomi_slider_buttons {
      display: flex;
      justify-content: center;
      margin-top: 10px;
      gap: 5px;
    }

    .anatomi_slider_buttons button {
      padding: 8px 8px;
      background: black;
      border: none;
      border-radius: 50%;
      cursor: pointer;
    }
      .anatomi_slider_buttons button.active {
          background-color: gray;
  border-color: gray;
  cursor: pointer;
}
    .anatomi_slider_buttons button.inactive{
    background-color: black;
  border-color: black;
    }

    .get-offer__item.-active .get-offer__item__label {
        font-size: 15px !important;
        color: black !important;
    }
        .get-offer__item__label{
            position: static !important;
        }

    .image-detail__content{
        padding: 20px 0px 25px 0px !important;
    }

    .image-detail__content::after{
        background:none !important;
    }

             .get-offer__item__input{
        height: 50px !important;
        min-height: 50px !important;
    }

        .get-offer__item.-dask {
            min-width: 150px !important;
            width: 100% !important;
        }
    @media (min-width: 768px) and (max-width: 1248px){ 
        .anatomi_form_image_wrapper{
            margin: 30px  !important;
        }

        .anatomi_get_offer{
            width: 333px !important;
        }
   
        .anatomi_second_slide{
        width: 100% !important;
        }
           .anatomi_first_slide{
      transform: translateX(15px);
    }
          .anatomi_slider_container img{
          width: 87%;
        }
    }
      @media (min-width:500px) and (max-width: 768px){
         .anatomi_slider_container img{
          max-height: 550px !important;
          width: 85% !important;
        }
                .anatomi_first_slide{
      transform: none;
    }
      .anatomi_second_slide{
        height: 350px !important;
        }
    }
    @media (max-width: 768px){ 
        .anatomi_form_image_wrapper{
           flex-direction: column !important;
           width: 100% !important;
           background: white !important;
           padding: 0px 0px  40px !important;
        }

       .get-offer__title{
       display: none !important;
       }
       .anatomi_form_container{
           width: 100% !important;
       }
           .anatomi_get_offer{
            width: 100% !important;
            transform: translateX(30px);
        }
        .anatomi_slider_container{
          transform: none !important;
        }

            .anatomi_slider_container img{
          height: auto;
              max-height: 350px;
          width: 100%;
          border-radius: 0px;
        }
  
        .anatomi_slider_buttons{
            margin: 20px 0px !important;
        }

    .anatomi_kampanya_banner{
    display: none !important;
    }
        .anatomi_second_slide{
        width: 100% !important;
        height: 350px ;
        }

    .anatomi_slide_title{
       display: none !important;
        }

    .anatomi_slide_list{
        font-size: 14px !important;
        padding: 10px !important;
        background-color: #f9dfe4 !important;
        border-radius: 10px !important;
        }

    .get-offer{
        border: none !important;
        box-shadow: none !important;
    }

      .image-detail{
        background: white !important;
        padding: 0px 0 300px 0px !important;
    }
      .image-detail__content{
      padding: 0 0 25px 0px !important;    
        }

    .anatomi_slide_mobil_title{
        color: black;
        }
}
  </style>
  `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};
const sompo_urun_detay_tss_js = () => {
  const headerContainer = document.querySelector(
    "body > main > section.image-detail > div.image-detail__content.-campaign"
  );
  if (headerContainer) {
    headerContainer.classList.add("anatomi_header_container");
  }

  const formContainer = document.querySelector(
    "body > main > section.image-detail > div.image-detail__content.-campaign > div"
  );
  if (formContainer) {
    formContainer.classList.add("anatomi_form_container");
  }
  const formImageTitle = document.querySelector(
    "body > main > section.image-detail > div.image-detail__content.-campaign > div > h1"
  );
  if (formImageTitle) {
    formImageTitle.classList.add("anatomi_form_image_title");
  }
  const imageDetailDesc = document.querySelector(
    "body > main > section.image-detail > div.image-detail__content.-campaign > div > div.image-detail__desc"
  );
  if (imageDetailDesc) {
    imageDetailDesc.classList.add("anatomi_form_image_desc");
  }
  const getOffer = document.querySelector(
    "body > main > section.image-detail > div.image-detail__content.-campaign > div > div.get-offer"
  );
  if (getOffer) {
    getOffer.classList.add("anatomi_get_offer");
  }
  const getOfferForm = document.querySelector(
    "body > main > section.image-detail > div.image-detail__content.-campaign > div > div.get-offer > div.get-offer__form"
  );
  if (getOfferForm) {
    getOfferForm.classList.add("anatomi_get_offer_form");
  }
  const getOfferDisclaimerFirst = document.querySelector(
    "body > main > section.image-detail > div.image-detail__content.-campaign > div > div.get-offer > div:nth-child(3)"
  );
  if (getOfferDisclaimerFirst) {
    getOfferDisclaimerFirst.classList.add("anatomi_get_offer_disclaimer_first");
  }
  const getOfferItemLabeld = document.querySelector(
    "body > main > section.image-detail > div.image-detail__content.-campaign.anatomi_header_container > div > div.get-offer.anatomi_get_offer > div.get-offer__form.anatomi_get_offer_form > div:nth-child(1) > label"
  );
  if (getOfferItemLabeld) {
    getOfferItemLabeld.classList.add("anatomi_get_offer_item_label");
  }
  const getOfferItemLabelPlaka = document.querySelector(
    "body > main > section.image-detail > div.image-detail__content.-campaign.anatomi_header_container > div > div.get-offer.anatomi_get_offer > div.get-offer__form.anatomi_get_offer_form > div:nth-child(2) > label"
  );
  if (getOfferItemLabelPlaka) {
    getOfferItemLabelPlaka.classList.add("anatomi_get_offer_item_label");
  }
  const getOfferBtn = document.querySelector("#sendIndividual");
  if (getOfferBtn) {
    getOfferBtn.textContent = "Trafik Sigortası Teklifi Al";
    getOfferBtn.style.textTransform = "capitalize";
  }

  const breadCrumb = document.querySelector(
    "body > main > section.image-detail > div:nth-child(2) > div"
  );
  if (breadCrumb) {
    breadCrumb.style.display = "none";
  }

  const privileges = document.querySelector(
    "body > main > section.image-detail > div.privileges"
  );
  if (privileges) {
    privileges.style.display = "none";
  }
  const whiteContainer = document.querySelector(
    "body > main > section.image-detail > div:nth-child(2)"
  );
  if (whiteContainer) {
    whiteContainer.classList.remove("-white");
  }

  const sliderContainer = document.createElement("div");
  sliderContainer.classList.add("anatomi_slider_container");
  const firstSlide = document.createElement("div");
  firstSlide.classList.add("anatomi_first_slide");
  const sliderImg = document.createElement("img");
  sliderImg.classList.add("anatomi_slider_img");
  sliderImg.src =
    "https://anatomi.s3.eu-north-1.amazonaws.com/sompo_tss_kare_image.jpg";
  firstSlide.appendChild(sliderImg);
  sliderContainer.appendChild(firstSlide);

  const secondSlide = document.createElement("div");
  secondSlide.classList.add("anatomi_second_slide");
  sliderContainer.appendChild(secondSlide);

  const slideList = document.createElement("ul");
  slideList.classList.add("anatomi_slide_list");
  const slideTitle = document.createElement("h2");
  slideTitle.classList.add("anatomi_slide_title");
  slideTitle.textContent =
    "Tam Senlik Tamamlayıcı Sağlık Sigortası teklif formunu doldurarak size en uygun tamamlayıcı sağlık teklifini öğrenebilirsiniz.";
  slideList.appendChild(slideTitle);

  if (window.innerWidth < 768) {
    secondSlideMobilTitle = document.createElement("h2");
    secondSlideMobilTitle.classList.add("anatomi_slide_mobil_title");
    secondSlideMobilTitle.textContent = "Tam Senlik Tamamlayıcı Sağlık Sigortası";
    secondSlide.appendChild(secondSlideMobilTitle);
  }

  const items = [
    " Anlaşmalı kredi kartlarına<strong> 8 taksit imkanı </strong>",
    "<strong> Ücretsiz check-up ve diş tedavi paketi</strong>",
    "İhtiyacınıza uygun olarak 3, 5, 7, 10 veya 12 adet <strong>ayakta tedavi limiti </strong> ",
    "Türkiye çapında 556 anlaşmalı hastane ve sağlık kurumlarında <strong>ilave ücret ödemeden tedavi imkanı</strong>",
  ];

  const visibleItems = window.innerWidth < 768 ? items.slice(0, 4) : items;
  visibleItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.style.display = "flex";
    listItem.style.alignItems = "center";
    listItem.style.marginBottom = "8px";

    const tickIcon = document.createElement("span");
    tickIcon.textContent = "✔";
    tickIcon.style.color = "red";
    tickIcon.style.marginRight = "8px";

    listItem.appendChild(tickIcon);

    const itemText = document.createElement("span");
    itemText.innerHTML = item;
    listItem.appendChild(itemText);

    slideList.appendChild(listItem);
  });

  secondSlide.appendChild(slideList);

  const sliderWrapper = document.createElement("div");
  sliderWrapper.classList.add("anatomi_slider_wrapper");
  sliderContainer.appendChild(sliderWrapper);
  sliderWrapper.appendChild(firstSlide);
  sliderWrapper.appendChild(secondSlide);

  const sliderButtons = document.createElement("div");
  sliderButtons.classList.add("anatomi_slider_buttons");
  const prevButton = document.createElement("button");
  prevButton.classList.add("anatomi_slider_prev");
  const nextButton = document.createElement("button");
  nextButton.classList.add("anatomi_slider_next");
  sliderButtons.appendChild(prevButton);
  sliderButtons.appendChild(nextButton);
  sliderContainer.appendChild(sliderButtons);

  const formImageWrapper = document.createElement("div");
  formImageWrapper.classList.add("anatomi_form_image_wrapper");
  headerContainer.insertAdjacentElement("afterbegin", formImageWrapper);
  formImageWrapper.appendChild(sliderContainer);
  formImageWrapper.appendChild(formContainer);

  firstSlide.classList.add("active");
  let currentSlideIndex = 0;
  const slides = [firstSlide, secondSlide];
  let autoSlideInterval;

  const updateSlides = () => {
    slides.forEach((slide, index) => {
      if (index === currentSlideIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });

     if (currentSlideIndex === 0) {
       prevButton.classList.add("inactive");
       prevButton.classList.remove("active");
       nextButton.classList.add("active");
       nextButton.classList.remove("inactive");
     } else if (currentSlideIndex === slides.length - 1) {
       nextButton.classList.add("inactive");
       nextButton.classList.remove("active");
       prevButton.classList.add("active");
       prevButton.classList.remove("inactive");
     } else {
       prevButton.classList.add("active");
       prevButton.classList.remove("inactive");
       nextButton.classList.add("active");
       nextButton.classList.remove("inactive");
     }
  };

   const startAutoSlide = () => {
     const intervalTime = window.innerWidth >= 768 ? 5000 : 3000;
     autoSlideInterval = setInterval(() => {
       currentSlideIndex = (currentSlideIndex + 1) % slides.length;
       updateSlides();
     }, intervalTime);
   };

   const resetAutoSlide = () => {
     clearInterval(autoSlideInterval);
     startAutoSlide();
   };

   updateSlides();
   startAutoSlide();

   prevButton.addEventListener("click", () => {
     if (currentSlideIndex > 0) {
       currentSlideIndex -= 1;
       updateSlides();
       resetAutoSlide();
     }
   });

   nextButton.addEventListener("click", () => {
     if (currentSlideIndex < slides.length - 1) {
       currentSlideIndex += 1;
       updateSlides();
       resetAutoSlide();
     }
   });

   window.addEventListener("resize", resetAutoSlide);
};
const sompo_urun_detay_tss_init = () => {
  sompo_urun_detay_tss_html();
  sompo_urun_detay_tss_css();
  sompo_urun_detay_tss_js();
};
const sompo_urun_detay_tss_condition = () => {
  const location =
    window.location.href ===
    "https://www.somposigorta.com.tr/tamamlayici-saglik-sigortasi";

    const device = window.innerWidth >= 768;

    return device;
};
if (sompo_urun_detay_tss_condition()) {
  sompo_urun_detay_tss_init();
}
