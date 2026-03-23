if(window.innerWidth < 768 && document.querySelector("#product-detail")){

const style2_a = `

<style>
 @import url('https://fonts.cdnfonts.com/css/ds-digital');

 .mins{
    font-family: 'DS-Digital', sans-serif;
    font-size: 20px;
 }

.days{
    font-family: 'DS-Digital', sans-serif;
    font-size: 20px;
}

.hours{
    font-family: 'DS-Digital', sans-serif;
    font-size: 20px;
}

.secs{
    font-family: 'DS-Digital', sans-serif;
    font-size: 20px;
}

.anatomi_container_campaign {
    display: grid;
    color: #fff;
    background-color: #DD9440;
    width: 100% !important;
    height: auto;
    align-items: center;
    justify-content: center;
    padding: 10px 0 0 0;
    gap: 5px;
    align-content: center;
    font-style : inherit !important;
    margin-top: 15px;
    
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

#nav-wrapper{
  padding-top: 0px !important;
}
</style>
`;

const boxIn = document.querySelector("#navigasyon");
const sayac2 = document.querySelector(
  ".box.col-12.p-left.btn-custom-gray.passive.splitted.campaign-band.text-semibold.text-italic"
);
/* OPT-200874 START */
sayac2?.remove();
if (sayac2) {
  boxIn?.insertAdjacentElement("beforebegin", sayac2);
}

/* OPT-200874 END */
const newsayac2 = document.querySelector(
  ".box.col-12.p-left.btn-custom-gray.passive.splitted.campaign-band.text-semibold.text-italic"
)?? {};
const removeElementer = newsayac2?.firstElementChild?.parentElement?.innerHTML;
const endReplace = removeElementer?.replaceAll(":", " ");
const end1 = endReplace?.replaceAll("\n</div>\n<div", "\n</div>:\n<div");
newsayac2.innerHTML = end1;

document
  .querySelector(".campaign-band")
  ?.classList.add("anatomi_container_campaign");
//İçeride yazacak yazının belirlendiği kısım
const html_a = `<p class="anatomi_firsat">Bu Fırsatı İlk Sen Satın Al!</p>`;

const anatomiContainer = document.querySelector(".anatomi_container_campaign");
anatomiContainer?.insertAdjacentHTML("beforeend", html_a);
const anatomiContainerPright = document.querySelectorAll(
  ".anatomi_container_campaign .p-right"
);
anatomiContainerPright.forEach((item) => {
  item?.classList.add("anatomi_children");
});

const head = document.querySelector("head");
head?.insertAdjacentHTML("beforeend", style2_a);
}