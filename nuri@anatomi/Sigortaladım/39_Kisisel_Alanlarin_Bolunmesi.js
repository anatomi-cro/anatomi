const form = document.querySelector(".customer-form.inner");
form.classList.add("anatomi_form");

const trafikSigortasiAsama1 = document.createElement("div");
const trafikSigortasiAsama2 = document.createElement("div");
const trafikSigortasiAsama3 = document.createElement("div");
const trafikSigortasiAsama4 = document.createElement("div");
const trafikSigortasiAsama5 = document.createElement("div");

trafikSigortasiAsama1.classList.add("trafikSigortasiAsama1");
trafikSigortasiAsama2.classList.add("trafikSigortasiAsama2");
trafikSigortasiAsama3.classList.add("trafikSigortasiAsama3");
trafikSigortasiAsama4.classList.add("trafikSigortasiAsama4");
trafikSigortasiAsama5.classList.add("trafikSigortasiAsama5");

trafikSigortasiAsama1.classList.add("trafikSigortasiAsama");
trafikSigortasiAsama2.classList.add("trafikSigortasiAsama");
trafikSigortasiAsama3.classList.add("trafikSigortasiAsama");
trafikSigortasiAsama4.classList.add("trafikSigortasiAsama");
trafikSigortasiAsama5.classList.add("trafikSigortasiAsama");

//-----------------PROGRESS BAR-----------------

const title = document.querySelector(".customer-form .title");
const head = document.querySelector("head");

const progressBar_html = `
<div class="progressBar">
<div class="circle circle1 circle-active">1
    <img src="https://anatomi.s3.eu-north-1.amazonaws.com/check.png" alt="">
</div>
<div class="circle circle2">2<img src="https://anatomi.s3.eu-north-1.amazonaws.com/check.png" alt=""></div>
<div class="circle circle3">3<img src="https://anatomi.s3.eu-north-1.amazonaws.com/check.png" alt=""></div>
<div class="circle circle4">4<img src="https://anatomi.s3.eu-north-1.amazonaws.com/check.png" alt=""></div>
<div class="circle circle5">5<img src="https://anatomi.s3.eu-north-1.amazonaws.com/check.png" alt=""></div>
<div class="line"></div>
</div>

<div class="trafik-buttons">
<button class="trafik_next">Devam</button>
<button class="trafik_prev"><img src="https://resmim.net/cdn/2024/01/24/ZOd2o2.png" alt=""> Geri dön</button>
</div>

`;

const progressBar_style = `
<style>

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
    border: 1px solid #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    overflow: hidden;
    color: #ddd;
    font-weight: 300;
    font-size: 14px;
}

.line {
    position: absolute;
    width: 90%;
    height: 1px;
    background-color: #ddd;
}

.line::after{
    content: "";
    position: absolute;
    left: 0;
    width: 0%;
    height: 1px;
    background-color: cornflowerblue;
    transition: width .3s ease-in-out;
}

.circle-active {
    border: 1px solid cornflowerblue;
    background-color: cornflowerblue;
    overflow: hidden;
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
</style>
`;

if (!document.querySelector(".progressBar")) {
  title.insertAdjacentHTML("beforeend", progressBar_html);
  head.insertAdjacentHTML("beforeend", progressBar_style);
}

const circles = document.querySelectorAll(".circle");
const line = document.querySelector(".line");
const next = document.querySelector(".trafik_next");
const prev = document.querySelector(".trafik_prev");

let activeCircle = 0;

next.addEventListener("click", () => {
  next.disabled = true;
  if (next.disabled == true) {
    next.style.backgroundColor = "#ddd";
  } else {
    next.style.backgroundColor = "#4372F6";
  }
});

const nextEvent3 = next.addEventListener("click", () => {
  let currentStep = document.querySelector(
    `.trafikSigortasiAsama${activeCircle + 1}`
  );
  let floatLabel = currentStep.querySelectorAll(".float-label");
  let inputs = currentStep.querySelectorAll('input[type="text"]');
  let isEmpty = false;
  const asama4Floats = trafikSigortasiAsama4.querySelectorAll(".typeahead");

  inputs.forEach((input, idx) => {
    if (floatLabel[idx]) {
      if (!input.value.trim() || floatLabel[idx].classList.contains("error")) {
        isEmpty = true;
      }
    } else {
      if (!input.value.trim()) {
        isEmpty = true;
      }
    }

    if (
      asama4Floats[1].classList.contains("has-value") &&
      asama4Floats[3].classList.contains("has-value")
    ) {
      isEmpty = false;
    }
  });

  if (isEmpty) {
    alert("Lütfen tüm alanları doldurun.");
  } else {
    activeCircle++;
    circles.forEach((circle, idx) => {
      if (activeCircle >= circles.length) {
        activeCircle = circles.length;
        next.disabled = true;
      } else {
        prev.disabled = false;
      }
      if (idx < activeCircle) {
        circle.classList.add("circle-active");
        circles[idx + 1].style.border = "2px solid cornflowerblue";
        circles[idx + 1].style.color = "#000";

        const anatomi_line_stlye = `
                    <style>
                        .line::after{
                            width: ${(idx + 1) * 25}%;
                        }
                    </style>
                `;
        head.insertAdjacentHTML("beforeend", anatomi_line_stlye);
      } else {
        circle.classList.remove("circle-active");
      }
    });
  }
});

// İnput alanlarının değişimini dinle
form.addEventListener("input", () => {
  let currentStep = document.querySelector(
    `.trafikSigortasiAsama${activeCircle + 1}`
  );
  let floatLabel = currentStep.querySelectorAll(".float-label");
  let inputs = currentStep.querySelectorAll('input[type="text"]');
  let isEmpty = false;
  const asama4Floats = trafikSigortasiAsama4.querySelectorAll(".typeahead");

  // Boş inputları kontrol et
  inputs.forEach((input, idx) => {
    if (!input.value.trim() || floatLabel[idx].classList.contains("error")) {
      isEmpty = true;
    }
    if (
      asama4Floats[1].classList.contains("has-value") &&
      asama4Floats[3].classList.contains("has-value")
    ) {
      isEmpty = false;
    }
  });

  // Boş input varsa devam butonunu devre dışı bırak
  if (isEmpty) {
    next.disabled = true;
    next.style.backgroundColor = "#ddd";
  } else {
    next.disabled = false;
    next.style.backgroundColor = "#4372F6";
  }
});

//-----------------AŞAMA 1-----------------

const disabledGroup = document.querySelectorAll(
  ".textbox.disabled.float-label.has-value"
);

trafikSigortasiAsama1.insertAdjacentElement("beforeend", disabledGroup[0]);
trafikSigortasiAsama1.insertAdjacentElement("beforeend", disabledGroup[1]);
if(disabledGroup[3]){
  disabledGroup[3].remove();
}
if(disabledGroup[2]){
  disabledGroup[2].remove();
}

const trafikSigortasiAsama_style = `
    <style>
    .anatomi_form {
        display: flex !important;
        flex-direction: column !important;
        align-items: flex-start !important;
        justify-content: center !important;
        width: 100% !important; 
        padding: 60px 100px !important;
    }

        .trafikSigortasiAsama{
            display: flex;
            flex-direction: column !important;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin: 80px auto;
        }

        .trafikSigortasiAsama1{
            display: none;
        }

        .trafikSigortasiAsama2{
            display: none;
        }
        .trafikSigortasiAsama3{
            display: none;
        }
        .trafikSigortasiAsama4{
            display: none;
        }
        .trafikSigortasiAsama5{
            display: none;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
        }

        .trafikSigortasiAsama5 .occupation-info {
            display: none !important;
        }

        .trafikSigortasiAsama5 span {
            align-self: center;
        }

        .form .customer-info-form .customer-form .textbox{
            width: 60%;
        }

        .trafikSigortasiAsamaActive {
            display: flex !important;
        }

        .customer-form .title {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 50px;
        }

        @media screen and (max-width: 768px) {
            .anatomi_form {
                padding: 20px 20px !important;
            }
            .form .customer-info-form .customer-form .textbox{
                width: 100%;
            }
        }
`;

form.insertBefore(trafikSigortasiAsama1, form.childNodes[1]);
head.insertAdjacentHTML("beforeend", trafikSigortasiAsama_style);

//-----------------AŞAMA 2-----------------

const nameGroup = document.querySelectorAll(".textbox.float-label");

trafikSigortasiAsama2.append(nameGroup[2]);
trafikSigortasiAsama2.append(nameGroup[3]);
trafikSigortasiAsama2.append(nameGroup[4]);

form.insertBefore(trafikSigortasiAsama2, form.childNodes[2]);

//-----------------AŞAMA 3-----------------

const datePicker = document.querySelector(".datepicker");

trafikSigortasiAsama3.append(datePicker);
form.insertBefore(trafikSigortasiAsama3, form.childNodes[3]);

//-----------------AŞAMA 4-----------------

const il = document.querySelector(
  ".twitter-typeahead.textbox.float-label.tt-city"
);
const ilce = document.querySelector(
  ".twitter-typeahead.textbox.float-label.tt-district"
);

trafikSigortasiAsama4.append(il);
trafikSigortasiAsama4.append(ilce);

form.insertBefore(trafikSigortasiAsama4, form.childNodes[4]);

// -----------------AŞAMA 5-----------------

const meslek = document.querySelector(
  ".twitter-typeahead.textbox.float-label.tt-occupation"
);
const info1 = document.querySelector(".occupation-info");
const info2 = document.querySelector(".plate-info");
const info3 = document.querySelector(".vehicle-info");
const checkBox = document.querySelectorAll(".chkbox");
const confirmButton = document.querySelector(".bottom.confirmButton");

trafikSigortasiAsama5.append(meslek);
trafikSigortasiAsama5.append(info1);
trafikSigortasiAsama5.append(info2);
trafikSigortasiAsama5.append(info3);
trafikSigortasiAsama5.append(confirmButton);

checkBox.forEach((item) => {
  trafikSigortasiAsama5.append(item);
});

form.insertBefore(trafikSigortasiAsama5, form.childNodes[5]);

const allSteps = document.querySelectorAll(".trafikSigortasiAsama");

const nextEvent2 = next.addEventListener("click", () => {
  if (activeCircle === 4) {
    next.style.display = "none";
    trafikSigortasiAsama5.appendChild(confirmButton);
  }
});

//-----------------BUTTONS-----------------
const trafikButtons = document.querySelector(".trafik-buttons");
form.insertAdjacentElement("beforeend", trafikButtons);

if (trafikSigortasiAsama5.classList.contains("trafikSigortasiAsamaActive")) {
  next.style.display = "none";
}

const button_style = `
<style>
    .trafik_next{
        background-color: #4372F6;
        color: white;
        border: none;
        border-radius: 8px;
        padding: 10px 50px;
        font-weight: 400;
        font-size: 18px;
    }
    .trafik_prev{
        background-color: transparent;
        color: #4372F6;
        border: none;
        font-weight: 500;
        font-size: 15px;
    }
    .trafik_prev img {
        width: 20px;
    }
    .trafik-buttons {
        display: flex;
        width: 100%;
        flex-direction: row-reverse;
        justify-content: space-around;
        align-items: center;
    }
`;

head.insertAdjacentHTML("beforeend", button_style);

//-----------------NEXT-PREV-PROGRESS-----------------

const steps1 = document.querySelector(".trafikSigortasiAsama1");
steps1.classList.add("trafikSigortasiAsamaActive");

const nextEvent = next.addEventListener("click", () => {
  const allSteps = document.querySelectorAll(".trafikSigortasiAsama");
  var i = 1;

  allSteps.forEach((item, idx) => {
    if (idx === activeCircle) {
      item.classList.add("trafikSigortasiAsamaActive");
    } else {
      item.classList.remove("trafikSigortasiAsamaActive");
    }
  });
});

prev.addEventListener("click", () => {
  window.location.href = "https://www.sigortaladim.com/trafik-sigortasi";
});

const asama2Floats = trafikSigortasiAsama2.querySelectorAll(".float-label");
const asama3Float = trafikSigortasiAsama3.querySelector(".float-label");
const asama4Floats = trafikSigortasiAsama4.querySelectorAll(".typeahead");

const observerCallbackAsama3 = (mutationsList, targetFloat) => {
  for (let mutation of mutationsList) {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      const classList = targetFloat.classList;
      if(classList.contains("has-value")){
        next.disabled = false;
      }else {
        next.disabled = true;
      }
    }
  }
};

const observerAsama3 = new MutationObserver((mutationsList) => {
  observerCallbackAsama3(mutationsList, asama3Float);
});

observerAsama3.observe(asama3Float, { attributes: true });

const observerCallbackAsama4 = (mutationsList, targetFloat) => {
  for (let mutation of mutationsList) {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      if (
        asama4Floats[1].classList.contains("has-value") &&
        asama4Floats[3].classList.contains("has-value")
      ) {
        next.disabled = false;
        next.style.backgroundColor = "#4372F6";
      }
    }
  }
};

asama4Floats.forEach((asama4Float) => {
  const observerAsama4 = new MutationObserver((mutationsList) => {
    observerCallbackAsama4(mutationsList, asama4Float);
  });
  observerAsama4.observe(asama4Float, { attributes: true });
});

const observer = new MutationObserver((mutationsList, observer) => {
  for (let mutation of mutationsList) {
    if (
      mutation.type === "attributes" &&
      mutation.attributeName === "disabled"
    ) {
      if (next.disabled == true) {
        next.style.backgroundColor = "#ddd";
      } else {
        next.style.backgroundColor = "#4372F6";
      }
    }
  }
});

observer.observe(next, { attributes: true });

const observer2 = new MutationObserver((mutationsList, observer) => {
  for (let mutation of mutationsList) {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      if (
        trafikSigortasiAsama1.classList.contains("trafikSigortasiAsamaActive")
      ) {
        prev.style.display = "block";
      } else {
        prev.style.display = "none";
      }
    }
  }
});

observer2.observe(trafikSigortasiAsama1, { attributes: true });

const observer3 = new MutationObserver((mutationList, observer) => {
  for (let mutation of mutationList) {
    if (!mutation.target) {
      trafikSigortasiAsama1.insertAdjacentElement(
        "beforeend",
        disabledGroup[0]
      );
      trafikSigortasiAsama1.insertAdjacentElement(
        "beforeend",
        disabledGroup[1]
      );
    }
  }
});

observer3.observe(disabledGroup[0], { childList: true });

const checktrafik1 = document.querySelectorAll(".trafikSigortasiAsama1");
const checktrafik2 = document.querySelectorAll(".trafikSigortasiAsama2");
const checktrafik3 = document.querySelectorAll(".trafikSigortasiAsama3");
const checktrafik4 = document.querySelectorAll(".trafikSigortasiAsama4");
const checktrafik5 = document.querySelectorAll(".trafikSigortasiAsama5");

if (checktrafik1.length > 1) {
  checktrafik1[1].remove();
}

if (checktrafik2.length > 1) {
  checktrafik2[1].remove();
}

if (checktrafik3.length > 1) {
  checktrafik3[1].remove();
}

if (checktrafik4.length > 1) {
  checktrafik4[1].remove();
}

if (checktrafik5.length > 1) {
  checktrafik5[1].remove();
}

const geri = document.querySelector(
  "#plateExistForm > div > div.bottom > button.btn-link.icon-link.left-icon"
);

if (geri) {
  geri.addEventListener("click", () => {
    window.location.href =
      "https://www.sigortaladim.com/kasko-sigortasi/teklif/kisisel-bilgiler";
  });

}


asama2Floats[0].addEventListener("click", () => {
  if(asama2Floats[0].classList.contains("has-value") && asama2Floats[1].classList.contains("has-value") && asama2Floats[2].classList.contains("has-value")){
    next.disabled = false;
  }
});

asama2Floats[1].addEventListener("click", () => {
  if(asama2Floats[0].classList.contains("has-value") && asama2Floats[1].classList.contains("has-value") && asama2Floats[2].classList.contains("has-value")){
    next.disabled = false;
  }
});

asama2Floats[2].addEventListener("click", () => {
  if(asama2Floats[0].classList.contains("has-value") && asama2Floats[1].classList.contains("has-value") && asama2Floats[2].classList.contains("has-value")){
    next.disabled = false;
  }
});

asama3Float.addEventListener("click", () => {
  if(asama3Float.classList.contains("has-value")){
    next.disabled = false;
  }
});

asama4Floats[1].addEventListener("click", () => {
  if(asama4Floats[1].classList.contains("has-value") && asama4Floats[3].classList.contains("has-value")){
    next.disabled = false;
  }
});

asama4Floats[3].addEventListener("click", () => {
  if(asama4Floats[1].classList.contains("has-value") && asama4Floats[3].classList.contains("has-value")){
    next.disabled = false;
  }
});