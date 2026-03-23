setTimeout(() => {
  const anasayfa_hizmetler_one_cikarma_html = () => {
    const html = `
    <div class="anatomi_anasayfa_hizmetler_section">
    <div class="anatomi_anasayfa_hizmetler_title">
      <h2>Hizmetlerimiz</h2>
    </div>
    <div class="anatomi_anasayfa_hizmetler_content">
     <div class="anatomi_anasayfa_hizmetler_on_cam">
      <div class="anatomi_anasayfa_hizmetler_on_cam_img">
       <img src="https://r.resimlink.com/BvdLho1.png">
       <h3 class="anatomi_anasayfa_hizmetler_img_title">Ön Cam</h3>
      </div>
      <div class="anatomi_anasayfa_hizmetler_on_cam_list_container">
        <ul class="anatomi_anasayfa_hizmetler_list">
          <li class="anatomi_anasayfa_hizmetler_list_item"><a class="anatomi_on_cam_a" href="https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=16">Ön Cam Tamiri</a></li>
          <li class="anatomi_anasayfa_hizmetler_list_item"><a class="anatomi_on_cam_a"  href="https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=23">Küçük Çatlak Tamiri</a></li>
          <li class="anatomi_anasayfa_hizmetler_list_item"><a class="anatomi_on_cam_a"  href="https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=24">Ön Cam Çatlak Tamiri</a></li>
          <li class="anatomi_anasayfa_hizmetler_list_item"><a class="anatomi_on_cam_a"  href="https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=25">Ön Cam Değişimi</a></li>
        </ul>
      </div>
      </div>
      <div class="anatomi_anasayfa_hizmetler_yan_cam">
      <div class="anatomi_anasayfa_hizmetler_yan_cam_img">
       <img src="https://r.resimlink.com/Yr3ndxRH.png">
       <h3 class="anatomi_anasayfa_hizmetler_img_title">Yan Cam</h3>
      </div>
      <div class="anatomi_anasayfa_hizmetler_yan_cam_list_container">
        <ul class="anatomi_anasayfa_hizmetler_list">
          <li class="anatomi_anasayfa_hizmetler_list_item"><a class="anatomi_yan_cam_a" href="https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=28">Yan Cam Değişimi</a></li>
          <li class="anatomi_anasayfa_hizmetler_list_item"><a class="anatomi_yan_cam_a"  href="https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=29">Yan Cam Değişim Ücreti</a></li>

        </ul>
      </div>
      </div>

       <div class="anatomi_anasayfa_hizmetler_arka_cam">
      <div class="anatomi_anasayfa_hizmetler_arka_cam_img">
       <img src="https://r.resimlink.com/Teb7UQcqGO.png">
       <h3 class="anatomi_anasayfa_hizmetler_img_title">Arka Cam</h3>
      </div>
      <div class="anatomi_anasayfa_hizmetler_arka_cam_list_container">
        <ul class="anatomi_anasayfa_hizmetler_list">
          <li class="anatomi_anasayfa_hizmetler_list_item"><a class="anatomi_arka_cam_a" href="https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=30">Arka Cam Değişimi</a></li>
          <li class="anatomi_anasayfa_hizmetler_list_item"><a class="anatomi_arka_cam_a" href="https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=31">Arka Cam Değişim Ücreti</a></li>
        </ul>
      </div>
      </div>
    </div>
</div>
    `;
    const header = document.querySelector("#header");
    if (header) {
      header.insertAdjacentHTML("beforeend", html);
    }
  };
  const anasayfa_hizmetler_one_cikarma_css = () => {
    const style = `
      <style>
    .anatomi_anasayfa_hizmetler_section{
      text-align: center;
      display: flex;
      flex-direction: column;
      padding: 0px 0px 100px 0px;
    }
    .anasayfa_hizmetler_title{
      padding-bottom: 30px;
    }
    .anatomi_anasayfa_hizmetler_content{
      display: flex;
      justify-content: space-around;
      text-align: left;
      margin-top: 30px;
    }
    .anatomi_anasayfa_hizmetler_img_title{
      text-align: center;
      padding-top: 15px;
    }
    .anatomi_anasayfa_hizmetler_list_item{
      text-decoration: underline;
    }
    .anatomi_anasayfa_hizmetler_list_item a{
      color: black !important;
    }
    </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
  };
  const anasayfa_hizmetler_one_cikarma_js = () => {
    const generateHizmetler = () => {
      const hizmetlerSection = document.querySelector(
        "#header > div.anatomi_anasayfa_hizmetler_section"
      );
      const reviewSection = document.querySelector(
        "#header > div.anatomi_content > div.anatomi_our_reviews"
      );
      if (hizmetlerSection && reviewSection) {
        reviewSection.insertAdjacentElement("afterend", hizmetlerSection);
      }
    };

    setTimeout(() => {
      generateHizmetler();
    }, 300);
  };
  const anasayfa_hizmetler_one_cikarma_init = () => {
    anasayfa_hizmetler_one_cikarma_html();
    anasayfa_hizmetler_one_cikarma_css();
    anasayfa_hizmetler_one_cikarma_js();
  };
  const anasayfa_hizmetler_one_cikarma_condition = () => {
    const device = window.innerWidth > 768;
    return device;
  };
  if (anasayfa_hizmetler_one_cikarma_condition()) {
    anasayfa_hizmetler_one_cikarma_init();
  }
}, 500);
