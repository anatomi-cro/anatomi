const sepet_sayfasi_yonlendirme_html = () => {};

const sepet_sayfasi_yonlendirme_css = () => {
    const style = `
      <style id="anatomi_sepet_sayfasi_yonlendirme_css">    
      #SepetForm{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
        #cartEmpty{
        font-size: 20px;
        text-align: center;      
        line-height: 100px; 
        }
        #cartEmpty:before {
        display: none !important;
        }
        .anatomi_sepet_img{
        width: 70px;
      }

      .anatomi_yonlendirme_button{
        background-color: #397CB8;
        color: white;
        border: none;
        padding: 15px 35px;
        font-size: 18px;
        cursor: pointer;
        margin-bottom: 100px;
      }

      @media (max-width: 768px) {
      .anatomi_yonlendirme_button{
        padding: 12px 35px;
        font-size: 16px;
      }
}
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
    const css = document.querySelector("#anatomi_sepet_sayfasi_yonlendirme_css");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const sepet_sayfasi_yonlendirme_js = () => {
    const cartEmpty = document.querySelector("#cartEmpty")
    if(cartEmpty && !cartEmpty.textContent == "Sepetinizde Ürün Bulunmamaktadır!") {
        cartEmpty.textContent = "Sepetinizde Ürün Bulunmamaktadır!";
    }

    const targetElement = document.querySelector("#SepetForm");

    let sepetImg = document.querySelector(".anatomi_sepet_img");
    if(!sepetImg){
       const sepetImg = document.createElement("img");
    sepetImg.src = "https://resmim.net/cdn/2025/05/31/THvyLb.png";
    sepetImg.classList.add("anatomi_sepet_img");

    targetElement.insertAdjacentElement("afterbegin", sepetImg);


    }
   
   let yonlendirmeBtn = document.querySelector(".anatomi_yonlendirme_button");
    if(!yonlendirmeBtn){
        const yonlendirmeBtn = document.createElement("a");
    yonlendirmeBtn.classList.add("anatomi_yonlendirme_button");
    yonlendirmeBtn.href = "https://elektrix.com/";
    yonlendirmeBtn.innerHTML = "Alışverişe Başla";
    
    targetElement.insertAdjacentElement("beforeend", yonlendirmeBtn);
    }
    
    
};

const sepet_sayfasi_yonlendirme_init = () => {
    sepet_sayfasi_yonlendirme_html();
    sepet_sayfasi_yonlendirme_css();
    sepet_sayfasi_yonlendirme_js();
};

const sepet_sayfasi_yonlendirme_condition = () => {
    const product = document.querySelector(".productRow");
    const device = window.innerWidth <= 768;
    return device && !product;
};

setInterval(() => {
  if (sepet_sayfasi_yonlendirme_condition()) {
    sepet_sayfasi_yonlendirme_init();
}
},1000)





