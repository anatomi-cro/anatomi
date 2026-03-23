const randevu_form_ilk_adim_redesign_html = () => {
    const html = `
    `;
  };
  const randevu_form_ilk_adim_redesign_css = () => {
    const style = `
      <style id="anatomi_randevu_form_ilk_adim_redesign_css">
      /* --- generateChooseCity style --- */
      .anatomi_city_container_span1 {
           display: none !important;
         }
      .anatomi_city_container_title{
        color:black !important;
      }
    .anatomi_city_container_select_wrapper {
        position: relative; 
        display: inline-block; 
        width: 100%; 
}
  .anatomi_city_container_wrapper{
    position: relative;
  }

  .anatomi_subeler_item_container a {
  transition: none !important;
  }
      .anatomi_city_container_select_sehir_sec{
        border: none !important;
        background-color: #eef1f7 !important;
        color: #abafb1 !important;
        border-radius: 5px !important;
        appearance: none;
        height: 40px !important;
      }
      .anatomi_city_container_select_search{
        border: none !important;
        background-color: #eef1f7 !important;
        color: #abafb1 !important;
        border-radius: 5px !important;
        height: 30px !important;
        padding: 5px 5px !important;
        appearance: none;
      }
      .anatomi_city_container_select_search::placeholder{
          color: #abafb1 !important;
          font-weight: normal !important;
      }
      .anatomi_city_select_icon {
        position: absolute;
        right: 15px; 
        top: 50%; 
        transform: translateY(-50%); 
        pointer-events: none; 
        color: #6b6e70;
  }
       .anatomi_city_container_search_btn{
        position: absolute;
        right: 15px; 
        top: 50%; 
        transform: translateY(-50%);
        padding: 3px 25px !important;
        background-color: #fedd41;
        border: none;
        border-radius: 3px;
        color: black;
        }

        /* --- generateSubelerimiz style --- */
        .anatomi_subeler_title{
          color:black !important;
        }
        .anatomi_subeler_name{
          text-transform: capitalize;
        }
        .anatomi_subeler_konum{
          text-transform: capitalize !important;
          color: black !important;
        }
        .anatomi_subeler_harita_btn{
          background-color: #DDDDDD !important;
          background: none;
          color: black !important;
          text-shadow: none;
          padding: 5px 15px;
          border: none;
        }
        .a_sblr_btn{
            background: none;
            background-color: #fedd44;
            color: black !important;
            text-shadow: none;
            border: none;
            padding: 5px 15px;
            font-weight: bold;
        }
        .anatomi_subeler_randevuAlın_btn:hover{
            background: none;
            background-color: #fedd44;
            color: black !important;
            text-shadow: none;
        }

      /* --- responsive styles ---*/
      @media screen and (max-width: 769px) {
         .anatomi_city_container_search_title {
           display: none;
         }
         .anatomi_subeler_container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
         }
         .anatomi_subeler_item_container {
           width: 150px !important;
         }
          .anatomi_subeler_harita_btn {
            padding: 5px 5px;
          }
          .anatomi_subeler_randevuAlın_btn {
            padding: 5px 5px;
          }
      }
    </style>
    `;
    const head = document.querySelector("head");
    const css = document.querySelector("#anatomi_randevu_form_ilk_adim_redesign_css");
    if (!css) {
    head.insertAdjacentHTML("beforeend", style);
    }
    const fontAwesomeLink = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  `;
  if(!fontAwesomeLink){
    head.insertAdjacentHTML("beforeend", fontAwesomeLink);
  }
  };
  const randevu_form_ilk_adim_redesign_js = () => {
    const generateChooseCity = () => {
     

      const cityContainerTitle = document.querySelector(
        "#content-large > div > div:nth-child(2) > div > div > h3"
      );
      if (cityContainerTitle) {
        cityContainerTitle.classList.add("anatomi_city_container_title");
      }
      const cityContainerSehirSecSelect = document.querySelector(
        "#content-large > div > div:nth-child(2) > div > div > form > div > div:nth-child(2) > p > select"
      );

      if (cityContainerSehirSecSelect) {
        cityContainerSehirSecSelect.classList.add(
          "anatomi_city_container_select_sehir_sec"
        );
        const wrapper = document.createElement("div");
        wrapper.classList.add("anatomi_city_container_select_wrapper");

        cityContainerSehirSecSelect.parentNode.insertBefore(
          wrapper,
          cityContainerSehirSecSelect
        );
        wrapper.appendChild(cityContainerSehirSecSelect);
        wrapper.insertAdjacentHTML(
          "beforeend",
          '<i class="fa-solid fa-chevron-down anatomi_city_select_icon"></i>'
        );
      }
      const cityContainerSearchLabel = document.querySelector(
        "#content-large > div > div:nth-child(2) > div > div > form > div > div:nth-child(3) > p > label"
      );
      if (cityContainerSearchLabel) {
        cityContainerSearchLabel.style.color = "white";
      }
      const cityContainerSearchSelect = document.querySelector(
        "#content-large > div > div:nth-child(2) > div > div > form > div > div:nth-child(3) > p > input"
      );

      const cityContainerSearchBtn = document.querySelector(
        "#content-large > div > div:nth-child(2) > div > div > form > div > div.span3 > p > button"
      );

      if (cityContainerSearchSelect && cityContainerSearchBtn) {
        const wrapper = document.createElement("div");
        wrapper.classList.add("anatomi_city_container_wrapper");

        cityContainerSearchSelect.parentNode.insertBefore(
          wrapper,
          cityContainerSearchSelect
        );
        wrapper.appendChild(cityContainerSearchSelect);
        wrapper.insertAdjacentElement("beforeend", cityContainerSearchBtn);

        cityContainerSearchSelect.classList.add(
          "anatomi_city_container_select_search"
        );
        cityContainerSearchSelect.setAttribute("placeholder", "Şube Ara");

        cityContainerSearchBtn.classList.add("anatomi_city_container_search_btn");
        cityContainerSearchBtn.classList.remove("btn", "btn-primary");
      }
      const cityContainerSearchTitle = document.querySelector(
        "#content-large > div > div:nth-child(2) > div > div > form > div > div:nth-child(3) > p > label"
      );
      if (cityContainerSearchTitle) {
        cityContainerSearchTitle.classList.add(
          "anatomi_city_container_search_title"
        );
      }

      const cityContainerSpan1 = document.querySelector(
        "#content-large > div > div:nth-child(2) > div > div > form > div > div.span1"
      );
      if (cityContainerSpan1) {
        cityContainerSpan1.classList.add("anatomi_city_container_span1");
      }
      const cityContainerSearchBtnIcon = document.querySelector(
        "#content-large > div > div:nth-child(2) > div > div > form > div > div:nth-child(3) > p > div > button > i"
      );
      if (cityContainerSearchBtnIcon) {
        cityContainerSearchBtnIcon.style.display = "none";
      }
      const cityContainerTemizleBtn = document.querySelector(
        "#content-large > div > div:nth-child(2) > div > div > form > div > div.span3 > p > a"
      );
      if (cityContainerTemizleBtn) {
        cityContainerTemizleBtn.style.display = "none";
      }
    };
    const generateSubelerimiz = () => {
      const subelerTitle = document.querySelectorAll(
        "#content-large > div > div > div > div > h3"
      );
      if (subelerTitle) {
        subelerTitle.forEach((title) => {
          title.classList.add("anatomi_subeler_title");
        });
      }
      const subelerContainer = document.querySelectorAll(
        "#content-large > div > div > div > div > ul"
      );
      if (subelerContainer) {
        subelerContainer.forEach((container) => {
          container.classList.add("anatomi_subeler_container");
        });
      }
      const subelerItemContainer = document.querySelectorAll(
        "#content-large > div > div > div > div > ul > li"
      );
      if (subelerItemContainer) {
        subelerItemContainer.forEach((item) => {
          item.classList.add("anatomi_subeler_item_container");
        });
      }
      const subelerIcon = document.querySelectorAll(
        "#content-large > div > div > div > div > ul > li > img"
      );
      if (subelerIcon) {
        subelerIcon.forEach((icon) => {
          icon.style.display = "none";
        });
      }
      const subelerHaritaIcon = document.querySelectorAll(
        "#content-large > div > div > div > div > ul > li > a.btn.btn-inverse.btn-mini > i"
      );
      if (subelerHaritaIcon) {
        subelerHaritaIcon.forEach((icon) => {
          icon.style.display = "none";
        });
      }

      const subelerRandevuIcon = document.querySelectorAll(
        "#content-large > div > div > div > div > ul > li > a.btn.btn-danger.btn-mini > i"
      );
      if (subelerRandevuIcon) {
        subelerRandevuIcon.forEach((icon) => {
          icon.style.display = "none";
        });
      }
      const subelerName = document.querySelectorAll(
        "#content-large > div > div > div > div > ul > li > h5"
      );
      if (subelerName) {
        subelerName.forEach((name) => {
          name.classList.add("anatomi_subeler_name");
          if(name.textContent !== name.textContent.toLocaleLowerCase("tr-TR")){
            name.textContent = name.textContent.toLocaleLowerCase("tr-TR");
          }
        });
      }
      const subelerKonum = document.querySelectorAll(
        "#content-large > div > div > div > div > ul > li > span"
      );
      if (subelerKonum) {
        subelerKonum.forEach((konum) => {
          konum.classList.add("anatomi_subeler_konum");
          if(konum.textContent !== konum.textContent.toLocaleLowerCase("tr-TR")){
            konum.textContent = konum.textContent.toLocaleLowerCase("tr-TR");
          }
        });
      }
      const subelerHaritaButtons = document.querySelectorAll(
        "#content-large > div > div:nth-child(3) > div > div > ul > li > a.btn.btn-inverse.btn-mini"
      );
      if (subelerHaritaButtons) {
        subelerHaritaButtons.forEach((button) => {
          button.classList.add("anatomi_subeler_harita_btn");
          if(button.textContent !== "Konumu Gör"){
          button.textContent = "Konumu Gör";
          }
        });
      }
      const subelerRandevuAlınBtn = document.querySelectorAll(
        "#content-large > div > div > div > div > ul > li > a.btn.btn-danger.btn-mini"
      );
      if (subelerRandevuAlınBtn) {
        subelerRandevuAlınBtn.forEach((button) => {
          const liElement = button.closest("li");
          if (liElement) {
            const h5Element = liElement.querySelector("h5");
            if (h5Element) {
              const subeIsmi = h5Element.textContent
                .trim()
                .toLowerCase()
                .replace(/ /g, "_");
              const yeniClassIsmi = `anatomi_${subeIsmi}`;

              button.classList.add(yeniClassIsmi);
            }
          }
          button.classList.add("a_sblr_btn");
        });
      }
      const mobilSubelerimizRandevuAlınBtn = document.querySelectorAll(
        "#content-large > div > div:nth-child(4) > div > div > ul > li> a"
      );
      if (mobilSubelerimizRandevuAlınBtn) {
        mobilSubelerimizRandevuAlınBtn.forEach((button) => {
          button.style.marginTop = "10px";
        });
      }
    };

    generateChooseCity();
    generateSubelerimiz();
  };
  const randevu_form_ilk_adim_redesign_init = () => {
    randevu_form_ilk_adim_redesign_html();
    randevu_form_ilk_adim_redesign_css();
    randevu_form_ilk_adim_redesign_js();
  };
  const randevu_form_ilk_adim_redesign_condition = () => {
    const device = window.innerWidth > 768;
    return device;
  };




  setInterval(() => {
  if (randevu_form_ilk_adim_redesign_condition()) {
    randevu_form_ilk_adim_redesign_init();
  }   
  },50);