const a_kategori_style = `<style>
.product-icon-btn-container.container{
    margin-top: 20px !important;
    margin-bottom: 20px !important;
}
.a_kategori_title{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 60px;
   
}
.a_kategori_btn{
    border: 0.6px solid #BBBBBB;
    border-radius: 5px;
    padding:8px 14px;
    background-color: #fff;
    width: 110px;
    font-size: 16px;
    padding: 15px 0px;
}
.a_kategori_btn.active{
    background-color: #4372F6;
    border:0.6px solid #4372F6;
    color: #fff;

}
.a_kategori_btn:hover{
    background-color: #4372F6;
    border:0.6px solid #4372F6;
    color: #fff;

}
.a_all_container{
    display: flex;
    align-item: center;
    justify-content: center;
    gap: 20px;
}
.a_product_container{
   display: none;
}

.a_product_container.active{
    display: flex;
    align-item: center;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}
.product-icon-btn.moto.motoPopup{
    display: flex !important;
}
.product-icon-btn{
  height: 186px !important;
}
.product-icon-btn.elektrikli{
  height: 186px !important;

}
</style>`;

const a_all_container = document.querySelector(".product-icon-btns.opened");
a_all_container.remove();

const container_kampanya = document.querySelector(
    ".product-icon-btn-container.container"
);

const a_product_html = `
<div class="a_kategori_title">

    <button class="a_kategori_btn arac active">Aracım</button>
    <button class="a_kategori_btn ev">Evim</button>
    <button class="a_kategori_btn sağlık">Sağlığım</button>

</div>

`;
container_kampanya.insertAdjacentHTML("afterbegin", a_product_html);

// Butonları seçme
const buttons = document.querySelectorAll(".a_kategori_btn");

// Her bir buton için tıklama olayını ekleme
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Tüm butonlardan 'active' sınıfını kaldırma
        buttons.forEach((btn) => btn.classList.remove("active"));

        // Tıklanan butona 'active' sınıfını ekleme
        button.classList.add("active");
    });

    // Her bir buton için hover durumu için olay ekleme
    button.addEventListener("mouseover", () => {
        button.classList.add("hovered");
    });

    button.addEventListener("mouseout", () => {
        button.classList.remove("hovered");
    });
});

// ürünler html

const a_products_html = `
<div class="a_all_container">
<div class="a_product_container arac active">
<a href="/trafik-sigortasi" class="product-icon-btn traffic"><span class="left"><span class="text">
Trafik Sigortası
</span></span> <span class="fake-btn">
Teklif Al
</span> <span class="icon"><img src="/Assets/Images/Icon/trafik-new-icon.svg"></span></a>

<a href="/kasko-sigortasi" class="product-icon-btn casco">
<div class="a_avantaj_wording">
<span>Şimdi al,3 ay sonra öde</span>
</div>
<span class="left"><span class="text">
Kasko Sigortası
</span></span> <span class="fake-btn">
Teklif Al
</span> <span class="icon"><img src="/Assets/Images/Icon/kasko-icon.svg"></span></a>          

<a href="/elektrikli-araclar" class="product-icon-btn elektrikli"><span class="a_new">Yeni</span> <span class="left"><span class="text">
Elektrikli Araç Sigortası
</span></span> <span class="fake-btn">
Teklif Al
</span> <span class="icon"><img src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+(15).svg"></span></a>
      

<a href="/ikinciel-arac-garanti-sigortasi" class="product-icon-btn" style="display: flex;"><span class="left"><span class="text">
İkinci El Araç Garanti Sigortası
                    </span></span> <span class="fake-btn">
                    Teklif Al
                </span> <span class="icon"><img src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+48152+(4).svg"></span></a> 

<a href="/imm-sigortasi" class="product-icon-btn" style="display: flex;"><span class="left"><span class="text">
                        İhtiyari Mali Mesuliyet Sigortası
                    </span></span> <span class="fake-btn">
                    Teklif Al
                </span> <span class="icon"><img src="/Assets/Images/Icon/imm-icon.svg"></span></a>                                              
                                            
</div>


<div class="a_product_container ev">
<a href="/dask-sigortasi" class="product-icon-btn dask"><span class="left"><span class="text">
                        DASK Sigortası
                    </span></span> <span class="fake-btn">
                    Teklif Al
                </span> <span class="icon"><img src="/Assets/Images/Icon/icon-house-new.svg"></span></a>


                <a href="/konut-sigortasi" class="product-icon-btn"><span class="left"><span class="text">
                        Konut Sigortası
                    </span></span> <span class="fake-btn">
                    Teklif Al
                </span> <span class="icon">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/yeni_ikonlar_konut.webp" alt="">
                </span></a>

                <a href="/esya-sigortasi" class="product-icon-btn"><span class="left"><span class="text">
                        Esya Sigortası
                    </span></span> <span class="fake-btn">
                    Teklif Al
                </span> <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="52" viewBox="0 0 64 52" fill="none">
                <rect width="64" height="51.7647" fill="url(#pattern0)"/>
                <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_79_3" transform="scale(0.0147059 0.0181818)"/>
                </pattern>
                <image id="image0_79_3" width="68" height="55" xlink:href="data:image/png;base64,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"/>
                </defs>
                </svg>
                </span></a>

</div>
<div class="a_product_container saglık">

<a href="/ozel-saglik-sigortasi" class="product-icon-btn"><span class="left"><span class="text">
Özel Sağlık Sigortası
    </span></span> <span class="fake-btn">
    Teklif Al
</span> <span class="icon"><img src="https://anatomi.s3.eu-north-1.amazonaws.com/yeni_ikonlar_ozel_saglik+1.webp" alt="">
</span></a>

<a href="/tamamlayici-saglik-sigortasi" class="product-icon-btn"><span class="left"><span class="text">
Tamamlayıcı Sağlık Sigortası
    </span></span> <span class="fake-btn">
    Teklif Al
</span> <span class="icon"><img src="https://anatomi.s3.eu-north-1.amazonaws.com/yeni_ikonlar_tamamlayici_saglik+1.webp" alt="">
</span></a>


<a href="/seyahat-saglik-sigortasi" class="product-icon-btn travel"><span class="left"><span class="text">
                        Seyahat Sağlık Sigortası
                    </span></span> <span class="fake-btn">
                    Teklif Al
                </span> <span class="icon"><img src="/Assets/Images/Icon/seyahat-saglik-icon.svg"></span></a>


                <a href="/yabancilara-ozel-saglik-sigortasi" class="product-icon-btn travel"><span class="left"><span class="text">
                Yabancılara Özel Sağlık Sigortası
            </span></span> <span class="fake-btn">
            Teklif Al
        </span> <span class="icon">
        <img src="https://anatomi.s3.eu-north-1.amazonaws.com/yeni_ikonlar_yabanci_saglik+1.webp" alt="">
        </span></a>

        
        <a href="/sagligima-destek-sigortasi" class="product-icon-btn travel"><span class="left"><span class="text">
        Sağlığıma Destek Sigortası
    </span></span> <span class="fake-btn">
    Teklif Al
</span> <span class="icon"><img src="https://anatomi.s3.eu-north-1.amazonaws.com/yeni_ikonlar_sagligima_destek+1.webp" alt=""></span></a> 
</div>
</div>

`;

container_kampanya.insertAdjacentHTML("beforeend", a_products_html);

const aracContainer = document.querySelector(".a_product_container.arac");
const evimContainer = document.querySelector(".a_product_container.ev");
const saglikContainer = document.querySelector(".a_product_container.saglık");

// araclar
document
    .querySelector(".a_kategori_btn.arac")
    .addEventListener("click", function () {
        aracContainer.classList.add("active");
        evimContainer.classList.remove("active");
        saglikContainer.classList.remove("active");
    });

// evim
document
    .querySelector(".a_kategori_btn.ev")
    .addEventListener("click", function () {
        aracContainer.classList.remove("active");
        evimContainer.classList.add("active");
        saglikContainer.classList.remove("active");
    });

// saglik

document
    .querySelector(".a_kategori_btn.sağlık")
    .addEventListener("click", function () {
        aracContainer.classList.remove("active");
        evimContainer.classList.remove("active");
        saglikContainer.classList.add("active");
    });

const a_head_kategori = document.querySelector("head");
a_head_kategori.insertAdjacentHTML("beforeend", a_kategori_style);

