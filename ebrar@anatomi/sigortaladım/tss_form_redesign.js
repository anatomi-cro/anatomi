const tss_form_redesign_html = () => {};

const tss_form_redesign_css = () => {
    const style = `
      <style>  
      .a-d-none{
        display: none !important;
      } 
      .anatomi_teklif_al{
        margin-top: 0px !important;
      }
      .anatomi_form_desc{
        font-weight: bold;
        text-align: left !important;
      } 
      .anatomi_form_step1{
        width: 100%;

      }
      .anatomi_form_step1 button{
        width: 100%;
        padding: 15px;
        font-size: 16px;
        border-radius: 5px;
        border: none;
        background-color: #37424A;
        color: white;
        margin-bottom: 20px;
        opacity: 1;
      }
      .anatomi_form_step1 button:disabled {
        opacity: .6;
      }
      .anatomi_form_step2{
        display: none;
        flex-direction: column;
      }
      .anatomi-form-info-container{
        display: flex;
        margin-bottom: 20px;
        justify-content: space-between;
      }
    .anatomi-temel-bilgiler , .anatomi-kullanici-bilgileri{
        width: 48%;
        font-size: 16px;
        font-weight: bold;
        padding-bottom: 10px;
         border-bottom: 2px solid #B7B8C7;
           color: #B7B8C7;
    }
      .anatomi-temel-bilgiler.active, .anatomi-kullanici-bilgileri.active{
        border-bottom: 2px solid #37424A;
        color: #37434A;

      }
        .anatomi-step-number{
            background-color:#B7B8C7;
        padding: 5px 10px;
        border-radius: 50%;
        color: white;

        }
        .anatomi-step-number.active{
         background-color: #37424A;
        padding: 5px 10px;
        border-radius: 50%;
        color: white;
        }
        .anatomi_form_step1 label, label[for="name"],  label[for="surname"], label[for="email"], .datepicker-label{
                font-size: 16px;
    font-weight: bold;
        }
    .anatomi_check_container{
        display: flex;
        justify-content: space-around;
    }
    .anatomi_btn_container{
    width: 100%;
     text-align: center; 
     position: sticky; 
     bottom: 0; 
     background-color: white; 
     z-index: 10; 
     flex-direction: column;
    }
    .anatomi_btn_container .captcha-text{
        display: none;
    }
    .anatomi_btn_container button{
        padding: 20px !important;
    }
        
.anatomi_stickyButtonContainer {
    position: sticky;
    bottom: 0;
    width: 100%;
    text-align: center;
    justify-content: space-between;
    z-index: 1000; 
    padding: 15px;
    background-color: white;
}

.anatomi-sticky-button {
width: 70%;
    padding: 15px 20px;
    font-size: 16px;
    background-color: #37424A;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    opacity: 1
}
.anatomi-sticky-button:disabled {
    opacity: .6;
}
.anatomi-back-button{
    background: none;
    border: none;
    font-size: 16px;
    color: black;

}

      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const tss_form_redesign_js = () => {
    const generateForm = () => {
       
        
        const nav = document.querySelector("#app");
        if(nav && !nav.classList.contains("a-d-none")){
            nav.classList.add("a-d-none");
        }

        const navH1 = document.querySelector("#teklif-al > h1");
        if(navH1 && !navH1.classList.contains("a-d-none")){
            navH1.classList.add("a-d-none");
        }

        const formDesc = document.querySelector("#teklif-al > div > p");
        if(formDesc && !formDesc.classList.contains("anatomi_form_desc")){
            formDesc.classList.add("anatomi_form_desc");
        }

        const sectionForm = document.querySelector("#teklif-al");
        if(sectionForm && !sectionForm.classList.contains("anatomi_teklif_al")){
            sectionForm.classList.add("anatomi_teklif_al");
        }

        const form = document.querySelector("#lead-form");
        if(form && !form.classList.contains("anatomi_tss_form")){
            form.classList.add("anatomi_tss_form");
        }
        const sectionFormDesc = document.querySelector("#teklif-al > div > p");


        if (sectionFormDesc) {
            let newDiv = document.querySelector(".anatomi-form-info-container");
            if (!newDiv) {
                newDiv = document.createElement("div");
                newDiv.classList.add("anatomi-form-info-container");
    

                let temelBilgiler = document.querySelector(".anatomi-temel-bilgiler");
                if (!temelBilgiler) {
                    temelBilgiler = document.createElement("div");
                    const spanNumber = document.createElement("span");
                    spanNumber.textContent = "1";
                    spanNumber.classList.add("anatomi-step-number", "active"); 
                    const textNode = document.createTextNode(" Temel Bilgiler");
                
                    temelBilgiler.appendChild(spanNumber);
                    temelBilgiler.appendChild(textNode);
                    temelBilgiler.classList.add("anatomi-temel-bilgiler" , "active");
                    newDiv.appendChild(temelBilgiler);
                }

                let kullaniciBilgileri = document.querySelector(".anatomi-kullanici-bilgileri");
                if (!kullaniciBilgileri) {
                    kullaniciBilgileri = document.createElement("div");
                
                    const spanNumber = document.createElement("span");
                    spanNumber.textContent = "2";
                    spanNumber.classList.add("anatomi-step-number");
                
                    const textNode = document.createTextNode(" Kullanıcı Bilgileri");
                
                    kullaniciBilgileri.appendChild(spanNumber);
                    kullaniciBilgileri.appendChild(textNode);
                    kullaniciBilgileri.classList.add("anatomi-kullanici-bilgileri");
                
                    newDiv.appendChild(kullaniciBilgileri);
                }
                
                sectionFormDesc.insertAdjacentElement("afterend",newDiv);
            }
          
        }

        let formFirstStep = document.querySelector(".anatomi_form_step1");
        let formSecondStep = document.querySelector(".anatomi_form_step2");

        if(!formFirstStep && !formSecondStep){
            formFirstStep = document.createElement("div");
            formFirstStep.classList.add("anatomi_form_step1");
            form.appendChild(formFirstStep);

            formSecondStep = document.createElement("div");
            formSecondStep.classList.add("anatomi_form_step2");
            form.appendChild(formSecondStep);
        }
        const tcInput = document.querySelector("#lead-form > div:nth-child(1)");
        const birthDate = document.querySelector("#lead-form > div:nth-child(6)")
        if(tcInput && birthDate && formFirstStep){
            formFirstStep.appendChild(tcInput);
            formFirstStep.appendChild(birthDate);
        }
    
        let button = document.querySelector(".anatomi_form_step1 button");
        if (!button) {
            button = document.createElement("button");
            button.textContent = "Devam Et";
            button.type = "button"; 
            button.disabled = true;
            formFirstStep.insertAdjacentElement("beforeend",button);
        }
        const tcInputValue = document.querySelector("#identityNumber")
        const birthDateValue =document.querySelector("#phone")
        const tcInputError= document.querySelector("#lead-form > div.anatomi_form_step1 > div.textbox")
        const birthDateError = document.querySelector("#lead-form > div.anatomi_form_step1 > div.textbox:nth-child(2)");
        birthDateError.classList.add("anatomi_birth")
        const checkFormValidity = () => {
            const hasError =  birthDateError.classList.contains("error");
            const hasError2 = tcInputError.classList.contains("error");
        
            if (tcInputValue && birthDateValue) {
                if (!hasError && !hasError2 && tcInputValue.value.trim() !== "" && birthDateValue.value.trim() !== "") {
                    button.disabled = false;
                } else {
                    button.disabled = true;
                }
            }
        };
        
        if (tcInputValue && birthDateValue) {
            tcInputValue.addEventListener("change", checkFormValidity);
            birthDateValue.addEventListener("change", checkFormValidity);
        }
        const observer = new MutationObserver(checkFormValidity);

        if (tcInput && birthDate) {
            observer.observe(tcInput, { attributes: true, attributeFilter: ["class"] });
            observer.observe(birthDate, { attributes: true, attributeFilter: ["class"] });
        }
        button.addEventListener("click", () => {
            formFirstStep.style.display = "none";
            formSecondStep.style.display = "flex";

         const kullaniciBilgileri = document.querySelector(".anatomi-kullanici-bilgileri");
          kullaniciBilgileri.classList.add("active");

          //  const temelBilgiler = document.querySelector(".anatomi-temel-bilgiler");
         //   temelBilgiler.classList.remove("active");

           // const spanNumberTemel = document.querySelector("#teklif-al > div > div.anatomi-form-info-container > div.anatomi-temel-bilgiler > span")
            //spanNumberTemel.classList.remove("active")

           const spanNumber = document.querySelector("#teklif-al > div > div.anatomi-form-info-container > div.anatomi-kullanici-bilgileri.active > span")
           spanNumber.classList.add("active")
            

        });


        const name = document.querySelector("#lead-form > div:nth-child(2)")
        const surname = document.querySelector("#lead-form > div:nth-child(3)");
        const email = document.querySelector("#lead-form > div:nth-child(4)");
        const phone = document.querySelector("#lead-form > div.datepicker")
        const checkboxes = document.querySelectorAll(".chkbox");
        const kvkk = document.querySelector("#lead-form > div.kvkk-text");
        const btnContainer = document.querySelector("#lead-form > div:nth-child(9)");

        if( name && surname && email && phone && checkboxes && kvkk && btnContainer && formSecondStep){ 
            formSecondStep.appendChild(name);
            formSecondStep.appendChild(surname);
            formSecondStep.appendChild(email);
            formSecondStep.appendChild(phone);
            checkboxes.forEach(checkbox => {
                formSecondStep.appendChild(checkbox);
            });
            formSecondStep.appendChild(kvkk);
            formSecondStep.appendChild(btnContainer);
        }

       const tcNo =document.querySelector("#lead-form > div.anatomi_form_step1 > div.textbox.float-label > label")
        const tcNoContainer = document.querySelector("#lead-form > div.anatomi_form_step1 > div.textbox:nth-child(1)")
        if(tcNo && tcNoContainer){
            tcNoContainer.insertAdjacentElement("beforebegin",tcNo);
        }
        const phoneNo = document.querySelector("#lead-form > div.anatomi_form_step1 > div:nth-child(3) > label")
        const phoneContainer = document.querySelector("#lead-form > div.anatomi_form_step1 > div:nth-child(3)")
        if(phone && phoneContainer){
            phoneContainer.insertAdjacentElement("beforebegin",phoneNo);
            }
        const nameLabel = document.querySelector("#lead-form > div.anatomi_form_step2 > div:nth-child(1) > label")
        const nameContainer = document.querySelector("#lead-form > div.anatomi_form_step2 > div:nth-child(1)")
        if(nameLabel && nameContainer){
            nameContainer.insertAdjacentElement("beforebegin",nameLabel);
            }
        const surnameLabel = document.querySelector("#lead-form > div.anatomi_form_step2 > div:nth-child(3) > label")
        const surnameContainer = document.querySelector("#lead-form > div.anatomi_form_step2 > div:nth-child(3)")
        if(surnameLabel && surnameContainer){
            surnameContainer.insertAdjacentElement("beforebegin",surnameLabel);
            }
        const emailLabel = document.querySelector("#lead-form > div.anatomi_form_step2 > div:nth-child(5) > label")
        const emailContainer = document.querySelector("#lead-form > div.anatomi_form_step2 > div:nth-child(5)")
        if(emailLabel && emailContainer){
            emailContainer.insertAdjacentElement("beforebegin",emailLabel);
            }
        const birthLabel = document.querySelector("#lead-form > div.anatomi_form_step2 > div.datepicker > div.mx-datepicker > div > label")
        const birthContainer = document.querySelector("#lead-form > div.anatomi_form_step2 > div.datepicker")
        if(birthLabel && birthContainer){
            birthContainer.insertAdjacentElement("beforebegin",birthLabel);
            }
        
        
          let yesNoContainer = document.querySelector(".anatomi_check_container");
            if (!yesNoContainer) {
                yesNoContainer = document.createElement("div");
                yesNoContainer.className = "anatomi_check_container";
        
                const yes = document.querySelector("#lead-form > div.anatomi_form_step2 > label:nth-child(12)");
                const no = document.querySelector("#lead-form > div.anatomi_form_step2 > label:nth-child(13)");
            
                if (yes && no) {
                   
                    yesNoContainer.insertAdjacentElement("afterbegin", no);
                    yesNoContainer.insertAdjacentElement("afterbegin", yes);
            
                    const targetElement = document.querySelector("#lead-form > div.anatomi_form_step2 > div.kvkk-text")
                    if (targetElement) {
                        targetElement.insertAdjacentElement("afterend", yesNoContainer);
                    } 
                }
            } 
        
            const body = document.querySelector("body");
            const anatomiFormStep2 = document.querySelector(".anatomi_form_step2");
            
            if (!document.querySelector(".anatomi_stickyButtonContainer")) {  
                const stickyDiv = document.createElement("div");
                stickyDiv.classList.add("anatomi_stickyButtonContainer");
            
                const button = document.createElement("button");
                button.textContent = "Hemen Teklif Al";
                button.classList.add("anatomi-sticky-button");

                const backButton = document.createElement("button");
                backButton.textContent = "Geri Dön";
                backButton.classList.add("anatomi-back-button");
            
                const originalButton = document.querySelector("#lead-form > div.anatomi_form_step2 > div:nth-child(14) > button");
                if(originalButton){
                    originalButton.style.display = "none";
                }
            
                button.addEventListener("click", () => {
                    if (originalButton && !originalButton.disabled) {
                        originalButton.click();
                    }
                });
            
                backButton.addEventListener("click", () => {
                    const formStep1 = document.querySelector(".anatomi_form_step1");
                    const formStep2 = document.querySelector(".anatomi_form_step2");
                    
                    if (formStep1 && formStep2) {
                        formStep1.style.display = "block";  
                        formStep2.style.display = "none"; 
                        const kullaniciBilgileri = document.querySelector(".anatomi-temel-bilgiler");
                        kullaniciBilgileri.classList.add("active");
            
                        const temelBilgiler = document.querySelector(".anatomi-kullanici-bilgileri");
                        temelBilgiler.classList.remove("active");
            
                        const spanNumberTemel = document.querySelector("#teklif-al > div > div.anatomi-form-info-container > div.anatomi-kullanici-bilgileri > span")
                        spanNumberTemel.classList.remove("active")
            
                        const spanNumber = document.querySelector("#teklif-al > div > div.anatomi-form-info-container > div.anatomi-temel-bilgiler.active > span")
                        spanNumber.classList.add("active")
                    }
                });
                if (originalButton) {
                    button.disabled = originalButton.disabled;
                    const observer = new MutationObserver(() => {
                        button.disabled = originalButton.disabled;
                    });
            
                    observer.observe(originalButton, {
                        attributes: true,
                        attributeFilter: ["disabled"],
                    });
                }
                stickyDiv.appendChild(backButton); 
                stickyDiv.appendChild(button);
                body.appendChild(stickyDiv);
            }
            
            if (anatomiFormStep2) {
                const stickyDiv = document.querySelector(".anatomi_stickyButtonContainer"); 
            
                if (getComputedStyle(anatomiFormStep2).display !== "none") {
                    stickyDiv.style.display = "flex"; 
                } else {
                    stickyDiv.style.display = "none"; 
                }
            }
            
            
            


    }

    setInterval(() => {
        generateForm();
    }, 100);

};


const tss_form_redesign_init = () => {
    tss_form_redesign_html();
    tss_form_redesign_css();
    tss_form_redesign_js();
};

const tss_form_redesign_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

if (tss_form_redesign_condition()) {
    tss_form_redesign_init();
}
