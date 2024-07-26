const OzelFiyat = () => {
  const ozelFiyat = document.createElement("div");
  ozelFiyat.classList.add("anatomi_online_ozel_fiyat");
  ozelFiyat.innerHTML = `
        <p>Online'a Özel Fiyat</p>
`;

  const ozelFiyatStyle = `
<style>
.productDiscount {
  width: 44px;
  height: 44px;
  object-fit: contain;
  background: #ff7300;
  line-height: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;
  position: absolute;
  top: 5%;
  right: 3%;
}

.productDiscount span {
  font-weight: 900;
  font-size: 11px !important;
}

.productItem {
  position: relative;
}

.productItem > .drop-down {
position: relative;
border: solid 1px #e0e0e0;
height: fit-content;
padding: 25px 20px;
}
.anatomi_online_ozel_fiyat {
    background-color: #EC3232;
    padding: 5px 10px !important;
    margin-bottom: 5px !important;
    margin-left: 5px !important;
    text-align: center;
    font-weight: 700;
    font-size: 14px;
    color: #fff;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    opacity: 1 !important;
    visibility: visible !important;
    transition: none !important;
    min-width: auto !important;
    border-radius: 10px;
}

.anatomi_online_ozel_fiyat p {
    padding: 0 !important;
    line-height: normal !important;
}

@media (max-width: 768px) {
    .anatomi_online_ozel_fiyat {
        margin-bottom: 20px !important;
        margin-left: 0px !important;
    }
}
</style>
`;

  document
    .querySelector("head")
    .insertAdjacentHTML("beforeend", ozelFiyatStyle);

  return ozelFiyat;
};

const init = () => {


  if(window.innerWidth < 768) {
    const parentElement = document.querySelectorAll(
        ".col.col-12.productDetails.loaderWrapper .row.drop-down-title"
      );

    parentElement.forEach((element) => {
        element.insertAdjacentElement("afterend", OzelFiyat());
      });
  }

    if(window.innerWidth > 768) {
        const parentElement = document.querySelectorAll(
            ".productPrice"
          );

        parentElement.forEach((element) => {
            element.insertAdjacentElement("beforebegin", OzelFiyat());
        });
    }
};

init();


const item = document.querySelectorAll(".productItem");
const discount = document.querySelectorAll(".productDiscount");

item.forEach((element, idx) => {
  element.insertAdjacentElement("afterbegin", discount[idx]);
});


/*.productDiscount {
        width: 34px;
        height: 34px;
        object-fit: contain;
        background: #ff7300;
        line-height: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 3;
        position: absolute;
        top: -325%;
        right: -1%;
    }
    
    .productItem > .drop-down {
    position: relative;
    border: solid 1px #e0e0e0;
    height: fit-content;
    padding: 25px 20px;
}
    
    */