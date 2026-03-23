const harita_adimi_rd_html = () => {};

const harita_adimi_rd_css = () => {
    const style = `
      <style id="anatomi_harita_adimi_rd_css">    
      .anatomi_harita_container{
        display: flex;
        flex-direction: row-reverse;
      }
      .anatomi_sube_container{
        background-color: #F6F6F6;
        border-radius: 8px;
        padding: 30px;
      }
      .anatomi_sube_container h3{
          text-transform: capitalize ;
          text-decoration: underline;
      }
      .anatomi_sube_container ul{
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      .anatomi_sube_container li{
       display: flex;
       justify-content: space-between;
      }
      .anatomi_sube_container li span , .anatomi_sube_container li strong{
       font-size: 16px;
      }
        .anatomi_sube_container .mybtn {
            background: none !important;
        }
       .anatomi_sube_container .mybtn span{
           background: none !important;
           padding-right: 0 !important;
           padding-left: 20px !important;
           display: flex;
           align-items: center;
           text-transform: capitalize;
           color: #6C7379;
           font-size: 14px;
       }
       .anatomi_sube_container .mybtn span::before {
        content: "";
        position: absolute;
        width: 14px;
        height: 14px;
        background-image: url("https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/carglass-harita-adimi-prev-icon.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        left: 35px;
      }

    .anatomi_harita_button_container{
        display: flex;
    justify-content: space-between;
    align-items: center;
    }
     .anatomi_ileri_btn{
    background-color: #5CB65C !important;
    background-image: none;
    border: none;
    padding: 15px 40px;

     }
     .anatomi_ileri_btn i{
       display: none !important;
       
        }

     #mapmaker{
      height: 100% !important;
      border-radius: 8px;
     }
      </style>
    `;
    const css = document.querySelector("#anatomi_harita_adimi_rd_css");
    const head = document.querySelector("head");
    if(!css){
    head.insertAdjacentHTML("beforeend", style);
    }
};

const harita_adimi_rd_js = () => {

    const generateClasses = () => {
        const haritaContainer = document.querySelector("#frmRandevu > div.steps.step1 > div");
        if(haritaContainer){
            haritaContainer.classList.add("anatomi_harita_container");
        }
        const subeContainer = document.querySelector("#frmRandevu > div.steps.step1 > div > div.sidebar.span4");
        if(subeContainer){
            subeContainer.classList.add("anatomi_sube_container");
        }

        const geriDonBtn = document.querySelector("#frmRandevu > div.steps.step1 > div > div.sidebar.span4.anatomi_sube_container > a");
        const geriDonBtnSpan = document.querySelector("#frmRandevu > div.steps.step1 > div > div.sidebar.span4.anatomi_sube_container > a > span");
        if (geriDonBtnSpan && geriDonBtnSpan.textContent !== "Önceki Adım") {
         geriDonBtnSpan.textContent = "Önceki Adım";
        }

        const ileriBtn = document.querySelector("#content > div > div.row > div > a.btn.btn-success.btn-large.pull-right.btnNextPage");
        if(ileriBtn){
            ileriBtn.classList.add("anatomi_ileri_btn");
        }

        if(geriDonBtn && ileriBtn){
            geriDonBtn.insertAdjacentElement("afterend", ileriBtn);
        }

        let butonContainer = document.querySelector(".anatomi_harita_button_container");
        if(!butonContainer){
            butonContainer = document.createElement("div");
            butonContainer.classList.add("anatomi_harita_button_container");
           document.querySelector("#frmRandevu > div.steps.step1 > div > div.sidebar.span4.anatomi_sube_container > p").insertAdjacentElement("afterend", butonContainer);

           butonContainer.appendChild(geriDonBtn);

          const oldBtnContainer = document.querySelector("#content > div > div.row > div");
        setInterval(() => {
            const formStep1 = document.querySelector("#frmRandevu > div.steps.step1");
            if (!formStep1 || !ileriBtn) return;

            const displayValue = window.getComputedStyle(formStep1).display;

            if (displayValue === "block") {
            if (!butonContainer.contains(ileriBtn)) {
                butonContainer.appendChild(ileriBtn);
            }
            } else {
            if (!oldBtnContainer.contains(ileriBtn)) {
                oldBtnContainer.appendChild(ileriBtn);
            }
            }
        }, 200); 
        };
        
    }



    generateClasses();
};

const harita_adimi_rd_init = () => {
    harita_adimi_rd_html();
    harita_adimi_rd_css();
    harita_adimi_rd_js();
};

const harita_adimi_rd_condition = () => {
    const device = window.innerWidth > 768;
    return device;
};

setInterval(() => {
if (harita_adimi_rd_condition()) {
    harita_adimi_rd_init();
}    
},50)

