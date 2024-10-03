const a_style_new = `
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
.form-tabs .tab-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 30px !important;
    margin-top: -16px !important;
}

.tab-btns .btn-link{
    width: 100% !important;
}

.a_text_in{
    text-align: center;
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 25px;

}

.a_form_container .tab-content{
    height: 360px !important;
    position: relative !important;
    border: none !important;
}
.a_form_container .btn-solid{
    width: 100% !important;
    position: absolute !important;
    bottom: -1px !important;
    left: 0 !important;
}
.form-tabs .tab-btns .btn-link.active{
    background-color: #fff !important;
    color: #4372F6 !important;
}

.form-tabs .tab-btns .btn-link {
    background-color: #C6C6C6 !important;
    border: none !important;
    color: white !important;
    border-radius: 0px !important;
    
}

.form-tabs {
    display: block !important;
}

.a_icon_close{
    position: absolute;
    top: -15px;
    right: -12px;
    z-index: 999999999;
    cursor: pointer !important;
}

.anatomi_create_div{
    padding: 20px !important;
}

@media (min-width: 320px) and (max-width: 500px) {
    .a_form_container {
      width: 330px;
    }

.error-text{
    margin-top: 1px !important;
}
</style>
`

const a_overlay = document.createElement('div');
a_overlay.classList.add('a_anatomi_overlay');
document.body.appendChild(a_overlay);



const anasayfa_form = document.querySelector('.form-tabs')
anasayfa_form.classList.add('a_form_container');



const anatomi_create_div = document.createElement('div');
anatomi_create_div.classList.add('anatomi_create_div');
anatomi_create_div.appendChild(anasayfa_form);
document.body.appendChild(anatomi_create_div);



const a_form_in = document.querySelector('.tab-1.tab-content')

const a_form_in2 = document.querySelector('.tab-2.tab-content')


const a_form_in_html = `

<p class="a_text_in">Aracını güvence altına alacak bolca seçeneği incelemeye hazır mısın? Hemen Teklif Al!</p>

`

a_form_in.insertAdjacentHTML('afterbegin', a_form_in_html);
a_form_in2.insertAdjacentHTML('afterbegin', a_form_in_html);



const a_html = `
<div class="a_icon_close">
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14" cy="14" r="14" fill="#E13622"/>
<path d="M11.6459 9L14.5 12.6914L17.4001 9H20.9263L16.6636 14L21 19H17.4922L14.5 15.3997L11.5354 19H8L12.3088 14L8.11048 9H11.6459Z" fill="#F4F4F4"/>
</svg>

</div>

`

anasayfa_form.insertAdjacentHTML('afterbegin', a_html)


const a_icon_close = document.querySelector('.a_icon_close');
const anatomi_container_div = document.querySelector('.anatomi_create_div') 
a_icon_close.addEventListener('click', () => {

    anatomi_container_div.style.display = 'none';
    a_overlay.style.display = 'none';

})

const a_head = document.querySelector('head');
a_head.insertAdjacentHTML('afterbegin', a_style_new);

document.querySelector('.tab-1 button').innerText = "Hemen Trafik Teklifi Al"
document.querySelector('.tab-2 button').innerText = "Hemen Kasko Teklifi Al"

document.querySelectorAll('.form-tabs.a_form_container label').forEach(item => {
    item.style.pointerEvents = "none"
})