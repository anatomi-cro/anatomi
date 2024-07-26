const anatomi_navbar_html = `
<div class="anatomi_mobile_navbar_container">
<div class="anatomi_mobile_navbar_content">
    <a href="/" class="anatomi_mobile_navbar_content_item anatomi_mobile_navbar_mainPage ">
        <img src="https://anatomi.s3.eu-north-1.amazonaws.com/home-2.png" alt="">
        <h4>Anasayfa</h4>
    </a>
    <a class="anatomi_mobile_navbar_content_item anatomi_mobile_navbar_search">
        <img src="https://anatomi.s3.eu-north-1.amazonaws.com/search.png" alt="">
        <h4>Arama</h4>
    </a>
    <a href="/sepet" class="anatomi_mobile_navbar_content_item anatomi_mobile_navbar_cart">
        <div class="cart_image">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/cart.png" alt="">
        </div>
        <h4>Sepetim</h4>
    </a>
    <div class="anatomi_mobile_navbar_cart_bg">

    </div>
    <a class="anatomi_mobile_navbar_content_item anatomi_mobile_navbar_menu">
        <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+1.png" alt="">
        <h4>Menü</h4>
    </a>
    <a href="/uye-girisi-sayfasi" class="anatomi_mobile_navbar_content_item anatomi_mobile_navbar_profile">
        <img src="https://anatomi.s3.eu-north-1.amazonaws.com/user.png" alt="">
        <h4>Hesabım</h4>
    </a>
</div>
</div>
`;
const anatomi_navbar_style = `
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

.anatomi_mobile_navbar_container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: fit-content;
    background-color: #fff;
    z-index: 9999999;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


.anatomi_mobile_navbar_container a {
    text-decoration: none;

}

.anatomi_mobile_navbar_content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
    width: 100%;
    height: 100%;
}

.anatomi_mobile_navbar_content_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-align: center;
    width: 80px;
    height: 55ox;
    padding: 5px;
}

.anatomi_mobile_navbar_content_item img {
    width: 24px;
    height: 24px;
    object-fit: contain;
}

.anatomi_mobile_navbar_content_item h4 {
    position: relative;
    font-size: 12px;
    font-weight: 600;
    color: #000;
    letter-spacing: 1px;
    z-index: 1;
}

.anatomi_mobile_navbar_cart {
    margin: 0px 10px;
}

.anatomi_mobile_navbar_cart h4 {
    position: absolute;
    bottom: 19%;
}

.cart_image {
    position: absolute;
    top: -40%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #197EBA;
}

.anatomi_mobile_navbar_cart_bg {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #fff;
    z-index: -1;
}

</style>
`;

if(window.innerWidth < 900) {
    const body = document.querySelector('body');
const head = document.querySelector('head');

body.insertAdjacentHTML('afterbegin', anatomi_navbar_html);
head.insertAdjacentHTML('beforeend', anatomi_navbar_style);

const mainPage = document.querySelector('.anatomi_mobile_navbar_mainPage');
const search = document.querySelector('.anatomi_mobile_navbar_search');
const cart = document.querySelector('.anatomi_mobile_navbar_cart');
const menu = document.querySelector('.anatomi_mobile_navbar_menu');
const profile = document.querySelector('.anatomi_mobile_navbar_profile');
const menu2 = document.getElementById('mobileMenu');

menu.addEventListener('click', () => {
    const mainWrapper = document.getElementById('mainWrapper');
    const mobileMenu = document.getElementById('mobileMenu');

    mainWrapper.classList.add('menuShow');
    mainWrapper.classList.add('animate');
    mobileMenu.classList.add('animate');
});

search.addEventListener('click', () => {
    const mainWrapper = document.getElementById('mainWrapper');
    const mobileMenu = document.getElementById('mobileMenu');
    const liveSearch = document.getElementById('live-search');


    mainWrapper.classList.add('menuShow');
    mainWrapper.classList.add('animate');
    mobileMenu.classList.add('animate');
    liveSearch.focus();
});
}

