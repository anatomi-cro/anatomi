const a_style = `<style>
.a_anatomi_overlay{
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999999;
}

.a_container_form {
    position: fixed !important;
    bottom: 0% !important;
    left: 0 !important;
    width: 100% !important;
    background: #ffffff !important;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4) !important;
    z-index: 999999999999 !important;
    padding: 0 !important;

}

.tab_login{
    display: block !important;
}

.tab_register{
    display: none !important;
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
    border: 1px solid #C4C4C4 !important;
    background-color: #F2F2F2;
    color: #1D1D1D;
    border-bottom: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    cursor: pointer !important;
    box-shadow: 0px -5px 10px 0px rgb(145 145 145 / 15%);
    border-bottom: none !important;


   
}
.tabs_toggle.active{
    background-color: white;
    color: black;
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
    box-shadow: 0px 14px 15px 0px rgb(0 0 0 / 25%);
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
    padding: 10px 20px !important;    
}
.a_tabs_content.active{
    display: block;
    
}

.col.col-12.withHolder.loadedPlace{

}

.a_input_span{
    background-color: #EEEEEE !important;
    border: 0.5px solid #DDDDDD !important;
    border-radius: 5px !important;
}
a_input{
    border-radius: 5px !important;
}

#member-login-btn{
    background-color: #FFC10C !important;
    border: none !important;
    color: white !important;
    text-align: center;
}
#order-login-btn{
    background-color: #FFC10C !important;
    border: none !important;
    color: white !important;
    text-align: center;
}
.lightBg{
    background-color: white !important;
}
.darkBg{
    background-color: white !important;
    color: black !important;
}

.uyeol_btn{
    border: 1px solid #DDDDDD !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    font-weight: 700 !important;
}

.col.col-12.p-left.p-right{
    display: flex !important;
    flex-direction: column !important;
} 

.box.col-6.form-control.xlarge{
    width: 100% !important;
}

@media only screen and (min-width: 500px) {
    .a_container_form  {
        background: none !important;
        border: none !important;
        box-shadow: none !important;
        
       
    }
}
</style>`


const a_html = `
<div class="tabs">
    <div class="tabs_in">
    <div class="tabs_head">
        <span id="trafik" class="tabs_toggle active">Üye Girişi</span>
        <span id="kasko" class="tabs_toggle">Üye Ol</span>
    </div>
    <div class="tabs_body">
    </div>
    </div>
</div
`




const a_overlay = document.createElement('div');
a_overlay.classList.add('a_anatomi_overlay');
document.body.appendChild(a_overlay);

const giris_uye_form = document.querySelector('#login-form').parentElement.parentElement.parentElement
giris_uye_form.classList.add('a_container_form');

const a_container_form = document.querySelector('.a_container_form');

a_container_form.insertAdjacentHTML('afterbegin', a_html);



// tabs bodynşn içine formları atıyoruz
const tabs_body = document.querySelector('.tabs_body');

const container_login= document.querySelectorAll('.col.col-12.col-sm-12.popupInnerBlock');
const a_container_login = container_login[0]
a_container_login.classList.add("a_tabs_content","active");

const a_container_register = container_login[1]
a_container_register.classList.add("a_tabs_content");

let login_status = false;
let register_status = false;

if (a_container_login !==null) {
    login_status = true;
    tabs_body.appendChild(a_container_login);
    // container_traffic.parentNode.replaceChild(tabs_body,container_traffic);
}
   
if (a_container_register !==null) {
    register_status = true;
    tabs_body.appendChild(a_container_register);
    // container_casco.parentNode.replaceChild(tabs_body, container_casco);

}

const a_title = document.querySelectorAll('.row.mb.lightBg.member')
a_title[0].remove();
a_title[1].remove();

// başlıklara tıklama 

let tabs = document.querySelectorAll('.tabs_toggle'),
    contents = document.querySelectorAll('.a_tabs_content');

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



const tab_form = document.querySelectorAll('.col-6.col-sm-12.fl');
const a_tab_login = tab_form[0];
const a_tab_register = tab_form[1];

a_tab_login.classList.add('tab_login');
a_tab_register.classList.add('tab_register');

let activeTab = 1; // Varsayılan olarak Tab 1 etkin

a_tab_login.addEventListener('click', function(){
  if (activeTab !== 1) {
    a_tab_login.style.display = "block";
    a_tab_register.style.display = "none";
    activeTab = 1;
  }
});

a_tab_register.addEventListener('click', function(){
  if (activeTab !== 2) {
    a_tab_register.style.display = "block";
    a_tab_login.style.display = "none";
    activeTab = 2;
  }
});


document.addEventListener('click', function(event) {
    var container = document.querySelector('.a_container_form');
    if (!container.contains(event.target) && !event.target.classList.contains('.a_container_form')) {
      container.style.display = 'none';
      a_overlay.style.display = 'none';
      a_overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
  });


const a_input_span = document.querySelectorAll('.col.ease.placeholder')
a_input_span.forEach(item =>{
    item.classList.add('a_input_span')

})

const a_input = document.querySelectorAll('.col.col-12.withHolder.loadedPlace')
a_input.forEach(item =>{
    item.classList.add('a_input')
})


//giris yap sifremi unuttum yer değişikliiği
const a_password = document.querySelector('#member-forgot-password').parentElement.parentElement
const a_password_input = document.querySelector('.box.col-12.form-control.xlarge.tooltipWrapper')
a_password_input.insertAdjacentElement('afterend',a_password )


// üye ol telefon numarası yer değişikliği
const a_phone = document.querySelectorAll('.box.col-12.form-control.xlarge')[4]
const a_eposta = document.querySelectorAll('.box.col-12.form-control.xlarge')[2]

a_eposta.insertAdjacentElement('beforebegin',a_phone )

// üye ol üyeolmadan yer değişikliği

const a_uye_olmadan = document.querySelector('.fr.form-link.info.popupWin').parentElement.parentElement
a_uye_olmadan.classList.add('uyeol_btn')


const a_giris_yapbtn_text = document.querySelectorAll('.btn.col-12.btn-default.btn-big.btn-upper.btn-radius.a-center')[1]
a_giris_yapbtn_text.textContent = 'Üye Ol'
const a_giris_yapbtn = document.querySelectorAll('.btn.col-12.btn-default.btn-big.btn-upper.btn-radius.a-center')[1].parentElement.parentElement;

a_giris_yapbtn.insertAdjacentElement('afterend',a_uye_olmadan )

//giris yap da üye ol yazısı kaldırılması

const uye_ol_btn = document.querySelector('#member-register').parentElement.parentElement
uye_ol_btn.remove();



const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style);


