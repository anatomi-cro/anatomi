const anasayfa_sticky_buton_html = () => {
     const url = window.location.href;

    let html = '';

    if (url.includes('/arac')) {
      html = `
        <div class="anatomi_stickyButonContainer">
            <div class="anatomi-blog-sticky-item">
            <a class="anatomi_blog_trafik" href="https://www.somposigorta.com.tr/trafik-sigortasi"><button class="anatomi_blog_trafik_btn">Trafik Teklifi Al</button></a>
            </div>
            <div class="anatomi-blog-sticky-item">
            <a class="anatomi_blog_kasko" href="https://www.somposigorta.com.tr/full-kasko"><button class="anatomi_blog_kasko_btn">Kasko Teklifi Al</button></a> 
            </div>
        </div>
      `;
    } else if (url.includes('/saglik')) {
      html = `
        <div class="anatomi_stickyButonContainer">
            <div class="anatomi-blog-sticky-item">
              <a class="anatomi_blog_tamamlayici_saglik" href="https://www.somposigorta.com.tr/tamamlayici-saglik-sigortasi" ><button class="anatomi_blog_tamamlayici_saglik_btn">TSS Teklifi Al</button></a>
            </div>
             <div class="anatomi-blog-sticky-item">
             <a class="anatomi_blog_tamamlayici_saglik_dogum" href="https://www.somposigorta.com.tr/dogum-sigortasi" ><button class="anatomi_blog_tamamlayici_saglik_dogum_btn">TSS Doğum Teklifi Al</button></a>              
            </div>
        </div>
      `;
    } else if (url.includes('/konut')) {
      html = `
        <div class="anatomi_stickyButonContainer">
            <div class="anatomi-blog-sticky-item">
              <a class="anatomi_blog_dask" href= "https://www.somposigorta.com.tr/zorunlu-deprem-sigortasi-dask"><button class="anatomi_blog_dask_btn">DASK Teklifi Al</button></a>
            </div>
        </div>
      `;
    } else if (url.includes('/seyahat')) {
      html = `
         <div class="anatomi_stickyButonContainer">
            <div class="anatomi-blog-sticky-item">
              <a class="anatomi_blog_seyahat"  href="https://www.somposigorta.com.tr/yurt-disi-seyahat-sigortasi"><button class="anatomi_blog_seyahat_btn">Yurt Dışı Seyahat Sağlık Teklifi Al</button></a>
            </div>
             <div class="anatomi-blog-sticky-item">
               <a  class="anatomi_blog_seyahat_egitim" href="https://www.somposigorta.com.tr/yurt-disi-egitim-seyahat-sigortasi"><button class="anatomi_blog_seyahat_egitim_btn">Yurt Dışı Eğitim Seyahat Teklifi Al</button></a>
            </div>
        </div>
      `;
    } else {
      html = `
          <div class="anatomi_stickyButonContainer">
            <div class="anatomi-blog-sticky-item">
            <a class="anatomi_blog_trafik" href="https://www.somposigorta.com.tr/trafik-sigortasi"><button class="anatomi_blog_trafik_btn">Trafik Teklifi Al</button></a>
            </div>
            <div class="anatomi-blog-sticky-item">
            <a class="anatomi_blog_kasko" href="https://www.somposigorta.com.tr/full-kasko"><button class="anatomi_blog_kasko_btn">Kasko Teklifi Al</button></a> 
            </div>
        </div>
      `;
    }

   const wrapper = document.createElement('div');
  wrapper.innerHTML = html;

  const element = wrapper.firstElementChild; 
  const body = document.querySelector("body");

  if (element && body) {
    body.appendChild(element);
  }
};

  const anasayfa_sticky_buton_css = () => {
    const style = `
    <style>
      .anatomi_stickyButonContainer {
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: white;
      color: white;
      border-top: 3px solid #e7e7e7;
      text-align: center;
      padding: 15px 0;
      z-index: 999999999;
      height: 70px;
      }
   .anatomi_blog_trafik_btn,
      .anatomi_blog_kasko_btn,
          .anatomi_blog_tamamlayici_saglik_btn,
      .anatomi_blog_tamamlayici_saglik_dogum_btn{
       background-color: #AA011F;
        border: none;
        color: #ffffff;
        font-weight: bold;
        font-size: 14px;
          height: 50px;
        width: 170px;
        text-align: center;
        border-radius: 5px;
        text-decoration: none;
        }
 
      .anatomi_blog_dask_btn{
        background-color: #AA011F;
        border: none;
        color: #ffffff;
        font-weight: bold;
        font-size: 14px;
          height: 50px;
        width: 100%;
        text-align: center;
        border-radius: 5px;
        text-decoration: none;
        width: 350px;

      }
      .anatomi_blog_seyahat_btn,
      .anatomi_blog_seyahat_egitim_btn {
       background-color: #AA011F;
        border: none;
        color: #ffffff;
        font-weight: bold;
        font-size: 14px;
       padding: 10px 10px;
        width: 90%;
        text-align: center;
        border-radius: 5px;
        text-decoration: none;
      }

    </style>
  `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
  };

  const anasayfa_sticky_buton_js = () => {
  const generateStickyButon = () => {
    const stickyButon = document.querySelector(".anatomi_stickyButonContainer")
    stickyButon.style.display = "none";


    const cerez = document.querySelector("body > efilli-layout-dynamic")?.shadowRoot?.querySelector("#\\33 1799e81-7a3e-4702-8a8a-48792883aa14");
    if (cerez) {
      cerez.style.bottom = "110px";
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        stickyButon.style.display = "flex";
      } else {
        stickyButon.style.display = "none";
      }
    });
  };

  generateStickyButon();
};

  const anasayfa_sticky_buton_init = () => {
    anasayfa_sticky_buton_html();
    anasayfa_sticky_buton_css();
    anasayfa_sticky_buton_js();
  };

  const anasayfa_sticky_buton_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
  };

  if (anasayfa_sticky_buton_condition()) {
    anasayfa_sticky_buton_init();
  }