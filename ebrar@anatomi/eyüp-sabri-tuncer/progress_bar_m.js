const progress_bar_m_html = () => {
     const html = `
      <div class="anatomi-progress-container">
      <div class="anatomi-progress-top-texts">
        <p class="anatomi-progress-percentage">0%</p>
        <p class="anatomi-progress-label">Sepet</p>
      </div>
      <div class="anatomi-progress-bar">
        <div class="anatomi-progress-fill">
          <img 
            src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/eyu%CC%88p-sabri-tuncer-progress-icon.png" 
            alt="Progress Icon" 
            class="anatomi-progress-icon" 
          />
        </div>
      </div>
    </div>
    `;
     setInterval(() => {
    const container = document.querySelector(".header");
    const container2 = document.querySelector(".checkout-header");
    const element = !document.querySelector(".anatomi-progress-container");
    if (element && container) {
      container.insertAdjacentHTML("afterend", html);
    } else if (element && container2) {
      container2.insertAdjacentHTML("afterend", html);
    }
  }, 100);
};


const progress_bar_m_css = () => {
    const style = `
    <style>
         .anatomi-progress-container {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
      }

      .anatomi-progress-top-texts {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 5px;
        font-size: 14px;
        font-weight: 500;
      }
     .anatomi-progress-percentage {
        font-size: 18px;
        font-weight: bold;
      }
        .anatomi-progress-label {
            color: #6F6F6F;
            font-size: 12px;
      }

      .anatomi-progress-bar {
        width: 100%;
        height: 20px;
        background-color: #E0E0E0;
        border-radius: 10px;
        position: relative;
      }

      .anatomi-progress-fill {
        height: 100%;
        background-color: #164734;
        border-radius: 10px;
        position: relative;
        transition: width 0.3s ease-in-out;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }

      .anatomi-progress-icon {
        width: 25px;
        height: 25px;
        margin-right: -12px;
      }
    </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const progress_bar_m_js = () => {
  function sepet_progress() {
    const handle_check_url = setInterval(() => {
      const url = window.location.href;
      const fillElement = document.querySelector(".anatomi-progress-fill");
      const percentageText = document.querySelector(".anatomi-progress-percentage");

      if (!fillElement || !percentageText) return;

      let width = "0%";

      if (url.includes("checkout") && !url.includes("payment")) {
        width = "30%";
      } else if (url.includes("payment") && !url.includes("id")) {
        width = "60%";
      } else if (url.includes("payment") && url.includes("id")) {
        width = "90%";
      }else {
        clearInterval(handle_check_url);
      }

      fillElement.style.width = width;
      percentageText.textContent = width;

    }, 100);
  }

  sepet_progress();
};


const progress_bar_m_init = () => {
    progress_bar_m_html();
    progress_bar_m_css();
    progress_bar_m_js();
};

const progress_bar_m_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

if (progress_bar_m_condition()) {
    progress_bar_m_init();
}
