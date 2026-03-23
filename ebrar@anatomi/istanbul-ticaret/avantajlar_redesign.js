const avantajlar_redesign_html = () => {};

const avantajlar_redesign_css = () => {
    const style = `
      <style>    
      .anatomi_avantajlar_container{
        height: 300px;
      }
      .anatomi_avantajlar{
        align-items: center !important;
        margin-bottom: 20px;
        height: 170px;
       border: 2px solid var(--border-primary) !important;
      }
    .anatomi_avantaj_title .data1{
        font-size: 14px !important;

    }
    .anatomi_avantaj_title .data2{
        font-size: 14px !important;

    }
    .anatomi_avantajlar img{
        width: 50px;
        height: 45px;
    }

    @media screen and (min-width: 992px) and (max-width: 1200px) {
    .anatomi_avantajlar {
        height: 150px !important;
    }
}

@media screen and (max-width: 992px) {
    .anatomi_avantajlar_container {
        height: 600px;
    }
    .anatomi_avantajlar {
       height: 150px !important;
        width: 150px;
        margin: 0 auto 20px;
    }
}
    @media screen and (max-width: 768px){
        .anatomi_avantajlar_container {
        height: 750px;
    }

    }

      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const avantajlar_redesign_js = () => {

    const generateAvantajlar = () => {

        for (let i = 1; i <= 5; i++) {
            const title = document.querySelector(`#relation\\|577 > div > div > div > div:nth-child(${i}) > div > div.w-100.d-flex.flex-wrap.text-center.icon-content.pb-1`);
            const targetElement = document.querySelector(`#relation\\|577 > div > div > div > div:nth-child(${i}) > div`);
            
            if (title && targetElement) {
                title.classList.add("anatomi_avantaj_title");
                targetElement.insertAdjacentElement("afterend", title);
            }
        }
            
        const avantajlarContainer = document.querySelectorAll("#relation\\|577 > div > div > div > div > div.col-12.h-100.d-flex.justify-content-center.flex-wrap.align-items-flex-start.icon-box.border.border-primary.border-circle.gap-1.p-1")
        avantajlarContainer.forEach(element => {
                element.classList.add("anatomi_avantajlar")
                })

        const relation577 = document.querySelector("#relation\\|577");
        if(relation577){
            relation577.classList.add("anatomi_avantajlar_container");
        }
        const avantajlar = document.querySelectorAll("#relation\\|577 > div > div > div > div");
        avantajlar.forEach(element => {
            element.classList.add("anatomi_avantajlar_item")
            })

            const imageUrls = [
                "https://cro-anatomi.s3.eu-north-1.amazonaws.com/istanbul-ticaret-alisveris.png",
                "https://cro-anatomi.s3.eu-north-1.amazonaws.com/istanbul-ticaret-kredi-karti.png",
                "https://cro-anatomi.s3.eu-north-1.amazonaws.com/istanbul-ticaret-kargo.png",
                "https://cro-anatomi.s3.eu-north-1.amazonaws.com/istanbul-ticaret-guvence.png",
                "https://cro-anatomi.s3.eu-north-1.amazonaws.com/istanbul-ticaret-iade.png"
            ];
            
            for (let i = 1; i <= imageUrls.length; i++) {
                const image = document.querySelector(`#relation\\|577 > div > div > div > div:nth-child(${i}) > div.col-12.h-100.d-flex.justify-content-center.flex-wrap.align-items-flex-start.icon-box.border.border-primary.border-circle.gap-1.p-1.anatomi_avantajlar > div > picture > img`);
                if (image) {
                    image.src = imageUrls[i - 1]; 
                }
            }  
    }
    setInterval (() => {
    generateAvantajlar();
    
     }, 100);
};

const avantajlar_redesign_init = () => {
    avantajlar_redesign_html();
    avantajlar_redesign_css();
    avantajlar_redesign_js();
};

const avantajlar_redesign_condition = () => {
    return true;
};

if (avantajlar_redesign_condition()) {
    avantajlar_redesign_init();
}
