
const card = document.querySelectorAll(".tss-special-cta-card")[1];
const parent = document.querySelector(".writer-detail");
const head = document.querySelector("head");
const button = document.querySelectorAll(".tss-special-cta-card .button-wrapper a")[1];
button.classList.add("anatomi-form-v1");
const observer = new MutationObserver(mutationsList => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            button.classList.add("anatomi-form-v1");
            observer.disconnect();
        }
    }
});

observer.observe(button, { attributes: true });


card.classList.add("anatomi_card");
const cardStyle = `
<style>
.anatomi_card {
    margin: 20px 0;
}
</style>
`
    ;
parent.insertAdjacentElement("afterend", card);
head.insertAdjacentHTML("beforeend", cardStyle);

if (window.location.href.includes("/sigorta-sirketleri")) {


    button.addEventListener("click", (e) => {
        e.preventDefault();
        if (button.classList.contains("anatomi-form-v1")) {
            const expirationDate = new Date();
            expirationDate.setMonth(expirationDate.getMonth() + 1);
            const expires = expirationDate.toUTCString();

            document.cookie = `versiyon1=true; expires=${expires}; path=/`;
            console.log('Cookie set!');
        }

    })
}



//-------------v2-------------------
/*

const card = document.querySelectorAll(".tss-special-cta-card")[1];
const parent = document.querySelectorAll("#sectionBox h2")[0];
const head = document.querySelector("head");
const button = document.querySelectorAll(".tss-special-cta-card .button-wrapper a")[1];
button.classList.add("anatomi-form-v2");
const observer = new MutationObserver(mutationsList => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            button.classList.add("anatomi-form-v2");
            observer.disconnect();
        }
    }
});

observer.observe(button, { attributes: true });


card.classList.add("anatomi_card");
const cardStyle = `
<style>
.anatomi_card {
    margin: 20px 0;
}
</style>
`
    ;
parent.insertAdjacentElement("afterend", card);
head.insertAdjacentHTML("beforeend", cardStyle);

if (window.location.href.includes("/sigorta-sirketleri")) {


    button.addEventListener("click", (e) => {
        e.preventDefault();
        if (button.classList.contains("anatomi-form-v2")) {
            const expirationDate = new Date();
            expirationDate.setMonth(expirationDate.getMonth() + 1);
            const expires = expirationDate.toUTCString();

            document.cookie = `versiyon2=true; expires=${expires}; path=/`;
            console.log('Cookie set!');
        }

    })
}


*/

//-------------V2-------------------

if (window.location.href.includes("/teklifler")) {

    const emailInput = document.querySelector("#email");
    const phoneInput = document.querySelector("#phone-input");
    const firstNameInput = document.querySelector("#first-name-input");
    const lastNameInput = document.querySelector("#last-name-input");

    function deleteCookie(cookieName) {
        document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }

    const formButton = document.querySelector(".form-wrapper .button.primary.lg.w-100");
    formButton.addEventListener("click", (e) => {
        if (emailInput.value && phoneInput.value && firstNameInput.value && lastNameInput.value) {
            deleteCookie('versiyon1');
            deleteCookie('versiyon2');
            console.log('Cookie deleted!');
        }
    })
}


