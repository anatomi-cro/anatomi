const urun_d_firmalar_slider_html = () => {
  const html = `
    <div id="promoBar" class="promo-bar">
      <div class="bg-decor" id="bgDecor"></div>
    </div>
  `;
  const body = document.querySelector("#mainColumn > div:nth-child(8)");
  body.insertAdjacentHTML("beforebegin", html);
};

const urun_d_firmalar_slider_css = () => {
  const style = `
    <style>    
      .promo-bar {
        font-family: 'Inter', sans-serif;
        width: 100%;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 32px;
        font-size: 16px;
        font-weight: 500;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        border-radius: 16px;
        backdrop-filter: none;
        box-shadow:
          0 20px 40px rgba(0, 0, 0, 0.1),
          0 8px 16px rgba(0, 0, 0, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .promo-bar .promo-btn {
        margin-left: auto;
      }

      .promo-bar::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, var(--renk1), var(--renk2), var(--renk1));
        background-size: 200% 200%;
        animation: gradientShift 8s ease infinite;
        z-index: 0;
      }

      @keyframes gradientShift {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      .promo-bar .bg-decor {
        position: absolute;
        inset: 0;
        z-index: 1;
        pointer-events: none;
        opacity: 1;
      }

      .bg-decor span {
        position: absolute;
        color: rgba(255, 255, 255, 0.1);
        font-size: 20px;
        animation: floatDecor 6s ease-in-out infinite;
      }

      .bg-decor .dot {
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 50%;
        animation: pulse 3s ease-in-out infinite;
      }

      .bg-decor .line {
        width: 30px;
        height: 2px;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transform: rotate(45deg);
        animation: shimmer 4s ease-in-out infinite;
      }

      @keyframes floatDecor {
        0%,
        100% {
          transform: translateY(0px) rotate(0deg);
        }
        50% {
          transform: translateY(-10px) rotate(180deg);
        }
      }

      @keyframes pulse {
        0%,
        100% {
          opacity: 0.1;
          transform: scale(1);
        }
        50% {
          opacity: 0.3;
          transform: scale(1.2);
        }
      }

      @keyframes shimmer {
        0%,
        100% {
          opacity: 0.1;
        }
        50% {
          opacity: 0.4;
        }
      }

      @keyframes flowRight {
        0% {
          transform: translateX(-100px) translateY(0px) rotate(0deg);
        }
        50% {
          transform: translateX(50px) translateY(-20px) rotate(180deg);
        }
        100% {
          transform: translateX(100px) translateY(0px) rotate(360deg);
        }
      }

      @keyframes flowLeft {
        0% {
          transform: translateX(100px) translateY(0px) rotate(0deg);
        }
        50% {
          transform: translateX(-50px) translateY(20px) rotate(-180deg);
        }
        100% {
          transform: translateX(-100px) translateY(0px) rotate(-360deg);
        }
      }

      @keyframes flowUp {
        0% {
          transform: translateY(50px) translateX(0px) rotate(0deg);
        }
        50% {
          transform: translateY(-25px) translateX(15px) rotate(90deg);
        }
        100% {
          transform: translateY(-50px) translateX(0px) rotate(180deg);
        }
      }

      @keyframes flowDown {
        0% {
          transform: translateY(-50px) translateX(0px) rotate(0deg);
        }
        50% {
          transform: translateY(25px) translateX(-15px) rotate(-90deg);
        }
        100% {
          transform: translateY(50px) translateX(0px) rotate(-180deg);
        }
      }

      @keyframes flowCircular {
        0% {
          transform: translateX(0px) translateY(0px) rotate(0deg);
        }
        25% {
          transform: translateX(30px) translateY(-30px) rotate(90deg);
        }
        50% {
          transform: translateX(0px) translateY(-60px) rotate(180deg);
        }
        75% {
          transform: translateX(-30px) translateY(-30px) rotate(270deg);
        }
        100% {
          transform: translateX(0px) translateY(0px) rotate(360deg);
        }
      }

      @keyframes flowWave {
        0% {
          transform: translateX(0px) translateY(0px) rotate(0deg);
        }
        25% {
          transform: translateX(20px) translateY(-10px) rotate(45deg);
        }
        50% {
          transform: translateX(40px) translateY(0px) rotate(90deg);
        }
        75% {
          transform: translateX(20px) translateY(10px) rotate(135deg);
        }
        100% {
          transform: translateX(0px) translateY(0px) rotate(180deg);
        }
      }

      .promo-content {
        display: flex;
        align-items: center;
        gap: 24px;
        z-index: 2;
        position: relative;
      }

      .promo-icon-stack {
        position: relative;
        width: 60px;
        height: 60px;
        min-width: 60px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }

      .promo-icon-stack .material-icons {
        position: absolute;
        color: #fff;
        opacity: 0.9;
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        animation: float 4s ease-in-out infinite alternate;
        filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
      }

      @keyframes float {
        0% {
          transform: rotate(-8deg) translateY(0px) scale(1);
        }
        50% {
          transform: rotate(8deg) translateY(-5px) scale(1.05);
        }
        100% {
          transform: rotate(-8deg) translateY(0px) scale(1);
        }
      }

      .promo-icon-stack .bolt {
        font-size: 28px;
        top: 8px;
        left: 20px;
        transform: rotate(-15deg);
        z-index: 3;
        animation-delay: 0s;
      }

      .promo-icon-stack .lightbulb {
        font-size: 24px;
        top: 20px;
        left: 6px;
        transform: rotate(20deg);
        z-index: 2;
        animation-delay: 1s;
      }

      .promo-icon-stack .electrical {
        font-size: 22px;
        top: 32px;
        left: 24px;
        transform: rotate(-25deg);
        z-index: 1;
        animation-delay: 2s;
      }

      .promo-text {
        flex: 1;
        z-index: 2;
        font-size: 22px;
        font-weight: 500;
        line-height: 1.4;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .promo-brand {
        font-size: 24px;
        font-weight: 700;
        opacity: 0.9;
        margin-bottom: 4px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .promo-btn {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.3);
        padding: 12px 24px;
        border-radius: 12px;
        text-decoration: none;
        font-weight: 600;
        font-size: 14px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 2;
        white-space: nowrap;
        backdrop-filter: blur(10px);
        position: relative;
        overflow: hidden;
      }

      .promo-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
      }

      .promo-btn:hover::before {
        left: 100%;
      }

      .promo-btn:hover {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2));
        border-color: rgba(255, 255, 255, 0.5);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      }

      .promo-btn:active {
        transform: translateY(0);
      }

      @media (max-width: 768px) {
        .promo-bar {
          flex-direction: column;
          text-align: center;
          gap: 16px;
          padding: 24px 20px;
          align-items: center;
        }

        .promo-content {
          flex-direction: column;
          gap: 16px;
          align-items: center;
          width: 100%;
        }

        .promo-icon-stack {
          margin-bottom: 8px;
        }

        .promo-text {
          font-size: 16px;
          text-align: center;
        }

        .promo-btn {
          padding: 10px 20px;
          font-size: 13px;
          margin: 0 auto;
          margin-top: 8px;
          display: block;
          width: fit-content;
        }
      }

      @media (max-width: 480px) {
        .promo-bar {
          padding: 20px 16px;
          align-items: center;
        }

        .promo-content {
          align-items: center;
          width: 100%;
        }

        .promo-text {
          font-size: 15px;
          text-align: center;
        }

        .promo-btn {
          margin: 0 auto;
          margin-top: 8px;
          display: block;
          width: fit-content;
        }

        .promo-icon-stack {
          width: 50px;
          height: 50px;
        }

        .promo-icon-stack .bolt {
          font-size: 28px;
        }
        .promo-icon-stack .lightbulb {
          font-size: 22px;
        }
        .promo-icon-stack .electrical {
          font-size: 20px;
        }
      }
    </style>
  `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};

const urun_d_firmalar_slider_js = () => {
  const promos = [
    {
      marka: "Voltek",
      mesaj: "marka ürünler çok özel fiyatlarla elektrix.com'da!",
      renk1: "#004aad",
      renk2: "#0080ff",
      link: "https://elektrix.com/voltek",
    },
    {
      marka: "Philips",
      mesaj: "marka ürünler çok özel fiyatlarla elektrix.com'da!",
      renk1: "#003087",
      renk2: "#0066cc",
      link: "https://elektrix.com/philips",
    },
    {
      marka: "Osram",
      mesaj: "marka ürünler çok özel fiyatlarla elektrix.com'da!",
      renk1: "#ff6600",
      renk2: "#DC3C14",
      link: "https://elektrix.com/osram",
    },
    {
      marka: "Legrand",
      mesaj:
        "elektrikli araç şarj istasyonları çok özel fiyatlarla elektrix.com'da!",
      renk1: "#b30000",
      renk2: "#ff3b3b",
      link: "https://www.elektrix.com/legrand?category=431",
    },
  ];

  const randomPromo = promos[Math.floor(Math.random() * promos.length)];

  const promoBar = document.getElementById("promoBar");
  promoBar.style.setProperty("--renk1", randomPromo.renk1);
  promoBar.style.setProperty("--renk2", randomPromo.renk2);

  promoBar.innerHTML += `
    <div class="promo-content">
      <div class="promo-text">
        <div class="promo-brand">${randomPromo.marka}</div>
        ${randomPromo.mesaj}
      </div>
    </div>
    <a href="${randomPromo.link}" class="promo-btn">Ürünleri İncele</a>
  `;

  const bgDecor = document.getElementById("bgDecor");

  const lightning = document.createElement("span");
  lightning.className = "material-icons";
  lightning.innerText = "bolt";
  lightning.style.position = "absolute";
  lightning.style.top = "0%";
  lightning.style.right = "20%";
  lightning.style.fontSize = "120px";
  lightning.style.color = "rgba(255,255,255,0.15)";
  lightning.style.textShadow = "0 0 30px rgba(255,255,255,0.3)";
  lightning.style.filter = "brightness(1.2)";
  lightning.style.animation = "floatDecor 6s ease-in-out infinite";
  lightning.style.animationDelay = "1s";
  lightning.style.transform = "rotate(-15deg)";
  lightning.style.zIndex = "0";
  bgDecor.appendChild(lightning);

  const lightbulb = document.createElement("span");
  lightbulb.className = "material-icons";
  lightbulb.innerText = "lightbulb";
  lightbulb.style.position = "absolute";
  lightbulb.style.top = "20%";
  lightbulb.style.left = "60%";
  lightbulb.style.fontSize = "100px";
  lightbulb.style.color = "rgba(255,255,255,0.12)";
  lightbulb.style.textShadow = "0 0 25px rgba(255,255,255,0.25)";
  lightbulb.style.filter = "brightness(1.1)";
  lightbulb.style.animation = "floatDecor 8s ease-in-out infinite";
  lightbulb.style.animationDelay = "2s";
  lightbulb.style.transform = "rotate(-60deg)";
  lightbulb.style.zIndex = "0";
  bgDecor.appendChild(lightbulb);

  const outlet = document.createElement("span");
  outlet.className = "material-icons";
  outlet.innerText = "electrical_services";
  outlet.style.position = "absolute";
  outlet.style.top = "20%";
  outlet.style.right = "40%";
  outlet.style.fontSize = "90px";
  outlet.style.color = "rgba(255,255,255,0.1)";
  outlet.style.textShadow = "0 0 20px rgba(255,255,255,0.2)";
  outlet.style.filter = "brightness(1.0)";
  outlet.style.animation = "floatDecor 7s ease-in-out infinite";
  outlet.style.animationDelay = "3s";
  outlet.style.transform = "rotate(45deg)";
  outlet.style.zIndex = "0";
  bgDecor.appendChild(outlet);
};

const urun_d_firmalar_slider_init = () => {
  urun_d_firmalar_slider_html();
  urun_d_firmalar_slider_css();
  urun_d_firmalar_slider_js();
};

const urun_d_firmalar_slider_condition = () => {
  const device = window.innerWidth > 768;
  return device;
};

if (urun_d_firmalar_slider_condition()) {
  urun_d_firmalar_slider_init();
}
