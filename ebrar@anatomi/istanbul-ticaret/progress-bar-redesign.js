if (
  window.location.href.includes("https://www.istanbulticaret.com/sepet") ||
  window.location.href.includes("https://www.istanbulticaret.com/order")
) {
  const progress_bar_redesign_html = () => {
    let progressBarContainer = document.querySelector(
      ".progress-bar-container"
    );
    if (progressBarContainer) {
      return;
    }
    const html = `
    <div class="progress-bar-container">
      <div class="progress-step">
        <div class="circle active"><img style="width: 16px; height: 16px;" src="https://r.resimlink.com/NK6APriBY.png"></img></div>
        <div class="label">Sepet</div>
      </div>
      <div class="line"></div>
      <div class="progress-step">
        <div class="circle">•</div>
        <div class="label">Adres</div>
      </div>
      <div class="line"></div>
      <div class="progress-step">
        <div class="circle">•</div>
        <div class="label">Ödeme</div>
      </div>
    </div>
  `;
    const targetElement = document.querySelector("body > div:nth-child(3)");
    if (targetElement) {
      targetElement.insertAdjacentHTML("beforebegin", html);
    }
  };

  const progress_bar_redesign_css = () => {
    const style = `
      <style id="anatomi_progress_bar_redesign_css">    
       .progress-bar-container {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
  top: 129px;
  background-color: #fff;
  z-index: 999;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
      }
       #cct-open-btn{
    bottom: 130px !important;
    }
    #ls-openButton{
    bottom: 130px !important;
    }

      .progress-step {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 35px;
      }
    
      .circle {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 1px solid #C6C6C6;
        color: #C6C6C6;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 16px;
      }


    .circle.active {
        background-color: #E97926 !important;
        color: white !important;
        border:none;
      }
      .label {
        margin-top: 6px;
        font-size: 14px;
        color: #333;
      }

      .line {
        flex: 1;
        height: 2px;
        background-color: #ccc;
        margin-bottom: 20px;
      }

      .line.active {
        background-color: #E97926;
      }
      </style>
    `;
    const css = document.querySelector("#anatomi_progress_bar_redesign_css");
    const head = document.querySelector("head");
    if (!css) {
      head.insertAdjacentHTML("beforeend", style);
    }
  };

  const progress_bar_redesign_js = () => {
    const kosul = document.querySelector(
      "#cart-page > div > div.w-100.p-2.cart-empy"
    );
    if (kosul) {
      const element = document.querySelector(".progress-bar-container");
      if (element) {
        element.style.display = "none";
      }
    }

    const oldStepsContainer = document.querySelector("#order-nav");
    if (oldStepsContainer) {
      oldStepsContainer.style.display = "none";
    }

    const steps = document.querySelectorAll(".progress-step .circle");
    const lines = document.querySelectorAll(" .line");

    const CHECK_ICON_URL = "https://r.resimlink.com/NK6APriBY.png";

    const setCheckIcon = (circleEl) => {
      if (!circleEl) return;

      if (circleEl.dataset.checkIconAdded === "true") return;

      const img = document.createElement("img");
      img.src = CHECK_ICON_URL;
      img.alt = "check";
      img.style.width = "16px";
      img.style.height = "16px";

      circleEl.innerHTML = "";
      circleEl.appendChild(img);

      circleEl.dataset.checkIconAdded = "true";
    };

    const updateProgressSteps = () => {
      const step1Link = document.querySelector(
        "#order-nav > ul > li:nth-child(1) > a"
      );
      const step2Link = document.querySelector(
        "#order-nav > ul > li:nth-child(2) > a"
      );
      if (!steps[0]?.classList.contains("active")) {
        steps[0]?.classList.add("active");
        setCheckIcon(steps[0]);
      }

      if (step1Link?.classList.contains("active")) {
        if (
          !steps[1]?.classList.add("active") &&
          !lines[0]?.classList.add("active")
        ) {
          steps[1]?.classList.add("active");
          setCheckIcon(steps[1]);
          lines[0]?.classList.add("active");
        }
      }

      if (step2Link?.classList.contains("active")) {
        if (
          !steps[2]?.classList.add("active") &&
          !lines[1]?.classList.add("active")
        ) {
          steps[2]?.classList.add("active");
          setCheckIcon(steps[2]);
          lines[1]?.classList.add("active");
        }
      } else {
        if (
          steps[2]?.classList.contains("active") &&
          steps[2].innerHTML !== "•" &&
          lines[1]?.classList.contains("active")
        ) {
          steps[2]?.classList.remove("active");
          steps[2].innerHTML = "•";
          lines[1]?.classList.remove("active");
        }
      }
    };

    updateProgressSteps();
  };

  const progress_bar_redesign_init = () => {
    progress_bar_redesign_html();
    progress_bar_redesign_css();
    progress_bar_redesign_js();
  };

  const progress_bar_redesign_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
  };

  setInterval(() => {
    if (progress_bar_redesign_condition()) {
      progress_bar_redesign_init();
    }
  }, 500);
}
