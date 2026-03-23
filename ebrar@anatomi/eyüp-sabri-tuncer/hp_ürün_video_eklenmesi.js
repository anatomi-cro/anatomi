const hp_urun_video_eklenmesi_html = () => {
  const html = `
  <div class="anatomi_left_area">
  <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/est-anasayfa-urun-eklenmesi-left-area.png"/>
  </div>
  <div class="anatomi_right_area">
  <p class="anatomi_cok_satan_urunler_title">Bu Haftanın Çok Satan Ürünleri</p>
  <div class="anatomi_cok_satan_urunler_slider_container"></div>
  </div>
  `;
  const videoArea = document.querySelector(
    "#boshtml_10 > div > div > div > div.blok > div > div",
  );
  const element = document.querySelector(".anatomi_left_area");
  if (!element) {
    videoArea.insertAdjacentHTML("beforeend", html);
  }
};

const hp_urun_video_eklenmesi_css = () => {
  const style = `

  <style id="hp_urun_video_eklenmesi_css">
  .videoContainer{
    padding: 60px 0 60px !important;
  }
  .leftArea , .rightArea{
    display: none !important;
  }
  .anatomi_left_area{
    width: 50%;
  }
.anatomi_right_area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 70%;
    background-color: white;
    border-radius: 8px;
}
  .anatomi_left_area img{
    width: 330px;
    border-radius: 8px;
  }

 .anatomi_cok_satan_urunler_slider_container{
  overflow: hidden;
  width: 100%;
  position: relative;
}

.anatomi_cok_satan_urunler_title{
  font-size: 30px;
  font-weight: bold;
  color: #2D4736;
}
.slider-track{
  display: flex;
  transition: transform 0.5s ease;
}

.product-card {
  flex: 0 0 33.3333%;
    flex-shrink: 0;
    position: relative;
    padding: 15px;
    background: #fff;
    transition: 0.3s;
}
.product-card h4{
 height: 30px;
}

.product-card img{
  width: 100%;
  height: 293px;
  border-radius: 8px;
}

.product-fav {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
}

.product-fav a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  cursor: pointer;
  text-decoration: none;
}

.product-fav a::before {
  content: "♡";
  font-size: 18px;
  color: #2D4736;
  transition: 0.3s ease;
}

.product-fav a:hover::before {
  content: "♥";
  color: #2D4736;
  transform: scale(1.2);
}

.product-discount{
  background: #2D4736;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 5px 8px;
  border-radius: 10px;
  margin-left: 8px;
}

.product-price{
  margin: 10px  0 20px 0;
}

.old-price{
  text-decoration: line-through;
  color: #999;
  margin-right: 8px;
}

.new-price{
  color: #2D4736;
  font-weight: bold;
}

.product-btn{
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  background: #2D4736;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

@media screen and (max-width: 1160px) {
  .product-card {
    flex: 0 0 50%;
  }
  .anatomi_right_area{
    width: 65%;
  }
  
}

@media screen and (max-width: 1440px) {
  .anatomi_left_area img{
    width: 310px;
  }
}

  </style>



  `;
  const head = document.querySelector("head");
  const css = document.querySelector("#hp_urun_video_eklenmesi_css");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const hp_urun_video_eklenmesi_js = () => {
  const products = [
    {
      id: 1,
      name: "Klasik Limon Kolonyası 5 lt - Bag in Box",
      image: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/est-urun1.jpg",
      link: "https://www.eyupsabrituncer.com/limon-kolonyasi-5-lt-bag-in-box-endustriyel-736",
      oldPrice: "",
      newPrice: "1190,00",
      fav: "productFavoritesProcess('44bfb5354e284638b9ed8ad04eb99a39',-1,2,736,746,1,this)",
    },
    {
      id: 2,
      name: "Klasik Limon Kolonyası 1 lt - Koruma Kilitli Kapak",
      image: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/est-urun2.webp",
      link: "https://www.eyupsabrituncer.com/klasik-limon-kolonyasi-1-lt-koruma-kilitli-kapak",
      oldPrice: "",
      newPrice: "260,00",
      fav: "productFavoritesProcess('cd7009722db249aa84ca02231af9f952',-1,2,953,1017,1,this)",
    },
    {
      id: 3,
      name: "Doğal Zeytinyağlı Şampuan 600 ml",
      image: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/est-urun3.webp",
      link: "https://www.eyupsabrituncer.com/dogal-zeytinyagli-sampuan-600-ml-pe-sise",
      oldPrice: "",
      newPrice: "220,00",
      fav: "productFavoritesProcess('8016f8f751e540c5aeb5cebe8e764a67',-1,2,515,525,1,this)",
    },
    {
      id: 4,
      name: "Hawaii Ananas Kolonyalı Mendil 150'li (Küçük Boy)",
      image: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/est-urun4.webp",
      link: "https://www.eyupsabrituncer.com/hawaii-ananas-kolonyali-mendil-150li-kucuk-boy",
      oldPrice: "",
      newPrice: "385,00",
      fav: "productFavoritesProcess('fce5282023b44cc5a3de6ada8261de0a',-1,2,1051,1115,1,this)",
    },
    {
      id: 5,
      name: "Doğal Misvak Özlü Diş Macunu 90 ml",
      image: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/est-urun5.webp",
      link: "https://www.eyupsabrituncer.com/dogal-misvak-ozlu-dis-macunu-90-ml",
      oldPrice: "",
      newPrice: "155,00",
      fav: "productFavoritesProcess('7fcfe08d9e7b4daf97437ab7fbd9cbfd',-1,2,1179,1255,1,this)",
    },
    {
      id: 6,
      name: "Ayvalık Zeytin Çiçeği 4'lü Kişisel Bakım Seti",
      image: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/est-urun6.webp",
      link: "https://www.eyupsabrituncer.com/ayvalik-olive-blossom-4-lu-hediye-setleri",
      oldPrice: "",
      newPrice: "950,00",
      fav: "productFavoritesProcess('dc310cb37fd44a6f86a53f58100b6424',-1,2,517,527,1,this)",
    },
    {
      id: 7,
      name: "Gül Suyu 350 ml",
      image: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/est-urun7.webp",
      link: "https://www.eyupsabrituncer.com/gul-suyu-350-ml",
      oldPrice: "",
      newPrice: "105,00",
      fav: "productFavoritesProcess('c3077c1f3f564e388c1f2c52f07804ab',-1,2,412,422,1,this)",
    },
    {
      id: 8,
      name: "Japon Kiraz Çiçeği Doğal Zeytinyağlı El ve Vücut Losyonu 280 ml",
      image: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/est-urun8.webp",
      link: "https://www.eyupsabrituncer.com/dogal-zeytinyagli-japon-kiraz-cicegi-el-ve-vucut-losyonu-280-ml",
      oldPrice: "",
      newPrice: "185,00",
      fav: "productFavoritesProcess('f516e94fddf648d08213cb5e3b20803b',-1,2,1119,1183,1,this)",
    },
    {
      id: 9,
      name: "Gizli Bahçe Yeni Nesil Oda Spreyi Bahar Tazeliği 5 lt - Bag in Box",
      image: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/est-urun9.webp",
      link: "https://www.eyupsabrituncer.com/gizli-bahce-yeni-nesil-oda-spreyi-bahar-tazeligi-5-lt-bag-in-box-endustriyel",
      oldPrice: "",
      newPrice: "1185,00",
      fav: "productFavoritesProcess('820129d2182b444bb98190c47fe43e94',-1,2,816,826,1,this)",
    },
    {
      id: 10,
      name: "Doğal Zeytinyağlı Saç Kremi 600 ml",
      image: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/est-urun10.webp",
      link: "https://www.eyupsabrituncer.com/dogal-zeytinyagli-sac-kremi-600-ml-pe-sise",
      oldPrice: "",
      newPrice: "265,00",
      fav: "productFavoritesProcess('d07312d11067445eaa443985ad9d17c6',-1,2,421,431,1,this)",
    },
    {
      id: 11,
      name: "Okyanus Doğal Zeytinyağlı Sıvı Sabun 1.5 lt",
      image: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/est-urun11.webp",
      link: "https://www.eyupsabrituncer.com/dogal-zeytinyagli-sivi-sabun-okyanus-1-5-lt-pet-sise",
      oldPrice: "",
      newPrice: "275,00",
      fav: "productFavoritesProcess('237373e3a61544e2a5ba3464635ec243',-1,2,388,398,1,this)",
    },
  ];

  const container = document.querySelector(
    ".anatomi_cok_satan_urunler_slider_container",
  );

  if (!container || container.querySelector(".slider-track")) return;

  container.innerHTML = `<div class="slider-track"></div>`;
  const track = container.querySelector(".slider-track");

  products.forEach((product) => {
    const card = `
      <div class="product-card">
        <div class="product-fav"><a onclick="${product.fav}"></a></div>
        <img src="${product.image}" />
        <h4>${product.name}</h4>
        <div class="product-price">
          <span class="new-price">₺${product.newPrice}</span>
        </div>
        <a href="${product.link}" class="product-btn">İncele</a>
      </div>
    `;

    track.insertAdjacentHTML("beforeend", card);
  });

  let index = 0;
  const visibleCount = 3;
  const total = products.length;

  setInterval(() => {
    index++;

    if (index > total - visibleCount) {
      index = 0;
    }

    const card = track.querySelector(".product-card");
    const cardWidth = card.offsetWidth;

    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }, 2500);
};

const hp_urun_video_eklenmesi_init = () => {
  hp_urun_video_eklenmesi_html();
  hp_urun_video_eklenmesi_css();
  hp_urun_video_eklenmesi_js();
};

const hp_urun_video_eklenmesi_condition = () => {
  return true;
};

setInterval(() => {
  if (hp_urun_video_eklenmesi_condition()) {
    hp_urun_video_eklenmesi_init();
  }
}, 50);
