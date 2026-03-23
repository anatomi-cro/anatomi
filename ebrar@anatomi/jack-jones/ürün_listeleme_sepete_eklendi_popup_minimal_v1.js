const sepete_eklendi_popup_minimal_html = () => {};

const sepete_eklendi_popup_minimal_css = () => {
    const style = `
      <style id="sepete_eklendi_popup_minimal_css">    
      .flyout--minibasket{
        background-color: #000000 !important;
        padding: 0px 10px !important;
        width: 95% !important;
        top: unset !important;
        bottom: 80px !important;
      }
      .anatomi_line_item{
        box-shadow: none !important;
        border: none !important;
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
        padding: 10px 15px !important;
      }
    .anatomi_line_item_image_container{
        width: 40px !important;
    }
    .anatomi_line_item_image_container img{
        width: 40px !important;
        height: 40px !important;
    }
    .anatomi_article{
     box-shadow: none !important;
     margin-bottom: 0px !important;
    background-color: #000000 !important;
    }

    .anatomi_minibaket_title{
        color: white !important;
        font-size: 14px;
        margin: 0px !important;
        width: 150px;
        white-space: nowrap;  
    }
    .anatomi_basket_btn{
        text-align: right !important;
        padding-right: 15px !important;
       background-color: transparent !important;
    border-color: none !important;
    color: white !important;
        
    }
    .anatomi_basket_btn:hover{
        color: white !important;
        background-color: #000000 !important;
    }
    .anatomi_basket_btn span{
        font-weight: bold;
        font-size: 14px !important;
        text-transform: capitalize;
        text-decoration: underline;

    }
    .minibasket__icon-cross{
       z-index: 99;
       top: 8px !important;
       right: 8px !important;
    }
    .minibasket__icon-cross svg {
    --color: white !important;
    --hover-color: #003399;
    width: 10px !important; 
}
      </style>
    `;
    const css = document.querySelector("#sepete_eklendi_popup_minimal_css");
    const head = document.querySelector("head");
    if (!css) {
        head.insertAdjacentHTML("beforeend", style);
    }
   
};

const sepete_eklendi_popup_minimal_js = () => {
    const dahaFazlaGosterBtn = document.querySelector("#__layout > div > div:nth-child(6) > div:nth-child(2) > div > div > section > span > button")
    if(dahaFazlaGosterBtn){
        dahaFazlaGosterBtn.style.display = "none";
    }

    const lineItemOrj = document.querySelector("#__layout > div > div:nth-child(6) > div:nth-child(2) > div > div > article > div.line-item");
    if(lineItemOrj && !lineItemOrj.classList.contains("anatomi_line_item")){
        lineItemOrj.classList.add("anatomi_line_item");
    }

    const lineItemImgContainer = document.querySelector("#__layout > div > div:nth-child(6) > div:nth-child(2) > div > div > article > div > div.line-item__image-container");
    if(lineItemImgContainer && !lineItemImgContainer.classList.contains("anatomi_line_item_image_container")){
        lineItemImgContainer.classList.add("anatomi_line_item_image_container");
    }
    const article = document.querySelector("#__layout > div > div:nth-child(6) > div:nth-child(2) > div > div > article")
    if(article){
        article.classList.add("anatomi_article");
    }

    const miniBasketTitle = document.querySelector("#__layout > div > div:nth-child(6) > div:nth-child(2) > div > div > h5.minibaket__title");
    if(miniBasketTitle && !miniBasketTitle.classList.contains("anatomi_minibaket_title")){
        miniBasketTitle.classList.add("anatomi_minibaket_title");
    }

    const urunInfo = document.querySelector(".line-item__info-container");
    if(urunInfo){
        urunInfo.style.display = "none";
    }

const basketTitle = document.querySelector(".anatomi_minibaket_title");
if(basketTitle && basketTitle.textContent !== "Sepete Eklendi!"){
    basketTitle.textContent = "Sepete Eklendi!";
}

if (basketTitle && lineItemOrj) {
       if(!lineItemOrj.contains(basketTitle)){
        const newTitle = document.createElement("p");
        newTitle.className = basketTitle.className; 
        newTitle.innerHTML = basketTitle.innerHTML; 

        basketTitle.replaceWith(newTitle);
        lineItemOrj.insertAdjacentElement("beforeend", newTitle);    
       }
       
    
}
    const basketBtn =  document.querySelector("#__layout > div > div:nth-child(6) > div:nth-child(2) > div > div > section > button")
    if(basketBtn){
        basketBtn.classList.add("anatomi_basket_btn");
        basketBtn.setAttribute("style", "background-color: transparent !important; border: none !important; color: white !important;");
    }
    const basketBtnSpan =document.querySelector("#__layout > div > div:nth-child(6) > div:nth-child(2) > div > div > section > button > span")
    if(basketBtnSpan){
        basketBtnSpan.textContent = "Sepete Git";
    }

    if(basketBtn && lineItemOrj){
        lineItemOrj.appendChild(basketBtn);
    }

};

const sepete_eklendi_popup_minimal_init = () => {
    sepete_eklendi_popup_minimal_html();
    sepete_eklendi_popup_minimal_css();
    sepete_eklendi_popup_minimal_js();
};

const sepete_eklendi_popup_minimal_condition = () => {
    const device = window.innerWidth <= 768;
    const flyoutExists = document.querySelector(".flyout.flyout--minibasket.flyout--top");
    return device && flyoutExists;
};


const interval = setInterval(() => {
    if (sepete_eklendi_popup_minimal_condition()) {
        sepete_eklendi_popup_minimal_init();
    }
}, 100); 



