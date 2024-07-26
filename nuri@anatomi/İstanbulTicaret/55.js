// v1
/*
const anatomi_kategori_style = `
<style>
.swiper_container ul {
    margin-top: 72px;
    display: grid;
    list-style: none;
    gap: 10px;
    overflow-y: hidden;
    grid-template-columns: repeat(3, 1fr);
    width: fit-content;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

.swiper_container ul li {
    margin: 0 auto;
    justify-self: center;
    width: min-content;
    align-self: center;
}

.swiper_container a {
    border: 1px solid #D9D9D9;
    padding: 7px 10px;
    color: #000;
    border-radius: 3px;
    width: 95px;
    display: inline-block;
    text-align: center;
}


@media (max-width: 380px) {
    .swiper_container a {
        width: 80px;
    }
}

@media (max-width: 320px) {
    .swiper_container a {
        width: 65px;
    }
}
</style>
`;

const anatomiHead = document.querySelector("head");
anatomiHead.insertAdjacentHTML("beforeend", anatomi_kategori_style);

const swiper_container_a = document.querySelectorAll(".swiper_container a ");

swiper_container_a.forEach((a) => {
    if (a.innerText === "Tümünü gör") {
        a.style.color = "#50B649";
        a.style.fontWeight = "700";
    }
});

*/

// v2
/*
const anatomi_kategori_style = `
<style>
.swiper_container ul {
    margin-top: 72px;
    display: grid;
    list-style: none;
    gap: 10px;
    overflow-y: hidden;
    grid-template-columns: repeat(3, 1fr);
    width: fit-content;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

.swiper_container ul li {
    margin: 0 auto;
    justify-self: center;
    width: min-content;
    align-self: center;
}

.swiper_container a {
    border: 1px solid #D9D9D9;
    padding: 20px 10px;
    color: #000;
    border-radius: 3px;
    width: 95px;
    display: inline-block;
    text-align: center;
}


@media (max-width: 380px) {
    .swiper_container a {
        width: 80px;
    }
}

@media (max-width: 320px) {
    .swiper_container a {
        width: 65px;
    }
}
</style>
`;

const anatomiHead = document.querySelector("head");
anatomiHead.insertAdjacentHTML("beforeend", anatomi_kategori_style);

const swiper_container_a = document.querySelectorAll(".swiper_container a ");

swiper_container_a.forEach((a) => {
    if (a.innerText === "Tümünü gör") {
        a.style.display = "none";
    }
});
*/

// v3

const anatomi_kategori_style = `
<style>
.swiper_container ul {
    margin-top: 72px;
    display: flex;
    list-style: none;
    gap: 10px;
    overflow-y: hidden;
    width: fit-content;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
    overflow: scroll;
    width: 100%;
}

.swiper_container ul li {
    margin: 0 auto;
    justify-self: center;
    width: min-content;
    align-self: center;
    border: 1px solid #D9D9D9;
    border-radius: 3px;
}

.swiper_container a {
    border: none !important;
    padding: 20px 10px;
    color: #000;
    width: 95px;
    display: inline-block;
    text-align: center;
}

.anatomi_kategori_image {
    width: 100%;
    height: 70px;
    object-fit: contain;
}


@media (max-width: 380px) {
    .swiper_container a {
        width: 80px;
    }
}

@media (max-width: 320px) {
    .swiper_container a {
        width: 65px;
    }
}
</style>
`;

const anatomiHead = document.querySelector("head");
anatomiHead.insertAdjacentHTML("beforeend", anatomi_kategori_style);

const swiper_container_a = document.querySelectorAll(".swiper_container a");

swiper_container_a.forEach((a) => {
    if (a.innerText === "Tümünü gör") {
        a.style.display = "none";
    }
});


const swiper_container_li = document.querySelectorAll(".swiper_container li");

swiper_container_li.forEach((li,idx) => {
    const liImage = document.createElement("img");
    liImage.classList.add("anatomi_kategori_image");
    li.insertAdjacentElement("afterbegin", liImage);

    if(swiper_container_a[idx].innerText === "Ayakkabı"){
        liImage.src = "https://www.istanbulticaret.com/alpha-s2-fiberglas-burun-is-guvenligi-ayakkabisi-2099685-63-K.jpg";
    }

    if(swiper_container_a[idx].innerText === "Bot"){
        liImage.src = "https://www.istanbulticaret.com/maxeo-beta-s3-fiberglas-burunlu-is-botu-6107-2102093-61-O.jpg";
    }

    if(swiper_container_a[idx].innerText === "Çizme"){
        liImage.src = "https://www.istanbulticaret.com/palali-s4-pvc-celik-burunlu-emniyet-cizmesi-6330-2102025-63-K.png";
    }

    if(swiper_container_a[idx].innerText === "Baretler"){
        liImage.src = "https://www.istanbulticaret.com/3m-g3000cuv-gp-solaris-vidasiz-baret-2100308-56-K.webp";
    }

    if(swiper_container_a[idx].innerText === "Kaynak Başlığı"){
        liImage.src = "https://www.istanbulticaret.com/3m-169100-bas-ve-bogaz-icin-baslik-2100340-55-K.jpg";
    }

    if(swiper_container_a[idx].innerText === "Siperlik"){
        liImage.src = "https://www.istanbulticaret.com/univet-605010000-b…bilir-yuz-koruyucu-siper-basligi-2099886-61-K.jpg";
    }

    if(swiper_container_a[idx].innerText === "Vizor"){
        liImage.src = "	https://www.istanbulticaret.com/3m-523000-9100-fx-yedek-vizor-plakasi-2099190-55-K.jpg";
    }

    if(swiper_container_a[idx].innerText === "Kimyasal Eldivenler"){
        liImage.src = "https://www.istanbulticaret.com/ansell-activarmr-2…direncli-gida-uyumlu-is-eldiveni-2099845-61-K.jpg";
    }

    if(swiper_container_a[idx].innerText === "Kullan At Eldivenler"){
        liImage.src = "https://www.istanbulticaret.com/ansell-edge-82-133…mlik-nitril-eldiven-300-adetkutu-2100892-59-K.jpg";
    }

    if(swiper_container_a[idx].innerText === "Mekanik Eldivenler"){
        liImage.src = "https://www.istanbulticaret.com/ansell-activarmr-h…ekanik-ve-yag-tutmaz-is-eldiveni-2099967-59-K.jpg";
    }

    if(swiper_container_a[idx].innerText === "Termal Eldivenler"){
        liImage.src = "https://www.istanbulticaret.com/ansell-activarm-28…yanikli-agir-mekanik-is-eldiveni-2099161-61-K.jpg";
    }



    if(swiper_container_a[idx].innerText === "Tümünü gör"){
        li.style.display = "none";
    }
});
