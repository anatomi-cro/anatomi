const sigortaladım_teklif_listeleme_d_html = () => {
  const html = `
      `;
};
const sigortaladım_teklif_listeleme_d_css = () => {
  const style = `
        <style id="anatomi_teklif_listeleme_css">
          #InsuranceCompareList > button.compare-minimize{
          display: none !important;
      }
        .anatomi_steps{
          justify-content: center;
          padding: 30px;
        }
          .anatomi_second_progress_bar{
          border:none !important;
          font-size: 25px;
          }
        .anatomi_info_detail{
            gap: 0px !important;
            justify-content: center;
            border-bottom: none !important;
            background: none !important;
        }
        .anatomi_info_brand{
            border-right: none !important;
        }
        .anatomi_info_icon{
            padding: 0 !important;
        }
        .anatomi_info_brand_p{
            margin: 0 !important;
        }
        .anatomi_info_model{
            margin: 0 !important;
        }
            .anatomi_campaign_slider{
              display: none !important;
            }
        .anatomi_teklif_text{
        font-size: 20px !important;
        font-weight: bold;
        text-transform: capitalize;
        }
        .anatomi_results_text{
            font-size: 20px;
        font-weight: bold;
        text-transform: capitalize;
        padding:40px 0px 0px;
        }
        .anatomi_packages{
        padding: 20px 0px;}
        .anatomi_btn_package1 , .packages button:nth-child(1) {
            border: 1.5px solid #F1BC00 ;
            }
          .anatomi_btn_package1:hover , .packages button:nth-child(1):hover {
            background-color: #F1BC00 ;
          }   
        .anatomi_btn_package2 , .packages button:nth-child(2) {
            border: 1.5px solid #92C83E !important;
            }
            .anatomi_btn_package2:hover , .packages button:nth-child(2):hover{
            background-color: #92C83E !important;
    }
        .anatomi_btn_package3  {
            border: 1.5px solid #EF675C !important;
            }
            .anatomi_btn_package3:hover {
            background-color: #EF675C !important;
    }
        .anatomi_btn_package4 , .packages button:nth-child(4){
            border: 1.5px solid #3074FF !important;
            }
          .anatomi_btn_package4:hover , .packages button:nth-child(4):hover {
     background-color: #3074FF !important;
          }
        .anatomi_btn_package1 , .anatomi_btn_package2 , .anatomi_btn_package3 , .anatomi_btn_package4{
            padding: 5px 20px !important;
        }
        .anatomi_min_price_badge{
          display: none !important;
        }
        .anatomi_sort {
          display: flex;
        }
        .anatomi_sort button{
           border: 1px solid #37424A !important;
        }
        .anatomi_sort button:hover{
            background-color: #37424A !important;
            color: white !important;
        }
        .anatomi_sort button:hover > span{
          background-color: #37424A !important;
        }
        .anatomi_sort button:not([disabled]):focus{
           background-color: #37424A !important;
           color: white !important;
        }
        .anatomi_sort button.opened > span{
          background-color: #37424A !important;
        }
          .anatomi_sticky_compare_container {
          position: fixed;
          bottom: 0;
          width: 100%;
          background-color: #E8E9EA !important;
          color: black;
          text-align: center;
         padding: 45px 10px;
           height: 105px;
          font-size: 18px;
          z-index: 1000;
  }
          .anatomi_item_card_compared{
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
          }
        .anatomi_offer_item{
            min-height: 250px !important;
            align-items: center !important;
            border: none !important;
            justify-content: space-around !important; 
        }
        .anatomi_offer_package_badges{
        padding: 8px!important;
        font-size: 14px !important;
        width: 150px !important;
        border-bottom-right-radius: 5px;    
        }
        .anatomi_buttons_container{
          display: none !important;
        }
        .anatomi_offer_buy_button{
            border: 1.5px solid #37424A !important;
            background-color: #37424A !important;
            color: white !important;
            padding: 10px 0px;
        width: 100%;
        margin-top: 10px;
        order: 5;
        
        }
        .anatomi_offer_buy_button:hover{
        background-color: white !important;
        color: #37424A !important;
        }
        .anatomi_offer_teminat_detail_button{
          font-size: 14px !important;
          font-weight: normal !important;
              display: flex;
        align-items: center;
        gap: 5px;
        }
        .packages button{
            width: fit-content !important;
            height: 40px;
        }
        .anatomi_insurance_name{
          transform: translateY(-20px);
        }
        .anatomi_compare_container{

        width:100% !important;
        padding-bottom: 10px;
        }
        .anatomi_price_container{
        display: flex;
        flex-direction: column;
        order: 3;
          text-align: end;
          padding: 0px !important;
        }
      
        .anatomi_installment {
      position: relative;
      font-size: 16px;
    }
    
    .anatomi_tooltip {
        display: none;
        position: absolute;
        width: fit-content;
        top: -30px;
        right: -50px;
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        padding: 5px;
        font-size: 14px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        z-index: 1000;
    }
    
    .anatomi_info_icon {
      margin-left: 5px;
      cursor: pointer;
      font-size: 14px;
    }
      .anatomi_info{
      font-size: 14px;}
    
    .anatomi_hediye_info_text , .anatomi_meslek_indirimi_text
    {color: #5BAF4C;}
  .anatomi_hediye_info_text span{
    padding-left: 5px;
  }
    .anatomi_detail_table{
     display: grid !important;
      grid-template-columns: repeat(3, 1fr) !important; 
      gap: 20px !important;
      padding: 20px !important;
      border-top: 1px solid #ddd;
    }
      .anatomi_detail_table_title{
      color: black !important;
       grid-column: span 3; 
      text-align: left;
    
      }
      .anatomi_detail_table_item{
          justify-content: flex-start !important;
          align-items: flex-start !important;
          gap: 10px !important;
      }
        .anatomi_detail_table_item.anatomi_has_desc{
         flex-direction: column !important;
        align-items: flex-start !important;
        justify-content: flex-start !important;
        }
          .anatomi_fa_icon{
          order: -1 !important;}
          .fa-times-circle{
          border: none !important;
          font-size: 16px !important;
          } 
          .fa-check-circle{
          border:none !important;
          color: black !important;
          font-size: 16px !important;
          }
          .info-btn{
          border: 1px solid gray;
        border-radius: 50%;
        font-size: 10px;
        width: 17px;
        text-align: center;
        padding: 3px 0px;
        color: black !important;
          }
            .anatomi_amount_description{
            text-align: left !important;
        color: #808080a1;
        font-size: 14px !important;
    
            }
        .anatomi_detail_show_all{
          grid-column: span 3 ;
          color: black !important;
          }
          .compare-list-container{
            background-color: #E8E9EA !important;
          }
            .anatomi_compare_item{
            height: 80px !important;
    
            }
       
       
              .anatomi_compare_btn_container{
              align-self: center !important;
              display: flex !important;
              gap: 20px !important;
              }
          .anatomi_compare_btn{
            background-color: #37424A !important;
        
        opacity: 1 !important;
          }
        .anatomi_bank_credit_badge{
        display: none !important;}
    .anatomi_insuranceListContainer{
    position:relative;
    }
       .anatomi_closeBtn{
       position: absolute;
      top: 10px; 
      right: 10px;
      color: #37424A;
      background: none;
      border: none;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      cursor: pointer;
      z-index: 1000; 
       
       }
      .compare-list-container .compare-item{
      height: 80px !important;}
      .anatomi_secimine_uygun_container{
      display:none;
      position: absolute;
        left: 180px;
        top: 0;
        border-bottom-left-radius: 5px;
        width: 150px;
        height: 36px;
        border-bottom-right-radius: 5px;
      }

      .anatomi_secimine_uygun_container_active {
      display: block !important;}
      .anatomi_teminatlar_container{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40%;
        gap: 10px;
        
      }
    
      .anatomi_teminatlar_detail_table_item{
      display: flex !important;
      gap: 5px;
      width: 40%;
      }
    
      .anatomi_secure_payment_btn{
      background-color: #37424A !important;
      color: white !important;
      }
    
      .anatomi_secure_payment_btn:hover{
      background-color: white !important;
      color: #37424A !important;
      border: 1px solid #37424A !important;
      }
    
      .text-slider-container{
      display: none !important;
      }
     .anatomi_checkbox_container {
    position: absolute;
    top: 35px;
    right: 10px;
    visibility: hidden;
  }

  .anatomi_item_checkbox {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
.anatomi_compare_new_button{
      font-size: 16px;
}
      .offer-item .compare input[type=checkbox]:after {
  content: ""; 
}

.anatomi_loading_message{
     color: black;
    font-size: 18px;
    padding-top: 50px;
}
.offer-item .compare input[type=checkbox]:checked:after {
    content: "🗸";
    background: #3B4146;
}
.offer-item .compare input[type=checkbox]{
   border-color: #3B4146;
    border-radius: 0px;
}
.offer-item .compare input[type=checkbox]:checked {
    border-color: #3B4146;
    border-radius: 0px;
    }  

    .sort-dropdown .dropdown-menu {
      bottom: -350%
    }
      .anatomi_arrow_img{
        height: 8px !important;
      }
        .anatomi_logo_container{
          position: relative;
        }
        .anatomi_logo{
          position: absolute;
          top: 30px;
          left: 10px;
        }

         @media only screen and (max-width: 768px) {
     .anatomi_offer_item{
       display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        align-items: flex-start !important;
        justify-content: flex-start !important;
     }
        .anatomi_offer_package_badges{
          grid-column: span 2;
        }
        .offer-item .logo{
            order:3 !important;
            align-items: center !important;
        }
        .anatomi_price_container{
          flex-direction: column-reverse;
          transform: translateX(-15px);
          order: 5 !important;
          align-items: flex-end !important;
        }
      .anatomi_teminatlar_container {
              width: 100%;
    grid-row: span 2;
    height: 100%;
    margin-left: 10px;
    justify-content: flex-end;
      
    }
    .responsive-container{
    order: 5;
    grid-column: span 2;
    display: flex;
    background-color: #f8f8f8;
    padding: 10px;
    gap: 20px;

    }
    .anatomi_teminatlar_detail_table_item {
      width: 100%;
    }
    .anatomi_offer_buy_button , .anatomi_offer_teminat_detail_button{
      width: 50%;
    }
        .offer-item .price .gross {
          width: 100%;
        }
            .offer-item .price .installment {
              width: 100%;
            }
          .anatomi_detail_table{
            display: flex !important;
          }
               .anatomi_info_detail{
          flex-wrap: nowrap !important;
           background: none !important;
           border-bottom: none !important;
           padding: 10px 0px 30px !important;
      }
            .anatomi_info_brand_p{
          margin: 0 !important;
      }
      .anatomi_info_model{
          margin: 0 !important;
          display: block !important;
      }
      .info-model p{
          white-space: wrap !important;
      }
      .anatomi_info_dropdown{
      display: none !important;
      }
          .offer-item .btn-detail{
            color: #6d6d6d !important;
          }
        .anatomi_compare_container{
          margin: 0px !important;
          padding: 0px !important;
        }
              .detail-container .price-container .btn-alternateprice {
      background: #e7e7e7a1 !important;
      color: white !important;
      border: 1px solid #37424A !important;
      color: black !important;
    }
  
        .detail-container .defaultprice-container{
          background: #e7e7e7a1 !important;
        }
        .anatomi_tooltip{
            top: -30px ;
            right: 10px ;
        }
  }
      </style>
      `;
  const head = document.querySelector("head");
  const css = document.querySelector("#anatomi_teklif_listeleme_css");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};
const sigortaladım_teklif_listeleme_d_js = () => {
 
  
  const desktopHeader = document.querySelector(
    "#dealHeader > div.desktop-header.d-none.d-md-block.p-3.bg-white"
  );
  if (desktopHeader) {
    desktopHeader.setAttribute("style", "display: none !important;");
  }
  const mainMenu = document.querySelector("#dealHeader > nav");
  if (mainMenu) {
    mainMenu.setAttribute("style", "display: none !important;");
  }
  const pageTitle = document.querySelector("#offerList > div > h1");
  if (pageTitle) {
    pageTitle.setAttribute("style", "display: none !important;");
  }
  const steps = document.querySelector(
    "#offerList > div > div.steps.d-none.d-md-flex"
  );
  if (steps) {
    steps.classList.add("anatomi_steps");
  }
  const secondProgressBar = document.querySelector(
    "#offerList > div > div.steps.d-none.d-md-flex > div.second"
  );
  if (secondProgressBar) {
    secondProgressBar.classList.add("anatomi_second_progress_bar");
  }
  const firstProgressBar = document.querySelector(
    "#offerList > div > div.steps.d-none.d-md-flex > div.first"
  );
  const thirdProgressBar = document.querySelector(
    "#offerList > div > div.steps.d-none.d-md-flex > div.third"
  );
  if (firstProgressBar && secondProgressBar) {
    firstProgressBar.style.display = "none";
    thirdProgressBar.style.display = "none";
  }
  const generateInfoDetail = () => {
    const container = document.querySelector(
      "#offerList > div > div.steps.d-none.d-md-flex.anatomi_steps"
    );
    if (container) {
      container.classList.add("anatomi_logo_container");
      const existingImg = container.querySelector(".anatomi_logo");

      if (!existingImg) {
        const imgElement = document.createElement("img");
        imgElement.src =
          "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sg_logo.png";
        imgElement.classList.add("anatomi_logo");

        container.appendChild(imgElement);
      }
    }
    const infoDetail = document.querySelector(
      "#offerList > div > div.offer-form-info-container > div.list-controls-container > div.info-detail"
    );
    if (infoDetail && !infoDetail.classList.contains("anatomi_info_detail")) {
      infoDetail.classList.add("anatomi_info_detail");
    }
    const aracInfoTitle = document.querySelector(
      "#offerList > div > div.offer-form-info-container > div.list-controls-container > div.info-detail > div.info-brand > strong"
    );
    if (aracInfoTitle && !aracInfoTitle.style.display) {
      aracInfoTitle.style.display = "none";
    }
    const infoBrandP = document.querySelector(
      "#offerList > div > div.offer-form-info-container > div.list-controls-container > div.info-detail > div.info-brand > p"
    );
    if (infoBrandP && !infoBrandP.classList.contains("anatomi_info_brand_p")) {
      infoBrandP.classList.add("anatomi_info_brand_p");
    }
    const infoModel = document.querySelector(
      "#offerList > div > div.offer-form-info-container > div.list-controls-container > div.info-detail > div.info-model"
    );
    if (infoModel && !infoModel.classList.contains("anatomi_info_model")) {
      infoModel.classList.add("anatomi_info_model");
    }
    if (infoModel && infoBrandP) {
      infoBrandP.insertAdjacentElement("afterend", infoModel);
    }
    const infoBrand = document.querySelector(
      "#offerList > div > div.offer-form-info-container > div.list-controls-container > div.info-detail > div.info-brand"
    );
    if (infoBrand && !infoBrand.classList.contains("anatomi_info_brand")) {
      infoBrand.classList.add("anatomi_info_brand");
    }
    const infoIcon = document.querySelector(
      "#offerList > div > div.offer-form-info-container > div.list-controls-container > div.info-detail > div.info-icon"
    );
    if (infoIcon && !infoIcon.classList.contains("anatomi_info_icon")) {
      infoIcon.classList.add("anatomi_info_icon");
    }
  };

  const generatePackages = () => {
    const packages = document.querySelector(
      "#offerList > div > div:nth-child(8)"
    );
    if (packages && !packages.classList.contains("anatomi_packages")) {
      packages.classList.add("anatomi_packages");
    }
    const sıralamaBtn = document.querySelector(
      "#offerList > div > div.offer-form-info-container > div.info-text > div > div.sort-dropdown"
    );
    if (
      sıralamaBtn &&
      !sıralamaBtn.classList.contains("anatomi_sort_dropdown")
    ) {
      sıralamaBtn.classList.add("anatomi_sort");
    }
    if (sıralamaBtn && packages) {
      packages.insertAdjacentElement("beforeend", sıralamaBtn);
    }
    const compareNewButton = document.createElement("button");
    if (
      compareNewButton &&
      !compareNewButton.classList.contains("anatomi_compare_new_button")
    ) {
      compareNewButton.classList.add("anatomi_compare_new_button");
      compareNewButton.textContent = "Karşılaştır";
    }
    if (sıralamaBtn && compareNewButton) {
      sıralamaBtn.appendChild(compareNewButton);
    }
    const itemCards = document.querySelectorAll(
      "#offerList > div > div.offer-list-container.casco > div > div.offer-item"
    );

    itemCards.forEach((item) => {
      let checkboxContainer = item.querySelector(".anatomi_checkbox_container");
      if (!checkboxContainer) {
        checkboxContainer = document.createElement("div");
        checkboxContainer.classList.add("anatomi_checkbox_container");
        item.style.position = "relative";
        item.appendChild(checkboxContainer);
      }
    });

    compareNewButton.addEventListener("click", () => {
      let stickyDiv = document.querySelector(
        ".anatomi_sticky_compare_container"
      );
      if (!stickyDiv) {
        stickyDiv = document.createElement("div");
        stickyDiv.classList.add("anatomi_sticky_compare_container");
        stickyDiv.textContent = "Karşılaştırmak İstediğiniz Ürünleri Seçiniz.";
        document.body.appendChild(stickyDiv);
      } else {
        stickyDiv.style.display = "block";
      }
      compareNewButton.classList.add("anatomi_compare_button_active");
      const checkboxContainer = document.querySelectorAll(
        ".anatomi_checkbox_container"
      );
      if (checkboxContainer) {
        checkboxContainer.forEach((checkbox) => {
          checkbox.style.visibility = "visible";
        });
      }

      const itemCards = document.querySelectorAll(
        "#offerList > div > div.offer-list-container.casco > div > div.offer-item"
      );
      itemCards.forEach((item) => {
        if (!item.classList.contains("anatomi_item_card_compared")) {
          item.classList.add("anatomi_item_card_compared");
        }
      });

      const compareContainer = document.querySelectorAll(
        "#offerList > div > div.offer-list-container.casco > div > div.offer-item > div.compare"
      );

      if (compareContainer.length) {
        compareContainer.forEach((item) => {
          item.classList.add("anatomi_compare_container");
          item.style.display = "block";
        });
      }

      let closeBtn2 = stickyDiv.querySelector(".anatomi_closeBtn");

      if (!closeBtn2) {
        closeBtn2 = document.createElement("button");
        closeBtn2.textContent = "X";
        closeBtn2.classList.add("anatomi_closeBtn");

        closeBtn2.addEventListener("click", () => {
          if (stickyDiv.style.display !== "none") {
            stickyDiv.style.display = "none";
          }
        });

        if (!stickyDiv.contains(closeBtn2)) {
          stickyDiv.appendChild(closeBtn2);
        }

        closeBtn2.addEventListener("click", () => {
          stickyDiv.style.display = "none";

          itemCards.forEach((item) => {
            if (item.classList.contains("anatomi_item_card_compared")) {
              item.classList.remove("anatomi_item_card_compared");
            }
          });

          const checkboxesContainer = document.querySelectorAll(
            ".anatomi_checkbox_container"
          );
          checkboxesContainer.forEach((checkboxContainerItem) => {
            checkboxContainerItem.style.visibility = "hidden";
          });
        });
        const inputCheck = document.querySelectorAll(
          "#offerList > div > div.offer-list-container.casco > div > div.offer-item> div.anatomi_checkbox_container.anatomi_insurance_name > div > label > input"
        );
        const clonedCloseBtn = document.querySelector(
          "#InsuranceCompareList > button.anatomi_closeBtn"
        );
        clonedCloseBtn.addEventListener("click", () => {
          inputCheck.forEach((input) => {
            input.checked = false;
          });
          if (closeBtn2) {
            closeBtn2.click();
          }
        });
      }

      const clearButton = document.querySelector(
        "#InsuranceCompareList > div.compare-btn.anatomi_compare_btn_container > button:nth-child(2)"
      );
      if (clearButton) {
        clearButton.addEventListener("click", () => {
          if (closeBtn2) {
            closeBtn2.click();
          }
        });
      }
    });

    const campaignSlider = document.querySelector(
      "#offerList > div > div.campaign-slider"
    );
    if (
      campaignSlider &&
      !campaignSlider.classList.contains("anatomi_campaign_slider")
    ) {
      campaignSlider.classList.add("anatomi_campaign_slider");
    }
    const resultsText = document.querySelector(
      "#offerList > div > div.offer-form-info-container > div.info-text > div"
    );

    if (
      resultsText &&
      !resultsText.classList.contains("anatomi_results_text")
    ) {
      const originalText = resultsText.textContent.trim();

      let updatedText = originalText.replace(
        "Online satın alabileceğin",
        "Sana Özel"
      );
      updatedText = updatedText.replace("teklif", "Kasko Teklifi");

      resultsText.textContent = updatedText;
      resultsText.classList.add("anatomi_results_text");
    }
    if (campaignSlider && resultsText) {
      campaignSlider.insertAdjacentElement("afterend", resultsText);
    }
    const teklifText = document.querySelector(
      "#offerList > div > div.result-text.anatomi_results_text > div > span"
    );
    if (teklifText && !teklifText.classList.contains("anatomi_teklif_text")) {
      teklifText.classList.add("anatomi_teklif_text");
    }
    const btnPackage1 = document.querySelector(
      "#offerList > div > div.packages.anatomi_packages > button.btn-solid.package-1"
    );
    if (btnPackage1 && !btnPackage1.classList.contains("anatomi_package_1")) {
      btnPackage1.classList.add("anatomi_btn_package1");
    }
    const btnPackage2 = document.querySelector(
      "#offerList > div > div.packages.anatomi_packages > button.btn-solid.package-2"
    );
    if (btnPackage2 && !btnPackage2.classList.contains("anatomi_package_2")) {
      btnPackage2.classList.add("anatomi_btn_package2");
    }
    const btnPackage3 = document.querySelector(
      "#offerList > div > div.packages.anatomi_packages > button.btn-solid.package-3"
    );
    if (btnPackage3 && !btnPackage3.classList.contains("anatomi_package_3")) {
      btnPackage3.classList.add("anatomi_btn_package3");
    }
    const btnPackage4 = document.querySelector(
      "#offerList > div > div.packages.anatomi_packages > button.btn-solid.package-4"
    );
    if (btnPackage4 && !btnPackage4.classList.contains("anatomi_package_4")) {
      btnPackage4.classList.add("anatomi_btn_package4");
    }
  };

  const generateOfferItems = () => {
    const offerItems = document.querySelectorAll(
      "#offerList > div > div.offer-list-container.casco > div > div.offer-item"
    );
    if (offerItems) {
      offerItems.forEach((item) => {
        if (!item.classList.contains("anatomi_offer_item")) {
          item.classList.add("anatomi_offer_item");
          const teminatlarContainer = document.createElement("div");
          if (
            !teminatlarContainer.classList.contains(
              "anatomi_teminatlar_container"
            )
          ) {
            teminatlarContainer.className = "anatomi_teminatlar_container";
          }
          if (!item.querySelector(".anatomi_teminatlar_container")) {
            item.appendChild(teminatlarContainer);
          }
        }
        const secimineUygunContainer = document.createElement("div");
        if (
          !secimineUygunContainer.classList.contains(
            "anatomi_secimine_uygun_container"
          )
        ) {
          secimineUygunContainer.className = "anatomi_secimine_uygun_container";
          secimineUygunContainer.innerHTML = `
          <img src="https://anatomi.s3.eu-north-1.amazonaws.com/sigortalad%C4%B1m_secimine_uygun2.png" alt="">
          `;
        }
        if (!item.querySelector(".anatomi_secimine_uygun_container")) {
          item.appendChild(secimineUygunContainer);
        }
      });
    }
  };

  const generateBadges = () => {
    const packageBadges = document.querySelectorAll(
      "#offerList > div > div.offer-list-container.casco > div > div.offer-item > div.package-badge"
    );
    if (packageBadges) {
      packageBadges.forEach((item) => {
        if (!item.classList.contains("anatomi_package_badge")) {
          item.classList.add("anatomi_offer_package_badges");
        }
      });
    }

    const minPriceBadge = document.querySelector(
      "#offerList > div > div.offer-list-container.casco > div:nth-child(1) > div.offer-item > div.price > div.min-price-badge"
    );
    if (
      minPriceBadge &&
      !minPriceBadge.classList.contains("anatomi_min_price_badge")
    ) {
      minPriceBadge.classList.add("anatomi_min_price_badge");
    }
  };

  const generateOfferItemHasContainers = () => {
    const priceContainer = document.querySelectorAll(
      "#offerList > div > div.offer-list-container.casco > div > div.offer-item > div.price"
    );

    const satınAlBtn = document.querySelectorAll(
      "#offerList > div > div.offer-list-container.casco > div > div.offer-item > div.buttons > div.top > button.btn-ghost"
    );
    const dahaFazlaBtn = document.querySelectorAll(
      "#offerList > div > div.offer-list-container.casco > div > div.offer-item> div.buttons > div.top > button.btn-link"
    );

    if (priceContainer.length) {
      priceContainer.forEach((price) => {
        if (!price.classList.contains("anatomi_price_container")) {
          price.classList.add("anatomi_price_container");
        }
      });
    }

    if (satınAlBtn.length) {
      satınAlBtn.forEach((item) => {
        if (
          item.classList.contains("btn-ghost") &&
          !item.classList.contains("anatomi_offer_buy_button") &&
          item.textContent !== "Satın Al"
        ) {
          item.classList.add("anatomi_offer_buy_button");
          item.textContent = "Satın Al";
        }
      });
    }
    if (priceContainer.length && satınAlBtn.length) {
      priceContainer.forEach((price) => {
        const parentOfferItem = price.closest(".anatomi_offer_item");
        if (parentOfferItem) {
          const ilgiliSatınAlBtn = parentOfferItem.querySelector(
            ".buttons > div.top > button.btn-ghost"
          );
          if (ilgiliSatınAlBtn) {
            const existingBtn = price.querySelector(
              ".anatomi_offer_buy_button"
            );
            if (!existingBtn) {
              price.insertAdjacentElement("beforeend", ilgiliSatınAlBtn);
            }
          }
        }
      });
    }

    if (dahaFazlaBtn.length) {
      dahaFazlaBtn.forEach((item) => {
        if (
          !item.classList.contains("anatomi_offer_teminat_detail_button") &&
          item.innerHTML !== "Teminat Detayları &#9660;"
        ) {
          item.classList.add("anatomi_offer_teminat_detail_button");
          const arrowImg = document.createElement("img");
          if (!arrowImg.classList.contains("anatomi_arrow_img")) {
            arrowImg.classList.add("anatomi_arrow_img");
          }
          arrowImg.src =
            "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sg_arrow_icon.png";

          item.innerHTML = "Teminat Detayları ";
          item.appendChild(arrowImg);
        }
      });
    }

    const textInsurance = document.querySelectorAll(
      "#offerList > div > div.offer-list-container.casco > div > div.offer-item > div.logo > div"
    );
    if (textInsurance.length && dahaFazlaBtn.length) {
      textInsurance.forEach((text) => {
        const parentOfferItem = text.closest(".offer-item");
        if (parentOfferItem) {
          const ilgiliDahaFazlaBtn = parentOfferItem.querySelector(
            ".buttons > div.top > button.btn-link"
          );
          if (ilgiliDahaFazlaBtn) {
            const existingBtn = text.querySelector(
              ".anatomi_offer_teminat_detail_button"
            );
            if (!existingBtn) {
              text.insertAdjacentElement("afterend", ilgiliDahaFazlaBtn);
            }
          }
        }
      });
    }

    const buttonsContainer = document.querySelectorAll(
      "#offerList > div > div.offer-list-container.casco > div > div.offer-item > div.buttons"
    );

    if (buttonsContainer) {
      buttonsContainer.forEach((item) => {
        if (!item.classList.contains("anatomi_buttons_container")) {
          item.classList.add("anatomi_buttons_container");
        }
      });
    }
  };

  const moveCompareName = () => {
    const insuranceName = document.querySelectorAll(
      "#offerList > div > div.offer-list-container.casco > div > div.offer-item.anatomi_offer_item > div.anatomi_checkbox_container "
    );

    if (insuranceName.length) {
      insuranceName.forEach((item) => {
        item.classList.add("anatomi_insurance_name");
      });
    }

    document.querySelectorAll(".chkbox").forEach((label) => {
      label.childNodes.forEach((node) => {
        if (node.nodeType === 3) {
          node.textContent = "";
        }
      });
    });

    const compareContainer = document.querySelectorAll(
      "#offerList > div > div.offer-list-container.casco > div > div.offer-item > div.compare"
    );

    if (compareContainer.length) {
      compareContainer.forEach((item) => {
        item.classList.add("anatomi_compare_container");
      });
    }

    if (insuranceName.length && compareContainer.length) {
      insuranceName.forEach((insurance) => {
        const parentOfferItem = insurance.closest(".offer-item");
        if (parentOfferItem) {
          const ilgiliCompareContainer =
            parentOfferItem.querySelector(".compare");
          if (ilgiliCompareContainer) {
            const existingCompare = insurance.nextElementSibling;
            if (existingCompare !== ilgiliCompareContainer) {
              insurance.appendChild(ilgiliCompareContainer);
            }
          }
        }
      });
    }
  };

  const addItemToTeminatlar = () => {
    const indicesToMove = [1, 3, 4];

    const targetContainers = document.querySelectorAll(
      "#offerList > div > div.offer-list-container.casco > div > div.offer-item > div.anatomi_teminatlar_container"
    );
    targetContainers.forEach((targetContainer) => {
      const offerItem = targetContainer.closest(".offer-item-container");

      const detailItems = offerItem.querySelectorAll(
        ".anatomi_detail_table_item"
      );

      indicesToMove.forEach((index) => {
        if (
          detailItems[index] &&
          !targetContainer.contains(detailItems[1]) &&
          !targetContainer.contains(detailItems[3]) &&
          !targetContainer.contains(detailItems[4])
        ) {
          const clonedElement = detailItems[index].cloneNode(true);
          const newClonedElement = clonedElement.cloneNode(true);

          if (
            index === indicesToMove[0] &&
            !newClonedElement.classList.contains(
              "anatomi_teminatlar_detail_table_item"
            )
          ) {
            newClonedElement.classList.add(
              "anatomi_teminatlar_detail_table_item"
            );
            newClonedElement.classList.remove("anatomi_has_desc");

            const descriptionDiv =
              newClonedElement.querySelector(".description");
            if (
              descriptionDiv &&
              !descriptionDiv.textContent.includes("İMM:")
            ) {
              descriptionDiv.textContent = "İMM:";
            }

            const amountDesc = newClonedElement.querySelector(
              ".anatomi_amount_description"
            );
            if (amountDesc) {
              amountDesc.style.color = "#3B4146";
            }
          } else if (
            index === indicesToMove[1] &&
            !newClonedElement.classList.contains(
              "anatomi_teminatlar_detail_table_item"
            )
          ) {
            newClonedElement.classList.add(
              "anatomi_teminatlar_detail_table_item"
            );
            newClonedElement.classList.remove("anatomi_has_desc");

            const descriptionDiv =
              newClonedElement.querySelector(".description");
            if (
              descriptionDiv &&
              !descriptionDiv.textContent.includes("İkame Araç:")
            ) {
              descriptionDiv.textContent = "İkame Araç:";
              descriptionDiv.style.whiteSpace = "nowrap";
            }

            const amountDesc = newClonedElement.querySelector(
              ".anatomi_amount_description"
            );
            if (amountDesc) {
              amountDesc.style.color = "#3B4146";
            }
            const iElements = newClonedElement.querySelectorAll(
              "div > div.amount.anatomi_fa_icon > i"
            );

            if (iElements.length > 0) {
              if (
                Array.from(iElements).some((iElement) =>
                  iElement.classList.contains("fa-times-circle")
                )
              ) {
                newClonedElement.textContent = "İkame Araç: Yok";
              } else if (
                Array.from(iElements).some((iElement) =>
                  iElement.classList.contains("fa-check-circle")
                )
              ) {
                newClonedElement.textContent = "İkame Araç: Var";
              }
            } else if (amountDesc && amountDesc.textContent.trim() !== "") {
              newClonedElement.textContent = "İkame Araç: Var";
            } else {
              newClonedElement.textContent = "İkame Araç: Yok";
            }
          } else if (
            index === indicesToMove[2] &&
            !newClonedElement.classList.contains(
              "anatomi_teminatlar_detail_table_item"
            )
          ) {
            {
              newClonedElement.classList.add(
                "anatomi_teminatlar_detail_table_item"
              );
              newClonedElement.classList.remove("anatomi_has_desc");
            }

            const descriptionDiv =
              newClonedElement.querySelector(".description");
            if (
              descriptionDiv &&
              !descriptionDiv.textContent.includes("Cam Muafiyeti:")
            ) {
              descriptionDiv.textContent = "Cam Muafiyeti:";
              descriptionDiv.style.whiteSpace = "nowrap";
            }

            const iElements = newClonedElement.querySelectorAll(
              "div > div.amount.anatomi_fa_icon > i"
            );

            const amountDesc = newClonedElement.querySelector(
              ".anatomi_amount_description"
            );
            if (amountDesc) {
              amountDesc.style.color = "#3B4146";
            }

            if (iElements.length > 0) {
              if (
                Array.from(iElements).some((iElement) =>
                  iElement.classList.contains("fa-times-circle")
                )
              ) {
                newClonedElement.textContent = "Cam Muafiyeti: Yok";
              } else if (
                Array.from(iElements).some((iElement) =>
                  iElement.classList.contains("fa-check-circle")
                )
              ) {
                newClonedElement.textContent = "Cam Muafiyeti: Var";
              }
            } else if (amountDesc && amountDesc.textContent.trim() !== "") {
              newClonedElement.textContent = "Cam Muafiyeti: Var";
            } else {
              newClonedElement.textContent = "Cam Muafiyeti: Yok";
            }
          }
          targetContainer.appendChild(newClonedElement);
        }
      });
    });
  };

  const addInfoIcon = () => {
    const immButton = document.querySelector(
      "div.detail-wrapper > div > div.detail-table.anatomi_detail_table > div:nth-child(2) > div:nth-child(1) > span > button"
    );
    const immDiv = document.querySelectorAll(
      "#offerList > div > div.offer-list-container.casco > div > div.offer-item> div.anatomi_teminatlar_container > div:nth-child(1)"
    );
    immDiv.forEach((item) => {
      const existingButton = item.querySelector("button");
      if (!existingButton && immButton) {
        const clonedButton = immButton.cloneNode(true);
        item.appendChild(clonedButton);

        clonedButton.addEventListener("click", (e) => {
          immButton.click();
        });
      }
    });

    const ikameBtn = document.querySelector(
      "div.detail-wrapper > div > div.detail-table.anatomi_detail_table > div:nth-child(4) > div:nth-child(1) > span > button"
    );
    const ikameDiv = document.querySelectorAll(
      "#offerList > div > div.offer-list-container.casco > div > div.offer-item> div.anatomi_teminatlar_container > div:nth-child(2)"
    );
    ikameDiv.forEach((item) => {
      const existingButton = item.querySelector("button");
      if (!existingButton && ikameBtn) {
        const clonedButton = ikameBtn.cloneNode(true);
        item.appendChild(clonedButton);

        clonedButton.addEventListener("click", (e) => {
          ikameBtn.click();
        });
      }
    });

    const camBtn = document.querySelector(
      "div.detail-wrapper > div > div.detail-table.anatomi_detail_table > div:nth-child(5) > div.description > span > button"
    );
    const CamDiv = document.querySelectorAll(
      "#offerList > div > div.offer-list-container.casco > div > div.offer-item > div.anatomi_teminatlar_container > div:nth-child(3)"
    );
    CamDiv.forEach((item) => {
      const existingButton = item.querySelector("button");
      if (!existingButton && camBtn) {
        const clonedButton = camBtn.cloneNode(true);
        item.appendChild(clonedButton);

        clonedButton.addEventListener("click", (e) => {
          camBtn.click();
        });
      }
    });
  };
  const generatePriceContainer = () => {
    const taksitliFiyatHeader = document.querySelectorAll(
      "#offerList > div > div.offer-list-container.casco > div > div.offer-item > div.price > div.header.hidden-xs"
    );
    if (taksitliFiyatHeader) {
      taksitliFiyatHeader.forEach((item) => {
        item.style.display = "none";
      });
    }

    const installmentElements = document.querySelectorAll(
      "#offerList > div > div.offer-list-container.casco > div > div.offer-item > div.price > div.installment"
    );

    installmentElements.forEach((installmentElement) => {
      const content = installmentElement.textContent.trim();

      if (
        content.includes(" x ") &&
        !installmentElement.classList.contains("processed")
      ) {
        const [priceText, durationText] = content.split(" x ");

        installmentElement.textContent = "";

        const durationSpan = document.createElement("span");
        if (
          !durationSpan.textContent.includes("taksit imkanı") &&
          !durationSpan.classList.contains("anatomi_info")
        ) {
          durationSpan.textContent = durationText
            .trim()
            .replace("Ay", "taksit imkanı");
          durationSpan.className = "anatomi_info";
        }

        const tooltipSpan = document.createElement("span");
        if (
          !tooltipSpan.classList.contains("anatomi_tooltip") &&
          !tooltipSpan.textContent.includes(`${priceText} x ${durationText}`)
        ) {
          tooltipSpan.textContent = `${priceText} x ${durationText}`;
          tooltipSpan.className = "anatomi_tooltip";
        }

        const infoIcon = document.createElement("i");
        const infoImg = document.createElement("img");
        if (
          !infoIcon.classList.contains("anatomi_info_icon") &&
          !infoImg.src.includes(
            "https://anatomi.s3.eu-north-1.amazonaws.com/sigortalad%C4%B1m_info_icon.png"
          )
        ) {
          infoImg.src =
            "https://anatomi.s3.eu-north-1.amazonaws.com/sigortalad%C4%B1m_info_icon.png";
          infoIcon.appendChild(infoImg);
          infoIcon.className = "anatomi_info_icon";
        }

        infoIcon.addEventListener("mouseenter", () => {
          tooltipSpan.style.display = "block";
        });
        infoIcon.addEventListener("mouseleave", () => {
          tooltipSpan.style.display = "none";
        });

        if (
          !installmentElement.contains(durationSpan) &&
          !installmentElement.contains(tooltipSpan) &&
          !installmentElement.contains(infoIcon)
        ) {
          installmentElement.appendChild(durationSpan);
          installmentElement.appendChild(tooltipSpan);
          installmentElement.appendChild(infoIcon);
        }

        const offerItems = document.querySelectorAll(
          "#offerList > div > div.offer-list-container.casco > div"
        );

        offerItems.forEach((item) => {
          const hediyePriceSpan = item.querySelector(
            "div.detail-wrapper > div > div.campaign-table-container > div.campaign-table > button:nth-child(4) > div.campaign-scale > span"
          );
          const priceContainer = item.querySelector(
            "div.price.anatomi_price_container"
          );
          const grossElement = item.querySelector("div.price > div.gross");
          const existingHediyeInfoText = item.querySelector(
            ".anatomi_hediye_info_text"
          );

          if (hediyePriceSpan && !existingHediyeInfoText) {
            const hediyeInfoText = document.createElement("div");

            if (
              !hediyeInfoText.classList.contains("anatomi_hediye_info_text")
            ) {
              hediyeInfoText.className = "anatomi_hediye_info_text";
            }

            const hediyeTextSpan = document.createElement("span");
            hediyeTextSpan.textContent = "Hediye Fırsatı";

            const clonedHediyePriceSpan = hediyePriceSpan.cloneNode(true);

            hediyeInfoText.appendChild(clonedHediyePriceSpan);
            hediyeInfoText.appendChild(hediyeTextSpan);

            if (grossElement) {
              const grossPrice = parseFloat(
                grossElement.textContent
                  .replace(/[^\d,.-]/g, "")
                  .replace(",", ".")
              );
              if (grossPrice > 10) {
                const freeInspectionSpan = document.createElement("span");
                freeInspectionSpan.textContent = "veya Ücretsiz Araç Muayene";
                hediyeInfoText.appendChild(freeInspectionSpan);
              }
            }

            priceContainer.appendChild(hediyeInfoText);
          }
        });

        installmentElement.classList.add("processed");
      }
    });

    if (installmentElements) {
      installmentElements.forEach((item) => {
        if (!item.classList.contains("anatomi_installment")) {
          item.classList.add("anatomi_installment");
        }
      });
    }

    const detailItems = document.querySelectorAll(
      ".anatomi_detail_table > div"
    );

    detailItems.forEach((item) => {
      const descriptionDiv = item.querySelector(".description");

      if (descriptionDiv && descriptionDiv.textContent.includes("Meslek")) {
        const iconDiv = item.querySelector(".anatomi_amount_description");

        if (
          iconDiv &&
          iconDiv.textContent.includes("Meslek indirimi uygulanmıştır.")
        ) {
          const meslekIndirimiText = document.createElement("div");
          if (
            !meslekIndirimiText.textContent.includes(
              "Meslek İndirimi Uygulandı."
            ) &&
            !meslekIndirimiText.classList.contains(
              "anatomi_meslek_indirimi_text"
            )
          ) {
            meslekIndirimiText.textContent = "Meslek İndirimi Uygulandı.";
            meslekIndirimiText.classList.add("anatomi_meslek_indirimi_text");
          }
          const buttonContainers =
            item.parentElement.parentElement.parentElement.parentElement.querySelectorAll(
              ".anatomi_hediye_info_text"
            );
          buttonContainers.forEach((buttonContainer) => {
            const existingText = buttonContainer.parentElement.querySelector(
              ".anatomi_meslek_indirimi_text"
            );

            if (!existingText) {
              buttonContainer.insertAdjacentElement(
                "afterend",
                meslekIndirimiText.cloneNode(true)
              );
            }
          });
        }
      }
    });
  };

  const generateDetailTable = () => {
    const poliçeInfo = document.querySelectorAll(
      "div.detail-wrapper > div > div.top"
    );
    if (poliçeInfo) {
      poliçeInfo.forEach((item) => {
        item.style.display = "none";
      });
    }

    const detailTable = document.querySelectorAll(
      "div.detail-wrapper > div > div.detail-table"
    );
    if (detailTable) {
      detailTable.forEach((item) => {
        item.classList.add("anatomi_detail_table");
      });
    }

    const detailTableTitle = document.querySelectorAll(
      "div.detail-wrapper> div > div.detail-table > div.title"
    );
    if (detailTableTitle) {
      detailTableTitle.forEach((item) => {
        item.classList.add("anatomi_detail_table_title");
      });
    }

    const detailTableAllItem = document.querySelectorAll(
      "div.detail-wrapper> div > div.detail-table.anatomi_detail_table > div"
    );
    if (detailTableAllItem) {
      detailTableAllItem.forEach((item) => {
        item.classList.add("anatomi_detail_table_item");
        item.setAttribute("style", "background-color: white !important;");
      });
    }

    const amountElements = document.querySelectorAll(
      "div.detail-wrapper > div > div.detail-table > div > div.amount"
    );

    amountElements.forEach((amountElement) => {
      const icon = amountElement.querySelector("i");

      if (
        icon &&
        (icon.classList.contains("fa-times-circle") ||
          icon.classList.contains("fa-check-circle"))
      ) {
        amountElement.classList.add("anatomi_fa_icon");
      }
    });
    detailTableAllItem.forEach((targetDiv) => {
      const amountDiv = targetDiv.querySelector(".amount");

      if (amountDiv && !amountDiv.classList.contains("anatomi_fa_icon")) {
        if (amountDiv) {
          amountDiv.classList.add("anatomi_amount_description");
          targetDiv.classList.add("anatomi_has_desc");
        }
      }
    });

    const btnDetailShowAll = document.querySelectorAll(
      "div.detail-wrapper > div > div.detail-table.anatomi_detail_table > a"
    );
    if (btnDetailShowAll) {
      btnDetailShowAll.forEach((btn) => {
        btn.classList.add("anatomi_detail_show_all");
      });
    }
    const bankCreditBadge = document.querySelectorAll(
      "div.detail-wrapper > div > div.bank-credit-badge"
    );
    if (bankCreditBadge) {
      bankCreditBadge.forEach((badge) => {
        badge.classList.add("anatomi_bank_credit_badge");
      });
    }
    const teminatlarAmountDesc = document.querySelectorAll(
      "#offerList > div > div.offer-list-container.casco > div > div.offer-item> div.anatomi_teminatlar_container > div > div.amount.description.anatomi_amount_description"
    );
    if (teminatlarAmountDesc) {
      teminatlarAmountDesc.forEach((desc) => {
        desc.style.width = "fit-content";
      });
    }

    const securePaymentBtn = document.querySelectorAll(
      "div.detail-wrapper > div > button"
    );
    if (securePaymentBtn) {
      securePaymentBtn.forEach((btn) => {
        btn.classList.add("anatomi_secure_payment_btn");
      });
    }
    const noCampaignInputs = document.querySelectorAll(
      "div.detail-wrapper > div > div.campaign-table-container > div.no-campaign > label"
    );

    noCampaignInputs.forEach((label) => {
      if (!label.querySelector("p")) {
        const p = document.createElement("p");
        p.textContent = "Kampanyadan Faydalanmak İstemiyorum.";
        label.appendChild(p);
      }
    });
  };

  const generateEmptyPage = () => {
    const progressContainer = document.querySelector(
      "#offerList > div > div.offer-form-info-container > div.list-controls-container > div.progress-container"
    );

    const loadingPlaceholder = document.querySelector(
      "#offerList > div > div.loading-placeholder-container"
    );

    const infoDetailContainer = document.querySelector(
      "#offerList > div > div.offer-form-info-container > div.list-controls-container > div.info-detail.showed.anatomi_info_detail"
    );

    const existingMessage = document.querySelector(".anatomi_loading_message");

    if (
      !progressContainer &&
      loadingPlaceholder &&
      infoDetailContainer &&
      !existingMessage
    ) {
      const h1 = document.createElement("h1");
      h1.textContent =
        "Hay aksi! Sigorta şirketleri aracına uygun online teklif oluşturamadı. Hiç merak etme, uzman sigorta danışmanlarımız kısa bir süre içinde seni arayacak.";
      h1.classList.add("anatomi_loading_message");
      infoDetailContainer.insertAdjacentElement("afterend", h1);

      const loadingContainer = document.querySelector(
        "#offerList > div > div.loading-placeholder-container"
      );
      if (loadingContainer) {
        loadingContainer.style.display = "none";
      }
    }
  };

  const checkCompareBtn = () => {
    const button = document.querySelector(
      "#offerList > div > div.packages.anatomi_packages > div > button.anatomi_compare_new_button"
    );
    const div = document.querySelector("#InsuranceCompareList");
    const div_check = div.style.display == "none";
    if (button && div) {
      if (
        !button.classList.contains("anatomi_compare_button_active") &&
        !div_check
      ) {
        button.click();
      }
    }
  };
  setInterval(() => {
    generateInfoDetail();
    generatePackages();
    generateOfferItems();
    generateBadges();
    generateOfferItemHasContainers();
    moveCompareName();
    generatePriceContainer();
    generateDetailTable();
    addItemToTeminatlar();
    addInfoIcon();
    generateEmptyPage();
    checkCompareBtn();
  }, 100);
};
const sigortaladım_teklif_listeleme_d_init = () => {
  sigortaladım_teklif_listeleme_d_html();
  sigortaladım_teklif_listeleme_d_css();
  sigortaladım_teklif_listeleme_d_js();
};
const sigortaladım_teklif_listeleme_d_condition = () => {
  const checkKasko =
    document
      .querySelector("#offerList > div > h1")
      ?.textContent?.trim()
      ?.toLowerCase() === "kasko sigortası";
  const device = window.innerWidth > 768;
  const cssExists = !document.querySelector("#anatomi_teklif_listeleme_css");
  return device && checkKasko && cssExists;
};
setInterval(() => {
  if (sigortaladım_teklif_listeleme_d_condition()) {
    sigortaladım_teklif_listeleme_d_init();
  }
}, 100);

const generateCompareContainer = () => {
  const insuranceListContainer = document.querySelector(
    "#InsuranceCompareList"
  );
  if (
    insuranceListContainer &&
    !insuranceListContainer.classList.contains("anatomi_insuranceListContainer")
  ) {
    insuranceListContainer.className = "anatomi_insuranceListContainer";
  }

  const compareListItemContainer = document.querySelector(
    "#InsuranceCompareList > div.compare-list-item-container"
  );
  if (
    compareListItemContainer &&
    !compareListItemContainer.classList.contains(
      "anatomi_compare_list_item_container"
    )
  ) {
    compareListItemContainer.classList.add(
      "anatomi_compare_list_item_container"
    );
  }

  const compareBtnContainer = document.querySelector(
    "#InsuranceCompareList > div.compare-btn"
  );
  if (
    compareBtnContainer &&
    !compareBtnContainer.classList.contains("anatomi_compare_btn_container")
  ) {
    ("");
    compareBtnContainer.classList.add("anatomi_compare_btn_container");
  }
  const compareBtns = document.querySelectorAll(
    "#InsuranceCompareList > div.compare-btn > button"
  );
  if (compareBtns) {
    compareBtns.forEach((btn) => {
      if (!btn.classList.contains("anatomi_compare_btn")) {
        btn.classList.add("anatomi_compare_btn");
      }
    });
  }
  const karsilastirButon = document.querySelector(
    "#InsuranceCompareList > div.compare-btn > button:nth-child(1)"
  );
  if (
    karsilastirButon &&
    !karsilastirButon.classList.contains("anatomi_karsilastir_btn")
  ) {
    karsilastirButon.classList.add("anatomi_karsilastir_btn");
  }
  const compareMinimize = document.querySelector(
    "#InsuranceCompareList > button.compare-minimize"
  );
  if (compareMinimize && !compareMinimize.style.display === "none") {
    compareMinimize.style.display = "none";
  }
};

generateCompareContainer();

const addCloseButton = () => {
  const insuranceListContainer = document.querySelector(
    "#InsuranceCompareList"
  );

  let closeBtn = insuranceListContainer.querySelector(".anatomi_closeBtn");
  let closeBtn_1 = document.querySelectorAll(
    "body > div.anatomi_sticky_compare_container > button"
  )[0];

  if (!closeBtn) {
    closeBtn = document.createElement("button");
    closeBtn.textContent = "X";
    closeBtn.classList.add("anatomi_closeBtn");

    if (!insuranceListContainer.contains(closeBtn)) {
      insuranceListContainer.appendChild(closeBtn);
    }
  }

  closeBtn.addEventListener("click", () => {
    if (insuranceListContainer.style.display !== "none") {
      insuranceListContainer.style.display = "none";
    }

    const input = document.querySelectorAll(".anatomi_compare_container input");

    input &&
      input.forEach((item) => {
        if (item.checked) {
          item.click();
        }
      });

    closeBtn_1.click();
  });
};

setInterval(() => {
  addCloseButton();
}, 1000);


const filtreleme_html = () => {
  const html = `
       <div
          class="anatomi_filtreleme_container"
        >
          <div class="anatomi_filtreleme_content">
            <div class="anatomi_filtreleme_homePage anatomi_filtreleme_page">
              <div
                class="anatomi_filtreleme_homePage_header anatomi_filtreleme_header"
              >
                <button class="header_back">Geri</button>
                <h2 class="header_title">Filtreler</h2>
                <button class="header_temizle">Tümünü Temizle</button>
              </div>
    
              <div class="anatomi_filtreleme_secenekler">
                <div class="anatomi_filtreleme_secenekler_item">
                  <div class="anatomi_filtreleme_secenekler_title">
                    <h2>Servis Seçeneği</h2>
                    
                 <div class="show-filter-count">
          <span></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="15"
            viewBox="0 0 9 15"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.70711 0.429124L8.07107 6.79308C8.46159 7.18361 8.46159 7.81677 8.07107 8.2073L1.70711 14.5713C1.31658 14.9618 0.683418 14.9618 0.292893 14.5713C-0.0976311 14.1807 -0.0976311 13.5476 0.292893 13.157L5.94975 7.50019L0.292893 1.84334C-0.0976311 1.45281 -0.0976311 0.819648 0.292893 0.429124C0.683418 0.0385994 1.31658 0.0385994 1.70711 0.429124Z"
              fill="black"
            />
          </svg>
        </div>
                  </div>
                  <div
                    class="anatomi_filtreleme_sub_page anatomi_filtreleme_page"
                    id="servis_secenegi_page"
                  >
                    <div
                      class="anatomi_filtreleme_subPage_header anatomi_filtreleme_header"
                    >
                      <button class="header_back">Geri</button>
                      <h2 class="header_title">Filtreler</h2>
                      <button class="header_temizle">Filtreleri Temizle</button>
                    </div>
    
                    <div
                      class="anatomi_subPage_filtre_list"
                      id="servis_secenegi_filtre"
                    >
                      <div
                        class="anatomi_filtre_item"
                        id="servis_secenegi_filtre_item"
                      >
                        <input
                          type="checkbox"
                          name="anatomi_filtre_a"
                          id="anatomi_filtre_a"
                        />
                        <label for="anatomi_filtre_a"> Anlaşmalı Yetkili </label>
                      </div>
    
                      <div
                        class="anatomi_filtre_item"
                        id="servis_secenegi_filtre_item"
                      >
                        <input
                          type="checkbox"
                          name="anatomi_filtre_b"
                          id="anatomi_filtre_b"
                        />
                        <label for="anatomi_filtre_b"> Anlaşmalı Özel </label>
                      </div>
    
                      <div
                        class="anatomi_filtre_item"
                        id="servis_secenegi_filtre_item"
                      >
                        <input
                          type="checkbox"
                          name="anatomi_filtre_c"
                          id="anatomi_filtre_c"
                        />
                        <label for="anatomi_filtre_c">
                          Anlaşmalı Yetkili ve Özel
                        </label>
                      </div>
                    </div>
    
                    <div class="anatomi_filtremele_submit_button sub_page_submit">
                      <button>Uygula</button>
                    </div>
                  </div>
                </div>
    
                <div class="anatomi_filtreleme_secenekler_item">
                  <div class="anatomi_filtreleme_secenekler_title">
                    <h2>İMM Tutarı</h2>
              <div class="show-filter-count">
          <span></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="15"
            viewBox="0 0 9 15"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.70711 0.429124L8.07107 6.79308C8.46159 7.18361 8.46159 7.81677 8.07107 8.2073L1.70711 14.5713C1.31658 14.9618 0.683418 14.9618 0.292893 14.5713C-0.0976311 14.1807 -0.0976311 13.5476 0.292893 13.157L5.94975 7.50019L0.292893 1.84334C-0.0976311 1.45281 -0.0976311 0.819648 0.292893 0.429124C0.683418 0.0385994 1.31658 0.0385994 1.70711 0.429124Z"
              fill="black"
            />
          </svg>
        </div>
                  </div>
                  <div
                    class="anatomi_filtreleme_sub_page anatomi_filtreleme_page"
                    id="imm_tutari_page"
                  >
                    <div
                      class="anatomi_filtreleme_subPage_header anatomi_filtreleme_header"
                    >
                      <button class="header_back">Geri</button>
                      <h2 class="header_title">Filtreler</h2>
                      <button class="header_temizle">Filtreleri Temizle</button>
                    </div>
    
                    <div class="anatomi_subPage_filtre_list" id="imm_tutari_filtre">
                      <div class="anatomi_filtre_item" id="imm_tutari_filtre_item">
                        <input
                          type="checkbox"
                          name="anatomi_filtre_a"
                          id="anatomi_filtre_a"
                        />
                        <label for="anatomi_filtre_a"> 500.000 TL’ye kadar </label>
                      </div>
    
                      <div class="anatomi_filtre_item" id="imm_tutari_filtre_item">
                        <input
                          type="checkbox"
                          name="anatomi_filtre_b"
                          id="anatomi_filtre_b"
                        />
                        <label for="anatomi_filtre_b">
                          500.001 TL – 1.000.000 TL arasında
                        </label>
                      </div>
    
                      <div class="anatomi_filtre_item" id="imm_tutari_filtre_item">
                        <input
                          type="checkbox"
                          name="anatomi_filtre_c"
                          id="anatomi_filtre_c"
                        />
                        <label for="anatomi_filtre_c">
                          1.000.001 TL – 5.000.000 TL arasında
                        </label>
                      </div>
    
                      <div class="anatomi_filtre_item" id="imm_tutari_filtre_item">
                        <input
                          type="checkbox"
                          name="anatomi_filtre_d"
                          id="anatomi_filtre_d"
                        />
                        <label for="anatomi_filtre_d"> 5.000.001 TL üzeri </label>
                      </div>
                    </div>
    
                    <div class="anatomi_filtremele_submit_button sub_page_submit">
                      <button>Uygula</button>
                    </div>
                  </div>
                </div>
    
                <div class="anatomi_filtreleme_secenekler_item">
                  <div class="anatomi_filtreleme_secenekler_title">
                    <h2>Parça Seçimi</h2>
              <div class="show-filter-count">
          <span></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="15"
            viewBox="0 0 9 15"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.70711 0.429124L8.07107 6.79308C8.46159 7.18361 8.46159 7.81677 8.07107 8.2073L1.70711 14.5713C1.31658 14.9618 0.683418 14.9618 0.292893 14.5713C-0.0976311 14.1807 -0.0976311 13.5476 0.292893 13.157L5.94975 7.50019L0.292893 1.84334C-0.0976311 1.45281 -0.0976311 0.819648 0.292893 0.429124C0.683418 0.0385994 1.31658 0.0385994 1.70711 0.429124Z"
              fill="black"
            />
          </svg>
        </div>
                  </div>
                  <div
                    class="anatomi_filtreleme_sub_page anatomi_filtreleme_page"
                    id="orijinal parça_page"
                  >
                    <div
                      class="anatomi_filtreleme_subPage_header anatomi_filtreleme_header"
                    >
                      <button class="header_back">Geri</button>
                      <h2 class="header_title">Filtreler</h2>
                      <button class="header_temizle">Filtreleri Temizle</button>
                    </div>
    
                    <div
                      class="anatomi_subPage_filtre_list"
                      id="orijinal parça_filtre"
                    >
                      <div
                        class="anatomi_filtre_item"
                        id="orijinal parça_filtre_item"
                      >
                        <input
                          type="checkbox"
                          name="anatomi_filtre_a"
                          id="anatomi_filtre_a"
                        />
                        <label for="anatomi_filtre_a"> Orijinal </label>
                      </div>
                      <div class="anatomi_filtre_item" id="cam_filtre_item">
                        <input
                          type="checkbox"
                          name="anatomi_filtre_b"
                          id="anatomi_filtre_b"
                        />
                        <label for="anatomi_filtre_b"> Yan Sanayi </label>
                      </div>
                    </div>
    
                    <div class="anatomi_filtremele_submit_button sub_page_submit">
                      <button>Uygula</button>
                    </div>
                  </div>
                </div>
    
                <div class="anatomi_filtreleme_secenekler_item">
                  <div class="anatomi_filtreleme_secenekler_title">
                    <h2>İkame Araç</h2>
              <div class="show-filter-count">
          <span></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="15"
            viewBox="0 0 9 15"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.70711 0.429124L8.07107 6.79308C8.46159 7.18361 8.46159 7.81677 8.07107 8.2073L1.70711 14.5713C1.31658 14.9618 0.683418 14.9618 0.292893 14.5713C-0.0976311 14.1807 -0.0976311 13.5476 0.292893 13.157L5.94975 7.50019L0.292893 1.84334C-0.0976311 1.45281 -0.0976311 0.819648 0.292893 0.429124C0.683418 0.0385994 1.31658 0.0385994 1.70711 0.429124Z"
              fill="black"
            />
          </svg>
        </div>
                  </div>
                  <div
                    class="anatomi_filtreleme_sub_page anatomi_filtreleme_page"
                    id="ikame_arac_page"
                  >
                    <div
                      class="anatomi_filtreleme_subPage_header anatomi_filtreleme_header"
                    >
                      <button class="header_back">Geri</button>
                      <h2 class="header_title">Filtreler</h2>
                      <button class="header_temizle">Filtreleri Temizle</button>
                    </div>
    
                    <div class="anatomi_subPage_filtre_list" id="ikame_arac_filtre">
                      <div class="anatomi_filtre_item" id="ikame_arac_filtre_item">
                        <input
                          type="checkbox"
                          name="anatomi_filtre_a"
                          id="anatomi_filtre_a"
                        />
                        <label for="anatomi_filtre_a"> Yılda 7 Gün </label>
                      </div>
                      <div class="anatomi_filtre_item" id="ikame_arac_filtre_item">
                        <input
                          type="checkbox"
                          name="anatomi_filtre_b"
                          id="anatomi_filtre_b"
                        />
                        <label for="anatomi_filtre_b"> Yılda 15 Gün </label>
                      </div>
                    </div>

                     <div class="anatomi_filtremele_submit_button sub_page_submit">
                  <button>Uygula</button>
                </div>
                  </div>
                </div>
    
                <div class="anatomi_filtreleme_secenekler_item">
                  <div class="anatomi_filtreleme_secenekler_title">
                    <h2>Sigorta Şirketleri</h2>
              <div class="show-filter-count">
          <span></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="15"
            viewBox="0 0 9 15"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.70711 0.429124L8.07107 6.79308C8.46159 7.18361 8.46159 7.81677 8.07107 8.2073L1.70711 14.5713C1.31658 14.9618 0.683418 14.9618 0.292893 14.5713C-0.0976311 14.1807 -0.0976311 13.5476 0.292893 13.157L5.94975 7.50019L0.292893 1.84334C-0.0976311 1.45281 -0.0976311 0.819648 0.292893 0.429124C0.683418 0.0385994 1.31658 0.0385994 1.70711 0.429124Z"
              fill="black"
            />
          </svg>
        </div>
                  </div>
                  <div
                    class="anatomi_filtreleme_sub_page anatomi_filtreleme_page"
                    id="sigorta_sirketi_page"
                  >
                    <div
                      class="anatomi_filtreleme_subPage_header anatomi_filtreleme_header"
                    >
                      <button class="header_back">Geri</button>
                      <h2 class="header_title">Filtreler</h2>
                      <button class="header_temizle">Filtreleri Temizle</button>
                    </div>
    
                    <div
                      class="anatomi_subPage_filtre_list"
                      id="sigorta_sirketi_filtre"
                    ></div>
    
                    <div class="anatomi_filtremele_submit_button sub_page_submit">
                      <button>Uygula</button>
                    </div>
                  </div>
                </div>
              </div>
    
              <div class="anatomi_filtremele_submit_button main_submit">
                <button>Teklifleri Gör</button>
              </div>
            </div>
          </div>
        </div>
    
      `;

  const body = document.querySelector("body");
  if (body.querySelector(".anatomi_filtreleme_container") === null) {
    body.insertAdjacentHTML("beforeend", html);
  }
};

const filtreleme_style = () => {
  const style = `
          <style>
        .anatomi_filtreleme_container {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          display: none;
          transition: all 0.3s ease-in-out;
          z-index: 9999999999999999;
          background-color: rgba(0, 0, 0, 0.3);
        }
    
        .anatomi_filtreleme_container_active {
          display: block;
          transition: all 0.3s ease-in-out;
        }
    
        .anatomi_filtreleme_content {
          position: absolute;
          right: 0;
          width: 400px;
          height: 100%;
          background-color: #f3f6f8;
        }
    
        .anatomi_filtreleme_header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
    
        .anatomi_filtreleme_homePage {
          position: relative;
        }
    
        .anatomi_filtreleme_page {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          margin: 0 auto;
          gap: 20px;
          padding: 20px;
        }
    
        .header_back,
        .header_temizle {
          border: none;
          background-color: transparent;
          color: #a5a8ab;
          font-size: 14px;
          font-weight: 600;
        }
    
        .header_title {
          font-size: 16px;
          font-weight: 600;
        }
    
        .anatomi_filtreleme_secenekler {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          height: fit-content;
          flex-direction: column;
          margin-top: 20px;
        }
    
        .anatomi_filtreleme_secenekler_item {
          display: flex;
          width: 100%;
          height: fit-content;
          justify-content: space-between;
          align-items: center;
          background-color: #fff;
          border-bottom: 1px solid #d9d9d9;
          cursor: pointer;
        }
    
        .anatomi_filtreleme_secenekler_item:last-child {
          border-bottom: none;
        }
    
        .anatomi_filtreleme_secenekler_title {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
          padding: 20px;
        }
    
        .anatomi_filtreleme_secenekler h2 {
          font-size: 16px;
          font-weight: 600;
        }
    
        .anatomi_filtreleme_secenekler svg {
          width: 12px;
          height: 12px;
        }
    
        .anatomi_filtreleme_sub_page {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: translateX(100%);
          z-index: 99;
          background-color: #f3f6f8;
          transition: transform 0.3s ease-in-out;
        }
    
        .anatomi_filtreleme_sub_page_active {
          display: flex !important;
          transition: transform 0.3s ease-in-out;
          transform: translateX(0%);
        }
    
        .anatomi_filtremele_submit_button {
          width: 90%;
          position: absolute;
          bottom: 2%;
          margin: 0 auto;
        }
    
        .anatomi_filtremele_submit_button button {
          height: 50px;
          width: 100%;
          border: none;
          border-radius: 6px;
          background-color: #37424a;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
        }
    
        .header_back {
          cursor: pointer;
        }
    
        .anatomi_subPage_filtre_list {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: column;
          width: 100%;
          height: 100%;
          margin-top: 20px;
          overflow-y: scroll;
          padding-bottom: 60px;
        }
    
        .anatomi_subPage_filtre_list::-webkit-scrollbar {
          display: none;
        }
    
        .anatomi_filtre_item {
          width: 100%;
          height: fit-content;
          padding: 20px 50px;
          background-color: #fff;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 15px;
          cursor: pointer;
          border-bottom: 1px solid #d9d9d9;
        }
    
        .anatomi_filtre_item:last-child {
          border-bottom: none;
        }
    
        .anatomi_filtre_item label,
        .anatomi_filtre_item input {
          cursor: pointer;
          appearance: auto !important;
        }
    
        .offer-item-container.anatomi_unselected_filter {
          display: none !important;
        }
    
        .offer-item-container.anatomi_selected_filter {
          display: flex;
        }
    
        .anatomi_sort {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 10px;
          width: 100%;
          height: 100%;
        }

        .anatomi_filtre_button {
        display: flex;
        flex-direction: row-reverse;
        }
    
        .anatomi_filtre_button:hover {
          background-color: #fff !important;
          color: #000 !important;
        }
    
        .anatomi_filtre_button:hover span {
          background-color: #fff !important;
          color: #000 !important;
        }
    
        #offerList
          > div
          > div.packages.anatomi_packages
          > div
          > button.anatomi_filtre_button {
          border: 1.5px solid #37424a !important;
        }
    
        #offerList
          > div
          > div.packages.anatomi_packages
          > div
          > button.anatomi_filtre_button:hover {
          background-color: #37424a !important;
          color: #fff !important;
        }
    
        #offerList
          > div
          > div.packages.anatomi_packages
          > div
          > button.anatomi_filtre_button:hover
          span {
          background-color: #37424a !important;
          color: #fff !important;
        }
    
        .anatomi_filtre_button:hover svg path,
        .anatomi_filtre_button:hover svg circle {
          stroke: white;
        }
    
        @media screen and (max-width: 768px) {
          .anatomi_filtreleme_container {
            width: 100vw;
          }
    
          .anatomi_sort {
            border: none !important;
            justify-content: flex-start !important;
          }
    
          .anatomi_filtre_button {
            padding: 7px !important;
            width: 150px !important;
            display: flex !important;
            justify-content: space-between !important;
            flex-direction: row-reverse !important;
            align-items: center !important;
            gap: 10px !important;
            font-weight: 600 !important;
            background-color: #fff !important;
                border-radius: 5px !important;
          }
    
          .anatomi_filtre_button span {
          margin: 0 !important;
          padding: 0 !important;
          font-size: 16px !important;
          }
        }
      </style>
          `;

  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};

const filtreleme_js = () => {
  const handle_add_filtre_button = () => {
    const container = document.querySelector(".anatomi_sort");
    const button = document.createElement("button");
    button.classList.add("anatomi_filtre_button");
    button.innerHTML = `
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="11" viewBox="0 0 20 11" fill="none">
                <path d="M3.75 9.5H18.75" stroke="black" stroke-linecap="round"/>
                <circle cx="1.25" cy="9.5" r="0.5" fill="#D9D9D9" stroke="black"/>
                <path d="M3.75 5.5H18.75" stroke="black" stroke-linecap="round"/>
                <circle cx="1.25" cy="5.5" r="0.5" fill="#D9D9D9" stroke="black"/>
                <path d="M3.75 1.5H18.75" stroke="black" stroke-linecap="round"/>
                <circle cx="1.25" cy="1.5" r="0.5" fill="#D9D9D9" stroke="black"/>
                </svg>
                <span>Filtrele</span>
        `;

    button.addEventListener("click", () => {
      const anatomi_filtreleme_container = document.querySelector(
        ".anatomi_filtreleme_container"
      );
      anatomi_filtreleme_container.classList.add(
        "anatomi_filtreleme_container_active"
      );
    });

    if (container.querySelector(".anatomi_filtre_button") === null) {
      container.appendChild(button);
    }
  };

  var filtre_answer = [];
  var offer_answer = [];
  var alfabeth = "abcdefghijklmnopqrstuvwxyz".split("");

  const handle_insert_sigorta_sirketi = () => {
    const images = document.querySelectorAll(
      "#offerList > div > div.offer-list-container.casco > div > div.offer-item > div.logo > img"
    );
    const sigorta_sirketi_filtre = document.querySelector(
      "#sigorta_sirketi_filtre"
    );
    const addedTitles = new Set();
    const titles = [];

    images &&
      images.forEach((item) => {
        const title = item.getAttribute("title").trim();

        if (!addedTitles.has(title)) {
          addedTitles.add(title);
          titles.push(title);
        }
      });

    titles.sort();

    titles.forEach((title, idx) => {
      if (
        sigorta_sirketi_filtre.querySelector(
          `label[for='anatomi_filtre_${alfabeth[idx]}']`
        )
      ) {
        return;
      }

      const sigorta_sirketi_filtre_item = document.createElement("div");
      sigorta_sirketi_filtre_item.classList.add("anatomi_filtre_item");
      sigorta_sirketi_filtre_item.id = "sigorta_sirketi_filtre_item";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.name = `anatomi_filtre_${alfabeth[idx]}`;
      input.id = `anatomi_filtre_${alfabeth[idx]}`;

      const label = document.createElement("label");
      label.htmlFor = `anatomi_filtre_${alfabeth[idx]}`;
      label.textContent = title;

      sigorta_sirketi_filtre_item.appendChild(input);
      sigorta_sirketi_filtre_item.appendChild(label);

      sigorta_sirketi_filtre.appendChild(sigorta_sirketi_filtre_item);

      input.addEventListener("change", () => {
        handle_convert_offer_answer();
        handle_show_filter_count();
      });
    });
  };
  const handle_open_page = () => {
    const anatomi_filtreleme_secenekler_item = document.querySelectorAll(
      ".anatomi_filtreleme_secenekler_title"
    );

    anatomi_filtreleme_secenekler_item &&
      anatomi_filtreleme_secenekler_item.forEach((item) => {
        item.addEventListener("click", (e) => {
          const target = e.currentTarget;

          const subPage = target?.parentElement?.querySelector(
            ".anatomi_filtreleme_sub_page"
          );
          if (subPage) {
            subPage.classList.add("anatomi_filtreleme_sub_page_active");
          }
        });
      });
  };

  const handle_back_for_subPage = () => {
    const anatomi_filtreleme_sub_page = document.querySelectorAll(
      ".anatomi_filtreleme_sub_page"
    );

    anatomi_filtreleme_sub_page &&
      anatomi_filtreleme_sub_page.forEach((item) => {
        const back = item.querySelector(".header_back");

        back &&
          back.addEventListener("click", () => {
            const subPage = back.closest(".anatomi_filtreleme_sub_page");
            subPage.classList.remove("anatomi_filtreleme_sub_page_active");
          });
      });
  };

  const handle_back_for_homePage = () => {
    const anatomi_filtreleme_homePage_header_back = document.querySelector(
      ".anatomi_filtreleme_homePage_header .header_back"
    );

    if (anatomi_filtreleme_homePage_header_back) {
      anatomi_filtreleme_homePage_header_back.addEventListener("click", () => {
        anatomi_filtreleme_homePage_header_back
          .closest(".anatomi_filtreleme_container")
          .classList.remove("anatomi_filtreleme_container_active");
      });
    }
  };

  const handle_sub_page_submit = () => {
    const button = document.querySelectorAll(".sub_page_submit");

    button &&
      button.forEach((item, idx) => {
        item.addEventListener("click", () => {
          const back = item.parentElement.querySelector(".header_back");
          back.click();
        });
      });
  };

  const handle_convert_filtre_answer = () => {
    var answer_paper = [
      {
        question: "servis_secenegi",
        answer: {
          anatomi_filtre_a: false,
          anatomi_filtre_b: false,
          anatomi_filtre_c: false,
          anatomi_filtre_d: false,
        },
      },
      {
        question: "imm_tutari",
        answer: {
          anatomi_filtre_a: false,
          anatomi_filtre_b: false,
          anatomi_filtre_c: false,
          anatomi_filtre_d: false,
        },
      },
      {
        question: "orijinal parça",
        answer: {
          anatomi_filtre_a: false,
          anatomi_filtre_b: false,
          anatomi_filtre_c: false,
          anatomi_filtre_d: false,
        },
      },
      {
        question: "ikame_arac",
        answer: {
          anatomi_filtre_a: false,
          anatomi_filtre_b: false,
          anatomi_filtre_c: false,
          anatomi_filtre_d: false,
        },
      },

      {
        question: "sigorta_sirketi",
        answer: {},
      },
    ];

    const element = document.querySelectorAll(
      "#sigorta_sirketi_filtre .anatomi_filtre_item label"
    );

    const alfabeth = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    element.forEach((item, idx) => {
      answer_paper[4].answer[`anatomi_filtre_${alfabeth[idx]}`] = false;
    });

    const updateAnswerPaper = (questionId, answerId) => {
      const question = answer_paper.find((q) => q.question === questionId);
      if (question) {
        question.answer[answerId] = true;
      }
    };

    const sub_page = document.querySelectorAll(".anatomi_filtreleme_sub_page");

    sub_page &&
      sub_page.forEach((item) => {
        const questionId = item.id.split("_page")[0];
        const inputs = item.querySelectorAll("input[type='checkbox']");
        inputs.forEach((input) => {
          if (input.checked) {
            updateAnswerPaper(questionId, input.id);
          }
        });
      });

    filtre_answer = answer_paper;
    return filtre_answer;
  };

  const handle_convert_offer_answer = () => {
    function areAnswerPapersEqual(array1, array2) {
      if (array1.length !== array2.length) {
        return false;
      }

      for (let i = 0; i < array1.length; i++) {
        const item1 = array1[i];
        const item2 = array2[i];

        if (item1.question !== item2.question) {
          return false;
        }
        const answer1 = item1.answer;
        const answer2 = item2.answer;

        const trueKeys1 = Object.keys(answer1).filter((key) => answer1[key]);
        const trueKeys2 = Object.keys(answer2).filter((key) => answer2[key]);

        if (trueKeys1.length === 0 || trueKeys2.length === 0) {
          continue;
        }

        if (!trueKeys1.some((key) => trueKeys2.includes(key))) {
          return false;
        }
      }

      return true;
    }

    const desc = document.querySelectorAll(".anatomi_detail_table");

    desc &&
      desc.forEach((item, idx) => {
        var answer_paper = [
          {
            question: "servis_secenegi",
            answer: {
              anatomi_filtre_a: false,
              anatomi_filtre_b: false,
              anatomi_filtre_c: false,
              anatomi_filtre_d: false,
            },
          },
          {
            question: "imm_tutari",
            answer: {
              anatomi_filtre_a: false,
              anatomi_filtre_b: false,
              anatomi_filtre_c: false,
              anatomi_filtre_d: false,
            },
          },
          {
            question: "orijinal parça",
            answer: {
              anatomi_filtre_a: false,
              anatomi_filtre_b: false,
              anatomi_filtre_c: false,
              anatomi_filtre_d: false,
            },
          },
          {
            question: "ikame_arac",
            answer: {
              anatomi_filtre_a: false,
              anatomi_filtre_b: false,
              anatomi_filtre_c: false,
              anatomi_filtre_d: false,
            },
          },

          {
            question: "sigorta_sirketi",
            answer: {},
          },
        ];

        const alfabeth = [
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
        ];

        const element = document.querySelectorAll(
          "#sigorta_sirketi_filtre .anatomi_filtre_item label"
        );

        element.forEach((item, idx) => {
          answer_paper[4].answer[`anatomi_filtre_${alfabeth[idx]}`] = false;
        });

        const detail_items = item.querySelectorAll(
          ".anatomi_detail_table_item"
        );

        detail_items.forEach((detail_item) => {
          const item_text = detail_item
            ?.querySelector(".description")
            ?.textContent.trim()
            .toLowerCase();

          var servis_1 = false;
          var servis_2 = false;

          if (item_text === "anlaşmalı yetkili servis") {
            const amount = detail_item?.querySelector(".amount i");
            if (amount) {
              if (amount.classList.contains("fa-times-circle")) {
                answer_paper[0].answer.anatomi_filtre_a = false;
              } else {
                answer_paper[0].answer.anatomi_filtre_a = true;
                servis_1 = true;
              }
            } else {
              answer_paper[0].answer.anatomi_filtre_a = true;
              servis_1 = true;
            }
          }

          if (item_text === "anlaşmalı özel servis") {
            const amount = detail_item?.querySelector(".amount i");
            if (amount) {
              if (amount.classList.contains("fa-times-circle")) {
                answer_paper[0].answer.anatomi_filtre_b = false;
              } else {
                answer_paper[0].answer.anatomi_filtre_b = true;
                servis_2 = true;
              }
            } else {
              answer_paper[0].answer.anatomi_filtre_b = true;
              servis_2 = true;
            }
          }

          if (
            answer_paper[0].answer.anatomi_filtre_a &&
            answer_paper[0].answer.anatomi_filtre_b
          ) {
            answer_paper[0].answer.anatomi_filtre_c = true;
          }

          /************ İMM TUTARI ************/
          if (item_text === "i̇htiyari mali mesuliyet (maddi bedeni ayrımsız)") {
            const amount_string = detail_item
              ?.querySelector(".amount")
              .textContent.replace(/\./g, "")
              .replace("TL", "")
              .trim();

            const amount = parseInt(amount_string);
            if (amount) {
              if (amount <= 500000) {
                answer_paper[1].answer.anatomi_filtre_a = true;
              } else {
                answer_paper[1].answer.anatomi_filtre_a = false;
              }

              if (amount > 500000 && amount <= 1000000) {
                answer_paper[1].answer.anatomi_filtre_b = true;
              } else {
                answer_paper[1].answer.anatomi_filtre_b = false;
              }

              if (amount > 1000000 && amount <= 5000000) {
                answer_paper[1].answer.anatomi_filtre_c = true;
              } else {
                answer_paper[1].answer.anatomi_filtre_c = false;
              }

              if (amount > 5000000) {
                answer_paper[1].answer.anatomi_filtre_d = true;
              } else {
                answer_paper[1].answer.anatomi_filtre_d = false;
              }
            }
          }

          /************ PARÇA DEĞİŞİMİ ************/
          if (item_text === "orijinal parça") {
            const amount = detail_item?.querySelector(".amount i");
            if (amount) {
              if (amount.classList.contains("fa-times-circle")) {
                answer_paper[2].answer.anatomi_filtre_a = false;
                answer_paper[2].answer.anatomi_filtre_b = true;
              } else {
                answer_paper[2].answer.anatomi_filtre_a = true;
                answer_paper[2].answer.anatomi_filtre_b = false;
              }
            } else {
              answer_paper[2].answer.anatomi_filtre_a = true;
              answer_paper[2].answer.anatomi_filtre_b = false;
            }
          }

          /************ İKAME ARAÇ ************/
          if (item_text === "yedek araç temini") {
            const amount = detail_item
              ?.querySelector(".amount")
              ?.textContent.trim();
            if (amount.includes("7")) {
              answer_paper[3].answer.anatomi_filtre_a = true;
            }

            if (amount.includes("15")) {
              answer_paper[3].answer.anatomi_filtre_b = true;
            }
          }
        });

        /************ SİGORTA ŞİRKET ************/
        const sigorta_sirketi = document.querySelectorAll(
          "#sigorta_sirketi_filtre .anatomi_filtre_item input"
        );

        const sigorta_sirketi_title = item
          .closest(".offer-item-container")
          .querySelector(".logo img")
          .getAttribute("title");

        if (answer_paper[4] && answer_paper[4].answer) {
          sigorta_sirketi &&
            sigorta_sirketi.forEach((input, idx) => {
              const label = input.nextElementSibling;
              if (label && label.textContent.trim() === sigorta_sirketi_title) {
                answer_paper[4].answer[
                  `anatomi_filtre_${alfabeth[idx]}`
                ] = true;
              }
            });
        }

        offer_answer.push(answer_paper);
      });

    offer_answer.filter((offer, index) => {
      if (areAnswerPapersEqual(offer, filtre_answer)) {
        const parent = desc[index]?.closest(".offer-item-container");
        parent && parent.classList.add("anatomi_selected_filter");
        parent && parent.classList.remove("anatomi_unselected_filter");
        return true;
      }
      return false;
    });
  };

  const input = document.querySelectorAll(".anatomi_filtre_item input");

  input &&
    input.forEach((item) => {
      item.addEventListener("change", () => {
        handle_convert_offer_answer();
      });
    });

  const text = document.querySelector(".anatomi_results_text");
  var old_text = text.textContent;



  const handle_change_text = () => {
    const text = document.querySelector(".anatomi_results_text");

    const offer = document.querySelectorAll(".anatomi_selected_filter");
    const count = Array.from(offer).filter(
      (item) => window.getComputedStyle(item).display === "flex"
    ).length;



    const inputs = document.querySelectorAll(".anatomi_filtre_item");
    const isAnyChecked = Array.from(inputs).some((item) => item.checked);

    if (
      text.textContent !== `Sana Özel ${count} Kasko Teklifi hazırladık.` &&
      count > 0
    ) {
      text.textContent = `Sana Özel ${count} Kasko Teklifi hazırladık.`;
    } else if (count == 0) {
      let button_text;
     const buttons = document.querySelectorAll(".anatomi_packages button");
      buttons &&
        buttons.forEach((item) => {
          if (item.classList.contains("active")) {
            button_text = item.textContent;
            text.textContent = `${button_text} bölümünde uygun teklif bulamadık`;
          }
        });
    }
  };

    
  const handle_submit = () => {
    const submit_button = document.querySelector(
      ".anatomi_filtremele_submit_button.main_submit button"
    );

    const container = document.querySelector(".anatomi_filtreleme_container");

    if (!submit_button.dataset.listenerAdded) {
      submit_button.addEventListener("click", () => {
        const offer = document.querySelectorAll(".offer-item-container");
        offer &&
          offer.forEach((item) => {
            item.classList.add("anatomi_unselected_filter");
            item.classList.remove("anatomi_selected_filter");
          });
        handle_convert_filtre_answer();
        handle_convert_offer_answer();
        container.classList.remove("anatomi_filtreleme_container_active");

        const allInputs = document.querySelectorAll(
          ".anatomi_filtreleme_container input"
        );
        const selectedFilters = [];

        allInputs.forEach((input) => {
          if (input.checked) {
            selectedFilters.push({
              label: input.nextElementSibling.textContent.trim(),
            });
          }
        });

        if (selectedFilters.length > 0) {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "filterSubmit",
            filters: selectedFilters.map((filter) => filter.label).join(", "),
            gtm_uniqueEventId: Date.now(),
          });
        }
      });

      submit_button.dataset.listenerAdded = true;
    }
  };

  const handle_show_filter_count = () => {
    const show_filter_count = document.querySelectorAll(
      ".show-filter-count span"
    );
    const all_input = document.querySelectorAll(
      ".anatomi_filtreleme_container input"
    );

    const updateFilterCount = () => {
      show_filter_count &&
        show_filter_count.forEach((item) => {
          const parent = item.parentElement.parentElement.parentElement;
          const filter_items = parent.querySelectorAll(".anatomi_filtre_item");
          let count = 0;

          filter_items.forEach((filter_item) => {
            const input = filter_item.querySelector("input");
            if (input.checked) {
              count++;
            }
          });

          if (count > 0) {
            item.textContent = `+(${count})`;
          } else {
            item.textContent = "";
          }
        });
    };

    all_input &&
      all_input.forEach((item) => {
        item.addEventListener("change", updateFilterCount);
      });

    updateFilterCount();
  };
  const handle_sub_page_filtreleri_temizle = () => {
    const temizle_button = document.querySelectorAll(".header_temizle");

    temizle_button &&
      temizle_button.forEach((item) => {
        item.addEventListener("click", () => {
          const inputs = item.parentElement.parentElement.querySelectorAll(
            "input[type='checkbox']"
          );
          inputs.forEach((input) => {
            input.checked = false;
          });
          handle_show_filter_count();
        });
      });
  };

  setInterval(() => {
    handle_change_text();
  }, 100);

  handle_sub_page_filtreleri_temizle();
  handle_open_page();
  handle_back_for_subPage();
  handle_back_for_homePage();
  handle_submit();
  handle_sub_page_submit();
  setTimeout(() => {
    handle_insert_sigorta_sirketi();
  }, 500);
  handle_show_filter_count();
  handle_add_filtre_button();
};

const filtreleme_init = () => {
  filtreleme_html();
  filtreleme_style();
  filtreleme_js();
};

const filtreleme_conditions = () => {
  const loading = !document.querySelector(".progress-container");
  const element = !document.querySelector(".anatomi_filtreleme_container");
  //const device = matchMedia("(min-width: 900px)").matches;
  const locatin =
    window.location.href === "https://www.sigortaladim.com/teklif-listeleme";
  return loading && element ;//&& device;
};
setInterval(() => {
  if (filtreleme_conditions()) {
    setTimeout(() => {
      filtreleme_init();
    }, 500);
  }
}, 100);