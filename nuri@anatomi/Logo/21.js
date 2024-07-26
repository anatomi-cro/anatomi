const parrentElement = document.querySelector(".stye_loginForm__fvcTH");
const uyeOl = document.createElement("button");
const giris = document.querySelector(".stye_loginForm__fvcTH button");
const head = document.querySelector("head");
uyeOl.classList.add("uyeOl-button");
const buttonGroup = document.createElement("div");
buttonGroup.classList.add("button-group");


const uyeOl_style = `
<style>
.button-group {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 10px;
}

.uyeOl-button {
    font-size: 14px;
    font-weight: 500;
    border: 1px solid #c8102e;
    border-radius: 999px;
    min-width: 185px;
    min-height: 45px;
    color: #c8102e;
    background-color: #fff;
}
</style>
`;

uyeOl.innerHTML = "Üye Ol";
head.insertAdjacentHTML("beforeend", uyeOl_style);
parrentElement.appendChild(buttonGroup);
buttonGroup.appendChild(giris);
buttonGroup.appendChild(uyeOl);
giris.style.minWidth = "185px";

uyeOl.addEventListener("click", () => {
    window.location.href = "https://portal.logo.com.tr/signup";
});

const deleteUyeOl = document.querySelectorAll(".stye_redirect__kBGXu a");

deleteUyeOl[1].remove();


