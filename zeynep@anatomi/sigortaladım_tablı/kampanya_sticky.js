// const a_style = `
//     <style>
//     .anatomi_container{
//         display: flex;
//         position: fixed;
//         bottom: 0;
//         width: 100%;
//         background: white;
//         align-items: center !important;
//         justify-content: center !important;
//         padding-bottom: 10px;
//         padding-top: 10px;
//         box-shadow: 0px 1px 40px -9px rgb(0 0 0 / 40%);
//         z-index: 999;
//         gap:9px;
//         height:80px

//     }

    
//     .trafik_buton a{
//         border:none !important;
//         border-radius: 5px !important;
//     }
  
//     .kasko_buton a{
//         background-color: #3074FF !important;
//         border:none !important;
//         border-radius: 5px !important;
//     }

//     </style>
// `



// function getElement(a_class, status){
//     return status ? document.querySelector(a_class) : document.querySelectorAll(a_class);
// }


// const main_container = getElement('.row', false);
// main_container[1].classList.add('anatomi_container');


// const container_one = getElement(".col-lg-6.col-md-6.col-sm-12", false);
// container_one[0].classList.add("trafik_buton");

// const abc_one = getElement(".col-lg-6.col-md-6.col-sm-12.trafik_buton", true);
// abc_one.removeAttribute("style");


// const container_two = getElement(".col-lg-6.col-md-6.col-sm-12", false);
// container_two[1].classList.add("kasko_buton");

// const abc_two = getElement(".col-lg-6.col-md-6.col-sm-12.kasko_buton", true);
// abc_two.removeAttribute("style");
   
// const head = getElement('head', true);
// head.insertAdjacentHTML(`beforeend`, a_style);

// --------------------------

// ${btn1 ? btn1.setAttribute('href', 'https://www.sigortaladim.com/trafik-sigortasi') : ''}
// ${btn2 ? btn2.setAttribute('href', 'https://www.sigortaladim.com/kasko-sigortasi') : ''}

// Path: sigortaladım/kampanya_sticky.js



// const a_style = `
//     <style>
//     .anatomi_container{
//         display: flex;
//         position: fixed;
//         bottom: 0;
//         width: 100%;
//         background: white;
//         align-items: center !important;
//         justify-content: center !important;
//         padding-bottom: 10px;
//         padding-top: 10px;
//         box-shadow: 0px 1px 40px -9px rgb(0 0 0 / 40%);
//         z-index: 999;
//         gap:9px;
//         height:80px

//     }

    
//     .trafik_buton a{
//         border:none !important;
//         border-radius: 5px !important;
//     }
  
//     .kasko_buton a{
//         background-color: #3074FF !important;
//         border:none !important;
//         border-radius: 5px !important;
//     }

//     </style>
// `



// function getElement(a_class, status){
//     return status ? document.querySelector(a_class) : document.querySelectorAll(a_class);
// }



// const btn1 = document.querySelectorAll('.main-content a')[0];
// const btn2 = document.querySelectorAll('.main-content a')[1];



// <div class="anatomi_container">
// <div class="kasko_buton">${btn1 ? <a href = "/kasko-sigortasi"></a> : ''}</div>
// <div class="trafik_buton">${btn2 ? <a href = "/trafik-sigortasi"></a> : ''}</div>
// </div>






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
    font-size: 14px !important;
}

.a_whatsapp{
    bottom: 50% !important;
}

.a_buton.kasko{
    background-color: #3074FF !important;
    border:none !important;
     
}
@media screen and (max-width: 375px){
    .a_buton{
        font-size: 12px !important;
    }
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

document.querySelectorAll('.a_buton').forEach(item => {
    item.setAttribute('style', "");
})



