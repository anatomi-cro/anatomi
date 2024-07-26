// Alışveriş Notu Ekle
const notButton = document.querySelector(".popupWin.btn.btn-small.btn-custom-light-gray");
const notButtonText = document.querySelector(".popupWin.btn.btn-small.btn-custom-light-gray span");

const notImg = document.createElement("img");
notImg.src = "https://anatomi.s3.eu-north-1.amazonaws.com/Frame-23.webp";
notImg.style.width = "20px";
notImg.style.height = "20px";
notImg.style.objectFit = "contain";
notButton.appendChild(notImg);

notButton.style.display = "flex";
notButton.style.flexDirection = "row-reverse";
notButton.style.justifyContent = "flex-start";
notButton.style.alignItems = "flex-start";
notButton.style.backgroundColor = "transparent";
notButton.style.color = "#000";
notButton.style.gap = "5px";
notButton.style.whiteSpace = "nowrap";
notButton.style.fontWeight = "bold";
notButton.style.transform = "translate(-30px, -30px)";

notButtonText.textContent = "Alışveriş Notu Ekle"

// Numara

const numara = document.querySelector(".box-border.basketSubPro");

numara.style.fontSize = "14px";
numara.style.fontWeight = "bold";
numara.style.color = "#000";

// Adet

const adet = document.querySelector(".productPrcRow .fl.col-md-12.qtyBtns");
const adetInput = document.querySelector(".productPrcRow .fl.col-md-12.qtyBtns input");
const adetA = document.querySelectorAll(".productPrcRow .fl.col-md-12.qtyBtns a");

adet.style.display = "flex";
adet.style.flexDirection = "column";
adet.style.backgroundColor = "transparent";

adetInput.style.width = "40px";
adetInput.style.color = "#000";

adetA.forEach((item) => {
    item.style.width = "40px";
    item.style.height = "40px";
    item.style.backgroundColor = "transparent";
    item.style.border = "1px solid DDDDDD";
    item.style.borderRadius = "50%";
})

const adetAImgPlus = document.createElement("img");
const adetAImgMinus = document.createElement("img");

adetAImgPlus.src = "https://resmim.net/cdn/2024/01/17/Z7fBT7.webp";

adetAImgMinus.src = "https://resmim.net/cdn/2024/01/17/Z7fBT7.webp";


const copKutusu = document.querySelector(".pos-a.pos-top.pos-right.btn.btn-small.btn-custom-light-gray.forMobile.icon-cancel.icon-no-space.icon-small");

copKutusu.style.backgroundColor = "transparent";

const adet_style = `
<style>

.col-4.d-flex.incBasketProduct p::before {
    content: "";
    background-image: url(https://resmim.net/cdn/2024/01/17/Z7fBT7.webp);
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #DDDDDD;
    padding: 5px;
}

.col-4.d-flex.decBasketProduct p::before {
    content: "";
    background-image: url(https://anatomi.s3.eu-north-1.amazonaws.com/1_.webp);
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #DDDDDD;
    padding: 5px;
}

.productInfoUpper .pos-a.pos-top.pos-right.btn.btn-small.btn-custom-light-gray.forMobile.icon-cancel.icon-no-space.icon-small::before {
    content: "";
    background-image: url(https://resmim.net/cdn/2024/01/18/Z73yzI.png);
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #DDDDDD;
    padding: 5px;
}

.productInfoUpper .pos-a.pos-top.pos-right.btn.btn-small.btn-custom-light-gray.forMobile.icon-cancel.icon-no-space.icon-small {
    position: relative !important;
    display: flex;
}

.productInfoUpper .pos-a.pos-top.pos-right.btn.btn-small.btn-custom-light-gray.forMobile.icon-cancel.icon-no-space.icon-small.copKutusuActive {
    display: flex ;
}

.fr.box.col-4.col-sm-4.col-xs-6.text-center.productPrc{
    float: left ;
}

.productInfoUpper .col-4.d-flex.decBasketProduct {
    display: flex ;
}

.productInfoUpper .col-4.d-flex.decBasketProduct.minusAdetActive {
    display: flex ;
}
</style>
`;

const head = document.querySelector("head");
head.insertAdjacentHTML("beforeend", adet_style);

const productInfoRow = document.querySelector(".col.col-3.col-sm-9.col-xs-8.productInfoRow");
const price = document.querySelector(".fr.box.col-4.col-sm-4.col-xs-6.text-center.productPrc");
const productPriceRow = document.querySelector(".fl.col-6.col-sm-9.col-xs-8.d-flex.productPrcRow");


productInfoRow.appendChild(adet)
productInfoRow.appendChild(price);
productPriceRow.appendChild(notButton);
copKutusu.appendChild(adet);

console.log(adetInput.value);
const copKutusuBefore = document.querySelector(".productInfoUpper .pos-a.pos-top.pos-right.btn.btn-small.btn-custom-light-gray.forMobile.icon-cancel.icon-no-space.icon-small");
const minusAdet = document.querySelector(".productInfoUpper .col-4.d-flex.decBasketProduct");


const text1 = document.querySelector(".fl.col-12.mb.basketProName .fl.col-12.text-title.text-bold.text-upper");
const text2 = document.querySelector(".fl.col-12.mb.basketProName .fl.col-12.text-description");
const basketPro = document.querySelector(".fl.col-12.mb.basketProName");
const buttonsDiv = document.createElement("div");
const productText = document.createElement("div");
productText.classList.add("productText");
productText.style.display = "flex";
productText.style.flexDirection = "column";
productText.style.justifyContent = "flex-start";
productText.style.alignItems = "flex-start";
productText.style.width = "100%";
productText.style.height = "100%";
productText.style.gap = "5px";
buttonsDiv.classList.add("buttonsDiv");
buttonsDiv.style.display = "flex";
buttonsDiv.style.flexDirection = "column-reverse";
buttonsDiv.style.justifyContent = "center";
buttonsDiv.style.alignItems = "center";
buttonsDiv.style.width = "fit-content";
buttonsDiv.style.height = "100%";
adet.style.width = "fit-content";

basketPro.style.display = "flex";
basketPro.style.flexDirection = "column-reverse";

buttonsDiv.appendChild(adet);
buttonsDiv.appendChild(copKutusu);
basketPro.appendChild(buttonsDiv);
productText.appendChild(text1);
productText.appendChild(text2);
basketPro.appendChild(productText);

console.log(adetInput.value);

const trash1 = document.querySelector(".box.col-12.p-bottom.note-btns");
trash1.style.display = "none";

const number = document.querySelector(".box-border.basketSubPro");

const priceNumberDiv = document.createElement("div");
priceNumberDiv.classList.add("priceNumberDiv");
priceNumberDiv.style.display = "flex";
priceNumberDiv.style.flexDirection = "column";
priceNumberDiv.style.justifyContent = "flex-start";
priceNumberDiv.style.alignItems = "flex-start";
priceNumberDiv.style.width = "100%";
priceNumberDiv.style.height = "100%";
priceNumberDiv.style.transform = "translateY(-20px)";
price.style.width = "fit-content";
price.style.transform = "translate(-10px ,-15px)";
basketPro.style.height = "fit-content";

priceNumberDiv.appendChild(number);
priceNumberDiv.appendChild(price);

basketPro.appendChild(priceNumberDiv);

const productInfoUpper = document.createElement("div");
productInfoUpper.classList.add("productInfoUpper");
productInfoUpper.style.display = "flex";

productInfoUpper.appendChild(productText);
productInfoUpper.appendChild(buttonsDiv);
basketPro.appendChild(productInfoUpper);


function checkAdetInput() {
    if (adetInput.value == 1) {
        const minus= document.querySelector(".productInfoUpper .col-4.d-flex.decBasketProduct");
        const copKutusu= document.querySelector(".productInfoUpper .pos-a.pos-top.pos-right.btn.btn-small.btn-custom-light-gray.forMobile.icon-cancel.icon-no-space.icon-small")
        copKutusu.style.display = "flex";
        minus.style.display = "none";
        minus.stlye.zIndex = "1";
        copKutusu.stlye.zIndex = "999";
    } else if (adetInput.value > 1) {
        const minus= document.querySelector(".productInfoUpper .col-4.d-flex.decBasketProduct");
        const copKutusu= document.querySelector(".productInfoUpper .pos-a.pos-top.pos-right.btn.btn-small.btn-custom-light-gray.forMobile.icon-cancel.icon-no-space.icon-small")
        copKutusu.style.opacity = "0";
        minus.style.display = "flex";
        copKutusu.stlye.zIndex = "1";
        minus.stlye.zIndex = "999";
        buttonsDiv.style.transform = "translateY(-50px)";
    }
}

checkAdetInput();


