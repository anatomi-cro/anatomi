const anatomi_style = `
<style>
.story_container ul {
    display: flex !important;
    gap: 30px !important;
    align-items: center !important;
    justify-content: flex-start !important;
    padding: 13px !important;
    width: 100% !important;
    scroll-behavior: smooth;
}

.story_swiper {
  width: 60%;
  overflow: hidden;
  display: flex;
  border-radius: 10px;
  box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.story_container {
  position: relative;
    display: flex !important;
    justify-content: center !important;
    width: 100% !important;
    height: 100% !important;
    margin-bottom: 20px !important;
}

.story_container img {
  max-width: none !important;
}

/* Eklenen kod */
.anatomi_img_story {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.story_swiper_next_button, .story_swiper_prev_button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
  transition: 0.3s;
}

.story_swiper_next_button {
  right: 15%;
}

.story_swiper_prev_button {
  left: 15%;
}

.story_swiper_next_button img, .story_swiper_prev_button img {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.story_swiper_next_button:active, .story_swiper_prev_button:active {
  transform: translateY(-50%) scale(0.9);
}

@media (max-width: 960px) {
  .story_swiper_next_button {
    right: 10%;
  }
  
  .story_swiper_prev_button {
    left: 10%;
  }
}

@media (max-width: 540px) {
  .story_swiper_next_button {
    right: 0%;
  }
  
  .story_swiper_prev_button {
    left: 0%;
  }

  .story_swiper {
    width: 80%;
  }

  .story_swiper_next_button img, .story_swiper_prev_button img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
}

@media (max-width: 350px) {
  .story_swiper_next_button {
    right: 0%;
  }
  
  .story_swiper_prev_button {
    left: 0%;
  }

  .story_swiper {
    width: 70%;
  }

  .story_swiper_next_button img, .story_swiper_prev_button img {
    width: 15px;
    height: 15px;
    object-fit: contain;
  }
}

</style>
`;

const a_html = `
<hr>
<div class="story_container">
  <div class="story_swiper">
    <ul>
      <a href="https://www.istanbulticaret.com/ansell">
        <li class="has_story">
          <div class="story">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+23+(3).svg" alt="" />
          </div>
        </li>
      </a>
      <a href="https://www.istanbulticaret.com/yds">
        <li class="has_story">
          <div class="story">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+24+(2).svg" alt="" />
          </div>
        </li>
      </a>
      <a href="https://www.istanbulticaret.com/veo">
        <li class="has_story">
          <div class="story">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+27+(2).svg" alt="image host" />
          </div>
        </li>
      </a>
      <a href="https://www.istanbulticaret.com/univet">
        <li class="has_story">
          <div class="story">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+30+(1).svg" alt="image host" />
          </div>
        </li>
      </a>
      <a href="https://www.istanbulticaret.com/3m">
        <li class="has_story">
          <div class="story">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+29+(2).svg" alt="image host" />
          </div>
        </li>
      </a>
      <a href="https://www.istanbulticaret.com/dupont">
        <li class="has_story">
          <div class="story">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+25+(2).svg" alt="" />
          </div>
        </li>
      </a>
      <a href="https://www.istanbulticaret.com/maxeo">
        <li class="has_story">
          <div class="story">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+26+(2).svg" alt="image host" />
          </div>
        </li>
      </a>

      <a href="https://www.istanbulticaret.com/actiomedic">
        <li class="has_story">
          <div class="story">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/actiomedic.jpg" alt="image host" />
          </div>
        </li>
      </a>
      <a href="https://www.istanbulticaret.com/dolphin">
        <li class="has_story">
          <div class="story">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Dolphin+Logo.png" alt="image host" />
          </div>
        </li>
      </a>
      <a href=" https://www.istanbulticaret.com/justrite">
        <li class="has_story">
          <div class="story">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Justrite.png" alt="image host" />
          </div>
        </li>
      </a>

      <a href="https://www.istanbulticaret.com/schuberth-106">
        <li class="has_story">
          <div class="story">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Logo.jpg" alt="image host" />
          </div>
        </li>
      </a>
      <a href="https://www.istanbulticaret.com/plum">
        <li class="has_story">
          <div class="story">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Plum+Safety.png" alt="image host" />
          </div>
        </li>
      </a>
      <a href="https://www.istanbulticaret.com/polly-boot">
        <li class="has_story">
          <div class="story">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Polly+Boot.png" alt="image host" />
          </div>
        </li>
      </a>
      <a href="https://www.istanbulticaret.com/polly-rain">
        <li class="has_story">
          <div class="story">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Polly+Rain+Logo.jpg" alt="image host" />
          </div>
        </li>
      </a>

      <a href="https://www.istanbulticaret.com/yuksekte-calisma-ekipmanlari">
        <li class="has_story">
          <div class="story">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/protecta_logo+3-1.png" alt="image host" />
          </div>
        </li>
      </a>
      <a href="https://www.istanbulticaret.com/ringers">
        <li class="has_story">
          <div class="story">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Ringers+Gloves+Logo-1.png" alt="image host" />
          </div>
        </li>
      </a>
    </ul>

  </div>
  <a class="story_swiper_next_button">
  <img src="https://anatomi.s3.eu-north-1.amazonaws.com/icons8-right-arrow-50.png" alt="">
</a>
<a class="story_swiper_prev_button">
  <img src="https://anatomi.s3.eu-north-1.amazonaws.com/icons8-left-arrow-50.png" alt="">
</a>
</div>
`;

const list_down_container = document.querySelector(
  ".contentWrapper.col.col-12"
);
list_down_container.insertAdjacentHTML("beforebegin", a_html);

const anatomi_img = document.querySelectorAll(".story_container img");
anatomi_img.forEach((item) => item.classList.add("anatomi_img_story"));

const anatomi_head = document.querySelector("head");
anatomi_head.insertAdjacentHTML("beforeend", anatomi_style);

if(window.innerWidth > 960) {
const next = document.querySelector(".story_swiper_next_button");
const prev = document.querySelector(".story_swiper_prev_button");
const ul = document.querySelector(".story_swiper ul");

let scrollAmount = 0;
prev.addEventListener("click", (e) => {
  if (scrollAmount > 0) {
    scrollAmount -= 200;
    ul.style.transform = `translateX(-${scrollAmount}px)`;
    ul.style.transition = "transform 0.3s";
  }
});

next.addEventListener("click", (e) => {
  if (scrollAmount <= ul.scrollWidth - ul.clientWidth - 200) {
    scrollAmount += 200;
    ul.style.transform = `translateX(-${scrollAmount}px)`;
    ul.style.transition = "transform 0.3s";
  }
});
}else {
  const ul = document.querySelector(".story_swiper ul");
  ul.style.overflowX = "scroll";
  ul.style.scrollBehavior = "smooth";

  let isDown = false;
  let startX;
  let scrollLeft;

  ul.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - ul.offsetLeft;
    scrollLeft = ul.scrollLeft;
  });

  ul.addEventListener("mouseleave", () => {
    isDown = false;
  });

  ul.addEventListener("mouseup", () => {
    isDown = false;
  });

  ul.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - ul.offsetLeft;
    const walk = (x - startX) * 3; 
    ul.scrollLeft = scrollLeft - walk;
  });

  ul.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - ul.offsetLeft;
    scrollLeft = ul.scrollLeft;
  });

  ul.addEventListener("touchend", () => {
    isDown = false;
  });

  ul.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - ul.offsetLeft;
    const walk = (x - startX) * 3; 
    ul.scrollLeft = scrollLeft - walk;
  });

  const next = document.querySelector(".story_swiper_next_button");
  const prev = document.querySelector(".story_swiper_prev_button");

  next.addEventListener("click", (e) => {
    ul.scrollLeft += 200;
  });

  prev.addEventListener("click", (e) => {
    ul.scrollLeft -= 200;
  });


}


