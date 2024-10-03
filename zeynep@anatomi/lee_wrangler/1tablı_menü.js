
const a_style = `
<style>
// ----------------- TABS start ----------------- //

.tabs{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.tabs_in{
    width: 370px;

}

.tabs_head{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    gap: 10px;
}

.tabs_toggle{
    width: 50%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #a5a5a5 !important;
    background-color: #F2F2F2;
    color: #1D1D1D;
    border-bottom: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    cursor: pointer !important;
    box-shadow: 0px -5px 10px 0px rgb(145 145 145 / 15%);

}
.tabs_toggle.active{
    background-color: #3074FF;
    color: white;
    box-shadow: 0px -5px 10px 0px rgb(145 145 145 / 15%);
    
}

.tabs_body{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 7px 10px 0px rgb(145 145 145 / 15%);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.a_tabs_content{
    width: 100%;
    height: 100%;
    display: none;
    border-top: none;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    background-color: white !important;
    
}
.a_tabs_content.active{
    display: block;
    
}





// ----------------- TABS end ----------------- //

#register-form {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
}

.form-group {
    position: relative;
    margin-bottom: 30px!important;
}

#register-page .form-group {
    text-align: left;
    position: relative;
}

.date-group .input-group{
    display: flex !important;
    gap: 30px !important;
}

.dateHelper {
    width: 100% !important;
    height: 40px !important;
    background-color: #EEEEEE !important;

    border-radius: 4px !important;
    border: 1px solid #DDDDDD !important;

}

.position-absolute{
    display:none;
}
.cl-kvkk-warning {
    font-size: 14px;
}

.cl-kvkk-warning span {
    font-weight: 600;
    cursor: pointer;
}

fieldset {
    margin: 0;
    display: flex;
    border-radius: 8px;
    background: #eee;
    padding: 5px;
    border: 1px solid #dddd;
}

.gender .input-group {
    display: flex !important;
    width: 100% !important;
    justify-content: center !important;
}

.for-checkbox-tools{
    display: flex !important;
    
}

.checkbox-tools label {
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-radius: 8px;
    margin: 0;
    font-size: 14px;
    cursor: pointer;
    width: 100%;
}

#register-form .row {
    display: flex;
    position: relative;
    padding: 0;
    margin: 0;
}

.custom-checkbox {
    margin: 0 0 10px;
    position: relative;
    display: flex !important;
}

.custom-checkbox .custom-control-description {
    margin-left: 12px;
    font-size: 12px;
    line-height: 20px;
    color: #707070;
    display: inline-block;
}

.label.custom-checkbox .custom-control-label:before {
    display: block;
    pointer-events: none;
    content: "";
    border-radius: 0;
    width: 20px;
    height: 20px;
    background-color: #fff!important;
    border: 1px solid #adb5bd;
    -webkit-box-shadow: none;
    box-shadow: none;
    box-sizing: border-box;
}

.custom-checkbox .custom-control-description {
    margin-left: 12px;
    font-size: 12px;
    line-height: 20px;
    color: #707070;
    display: inline-block;
}

.custom-checkbox .custom-control-description a {
    color: #707070;
    font-weight: 700;
    cursor: pointer;
}

#register-form .cl-input-mask-toggle-button {
    position: absolute;
    top: 32px !important;
    right: 0;
    height: 50px;
    width: 50px;
    cursor: pointer;
    background-image: url(https://f-sch-t.mncdn.com/webfiles/show-pass.svg);
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
}

#register-button {
    background-color: #000;
    color: #fff;
    border-radius: 8px;
    line-height: 48px;
    -webkit-appearance: none;
    font-size: 16px;
    border: 1px solid #000;
    cursor: pointer;
    transition: background-color .3s;
    width: 100%;
    max-width: 600px;
    margin-top: 20px;
    text-align: center;
    text-decoration: none;
}
.loginNow{
    display:none;
}


.card-body h3{
    display:none;
}
</style>
`



const a_html = `

<div class="tabs">
    <div class="tabs_in">
    <div class="tabs_head">
        <span id="girisyap" class="tabs_toggle active">Giriş Yap</span>
        <span id="uyeol" class="tabs_toggle">Üye Ol</span>
    </div>
    <div class="tabs_body">
    </div>
    </div>
</div
`
//formlar headerın altına konumlandırıldı
const header = document.querySelector('header');
header.insertAdjacentHTML('afterend', a_html);


// login ve register formlarının seçilip yeni class verilmesi
const tabs_body = document.querySelector('.tabs_body');
const login_form = document.querySelector('#login-form');
login_form.classList.add("a_tabs_content","active");

tabs_body.insertAdjacentElement("afterbegin",login_form);

const registerForm = document.querySelector('#register-form');


tabs_body.insertAdjacentHTML("afterbegin",registerForm);



//fetch api ile register sayfasındaki formu login sayfasına geçiriyoruz

fetch('/register').then(function (response) {
    // The API call was successful!
    return response.text();
}).then(function (html) {

    // Convert the HTML string into a document object
    var parser = new DOMParser();
    var doc = parser.parseFromString(html, 'text/html');
    return doc;
}).then(function (doc){
    return doc.querySelector('#register-form')
    // document.querySelector('#register-form').classList.add("a_tabs_content");
}).then(function (form){
    tabs_body.appendChild(form);
    const register_form = document.querySelector('#register-form');
    register_form.classList.add("a_tabs_content");
}).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
});


// formların aktif olup olmama durumları

let tabs = document.querySelectorAll('.tabs_toggle');
 let contents = document.querySelectorAll('.a_tabs_content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        contents.forEach((content)=> {
            content.classList.remove('active');

        });
        tabs.forEach((tab)=> {
            tab.classList.remove('active');
            
        });
        contents[index].classList.add('active');
        tabs[index].classList.add('active');
    });

});

// document.querySelector("#girisyap").addEventListener("click", function(){
    
//     document.querySelector('#uyeol').style.borderBottom = "1px solid #C4C4C4";
//     document.querySelector("#girisyap").style.borderBottom = "0px solid #ffff";
    
// });

// document.querySelector("#uyeol").addEventListener("click", function(){
    
//     document.querySelector('#girisyap').style.borderBottom = "1px solid #C4C4C4";
//     document.querySelector("#uyeol").style.borderBottom = "0px solid #ffff";

// });


const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style);


