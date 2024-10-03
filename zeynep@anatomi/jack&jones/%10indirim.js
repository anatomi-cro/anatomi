const a_style = `<style>
.indirim_popup{
    position: fixed;
    top: 38%;
    left: 5%;
    background-color: #FFFFFF;
    width: 80%;
    padding: 25px;
    text-align: center;
    z-index: 9999999999999999;
}

.indirim_popup h5{
    color: #00208D;
}

.uk-margin-medium-top.uk-text-xsmall{
    display: flex;
    justify-content: center;
}
.footer-top .newsletter form{
    margin-top: 20px !important;
}
.footer-top .newsletter .uk-input{
    border-width: 0 0 0 0 !important;
    background-color: #F3F3F3 !important;
}
#subscribe_email{
    padding-left: 20px !important;
}
.a_icon_close{
    display: flex;
    justify-content: end;
    color: #00208D;
}

.a_create_div{
    width: 100%;
    height: 100%;
    filter :filter: opacity(25%);
}

.anatomi_overlay{
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999998;
}
</style>`

const indirim_popup = document.querySelector('.newsletter');
indirim_popup.classList.add('indirim_popup');

const a_html = `
<div class="a_icon_close">
<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 1L1 10" stroke="#00208D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 1L10 10" stroke="#00208D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>

`

indirim_popup.insertAdjacentHTML('afterbegin', a_html)


const a_icon_close = document.querySelector('.a_icon_close');
a_icon_close.addEventListener('click', () => {

    indirim_popup.style.display = 'none';
    overlay.style.display = 'none';

})

const overlay = document.createElement('div');
overlay.classList.add('anatomi_overlay');
document.body.appendChild(overlay);


const head = document.querySelector("head");
head.insertAdjacentHTML(`beforeend`, a_style);