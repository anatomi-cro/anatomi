const urun_detay_sticky_buton_rd_html = () => {};
const urun_detay_sticky_buton_rd_css = () => {
    const style = `
      <style>    
      .anatomi_mobile_buy_btn{
        display: flex;
        flex-direction: column-reverse;
        padding-bottom: 0px !important;
      }
      .anatomi_buy_btn_container{
        display: flex;
        height: 70px;
        justify-content: center;
        align-items: center;
        padding: 10px;
      }
     .anatomi_buy_btn{
         background: #128F3E !important;
    border-radius: 3px;
    display: flex !important;
    justify-content: center;
    align-items: center;
     }
    .divOzelAlan5:nth-child(2) , .divOzelAlan5:nth-child(3){
        display: none !important;
    }
      .anatomi_kampanya_yazisi{
        background-color: #128F3E;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
      }
      .anatomi_kampanya_yazisi span{
          color: white !important;
          padding: 0px !important;
      }
    .anatomi_prices_discount{
    flex-direction: row-reverse;
    justify-content: center;
    }
    .anatomi_product_discount{
     background: none !important;
    color: black !important;
    font-size: 12px !important;
    position: relative;
    top: -7px;
    right: 49px;
    }
    .anatomi_main_prices_box{
    width: 95px;
    }
    .anatomi_discounted_price{
    color: #888686 !important
    font-size: 10px !important;
    }
    .anatomi_discount_price{
    font-size: 16px !important;
    }
    #backToTopBtn{
        bottom: 100px !important;
    }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};
const urun_detay_sticky_buton_rd_js = () => {
    const generateClasses = () => {
        const mobileBuyBtnContainer = document.querySelector("#mobileBuyBtn")
        if(mobileBuyBtnContainer){
            mobileBuyBtnContainer.classList.add("anatomi_mobile_buy_btn");
        }
        const buyBtn = document.querySelector("#mobileBuyBtn > div.fl.col-12.buyBtn")
        if(buyBtn){
            buyBtn.classList.add("anatomi_buy_btn_container");
        }
        const stickyKampanyaYazisi = document.querySelectorAll("#sticky-kampanyaYazisiDetay")
        if(stickyKampanyaYazisi){
            stickyKampanyaYazisi.forEach(element => {
                element.classList.add("anatomi_kampanya_yazisi");
            });
        }
        const stickyKampanyaYazisiSpan = document.querySelector("#sticky-kampanyaYazisiDetay > span")
        if(stickyKampanyaYazisiSpan){
            stickyKampanyaYazisiSpan.setAttribute("style", "padding: 0px !important; , color: white !important;");
        }
        const parent = document.querySelector(".anatomi_kampanya_yazisi");
        if (parent) {
        const children = parent.querySelectorAll(".kampanyaYazisiDetay");
        const allHidden = Array.from(children).every(
            el => window.getComputedStyle(el).display === "none"
        );
        if (allHidden) {
            parent.style.display = "none";
        }
        }
        const parents = document.querySelectorAll(".anatomi_kampanya_yazisi");
        if (parents.length > 1) {
        const secondParent = parents[1]; 
        if (secondParent.innerHTML.trim() === "") {
            secondParent.style.display = "none";
        }
        }
        const addToCartBtn =document.querySelector("#addCartBtn");
        if(addToCartBtn){
            addToCartBtn.classList.add("anatomi_buy_btn");
            addToCartBtn.setAttribute("style", "height: 50px !important;");
        }
        const pricesDiscount = document.querySelector("#mobileBuyBtn > div.fl.col-12.buyBtn.anatomi_buy_btn_container > div")
        if(pricesDiscount){
            pricesDiscount.classList.add("anatomi_prices_discount");
        }
        const productDiscount = document.querySelector("#mobileBuyBtn > div.fl.col-12.buyBtn.anatomi_buy_btn_container > div > span")
        if(productDiscount){
            productDiscount.classList.add("anatomi_product_discount");
        }
        const mainPricesBox = document.querySelector("#mobileBuyBtn > div.fl.col-12.buyBtn.anatomi_buy_btn_container > div > div")
        if(mainPricesBox){
            mainPricesBox.classList.add("anatomi_main_prices_box");
        }
        const discountedPrice = document.querySelector("#mobileBuyBtn > div.fl.col-12.buyBtn.anatomi_buy_btn_container > div > div > div.fl.col-12.text-line.currencyPrice.discountedPrice")
        if(discountedPrice){
            discountedPrice.classList.add("anatomi_discounted_price");
            discountPrice.setAttribute("style", "font-size: 10px !important;");
        }
        const discountPrice = document.querySelector("#mobileBuyBtn > div.fl.col-12.buyBtn.anatomi_buy_btn_container > div > div > div.fl.col-12.text-bold.discountPrice")
        if(discountPrice){
            discountPrice.classList.add("anatomi_discount_price");
            discountPrice.setAttribute("style", "font-size: 16px !important;");
        }
    }
    setInterval(() => {
        generateClasses();
    }, 100);
};
const urun_detay_sticky_buton_rd_init = () => {
    urun_detay_sticky_buton_rd_html();
    urun_detay_sticky_buton_rd_css();
    urun_detay_sticky_buton_rd_js();
};
const urun_detay_sticky_buton_rd_condition = () => {
    const element = document.querySelector(".page-product");
    const device = window.innerWidth <= 768;
    return device && element;
};
if (urun_detay_sticky_buton_rd_condition()) {
    urun_detay_sticky_buton_rd_init();
}
