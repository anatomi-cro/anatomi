setTimeout(() => {
  const seyahat_sayfasi_form_redesign_css = () => {
      const style = `
        <style>
        /* --- generateDropdown style ---*/
          .anatomi_custom_dropdown {
            position: relative;
            width: 100%;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #fff;
            cursor: pointer;
          }
          .anatomi_custom_dropdown i {
            position: absolute;
          width: fit-content;
          top: 20px;
          right: 20px;
          font-size: 14px;
          }
          .anatomi_dropdown_toggle {
           font-size: 13px;
            background-color: #fff;
            color: black;
            text-align: left;
            height: 50px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 8px 20px;
          }
    
          .anatomi_dropdown_options {
            display: none;
            position: absolute;
            width: 100%;
            background-color: #fff;
            border: 1px solid #ccc;
            max-height: 200px;
            overflow-y: auto;
            z-index: 999;
          }
    
          .anatomi_dropdown_options div {
            padding: 10px;
            font-size: 16px;
            cursor: pointer;
            margin: 0px !important;
          }
    
          .anatomi_dropdown_options div:hover {
            background-color: #f1f1f1;
          }
    
    
          /* --- generateForm style ---*/
    
         .anatomi_image_container{
            display: none !important;
          }
          .anatomi_privileges{
            display: none !important;
          }
          .anatomi_image_desc{
            display: none !important;
          }
          .anatomi_image_title{
            color: black;
        font-size: 15px;
        font-weight: bold;
        justify-content: flex-start !important;
        padding: 10px;
          }
      
        .anatomi_breadcrumb{
            display: none !important;
          }
        .anatomi_section{
          padding-top: 10px !important;
          background-color: white !important;
        }
        .anatomi_get_offer_title{
          display: none !important;
        }
        .anatomi_get_offer_container{
          box-shadow: none !important;
        }
        .anatomi_custom_dropdown_title{
        margin: 0px;
        font-size: 15px;
        color: black;
        font-weight: 500;
        text-align: left;
        padding-bottom: 10px;
    }
        }
        .anatomi_get_offer_radio_container{
          align-items: flex-start !important;
          gap: 10px !important;
        }
        .anatomi_get_offer_radios{
          order: 3;
        }
        .a_active{
          margin-top: 100px !important;
        }
        .get-offer__item__label{
          position: static;
        font-size: 15px !important;
        transition: unset !important;
        color: black !important;
    
          }
          .anatomi_start_date_title{
            display: flex !important;
          }
          .anatomi_yurtdisi_input{
            order:2;
    }
        .anatomi_yurtdisi_label{
          width: 100%;
          justify-content:space-between !important;
    
        }
        .get-offer.-double .get-offer__item.error::after {
        top: 30px !important;
    }
        </style>
      `;
      const head = document.querySelector("head");
      head.insertAdjacentHTML("beforeend", style);
      const fontAwesomeLink = `
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    
    `;
    head.insertAdjacentHTML("beforeend", fontAwesomeLink);
    };
    
    const seyahat_sayfasi_form_redesign_js = () => {
      const generateDropdown = () => {
        const existingDropdown = document.querySelector(".anatomi_custom_dropdown");
        if (existingDropdown) {
          return;
        }
        const customDropdown = document.createElement("div");
        customDropdown.classList.add("anatomi_custom_dropdown");
    
        const dropdownTitle = document.createElement("p");
        dropdownTitle.textContent = "Seyahat Edeceğiniz Bölge";
        dropdownTitle.classList.add("anatomi_custom_dropdown_title");
    
    
        const dropdownToggle = document.createElement("div");
        dropdownToggle.classList.add("anatomi_dropdown_toggle");
        dropdownToggle.textContent = "";
    
        const arrowIcon = document.createElement("i");
        arrowIcon.classList.add("fa", "fa-chevron-down"); 
    
       
        customDropdown.appendChild(arrowIcon);
    
     
        const dropdownOptions = document.createElement("div");
        dropdownOptions.classList.add("anatomi_dropdown_options");
    
        const option1Div = document.querySelector(
          "body > main > section.image-detail.-double > div.image-detail__content.-campaign > div > div.get-offer.-double > div.get-offer__content > div > div.get-offer__radios > div.get-offer__radio-wrapper > div:nth-child(1)"
        );
        
        const option2Div = document.querySelector(
          "body > main > section.image-detail.-double > div.image-detail__content.-campaign > div > div.get-offer.-double > div.get-offer__content > div > div.get-offer__radios > div.get-offer__radio-wrapper > div:nth-child(2)"
        );
    
        if (option1Div) {
          option1Div.classList.add("anatomi_dropdown_option"); 
          dropdownOptions.appendChild(option1Div); 
        }
        if (option2Div) {
          option2Div.classList.add("anatomi_dropdown_option");
          dropdownOptions.appendChild(option2Div);
        }
       
        dropdownToggle.addEventListener("click", () => {
          const disclaimer = document.querySelector("body > main > section.image-detail.-double.anatomi_section > div.container > div.get-offer.-double.anatomi_get_offer_container > div:nth-child(3)")
    
          if (dropdownOptions.style.display === "none" || dropdownOptions.style.display === "") {
            dropdownOptions.style.display = "block";
            
            if (disclaimer && !disclaimer.classList.contains("a_active")) {
              disclaimer.classList.add("a_active");
            }
          } else {
            dropdownOptions.style.display = "none";
            
            if (disclaimer && disclaimer.classList.contains("a_active")) {
              disclaimer.classList.remove("a_active");
            }
          } });
    
      
          dropdownOptions.addEventListener("click", (e) => {
            const disclaimer = document.querySelector("body > main > section.image-detail.-double.anatomi_section > div.container > div.get-offer.-double.anatomi_get_offer_container > div:nth-child(3)")
    
            const yurtdisiLabel = document.querySelectorAll("body > main > section.image-detail.-double.anatomi_section > div.container > div.get-offer.-double.anatomi_get_offer_container > div.get-offer__content > div > div.get-offer__radios.anatomi_get_offer_radios > div.get-offer__radio-wrapper.anatomi_get_offer_radio_container > div > div.anatomi_dropdown_options > div > label")
            const radioText = document.querySelectorAll("body > main > section.image-detail.-double.anatomi_section > div.container > div.get-offer.-double.anatomi_get_offer_container > div.get-offer__content > div > div.get-offer__radios.anatomi_get_offer_radios > div.get-offer__radio-wrapper.anatomi_get_offer_radio_container > div > div.anatomi_dropdown_options > div> label > label")
            radioText.forEach((radio) => {
              radio.classList.add("anatomi_radio_text");
            })
            const radioStrong = document.querySelectorAll("body > main > section.image-detail.-double.anatomi_section > div.container > div.get-offer.-double.anatomi_get_offer_container > div.get-offer__content > div > div.get-offer__radios.anatomi_get_offer_radios > div.get-offer__radio-wrapper.anatomi_get_offer_radio_container > div > div.anatomi_dropdown_options > div > label > label > strong")
            radioStrong.forEach((radio) => {
              radio.classList.add("anatomi_radio_strong");
            })



            if (e.target && e.target.classList.contains("anatomi_yurtdisi_input")) {
              const parentElement = e.target.parentElement;
              const labelText = parentElement.querySelector("label")?.textContent;
              dropdownToggle.textContent = labelText;
              

              dropdownOptions.style.display = "none"; 
              
              if (disclaimer && disclaimer.classList.contains("a_active")) {
                disclaimer.classList.remove("a_active");
              }
            }
            if (e.target && e.target.classList.contains("anatomi_radio_text")) {
              const parentElement = e.target.parentElement;
              const labelText = parentElement.querySelector("label")?.textContent;
              dropdownToggle.textContent = labelText;
              
              const parentElement2 = e.target.parentElement;
              const ilgiliCheckbox = parentElement2.querySelector(".anatomi_yurtdisi_input");
              ilgiliCheckbox.checked = true;
              
              dropdownOptions.style.display = "none"; 
              
              if (disclaimer && disclaimer.classList.contains("a_active")) {
                disclaimer.classList.remove("a_active");
              }
            }
            if (e.target && e.target.classList.contains("anatomi_radio_strong")) {
              const parentElement = e.target.parentElement.parentElement;
              const labelText = parentElement.querySelector("label")?.textContent;
              dropdownToggle.textContent = labelText;
              
              const parentElement2 = e.target.parentElement.parentElement;
              const ilgiliCheckbox = parentElement2.querySelector(".anatomi_yurtdisi_input");
              ilgiliCheckbox.checked = true;
              
              dropdownOptions.style.display = "none"; 
              
              if (disclaimer && disclaimer.classList.contains("a_active")) {
                disclaimer.classList.remove("a_active");
              }
            }
          });
          
    
        customDropdown.appendChild(dropdownToggle);
        customDropdown.appendChild(dropdownOptions);
    
        const target = document.querySelector("body > main > section.image-detail.-double > div.image-detail__content.-campaign > div > div.get-offer.-double > div.get-offer__content > div > div.get-offer__radios > div.get-offer__radio-wrapper");
        if (target) {
          target.appendChild(customDropdown); 
        }
        customDropdown.insertAdjacentElement("beforebegin", dropdownTitle);
      };
    
    
      generateFormCss = () => {
    
          const formContainer = document.querySelector("body > main > section.image-detail.-double > div.image-detail__content.-campaign > div")
          const imageContainer = document.querySelector("body > main > section.image-detail.-double > div.image-detail__content.-campaign")
          if(imageContainer && !imageContainer.classList.contains("anatomi_image_container")){
            imageContainer.classList.add("anatomi_image_container");
          }
          if(formContainer && imageContainer){
            imageContainer.insertAdjacentElement("afterend", formContainer);
          }
    
          const privileges = document.querySelector("body > main > section.image-detail.-double > div.privileges")
          if(privileges && !privileges.classList.contains("anatomi_privileges")){
            privileges.classList.add("anatomi_privileges");
          }
    
          const imageDetailDesc = document.querySelector("body > main > section.image-detail.-double > div.container > div.image-detail__desc")
          if(imageDetailDesc && !imageDetailDesc.classList.contains("anatomi_image_desc")){
            imageDetailDesc.classList.add("anatomi_image_desc");
          }
          const imageDetailTitle = document.querySelector("body > main > section.image-detail.-double > div.container > h1")
          if(imageDetailTitle && !imageDetailTitle.classList.contains("anatomi_image_title")){
            imageDetailTitle.classList.add("anatomi_image_title");
            imageDetailTitle.innerText = "Yurt Dışı Seyahat Sigortası";
            }
    
          const breadCrumb = document.querySelector("body > main > section.image-detail.-double > div.-white")
          if(breadCrumb && !breadCrumb.classList.contains("anatomi_breadcrumb")){
            breadCrumb.classList.add("anatomi_breadcrumb");
            }
    
          const section = document.querySelector("body > main > section.image-detail.-double")
          if(section && !section.classList.contains("anatomi_section")){
            section.classList.add("anatomi_section");
            }
    
          const getOfferTitle = document.querySelector("body > main > section.image-detail.-double > div.container > div.get-offer.-double > div.get-offer__title")
          if(getOfferTitle && !getOfferTitle.classList.contains("anatomi_get_offer_title")){
            getOfferTitle.classList.add("anatomi_get_offer_title");
            }
          const getOfferContainer = document.querySelector("body > main > section.image-detail.-double > div.container > div.get-offer.-double")
          if(getOfferContainer && !getOfferContainer.classList.contains("anatomi_get_offer_container")){
            getOfferContainer.classList.add("anatomi_get_offer_container");
          }
          const getOfferRadios = document.querySelector("body > main > section.image-detail.-double.anatomi_section > div.container > div.get-offer.-double.anatomi_get_offer_container > div.get-offer__content > div > div.get-offer__radios")
          if(getOfferRadios && !getOfferRadios.classList.contains("anatomi_get_offer_radios")){
            getOfferRadios.classList.add("anatomi_get_offer_radios");
            }
          const startDateTitle = document.querySelector("body > main > section.image-detail.-double.anatomi_section > div.container > div.get-offer.-double.anatomi_get_offer_container > div.get-offer__content > div > div:nth-child(3) > div.get-offer__item.calendar > div > label")
          if(startDateTitle && !startDateTitle.classList.contains("anatomi_start_date_title")){
            startDateTitle.classList.add("anatomi_start_date_title");
            }
          const getOfferRadioContainer = document.querySelector("body > main > section.image-detail.-double.anatomi_section > div.container > div.get-offer.-double.anatomi_get_offer_container > div.get-offer__content > div > div.get-offer__radios.anatomi_get_offer_radios > div.get-offer__radio-wrapper")
          if(getOfferRadioContainer && !getOfferRadioContainer.classList.contains("anatomi_get_offer_radio_container")){
            getOfferRadioContainer.classList.add("anatomi_get_offer_radio_container");
            }
          const yurtdisiInputs = document.querySelectorAll("body > main > section.image-detail.-double.anatomi_section > div.container > div.get-offer.-double.anatomi_get_offer_container > div.get-offer__content > div > div.get-offer__radios.anatomi_get_offer_radios > div.get-offer__radio-wrapper.anatomi_get_offer_radio_container > div > div.anatomi_dropdown_options > div > label > input")
          yurtdisiInputs.forEach((input) => {
            if(input && !input.classList.contains("anatomi_yurtdisi_input")){
              input.classList.add("anatomi_yurtdisi_input");
              }
          })
          const yurtdisiLabels = document.querySelectorAll("body > main > section.image-detail.-double.anatomi_section > div.container > div.get-offer.-double.anatomi_get_offer_container > div.get-offer__content > div > div.get-offer__radios.anatomi_get_offer_radios > div.get-offer__radio-wrapper.anatomi_get_offer_radio_container > div > div.anatomi_dropdown_options > div > label")
          yurtdisiLabels.forEach((label) => {
            if(label && !label.classList.contains("anatomi_yurtdisi_label")){
              label.classList.add("anatomi_yurtdisi_label");
              }
          })
          const dropdownTitle = document.querySelector("body > main > section.image-detail.-double.anatomi_section > div.container > div.get-offer.-double.anatomi_get_offer_container > div.get-offer__content > div > div.get-offer__radios.anatomi_get_offer_radios > div.get-offer__radio-wrapper.anatomi_get_offer_radio_container > p")
          const target = document.querySelector("body > main > section.image-detail.-double.anatomi_section > div.container > div.get-offer.-double.anatomi_get_offer_container > div.get-offer__content > div > div.get-offer__radios.anatomi_get_offer_radios")
          if(target && dropdownTitle){
            target.insertAdjacentElement("afterbegin",dropdownTitle);
          }
        }

    

setTimeout(()=>{
              const handle_dataLayer_push = () => {
  const button = document.querySelector(
    "body > main > section.image-detail.-double.anatomi_section > div.container > div.get-offer.-double.anatomi_get_offer_container > button"
  );

  const kimlik = document.querySelector(
    "body > main > section.image-detail.-double.anatomi_section > div.container > div.get-offer.-double.anatomi_get_offer_container > div.get-offer__content > div > div:nth-child(2) > div:nth-child(1) > input"
  );

  const phone = document.querySelector(
    "body > main > section.image-detail.-double.anatomi_section > div.container > div.get-offer.-double.anatomi_get_offer_container > div.get-offer__content > div > div:nth-child(2) > div:nth-child(2) > input"
  );

  const mail = document.querySelector(
    "body > main > section.image-detail.-double.anatomi_section > div.container > div.get-offer.-double.anatomi_get_offer_container > div.get-offer__content > div > div:nth-child(3) > div:nth-child(1) > input"
  );

  const date = document.querySelector(
    "body > main > section.image-detail.-double.anatomi_section > div.container > div.get-offer.-double.anatomi_get_offer_container > div.get-offer__content > div > div:nth-child(3) > div.get-offer__item.calendar > div > input.get-offer__item__input.-calendar.ex-inputs-start"
  );

  const chkBox_1 = document.querySelector(
    "body > main > section.image-detail.-double.anatomi_section > div.container > div.get-offer.-double.anatomi_get_offer_container > div:nth-child(3) > span > input"
  );

  const chkBox_2 = document.querySelector(
    "body > main > section.image-detail.-double.anatomi_section > div.container > div.get-offer.-double.anatomi_get_offer_container > div:nth-child(4) > span > input"
  );

  const radio_1 = document.querySelector(
    "body > main > section.image-detail.-double.anatomi_section > div.container > div.get-offer.-double.anatomi_get_offer_container > div.get-offer__content > div > div.get-offer__radios.anatomi_get_offer_radios > div.get-offer__radio-wrapper.anatomi_get_offer_radio_container > div > div.anatomi_dropdown_options > div:nth-child(1) > label > input"
  );

  const radio_2 = document.querySelector(
    "body > main > section.image-detail.-double.anatomi_section > div.container > div.get-offer.-double.anatomi_get_offer_container > div.get-offer__content > div > div.get-offer__radios.anatomi_get_offer_radios > div.get-offer__radio-wrapper.anatomi_get_offer_radio_container > div > div.anatomi_dropdown_options > div:nth-child(2) > label > input"
  );

  button &&
    button.addEventListener("click", () => {
      if (
        kimlik &&
        phone &&
        mail &&
        date &&
        chkBox_1 &&
        chkBox_2 &&
        radio_1 &&
        radio_2
      ) {
        if (
          kimlik.value !== "" &&
          phone.value !== "" &&
          mail.value !== "" &&
          date.value !== "" &&
          chkBox_1.checked &&
          chkBox_2.checked &&
          !radio_1.checked &&
          !radio_2.checked
        ) {
          dataLayer.push({
            event: "anatomi_seyehat",
          });
        }
      }
    });
};
handle_dataLayer_push();
},2000)

      setInterval(() => {
        generateDropdown();
        generateFormCss();
      }, 100);
    };
    
    
    
    
    const seyahat_sayfasi_form_redesign_init = () => {
      seyahat_sayfasi_form_redesign_css();
      seyahat_sayfasi_form_redesign_js();
    };
    
    const seyahat_sayfasi_form_redesign_condition = () => {
      const device = window.innerWidth < 768;
      const location = window.location.href === "https://www.somposigorta.com.tr/yurt-disi-vize-seyahat-sigortasi";
      return device;
    };
    
    if (seyahat_sayfasi_form_redesign_condition()) {
      seyahat_sayfasi_form_redesign_init();
    }
}, 1000);