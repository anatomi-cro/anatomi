
const a_style = `<style>
.anatomi_iframe {
    display: none;
    z-index: 99999999;
    position: fixed;

}



</style>`

const login_page = 'https://jackjones.com.tr/uye-girisi'
const register_page = 'https://jackjones.com.tr/uye-ol'
const user_page = 'https://jackjones.com.tr/index.php?route=account/home'
var login_iframe = document.createElement('iframe');
login_iframe.id = login_iframe.name = "anatomi_iframe";
login_iframe.src = login_page;
login_iframe.width = '100%';
login_iframe.height = '350';
login_iframe.classList.add('anatomi_iframe');

const creat_div_iframe = document.createElement('div');
creat_div_iframe.classList.add('anatomi_overlay');
creat_div_iframe.appendChild(login_iframe)
const product_container = document.querySelector('.product-list')

const btn_container = document.querySelector('.basket-fixed .uk-container .button')

login_iframe.addEventListener('load', function() {
    const url = login_iframe.contentWindow.location.href;
    console.log(url);
    const iframeDocument = login_iframe.contentDocument || login_iframe.contentWindow.document;

    if(url == login_page || url == register_page){
        login_iframe.classList.add('active');

        $(".anatomi_iframe").contents().find("header").remove();
        $(".anatomi_iframe").contents().find('.uk-background-cover.uk-flex.uk-flex-center.uk-flex-middle').remove();

        iframeDocument.querySelector('.user_login').addEventListener('submit', function(event) {
            console.log('Giriş yapılıyor');
            console.log("Loading göster ve iframe gizle");
            login_iframe.classList.remove('active');
        });
    }else if(url == user_page){
        login_iframe.style.display = 'none';
        sepetiOnaylaVeAdresSayfasinaYonlendir()
    }else{
        login_iframe.contentWindow.location.href = login_page;
    }
});

if(!kullaniciGirisYapmisMi()){
    product_container.appendChild(creat_div_iframe)

    btn_container.addEventListener('click', function(event) {
        event.preventDefault();

        openModal()
    });
}

function openModal() {
    login_iframe.classList.toggle('active');

    if (login_iframe.classList.contains('active')) {
        login_iframe.style.display = 'block'

    }
    return false
}

function kullaniciGirisYapmisMi() {
    return false;
}


function sepetiOnaylaVeAdresSayfasinaYonlendir() {
    // Sepeti onaylama işlemini gerçekleştirin

    // Örnek olarak sepeti onaylamış gibi davranıyoruz
    console.log('Sepet onaylandı');

    // Daha sonra adres sayfasına yönlendirme yapabilirsiniz
    window.location.href = 'https://jackjones.com.tr/index.php?route=checkout/address';
}

const a_head = document.querySelector('head')
a_head.insertAdjacentHTML('afterbegin', a_style)
