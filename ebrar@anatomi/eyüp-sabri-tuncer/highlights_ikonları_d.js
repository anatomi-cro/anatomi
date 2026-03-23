//gtm üzerinden %100 olacak şekilde yayına alınacak.

setInterval(() => {
  const head = document.querySelector("head");
  const script = document.createElement("script");
  script.id = "ab-guard";
  script.src = "https://ab-test-logger.netlify.app/ab-guard.min.js";
  if (!document.getElementById("ab-guard")) {
    head.insertAdjacentElement("afterbegin", script);
  }
}, 50);

setTimeout(() => {
  window.ABGuardConfig({
    DEBUG_MODE: false,
  });
  window.runABTest(
    {
      brand: "eyüp_sabri_tuncer",
      testId: "story_alani_eklenmesi",
      variation: "varyasyon-1",
    },

    async (guard) => {
      const story_html = () => {
        const html = `
  <div id="personaStoryContainer">
      <div class="persona-story-child" onclick="storyClick('vegan');">
        <span class="personaclick-story-image"
          ><a href="https://www.eyupsabrituncer.com/vegan"
            ><img
              src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/EST-HIGHLIGHT-VEGAN-02.png" /></a></span
        ><span class="personaclick-story-title">Vegan</span>
      </div>
      <div class="persona-story-child" onclick="storyClick('zeytinyagi');">
        <span class="personaclick-story-image"
          ><a href="https://www.eyupsabrituncer.com/zeytinyagi"
            ><img
              src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/EST-HIGHLIGHT-ZYAGI-02.png" /></a></span
        ><span class="personaclick-story-title">Zeytinyağı</span>
      </div>
      <div class="persona-story-child" onclick="storyClick('kolonyalar');">
        <span class="personaclick-story-image"
          ><a href="https://www.eyupsabrituncer.com/kolonyalar"
            ><img
              src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/EST-HIGHLIGHT-KOLONYA-01.png" /></a></span
        ><span class="personaclick-story-title">Kolonya</span>
      </div>
      <div
        class="persona-story-child"
        onclick="storyClick('kolonyali_mendil');"
      >
        <span class="personaclick-story-image"
          ><a href="https://www.eyupsabrituncer.com/kolonyali-mendil"
            ><img
              src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/EST-HIGHLIGHT-MENDIL-02.png" /></a></span
        ><span class="personaclick-story-title">Kolonyalı Mendil</span>
      </div>
      <div class="persona-story-child" onclick="storyClick('sabun');">
        <span class="personaclick-story-image"
          ><a href="https://www.eyupsabrituncer.com/sabun"
            ><img
              src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/EST-HIGHLIGHT-SABUN-01.png" /></a></span
        ><span class="personaclick-story-title">Sabun</span>
      </div>
      <div class="persona-story-child" onclick="storyClick('dis_macunlari');">
        <span class="personaclick-story-image"
          ><a href="https://www.eyupsabrituncer.com/dis-macunlari"
            ><img
              src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/EST-HIGHLIGHT-DIS-MACUNU-02.png" /></a></span
        ><span class="personaclick-story-title">Diş Macunları</span>
      </div>
      <div class="persona-story-child" onclick="storyClick('bebek_urunleri');">
        <span class="personaclick-story-image"
          ><a href="https://www.eyupsabrituncer.com/bebek-urunleri"
            ><img
              src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/EST-HIGHLIGHT-BEBEK-01.png" /></a></span
        ><span class="personaclick-story-title">Bebek Bakımı</span>
      </div>
      <div class="persona-story-child" onclick="storyClick('perfume_jewels');">
        <span class="personaclick-story-image"
          ><a href="https://www.eyupsabrituncer.com/perfume-jewels"
            ><img
              src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/EST-HIGHLIGHT-PJ-02.png" /></a></span
        ><span class="personaclick-story-title">Perfume Jewels</span>
      </div>
      <div class="persona-story-child" onclick="storyClick('sivi_sabun');">
        <span class="personaclick-story-image"
          ><a href="https://www.eyupsabrituncer.com/vucut-bakimi"
            ><img
              src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/EST-HIGHLIGHT-VUCUT-BAKIM-01.png" /></a></span
        ><span class="personaclick-story-title">Vücut Bakımı</span>
      </div>
      <div class="persona-story-child" onclick="storyClick('sac_bakim');">
        <span class="personaclick-story-image"
          ><a href="https://www.eyupsabrituncer.com/sampuan-ve-sac-kremleri"
            ><img
              src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/EST-HIGHLIGHT-SAC-BAKIM-02.png" /></a></span
        ><span class="personaclick-story-title">Saç Bakımı</span>
      </div>
      <div class="persona-story-child" onclick="storyClick('oda_spreyi');">
        <span class="personaclick-story-image"
          ><a href="https://www.eyupsabrituncer.com/oda-spreyi"
            ><img
              src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/EST-HIGHLIGHT-GIZLI-BAHCE-01.png" /></a></span
        ><span class="personaclick-story-title">Gizli Bahçe</span>
      </div>
      <div class="persona-story-child" onclick="storyClick('ev_temizligi');">
        <span class="personaclick-story-image"
          ><a href="https://www.eyupsabrituncer.com/hayati-tazeler"
            ><img
              src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/EST-HIGHLIGHT-EV-BAKIM-02.png" /></a></span
        ><span class="personaclick-story-title">Evde Hijyen</span>
      </div>
      <div class="persona-story-child" onclick="storyClick('tarihce');">
        <span class="personaclick-story-image"
          ><a href="https://www.eyupsabrituncer.com/tarihcemiz"
            ><img
              src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/EST-HIGHLIGHT-TARIHCEMIZ.png" /></a></span
        ><span class="personaclick-story-title">Tarihçemiz</span>
      </div>
      `;
        const element = document.querySelector("#personaStoryContainer");
        const container = guard.getElement("#headerNew", {
          name: "headerNew",
          fatal: true,
        });

        if (!element) {
          container.insertAdjacentHTML("afterend", html);
        }
      };

      const story_css = () => {
        const style = `
  <style id="anatomiStory-css">
        .personaclick-story-title {
          margin-top: 0.3rem;
          display: block;
          text-align: center;
          height: 15px;
          font-weight: 500;
        }
        #personaStoryContainer {
          padding-bottom: 1.5rem;
          width: 95%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-left: 50%;
          transform: translateX(-50%);
        }
        .persona-story-child {
          cursor: pointer;
          width: 100px;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 3px;
          cursor: pointer;
        }
        .persona-story-child span.personaclick-story-image {
          border-radius: 50%;
          background: #fbfaf8;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 3px;
        }
        .persona-story-child span img {
          border-radius: 50%;
        }
        @media screen and (max-width: 767px) {
          #personaStoryContainer {
            overflow-x: auto;
            display: flex;
            flex-wrap: nowrap;
            justify-content: flex-start;
            scroll-behavior: smooth;
            gap: 0.5rem;
            margin-bottom: 20px;
          }
          #personaStoryContainer::-webkit-scrollbar {
            display: none;
          }
          .persona-story-child {
            height: 70px;
            width: 70px;
            flex: 0 0 auto;
          }
        }
      </style>
      `;

        const head = document.querySelector("head");
        const styleSheet = document.querySelector("#anatomiStory-css");
        if (!styleSheet) {
          head.insertAdjacentHTML("beforeend", style);
        }
      };

      const story_js = () => {
        const button = document.querySelector(".xyz_button");
        if (!button) {
          guard.getElement(".xyz_button", { name: "xyz_button", fatal: true });
        }
      };

      const story_init = () => {
        story_html();
        story_css();
        story_js();
      };

      const story_conditions = () => {
        const story = !document.querySelector(".personaStoryContainer");
        const desktop = matchMedia("(min-width: 768px)").matches;
        return story && desktop;
      };

      setInterval(() => {
        if (story_conditions()) {
          story_init();
        }
      }, 50);
    },
  );
}, 2000);
