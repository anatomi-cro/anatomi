const a_blog_style = `<style>
.a_slider_container{
  width: 1170px;
  margin: 0 auto;
}

.img_slider{
    flex: 0 0 auto;
    display: none;
    transition: 800ms all;
    margin: 0 auto;
    width: 1170px;
}
.img_slider.active {
    display: block; 
}

.teklif_container{
 
    z-index: 99999999;
  }
  #a_back{
    position: absolute;
    top: 45%;
    border: none;
    background: none;
    left: -40px;

  }
  #a_next{
    position: absolute;
    top: 45%;
    border: none;
    background: none;
    right: -40px;
  }

  .a_slider_banner{
    margin: 20px 0;
    position: relative;
    width: 100%;
  }


  .dot_navigation{
    z-index: 99999999;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 20px;
    gap: 0px;
    width:100%
  }

  .dot{
    width: 7px;
    background: black;
    margin: 5px;
    z-index: 9999999;
    height: 7px;
    border-radius: 50%;
  }
  .dot.active{
    width: 7px;
    background: #f51300;
    margin: 5px;
    z-index: 9999999;
    height: 7px;
  }
</style>`;


const a_slider_banner = document.querySelector('.page-banner')

a_slider_banner.remove();


const slider_arrow_html = `

<div class="teklif_container">

<button id="a_back" type="button">
<svg  width="14" height="18" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.57128 10.7812L0.24513 6.02812C-0.0817094 5.73645 -0.0817094 5.26355 0.24513 4.97188L5.57128 0.218757C5.89812 -0.0729189 6.42803 -0.0729189 6.75487 0.218757C7.08171 0.510432 7.08171 0.983331 6.75487 1.27501L2.02051 5.5L6.75487 9.72499C7.08171 10.0167 7.08171 10.4896 6.75487 10.7812C6.42803 11.0729 5.89812 11.0729 5.57128 10.7812Z" fill="black"/>
</svg>
  </button>


  <button id="a_next" type="button">
  <svg width="14" height="18" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.42872 10.7812L6.75487 6.02812C7.08171 5.73645 7.08171 5.26355 6.75487 4.97188L1.42872 0.218757C1.10188 -0.0729185 0.571969 -0.0729185 0.24513 0.218757C-0.0817099 0.510432 -0.0817099 0.98333 0.24513 1.27501L4.97949 5.5L0.24513 9.72499C-0.0817099 10.0167 -0.0817099 10.4896 0.24513 10.7812C0.571969 11.0729 1.10188 11.0729 1.42872 10.7812Z" fill="black"/>
  </svg>
  </button>
</div>
`


const a_slider_container = `

<div class="a_slider_container">

<div class="a_slider_banner">
<a class="a_link_banner" ><img class="img_slider active" src="https://anatomi.s3.eu-north-1.amazonaws.com/sigortalad%C4%B1m_1170x280.jpg"/></a>
<a class="a_link_banner" ><img class="img_slider" src="https://anatomi.s3.eu-north-1.amazonaws.com/saffet_ana_sayfa_banner.jpg"/></a>
<a class="a_link_banner" ><img class="img_slider" src="https://anatomi.s3.eu-north-1.amazonaws.com/servis_kamp_saffet_1920x454_kia.jpg"/></a>

</div>
</div>

<div class="dot_navigation"></div>

`
const a_breadcrumbs = document.querySelector('.breadcrumbs')

a_breadcrumbs.insertAdjacentHTML("afterend", a_slider_container)

const a_slider_banner_in = document.querySelector('.a_slider_banner');

a_slider_banner_in.insertAdjacentHTML('afterbegin', slider_arrow_html);

// sag sol ok

let activeIndex = 0; // İlk ürün aktif olarak başlasın

// İleri düğmesine tıklanınca
document.querySelector("#a_next").addEventListener("click", function () {
    console.log('ileri');
    changeSlide(1); // İleri yönde 1 adım değiştirme
});

// Geri düğmesine tıklanınca
document.querySelector("#a_back").addEventListener("click", function () {
    console.log('geri');
    changeSlide(-1); // Geri yönde 1 adım değiştirme
});


// Function to change the active slide
function changeSlide(direction) {
    const products = document.querySelectorAll(".img_slider");

    // Mevcut ürünün active sınıfını kaldırın
    products[activeIndex].classList.remove("active");

    // Yeni indeksi hesaplayın (eğer son ürünse başa, baştaki ürünse sona geçin)
    activeIndex = (products.length + activeIndex + direction) % products.length;

    // Yeni ürüne active sınıfını ekleyin
    products[activeIndex].classList.add("active");

}


// dot navigation

const sliderBanner = document.querySelectorAll('.a_link_banner');
const dotNavigation = document.querySelector('.dot_navigation');
const dots = [];

// Create dots based on the number of slides
for (let i = 0; i < sliderBanner.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dotNavigation.appendChild(dot);
    dots.push(dot);
}

// Initial state, highlight the first dot
dots[0].classList.add('active');

document.getElementById('a_back').addEventListener('click', navigateToPreviousSlide);
document.getElementById('a_next').addEventListener('click', navigateToNextSlide);



// Function to navigate to the previous slide
function navigateToPreviousSlide() {
    const currentIndex = getCurrentSlideIndex();
    const newIndex = (currentIndex - 1 + sliderBanner.length) % sliderBanner.length;
    navigateToSlide(newIndex);
}

// Function to navigate to the next slide
function navigateToNextSlide() {
    const currentIndex = getCurrentSlideIndex();
    const newIndex = (currentIndex + 1) % sliderBanner.length;
    navigateToSlide(newIndex);
    console.log(newIndex)
}

// Function to get the current active slide index
function getCurrentSlideIndex() {
    const slides = sliderBanner;
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('active')) {
            return i;
        }
    }
    return -1; // Not found
}

// Function to navigate to a specific slide
function navigateToSlide(index) {
    // Update the slider to show the corresponding slide
    showSlide(index);

    // Update the active dot
    updateActiveDot(index);
}

// Function to show a specific slide
function showSlide(index) {
    const slides = sliderBanner;
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
}

// Function to update the active dot
function updateActiveDot(index) {
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    if (index > 1) {
        dots[0].classList.add('active');
    }else {
        dots[index + 1].classList.add('active');
    }
}


const a_anasayfa_head = document.querySelector("head");
a_anasayfa_head.insertAdjacentHTML("beforeend", a_blog_style);

