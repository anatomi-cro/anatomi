const hamburger_menu_rd_html = () => {};

const hamburger_menu_rd_css = () => {
    const style = `
      <style>    
      #mobileMenuMain > ul > li > span > span > i.icon-arrow-simple-down.icon-no-space::before {
     content: none !important;
    }
     #mobileMenuMain > ul > li> span > span > i.icon-arrow-simple-down.icon-no-space {
  background-image: url("https://r.resimlink.com/GierOUxCqa7.png");
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  width: 16px;   
  height: 16px; 
  position: relative;
  top: 5px;
}
   #loginMobile::before , #regisMobile::before{
     content: none !important;
    }
    #loginMobile , #regisMobile{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    }
    #loginMobile img , #regisMobile img{
    width: 20px;
    height: 20px;        
    }

  #mobileMenuMain a, #mobileMenuMain li span{
      line-height: 50px !important;
  }
#mobileMenuMain > ul > li.fl.col-12.line-bottom.anatomi_urunList_kategori.anatomi_firsat_urunleri{
border-bottom: none !important;
}
#mobileMenuMain > ul{
    border-top: none !important;
}
#mobileMenu > div.col.col-12.p-left > div > a{
    border-radius: 4px !important;
}
  .anatomi_cok_satanlar , .anatomi_firsat_urunleri{
    display: flex;
    align-items: center;
  }
.anatomi_cok_satanlar a {
    color: #0F7EBD !important;
    font-weight: bold !important;
}
.anatomi_firsat_urunleri a{
    color: #ED3800  !important;
    font-weight: bold !important;
}
  .anatomi__hamburger_icon{
    width: 30px;
    height: 30px;
  }
.anatomi_logo_container{
    margin: 20px;
}
.anatomi_logo{
width: 40%;
}

.anatomi_cok_satanlar_icon, .anatomi_firsat_urunleri_icon {
    width:25px;
    height: 25px;
}
#closeMobileMenu > div > div > span{
    display: none !important;}
#closeMobileMenu > div > div{
    background-color: white !important;
}
    .icon-cancel:before{
        content: "X" !important;
        color: #808080 !important;
        background-color: transparent !important;
    }
#closeMobileMenu{
    width: 0px !important;
}
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const hamburger_menu_rd_js = () => {
    const fiyatContainer = document.querySelector("#mobileOptions");
    if(fiyatContainer){
        fiyatContainer.style.display = "none";
    }

    const uyelikButtons = document.querySelector("#mobileMenu > div.col.col-12.p-left");
    if(uyelikButtons){
        const targetElement = document.querySelector("#mobileMenuMain");
        targetElement.insertAdjacentElement("beforebegin", uyelikButtons);
    }

    const kategorilerIcon = document.querySelector("#mobileMenuMain > div.fl.col-12.text-title.text-semibold.text-upper.pb.d-flex > i");
    if(kategorilerIcon){
        kategorilerIcon.style.display = "none";
    }

    const cokSatanlarContainer = document.querySelector("#mobileMenuMain > ul > li:nth-child(12)");
    if(cokSatanlarContainer){
        cokSatanlarContainer.classList.add("anatomi_cok_satanlar");
    }
    let cokSatanlarIcon = document.querySelector(".anatomi_cok_satanlar_icon");
    if(!cokSatanlarIcon){
        cokSatanlarIcon = document.createElement("img");
        cokSatanlarIcon.classList.add("anatomi_cok_satanlar_icon");
        cokSatanlarIcon.src = "https://r.resimlink.com/7XhlTn.png";
        cokSatanlarContainer.insertAdjacentElement("afterbegin", cokSatanlarIcon);
    }


    const firsatUrunleriContainer = document.querySelector("#mobileMenuMain > ul > li:nth-child(13)");
    if(firsatUrunleriContainer){
        firsatUrunleriContainer.classList.add("anatomi_firsat_urunleri");
    }
    let firsatUrunleriIcon = document.querySelector(".anatomi_firsat_urunleri_icon");
    if(!firsatUrunleriIcon){
    const firsatUrunleriIcon = document.createElement("img");
    firsatUrunleriIcon.classList.add("anatomi_firsat_urunleri_icon");
    firsatUrunleriIcon.src = "https://r.resimlink.com/NAxSG.png";
    firsatUrunleriContainer.insertAdjacentElement("afterbegin", firsatUrunleriIcon);
    }

    const loginMobile = document.querySelector("#loginMobile");
    let loginMobileIcon = document.querySelector(".anatomi_login_mobile_icon");
    if(!loginMobileIcon){
    const loginMobileIcon = document.createElement("img");
    loginMobileIcon.classList.add("anatomi_login_mobile_icon");
    loginMobileIcon.src = "https://r.resimlink.com/A1u7DG.png";
    loginMobile.insertAdjacentElement("afterbegin", loginMobileIcon);
    }
    const regisMobile = document.querySelector("#regisMobile");
    let regisMobileIcon = document.querySelector(".anatomi_regis_mobile_icon");
    if(!regisMobileIcon){
         const regisMobileIcon = document.createElement("img");
    regisMobileIcon.classList.add("anatomi_regis_mobile_icon");
    regisMobileIcon.src = "https://r.resimlink.com/GVgxiUDSr.png";
    regisMobile.insertAdjacentElement("afterbegin", regisMobileIcon);
    }



    let logoContainer = document.querySelector(".anatomi_logo_container");
    if(!logoContainer){
       const logoContainer = document.createElement("div");
    logoContainer.classList.add("anatomi_logo_container");
    const logoContainerImg = document.createElement("img");
    logoContainerImg.classList.add("anatomi_logo");
    logoContainerImg.src = "https://r.resimlink.com/ltIsH.png";
    logoContainer.appendChild(logoContainerImg);
    const header =document.querySelector("#mobileMenu");
    header.insertAdjacentElement("afterbegin", logoContainer);

    }
    

};

const hamburger_menu_rd_init = () => {
    hamburger_menu_rd_html();
    hamburger_menu_rd_css();
    hamburger_menu_rd_js();
};

const hamburger_menu_rd_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

if (hamburger_menu_rd_condition()) {
    hamburger_menu_rd_init();
}
