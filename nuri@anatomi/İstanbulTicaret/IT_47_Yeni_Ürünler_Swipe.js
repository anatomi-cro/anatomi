
const sliderStart = document.getElementById("list-slide1041");
const sliderLi = sliderStart.querySelectorAll("#list-slide1041 li");
const listCatalog = document.getElementById("list-catalog1041");
const slideWrapper = document.querySelector(".slide-wrapper");
const head = document.querySelector("head");
const parentSlider = document.querySelector("#list-catalog1041 .row.slide-wrapper .fl.col-12");

const topOfElement = listCatalog.getBoundingClientRect().top - 400;

window.addEventListener("scroll", () => {
    if (window.pageYOffset > topOfElement) {
        const sliderStart_style = `
<style>
#list-catalog1041 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    width: 100% !important;
    scroll-behavior: smooth;
}
#list-slide1041 {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    width: 80% !important;
    left: 100px !important;
    scroll-behavior: smooth;
}

#list-slide1041 li {
    width: 450px !important;
    height: 450px !important;
    margin: 0 10px !important;
    flex: 0 0 auto !important;
}

#listCatalog {
    position: relative;
    width: 100% !important;
}

.row.slide-wrapper .fl.col-12 {
    position: relative;
}

.nextButton {
    position: absolute;
    right: 0%;
    top: 50%;
    background: #fff;
    border: none;
    outline: none;
    padding: 10px 20px;
    font-size: 30px;
    cursor: pointer;
}

.prevButton {
    position: absolute;
    left: 0%;
    top: 50%;
    background: #fff;
    border: none;
    outline: none;
    padding: 10px 20px;
    font-size: 30px;
    cursor: pointer;
}

</style>
`;


        head.insertAdjacentHTML("beforeend", sliderStart_style);


        var clone = sliderLi[0].cloneNode(true);
        sliderStart.appendChild(clone);


        const nextButton = document.createElement("a");
        nextButton.classList.add("anatomi_sliderButton");
        nextButton.id = "anatomi_sliderButton";
        nextButton.innerHTML = "<img src='https://resmim.net/cdn/2024/01/17/Z4q4MC.webp'>";
        nextButton.classList.add("nextButton");
        parentSlider.appendChild(nextButton);

        const prevButton = document.createElement("a");
        prevButton.classList.add("anatomi_sliderButton");
        prevButton.id = "anatomi_sliderButton";
        prevButton.innerHTML = "<img src='https://resmim.net/cdn/2024/01/17/Z4qtt1.webp'>";
        prevButton.classList.add("prevButton");
        parentSlider.appendChild(prevButton);


        nextButton.addEventListener("click", () => {
            smoothScroll(sliderStart, sliderStart.scrollLeft + 407, 0.5);
            if (sliderStart.scrollLeft >= 407 * 4) {
                sliderStart.scrollLeft = 0;
            }
        });

        prevButton.addEventListener("click", () => {
            smoothScroll(sliderStart, sliderStart.scrollLeft - 407, 0.5);
            if (sliderStart.scrollLeft <= 0) {
                sliderStart.scrollLeft = 407 * 4;
            }
        });

        const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.type == "childList") {
                    if (sliderStart.scrollLeft >= 407 * 4) {
                        sliderStart.scrollLeft = 0;
                    }
                }
            });
        });

        observer.observe(sliderStart, {
            attributes: true,
            childList: true,
            characterData: true
        });

        const observer2 = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.type == "childList") {
                    if (sliderStart.scrollLeft <= 0) {
                        sliderStart.scrollLeft = 407 * 4;
                    }
                }
            });
        });

        observer2.observe(sliderStart, {
            attributes: true,
            childList: true,
            characterData: true
        });


        function smoothScroll(element, to, duration) {
            const start = element.scrollLeft;
            const change = to - start;
            const increment = 20;
            let currentTime = 0;

            const animateScroll = function () {
                currentTime += increment;
                const val = Math.easeInOutQuad(currentTime, start, change, duration);
                element.scrollLeft = val;
                if (currentTime < duration) {
                    requestAnimationFrame(animateScroll);
                }
            };

            animateScroll();
        }

        // Easing function for smooth animation
        Math.easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        };


        const deneme3 = document.querySelectorAll("#list-slide1041 a:not(a.btn.col-12.btn-small.popupWin)");
        deneme3.forEach((item) => {
            item.classList.add("anatomi_swiper_product");
        })
    }
})




