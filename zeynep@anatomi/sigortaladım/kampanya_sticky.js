const a_style = `
<style>

.anatomi_container{
    display: flex !important;
    justify-content: center !important;
    position: fixed !important;
    bottom: 0 !important;
    box-shadow: 0px 1px 40px -9px rgb(0 0 0 / 20%) !important;
    z-index: 999 !important;
    height: auto !important;
    width: 100% !important;
    background-color: white !important;
    gap: 10px !important;
    padding: 10px !important;
    align-items: center;
}

.a_buton{
    background-color: #3074FF !important;
    height: 40px !important; 
    border-radius: 5px !important;
    width: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    color:white !important;
    padding: 0 !important;
    padding: 0 6px !important;
    font-size: 14px !important;
}

.a_buton.kasko{
    width: 100% !important;
    background-color: #3074FF !important;
    border:none !important;
    font-size:16px !important;
     
}
    .a_whatsapp{
    bottom: 50% !important;
}
</style>
`



const btn1 = document.querySelectorAll('.col-lg-6.col-md-6 a')[0];
const btn2 = document.querySelectorAll('.col-lg-6.col-md-6 a')[1];

if (btn1) {
  btn1.classList.add('a_buton');
}

if (btn2) {
  btn2.classList.add('a_buton');
}


const main = document.querySelector('main');

btn1.remove();
if (btn2 !== undefined) {
    btn2.remove();
    
}

let btn1_status = false;
let btn2_status = false;

if(btn1){
    btn1_status = true;
}

if(btn2 && !btn2.hasAttribute("trafik-sigortasi")){
    btn2_status = true;

}

const html = `
    <div class="anatomi_container">
   
    </div>
`;

main.insertAdjacentHTML('beforeend', html);

const anatomi_container = document.querySelector('.anatomi_container');
anatomi_container.appendChild(btn1);

if(btn1 !== undefined && btn2 !== undefined){
    anatomi_container.appendChild(btn1);
    anatomi_container.appendChild(btn2);

}else if(btn1 !== undefined && btn2 == undefined){
    anatomi_container.appendChild(btn1);
    btn1.classList.add('kasko');

}

const a_wp = document.querySelector('#wa-button');
a_wp.classList.add('a_whatsapp');


const head = document.querySelector('head');
head.insertAdjacentHTML(`afterbegin`, a_style);

document.querySelectorAll('.a_buton').forEach(item => {
    item.setAttribute('style', "");
})

    
