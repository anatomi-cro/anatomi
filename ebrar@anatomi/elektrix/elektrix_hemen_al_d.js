const elektrix_hemen_al_html = () => {
  const html = `
   
     <div class="fl col-6 col-xs-12" id="hemenAlBtnWrapper">
     <div class="box col-12 buyBtn">
        <a class="btn col-12 text-center btn-big btn-clear btn-radius" id="fastBuyBtn">
        HEMEN AL
        </a>
        </div>
    </div>
  `;

  const cartWrapper = document.querySelector("#cart-wrapper");
  if (cartWrapper) {
    cartWrapper.insertAdjacentHTML("beforeend", html);
  }

/*
   const sepeteEkleBtnWrapper = document.querySelector("#mobileBuyBtn");
  if (sepeteEkleBtnWrapper) {
    sepeteEkleBtnWrapper.insertAdjacentHTML("beforebegin", html);
  }
 
*/
};

const elektrix_hemen_al_css = () => {
  const style = `
    <style>
    #cart-wrapper .qtyBtns a {
    width: 45px !important;
        
    }
     #fastBuyBtn {
    background: #EA9025;
    color: #fff;
    font-size: 14px;
    font-family: 'hinted-subset-SinkinSans-700Bold';
    transition: none;

}
    .btn-big:not(.btn-default):hover{
    box-shadow: none;}
    </style>
  `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};

const elektrix_hemen_al_js = () => {
  var sepeteEkleOnClick = $("#addCartBtn").attr("onclick");

  $("#fastBuyBtn").attr("onclick", sepeteEkleOnClick);

   $("#fastBuyBtn").on("click", (event) => {
     event.preventDefault(); 

     window.location.href = "/order/address"; 

   });
};

const elektrix_hemen_al_init = () => {
  elektrix_hemen_al_html();
  elektrix_hemen_al_css();
  elektrix_hemen_al_js();
};

const elektrix_hemen_al_condition = () => {
  return window.innerWidth >= 768;
};

if (elektrix_hemen_al_condition()) {
  elektrix_hemen_al_init();
}
