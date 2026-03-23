const seyahat_saglik_redesign_v2_html = () => {};

const seyahat_saglik_redesign_v2_css = () => {
    const style = `
      <style>    
          .anatomi_seyahat_title{
            font-size: 16px;
            margin-top: 20px !important;
            margin-bottom: 10px !important;
        }
        
        .anatomi_form_step_1, .anatomi_form_step_2, .anatomi_form_step_3{
        padding: 0px !important;
        }
         .anatomi_form_step_1 .title , .anatomi_form_step_2 .title , .anatomi_form_step_3 .title{
        color: #37424A !important;
        font-size: 16px !important;
        padding-left: 50px !important;
        background-color: #F4F3F3;
        padding: 15px;
        padding-top: 15px !important;
        border-radius: 8px;
      }
        .section-number{
            font-size: 14px !important;
            background: #37424A !important;
            width: 30px !important;
            height: 30px !important;
            top: 10px;
            left: 10px !important;
        }
        .anatomi_tc_label, .anatomi_dogum_label, .anatomi_ad_label, .anatomi_soyad_label, .anatomi_eposta_label, .anatomi_telefon_label{ 
                position: static !important;
                color: black !important;
                font-weight: bold !important;
        }
            
        .date-step img{
            display: none !important;
        }
        .textbox, #teklif-al > div > div.section.anatomi_form_step_1 > div.step.insurer-step > div.datepicker,  #teklif-al > div > div.section.anatomi_form_step_1 > div.step.insurer-step.active > div.datepicker{
            width: 100% !important;
        }
        #teklif-al > div > div.section.anatomi_form_step_1 > div.step.insurer-step.idle > div.datepicker > div.mx-datepicker.disabled > div > i{
        
        top: 70% !important;
        right: 15px !important;
        }
        .form .section .step.date-step .datepicker label{
        color: black !important;
        font-weight: bold !important;
        font-size: 16px !important;
        opacity: 0.6 !important;
        padding-left: 5px;
        }

        .textbox.float-label.has-value label{
            font-size: 16px !important;
        }
        
        #teklif-al > div > div.section.anatomi_form_step_3 > div.step.person-step.idle > button > svg > path{
            fill: #37424A !important;
        }
        .anatomi_form_step_3 .title{
            margin-bottom: 10px !important;
        }
        .person-step{
            padding: 0px !important;
        }
        #teklif-al > div > div.section.anatomi_form_step_3 > div.step.person-step.idle > button > svg{
            color: #37424A !important;
        }
        .anatomi_teklif_al_btn{
        max-width: unset !important;
        }
        .chkbox{
            opacity : 1 !important;
            font-weight: bold !important;
        }
        .form .section .step .line {
            display: none;
        }
        .anatomi_form_title {
          position: relative;
          color: #37424A !important;
          font-size: 16px !important;
          padding-left: 50px !important;
          background-color: #F4F3F3;
          padding: 15px;
          padding-top: 15px !important;
          border-radius: 8px;
        }

        .anatomi_form_title::after {
          width: 16px;
        height: 16px;
        background-image: url("https://r.resimlink.com/BMudEYj6N.png"); 
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        position: absolute;
          content: '';
        color: #37424A;
        right: 20px;
        top: 20px;
        transition: transform 0.3s ease;
        }
        .anatomi_form_title.active {
        color: #28A745 !important;
        position: relative; 
        }
        .anatomi_form_title.rotate::after {
        transform: rotate(-90deg);
        }

        .anatomi_form_title.active::before {
        content: '';
        position: absolute;
        right: 95px;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;  
        height: 20px; 
        background-image: url('https://r.resimlink.com/FA-Gy.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        }

        .anatomi_form_step_2 .anatomi_form_title.active::before {
        right: 70px !important;
        }
        .anatomi_form_step_3 .anatomi_form_title.active::before {
            right: 85px !important;
        }
        .section-number.active{
            background: #28A745 !important; 
        }
        .hidden {
        display: none !important;
        }
       #teklif-al > div > div.section.anatomi_form_step_1 > div.step.insurer-step.active > div.datepicker > div.mx-datepicker > div > i{
        top: 68% !important;
        right: 12px !important;
        }
      .active{
       display: flex !important;
      }
   .progress-bar-wrapper {
        width: 100%;
        background-color: #e0e0e0;
        height: 6px;
        border-radius: 3px;
        margin-bottom: 15px;
      }
    

      .progress-bar-fill {
        height: 100%;
        background-color: #37424A !important;
        transition: width 0.4s ease;
        border-radius: 3px;
      }
    .anatomi_first_step_continue_btn , .anatomi_second_step_continue_btn{
        background-color: #37424A !important;
        color: white;
        font-size: 14px;
        padding: 15px 25px;
        border-radius: 8px;
        border: none;
    }
        button[disabled]{
           opacity: .6;
            border: none !important;
        }

    .anatomi_buttons_container{
        display: flex;
        justify-content: space-between;
    }
    .anatomi_second_step_continue_btn, .anatomi_second_step_back_btn{
        width: 45%;
    }
    .anatomi_second_step_back_btn{
        background: none;
    border: 1px solid #37424A;
    border-radius: 8px;
    }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const seyahat_saglik_redesign_v2_js = () => {
     const gorsel =  document.querySelector("#travelForm > section:nth-child(1)")
    if(gorsel){
        gorsel.style.display = "none";
    }
    const kategoriler = document.querySelector("#travelForm > nav")
    if(kategoriler){
        kategoriler.setAttribute("style", "display: none !important;");
    }
    const seyahatTitle = document.querySelector("#travelForm > h1")
    if(seyahatTitle){
        seyahatTitle.classList.add("anatomi_seyahat_title");
        }
    const section1 = document.querySelector("#teklif-al > div > div:nth-child(1)")
    if(section1){
        section1.classList.add("anatomi_form_step_1");
        }
    const step1 =document.querySelector("#teklif-al > div > div.section.anatomi_form_step_1 > div.section-number")
    if(step1){
        step1.textContent = "1";
    }
    const section2 = document.querySelector("#teklif-al > div > div:nth-child(2)")
    if(section2){
        section2.classList.add("anatomi_form_step_2");
        section2.style.display = "none";
    }
    const step2 = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_2 > div.section-number")
    if(step2){
        step2.textContent = "2";
        }
    const section3 = document.querySelector("#teklif-al > div > div:nth-child(3)")
    if(section3){
        section3.classList.add("anatomi_form_step_3");
        section3.style.display = "none";
        }
    const step3 = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_3 > div.section-number")
    if(step3){
        step3.textContent = "3";
        }
    const titles = document.querySelectorAll("#teklif-al > div > div.section > div.title")
        titles.forEach(title => {
            title.classList.add("anatomi_form_title");
        })

    const tcKimlik = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_1 > div.step.insurer-step.idle > div:nth-child(2)")
    if(tcKimlik){
        const tcLabel = document.createElement("label");
        tcLabel.classList.add("anatomi_tc_label");
        tcLabel.textContent = "T.C. Kimlik No";
        tcKimlik.insertAdjacentElement("afterbegin", tcLabel);
    }
    const tcInput = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_1 > div.step.insurer-step.idle > div:nth-child(2) > input[type=text]")
    if(tcInput){
        tcInput.placeholder = "";
    }
     const dogumTarihi = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_1 > div.step.insurer-step.idle > div.datepicker > div.mx-datepicker.disabled > div")
    if(dogumTarihi){
        const dogumLabel = document.createElement("label");
        dogumLabel.classList.add("anatomi_dogum_label");
        dogumLabel.textContent = "Doğum Tarihi";
        dogumTarihi.insertAdjacentElement("afterbegin", dogumLabel);
    }
    const dogumInput = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_1 > div.step.insurer-step.idle > div.datepicker > div.mx-datepicker.disabled > div > input")
    if(dogumInput){
        dogumInput.placeholder = "";
    }
     const ad = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_1 > div.step.insurer-step.idle > div:nth-child(4)")
    if(ad){
        const adLabel = document.createElement("label");
        adLabel.classList.add("anatomi_ad_label");
        adLabel.textContent = "Ad";
        ad.insertAdjacentElement("afterbegin", adLabel);
    }
    const adInput = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_1 > div.step.insurer-step.idle > div:nth-child(4) > input[type=text]")
    if(adInput){
        adInput.placeholder = "";
    }
     const soyad = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_1 > div.step.insurer-step.idle > div:nth-child(5)")
    if(soyad){
        const soyadLabel = document.createElement("label");
        soyadLabel.classList.add("anatomi_soyad_label");
        soyadLabel.textContent = "Soyad";
        soyad.insertAdjacentElement("afterbegin", soyadLabel);
    }
    const soyadInput = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_1 > div.step.insurer-step.idle > div:nth-child(5) > input[type=text]")
    if(soyadInput){
        soyadInput.placeholder = "";
    }
       const ePosta = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_1 > div.step.insurer-step.idle > div.textbox.w-100.disabled.float-label")
    if(ePosta){
        const epostaLabel = document.createElement("label");
        epostaLabel.classList.add("anatomi_eposta_label");
        epostaLabel.textContent = "E-Posta";
        ePosta.insertAdjacentElement("afterbegin", epostaLabel);
    }
    const epostaInput = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_1 > div.step.insurer-step.idle > div.textbox.w-100.disabled.float-label > input[type=text]")
    if(epostaInput){
        epostaInput.placeholder = "";
    }
    const gidisTarihiInput = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_1 > div.step.insurer-step.idle > div.step.date-step.active > div:nth-child(2) > div > div > input")
    if(gidisTarihiInput){
        gidisTarihiInput.placeholder = "";
        }
    const donusTarihiInput = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_1 > div.step.insurer-step.idle > div.step.date-step.active > div:nth-child(3) > div > div > input")
    if(donusTarihiInput){
        donusTarihiInput.placeholder = "";
        }

  const telefonNo = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_3 > div.step.phone-step.idle > div.textbox.disabled")
    if(telefonNo){
        const telefonNoLabel = document.createElement("label");
        telefonNoLabel.classList.add("anatomi_telefon_label");
        telefonNoLabel.textContent = "Telefon Numarası";
        telefonNo.insertAdjacentElement("afterbegin", telefonNoLabel);
    }
    const telefonInput = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_3 > div.step.phone-step.idle > div.textbox.disabled > input[type=text]")
    if(telefonInput){
        telefonInput.placeholder = "";
    }
    const teklifAlBtn = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_3 > div.step.final-step.idle > button")
    if(teklifAlBtn){
        teklifAlBtn.textContent = "Hemen Teklif Al";
        teklifAlBtn.classList.add("anatomi_teklif_al_btn");
    }
    const progressWrapper = document.createElement("div");
    progressWrapper.classList.add("progress-bar-wrapper");

    const progressFill = document.createElement("div");
    progressFill.classList.add("progress-bar-fill");
    progressFill.style.width = "30%";

    progressWrapper.appendChild(progressFill);
   const targetElement = document.querySelector("#teklif-al")
   if(targetElement){
    targetElement.insertAdjacentElement("afterbegin", progressWrapper);
    }

  
    const stepConfigs = [
    {
        stepSelector: '.step.insurer-step',
        sectionSelector: '.section.anatomi_form_step_1'
    },
    {
        stepSelector: '.step.location-step', 
        sectionSelector: '.section.anatomi_form_step_2'
    },
    {
        stepSelector: '.step.final-step', 
        sectionSelector: '.section.anatomi_form_step_3'
    }
    ];

    stepConfigs.forEach(config => {
        
    const stepElement = document.querySelector(config.stepSelector);
    if (stepElement) {
        const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach(mutation => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (stepElement.classList.contains('success')) {
                const section = document.querySelector(config.sectionSelector);
                if (section) {
                const title = section.querySelector('.title');
                const sectionNumber = section.querySelector('.section-number');
                if (title && !title.classList.contains('active')) {
                    title.classList.add('active');
                }
                if (sectionNumber && !sectionNumber.classList.contains('active')) {
                    sectionNumber.classList.add('active');
                }
                }
            }
            }
        });
        });

        observer.observe(stepElement, { attributes: true });
    }
    });

 if(progressFill){
    progressFill.style.width = "30%";
    }

    const generateFirstInput = () => {
            const insurerStepDiv = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_1 > div.step.insurer-step");
            const dateStepDiv = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_1 > div.step.date-step");
           
            const title = document.querySelector(".anatomi_form_step_1 .anatomi_form_title");
            const number  = document.querySelector(".anatomi_form_step_1 .section-number");


            const updateStep2Clickable = () => {
            if (
                insurerStepDiv.classList.contains('success') &&
                dateStepDiv.classList.contains('success')
            ) {
                title.classList.add("active");
                number.classList.add("active");
            } else {
                title.classList.remove("active");
                number.classList.remove("active");
            }
            };

            const observer = new MutationObserver(() => {
            updateStep2Clickable();
            });


            if (insurerStepDiv) observer.observe(insurerStepDiv, { attributes: true, attributeFilter: ['class'] });
            if (dateStepDiv) observer.observe(dateStepDiv, { attributes: true, attributeFilter: ['class'] });

            updateStep2Clickable();


        const tcInput = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_1 > div.step.insurer-step > div:nth-child(2) > input[type=text]");
        const dogumInput = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_1 > div.step.insurer-step > div.datepicker > div.mx-datepicker > div > input");
        const adInput = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_1 > div.step.insurer-step > div:nth-child(4) > input[type=text]");
        const soyadInput = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_1 > div.step.insurer-step > div:nth-child(5) > input[type=text]");
        const epostaInput = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_1 > div.step.insurer-step > div.textbox.w-100.float-label.has-value > input[type=text]");
        const gidisTarihiInput = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_1 > div.step.date-step > div:nth-child(2) > div > div > input");
        const donusTarihiInput = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_1 > div.step.date-step > div:nth-child(3) > div > div > input");

        function areInputsFilled() {
            return (
            tcInput && tcInput.value.trim() !== '' &&
            dogumInput && dogumInput.value.trim() !== '' &&
            adInput && adInput.value.trim() !== '' &&
            soyadInput && soyadInput.value.trim() !== '' &&
            epostaInput && epostaInput.value.trim() !== '' &&
            gidisTarihiInput && gidisTarihiInput.value.trim() !== '' &&
            donusTarihiInput && donusTarihiInput.value.trim() !== ''
            );
        }
       let continueBtn = document.querySelector(".anatomi_first_step_continue_btn");

        if (!continueBtn) {
        continueBtn = document.createElement("button");
        continueBtn.classList.add("anatomi_first_step_continue_btn");
        continueBtn.textContent = "Devam Et";
        continueBtn.disabled = true;

        const targetElement = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_1");
        if (targetElement) targetElement.appendChild(continueBtn);
        }

      
        function toggleContinueButton() {
        if (continueBtn) {
            continueBtn.disabled = !areInputsFilled();
        }
        }
        continueBtn.addEventListener('click', () => {
        const step1 = document.querySelector(".anatomi_form_step_1");
        const step2 = document.querySelector(".anatomi_form_step_2");

        if (areInputsFilled()) {
            if (step1) step1.style.display = 'none';
            if (step2) step2.style.display = 'flex';
            if (progressFill) progressFill.style.width = "60%";
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
        }
});


        const inputs = [tcInput, dogumInput, adInput, soyadInput, epostaInput, gidisTarihiInput, donusTarihiInput];

        inputs.forEach(input => {
        if (input) {
            input.addEventListener('blur', toggleContinueButton);
            input.addEventListener('input', toggleContinueButton); 
        }
        });




    }

const generateSecondInput = () => {
  const locationStep = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_2 > div.step.location-step");
  const title = document.querySelector(".anatomi_form_step_2 .anatomi_form_title");
  const number = document.querySelector(".anatomi_form_step_2 .section-number");
  const step2 = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_2");
  const step3 = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_3");

  if (!locationStep || !step2 || !step3) return;

  const updateStep2Clickable = () => {
    if (locationStep.classList.contains('success')) {
      title.classList.add("active");
      number.classList.add("active");
    } else {
      title.classList.remove("active");
      number.classList.remove("active");
    }
  };

  const observer = new MutationObserver(updateStep2Clickable);
  observer.observe(locationStep, { attributes: true, attributeFilter: ['class'] });
  updateStep2Clickable();

  const radio1 = document.querySelector("#teklif-al input[name='location'][value='euro']");
  const radio2 = document.querySelector("#teklif-al input[name='location'][value='world']");


  const isAnyRadioChecked = () => {
    return (radio1 && radio1.checked) || (radio2 && radio2.checked);
  };
let buttonsContainer = document.querySelector(".anatomi_buttons_container")

if(!buttonsContainer){
    buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("anatomi_buttons_container");
    const targetElement = document.querySelector("#teklif-al > div > div.section.anatomi_form_step_2");
  if (targetElement) targetElement.appendChild(buttonsContainer);  
}

let geriBtn = document.querySelector(".anatomi_second_step_back_btn");

if (!geriBtn) {
  geriBtn = document.createElement("button");
  geriBtn.classList.add("anatomi_second_step_back_btn");
  geriBtn.textContent = "Geri Dön";


  if (buttonsContainer) buttonsContainer.appendChild(geriBtn);    

}
geriBtn.addEventListener('click', () => {
    const step1 = document.querySelector(".anatomi_form_step_1")
    step2.style.display = 'none';
    step1.style.display = 'flex';

    if (progressFill) progressFill.style.width = "30%";
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
 let continueBtn = document.querySelector(".anatomi_second_step_continue_btn");

if (!continueBtn) {
  continueBtn = document.createElement("button");
  continueBtn.classList.add("anatomi_second_step_continue_btn");
  continueBtn.textContent = "Devam Et";
  continueBtn.disabled = true;

  
  if (buttonsContainer) buttonsContainer.appendChild(continueBtn);
}
  const toggleContinueButton = () => {
    continueBtn.disabled = !isAnyRadioChecked();
  };

 continueBtn.addEventListener('click', () => {
  if (isAnyRadioChecked()) {
    step2.style.display = 'none';
    step3.style.display = 'flex';

    if (progressFill) progressFill.style.width = "90%";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});



  const radioChangeHandler = () => {
    toggleContinueButton();
  };

  if (radio1) radio1.addEventListener('change', radioChangeHandler);
  if (radio2) radio2.addEventListener('change', radioChangeHandler);

  if (radio1) radio1.addEventListener('click', e => e.stopPropagation());
  if (radio2) radio2.addEventListener('click', e => e.stopPropagation());
};


 setInterval(() => {   
    generateFirstInput(); 
     generateSecondInput();
 },1000)



};

const seyahat_saglik_redesign_v2_init = () => {
    seyahat_saglik_redesign_v2_html();
    seyahat_saglik_redesign_v2_css();
    seyahat_saglik_redesign_v2_js();
};

const seyahat_saglik_redesign_v2_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

if (seyahat_saglik_redesign_v2_condition()) {
    seyahat_saglik_redesign_v2_init();
}