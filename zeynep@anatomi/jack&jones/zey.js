const a_style = `<style>
.a_btn{
    background-color: #1e49f1;
    color: #fff;
    width: 100%;
    text-align: center;
    line-height: 44px;
    font-weight: 700;
    position: absolute;
}


.anatomi_modal .header-top {
    display: none;
  }

  
  .anatomi_modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999; /* arka planın üzerinde kalması için yüksek z-index değeri */
    background: #00000099;
  }
  
  .anatomi_modal iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 600px;
    width: 100%;
    max-width: 800px;
    max-height: calc(100% - 80px);
    background-color: #fff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }
  .anatomi_modal .uk-background-cover{
    display: none !important;
  }
  


</style>`

const html = `<div class="anatomi_modal">
<iframe src="https://jackjones.com.tr/uye-girisi" title="iframe title" class="anatomi_iframe"></iframe>
</div>`

const a_container = document.querySelector('.product-list')
a_container.insertAdjacentHTML('afterend', html)

const btn_container = document.querySelector(
    '.basket-fixed .uk-container .button'
)

const btn_html = `<div class="button a_btn" onClick="openModal()">
            ALIŞVERİŞİ TAMAMLA
</div>`

btn_container.insertAdjacentHTML('afterbegin', btn_html)
const a_modal = document.querySelector('.anatomi_modal');
function openModal() {

    
    a_modal.classList.toggle('active');
    if (a_modal.classList.contains('active')) {
        a_modal.style.display = 'block'
        
    }
    return false
}

const a_head = document.querySelector('head')
a_head.insertAdjacentHTML('afterbegin', a_style)







