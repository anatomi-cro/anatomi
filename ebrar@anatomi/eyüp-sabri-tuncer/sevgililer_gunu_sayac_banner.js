const sevgililer_gunu_sayac_banner_html = () => {
  const html = `
    <div class="anatomi_countdown_container">
    <div class="anatomi_countdown_title">Sevgililer Gününe Özel İndirimlerini Kaçırma!</div>
    <div class="anatomi_countdown">
    <div class="anatomi_countdown_input_container">
    <p class="anatomi_countdown_input anatomi_countdown_day"></p>
    <p class="anatomi_countdown_text">Gün</p>
    </div>
    <img src="https://r.resimlink.com/mBarQqg32Ft.png"/>
    <div class="anatomi_countdown_input_container">
    <p class="anatomi_countdown_input anatomi_countdown_hour"></p>
    <p class="anatomi_countdown_text">Saat</p>
    </div>
    <img src="https://r.resimlink.com/mBarQqg32Ft.png"/>
    <div class="anatomi_countdown_input_container">
    <p class="anatomi_countdown_input anatomi_countdown_minute"></p>
    <p class="anatomi_countdown_text">Dakika</p>
    </div>
    <img src="https://r.resimlink.com/mBarQqg32Ft.png"/>
    <div class="anatomi_countdown_input_container">
    <p class="anatomi_countdown_input anatomi_countdown_second"></p>
    <p class="anatomi_countdown_text">Saniye</p>
    </div>
    </div>
    </div>




    `;
  const targetElement = document.querySelector("#masthead");
  const element = document.querySelector(".anatomi_countdown_container");
  if (!element && targetElement) {
    targetElement.insertAdjacentHTML("afterend", html);
  }
};

const sevgililer_gunu_sayac_banner_css = () => {
  const style = `
    <style id="anatomi_countdown_css">
    .anatomi_countdown_container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #264734;
        color: #fff;
        padding: 10px 50px;
    }
    .anatomi_countdown_title{
        font-size: 20px;
        font-weight: bold;
    }
    .anatomi_countdown{
        display: flex;
        align-items: center;
        width: 50%;
        justify-content: flex-end;
        gap: 20px;
    }
    .anatomi_countdown img{
        width: 4px;
    }
    .anatomi_countdown_input_container{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
    }
    .anatomi_countdown_input{
        padding: 5px 30px;
        border: 1px solid white;
        background-color: #70867A;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 0px;
    }
    .anatomi_countdown_text{
        font-size: 14px;
        margin-bottom: 0px;
    }

    @media screen and (max-width: 1024px) {
        .anatomi_countdown_title{
            width: 30%;
        }
        .anatomi_countdown{
            gap: 10px;
        }
    }
    @media screen and (max-width: 768px) {
        .anatomi_countdown_container{
            padding: 10px;
        }
        .anatomi_countdown_title{
            font-size: 14px;
            width: 50%;
        }
        .anatomi_countdown{
            gap: 5px;
        }
        .anatomi_countdown_input{
            padding: 5px 10px;
            font-size: 12px;
        }
        .anatomi_countdown img{
            width: 2px;
        }
        .anatomi_countdown_text{
            font-size: 12px;
        }
    }

    </style>
    `;
  const head = document.querySelector("head");
  const css = document.querySelector("#anatomi_countdown_css");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const sevgililer_gunu_sayac_banner_js = () => {
  const dayInput = document.querySelector(".anatomi_countdown_day");
  const hourInput = document.querySelector(".anatomi_countdown_hour");
  const minuteInput = document.querySelector(".anatomi_countdown_minute");
  const secondInput = document.querySelector(".anatomi_countdown_second");

  if (!dayInput || !hourInput || !minuteInput || !secondInput) return;

  const getTargetDate = () => {
    const now = new Date();
    let year = now.getFullYear();

    let target = new Date(year, 1, 14, 23, 59, 59);

    if (now > target) {
      target = new Date(year + 1, 1, 14, 23, 59, 59);
    }

    return target;
  };

  const targetDate = getTargetDate();

  const updateCountdown = () => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (
      dayInput.textContent !== days.toString().padStart(2, "0") ||
      hourInput.textContent !== hours.toString().padStart(2, "0") ||
      minuteInput.textContent !== minutes.toString().padStart(2, "0") ||
      secondInput.textContent !== seconds.toString().padStart(2, "0")
    ) {
      dayInput.textContent = days.toString().padStart(2, "0");
      hourInput.textContent = hours.toString().padStart(2, "0");
      minuteInput.textContent = minutes.toString().padStart(2, "0");
      secondInput.textContent = seconds.toString().padStart(2, "0");
    }
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);
};

const sevgililer_gunu_sayac_banner_init = () => {
  sevgililer_gunu_sayac_banner_html();
  sevgililer_gunu_sayac_banner_css();
  sevgililer_gunu_sayac_banner_js();
};

const sevgililer_gunu_sayac_banner_condition = () => {
  return true;
};

setInterval(() => {
  if (sevgililer_gunu_sayac_banner_condition()) {
    sevgililer_gunu_sayac_banner_init();
  }
}, 50);
