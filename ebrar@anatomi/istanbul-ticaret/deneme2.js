const adres_iki_asamali_adim_html = () => {
  const html = `
        <div class="anatomi_adres_first_step adres_active">
        </div>
        <div class="anatomi_adres_second_step">
        </div>
    `;
  const element1 = document.querySelector(".anatomi_adres_first_step");
  const element2 = document.querySelector(".anatomi_adres_second_step");
  if (element1 || element2) {
    return;
  }
  document
    .querySelector("#order-address-form > div")
    .insertAdjacentHTML("afterbegin", html);
};

const adres_iki_asamali_adim_css = () => {
  const style = `
      <style id="anatomi_adres_iki_asamali_adim_css">    
      #order-address-form {
        border: none !important;
      }
      .anatomi_adres_first_step, .anatomi_adres_second_step{
          width: 100%;
           display: none;
      }
      .adres_active{
        display: block !important;
      }
      .disabled-link {
        background-color: #80808075 !important;
        pointer-events: none;
        cursor: not-allowed;
      }
      .anatomi_adres_first_step > div {
        margin-bottom: 20px;
      }
      .anatomi_adres_first_step > div > span, .anatomi_adres_first_step > div > div > span{
        font-size: 14px;
        font-weight: bold;
      }
      .anatomi_adres_first_step > div > div > select , .anatomi_adres_first_step > div > div >input , .anatomi_adres_first_step > div > div > div > input{
        height: 55px;
        border: 1px solid #c9c8cab5;
        border-radius: 10px;
      }

      .anatomi_adres_second_step > div {
        margin-bottom: 20px;
      }
      .anatomi_adres_second_step > div > span, .anatomi_adres_second_step > div > div > span{
        font-size: 14px;
        font-weight: bold;
      }
      .anatomi_adres_second_step > div > div > select , .anatomi_adres_second_step > div > div >input , .anatomi_adres_second_step > div > div > div > input, #city_code, #address{
       height: 55px;
      border: 1px solid #c9c8cab5;
      border-radius: 10px;
      }
    .anatomi_adres_first_step_devam_btn_container{
      display: flex;
      justify-content: flex-end;
      padding-right: 8px;
      margin-top: 50px;
    }
    .anatomi_adres_first_step_devam_btn{
        background-color: #E87926;
        padding: 15px 50px;
        border-radius: 10px;
        color: #fff;
        margin-bottom: 10px;
        display: flex;
        width: fit-content;
    }
    .anatomi_adres_second_step_geri_btn{
      border: 1px solid #C9C8CA;
      padding: 10px 20px 10px 10px;
      position: relative;
      bottom: 30px;
      left: 65%;
      border-radius: 3px;
    }
   .anatomi_adres_second_step_geri_btn::before {
      content: "";
      display: inline-block;
      width: 16px; 
      height: 16px;
      background-image: url("https://r.resimlink.com/mYFvNEi6D.png");
      background-size: contain; 
      background-repeat: no-repeat;
      margin-right: 8px; 
      vertical-align: middle; 
    }
    .v5-lamp.folder-_order.tpl-default .nationality-field-wrapper{
      top: 55px !important;
    }
    .v5-lamp.folder-_order.tpl-default .nationality-field-wrapper > label{
      font-size: 12px !important;
    }
    select.form-control{
      background-size: 12px !important;
    }
    #order-address-form > div > div.anatomi_adres_second_step.adres_active > div.col-12.col-sm-6.mb-1 > div > label{
      font-size: 14px;
    }
    #order-address-form > div > div.anatomi_adres_second_step.adres_active > div.col-12.col-sm-6.district-container > div > div.district-select-container.position-relative > span, #order-steps > div.col-12.col-md-9 > div > div > div > div > div > button{
      display: none !important;
    }
    
    position: relative > span:not(:first-child) ,#order-address-form > div > div.anatomi_adres_first_step.adres_active > div > div > span:not(:first-child),#order-address-form > div > div.anatomi_adres_second_step.adres_active > div > div > span:not(:first-child) {
      display: none !important;
    }

    #order-address-form > div > div.anatomi_adres_second_step.adres_active > div.col-12.col-sm-6.town-container.anatomi_moved > span:nth-child(2), #order-address-form > div > div.anatomi_adres_second_step.adres_active > div.col-12.col-sm-6.district-container.anatomi_moved > span:nth-child(2){
      display: none !important;
    }

      </style>
    `;
  const css = document.querySelector("#anatomi_adres_iki_asamali_adim_css");
  const head = document.querySelector("head");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const adres_iki_asamali_adim_js = () => {
  const organizeDivs = () => {
    const firstStepContainer = document.querySelector(
      ".anatomi_adres_first_step"
    );
    const secondStepContainer = document.querySelector(
      ".anatomi_adres_second_step"
    );
    const hasGirisYapContainer = document.querySelector(
      "#order-steps > div.col-12.col-md-9 > div.w-100.d-flex.mb-2"
    );

    if (!firstStepContainer || !secondStepContainer) return;

    const allDivs = Array.from(
      document.querySelectorAll(
        "#order-address-form > div > div:not(.anatomi_adres_first_step):not(.anatomi_adres_second_step):not(.anatomi_moved)"
      )
    );

    if (allDivs.length === 0) return;

    if (hasGirisYapContainer) {
      allDivs.forEach((div, index) => {
        if (index < 8) {
          firstStepContainer.appendChild(div);
        } else {
          secondStepContainer.appendChild(div);
        }
        div.classList.add("anatomi_moved");
      });
    } else {
      allDivs.forEach((div, index) => {
        if (index < 7) {
          firstStepContainer.appendChild(div);
        } else {
          secondStepContainer.appendChild(div);
        }
        div.classList.add("anatomi_moved");
      });
    }
  };

  const moveAllSpans = () => {
    const steps = document.querySelectorAll(
      ".anatomi_adres_first_step, .anatomi_adres_second_step"
    );
    if (!steps.length) return;

    steps.forEach((step) => {
      const spans = step.querySelectorAll(
        "span.input-placeholder:not(.span_moved)"
      );

      spans.forEach((span) => {
        if (span.classList.contains("span_moved")) return;

        const townOrDistrict = span.closest(
          ".town-container, .district-container"
        );

        if (townOrDistrict) {
          townOrDistrict.insertAdjacentElement("afterbegin", span);
        } else {
          const parent = span.parentElement;
          if (parent) {
            parent.insertAdjacentElement("beforebegin", span);
          }
        }

        span.classList.add("span_moved");

        const parent = span.parentElement;
        if (parent) {
          const movedSpans = parent.querySelectorAll("span.span_moved");

          movedSpans.forEach((s, index) => {
            if (index === 0) {
              s.style.display = "inline";
            } else {
              s.style.display = "none";
            }
          });
        }
      });
    });
  };

  const generateDevamButtons = () => {
    const hasGirisYapContainer = document.querySelector(
      "#order-steps > div.col-12.col-md-9 > div.w-100.d-flex.mb-2"
    );
    if (hasGirisYapContainer) {
      let firstStepDevamEtBtnContainer = document.querySelector(
        ".anatomi_adres_first_step_devam_btn_container"
      );
      if (!firstStepDevamEtBtnContainer) {
        firstStepDevamEtBtnContainer = document.createElement("div");
        firstStepDevamEtBtnContainer.classList.add(
          "anatomi_adres_first_step_devam_btn_container"
        );
        const targetElement = document.querySelector(
          ".anatomi_adres_first_step"
        );
        targetElement.insertAdjacentElement(
          "beforeend",
          firstStepDevamEtBtnContainer
        );
      }

      let firstStepDevamEtBtn = document.querySelector(
        ".anatomi_adres_first_step_devam_btn"
      );
      if (!firstStepDevamEtBtn) {
        firstStepDevamEtBtn = document.createElement("a");
        firstStepDevamEtBtn.textContent = "Devam Et";
        firstStepDevamEtBtn.classList.add(
          "anatomi_adres_first_step_devam_btn",
          "disabled-link"
        );
        firstStepDevamEtBtnContainer.appendChild(firstStepDevamEtBtn);
      }

      let secondStepGeriBtn = document.querySelector(
        ".anatomi_adres_second_step_geri_btn"
      );
      if (!secondStepGeriBtn) {
        secondStepGeriBtn = document.createElement("a");
        secondStepGeriBtn.textContent = "Geri Dön";
        secondStepGeriBtn.classList.add("anatomi_adres_second_step_geri_btn");
        const targetElement = document.querySelector(
          ".anatomi_adres_second_step"
        );
        targetElement.insertAdjacentElement("afterbegin", secondStepGeriBtn);
      }

      const isValidEmail = (emailValue) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue.trim());

      const isValidFullName = (fullNameValue) => {
        if (!fullNameValue) return false;
        const trimmed = fullNameValue.trim();
        if (trimmed.length < 5) return false;
        const words = trimmed.split(" ").filter((w) => w.length > 0);
        return words.length >= 2;
      };

      const select = document.querySelector("#is_company_active");
      const email = document.querySelector(
        "#order-address-form > div > div.anatomi_adres_first_step.adres_active > div:nth-child(3) > div > input"
      );
      const fullName = document.querySelector("#fullname");
      const firmaAdi = document.querySelector("#company");
      const vergiDairesi = document.querySelector("#tax_office");
      const vergiNo = document.querySelector("#tax_number");

      const checkFormValidity = () => {
        if (!select) return;

        let allFilled = false;

        const emailValidValue = email?.value.trim();
        const fullNameValidValue = fullName?.value.trim();

        if (select.value === "0") {
          allFilled = emailValidValue && fullNameValidValue;
        }

        if (select.value === "1") {
          allFilled =
            emailValidValue &&
            fullNameValidValue &&
            firmaAdi?.value.trim() &&
            vergiDairesi?.value.trim() &&
            vergiNo?.value.trim();
        }
        if (email && !isValidEmail(email.value)) allFilled = false;
        if (fullName && !isValidFullName(fullName.value)) allFilled = false;

        if (allFilled) {
          firstStepDevamEtBtn.classList.remove("disabled-link");
          firstStepDevamEtBtn.disabled = false;
        } else {
          firstStepDevamEtBtn.classList.add("disabled-link");
          firstStepDevamEtBtn.disabled = true;
        }
      };

      document
        .querySelectorAll(
          "#is_company_active, #fullname, #company, #tax_office, #tax_number, #order-address-form input"
        )
        .forEach((el) => {
          el?.addEventListener("input", checkFormValidity);
          el?.addEventListener("change", checkFormValidity);
        });

      firstStepDevamEtBtn.addEventListener("click", (e) => {
        e.preventDefault();

        document
          .querySelectorAll(".error-message")
          .forEach((el) => el.remove());

        let valid = true;

        if (email && !isValidEmail(email.value)) {
          email.style.border = "1px solid red";
          email.insertAdjacentHTML(
            "afterend",
            `<span class="error-message" style="color:red;font-size:12px;">Hatalı e-mail girdiniz</span>`
          );
          valid = false;
        } else if (email) {
          email.style.border = "";
        }

        if (fullName && !isValidFullName(fullName.value)) {
          fullName.style.border = "1px solid red";
          fullName.insertAdjacentHTML(
            "afterend",
            `<span class="error-message" style="color:red;font-size:12px;">Lütfen en az 5 karakter ve ad soyad giriniz</span>`
          );
          valid = false;
        } else if (fullName) {
          fullName.style.border = "";
        }

        if (!valid) return;

        document
          .querySelector(".anatomi_adres_first_step")
          ?.classList.remove("adres_active");
        document
          .querySelector(".anatomi_adres_second_step")
          ?.classList.add("adres_active");
      });

      secondStepGeriBtn.addEventListener("click", () => {
        document
          .querySelector(".anatomi_adres_second_step")
          ?.classList.remove("adres_active");
        document
          .querySelector(".anatomi_adres_first_step")
          ?.classList.add("adres_active");
      });
    } else {
      let firstStepDevamEtBtnContainer = document.querySelector(
        ".anatomi_adres_first_step_devam_btn_container"
      );
      if (!firstStepDevamEtBtnContainer) {
        firstStepDevamEtBtnContainer = document.createElement("div");
        firstStepDevamEtBtnContainer.classList.add(
          "anatomi_adres_first_step_devam_btn_container"
        );
        const targetElement = document.querySelector(
          ".anatomi_adres_first_step"
        );
        targetElement.insertAdjacentElement(
          "beforeend",
          firstStepDevamEtBtnContainer
        );
      }

      let firstStepDevamEtBtn = document.querySelector(
        ".anatomi_adres_first_step_devam_btn"
      );
      if (!firstStepDevamEtBtn) {
        firstStepDevamEtBtn = document.createElement("a");
        firstStepDevamEtBtn.textContent = "Devam Et";
        firstStepDevamEtBtn.classList.add(
          "anatomi_adres_first_step_devam_btn",
          "disabled-link"
        );
        firstStepDevamEtBtnContainer.appendChild(firstStepDevamEtBtn);
      }

      let secondStepGeriBtn = document.querySelector(
        ".anatomi_adres_second_step_geri_btn"
      );
      if (!secondStepGeriBtn) {
        secondStepGeriBtn = document.createElement("a");
        secondStepGeriBtn.textContent = "Geri Dön";
        secondStepGeriBtn.classList.add("anatomi_adres_second_step_geri_btn");
        const targetElement = document.querySelector(
          ".anatomi_adres_second_step"
        );
        targetElement.insertAdjacentElement("afterbegin", secondStepGeriBtn);
      }

      const select = document.querySelector("#is_company_active");
      const fullName = document.querySelector("#fullname");
      const firmaAdi = document.querySelector("#company");
      const vergiDairesi = document.querySelector("#tax_office");
      const vergiNo = document.querySelector("#tax_number");

      const isValidFullName = (fullNameValue) => {
        if (!fullNameValue) return false;
        const trimmed = fullNameValue.trim();
        if (trimmed.length < 5) return false;
        const words = trimmed.split(" ").filter((w) => w.length > 0);
        return words.length >= 2;
      };

      if (fullName && isValidFullName(fullName.value)) {
        firstStepDevamEtBtn.classList.remove("disabled-link");
        firstStepDevamEtBtn.disabled = false;
      }

      const checkFormValidity = () => {
        if (!select) return;

        let allFilled = false;

        const fullNameValidValue = fullName?.value.trim();

        if (select.value === "0") {
          allFilled = fullNameValidValue;
        }

        if (select.value === "1") {
          allFilled =
            fullNameValidValue &&
            firmaAdi?.value.trim() &&
            vergiDairesi?.value.trim() &&
            vergiNo?.value.trim();
        }

        if (fullName && !isValidFullName(fullName.value)) allFilled = false;

        if (allFilled) {
          firstStepDevamEtBtn.classList.remove("disabled-link");
          firstStepDevamEtBtn.disabled = false;
        } else {
          firstStepDevamEtBtn.classList.add("disabled-link");
          firstStepDevamEtBtn.disabled = true;
        }
      };

      document
        .querySelectorAll(
          "#is_company_active, #fullname, #company, #tax_office, #tax_number, #order-address-form input"
        )
        .forEach((el) => {
          el?.addEventListener("input", checkFormValidity);
          el?.addEventListener("change", checkFormValidity);
        });

      firstStepDevamEtBtn.addEventListener("click", (e) => {
        e.preventDefault();

        document
          .querySelectorAll(".error-message")
          .forEach((el) => el.remove());

        let valid = true;

        if (fullName && !isValidFullName(fullName.value)) {
          fullName.style.border = "1px solid red";
          fullName.insertAdjacentHTML(
            "afterend",
            `<span class="error-message" style="color:red;font-size:12px;">Lütfen en az 5 karakter ve ad soyad giriniz</span>`
          );
          valid = false;
        } else if (fullName) {
          fullName.style.border = "";
        }

        if (!valid) return;

        document
          .querySelector(".anatomi_adres_first_step")
          ?.classList.remove("adres_active");
        document
          .querySelector(".anatomi_adres_second_step")
          ?.classList.add("adres_active");
      });

      secondStepGeriBtn.addEventListener("click", () => {
        document
          .querySelector(".anatomi_adres_second_step")
          ?.classList.remove("adres_active");
        document
          .querySelector(".anatomi_adres_first_step")
          ?.classList.add("adres_active");
      });
    }
  };

  organizeDivs();
  const interval = setInterval(() => {
    moveAllSpans();
    clearInterval(interval);
  }, 50);

  generateDevamButtons();
};

const adres_iki_asamali_adim_init = () => {
  adres_iki_asamali_adim_html();
  adres_iki_asamali_adim_css();
  adres_iki_asamali_adim_js();
};

const adres_iki_asamali_adim_condition = () => {
  const device = window.innerWidth <= 768;
  return device;
};

setInterval(() => {
  if (adres_iki_asamali_adim_condition()) {
    adres_iki_asamali_adim_init();
  }
}, 50);
