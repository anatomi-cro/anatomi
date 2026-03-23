const kullanicilar_begeniyor_html = () => {
  const html = `
  <div class="anatomi-product-comments-container">
      <div class="anatomi-product-comments-content">
        <div class="anatomi-product-comment-short">
          <img
            src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/eyup_sabri_urunDetay_star.png"
            alt=""
          />
          <h2>Kullanıcılar beğeniyor!</h2>
          <span onclick="clickYorumlar()">Yorumları incele ></span>
        </div>

        <div class="anatomi-comments-slider">
          <div class="anatomi-comments-slider-wrapper">
            <div class="anatomi-comments-slider-item">
              <img
                src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/eyup_sabri_urunDetay_heart.png"
                alt=""
              />
              <h2>Sevilen ürün! <span></span> kişi favoriledi!</h2>
            </div>

            <div class="anatomi-comments-slider-item">
              <img
                src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/eyup_sabri_urunDetay_cart.png"
                alt=""
              />
              <h2><span></span> kişinin sepetinde,tükenmeden al!</h2>
            </div>

            <div class="anatomi-comments-slider-item">
              <img
                src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/eyup_sabri_urunDetay_heart.png"
                alt=""
              />
              <h2>Sevilen ürün! <span></span> kişi favoriledi!</h2>
            </div>

            <div class="anatomi-comments-slider-item">
              <img
                src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/eyup_sabri_urunDetay_cart.png"
                alt=""
              />
              <h2><span></span> kişinin sepetinde,tükenmeden al!</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
      `;

  const container = document.querySelector(
    "#ProductDetailMain > div.TopDet > div.RightDetail > div.TopList > div.Formline.puanVer > div > div.gc-product-rating__main"
  );
  const element = document.querySelector(".anatomi-product-comments-container");
  if (!element && container) {
    container.insertAdjacentHTML("afterend", html);
  }
};

const kullanicilar_begeniyor_css = () => {
  const style = `
      <style id="anatomi-kullanicilarBegeniyor-css">
      .anatomi-product-comments-container {
        width: 100%;
        margin-top: 15px;
      }

      .anatomi-product-comments-content {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        gap: 5px;
      }

      .anatomi-product-comment-short {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 5px;
        cursor: pointer;
      }

      .anatomi-product-comment-short img {
        width: 15px;
        height: 15px;
        object-fit: cover;
      }

      .anatomi-product-comment-short h2 {
        font-size: 12px;
        font-weight: 600;
        color: #000000;
      }

      .anatomi-product-comment-short span {
        font-size: 12px;
        font-weight: 400;
        color: #000000d1;
      }

      .anatomi-comments-slider {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        gap: 10px;
        overflow: hidden;
        position: relative;
      }

      .anatomi-comments-slider-wrapper {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        position: absolute;
        top: 0;
        transition: all 1s ease-in-out;
      }

      .anatomi-comments-slider-item {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        cursor: pointer;
      }

      .anatomi-comments-slider-item img {
        width: 15px;
        height: 15px;
        object-fit: contain;
      }

      .anatomi-comments-slider-item h2 {
        font-size: 12px;
        font-weight: 600;
        color: #000000;
        white-space: nowrap;
      }

      .gc-product-rating__favorites {
        display: none !important;}
    </style>
      `;

  const head = document.querySelector("head");
  const styleSheet = document.querySelector(
    "#anatomi-kullanicilarBegeniyor-css"
  );
  if (!styleSheet) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const kullanicilar_begeniyor_js = () => {
  function animationSlider() {
    const sliderWrapper = document.querySelector(
      ".anatomi-comments-slider-wrapper"
    );
    const slider = document.querySelector(".anatomi-comments-slider");
    const itemCount = sliderWrapper.children.length;
    const itemHeight = slider.clientHeight;
    const totalHeight = itemCount * itemHeight;
    let currentIndex = 0;

    const firstClone = sliderWrapper.children[0].cloneNode(true);
    sliderWrapper.appendChild(firstClone);

    sliderWrapper.addEventListener("transitionend", () => {
      if (currentIndex >= itemCount) {
        sliderWrapper.style.transition = "none";
        currentIndex = 0;
        sliderWrapper.style.transform = `translateY(0px)`;
      }
    });

    setInterval(() => {
      currentIndex++;
      sliderWrapper.style.transition = "transform 1s ease-in-out";
      sliderWrapper.style.transform = `translateY(-${
        currentIndex * itemHeight
      }px)`;
    }, 3000);
  }

  function clickYorumlar(e) {
    const yorumlarSection = document.querySelector("#liTabYorumlar > a");
    if (!yorumlarSection) return;

    const yorumlarTop =
      yorumlarSection.getBoundingClientRect().top + window.pageYOffset - 100;

    yorumlarSection.click();

    setTimeout(() => {
      window.scrollTo({
        top: yorumlarTop,
        behavior: "smooth",
      });
    }, 100);
  }

  function createRandomNumberForComments() {
    return Math.floor(Math.random() * 1000) + 100;
  }

  function createRandomNumberForCart() {
    return Math.floor(Math.random() * 450) + 50;
  }

  function insertRandomNumbers() {
    const heartSpans = document.querySelectorAll(
      ".anatomi-comments-slider-item:nth-child(odd) h2 span"
    );
    const cartSpans = document.querySelectorAll(
      ".anatomi-comments-slider-item:nth-child(even) h2 span"
    );

    heartSpans.forEach((span) => {
      span.textContent = createRandomNumberForComments();
    });

    cartSpans.forEach((span) => {
      span.textContent = createRandomNumberForCart();
    });
  }

  insertRandomNumbers();

  window.clickYorumlar = clickYorumlar;

  animationSlider();
};

const kullanicilar_begeniyor_init = () => {
  kullanicilar_begeniyor_html();
  kullanicilar_begeniyor_css();
  kullanicilar_begeniyor_js();
};

const kullanicilar_begeniyor_conditions = () => {
  const kullanicilar_begeniyor = !document.querySelector(
    ".anatomi-product-comments-container"
  );
  const phone = matchMedia("(max-width: 768px)").matches;
  const desktop = matchMedia("(min-width: 768px)").matches;
  return kullanicilar_begeniyor && desktop;
};

setInterval(() => {
  if (kullanicilar_begeniyor_conditions()) {
    kullanicilar_begeniyor_init();
  }
}, 50);
