const footer_duzenlemesi_html = () => {
  const html = `
   <footer class="anatomi_footer">  
            <div class="anatomi_footer-left">
              <p class="anatomi_footer-description">
                Carglass® Dünya markası, Türkiye’de önde gelen araç ön cam tamir,
                cam
                değişim ve kamera özellikli camları kalibrasyon yapabilen bir
                şirkettir.
              </p>
              <p class="anatomi_footer-description">
                İster talebinizi Türkiye geneline yayılmış şubelerimiz ve
                bayilerimiz
                ile çözelim, ister mobil teknisyenimizin evinize, işyerinize veya
                bulunduğunuz herhangi bir yere gelmesi kolaylığını tercih edin;
                aracın
                sahibi olduğunuz sürece işçiliğimizin garanti altında olduğunu
                bilerek
                rahat edin.
              </p>
            </div>
            <div class="anatomi_footer-right">
              <div class="anatomi_footer-links">
                <ul>
                <li class="anatomi_list_title"><a href="/#">Kurumsal</a></li>
                  <li><a href="/Sayfa/Detay?sayfa_id=36">Hakkımızda</a></li>
                   <li><a href="/Sayfa/Detay?sayfa_id=1">Biz Kimiz</a></li>
                    <li><a href="/Sayfa/Detay?sayfa_id=2">Global Ağımız</a></li>
                  <li><a href="/Randevu/BayiSec">Hizmet Ağımız</a></li>
                  <li><a href="/insan-kaynaklari">Kalite ve Garantimiz</a></li>
                  <li><a href="/Sayfa/iletisim">İletişim</a></li>
                 
                </ul>
              </div>
              <div class="anatomi_footer-links">
                <ul>
                 <li class="anatomi_list_title"><a href="/Sayfa/Detay?sayfa_id=37">Hizmetlerimiz</a></li>
                  <li><a href="/Sayfa/Detay?sayfa_id=15">Oto Cam Hasarı</a></li>
                  <li><a href="/Sayfa/Detay?sayfa_id=16">Ön Cam Hasarı</a></li>
                  <li><a href="/Sayfa/Detay?sayfa_id=28">Yan Cam Hasarı</a></li>
                  <li><a href="/Sayfa/Detay?sayfa_id=30">Arka Cam Hasarı</a></li>
                  <li><a>Kamera Kalibrasyonu (ADAS)</a></li>
                  <li><a>Silecek Değişimi</a></li>
                </ul>
              </div>
              <div class="anatomi_footer-links">
                <ul>
                 <li class="anatomi_list_title"><a href="/Sayfa/Detay?sayfa_id=15">Bağlantılar</a></li>
                  <li><a href="https://webportal.carglass.com.tr/" target="_blank"
                      rel="noreferrer"
                      title="Bayi ve Şube Girişi Yap.">Bayi &amp; Şube
                      Girişi</a></li>
                  <li><a href="/Sayfa/SikayetForm" target="_blank"
                      title="İstek, Öneri ve Şikayetler.">İstek, Öneri ve
                      Şikayet</a></li>
                       <li><a
                      href="https://e-sirket.mkk.com.tr/esir/Dashboard.jsp#/sirketbilgileri/18906"
                      target="_blank"
                      title="Bilgi Toplumu Hizmetleri">Bilgi Toplumu
                      Hizmetleri</a></li>
                 
                  <li><a href="/Sayfa/Detay?sayfa_id=38" target="_blank"
                      title="Kişisel Verilerin Korunması Kanunu">Kişisel
                      Verilerin Korunması Kanunu</a></li>
                 
                  <li><a href="/Sayfa/Detay?sayfa_id=40" target="_blank"
                      title="Carglass Çerez Politikası">Carglass® Çerez
                      Politikası</a></li>
                </ul>
              </div>
                <div class="anatomi_footer-links">
                <ul>
                 <li class="anatomi_list_title"><a>Genel Müdürlük</a></li>
                  <li><i class="fa-solid fa-location-dot"></i> Emek Mh. Esenşehir Cd. No:20, 34785, Sancaktepe/İstanbul</li>
                  <li>       <i class="fa-solid fa-phone-volume"></i>0(850) 281 10 86</li>
                  <li>    <i class="fa-regular fa-envelope"></i>destek@masaupp.com</li>
                  <li> <a href="https://www.youtube.com/@carglassturkiye"> <i class="fa-brands fa-youtube"></i></a>   
    <a href="https://www.facebook.com/CarglassTR/?locale=tr_TR"><i class="fa-brands fa-facebook"></i></a>  
    <a href="https://www.instagram.com/carglasstr?igsh=MTZ3N2pyOTdleG1vMQ=="> <i class="fa-brands fa-instagram"></i></a>
    <a href= "https://x.com/CarglassTR"><i class="fa-brands fa-twitter"></i></a></li>

                </ul>
              </div>
            </div>
          </footer>

    `;
    const header = document.querySelector("#header");
    if (header) {
      header.insertAdjacentHTML("beforeend", html);
    }
};
const footer_duzenlemesi_css = () => {
  const style = `
      <style>
        .anatomi_footer {
      display: flex;
        justify-content: space-evenly;
        padding: 50px;
        background-color: #626262;
        color: white;
        font-size: 20px;
    }
    
    .anatomi_footer-left {
      width: 55%;
    }
    
    .anatomi_footer-description {
      margin-bottom: 20px;
      font-size: 14px;
      line-height: 1.6;
      width: 60%;
    }
    
    .anatomi_footer-right {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
    
    .anatomi_footer-links {
      display: flex;
      margin-right: 20px;
    }
    .anatomi_list_title{
        font-size: 16px;
        font-weight: bold;
    }
    
    .anatomi_footer-links h4 {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    
    .anatomi_footer-links ul {
      list-style: none;
      padding: 0;
    }
    
    .anatomi_footer-links ul li {
    margin-bottom: 10px;
    color: white;
    text-decoration: none;
    font-size: 14px;
    display: flex;
    gap: 10px
    }
    
    .anatomi_footer-links ul li a {
      color: white;
      text-decoration: none;
      font-size: 14px;
    }
    
    .anatomi_footer-links ul li a:hover {
      text-decoration: underline;
    }

      @media (max-width: 768px) {
       .anatomi_footer {
        flex-direction: column;
      }
        .anatomi_footer-left {
          width: 100%;
        }
      .anatomi_footer-right {
        display: flex;
        flex-direction: column;
        gap: 30px;
      }
    }
    </style>
    `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};
const footer_duzenlemesi_js = () => {
       const orijinal_anasayfa_footer = document.querySelector("#footer");
       if (orijinal_anasayfa_footer) {
         orijinal_anasayfa_footer.style.display = "none";
       }
    const body = document.querySelector("body");
    const footer = document.querySelector(".anatomi_footer");
    if(body && footer){
        body.appendChild(footer);
    }


};
const footer_duzenlemesi_init = () => {
  footer_duzenlemesi_html();
  footer_duzenlemesi_css();
  footer_duzenlemesi_js();
};
const footer_duzenlemesi_condition = () => {
    return true;
};
if (footer_duzenlemesi_condition()) {
  footer_duzenlemesi_init();
}
