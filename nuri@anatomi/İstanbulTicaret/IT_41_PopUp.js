const pop_style = `    <style>
        
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;800;900&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


.anatomi-popUp-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    font-family: inherit;
    width: 29%;
    z-index: 9999;
}

body.popUp-open::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 999;
}

.anatomi-popUp-content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 30px 0px;
}

.first-title p {
    font-size: 26px;
    font-weight: 800;
}

.second-title {
    width: 90%;
    text-align: center;
}

.second-title p {
    font-size: 20px;
    font-weight: 500;
}

.popUp-input {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
}

.popUp-input input {
    width: 90%;
    padding: 15px 10px;
    background-color: #DEDDD7;
    border: none;
    border-radius: 10px;
    color: #fff;
}

.popUp-button input {
    padding: 20px 60px;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 20px;
    background-color: #000;
    cursor: pointer;
    margin-top: 20px;
}

.third-title p {
    font-size: 25px;
    font-weight: 800;
    color: #FFC10D;
    text-transform: uppercase;
}

.close-popUp {
    position: absolute;
    top: 4%;
    right: 2.5%;
    width: 20px;
    height: 20px;
}

.close-popUp button {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    font-size: 20px;
    cursor: pointer;
}

@media screen and (max-width: 768px) {
    .anatomi-popUp-container {
        width: 80%;
    }

    .anatomi-popUp-content {
        width: 100%;
        height: 100%;
    }

    .first-title p {
        font-size: 20px;
    }

    .second-title {
        width: 80%;
    }

    .second-title p {
        font-size: 16px;
    }

    .popUp-input {
        width: 80%;
    }

    .popUp-input input {
        width: 100%;
    }

    .popUp-button input {
        padding: 10px 30px;
        font-size: 16px;
    }

    .third-title p {
        font-size: 18px;
    }

    .close-popUp {
        top: 2%;
        right: 2%;
        width: 15px;
        height: 15px;
    }

    .close-popUp button {
        font-size: 15px;
    }
}
</style>`;

const pop_html = ` <div class="anatomi-popUp-container">
<div class="anatomi-popUp-content">
    <div class="first-title">
        <p>Merhaba !</p>
    </div>

    <div class="second-title">
        <p>Kampanya ve yeniliklerden haberdar olmak için E-bültenimize kayıt olun.</p>
    </div>

    <div class="third-title">
        <p>Üyeliğe özel indirim kazan</p>
    </div>

    <div class="popUp-input col col-10 col-xs-12">
        <input type="text" class="col col-12 double box-border sub-email withPlace" placeholder="E-posta adresinizi girin.">
    </div>

    <div class="popUp-button" >
        <input type="button" id="newsletterBtn" class="btn col-12 darkBg subscribe" value="Gönder"></input>
    </div>

    <div class="close-popUp">
        <button><img src="https://anatomi.s3.eu-north-1.amazonaws.com/x-button+1.webp" alt=""></button>
    </div>
</div>
</div>`;


const mainWrapper = document.getElementById("mainWrapper");
const head = document.querySelector("head");
const body = document.querySelector("body");

if (window.location.pathname == "/" || window.location.pathname == "/sepet"){
    mainWrapper.insertAdjacentHTML("beforeend", pop_html);
    head.insertAdjacentHTML("beforeend", pop_style);
    body.classList.add("popUp-open");

    const closePopUp = document.querySelector(".close-popUp");

    closePopUp.addEventListener("click", () => {

        const popUpContainer = document.querySelector(".anatomi-popUp-container");
        popUpContainer.style.display = "none";
        body.classList.remove("popUp-open");

    }
    );
}


