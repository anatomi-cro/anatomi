setTimeout(() => {
  const inputlarin_bolunmesi_html = () => {
    const html = `
     <div class="anatomi_form_container"></div>
    `;
    const container = document.querySelector("body > div.offer-btn-wrp > div.offer-form-content > div")
    const form = document.querySelector(".anatomi_form_container");
    if (!form) {
      container.insertAdjacentHTML("afterend", html);
    }
  }
  const inputlarin_bolunmesi_css =() => {
    const style = `
      <style>
      .offer-form-content.active{
        border-radius: 8px;
      }
      .anatomi_form_container{
        width: 300px;
  }
    .anatomi_orj_form_step_2{
      margin-top: 20px;
    }
        .anatomi_input_container{
          display: flex !important;
          flex-direction: column-reverse;
          gap: 5px;
        }
      .anatomi_ilerle_btn{
      width: 100%;
      padding: 15px;
      background-color: #2A338F;
      color: white;
      font-size: 16px;
      border-radius: 5px;
      margin-top: 30px;
      font-weight: bold;
  
      }
      .anatomi_geri_btn{
        background: none;
        color: white;
        font-size: 16px;
        width: 40%;
        font-weight: bold;
      }
    .anatomi_form_step_1 select{
      height: 45px !important;
       border-radius: 8px !important;
  }
    .anatomi_form_step_1 input ,.anatomi_form_step_2 input:nth-of-type(1),.anatomi_form_step_2 input:nth-of-type(2){
          height: 45px !important;
      border-radius: 8px !important;
      padding: 13px;
    }
    .anatomi_form_step_2 form-check{
      align-items: unset !important;
    }
    #progress-text{
      color: white;
      text-align: center;
      margin-top: 5px;
      font-size: 14px;
    }
    .formTitle{
      text-align: center;
    }
    progress {
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background-color:rgba(245, 245, 245, 0.64); 
  }
  
  progress::-webkit-progress-bar {
  background-color:rgba(245, 245, 245, 0.64); 
  border-radius: 5px;
  }
  
  progress::-webkit-progress-value {
  background-color: #2a338f;
  border-radius: 5px;
  }
  
  progress::-moz-progress-bar {
  background-color: #2a338f;
  border-radius: 5px;
  }
  .disabled{
    background-color: gray;
  }
  .anatomi_input_title{
  color: white;
  }
  .offer-form .select-content:after{
    top: 66% !important;
  }
    #defaultCheck1 , #defaultCheck2{
    transform: scale(1.5);
  }
    #defaultCheck2{
      height: 20px !important; 
    }
  .anatomi_btn_container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 50px;
  }
  .anatomi_orj_btn_container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .anatomi_ilerle_button_hp{
    width: 60% !important;
    box-shadow: none;
    font-size: 16px !important;
  }
  .anatomi_third_geri_btn{
    font-size: 16px;
  }
  .anatomi_orj_teklif_al_btn{
    width: 60%;
    justify-content: center;
    box-shadow: none;
  }
  
  .anatomi_arrow_icon{
    padding-left: 5px;
  }
  .anatomi_adSoyad::placeholder{
    color: white;
  }
  
   .pin-char-group {
    background-color: white;
    border-radius: 8px;
   }
   .pin-char-group input{
    border-radius: 8px;
   }
    .re-send-code-holder{
      color: white;
      font-weight: bold;
    }
  .re-send-code-holder a{
    color: white !important;
  }
  
  @media (max-width: 768px) {
     .formTitle, .anatomi_orj_teklif_al_btn{
      font-size: 16px !important;
    }
    .anatomi_input_title{
      font-size: 14px !important;
    }
    .form-check-label a , .form-check-label , .form-step p{
      font-size: 12px !important;}
    
    }
    </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
    const fontAwesomeLink = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">`;
    head.insertAdjacentHTML("beforeend", fontAwesomeLink);
  }
  const inputlarin_bolunmesi_js = () => {
    const generateCss = () => {
    const anatomiFormContainer = document.querySelector(".anatomi_form_container");
    const formArea = document.querySelector("body > div.offer-btn-wrp > div.offer-form-content > div")
    if(anatomiFormContainer && formArea){
      anatomiFormContainer.appendChild(formArea);
    }
    const step1FormContainer = document.querySelector("#teklifAlinForm > div.form-step.form-step-1.d-non")
    const formStep1 = document.createElement("div");
    formStep1.classList.add("anatomi_form_step_1");
    const formStep2 = document.createElement("div");
    formStep2.classList.add("anatomi_form_step_2");
    if(step1FormContainer){
      step1FormContainer.appendChild(formStep1);
      step1FormContainer.appendChild(formStep2);
      }
  
      const formCheck1 =document.querySelector("#teklifAlinForm > div.form-step.form-step-1.d-non > div:nth-child(12)")
      formCheck1.setAttribute("style", "align-items: center !important;  justify-content: space-between; width: 95%; margin: 0 auto;");
      const formCheck2 = document.querySelector("#teklifAlinForm > div.form-step.form-step-1.d-non > div:nth-child(13)")
      formCheck2.setAttribute("style", "align-items: flex-start !important; justify-content: space-between; width: 95%; margin: 0 auto;");
      
  
      const orijinalFormStep2 = document.querySelector("#teklifAlinForm > div.form-step.form-step-2")
      if(orijinalFormStep2){
        orijinalFormStep2.classList.add("anatomi_orj_form_step_2");
        }
  
      const buttonContainer = document.querySelector("#teklifAlinForm > div.form-step.form-step-2.anatomi_orj_form_step_2 > div.d-flex.flex-row.flex-wrap.align-items-center.justify-content-between.mt-lg-4.mt-3.mb-4")
      if(buttonContainer){
        buttonContainer.classList.add("anatomi_orj_btn_container");
      }
      const teklifAlBtn = document.querySelector("#teklifAlinForm > div.form-step.form-step-2.anatomi_orj_form_step_2 > div.d-flex.flex-row.flex-wrap.align-items-center.justify-content-between.mt-lg-4.mt-3.mb-4 > button.btn-step-submit.btn-flex-betw.btn-large.btn-blue-shadow.radius-5.color-white")
      if(teklifAlBtn){
        teklifAlBtn.classList.add("anatomi_orj_teklif_al_btn");
        const icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-chevron-right","anatomi_arrow_icon"); 
        teklifAlBtn.innerText= "";
  
        teklifAlBtn.appendChild(document.createTextNode("Teklif Alın"));
        teklifAlBtn.appendChild(icon);
  
      }
      }
    
  
    generateCss();
      const generateInsert = () => {
        const insert_step_1 = () => {
          const input1 = document.querySelector("#\\31 637");
          input1.classList.add("anatomi_input_container");
          const input1Title = document.createElement("p");
          input1Title.classList.add("anatomi_input_title");
          input1Title.textContent = "İlgilendiğiniz Ürün";
          input1.appendChild(input1Title);
  
          const input2 = document.querySelector("#\\31 283");
          input2.classList.add("anatomi_input_container");
          const input2Title = document.createElement("p");
          input2Title.classList.add("anatomi_input_title");
          input2Title.textContent = "Kullandığınız Muhasebe Programı";
          input2.appendChild(input2Title);
  
          const input3 = document.querySelector("#teklifAlinForm > div.form-step.form-step-1.d-non > div.offer-input.teklifAlinFormAdSoyad");
          input3.classList.add("anatomi_input_container")
          const input3Title = document.createElement("p");
          input3Title.classList.add("anatomi_input_title");
          input3Title.textContent = "Ad Soyad*";
          input3.appendChild(input3Title);
  
          const input4 = document.querySelector("#\\31 284");
          input4.classList.add("anatomi_input_container")
          const input4Title = document.createElement("p");
          input4Title.classList.add("anatomi_input_title");
          input4Title.textContent = "Bulunduğunuz Şehir";
          input4.appendChild(input4Title);
          const targetElement = document.querySelector(".anatomi_form_step_1");
          
          if (input1 && input2 && input3 && input4 && targetElement) {
            targetElement.appendChild(input1);
            targetElement.appendChild(input2);
            targetElement.appendChild(input3);
            targetElement.appendChild(input4);
          }
          const ilerleBtn = document.createElement("button");
          ilerleBtn.classList.add("anatomi_ilerle_btn");
          const icon = document.createElement("i");
          icon.classList.add("fa-solid", "fa-chevron-right","anatomi_arrow_icon"); 
  
          ilerleBtn.appendChild(document.createTextNode("İlerle"));
          ilerleBtn.appendChild(icon);
          ilerleBtn.disabled = true; 
          
          if (targetElement) {
            targetElement.appendChild(ilerleBtn);
          }
  
  
          input1.addEventListener("change", (event) => {
            const value = event.target.value.trim();  
            if(value !== "İlgilendiğiniz Ürün") {
            }
          });
          
          input2.addEventListener("change", (event) => {
            const value = event.target.value.trim(); 
            if(value !== "Kullandığınız muhasebe programı") {
            }
          });
  
          document.querySelector(".anatomi_form_step_2").style.display = "none";
     
          
          ilerleBtn.addEventListener("click", function () {
            document.querySelector(".anatomi_form_step_1").style.display = "none";
            document.querySelector(".anatomi_form_step_2").style.display = "block";
          });
        };
      
        const insert_step_2 = () => {
          const input1 = document.querySelector("#teklifAlinForm > div.form-step.form-step-1.d-non > div.offer-input.teklifAlinFormTelefonNo");
          const smsCode = document.querySelector("#smscode");
          const input2 = document.querySelector("#teklifAlinForm > div.form-step.form-step-1.d-non > div.offer-input.teklifAlinFormFirmaAdi");
          const input3 = document.querySelectorAll("#teklifAlinForm > div.form-step.form-step-1.d-non > div.form-check");
  
          const formBtn = document.querySelector("#teklifAlinForm > div.form-step.form-step-1.d-non > button")
          formBtn.classList.add("anatomi_ilerle_button_hp")
          const icon2 = document.createElement("i");
          icon2.classList.add("fa-solid", "fa-chevron-right", "anatomi_arrow_icon"); 
          formBtn.innerText = "İleri"; 
          formBtn.appendChild(icon2);
  
          const targetElement = document.querySelector(".anatomi_form_step_2");
      
          if (input1 && input2 && input3 && smsCode && targetElement) {
            targetElement.appendChild(input1);
            targetElement.appendChild(smsCode);
            targetElement.appendChild(input2);
            input3.forEach((item) => {
              targetElement.appendChild(item);
            });
        
          }
        
          const btnContainer = document.createElement("div");
          btnContainer.classList.add("anatomi_btn_container");
          
  
          const geriBtn = document.createElement("button");
          geriBtn.classList.add("anatomi_geri_btn");
  
          const icon = document.createElement("i");
          icon.classList.add("fa-solid", "fa-chevron-left"); 
  
          geriBtn.appendChild(icon);
          geriBtn.appendChild(document.createTextNode(" Geri Dön"));
          btnContainer.appendChild(geriBtn)
          btnContainer.appendChild(formBtn)
      
          if (targetElement) {
            targetElement.appendChild(btnContainer);
          }
  
          geriBtn.addEventListener("click", function () {
            document.querySelector(".anatomi_form_step_2").style.display = "none";
            document.querySelector(".anatomi_form_step_1").style.display = "block";
          });
        };
      
        insert_step_1();
        insert_step_2();
      };
      generateInsert();
    
      
      const generateProgressBar = () => {
  
        const thirdStepGeriBtn = document.querySelector("#teklifAlinForm > div.form-step.form-step-2 > div.d-flex.flex-row.flex-wrap.align-items-center.justify-content-between.mt-lg-4.mt-3.mb-4 > button.px-0.m-0.btn-prev-step.btn-flex-betw.btn-large.btn-transparent.radius-5.color-white")
        if(thirdStepGeriBtn){
          thirdStepGeriBtn.classList.add("anatomi_third_geri_btn");
        }
      const updateProgress = (progress) => {
        const progressText = document.querySelector("#progress-text");
        const progressBar = document.querySelector("#progress-bar");
      
        if (progressText && progressBar) {
          progressText.innerText = `Süreci %${progress} tamamladınız!`;
          progressBar.value = progress;
        }
      };
      
      const setupHeader = () => {
        const header = document.querySelector("body > div.offer-btn-wrp > div.offer-form-content > div > div > h5");
      
        if (header) {
          header.innerText = "Hemen Teklif Alın";
  
          const progressContainer = document.createElement("div");
          progressContainer.style.marginTop = "10px";
  
          const progressBar = document.createElement("progress");
          progressBar.id = "progress-bar";
          progressBar.max = 100;
          progressBar.value = 0;
          progressBar.style.width = "100%";
      
          const progressText = document.createElement("p");
          progressText.id = "progress-text";
          progressText.innerText = "Süreci %0 tamamladınız";
  
      
          progressContainer.appendChild(progressBar);
          progressContainer.appendChild(progressText);
      
          header.parentNode.insertBefore(progressContainer, header.nextSibling);
        }
      };
      const updateStepProgress = (currentStep) => {
        let progress = 0;
        
        if (currentStep === 1) {
          progress = 0; 
        } else if (currentStep === 2) {
          progress = 60; 
        } else if (currentStep === 3) {
          progress = 90;
        }
        
        updateProgress(progress);
      };
    
      setupHeader();
      updateStepProgress(1); 
    
      document.addEventListener("click", (event) => {
        if (event.target.classList.contains("anatomi_ilerle_btn")) {
          updateStepProgress(2); 
        } else if (event.target.classList.contains("anatomi_geri_btn")) {
          updateStepProgress(1); 
        } else if (event.target.classList.contains("anatomi_ilerle_button_hp")) { 
          setTimeout(() => {
            const formStep2 = document.querySelector(".anatomi_form_step_2");
            const hasError = formStep2 && formStep2.querySelector(".form-error");
        
            const container = document.querySelector(".anatomi_form_container");
            const hasError2 = container && container.querySelector(".warning");
        
            if (!hasError && (!hasError2 || hasError2.classList.contains("d-none"))) {
              updateStepProgress(3);
            }
          }, 1000);
        } else if(event.target.classList.contains("anatomi_third_geri_btn")){
          updateStepProgress(2);
        }else if (event.target.classList.contains("anatomi_orj_teklif_al_btn")) {
          const progressContainer = document.querySelector("body > div.offer-btn-wrp > div.offer-form-content > div > div > div:nth-child(2)")
          if (progressContainer) {
            progressContainer.style.display = "none";
          }
        }
  
      });
    };
  
    generateProgressBar();
      const generateChecking = () => {
        const inputs1 = document.querySelectorAll("#\\31 637");
        const ilgilendiginizUrunSelect = inputs1[1]; 
        const ilgilendiginizUrunOption = ilgilendiginizUrunSelect.querySelector("option"); 
        ilgilendiginizUrunOption.innerText = "";
  
        const inputs2 =  document.querySelectorAll("#\\31 283");
        const muhasebe = inputs2[1];
        const muhasebeOption = muhasebe.querySelector("option");
        muhasebeOption.innerText = "";
  
        const adSoyad =  document.querySelectorAll("#teklifAlinFormAdSoyad")[1]; 
        adSoyad.classList.add("anatomi_adSoyad");
  
        const inputs4 = document.querySelectorAll("#\\31 284");
        const sehir = inputs4[1];
        const sehirOption = sehir.querySelector("option");
        sehirOption.innerText = "";
  
        
        const ilerleBtn = document.querySelector(".anatomi_ilerle_btn"); 
        
        function toggleButtonState() {
          if (
            !ilgilendiginizUrunSelect.value.trim() ||
            !muhasebe.value.trim() ||
            !sehir.value.trim() ||
            !adSoyad.value.trim()
          ) {
            ilerleBtn.disabled = true;
            ilerleBtn.classList.add("disabled");
          } else {
            const urunValue = ilgilendiginizUrunSelect.value.trim().toLowerCase();
            const muhasebeValue = muhasebe.value.trim().toLowerCase();
            const sehirValue = sehir.value.trim().toLowerCase();
            const adSoyadValue = adSoyad.value.trim().toLowerCase(); 
        
            if (
              urunValue !== "" &&
              muhasebeValue !== "" &&
              sehirValue !== "" &&
              adSoyadValue !== ""
            ) {
              ilerleBtn.disabled = false;
              ilerleBtn.classList.remove("disabled");
            } else {
              ilerleBtn.disabled = true;
              ilerleBtn.classList.add("disabled");
            }
          }
        }
        adSoyad.addEventListener("input", toggleButtonState);
        ilgilendiginizUrunSelect.addEventListener("change", toggleButtonState);
        muhasebe.addEventListener("change", toggleButtonState);
        sehir.addEventListener("change", toggleButtonState);
        
        toggleButtonState();
        
      }
  
      generateChecking();  
  }
  const inputlarin_bolunmesi_init = () => {
    inputlarin_bolunmesi_html();
    inputlarin_bolunmesi_css();
    inputlarin_bolunmesi_js();
  }
  const inputlarin_bolunmesi_condition = () => {
    return true;
  
  }
  if(inputlarin_bolunmesi_condition()){
    inputlarin_bolunmesi_init();
  }
},1000);