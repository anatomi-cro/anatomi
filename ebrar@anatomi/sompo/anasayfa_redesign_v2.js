const anasayfa_redesign_html = () => {};

const anasayfa_redesign_css = () => {
    const style = `
      <style>    
      .anatomi_picture {
        display: none;
      }
      .anatomi_image_container {
        width: 650px;
        height: 300px; 
        margin-top: 70px;
        z-index: 99999;
      }
      .anatomi_image_container img {
        width: 100%;
        height: 100%;
        display: none;
        transition: opacity 1s ease-in-out;
        border-radius: 8px;
      }
      .anatomi_image_container img.active {
        display: block;
      }
        .anatomi_promo_content{
            flex-direction: row-reverse;
            justify-content: space-evenly;
        }
    .anatomi_promo_background{
    border-radius: 8px !important;
    border: 1px solid #80808036;
    box-shadow: none ;
    }
    .anatomi_promo_anchor{
        width: 150px;
        height: 150px;
        display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    }
    .anatomi_promo_text{
        position: static !important;
        height: auto !important;
        
    }
    .anatomi_promo_image_container{
        z-index: 99999;
    }
   
    .promo .container{
        width: 600px;
    }
    .promo__link{
        flex-wrap: nowrap;

    }
    .promo__link__item{
        min-width: 100px !important;
    }
   
    .promo__link__background::after{
        background: none !important;
    }
.anatomi-dots-container {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
}

.anatomi-dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color:rgb(171 171 171 / 50%);
    cursor: pointer;
}

.anatomi-dot.active {
    background-color: white;
}
    .promo__sticky{
        top: 105% !important;
    }
  .anatomi_promo_anchor:nth-child(1) img{
            height: 35px;
        }
        .anatomi_promo_anchor:nth-child(2) img{
            width: 36px;
        }
        .anatomi_promo_anchor:nth-child(3) img{
            height: 25px;
            width: 30px;
        }
      
        .anatomi_promo_anchor:nth-child(4) img{
            height: 32px;
        }
        .anatomi_promo_anchor:nth-child(5) img{
           height: 36px;
        }

        
    @media only screen and (min-width: 1200px) {
    .promo {
        height: 522px;
    }
        .promo__item.-active {
        margin: 0px !important;
    }
    
}
    @media only screen and (min-width: 1441px) {
    .anatomi-dots-container{
        left: 40% !important;
    }
    
}

    @media only screen and (min-width: 768px) and (max-width: 1399px) {
   
    .promo .container{
        padding: 0px !important;
        width: 400px !important;
        align-items: center !important;
    }
    .promo__item.-active {
        width: 400px !important;
    }
    .anatomi_image_container{
    width: 500px;
    height: 50%;
    margin-top: 120px;
    margin-right: 30px;
    }
    .promo__title.-introduction{
    font-size: 24px !important;
    }
    .promo__desc{
    font-size: 14px !important;
    }
    .anatomi_promo_text{
        font-size: 12px;
    }
          .promo__link__item{
        min-width: 70px !important;
    }

}
      @media only screen and (max-width: 768px) {
         .promo__link{
        flex-wrap: wrap;

    }
        .anatomi_promo_anchor{
            width: 150px;
        }

        .anatomi_image_container{
            width: 100%;
            height: auto;
            margin-top: 0px;
        }
        .anatomi_promo_content{
            flex-direction: column-reverse;
        }
        .promo .container{
            width: 100%;
            
        }
        .promo{
            height: auto;
        }

        .anatomi_promo_anchor:nth-child(1) img{
            height: 35px;
        }
        .anatomi_promo_anchor:nth-child(2) img{
            width: 36px;
        }
        .anatomi_promo_anchor:nth-child(3) img{
            height: 25px;
            width: 30px;
        }

        .anatomi_promo_anchor:nth-child(4) img{
            height: 32px;
        }
        .anatomi_promo_anchor:nth-child(5) img{
           height: 36px;
        }
}
         @media only screen and (max-width: 375px){
            .anatomi_promo_anchor{
                width: 300px !important;
            }
         }

      </style>
    `;
    document.head.insertAdjacentHTML("beforeend", style);
};

const anasayfa_redesign_js = () => {
    const generatePictureandProduct = () => {
        const picture = document.querySelector("body > main > section.promo > div.promo__content > picture");
        if (picture && !picture.classList.contains("anatomi_picture")) {
            picture.classList.add("anatomi_picture");
        } 

        let imageContainer = document.querySelector(".anatomi_image_container");
const promoContent = document.querySelector("body > main > section.promo > div.promo__content");

if (promoContent && !promoContent.classList.contains("anatomi_promo_content")) {
    promoContent.classList.add("anatomi_promo_content");
}

if (!imageContainer && promoContent) {
    imageContainer = document.createElement("div");
    imageContainer.classList.add("anatomi_image_container");

    const images = [
        { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo-trafik-anasayfa.png", link: "https://www.somposigorta.com.tr/kampanyalar" },
        { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo-kasko-anasayfa.png", link: "https://www.somposigorta.com.tr/kampanyalar" },
        { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo_puanim.png", link: "https://www.somposigorta.com.tr/kampanyalar/sompo-puanim-hos-geldin-kampanyasi" },
        { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/somponomi.png", link: "https://www.somposigorta.com.tr/somponomi" }
    ];


    images.forEach((image, index) => {
        const anchor = document.createElement("a");
        anchor.href = image.link;
        anchor.classList.add("anatomi-promo-link", `promo-link-${index + 1}`);

        const img = document.createElement("img");
        img.src = image.src;
        if (index === 0) img.classList.add("active");

        anchor.appendChild(img);
        imageContainer.appendChild(anchor);
    });

    promoContent.appendChild(imageContainer);

    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("anatomi-dots-container");

    images.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("anatomi-dot");
        if (index === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);
    });

    imageContainer.appendChild(dotsContainer);
    promoContent.appendChild(imageContainer);

    const dots = document.querySelectorAll(".anatomi-dot");
    let currentIndex = 0;

    function updateActiveImage(index) {
        const images = imageContainer.querySelectorAll("img");

        images.forEach((image, i) => {
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

    imageContainer.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    imageContainer.addEventListener("touchmove", (e) => {
        endX = e.touches[0].clientX;
    });

    imageContainer.addEventListener("touchend", () => {
        if (startX - endX > 50) {     
            currentIndex = (currentIndex + 1) % images.length;
        } else if (endX - startX > 50) {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
        }
        updateActiveImage(currentIndex);
    });
}


        const promoBackgrounds = document.querySelectorAll(".promo__link__background")
        if(promoBackgrounds){
            promoBackgrounds.forEach((background) => {
                if(!background.classList.contains("anatomi_promo_background")){
                    background.classList.add("anatomi_promo_background");
                }
            })
        }
        const promoContainer = document.querySelector(".promo .container");
        const articles = document.querySelectorAll(
            "body > main > section.promo > div.promo__content.anatomi_promo_content > div.container > article.promo__item"
        );
    
        function updateHeight() {
            if (articles.length > 1 && articles[1].classList.contains("-active")) {
                promoContainer.style.height = "300px";
            } else {
                promoContainer.style.height = "100%";
            }
        }
        updateHeight();

        const promoData = [
            { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo-trafik-sigortasi.png" },
            { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo-kasko-sigortasi.png" },
            { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo-tamamlayici-saglik.png" },
            { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo-dask.png" },
            { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo-seyahat-saglik.png" },
        ];
        const promoAnchors = document.querySelectorAll("body > main > section.promo > div.promo__content > div > article.promo__item.-active:first-child > div > a , body > main > section.promo > div.promo__content.anatomi_promo_content > div.container >  article.promo__item.-active:first-child > div > span")
        
        if (promoAnchors.length > 0) {
            promoAnchors.forEach((anchor, index) => {
                if (!anchor.classList.contains("anatomi_promo_anchor")) {
                    anchor.classList.add("anatomi_promo_anchor");

                    if (index === 0) {
                        anchor.classList.add("trafik-sigortasi");
                      } else if (index === 1) {
                        anchor.classList.add("kasko-sigortasi");
                      } else if (index === 2) {
                        anchor.classList.add("tamamlayici-saglik");
                      } 
                      else if (index === 3) {
                        anchor.classList.add("dask");
                      } else if (index === 4) {
                        anchor.classList.add("seyahat-sigortalari");
                      }
        
                    let imageContainer = anchor.querySelector(".anatomi_promo_image_container");
                    if (!imageContainer) {
                        imageContainer = document.createElement("div");
                        imageContainer.classList.add("anatomi_promo_image_container");
        
                        let image = anchor.querySelector(".anatomi_promo_image");
                        if (!image) {
                            image = document.createElement("img");
                            image.classList.add("anatomi_promo_image");
                            image.src = promoData[index] ? promoData[index].src : "https://via.placeholder.com/100?text=Default";
                            image.alt = "Promo Image";
        
                            imageContainer.appendChild(image);
                        }
        
                        anchor.appendChild(imageContainer);
                    }
                }
            });
        }
        
        const promoTexts = document.querySelectorAll("body > main > section.promo > div.promo__content > div > article.promo__item.-active:first-child > div > a > span.promo__link__text")
        if(promoTexts){
            promoTexts.forEach((text) => {
                if(!text.classList.contains("anatomi_promo_text")){
                    text.classList.add("anatomi_promo_text");
                }
                })
        }
        const promoSpan = document.querySelector("body > main > section.promo > div.promo__content > div > article.promo__item.-active:first-child > div > span > span.promo__link__text")
        if(promoSpan && !promoSpan.classList.contains("anatomi_promo_text")){
            promoSpan.classList.add("anatomi_promo_text");
            }

           
            
          
            const promoH1Title = document.querySelector("body > main > section.promo > div.promo__content.anatomi_promo_content > div.container > article.promo__item.-active:first-child > h1")
            if(promoH1Title){
                promoH1Title.textContent = "Size Nasıl Yardımcı Olabiliriz?"
            }
            const promoPTitle = document.querySelector("body > main > section.promo > div.promo__content.anatomi_promo_content > div.container > article.promo__item.-active:first-child > p")
            if(promoPTitle){
                promoPTitle.textContent = "Sigorta teklif ve sorgulama işlemleri için seçiminizi yapınız."
                }
                const tamamlayiciSaglikText = document.querySelector("body > main > section.promo > div.promo__content > div > article.promo__item.-active > div > a:nth-child(3) > span.promo__link__text")
                if(tamamlayiciSaglikText){
                    tamamlayiciSaglikText.textContent = "Tamamlayıcı Sağlık"
                    }
   }

    setInterval(() => {
        generatePictureandProduct();
    }, 100);

   
};

const anasayfa_redesign_init = () => {
    anasayfa_redesign_html();
    anasayfa_redesign_css();
    anasayfa_redesign_js();
};

const anasayfa_redesign_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

if (anasayfa_redesign_condition()) {
    anasayfa_redesign_init();
}