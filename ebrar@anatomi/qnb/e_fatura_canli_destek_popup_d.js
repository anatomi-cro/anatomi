const efatura_canli_destek_popup_html = () => {
  const html = `
  <div class="anatomi-canli-destek-popup hidden">
  <div class="anatomi-canli-destek-popup-content">
    <button class="anatomi-close-btn">×</button>
    <div class="anatomi-canli-destek-explanation">
    <h3 class="anatomi-canli-destek-popup-title">Size yardımcı olamadık mı?</h3>
    <p class="anatomi-canli-destek-popup-text">Deneyiminizi iyileştirmemiz için bize bir ipucu verin.</p>
    </div>
   <div class="anatomi-canli-destek-popup-checkboxes">
  <label>
    <input type="radio" name="leave_reason" />
    Aradığım bilgiye ulaşamadım.
  </label>

  <label>
    <input type="radio" name="leave_reason" />
    İhtiyacıma uygun paketi belirleyemedim.
  </label>

  <label>
    <input type="radio" name="leave_reason" />
    Teknik bir aksaklık yaşadım.
  </label>

  <label>
    <input type="radio" name="leave_reason" />
    Ücretlendirme beklentimin üzerinde.
  </label>

  <label>
    <input type="radio" name="leave_reason" />
    Farklı bir çözüm ortağı ile çalışıyorum.
  </label>

  <label>
    <input type="radio" name="leave_reason" />
    Sadece ön inceleme yapıyorum.
  </label>

  <label>
  <input type="radio" name="leave_reason" value="other" />
  Diğer
</label>

<div id="otherReasonWrapper" style="display: none;">
   <textarea
    name="leave_reason_other"
    placeholder="Lütfen kısaca belirtin"
    maxlength="50"
    rows="2"
    style="
      width: 100%;
      resize: none;
      box-sizing: border-box;
    "
  ></textarea>
</div>
</div>

    <button class="anatomi-canli-destek-popup-submit anatomi-disabled-btn">Geri Bildirim Gönder</button>
    </div>
     
  </div>
`;
  const element = document.querySelector(".anatomi-canli-destek-popup");
  const body = document.querySelector("body");
  if (!element) {
    body.insertAdjacentHTML("beforeend", html);
  }
};

const efatura_canli_destek_popup_css = () => {
  const style = `
      <style id="anatomi_efatura_canli_destek_popup_css">    
       .anatomi-canli-destek-popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }
      .anatomi-canli-destek-popup.hidden {
        display: none;
      }
       .anatomi-canli-destek-popup-content {
        background: #F7F9FC;
        padding: 30px;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        position: relative;
        max-width: 400px;
        width: 90%;
      }
    .anatomi-canli-destek-popup-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }
    .anatomi-canli-destek-popup-title{
        font-size: 27px;
        }
    .anatomi-canli-destek-popup-title , .anatomi-canli-destek-popup-text{
        margin: 0 !important;
    }
    .anatomi-canli-destek-popup-checkboxes{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
        width: 90%;
    }
    #otherReasonWrapper{
      width: 100%;
    }
    #otherReasonWrapper textarea:focus{
     outline: none !important;
      
    }
    .anatomi-canli-destek-popup-checkboxes label , #otherReasonWrapper textarea{
        background-color: #fff;
        padding: 10px 10px;
        width: 94%;
        display: flex;
        gap: 10px;
        border-radius: 8px;
        border: 1px solid lightgray;
    }
   .anatomi-canli-destek-popup-checkboxes input[type="radio"]{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid lightgray;
        -webkit-appearance: none;
        appearance: none;
        cursor: pointer;
        margin-left: 10px;
        background-color: transparent;
        position: relative;
    }
    .anatomi-canli-destek-popup-checkboxes input[type="radio"]:checked {
    background-color: #fff;
    border-color: #fff;
    }

    .anatomi-canli-destek-popup-checkboxes input[type="radio"]:checked::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("https://cro-anatomi.s3.eu-north-1.amazonaws.com/qnb-sizi-arayalim-popup-check-icon.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 15px 15px;
    }
    .option-active{
        background-color: #A1549D !important;
        color: #fff !important;
    }

    .anatomi-canli-destek-popup-submit{
        background-color: #A1549D;
        color: #fff;
        border: none;
        padding: 15px 40px;
        border-radius: 8px;
        font-size: 18px;
    }
    .anatomi-disabled-btn {
        opacity: 0.5;
        cursor: not-allowed !important;
    }

    .anatomi-close-btn {
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 16px;
        cursor: pointer;
        background-color: transparent;
        border: 1px solid #808080cc;
        border-radius: 50%;
        color: #808080cc;
        padding: 0px 5px;
      }
    @media screen and (max-width: 768px) {
       .anatomi-canli-destek-popup-content{
           width: 80%;
       }
    .anatomi-canli-destek-popup-title {
        font-size: 22px;
    }
    .anatomi-canli-destek-popup-submit{
        font-size: 14px;
    }
    .anatomi-close-btn{
        right: 10px;
    }
    }
      </style>
    `;
  const head = document.querySelector("head");
  const css = document.querySelector("#anatomi_efatura_canli_destek_popup_css");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const efatura_canli_destek_popup_js = () => {
  let popupShown = false;
  const isMac = navigator.platform.toUpperCase().includes("MAC");

  document.addEventListener("mousemove", (e) => {
    if (popupShown) return;
    const macCondition = isMac && e.clientY < 100 && e.clientX < 300;
    const winCondition =
      !isMac && e.clientY < 100 && window.innerWidth - e.clientX < 300;

    if (macCondition || winCondition) {
      const popup = document.querySelector(".anatomi-canli-destek-popup");
      if (popup) {
        popup.classList.remove("hidden");
        popupShown = true;
      }
    }
  });

  const radios = document.querySelectorAll('input[name="leave_reason"]');
  const otherWrapper = document.getElementById("otherReasonWrapper");

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.value === "other" && radio.checked) {
        otherWrapper.style.display = "block";
      } else {
        otherWrapper.style.display = "none";
      }
    });
  });

  const otherInput = document.querySelector('input[name="leave_reason_other"]');

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.value === "other" && radio.checked) {
        otherWrapper.style.display = "block";
        otherInput.required = true;
      } else {
        otherWrapper.style.display = "none";
        otherInput.required = false;
        otherInput.value = "";
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("anatomi-close-btn")) {
      document
        .querySelector(".anatomi-canli-destek-popup")
        .classList.add("hidden");
    }
  });

  document.addEventListener("change", (e) => {
    if (e.target.type === "radio") {
      const allLabels = document.querySelectorAll(
        ".anatomi-canli-destek-popup-checkboxes label"
      );
      const button = document.querySelector(
        ".anatomi-canli-destek-popup-submit"
      );

      const otherInput = document.querySelector(
        'input[name="leave_reason_other"]'
      );

      allLabels.forEach((label) => label.classList.remove("option-active"));
      e.target.closest("label").classList.add("option-active");

      if (e.target.value === "other") {
        if (!otherInput || otherInput.value.trim() === "") {
          button.disabled = true;
          button.classList.add("anatomi-disabled-btn");
          return;
        }
      }
      button.disabled = false;
      button.classList.remove("anatomi-disabled-btn");
    }
  });

  document.addEventListener("input", (e) => {
    if (e.target.name === "leave_reason_other") {
      const otherRadio = document.querySelector(
        'input[name="leave_reason"][value="other"]'
      );
      const button = document.querySelector(
        ".anatomi-canli-destek-popup-submit"
      );

      if (otherRadio?.checked && e.target.value.trim() !== "") {
        button.disabled = false;
        button.classList.remove("anatomi-disabled-btn");
      } else {
        button.disabled = true;
        button.classList.add("anatomi-disabled-btn");
      }
    }
  });

  const submitButton = document.querySelector(
    ".anatomi-canli-destek-popup-submit"
  );

  submitButton.addEventListener("click", () => {
    const selectedRadio = document.querySelector(
      '.anatomi-canli-destek-popup-checkboxes input[type="radio"]:checked'
    );

    if (!selectedRadio) return;

    const selectedLabel = selectedRadio.closest("label");
    const otherInput = document.querySelector(
      'input[name="leave_reason_other"]'
    );

    let feedbackReason = selectedLabel.textContent.trim();
    let feedbackOtherText = "";

    if (selectedRadio.value === "other" && otherInput) {
      feedbackReason = "Diğer";
      feedbackOtherText = otherInput.value.trim();
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "efatura_popup_feedback",
      feedback_reason: feedbackReason,
      feedback_other_text: feedbackOtherText || undefined,
    });

    document
      .querySelector(".anatomi-canli-destek-popup")
      .classList.add("hidden");
  });
};

const efatura_canli_destek_popup_init = () => {
  efatura_canli_destek_popup_html();
  efatura_canli_destek_popup_css();
  efatura_canli_destek_popup_js();
};

const efatura_canli_destek_popup_condition = () => {
  /* PORTAL TIKLAMA YAPMIŞ */
  portalButton = document.querySelector(".portalButton");

  if (portalButton) {
    portalButton.addEventListener("click", () => {
      localStorage.setItem("anatomi_portal_clicked", "clicked");
    });
  }

  /*FORM SUBMIT YAPMIŞ */

  if ((window.dataLayer = window.dataLayer || [])) {
    const hasFormSubmitEvent = window.dataLayer?.some(
      (item) => item?.event === "form_submit"
    );
    if (hasFormSubmitEvent === true) {
      localStorage.setItem("anatomi_form_submit", "true");
    }
  }
  /* CONVERSİON EVENT YAPMAMIŞ*/
  const dataLayer = window.dataLayer || [];
  const checkConversionEvent = dataLayer.some(
    (item) => item?.event === "gtm.click"
  );
  if (checkConversionEvent) return;

  if (!checkConversionEvent) {
    setTimeout(() => {
      console.log("No click event detected within 1 minute.");
      dataLayer.push({ event: "no_click_event_detected" });
    }, 10000);
  }

  const portalClicked =
    localStorage.getItem("anatomi_portal_clicked") === "clicked";

  const formSubmitted = localStorage.getItem("anatomi_form_submit") === "true";

  if (portalClicked || formSubmitted || checkConversionEvent) {
    return false;
  }

  return true;
};

let popupAdded = false;

setInterval(() => {
  if (efatura_canli_destek_popup_condition() && !popupAdded) {
    efatura_canli_destek_popup_init();
    popupAdded = true;
  }
}, 50);
