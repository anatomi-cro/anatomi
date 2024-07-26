const a_style_btn = `
<style>
.trafik_btn{
    bottom: 0 !important;
    left: 0 !important;
    position: fixed !important;
    width: 100% !important;
    border-bottom-right-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    font-size: 14px !important;
    z-index:9999;
    animation: .5s ease-in-out  slideInFromBottom;
    animation-play-state: running;
}


@keyframes slideInFromBottom {
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0);
    }
}
</style>

`;

// Sayfa yüklendiğinde veya kullanıcı scroll yaptığında bu fonksiyon çalışacak
window.onscroll = function () {
    // Sayfanın yüksekliğini al
    var pageHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;

    // Ekranın yüksekliğini al
    var screenHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

    // Scroll yapılan yüksekliği al
    var scrollHeight =
        window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    // Yüzde 20 scroll olduğunda bir işlem gerçekleştir
    if (scrollHeight / (pageHeight - screenHeight) >= 0.03) {
        const a_form_btn = document.querySelector(".form .btn-solid");
        a_form_btn.classList.add("trafik_btn");

        a_form_btn.innerText = "TRAFİK SİGORTASI TEKLİFİ AL";
        const a_svg_arrow = `
          <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11C22 11.2557 21.8925 11.5117 21.6777 11.707L10.6777 21.7069C10.2479 22.0977 9.55189 22.0977 9.12234 21.7069C8.69279 21.3162 8.69252 20.6834 9.12234 20.2929L19.3446 11L9.12234 1.70705C8.69252 1.31631 8.69252 0.683558 9.12234 0.29306C9.55216 -0.0974368 10.2482 -0.0976866 10.6777 0.29306L21.6777 10.293C21.8925 10.4883 22 10.7443 22 11ZM12.8777 10.293L1.87776 0.29306C1.44794 -0.0976868 0.751917 -0.0976868 0.322368 0.29306C-0.107181 0.683807 -0.107456 1.31656 0.322368 1.70705L10.5446 11L0.322368 20.2929C-0.107456 20.6837 -0.107456 21.3164 0.322368 21.7069C0.752191 22.0974 1.44821 22.0977 1.87776 21.7069L12.8777 11.707C13.0925 11.5117 13.2 11.2557 13.2 11C13.2 10.7443 13.0925 10.4883 12.8777 10.293Z" fill="white"/>
          </svg>`;

        a_form_btn.insertAdjacentHTML("beforeend", a_svg_arrow);

        // Sayfanın en yukarısına çıkma fonksiyonu inputlar boşken
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }

        // Butona tıklanınca kontrol ve sayfanın en yukarısına çıkma
        document
            .querySelector(".btn-solid.trafik_btn")
            .addEventListener("click", function () {
                var identityNumberInputs = document.querySelectorAll(
                    'input[id*="identityNumber"]'
                );
                var phoneInputs = document.querySelectorAll('input[id*="phone"]');

                // İlgili inputlar boşsa
                if (
                    Array.from(identityNumberInputs).every(
                        (input) => !input.value.trim()
                    ) ||
                    Array.from(phoneInputs).every((input) => !input.value.trim())
                ) {
                    // Sayfanın en yukarısına çık
                    console.log("zeyyzeyyy");
                    scrollToTop();
                }
            });

        const a_head_btn = document.querySelector("head");
        a_head_btn.insertAdjacentHTML("beforeend", a_style_btn);

        const trafik_btn = document.querySelector('.btn-solid.a_btn.trafik_btn')
        trafik_btn.classList.remove("trafik_btn_close");
    }
    else {
        const trafik_btn = document.querySelector('.btn-solid.a_btn.trafik_btn')
        if (trafik_btn) {
            trafik_btn.classList.remove("trafik_btn");
            trafik_btn.innerText = "Trafik Sigortası Teklifi Al "
        }
    }

};