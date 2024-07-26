const section2 = document.getElementById("section-2");
var section2Bottom = section2.getBoundingClientRect().bottom - 900;

function scrollHandler (){
    if (window.innerWidth > 768 && window.scrollY > section2Bottom) {
        const anatomi_kasko_avantaj_html = `
        <div class="anatomi_kasko_avantajlar_container">
        <h1>Ürün Avantajları</h1>
                <div class="anatomi_kasko_avantajlar_grid">
                    <div class="anatomi_kasko_avantajlar_grid_1 anatomi_kasko_avantajlar_grid_content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
                            <circle cx="17.5" cy="18" r="17.5" fill="#F1EDED" />
                            <g clip-path="url(#clip0_11_23)">
                                <path
                                    d="M14.1521 27.4347C13.6956 27.4347 13.3913 27.2825 13.0869 26.9782L6.54344 20.2825C5.93474 19.6738 5.93474 18.7608 6.54344 18.1521C7.15213 17.5434 8.06517 17.5434 8.67387 18.1521L14.1521 23.6304L27.6956 10.0869C28.3043 9.4782 29.2173 9.4782 29.826 10.0869C30.4347 10.6956 30.4347 11.6086 29.826 12.2173L15.2173 26.9782C14.913 27.2825 14.6087 27.4347 14.1521 27.4347Z"
                                    fill="#AA001F" />
                            </g>
                            <defs>
                                <clipPath id="clip0_11_23">
                                    <rect width="24.1957" height="17.8043" fill="white"
                                        transform="translate(6.08691 9.63037)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>%60’a Varan Hasarsızlık İndirimi</p>
                    </div>
        
                    <div class="anatomi_kasko_avantajlar_grid_2 anatomi_kasko_avantajlar_grid_content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
                            <circle cx="17.5" cy="18" r="17.5" fill="#F1EDED" />
                            <g clip-path="url(#clip0_11_23)">
                                <path
                                    d="M14.1521 27.4347C13.6956 27.4347 13.3913 27.2825 13.0869 26.9782L6.54344 20.2825C5.93474 19.6738 5.93474 18.7608 6.54344 18.1521C7.15213 17.5434 8.06517 17.5434 8.67387 18.1521L14.1521 23.6304L27.6956 10.0869C28.3043 9.4782 29.2173 9.4782 29.826 10.0869C30.4347 10.6956 30.4347 11.6086 29.826 12.2173L15.2173 26.9782C14.913 27.2825 14.6087 27.4347 14.1521 27.4347Z"
                                    fill="#AA001F" />
                            </g>
                            <defs>
                                <clipPath id="clip0_11_23">
                                    <rect width="24.1957" height="17.8043" fill="white"
                                        transform="translate(6.08691 9.63037)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p> Kamu Çalışanı, A.Ş. Çalışanı, Askeri Personel gibi meslek gruplarına özel 40%’a varan indirim</p>
                    </div>
        
                    <div class="anatomi_kasko_avantajlar_grid_3 anatomi_kasko_avantajlar_grid_content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
                            <circle cx="17.5" cy="18" r="17.5" fill="#F1EDED" />
                            <g clip-path="url(#clip0_11_23)">
                                <path
                                    d="M14.1521 27.4347C13.6956 27.4347 13.3913 27.2825 13.0869 26.9782L6.54344 20.2825C5.93474 19.6738 5.93474 18.7608 6.54344 18.1521C7.15213 17.5434 8.06517 17.5434 8.67387 18.1521L14.1521 23.6304L27.6956 10.0869C28.3043 9.4782 29.2173 9.4782 29.826 10.0869C30.4347 10.6956 30.4347 11.6086 29.826 12.2173L15.2173 26.9782C14.913 27.2825 14.6087 27.4347 14.1521 27.4347Z"
                                    fill="#AA001F" />
                            </g>
                            <defs>
                                <clipPath id="clip0_11_23">
                                    <rect width="24.1957" height="17.8043" fill="white"
                                        transform="translate(6.08691 9.63037)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>Küçük hasarlarda ücretsiz mini onarım hizmeti</p>
                    </div>
        
                    <div class="anatomi_kasko_avantajlar_grid_4 anatomi_kasko_avantajlar_grid_content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
                            <circle cx="17.5" cy="18" r="17.5" fill="#F1EDED" />
                            <g clip-path="url(#clip0_11_23)">
                                <path
                                    d="M14.1521 27.4347C13.6956 27.4347 13.3913 27.2825 13.0869 26.9782L6.54344 20.2825C5.93474 19.6738 5.93474 18.7608 6.54344 18.1521C7.15213 17.5434 8.06517 17.5434 8.67387 18.1521L14.1521 23.6304L27.6956 10.0869C28.3043 9.4782 29.2173 9.4782 29.826 10.0869C30.4347 10.6956 30.4347 11.6086 29.826 12.2173L15.2173 26.9782C14.913 27.2825 14.6087 27.4347 14.1521 27.4347Z"
                                    fill="#AA001F" />
                            </g>
                            <defs>
                                <clipPath id="clip0_11_23">
                                    <rect width="24.1957" height="17.8043" fill="white"
                                        transform="translate(6.08691 9.63037)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>Peşin fiyatına 8 Taksit imkanı </p>
                    </div>
        
                    <div class="anatomi_kasko_avantajlar_grid_5 anatomi_kasko_avantajlar_grid_content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
                            <circle cx="17.5" cy="18" r="17.5" fill="#F1EDED" />
                            <g clip-path="url(#clip0_11_23)">
                                <path
                                    d="M14.1521 27.4347C13.6956 27.4347 13.3913 27.2825 13.0869 26.9782L6.54344 20.2825C5.93474 19.6738 5.93474 18.7608 6.54344 18.1521C7.15213 17.5434 8.06517 17.5434 8.67387 18.1521L14.1521 23.6304L27.6956 10.0869C28.3043 9.4782 29.2173 9.4782 29.826 10.0869C30.4347 10.6956 30.4347 11.6086 29.826 12.2173L15.2173 26.9782C14.913 27.2825 14.6087 27.4347 14.1521 27.4347Z"
                                    fill="#AA001F" />
                            </g>
                            <defs>
                                <clipPath id="clip0_11_23">
                                    <rect width="24.1957" height="17.8043" fill="white"
                                        transform="translate(6.08691 9.63037)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>Türkiye çapında 1300’e yakın anlaşmalı servislerimizde hiçbir ücret ödemeden tamir imkanı</p>
                    </div>
        
                    <div class="anatomi_kasko_avantajlar_grid_6 anatomi_kasko_avantajlar_grid_content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
                            <circle cx="17.5" cy="18" r="17.5" fill="#F1EDED" />
                            <g clip-path="url(#clip0_11_23)">
                                <path
                                    d="M14.1521 27.4347C13.6956 27.4347 13.3913 27.2825 13.0869 26.9782L6.54344 20.2825C5.93474 19.6738 5.93474 18.7608 6.54344 18.1521C7.15213 17.5434 8.06517 17.5434 8.67387 18.1521L14.1521 23.6304L27.6956 10.0869C28.3043 9.4782 29.2173 9.4782 29.826 10.0869C30.4347 10.6956 30.4347 11.6086 29.826 12.2173L15.2173 26.9782C14.913 27.2825 14.6087 27.4347 14.1521 27.4347Z"
                                    fill="#AA001F" />
                            </g>
                            <defs>
                                <clipPath id="clip0_11_23">
                                    <rect width="24.1957" height="17.8043" fill="white"
                                        transform="translate(6.08691 9.63037)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>Sadece aracınızı değil, taşıdığınız yükleri de full kasko sigortası ile güvence altına alabilirsiniz.
                        </p>
                    </div>
        
                    <a class="anatomi_kasko_avantaj_devaminiGor">
                        <p>Devamını Gör</p>
                        <img src="https://resmim.net/cdn/2024/01/30/Z6gOSH.png" alt="">
                    </a>
                </div>
                <div class="anatomi_kasko_avantaj_devaminiGor_content">
                </div>
            </div>
        `;
        
        const anatomi_kasko_avantaj_stlye = `
        
        <style>
        .anatomi_kasko_avantajlar_container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            flex-direction: column;
            overflow: hidden;
            margin-top: 40px;
        }
        
        .anatomi_kasko_avantajlar_grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-content: center;
            align-items: center;
            gap: 20px;
        }
        
        .anatomi_kasko_avantajlar_grid_content {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 30px;
            border: 1px solid #D9D9D9;
            border-radius: 10px;
            padding: 0px 10px;
            height: 100px;
            width: 400px;
        }
        
        .anatomi_kasko_avantajlar_grid_content p {
            width: 70%;
            font-size: 16px;
        }
        
        .anatomi_kasko_avantaj_devaminiGor {
            transform: translateX(50%);
            border: none;
            background-color: transparent;
            cursor: pointer;
            color: #AA001F;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 6px;
            text-decoration: none;
        }
        
        .anatomi_kasko_avantaj_devaminiGor p {
            font-size: 14px;
            font-weight: 600;
        }
        
        .anatomi_kasko_avantaj_devaminiGor img {
            width: 20px;
            height: 20px;
        }
        
        .anatomi_kasko_avantaj_devaminiGor_content {
            display: flex;
            max-height: 0px;
            transition: max-height 0.5s ease-in-out;
        }
        
        .anatomi_kasko_avantaj_devaminiGor_content.devaminiGor_content_active {
            max-height: 2000px;
            transition: max-height 0.5s ease-in-out;
        }
        
        .anatomi_kasko_avantajlar_container h1 {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 15px 0 32px 0;
            width: 100%;
            font-size: 23px;
            font-weight: 500;
            letter-spacing: -0.5px;
            color: #474749;
            text-align: center;
        }
    
        @media (max-width: 900px) {
            .anatomi_kasko_avantajlar_grid {
                grid-template-columns: repeat(1, 1fr);
            }
            .anatomi_kasko_avantajlar_grid_content {
                width: 100%;
            }
    
            .anatomi_kasko_avantaj_devaminiGor {
                transform: translateX(0%);
    
            }
    
            .anatomi_kasko_avantajlar_container h1 {
                margin: 15px 0 32px 60px;
            }
        }
        </style>
        `;
        
        
        const head = document.querySelector("head");
        const section3 = document.getElementById("section-3");
        const section3h2 = document.querySelector("#section-3 .sub-container h2");
        const section3Sub = document.querySelector("#section-3 .sub-container");
        
        
        
        section3.insertAdjacentHTML("afterbegin", anatomi_kasko_avantaj_html);
        head.insertAdjacentHTML("beforeend", anatomi_kasko_avantaj_stlye);
        
        const devamButton = document.querySelector(".anatomi_kasko_avantaj_devaminiGor");
        const devamContent = document.querySelector(".anatomi_kasko_avantaj_devaminiGor_content");
        const buttonImg = document.querySelector(".anatomi_kasko_avantaj_devaminiGor img");
        
        
        devamButton.addEventListener("click", () => {
            devamContent.classList.toggle("devaminiGor_content_active");
            if (devamContent.classList.contains("devaminiGor_content_active")) {
                buttonImg.src = "https://resmim.net/cdn/2024/01/30/Z6300I.png";
            }
            else {
                buttonImg.src = "https://resmim.net/cdn/2024/01/30/Z6gOSH.png";
            }
        })
        
        devamContent.appendChild(section3Sub);
        
        section3h2.remove();

        
        window.removeEventListener("scroll", scrollHandler);
    }
}

window.addEventListener("scroll", scrollHandler);