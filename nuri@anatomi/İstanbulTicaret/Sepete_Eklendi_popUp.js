const a_popup_style = `<style>
.subContainer{
    
    bottom: inherit !important;
}
.product_buttons{
    display: block !important;
    margin-top: 15px !important;
    width: 100% !important;

}

.btn.btn-radius.btn-success{
    width: 48% !important;
}

.product_buttons * {
    border-radius: inherit !important;
    color: black !important;
    background-color: inherit !important;
    text-decoration: underline !important;
}

.a_hmnbtn{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    background: #5C9C54;
    padding: 12px;
    color: white;
    border-radius: 5px;
    font-size: 14px;
}

#cartPopup{
    border-bottom-left-radius: 12px !important;
    border-bottom-right-radius: 12px !important;
    height: 215px !important;
}
.product_info img{
    border: 1px solid #dfdfdf !important;
}
.anatomi_overlay{
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999998;
}

.pWrapper::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
}


</style>`;

// Sepete ekleme butonunu bulma
var addToCartButton = document.querySelector("#addCartBtn");

// MutationObserver oluşturma
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    // Eğer sepete ekleme butonuna yapılan bir değişiklik varsa
    if (
      mutation.type === "childList" &&
      mutation.target.contains(addToCartButton)
    ) {
      openNewPopup();
    }
  });
});

// Observer'ı sepete ekleme butonuna bağlama ve izlemeye başlama
observer.observe(document.body, { childList: true, subtree: true });

// Yeni popup'ı açan fonksiyon
function openNewPopup() {
  const a_product_buttons = document.querySelector(".product_buttons");

  const a_hmnbtn_html = `<div class="a_hmnbtn"><a href="https://www.istanbulticaret.com/order/address">Hemen Satın al</a></div>`;

  a_product_buttons.insertAdjacentHTML("beforebegin", a_hmnbtn_html);

  console.log("Sepete eklendi! Yeni popup açılabilir.");
}
document.querySelector("head").insertAdjacentHTML("beforeend", a_popup_style);

// arka planını koyulaştırmak için