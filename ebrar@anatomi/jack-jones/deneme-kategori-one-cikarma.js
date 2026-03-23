const kategori_one_cikarma_html = () => {};
const kategori_one_cikarma_css = () => {
    const style = `
      <style>    
         .anatomi_slider_container {
        padding-bottom: 30px;
      }
    .anatomi-image-container {
  overflow-x: auto;
  scrollbar-width: none !important; 
  scroll-snap-type: x mandatory;
  display: flex;
  gap: 10px;
  padding: 10px;
  scroll-behavior: smooth;
  -ms-overflow-style: none; 
}
.anatomi-image-container::-webkit-scrollbar {
  display: none;
}
      .anatomi-image-container a {
        flex: 0 0 40%;
        scroll-snap-align: start;
        box-sizing: border-box;
        padding: 5px;
        border-radius: 8px;
      }
             .anatomi-image-container img {
           width: 100%;
            height: 190px;
        cursor: pointer;
        transition: opacity 1s ease-in-out;
        border-radius: 8px;
        }
      .anatomi-dots-container {
        display: flex;
        justify-content: center;
        gap: 10px;
      }
    .anatomi-dot {
        width: 45px;
    height: 5px;
    border-radius: 5px;
        background-color:rgb(171 171 171 / 50%);
        cursor: pointer;
    }
    .anatomi-dot.active {
        background-color: #A1A1A1;
    }
    .anatomi-kategori-title {
        text-align: center;
    padding: 10px;
    margin: 0px !important;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};
const kategori_one_cikarma_js = () => {
    let sliderContainer = document.querySelector(".anatomi_slider_container");
    const kategoriSection = document.querySelector("#Kategori\\ Banner\\'ları")
    if (!sliderContainer) {
        sliderContainer = document.createElement("div");
        sliderContainer.classList.add("anatomi_slider_container");
    }
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("anatomi-image-container");
    const dotContainer = document.createElement("div");
    dotContainer.className = "anatomi-dots-container";
    const images = [
        { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/jj-kad%C4%B1n-s%CC%A7ort-min.jpg", link: "https://www.jackjones.com.tr/tr-tr/kadin-giyim/sort", title: "Kadın Şort" },
        { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/jj-kad%C4%B1n-bluz-min.jpg", link: "https://www.jackjones.com.tr/tr-tr/kadin-giyim/tisort-ve-bluz", title: "Kadın Bluz" },
        { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/jj-erkek-jean.jpg", link: "https://www.jackjones.com.tr/tr-tr/erkek-giyim/erkek-denim/jean", title: "Erkek Jean" },
        { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/jj-erkek-go%CC%88mlek-min.jpg", link: "https://www.jackjones.com.tr/tr-tr/erkek-giyim/gomlek", title: "Erkek Gömlek" },
        { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/jj-kad%C4%B1n-elbise-min.jpg", link: "https://www.jackjones.com.tr/tr-tr/kadin-giyim/elbise-ve-etek", title: "Kadın Elbise" },
        { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/jj-kad%C4%B1n-jean.jpeg", link: "https://www.jackjones.com.tr/tr-tr/kadin-giyim/jean", title: "Kadın Jean" },
        { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/jj-erkek-s%CC%A7ort-min.jpg", link: "https://www.jackjones.com.tr/tr-tr/erkek-giyim/sort", title: "Erkek Şort" },
        { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/jj-erkek-tis%CC%A7o%CC%88rt-min.jpg", link: "https://www.jackjones.com.tr/tr-tr/erkek-giyim/tisort", title: "Erkek Tişört" },
    ];
      const renderImages = () => {
        images.forEach((image, index) => {
            const anchor = document.createElement("a");
            anchor.href = image.link;
            anchor.classList.add("anatomi-kategori-link");
            if (index === 0) {
                anchor.classList.add("slider-kadin-sort");
            } else if (index === 1) {
                anchor.classList.add("slider-kadin-bluz");
            } else if (index === 2) {
                anchor.classList.add("slider-erkek-jean");
            }
            else if (index === 3) {
                anchor.classList.add("slider-erkek-gomlek");
                }
            else if (index === 4) {
                anchor.classList.add("slider-kadin-elbise");
                }
            else if (index === 5) {
                anchor.classList.add("slider-kadin-jean");
                }
            else if (index === 6) {
                anchor.classList.add("slider-erkek-sort");
                }
            else if (index === 7) {
                anchor.classList.add("slider-erkek-tisort");
                }
            const img = document.createElement("img");
            img.src = image.src;
            if (index === 0) img.classList.add("active");

            const title = document.createElement("p");
            title.textContent = image.title;
            title.classList.add("anatomi-kategori-title");

            const wrapper = document.createElement("div");
            wrapper.appendChild(img);
            wrapper.appendChild(title);

            anchor.appendChild(wrapper);
            imageContainer.appendChild(anchor);
        });
        for (let i = 0; i < images.length - 1; i++) {
            const dot = document.createElement("span");
            dot.className = "anatomi-dot";
            if (i === 0) dot.classList.add("active");
            dot.addEventListener("click", () => {
              const singleImageWidth = imageContainer.querySelector("a").offsetWidth;
              imageContainer.scrollTo({
                left: singleImageWidth * i,
                behavior: "smooth",
              });
              updateActiveDot(i);
            });
            dotContainer.appendChild(dot);
          }
        function updateActiveDot(index) {
            dotContainer.querySelectorAll(".anatomi-dot").forEach((dot, i) => {
                dot.classList.toggle("active", i === index);
            });
        }
        imageContainer.addEventListener("scroll", () => {
            const singleImageWidth = imageContainer.querySelector("a").offsetWidth;
            const scrollLeft = imageContainer.scrollLeft;
            const currentIndex = Math.round(scrollLeft / singleImageWidth);
            updateActiveDot(currentIndex);
          });
        sliderContainer.appendChild(imageContainer);
        sliderContainer.appendChild(dotContainer);
        kategoriSection.insertAdjacentElement("afterend", sliderContainer);
        const dots = sliderContainer.querySelectorAll(".anatomi-dot");
        let currentIndex = 0;
        function updateActiveImage(index) {
            const imageElements = sliderContainer.querySelectorAll("img");
            imageElements.forEach((image, i) => {
                image.classList.toggle("active", i === index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === index);
            });
            currentIndex = index;
        }
        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => updateActiveImage(index));
        });
        let startX = 0;
        let endX = 0;
        let isSwiping = false;
        sliderContainer.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
            isSwiping = false;
        });
        sliderContainer.addEventListener("touchmove", (e) => {
            endX = e.touches[0].clientX;
            if (Math.abs(startX - endX) > 10) {
                isSwiping = true;
            }
        });
        sliderContainer.addEventListener("touchend", (e) => {
            if (!isSwiping) return;
            e.preventDefault();
            if (startX - endX > 50) {
                currentIndex = (currentIndex + 1) % images.length;
            } else if (endX - startX > 50) {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
            }
            updateActiveImage(currentIndex);
        });
        const links = sliderContainer.querySelectorAll(".anatomi-promo-link");
        links.forEach((link) => {
            link.addEventListener("click", (e) => {
                if (isSwiping) {
                    e.preventDefault();
                }
            });
        });
    };
    renderImages();
};
const kategori_one_cikarma_init = () => {
    kategori_one_cikarma_html();
    kategori_one_cikarma_css();
    kategori_one_cikarma_js();
};
const kategori_one_cikarma_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};
if (kategori_one_cikarma_condition()) {
    kategori_one_cikarma_init();
}
