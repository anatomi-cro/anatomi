const anatomi_ayrilma_style = `
<style>
.anatomi_closure_zone_left {
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 80px;
    z-index: 9999;
}

.anatomi_closure_zone_right {
    position: fixed;
    top: 0;
    right: 0;
    width: 20%;
    height: 80px;
    z-index: 9999;
}

.anatomi_closure_popUp {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 400px;
    background-color: orange;
    z-index: 9999;
    display: none;
}

.anatomi_closure_popUp.active_popUp {
    display: block;
    animation: popUp2 0.5s ease-in-out;
}

@keyframes popUp {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.9); 
    }
    25% {
        transform: translate(-50%, -50%) scale(1.1); 
    }
    50% {
        transform: translate(-50%, -50%) scale(0.95); 
    }
    75% {
        transform: translate(-50%, -50%) scale(1.05); 
    }
    100% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
}

@keyframes popUp2 {
    0% {
        opacity: 0;
        transform: translate(-50%, -50%) translateX(-5px);
    }
    25% {
        transform: translate(-50%, -50%) translateX(5px);
    }
    50% {
        transform: translate(-50%, -50%) translateX(-3px);
    }
    75% {
        transform: translate(-50%, -50%) translateX(3px);
    }
    100% {
        opacity: 1;
        transform: translate(-50%, -50%);
    }
}

.anatomi_closure_popUp_close {
    position: absolute;
    top: -3%;
    right: -3%;
    width: 30px;
    height: 30px;
    cursor: pointer;
}

.anatomi_closure_popUp_close img {
    width: 100%;
    height: 100%;
}
</style>
`;

const anatomi_ayrilma_html = `
<div class="anatomi_closure_zone_left"></div>
<div class="anatomi_closure_zone_right"></div>
<div class="anatomi_closure_popUp">
<div class="anatomi_closure_popUp_close">
    <img src="https://anatomi.s3.eu-north-1.amazonaws.com/icons8-close-50.png" alt="">
</div>
</div>
`;

const ahead = document.querySelector('head');
const body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin', anatomi_ayrilma_html);
ahead.insertAdjacentHTML('beforeend', anatomi_ayrilma_style);

const closureZoneLeft = document.querySelector('.anatomi_closure_zone_left');
const closureZoneRight = document.querySelector('.anatomi_closure_zone_right');
const popUp = document.querySelector('.anatomi_closure_popUp');
let popUpDisplayed = false; 

closureZoneLeft.addEventListener("mouseover", function () {
    if (!popUpDisplayed) { 
        popUp.classList.add('active_popUp');
        popUpDisplayed = true; 
    }
});

closureZoneRight.addEventListener("mouseover", function () {
    if (!popUpDisplayed) {
        popUp.classList.add('active_popUp');
        popUpDisplayed = true;
    }
});

document.querySelector('.anatomi_closure_popUp_close').addEventListener("click", function () {
    popUp.style.display = 'none';
    popUpDisplayed = false;

});

const form = document.querySelectorAll(".form")

form.forEach((form) => {
    const popUp = document.querySelector('.anatomi_closure_popUp');
    popUp.appendChild(form);
});