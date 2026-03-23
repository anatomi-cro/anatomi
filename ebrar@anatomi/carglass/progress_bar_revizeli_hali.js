const progress_bar_rd_html = () => {};

const progress_bar_rd_css = () => {
  const style = `
      <style id="anatomi_progress_bar_rd_css">    
      .anatomi-progress-container {
              width: 100% !important;
    margin: 0px !important;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    flex-direction: column !important;
    display: flex;
      }
    .anatomi-progress-container label {
      display: none !important;
    }
    .anatomi-progress-container div:not(.anatomi-progress-icon) {
          margin: 0px;
    width: 40%;
    height: 10px !important;
    }
     .anatomi-progress-container div div.bar {
          background-color: #58B158 !important;
          background-image: none !important;
          height: 10px !important;
          color: #58B158 !important;
          text-shadow: none !important;
          display: block !important;
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
    .anatomi-progress-text {
      font-size: 18px !important;
    }
    
 #frmRandevu{
 height: fit-content !important;
} 

     </style>
    `;

  const head = document.querySelector("head");
  const existing = document.querySelector("#anatomi_progress_bar_rd_css");
  if (!existing) head.insertAdjacentHTML("beforeend", style);
};

let progressContainer = null;

const progress_bar_rd_js = () => {
  const header = document.querySelector("#header-btm");
  if (header) header.style.display = "none";

  const moveProgressBar = () => {
    if (!progressContainer) {
      progressContainer = document.querySelector(
        "#header-btm > div > div > div > div > div"
      );
    }
    progressContainer.classList.add("anatomi-progress-container");

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

  const addProgressText = () => {
    if (!progressContainer) return;

    const bar = progressContainer.querySelector(".bar");
    if (!bar) return;

    const value = bar.textContent.trim();

    let textP = progressContainer.querySelector(".anatomi-progress-text");
    if (!textP) {
      textP = document.createElement("p");
      textP.className = "anatomi-progress-text";
      textP.style.textAlign = "center";
      textP.style.marginTop = "10px";
      progressContainer.insertAdjacentElement("afterbegin", textP);
    }

    textP.textContent = "Randevu oluşturma süreci ilerliyor… " + value;
  };

  moveProgressBar();
  addProgressText();

  const bar = progressContainer.querySelector(".bar");

  if (bar && !bar.dataset.observed) {
    bar.dataset.observed = "true";

    const barObserver = new MutationObserver(() => {
      addProgressText();
    });

    barObserver.observe(bar, {
      characterData: true,
      childList: true,
      subtree: true,
    });
  }

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
