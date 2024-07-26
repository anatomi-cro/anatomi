const boxBorder = document.querySelectorAll(".col.box-border");
const boxBorderP = document.querySelectorAll(".col.box-border p");
const boxText = document.querySelectorAll(".fl.col-12.VariantTitle");
const name = document.getElementById("productName").textContent;
const price =document.querySelector("#product-price-maxeo-eos-s3-fiberglas-burun-is-botu").textContent;

var SelectedClass = "selected";

function checkClassChanges(mutationsList, observer) {
    for (var mutation of mutationsList) {
        if (mutation.type == 'attributes' && mutation.attributeName == 'class') {
            boxBorder.forEach((item) => {
                if (item.classList.contains(SelectedClass)) {
                    item.style.border = "solid 3px #fcb827";
                } else {
                    item.style.border = "solid 2px #93959B";
                }
            });
        }
    }
}

var observer = new MutationObserver(checkClassChanges);

boxBorder.forEach((item) => {
    observer.observe(item, { attributes: true, attributeFilter: ["class"] });

    item.style.border = "solid 2px #93959B";
    item.style.width = "59px"
    item.style.height = "41px";
    item.style.backgroundColor = "#F1F1F1";
});

boxBorderP.forEach((item) => {
    item.style.color = "#1E1E1E";
});

boxText.forEach((item) => {
    item.textContent = "Beden"
    item.style.color = "#000";
    item.style.fontWeight = "bold";
});

const mediaQuery = window.matchMedia('(max-width: 768px)');
const tooltipWrapper = document.querySelectorAll(".col.col-12.variantWrapper.tooltipWrapper");

function handleMediaChange(e) {
    if (e.matches) {
        tooltipWrapper.forEach((item) => {
            item.style.paddingTop = "10px";
        });
    }
}

handleMediaChange(mediaQuery);



// sepete EKle

const a_html = `
<div class="sepeteEkle-container">
        <div class="sepeteEkle-content">
            <div class="sepeteEkle-topSide">
                <div class="sepeteEkle-product-name">
                    <p>${name}</p>
                </div>

                <div class="sepeteEkle-product-price">
                    <p>${price}</p>
                </div>
            </div>
            <div class="sepeteEkle-bottomSide">
                <div class="sepeteEkle-product-count box col-4 col-xs-12 p-left qtyBox new">
                    <div class="fl col-sm-12 qtyBtns detected">
                        <a title="-" data-id="5976" class="col-4 d-flex">
                            -
                        </a>
                        <input type="text" id="Adet5976" name="Adet5976" value="1" class="col-4 detayAdet5976">
                        <a title="+" data-id="5976" class="col-4 d-flex">
                            +
                        </a>
                    </div>
                </div>

                <div class="sepeteEkle-product-add"></div>
            </div>
        </div>
    </div>
`;

const a_style = `
<style>
* {

    box-sizing: border-box;
}
        .sepeteEkle-container {
            width: 100vw;
            height: auto;
            position: fixed;
            bottom: 0;
            right: 0;
            z-index: 9999;
            border-top: 1px solid rgba(0, 0, 0, 0.15);
            background-color: #fff;
        }

        .sepeteEkle-content {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding: 10px 20px;
        }

        .sepeteEkle-topSide,
        .sepeteEkle-bottomSide {
            width: 100%;
            height: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .sepeteEkle-product-add {
            background-color: #F6C445;
            border-radius: 10px;
            padding-bottom: 0 !important;
            padding: 4px 50px !important;
            position: relative;
        }

        .sepeteEkle-product-add p {
            color: white;
            font-size: 16px;
            padding-bottom: 0 !important;
        }

        .sepeteEkle-product-name {
            width: 55%;
        }

        .sepeteEkle-product-name p {
            font-size: 14px;
            font-weight: bold;
        }

        .sepeteEkle-product-price p {
            font-size: 18px;
            color: rgb(0, 184, 0);
        }

        .qtyBox {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40%;
            height: 100%;
            background-color: #dddd;
            border-radius: 5px;
        }

        .qtyBtns a {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: 35px;
            height: 35px;
            cursor: pointer;
            font-size: 30px;
            padding: 10px 10px;
            border: none;
        }

        .qtyBtns input {
            width: 35px;
            height: 35px;
            line-height: 60px;
            font-size: 14px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            letter-spacing: normal;
            color: #000;
            box-sizing: border-box;
            border: none;
        }
    </style>
`

let insertedCheck = false;


if (window.innerWidth < 768) {

    const currentWidth = window.innerWidth;
    const prevButton = document.querySelector(".buyBtn")
    const wpButton = document.querySelector(".wp-app-button")
    const parentNode = document.querySelector(".fl.col-12.mb.tooltipWrapper");
    const box = document.querySelector(".col.box-border p");
    const mobileBuyBtn = document.getElementById("mobileBuyBtn");
    const addCartBtn = document.getElementById("addCartBtn");

    if (currentWidth <= 768 && insertedCheck === false) {

        const parentNode2 = document.querySelector(".box.col-6.col-sm-12.p-top.loaderWrapper");
        parentNode2.insertAdjacentHTML("beforeend", a_html);

        const anatomiHead = document.querySelector("head");
        if (!insertedCheck) {
            anatomiHead.insertAdjacentHTML("afterbegin", a_style);
            insertedCheck = true;
        }

        addCartBtn.style.backgroundColor = "transparent";
        addCartBtn.style.border = "none";
        addCartBtn.style.padding = "0";
        addCartBtn.style.boxShadow = "none";
        mobileBuyBtn.style.position = "relative";
        mobileBuyBtn.style.boxShadow = "none";
        mobileBuyBtn.style.border = "none";
        mobileBuyBtn.style.padding = "0";
        mobileBuyBtn.style.backgroundColor = "transparent";
        wpButton.style.display = "none";


        const qtyBox = document.querySelector(".sepeteEkle-product-count");
        const qtyBtns = document.querySelector(".fl.col-sm-12.qtyBtns.detected");
        const qtyBtnsA = document.querySelectorAll(".fl.col-sm-12.qtyBtns.detected a");
        const qtyBtnsInput = document.querySelector(".fl.col-sm-12.qtyBtns.detected input");


        qtyBox.style.height = "100%";
        qtyBox.style.width = "30%";
        qtyBox.style.backgroundColor = "#dddd";
        qtyBox.style.padding = "5px";
        qtyBox.style.borderRadius = "5px";

        qtyBtns.style.display = "flex";
        qtyBtns.style.justifyContent = "center";
        qtyBtns.style.alignItems = "center";


        qtyBtnsA.forEach((item) => {
            item.style.width = "30px";
            item.style.height = "30px";
            item.style.cursor = "pointer";
            item.style.fontSize = "20px";
            item.style.padding = "10px";
            item.style.border = "none";
        });


        qtyBtnsInput.style.width = "35px";
        qtyBtnsInput.style.height = "35px";
        qtyBtnsInput.style.border = "none";

        parentNode.style.display = "none";

        const sepeteEkle = document.querySelector(".sepeteEkle-product-add");
        const oldButton = document.getElementById("mobileBuyBtn");

        sepeteEkle.appendChild(oldButton);


    } else {

        const parentNode2 = document.querySelector(".box.col-6.col-sm-12.p-top.loaderWrapper");
        const sepeteEkleContainer = document.querySelector(".sepeteEkle-container");

        if (insertedCheck) {
            parentNode2.removeChild(sepeteEkleContainer);
            insertedCheck = false;
        }


        prevButton.style.display = "block";
        wpButton.style.display = "flex";

        parentNode.style.display = "flex";
    }

    if (currentWidth <= 320) {
        const qtyBtnsInput = document.querySelector(".fl.col-sm-12.qtyBtns.detected input");
        const qtyBtnsA = document.querySelectorAll(".fl.col-sm-12.qtyBtns.detected a");
        const sepeteEkle = document.querySelector(".sepeteEkle-product-add");

        qtyBtnsInput.style.width = "25px";
        qtyBtnsInput.style.height = "25px";
        qtyBtnsInput.style.border = "none";

        parentNode.style.display = "none";

        sepeteEkle.style.padding = "10px 10px !important";


    }
}

const box = document.querySelectorAll(".pos-r.fl.col-12.ease.variantList .col.box-border");

box.forEach((item) => {

    item.style.width = "80px"
})

const productName = document.querySelector(".sepeteEkle-product-name");

const trim = productName.textContent.trim();
const words = trim.split(" ");
const truncatedName = words.slice(0, 3).join(" ");
productName.textContent = words.length > 3 ? truncatedName + "..." : truncatedName;
productName.style.fontWeight = "bold";
productName.style.color = "#000";


