const taksit_one_cikarma_html = () => {};

const taksit_one_cikarma_css = () => {
    const style = `
      <style>    
      .anatomi_taksit_container {
        width: calc(100% + 50px);
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        padding: 5px;
        display: flex;
        text-align: left;
        justify-content: center;
        border: 1px solid #EAEAEA;
        margin-top: 20px;
        margin-left: -25px;
     align-items: center;
        gap: 10px;
}
          .anatomi_taksit_img{
         width: 22px;
    height: 22px;
     }

    .anatomi_taksit_p{
    width: 80%;
    color: #22A314;
    font-weight: bold;
    }

  
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const taksit_one_cikarma_js = () => {
    const generateTaksitContainer = () => {
        const targetElement = document.querySelector("body > main > section.image-detail > div.image-detail__content.-campaign > div > div.get-offer > button:nth-child(11)")
        let taksitContainer = document.querySelector(".anatomi_taksit_container");
        if (!taksitContainer) {
            taksitContainer = document.createElement("div");
            taksitContainer.classList.add("anatomi_taksit_container");

               let img = document.querySelector(".anatomi_taksit_img");
            if (!img) {
                img = document.createElement("img");
                img.classList.add("anatomi_taksit_img");
                img.src = "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo-taksit-icon.png"; 
                img.alt = "Taksit Icon";
                taksitContainer.appendChild(img);
            }

            let p = document.querySelector(".anatomi_taksit_p");
            if(!p){
                p = document.createElement("p");
                p.classList.add("anatomi_taksit_p");
               p.innerHTML = `DASK  ile konutunuzun deprem riskine karşı güvence altında olmasını sağlayabilirsiniz.`;
                taksitContainer.appendChild(p);
            }
            targetElement.insertAdjacentElement("afterend", taksitContainer);
        }

    };

    setInterval(() => {
        generateTaksitContainer();
    }, 100);
};

const taksit_one_cikarma_init = () => {
    taksit_one_cikarma_html();
    taksit_one_cikarma_css();
    taksit_one_cikarma_js();
};

const taksit_one_cikarma_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

if (taksit_one_cikarma_condition()) {
    taksit_one_cikarma_init();
}
