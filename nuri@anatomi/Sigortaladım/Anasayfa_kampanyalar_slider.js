if (window.innerWidth < 768) {
    var sliderWidth;
    if (window.innerWidth <= 430 && window.innerWidth > 390) {
        sliderWidth = "350px";
    }else if(window.innerWidth < 390 && window.innerWidth > 375){
        sliderWidth = "300px";
    }else if(window.innerWidth < 375){
        sliderWidth = "250px";
    }else{
        sliderWidth = "300px";
    }

    const a_kampanyalar_style = `
    <style>
        .anatomi_kampanya_slider {
            width: 100vw;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            overflow: hidden;
        }

        .a_campaigns_container {
            position: relative;
            display: flex;
            height: 290px;
            margin-top: 20px;
            gap: 20px;
            margin-left: 10px;
        }

        .a_slide_container {
            display: flex;
            border: 1px solid #c3c3c382;
            gap: 12px;
            transition: transform 1.5s ease-in-out;
            width: ${sliderWidth};
            height: 100%;
        }

        .a_img_container img {
            height: 100% !important;
        }

        .fade {
            animation: fade 1.5s ease-in-out infinite;
        }

        @keyframes fade {

            0%,
            100% {
                opacity: 0.4;
            }

            20%,
            80% {
                opacity: 1;
            }
        }

        .a_text_container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 20px;
            padding: 15px;
            overflow: hidden;
        }

        .a_incele_btn {
            width: 75%;
            text-align: center;
            padding: 10px 8px;
            background: #3074FF;
            color: white;
            border-radius: 5px;
        }

        .a_title {
            font-weight: 600;
            font-size: 18px;
        }

        .campaigns-and-form .title {
            margin: 0 !important;
        }
    </style>
`;

    const a_campaigns_container = document.querySelector(".campaigns-container");
    a_campaigns_container.remove();

    const a_title = document.querySelector(".campaigns-and-form .title");

    const a_kampanyalar_html = `

<div class="anatomi_kampanya_slider">
<div class="a_campaigns_container">

        <div class="a_slide_container">
            <div class="a_img_container">
                <img src="https://images.sigortaladim.com/2023124141543810_504162222-157x316_kasko.png"></img>
            </div>
            <div class="a_text_container">
                <div class="a_title">Migros</div>
                <div class="a_context">
                    Trafik ya da Kasko Sigortası satın alan herkese Migros’tan market alışverişi hediye!
                </div>
                <a class="a_incele_btn"
                    href="https://www.sigortaladim.com/kampanya/sigortaladim-migros-kampanyasi">Hemen İncele</a>
            </div>
        </div>

        <div class="a_slide_container">
            <div class="a_img_container">
                <img src="https://images.sigortaladim.com/2023720144528234_157x316.jpg"></img>
            </div>
            <div class="a_text_container">
                <div class="a_title">D-Expert</div>
                <div class="a_context">
                    sigortaladım.com'dan 5.000 TL ve üzeri kasko ürünü satın aldığında; D-Expert'te geçerli Temel
                    Ekspertiz Paketi hediye!</div>
                <a class="a_incele_btn" href="https://www.sigortaladim.com/kampanya/kasko-ekspertiz-kampanyasi">Hemen
                    İncele</a>
            </div>
        </div>

        <div class="a_slide_container">
            <div class="a_img_container">
                <img src="https://images.sigortaladim.com/202412155936926_turkcell%20157_316%20-%20wp.webp"></img>
            </div>
            <div class="a_text_container">
                <div class="a_title">TURKCELL</div>
                <div class="a_context">
                    Trafik sigortası, kasko yada dask sigortası satın alan TURKCELL’lilere özel m üşterilerine
                    sigortaladım.com'dan market ve akaryakıt çeki kazanma fırsatı.</div>
                <a class="a_incele_btn"
                    href="https://www.sigortaladim.com/kampanya/turkcell-uyelerine-ozel-kampanya">Hemen İncele</a>
            </div>
        </div>

        <div class="a_slide_container">
            <div class="a_img_container">
                <img src="https://images.sigortaladim.com/2023124141521492_157X316_carrefour_kasko.png"></img>
            </div>
            <div class="a_text_container">
                <div class="a_title">Carrefour SA</div>
                <div class="a_context">

                Sigortasını sigortaladım.com’dan alan tüm müşterilerimize CarrefourSA alışveriş çeki hediye ediyoruz.
                    
                </div>
                <a class="a_incele_btn"href="/kampanya/carrefour-hediye-ceki">Hemen
                    İncele</a>
            </div>
        </div>

        <div class="a_slide_container">
            <div class="a_img_container">
                <img src="https://images.sigortaladim.com/2023124141115822_504162219-157x316_opet_kasko.png"></img>
            </div>
            <div class="a_text_container">
                <div class="a_title">OPET</div>
                <div class="a_context">
                    Sigortasını sigortaladım.com’dan alan tüm müşterilerimize CarrefourSA alışveriş çeki hediye
                    ediyoruz.
                </div>
                <a class="a_incele_btn" href="https://www.sigortaladim.com/kampanya/opet-akaryakit-kampanyasi">Hemen
                    İncele</a>
            </div>
        </div>

    </div>

</div>

`;

    a_title.insertAdjacentHTML("afterend", a_kampanyalar_html);

    let slideIndex = 0;
    const slides = document.querySelectorAll(".a_slide_container");

    function showSlides() {
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }

        var translateValue = -105 * slideIndex + "%";

        slides.forEach((slide) => {
            slide.style.transform = "translateX(" + translateValue + ")";
        });

        slideIndex++;
        setTimeout(showSlides, 4000); // 4 saniyede bir otomatik geçiş
    }

    showSlides();

    const a_kampanyalar_head = document.querySelector("head");
    a_kampanyalar_head.insertAdjacentHTML("beforeend", a_kampanyalar_style);


    const deneme = document.querySelector(".a_campaigns_container");


}