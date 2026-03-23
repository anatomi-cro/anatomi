const e_fatura_redesign_html = () => {
    const html = `
        <div class="anatomi_card">
            <h3 class="anatomi_card_title">Dijital Köprü</h3>
            <div class="anatomi_card_price">Ücretsiz</div>
            <a href="https://www.qnbesolutions.com.tr/paket-satin-alim?packageId=12432" class="anatomi_card_button">Hemen Başlayın</a>
            <ul class="anatomi_card_list">
                <li>✔ Sınırsız kullanım</li>
                <li>✔ Portal ve mobil uygulama</li>
                <li>✔ İnternetin olduğu her yerden kurulumsuz erişim</li>
                <li>✔ Muhasebe programları ile entegrasyon</li>
                <li>✔ Tüm ürünlerde geçerli tek kontör</li>
                <li>✔ Geçiş danışmanlığı</li>
                <li>✔ Ücretsiz deneme imkanı</li>
                <li>✔ e-İmza hediyesi</li>
            </ul>
            <div class="anatomi_card_detail_toggle">Detaylı Bilgi</div>
            <ul class="anatomi_card_extra_list" style="display:none;">
                <li>✔ e-Fatura düzenleme ve alma</li>
                <li>✔ Webinar eğitimleri</li>
                <li>✔ Abonelik ücreti yok</li>
                <li>✔ Taksitle ödeme imkanı</li>
                <li>✔ Şirketinize özel fatura şablonu oluşturma imkanı</li>
            </ul>
        </div>
    `;
    const sectionPackages = document.querySelector("#section-5 > div > div");
    sectionPackages.insertAdjacentHTML("beforeend", html);
};


const e_fatura_redesign_css = () => {
    const style = `
      <style>    
      .anatomi_section_packages {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
      }
    .anatomi_section_title{
        margin-right: 0px !important;
    }

    .anatomi_section_exp {
      display: none !important;
    }
    .anatomi_tabs_container {
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
          flex-wrap: wrap;
      }

      .anatomi_tab {
          padding: 12px 20px;
          cursor: pointer;
          font-weight: 600;
          border-bottom: 1px solid #ccc;
          transition: all 0.3s ease;
      }

      .anatomi_tab:hover {
          background-color:rgba(163, 87, 159, 0.29);
          border-color: #888;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          color: black;
      }

      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const e_fatura_redesign_js = () => {
    generateClassListAdding = () => {
        const sectionPackages = document.querySelector("#section-5 > div > div")
        if (sectionPackages && !sectionPackages.classList.contains("anatomi_section_packages")) {
            sectionPackages.classList.add("anatomi_section_packages");
        }

        const sectionTitle = document.querySelector("#section-5 > div > div > div.uk-width-2-5\\@m.uk-margin-auto-right.uk-first-column.notranslate")
        if (sectionTitle && !sectionTitle.classList.contains("anatomi_section_title")) {
            sectionTitle.classList.add("anatomi_section_title");
        }

        const sectionExp = document.querySelector("#section-5 > div > div > div.uk-width-2-5\\@m.uk-margin-auto-right.uk-first-column.notranslate.anatomi_section_title > div > p")
        if (sectionExp && !sectionExp.classList.contains("anatomi_section_exp")) {
            sectionExp.classList.add("anatomi_section_exp");
        }

    };


    generateTabs = () => {
         const tabsContainer = document.createElement("div");
        tabsContainer.className = "anatomi_tabs_container";

        const tabTitles = ["Dijital Köprü", "KOBİ", "Girişimci", "Kendin Seç"];

        tabTitles.forEach(title => {
            const tab = document.createElement("div");
            tab.className = "anatomi_tab";
            tab.textContent = title;
            tabsContainer.appendChild(tab);
        });

        const sectionTitle = document.querySelector("#packageTitle");

        if (sectionTitle) {
            sectionTitle.parentNode.insertBefore(tabsContainer, sectionTitle.nextSibling);
        }
    };
 
const bindDetailToggles = () => {
        document.querySelectorAll('.anatomi_card_detail_toggle').forEach(toggle => {
            toggle.addEventListener('click', () => {
                const extraList = toggle.nextElementSibling;
                if (extraList.style.display === 'none') {
                    extraList.style.display = 'block';
                    toggle.textContent = 'Küçült';
                } else {
                    extraList.style.display = 'none';
                    toggle.textContent = 'Detaylı Bilgi';
                }
            });
        });
    };

    const e_fatura_cards_render = () => {
  const cardData = [
    {
      title: "14 Gün Deneme",
      price: "0 ₺",
      packageId: "12253",
      url: "/ucretsiz-deneme?packageId=12253",
      parentId: "6031",
      features: [
        "✔ Kart bilgisi gerekmez!",
        "✔ 14 gün boyunca tam erişim",
        "✔ Portal ve mobil erişim",
        "✔ Kurulumsuz kullanım",
        "✔ e-Fatura gönderme",
        "✔ Ücretsiz destek"
      ]
    },
    {
      title: "Girişimci Destek",
      price: "545 ₺",
      packageId: "12432",
      url: "/paket-satin-alim?packageId=12432",
      parentId: "6031",
      features: [
        "✔ 50 kontör alana 50 kontör hediye!",
        "✔ Hızlı fatura kesimi",
        "✔ Mobil erişim",
        "✔ KOBİ’lere özel destek",
        "✔ Taksitli ödeme imkanı"
      ]
    },
    {
      title: "KOBİ Destek",
      price: "6.240 ₺",
      packageId: "6031",
      url: "/paket-satin-alim?packageId=6031",
      parentId: "6031",
      features: [
        "✔ 500 kontör alana 500 kontör hediye!",
        "✔ Gelişmiş entegrasyon",
        "✔ Raporlama özellikleri",
        "✔ Çoklu kullanıcı desteği",
        "✔ Destek hattı",
        "✔ Kolay yönetim paneli"
      ]
    }
  ];

  const container = document.createElement("div");
  container.className = "anatomi_card_container";

  cardData.forEach((card) => {
    const cardEl = document.createElement("div");
    cardEl.className = "anatomi_card";

    cardEl.innerHTML = `
      <h3 class="anatomi_card_title">${card.title}</h3>
      <div class="anatomi_card_price">${card.price}</div>
      <a onclick="buyPackage('section-5','${card.packageId}','${card.url}','${card.parentId}')" class="anatomi_card_button">Satın Al</a>
      <ul class="anatomi_card_list">
        ${card.features.map(feature => `<li>${feature}</li>`).join("")}
      </ul>
    `;

    container.appendChild(cardEl);
  });

  const target = document.querySelector("#section-5");
  if (target) {
    target.appendChild(container);
  }
};







    generateClassListAdding();
    generateTabs();
        bindDetailToggles();
};

const e_fatura_redesign_init = () => {
    e_fatura_redesign_html();
    e_fatura_redesign_css();
    e_fatura_redesign_js();
};

const e_fatura_redesign_condition = () => {
    return true;
};

if (e_fatura_redesign_condition()) {
    e_fatura_redesign_init();
}
