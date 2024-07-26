if (window.innerWidth < 900) {


    const head = document.querySelector("head");
    const imageDetail = document.querySelector(".image-detail");
    const imageDetailContent = document.querySelector(".image-detail__content");
    const container = document.querySelector(".image-detail__content .container");
    const privileges = document.querySelector(".privileges");
    const breadcrumb = document.querySelector(".breadcrumb");
    const removeTitle = document.querySelector(".image-detail__title");
    const removeDesc = document.querySelector(".image-detail__desc");
    const plakamVar = document.querySelector(".get-offer__item__select")
    const getOffer = document.querySelector(".image-detail__content .container .get-offer");
    const getOfferTilte = document.querySelector(".image-detail__content .container .get-offer .get-offer__title");
    const form = document.querySelector(".get-offer .get-offer__form");
    const div = document.createElement("div");
    const inputs = document.querySelectorAll(".get-offer__item__input");
    div.classList.add("phoneNumberForKasko");
    div.classList.add("get-offer__item");

    div.addEventListener("focusin", () => {
        div.classList.add("-active");
    })

    div.addEventListener("focusout", () => {
        div.classList.remove("-active");
    })

    inputs[0].placeholder = "12345116789";
    inputs[1].placeholder = "34 ABC 2023";

    var kopyalanacakIcerik = document.querySelectorAll(".get-offer__form .get-offer__item")[1].innerHTML;
    var url = "https://www.somposigorta.com.tr/tamamlayici-saglik-sigortasi";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onload = function () {
        var parser = new DOMParser();
        var htmlDoc = parser.parseFromString(xhr.responseText, 'text/html');
        var hedefDiv = htmlDoc.querySelectorAll(".get-offer__form .get-offer__item")[1];
        var hedefInput = hedefDiv.querySelector(".get-offer__item__input");
        hedefInput.placeholder = "0 (_ _ _) _ _ _  _ _ _ _";
        div.appendChild(hedefDiv);
    };

    privileges.remove();
    breadcrumb.remove();
    removeTitle.remove();
    removeDesc.remove();
    imageDetailContent.style.background = "#fff";
    getOfferTilte.innerText = "Size özel teklifimizi öğrenmek ister misiniz?";

    const phoneInput = document.querySelector(".phoneNumberForKasko");
    console.log(phoneInput)

    const checkBoxs = document.querySelectorAll(".get-offer__hidden .get-offer__disclaimer");
    const firstCheckBox = document.querySelectorAll(".get-offer__disclaimer.tall")[0];
    const lasttCheckBox = document.querySelectorAll(".get-offer__disclaimer.tall")[1];

    firstCheckBox.insertAdjacentHTML("beforebegin", checkBoxs[0].outerHTML);
    firstCheckBox.insertAdjacentHTML("beforebegin", checkBoxs[1].outerHTML);

    lasttCheckBox.remove();


    const image_html = `
    <div class="kasko_sigorta_banner">
      <img src="https://anatomi.s3.eu-north-1.amazonaws.com/ÇİFT_KAMPANYA_BOYUTLAR_mobil.jpg" alt="Kasko Sigortası" title="Kasko Sigortası">
    </div>
    `;
    container.insertAdjacentHTML("afterbegin", image_html);

    const title_html = `
    <div class="kasko_sigorta_title">
      <h1>Full Kasko Sigortası</h1>
      </div>
      `;

    getOffer.insertAdjacentHTML("afterbegin", title_html);

    const checkBox_html = `
    <div class="get-offer__disclaimer">
        <span class="checkbox" id="tumunuSec">
            <input data-checkbox-child="" data-privacy-text="" data-lighting="" type="checkbox" class="checkbox__input">
        </span>
        <p>
        Tümünü seç
        </p>
    </div>
    `;

    form.insertAdjacentHTML("afterend", checkBox_html);

    const tumunuSec = document.querySelector("#tumunuSec");
    const tumunuSecInput = document.querySelector("#tumunuSec input");

    tumunuSec.addEventListener("click", () => {
        const allCheckBox = document.querySelectorAll(".get-offer__disclaimer input");
        allCheckBox.forEach((item) => {
            item.checked = !item.checked;
            tumunuSecInput.checked = !tumunuSecInput.checked;
        })
    })

    const hidden = document.querySelectorAll(".get-offer__disclaimer")[5];
    hidden.style.display = "none";


    var checkInputs = false;

    const button = document.querySelector(".get-offer__item__button");
    button.classList.add("get-offer__item__button_anatomi");
    const selectCity = document.querySelectorAll(".get-offer__item__select");
    const allCheckBox = document.querySelectorAll(".get-offer__disclaimer input");
    inputs.forEach((item,idx) => {
        if (inputs[1].style.display !== "none") {
            if (inputs[0].value.length > 0 && inputs[1].value.length > 0 && allCheckBox[idx].checked) {
                button.disabled = false;
                button.style.backgroundColor = "#b61539";
                button.style.userSelect = "auto";
                checkInputs = true;
            } else {
                button.disabled = true;
                button.style.backgroundColor = "#ccc";
                button.style.userSelect = "none";
                checkInputs = false;
            }
        } else {
            if (inputs[0].value.length > 0 && selectCity[1].value) {
                button.disabled = false;
                button.style.backgroundColor = "#b61539";
                button.style.userSelect = "auto";
                checkInputs = true;
            } else {
                button.disabled = true;
                button.style.backgroundColor = "#ccc";
                button.style.userSelect = "none";
                checkInputs = false;
            }
        }


        selectCity[1].addEventListener("change", () => {
            if (inputs[0].value.length === 11 && selectCity[1].value && allCheckBox[idx].checked) {
                button.disabled = false;
                button.style.backgroundColor = "#b61539";
                button.style.userSelect = "auto";
                checkInputs = true;
            } else {
                button.disabled = true;
                button.style.backgroundColor = "#ccc";
                button.style.userSelect = "none";
                checkInputs = false;
            }
        })

        item.addEventListener("keyup", () => {
            if (inputs[1].style.display !== "none" && allCheckBox[idx].checked) {
                if (inputs[0].value.length === 11 && inputs[1].value.length > 0 && inputs[1].value.length < 11) {
                    button.disabled = false;
                    button.style.backgroundColor = "#b61539";
                    button.style.userSelect = "auto";
                    checkInputs = true;
                } else {
                    button.disabled = true;
                    button.style.backgroundColor = "#ccc";
                    button.style.userSelect = "none";
                    checkInputs = false;
                }
            } else {
                if (inputs[0].value.length === 11 && selectCity.value && allCheckBox[idx].checked) {
                    button.disabled = false;
                    button.style.backgroundColor = "#b61539";
                    button.style.userSelect = "auto";
                    checkInputs = true;
                } else {
                    button.disabled = true;
                    button.style.backgroundColor = "#ccc";
                    button.style.userSelect = "none";
                    checkInputs = false;
                }
            }
        })
    })




    allCheckBox.forEach((item) => {
        if (item.checked === true) {
            button.disabled = false;
            button.style.backgroundColor = "#b61539";
            button.style.userSelect = "auto";
        } else {
            button.disabled = true;
            button.style.backgroundColor = "#ccc";
            button.style.userSelect = "none";
        }
    })


    allCheckBox.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.checked === true) {
                button.disabled = false;
                button.style.backgroundColor = "#b61539";
                button.style.userSelect = "auto";
            } else {
                button.disabled = true;
                button.style.backgroundColor = "#ccc";
                button.style.userSelect = "none";
            }
        })
    })





    const style_kasko = `
    <style>
    .image-detail__content{
        padding: 0 !important;
    }
    .image-detail__content .container{
        padding: 0 !important;
    }

    .image-detail__content::after {
        display: none !important;
    }

    .kasko_sigorta_banner {
        width: 100vw;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }

    .kasko_sigorta_banner img {
        width: 100%;
        object-fit: cover;
        object-position: center;
    }

    .kasko_sigorta_title h1 {
        font-size: 20px;
        font-weight: 800;
        color: #000;
        text-align: center;
        margin-top: 1rem;
    }

    .get-offer__title {
        display: flex !important;
        width: fit-content !important;
        margin: 0px 0 14px 0 !important;
        font-weight: 500 !important;
    }

    .get-offer__item__label {
        top: 0 !important;
        left: 10 !important;
        background: #fff !important;
    }

    .get-offer__item__input::placeholder {
        font-size: 14px !important;
        opacity: .6 !important;
    }

    .get-offer__item__button:hover {
        box-shadow: none !important;
    }

    .image-detail {
        padding: 0px 0 300px 0 !important;
    }
    </style>
    `;
    head.insertAdjacentHTML("beforeend", style_kasko);

}

if (window.innerWidth > 900) {


    const head = document.querySelector("head");
    const imageDetail = document.querySelector(".image-detail");
    const imageDetailContent = document.querySelector(".image-detail__content");
    const container = document.querySelector(".image-detail__content .container");
    const privileges = document.querySelector(".privileges");
    const breadcrumb = document.querySelector(".breadcrumb");
    const removeTitle = document.querySelector(".image-detail__title");
    const removeDesc = document.querySelector(".image-detail__desc");
    const plakamVar = document.querySelector(".get-offer__item__select")
    const getOffer = document.querySelector(".image-detail__content .container .get-offer");
    const getOfferTilte = document.querySelector(".image-detail__content .container .get-offer .get-offer__title");
    const form = document.querySelector(".get-offer .get-offer__form");
    const div = document.createElement("div");
    const inputs = document.querySelectorAll(".get-offer__item__input");
    div.classList.add("phoneNumberForKasko");
    div.classList.add("get-offer__item");

    div.addEventListener("focusin", () => {
        div.classList.add("-active");
    })

    div.addEventListener("focusout", () => {
        div.classList.remove("-active");
    })

    inputs[0].placeholder = "12345116789";
    inputs[1].placeholder = "34 ABC 2023";

    var kopyalanacakIcerik = document.querySelectorAll(".get-offer__form .get-offer__item")[1].innerHTML;
    var url = "https://www.somposigorta.com.tr/tamamlayici-saglik-sigortasi";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onload = function () {
        var parser = new DOMParser();
        var htmlDoc = parser.parseFromString(xhr.responseText, 'text/html');
        var hedefDiv = htmlDoc.querySelectorAll(".get-offer__form .get-offer__item")[1];
        var hedefInput = hedefDiv.querySelector(".get-offer__item__input");
        hedefInput.placeholder = "0 (_ _ _) _ _ _  _ _ _ _";
        div.appendChild(hedefDiv);
    };

    privileges.remove();
    breadcrumb.remove();
    removeTitle.remove();
    removeDesc.remove();
    imageDetailContent.style.background = "#fff";
    getOfferTilte.innerText = "Size özel teklifimizi öğrenmek ister misiniz?";

    const phoneInput = document.querySelector(".phoneNumberForKasko");
    console.log(phoneInput)

    const checkBoxs = document.querySelectorAll(".get-offer__hidden .get-offer__disclaimer");
    const firstCheckBox = document.querySelectorAll(".get-offer__disclaimer.tall")[0];
    const lasttCheckBox = document.querySelectorAll(".get-offer__disclaimer.tall")[1];

    firstCheckBox.insertAdjacentHTML("beforebegin", checkBoxs[0].outerHTML);
    firstCheckBox.insertAdjacentHTML("beforebegin", checkBoxs[1].outerHTML);

    lasttCheckBox.remove();


    const image_html = `
    <div class="kasko_sigorta_banner">
      <img src="https://anatomi.s3.eu-north-1.amazonaws.com/ÇİFT_KAMPANYA_BOYUTLAR_desktop.jpg" alt="Kasko Sigortası" title="Kasko Sigortası">
    </div>
    `;
    container.insertAdjacentHTML("afterbegin", image_html);

    const title_html = `
    <div class="kasko_sigorta_title">
      <h1>Full Kasko Sigortası</h1>
      </div>
      `;

    getOffer.insertAdjacentHTML("afterbegin", title_html);

    const checkBox_html = `
    <div class="get-offer__disclaimer">
        <span class="checkbox" id="tumunuSec">
            <input data-checkbox-child="" data-privacy-text="" data-lighting="" type="checkbox" class="checkbox__input">
        </span>
        <p>
        Tümünü seç
        </p>
    </div>
    `;

    form.insertAdjacentHTML("afterend", checkBox_html);

    const tumunuSec = document.querySelector("#tumunuSec");
    const tumunuSecInput = document.querySelector("#tumunuSec input");

    tumunuSec.addEventListener("click", () => {
        const allCheckBox = document.querySelectorAll(".get-offer__disclaimer input");
        allCheckBox.forEach((item) => {
            item.checked = !item.checked;
            tumunuSecInput.checked = !tumunuSecInput.checked;
        })
    })

    const hidden = document.querySelectorAll(".get-offer__disclaimer")[5];
    hidden.style.display = "none";

    var checkInputs = false;

    const button = document.querySelector(".get-offer__item__button");
    button.classList.add("get-offer__item__button_anatomi");
    const selectCity = document.querySelectorAll(".get-offer__item__select");
    const allCheckBox = document.querySelectorAll(".get-offer__disclaimer input");
    inputs.forEach((item,idx) => {
        if (inputs[1].style.display !== "none") {
            if (inputs[0].value.length > 0 && inputs[1].value.length > 0 && allCheckBox[idx].checked) {
                button.disabled = false;
                button.style.backgroundColor = "#b61539";
                button.style.userSelect = "auto";
                checkInputs = true;
            } else {
                button.disabled = true;
                button.style.backgroundColor = "#ccc";
                button.style.userSelect = "none";
                checkInputs = false;
            }
        } else {
            if (inputs[0].value.length > 0 && selectCity[1].value) {
                button.disabled = false;
                button.style.backgroundColor = "#b61539";
                button.style.userSelect = "auto";
                checkInputs = true;
            } else {
                button.disabled = true;
                button.style.backgroundColor = "#ccc";
                button.style.userSelect = "none";
                checkInputs = false;
            }
        }


        selectCity[1].addEventListener("change", () => {
            if (inputs[0].value.length === 11 && selectCity[1].value && allCheckBox[idx].checked) {
                button.disabled = false;
                button.style.backgroundColor = "#b61539";
                button.style.userSelect = "auto";
                checkInputs = true;
            } else {
                button.disabled = true;
                button.style.backgroundColor = "#ccc";
                button.style.userSelect = "none";
                checkInputs = false;
            }
        })

        item.addEventListener("keyup", () => {
            if (inputs[1].style.display !== "none" && allCheckBox[idx].checked) {
                if (inputs[0].value.length === 11 && inputs[1].value.length > 0 && inputs[1].value.length < 11) {
                    button.disabled = false;
                    button.style.backgroundColor = "#b61539";
                    button.style.userSelect = "auto";
                    checkInputs = true;
                } else {
                    button.disabled = true;
                    button.style.backgroundColor = "#ccc";
                    button.style.userSelect = "none";
                    checkInputs = false;
                }
            } else {
                if (inputs[0].value.length === 11 && selectCity.value && allCheckBox[idx].checked) {
                    button.disabled = false;
                    button.style.backgroundColor = "#b61539";
                    button.style.userSelect = "auto";
                    checkInputs = true;
                } else {
                    button.disabled = true;
                    button.style.backgroundColor = "#ccc";
                    button.style.userSelect = "none";
                    checkInputs = false;
                }
            }
        })
    })




    allCheckBox.forEach((item) => {
        if (item.checked === true) {
            button.disabled = false;
            button.style.backgroundColor = "#b61539";
            button.style.userSelect = "auto";
        } else {
            button.disabled = true;
            button.style.backgroundColor = "#ccc";
            button.style.userSelect = "none";
        }
    })


    allCheckBox.forEach((item) => {
        item.addEventListener("click", () => {
            if (item.checked === true) {
                button.disabled = false;
                button.style.backgroundColor = "#b61539";
                button.style.userSelect = "auto";
            } else {
                button.disabled = true;
                button.style.backgroundColor = "#ccc";
                button.style.userSelect = "none";
            }
        })
    })


    const style_kasko = `
    <style>
    .image-detail{
        background: linear-gradient(0deg, rgb(255, 255, 255) 80%, rgb(249, 244, 244) 100%);
    }
    .image-detail__content{
        padding: 0 !important;
    }
    .image-detail__content .container{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 30px !important;
        flex-direction: row !important;
        gap: 50px;
        background: linear-gradient(0deg, rgb(255, 255, 255) 80%, rgb(249, 244, 244) 100%);
    }

    .image-detail__content::after {
        display: none !important;
    }

    .image-detail__content .container .get-offer{
        width: fit-content !important;
        height: 100% !important;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: #fff !important;
        border-radius: 10px;
        padding: 40px 0px !important;
    }

    .kasko_sigorta_banner {
        width: 750px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .kasko_sigorta_banner img {
        width: 100%;
        object-fit: contain;
        object-position: center;
    }

    .kasko_sigorta_title h1 {
        font-size: 20px;
        font-weight: 800;
        color: #000;
        text-align: center;
        margin-top: 1rem;
    }

    .get-offer__title {
        display: flex !important;
        width: fit-content !important;
        margin: 0px 0 14px 0 !important;
        font-weight: 500 !important;
        font-size: 14px !important;
    }

    .get-offer__item__label {
        top: 0 !important;
        left: 10 !important;
        background: #fff !important;
    }

    .get-offer__item__input {
        height: 100% !important;
        min-height: 50px !important;
        border-radius: 8px !important;
    }

    .get-offer__item__input::placeholder {
        font-size: 14px !important;
        opacity: .6 !important;
    }

    .get-offer__item__button {
        width: 70% !important;
    }

    .get-offer__item__button:hover {
        box-shadow: none !important;
    }

    .get-offer__form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 70%;
        height: 100%;
        gap: 30px;
    }

    .get-offer__disclaimer {
        width: 70%;
    }

    .get-offer__item {
        margin: 0px !important;
    }

    .get-offer__item__select {
        min-height: 50px !important;
        font-size: 18px !important;
        width: 100% !important;
    }
    </style>
    `;
    head.insertAdjacentHTML("beforeend", style_kasko);
}



