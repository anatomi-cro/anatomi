const a_style = `
<style>
#register-form{
    padding: 0 20px;
}
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
    background-color: white;
    color: black;
    box-shadow: 0px -5px 10px 0px rgb(145 145 145 / 15%);
    border-bottom: none !important;
    
}

.tabs_body{
    width: 100%;
    height: 100%;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    border-radius: 10px;
    box-shadow: 0px 7px 10px 0px rgb(145 145 145 / 15%);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border: 1px #C4C4C4 solid;
    border-top: none;
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
.gender .input-group {
    display: flex !important;
    width: 100% !important;
    justify-content: center !important;
}
fieldset {
    margin: 0;
    display: flex;
    border-radius: 8px;
    background: #eee;
    padding: 5px;
    border: 1px solid #dddd;
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

</style>
`;

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
const login_page = document.querySelector('#login-page');
login_page.classList.add("a_tabs_content","active");
tabs_body.insertAdjacentElement("afterbegin",login_page);






// formların aktif olup olmama durumları

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
    const parent = form.parentNode.parentNode.parentNode;
    console.log(parent)
    tabs_body.appendChild(parent);
    // const register_page = document.querySelector('#register-form');
    parent.classList.add("a_tabs_content");

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


}).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
});


const a_text = document.querySelectorAll('.card-body h2');
a_text.forEach((text) => {
    text.remove();
})
const a_text2 = document.querySelectorAll('.card-body h3')
a_text2.forEach((text) => {
    text.remove();
})


const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style);