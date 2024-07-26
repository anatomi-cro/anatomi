const parent_form = document.querySelector("#customerInfoForm .customer-form");
const oldInputs = document.querySelectorAll(
  "#customerInfoForm > div.customer-form.inner > .float-label"
);

const line = document.querySelector(".line");
const circle = document.querySelector(".circle");

const init_style = () => {
  const anatomi_form_style = `
  <style>

  html{
    height: auto !important;
  }

  #dealHeader {
    width: 100% !important;
  }

  body {
    height: auto !important;
  }

  body {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
  }

  .progressBar {
      position: relative;
      width: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
  }

  .circle {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #fff;
      margin: 0 10px;
      border: 2px solid #ddd;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      overflow: hidden;
  }

  .circle-next {
    border: 2px solid cornflowerblue;
    }

  .line {
      position: absolute;
      width: 90%;
      height: 2px;
      background-color: #ddd;
  }

  .line::after {
      content: "";
      position: absolute;
      width: 0%;
      height: 2px;
      background-color: cornflowerblue;
      transition: width .3s ease-in-out;
  }

  .circle-active {
      border: 2px solid cornflowerblue;
      background-color: cornflowerblue;
      overflow: hidden;
  }

  .asama1_line_active.line::after {
        width: 25% !important;
    }

    .asama2_line_active.line::after {
        width: 50% !important;
    }

    .asama3_line_active.line::after {
        width: 75% !important;
    }

    .asama4_line_active.line::after {
        width: 100% !important;
    }

  .circle img {
      display: none;
  }

  .circle-active img {
      display: block;
      width: 20px;
      height: 20px;
      position: absolute;
      background-color: cornflowerblue;
      border-radius: 50%;
  }

  .anatomi_form_asama {
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        width: 100%;
        height: fit-content;
        padding: 3rem;
  }

  .anatomi_form_asama_active {
        display: flex;
  }

  #customerInfoForm {
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;
  }

  .anatomi_form_asama_buttons {
    display: flex;
    flex-direction: row-reverse;
    gap: 20px;
    width: 100%;
    justify-content: space-between;
  }

  .anatomi_form_asama_buttons img {
        width: 20px;
        height: 20px;
  }

    .asamalar_button_next {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row-reverse;
        gap: 10px;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .asamalar_button_prev {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .asama1_prev{
        display: none;
    }

    .asama5_next {
        opacity: 0;
        pointer-events: none;
    }

    .asama5_prev {
        justify-content: flex-start;
    }

    .form .customer-info-form .customer-form .textbox, .form .customer-info-form .customer-form .datepicker {
        width: 100% !important;
    }
    
</style>
  `;

  const anatomi_form_head = document.querySelector("head");
  anatomi_form_head.insertAdjacentHTML("beforeend", anatomi_form_style);
};

const init_progressBar = () => {
  const anatomi_form_progressBar_html = `
    <div class="progressBar">
        <div class="circle circle1 circle-next">1
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/check.png" alt="">
        </div>
        <div class="circle circle2">2<img src="https://anatomi.s3.eu-north-1.amazonaws.com/check.png" alt=""></div>
        <div class="circle circle3">3<img src="https://anatomi.s3.eu-north-1.amazonaws.com/check.png" alt=""></div>
        <div class="circle circle4">4<img src="https://anatomi.s3.eu-north-1.amazonaws.com/check.png" alt=""></div>
        <div class="circle circle5">5<img src="https://anatomi.s3.eu-north-1.amazonaws.com/check.png" alt=""></div>
        <div class="line"></div>
    </div>
    `;

  const progressBar = document.querySelector(".progressBar");

  if (parent_form && !progressBar) {
    parent_form.insertAdjacentHTML(
      "beforebegin",
      anatomi_form_progressBar_html
    );
  } else {
    console.log("Parent form not found progressBar");
  }

  const progressBars = document.querySelectorAll(".progressBar");

  const observer_progressBar = new MutationObserver(
    (mutationsList, observer) => {
      if (progressBars.length > 1) {
        progressBars[1].remove();
      }
    }
  );

  observer_progressBar.observe(progressBars[0], { attributes: true });
};

const init_asama1 = () => {
  const asama1 = document.querySelector(".anatomi_form_asama_1");
  const asama2 = document.querySelector(".anatomi_form_asama_2");
  const asama3 = document.querySelector(".anatomi_form_asama_3");
  const asama4 = document.querySelector(".anatomi_form_asama_4");
  const asama5 = document.querySelector(".anatomi_form_asama_5");

  const asama1_next = document.querySelector(".asama1_next");

  if (oldInputs[0] && oldInputs[1]) {
    asama1.insertAdjacentElement("afterbegin", oldInputs[0]);
    asama1.insertAdjacentElement("afterbegin", oldInputs[1]);
  }

  asama1_next.addEventListener("click", () => {
    asama1.classList.remove("anatomi_form_asama_active");
    asama2.classList.add("anatomi_form_asama_active");
  });

  asama1_next.addEventListener("click", () => {
    document.querySelector(".circle1").classList.add("circle-active");
    document.querySelector(".circle2").classList.add("circle-next");
    document.querySelector(".line").classList.add("asama1_line_active");
  });

  const asama1_nexts = document.querySelectorAll(".asama1_next");
  const asama1_prevs = document.querySelectorAll(".asama1_prev");

  const observer_asama1_buttons = new MutationObserver(
    (mutationsList, observer) => {
      if (asama1_nexts.length > 1) {
        asama1_nexts[1].remove();
        asama1_prevs[1].remove();
      }
    }
  );

  observer_asama1_buttons.observe(asama1_nexts[0], { attributes: true });
  observer_asama1_buttons.observe(asama1_prevs[0], { attributes: true });
};

const init_asama2 = () => {
  const asama1 = document.querySelector(".anatomi_form_asama_1");
  const asama2 = document.querySelector(".anatomi_form_asama_2");
  const asama3 = document.querySelector(".anatomi_form_asama_3");
  const asama4 = document.querySelector(".anatomi_form_asama_4");
  const asama5 = document.querySelector(".anatomi_form_asama_5");

  if (oldInputs[2] && oldInputs[3] && oldInputs[4]) {
    asama2.insertAdjacentElement("afterbegin", oldInputs[4]);
    asama2.insertAdjacentElement("afterbegin", oldInputs[3]);
    asama2.insertAdjacentElement("afterbegin", oldInputs[2]);
  }

  const asama2_next = document.querySelector(".asama2_next");
  const asama2_prev = document.querySelector(".asama2_prev");

  if (oldInputs[2] && oldInputs[3] && oldInputs[4]) {
    if (
      oldInputs[2].classList.contains("has-value") &&
      oldInputs[3].classList.contains("has-value") &&
      oldInputs[4].classList.contains("has-value")
    ) {
      asama2_next.disabled = false;
    } else {
      if (asama2_next) {
        asama2_next.disabled = true;
      }
    }
  }

  const observer_asama2 = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        if (
          oldInputs[2].classList.contains("has-value") &&
          oldInputs[3].classList.contains("has-value") &&
          oldInputs[4].classList.contains("has-value") &&
          !oldInputs[2].classList.contains("error") &&
          !oldInputs[3].classList.contains("error") &&
          !oldInputs[4].classList.contains("error")
        ) {
          asama2_next.disabled = false;
        } else {
          asama2_next.disabled = true;
        }
      }
    }
  });

  if (oldInputs[2]) {
    observer_asama2.observe(oldInputs[2], { attributes: true });
  }

  if (oldInputs[3]) {
    observer_asama2.observe(oldInputs[3], { attributes: true });
  }

  if (oldInputs[4]) {
    observer_asama2.observe(oldInputs[4], { attributes: true });
  }

  asama2_next &&
    asama2_next.addEventListener("click", () => {
      asama2.classList.remove("anatomi_form_asama_active");
      asama3.classList.add("anatomi_form_asama_active");
    });

  asama2_prev &&
    asama2_prev.addEventListener("click", () => {
      asama2.classList.remove("anatomi_form_asama_active");
      asama1.classList.add("anatomi_form_asama_active");
    });

  asama2_next &&
    asama2_next.addEventListener("click", () => {
      document.querySelector(".circle2").classList.add("circle-active");
      document.querySelector(".circle3").classList.add("circle-next");
      document.querySelector(".line").classList.add("asama2_line_active");
    });

  asama2_prev &&
    asama2_prev.addEventListener("click", () => {
      document.querySelector(".circle1").classList.remove("circle-active");
      document.querySelector(".circle1").classList.add("circle-next");
      document.querySelector(".circle2").classList.remove("circle-active");
      document.querySelector(".circle2").classList.remove("circle-next");
      document.querySelector(".circle3").classList.remove("circle-next");
      document.querySelector(".line").classList.remove("asama1_line_active");
    });

  const asama2_nexts = document.querySelectorAll(".asama2_next");
  const asama2_prevs = document.querySelectorAll(".asama2_prev");

  const observer_asama2_buttons = new MutationObserver(
    (mutationsList, observer) => {
      if (asama2_nexts.length > 1) {
        asama2_nexts[1].remove();
        asama2_prevs[1].remove();
      }
    }
  );

  observer_asama2_buttons.observe(asama2_nexts[0], { attributes: true });
  observer_asama2_buttons.observe(asama2_prevs[0], { attributes: true });
};

const init_asama3 = () => {
  const asama1 = document.querySelector(".anatomi_form_asama_1");
  const asama2 = document.querySelector(".anatomi_form_asama_2");
  const asama3 = document.querySelector(".anatomi_form_asama_3");
  const asama4 = document.querySelector(".anatomi_form_asama_4");
  const asama5 = document.querySelector(".anatomi_form_asama_5");

  const oldDate = document.querySelector(
    "#customerInfoForm > div.customer-form.inner > div.anatomi_form_asama_3.anatomi_form_asama.anatomi_form_asama_active > div.datepicker > div.mx-datepicker > div"
  );

  const oldDateInput = document.querySelector("#birthday");

  if (oldDateInput.parentNode) {
    asama3.insertAdjacentElement("afterbegin", oldDateInput.parentNode);
  }

  const asama3_next = document.querySelector(".asama3_next");
  const asama3_prev = document.querySelector(".asama3_prev");

  if (oldDateInput.parentNode.classList.contains("has-value")) {
    asama3_next.disabled = false;
  } else {
    asama3_next.disabled = true;
  }

  const observer_asama3 = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        if (
          oldDateInput.parentNode.classList.contains("has-value") &&
          !oldDateInput.parentNode.classList.contains("error")
        ) {
          asama3_next.disabled = false;
        } else {
          asama3_next.disabled = true;
        }
      }
    }
  });

  observer_asama3.observe(oldDateInput.parentNode, { attributes: true });

  asama3_next.addEventListener("click", () => {
    asama3.classList.remove("anatomi_form_asama_active");
    asama4.classList.add("anatomi_form_asama_active");
  });

  asama3_prev.addEventListener("click", () => {
    asama3.classList.remove("anatomi_form_asama_active");
    asama2.classList.add("anatomi_form_asama_active");
  });

  asama3_next.addEventListener("click", () => {
    document.querySelector(".circle3").classList.add("circle-active");
    document.querySelector(".circle4").classList.add("circle-next");
    document.querySelector(".line").classList.add("asama3_line_active");
  });

  asama3_prev.addEventListener("click", () => {
    document.querySelector(".circle2").classList.remove("circle-active");
    document.querySelector(".circle2").classList.add("circle-next");
    document.querySelector(".circle3").classList.remove("circle-active");
    document.querySelector(".circle3").classList.remove("circle-next");
    document.querySelector(".circle4").classList.remove("circle-next");
    document.querySelector(".line").classList.remove("asama2_line_active");
  });

  const asama3_nexts = document.querySelectorAll(".asama3_next");
  const asama3_prevs = document.querySelectorAll(".asama3_prev");

  const observer_asama3_buttons = new MutationObserver(
    (mutationsList, observer) => {
      if (asama3_nexts.length > 1) {
        asama3_nexts[1].remove();
        asama3_prevs[1].remove();
      }
    }
  );

  observer_asama3_buttons.observe(asama3_nexts[0], { attributes: true });
  observer_asama3_buttons.observe(asama3_prevs[0], { attributes: true });
};

const init_asama4 = () => {
  const asama1 = document.querySelector(".anatomi_form_asama_1");
  const asama2 = document.querySelector(".anatomi_form_asama_2");
  const asama3 = document.querySelector(".anatomi_form_asama_3");
  const asama4 = document.querySelector(".anatomi_form_asama_4");
  const asama5 = document.querySelector(".anatomi_form_asama_5");

  const oldCity = document.querySelector(
    "#customerInfoForm > div.customer-form.inner > .tt-city"
  );
  const oldDistrict = document.querySelector(
    "#customerInfoForm > div.customer-form.inner > .tt-district"
  );

  const oldCityInput = document.querySelector("#district");
  const oldDistrictInput = document.querySelector("#city");

  if (oldCity && oldDistrict) {
    asama4.insertAdjacentElement("afterbegin", oldDistrict);
    asama4.insertAdjacentElement("afterbegin", oldCity);
  }

  const asama4_next = document.querySelector(".asama4_next");
  const asama4_prev = document.querySelector(".asama4_prev");

  if (
    oldCityInput.classList.contains("has-value") &&
    oldDistrictInput.classList.contains("has-value")
  ) {
    asama4_next.disabled = false;
  } else {
    asama4_next.disabled = true;
  }

  const observer_asama4 = new MutationObserver((mutationsList, observer) => {
    for (let mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        if (
          oldCityInput.classList.contains("has-value") &&
          oldDistrictInput.classList.contains("has-value") &&
          !oldCityInput.classList.contains("error") &&
          !oldDistrictInput.classList.contains("error")
        ) {
          asama4_next.disabled = false;
        } else {
          asama4_next.disabled = true;
        }
      }
    }
  });

  observer_asama4.observe(oldCityInput, { attributes: true });
  observer_asama4.observe(oldDistrictInput, { attributes: true });

  asama4_next.addEventListener("click", () => {
    asama4.classList.remove("anatomi_form_asama_active");
    asama5.classList.add("anatomi_form_asama_active");
  });

  asama4_prev.addEventListener("click", () => {
    asama4.classList.remove("anatomi_form_asama_active");
    asama3.classList.add("anatomi_form_asama_active");
  });

  asama4_next.addEventListener("click", () => {
    document.querySelector(".circle4").classList.add("circle-active");
    document.querySelector(".circle5").classList.add("circle-next");
    document.querySelector(".line").classList.add("asama4_line_active");
  });

  asama4_prev.addEventListener("click", () => {
    document.querySelector(".circle3").classList.remove("circle-active");
    document.querySelector(".circle3").classList.add("circle-next");
    document.querySelector(".circle4").classList.remove("circle-active");
    document.querySelector(".circle4").classList.remove("circle-next");
    document.querySelector(".circle5").classList.remove("circle-next");
    document.querySelector(".line").classList.remove("asama3_line_active");
  });

  const asama4_nexts = document.querySelectorAll(".asama4_next");
  const asama4_prevs = document.querySelectorAll(".asama4_prev");

  const observer_asama4_buttons = new MutationObserver(
    (mutationsList, observer) => {
      if (asama4_nexts.length > 1) {
        asama4_nexts[1].remove();
        asama4_prevs[1].remove();
      }
    }
  );

  observer_asama4_buttons.observe(asama4_nexts[0], { attributes: true });
  observer_asama4_buttons.observe(asama4_prevs[0], { attributes: true });
};

const init_asama5 = () => {
  const asama1 = document.querySelector(".anatomi_form_asama_1");
  const asama2 = document.querySelector(".anatomi_form_asama_2");
  const asama3 = document.querySelector(".anatomi_form_asama_3");
  const asama4 = document.querySelector(".anatomi_form_asama_4");
  const asama5 = document.querySelector(".anatomi_form_asama_5");

  const checkBox = document.querySelectorAll(
    "#customerInfoForm > div.customer-form.inner > .chkbox"
  );

  const info = document.querySelector(
    "#customerInfoForm > div.customer-form.inner > .occupation-info"
  );
  const confirmButton = document.querySelector(".confirmButton");
  const oldJob = document.querySelector(
    "#customerInfoForm > div.customer-form.inner > .tt-occupation"
  );

  if (oldJob) {
    asama5.insertAdjacentElement("afterbegin", confirmButton);
    checkBox[2] && asama5.insertAdjacentElement("afterbegin", checkBox[2]);
    checkBox[1] && asama5.insertAdjacentElement("afterbegin", checkBox[1]);
    checkBox[0] && asama5.insertAdjacentElement("afterbegin", checkBox[0]);
    asama5.insertAdjacentElement("afterbegin", info);
    asama5.insertAdjacentElement("afterbegin", oldJob);
  }

  const asama5_prev = document.querySelector(".asama5_prev");

  asama5_prev.addEventListener("click", () => {
    asama5.classList.remove("anatomi_form_asama_active");
    asama4.classList.add("anatomi_form_asama_active");
  });

  asama5_prev.addEventListener("click", () => {
    document.querySelector(".circle4").classList.remove("circle-active");
    document.querySelector(".circle4").classList.add("circle-next");
    document.querySelector(".circle5").classList.remove("circle-next");
    document.querySelector(".line").classList.remove("asama4_line_active");
  });

  confirmButton.addEventListener("click", () => {
    document.querySelector("#customerInfoForm").style.display = "none";
  });

  const back_button = document.querySelector(
    "#plateExistForm > div > div.bottom > button.btn-link.icon-link.left-icon"
  );
  back_button.addEventListener("click", () => {
    document.querySelector("#customerInfoForm").style.display = "flex";

    const progressBar = document.querySelectorAll(".progressBar");

    if (progressBar.length > 1) {
      progressBar[1].remove();
    }
  });

  const asama5_nexts = document.querySelectorAll(".asama5_next");
  const asama5_prevs = document.querySelectorAll(".asama5_prev");

  const observer_asama5_buttons = new MutationObserver(
    (mutationsList, observer) => {
      if (asama5_nexts.length > 1) {
        asama5_nexts[1].remove();
        asama5_prevs[1].remove();
      }
    }
  );

  observer_asama5_buttons.observe(asama5_nexts[0], { attributes: true });
  observer_asama5_buttons.observe(asama5_prevs[0], { attributes: true });
};

const init_asama = () => {
  const anatomi_form_asama_html = `
  <div class="anatomi_form_asama_1 anatomi_form_asama anatomi_form_asama_active">
  <div class="anatomi_form_asama_buttons">
  <button class="asama1_next asamalar_button_next">
  <img src="https://anatomi.s3.eu-north-1.amazonaws.com/icons8-right-arrow-50.png" alt="">
  <p>İleri</p>
</button>
<button class="asama1_prev asamalar_button_prev">
  <img src="https://anatomi.s3.eu-north-1.amazonaws.com/icons8-left-arrow-50.png" alt="">
  <p>Geri</p>
</button>
</div>
</div>

<div class="anatomi_form_asama_2 anatomi_form_asama">
<div class="anatomi_form_asama_buttons">
<button class="asama2_next asamalar_button_next">
<img src="https://anatomi.s3.eu-north-1.amazonaws.com/icons8-right-arrow-50.png" alt="">
<p>İleri</p>
</button>
<button class="asama2_prev asamalar_button_prev">
<img src="https://anatomi.s3.eu-north-1.amazonaws.com/icons8-left-arrow-50.png" alt="">
<p>Geri</p>
</button>
</div>
</div>

<div class="anatomi_form_asama_3 anatomi_form_asama">
<div class="anatomi_form_asama_buttons">
<button class="asama3_next asamalar_button_next">
<img src="https://anatomi.s3.eu-north-1.amazonaws.com/icons8-right-arrow-50.png" alt="">
<p>İleri</p>
</button>
<button class="asama3_prev asamalar_button_prev">
<img src="https://anatomi.s3.eu-north-1.amazonaws.com/icons8-left-arrow-50.png" alt="">
<p>Geri</p>
</button>
</div>
</div>

<div class="anatomi_form_asama_4 anatomi_form_asama">
<div class="anatomi_form_asama_buttons">
<button class="asama4_next asamalar_button_next">
<img src="https://anatomi.s3.eu-north-1.amazonaws.com/icons8-right-arrow-50.png" alt="">
<p>İleri</p>
</button>
<button class="asama4_prev asamalar_button_prev">
<img src="https://anatomi.s3.eu-north-1.amazonaws.com/icons8-left-arrow-50.png" alt="">
<p>Geri</p>
</button>
</div>
</div>

<div class="anatomi_form_asama_5 anatomi_form_asama">
<div class="anatomi_form_asama_buttons">
<button class="asama5_next asamalar_button_next">
<img src="https://anatomi.s3.eu-north-1.amazonaws.com/icons8-right-arrow-50.png" alt="">
<p>İleri</p>
</button>
<button class="asama5_prev asamalar_button_prev">
<img src="https://anatomi.s3.eu-north-1.amazonaws.com/icons8-left-arrow-50.png" alt="">
<p>Geri</p>
</button>
</div>
</div>
  `;

  if (parent_form) {
    parent_form.insertAdjacentHTML("beforeend", anatomi_form_asama_html);
  } else {
    console.log("Parent form not found asamalar");
  }

  init_asama1();
  init_asama2();
  init_asama3();
  init_asama4();
  init_asama5();
};

const init = () => {
  init_progressBar();
  init_style();
  init_asama();
};

init();

const asama1All = document.querySelectorAll(".anatomi_form_asama_1");
const asama2All = document.querySelectorAll(".anatomi_form_asama_2");
const asama3All = document.querySelectorAll(".anatomi_form_asama_3");
const asama4All = document.querySelectorAll(".anatomi_form_asama_4");
const asama5All = document.querySelectorAll(".anatomi_form_asama_5");

if (asama1All.length > 1) {
  asama1All[1].remove();
}

if (asama2All.length > 1) {
  asama2All[1].remove();
}

if (asama3All.length > 1) {
  asama3All[1].remove();
}

if (asama4All.length > 1) {
  asama4All[1].remove();
}

if (asama5All.length > 1) {
  asama5All[1].remove();
}

const observer_asamalar = new MutationObserver((mutationsList, observer) => {
  if (asama1All.length > 1) {
    asama1All[1].remove();
  }

  if (asama2All.length > 1) {
    asama2All[1].remove();
  }

  if (asama3All.length > 1) {
    asama3All[1].remove();
  }

  if (asama4All.length > 1) {
    asama4All[1].remove();
  }

  if (asama5All.length > 1) {
    asama5All[1].remove();
  }
});

const asama1 = document.querySelector(".anatomi_form_asama_1");
const asama2 = document.querySelector(".anatomi_form_asama_2");
const asama3 = document.querySelector(".anatomi_form_asama_3");
const asama4 = document.querySelector(".anatomi_form_asama_4");
const asama5 = document.querySelector(".anatomi_form_asama_5");

if (asama1) {
  observer_asamalar.observe(asama1, { attributes: true });
}

if (asama2) {
  observer_asamalar.observe(asama2, { attributes: true });
}

if (asama3) {
  observer_asamalar.observe(asama3, { attributes: true });
}

if (asama4) {
  observer_asamalar.observe(asama4, { attributes: true });
}

if (asama5) {
  observer_asamalar.observe(asama5, { attributes: true });
}


const checkButton = document.querySelector(".confirmButton .btn-solid.button-size");
const checkBoxes = document.querySelectorAll(".chkbox input");

const updateButtonState = () => {
  let anyChecked = false;
  checkBoxes.forEach((checkBox) => {
    if(checkBoxes[1] && checkBoxes[2] && checkBoxes[3]){
      if(checkBoxes[1].checked && checkBoxes[2].checked && checkBoxes[3].checked){
        anyChecked = true;
      }
    }else if(checkBoxes[1]){
      if(checkBoxes[1].checked){
        anyChecked = true;
      }
    }
  });
  checkButton.disabled = !anyChecked;
};

updateButtonState();


checkBoxes.forEach((checkBox) => {
  checkBox.addEventListener('change', updateButtonState);
});


const asama5_check = document.querySelector(".anatomi_form_asama_5");

const observer_checkboxes = new MutationObserver((mutationsList, observer) => {
  if(asama5_check.classList.contains("anatomi_form_asama_active")){
    updateButtonState();
  }
});

if(asama5_check){
  observer_checkboxes.observe(asama5_check, { attributes: true });
}

