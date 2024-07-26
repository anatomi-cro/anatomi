const button_html = `
<div class="anatomi_sticky-button-container">
<div class="anatomi_sticky-button-content">
    <button class="anatomi_sticky_button">
        <a class="anatomi_sticky_button_open">Ücretsiz Teklif Al</a>
    </button>

    <div class="anatomi-sticky-button-opened ">
        <div class="anatomi-sticky-close-button">
            <img src="https://anatomi.s3.eu-north-1.amazonaws.com/ZOn5oF.webp" alt="">
        </div>
        <div class="anatomi-sticky-button-content">
            <div class="anatomi-sticky-button-choices anatomi-kasko-choice">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+(3333).svg" alt="">
                <p>Kasko</p>
                <button>
                    <a class="anatomi-sticky-button-choice-link choice-kasko-link" href="/full-kasko">Teklif
                        Al</a>
                </button>
            </div>

            <div class="anatomi-sticky-button-choices anatomi-trafik-choice">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+(25).svg" alt="">
                <p>Trafik</p>
                <button>
                    <a class="anatomi-sticky-button-choice-link choice-trafik-link"
                        href="/trafik-sigortasi">Teklif Al</a>
                </button>
            </div>

            <div class="anatomi-sticky-button-choices anatomi-tSaglik-choice">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+(21).svg" alt="">
                <p>Tamamlayıcı Sağlık</p>
                <button>
                    <a class="anatomi-sticky-button-choice-link choice-tSaglik-link"
                        href="/tamamlayici-saglik-sigortasi">Teklif Al</a>
                </button>
            </div>

            <div class="anatomi-sticky-button-choices anatomi-dask-choice">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+(26).svg" alt="">
                <p>Dask</p>
                <button>
                    <a class="anatomi-sticky-button-choice-link choice-dask-link"
                        href="/zorunlu-deprem-sigortasi-dask">Teklif Al</a>
                </button>
            </div>

            <div class="anatomi-sticky-button-choices anatomi-sSaglik-choice">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+(20).svg" alt="">
                <p>Seyahat Sağlık</p>
                <button class="open-seyahat-choice">
                    <a class="anatomi-sticky-button-choice-link choice-sSaglik-link">Teklif Al</a>
                </button>

                <div class="anatomi-sSaglik-all">
                    <button class="anatomi-sSaglik-all-close">
                        Geri
                    </button>
                    <div class="anatomi-sticky-button-choices anatomi-covid-choice">
                        <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+(20).svg" alt="">
                        <p> COVID-19 Yurt Dışı Seyahat</p>
                        <button>
                            <a class="anatomi-sticky-button-choice-link choice-covid-link"
                                href="/covid-19-koronavirus-yurt-disi-seyahat-sigortasi">Teklif Al</a>
                        </button>
                    </div>

                    <div class="anatomi-sticky-button-choices anatomi-egitim-choice">
                        <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+(20).svg" alt="">
                        <p>Yurt Dışı Eğitim Seyahat</p>
                        <button>
                            <a class="anatomi-sticky-button-choice-link choice-egitim-link"
                                href="/yurt-disi-egitim-seyahat-sigortasi">Teklif Al</a>
                        </button>
                    </div>

                    <div class="anatomi-sticky-button-choices anatomi-vize-choice">
                        <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+(20).svg" alt="">
                        <p>Yurt Dışı Vize Seyahat</p>
                        <button>
                            <a class="anatomi-sticky-button-choice-link choice-vize-link"
                                href="/yurt-disi-vize-seyahat-sigortasi">Teklif Al</a>
                        </button>
                    </div>
                </div>
            </div>

            <div class="anatomi-sticky-button-choices anatomi-diger-choice">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Layer+2.svg" alt="">
                <p>Diğer Ürünler</p>
                <button>
                    <a class="anatomi-sticky-button-choice-link choice-diger-link">Teklif Al</a>
                </button>

                <div class="anatomi-diger-all">
                    <button class="anatomi-diger-all-close">
                        Geri
                    </button>
                    <div class="anatomi-sticky-button-choices anatomi-digital-choice">
                        <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Layer+2.svg" alt="">
                        <p>Dijital Güvenlik</p>
                        <button>
                            <a class="anatomi-sticky-button-choice-link choice-covid-link"
                                href="/dijital-guvenlik-sigortasi">Teklif Al</a>
                        </button>
                    </div>

                    <div class="anatomi-sticky-button-choices anatomi-iklim-choice">
                        <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Layer+2.svg" alt="">
                        <p>İklim</p>
                        <button>
                            <a class="anatomi-sticky-button-choice-link choice-egitim-link"
                                href="/iklim-sigortasi">Teklif Al</a>
                        </button>
                    </div>

                    <div class="anatomi-sticky-button-choices anatomi-mini-choice">
                        <img src="https://anatomi.s3.eu-north-1.amazonaws.com/Layer+2.svg" alt="">
                        <p>Mini Kasko</p>
                        <button>
                            <a class="anatomi-sticky-button-choice-link choice-vize-link"
                                href="/mini-kasko">Teklif Al</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
`;

const button_css = `
<style>

.anatomi_sticky-button-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 999999999999;
    background-color: #fff;
}

.anatomi_sticky-button-content {
    position: relative;
    display: flex;
    gap: 10px;
    width: 100%;
    padding: 10px;
}

.anatomi_sticky_button {
    width: 100%;
    background-color: #B61539;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    padding: 20px 15px;
    z-index: 99999;
}

.anatomi-sticky-button-opened {
    position: absolute;
    width: calc(100% - 15px);
    background-color: #fff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.6);
    padding: 20px;
    border-radius: 10px;
    bottom: 70px;
    height: auto;
    transition: all 1s ease-in-out;
    transform: translateY(150%);
    opacity: 0;
    transition: all .4s ease-in-out;
    z-index: 9999;
}

.anatomi-sticky-button-opened.anatomi-active-sticky {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9998;
    transform: translateY(0);
    opacity: 1;
    transition: all 1s ease-in-out;
}

.anatomi-sticky-button-opened .anatomi-sticky-button-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-content: center;
    align-items: center;
    justify-self: center;
    align-self: center;
    height: 100%;
    width: 100%;
}

.anatomi-sticky-button-choices {
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-self: center;
    justify-content: center;
    align-items: center;
    border: 1px solid #BBBBBB;
    border-radius: 10px;
    width: fit-content;
    height: 145px;
    width: 90%;
    padding: 10px;
    cursor: pointer;
}

.anatomi-sticky-button-choices img {
    object-fit: contain;
    width: 50px;
    height: 40px;
}

.anatomi-trafik-choice img {
    width: 60px !important;
    height: 50px !important;
    transform: translateY(5px);
}

.anatomi-sticky-button-choices p {
    font-size: 14px;
}

.anatomi-sticky-button-choices button {
    background-color: #BB2646;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
    padding: 10px 20px;
}

.anatomi-sticky-button-choices a {
    color: #fff;
    text-decoration: none;
}

.anatomi-sticky-close-button {
    position: absolute;
    top: -10px;
    right: 0px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.anatomi-sSaglik-all,
.anatomi-diger-all {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    gap: 10px;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    justify-self: center;
    align-self: center;
    height: 100%;
    width: 90%;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    transition: all 1s ease-in-out;
    display: grid;
    transform: translate(-50%, 200%);
    opacity: 0;
    transition: all .5s ease-in-out;
}

.anatomi-sSaglik-active,
.anatomi-diger-active {
    display: grid;
    transform: translate(-50%, 50%);
    opacity: 1;
    transition: all .5s ease-in-out;
}


.anatomi-sSaglik-all .anatomi-sticky-button-choices,
.anatomi-diger-all .anatomi-sticky-button-choices { 
    width: 90% !important;
}

.anatomi-covid-choice,
.anatomi-egitim-choice,
.anatomi-vize-choice {
    height: 180px;
    padding: 10px;
    text-align: center;
}

.anatomi-vize-choice, .anatomi-mini-choice {
    transform: translateX(50%);
}



.anatomi-sSaglik-all-close,
.anatomi-diger-all-close {
    position: absolute;
    top: -10px;
    right: -20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
</style>`;

if (window.innerWidth < 768) {
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", button_css);
    document.body.insertAdjacentHTML("beforeend", button_html);


    const anatomiActive = document.querySelector('.anatomi-active-sticky');
    const stickyButton = document.querySelector('.anatomi_sticky_button');
    const stickyButtonOpened = document.querySelector('.anatomi-sticky-button-opened');
    const stickyButtonClose = document.querySelector('.anatomi-sticky-close-button');
    const sSaglikButton = document.querySelector('.open-seyahat-choice');
    const sSaglikAll = document.querySelector('.anatomi-sSaglik-all');
    const sSaglikAllClose = document.querySelector('.anatomi-sSaglik-all-close');
    const digerButton = document.querySelector('.choice-diger-link');
    const digerAll = document.querySelector('.anatomi-diger-all');
    const digerAllClose = document.querySelector('.anatomi-diger-all-close');


    const kaskoChoice = document.querySelector('.anatomi-kasko-choice');
    const trafikChoice = document.querySelector('.anatomi-trafik-choice');
    const tSaglikChoice = document.querySelector('.anatomi-tSaglik-choice');
    const daskChoice = document.querySelector('.anatomi-dask-choice');
    const sSaglikChoice = document.querySelector('.anatomi-sSaglik-choice');
    const digerChoice = document.querySelector('.anatomi-diger-choice');
    const covidChoice = document.querySelector('.anatomi-covid-choice');
    const egitimChoice = document.querySelector('.anatomi-egitim-choice');
    const vizeChoice = document.querySelector('.anatomi-vize-choice');
    const digitalChoice = document.querySelector('.anatomi-digital-choice');
    const iklimChoice = document.querySelector('.anatomi-iklim-choice');
    const miniChoice = document.querySelector('.anatomi-mini-choice');



    kaskoChoice.addEventListener('click', () => {
        window.location.href = 'https://www.somposigorta.com.tr/full-kasko';
    })

    trafikChoice.addEventListener('click', () => {
        window.location.href = 'https://www.somposigorta.com.tr/trafik-sigortasi';
    })

    tSaglikChoice.addEventListener('click', () => {
        window.location.href = 'https://www.somposigorta.com.tr/tamamlayici-saglik-sigortasi';
    })

    daskChoice.addEventListener('click', () => {
        window.location.href = 'https://www.somposigorta.com.tr/zorunlu-deprem-sigortasi-dask';
    })

    covidChoice.addEventListener('click', () => {
        window.location.href = 'https://www.somposigorta.com.tr/covid-19-koronavirus-yurt-disi-seyahat-sigortasi';
    })

    egitimChoice.addEventListener('click', () => {
        window.location.href = 'https://www.somposigorta.com.tr/yurt-disi-egitim-seyahat-sigortasi';
    })

    vizeChoice.addEventListener('click', () => {
        window.location.href = 'https://www.somposigorta.com.tr/yurt-disi-vize-seyahat-sigortasi';
    })

    digitalChoice.addEventListener('click', () => {
        window.location.href = 'https://www.somposigorta.com.tr/dijital-guvenlik-sigortasi';
    })

    iklimChoice.addEventListener('click', () => {
        window.location.href = 'https://www.somposigorta.com.tr/iklim-sigortasi';
    })

    miniChoice.addEventListener('click', () => {
        window.location.href = 'https://www.somposigorta.com.tr/mini-kasko';
    })

    stickyButton.addEventListener('click', () => {
        stickyButtonOpened.classList.toggle('anatomi-active-sticky');
    })

    stickyButtonClose.addEventListener('click', () => {
        stickyButtonOpened.classList.remove('anatomi-active-sticky');
    })

    sSaglikButton.addEventListener('click', () => {
        sSaglikAll.classList.add('anatomi-sSaglik-active');
    })

    sSaglikAllClose.addEventListener('click', () => {
        sSaglikAll.classList.remove('anatomi-sSaglik-active');
    })

    digerButton.addEventListener('click', () => {
        digerAll.classList.add('anatomi-diger-active');
    })

    digerAllClose.addEventListener('click', () => {
        digerAll.classList.remove('anatomi-diger-active');
    })

}
