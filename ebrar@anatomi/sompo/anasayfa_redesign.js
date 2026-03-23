const anasayfa_redesign_html = () => {};

const anasayfa_redesign_css = () => {
    const style = `
      <style>    
    .anatomi_picture {
        display: none;
      }
      .anatomi_image_container {
      position:relative;
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
            .anatomi-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 2rem;
        color: #ffffff00;
        padding: 0.5rem;
        border-radius: 50%;
        cursor: pointer;
        z-index: 10;
        user-select: none;
        transition: color 0.3s;
    }

    .anatomi-arrow:hover {
       color: #aa001f
    }

    .right-arrow {
        right: 0;
    }
        .anatomi_promo_content{
            flex-direction: row-reverse;
        }
    .anatomi_promo_background{
    border-radius: 8px !important;
    border: 1px solid #80808036;
    box-shadow: none ;
    }
    .anatomi_promo_anchor{
        width: 300px;
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
    .anatomi_new_promo_link{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 150px;
    background-color: white;
    border: 1px solid #80808036;
    border-radius: 8px;
    margin: 6px;
    text-decoration: none;
    transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
    }
    .anatomi_new_promo_title{
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.1px;
    color: #474242;
    }
    .promo .container{
        width: 600px;
    }
    .anatomi_new_promo_link:hover{
    transform: scale(1.05);
    box-shadow: 0 10px 32px 0 rgba(168, 127, 127, 0.27);
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
            width: 80px;
        }
        .anatomi_promo_anchor:nth-child(5) img{
            height: 32px;
        }
        .anatomi_promo_anchor:nth-child(6) img{
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
      @media only screen and (max-width: 1439px) {
          
      }
    @media only screen and (min-width: 768px) and (max-width: 1280px) {
    .anatomi_promo_anchor, .anatomi_new_promo_link {
        min-width: 120px !important;
        width: 120px;
    }
    .promo .container{
        padding: 0px !important;
        width: 400px !important;
    }
    .promo__item.-active {
        width: 400px !important;
    }
    .anatomi_image_container{
    margin-right: 30px;
    }
    .promo__title.-introduction{
    font-size: 24px !important;
    }
    .promo__desc{
    font-size: 14px !important;
    }
    .anatomi_promo_text, .anatomi_new_promo_title{
        font-size: 12px;
    }
    .anatomi_new_promo_link{
        padding: 10px;
    }
}
      @media only screen and (max-width: 768px) {
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
        .anatomi_new_promo_link{
            width: 169px !important;
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
            width: 80px;
        }
        .anatomi_promo_anchor:nth-child(5) img{
            height: 32px;
        }
        .anatomi_promo_anchor:nth-child(6) img{
           height: 36px;
        }
}
         @media only screen and (max-width: 375px){
            .anatomi_new_promo_link{
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

   

    const getImagesForScreen = () => {
        if (window.innerWidth < 1400) {
            return [
                { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo_amazon_dijital_kasko_550_437.jpg", link: "https://www.somposigorta.com.tr/kampanyalar" },
                { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo_puanim_550_437.jpg", link: "https://www.somposigorta.com.tr/kampanyalar/sompo-puanim-hos-geldin-kampanyasi" },
                { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/somponomi_550_437.jpg", link: "https://www.somposigorta.com.tr/somponomi" }
            ];
        } else {
            return [
                { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo_amazon_dijital_kasko_700_423.jpg", link: "https://www.somposigorta.com.tr/kampanyalar" },
                { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo_puanim_700_423.jpg", link: "https://www.somposigorta.com.tr/kampanyalar/sompo-puanim-hos-geldin-kampanyasi" },
                { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/somponomi_700_423.jpg", link: "https://www.somposigorta.com.tr/somponomi" }
            ];
        }
    };

    let images = getImagesForScreen();

    const renderImages = () => {
        
        imageContainer.innerHTML = "";
        const leftArrow = document.createElement("div");
        leftArrow.classList.add("anatomi-arrow", "left-arrow");
        leftArrow.innerHTML = "&#10094;";
    
        const rightArrow = document.createElement("div");
        rightArrow.classList.add("anatomi-arrow", "right-arrow");
        rightArrow.innerHTML = "&#10095;";
    
        imageContainer.appendChild(leftArrow);
        imageContainer.appendChild(rightArrow);
    
        leftArrow.addEventListener("click", () => {
            const newIndex = (currentIndex - 1 + images.length) % images.length;
            updateActiveImage(newIndex);
        });
    
        rightArrow.addEventListener("click", () => {
            const newIndex = (currentIndex + 1) % images.length;
            updateActiveImage(newIndex);
        });
    
        images.forEach((image, index) => {
            const anchor = document.createElement("a");
            anchor.href = image.link;
            anchor.classList.add("anatomi-promo-link", `promo-link-${index + 1}`);

            if (index === 0) {
                anchor.classList.add("slider-trafik-kasko-sigortasi");
            } else if (index === 1) {
                anchor.classList.add("slider-sompo-puanim");
            } else if (index === 2) {
                anchor.classList.add("slider-somponomi");
            }

            const img = document.createElement("img");
            img.src = image.src;
            if (index === 0) img.classList.add("active");

            anchor.appendChild(img);
            imageContainer.appendChild(anchor);
        });

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

        const dots = imageContainer.querySelectorAll(".anatomi-dot");
        let currentIndex = 0;

        function updateActiveImage(index) {
            const imageElements = imageContainer.querySelectorAll("img");
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

        imageContainer.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
            isSwiping = false;
        });

        imageContainer.addEventListener("touchmove", (e) => {
            endX = e.touches[0].clientX;
            if (Math.abs(startX - endX) > 10) {
                isSwiping = true;
            }
        });

        imageContainer.addEventListener("touchend", (e) => {
            if (!isSwiping) return;
            e.preventDefault();

            if (startX - endX > 50) {
                currentIndex = (currentIndex + 1) % images.length;
            } else if (endX - startX > 50) {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
            }
            updateActiveImage(currentIndex);
        });

        const links = imageContainer.querySelectorAll(".anatomi-promo-link");
        links.forEach((link) => {
            link.addEventListener("click", (e) => {
                if (isSwiping) {
                    e.preventDefault();
                }
            });
        });
    };

    renderImages();

    window.addEventListener("resize", () => {
        const newImages = getImagesForScreen();
        if (JSON.stringify(newImages) !== JSON.stringify(images)) {
            images = newImages;
            renderImages();
        }
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
                        anchor.classList.add("item-trafik-sigortasi");
                      } else if (index === 1) {
                        anchor.classList.add("item-kasko-sigortasi");
                      } else if (index === 2) {
                        anchor.classList.add("item-tamamlayici-saglik");
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

            const targetElement = document.querySelector(
                "body > main > section.promo > div.promo__content.anatomi_promo_content > div.container > article.promo__item.-active:first-child > div > a:nth-child(4)"
            );
            
            if (targetElement && !document.querySelector(".anatomi_new_promo_link")) {
                const newAnchor = document.createElement("a");
                newAnchor.classList.add("anatomi_new_promo_link", "tamamlayici-saglik-dogum-paket");
                newAnchor.href = "https://www.somposigorta.com.tr/dogum-sigortasi"; 
            
                if (!newAnchor.querySelector(".anatomi_promo_image")) {
                    const image = document.createElement("img");
                    image.src = "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo-dogum-saglik.png";
                    image.alt = "Yeni Promo Resmi";
                    image.classList.add("anatomi_promo_image");
                    newAnchor.appendChild(image);
                }
                const title = document.createElement("span");
                title.textContent = "Tamamlayıcı Sağlık Doğum Paket";
                title.classList.add("anatomi_new_promo_title");
            
                newAnchor.appendChild(title);
            
                targetElement.parentNode.insertBefore(newAnchor, targetElement);
            }
            const dask = document.querySelector("body > main > section.promo > div.promo__content.anatomi_promo_content > div.container > article.promo__item.-active > div > a:nth-child(5)")
            if(dask && !dask.classList.contains("dask")){
                dask.classList.add("item-dask");
            }
            const seyahat = document.querySelector("body > main > section.promo > div.promo__content.anatomi_promo_content > div.container > article.promo__item.-active > div > span")
            if(seyahat && !seyahat.classList.contains("seyahat-sigortalari")){
                seyahat.classList.add("item-seyahat-sigortalari");
                }
            const promoH1Title = document.querySelector("body > main > section.promo > div.promo__content.anatomi_promo_content > div.container > article.promo__item.-active:first-child > h1")
            if(promoH1Title){
                promoH1Title.textContent = "Size Nasıl Yardımcı Olabiliriz?"
            }
            const promoPTitle = document.querySelector("body > main > section.promo > div.promo__content.anatomi_promo_content > div.container > article.promo__item.-active:first-child > p")
            if(promoPTitle){
                promoPTitle.textContent = "Sigorta teklif ve sorgulama işlemleri için seçiminizi yapınız."
                }
                    const tamamlayiciSaglikText = document.querySelector(
  "body > main > section.promo > div.promo__content > div > article.promo__item.-active > div > a:nth-child(3) > span.promo__link__text"
);

if (tamamlayiciSaglikText && tamamlayiciSaglikText.title === "Yurt Dışı Vize Seyahat") {
    tamamlayiciSaglikText.textContent = "Tamamlayıcı Sağlık";
}
    const covid = document.querySelector("body > main > section.promo > div.promo__content > div > article.promo__item.-active > div > a:nth-child(1)")
    if(covid && covid.title === "COVID-19 Yurt Dışı Seyahat"){
        covid.style.order = "3";
    }
    const yurtdisiEğitim = document.querySelector("body > main > section.promo > div.promo__content > div > article.promo__item.-active > div > a:nth-child(2)")
    if(yurtdisiEğitim && yurtdisiEğitim.title === "Yurt Dışı Eğitim Seyahat"){
        yurtdisiEğitim.style.order = "2";
   }

   const yurtdisiVize = document.querySelector("body > main > section.promo > div.promo__content > div > article.promo__item.-active > div > a:nth-child(3)")
    if(yurtdisiVize && yurtdisiVize.title === "Yurt Dışı Vize Seyahat"){
        yurtdisiVize.style.order = "1";
    }

   const tssDogum = document.querySelector(
        "body > main > section.promo > div.promo__content.anatomi_promo_content > div.container > article.promo__item.-active > div > a.anatomi_new_promo_link.tamamlayici-saglik-dogum-paket.anatomi_promo_anchor"
      );
      if (tssDogum) {
        tssDogum.style.order = "6";
      }
      const seyahatSigorta = document.querySelector(
        "body > main > section.promo > div.promo__content.anatomi_promo_content > div.container > article.promo__item.-active > div > span"
      );
      if (seyahatSigorta && seyahatSigorta.title === "Seyahat Sigortaları") {
        seyahatSigorta.style.order = "4";
      }
     
      const target2 = document.querySelector(
        "body > main > section.promo > div.promo__content.anatomi_promo_content > div.container > article.promo__item.-active > div > a.promo__link__item.anatomi_promo_anchor.item-dask"
      );
      if (target2) {
        target2.style.order = "5";
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
    const device = window.innerWidth > 768;
    return device;
};

if (anasayfa_redesign_condition()) {
    anasayfa_redesign_init();
}







//OKSUZ HALİ
/*
const anasayfa_redesign_html = () => {};

const anasayfa_redesign_css = () => {
    const style = `
      <style>    
      .anatomi_picture {
        display: none;
      }
      .anatomi_image_container {
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
        }
    .anatomi_promo_background{
    border-radius: 8px !important;
    border: 1px solid #80808036;
    box-shadow: none ;
    }
    .anatomi_promo_anchor{
        width: 300px;
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
    .anatomi_new_promo_link{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 150px;
    background-color: white;
    border: 1px solid #80808036;
    border-radius: 8px;
    margin: 6px;
    text-decoration: none;
    transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
    }
    .anatomi_new_promo_title{
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.1px;
    color: #474242;
    }
    .promo .container{
        width: 600px;
    }
    .anatomi_new_promo_link:hover{
    transform: scale(1.05);
    box-shadow: 0 10px 32px 0 rgba(168, 127, 127, 0.27);
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
            width: 80px;
        }
        .anatomi_promo_anchor:nth-child(5) img{
            height: 32px;
        }
        .anatomi_promo_anchor:nth-child(6) img{
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
      @media only screen and (max-width: 1439px) {
          
      }
    @media only screen and (min-width: 768px) and (max-width: 1280px) {
    .anatomi_promo_anchor, .anatomi_new_promo_link {
        min-width: 120px !important;
        width: 120px;
    }
    .promo .container{
        padding: 0px !important;
        width: 400px !important;
    }
    .promo__item.-active {
        width: 400px !important;
    }
    .anatomi_image_container{
    margin-right: 30px;
    margin-top: 25px;
    }
    .promo__title.-introduction{
    font-size: 24px !important;
    }
    .promo__desc{
    font-size: 14px !important;
    }
    .anatomi_promo_text, .anatomi_new_promo_title{
        font-size: 12px;
    }
    .anatomi_new_promo_link{
        padding: 10px;
    }
}
      @media only screen and (max-width: 768px) {
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
        .anatomi_new_promo_link{
            width: 169px !important;
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
            width: 80px;
        }
        .anatomi_promo_anchor:nth-child(5) img{
            height: 32px;
        }
        .anatomi_promo_anchor:nth-child(6) img{
           height: 36px;
        }
}
         @media only screen and (max-width: 375px){
            .anatomi_new_promo_link{
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

    const getImagesForScreen = () => {
        if (window.innerWidth < 1400) {
            return [
                { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo_amazon_dijital_kasko_550_437.jpg", link: "https://www.somposigorta.com.tr/kampanyalar" },
                { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo_puanim_550_437.jpg", link: "https://www.somposigorta.com.tr/kampanyalar/sompo-puanim-hos-geldin-kampanyasi" },
                { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/somponomi_550_437.jpg", link: "https://www.somposigorta.com.tr/somponomi" }
            ];
        } else {
            return [
                { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo_amazon_dijital_kasko_700_423.jpg", link: "https://www.somposigorta.com.tr/kampanyalar" },
                { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo_puanim_700_423.jpg", link: "https://www.somposigorta.com.tr/kampanyalar/sompo-puanim-hos-geldin-kampanyasi" },
                { src: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/somponomi_700_423.jpg", link: "https://www.somposigorta.com.tr/somponomi" }
            ];
        }
    };

    let images = getImagesForScreen();

    const renderImages = () => {
        imageContainer.innerHTML = "";
        images.forEach((image, index) => {
            const anchor = document.createElement("a");
            anchor.href = image.link;
            anchor.classList.add("anatomi-promo-link", `promo-link-${index + 1}`);

            if (index === 0) {
                anchor.classList.add("slider-trafik-kasko-sigortasi");
            } else if (index === 1) {
                anchor.classList.add("slider-sompo-puanim");
            } else if (index === 2) {
                anchor.classList.add("slider-somponomi");
            }

            const img = document.createElement("img");
            img.src = image.src;
            if (index === 0) img.classList.add("active");

            anchor.appendChild(img);
            imageContainer.appendChild(anchor);
        });

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

        const dots = imageContainer.querySelectorAll(".anatomi-dot");
        let currentIndex = 0;

        function updateActiveImage(index) {
            const imageElements = imageContainer.querySelectorAll("img");
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

        imageContainer.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
            isSwiping = false;
        });

        imageContainer.addEventListener("touchmove", (e) => {
            endX = e.touches[0].clientX;
            if (Math.abs(startX - endX) > 10) {
                isSwiping = true;
            }
        });

        imageContainer.addEventListener("touchend", (e) => {
            if (!isSwiping) return;
            e.preventDefault();

            if (startX - endX > 50) {
                currentIndex = (currentIndex + 1) % images.length;
            } else if (endX - startX > 50) {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
            }
            updateActiveImage(currentIndex);
        });

        const links = imageContainer.querySelectorAll(".anatomi-promo-link");
        links.forEach((link) => {
            link.addEventListener("click", (e) => {
                if (isSwiping) {
                    e.preventDefault();
                }
            });
        });
    };

    renderImages();

    window.addEventListener("resize", () => {
        const newImages = getImagesForScreen();
        if (JSON.stringify(newImages) !== JSON.stringify(images)) {
            images = newImages;
            renderImages();
        }
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
                        anchor.classList.add("item-trafik-sigortasi");
                      } else if (index === 1) {
                        anchor.classList.add("item-kasko-sigortasi");
                      } else if (index === 2) {
                        anchor.classList.add("item-tamamlayici-saglik");
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

            const targetElement = document.querySelector(
                "body > main > section.promo > div.promo__content.anatomi_promo_content > div.container > article.promo__item.-active:first-child > div > a:nth-child(4)"
            );
            
            if (targetElement && !document.querySelector(".anatomi_new_promo_link")) {
                const newAnchor = document.createElement("a");
                newAnchor.classList.add("anatomi_new_promo_link", "tamamlayici-saglik-dogum-paket");
                newAnchor.href = "https://www.somposigorta.com.tr/dogum-sigortasi"; 
            
                if (!newAnchor.querySelector(".anatomi_promo_image")) {
                    const image = document.createElement("img");
                    image.src = "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo-dogum-saglik.png";
                    image.alt = "Yeni Promo Resmi";
                    image.classList.add("anatomi_promo_image");
                    newAnchor.appendChild(image);
                }
                const title = document.createElement("span");
                title.textContent = "Tamamlayıcı Sağlık Doğum Paket";
                title.classList.add("anatomi_new_promo_title");
            
                newAnchor.appendChild(title);
            
                targetElement.parentNode.insertBefore(newAnchor, targetElement);
            }
            const dask = document.querySelector("body > main > section.promo > div.promo__content.anatomi_promo_content > div.container > article.promo__item.-active > div > a:nth-child(5)")
            if(dask && !dask.classList.contains("dask")){
                dask.classList.add("item-dask");
            }
            const seyahat = document.querySelector("body > main > section.promo > div.promo__content.anatomi_promo_content > div.container > article.promo__item.-active > div > span")
            if(seyahat && !seyahat.classList.contains("seyahat-sigortalari")){
                seyahat.classList.add("item-seyahat-sigortalari");
                }
            const promoH1Title = document.querySelector("body > main > section.promo > div.promo__content.anatomi_promo_content > div.container > article.promo__item.-active:first-child > h1")
            if(promoH1Title){
                promoH1Title.textContent = "Size Nasıl Yardımcı Olabiliriz?"
            }
            const promoPTitle = document.querySelector("body > main > section.promo > div.promo__content.anatomi_promo_content > div.container > article.promo__item.-active:first-child > p")
            if(promoPTitle){
                promoPTitle.textContent = "Sigorta teklif ve sorgulama işlemleri için seçiminizi yapınız."
                }
                    const tamamlayiciSaglikText = document.querySelector(
  "body > main > section.promo > div.promo__content > div > article.promo__item.-active > div > a:nth-child(3) > span.promo__link__text"
);

if (tamamlayiciSaglikText && tamamlayiciSaglikText.title === "Yurt Dışı Vize Seyahat") {
    tamamlayiciSaglikText.textContent = "Tamamlayıcı Sağlık";
}
    const covid = document.querySelector("body > main > section.promo > div.promo__content > div > article.promo__item.-active > div > a:nth-child(1)")
    if(covid && covid.title === "COVID-19 Yurt Dışı Seyahat"){
        covid.style.order = "3";
    }
    const yurtdisiEğitim = document.querySelector("body > main > section.promo > div.promo__content > div > article.promo__item.-active > div > a:nth-child(2)")
    if(yurtdisiEğitim && yurtdisiEğitim.title === "Yurt Dışı Eğitim Seyahat"){
        yurtdisiEğitim.style.order = "2";
   }

   const yurtdisiVize = document.querySelector("body > main > section.promo > div.promo__content > div > article.promo__item.-active > div > a:nth-child(3)")
    if(yurtdisiVize && yurtdisiVize.title === "Yurt Dışı Vize Seyahat"){
        yurtdisiVize.style.order = "1";
    }

   const tssDogum = document.querySelector(
        "body > main > section.promo > div.promo__content.anatomi_promo_content > div.container > article.promo__item.-active > div > a.anatomi_new_promo_link.tamamlayici-saglik-dogum-paket.anatomi_promo_anchor"
      );
      if (tssDogum) {
        tssDogum.style.order = "6";
      }
      const seyahatSigorta = document.querySelector(
        "body > main > section.promo > div.promo__content.anatomi_promo_content > div.container > article.promo__item.-active > div > span"
      );
      if (seyahatSigorta && seyahatSigorta.title === "Seyahat Sigortaları") {
        seyahatSigorta.style.order = "4";
      }
     
      const target2 = document.querySelector(
        "body > main > section.promo > div.promo__content.anatomi_promo_content > div.container > article.promo__item.-active > div > a.promo__link__item.anatomi_promo_anchor.item-dask"
      );
      if (target2) {
        target2.style.order = "5";
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
    const device = window.innerWidth > 768;
    return device;
};

if (anasayfa_redesign_condition()) {
    anasayfa_redesign_init();
}
*/ 