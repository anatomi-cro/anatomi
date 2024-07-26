//---------v1------------

/*


const subContainer = document.querySelector(".subContainer");

if(subContainer){
    const addToCardPopup_style = `
<style>
.subContainer {
    height: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 96%;
}

#cartPopup {
    border-radius: 12px !important;
    height: 100% !important;
}

.a_hmnbtn {
    width: 90%;
}

.anatomi_sepete_git_button {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    background: #EE7B30 !important;
    padding: 12px !important;
    color: white !important;
    border-radius: 5px !important;
    font-size: 14px !important;
    width: 98% !important;
    text-decoration: none !important;
    line-height: normal !important;
}

.product_buttons {
    display: flex !important;
    justify-content: flex-start;
    margin-top: 5px !important;
    margin-left: 7px !important;
    width: 100% !important;
    align-items: flex-start;
}

.btn.btn-radius.btn-success {
    width: 98% !important;
}

.anatomi_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.product_success {
    color: #5C9C54;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
    margin-bottom: 15px;
}

</style>
`;

const product_success = document.querySelector(".product_success");
const a_container = document.querySelector(".anatomi_container");
if(a_container){
    a_container.insertAdjacentElement("afterbegin", product_success);
}

const product_buttons = document.querySelectorAll(".product_buttons button");
if(product_buttons[0]){
    product_buttons[0].remove();
}

if(product_buttons[1]){
    product_buttons[1].classList.add("anatomi_sepete_git_button");
}


const anatomi_head = document.querySelector("head");
anatomi_head.insertAdjacentHTML("beforeend", addToCardPopup_style);

}

*/

//---------v2------------

const subContainer = document.querySelector(".subContainer");

if(subContainer){
    const addToCardPopup_style = `
<style>
.subContainer {
    height: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 96%;
}

#cartPopup {
    border-radius: 12px !important;
    height: 100% !important;
}

.a_hmnbtn {
    width: 90%;
    background: #304C55 !important;
}

.anatomi_sepete_git_button {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    background: #EE7B30 !important;
    padding: 12px !important;
    color: white !important;
    border-radius: 5px !important;
    font-size: 14px !important;
    width: 98% !important;
    text-decoration: none !important;
    line-height: normal !important;
}

.product_buttons {
    display: flex !important;
    justify-content: flex-start;
    margin-top: 5px !important;
    margin-left: 7px !important;
    width: 100% !important;
    /* margin: 0 auto; */
    align-items: flex-start;
}

.btn.btn-radius.btn-success {
    width: 98% !important;
}

.anatomi_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.product_success {
    color: #5C9C54;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
    margin-bottom: 15px;
}

</style>
`;

const product_success = document.querySelector(".product_success");
const a_container = document.querySelector(".anatomi_container");
if(a_container){
    a_container.insertAdjacentElement("afterbegin", product_success);
}

const product_buttons = document.querySelectorAll(".product_buttons button");

product_buttons.forEach((button) => {
    if(button.textContent === "Alışverişe Devam"){
        button.remove();
    }else {
        button.classList.add("anatomi_sepete_git_button");
    }
});

const anatomi_head = document.querySelector("head");
anatomi_head.insertAdjacentHTML("beforeend", addToCardPopup_style);

}

