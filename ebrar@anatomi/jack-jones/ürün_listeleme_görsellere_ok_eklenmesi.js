const urun_listeleme_gorsellere_ok_eklenmesi_html = () => {};

const urun_listeleme_gorsellere_ok_eklenmesi_css = () => {
    const style = `
      <style>    
      </style>
      `
    ;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const urun_listeleme_gorsellere_ok_eklenmesi_js = () => {

    const checkGallerySwiper = () =>
    {
  const containers = document.querySelectorAll(".gallery-swiper__body");

containers.forEach((body) => {
    const innerDivs = body.querySelectorAll("div");

    if (innerDivs.length > 1) {
        innerDivs.forEach((div) => {
            div.classList.remove("anatomi_swiper_body");
        })
        const parent = body.closest(".product-tile-core__gallery-swiper-container");
       if (parent) {
    const arrows = parent.querySelector(".gallery-swiper__arrows");
    


    if (arrows) {
        arrows.style.visibility = "visible";
        arrows.style.display = "flex";
    }
}

const prevArrows = document.querySelectorAll(".gallery-swiper__arrow--prev")
const nextArrows = document.querySelectorAll(".gallery-swiper__arrow--next")

prevArrows.forEach((prev) =>
{
    prev.classList.add("anatomi_swiper_prev_btn");
})
nextArrows.forEach((next) =>
{
    next.classList.add("anatomi_swiper_next_btn");
})


    }
});
}


setInterval(() => {
    checkGallerySwiper();
}, 1000);




};

const urun_listeleme_gorsellere_ok_eklenmesi_init = () => {
    urun_listeleme_gorsellere_ok_eklenmesi_html();
    urun_listeleme_gorsellere_ok_eklenmesi_css();
    urun_listeleme_gorsellere_ok_eklenmesi_js();
};

const urun_listeleme_gorsellere_ok_eklenmesi_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

if (urun_listeleme_gorsellere_ok_eklenmesi_condition()) {
    urun_listeleme_gorsellere_ok_eklenmesi_init();
}