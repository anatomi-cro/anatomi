const paketler_redesign_html = () => {
  const html = `
 <div class="anatomi-packages-container">
      <div class="anatomi-packages-content">
        <div class="anatomi-packages-title">
          <h1><span>e-MM</span> ve diğer e-Dönüşüm Paketleri</h1>
        </div>

        <div class="anatomi-packages-navigation">
          <div
            class="anatomi-packages-navigation-item"
            onclick="anatomiPackagesNavigation(this)"
          >
            <h2>Dijital Köprü</h2>
          </div>
          <div
            class="anatomi-packages-navigation-item navigation-active"
            onclick="anatomiPackagesNavigation(this)"
          >
            <h2>Başlangıç</h2>
          </div>
          <div
            class="anatomi-packages-navigation-item"
            onclick="anatomiPackagesNavigation(this)"
          >
            <h2>Esnek Paketler</h2>
          </div>
        </div>

        <div class="anatomi-packages-wrapper">
          <div
            class="anatomi-packages-card"
            id="anatomi-packages-card-1"
            onclick="clickCard(this)"
          >
            <div class="card-time-selection">
              <div class="selection-switch" onclick="anatomiToggleSwitch(this)">
                <div class="selection-circle"></div>
              </div>
              <p class="selection-text">6 Aylık</p>
            </div>
            <div class="card-title-group">
              <h2 class="card-name">Dijital Köprü</h2>
              <h2 class="card-price">Ömür Boyu Ücretsiz</h2>
            </div>

            <a href="https://www.qnbesolutions.com.tr/dijital-kopru?utm_source=efatura&utm_medium=cro&utm_campaign=paketler" class="card-submit-button card-submit-button-dk">
              <span>Hemen Başlayın</span>
            </a>

            <div class="card-content"></div>

          </div>

          <div class="anatomi-packages-card card-active" id="anatomi-packages-card-2" onclick="clickCard(this)">
            <div class="card-time-selection">
              <div class="selection-switch" onclick="anatomiToggleSwitch(this)">
                <div class="selection-circle"></div>
              </div>
              <div class="selection-text">6 Aylık</div>
            </div>
            <div class="card-title-group">
              <h2 class="card-name">Başlangıç</h2>
              <h2 class="card-price">Ücretsiz</h2>
            </div>
            <a href="https://www.qnbesolutions.com.tr/ucretsiz-deneme?packageId=1094&utm_source=qnbesolutions&utm_medium=cro&utm_campaign=packages"
                  data-id="baslangıç_TK"
      data-name="başlangıç paketi"
      data-affiliation="QNB eSolutions"
      data-coupon="0"
      data-discount="0"
      data-brand="QNB eSolutions"
      data-category="e-Dönüşüm Kontör Paketleri"
      data-category2="12 Aylık Paketler"
      data-category3="HOŞ GELDİNİZ PAKETLERİ"
      data-type="Satın Al"
      data-list_id="Ürünler"
      data-list_name="e-Dönüşüm Kontör Paketleri"
      data-variant="Başlangıç"
      data-currency="TRY"
      data-price="0"
      data-quantity="1"
      onclick="anatomi_pushToDataLayer(this)"
            " class="card-submit-button card-submit-button-baslangic">
              <span>Hemen Başlayın</span>
            </a>

            <div class="card-content"></div>

          </div>

          <div class="anatomi-packages-card" id="anatomi-packages-card-3" onclick="clickCard(this)">
            <div class="card-time-selection">
              <div class="selection-switch" onclick="anatomiToggleSwitch(this)">
                <div class="selection-circle"></div>
              </div>
              <div class="selection-text">6 Aylık</div>
            </div>
            <div class="card-title-group">
              <h2 class="card-name">
                <select
                  name="kendinSec"
                  id="kendinSec"
                  onchange="oldKontorSelect(this); anatomiSelectKontor(this)"
                >
                  <option value="secim1">50 Kontör</option>
                  <option value="secim2" selected>100 Kontör</option>
                  <option value="secim3">250 Kontör</option>
                  <option value="secim4">500 Kontör</option>
                  <option value="secim5">1.000 Kontör</option>
                  <option value="secim6">2.500 Kontör</option>
                  <option value="secim7">5.000 Kontör</option>
                  <option value="secim8">10.000 Kontör</option>
                </select>
                <span class="unitPrice-kontor">12,60₺ / Kontör</span>
              </h2>
              <h2 class="card-price">1.585₺</h2>
            </div>

            <a class="card-submit-button card-submit-button-esnek" onclick="oldButtonClick(this)">
              <span>Hemen Başlayın</span>
            </a>

            <div class="card-content"></div>

          </div>
        </div>
      </div>
    </div>
      `;

  const container = document.querySelector(
    "body > main > div.uk-position-relative.notranslate > section"
  );
  const element = document.querySelector(".anatomi-packages-container");
  if (!element && container) {
    container.insertAdjacentHTML("afterend", html);
  }
};

const paketler_redesign_css = () => {
  const style = `
  <style id="anatomiPackages-css">
      .anatomi-packages-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        margin: 50px 0;
        overflow: hidden;
      }

      .anatomi-packages-content {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 30px;
      }

      .anatomi-packages-title {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      .anatomi-packages-title h1 {
        font-size: 32px;
        font-weight: 700;
        color: #000;
        text-align: center;
        margin: 0;
        padding: 0;
      }

      .anatomi-packages-title h2 {
        font-size: 20px;
        font-weight: 700;
        color: #000;
        text-align: center;
        margin: 0;
        padding: 0;
      }

      .anatomi-packages-title h1 span {
        color: #a3579f;
      }

      .anatomi-packages-navigation {
        width: 100%;
        height: 100%;
        display: none;
        justify-content: center;
        align-items: center;
      }

      .anatomi-packages-navigation-item {
        padding: 10px 20px;
        border-bottom: 1px solid #e4e4e7;
        cursor: pointer;
      }

      .anatomi-packages-navigation-item.navigation-active {
        background-color: #a3579f20;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom: 1px solid #a3579f;
      }

      .anatomi-packages-navigation-item h2 {
        font-size: 16px;
        font-weight: 600;
        color: #000;
        margin: 0;
        padding: 0;
      }

      .anatomi-packages-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 20px;
        gap: 20px;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
      }

      .anatomi-packages-card {
        position: relative;
        width: 310px;
        min-height: fit-content;
        max-height: fit-content;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        border-radius: 8px;
        border: 1px solid #e4e4e7;
        flex-shrink: 0;
        transition: all 0.3s ease-in-out;
        padding: 40px 20px 20px 20px;
        gap: 10px;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
      }

      #anatomi-packages-card-3 {
        padding-top: 35px !important;
      }

      #anatomi-packages-card-3 .card-time-selection {
      display: flex !important;
      }

      .anatomi-packages-card.card-detail-active {
        max-height: 5000px;
        transition: max-height 0.3s ease-in-out;
      }

      .anatomi-packages-card.card-active {
        border: 1px solid #a3579f;
        transform: scale(1.04);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease-in-out;
      }

      .card-title-group {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        height: fit-content;
        gap: 10px;
      }

      .card-name {
        font-size: 30px;
        font-weight: 700;
        color: #003dbe;
        padding: 0px;
        margin: 0px;
      }

      .card-name select {
        font-size: 28px;
        font-weight: 700;
        color: #003dbe;
        background-color: transparent;
        border: 1px solid #c6c6c64e;
        cursor: pointer;
        padding: 5px 5px;w
        border-radius: 8px;
        font-family: auto
      }
      .card-name select option {
        font-size: 18px;
        font-weight: 400;
        color: #6b6b6b;
        font-family: auto
      }

      .card-name select:focus {
        outline: none;
      }

      .card-name select:focus-visible {
        outline: none;
      }

      .card-name select option:focus {
        outline: none;
      }

      .card-name select option:focus-visible {
        outline: none;
      }

      #anatomi-packages-card-3 .card-name {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }

      #anatomi-packages-card-3 .card-title-group {
      gap: 10px;}

      .anatomi-packages-card-3 .card-price {
      font-size:28px
      }

      .card-price {
        font-size: 30px;
        font-weight: bold;
        color: #000;
        padding: 0px;
        margin: 0px;
      }

      .unitPrice-kontor {
        font-size: 16px;
        font-weight: 400;
        color: #6b6b6b;
        margin-top: 10px;
        padding: 0px;
        margin: 0px;
        display: none;
      }

      .card-submit-button {
        width: 90%;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #a3579f;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        margin: 0 auto;
        flex-shrink: 0;
        text-decoration: none;
        padding: 0px;
        margin: 0px;
        text-decoration: none;
      }

      .card-submit-button:hover {
      text-decoration: none ! important;
      }

      .card-submit-button span {
        font-size: 18px;
        font-weight: 600;
        color: #fff;
        text-decoration: none;
        padding: 0px;
        margin: 0px;
      }

      .card-content {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 20px;
        margin-top: 10px;
      }

      .card-content-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 7px;
        position: relative;
      }


      .card-content-item p{
        font-size: 15px;
        font-weight: 500;
        color: #000;
        padding: 0px;
        margin: 0px;
      }

      .card-content-item img {
        width: 20px;
        height: 20px;
        object-fit: contain;
      }

      .card-item-info {
        position: relative;
        transition: all 0.3s ease-in-out;
      }

      .card-item-info:hover p {
        display: flex;
        transition: all 0.3s ease-in-out;
        margin: 0;
        padding: 0;
      }

      .card-item-info p {
        position: absolute;
        background-color: #fff;
        width: 180px;
        height: 80px;
        top: -100px;
        left: 50%;
        transform: translateX(-50%);
        padding: 20px;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        border: 1px solid #e4e4e7;
        border-radius: 10px;
        display: none;
        margin: 0px;
        padding: 0px;
      }

      .card-item-info span {
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-top: 15px solid #e4e4e7;
      }

      .card-badge {
        background-color: #a3579f20;
        font-size: 10px;
        font-weight: 400;
            border: 1px solid #a3579f;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    padding: 2px 5px !important;
        border-radius: 6px;
        text-align: center;
        font-size: 14px !important;
        align-self: center;
      }

      .margin-left {
        margin-left: 31px !important;
      }

      .card-time-selection {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        top: 20px;
        right: 20px;
        gap: 5px;
        display: none;
      }

      .selection-switch {
        width: 40px;
        height: 20px;
        background-color: #e4e4e7;
        border-radius: 50px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
      }

      .selection-circle {
        width: 15px;
        height: 15px;
        background-color: #fff;
        border-radius: 50%;
        margin: 2px;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
      }
      .selection-switch.switch-active {
        background-color: #a3579f;
      }
      .selection-switch.switch-active .selection-circle {
        transform: translateX(20px);
        background-color: #fff;
        transition: all 0.3s ease-in-out;
      }

      .selection-text {
        font-size: 12px;
        font-weight: 600;
        color: #000;
      }

      .card-more-detail {
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border: none;
        cursor: pointer;
        margin: 0 auto;
        color: #a3579f;
        border-bottom: 1px solid #a3579f;
        margin-top: 20px;
      }

      .card-content-more-detail {
        width: 100%;
        height: fit-content;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 20px;
        display: none;
      }

      .card-content-more-detail.card-content-more-detail-active {
        display: flex;
      }

      .card-item-info-text {
          position: absolute;
      top: 100%;
      right: 0%;
    background: #fff;
    border: 1px solid #00000042;
    padding: .3rem .5rem !important;
    border-radius: 10px;
    font-size: 13px !important;
    display: none;
    z-index: 99;
      }

      #anatomi-packages-card-3 > div.card-content > div:nth-child(8) .card-item-info-text {
      top: 100%;
      right: 0%;
      }

      .card-item-info-text-active {
        display: block !important;
      }

      .anatomi-kazananlar-link {
      text-decoration: underline;
      color: #a3579f !important;
      }

      .anatomi-kazananlar-link span {
      text-decoration: none !important;
      color: #000 !important;
      }


      @media screen and (max-width: 1440px) {
        .anatomi-packages-wrapper {
          justify-content: center;
        }

        .anatomi-packages-card {
          width: 290px;
          min-height: fit-content;
          max-height: fit-content;
        }
      }

      @media screen and (max-width: 1200px) {
        .anatomi-packages-wrapper {
          justify-content: flex-start;
        }

        .anatomi-packages-card {
          min-height: fit-content;
          max-height: fit-content;
        }
      }

      @media screen and (max-width: 768px) {

      .anatomi-packages-navigation {
        display: flex;
      }

      .anatomi-packages-wrapper {
        width: 90%;
      }

        .anatomi-packages-navigation-item {
          padding: 10px;
          border-bottom: 1px solid #e4e4e7;
          cursor: pointer;
        }

        .anatomi-packages-card {
          width: 300px;
          min-height: fit-content;
          max-height: fit-content;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          border-radius: 8px;
          border: 1px solid #e4e4e7;
          flex-shrink: 0;
          transition: all 0.3s ease-in-out;
        }
      }

      @media screen and (max-width: 480px) {
        .anatomi-packages-navigation-item h2 {
          font-size: 16px;
        }

        .anatomi-packages-card {
          width: 300px;
          min-height: fit-content;
          max-height: fit-content;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          border-radius: 8px;
          border: 1px solid #e4e4e7;
          flex-shrink: 0;
          transition: all 0.3s ease-in-out;
        }

        .card-title-group {
          gap: 20px;
        }

        #kendinSec {
          font-size: 22px;
        }

        .card-name {
          font-size: 24px;
        }

        .card-price {
          font-size: 30px;
        }

        .card-submit-button span {
          font-size: 18px;
        }

        .card-more-detail {
          font-size: 12px;
        }

        .selection-text {
          font-size: 14px;
        }

        .card-content-item p {
          font-size: 16px;
        }

        .card-content-item img {
          width: 15px;
          height: 15px;
        }

        .card-item-info p {
          font-size: 12px;
        }

        .card-item-info span {
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid #e4e4e7;
        }

        .card-badge {
          font-size: 12px !important;
          padding: 1px 5px;
        }

        .card-name select {
          font-size: 14px;
        }

        .unitPrice-kontor {
          font-size: 12px;
        }
      }

      @media screen and (max-width: 375px) {
        .anatomi-packages-navigation-item h2 {
          font-size: 14px;
        }

        .anatomi-packages-card {
          width: 290px;
          min-height: fit-content;
          max-height: fit-content;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          border-radius: 8px;
          border: 1px solid #e4e4e7;
          flex-shrink: 0;
          transition: all 0.3s ease-in-out;
        }

        .card-title-group {
          gap: 20px;
        }

        #kendinSec {
          font-size: 22px;
        }

        .card-name {
          font-size: 20px;
        }

        .card-price {
          font-size: 26px;
        }

        .card-submit-button {
          height: 35px;
        }

        .card-submit-button span {
          font-size: 16px;
        }

        .card-more-detail {
          font-size: 12px;
        }

        .selection-text {
          font-size: 13px;
        }

        .selection-switch {
          width: 40px;
          height: 20px;
        }

        .selection-circle {
          width: 17px;
          height: 18px;
        }

        .card-content {
          gap: 15px;
        }

        .card-content-item p {
          font-size: 16px;
        }

        .card-content-item img {
          width: 15px;
          height: 15px;
        }

        .card-item-info p {
          font-size: 12px;
        }

        .card-item-info span {
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid #e4e4e7;
        }

        .card-badge {
          font-size: 10px !important;
          padding: 1px 5px;
        }

        .card-name select {
          font-size: 14px;
        }

        .unitPrice-kontor {
          font-size: 12px;
        }
      }

      @media screen and (max-width: 320px) {
        .anatomi-packages-navigation-item h2 {
          font-size: 11px;
        }

        .anatomi-packages-card {
          width: 250px;
          min-height: fit-content;
          max-height: fit-content;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          border-radius: 8px;
          border: 1px solid #e4e4e7;
          flex-shrink: 0;
          transition: all 0.3s ease-in-out;
        }

        #kendinSec {
          font-size: 22px;
        }

        .card-name {
          font-size: 16px;
        }

        .card-price {
          font-size: 20px;
        }

        .card-submit-button {
          height: 35px;
        }

        .card-submit-button span {
          font-size: 14px;
        }

        .card-more-detail {
          font-size: 12px;
        }

        .selection-text {
          font-size: 10px;
        }

        .selection-switch {
          width: 30px;
          height: 15px;
        }

        .selection-circle {
          width: 12px;
          height: 12px;
        }

        .card-content-item p {
          font-size: 12px;
        }

        .card-content-item img {
          width: 15px;
          height: 15px;
        }

        .card-item-info p {
          font-size: 12px;
        }

        .card-item-info span {
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid #e4e4e7;
        }

        .card-badge {
          font-size: 8px;
          padding: 1px 5px;
        }

        .card-name select {
          font-size: 12px;
        }

        .unitPrice-kontor {
          font-size: 12px;
        }
      }
    </style>
      `;

  const head = document.querySelector("head");
  const styleSheet = document.querySelector("#anatomiPackages-css");
  if (!styleSheet) {
    head.insertAdjacentHTML("beforeend", style);
  }
};

const paketler_redesign_js = () => {
  const contents = [
    {
      cardId: "anatomi-packages-card-1",
      title: "Dijital Köprü",
      price: "Ucretsiz",
      monthPrice: "Ucretsiz",
      yearPrice: "Ucretsiz",
      monthURL:
        " https://www.qnb.com.tr/dijitalkopru/dijital-cozumlerimiz/e-donusum-basvuru-formu?p=QNBESOLUTIONS&utm_source=qnbesolutions&utm_medium=cro&utm_campaign=packages&utm_term=dk",
      yearURL:
        " https://www.qnb.com.tr/dijitalkopru/dijital-cozumlerimiz/e-donusum-basvuru-formu?p=QNBESOLUTIONS&utm_source=qnbesolutions&utm_medium=cro&utm_campaign=packages&utm_term=dk",
      content: [
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "QNB’nin KOBİ müşterilerine özel",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "Sınırsız ve ömür boyu ücretsiz kullanım hakkı",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "e-Fatura ve diğer e-Dönüşüm ürünlerinde geçerli",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "Portal ve Mobil Uygulama erişimi",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "3 ay içerisinde QNB Kazananlar Kulübüne",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "7/24 Canlı Destek",
          badge: "Ücretsiz",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "Webinar Eğitimleri",
          badge: "Ücretsiz",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "Sınırsız Kullanıcı Ekleme",
          badge: "Ücretsiz",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "Kurulumsuz kullanım",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "Ücretsiz geçiş danışmanlığı",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "Koşulsuz şartsız iptal",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+(1).png",
          text: "1 Yıllık e-İmza Paketi",
          badge: "Hediye",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/qnb-paketler-info.png",
          text: "ERP / Muhasebe entegrasyonunda 1000 kontör ve 1 GB ücretsiz",
          badge: "350+ entegrasyon",
        },
      ],
    },

    {
      cardId: "anatomi-packages-card-2",
      title: "Başlangıç",
      price: "Ömür Boyu Ücretsiz",
      monthPrice: "Ömür Boyu Ücretsiz",
      yearPrice: "Ömür Boyu Ücretsiz",
      monthURL:
        "https://www.qnbesolutions.com.tr/ucretsiz-deneme?packageId=1094&utm_source=qnbesolutions&utm_medium=cro&utm_campaign=packages",
      yearURL:
        "https://www.qnbesolutions.com.tr/ucretsiz-deneme?packageId=1094&utm_source=qnbesolutions&utm_medium=cro&utm_campaign=packages",
      content: [
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "Yeni başlayanlara özel",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "14 gün boyunca 100 kontör",
          badge: "Ücretsiz",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "e-Fatura ve diğer e-Dönüşüm ürünlerinde geçerli",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "Portal ve Mobil Uygulama erişimi",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "ERP / Muhasebe entegrasyonu",
          badge: "Ücretsiz",
          badge2: "350+ entegrasyon",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "7/24 Canlı Destek",
          badge: "Ücretsiz",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "Webinar Eğitimleri",
          badge: "Ücretsiz",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "Sınırsız Kullanıcı Ekleme",
          badge: "Ücretsiz",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "Kurulumsuz kullanım",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "Ücretsiz geçiş danışmanlığı",
        },
      ],
    },

    {
      cardId: "anatomi-packages-card-3",
      content: [
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "Tüm kullanıcılar için esnek paketler",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "İhtiyaca yönelik paket seçimi",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "e-Fatura ve diğer e-Dönüşüm ürünlerinde geçerli",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "Portal ve Mobil Uygulama erişimi",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "ERP / Muhasebe entegrasyonu",
          badge: "Ücretsiz",
          badge2: "350+ entegrasyon",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "7/24 Canlı Destek",
          badge: "Ücretsiz",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "Webinar Eğitimleri",
          badge: "Ücretsiz",
        },

        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "Sınırsız Kullanıcı Ekleme",
          badge: "Ücretsiz",
        },

        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "Kurulumsuz kullanım",
        },
        {
          icon: "https://cro-anatomi.s3.eu-north-1.amazonaws.com/svgviewer-png-output+1.png",
          text: "Ücretsiz geçiş danışmanlığı",
        },
      ],
      kontor: [
        {
          value: "secim1",
          monthPrice: "630₺",
          yearPrice: "785₺",
          monthUnitPrice: "12.60₺ Kontör",
          yearUnitPrice: "15.70₺ Kontör",
          monthURL:
            "https://www.qnbesolutions.com.tr/paket-satin-alim?packageId=12134",
          yearURL:
            "https://www.qnbesolutions.com.tr/paket-satin-alim?packageId=12135",
        },

        {
          value: "secim2",
          monthPrice: "1.255₺",
          yearPrice: "1.585₺",
          monthUnitPrice: "12,55₺ Kontör",
          yearUnitPrice: "15,85₺ Kontör",
          monthURL:
            "https://www.qnbesolutions.com.tr/paket-satin-alim?packageId=12136",
          yearURL:
            "https://www.qnbesolutions.com.tr/paket-satin-alim?packageId=12137",
        },

        {
          value: "secim3",
          monthPrice: "3.145₺",
          yearPrice: "3.950₺",
          monthUnitPrice: "12,58₺ Kontör",
          yearUnitPrice: "15,80₺ Kontör",
          monthURL:
            "https://www.qnbesolutions.com.tr/paket-satin-alim?packageId=12138",
          yearURL:
            "https://www.qnbesolutions.com.tr/paket-satin-alim?packageId=12140",
        },

        {
          value: "secim4",
          monthPrice: "6.280₺",
          yearPrice: "7.900₺",
          monthUnitPrice: "12,56₺ Kontör",
          yearUnitPrice: "15,80₺ Kontör",
          monthURL:
            "https://www.qnbesolutions.com.tr/paket-satin-alim?packageId=1096",
          yearURL:
            "https://www.qnbesolutions.com.tr/paket-satin-alim?packageId=5016",
        },

        {
          value: "secim5",
          monthPrice: "10.225₺",
          yearPrice: "12.785₺",
          monthUnitPrice: "10,22₺ Kontör",
          yearUnitPrice: "12.79₺ Kontör",
          monthURL:
            "https://www.qnbesolutions.com.tr/paket-satin-alim?packageId=1097",
          yearURL:
            "https://www.qnbesolutions.com.tr/paket-satin-alim?packageId=5017",
        },

        {
          value: "secim6",
          monthPrice: "23.010₺",
          yearPrice: "28.820₺",
          monthUnitPrice: "9.20₺ Kontör",
          yearUnitPrice: "11.53₺ Kontör",
          monthURL:
            "https://www.qnbesolutions.com.tr/paket-satin-alim?packageId=5018",
          yearURL:
            "https://www.qnbesolutions.com.tr/paket-satin-alim?packageId=5022",
        },

        {
          value: "secim7",
          monthPrice: "40.910₺",
          yearPrice: "51.135₺",
          monthUnitPrice: "8.18₺ Kontör",
          yearUnitPrice: "10.23₺ Kontör",
          monthURL:
            "https://www.qnbesolutions.com.tr/paket-satin-alim?packageId=5019",
          yearURL:
            "https://www.qnbesolutions.com.tr/paket-satin-alim?packageId=5023",
        },

        {
          value: "secim8",
          monthPrice: "65.085₺",
          yearPrice: "81.355₺",
          monthUnitPrice: "6.51₺ Kontör",
          yearUnitPrice: "8.14₺ Kontör",
          monthURL:
            "https://www.qnbesolutions.com.tr/paket-satin-alim?packageId=5020",
          yearURL:
            "https://www.qnbesolutions.com.tr/paket-satin-alim?packageId=5024",
        },
      ],
    },
  ];
  function anatomiToggleSwitch(element) {
    element.classList.toggle("switch-active");

    const text = element.parentElement.querySelector(".selection-text");

    if (element.classList.contains("switch-active")) {
      text.textContent = "12 Aylık";
    } else {
      text.textContent = "6 Aylık";
    }

    const card = element.closest(".anatomi-packages-card");
    const cardId = card.id;
    const price = card.querySelector(".card-price");
    const content = contents.find((c) => c.cardId === cardId);

    if (element.classList.contains("switch-active")) {
      price.textContent = content.yearPrice;
    } else {
      price.textContent = content.monthPrice;
    }

    const URL = element.classList.contains("switch-active")
      ? content.yearURL
      : content.monthURL;

    const submitButton = card.querySelector(".card-submit-button");
    submitButton.href = URL;

    if (cardId === "anatomi-packages-card-3") {
      const select = card.querySelector("select");
      const kontor = content.kontor.find((k) => k.value === select.value);
      if (element.classList.contains("switch-active")) {
        price.textContent = kontor.yearPrice;
        submitButton.href = kontor.yearURL;
        const unitPriceElement = card.querySelector(".unitPrice-kontor");
        unitPriceElement.textContent = kontor.yearUnitPrice;
      } else {
        price.textContent = kontor.monthPrice;
        submitButton.href = kontor.monthURL;
        const unitPriceElement = card.querySelector(".unitPrice-kontor");
        unitPriceElement.textContent = kontor.monthUnitPrice;
      }
    }
  }

  function anatomipackagesToggleDetail(element) {
    const card = element.closest(".anatomi-packages-card");
    const cardContentDetail = card.querySelector(".card-content-more-detail");

    if (cardContentDetail) {
      cardContentDetail.classList.toggle("card-content-more-detail-active");
      card.classList.toggle("card-detail-active");
    }
  }

  function anatomiCardActive(element) {
    const cards = document.querySelectorAll(".anatomi-packages-card");
    cards.forEach((card) => {
      card.classList.remove("card-active");
    });

    element.classList.toggle("card-active");
  }

  function anatomiPackagesNavigation(element) {
    const navigationItems = document.querySelectorAll(
      ".anatomi-packages-navigation-item"
    );
    let index;
    navigationItems.forEach((item, idx) => {
      item.classList.remove("navigation-active");
      if (item === element) {
        index = idx;
      }
    });

    const navigation = element;
    navigation.classList.toggle("navigation-active");

    const cards = document.querySelectorAll(".anatomi-packages-card");
    cards.forEach((card) => {
      card.classList.remove("card-active");
    });

    if (index !== undefined && cards[index]) {
      const wrapper = document.querySelector(".anatomi-packages-wrapper");
      if (wrapper && wrapper.scrollWidth > wrapper.clientWidth) {
        const card = cards[index];
        const left =
          card.offsetLeft - (wrapper.clientWidth - card.clientWidth) / 2;
        wrapper.scrollTo({ left, behavior: "smooth" });
      }
      cards[index].classList.toggle("card-active");
    }
  }

  function loadAnatomiPackagesContent() {
    const cards = document.querySelectorAll(".anatomi-packages-card");
    contents.forEach((content, index) => {
      const card = document.getElementById(content.cardId);
      if (card) {
        if (!card.id === "anatomi-packages-card-4") {
          card.querySelector(".card-name").textContent = content.title;
          card.querySelector(".card-price").textContent = content.price;
        }

        const cardContent = card.querySelector(".card-content");
        const cardContentDetail = document.createElement("div");
        cardContentDetail.classList.add("card-content-more-detail");
        cardContent.appendChild(cardContentDetail);

        content.content.forEach((item, idx) => {
          const itemElement = document.createElement("div");
          itemElement.classList.add("card-content-item");

          const icon = document.createElement("img");
          icon.src = item.icon;
          icon.alt = "";

          const text = document.createElement("p");
          text.textContent = item.text;

          itemElement.appendChild(icon);
          itemElement.appendChild(text);

          if (item.info) {
            const infoIcon = document.createElement("img");
            infoIcon.src =
              "https://cro-anatomi.s3.eu-north-1.amazonaws.com/packages-cart-info.png";
            infoIcon.alt = "";
            infoIcon.classList.add("card-item-info");

            const infoText = document.createElement("p");
            infoText.textContent = item.info;
            infoText.classList.add("card-item-info-text");

            itemElement.appendChild(infoText);
            itemElement.appendChild(infoIcon);

            infoIcon.addEventListener("mouseover", () => {
              infoText.classList.add("card-item-info-text-active");
            });

            infoIcon.addEventListener("mouseout", () => {
              infoText.classList.remove("card-item-info-text-active");
            });

            infoIcon.addEventListener("touchstart", () => {
              infoText.classList.add("card-item-info-text-active");
              setTimeout(() => {
                infoText.classList.remove("card-item-info-text-active");
              }, 2000);
            });
          }

          if (item.badge) {
            const badge = document.createElement("p");
            badge.classList.add("card-badge");
            badge.textContent = item.badge;
            itemElement.appendChild(badge);
            if (item.badge2) {
              badge.classList.add("margin-left");
            }
          }

          if (item.badge2) {
            const badge2 = document.createElement("p");
            badge2.classList.add("card-badge");
            badge2.textContent = item.badge2;
            itemElement.appendChild(badge2);
            itemElement.style.flexWrap = "wrap";
          }

          cardContent.appendChild(itemElement);
        });
      }
    });
  }

  function anatomiSelectKontor(element) {
    const selectedValue = element.value;
    const card = element.closest(".anatomi-packages-card");
    const content = contents.find((c) => c.cardId === card.id);

    if (content && content.kontor) {
      const kontor = content.kontor.find((k) => k.value === selectedValue);
      if (!kontor) return;

      const priceElement = card.querySelector(".card-price");
      const submitButton = card.querySelector(".card-submit-button");
      const unitPriceElement = card.querySelector(".unitPrice-kontor");

      const switchEl = card.querySelector(".selection-switch");
      const isYear = switchEl && switchEl.classList.contains("switch-active");

      if (isYear) {
        priceElement.textContent = kontor.yearPrice;
        if (submitButton) submitButton.href = kontor.yearURL;
        if (unitPriceElement)
          unitPriceElement.textContent = kontor.yearUnitPrice;
      } else {
        priceElement.textContent = kontor.monthPrice;
        if (submitButton) submitButton.href = kontor.monthURL;
        if (unitPriceElement)
          unitPriceElement.textContent = kontor.monthUnitPrice;
      }
    }
  }

  function clickCard(element) {
    const card = element;
    const cards = Array.from(
      document.querySelectorAll(".anatomi-packages-card")
    );
    const indexofCard = cards.indexOf(card);
    if (indexofCard === -1) return;

    cards.forEach((item) => item.classList.remove("card-active"));
    card.classList.add("card-active");

    const navigation = Array.from(
      document.querySelectorAll(".anatomi-packages-navigation-item")
    );
    navigation.forEach((item) => item.classList.remove("navigation-active"));
    if (navigation[indexofCard]) {
      navigation[indexofCard].classList.add("navigation-active");
      const navParent = navigation[indexofCard].closest(
        ".anatomi-packages-navigation"
      );
    }

    const wrapper = document.querySelector(".anatomi-packages-wrapper");
    if (wrapper && wrapper.scrollWidth > wrapper.clientWidth) {
      const left =
        card.offsetLeft - (wrapper.clientWidth - card.clientWidth) / 2;
      wrapper.scrollTo({ left, behavior: "smooth" });
    }
  }

  function setHeight() {
    const cards = document.querySelectorAll(
      ".anatomi-packages-card .card-content"
    );
    if (!cards || cards.length === 0) return;

    let maxCardHeight = 0;
    cards.forEach((item) => {
      const h = item.scrollHeight;
      if (h > maxCardHeight) {
        maxCardHeight = h;
      }
    });

    cards.forEach((item) => {
      item.style.minHeight = `${maxCardHeight + 50}px`;
      item.style.maxHeight = `${maxCardHeight + 50}px`;
    });
  }

  function removeOtherSections() {
    const section5 = document.querySelector("#section-5");
    if (!section5) return;
    const section2 = document.querySelector("#section-2");
    if (!section2) return;

    if (section5.style.display !== "none") {
      section5.style.display = "none";
    }
    if (section2.style.display !== "none") {
      section2.style.display = "none";
    }
  }

  function startLocation() {
    const phone = window.matchMedia("(max-width: 768px)").matches;
    if (phone) {
      const defaultCard = document.querySelector(
        ".anatomi-packages-card.card-active"
      );
      if (defaultCard) {
        const wrapper = document.querySelector(".anatomi-packages-wrapper");
        const left =
          defaultCard.offsetLeft -
          (wrapper.clientWidth - defaultCard.clientWidth) / 2;
        wrapper.scrollTo({ left, behavior: "smooth" });
      }
    }
  }

  let esnekPaketClicked = false;
  function esnekPaketStartState() {
    const esnekPaketCard = document.querySelector("#anatomi-packages-card-3");
    if (!esnekPaketCard) return;

    const switchEl = esnekPaketCard.querySelector(".selection-switch");
    if (!switchEl) return;

    if (!esnekPaketClicked) {
      anatomiToggleSwitch(switchEl);
      esnekPaketClicked = true;
    }
  }

  function kazananlarLink() {
    const items = document.querySelectorAll(".card-content-item p");
    if (!items || items.length === 0) return;

    items.forEach((item) => {
      const text = "QNB Kazananlar Kulübüne";
      const text2 = " dahil olunması yeterlidir.";
      if (item.textContent.includes(text)) {
        const addLink = document.createElement("a");
        addLink.classList.add("anatomi-kazananlar-link");
        addLink.href =
          "https://www.qnb.com.tr/dijitalkopru/dijital-bankacilik/qnb-kazananlar-kulubu";
        addLink.target = "_blank";
        addLink.textContent = text;
        addLink.style.color = "#a3579f";
        item.textContent = item.textContent.replace(text, "");
        const span = document.createElement("span");
        span.textContent = text2;
        item.appendChild(addLink);
        addLink.insertAdjacentElement("afterend", span);
      }
    });
  }

  function changeBannerTitle() {
    const title = document.querySelector(
      "body > main > div.uk-position-relative.uk-margin-32\\@m.notranslate > section > div.uk-container.uk-position-relative.banner-text-section.notranslate > div > div > h1"
    );

    if (!title) return;

    if (
      title.textContent !== "İhtiyacınıza uygun paketler QNB eSolutions'ta!"
    ) {
      title.textContent = "İhtiyacınıza uygun paketler QNB eSolutions'ta!";
    }

    const title2 = document.querySelector(
      "body > main > div.uk-position-relative.uk-margin-32\\@m.notranslate > section > div.uk-container.uk-position-relative.banner-text-section.notranslate > div > div > div.uk-text-large.uk-margin-remove-last-child.notranslate > p"
    );

    if (!title2) return;

    if (
      title2.textContent !== " Size en uygun paketi seçerek hemen başlayın!"
    ) {
      title2.textContent = " Size en uygun paketi seçerek hemen başlayın! ";
    }
  }

  function anatomi_pushToDataLayer(btn) {
    window.dataLayer = window.dataLayer || [];
    const item = {
      item_id: btn.dataset.id,
      item_name: btn.dataset.name,
      affiliation: btn.dataset.affiliation,
      coupon: "",
      discount: "",
      item_brand: btn.dataset.brand,
      item_category: btn.dataset.category,
      item_category2: btn.dataset.category2,
      item_category3: btn.dataset.category3,
      add_to_cart_type: btn.dataset.type,
      item_list_id: btn.dataset.list_id,
      item_list_name: btn.dataset.list_name,
      item_variant: btn.dataset.variant,
      price: Number(btn.dataset.price),
      quantity: Number(btn.dataset.quantity),
    };

    const value = Number(
      Number(btn.dataset.price) + (btn.dataset.price * 20) / 100
    );

    dataLayer.push({
      event: "add_to_cart",
      ecommerce: {
        currency: "TRY",
        value: value,
        items: [item],
      },
    });
  }

  function oldKontorSelect(selectEl) {
    const kontors = document.querySelectorAll("#dropdown-2 > ul > li > a");
    if (!kontors || kontors.length === 0) return;
    const option = selectEl && selectEl.options[selectEl.selectedIndex];
    const value = option && option.textContent;
    if (!value) return;
    console.log(option);

    kontors.forEach((kontor) => {
      const dataName = kontor.getAttribute("data-name");

      if (!dataName) return;
      if (dataName.replace("Paketi", "").trim() === value) {
        const onClick = kontor.getAttribute("onClick");
        if (!onClick) return;

        option.setAttribute("onClick", onClick);
        kontor.click();
      }
    });

    const oldButton = document.querySelector(
      "#section-5 > div > div > div.uk-width-1-4\\@m.package-item-wrapper.package-item-wrapper-2.more-one.notranslate > div > a"
    );
    if (!oldButton) return;

    const onClick = oldButton.getAttribute("onClick");

    const newButton = document.querySelector(".card-submit-button-esnek");
    if (!newButton) return;

    newButton.setAttribute("onClick", onClick);

    console.log(option.getAttribute("onClick"));
  }

  function oldButtonClick(element) {
    const oldButton = document.querySelector(".trialpackage.trialpackage-2");

    if (!oldButton) return;

    oldButton.click();
  }

  function startClick() {
    const kontors = document.querySelectorAll("#dropdown-2 > ul > li > a");
    const checkText = document.querySelector(
      "#package-TK50 > p > span"
    )?.textContent;
    if (!kontors || kontors.length === 0) return;
    kontors.forEach((kontor) => {
      const dataName = kontor.getAttribute("data-name");
      if (!dataName) return;
      const value = "100 Kontör";
      if (dataName.includes(value) && !checkText.includes(value)) {
        kontor.click();
      }
    });
  }

  const TRIGGER_SELECTOR = ".anatomi-packages-container";

  function fireViewItemList() {
    const el = document.querySelector("#section-5");
    if (!el) {
      console.warn("#section-5 bulunamadı");
      return;
    }

    const origRect = Element.prototype.getBoundingClientRect;
    const origClientRects = Element.prototype.getClientRects;

    Element.prototype.getBoundingClientRect = function () {
      if (this === el) {
        return {
          x: 0,
          y: 0,
          width: el.offsetWidth || 100,
          height: el.offsetHeight || 100,
          top: 0,
          left: 0,
          bottom: el.offsetHeight || 100,
          right: el.offsetWidth || 100,
          toJSON() {
            return {};
          },
        };
      }
      return origRect.apply(this, arguments);
    };

    Element.prototype.getClientRects = function () {
      if (this === el) {
        return [
          {
            x: 0,
            y: 0,
            top: 0,
            left: 0,
            bottom: el.offsetHeight || 100,
            right: el.offsetWidth || 100,
            width: el.offsetWidth || 100,
            height: el.offsetHeight || 100,
          },
        ];
      }
      return origClientRects.apply(this, arguments);
    };

    window.dispatchEvent(new Event("resize"));
    window.dispatchEvent(new Event("scroll"));

    setTimeout(() => {
      Element.prototype.getBoundingClientRect = origRect;
      Element.prototype.getClientRects = origClientRects;
      console.log("getBoundingClientRect geri alındı.");
    }, 500);
  }

  function checkScroll() {
    const trigger = document.querySelector(TRIGGER_SELECTOR);
    if (!trigger) return;

    const top = trigger.getBoundingClientRect().top - 650;
    if (window.scrollY > top) {
      window.removeEventListener("scroll", checkScroll);
      fireViewItemList();
      setTimeout(() => {
        startClick();
      }, 1000);
      return;
    }
  }

  window.addEventListener("scroll", checkScroll, { passive: true });

  window.anatomiToggleSwitch = anatomiToggleSwitch;
  window.anatomipackagesToggleDetail = anatomipackagesToggleDetail;
  window.anatomiPackagesNavigation = anatomiPackagesNavigation;
  window.anatomiSelectKontor = anatomiSelectKontor;
  window.clickCard = clickCard;
  window.anatomi_pushToDataLayer = anatomi_pushToDataLayer;
  window.oldKontorSelect = oldKontorSelect;
  window.oldButtonClick = oldButtonClick;

  loadAnatomiPackagesContent();

  removeOtherSections();
  setHeight();
  startLocation();
  kazananlarLink();
  changeBannerTitle();
};

const paketler_redesign_init = () => {
  paketler_redesign_html();
  paketler_redesign_css();
  paketler_redesign_js();
};

const paketler_redesign_conditions = () => {
  const paketler_redesign = !document.querySelector(
    ".anatomi-packages-container"
  );
  const phone = matchMedia("(max-width: 768px)").matches;
  const desktop = matchMedia("(min-width: 768px)").matches;
  return paketler_redesign;
};

setInterval(() => {
  if (paketler_redesign_conditions()) {
    paketler_redesign_init();
  }
}, 50);
