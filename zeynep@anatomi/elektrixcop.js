//MOBİL

const style = `
<style>
.btn-custom-gray, .btn-custom-gray.passive:hover {
    color: #fff;
    background-color: #0581BF;
    width: 393px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13px;
}


.p-right, .box.p-right, .col.p-right, .btn.p-right{

    padding-right: 0;
    border: 1px solid white;
    width: 62px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column-reverse;
    background-color: white;
    color: black;
    border-radius: 5px;
    padding-right: 10px;
}

#nav-wrapper{
    margin-top:30px
}
</style>`

const container = document.querySelector('.col.col-12.bgGray');
const counter1 = document.querySelector('.box.col-12.p-left.btn-custom-gray.passive.splitted.campaign-band.text-semibold.text-italic');
counter1.remove();
container.insertAdjacentElement('afterend', counter1);
const newcounter = document.querySelector('.box.col-12.p-left.btn-custom-gray.passive.splitted.campaign-band.text-semibold.text-italic');
const removeElementer = newcounter.firstElementChild.parentElement.innerHTML
const endReplace = removeElementer.replaceAll(":", " ")
const end1 = endReplace.replaceAll("\n</div>\n<div", "\n</div>:\n<div")
newcounter.innerHTML = end1

const head = document.querySelector('head');
head.insertAdjacentHTML("beforeend", style);
// document.querySelector("#side-counter-7192")


// Location yazısının biraz aşağı alınması


const location1 = document.querySelector('#nav-wrapper');

head.insertAdjacentHTML("afterbegin", style);



// -----------------

const a_html = `
  
<div class="box col-12 p-left btn-custom-gray passive splitted campaign-band text-semibold text-italic">

<div class='text'>Bu Fırsatı İlk Sen Satın Al !</div>

</div>
`;

const counter2 = document.querySelector('.box.col-12.p-left.btn-custom-gray.passive.splitted.campaign-band.text-semibold.text-italic');
counter2.insertAdjacentHTML("afterend", a_html);



// --------------------------

//MOBİL NEW

const style = `
<style>
    .anatomi_container_campaign {
        display: grid;
        align-items: center;
        justify-content: center;
        align-content: center;
        gap: 13px;
        color: #fff;
        background-color: #0581BF;
        width: 100%;
        padding: 10px 0 0 0;
        margin-bottom: 10px;
    }
    
    
    .anatomi_children{
        width: 62px;
        height: 46px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column-reverse;
        background-color: white;
        border: 1px solid white;
        color: black;
        border-radius: 5px;
        padding-right: 10px;
    }
    
    #nav-wrapper{
        margin-top: 70px
    }
    
    .anatomi_firsat{
        grid-row: 2 / span 1;
        width: 100%;
        grid-column: 1 / span 7;
        text-align: center;
    }
}
</style>`

const container = document.querySelector('.col.col-12.bgGray');
const counter1 = document.querySelector('.box.col-12.p-left.btn-custom-gray.passive.splitted.campaign-band.text-semibold.text-italic');
counter1.remove();
container.insertAdjacentElement('afterend', counter1);
const newcounter = document.querySelector('.box.col-12.p-left.btn-custom-gray.passive.splitted.campaign-band.text-semibold.text-italic');
const removeElementer = newcounter.firstElementChild.parentElement.innerHTML
const endReplace = removeElementer.replaceAll(":", " ")
const end1 = endReplace.replaceAll("\n</div>\n<div", "\n</div>:\n<div")
newcounter.innerHTML = end1;

document.querySelector('#headerMain .campaign-band').classList.add('anatomi_container_campaign');
//İçeride yazacak yazının belirlendiği kısım
const html = `<p class="anatomi_firsat">Bu Fırsatı İlk Sen Satın Al!</p>`;
const anatomiContainer = document.querySelector('.anatomi_container_campaign');
anatomiContainer.insertAdjacentHTML('beforeend', html);
const anatomiContainerPright = document.querySelectorAll('.anatomi_container_campaign .p-right');
anatomiContainerPright.forEach(item => {
    item.classList.add('anatomi_children');
});

//stlye dosyası eklenedi
document.querySelector('head').insertAdjacentHTML("beforeend", style);


















// ----------------------------












// yazı ekleme

const text_html = `
<div class="text_alt">Bu fırsatı ilk sen satın al!</div>
`;
const counter_alt = document.querySelector('.box.col-12.p-left.btn-custom-gray.passive.splitted.campaign-band.text-semibold.text-italic');
counter_alt.insertAdjacentHTML("beforeend", text_html);




// DESKTOP - BOXIN

const style2 = `
<style>
.anatomi_container_campaign {
    display: grid;
    color: #fff;
    background-color: #DD9440;
    width: 393px;
    height: auto;
    align-items: center;
    justify-content: center;
    margin: 10px 90px;
    padding: 10px 0 0 0;
    gap: 20px;
    align-content: center;
}


.anatomi_children {

    border: 1px solid white;
    width: 48px;
    height: 41px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column-reverse;
    background-color: white;
    color: black;
    border-radius: 5px;
    font-size: 12px;
    padding: initial;
    
}


.anatomi_firsat{
    grid-row: 2 / span 1;
    width: 100%;
    grid-column: 1 / span 7;
    text-align: center;
}
</style>
`







const style2 = `
<style>
.anatomi_container_campaign {
    display: grid;
    color: #fff;
    background-color: #DD9440;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    padding: 10px 0 0 0;
    gap: 20px;
    align-content: center;
}


.anatomi_children {

    border: 1px solid white;
    width: 48px;
    height: 41px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column-reverse;
    background-color: white;
    color: black;
    border-radius: 5px;
    font-size: 12px;
    padding: initial;
    
}


.anatomi_firsat{
    grid-row: 2 / span 1;
    width: 100%;
    grid-column: 1 / span 7;
    text-align: center;
}
</style>
`

const boxIn = document.querySelector('.pos-r.box.col-12.box-border')
const sayac2 = document.querySelector('.box.col-12.p-left.btn-custom-gray.passive.splitted.campaign-band.text-semibold.text-italic');
sayac2.remove();
boxIn.insertAdjacentElement('afterbegin', sayac2);
const newsayac2 = document.querySelector('.box.col-12.p-left.btn-custom-gray.passive.splitted.campaign-band.text-semibold.text-italic');
const removeElementer = newsayac2.firstElementChild.parentElement.innerHTML
const endReplace = removeElementer.replaceAll(":", " ")
const end1 = endReplace.replaceAll("\n</div>\n<div", "\n</div>:\n<div")
newsayac2.innerHTML = end1


document.querySelector('.pos-r.box.col-12.box-border .campaign-band').classList.add('anatomi_container_campaign');
//İçeride yazacak yazının belirlendiği kısım
const html = `<p class="anatomi_firsat">Bu Fırsatı İlk Sen Satın Al!</p>`;
const anatomiContainer = document.querySelector('.anatomi_container_campaign');
anatomiContainer.insertAdjacentHTML('beforeend', html);
const anatomiContainerPright = document.querySelectorAll('.anatomi_container_campaign .p-right');
anatomiContainerPright.forEach(item => {
    item.classList.add('anatomi_children');
});


const head = document.querySelector('head');
head.insertAdjacentHTML("beforeend", style2);




//DESKTOP

const style = `
<style>
.btn-custom-gray, .btn-custom-gray.passive:hover {
    color: #fff;
    background-color: #DD9440;
    width: 1170px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 6px;
    margin-left: 92px;
} 

 .p-right, .box.p-right, .col.p-right, .btn.p-right {
    padding-right: 0;
    border: 1px solid white;
    width: 46.69px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    background-color: white;
    color: black;
    border-radius: 5px;
    padding-right: 8px;

}
</style>
`


const container = document.querySelector('.col.col-12.bgGray');
const sayac = document.querySelector('.box.col-12.p-left.btn-custom-gray.passive.splitted.campaign-band.text-semibold.text-italic');
sayac.remove();
container.insertAdjacentElement('afterend', sayac);
const newsayac = document.querySelector('.box.col-12.p-left.btn-custom-gray.passive.splitted.campaign-band.text-semibold.text-italic');
const removeElementer = newsayac.firstElementChild.parentElement.innerHTML
const endReplace = removeElementer.replaceAll(":", " ")
const end1 = endReplace.replaceAll("\n</div>\n<div", "\n</div>:\n<div")
newsayac.innerHTML = end1
const head = document.querySelector('head');
head.insertAdjacentHTML("beforeend", style);


const a_html = `
  
<div class="box col-12 p-left btn-custom-gray passive splitted campaign-band text-semibold text-italic">

<div class='textend'>Kalan Süre</div>

</div>
`;

const counter2 = document.querySelector('.box.col-12.p-left.btn-custom-gray.passive.splitted.campaign-band.text-semibold.text-italic');
counter2.insertAdjacentHTML("afterbegin", a_html);

// 1. clone node 2. gün saat verisini bul html ye yansıt, htmli bu sekilde değiştirebilirsin