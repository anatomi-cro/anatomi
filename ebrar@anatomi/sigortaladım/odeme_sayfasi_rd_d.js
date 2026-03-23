const odeme_sayfasi_rd_d_html = () => {};

const odeme_sayfasi_rd_d_css = () => {
    const style = `
      <style>    

   /** poliçe detail **/

      .payment-page{
          background-color: #F3F6F8;
      }
      .payment-page .cart-title{
          border: none !important;
      }
    .anatomi_company_box{
        background-color: #FCFCFC;
        border: 1px solid #E9E9E9 !important;
    }
    .anatomi_company_box img{
        width: 105px;
        height: 70px;
    }
    .anatomi_product_box{
        border-left : none !important;
        flex-direction: column-reverse !important;
        font-size: 14px !important;
        font-weight: normal !important;
        margin-left: 50px;

    }
    .anatomi_product_box span{
        font-weight: bold !important;
        font-size: 18px !important;
    }
    .anatomi_product_box span strong{
        display:none !important;
    }
    .anatomi_payment_type_btns label{
        border: none !important;
        background-color: transparent !important;
        font-weight: bold !important;
    }
    .anatomi_img_and_police_container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .anatomi_policy_detail {
        align-items: flex-start;
        width: fit-content;
        padding: 0px 5px;
        border: none;
    }
    .anatomi_policy_detail .title{
        font-size: 12px;
        text-decoration: underline;
    }
    .anatomi_policy_detail .description{
        display: none !important;
    }
    .anatomi_policy_detail button{
        display: none !important;
    }
    .anatomi_popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.3);
    }

    .anatomi_popup_hidden {
        display: none;
    }
    .anatomi_close_btn {
        position: absolute;
        top: 10px;
        right: 20px;
        background: transparent;
        border: none;
        font-size: 30px;
        cursor: pointer;
    }



   /** ödeme özeti **/
    .anatomi_odeme_ozeti_right_side{
        width: 40% !important;
    }
    .anatomi_odeme_ozeti_right_side .cart{
        border: 1px solid #E9E9E9 !important;
        background-color: #FCFCFC !important;
        width: 100% !important;
    }
    .anatomi_odeme_ozeti_right_side .item{
        border-bottom: 1px solid #BFBFBF !important;
    }
    .anatomi_odeme_ozeti_right_side .title{
        margin: 30px 0;
        font-weight: bold;
        font-size: 18px;
        padding-bottom: 10px;
        padding-left: 15px;
        padding-right: 15px;
    }
    .anatomi_odeme_ozeti_right_side .name{
        font-weight: bold !important;

    }
    .anatomi_odeme_ozeti_right_side .submit-btn{
        width: 100% !important;   
        font-size: 12px;     
    }
    #app > div:nth-child(3) > div.right-side.anatomi_odeme_ozeti_right_side > div.cart > div.item > img{
        display: none !important;
    }
    .anatomi_odeme_ozeti_right_side .total{
        color: black !important;
        font-weight: bold !important;
    }
    .anatomi_odeme_ozeti_right_side .total-cost{
        font-size: 12px !important;
    }
    .payment-page .cart .item .name .badge{
       background: transparent !important;
        width: 300px !important;
        padding: 0px !important;
    }





/** kampanya container **/

    .anatomi_campaign_box .left , .anatomi_campaign_box .line{
        display: none !important; 
    }
    .anatomi_campaign_box .right{
        width: 100% !important;
        height: 100% !important;
    }
    .anatomi_campaign_box .right button{
        background-color: #FCFCFC !important;
        border: 1px solid #E9E9E9 !important;
        width: 100% !important;
        height: 50px !important;
    }

    


/** imm container **/
        .anatomi_imm_container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        border: 1px solid #E9E9E9;
        padding: 12px;
        margin-top: 12px;
        border-radius: 6px;
        background-color: #f9f9f9;
        width: 100%;
        height: 130px;
        margin-bottom: 20px;
        }

        .imm_badge {
       position: absolute;
        top: 0;
        left: 0;
        background-color: red;
        color: white;
        padding: 4px 15px;
        font-weight: bold;
        font-size: 12px;
        border-radius: 4px;
        text-transform: uppercase;
        }

        .imm_left {
        flex: 1;
        padding-top: 15px;
        }

        .imm_title {
        font-weight: bold;
        font-size: 16px;
        }

        .imm_description {
        font-size: 14px;
        margin-top: 4px;
        color: #555;
        text-decoration: underline;
        font-weight: bold;
        padding-top: 10px;
        }

        .imm_right {
        margin-left: 12px;
        }

        .imm_button {
       padding: 8px 30px;
        background-color: transparent;
        color: black;
        border: 1px solid #000000;
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
        margin-top: 10px;
        }

    .imm_button:hover {
        background-color: #37424A;
        color: white;
    }
    .imm_close_btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background: transparent;
        border: none;
        font-size: 30px;
        cursor: pointer;
    }
    .anatomi_cross_sale_product_box {
         background-color: #FCFCFC !important;
        border: 1px solid #E9E9E9 !important;
        width: 100%;
        margin-top: 30px;
    }
    .anatomi_cross_sale_product_box .title {
        display: none !important;

    }
    .anatomi_cross_sale_product_box .header{
        display: none !important;
    }
    .anatomi_cross_sale_product_box .left{
        color: #37424A !important;
        width: fit-content;
        white-space: nowrap;
        min-width: 90px !important;
    }
    .anatomi_cross_sale_product_box img, .anatomi_cross_sale_product_box .badge{
        display: none !important;
    }
    .anatomi_cross_sale_product_box .right{
        line-height: normal !important;
        font-size: 12px;
        font-weight: normal !important;
    }
    .anatomi_imm_price_container{
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }
    .anatomi_cross_sale_product_box .offer{
        flex-direction: row-reverse;
        justify-content: start;
        gap: 30px;
    }
    .anatomi_cross_sale_product_box .cross-sale-offers {
        display: none !important;
}


    .anatomi_imm_price_container .price{
        color: black !important;
        font-size: 18px !important;
        font-weight: bold !important;
    }
    .anatomi_imm_price_container .installment{
        border: none !important;
        font-size: 14px !important;
        color: #757C81 !important;
    }
    .anatomi_cross_sale_product_box button{
        font-size: 14px !important;
        flex-basis: unset !important;
    }
    #app > div:nth-child(3) > div.right-side.anatomi_odeme_ozeti_right_side > div.anatomi_imm_container > button.btn-solid{
    display: none !important;
        
    }


    /* odeme yapan kisi bölümü */
    .anatomi_odeme_yapan_kisi_exp{
        background: #37424A !important;
        color: white !important;
        font-size: 12px !important;
            border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    }

    .anatomi_insurer_form input[type=radio]:checked{
        background-color: #37424A !important;
        border-color: #37424A !important;
    }
    .anatomi_insurer_form .title{
        font-size: 16px;
    text-transform: capitalize;
    }
    .anatomi_insurer_form .submit-btn{
        font-size: 14px;
        width: 100%;
    }
    .anatomi_insurer_form input[type=text]{
    background-color: #EAECEE !important;
    border: none !important;
    }
    .anatomi_insurer_form label{
        font-weight: bold !important;
    }
    
    .anatomi_ad_soyad_container{
        display: flex;
        gap: 20px;
    }
   .anatomi_ad_container .textbox , .anatomi_soyad_container .textbox{
       width: 100% !important;
   }



    /* kart bilgileri */

 
    .anatomi_payment_title{
        font-size: 18px !important;
        text-transform: capitalize;
    }
    .anatomi_payment_title img{
        margin-right: 10px;
        
    }
    .anatomi_payment_container{
        background-color: #FCFCFC !important;
        border: 1px solid #E9E9E9 !important;

    }
    .anatomi_payment_container label{
        color: #3A3C3F !important;
    }
     #paymentCardNumber , #paymentName , #month, #year, #paymentSecurityNumber{
        background-color: #EAECEE !important;
        border: none !important
     }
    #paymentCardNumber::placeholder, #paymentName::placeholder , #month::placeholder, #year::placeholder, #paymentSecurityNumber::placeholder{
        color: #929DA9 !important;
        opacity: 0.4;
        font-weight: normal !important;
        font-size: 12px;
    }
    #app > div:nth-child(3) > div.left-side > div.payment-container.anatomi_payment_container > div.conditions > label:nth-child(1) > br{
        display: none !important;
    }
    .anatomi_payment_container .btns{
        margin-bottom: 10px !important;
    }
    .anatomi_payment_container .title{
        font-size: 16px !important;
    }
    .anatomi_kredi_karti , .anatomi_alisveris_karti{
        font-size: 14px !important;
        
    }
    .anatomi_kredi_karti.active , .anatomi_alisveris_karti.active {
        background-color: #37424A !important;
        color: white !important;
    }



    /* ön bilgilendirme formu */

    .anatomi_policy_detail_form {
        background-color: #FCFCFC !important;
        border: 1px solid #E9E9E9 !important;
    }
    .anatomi_info_title{
        font-size: 18px !important;
    }
    .anatomi_next_btn{
        border: none;
        background: none;
        font-weight: bold;
        text-decoration: underline;
        height: 30px;
    }
    .anatomi_closeBtn{
        font-size: 16px;
    }
    @media (min-width: 1200px) {
     #app > div:nth-child(3){
        max-width: 1300px;
    }
    }
        
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const odeme_sayfasi_rd_d_js = () => {
        let eventAttached = false;
    const generateOdemeSayfasi = () => {
    /*Şirket Bilgileri*/
    const cartTitle = document.querySelector(".cart-title .container");
    if (cartTitle && cartTitle.textContent !== "Teklif Özetin") {
        cartTitle.textContent = "Teklif Özetin";
    }   

    const companyBox = document.querySelector("#app > div:nth-child(4) > div.left-side > div.company-box")
    if (companyBox && !companyBox.classList.contains("anatomi_company_box")) {
        companyBox.classList.add("anatomi_company_box");
    }
    
    let imageAndPoliceContainer = document.querySelector(".anatomi_img_and_police_container");
    if(!imageAndPoliceContainer){
        imageAndPoliceContainer = document.createElement("div");
        imageAndPoliceContainer.classList.add("anatomi_img_and_police_container");
    }

    const companyImage = document.querySelector("#app > div:nth-child(4) > div.left-side > div.company-box > img")
    if (companyImage && !imageAndPoliceContainer.contains(companyImage)) {
        imageAndPoliceContainer.appendChild(companyImage);
        }

    if(companyBox && imageAndPoliceContainer && !companyBox.contains(imageAndPoliceContainer)){
        companyBox.insertAdjacentElement("afterbegin", imageAndPoliceContainer);
    }

    const product =document.querySelector("#app > div:nth-child(4) > div.left-side > div.company-box.anatomi_company_box > div.product")
    if(product && !product.classList.contains("anatomi_product_box")){
        product.classList.add("anatomi_product_box");
        }
    
    const paymentTabBtns = document.querySelector("#app > div:nth-child(4) > div.left-side > div.company-box.anatomi_company_box > div.payment-type-btns")
    if(paymentTabBtns && !paymentTabBtns.classList.contains("anatomi_payment_type_btns")){
        paymentTabBtns.classList.add("anatomi_payment_type_btns");
        }
    
    const policyDetail = document.querySelector(".policy-detail")
    if(policyDetail && !policyDetail.classList.contains("anatomi_policy_detail") && !policyDetail.classList.contains("policy-info-form-container")){
        policyDetail.classList.add("anatomi_policy_detail");
        }
    
     if(imageAndPoliceContainer && policyDetail && !imageAndPoliceContainer.contains(policyDetail) && !policyDetail.classList.contains("policy-info-form-container")){
        imageAndPoliceContainer.insertAdjacentElement("beforeend", policyDetail);
    }
    const policeTitle = document.querySelector("#app > div:nth-child(4) > div.left-side > div.company-box.anatomi_company_box > div.anatomi_img_and_police_container > div > h2");
    const policeDetailBtn = document.querySelector("#app > div:nth-child(4) > div.left-side > div.company-box.anatomi_company_box > div.anatomi_img_and_police_container > div > button")
      if (policeTitle && policeDetailBtn && !eventAttached) {
        policeTitle.addEventListener("click", () => {
        policeDetailBtn.click();
        });
        eventAttached = true;
    }

    if(policeTitle){
        policeTitle.textContent = "Poliçe Detayları";
    }

   const detailDiv = document.querySelector("#app > div:nth-child(3) > div.left-side > div.company-box.anatomi_company_box > div.anatomi_img_and_police_container > div > div");
    let closeButton = document.querySelector(".anatomi_close_btn");
    if (detailDiv && !closeButton) {
        detailDiv.classList.add("anatomi_popup");


        const closeButton = document.createElement("div");
        closeButton.innerHTML = "&times;";
        closeButton.className = "anatomi_close_btn";

        detailDiv.appendChild(closeButton);
        closeButton.addEventListener("click", () => {
        detailDiv.style.display = "none";
    });
    }
   
    if(policeDetailBtn && detailDiv){
         policeDetailBtn.addEventListener("click", () => {
        if (detailDiv.classList.contains("anatomi_popup_hidden")) {
            detailDiv.style.display = "block";
        } else {
            detailDiv.classList.add("anatomi_popup_hidden");
            detailDiv.style.display = "none";
        }
    });

   }
    

    /* Ödeme Özeti */

    const odemeOzetiRightSide = document.querySelector("#app > div:nth-child(4) > div.right-side")
    if(odemeOzetiRightSide && !odemeOzetiRightSide.classList.contains("anatomi_odeme_ozeti_right_side")){
        odemeOzetiRightSide.classList.add("anatomi_odeme_ozeti_right_side");
        }
    const odemeOzetiTitle = document.querySelector("#app > div:nth-child(4) > div.right-side.anatomi_odeme_ozeti_right_side > div.cart > div.title")
    const cart = document.querySelector("#app > div:nth-child(4) > div.right-side.anatomi_odeme_ozeti_right_side > div.cart")
    if(odemeOzetiTitle && cart){
        cart.insertAdjacentElement("beforebegin", odemeOzetiTitle);
        
    }
      const cartTitleContainer = document.querySelector("#app > div.cart-title")
    const leftSide = document.querySelector("#app > div:nth-child(4) > div.left-side")
    if(cartTitleContainer && leftSide){
        leftSide.insertAdjacentElement("afterbegin", cartTitleContainer);
    }


    /*Kampanya Container */
    const kampanyaContainer = document.querySelector("#app > div:nth-child(3) > div.left-side > div.campaign-box")
    if(kampanyaContainer && !kampanyaContainer.classList.contains("anatomi_campaign_box")){
        kampanyaContainer.classList.add("anatomi_campaign_box");
    }
    const rightSide =  document.querySelector("#app > div:nth-child(3) > div.right-side.anatomi_odeme_ozeti_right_side > div.cart")
    if(rightSide && kampanyaContainer){
        rightSide.insertAdjacentElement("afterend", kampanyaContainer);
        }
    
    const campaignImg = document.querySelector("#app > div:nth-child(3) > div.right-side.anatomi_odeme_ozeti_right_side > div.campaign-box.anatomi_campaign_box > div.right > button > img")
    if (campaignImg) {
    campaignImg.src = "https://i.hizliresim.com/ahzckgv.png?_gl=1*h0e3cn*_ga*MTQ4NTY0OTQ4Mi4xNzQxMjg5ODk2*_ga_M9ZRXYS2YN*czE3NDg5NDQwNDMkbzExJGcxJHQxNzQ4OTQ0MTI4JGo1MiRsMCRoMA..";
    campaignImg.style.width = "25px";
    }

    /* imm container */

        const crossSale = document.querySelector("#app > div:nth-child(3) > div.left-side > div.cross-sale-product-box")
    if(crossSale && !crossSale.classList.contains("anatomi_cross_sale_product_box")){
        crossSale.classList.add("anatomi_cross_sale_product_box");
    }
    
    let priceContainer = document.querySelector(".anatomi_imm_price_container");
    if(!priceContainer){
        priceContainer = document.createElement("div");
        priceContainer.classList.add("anatomi_imm_price_container");

    }

    const price = document.querySelector("#app > div:nth-child(3) > div.left-side > div.cross-sale-product-box.anatomi_cross_sale_product_box > div.cross-sale-offers > div > div.price")
    const installment = document.querySelector("#app > div:nth-child(3) > div.left-side > div.cross-sale-product-box.anatomi_cross_sale_product_box > div.cross-sale-offers > div > div.installment")
    if(installment && price && !priceContainer.contains(installment) && !priceContainer.contains(price)){
        priceContainer.appendChild(installment);
        priceContainer.appendChild(price);
    }


    let immContainer = document.querySelector(".anatomi_imm_container");
    if(!immContainer){
            immContainer = document.createElement("div");
            immContainer.classList.add("anatomi_imm_container");
              if(!odemeOzetiRightSide.contains(immContainer)){
        btn = document.querySelector("#app > div:nth-child(3) > div.right-side.anatomi_odeme_ozeti_right_side > button")
        btn.insertAdjacentElement("beforebegin", immContainer);
    }
        const badge = document.createElement("div");
        badge.classList.add("imm_badge");
        badge.textContent = "Önerimiz";

        const leftContent = document.createElement("div");
        leftContent.classList.add("imm_left");

        const title = document.createElement("div");
        title.classList.add("imm_title");
        title.textContent = "5 milyon TL limitli İMM";

        const description = document.createElement("div");
        description.classList.add("imm_description");
        description.textContent = "İMM nedir?";

        if (crossSale) {
        crossSale.style.display = "none";
        }

        description.addEventListener("click", () => {
        if (crossSale) {
            crossSale.style.display = "flex";
        }
        });

        if (crossSale) {
        const closeBtn = document.createElement("button");
        closeBtn.classList.add("imm_close_btn");
        closeBtn.textContent = "×";

        closeBtn.addEventListener("click", () => {
            crossSale.style.display = "none";
        });

        crossSale.style.position = "relative"; 
        crossSale.appendChild(closeBtn);
        }

        leftContent.appendChild(title);
        leftContent.appendChild(description);

        const rightContent = document.createElement("div");
        rightContent.classList.add("imm_right");
        if(priceContainer){
            rightContent.appendChild(priceContainer);
        }

        const button = document.createElement("button");
        button.classList.add("imm_button");
        button.textContent = "Sepete Ekle";

        rightContent.appendChild(button);
        immContainer.appendChild(badge);
        immContainer.appendChild(leftContent);
        immContainer.appendChild(rightContent);


        const immSepeteEkle = document.querySelector("#app > div:nth-child(3) > div.left-side > div.cross-sale-product-box.anatomi_cross_sale_product_box > div.cross-sale-offers > div > button")
        button.addEventListener ("click", () => {
            immSepeteEkle.click();
        });
        }

        const immNedir = document.querySelector("#app > div:nth-child(3) > div.left-side > div.cross-sale-product-box.anatomi_cross_sale_product_box")
        const submitBtn = document.querySelector("#app > div:nth-child(3) > div.right-side.anatomi_odeme_ozeti_right_side > button")
        if(immNedir && submitBtn){
            submitBtn.insertAdjacentElement("afterend", immNedir);
        }

    /* ödemeyi yapan kişi bölümü */
         const insurerForm = document.querySelector("#app > div:nth-child(3) > div.left-side > div.insurer-form.border.border-secondary.rounded-sm.mb-3.overflow-hidden")
         if(insurerForm && !insurerForm.classList.contains("anatomi_insurer_form")){
            insurerForm.classList.add("anatomi_insurer_form");

         }
        const odemeYapanKisiExp = document.querySelector("#app > div:nth-child(3) > div.left-side > div.insurer-form.border.border-secondary.rounded-sm.mb-3.overflow-hidden > p")
       if(odemeYapanKisiExp && !odemeYapanKisiExp.classList.contains("anatomi_odeme_yapan_kisi_exp") && odemeYapanKisiExp.textContent !== "Kart sahibi sigortalı değilse, kart sahibinin bilgilerini girmen gerekir. Aksi halde işlem tamamlanamaz. Lütfen bir seçim yapınız."){
           odemeYapanKisiExp.classList.add("anatomi_odeme_yapan_kisi_exp");
           odemeYapanKisiExp.textContent = "Kart sahibi sigortalı değilse, kart sahibinin bilgilerini girmen gerekir. Aksi halde işlem tamamlanamaz. Lütfen bir seçim yapınız.";
       }

       const tcknoLabel = document.querySelector("#app > div:nth-child(3) > div.left-side > div.insurer-form.border.border-secondary.rounded-sm.mb-3.overflow-hidden.anatomi_insurer_form > div.insurer-form.mb-5.mx-3.mx-sm-5.w-auto.col-xl-6 > div:nth-child(2) > label")
       const tcknoTarget = document.querySelector("#app > div:nth-child(3) > div.left-side > div.insurer-form.border.border-secondary.rounded-sm.mb-3.overflow-hidden.anatomi_insurer_form > div.insurer-form.mb-5.mx-3.mx-sm-5.w-auto.col-xl-6 > div:nth-child(2)")
       if(tcknoLabel && tcknoTarget){
        tcknoTarget.insertAdjacentElement("beforebegin", tcknoLabel);
       }

       const phoneLabel = document.querySelector("#app > div:nth-child(3) > div.left-side > div.insurer-form.border.border-secondary.rounded-sm.mb-3.overflow-hidden.anatomi_insurer_form > div.insurer-form.mb-5.mx-3.mx-sm-5.w-auto.col-xl-6 > div:nth-child(4) > label")
       const phoneTarget = document.querySelector("#app > div:nth-child(3) > div.left-side > div.insurer-form.border.border-secondary.rounded-sm.mb-3.overflow-hidden.anatomi_insurer_form > div.insurer-form.mb-5.mx-3.mx-sm-5.w-auto.col-xl-6 > div:nth-child(4)")
       if(phoneLabel && phoneTarget){
           phoneTarget.insertAdjacentElement("beforebegin", phoneLabel);
       }

       const adLabel = document.querySelector("#app > div:nth-child(3) > div.left-side > div.insurer-form.border.border-secondary.rounded-sm.mb-3.overflow-hidden.anatomi_insurer_form > div.insurer-form.mb-5.mx-3.mx-sm-5.w-auto.col-xl-6 > div:nth-child(6) > label")
       const adContainer = document.querySelector("#app > div:nth-child(3) > div.left-side > div.insurer-form.border.border-secondary.rounded-sm.mb-3.overflow-hidden.anatomi_insurer_form > div.insurer-form.mb-5.mx-3.mx-sm-5.w-auto.col-xl-6 > div:nth-child(6)") 
    
       let nameContain = document.querySelector(".anatomi_ad_container");
       const targetElm2 = document.querySelector("#app > div:nth-child(3) > div.left-side > div.insurer-form.border.border-secondary.rounded-sm.mb-3.overflow-hidden.anatomi_insurer_form > div.insurer-form.mb-5.mx-3.mx-sm-5.w-auto.col-xl-6 > div:nth-child(5)")
        if (!nameContain && adLabel && adContainer) {
        nameContain = document.createElement("div");
        nameContain.classList.add("anatomi_ad_container");

        nameContain.appendChild(adLabel);
        nameContain.appendChild(adContainer);

        targetElm2.insertAdjacentElement("afterend", nameContain);
        }
        const soyadLabel = document.querySelector("#app > div:nth-child(3) > div.left-side > div.insurer-form.border.border-secondary.rounded-sm.mb-3.overflow-hidden.anatomi_insurer_form > div.insurer-form.mb-5.mx-3.mx-sm-5.w-auto.col-xl-6 > div:nth-child(7) > label")
        const soyadContainer = document.querySelector("#app > div:nth-child(3) > div.left-side > div.insurer-form.border.border-secondary.rounded-sm.mb-3.overflow-hidden.anatomi_insurer_form > div.insurer-form.mb-5.mx-3.mx-sm-5.w-auto.col-xl-6 > div:nth-child(7)")

        let soyadContain = document.querySelector(".anatomi_soyad_container");
        const targetElm3 = document.querySelector(".anatomi_ad_container");
        if(soyadLabel && soyadContainer && !soyadContain){
           soyadContain = document.createElement("div");
           soyadContain.classList.add("anatomi_soyad_container");
           soyadContain.appendChild(soyadLabel);
           soyadContain.appendChild(soyadContainer);
           targetElm3.insertAdjacentElement("afterend", soyadContain);

        }

        let adSoyadContainer = document.querySelector(".anatomi_ad_soyad_container");
        const targetElm4 = document.querySelector("#app > div:nth-child(3) > div.left-side > div.insurer-form.border.border-secondary.rounded-sm.mb-3.overflow-hidden.anatomi_insurer_form > div.insurer-form.mb-5.mx-3.mx-sm-5.w-auto.col-xl-6 > div:nth-child(5)")
        if(!adSoyadContainer && targetElm4){
            adSoyadContainer = document.createElement("div");
            adSoyadContainer.classList.add("anatomi_ad_soyad_container");

            adSoyadContainer.appendChild(nameContain);
            adSoyadContainer.appendChild(soyadContain);

            targetElm4.insertAdjacentElement("afterend", adSoyadContainer);
        }
   
        const dogumLabel = document.querySelector("#app > div:nth-child(3) > div.left-side > div.insurer-form.border.border-secondary.rounded-sm.mb-3.overflow-hidden.anatomi_insurer_form > div.insurer-form.mb-5.mx-3.mx-sm-5.w-auto.col-xl-6 > div.datepicker > div.mx-datepicker > div > label")
        const dogumTarget = document.querySelector("#app > div:nth-child(3) > div.left-side > div.insurer-form.border.border-secondary.rounded-sm.mb-3.overflow-hidden.anatomi_insurer_form > div.insurer-form.mb-5.mx-3.mx-sm-5.w-auto.col-xl-6 > div.datepicker")
        if(dogumLabel && dogumTarget){
            dogumTarget.insertAdjacentElement("beforebegin", dogumLabel);
        }

        
    /* kart bilgileri */

    const paymentContainer = document.querySelector("#app > div:nth-child(3) > div.left-side > div.payment-container")
    if(paymentContainer && !paymentContainer.classList.contains("anatomi_payment_container")){
        paymentContainer.classList.add("anatomi_payment_container");
    }
    const paymentTitle = document.querySelector("#app > div:nth-child(3) > div.left-side > div.payment-container.anatomi_payment_container > div.payment-channels > div:nth-child(2) > h2")
    if(paymentTitle && !paymentTitle.classList.contains("anatomi_payment_title")){
        paymentTitle.classList.add("anatomi_payment_title");
    }
    if(paymentTitle && paymentContainer){
        paymentContainer.insertAdjacentElement("beforebegin", paymentTitle);
    }

    const cardNumber = document.querySelector("#paymentCardNumber")
    if(cardNumber){
        cardNumber.placeholder = "0000 0000 0000 0000";
    }
    const cardPeople = document.querySelector("#paymentName")
    if(cardPeople){
        cardPeople.placeholder = "Kart Üzerindeki İsim";
    }

    const krediKarti = document.querySelector("#app > div:nth-child(3) > div.left-side > div.payment-container.anatomi_payment_container > div.payment-channels > div.btns > button:nth-child(2)")
    if(krediKarti && !krediKarti.classList.contains("anatomi_kredi_karti")){
        krediKarti.classList.add("anatomi_kredi_karti");
        }
    const alısverisKarti = document.querySelector("#app > div:nth-child(3) > div.left-side > div.payment-container.anatomi_payment_container > div.payment-channels > div.btns > button:nth-child(3)")
    if(alısverisKarti && !alısverisKarti.classList.contains("anatomi_alısveris_karti")){
        alısverisKarti.classList.add("anatomi_alisveris_karti");
    }
    

    /* ön bilgilendirme formu */

    const infoContent = document.querySelector("#app > div:nth-child(3) > div.left-side > div.policy-detail.policy-info-form-container > div > div")
    if(infoContent && !infoContent.classList.contains("anatomi_info_content")){
        infoContent.classList.add("anatomi_info_content");
        infoContent.style.height = "100px";
        infoContent.style.overflow = "hidden";
        }
    const policyDetailForm = document.querySelector("#app > div:nth-child(3) > div.left-side > div.policy-detail.policy-info-form-container")
    if(policyDetailForm && !policyDetailForm.classList.contains("anatomi_policy_detail_form")){
        policyDetailForm.classList.add("anatomi_policy_detail_form");
    }

    let devaminiGörBtn = document.querySelector(".anatomi_next_btn");
    if(!devaminiGörBtn){
        devaminiGörBtn = document.createElement("button");
        devaminiGörBtn.classList.add("anatomi_next_btn");
        devaminiGörBtn.textContent = "Devamını Gör";

    }
    if(policyDetailForm && !policyDetailForm.contains(devaminiGörBtn)){
        policyDetailForm.appendChild(devaminiGörBtn);
    }

        devaminiGörBtn.addEventListener("click", () => {
        if (infoContent.style.height === "100px") {
            infoContent.style.height = "350px";
            infoContent.style.overflow = "auto";
            devaminiGörBtn.textContent = "Daha Az Göster";
        } else {
            infoContent.scrollTop = 0;
            infoContent.style.height = "100px";
            devaminiGörBtn.textContent = "Devamını Gör";
            infoContent.style.overflow = "hidden";

        }
    });
    const infoTitle = document.querySelector("#app > div:nth-child(3) > div.left-side > div.policy-detail.policy-info-form-container.anatomi_policy_detail_form > h2")
    if(infoTitle && !infoTitle.classList.contains("anatomi_info_title")){
        infoTitle.classList.add("anatomi_info_title");
    }

     if(infoTitle && policyDetailForm){
        policyDetailForm.insertAdjacentElement("beforebegin", infoTitle);
    }

    const closeBtn = document.querySelectorAll("#app > div:nth-child(3) > div.right-side.anatomi_odeme_ozeti_right_side > div.cart > div:nth-child(2) > div.remove > button")
    closeBtn.forEach((item) => {
        if(item && !item.classList.contains("anatomi_closeBtn")){
            item.classList.add("anatomi_closeBtn");
            item.textContent = "x";
        }
    })
    }
    setInterval(() => {-
        generateOdemeSayfasi();
    }, 100);
};

const odeme_sayfasi_rd_d_init = () => {
    odeme_sayfasi_rd_d_html();
    odeme_sayfasi_rd_d_css();
    odeme_sayfasi_rd_d_js();
};

const odeme_sayfasi_rd_d_condition = () => {
    const device = window.innerWidth > 768;
    return device;
};

if (odeme_sayfasi_rd_d_condition()) {
    odeme_sayfasi_rd_d_init();
}
