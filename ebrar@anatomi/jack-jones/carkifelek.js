const carkifelek_html = () => {
  const html = `
  <div class="anatomi-carkifelek">
      <div class="anatomi_campaignbg_1">
        <h1>JACK&JONES FIRSATLARINI YAKALA</h1>
        <h1 class="carkifelek-desc desc-active">
        Kod’ların geçerlilik süresi bir haftadır, diğer kampanyalarla birleştirilemez.
        </h1>
        <div class="anatomiCarkifelek-close">
          <img
            src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/jj-carkifelek-close.png"
            alt=""
          />
        </div>
      </div>
      <div class="anatomi_campaignbg_2"></div>
      <div class="anatomi-anatomiWheel-container">
        <div class="anatomiWheel" id="anatomiWheel">
          <div
            class="anatomiWheelLabel"
            style="
              transform: rotate(-55deg) translate(80px, -54px);
              transform-origin: center;
            "
          >
            <h4 class="anatomi-white">1000 TL ve Üzeri %10</h4>
          </div>
          <div
            class="anatomiWheelLabel"
            style="
              transform: rotate(25deg) translate(40px, 15px);
              transform-origin: center;
            "
          >
            <h4 class="anatomi-white">1000 TL ve Üzeri %20</h4>
          </div>
          <div
            class="anatomiWheelLabel"
            style="
              transform: rotate(90deg) translate(80px, 85px);
              transform-origin: center;
            "
          >
            <h4 class="anatomi-white">1500 TL ve Üzeri 250 TL</h4>
          </div>
          <div
            class="anatomiWheelLabel"
            style="
              transform: rotate(-200deg) translate(165px, 45px);
              transform-origin: center;
            "
          >
            <h4 class="anatomi-white">2500 TL ve Üzeri 350 TL</h4>
          </div>
          <div
            class="anatomiWheelLabel"
            style="
              transform: rotate(-130deg) translate(150px, -30px);
              transform-origin: center;
            "
          >
            <h4 class="anatomi-black">1000 TL ve Üzeri %30</h4>
          </div>
        </div>
        <div class="anatomiPointer">▼</div>
        <div class="anatomiPointer_bg"></div>
        <div class="anatomiWheelBorder-1">
          <img src="https://i.hizliresim.com/tsnanbo.png" alt="" />
        </div>
      </div>
      <div class="anatomiCarkifelek-bottom">
        <div id="anatomiResult"></div>
        <button id="anatomiSpin" class="spin-active">Çevir kazan</button>
        <div class="anatomiCarkifelek-Result">
          <button id="anatomiCopy">Kodu Kopyala</button>
          <div id="anatomiCoupon">ANATOMI1453</div>
        </div>
      </div>
    </div>
      `;
  const container = document.querySelector("body");
  const element = document.querySelector(".anatomi-carkifelek");
  if (!element && container) {
    container.insertAdjacentHTML("beforeend", html);
  }
};
const carkifelek_css = () => {
  const style = `
   <style id="anatomiCarkifelek-css">
      .anatomi-carkifelek {
      position: fixed;
        top: 0;
        left: 0;
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        overflow: hidden;
        z-index: 99999999;
      }
      .anatomi-carkifelek_active {
        display: flex;
      }
      .anatomi-anatomiWheel-container {
        position: relative;
        width: 75%;
        height: 75vw;
        margin: auto;
        margin-bottom: 25vh;
      }
      .anatomiWheel {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: conic-gradient(
          #000 0% 20%,
          #555555 0% 40%,
          #00208F 40% 60%,
          #a1a1a1 60% 80%,
          #fff 80% 100%
        );
        transition: transform 4s cubic-bezier(0.33, 1, 0.68, 1);
        box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.5);
        z-index: 11;
      }
      .anatomiPointer {
        position: absolute;
        top: 44%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(180deg);
        font-size: 50px;
        color: #000;
        z-index: 11;
      }
      .anatomiPointer_bg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40px;
        height: 40px;
        background-color: #d9d9d9;
        border-radius: 50%;
        z-index: 11;
        box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.5);
      }
      .anatomiWheelLabel {
        position: absolute;
        width: 50%;
        left: 50%;
        top: 50%;
        transform-origin: left center;
        font-weight: bold;
        font-size: 16px;
        width: fit-content;
        height: fit-content;
      }
      .anatomiWheelLabel h4 {
        width: fit-content;
        height: fit-content;
        font-size: 14px;
        font-weight: 400;
        text-transform: capitalize;
        width: 75%;
        text-align: center;
        margin: 0;
      }
      .anatomi-black {
        color: #000;
      }
      .anatomi-white {
        color: #fff;
      } 
      #anatomiSpin {
      display:none;
      width: 80%;
      height: 55px;
      background-color: #000;
      color: #fff;
      border: none;
      margin: 0;
      padding: 0;
      text-align: center;
      font-size: 16px;
      text-transform: uppercase;
    font-weight: 700;
      cursor: pointer;
      }
       #anatomiSpin.spin-active {
        display: block;
        }
      #anatomiResult {
        font-size: 16px;
        font-weight: 400;
        color: #000;
        text-align: center;
      }
      .anatomiWheelBorder-2 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 110%;
        height: 110%;
        border-radius: 50%;
        border: 15px solid #fff;
      }
      .anatomiWheelBorder-1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 125%;
        height: 125%;
        z-index: 10;
      }
      .anatomiWheelBorder-1 img {
        width: 100%;
        height: 100%;
      }
      .anatomi_campaignbg_1 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        z-index: -2;
      }
            .anatomi_campaignbg_1 h1 {
        color: #fff;
        font-size: 22px;
        text-align: center;
        margin-top: 20px;
        text-transform: uppercase;
        margin: 0 auto;
        margin-top: 30px;
        width: 60%;
        font-weight: 500;
      }
      .anatomi_campaignbg_1 h1:nth-child(2) {
        font-size: 14px;
        margin-top: 10px;
        text-transform: none;
        width: 90%;
      }
      .anatomi_campaignbg_2 {
        position: absolute;
        top: 30%;
        width: 800px;
        height: 800px;
        background-color: #d9d9d9;
        box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        z-index: -1;
      }
      .anatomiCarkifelek-Result {
        display: none;
        position: relative;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: fit-content;
        flex-direction: row-reverse;
      }
      .anatomiCarkifelek-Result.result-active {
        display: flex;
      }
      .anatomiCarkifelek-bottom {
        position: absolute;
        top: 75%;
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 40px;
      }
      #anatomiCoupon {
          font-size: 16px;
    border: 1px dashed #000;
    width: 40%;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
      }
      #anatomiCopy {
        width: 40%;
        height: 55px;
        background-color: #000;
        color: #fff;
        border: none;
        margin: 0;
        padding: 0;
        text-align: center;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 700;
        cursor: pointer;
      }
      .anatomiCarkifelek-close {
        position: absolute;
        top: 3%;
        right: 3%;
        width: 25px;
        height: 25px;
        cursor: pointer;
        z-index: 99999999;
        }
        .anatomiCarkifelek-close img {
        width: 100%;
        height: 100%;
        }
        .carkifelek-desc {
        display: none;}
        .desc-active {
        display: block;}
      @media screen and (max-width: 320px) {
        .anatomi-anatomiWheel-container {
    margin-bottom: 19vh;
    width: 70%;
    height: 70vw;
        }
        .anatomiWheelLabel h4 {
        font-size: 12px;
        width: 45%;
        }
        #anatomiSpin {
        font-size: 12px;
        height:40px;}
        .anatomi_campaignbg_2 {
          position: absolute;
          top: 30%;
          width: 800px;
          height: 800px;
          background-color: #d9d9d9;
          box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          z-index: -1;
        }
        .anatomi_campaignbg_1 h1 {
          color: #fff;
          font-size: 18px;
          text-align: center;
          margin-top: 20px;
        }
        .anatomi_campaignbg_1 h1:nth-child(2) {
          font-size: 14px;
          margin-top: 10px;
        }
        .anatomiCarkifelek-close {
        width: 20px;
        height: 20px;
        }
        .anatomiCarkifelek-bottom {
        gap: 30px;
        margin-top: 40px;}
      }
      .felek-result {
      margin-bottom: 30vh;
      }
    </style>
      `;
  const head = document.querySelector("head");
  const styleSheet = document.querySelector("#anatomiCarkifelek-css");
  if (!styleSheet) {
    head.insertAdjacentHTML("beforeend", style);
  }
};
const carkifelek_js = () => {
  let spinningInterval;
  const spinDuration = 2000;
  const anatomiWheel = document.getElementById("anatomiWheel");
  const spinBtn = document.getElementById("anatomiSpin");
  const resultDisplay = document.getElementById("anatomiResult");
  const sections = [
    {
      anatomiWheelLabel: "1000 TL ve üzerine SEPETTE %10",
      probability: 41,
      angle: -40,
      coupon: "CARKIFELEK10",
    },
    {
      anatomiWheelLabel: "1000 TL ve üzerine SEPETTE %20",
      probability: 40,
      angle: -100,
      coupon: "CARKIFELEK20",
    },
    {
      anatomiWheelLabel: "1500 TL ve üzerine SEPETTE 250 TL",
      probability: 14,
      angle: -180,
      coupon: "CARKIFELEK250",
    },
    {
      anatomiWheelLabel: "2500 TL ve üzerine SEPETTE 350 TL",
      probability: 2,
      angle: -230,
      coupon: "CARKIFELEK350",
    },
    {
      anatomiWheelLabel: "1000 TL ve üzerine SEPETTE %30",
      probability: 2,
      angle: -280,
      coupon: "CARKIFELEK30",
    },
  ];
  function getRandomSection() {
    const totalProbability = sections.reduce(
      (acc, section) => acc + section.probability,
      0
    );
    const randomNum = Math.random() * totalProbability;
    let cumulativeProbability = 0;
    for (const section of sections) {
      cumulativeProbability += section.probability;
      if (randomNum < cumulativeProbability) {
        return section;
      }
    }
  }
  spinBtn.addEventListener("click", () => {
    spinBtn.disabled = true;
    resultDisplay.textContent = "";
    let currentRotation = 0;
    spinningInterval = setInterval(() => {
      currentRotation = (currentRotation + 20) % 360;
      anatomiWheel.style.transition = "none";
      anatomiWheel.style.transform = `rotate(${currentRotation}deg)`;
    }, 20);
    setTimeout(() => {
      clearInterval(spinningInterval);
      const selectedSection = getRandomSection();
      const extraSpins = 5;
      const finalRotation = 360 * extraSpins + selectedSection.angle;
      anatomiWheel.style.transition =
        "transform 4s cubic-bezier(0.33, 1, 0.68, 1)";
      anatomiWheel.style.transform = `rotate(${finalRotation}deg)`;
      setTimeout(() => {
        resultDisplay.innerHTML = `TEBRİKLER!<br>${selectedSection.anatomiWheelLabel} İNDİRİM kazandın!`;
        spinBtn.disabled = false;
        const container = document.querySelector(".anatomi-anatomiWheel-container");
        container.classList.add("felek-result")
        const desc = document.querySelector(".carkifelek-desc");
        const resultContainer = document.querySelector(
          ".anatomiCarkifelek-Result"
        );
        resultContainer.classList.add("result-active");
        const copyBtn = document.getElementById("anatomiCopy");
        const couponCode = document.getElementById("anatomiCoupon");
        couponCode.innerHTML = `${selectedSection.coupon}`;
        copyBtn.addEventListener("click", () => {
          const couponText = couponCode.textContent;
          navigator.clipboard.writeText(couponText).then(() => {
            copyBtn.textContent = "Kopyalandı!";
          });
        });
        couponCode.addEventListener("click", () => {
          const couponText = couponCode.textContent;
          navigator.clipboard.writeText(couponText).then(() => {
            copyBtn.textContent = "Kopyalandı!";
          });
        });
        spinBtn.classList.remove("spin-active");
        const checkStorage = localStorage.getItem("achievedCoupon");
        if (checkStorage) {
          localStorage.setItem("achievedCoupon", selectedSection.coupon);
        } else {
          localStorage.setItem("achievedCoupon", selectedSection.coupon);
        }
      }, 4000);
    }, spinDuration);
  });
  function closeCarkifelek() {
    const carkifelek = document.querySelector(".anatomi-carkifelek");
    const desc = document.querySelector(".carkifelek-desc")
    const container = document.querySelector(".anatomi-anatomiWheel-container");
    if (carkifelek) {
      carkifelek.classList.remove("anatomi-carkifelek_active");
      container.classList.remove("felek-result")
    }
    const style = document.querySelector("#anatomi-overflow");
    if(style){
      style.remove();
    }
  }
  const closeBtn = document.querySelector(".anatomiCarkifelek-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeCarkifelek);
  }
  function carkifelekActive() {
    const wheel = document.querySelector(".anatomi-carkifelek");
    if (wheel) {
      wheel.classList.add("anatomi-carkifelek_active");
      localStorage.setItem("anatomi_carkifelek", "true");
      const now = Date.now();
      localStorage.setItem("carkifelekValidateTime", now.toString());
      const style = `
      <style id="anatomi-overflow">
      html{
      overflow: hidden !important;}
      </style>
      `;
      const head = document.querySelector("head");
      head.insertAdjacentHTML("beforeend", style);
    }
  }
  function carkifelekTime() {
    setInterval(() => {
      const VALIDATE_TIME = 7 * 24 * 60 * 60 * 1000;
      const ACTIVE_KEY = "anatomi-carkifelek-active";
      const container = document.querySelector(".anatomi-carkifelek");
      const STORAGE_KEY = localStorage.getItem("anatomi_carkifelek");
      if (!container) return;
      if (!STORAGE_KEY) {
        carkifelekActive();
      } else {
        const STORAGE_TIME = localStorage.getItem("carkifelekValidateTime");
        if (!STORAGE_TIME) return;
        const now = Date.now();
        const timePassed = now - parseInt(STORAGE_TIME, 10);
        if (timePassed >= VALIDATE_TIME) {
          carkifelekActive();
        }
      }
    }, 1000);
  }
  function appliedCoupon() {
    const STORAGE_KEY = localStorage.getItem("anatomi_carkifelek");
    if (!STORAGE_KEY) return;
    const coupons = [
      "CARKIFELEK10",
      "CARKIFELEK20",
      "CARKIFELEK30",
      "CARKIFELEK250",
      "CARKIFELEK350",
    ];
    const cartContainer = document.querySelector(".flyout--basket");
    if (!cartContainer) return;
    const promotionButton = document.querySelector(".promotion-panels__button");
    if (!promotionButton) return;
    const checkCode = document.querySelectorAll(".promo-code-overview__code");
    if (!checkCode) return;
    let alreadyApplied = false;
    checkCode.forEach((item) => {
      if (
        coupons.find(
          (element) =>
            element.trim().toUpperCase() === item.textContent.trim().toUpperCase
        )
      ) {
        alreadyApplied = true;
      } else {
        alreadyApplied = false;
      }
    });
    if (alreadyApplied) return;
    const panelObserver = new MutationObserver((mutations, obs) => {
      if (alreadyApplied) {
        obs.disconnect();
        localStorage.setItem("carkifelekAppliedCoupon", true);
      } else {
        localStorage.removeItem("carkifelekAppliedCoupon");
      }
    });
    panelObserver.observe(document.body, { childList: true, subtree: true });
  }
  function preventCoupon() {
    const coupons = [
      "CARKIFELEK10",
      "CARKIFELEK20",
      "CARKIFELEK30",
      "CARKIFELEK250",
      "CARKIFELEK350",
    ];
    const panelObserver = new MutationObserver((mutations, obs) => {
      const input = document.querySelector("#promo-code-static__input");
      const btn = document.querySelector(
        "#__layout > div > div:nth-child(6) > div:nth-child(2) > div > article > article > div.basket-content__footer > section > section > article.promotion-panel__content > form > button"
      );
      const STORAGE_KEY = localStorage.getItem("carkifelekAppliedCoupon");
      if (input && btn && !STORAGE_KEY) {
        const CHECK_STORAGE = localStorage.getItem("achievedCoupon");
        if (CHECK_STORAGE) {
          coupons.find((element) => {
            if (element.trim().toUpperCase() === CHECK_STORAGE) {
              const index = coupons.findIndex(
                (element) =>
                  element.trim().toUpperCase() === CHECK_STORAGE.toUpperCase()
              );
              if (index !== -1) {
                coupons.splice(index, 1);
              }
            }
          });
        }
        obs.disconnect();
        input.addEventListener("input", () => {
          const code = input.value.trim().toUpperCase();
          const isValid = coupons.some(
            (element) => element.trim().toUpperCase() === code
          );
          if (isValid) {
            btn.disabled = true;
          } else {
            btn.disabled = false;
          }
        });
        input.addEventListener("keydown", (e) => {
          const code = input.value.trim().toUpperCase();
          const isValid = coupons.some(
            (element) => element.trim().toUpperCase() === code
          );
          if (isValid) {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }
        });
      }
    });
    panelObserver.observe(document.body, { childList: true, subtree: true });
  }
  carkifelekTime();
  appliedCoupon();
  preventCoupon();
};
const carkifelek_init = () => {
  carkifelek_html();
  carkifelek_css();
  carkifelek_js();
};
const carkifelek_conditions = () => {
  const carkifelek = !document.querySelector(".anatomi-carkifelek");
  const phone = matchMedia("(max-width: 768px)").matches;
  return carkifelek && phone;
};
if (carkifelek_conditions()) {
  carkifelek_init();
}
