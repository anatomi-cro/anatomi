const kb_input_bölünmesi_html = () => {
  const html = `
    `;
};
const kb_input_bölünmesi_css = () => {
  const style = `
      <style id="anatomi_kb_input_bölünmesi_css">
       .anatomi_nav, .anatomi_h1, .anatomi_steps, .anatomi_info_form_first_p, .anatomi_info_form_second_p, .anatomi_info_form_desc, .anatomi_form_inner_title_p{
          display: none !important;
      }
      .anatomi_customer_form_inner{
        box-shadow: none !important;
      }
     .anatomi_app_form{
        background-color: white !important;
        box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.3);
        padding: 30px;
     }
    .anatomi_form_inner_button{
        background-color: #37424A !important;
        font-weight: normal !important;
        border: 1px solid #37424A !important;
    }
    .anatomi_form_inner_button:hover{
        background-color: white !important;
        color: #37424A !important;
    }
    .form .form-part .bottom .button-size {
        padding: 15px 130px !important;
    }
    .anatomi_step_item{
        font-size: 18px;
    }
    .anatomi_step_span_number{
        background: white !important;
        border: 1px solid  #37424A ;
        color: #37424A !important;
        font-size: 14px !important;
    }
    .anatomi_step_item_active{
        font-weight: bold !important;
        color: #37424A !important;
    }
    .anatomi_step_span_active{
        background: #37424A !important;
        color: white !important;
        font-weight: normal !important;
    }
    .anatomi_footer{
        background-color: white !important;
    }
    </style>
    `;
  const head = document.querySelector("head");
  const css = document.querySelector("#anatomi_kb_input_bölünmesi_css");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};
const kb_input_bölünmesi_js = () => {
  const generateSteps = () => {
    const steps = document.querySelectorAll(
      "#app > div.container > div.form-steps > div.step"
    );
    if (steps) {
      steps.forEach((step) => {
        if (step && !step.classList.contains("anatomi_steps")) {
          step.classList.add("anatomi_step_item");
        }
        if (step.classList.contains("active")) {
          step.classList.add("anatomi_step_item_active");
          const spanNumber = step.querySelector(".anatomi_step_span_number");
          if (spanNumber) {
            spanNumber.classList.add("anatomi_step_span_active");
          }
        } else {
          step.classList.remove("anatomi_step_item_active");
          const spanNumber = step.querySelector(".anatomi_step_span_number");
          if (spanNumber) {
            spanNumber.classList.remove("anatomi_step_span_active");
          }
        }
      });

      const step1 = document.querySelector(
        "#app > div.container > div.form-steps > div.step:nth-child(1)"
      );
      const step2 = document.querySelector(
        "#app > div.container > div.form-steps > div.step:nth-child(2)"
      );

      const dot = document.createElement("div");
      dot.textContent = "................";
      dot.classList.add("anatomi_dots");

      if (step1) {
        if (
          !step1.nextElementSibling ||
          !step1.nextElementSibling.classList.contains("anatomi_dots")
        ) {
          step1.insertAdjacentElement("afterend", dot);
        }
      }

      if (step2) {
        if (
          !step2.nextElementSibling ||
          !step2.nextElementSibling.classList.contains("anatomi_dots")
        ) {
          step2.insertAdjacentElement("afterend", dot);
        }
      }
    }

    const stepSpanNumber = document.querySelectorAll(
      "#app > div.container > div.form-steps > div> span"
    );
    if (stepSpanNumber) {
      stepSpanNumber.forEach((span) => {
        if (span && !span.classList.contains("anatomi_step_span_number")) {
          span.classList.add("anatomi_step_span_number");
        }
      });
    }
  };
  const generateForm = () => {
    const appForm = document.querySelector("#app");
    if (appForm && !appForm.classList.contains("anatomi_app_form")) {
      appForm.classList.add("anatomi_app_form");
    }
    const nav = document.querySelector("#dealHeader > nav");
    if (nav && !nav.classList.contains("anatomi_nav")) {
      nav.classList.add("anatomi_nav");
    }
    const stepsH1 = document.querySelector("#app > div.container > h1");
    if (stepsH1 && !stepsH1.classList.contains("anatomi_steps_h1")) {
      stepsH1.classList.add("anatomi_h1");
    }
    const stepsItems = document.querySelector(
      "#app > div.container > div.steps"
    );
    if (stepsItems && !stepsItems.classList.contains("anatomi_steps")) {
      stepsItems.classList.add("anatomi_steps");
    }
    const infoFormFirstP = document.querySelector(
      "#customerInfoForm > p:nth-child(1)"
    );
    if (
      infoFormFirstP &&
      !infoFormFirstP.classList.contains("anatomi_info_form_first_p")
    ) {
      infoFormFirstP.classList.add("anatomi_info_form_first_p");
    }
    const infoFormSecondP = document.querySelector(
      "#customerInfoForm > p:nth-child(2)"
    );
    if (
      infoFormSecondP &&
      !infoFormSecondP.classList.contains("anatomi_info_form_second_p")
    ) {
      infoFormSecondP.classList.add("anatomi_info_form_second_p");
    }
    const infoFormDesc = document.querySelector("#customerInfoForm > p.desc");
    if (
      infoFormDesc &&
      !infoFormDesc.classList.contains("anatomi_info_form_desc")
    ) {
      infoFormDesc.classList.add("anatomi_info_form_desc");
    }
    const customerFormInner = document.querySelector("#customerInfoForm > div");
    if (
      customerFormInner &&
      !customerFormInner.classList.contains("anatomi_customer_form_inner")
    ) {
      customerFormInner.classList.add("anatomi_customer_form_inner");
    }
    const formInnerTitleP = document.querySelector(
      "#customerInfoForm > div > p.title"
    );
    if (
      formInnerTitleP &&
      !formInnerTitleP.classList.contains("anatomi_form_inner_title_p")
    ) {
      formInnerTitleP.classList.add("anatomi_form_inner_title_p");
    }
    const buttons = document.querySelectorAll(
      "#customerInfoForm > div > div.bottom.confirmButton > button"
    );
    if (buttons.length > 1) {
      buttons[1].classList.add("anatomi_form_inner_button");
    } else {
      buttons[0].classList.add("anatomi_form_inner_button");
    }

    const footer = document.querySelector("body > footer");
    if (footer && !footer.classList.contains("anatomi_footer")) {
      footer.classList.add("anatomi_footer");
    }
  };
  setInterval(() => {
    generateSteps();
    generateForm();
  });
};
const kb_input_bölünmesi_init = () => {
  kb_input_bölünmesi_html();
  kb_input_bölünmesi_css();
  kb_input_bölünmesi_js();
};
const kb_input_bölünmesi_condition = () => {
  const device = window.innerWidth > 768;
  const location =
    window.location.href ===
    "https://www.sigortaladim.com/kasko-sigortasi/teklif/kisisel-bilgiler";

  return device;
};
setInterval(() => {
  if (kb_input_bölünmesi_condition()) {
    kb_input_bölünmesi_init();
  }
}, 100);
