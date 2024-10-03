// Variables
const memberMenu = document.querySelector(`.Uye`).parentElement,
    headerContainer = document.querySelector(`.inner .UserSection`),
    cartBtn = document.querySelector(`.col.col-4.col-md-4.col-sm-6.col-xs-12`),
    blogBtn = document.querySelector(`.blogarea`),
    searchInput = document.querySelector(`#live-search`);

// User Login Status
const status = document.querySelector(`.Uye`).innerText == "Hesabım";

// Cart Button Class
cartBtn.className = "a_sepet forDesktop"

// Header Menu Class
headerContainer.className = "anatomi_container forDesktop"

// PopUp Menu
const userLogin = `
    <div class = "a_login_sub_container">
        <div class = "arrow-up"></div>
        <a class="loginBtn popupWin Uye" data-url="/srv/service/customer/login-form" href="#">
            Giriş Yap
        </a>
        <a href="https://www.istanbulticaret.com/index.php?B=YeniUye" class ="registerBtn">
            Üye Ol
        </a>
    </div>`;

// Style
const style = `
<style>

.anatomi_container {
    display: flex;
    gap: 20px;
    height: 44px;
    position: relative;
    justify-content: center;
    align-items: center;
    margin-left: 5%;
    margin-right: 0;
}

.a_login{
    display: flex;
    border: 1px solid #F5F5F5;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    padding: 4px 20px 4px 20px;
    height: 100%;
}

.cartTop strong, .a_blog, .a_login{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.a_blogContainer{
    display: flex;
    border: 1px solid #F5F5F5;
    border-radius: 8px;
    gap: 15px;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    height: 100%;
    padding: 4px 35px 4px 35px;
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
    background-color: #FCB711;
    color: white;
}

a.registerBtn {
    background-color: #D4D4D4;
}

.a_sepet{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #F5F5F5;
    border-radius: 5px;
    height: 100%;
    width: 100%;
    padding: 4px 20px 4px 20px;
}

.cartTop strong, .a_login{
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

.drop-down.hover .drop-down-title + * {
    min-width: 80% !important;
    left: 7% !important;
}

#FormAra{
    border: solid 1px #FCB711 !important;
    padding: 0 0 0 10px !important;
}

#search-btn{
    height: 100% !important;
    right: 0 !important;
}

@media screen and (max-width: 540px) {
    .a_login{
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: center !important;
        gap: 10px !important;
        border-radius: 5px !important;
        width: 50% !important;
        height: 0 !important;
        border: 0 !important;
        padding: 0 !important;
    }
    .asagi_ok{
        display: none !important;
    }
    
    .anatomi_container {
        display: flex !important;
        gap: 20px !important;
        height: 44px !important;
        position: relative !important;
        margin-left: 5% !important;
        margin-right: 0 !important;
        width: 25% !important;
        align-items: center !important;
        flex-direction: row-reverse !important;
    }
    
    .a_sepet {
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: center !important;
        gap: 10px !important;
        background: #FFFFFF;
        border-radius: 5px !important;
        height: 100% !important;
        width: 50% !important;
        padding: 0:
    }
    
    .a_blogContainer{
        display: none !important;
    }
    .asagi_ok{
        display: none;
    }
    
}

#FormAra{
    border: none !important;
    margin-top: 10px;
    padding: 0 !important;
}


#live-search{
    background-color: #F3F3F3 !important;    
}

</style>
`

const anatomi_html = `
    <a class="a_login" ${status ? "href='https://www.istanbulticaret.com/uye-girisi-sayfasi'" : ""}>
            <svg  class="profile_icon" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.8085 3.69151C18.5892 1.47223 15.6385 0.25 12.5 0.25C9.36146 0.25 6.41079 1.47223 4.19146 3.69151C1.97223 5.91079 0.75 8.86146 0.75 12C0.75 15.1385 1.97223 18.0892 4.19146 20.3085C6.41079 22.5278 9.36146 23.75 12.5 23.75C15.6385 23.75 18.5892 22.5278 20.8085 20.3085C23.0278 18.0892 24.25 15.1385 24.25 12C24.25 8.86146 23.0278 5.91079 20.8085 3.69151ZM12.5 22.373C9.43082 22.373 6.6692 21.0327 4.76832 18.9072C5.94676 15.783 8.96343 13.5605 12.5 13.5605C10.2186 13.5605 8.36914 11.7111 8.36914 9.42969C8.36914 7.14826 10.2186 5.29883 12.5 5.29883C14.7814 5.29883 16.6309 7.14826 16.6309 9.42969C16.6309 11.7111 14.7814 13.5605 12.5 13.5605C16.0366 13.5605 19.0532 15.783 20.2317 18.9072C18.3308 21.0327 15.5692 22.373 12.5 22.373Z" fill="#333333"/>
            </svg>
            <span>${status ? "Hesabım" : "Giriş Yap" }</span>
            <svg class="asagi_ok" width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0114 1.92872L6.82614 7.25487C6.50794 7.58171 5.99206 7.58171 5.67386 7.25487L0.488644 1.92872C0.170452 1.60188 0.170452 1.07197 0.488644 0.745129C0.806835 0.41829 1.32272 0.41829 1.64091 0.745129L6.25 5.47949L10.8591 0.745129C11.1773 0.41829 11.6932 0.41829 12.0114 0.745129C12.3295 1.07197 12.3295 1.60188 12.0114 1.92872Z" fill="#333333"/>
            </svg>
        </a>
    <div class="a_blogContainer">
        <a class="a_blog" href="/blog">
        
            <span>Blog</span>
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.42872 0.238644L6.75487 5.42387C7.08171 5.74206 7.08171 6.25795 6.75487 6.57614L1.42872 11.7614C1.10188 12.0795 0.571966 12.0795 0.245127 11.7614C-0.0817117 11.4432 -0.0817116 10.9273 0.245127 10.6091L4.97949 6L0.245129 1.39091C-0.0817099 1.07272 -0.0817098 0.556834 0.245129 0.238643C0.571969 -0.0795477 1.10188 -0.0795476 1.42872 0.238644Z" fill="#333333"/>
            </svg>
        </a>
            
    </div>
    ${status ? "" : userLogin}
`;
// Icons
const cartIcon = `
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.76953 19.2283C10.7889 19.2283 11.6152 18.4019 11.6152 17.3826C11.6152 16.3632 10.7889 15.5369 9.76953 15.5369C8.75018 15.5369 7.92383 16.3632 7.92383 17.3826C7.92383 18.4019 8.75018 19.2283 9.76953 19.2283Z" fill="#333333"/>
    <path d="M15.9629 19.2283C16.9822 19.2283 17.8086 18.4019 17.8086 17.3826C17.8086 16.3632 16.9822 15.5369 15.9629 15.5369C14.9435 15.5369 14.1172 16.3632 14.1172 17.3826C14.1172 18.4019 14.9435 19.2283 15.9629 19.2283Z" fill="#333333"/>
    <path d="M1.11523 2.00199H3.68086L6.65111 12.3999L6.41815 12.8658C5.80472 14.0914 6.6952 15.5371 8.06918 15.5371H18.4237C18.7638 15.5371 19.0389 15.2619 19.0389 14.9218C19.0389 14.5818 18.7638 14.3066 18.4237 14.3066H8.06918C7.61231 14.3066 7.31372 13.8255 7.51883 13.4162L7.68888 13.0761H18.4237C18.6983 13.0761 18.9398 12.8941 19.0155 12.6297L21.4764 4.0165C21.5293 3.83086 21.4921 3.63136 21.3761 3.47698C21.2596 3.32317 21.0775 3.23245 20.8847 3.23245H5.31204L4.73648 1.2179C4.66076 0.953551 4.41926 0.771484 4.14467 0.771484H1.11523C0.775172 0.771484 0.5 1.04666 0.5 1.38671C0.5 1.72677 0.775172 2.00199 1.11523 2.00199V2.00199Z" fill="#333333"/>
    </svg>
    <span>Sepetim</span>
`;

const searchIcon = `
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.45313 17.3974C10.3304 17.3974 12.154 16.7711 13.6351 15.6175L19.2226 21.2051C19.64 21.6082 20.3051 21.5966 20.7083 21.1792C21.1015 20.772 21.1015 20.1265 20.7083 19.7194L15.1207 14.1319C17.9832 10.4471 17.3166 5.13951 13.6318 2.27703C9.94706 -0.585452 4.63951 0.0811214 1.77703 3.76591C-1.08545 7.45069 -0.418879 12.7583 3.26591 15.6208C4.74937 16.7732 6.57461 17.3984 8.45313 17.3974ZM3.96361 4.46038C6.44313 1.98081 10.4632 1.98076 12.9428 4.46029C15.4224 6.93981 15.4224 10.9599 12.9429 13.4395C10.4634 15.919 6.44327 15.9191 3.9637 13.4396C3.96365 13.4395 3.96365 13.4395 3.96361 13.4395C1.48409 10.978 1.46948 6.97257 3.93093 4.49305C3.94181 4.48213 3.95269 4.47125 3.96361 4.46038Z" fill="#BCBCBC"/>
    </svg>

`;

searchInput.insertAdjacentHTML("beforebegin",searchIcon)

// Old Designs Remove
memberMenu.remove();
blogBtn.remove();

//sepet butonuna ikon ekleme
cartBtn.innerHTML = cartIcon;


//yeni tasarım eklendi
headerContainer.insertAdjacentHTML('afterbegin', anatomi_html);

const blogContainer = document.querySelector(`.a_blogContainer`)
const sepetContainer = document.querySelector(`.a_sepet`)
//sepetContainer.remove();
sepetContainer.remove();
blogContainer.insertAdjacentElement("afterend",sepetContainer)

//style implement
document.querySelector('head').insertAdjacentHTML('beforeend', style);

//element tıklandığında popUp menü visible olması
//popUp menü seçildi
const popUp = document.querySelector('.a_login_sub_container');
//click ile visible olması
document.querySelector('.a_login').addEventListener('click', (e) => {
    if(popUp.classList.contains('active')){
        popUp.classList.remove('active');
    }else{
        popUp.classList.add('active');
    }
});
//kapatma için
document.addEventListener('click', (e) => {
    if(popUp.classList.contains('active') && !e.target.classList.contains("a_login")){
        popUp.classList.remove('active');
    }
});


const search_container = document.querySelectorAll('.col.forMobile');
search_container[3].remove();
const form_container = document.querySelector('#mobileSearch')
const a_contentWrapper = document.querySelector('.contentWrapper.col.col-12');
const header = document.querySelector('#headerMain');
header.insertAdjacentElement('beforeend', form_container);

const a_display = document.querySelectorAll('.d-none')
a_display[31].style.display = 'block';

const left_search = document.querySelectorAll('#mobileSearch svg');
left_search[0].remove();

const ara_btn = document.querySelectorAll('.fr.ease');
