const dk_paketler_rd_html = () => {
  const html = `
<section class="anatomi_dk_packages_section uk-container">
<div class="anatomi_explanation_wrapper">
<h2 class="anatomi_explanation_title">Ücretsiz ve Sınırsız e-Fatura</h2>
<p class="anatomi_explanation_text">Siz de Dijital Köprü’ye katılın, QNB eSolutions’ın e-Fatura ve diğer e-Dönüşüm ürünlerine ücret ödemeyin! Üstelik ilk defa başvuran şahıs firmalarına 1 yıllık e-İmza paketi ücretsiz.</p>
<a href="#" class="anatomi_explanation_link">Kampanya Detayı</a>
</div>

<div class="anatomi-packages-container">
    <div class="anatomi-packages-navigation">
        <div class="anatomi-packages-navigation-item navigation-active">
            <h2>Kobilere Özel</h2>
        </div>
        <div class="anatomi-packages-navigation-item">
            <h2>Diğer Firmalar</h2>
        </div>
    </div>
    <div class="anatomi-packages-wrapper">
    <div class="anatomi-packages-item packages-active">
    <h2 class="anatomi-packages-item-title">KOBİ'LERE ÖZEL ÖMÜR BOYU ÜCRETSİZ</h2>
    <a href="#" class="anatomi-packages-item-link">Hemen Ücretsiz Kullanın</a>
    <ul class="anatomi-packages-item-info-list">
    <li class="anatomi-packages-item-info-list-item">
    <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/qnb-tick-icon.png"></img>
    <p>İlk defa başvuran şahıs firmalarına 1 yıllık e-İmza paketi ücretsiz!</p>
    </li>
    <li class="anatomi-packages-item-info-list-item">
    <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/qnb-tick-icon.png"></img>
    <p>Üstelik Sınırsız Kullanım Fırsatı</p>
    </li>
    <li class="anatomi-packages-item-info-list-item">
    <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/qnb-tick-icon.png"></img>
    <p>3 ay içerisinde QNB ile çalışmaya başlayın, ömür boyu ücretsiz devam edin.</p>
    </li>
    </ul>
    <a href="#" class="anatomi-packages-item-detail-link">Detaylı Bilgi</a>
    </div>


    <div class="anatomi-packages-item">
    <h2 class="anatomi-packages-item-title">DİĞER TÜM FİRMALARA ÖZEL ÜCRETSİZ 1000 KONTÖR</h2>
    <a href="#" class="anatomi-packages-item-link">Hemen Ücretsiz Kullanın</a>
    <ul class="anatomi-packages-item-info-list">
    <li class="anatomi-packages-item-info-list-item">
    <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/qnb-tick-icon.png"></img>
    <p>İlk defa başvuran şahıs firmalarına 1 yıllık e-İmza paketi ücretsiz!</p>
    </li>
    <li class="anatomi-packages-item-info-list-item">
    <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/qnb-tick-icon.png"></img>
    <p>Ücretsiz 1000 Kontör ve 1 GB</p>
    </li>
    <li class="anatomi-packages-item-info-list-item">
    <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/images/qnb-tick-icon.png"></img>
    <p>Takvim yılı boyunca ücretsiz!</p>
    </li>
    </ul>
    <a href="#" class="anatomi-packages-item-detail-link">Detaylı Bilgi</a>
    </div>
    </div>
</div>
</section>
    `;
  const targetElement = document.querySelector(
    "body > main > section.uk-section.uk-padding-40-top"
  );
  const element = document.querySelector(".anatomi_dk_packages_section");
  if (targetElement && !element) {
    targetElement.insertAdjacentHTML("afterend", html);
  }
};

const dk_paketler_rd_css = () => {
  const style = `
      <style id="anatomi_dk_paketler_rd_css">    
     #section-2{
        display: none !important;
      }
      .anatomi_dk_packages_section{
        display: flex;
        justify-content: space-between;
      }
      .anatomi_explanation_wrapper{
        width: 45%;
        display: flex;
        flex-direction: column;
        gap: 50px;
      }
      .anatomi_explanation_title{
        font-size: 32px;
        margin: 0px !important;
      }
      .anatomi_explanation_text{
        font-size: 16px;
        margin: 0px !important;
      }
      .anatomi_explanation_link{
        width: fit-content;
        background: linear-gradient(180deg, #a961a5 0, #974192 100%);
        border: 1px solid;
        border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%);
        box-shadow: 0 0 0 1px #974192;
        color: #ffff;
        padding: 15px 40px;
        border-radius: 8px;
        text-decoration: none;
      }
      .anatomi_explanation_link:hover{
        background: linear-gradient(180deg, #974192 0, #a961a5 100%);
        color: #ffff !important;
        text-decoration: none;
      }
      .anatomi-packages-container{
        display: flex;
        flex-direction: column;
        gap: 30px;
        width: 50%;
        align-items: center;
      }
      .anatomi-packages-navigation{
        display: flex;
        width: fit-content;
        border-bottom: 1px solid #80808052;
      }
      .anatomi-packages-navigation-item{
        cursor: pointer;
        transition: all 0.3s ease-in-out;
      }
      .anatomi-packages-navigation-item h2{
        font-size: 16px !important;
        margin-bottom: 0px;
        padding: 10px 20px;
        color: #6B6B6B;
      }
      .anatomi-packages-wrapper{
        display: flex;
        gap: 20px;
        width: 100%;
      }
      .anatomi-packages-item{
        border: 1px solid #80808052;
        border-radius: 8px;
        padding: 20px;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
      }
      .anatomi-packages-item-title{
        font-size: 16px;
        margin-bottom: 0px;
        height: 70px;

      }
      .anatomi-packages-item-link{
        background: linear-gradient(180deg, #a961a5 0, #974192 100%);
        border: 1px solid;
        border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%);
        box-shadow: 0 0 0 1px #974192;
        color: #ffff;
        padding: 15px 5px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
    .anatomi-packages-item-link:hover{
        background: linear-gradient(180deg, #974192 0, #a961a5 100%);
        color: #ffff;
        text-decoration: none;
      }
     .anatomi-packages-item-info-list{
        list-style: none;
        padding: 0px;
        display: flex;
        flex-direction: column;
        gap: 25px;
        
     }
     .anatomi-packages-item-info-list-item{
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 10px;
     }
     .anatomi-packages-item-info-list-item img{ 
        width: 20px;
     }
     .anatomi-packages-item-info-list-item p{
        margin: 0px !important;
 
     }
    .anatomi-packages-item-detail-link{
        display: flex;
        justify-content: center;
        text-decoration: underline;
    }
    .packages-active{
    border: 1px solid #9c4a97;
    transform: translateY(-10px);
    }
    .navigation-active{
        background-color: #a3579f5e;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    .navigation-active h2{
        color: black !important;
    }

    @media (max-width: 960px){
      .anatomi_dk_packages_section{
        flex-direction: column;
        gap: 50px;
      }
      .anatomi_explanation_wrapper{
        width: 100%;
      }
      .anatomi-packages-container{
        width: 100%;
      }
    }
  @media (max-width: 600px) {
  .anatomi_explanation_wrapper{
    gap: 20px;
  }
  .anatomi_explanation_title{
    font-size: 28px;
  }
  .anatomi-packages-wrapper {
    display: flex;
    overflow-x: auto;
    gap: 20px;
    padding-top: 10px;
  }

  .anatomi-packages-item {
    flex: 0 0 65%;   
    scroll-snap-align: start;
  }
  .anatomi-packages-wrapper::-webkit-scrollbar {
    display: none;
  }
  .anatomi-packages-wrapper {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}



      </style>
    `;
  const css = document.querySelector("#anatomi_dk_paketler_rd_css");
  const head = document.querySelector("head");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const dk_paketler_rd_js = () => {
  function scrollActivePackage() {
    const activeItem = document.querySelector(
      ".anatomi-packages-item.packages-active"
    );
    const wrapper = document.querySelector(".anatomi-packages-wrapper");

    if (activeItem && wrapper) {
      activeItem.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  }

  const navigationTitle = document.querySelectorAll(
    ".anatomi-packages-navigation-item"
  );
  const packages = document.querySelectorAll(".anatomi-packages-item");
  navigationTitle.forEach((item) => {
    item.addEventListener("click", () => {
      navigationTitle.forEach((item) => {
        item.classList.remove("navigation-active");
      });
      item.classList.add("navigation-active");
    });
  });
  navigationTitle[0].addEventListener("click", () => {
    packages[0].classList.add("packages-active");
    packages[1].classList.remove("packages-active");
    scrollActivePackage();
  });
  navigationTitle[1].addEventListener("click", () => {
    packages[1].classList.add("packages-active");
    packages[0].classList.remove("packages-active");
    scrollActivePackage();
  });
  packages[0].addEventListener("click", () => {
    navigationTitle[0].classList.add("navigation-active");
    navigationTitle[1].classList.remove("navigation-active");
    packages[0].classList.add("packages-active");
    packages[1].classList.remove("packages-active");
    scrollActivePackage();
  });
  packages[1].addEventListener("click", () => {
    navigationTitle[1].classList.add("navigation-active");
    navigationTitle[0].classList.remove("navigation-active");
    packages[1].classList.add("packages-active");
    packages[0].classList.remove("packages-active");
    scrollActivePackage();
  });
};

const dk_paketler_rd_init = () => {
  dk_paketler_rd_html();
  dk_paketler_rd_css();
  dk_paketler_rd_js();
};

const dk_paketler_rd_condition = () => {
  return true;
};

setInterval(() => {
  if (dk_paketler_rd_condition()) {
    dk_paketler_rd_init();
  }
}, 50);
