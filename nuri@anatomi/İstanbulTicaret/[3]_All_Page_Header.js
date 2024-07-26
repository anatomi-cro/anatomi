const uyeOl = document.querySelector(".Uye");
uyeOl.classList.add("anatomi_user_login_button");
const an_head = document.querySelector("head");
const a_uyeOl = document.querySelector(".anatomi_user_login_button");
const a_uyeOl_parent = a_uyeOl.parentElement;
a_uyeOl_parent.classList.add("anatomi_user_login_button_parent");


uyeOl.innerHTML = "";

const container = document.createElement("div");
container.classList.add("anatomi_user_login_container");

const content = document.createElement("div");
content.classList.add("anatomi_user_login_content");

const col1 = document.createElement("div");
col1.classList.add("anatomi_user_login_col1");

const col2 = document.createElement("div");
col2.classList.add("anatomi_user_login_col2");

const col3 = document.createElement("div");
col3.classList.add("anatomi_user_login_col3");

content.appendChild(col1);
content.appendChild(col2);
content.appendChild(col3);
container.appendChild(content);
a_uyeOl.appendChild(container);

const col1Content = `
<img src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+(2).webp" alt="">
`;

const col2Content = `
<p>Giriş Yap</p>
<p>Veya Üye Ol</p>
`;

const col3Content = `
<img src="https://anatomi.s3.eu-north-1.amazonaws.com/Arrow+1+(Stroke)+(4).png" alt="">
`;


col1.insertAdjacentHTML("beforeend", col1Content);
col2.insertAdjacentHTML("beforeend", col2Content);
col3.insertAdjacentHTML("beforeend", col3Content);

var left = window.innerWidth / 100 + 20;

const anatomi_user_login_style = `
<style>
.anatomi_user_login_button_parent {
    width: fit-content;
}

.anatomi_user_login_button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center !important;
    width: 100%;
    height: 100%;
    cursor: pointer;
    padding: 0 10px;
    background-color: #fff !important;
    border: none !important;
}
.anatomi_user_login_content {
    display: flex;
    align-items: center;
    justify-content: center !important;
    gap: 10px;
    cursor: pointer;
}

.anatomi_user_login_col2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    white-space: nowrap;
}

.anatomi_user_login_col2 p {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 600;
    line-height: .95;
}

.anatomi_user_login_col2 p:nth-child(2) {
    font-size: 12px;
    margin-top: 5px;
    font-weight: 400;
}

.anatomi_user_login_popup_container {
    position: absolute;
    bottom: -300%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    width: 200px;
    height: 120px;
    z-index: 9999999999999;
    border-radius: 5px;
    border: 1px solid #e5e5e5;
    display: none;
}

.anatomi_user_login_popup_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    height : 100%;

}

.anatomi_user_login_popup_content a {
    text-decoration: none;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    width: 80%;
    padding: 10px 0px;
    border-radius: 5px;
    transition: all .3s ease;
    white-space: nowrap;
    text-align: center;
}

.anatomi_user_login_popup_content a:nth-child(1) {
    background-color: #ffc20e;
}

.anatomi_user_login_popup_content a:nth-child(2) {
    background-color: #D4D4D4;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.anatomi_blog_button {
    background-color: #fff !important;
    border: none !important;
}

.anatomi_blog_button svg {
    transform: translateX(30px);
}

.cart-soft-count {
    width: 18px !important;
    height: 18px !important;
}
.anatomi_sepet_button {
    background-color: #fff !important;
    border: none !important;
}

.anatomi_sepet_button span:first-child {
    font-size: 14px;
    font-weight: 600;
    color: #000;
}

.cart-soft-count {
    left: ${left}px !important;
}

.a_blog {
    cursor: pointer;
}

.UserSection .Uye a:last-child {
    display: block !important;
}

</style>
`;

an_head.insertAdjacentHTML("beforeend", anatomi_user_login_style);


/*------------------------LOGIN BUTTON POP UP------------------------*/

const popUp = document.createElement("div");
popUp.classList.add("anatomi_user_login_popup");

const popUpContent = `
<div class="anatomi_user_login_popup_container">
    <div class="anatomi_user_login_popup_content">
        <a href="/uye-girisi-sayfasi">Giriş Yap</a>
        <a href="/index.php?B=YeniUye">Üye Ol</a>
    </div>
</div>
`;

popUp.insertAdjacentHTML("beforeend", popUpContent);
a_uyeOl.insertAdjacentElement("beforeend", popUp);

content.addEventListener("click", () => {
    const popUpContainer = document.querySelector(".anatomi_user_login_popup_container");
    popUpContainer.style.display = "flex";
    popUpContainer.style.animation = "fadeIn .3s ease";
    setTimeout(() => {
        popUpContainer.style.animation = "none";
    }, 300);
});


document.addEventListener("click", (event) => {
    const popUpContainer = document.querySelector(".anatomi_user_login_popup_container");
    const targetElement = event.target; // Tıklanan öğeyi al


    const isClickedInsideButton = targetElement.closest(".anatomi_user_login_button");
    const isClickedInsidePopUp = targetElement.closest(".anatomi_user_login_popup_container");

    if (!isClickedInsideButton && !isClickedInsidePopUp) {
        popUpContainer.style.display = "none";
    }
});


/*-----------------------blog button-----------------------*/

const blog = document.querySelector(".blogarea");
blog.classList.add("anatomi_blog_button");

const a_blog = document.querySelector(".anatomi_blog_button");


var leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.42872 0.238644L6.75487 5.42387C7.08171 5.74206 7.08171 6.25795 6.75487 6.57614L1.42872 11.7614C1.10188 12.0795 0.571966 12.0795 0.245127 11.7614C-0.0817117 11.4432 -0.0817116 10.9273 0.245127 10.6091L4.97949 6L0.245129 1.39091C-0.0817099 1.07272 -0.0817098 0.556834 0.245129 0.238643C0.571969 -0.0795477 1.10188 -0.0795476 1.42872 0.238644Z" fill="#333333"/>
</svg>`;

a_blog.innerHTML = a_blog.textContent + leftArrow;

a_blog.addEventListener("click", () => {
    window.location.href = "/blog";
});

a_blog.style.cursor = "pointer";

/*-----------------------sepet-----------------------*/

const sepet = document.querySelector(".Sepet");
sepet.classList.add("anatomi_sepet_button");

const a_sepet = document.querySelector(".anatomi_sepet_button");
const a_sepet_img = document.querySelector(".anatomi_sepet_button img");
a_sepet_img.src = "https://anatomi.s3.eu-north-1.amazonaws.com/Group+(3).png";