const sigortaladım_teklif_listeleme_m_html = () => {
  const html = `
    `;
};
const sigortaladım_teklif_listeleme_m_css = () => {
  const style = `
      <style id= "anatomi_teklif_listeleme_css">
      #InsuranceCompareList > button.compare-minimize{
          display: none !important;
      }
        .dropdown-menu {
    bottom: -350%;
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
     .anatomi_campaign_slider {
          display: none !important;
      }
    
          
            .anatomi_results_text{
          font-size: 20px;
      font-weight: bold;
      text-transform: capitalize;
      padding-bottom: 20px;
      }
      .anatomi_packages{
          margin-top: 25px !important;
          scrollbar-width: none;
      }
          .anatomi_sort{
              display: flex;
            gap: 30px;
            border: none !important;
          width: fit-content;
              border: 1px solid #8080808f;
      border-radius: 5px;
              margin-right: auto !important;
              margin-left: 0 !important;
          }
         
      .anatomi_btn_package1 , .packages button:nth-child(1) {
          border: 1.5px solid #F1BC00 !important;
          }
        .anatomi_btn_package1:hover , .packages button:nth-child(1):hover {
          background-color: #F1BC00 !important;
        }   
      .anatomi_btn_package2 , .packages button:nth-child(2) {
          border: 1.5px solid #92C83E !important;
          }
          .anatomi_btn_package2:hover , .packages button:nth-child(2):hover{
          background-color: #92C83E !important;
  }
      .anatomi_btn_package3 , .packages button:nth-child(3) {
          border: 1.5px solid #EF675C !important;
          }
          .anatomi_btn_package3:hover , .packages button:nth-child(3):hover {
          background-color: #EF675C !important;
  }
      .anatomi_btn_package4 , .packages button:nth-child(4){
          border: 1.5px solid #3074FF !important;
          }
        .anatomi_btn_package4:hover , .packages button:nth-child(4):hover {
   background-color: #3074FF !important;
        }
      .anatomi_btn_package1 , .anatomi_btn_package2 , .anatomi_btn_package3 , .anatomi_btn_package4{
          padding: 10px 20px !important;
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
      .anatomi_offer_item{
      border: none !important;
      display: grid !important;
      grid-template-columns: repeat(2, 1fr);
      
      
      }
           .anatomi_offer_package_badges{
      padding: 8px !important;
      font-size: 14px !important;
      width: 130px !important;
      border-bottom-right-radius: 5px;   
      }
       .anatomi_offer_teminat_detail_button{
        font-size: 14px !important;
        color:#37424A !important;
          display: flex;
        align-items: center;
        gap: 5px;
      }
         .anatomi_offer_buy_button{
          border: 1.5px solid #37424A !important;
          background-color: #37424A !important;
          color: white !important;
          padding: 10px 0px;
      width: 100%;
      margin-top: 10px;
      
      }
      .anatomi_offer_buy_button:hover{
      background-color: white !important;
      color: #37424A !important;
      }
          .buttons{
            grid-column: span 2;
          }
      .anatomi_info_icon {
    margin-left: 5px;
    cursor: pointer;
    font-size: 14px;
  }
    .anatomi_info{
    font-size: 14px;}
    .anatomi_tooltip {
      display: none;
      position: absolute;
      width: fit-content;
      top: 10px;
      right: 10px;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      padding: 5px;
      font-size: 14px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      z-index: 1000;
  }
        .anatomi_hediye_info_text{
          order: 1;
          text-align: end;
          white-space: wrap !important;
}
        .anatomi_hediye_info_text span{
          padding-left: 5px !important;
        }
      .anatomi_hediye_info_text, .anatomi_meslek_indirimi_text{
  color: #5BAF4C;
  white-space: nowrap;
  }
  
   .anatomi_bank_credit_badge{
      display: none !important;}
   .anatomi_compare_container{
      order: 1 !important;
      position: relative;
      margin-top: 0px !important;
      padding: 0px !important;
   }
      .anatomi_logo_container{
          margin-top: 40px !important;
      align-items: center !important;
      padding: 0px 10px 10px 10px;
          grid-column: span 2;
      grid-column-end: none;
          
      }
          .anatomi_logo_container img{
              height:55px !important;
              }
              .anatomi_insurance_name{
                  text-align: center !important;
                  padding: 0px !important;
              }
      .anatomi_offer_buy_button{
      border: 1px solid #37424A;
      width: 50% !important;
          }
  
           .anatomi_secimine_uygun_container{
           display: none;
    position: absolute;
      right: 80px;
      top: 0;
      border-bottom-left-radius: 5px;
      width: 130px;
      height: 36px;
      border-bottom-right-radius: 5px;
    }


    .anatomi_secimine_uygun_container_active {
    display: block !important;}
  
    .anatomi_detail_table{
    gap: 10px !important;
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
    }
      .anatomi_detail_table_item.anatomi_has_desc{
       flex-direction: column !important;
      align-items: flex-start !important;
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
      white-space: normal;
      font-size: 14px !important;
  
          }
      .anatomi_detail_show_all{
        grid-column: span 3 ;
        color: black !important;
        }
  
    .anatomi_teminatlar_container{
      order: 2;
      padding: 0px 0px 0px 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
    
  }
       .anatomi_teminatlar_detail_table_item{
    display: flex;
    gap: 3px;
    }
  
   .compare-list-container{
          background-color: #E8E9EA !important;
        }
    .anatomi_compare_btn_container{
    align-self: center !important;
  }
    .anatomi_compare_btn{
         background-color: #37424A !important;
      opacity: 1 !important;
    }
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
   .offer-item .price{
    flex-wrap: wrap-reverse !important;
    justify-content: flex-end !important;
    padding: 10px !important;
   }
         .offer-item .price .gross{
         width: 100% !important;
         }

             .offer-item .compare{
              order: 1 !important;
             display: flex !important;
    justify-content: flex-start !important;
    width: 100% !important;
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
  
    .detail-container .price-container .btn-alternateprice {
      background: #e7e7e7a1 !important;
      color: white !important;
      border: 1px solid #37424A !important;
      color: black !important;
    }
  
        .detail-container .defaultprice-container{
          background: #e7e7e7a1 !important;
        }
  
        .text-slider-container{
          display: none !important;
        }

      .anatomi_installment{
        width: fit-content !important;
      }
        .anatomi_loading_message{
     color: black;
    font-size: 16px;
}

        .anatomi_sticky_compare_container {
          position: fixed;
          bottom: 0;
          width: 100%;
          background-color: #E8E9EA !important;
          color: black;
          text-align: center;
          padding: 65px 10px;
          height: 150px;
          font-size: 18px;
          z-index: 1000;
  }
          .anatomi_compare_new_button{
      font-size: 16px;
          background-color: white;
    border-radius: 5px;

}

  .anatomi_checkbox_container {
    position: absolute;
    top: 15px;
    right: 10px;
    width: 20px;
    height: 20px;
    visibility: hidden;
  }
 .offer-item .compare input[type=checkbox]:after {
  content: ""; 
}
   .offer-item .compare input[type=checkbox]:checked:after {
    content: "✓";
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
  
          .anatomi_item_card_compared{
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
          }

          .sort-dropdown button {
            height: 40px !important
          }

    </style>
    `;
  const head = document.querySelector("head");
  const css = document.querySelector("#anatomi_teklif_listeleme_css");
  if (!css) {
    head.insertAdjacentHTML("beforeend", style);
  }
};
const sigortaladım_teklif_listeleme_m_js = () => {
  const generateInfoDetail = () => {
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
    const infoBrand = document.querySelector(
      "#offerList > div > div.offer-form-info-container > div.list-controls-container > div.info-detail> div.info-brand"
    );
    const infoBrandP = document.querySelector(
      "#offerList > div > div.offer-form-info-container > div.list-controls-container > div.info-detail > div.info-brand > p"
    );
    if (infoBrandP && !infoBrandP.classList.contains("anatomi_info_brand_p")) {
      infoBrandP.classList.add("anatomi_info_brand_p");
    }

    const aracInfoModel = document.querySelector(
      "#offerList > div > div.offer-form-info-container > div.list-controls-container > div.info-detail> div.info-model"
    );
    if (
      aracInfoModel &&
      !aracInfoModel.classList.contains("anatomi_info_model")
    ) {
      aracInfoModel.classList.add("anatomi_info_model");
    }
    if (aracInfoModel && infoBrand && !infoBrand.contains(aracInfoModel)) {
      infoBrand.insertAdjacentElement("beforeend", aracInfoModel);
    }
    const infoModelStrong = document.querySelector(
      "#offerList > div > div.offer-form-info-container > div.list-controls-container > div.info-detail > div.info-model > p:nth-child(1)"
    );
    if (
      infoModelStrong &&
      !infoModelStrong.classList.contains("anatomi_info_model_strong")
    ) {
      infoModelStrong.classList.add("anatomi_info_model_strong");
    }

    const aracInfoDropdown = document.querySelector(
      "#offerList > div > div.offer-form-info-container > div.list-controls-container > div.info-detail > button"
    );
    if (
      aracInfoDropdown &&
      !aracInfoDropdown.classList.contains("anatomi_info_dropdown")
    ) {
      aracInfoDropdown.classList.add("anatomi_info_dropdown");
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
      packages.insertAdjacentElement("beforebegin", sıralamaBtn);
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
        stickyDiv.textContent =
          "Karşılaştırmak İstediğiniz Teklifleri Seçiniz.";
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
      const existingCloseBtn = document.querySelector(".anatomi_closeBtn");
      let clonedCloseBtn;

      if (existingCloseBtn) {
        clonedCloseBtn = existingCloseBtn.cloneNode(true);
        if (clonedCloseBtn) {
          stickyDiv.appendChild(clonedCloseBtn);
        }

        clonedCloseBtn.addEventListener("click", () => {
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

        existingCloseBtn.addEventListener("click", () => {
          if (clonedCloseBtn) {
            clonedCloseBtn.click();
          }
        });
      }

      const clearButton = document.querySelector(
        "#InsuranceCompareList > div.compare-btn.anatomi_compare_btn_container > button:nth-child(2)"
      );
      if (clearButton) {
        clearButton.addEventListener("click", () => {
          if (existingCloseBtn) {
            existingCloseBtn.click();
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

    const bankCreditBadge = document.querySelectorAll(
      "#offerList > div > div.offer-list-container.casco > div > div.offer-item.has-bank-credit-payment> div.buttons > div.bottom"
    );
    if (bankCreditBadge) {
      bankCreditBadge.forEach((badge) => {
        badge.classList.add("anatomi_bank_credit_badge");
      });
    }

    const bankCreditBadge2 = document.querySelectorAll(
      "div.detail-wrapper > div > div.bank-credit-badge"
    )
    if (bankCreditBadge2) {
      bankCreditBadge2.forEach((badge) => {
        badge.classList.add("anatomi_bank_credit_badge");
      });
    }

  };
  const generateButtons = () => {
    const satınAlBtn = document.querySelectorAll(
      "#offerList > div > div.offer-list-container.casco > div > div.offer-item > div.buttons > div.top > button.btn-ghost"
    );
    const dahaFazlaBtn = document.querySelectorAll(
      "#offerList > div > div.offer-list-container.casco > div > div.offer-item> div.buttons > div.top > button.btn-link"
    );
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
   if (dahaFazlaBtn.length) {
     dahaFazlaBtn.forEach((item) => {
       if (
         !item.classList.contains("anatomi_offer_teminat_detail_button") &&
         item.innerHTML !== "Teminat Detayları &#9660;"
       ) {
         item.classList.add("anatomi_offer_teminat_detail_button");
         const arrowImg = document.createElement("img");
         if(!arrowImg.classList.contains("anatomi_arrow_img")){
          arrowImg.classList.add("anatomi_arrow_img");
         }
         arrowImg.src =
           "https://cro-anatomi.s3.eu-north-1.amazonaws.com/sg_arrow_icon.png"; 

         item.innerHTML = "Teminat Detayları ";
         item.appendChild(arrowImg); 
       }
     });
   }
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
                 "div.price"
               );
               const grossElement = item.querySelector("div.price > div.gross");
               const existingHediyeInfoText = item.querySelector(
                 ".anatomi_hediye_info_text"
               );

               if (hediyePriceSpan && !existingHediyeInfoText) {
                 const hediyeInfoText = document.createElement("div");

                 if (
                   !hediyeInfoText.classList.contains(
                     "anatomi_hediye_info_text"
                   )
                 ) {
                   hediyeInfoText.className = "anatomi_hediye_info_text";
                 }

                 const hediyeTextSpan = document.createElement("span");
                 hediyeTextSpan.textContent = "Hediye Fırsatı";

                 const clonedHediyePriceSpan = hediyePriceSpan.cloneNode(true);

                 hediyeInfoText.appendChild(clonedHediyePriceSpan);
                 clonedHediyePriceSpan.appendChild(hediyeTextSpan);

                 if (grossElement) {
                   const grossPrice = parseFloat(
                     grossElement.textContent
                       .replace(/[^\d,.-]/g, "")
                       .replace(",", ".")
                   );
                   if (grossPrice > 10) {
                     const freeInspectionSpan = document.createElement("span");
                     freeInspectionSpan.textContent =
                       "veya Ücretsiz Araç Muayene";
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

  const generateLogoContainer = () => {
    const logoContainer = document.querySelectorAll(
      "#offerList > div > div.offer-list-container.casco > div > div.offer-item > div.logo"
    );
    if (logoContainer && logoContainer.length > 0) {
      logoContainer.forEach((item) => {
        if (!item.classList.contains("anatomi_logo_container")) {
          item.classList.add("anatomi_logo_container");
        }
      });
    }
    const insuranceName = document.querySelectorAll(
      "#offerList > div > div.offer-list-container.casco > div> div.offer-item > div.logo.anatomi_logo_container > div"
    );
    if (insuranceName && insuranceName.length > 0) {
      insuranceName.forEach((item) => {
        if (!item.classList.contains("anatomi_insurance_name")) {
          item.classList.add("anatomi_insurance_name");
        }
      });
    }
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

    const securePaymentBtn = document.querySelectorAll(
      "div.detail-wrapper > div > button"
    );
    if (securePaymentBtn) {
      securePaymentBtn.forEach((btn) => {
        btn.classList.add("anatomi_secure_payment_btn");
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
      "#offerList > div > div.sort-dropdown.anatomi_sort > button.anatomi_compare_new_button"
    );
    const div = document.querySelector("#InsuranceCompareList");
    const div_check = window.getComputedStyle(div).display === "none";
    if (button && div) {
      if (
        !button.classList.contains("anatomi_compare_button_active") &&
        !div_check
      ) {
        button.dispatchEvent(
          new MouseEvent("click", { bubbles: true, cancelable: true })
        );
      }
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

  setInterval(() => {
    generateInfoDetail();
    generatePackages();
    generateOfferItems();
    generateLogoContainer();
    generatePriceContainer();
    generateButtons();
    generateBadges();
    generateDetailTable();
    addItemToTeminatlar();
    addInfoIcon();
    moveCompareName();
    generateEmptyPage();
    checkCompareBtn();
  }, 100);
};

const sigortaladım_teklif_listeleme_m_init = () => {
  sigortaladım_teklif_listeleme_m_html();
  sigortaladım_teklif_listeleme_m_css();
  sigortaladım_teklif_listeleme_m_js();
};
const sigortaladım_teklif_listeleme_m_condition = () => {
  const checkKasko =
    document
      .querySelector("#offerList > div > h1")
      ?.textContent?.trim()
      ?.toLowerCase() === "kasko sigortası";
  const cssExists = !document.querySelector("#anatomi_teklif_listeleme_css");
  const device = window.innerWidth <= 768;
  return device && checkKasko && cssExists;
};
setInterval(() => {
  if (sigortaladım_teklif_listeleme_m_condition()) {
    sigortaladım_teklif_listeleme_m_init();
  }
});

const generateCompareContainer = () => {
  const compareBtnContainer = document.querySelector(
    "#InsuranceCompareList > div.compare-btn"
  );
  if (
    compareBtnContainer &&
    !compareBtnContainer.classList.contains("anatomi_compare_btn_container")
  ) {
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

  const compareMinimize = document.querySelector(
    "#InsuranceCompareList > button"
  );
  if (compareMinimize) {
    compareMinimize.style.display = "none";
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
