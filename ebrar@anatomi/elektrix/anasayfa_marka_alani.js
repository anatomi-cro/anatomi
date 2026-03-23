const anasayfa_markalar_html = () => {
  const anasayfa_markalar_html = `
         <div class="anatomi_markalar_container">
          <div class="anatomi_markalar_list">
            <a href="https://www.elektrix.com/firsat-urunleri" class="anatomi_markalar_item">
              <img
                src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/firsat_%C3%BCr%C3%BCnleri_markalar.png"
                alt=""
              />

            </a>
    
            <a href="https://www.elektrix.com/cok-satanlar" class="anatomi_markalar_item">
              <img
                src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/cok_satanlar_markalar.png"
                alt=""
              />

            </a>
    
            <a href="https://www.elektrix.com/schneider-electric" class="anatomi_markalar_item">
              <img
                src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/elektirx_marka_alani_Group+26.png"
                alt=""
              />

            </a>
    
            <a href="https://www.elektrix.com/siemens" class="anatomi_markalar_item">
              <img
                src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/elektirx_marka_alani_Group+27.png"
                alt=""
              />

            </a>
    
            <a href="https://www.elektrix.com/legrand"  class="anatomi_markalar_item">
              <img
                src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/elektirx_marka_alani_Group+28.png"
                alt=""
              />

            </a>
    
            <a href="https://www.elektrix.com/bemis" class="anatomi_markalar_item">
              <img
                src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/elektirx_marka_alani_Group+29.png"
                alt=""
              />

            </a>
    
            <a href="https://www.elektrix.com/tp-electric" class="anatomi_markalar_item">
            <img
              src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/elektirx_marka_alani_Group+30.png"
              alt=""
            />
  
          </a>
    
            <a href="https://www.elektrix.com/entes" class="anatomi_markalar_item">
              <img
                src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/elektirx_marka_alani_Group+32.png"
                alt=""
              />

            </a>
    
            <a href="https://www.elektrix.com/emas" class="anatomi_markalar_item">
              <img
                src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/elektirx_marka_alani_Group+33.png"
                alt=""
              />

            </a>
          </div>
        </div>
        `;

  const content = document.querySelector("#content");
  content && content.insertAdjacentHTML("afterbegin", anasayfa_markalar_html);
};

const anasayfa_markalar_css = () => {
  const anasayfa_markalar_css = `
            <style>
          .anatomi_markalar_container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin: calc(clamp(5px, 200px - 16vw, 200px)) auto;
            margin-bottom: 0px;
            max-width: 1200px;
          }

          body:not(.iosMobile) #header {
    padding-top: 180px !important;
    }

          .ustbilgiBanner {
          display: none;}
    
          .anatomi_markalar_list {
            display: flex;
          justify-content: space-around;
            align-items: center;
            width: 100%;
            margin-top: 20px;
          }
    
          .anatomi_markalar_item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5px;
            width: calc(100% / 10);
            height: fit-content;
          }
    
            .anatomi_markalar_item img {
            width: 80%;
            height: auto;
            }
    
          .anatomi_markalar_item h4 {
            font-size: 14px;
            font-weight: 700;
            color: #333;
            margin: 0;
            text-align: center;
            white-space: nowrap;
          }
    
            @media (max-width: 1200px) {
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
  const innerWidth = window.innerWidth > 768;
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
}, 100);
