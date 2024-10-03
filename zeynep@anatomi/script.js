<<<<<<< HEAD
//değişkenler
const memberMenu = document.querySelector('#memberMenuWrap').parentElement,
    headerContainer = document.querySelector('#headerMain .forDesktop'),
    cartBtn = document.querySelector('.cartTop'),
    cargoBtn = cartBtn.nextElementSibling,
    searchBtn = document.querySelector('#searchBtn'),
    searchInput = document.querySelector('#searchListWrap input');

//Kullanıcı giriş yapmış mı ?
const status = document.querySelector('#desktopMemberBtn').innerText === "Hesap";

//sepet butonu class güncellemesi
cartBtn.className = "cartTop forDesktop";

//header menu container class güncellemesi
headerContainer.className = "anatomi_container forDesktop";

//Açılır menü
const userLogin = `
    <div class="a_login_sub_container">
        <div class="arrow-up"></div>
        <a class="loginBtn popupWin" data-url="/srv/service/customer/login-form" href="#" id="desktopMemberBtn">
            Giriş Yap
        </a>
        <a href="https://www.elektrix.com/uye-kayit" class="registerBtn">
            Üye Ol
        </a>
    </div>`;

const style = `
<style>
div#search {
    margin-left: 120px;
}

.basketLink .cart-soft-count{
    top: -15px !important;
    left: 26px !important;
}

.anatomi_container {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 140px);
    justify-content: center;
    align-items: center;
    margin-left: auto; 
    margin-right: 0;
}

.a_login_sub_container {
    display: none;
    position: absolute;
    top: 60px;
    left: -10px;
    padding: 20px 40px;
    background-color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    z-index: 99;
    border-radius: 4px;
    border: 1px solid #BBBBBB;
}

.a_login_sub_container a {
    width: 80%;
    padding: 10px 20px;
    text-align: center;
    border-radius: 4px;
}

a.loginBtn {
    background-color: #387FBA;
    color: white;
}

a.registerBtn {
    background-color: #D4D4D4;
}

#cart-soft-count {
    background: none !important;
    color: black !important;
}

/* search */
div#search {
    border-radius: 4px;
    border: none;
    background-color: #F3F3F3;
}

.a_search_icon{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

input#searchBtn {
    background: transparent;
    border: none;
}

#FormAra .col.col-3.p-left.p-right {
    position: relative;
    width: 50px;
    float: right;
}

#searchListWrap input{
    border: none;
    background-color: #F3F3F3;
}

.cartTop strong, .a_cargo, .a_login{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.a_login *{
    pointer-events: none;
}

.active{
    display: flex;
}
</style>
`;
const anatomi_html = `
    <a class="a_login" ${status ? "href='https://www.elektrix.com/uye-girisi-sayfasi'" : ""}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.87672 8.61682C2.79736 8.61682 0 11.0197 0 15.383C0 15.7238 0.276194 16 0.61697 16H15.1364C15.4772 16 15.7534 15.7238 15.7534 15.383C15.7534 11.02 12.9561 8.61682 7.87672 8.61682ZM1.25639 14.766C1.49907 11.5037 3.72325 9.85079 7.87672 9.85079C12.0302 9.85079 14.2544 11.5037 14.4973 14.766H1.25639V14.766Z" fill="#333333"/>
            <path d="M7.87676 0C5.54356 0 3.78418 1.79478 3.78418 4.17467C3.78418 6.62425 5.6201 8.61688 7.87676 8.61688C10.1334 8.61688 11.9693 6.62425 11.9693 4.17486C11.9693 1.79478 10.21 0 7.87676 0ZM7.87676 7.38313C6.3004 7.38313 5.01812 5.94392 5.01812 4.17486C5.01812 2.47079 6.2204 1.23394 7.87676 1.23394C9.50662 1.23394 10.7354 2.49812 10.7354 4.17486C10.7354 5.94392 9.45313 7.38313 7.87676 7.38313Z" fill="#333333"/>
            </svg>
            <span>${status ? "Hesabım" : "Giriş Yap" }</span>
        </a>
    <a class="a_cargo">
            <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.73282 12.7083H5.64949C5.36199 12.7083 5.12866 12.475 5.12866 12.1875C5.12866 11.9 5.36199 11.6666 5.64949 11.6666H7.73282C8.02032 11.6666 8.25365 11.9 8.25365 12.1875C8.25365 12.475 8.02032 12.7083 7.73282 12.7083Z" fill="#333333"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.73266 12.9167H5.64933C5.24677 12.9167 4.92017 12.5901 4.92017 12.1875C4.92017 11.785 5.24677 11.4584 5.64933 11.4584H7.73266C8.13521 11.4584 8.46182 11.785 8.46182 12.1875C8.46182 12.5901 8.13521 12.9167 7.73266 12.9167ZM5.64933 12.7084H7.73266C8.02015 12.7084 8.25349 12.475 8.25349 12.1875C8.25349 11.9 8.02015 11.6667 7.73266 11.6667H5.64933C5.36183 11.6667 5.1285 11.9 5.1285 12.1875C5.1285 12.475 5.36183 12.7084 5.64933 12.7084Z" fill="#333333"/>
            <path d="M24.6594 12.7082H23.3573C23.0698 12.7082 22.8365 12.4749 22.8365 12.1874C22.8365 11.8999 23.0698 11.6666 23.3573 11.6666H24.2271L24.9292 7.92492C24.9198 6.01033 23.2844 4.37492 21.274 4.37492H17.8542L16.1969 11.6666H19.1907C19.4782 11.6666 19.7115 11.8999 19.7115 12.1874C19.7115 12.4749 19.4782 12.7082 19.1907 12.7082H15.5448C15.3865 12.7082 15.2365 12.6364 15.1375 12.5124C15.0386 12.3895 15.0011 12.227 15.0365 12.0728L16.9303 3.7395C16.9844 3.50096 17.1948 3.33325 17.4386 3.33325H21.274C23.8583 3.33325 25.9615 5.43638 25.9615 8.02075L25.1708 12.2832C25.125 12.5301 24.9104 12.7082 24.6594 12.7082Z" fill="#333333"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.1701 8.03999L25.376 12.3213C25.3118 12.6671 25.011 12.9167 24.6597 12.9167H23.3576C22.9551 12.9167 22.6285 12.5901 22.6285 12.1875C22.6285 11.7849 22.9551 11.4583 23.3576 11.4583H24.0545L24.721 7.90644C24.7012 6.11785 23.1661 4.58333 21.2743 4.58333H18.0208L16.4582 11.4583H19.191C19.5935 11.4583 19.9201 11.7849 19.9201 12.1875C19.9201 12.5901 19.5935 12.9167 19.191 12.9167H15.5452C15.3238 12.9167 15.114 12.8163 14.9753 12.6428C14.8366 12.4703 14.7841 12.2427 14.8337 12.0265C14.8338 12.0264 14.8337 12.0266 14.8337 12.0265L16.7274 3.69345C16.7274 3.69344 16.7274 3.69346 16.7274 3.69345C16.8031 3.36009 17.0978 3.125 17.4389 3.125H21.2743C23.9737 3.125 26.1701 5.3214 26.1701 8.02083V8.03999ZM16.9306 3.73958L15.0368 12.0729C15.0014 12.2271 15.0389 12.3896 15.1379 12.5125C15.2368 12.6365 15.3868 12.7083 15.5452 12.7083H19.191C19.4785 12.7083 19.7118 12.475 19.7118 12.1875C19.7118 11.9 19.4785 11.6667 19.191 11.6667H16.1972L17.8545 4.375H21.2743C23.2847 4.375 24.9201 6.01042 24.9295 7.925L24.2274 11.6667H23.3576C23.0701 11.6667 22.8368 11.9 22.8368 12.1875C22.8368 12.475 23.0701 12.7083 23.3576 12.7083H24.6597C24.9108 12.7083 25.1253 12.5302 25.1712 12.2833L25.9618 8.02083C25.9618 5.43646 23.8587 3.33333 21.2743 3.33333H17.4389C17.1952 3.33333 16.9847 3.50104 16.9306 3.73958Z" fill="#333333"/>
            <path d="M21.2744 14.7916C19.839 14.7916 18.6703 13.6239 18.6703 12.1874C18.6703 10.751 19.839 9.58325 21.2744 9.58325C22.7099 9.58325 23.8786 10.751 23.8786 12.1874C23.8786 13.6239 22.7099 14.7916 21.2744 14.7916ZM21.2744 10.6249C20.413 10.6249 19.712 11.326 19.712 12.1874C19.712 13.0489 20.413 13.7499 21.2744 13.7499C22.1359 13.7499 22.8369 13.0489 22.8369 12.1874C22.8369 11.326 22.1359 10.6249 21.2744 10.6249Z" fill="#333333"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2743 15C19.7239 15 18.4618 13.7391 18.4618 12.1875C18.4618 10.6359 19.7239 9.375 21.2743 9.375C22.8247 9.375 24.0868 10.6359 24.0868 12.1875C24.0868 13.7391 22.8247 15 21.2743 15ZM21.2743 10.8333C20.5279 10.8333 19.9201 11.4411 19.9201 12.1875C19.9201 12.9339 20.5279 13.5417 21.2743 13.5417C22.0207 13.5417 22.6284 12.9339 22.6284 12.1875C22.6284 11.4411 22.0207 10.8333 21.2743 10.8333ZM18.6701 12.1875C18.6701 13.624 19.8389 14.7917 21.2743 14.7917C22.7097 14.7917 23.8784 13.624 23.8784 12.1875C23.8784 10.751 22.7097 9.58333 21.2743 9.58333C19.8389 9.58333 18.6701 10.751 18.6701 12.1875ZM19.7118 12.1875C19.7118 11.326 20.4128 10.625 21.2743 10.625C22.1357 10.625 22.8368 11.326 22.8368 12.1875C22.8368 13.049 22.1357 13.75 21.2743 13.75C20.4128 13.75 19.7118 13.049 19.7118 12.1875Z" fill="#333333"/>
            <path d="M9.81607 14.7916C8.38066 14.7916 7.21191 13.6239 7.21191 12.1874C7.21191 10.751 8.38066 9.58325 9.81607 9.58325C11.2515 9.58325 12.4202 10.751 12.4202 12.1874C12.4202 13.6239 11.2515 14.7916 9.81607 14.7916ZM9.81607 10.6249C8.95462 10.6249 8.25358 11.326 8.25358 12.1874C8.25358 13.0489 8.95462 13.7499 9.81607 13.7499C10.6775 13.7499 11.3786 13.0489 11.3786 12.1874C11.3786 11.326 10.6775 10.6249 9.81607 10.6249Z" fill="#333333"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.81591 15C8.26549 15 7.00342 13.7391 7.00342 12.1875C7.00342 10.6359 8.26549 9.375 9.81591 9.375C11.3663 9.375 12.6284 10.6359 12.6284 12.1875C12.6284 13.7391 11.3663 15 9.81591 15ZM9.81591 10.8333C9.06951 10.8333 8.46175 11.4411 8.46175 12.1875C8.46175 12.9339 9.06951 13.5417 9.81591 13.5417C10.5623 13.5417 11.1701 12.9339 11.1701 12.1875C11.1701 11.4411 10.5623 10.8333 9.81591 10.8333ZM7.21175 12.1875C7.21175 13.624 8.3805 14.7917 9.81591 14.7917C11.2513 14.7917 12.4201 13.624 12.4201 12.1875C12.4201 10.751 11.2513 9.58333 9.81591 9.58333C8.3805 9.58333 7.21175 10.751 7.21175 12.1875ZM8.25341 12.1875C8.25341 11.326 8.95445 10.625 9.81591 10.625C10.6774 10.625 11.3784 11.326 11.3784 12.1875C11.3784 13.049 10.6774 13.75 9.81591 13.75C8.95445 13.75 8.25341 13.049 8.25341 12.1875Z" fill="#333333"/>
            <path d="M7.73277 3.33329H3.56612C3.27862 3.33329 3.04529 3.09996 3.04529 2.81246C3.04529 2.52496 3.27862 2.29163 3.56612 2.29163H7.73277C8.02027 2.29163 8.2536 2.52496 8.2536 2.81246C8.2536 3.09996 8.02027 3.33329 7.73277 3.33329Z" fill="#333333"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.7326 3.54171H3.56596C3.1634 3.54171 2.83679 3.2151 2.83679 2.81254C2.83679 2.40998 3.1634 2.08337 3.56596 2.08337H7.7326C8.13516 2.08337 8.46177 2.40998 8.46177 2.81254C8.46177 3.2151 8.13516 3.54171 7.7326 3.54171ZM3.56596 3.33337H7.7326C8.0201 3.33337 8.25344 3.10004 8.25344 2.81254C8.25344 2.52504 8.0201 2.29171 7.7326 2.29171H3.56596C3.27846 2.29171 3.04513 2.52504 3.04513 2.81254C3.04513 3.10004 3.27846 3.33337 3.56596 3.33337Z" fill="#333333"/>
            <path d="M7.73269 6.45829H2.52437C2.23687 6.45829 2.00354 6.22496 2.00354 5.93746C2.00354 5.64996 2.23687 5.41663 2.52437 5.41663H7.73269C8.02018 5.41663 8.25352 5.64996 8.25352 5.93746C8.25352 6.22496 8.02018 6.45829 7.73269 6.45829Z" fill="#333333"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.73252 6.66671H2.52421C2.12165 6.66671 1.79504 6.3401 1.79504 5.93754C1.79504 5.53498 2.12165 5.20837 2.52421 5.20837H7.73252C8.13508 5.20837 8.46168 5.53498 8.46168 5.93754C8.46168 6.3401 8.13508 6.66671 7.73252 6.66671ZM2.52421 6.45837H7.73252C8.02002 6.45837 8.25335 6.22504 8.25335 5.93754C8.25335 5.65004 8.02002 5.41671 7.73252 5.41671H2.52421C2.23671 5.41671 2.00338 5.65004 2.00338 5.93754C2.00338 6.22504 2.23671 6.45837 2.52421 6.45837Z" fill="#333333"/>
            <path d="M7.73272 9.58329H1.48275C1.19525 9.58329 0.961914 9.34996 0.961914 9.06246C0.961914 8.77496 1.19525 8.54163 1.48275 8.54163H7.73272C8.02022 8.54163 8.25355 8.77496 8.25355 9.06246C8.25355 9.34996 8.02022 9.58329 7.73272 9.58329Z" fill="#333333"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.73256 9.79158H1.48258C1.08002 9.79158 0.753418 9.46498 0.753418 9.06242C0.753418 8.65986 1.08002 8.33325 1.48258 8.33325H7.73256C8.13511 8.33325 8.46172 8.65986 8.46172 9.06242C8.46172 9.46498 8.13511 9.79158 7.73256 9.79158ZM1.48258 9.58325H7.73256C8.02005 9.58325 8.25339 9.34992 8.25339 9.06242C8.25339 8.77492 8.02005 8.54159 7.73256 8.54159H1.48258C1.19508 8.54159 0.961751 8.77492 0.961751 9.06242C0.961751 9.34992 1.19508 9.58325 1.48258 9.58325Z" fill="#333333"/>
            <path d="M15.5453 12.7082H11.8995C11.612 12.7082 11.3786 12.4749 11.3786 12.1874C11.3786 11.8999 11.612 11.6666 11.8995 11.6666H15.1297L17.4963 1.24992H5.64949C5.36199 1.24992 5.12866 1.01658 5.12866 0.729085C5.12866 0.441585 5.36199 0.208252 5.64949 0.208252H18.1494C18.3078 0.208252 18.4578 0.280127 18.5567 0.404085C18.6557 0.527002 18.6932 0.689502 18.6578 0.843668L16.0536 12.302C15.9994 12.5405 15.788 12.7082 15.5453 12.7082Z" fill="#333333"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5451 12.9167H11.8993C11.4967 12.9167 11.1701 12.5901 11.1701 12.1875C11.1701 11.7849 11.4967 11.4583 11.8993 11.4583H14.9632L17.2352 1.45833H5.64933C5.24677 1.45833 4.92017 1.13172 4.92017 0.729166C4.92017 0.326608 5.24677 0 5.64933 0H18.1493C18.3706 0 18.5805 0.10041 18.7191 0.273854C18.8578 0.446364 18.9103 0.673945 18.8607 0.890176C18.8607 0.890249 18.8607 0.890102 18.8607 0.890176L16.2566 12.3482C16.2566 12.3482 16.2566 12.3482 16.2566 12.3482C16.1808 12.6818 15.8849 12.9167 15.5451 12.9167ZM18.5566 0.404167C18.4576 0.280209 18.3076 0.208333 18.1493 0.208333H5.64933C5.36183 0.208333 5.1285 0.441667 5.1285 0.729166C5.1285 1.01667 5.36183 1.25 5.64933 1.25H17.4962L15.1295 11.6667H11.8993C11.6118 11.6667 11.3785 11.9 11.3785 12.1875C11.3785 12.475 11.6118 12.7083 11.8993 12.7083H15.5451C15.7878 12.7083 15.9993 12.5406 16.0535 12.3021L18.6576 0.84375C18.693 0.689583 18.6555 0.527083 18.5566 0.404167Z" fill="#333333"/>
            </svg>
            <span>Sipariş Takip</span>
    </a>
    ${status ? "" : userLogin}
`;

//ikonlar
const cartIcon = `
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.30804 17.931C4.30804 19.0717 5.23632 20 6.37701 20C7.5177 20 8.44597 19.0717 8.44597 17.931C8.44597 16.7903 7.5177 15.8621 6.37701 15.8621C5.23632 15.8621 4.30804 16.7903 4.30804 17.931ZM7.06666 17.931C7.06666 18.311 6.75701 18.6207 6.37701 18.6207C5.99701 18.6207 5.68735 18.311 5.68735 17.931C5.68735 17.551 5.99701 17.2414 6.37701 17.2414C6.75701 17.2414 7.06666 17.551 7.06666 17.931Z" fill="#333333"/>
    <path d="M16.7219 17.931C16.7219 16.7903 15.7936 15.8621 14.6529 15.8621C13.5122 15.8621 12.5839 16.7903 12.5839 17.931C12.5839 19.0717 13.5122 20 14.6529 20C15.7936 20 16.7219 19.0717 16.7219 17.931ZM13.9632 17.931C13.9632 17.551 14.2729 17.2414 14.6529 17.2414C15.0329 17.2414 15.3425 17.551 15.3425 17.931C15.3425 18.311 15.0329 18.6207 14.6529 18.6207C14.2729 18.6207 13.9632 18.311 13.9632 17.931Z" fill="#333333"/>
    <path d="M2.30797 1.37931C2.39349 2.19379 3.34521 11.2338 3.49211 12.6303C3.60315 13.6862 4.48797 14.4828 5.55004 14.4828H16.2969C17.2659 14.4828 18.1169 13.7945 18.3204 12.8469L19.9769 5.11655C20.0645 4.70689 19.9638 4.28552 19.7004 3.96069C19.4369 3.63517 19.0459 3.44827 18.6273 3.44827H3.9128L3.61487 0.617931C3.57763 0.266207 3.28177 0 2.92866 0H0.859699C0.479009 0 0.170044 0.308965 0.170044 0.689655C0.170044 1.07034 0.479009 1.37931 0.859699 1.37931H2.30797ZM18.6273 4.82758L16.9714 12.5579C16.9031 12.8738 16.6197 13.1034 16.2962 13.1034H5.55004C5.19556 13.1034 4.90108 12.8379 4.86383 12.4862L4.05763 4.82758H18.6273Z" fill="#333333"/>
    </svg>
    <span>Sepetim</span>
`;
const searchIcon = `
    <svg class="a_search_icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.45313 17.3974C10.3304 17.3974 12.154 16.7711 13.6351 15.6175L19.2226 21.2051C19.64 21.6082 20.3051 21.5966 20.7083 21.1792C21.1015 20.772 21.1015 20.1265 20.7083 19.7194L15.1207 14.1319C17.9832 10.4471 17.3166 5.13951 13.6318 2.27703C9.94706 -0.585452 4.63951 0.0811214 1.77703 3.76591C-1.08545 7.45069 -0.418879 12.7583 3.26591 15.6208C4.74937 16.7732 6.57461 17.3984 8.45313 17.3974ZM3.96361 4.46038C6.44313 1.98081 10.4632 1.98076 12.9428 4.46029C15.4224 6.93981 15.4224 10.9599 12.9429 13.4395C10.4634 15.919 6.44327 15.9191 3.9637 13.4396C3.96375 13.4396 3.96365 13.4395 3.9637 13.4396C1.48418 10.9781 1.46948 6.97257 3.93093 4.49305C3.94181 4.48213 3.95269 4.47125 3.96361 4.46038Z" fill="#387FBA"/>
    </svg>
`;

//search button güncelleme
searchBtn.value = "";
searchBtn.parentElement.insertAdjacentHTML('afterbegin', searchIcon);

//eski tasarım silindi
memberMenu.remove();
cargoBtn.remove();

//sepet butonuna ikon ekleme
cartBtn.children[0].children[0].innerHTML = cartIcon;

//search Input arama butonu kaldırma
searchInput.setAttribute('type', "");

//yeni tasarım eklendi
headerContainer.insertAdjacentHTML('afterbegin', anatomi_html);

//style implement
document.querySelector('head').insertAdjacentHTML('beforeend', style);

//element tıklandığında popUp menü visible olması
//popUp menü seçildi
const popUp = document.querySelector('.a_login_sub_container');
//click ile visible olması
document.querySelector('.a_login').addEventListener('click', (e) => {
    if (popUp.classList.contains('active')) {
        popUp.classList.remove('active');
    } else {
        popUp.classList.add('active');
    }
});
//kapatma için
document.addEventListener('click', (e) => {
    if (popUp.classList.contains('active') && !e.target.classList.contains("a_login")) {
        popUp.classList.remove('active');
    }
});
=======
const style = `
<style>
    #oneCol{
        margin-top: 50px;
    }
    .geriSayimContainer{
        z-index: 99999;
        width: 100%;
        background: #EA9025;
        position: relative;
        padding: 5px 20px;
        right: 20px;
        gap: 15px;
        display: flex;
        color: white;
        align-items: center;
        justify-content: center;
    }
    #countdown {
        display: flex;
        gap: 10px;
        align-items: center;
    }
    #hours{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3px;
    }
    #minutes{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3px;
    }
    #seconds{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3px;
    }
    #message{
        padding-bottom: 0px !important;
        font-size: 14px;
        text-align: center;
        font-weight: 600;
    }
    .hours {
        font-size: 24px;
        font-weight: 600;
    }
    .hoursText {
        font-size: 10px;
    }
    .minutes {
        font-size: 24px;
        font-weight: 600;
    }
    .minutesText {
        font-size: 10px;
    }
    .seconds {
        font-size: 24px;
        font-weight: 600;
    }
    .secondsText {
        font-size: 10px;
    }
    .message{
        display: flex;
        align-items: center;
    }
.storyContainer_mobile{
margin-top: 10px;
}
</style>

`


const container = document.querySelector('#headerMain .row');
const kargoSayimHTML = `
<div class="geriSayimContainer">
    <div id="countdown">
        <div id="hours">
            <div class="hours"></div>
            <div class="hoursText">Saat</div>
        </div>
        <span class="ikiNoktaUstUste"> : </span>
        <div id="minutes">
            <div class="minutes"></div>
            <div class="minutesText">Dakika</div>
        </div>
        <span class="ikiNoktaUstUste"> : </span>
        <div id="seconds">
            <div class="seconds"></div>
            <div class="secondsText">Saniye</div>
        </div>
    </div>
    <div class="message">
        <p id="message"></p>
    </div>
</div>
`;

container.insertAdjacentHTML('beforebegin', kargoSayimHTML);

function startCountdown() {
    var currentDate = new Date();
    var startDate = new Date(currentDate);
    startDate.setHours(7, 0, 0); // Geri sayımın başladığı saat

    var endDate = new Date(currentDate);
    endDate.setHours(16, 0, 0); // Geri sayımın sonlandığı saat

    var hoursElem = document.querySelector(".hours");
    var minutesElem = document.querySelector(".minutes");
    var secondsElem = document.querySelector(".seconds");
    var messageElem = document.querySelector("#message");

    var hoursText = document.querySelector(".hoursText");
    var minutesText = document.querySelector(".minutesText");
    var secondsText = document.querySelector(".secondsText");
    var ikiNota = document.querySelectorAll('.ikiNoktaUstUste')
    var timer = setInterval(function() {
        currentDate = new Date();

        if (currentDate >= startDate && currentDate < endDate) {
            var remainingTime = endDate - currentDate;
            var hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
            var minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
            var seconds = Math.floor((remainingTime / 1000) % 60);

            hoursElem.textContent = hours.toString().padStart(2, "0");
            minutesElem.textContent = minutes.toString().padStart(2, "0");
            secondsElem.textContent = seconds.toString().padStart(2, "0");
            messageElem.textContent =" İçerisinde Sipariş Verirsen Bugün Kargoda!";
        } else if (currentDate >= endDate && currentDate < startDate) {
            var remainingTime = startDate - currentDate;
            var hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
            var minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
            var seconds = Math.floor((remainingTime / 1000) % 60);

            hoursElem.textContent = hours.toString().padStart(2, "0");
            minutesElem.textContent = minutes.toString().padStart(2, "0");
            secondsElem.textContent = seconds.toString().padStart(2, "0");
            messageElem.textContent = " İçerisinde Sipariş VerirsenBugün Kargoda !";
        } else {
            clearInterval(timer);
            document.querySelector('.geriSayimContainer').remove()
        }
    });
}

startCountdown();


const head = document.querySelector('head');
head.insertAdjacentHTML("beforeend", style);
>>>>>>> 498cbb0 (anatomi-task)
