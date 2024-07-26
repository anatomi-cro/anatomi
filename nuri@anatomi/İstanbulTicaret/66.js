const quantity = document.querySelector(".anatomiQuantity");
const quantityParent = document.querySelector("#productMobileInfo");

quantityParent.insertAdjacentElement("afterend", quantity);

const anatomi_hemenAl_style = `
<style>
.anatomiGenelContainer {

box-shadow: none !important; 
    border-top: 1px solid #e5e5e5;
}

.anatomiQuantity{
    margin-top: 10px;
}
.col.col-12.variantWrapper.tooltipWrapper {
    margin-top: 20px;
}

.anatomi_hemenAl_button {
    display: block;
    width: 70%;
    padding: 18px 0px;
    background-color: #6CB357;
    color: #fff;
    font-weight: 600;
    text-align: center;
    text-transform: capitalize;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    outline: none;
    font-size: 16px;
}

#addCartBtn {
    padding: 18px 0 !important;
    line-height: unset !important;
    text-transform: capitalize;
    height: 100% !important;
}

#mobileBuyBtn {
    box-shadow: none !important;
}

#mobileBuyBtn a {
    height: 100% !important;
}

.anatomiUstContainer {
    margin-bottom: 10px;
}

.priceGroup {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}

.nameContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
}

.anatomiDiscountRate {
    font-size: 14px;
    font-weight: 400;
    color: #6CB357;
}

.anatomiPrice {
    font-size: 14px;
}
</style>
`;

const anatomiHead = document.querySelector("head");
anatomiHead.insertAdjacentHTML("beforeend", anatomi_hemenAl_style);

const hemenAl = document.createElement("a");
hemenAl.classList.add("anatomi_hemenAl_button");
hemenAl.textContent = "Hemen Al";

const hemenAlParent = document.querySelector(".anatomiAltContainer");
hemenAlParent.insertAdjacentElement("afterbegin", hemenAl);

const discount = document.querySelector(".anatomiDiscountPrice");
const mainDiscount = document.querySelector(".product-price-not-discounted");

if (discount) {
  discount.textContent = mainDiscount.textContent + " TL";
}

const nameContainer = document.querySelector(".nameContainer");
const price1 = nameContainer.querySelector(".anatomiDiscountPrice");
const price2 = nameContainer.querySelector(".anatomiPrice");
const priceGroup = document.createElement("div");
priceGroup.classList.add("priceGroup");

if (price1) {
  priceGroup.appendChild(price1);
}

if (price2) {
  priceGroup.appendChild(price2);
}

nameContainer.insertAdjacentElement("afterend", priceGroup);

const mainDiscountRate = document.querySelector(".productDiscount .text-bold");
const discountRate = document.createElement("div");
discountRate.classList.add("anatomiDiscountRate");

if (mainDiscountRate) {
  discountRate.textContent = mainDiscountRate.textContent;
}
nameContainer.insertAdjacentElement("afterbegin", discountRate);

hemenAl.addEventListener("click", () => {
  const beden = document.querySelectorAll(".anatomi_variantBox");
  document.querySelector("#addCartBtn").click();

  beden.forEach((item) => {
    if (item.classList.contains("anatomi_selected")) {
      window.location.href = "https://www.istanbulticaret.com/order/address";
    }

    item.addEventListener("click", () => {
      window.location.href = "https://www.istanbulticaret.com/order/address";
    });
  });



});
