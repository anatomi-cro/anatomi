const x_kisi_kadar_teklif_aldi_html = () => {
    const html = `
    <div class="x_kadar_kisi_teklif_al">
     <button class="hediye-karti-close-btn">&times;</button>
    <div class="x_kadar_kisi_teklif_al-img">
    <img src="https://r.resimlink.com/nLRQl.png"></img>
    </div>
    <div>
    <p>Günlük ortalama 718 kişi teklif alıyor! <a href="#">Hemen sende teklif al.</a>  </p>
    </div> 
    </div>

  `;
    document.body.insertAdjacentHTML("beforeend", html);

    document.querySelector(".hediye-karti-close-btn").addEventListener("click", () => {
        document.querySelector(".x_kadar_kisi_teklif_al").style.display = "none";
    });
};

const x_kisi_kadar_teklif_aldi_css = () => {
    const style = `
      <style>    
     .x_kadar_kisi_teklif_al {
        position: fixed;
        margin: 0 auto;
      width: 320px;
         left: 50%;
    transform: translateX(-50%);
        bottom: 20px;
        background: white;
        border: 1px solid #960525;
        color: #960525;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        gap: 12px;
        text-align: left;
        z-index: 99999999999;
        animation: slideIn 0.4s ease-out;
      }
      .x_kadar_kisi_teklif_al p{
        font-weight: bold;
        margin: 0;
      }
      .x_kadar_kisi_teklif_al a{
        text-decoration: underline;
        font-weight: normal !important;
        color: #960525;
      }
        .x_kadar_kisi_teklif_al-img{
            width: 50px;
    background-color: #B61638;
    height: 50px;
    display: flex
;
    justify-content: center;
    align-items: center;
          
        }
      .x_kadar_kisi_teklif_al-img img{
        width: 20px;
      }
      .hediye-karti-close-btn {
        position: absolute;
        top: 5px;
        right: 8px;
        border: none;
        background: transparent;
        font-size: 20px;
        cursor: pointer;
        color: #960525;
      }
      @keyframes slideIn {
        from {
          opacity: 0;
          
        }
        to {
          opacity: 1;
     
        }
      }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const x_kisi_kadar_teklif_aldi_js = () => {

};

const x_kisi_kadar_teklif_aldi_init = () => {
    x_kisi_kadar_teklif_aldi_html();
    x_kisi_kadar_teklif_aldi_css();
    x_kisi_kadar_teklif_aldi_js();
};

const x_kisi_kadar_teklif_aldi_condition = () => {
    const device = window.innerWidth <= 768;
    return device;
};

if (x_kisi_kadar_teklif_aldi_condition()) {
    let shown = false;
    window.addEventListener("scroll", () => {
        if (!shown && window.scrollY > 800) { 
            shown = true;
            x_kisi_kadar_teklif_aldi_init();
        }
    });
}
