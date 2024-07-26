const unutulanUrunler_html = () => {
  const unutulanUrunler_html = `
  <div class="anatomi_sepette_unuttun_popUp_container">
  <div class="anatomi_sepette_unuttun_popUp_content">
    <div class="anatomi_sepette_unuttun_popUp_title">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4.138 17.931C4.138 19.0717 5.06628 20 6.20696 20C7.34765 20 8.27593 19.0717 8.27593 17.931C8.27593 16.7903 7.34765 15.8621 6.20696 15.8621C5.06628 15.8621 4.138 16.7903 4.138 17.931ZM6.89662 17.931C6.89662 18.311 6.58696 18.6207 6.20696 18.6207C5.82697 18.6207 5.51731 18.311 5.51731 17.931C5.51731 17.551 5.82697 17.2414 6.20696 17.2414C6.58696 17.2414 6.89662 17.551 6.89662 17.931Z" fill="#0D0C0C"/>
        <path d="M16.5518 17.931C16.5518 16.7903 15.6235 15.8621 14.4828 15.8621C13.3422 15.8621 12.4139 16.7903 12.4139 17.931C12.4139 19.0717 13.3422 20 14.4828 20C15.6235 20 16.5518 19.0717 16.5518 17.931ZM13.7932 17.931C13.7932 17.551 14.1028 17.2414 14.4828 17.2414C14.8628 17.2414 15.1725 17.551 15.1725 17.931C15.1725 18.311 14.8628 18.6207 14.4828 18.6207C14.1028 18.6207 13.7932 18.311 13.7932 17.931Z" fill="#0D0C0C"/>
        <path d="M2.13793 1.37931C2.22345 2.19379 3.17517 11.2338 3.32207 12.6303C3.4331 13.6862 4.31793 14.4828 5.38 14.4828H16.1269C17.0959 14.4828 17.9469 13.7945 18.1503 12.8469L19.8069 5.11655C19.8945 4.70689 19.7938 4.28552 19.5303 3.96069C19.2669 3.63517 18.8759 3.44827 18.4572 3.44827H3.74276L3.44483 0.617931C3.40758 0.266207 3.11172 0 2.75862 0H0.689655C0.308965 0 0 0.308965 0 0.689655C0 1.07034 0.308965 1.37931 0.689655 1.37931H2.13793ZM18.4572 4.82758L16.8014 12.5579C16.7331 12.8738 16.4496 13.1034 16.1262 13.1034H5.38C5.02551 13.1034 4.73103 12.8379 4.69379 12.4862L3.88758 4.82758H18.4572Z" fill="#0D0C0C"/>
        </svg>
      <h2>Sepetinde Bıraktığın Ürünleri Unutma!</h2>
    </div>

    <div class="anatomi_sepette_unuttun_popUp_urun_list">
    </div>

    <div class="anatomi_sepette_unuttun_popUp_buttons">
      <a href="/" class="anatomi_sepette_unuttun_popUp_devamEt">
        Alışverişe Devam Et
      </a>
      <a href="https://www.istanbulticaret.com/sepet" class="anatomi_sepette_unuttun_popUp_sepeteGit">
        Sepete Git
      </a>
    </div>
  </div>
</div>
  `;

  const body = document.querySelector("body");
  body.insertAdjacentHTML("beforeend", unutulanUrunler_html);
};

const unutulanUrunler_css = () => {
  const unutulanUrunler_css = `
  <style>
  .anatomi_sepette_unuttun_popUp_container {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: fit-content;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border: 1px solid #D5D5D5;
    background-color: #fff;
    z-index: 999999;
  }

  .anatomi_sepette_unuttun_popUp_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
    gap: 10px;
  }

  .anatomi_sepette_unuttun_popUp_title{
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .anatomi_sepette_unuttun_popUp_title h2 {
    font-size: 18px;
    font-weight: 600;
    color: #333333;
  }

  .anatomi_sepette_unuttun_popUp_urun_list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .anatomi_sepette_unuttun_popUp_urun {
    display: flex;
    gap: 10px;
    width: 100%;
    border-top: 1px solid #D5D5D5;
    padding: 5px 20px;
  }

  .anatomi_sepette_unuttun_popUp_urun:last-child {
    border-bottom: 1px solid #D5D5D5;
  }

  .anatomi_sepette_unuttun_popUp_urun_info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 80%;
  }

  .anatomi_sepette_unuttun_popUp_urun_info h4 {
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    width: 70%;
  }

  .anatomi_sepette_unuttun_popUp_urun_info p {
    font-size: 14px;
    font-weight: 600;
    color: #333333;
  }

  .anatomi_sepette_unuttun_popUp_urun_img  {
    width: 20%;
  }

  .anatomi_sepette_unuttun_popUp_urun_img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .anatomi_sepette_unuttun_popUp_buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
  }

  .anatomi_sepette_unuttun_popUp_devamEt {
    padding: 15px 20px;
    background-color: #fff;
    color: #888888;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    text-decoration: none;
    text-align: center;
    font-weight: 600;
    width: 30%;
  }

  .anatomi_sepette_unuttun_popUp_sepeteGit {
    padding: 15px 20px;
    background-color: #FFC20E;
    color: #000;
    border-radius: 5px;
    text-decoration: none;
    text-align: center;
    font-weight: 600;
    width: 30%;
  }
</style>
  `;

  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", unutulanUrunler_css);
};

const unutulanUrunler_js = () => {
  const urunList = document.querySelector(
    ".anatomi_sepette_unuttun_popUp_urun_list"
  );

  let valueStr = sessionStorage.getItem("userItems");
  if (valueStr) {
    let valueObj = JSON.parse(valueStr);

    if (valueObj) {
      valueObj.forEach((item) => {
        const urun = `
            <div class="anatomi_sepette_unuttun_popUp_urun">
                <div class="anatomi_sepette_unuttun_popUp_urun_img">
                    <img src="${item.item_img_url}" alt="${item.item_name}">
                </div>
                <div class="anatomi_sepette_unuttun_popUp_urun_info">
                    <h4>${item.item_name}</h4>
                    <p>${item.item_price},00 ₺</p>
                </div>
            </div>
          `;

        urunList.insertAdjacentHTML("beforeend", urun);
      });
    }
  }
};

const init = () => {
    unutulanUrunler_css();
    unutulanUrunler_html();
    unutulanUrunler_js();
  };
  
  const checkSessionStorage = () => {
    let valueStr = sessionStorage.getItem("userItems");
    if (valueStr) {
      let valueObj = JSON.parse(valueStr);
  
      if (valueObj) {
        return true;
      }
    }else {
      console.log("Session Storage Erişilemedi");
    }
  
    return false;
  };
  
  let timer;
  
  const resetTimer = () => {
    clearTimeout(timer);
    const container = document.querySelector(".anatomi_sepette_unuttun_popUp_container");
    timer = setTimeout(() => {
      if(!container){
        init();
      }
    }, 10000);
  };
  
  const handleUserActivity = () => {
    resetTimer();
  };
  
 
if (checkSessionStorage()) {
  window.addEventListener("mousemove", handleUserActivity);
  window.addEventListener("keydown", handleUserActivity);
  window.addEventListener("scroll", handleUserActivity);
  window.addEventListener("touchstart", handleUserActivity);
  window.addEventListener("touchmove", handleUserActivity);
}else {
  console.log("Session Storage Erişilemedi");
}
  
if(window.innerWidth < 768) {
  window.addEventListener("scroll", handleUserActivity);
  window.addEventListener("touchstart", handleUserActivity);
  window.addEventListener("touchmove", handleUserActivity);
}