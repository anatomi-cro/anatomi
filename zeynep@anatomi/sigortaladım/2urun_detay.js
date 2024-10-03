const a_style = `
<style>
.stickyButton{
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
}
</style>
`




// burada buton önce sabit sekilde ama ekranı biraz scroll yaptığımızda buton ekranın alında stick şeklinde duruyor
function makeSticky() {
    let scroll = window.pageYOffset;
    const container = document.querySelectorAll(".btn-solid");
container[0].classList.add("anatomi_buton");
    if (scroll > 450) {
      container[0].style.position = "fixed";
      container[0].style.bottom = "0";
        container[0].style.width = "100%"; 
        container[0].style.zIndex = "9999";
        container[0].style.right = "0px";
    } else {
      container[0].style.position = "relative";
      container[0].style.top = "auto";
    }
  }


window.onscroll = makeSticky;

// -----
const form = document.querySelector(".form");

const stickyButton = document.querySelectorAll(".btn-solid");
stickyButton[0].classList.add('stickyButton');
const formInputs = form.querySelectorAll("input");
// form elementinin boş olduğu zaman butona yıklandığında eğerki sayfanın aşaglarısındaysak yukarı çıkmamızı sağlıyor
stickyButton[0].addEventListener("click", function() {
    var isFormValid = true;
    var formInputs = form.querySelectorAll("input");
    var formElements = [...formInputs]; 
    for (var i = 0; i < formElements.length; i++) {
        if (formElements[i].value === "") {
            isFormValid = false;
            break;
        }
    }
    if (isFormValid) {
        form.submit();
    } else {

        // burada sayfa yukarı cıkarken daha yavaş cıkmasını saglıyoruz
        const scrollStep = -window.scrollY / (400 / 15),
    scrollInterval = setInterval(function(){
    if ( window.scrollY !== 0 ) {
        window.scrollBy( 0, scrollStep );
    }
    else clearInterval(scrollInterval); 
}, 15);
    }
});



form.onsubmit = function(){
    makeSticky();
    }

const html = `
    <div class = "container_icon">
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 11C22 11.2557 21.8925 11.5117 21.6777 11.707L10.6777 21.7069C10.2479 22.0977 9.55189 22.0977 9.12234 21.7069C8.69279 21.3162 8.69252 20.6834 9.12234 20.2929L19.3446 11L9.12234 1.70705C8.69252 1.31631 8.69252 0.683558 9.12234 0.29306C9.55216 -0.0974368 10.2482 -0.0976866 10.6777 0.29306L21.6777 10.293C21.8925 10.4883 22 10.7443 22 11ZM12.8777 10.293L1.87776 0.29306C1.44794 -0.0976868 0.751917 -0.0976868 0.322368 0.29306C-0.107181 0.683807 -0.107456 1.31656 0.322368 1.70705L10.5446 11L0.322368 20.2929C-0.107456 20.6837 -0.107456 21.3164 0.322368 21.7069C0.752191 22.0974 1.44821 22.0977 1.87776 21.7069L12.8777 11.707C13.0925 11.5117 13.2 11.2557 13.2 11C13.2 10.7443 13.0925 10.4883 12.8777 10.293Z" fill="white"/>
    </svg>
       </div>

`
stickyButton[0].insertAdjacentHTML('beforeend', html);

const head = document.querySelector("head");
head.insertAdjacentHTML('beforeend', a_style);