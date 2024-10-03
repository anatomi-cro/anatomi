const a_style = `
<style>


.a_anatomi_overlay{
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999999;
}

.a_form_container{
    position: fixed !important;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff !important;
    z-index: 99999 !important;
    border-radius: 15px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4) !important;
    z-index: 999999999999 !important;
    padding: 0 !important;


}


.tabs_head{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
}
.tabs_toggle{
    width: 50%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
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

.a_tabs_content .form {
    gap: 12px;
    padding: 35px 50px 62px 50px!important;
}

.a_tabs_content.form.textbox.input{
   background-color: #EEEEEE;
}

.textbox.float-label input{
    background-color: #EEEEEE;
}

.textbox.float-label label{
    background-color: #EEEEEE;
}

.tabs_head span{
    font-size:16px;
}

@media screen and (max-width: 380px) {
    .tabs_in{
        width: 325px;
    
    }

}

.a_icon_close{
    position: absolute;
    top: -15px;
    right: -10px;
    z-index: 999999999;
    cursor: pointer !important;
}

.a_form_container .btn-solid {
    width: 100% !important;
    position: absolute !important;
    bottom: -1px !important;
    left: 0 !important;
}

.pre-form .form .btn-solid{
    padding: 13px !important;
}

.anatomi_create_div{
    padding: 20px !important;
}

@media (min-width: 379px) and (max-width: 500px) {
    .a_form_container {
      width: 350px;
    }
  }

}

</style>
`;


    const a_html = `
<div class="tabs">
    <div class="tabs_in">
    <div class="tabs_head">
        <span id="trafik" class="tabs_toggle active">Trafik Sigortası</span>
        <span id="kasko" class="tabs_toggle">Kasko Sigortası</span>
    </div>
    <div class="tabs_body">
    </div>
    </div>
</div
`


const blog_container = document.querySelector('.blog.blog-detail');

blog_container.insertAdjacentHTML('afterend', a_html);


    const tabs_body = document.querySelector('.tabs_body');

    const container_traffic = document.querySelector('.pre-form.traffic');
    container_traffic.classList.add("a_tabs_content","active");
    const container_casco = document.querySelector('.pre-form.casco');
    container_casco.classList.add("a_tabs_content");
 

let traffic_status = false;
let casco_status = false;

if (container_traffic !==null) {
    traffic_status = true;
    tabs_body.appendChild(container_traffic);
    // container_traffic.parentNode.replaceChild(tabs_body,container_traffic);
}
   
if (container_casco !==null) {
    casco_status = true;
    tabs_body.appendChild(container_casco);
    // container_casco.parentNode.replaceChild(tabs_body, container_casco);

}

const a_title = document.querySelectorAll('.title');
a_title[6].remove();
a_title[7].remove();



const a_petiketi= document.querySelectorAll('.form p');
a_petiketi[0].remove();
a_petiketi[1].remove();





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




const a_label = document.querySelectorAll('.textbox.float-label label');
a_label[0].remove();
a_label[1].remove();
a_label[2].remove();
a_label[3].remove();

const create_label = document.createElement('label');
create_label.setAttribute('for', 'identityNumber');
create_label.innerHTML = 'T.C. No ya da Vergi No';

const create_label2 = document.createElement('label');
create_label2.setAttribute('for', 'phone');
create_label2.innerHTML = 'Cep Telefonu';


document.querySelectorAll('.textbox.float-label')[0].insertAdjacentElement('beforebegin', create_label);


document.querySelectorAll('.textbox.float-label')[1].insertAdjacentElement('beforebegin', create_label2);


const create_label3 = document.createElement('label');
create_label3.setAttribute('for', 'identityNumber');
create_label3.innerHTML = 'T.C. No ya da Vergi No';

const create_label4 = document.createElement('label');
create_label4.setAttribute('for', 'phone');
create_label4.innerHTML = 'Cep Telefonu';


document.querySelectorAll('.textbox.float-label')[2].insertAdjacentElement('beforebegin', create_label3);

document.querySelectorAll('.textbox.float-label')[3].insertAdjacentElement('beforebegin', create_label4);


// Formu üste taşımak

const a_overlay = document.createElement('div');
a_overlay.classList.add('a_anatomi_overlay');
document.body.appendChild(a_overlay);

const blog_form = document.querySelector('.tabs')
blog_form.classList.add('a_form_container');


// formu kapatma

const a_html_close = `
<div class="a_icon_close">
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14" cy="14" r="14" fill="#E13622"/>
<path d="M11.6459 9L14.5 12.6914L17.4001 9H20.9263L16.6636 14L21 19H17.4922L14.5 15.3997L11.5354 19H8L12.3088 14L8.11048 9H11.6459Z" fill="#F4F4F4"/>
</svg>

</div>

`

blog_form.insertAdjacentHTML('afterbegin', a_html_close)


const a_icon_close = document.querySelector('.a_icon_close');
a_icon_close.addEventListener('click', () => {

    blog_form.style.display = 'none';
    a_overlay.style.display = 'none';

})

const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style); 






