const anasayfa_markalar_html = () => {
  const anasayfa_markalar_html = `
     <div class="anatomi_markalar_container">
      <div class="anatomi_markalar_list">
        <a href="https://www.elektrix.com/firsat-urunleri" class="anatomi_markalar_item">
          <img
            src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+23.png"
            alt=""
          />
          <h4>Fırsat Ürünleri</h4>
        </a>

        <a href="https://www.elektrix.com/cok-satanlar" class="anatomi_markalar_item">
          <img
            src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+22.png"
            alt=""
          />
          <h4>Çok Satanlar</h4>
        </a>

        <a href="https://www.elektrix.com/schneider-electric" class="anatomi_markalar_item">
          <img
            src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+21.png"
            alt=""
          />
          <h4>Schneider Electric</h4>
        </a>

        <a href="https://www.elektrix.com/siemens" class="anatomi_markalar_item">
          <img
            src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+20.png"
            alt=""
          />
          <h4>Siemens</h4>
        </a>

        <a href="https://www.elektrix.com/legrand"  class="anatomi_markalar_item">
          <img
            src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+19.png"
            alt=""
          />
          <h4>Legrand</h4>
        </a>

        <a href="https://www.elektrix.com/bemis" class="anatomi_markalar_item">
          <img
            src="https://anatomi.s3.eu-north-1.amazonaws.com/bemis.png"
            alt=""
          />
          <h4>Bemis</h4>
        </a>

        <a href="https://www.elektrix.com/tp-electric" class="anatomi_markalar_item">
        <img
          src="https://anatomi.s3.eu-north-1.amazonaws.com/tpelectric.png"
          alt=""
        />
        <h4>TP Elektirik</h4>
      </a>

        <a href="https://www.elektrix.com/entes" class="anatomi_markalar_item">
          <img
            src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+17.png"
            alt=""
          />
          <h4>Entes</h4>
        </a>

        <a href="https://www.elektrix.com/emas" class="anatomi_markalar_item">
          <img
            src="https://anatomi.s3.eu-north-1.amazonaws.com/Group+16.png"
            alt=""
          />
          <h4>Emas</h4>
        </a>
      </div>
    </div>
    `;

  const content = document.querySelector("#content")
  content &&
  content.insertAdjacentHTML("afterbegin", anasayfa_markalar_html);
};

const anasayfa_markalar_css = () => {
  const anasayfa_markalar_css = `
        <style>
      .anatomi_markalar_list {
          display: flex;
      }
      .anatomi_markalar_container {
        position: relative;
        margin: 20px 0;
        overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
      }

      .anatomi_markalar_item {
        flex: 0 0 20%;
    text-align: center;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
      }

      .anatomi_markalar_item h4 {
        font-size: 11px;
        height: 20px
      }

      .anatomi_markalar_item img {
        max-width: 100%;
        height: auto;
      }

    </style>
    `;

  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", anasayfa_markalar_css);
};

const anasayfa_markalar_js = () => {
  const remove_old_markalar = () => {
    const old_markalar = document.querySelector(".a_container");
    old_markalar && old_markalar.remove();
  };

  remove_old_markalar();
};

const anasayfa_markalar_init = () => {
  anasayfa_markalar_html();
  anasayfa_markalar_css();
  anasayfa_markalar_js();
};

const anasayfa_markalar_conditions = () => {
  const innerWidth = window.innerWidth <= 768;
  const pathname = window.location.href === "https://www.elektrix.com/";
  const anatomi_markalar_container = !document.querySelector(
    ".anatomi_markalar_container"
  );

  return innerWidth && pathname && anatomi_markalar_container;
};

setInterval(() => {
  if (anasayfa_markalar_conditions()) {
    anasayfa_markalar_init();
  }
  
},100);