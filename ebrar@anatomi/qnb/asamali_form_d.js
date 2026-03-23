const asamali_form_html = () => {};

const asamali_form_css = () => {
    const style = `
      <style>    
      .anatomi_first_step_btn_container {
            display: flex;
    justify-content: flex-end;

      }
      .anatomi_first_step_btn {
        width: 25%;
        padding: 12px;
        border: none;
        border-radius: 8px;
        background-color: #A1549D;
        color: white !important;
        text-decoration: none !important;
        text-align: center;
        cursor: pointer;
      }
      .anatomi_first_step_btn.disabled {
        background-color: #d4b1d2;
        cursor: not-allowed;
        pointer-events: none;
      }
    .anatomi_start_button {
    justify-content: space-between;

    }
     .anatomi_back_btn_container {

    border: 1px solid #1F2152;
    color: white !important;
    justify-content: center;
    display: flex;
    align-items: center;
    border-radius: 8px;

    }
    .anatomi_back_btn {
    color: #1F2152;
    padding: 10px 25px;
       text-decoration: none !important;
        text-align: center;
        cursor: pointer;
    }
    .anatomi_form_info_header {
    display: flex;
    width: 50%;


    }
        .anatomi_step_tab_kisisel_bilgiler, .anatomi_step_tab_iletisim_bilgiler {
            width: 50%;
            padding-bottom: 10px;
            color: #808080;
            display: flex;
            align-items: center;
            gap: 2px;
        }
    .anatomi_step_tab_kisisel_bilgiler.active , .anatomi_step_tab_iletisim_bilgiler.active {
        border-bottom: 2px solid #37424A;
        color: #1F2152;

    }
             .anatomi-step-number{
            background-color:#B7B8C7;
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color: white;
        margin-right: 3px;

        }
        .anatomi-step-number.active{
         background-color: #1F2152;

        }
           .anatomi_form_info_header {
        flex-basis: unset !important;
        width: 100%;

    }

    @media only screen and (max-width: 768px) {
    .anatomi_first_step_btn {
        width: 100%;
    }
    .anatomi_back_btn_container {
        width: 40%;

    }
    .anatomi_start_btn {
     width: 40% !important;
    }

    }
     
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const asamali_form_js = () => {
    generateFormSteps = () => {
        const formStep1 = document.querySelector("#formUserInfo > div.uk-background-default.uk-border.uk-border-rounded.uk-padding-20.uk-padding-40\\@m.accountInfo.notranslate")
      if (formStep1 && !formStep1.classList.contains("anatomi_form_step_1")) {
        formStep1.classList.add("anatomi_form_step_1");
        formStep1.style.display = "none";
      }
      const formStep2 = document.querySelector("#formUserInfo > div.uk-background-default.uk-border.uk-border-rounded.uk-padding-20.uk-padding-40\\@m.uk-margin-24.uk-margin-32\\@m.contactInfo.notranslate")
      if (formStep2 && !formStep2.classList.contains("anatomi_form_step_2")) {
        formStep2.classList.add("anatomi_form_step_2");
      }
      const bilgilerimiDogruluyorum = document.querySelector("#formUserInfo > div.uk-width-1-1.uk-margin-small.notranslate")
      if (bilgilerimiDogruluyorum && !bilgilerimiDogruluyorum.classList.contains("anatomi_info_form_first_p")) {
        bilgilerimiDogruluyorum.classList.add("anatomi_info_form_first_p");
        bilgilerimiDogruluyorum.style.display = "none";
      }
      const entegratorCheckbox = document.querySelector("#formUserInfo > div.uk-background-default.uk-border.uk-border-rounded.uk-padding-20.uk-padding-40\\@m.uk-margin-24.uk-margin-32\\@m.contactInfo.notranslate > div > div.uk-width-1-1.uk-margin-small-top.uk-grid-margin.uk-first-column.notranslate")
      if (entegratorCheckbox) {
        entegratorCheckbox.classList.add("anatomi_entegrator_checkbox");
        formStep1.insertAdjacentElement("beforeend", entegratorCheckbox);
      }
      const startBtn = document.querySelector("#formUserInfo > div.uk-text-right.notranslate")
      if( startBtn && !startBtn.classList.contains("anatomi_start_button")) {
          startBtn.classList.add("anatomi_start_button");
          startBtn.style.display = "none";
      }
      const denemeBaslatBtn = document.querySelector("#formUserInfo > div.uk-text-right.notranslate.anatomi_start_button > button")
      if(denemeBaslatBtn) {
        denemeBaslatBtn.classList.add("anatomi_start_btn");
      }
      const formInfoAnchor = document.querySelector("body > main > section > div > div.uk-grid.uk-grid-row-collapse.notranslate > div.uk-width-2-3\\@m.uk-first-column.notranslate > ul > li > a ")
      if(formInfoAnchor) {
        formInfoAnchor.style.display = "none";
      }
     
      const formInfoHeader = document.querySelector("body > main > section > div > div.uk-grid.uk-grid-row-collapse.notranslate > div.uk-width-2-3\\@m.uk-first-column.notranslate > ul > li ")
      if(!formInfoHeader.classList.contains("anatomi_form_info_header")) {
        formInfoHeader.classList.add("anatomi_form_info_header");
      }


      let stepTabKisiselBilgiler = document.querySelector(".anatomi_step_tab_kisisel_bilgiler");
      if(!stepTabKisiselBilgiler) {
        stepTabKisiselBilgiler = document.createElement("div");
        stepTabKisiselBilgiler.classList.add("anatomi_step_tab_kisisel_bilgiler", "active");
        const spanNumber = document.createElement("span");
        spanNumber.textContent = "1";
        spanNumber.classList.add("anatomi-step-number", "active"); 
         const textNode = document.createTextNode(" Kullanıcı Bilgileri");
        stepTabKisiselBilgiler.appendChild(spanNumber);
        stepTabKisiselBilgiler.appendChild(textNode);

        formInfoHeader.appendChild(stepTabKisiselBilgiler);
      }
      let stepTabIletisimBilgiler = document.querySelector(".anatomi_step_tab_iletisim_bilgiler");
      if(!stepTabIletisimBilgiler) {
        stepTabIletisimBilgiler = document.createElement("div");
        stepTabIletisimBilgiler.classList.add("anatomi_step_tab_iletisim_bilgiler");
        const spanNumber = document.createElement("span");
        spanNumber.textContent = "2";
        spanNumber.classList.add("anatomi-step-number"); 
        const textNode = document.createTextNode("Firma/Müşteri Bilgileri");
        stepTabIletisimBilgiler.appendChild(spanNumber);
        stepTabIletisimBilgiler.appendChild(textNode);
        formInfoHeader.appendChild(stepTabIletisimBilgiler);
      }


      let firstStepStartBtnContainer = document.querySelector(".anatomi_first_step_btn_container");
      if(!firstStepStartBtnContainer) {
        firstStepStartBtnContainer = document.createElement("div");
        firstStepStartBtnContainer.classList.add("anatomi_first_step_btn_container");
          let firstStepStartBtn = document.querySelector(".anatomi_first_step_btn");
          if(!firstStepStartBtn) {
              firstStepStartBtn = document.createElement("div");
              firstStepStartBtn.classList.add("anatomi_first_step_btn");
              firstStepStartBtn.innerText = "Devam Et";
          }
          firstStepStartBtnContainer.appendChild(firstStepStartBtn);
          formStep2.insertAdjacentElement("afterend", firstStepStartBtnContainer);
      }
      let secondStepBackBtnContainer = document.querySelector(".anatomi_back_btn_container");
      if(!secondStepBackBtnContainer) {
        secondStepBackBtnContainer = document.createElement("div");
        secondStepBackBtnContainer.classList.add("anatomi_back_btn_container");
          let secondStepBackBtn = document.querySelector(".anatomi_back_btn");
          if(!secondStepBackBtn) {
            secondStepBackBtn = document.createElement("div");
            secondStepBackBtn.classList.add("anatomi_back_btn");
            secondStepBackBtn.innerText = "Geri Dön";
          }
          secondStepBackBtnContainer.appendChild(secondStepBackBtn);
          startBtn.insertAdjacentElement("afterbegin", secondStepBackBtnContainer);
      }

    //inputların kontrolü 
    const firstStepStartBtnControl = document.querySelector(".anatomi_first_step_btn");

    if (firstStepStartBtnControl && !firstStepStartBtnControl.dataset.listenerAdded) {
    
        const checkInputsAndCheckbox = () => {
            const nameInput = document.querySelector("#contactFirstName");
            const surnameInput = document.querySelector("#contactLastName");
            const emailInput = document.querySelector("#contactMail");
            const phoneInput = document.querySelector("#contactPhone");
            const kvkkPolicy = document.querySelector("#kvkkPolicy");
    
            const inputs = [nameInput, surnameInput, emailInput, phoneInput, kvkkPolicy];
    
            let allValid = inputs.every(input => input && !input.classList.contains("uk-form-danger"));
            allValid = allValid &&
                nameInput?.value.trim() !== "" &&
                surnameInput?.value.trim() !== "" &&
                emailInput?.value.trim() !== "" &&
                phoneInput?.value.trim() !== "";
    
            const isKvkkPolicyValid = kvkkPolicy &&
                !kvkkPolicy.classList.contains("uk-disabled") &&
                kvkkPolicy.classList.contains("valid");
    
            if (!allValid || !isKvkkPolicyValid) {
                firstStepStartBtnControl.disabled = true;
                firstStepStartBtnControl.classList.add("disabled");
            } else {
                firstStepStartBtnControl.disabled = false;
                firstStepStartBtnControl.classList.remove("disabled");
            }
        };
    
        ["#contactFirstName", "#contactLastName", "#contactMail", "#contactPhone"].forEach(selector => {
            const input = document.querySelector(selector);
            if (input) {
                input.addEventListener("input", checkInputsAndCheckbox);

                const observer = new MutationObserver(() => {
                    checkInputsAndCheckbox();
                });
                observer.observe(input, {
                    attributes: true,
                    attributeFilter: ["class"]
                });
            }
        });
    
        const kvkkPolicy = document.querySelector("#kvkkPolicy");
    
        if (kvkkPolicy) {
            kvkkPolicy.addEventListener("change", checkInputsAndCheckbox);
    
            const observer = new MutationObserver(() => {
                checkInputsAndCheckbox();
            });
            observer.observe(kvkkPolicy, {
                attributes: true,
                attributeFilter: ["class", "aria-invalid"]
            });
        }
    
        checkInputsAndCheckbox();
        firstStepStartBtnControl.dataset.listenerAdded = "true";
    }
    
    
    firstStepStartBtnControl.addEventListener("click", () => {
        const formStep1 = document.querySelector(".anatomi_form_step_1");
        const formStep2 = document.querySelector(".anatomi_form_step_2");
    
        if (formStep1 && formStep2) {
            formStep1.style.display = "block";
            formStep2.style.display = "none";
        }
    
        const bilgilerimiDogruluyorum = document.querySelector(".anatomi_info_form_first_p");
        if (bilgilerimiDogruluyorum) {
            bilgilerimiDogruluyorum.style.display = "block";
        }
    
        const startBtn = document.querySelector(".anatomi_start_button");
        if (startBtn) {
            startBtn.style.display = "flex";
        }
        const firstStepStartBtnContainer = document.querySelector(".anatomi_first_step_btn_container");
        if (firstStepStartBtnContainer) {
            firstStepStartBtnContainer.style.display = "none";
        }
        const secondStepTitle = document.querySelector(".anatomi_step_tab_iletisim_bilgiler");
        if (secondStepTitle) {
            secondStepTitle.classList.add("active");
        }
        const secondStepNumber = document.querySelector("body > main > section > div > div.uk-grid.uk-grid-row-collapse.notranslate > div.uk-width-2-3\\@m.uk-first-column.notranslate > ul > li > div.anatomi_step_tab_iletisim_bilgiler.active > span")
        if (secondStepNumber) {
            secondStepNumber.classList.add("active");
        }
      

    });

    secondStepBackBtnContainer.addEventListener("click", () => {
        const formStep1 = document.querySelector(".anatomi_form_step_1");
        const formStep2 = document.querySelector(".anatomi_form_step_2");
    
        if (formStep1 && formStep2) {
            formStep1.style.display = "none";
            formStep2.style.display = "block";
        }
    
        const bilgilerimiDogruluyorum = document.querySelector(".anatomi_info_form_first_p");
        if (bilgilerimiDogruluyorum) {
            bilgilerimiDogruluyorum.style.display = "none";
        }
    
        const startBtn = document.querySelector(".anatomi_start_button");
        if (startBtn) {
            startBtn.style.display = "none";
        }
        const firstStepStartBtnContainer = document.querySelector(".anatomi_first_step_btn_container");
        if (firstStepStartBtnContainer) {
            firstStepStartBtnContainer.style.display = "flex";
        }
        const secondStepTitle = document.querySelector(".anatomi_step_tab_iletisim_bilgiler");
        if (secondStepTitle) {
            secondStepTitle.classList.remove("active");
        }
        const secondStepNumber = document.querySelector("body > main > section > div > div.uk-grid.uk-grid-row-collapse.notranslate > div.uk-width-2-3\\@m.uk-first-column.notranslate > ul > li > div.anatomi_step_tab_iletisim_bilgiler > span")
        if (secondStepNumber) {
            secondStepNumber.classList.remove("active");
        }
      
    });

   
    };
    
   setInterval (() => {
    generateFormSteps()
   },100)

window.addEventListener("beforeunload", function () {
  const firmaAdi = document.querySelector("#accountName").value;
  const tckn = document.querySelector("#accountTcknvkn").value;
  const vergiDairesi = document.querySelector("#accountTaxOffice").value;
  const firmaİsletimMerkezi =
    document.querySelector("#accountHeadOffice").value;
  const il = document.querySelector("#accountCity").value;
  const ilce = document.querySelector("#accountDistrict").value;
  const email = document.querySelector("#accountMail").value;
  const telefon = document.querySelector("#accountPhone").value;

  const data = [];
  if (firmaAdi == "") {
    data.push("firmaAdi");
  }

  if (tckn == "") {
    data.push("tckn");
  }

  if (vergiDairesi == "") {
    data.push("vergiDairesi");
  }

  if (firmaİsletimMerkezi == "") {
    data.push("firmaİsletimMerkezi");
  }

  if (il == "") {
    data.push("il");
  }

  if (ilce == "") {
    data.push("ilce");
  }

  if (email == "") {
    data.push("email");
  }

  if (telefon == "") {
    data.push("telefon");
  }

  const dataLayer = window.dataLayer || [];
  dataLayer.push({
    event: "anatomiStep2Ayrilanlar",
    ayrilanStep: data,
  });
});

const button = document.querySelector(
  "#formUserInfo > div.uk-text-right.notranslate.anatomi_start_button > button"
);
if (button) {
  button.addEventListener("click", () => {
    const firmaAdi = document.querySelector("#accountName").value;
    const tckn = document.querySelector("#accountTcknvkn").value;
    const vergiDairesi = document.querySelector("#accountTaxOffice").value;
    const firmaİsletimMerkezi =
      document.querySelector("#accountHeadOffice").value;
    const il = document.querySelector("#accountCity").value;
    const ilce = document.querySelector("#accountDistrict").value;
    const email = document.querySelector("#accountMail").value;
    const telefon = document.querySelector("#accountPhone").value;

    const data = [];
    if (firmaAdi == "") {
      data.push("firmaAdi");
    }

    if (tckn == "") {
      data.push("tckn");
    }

    if (vergiDairesi == "") {
      data.push("vergiDairesi");
    }

    if (firmaİsletimMerkezi == "") {
      data.push("firmaİsletimMerkezi");
    }

    if (il == "") {
      data.push("il");
    }

    if (ilce == "") {
      data.push("ilce");
    }

    if (email == "") {
      data.push("email");
    }

    if (telefon == "") {
      data.push("telefon");
    }

    const dataLayer = window.dataLayer || [];
    dataLayer.push({
      event: "anatomiStep2Ayrilanlar",
      ayrilanStep: data,
    });
  });
}


};
const asamali_form_init = () => {
    asamali_form_html();
    asamali_form_css();
    asamali_form_js();
};

const asamali_form_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

if (asamali_form_condition()) {
    asamali_form_init();
}