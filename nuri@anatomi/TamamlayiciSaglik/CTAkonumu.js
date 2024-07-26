
//V1
const card = document.querySelectorAll(".tss-special-cta-card")[1];
const parent = document.querySelector(".writer-detail");
const head = document.querySelector("head");
const button = document.querySelectorAll(".tss-special-cta-card .button-wrapper a")[1];
button.classList.add("anatomi-form-v1");

card.classList.add("anatomi_card");

const cardStyle = `
<style>
.anatomi_card {
    margin: 20px 0;
}
</style>
`;

parent.insertAdjacentElement("afterend", card);
head.insertAdjacentHTML("beforeend", cardStyle);

/*
const parent2 = document.getElementById("Acibadem_Tamamlayici_Saglik_Sigortasi_Teminatlari");
const card = document.querySelector(".contracted-health-care-provider-card.cta-2");
const head = document.querySelector("head");
const button = document.querySelectorAll(".tss-special-cta-card .button-wrapper a")[1];
button.classList.add("anatomi-form-2");

card.classList.add("anatomi_card");

const cardStyle = `
<style>
.anatomi_card {
    margin: 20px 0;
}
</style>
`;

parent2.insertAdjacentElement("beforebegin", card);
head.insertAdjacentHTML("beforeend", cardStyle);// V2

*/