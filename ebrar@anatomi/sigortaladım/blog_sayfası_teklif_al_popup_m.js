const bs_teklif_al_popup_html = () => {
    const html = `
    `;
  }
  const bs_teklif_al_popup_css =() => {
    const style = `
      <style id="anatomi_bs_teklif_al_popup_css">
       .anatomi_sticky_div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap:10px;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: white;
        color: white;
        border-top : 3px solid #e7e7e7;
        text-align: center;
        padding: 15px 0;
        z-index: 9999999999999;
        }

        .anatomi_trafik_sigortası_div , .anatomi_kasko_sigortası_div{
       display: flex;
        justify-content: space-around;
        align-items: center;
        border: 1px solid #8080806e;
        width: 80%;
        margin: 0 auto;
        padding: 10px;
        border-radius: 5px;
        }
        .anatomi_trafik_sigortası_text , .anatomi_kasko_sigortası_text{
        color:black;
        }

        .anatomi_trafik_sigortası_btn , .anatomi_kasko_sigortası_btn{
        background-color: #4373f6;
        border: none;
        color: white;
        padding: 10px 30px;
        border-radius: 5px;
        cursor: pointer;
    }

    </style>
    `;
    const head = document.querySelector("head");
    const css = document.querySelector("#anatomi_bs_teklif_al_popup_css");
    if(!css){
        head.insertAdjacentHTML("beforeend", style);
    }
  }
  const bs_teklif_al_popup_js = () => {

    const generateStickyButon = () => {
        const body = document.querySelector("body");
            if (!document.querySelector(".anatomi_sticky_div")) {
                const stickyDiv = document.createElement("div");
                stickyDiv.classList.add("anatomi_sticky_div");
                body.appendChild(stickyDiv);
            
        if(!document.querySelector(".anatomi_trafik_sigortası_div")){
        const trafikSigorasıDiv = document.createElement("div");
        trafikSigorasıDiv.classList.add("anatomi_trafik_sigortası_div");
        stickyDiv.appendChild(trafikSigorasıDiv);


        if(!document.querySelector(".anatomi_trafik_sigortası_img")){
         const trafikSigortasiImg = document.createElement("img");
         if(!trafikSigortasiImg.classList.contains("anatomi_trafik_sigortası_img")){
             trafikSigortasiImg.classList.add("anatomi_trafik_sigortası_img");
         }
         trafikSigortasiImg.src = "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sg-trafik-icon.png";
         trafikSigorasıDiv.appendChild(trafikSigortasiImg);
        }
        if(!document.querySelector(".anatomi_trafik_sigortası_text")){
         const trafikSigortasiText = document.createElement("p");
         if(!trafikSigortasiText.classList.contains("anatomi_trafik_sigortası_text") && !trafikSigortasiText.textContent.trim().includes("Trafik Sigortası")){
            trafikSigortasiText.textContent = "Trafik Sigortası";
            trafikSigortasiText.classList.add("anatomi_trafik_sigortası_text");
         }
         trafikSigorasıDiv.appendChild(trafikSigortasiText);

        }
        if(!document.querySelector(".anatomi_trafik_sigortası_link")){
            const trafikSigortasiLink = document.createElement("a");
            trafikSigortasiLink.href = "https://www.sigortaladim.com/zorunlu-trafik-sigortasi";
            trafikSigortasiLink.classList.add("anatomi_trafik_link");
            trafikSigorasıDiv.appendChild(trafikSigortasiLink);
       
        if( !document.querySelector(".anatomi_trafik_sigortası_btn")){
            const trafikSigortasiBtn = document.createElement("button");
            if(!trafikSigortasiBtn.classList.contains("anatomi_trafik_sigortası_btn") && !trafikSigortasiBtn.textContent.trim().includes("Teklif Al")){
            trafikSigortasiBtn.textContent = "Teklif Al";
            trafikSigortasiBtn.classList.add("anatomi_trafik_sigortası_btn");
            }
            trafikSigortasiLink.appendChild(trafikSigortasiBtn);
        }
    }
    }
       if(!document.querySelector(".anatomi_kasko_sigortası_div")){
            const kaskoSigortasıDiv = document.createElement("div");
            kaskoSigortasıDiv.classList.add("anatomi_kasko_sigortası_div");
            stickyDiv.appendChild(kaskoSigortasıDiv);

            if(!document.querySelector(".anatomi_kasko_sigortası_img")){
                const kaskoSigortasiImg = document.createElement("img");
                if(!kaskoSigortasiImg.classList.contains("anatomi_kasko_sigortası_img")){
                    kaskoSigortasiImg.classList.add("anatomi_kasko_sigortası_img");
                }
                kaskoSigortasiImg.src = "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sg-kasko-icon.png";
                kaskoSigortasıDiv.appendChild(
                    kaskoSigortasiImg);
               }
               if(!document.querySelector(".anatomi_kasko_sigortası_text")){
                const kaskoSigortasiText = document.createElement("p");
                if(!kaskoSigortasiText.classList.contains("anatomi_kasko_sigortası_text") && !kaskoSigortasiText.textContent.trim().includes("Kasko Sigortası")){
                    kaskoSigortasiText.textContent = "Kasko Sigortası";
                    kaskoSigortasiText.classList.add("anatomi_kasko_sigortası_text");
                }
                kaskoSigortasıDiv.appendChild(kaskoSigortasiText);
       
               }
               if(!document.querySelector(".anatomi_kasko_sigortası_link")){
                const kaskoSigortasiLink = document.createElement("a");
                kaskoSigortasiLink.href = "https://www.sigortaladim.com/kasko-sigortasi";
                kaskoSigortasiLink.classList.add("anatomi_kasko_link");
                kaskoSigortasıDiv.appendChild(kaskoSigortasiLink);
         
               if( !document.querySelector(".anatomi_kasko_sigortası_btn")){
                   const kaskoSigortasiBtn = document.createElement("button");
                   if(!kaskoSigortasiBtn.classList.contains("anatomi_kasko_sigortası_btn") && !kaskoSigortasiBtn.textContent.trim().includes("Teklif Al")){
                    kaskoSigortasiBtn.textContent = "Teklif Al";
                    kaskoSigortasiBtn.classList.add("anatomi_kasko_sigortası_btn");
                   }
                   kaskoSigortasiLink.appendChild(kaskoSigortasiBtn);
               }
            }
        
        }


        }
    }

    

    generateStickyButon();
    
  }
  const bs_teklif_al_popup_init = () => {
    bs_teklif_al_popup_html();
    bs_teklif_al_popup_css();
    bs_teklif_al_popup_js();
  }
  const bs_teklif_al_popup_condition = () => {
    const device = window.innerWidth <= 768;
    const location = window.location.href === "https://www.sigortaladim.com/51-2-a-trafik-cezasi-nedir";
    return device;
  }
  setInterval(() => {
    if(bs_teklif_al_popup_condition()){
        bs_teklif_al_popup_init();
      }
  }, 100);