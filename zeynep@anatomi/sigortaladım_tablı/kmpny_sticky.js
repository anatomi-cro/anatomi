const a_style = `
<style>
.anatomi_container{
    display: flex !important;
    justify-content: center !important;
    position: fixed !important;
    bottom: 0 !important;
    box-shadow: 0px 1px 40px -9px rgb(0 0 0 / 20%) !important;
    z-index: 999 !important;
    height: 80px !important;
    width: 100% !important;
    background-color: white !important;
    gap: 10px !important;
    padding: 20px !important;
    
 
}
.a_buton{
    background-color: #eaa200 !important;
    height: 40px !important;
    border-radius: 5px !important;
    width: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    color:white !important;
    padding: 0 !important;
    padding: 0 6px !important;
    font-size: 10px !important;
   

}

.a_whatsapp{
    bottom: 50% !important;
}

.a_buton.kasko{
    background-color: #3074FF !important;
    border:none !important;
    
    
}
</style>
`

const btn1 = document.querySelectorAll('.main-content a')[0];
btn1.classList.add('a_buton');
const btn2 = document.querySelectorAll('.main-content a')[1];
btn2.classList.add('a_buton');
const main = document.querySelector('main');

btn1.remove();
btn2.remove();

let btn1_status = false;
let btn2_status = false;

if(btn1){
    btn1_status = true;
}

if(btn2 && !btn2.classList.contains("collapse-btn")){
    btn2_status = true;

}

const html = `
    <div class="anatomi_container">
   
    </div>
`;

main.insertAdjacentHTML('beforeend', html);



const anatomi_container = document.querySelector('.anatomi_container');
anatomi_container.appendChild(btn1);
if (btn2 && !btn2.classList.contains("collapse-btn")) {
    anatomi_container.appendChild(btn2);
    btn2.classList.add('kasko');
} else {
    btn1.setAttribute('style','width:100% !important; font-size:11px !important;');
}

const a_wp = document.querySelector('#wa-button');
a_wp.classList.add('a_whatsapp');



const head = document.querySelector('head');
head.insertAdjacentHTML(`afterbegin`, a_style);
