const progress_bar_rd_html = () => {
  const html = `
    <div class="anatomi-progress-container">
      <div class="anatomi-progress-bar">
        <div class="anatomi-step active">
          <div class="anatomi-circle">1</div>
        </div>
        <div class="anatomi-line"></div>
        <div class="anatomi-step">
          <div class="anatomi-circle">2</div>
        </div>
        <div class="anatomi-line"></div>
        <div class="anatomi-step">
          <div class="anatomi-circle">3</div>
        </div>
        <div class="anatomi-line"></div>
        <div class="anatomi-step">
          <div class="anatomi-circle">4</div>
        </div>
      </div>
    </div>
    `;

  const existing = document.querySelector(".anatomi-progress-container");
  if (!existing) {
    const content = document.querySelector("#content");
    content.insertAdjacentHTML("beforebegin", html);
  }
};

const progress_bar_rd_css = () => {
  const style = `
      <style id="anatomi_progress_bar_rd_css">    
      #frmRandevu{
        height: fit-content !important;
      }
        .anatomi-progress-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 40px 0;
        }

        .anatomi-progress-bar {
          display: flex;
          align-items: center;
          position: relative;
        }

        .anatomi-step {
          display: flex !important;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .anatomi-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: transparent;
          border: 1px solid #e0e0e0;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          color: #e0e0e0;
          z-index: 2;
          transition: all 0.3s ease;
          font-size: 16px;
          position: relative;
        }

        .anatomi-step.active .anatomi-circle {
          background-color: #4CAF50;
          color: transparent;
          transform: scale(1.1);
        }

        .anatomi-step.active .anatomi-circle::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 20px; 
        height: 16px;
        background-image: url('https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/carglass-progress-bar-tick-icon.png');
        background-size: contain;
        background-repeat: no-repeat;
        }

        .anatomi-line {
          width: 60px;
          height: 1px;
          background-color: #e0e0e0;
          position: relative;
          top: -2px;
          z-index: 1;
          transition: all 0.3s ease;
          display: flex !important;
        }

        .anatomi-step.active + .anatomi-line {
          background-color: #4CAF50;
        }
        .steps h1 {
          color: #d95b44 !important;
          font-size: 32px !important;
          font-style: normal;
          text-transform: uppercase;
        }
        .steps h1 small {
          text-transform: capitalize !important;
          color: #000 !important;
          height: 20px;
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }

      </style>
    `;

  const head = document.querySelector("head");
  const existing = document.querySelector("#anatomi_progress_bar_rd_css");
  if (!existing) head.insertAdjacentHTML("beforeend", style);
};

const progress_bar_rd_js = () => {
  const bar = document.querySelector(
    "#header-btm > div > div > div > div > div > div > div.bar"
  );
  if (!bar) return;

  const steps = document.querySelectorAll(".anatomi-step");

  const updateProgress = () => {
    const widthValue = parseFloat(bar.style.width.replace("%", "")) || 0;

    steps.forEach((step) => step.classList.remove("active"));
    if (widthValue >= 1) steps[0].classList.add("active");
    if (widthValue >= 27) steps[1].classList.add("active");
    if (widthValue >= 73) steps[2].classList.add("active");
    if (widthValue >= 91) steps[3].classList.add("active");
  };

  updateProgress();
  const barObserver = new MutationObserver(updateProgress);
  barObserver.observe(bar, { attributes: true, attributeFilter: ["style"] });

  const header = document.querySelector("#header-btm");
  if (header) header.style.display = "none";

  const moveProgressBar = () => {
    const progressContainer = document.querySelector(
      ".anatomi-progress-container"
    );
    if (!progressContainer) return;

    const visibleStep = Array.from(document.querySelectorAll(".steps")).find(
      (step) => getComputedStyle(step).display === "block"
    );

    if (visibleStep) {
      const isStep1 = visibleStep.classList.contains("step1");

      if (isStep1) {
        const rowDiv = visibleStep.querySelector(".row");
        if (rowDiv && rowDiv.previousElementSibling !== progressContainer) {
          rowDiv.insertAdjacentElement("beforebegin", progressContainer);
        }
      } else {
        const h1 = visibleStep.querySelector("h1");
        if (h1 && h1.nextElementSibling !== progressContainer) {
          h1.insertAdjacentElement("afterend", progressContainer);
        }
      }
    }
  };

  moveProgressBar();

  const stepObserver = new MutationObserver(moveProgressBar);
  document.querySelectorAll(".steps").forEach((step) => {
    stepObserver.observe(step, {
      attributes: true,
      attributeFilter: ["style"],
    });
  });
};

const progress_bar_rd_init = () => {
  progress_bar_rd_html();
  progress_bar_rd_css();
  progress_bar_rd_js();
};

const progress_bar_rd_condition = () => {
  const device = window.innerWidth > 768;
  return device;
};

const interval = setInterval(() => {
  if (progress_bar_rd_condition()) {
    progress_bar_rd_init();
    clearInterval(interval);
  }
}, 200);
