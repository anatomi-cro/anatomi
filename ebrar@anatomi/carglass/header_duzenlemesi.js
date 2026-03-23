const header_duzenlemesi_html = () => {
  const html = `
  <div class="anatomi_header_info">
    <div class= "anatomi_header_info_left">
        <div class="anatomi_header_phone">
            <i class="fa-solid fa-phone-volume"></i>
            <p id="anatomi_phoneNumber">0(850) 281 10 86</p>
        </div>
        <div class="anatomi_header_gmail">
            <i class="fa-regular fa-envelope"></i>
            <p id="anatomi_mailText">destek@carglass.com.tr</p>
        </div>
    </div>
    <div class="anatomi_header_info_right">
    <a href="https://www.youtube.com/@carglassturkiye"> <i class="fa-brands fa-youtube"></i></a>   
    <a href="https://www.facebook.com/CarglassTR/?locale=tr_TR"><i class="fa-brands fa-facebook"></i></a>  
    <a href="https://www.instagram.com/carglasstr?igsh=MTZ3N2pyOTdleG1vMQ=="> <i class="fa-brands fa-instagram"></i></a>
    <a href= "https://x.com/CarglassTR"><i class="fa-brands fa-twitter"></i></a>
    </div>
  </div>    
  <span id="copyMessage" style="display:none;">Kopyalandı!</span>
  <span id="copyMessage2" style="display:none;">Kopyalandı!</span>
  `;
  const header = document.querySelector("#header");
  if (header) {
    header.insertAdjacentHTML("beforeend", html);
  }
};

const header_duzenlemesi_css = () => {
  const style = `
      <style>
      .anatomi_header_info{
         position: sticky;
         top: 0;
         background-color: #fff;
         z-index: 999999999999;
         display: flex;
         justify-content: space-between;
         align-items: center;
         padding: 15px 40px 15px;
         border-bottom: 1px solid #0000000f;
      }
    .anatomi_header_info a{
        color: black;
    }
         .anatomi_header_info a:visited{
                     color: black;

         }
      .anatomi_header_info i { 
         font-size: 20px;
      }
      .anatomi_header_info p{
         padding: 0px;
         font-size: 14px;
         font-weight: bold;
         cursor: pointer;
      }
      .anatomi_header_phone , .anatomi_header_gmail{
         display: flex;
         align-items: center;
         gap: 10px;
      }
      .anatomi_header_info_left{
         display: flex;
         gap: 50px;
      }

      .anatomi_header_info_right{
         display: flex;
         gap: 10px;
         align-items: center;
      }

      #copyMessage {
       position: fixed;
        top: 35px;
        left: 100px;
        background-color: #000000cc;
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 12px;
        font-weight: bold;
        z-index: 9999;
         display: none;
      }
        #copyMessage2 {
       position: fixed;
        top: 35px;
        left: 250px;
        background-color: #000000cc;
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 12px;
        font-weight: bold;
        z-index: 9999;
         display: none;
      }

      .ddsmoothmenu ul{
        margin-left: 0 !important;
      }
 @media (max-width: 768px) {
  .anatomi_header_info {
    flex-direction: column;
    padding: 10px 5px;
    gap: 20px;
  }

  .anatomi_header_info_left {
    gap: 10px;
  }

  .anatomi_header_info p {
    font-size: 12px;
  }

  .anatomi_header_info i {
    font-size: 16px;
  }
 #copyMessage {
        left: 50px;
    }
}

}
      </style>
  `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
   const fontAwesomeLink = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
      `;
   head.insertAdjacentHTML("beforeend", fontAwesomeLink);
};

const header_duzenlemesi_js = () => {
  const header = document.querySelector(".anatomi_header_info");
  const navbar = document.querySelector("#anatomi_navbar");
  if (header && navbar) {
    navbar.insertAdjacentElement("beforebegin", header);
  }

  const phoneNumber = document.querySelector("#anatomi_phoneNumber");
  const mailText = document.querySelector("#anatomi_mailText");
  const copyMessage = document.querySelector("#copyMessage");
  if (phoneNumber && copyMessage) {
    phoneNumber.addEventListener("click", () => {
      navigator.clipboard.writeText(phoneNumber.textContent).then(() => {
        copyMessage.style.display = "inline-block";

        setTimeout(() => {
          copyMessage.style.display = "none";
        }, 1000);
      });
    });
  }
  const copyMessage2 = document.querySelector("#copyMessage2");
  if (mailText && copyMessage2) {
    mailText.addEventListener("click", () => {
      navigator.clipboard.writeText(mailText.textContent).then(() => {
        copyMessage2.style.display = "inline-block";

        setTimeout(() => {
          copyMessage2.style.display = "none";
        }, 2000);
      });
    });
  }

  const otoCamHasari = document.querySelector(
    "#smoothmenu > ul > li:nth-child(2) > ul > li:nth-child(4)"
  );
  if (otoCamHasari) {
    otoCamHasari.style.display = "none";
  }
  const kaliteGarantimiz = document.querySelector(
    "#smoothmenu > ul > li:nth-child(2) > ul > li:nth-child(1) > ul > li:nth-child(6)"
  );
  const kurumsalList = document.querySelector(
    "#smoothmenu > ul > li:nth-child(5) > ul"
  );
  if (kaliteGarantimiz && kurumsalList) {
    kurumsalList.appendChild(kaliteGarantimiz);
  }
  const insanKaynaklari = document.querySelector(
    "#smoothmenu > ul > li:nth-child(6)"
  );
  const bizKimiz = document.querySelector(
    "#smoothmenu > ul > li:nth-child(5) > ul > li:nth-child(2)"
  );
  if (insanKaynaklari && bizKimiz) {
    bizKimiz.insertAdjacentElement("afterend", insanKaynaklari);
  }
  const camFiyatlari = document.querySelector(
    "#smoothmenu > ul > li:nth-child(3) > ul > li:nth-child(4)"
  );
  if (camFiyatlari) {
    camFiyatlari.style.display = "none";
  }
  const onCamHasari = document.querySelector(
    "#smoothmenu > ul > li:nth-child(2) > ul > li:nth-child(1) > a"
  );
  if (onCamHasari) {
    onCamHasari.firstChild.textContent = "Ön Cam Hasarı";
  }
  const yanCamHasari = document.querySelector(
    "#smoothmenu > ul > li:nth-child(2) > ul > li:nth-child(2) > a"
  );
  if (yanCamHasari) {
    yanCamHasari.firstChild.textContent = "Yan Cam Hasarı";
  }
  const arkaCamHasari = document.querySelector(
    "#smoothmenu > ul > li:nth-child(2) > ul > li:nth-child(3) > a"
  );
  if (arkaCamHasari) {
    arkaCamHasari.firstChild.textContent = "Arka Cam Hasarı";
  }
};

const header_duzenlemesi_init = () => {
  header_duzenlemesi_html();
  header_duzenlemesi_css();
  header_duzenlemesi_js();
};

const header_duzenlemesi_condition = () => {
  return true;
};

if (header_duzenlemesi_condition()) {
  header_duzenlemesi_init();
}
