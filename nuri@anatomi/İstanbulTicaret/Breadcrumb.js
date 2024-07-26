const mobilGenislik = 540;
const filterButton = document.getElementById("filterMobileBtn");

const ekranGenislik = window.innerWidth;


if (ekranGenislik < mobilGenislik && filterButton === null) {
    const navigasyon = document.getElementById('navigasyon');
    const head = document.querySelector('head');
    navigasyon.classList.add("anatomi-navigasyon");
    const anatomi_navigasyon_style = `
        <style>
            @media screen and (max-width: 768px) {
                .anatomi-navigasyon {
                    display: block !important;
                    margin-top: 40px;
                }

                .anatomi-navigasyon #nav-wrapper {
                    justify-content: center;
                    margin: 0 auto;
                }

                .anatomi-navigasyon #nav-wrapper .breadcrumb li {
                    padding-right: 8px;
                    margin-left: 5px;
                }
            }

            @media screen and (max-width: 420px) {
                .anatomi-navigasyon #nav-wrapper .breadcrumb li a span {
                    font-size: 10px;
                }
            }

            @media screen and (max-width: 370px) {
                .anatomi-navigasyon #nav-wrapper .breadcrumb li a span {
                    font-size: 9px;
                }
            }
        </style>
    `;
    head.insertAdjacentHTML('beforeend', anatomi_navigasyon_style);
}
