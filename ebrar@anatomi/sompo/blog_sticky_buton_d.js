setTimeout(() => {  const butonSticky_html = () => {
    const url = window.location.href;

    let html = '';

    if (url.includes('/arac')) {
      html = `
        <div class="anatomi-blog-sticky-container">
          <div class="anatomi-blog-sticky-content">
            <div class="anatomi-blog-sticky-item">
              <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo-blog-trafik.png" alt="" />
               <a class="anatomi_blog_trafik_title" href="https://www.somposigorta.com.tr/trafik-sigortasi"><h4>Trafik Sigortası</h4></a>
              <a class="anatomi_blog_trafik" href="/trafik-sigortasi">Teklif Al</a>
            </div>
            <div class="anatomi-blog-sticky-item">
              <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo-blog-kasko.png" alt="" />
              <a class="anatomi_blog_kasko_title" href="https://www.somposigorta.com.tr/kasko-sigortasi"><h4>Kasko Sigortası</h4></a>
              <a class="anatomi_blog_kasko" href="/full-kasko">Teklif Al</a>
            </div>
          </div>
        </div>
      `;
    } else if (url.includes('/saglik')) {
      html = `
        <div class="anatomi-blog-sticky-container">
          <div class="anatomi-blog-sticky-content">
            <div class="anatomi-blog-sticky-item">
              <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo-tss.png" alt="" />
              <a class="anatomi_blog_tamamlayici_saglik_title" href="https://www.somposigorta.com.tr/tamamlayici-saglik-sigortasi"><h4>Tamamlayıcı Sağlık Sigortası</h4></a>
              <a class="anatomi_blog_tamamlayici_saglik" href="https://www.somposigorta.com.tr/tamamlayici-saglik-sigortasi">Teklif Al</a>
            </div>
             <div class="anatomi-blog-sticky-item">
              <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo-blog-kasko.png" alt="" />
              <a class="anatomi_blog_tamamlayici_saglik_dogum_title" href="https://www.somposigorta.com.tr/dogum-sigortasi"><h4>Tamamlayıcı Sağlık Doğumlu Paket Sigortası</h4></a>
              <a class="anatomi_blog_tamamlayici_saglik_dogum" href="https://www.somposigorta.com.tr/dogum-sigortasi">Teklif Al</a>
            </div>
          </div>
        </div>
      `;
    } else if (url.includes('/konut')) {
      html = `
        <div class="anatomi-blog-sticky-container">
          <div class="anatomi-blog-sticky-content">
            <div class="anatomi-blog-sticky-item">
              <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo-dask.png" alt="" />
              <a class="anatomi_blog_dask_title" href="https://www.somposigorta.com.tr/zorunlu-deprem-sigortasi-dask"><h4>Zorunlu Deprem Sigortası (DASK)</h4></a>
              <a class="anatomi_blog_dask" href= "https://www.somposigorta.com.tr/zorunlu-deprem-sigortasi-dask">Teklif Al</a>
            </div>
          </div>
        </div>
      `;
    } else if (url.includes('/seyahat')) {
      html = `
         <div class="anatomi-blog-sticky-container">
          <div class="anatomi-blog-sticky-content">
            <div class="anatomi-blog-sticky-item">
              <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo-seyahat-saglik.png" alt="" />
              <a class="anatomi_blog_seyahat_title" href="https://www.somposigorta.com.tr/yurt-disi-seyahat-sigortasi"><h4>Yurtdışı Seyahat Sağlık Sigortası</h4></a>
              <a class="anatomi_blog_seyahat" href="https://www.somposigorta.com.tr/yurt-disi-seyahat-sigortasi">Teklif Al</a>
            </div>
             <div class="anatomi-blog-sticky-item">
              <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo-blog-kasko.png" alt="" />
              <a class="anatomi_blog_seyahat_egitim_title" href="https://www.somposigorta.com.tr/yurt-disi-egitim-seyahat-sigortasi"><h4>Yurt Dışı Eğitim Seyahat Sigortası</h4></a>
              <a class="anatomi_blog_seyahat_egitim" href="https://www.somposigorta.com.tr/yurt-disi-egitim-seyahat-sigortasi">Teklif Al</a>
            </div>
          </div>
        </div>
      `;
    } else {
      html = `
        <div class="anatomi-blog-sticky-container">
          <div class="anatomi-blog-sticky-content">
              <div class="anatomi-blog-sticky-item">
              <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo-blog-trafik.png" alt="" />
               <a class="anatomi_blog_trafik_title"  href="https://www.somposigorta.com.tr/trafik-sigortasi"><h4>Trafik Sigortası</h4></a>
              <a class="anatomi_blog_trafik" href="/trafik-sigortasi">Teklif Al</a>
            </div>
            <div class="anatomi-blog-sticky-item">
              <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/sompo-blog-kasko.png" alt="" />
              <a class="anatomi_blog_kasko_title" href="https://www.somposigorta.com.tr/kasko-sigortasi"><h4>Kasko Sigortası</h4></a>
              <a class="anatomi_blog_kasko" href="/full-kasko">Teklif Al</a>
            </div>
          </div>
        </div>
      `;
    }

    const container = document.querySelector("body > main > div.blog-detail-content");
    const element = !document.querySelector(".anatomi-blog-sticky-container");
    if (element && container) {
      container.insertAdjacentHTML("beforeend", html);
    }
  };

  const butonSticky_css = () => {
    const style = `
      const style = 
     <style id="anatomiButonSticky">
        .blog-detail-content {
          position: relative;
        }

        .anatomi-blog-sticky-container {
          position: absolute;
          top: 10%;
          right: 0;
          width: 25%;
          height: fit-content;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          overflow: hidden;
          z-index: 9999999;
        }

        .anatomi-blog-sticky-content {
          width: 350px;
          height: 200px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 10px;
          padding: 10px;
          flex-direction: column;
        }

        .anatomi-blog-sticky-item {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          height: 80px;
          border-radius: 8px;
          border: 1px solid #bbbbbb;
          padding: 15px;
          gap: 10px;
          background-color: #fff;
        }
        .anatomi-blog-sticky-item img{
          width: 30px;
        }
         .anatomi-blog-sticky-item a:nth-child(2) {
            text-decoration: none;
            width: 150px;

        }
        .anatomi-blog-sticky-item a:nth-child(3) {
          text-decoration: none;
          color: #fff !important;
          background-color: #aa011f;
          padding: 8px 18px;
          border-radius: 6px;
          font-weight: 400;
          font-size: 14px;
        }

        .anatomi-blog-sticky-item h4 {
          margin: 0;
          padding: 0 !important;
          font-weight: 500;
          color: #000;
          font-size: 13px;
        }

        .content-wrapper.-editor {
          max-width: 965px !important;
        }
           @media (max-width: 1275px) { 
        .anatomi-blog-sticky-content {
        width: 250px !important;  
        }

        .anatomi-blog-sticky-item {
        gap: 0px;
        }

        .anatomi-blog-sticky-item img {
        width: 25px;
        }

        .anatomi-blog-sticky-item a {
        padding: 8px 10px;
        font-size: 12px;       
        }

        .anatomi-blog-sticky-item h4 {
        font-size: 12px;
        }
    }
      </style>
    `;

    const container = document.getElementById("anatomiButonSticky");
    if (!container) {
      const head = document.querySelector("head");
      head.insertAdjacentHTML("beforeend", style);
    }
  };

 const butonSticky_js = () => {

  const sticky = document.querySelector(".anatomi-blog-sticky-container");
  const parent = document.querySelector(".blog-detail-content");

  if (!sticky || !parent) return;

  const onScroll = () => {
    const parentRect = parent.getBoundingClientRect();
    const stickyHeight = sticky.offsetHeight;
    const buffer = 40;

    if (parentRect.top < buffer && parentRect.bottom > stickyHeight + buffer) {
      sticky.style.top = `${window.scrollY - parent.offsetTop + buffer}px`;
    } else if (parentRect.top >= buffer) {
      sticky.style.top = `-2%`;
    }
  };

  window.addEventListener("scroll", onScroll);
  onScroll();
};


  const butonSticky_init = () => {
    butonSticky_html();
    butonSticky_css();
    butonSticky_js();
  };

  const butonSticky_conditions = () => {
    const device = matchMedia("(min-width: 768px)").matches;
    const container = !document.querySelector(".anatomi-blog-sticky-container");
    const page = document.querySelector(".blog-detail-content");
    return device && container && page;
  };

  if (butonSticky_conditions()) {
    butonSticky_init();
  }
}, 1000);