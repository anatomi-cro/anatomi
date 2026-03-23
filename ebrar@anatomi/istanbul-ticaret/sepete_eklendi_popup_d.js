const sepete_eklendi_popup_html = () => {};

const sepete_eklendi_popup_css = () => {
    const style = `
      <style class ="anatomi-sepete-eklendi-popup-css">
     /* SEPETE EKLENEN URUNLER CSS  */
     .anatomi_cart_item{
        border: none;
     }
    .anatomi_popup_title{
    display: flex;
    justify-content: space-between;
    border: none;
    margin: 0px;
    
    }
    .anatomi_popup_title .product-cart-title{
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 10px;
    }

    .anatomi_check_icon{
    color: white !important;
    background-color: green;
    border-radius: 50%;
    padding: 2px 7px;
    font-size: 16px !important;
    }
    .anatomi_sepete_git_btn{
    text-transform: capitalize !important;
    font-weight: 300;
    }
    .anatomi_satin_al_btn{
        background-color: #DDDDDD !important;
    border: none;
    color: black !important;
    text-transform: capitalize !important;
    font-weight: 300;
    }
    .anatomi_close_btn{
        top: 80px !important;
        right: 230px !important;
        color: #413C3C !important;
        box-shadow: none !important;
        position: static !important;
    }

      /* SANA OZEL URUNLER CSS  */
        .anatomi_onerilen_urunler {
          margin-top: 20px;

        }
        .anatomi_onerilen_urunler_title {
          font-size: 14px;
         margin-bottom: 10px;
        }
       .anatomi_urun_grup {
          display: flex;
          gap: 15px;
        }
       .anatomi_urun {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background: white;
        padding: 0px;
        border-radius: 8px;
        border: 1px solid #DDDDDD;
        text-align: center;
        width: 50%;
        }
        .anatomi_urun_title{
            border-top: 1px solid #DDDDDD;
            padding: 15px 15px;
            text-align: left;
            color: #333333;
            height: 80px;
        }
       .anatomi_urun img {
             width: 68%;
            height: 45%;
            object-fit: contain;
            border-radius: 5px;
            padding: 10px 0px;
        }
       .anatomi_urun p{
            margin: 0px;
        }
           .discounted {
  text-decoration: line-through;
  color: #BBBBBB;
  font-size: 12px;
}

        .anatomi_urun_discounted_price, .anatomi_urun_current_price{
            width: 100%;
            text-align: left;
            font-weight: bold;
            font-size: 16px;
            padding-left: 15px;
            
        }
       .anatomi_urun a {
          background-color: #43B54C;
        width: 100%;
        border-radius: 2px;
            padding: 8px;
        margin-top: 10px;
        color: white;
        }
         .cart-list{
        
                overflow-y: scroll;
    overflow-x: hidden;
        height: 80px;
        }
      @media screen and (max-width: 768px) {
           .anatomi_popup_wrapper{
               z-index: 99999999999 !important;
               bottom: 0px !important;
               top: unset !important;
               height: 70vh !important;
           }
            .anatomi_popup_container{
                padding: 0 !important;
            }
        .t-modal-wrapper .t-modal-content{
            border-top: 2px solid #DDDDDD;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        }
        .t-modal-wrapper .t-modal-backdrop{
            background-color: white !important;
        }
        #popup-cart{
            padding-top: 0px !important;
        }
        .cart-list{
            overflow-y: scroll;
            height:80px;
        }
          }

      </style>
    `;
    const head = document.querySelector("head");
    const css = document.querySelector(".anatomi-sepete-eklendi-popup-css");
    if (!css) {
        head.insertAdjacentHTML("beforeend", style);
      }
};

let currentGroupIndex = 0;
let lastPopupState = false;

const sepete_eklendi_popup_js = () => {
    const generatePopupCss = () => {
        const countInfo = document.querySelectorAll("#popup-cart > div.col-12 > div > div.col-12.cart-list > div > div > div > div.col-9.pl-0 > div.w-100.d-flex.align-items-flex-end > div.pl-1.count-info.text-black")
        if(countInfo){
            countInfo.forEach((item) => {
                item.style.display = "none";
            });
            
        }
        const cartItem = document.querySelectorAll("#popup-cart > div.col-12 > div > div.col-12.cart-list > div > div")
        if(cartItem){
            cartItem.forEach((item) => {
                item.classList.add("anatomi_cart_item");
            });
        }
        popupTitle = document.querySelector("#popup-cart > div.col-12 > div > div.col-12.mb-1.pb-1.border-bottom.border-secondary")
        if(popupTitle){
            popupTitle.classList.add("anatomi_popup_title");
            }
        popupTitleSpan = document.querySelector("#popup-cart > div.col-12 > div > div.col-12.mb-1.pb-1.border-bottom.border-secondary.anatomi_popup_title > div > span")
        if(popupTitleSpan){
            popupTitleSpan.textContent = "Ürün Sepetinize Eklendi";
            }
        const checkIcon = document.querySelector("#popup-cart > div.col-12 > div > div.col-12.mb-1.pb-1.border-bottom.border-secondary > div > i")
        if(checkIcon){
            checkIcon.classList.add("anatomi_check_icon");
        }
        const sepeteGitBtn = document.querySelector("#cart-popup-go-cart")
        if(sepeteGitBtn){
            sepeteGitBtn.classList.add("anatomi_sepete_git_btn");
            }
           const closeBtn = document.querySelector("#t-modal-close-1")
        if(closeBtn){
            closeBtn.classList.add("anatomi_close_btn");
            }
        const satinAlBtn = document.querySelector("#popup-cart > div.col-12 > div > div.col-12.p-0 > div > div:nth-child(2) > a")
        if(satinAlBtn){
            satinAlBtn.classList.add("anatomi_satin_al_btn");
            satinAlBtn.textContent = "Alışverişe Devam";
            satinAlBtn.href = "";
            satinAlBtn.addEventListener("click", () => {
                closeBtn.click();
            })
            }
        const tModalWrapper = document.querySelector("#modal-popup-cart")
        if(tModalWrapper){
            tModalWrapper.classList.add("anatomi_popup_wrapper");
            }
        const tModalContainer = document.querySelector("#modal-popup-cart > div")
        if(tModalContainer){
            tModalContainer.classList.add("anatomi_popup_container");
            }
        const popupTitleContainer = document.querySelector("#popup-cart > div.col-12 > div > div.col-12.mb-1.pb-1.border-bottom.border-secondary.anatomi_popup_title");

        if (closeBtn && popupTitleContainer) {
                popupTitleContainer.appendChild(closeBtn); 
            } 
        const brand = document.querySelectorAll("#popup-cart > div.col-12 > div > div.col-12.cart-list > div > div > div > div.col-9.pl-0 > div.brand.fw-bold")
        if(brand){
            brand.forEach((item) => {
                item.style.display = "none";
            });
            }

    }
    const generatePopup = () => {
        const targetElement = document.querySelector("#popup-cart");

        if (document.querySelector(".anatomi_onerilen_urunler")) return;
    
    
        const onerilenUrunler = document.createElement("div");
        onerilenUrunler.classList.add("anatomi_onerilen_urunler");
    
        const onerilenUrunlerTitle = document.createElement("p");
        onerilenUrunlerTitle.classList.add("anatomi_onerilen_urunler_title");
        onerilenUrunlerTitle.textContent = "Sana Özel Ürünler";
        onerilenUrunler.appendChild(onerilenUrunlerTitle);
    
        const urunGrup = document.createElement("div");
        urunGrup.classList.add("anatomi_urun_grup");
    
         const urunler = [
            { img: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-popup-urun-1.jpg", title: "Polly Boot Galaxy Vega S5 İş Çizmesi ", currentPrice: "1.316,00 TL", discountedPrice: "1.100,00 TL", link: "https://www.istanbulticaret.com/polly-boot-galaxy-vega-s5-is-cizmesi" },
            { img: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-popup-urun-2.jpg", title: "Maxeo Pegasus S1P Fiberglas Burun İş Güvenliği Ayakkabısı", currentPrice: "1.304,00 TL", discountedPrice: "1.112,00 TL", link: "https://www.istanbulticaret.com/maxeo-pegasus-s1p-fiberglas-burun-is-guvenligi-ayakkabisi" },
            { img: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-popup-urun-3.jpg", title: "Ansell Edge 48-919 Yağ Dirençli Nitril İş Eldiveni", currentPrice: "143,00 TL", discountedPrice: "", link: "https://www.istanbulticaret.com/ansell-edge-48-919-nitril-kapli-yag-tutmayan-ve-cok-amacli-koruma-is-eldiveni" },
            { img: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-popup-urun-4.jpg", title: "Maxeo Dıon S3 Fiberglas Burun İş Güvenliği Ayakkabısı", currentPrice: "1.163,00 TL", discountedPrice: "1.028,00 TL", link: "https://www.istanbulticaret.com/maxeo-dion-s3-fiberglas-burun-is-guvenligi-ayakkabisi" },
            { img: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-popup-urun-5.jpg", title: "Maxeo Atlas-C S1P Fiberglas Burun İş Güvenliği Ayakkabısı", currentPrice: "918,00 TL", discountedPrice: "812,00 TL", link: "https://www.istanbulticaret.com/maxeo-atlas-c-s1p-fiberglas-burun-is-guvenligi-ayakkabisi" },
            { img: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-popup-urun-6.jpg", title: "Polly Boot X-Power Rigger S4 İş Çizmesi", currentPrice: "1.843,00 TL", discountedPrice: "1.540,00 TL", link: "https://www.istanbulticaret.com/polly-boot-x-power-rigger-s4-is-cizmesi" },
            { img: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-popup-urun-7.jpg", title: "Polly Boot Galaxy Vega S4 İş Çizmesi", currentPrice: "1.241,00 TL", discountedPrice: "1.037,00 TL", link: "https://www.istanbulticaret.com/polly-boot-galaxy-vega-s4-is-cizmesi" },
            { img: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-popup-urun-8.png", title: "3M SF101AF-BLK-EU İş Güvenliği Gözlüğü", currentPrice: "247,00 TL", discountedPrice: "", link: "https://www.istanbulticaret.com/3m-sf101af-blk-eu-is-guvenligi-gozlugu" },
            { img: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-popup-urun-9.jpg", title: "3M SecureFit X5501V-CE Havalandırmalı Güvenlik Bareti", currentPrice: "2.742,00 TL", discountedPrice: "", link: "https://www.istanbulticaret.com/3m-securefit-x5501v-ce-havalandirmali-guvenlik-bareti" },
            { img: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-popup-urun-10.png", title: "Dolphin Pop Touch Siyah Polyester Poliüretan İş Eldiveni", currentPrice: "23,00 TL", discountedPrice: "", link: "https://www.istanbulticaret.com/dolphin-pop-touch-siyah-polyester-poliuretan-is-eldiveni" },
            { img: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-urun-popup-11.jpg", title: "Dolphin Pudrasız Ekstra Kalın Siyah Nitril Eldiven (100 Adet-Kutu)", currentPrice: "225,50 TL", discountedPrice: "", link: "https://www.istanbulticaret.com/dolphin-pudrasiz-ekstra-kalin-siyah-nitril-eldiven-100-adet-kutu" },
            { img: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-sepet-popup-12.jpg", title: "Ansell 92-600 Kimyasal Korumalı Kullanat Nitril İş Eldiveni (100 Adet-Kutu)", currentPrice: "690,00 TL", discountedPrice: "", link: "https://www.istanbulticaret.com/ansell-touchntuff-92-600-kimyasal-korumali-nitril-eldiven-100-adet/kutu" },
            { img: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-popup-urun-13.jpg", title: "Polly Rain PU Alt Üst Takım Reflektörlü Yağmurluk", currentPrice: "2.149,00 TL", discountedPrice: "", link: "https://www.istanbulticaret.com/polly-rain-pu-alt-ust-takim-reflektorlu-yagmurluk" },
            { img: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-popup-urun-14.jpg", title: "Polly Rain PVC Fermuarlı Pardesü Yağmurluk", currentPrice: "715,00 TL", discountedPrice: "598,00 TL", link: "https://www.istanbulticaret.com/polly-rain-pvc-fermuarli-pardesu-yagmurluk" },
            { img: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-popup-urun-15.jpg", title: "Maxeo Atlas-C S1 Fiberglas Burun İş Güvenliği Ayakkabısı", currentPrice: "855,00 TL", discountedPrice: "756,00 TL", link: "https://www.istanbulticaret.com/maxeo-atlas-c-s1-fiberglas-burun-is-guvenligi-ayakkabisi" },
            { img: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-popup-urun-16.jpg", title: "Goodyear Aero Black S1PL ESD HRO Fiberglas Burun İş Güvenliği Ayakkabısı", currentPrice: "2.490,00 TL", discountedPrice: "", link: "https://www.istanbulticaret.com/goodyear-aero-black-s1p-esd-hro-fiberglas-burun-is-guvenligi-ayakkabisi" },
            { img: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-popup-urun-17.jpg", title: "Maxeo Atlas-C S1P Fiberglas Burun İş Güvenliği Ayakkabısı", currentPrice: "918,00 TL", discountedPrice: "812,00 TL", link: "https://www.istanbulticaret.com/maxeo-atlas-c-s1p-fiberglas-burun-is-guvenligi-ayakkabisi" },
            { img: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-sepet-popup-18.png", title: "Polly Boot Orion O4 Korumasız Göğüs Çizmesi", currentPrice: "3.760,00 TL", discountedPrice: "3.142,00 TL", link: "https://www.istanbulticaret.com/polly-boot-orion-o4-korumasiz-gogus-cizmesi" },
            { img: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-popup-urun-19.png", title: "Dolphin PON7 Beyaz/Sarı Nitril Polyester İş Eldiveni", currentPrice: "23,00 TL", discountedPrice: "", link: "https://www.istanbulticaret.com/dolphin-pon7-beyaz/sari-nitril-polyester-is-eldiveni" },
            { img: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/ist-tic-popup-urun-20.png", title: "Polly Boot Uzun Termal Çorap", currentPrice: "621,00 TL", discountedPrice: "346,00 TL", link: "https://www.istanbulticaret.com/polly-boot-uzun-termal-corap" }
        ];
    
        const startIndex = (currentGroupIndex % 10) * 2;
        const selectedProducts = urunler.slice(startIndex, startIndex + 2);
    
        selectedProducts.forEach(urunData => {
            const urun = document.createElement("div");
            urun.classList.add("anatomi_urun");
    
            const img = document.createElement("img");
            img.src = urunData.img;
            img.alt = urunData.title;
    
            const title = document.createElement("p");
            title.textContent = urunData.title;
            title.classList.add("anatomi_urun_title");

            const currentPrice = document.createElement("p");
            currentPrice.textContent = urunData.currentPrice;
            currentPrice.classList.add("anatomi_urun_current_price");

            const discountedPrice = document.createElement("p");
            discountedPrice.textContent = urunData.discountedPrice;
            discountedPrice.classList.add("anatomi_urun_discounted_price");

             if (urunData.discountedPrice !== "") {
                    currentPrice.classList.add("discounted");
                }
                
    
            const link = document.createElement("a");
            link.href = urunData.link;
            link.textContent = "İncele";
    
            urun.appendChild(img);
            urun.appendChild(title);
            urun.appendChild(currentPrice);
            urun.appendChild(discountedPrice);
            urun.appendChild(link);
            urunGrup.appendChild(urun);
        });
    
        onerilenUrunler.appendChild(urunGrup);
        targetElement.insertAdjacentElement("beforeend", onerilenUrunler);
    
    }
    generatePopupCss();
   generatePopup();
};

const sepete_eklendi_popup_init = () => {
    sepete_eklendi_popup_html();
    sepete_eklendi_popup_css();
    sepete_eklendi_popup_js();
};

const sepete_eklendi_popup_condition = () => {
    return document.querySelector(".t-modal-content") !== null;
};

setInterval(() => {
    const isMobile = window.innerWidth > 768; 
    if (!isMobile) return;
    const isPopupOpen = sepete_eklendi_popup_condition();

    if (isPopupOpen && !lastPopupState) {
        sepete_eklendi_popup_init();
        currentGroupIndex = (currentGroupIndex + 1) % 10;
    }

    lastPopupState = isPopupOpen;
}, 100);