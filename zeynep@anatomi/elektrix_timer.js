//MOBİL NEW

const style = `
<style>

@import url(//db.onlinewebfonts.com/c/63f874d192fb3892d88d5e26f942b5e2?family=DS-Digital);
   .mins span{
        font-family: "DS-Digital";
        font-size: 20px;
    }
    .days span{
        font-family: "DS-Digital";
        font-size: 20px;
    }
    .hours span{
        font-family: "DS-Digital";
        font-size: 20px;
    }
    .secs span{
        font-family: "DS-Digital";
        font-size: 20px;
    }
    .anatomi_container_campaign {
        display: grid;
        align-items: center;
        justify-content: center;
        align-content: center;
        gap: 13px;
        color: #fff;
        background-color: #DD9440;
        width: 100%;
        padding: 10px 0 0 0;
        margin-bottom: 10px;
        font-style : inherit !important
    }
    
    
    .anatomi_children{
        width: 55px;
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
        padding-left: 0px !important;

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

//style dosyası eklenedi
document.querySelector('head').insertAdjacentHTML("beforeend", style);




// DESKTOP - BOXIN

const style2 = `
<style>
 @import url('https://fonts.cdnfonts.com/css/ds-digital');
 .mins span{
    font-family: 'DS-Digital', sans-serif;
    font-size: 20px;
 }
.days span{
    font-family: 'DS-Digital', sans-serif;
    font-size: 20px;
}
.hours span{
    font-family: 'DS-Digital', sans-serif;
    font-size: 20px;
}
.secs span{
    font-family: 'DS-Digital', sans-serif;
    font-size: 20px;
}
.anatomi_container_campaign {
    display: grid;
    color: #fff;
    background-color: #DD9440;
    width: 393px;
    height: auto;
    align-items: center;
    justify-content: center;
    padding: 10px 0 0 0;
    gap: 5px;
    align-content: center;
    max-width: 85%;
    font-style : inherit !important
    
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
.anatomi_gorsel{
    display: flex;
    flex-direction: column;
    align-items: center;
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
newsayac2.innerHTML = end1;
const gorsel = document.querySelector('.pos-r.box.col-12.box-border')
gorsel.classList.add("anatomi_gorsel")

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
@import url('https://fonts.cdnfonts.com/css/ds-digital');
.mins{
   font-family: 'DS-Digital', sans-serif !important;
   font-size: 20px;
}
.days{
   font-family: 'DS-Digital', sans-serif !important;
   font-size: 20px;
}
.hours{
   font-family: 'DS-Digital', sans-serif !important;
   font-size: 20px;
}
.secs{
   font-family: 'DS-Digital', sans-serif !important;
   font-size: 20px;
}
.anatomi_container_campaign {
    color: #fff;
    background-color: #DD9440;
    max-width: 1180px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 6px;
    margin:0 auto;
    position: relative;
    font-style : inherit !important
    
} 

 .anatomi_children{
    padding: 0;
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
  
}

    .anatomi_firsat{
        display:flex;
        align-items: center;
        justify-content: start;
        position: absolute;
        left: 30px;
        top: 20px;
  
      }

      .anatomi_time{
        padding: 12px;
      }


</style>
`


const container = document.querySelector('.ustbilgiBanner').parentElement;
const sayac = document.querySelector('.box.col-12.p-left.btn-custom-gray.passive.splitted.campaign-band.text-semibold.text-italic');
sayac.remove();
container.insertAdjacentElement('afterbegin', sayac);
const newsayac = document.querySelector('.box.col-12.p-left.btn-custom-gray.passive.splitted.campaign-band.text-semibold.text-italic');
const removeElementer = newsayac.firstElementChild.parentElement.innerHTML
const endReplace = removeElementer.replaceAll(":", " ")
const end1 = endReplace.replaceAll("\n</div>\n<div", "\n</div>:\n<div")
newsayac.innerHTML = end1

document.querySelector('#headerMain .campaign-band').classList.add('anatomi_container_campaign');
//İçeride yazacak yazının belirlendiği kısım
const html = `<p class="anatomi_firsat">Bu Fırsatı İlk Sen Satın Al!</p><p class ="anatomi_time">Kalan Süre</p>`;
const anatomiContainer = document.querySelector('.anatomi_container_campaign');
anatomiContainer.insertAdjacentHTML('afterbegin', html);
const anatomiContainerPright = document.querySelectorAll('.anatomi_container_campaign .p-right');
anatomiContainerPright.forEach(item => {
    item.classList.add('anatomi_children');
});


const head = document.querySelector('head');
head.insertAdjacentHTML("beforeend", style);


// const counter2 = document.querySelector('.box.col-12.p-left.btn-custom-gray.passive.splitted.campaign-band.text-semibold.text-italic');

// 1. clone node 2. gün saat verisini bul html ye yansıt, htmli bu sekilde değiştirebilirsin


