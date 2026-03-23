const urun_detay_avantajlar_html = () => {
  const html = `
    <div id="anatomi_slider_root" class="anatomi_slider">
  <div class="anatomi_slider_container">
    <div class="anatomi_slide active">
      <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/sigortaladim-trafik-avantajlar-slide-1.png" alt="Resim 1">
      <p>“Bilgilerini gir, 20’den fazla sigorta şirketinden gelen teklifleri karşılaştır!”</p>
    </div>
    <div class="anatomi_slide">
      <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/sigortaladim-trafik-avantajlar-slide-2.png" alt="Resim 2">
      <p>Trafik Sigortası yaptıran herkese ücretsiz çekici hizmeti.</p>
    </div>
     <div class="anatomi_slide">
      <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/sigortaladim-trafik-avantajlar-slide-3.png" alt="Resim 3">
      <p>Trafik Sigortası satın alana ücretsiz egzoz gazı emisyon ölçümü fırsatı.</p>
    </div>
    <div class="anatomi_slide">
    <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/sigortaladim-kasko-avantajlar-slide-4.png" alt="Resim 3">
    <p>Trafik Sigortası satın alanlara Migros’tan hediye çeki fırsatı.</p>
    </div>
     <div class="anatomi_slide">
      <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/sigortaladim-kasko-avantajlar-slide-5.png" alt="Resim 5">
      <p>Trafik Sigortası satın alanlara Opet’ten hediye çeki fırsatı.</p>

    </div>
  </div>
  <div class="anatomi_slider_buttons">
    <button class="anatomi_prev"><img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/qnb-form-right.png"></img></button>
    <button class="anatomi_next"><img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/qnb-form-left.png"></img></button>
  </div>
</div>
    `;

  const targetElement = document.querySelector("#banner > div > div")
  if (targetElement) {
    targetElement.insertAdjacentHTML("beforeend", html);
  }

};

const urun_detay_avantajlar_css = () => {
    const style = `
      <style>    

    .anatomi_slider {
     position: relative;
    width: 50%;
    overflow: hidden;
    border-radius: 12px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.anatomi_slider_container {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.anatomi_slide {
    min-width: 100%;
    transition: opacity 0.5s ease;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0px;
    box-sizing: border-box;
    border-radius: 8px;
    width: fit-content;
    gap: 30px;
    background-color: #efefef;
    height: 410px;
    padding: 25px 0px;
}
.anatomi_vertical {
    background-color: #DEDFDF;
}
    .gradient-bottom, .gradient-top {
    height: 50px;
    width: 385px;
    border-radius: 10px;
    z-index: 2;
    position: absolute;

  }
.gradient-top {
        background-image: linear-gradient(180deg, #DEDFDF, rgba(245,247,249,0));
        top: 16px;

}
        .gradient-bottom {
        bottom: 105px;
        background-image: linear-gradient(1turn, #DEDFDF, rgba(245,247,249,0));
        }
     .vertical_slider {
    position: relative;
    height: 270px;
    overflow: hidden;
    margin-top: -50px;

      }
    .anatomi_slide p {
 font-weight: bold;
 width: 90%;
 font-size: 22px;
}
.active p {
    position: relative;
    top: -80px;
}

    .vertical_slider_explanation {
        margin-top: 10px;
    }
    .vertical_slider_explanation p {
               font-weight: 500;
    color: black;
    font-size: 20px;
    }

      .vertical_slider_container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .vertical_slider_container img {
        width: 380px;
         height: 90px;  
        object-fit: cover;
      }

    
.anatomi_slide img {
    max-width: 80%;                 
  object-fit: contain;     
  border-radius: 8px;
}

    .anatomi_slider_buttons {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin: 15px 0;
      position: relative;
    top: -55px;
    height: 0px;
}

.anatomi_prev, .anatomi_next {
  background: none;
  border: none;
  padding: 0px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 20px;
  transition: background 0.3s ease;
}

.anatomi_prev img , .anatomi_next img{
  height: 25px;
}

.anatomi_prev { left: 10px; }
.anatomi_next { right: 10px; }

#teklif-al {
  flex-direction: column;

}
.anatomi_form_title {
  font-weight: 500;
    color: black;
    font-size: 22px;
    margin: 0px;
    padding: 0px;
    width: 90%;
  }
  #banner {
    background-color: #ffffff !important;
    margin-top: 50px;
  }
  #banner > div > ul{
    display: none !important;
  }

  @media screen and (max-width: 1200px) {
  
  .vertical_slider{
    margin-top: -32px;
    height: 230px;
  }
  .gradient-top {
        top: 0px;
  }
  .gradient-bottom {
        bottom: 80px;  }
.anatomi_form_title {
  width: 90%;
  }
}

      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};


const urun_detay_avantajlar_js = () => {
  const orjAvantajlar = document.querySelector("#banner > div > div > div.col-6");
  if (orjAvantajlar) {
    orjAvantajlar.style.display = "none";
  }

  const formContainer = document.querySelector("#teklif-al");
  let formTitle = document.querySelector(".anatomi_form_title");
  if (!formTitle) {
    const formTitle = document.createElement("p");
    formTitle.classList.add("anatomi_form_title");
    formTitle.innerText = "Trafik sigortası fiyat tekliflerini karşılaştır. Avantajları kaçırma!";
    formContainer.insertAdjacentElement("afterbegin", formTitle);
  }

  const generateSlider = () => {


    const slides = document.querySelectorAll(".anatomi_slide");
    const prevBtn = document.querySelector(".anatomi_prev");
    const nextBtn = document.querySelector(".anatomi_next");
    const sliderContainer = document.querySelector(".anatomi_slider_container");

    let currentIndex = 0;
    let autoSlideInterval;

    function showSlide(index) {
      if (index < 0) {
        currentIndex = slides.length - 1;
      } else if (index >= slides.length) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }

      const offset = -currentIndex * 100;
      sliderContainer.style.transform = `translateX(${offset}%)`;

      prevBtn.style.pointerEvents = currentIndex === 0 ? "none" : "all";
      prevBtn.disabled = currentIndex === 0 ? true : false;
      prevBtn.style.opacity = currentIndex === 0 ? "0.5" : "1";

      nextBtn.style.pointerEvents = currentIndex === slides.length - 1 ? "none" : "all";
      nextBtn.disabled = currentIndex === slides.length - 1 ? true : false;
      nextBtn.style.opacity = currentIndex === slides.length - 1 ? "0.5" : "1";
    }

    prevBtn.addEventListener("click", () => {
      showSlide(currentIndex - 1);
      resetAutoSlide();
    });
    nextBtn.addEventListener("click", () => {
      showSlide(currentIndex + 1);
      resetAutoSlide();
    });

    function autoSlide() {
      autoSlideInterval = setInterval(() => {
        showSlide(currentIndex + 1);
      }, 5000);
    }

    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      autoSlide();
    }

    showSlide(currentIndex);
    autoSlide();
  }

  setTimeout(() => {
    generateSlider();
  }, 1000)


  setTimeout(() => {
    const slider = document.querySelector(".vertical_slider_container");
    const slideHeight = 90;
    const slides = Array.from(slider.children);

    slides.forEach(slide => {
      const clone = slide.cloneNode(true);
      slider.appendChild(clone);
    });

    let position = 0;

    function moveSlider() {
      position++;
      slider.style.transition = 'transform 0.5s linear';
      slider.style.transform = `translateY(-${position * slideHeight}px)`;

      if (position >= slides.length) {
        setTimeout(() => {
          slider.style.transition = 'none';
          position = 0;
          slider.style.transform = `translateY(0px)`;
        }, 500);
      }
    }
    setInterval(moveSlider, 3000);
  }, 1000)

};

const urun_detay_avantajlar_init = () => {
  urun_detay_avantajlar_html();
  urun_detay_avantajlar_css();
  urun_detay_avantajlar_js();
};

const urun_detay_avantajlar_condition = () => {
  const device = window.innerWidth > 768;
  return device;
};

let count = 0;


setInterval(() => {
  if (count == 0) {
    if (urun_detay_avantajlar_condition()) {
      urun_detay_avantajlar_init();
    }
    count++;
  }
}, 50)



