const a_style = `
<style>
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

.a_tabs_content .form{
    gap:12px;
    padding: 30px 50px !important;
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


const kampanyalar = document.querySelector('.campaigns-and-form');

kampanyalar.insertAdjacentHTML('afterend', a_html);


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


document.querySelector("#trafik").addEventListener("click", function(){
    
    document.querySelector('#kasko').style.borderBottom = "1px solid #C4C4C4";
    document.querySelector("#trafik").style.borderBottom = "0px solid #ffff";
    
});

document.querySelector("#kasko").addEventListener("click", function(){
    
    document.querySelector('#trafik').style.borderBottom = "1px solid #C4C4C4";
    document.querySelector("#kasko").style.borderBottom = "0px solid #ffff";

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



const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend', a_style); 

