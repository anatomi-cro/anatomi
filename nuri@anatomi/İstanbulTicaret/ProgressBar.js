if(window.location.href === "https://www.istanbulticaret.com/sepet" || window.location.href === "https://www.istanbulticaret.com/siparis-uye-giris" || window.location.href === "https://www.istanbulticaret.com/order/address" || window.location.href === "https://www.istanbulticaret.com/order/payment"){
  const anatomi_progressBar_html = `
  <div class="anatomi_progressBar_container">
  <div class="anatomi_progressBar_content">
      <div class="progressBar-box">
          <div class="progressBar-line">
              <div class="progressBar-line-sepet progressBar-line-active"></div>
              <div class="progressBar-line-adres"></div>
          </div>
          <div class="progressBar-circle progressBar-circle-1 .progressBar-circle-active">
              <div class="progressBar-circle-dot"></div>
              <div class="progressBar-circle-text">
                  <h3>Sepet</h3>
              </div>
              <div class="progressBar-circle-img">
                  <img src="https://anatomi.s3.eu-north-1.amazonaws.com/icons8-check-50.png" alt="">
              </div>
          </div>
          <div class="progressBar-circle progressBar-circle-2">
              <div class="progressBar-circle-dot"></div>
              <div class="progressBar-circle-text">
                  <h3>Adres</h3>
              </div>
              <div class="progressBar-circle-img">
                  <img src="https://anatomi.s3.eu-north-1.amazonaws.com/icons8-check-50.png" alt="">
              </div>
          </div>
          <div class="progressBar-circle progressBar-circle-3">
              <div class="progressBar-circle-dot"></div>
              <div class="progressBar-circle-text">
                  <h3>Ödeme</h3>
              </div>
              <div class="progressBar-circle-img">
                  <img src="https://anatomi.s3.eu-north-1.amazonaws.com/icons8-check-50.png" alt="">
              </div>
          </div>
      </div>
  </div>
  </div>
  `;
  
  const anatomi_progressBar_css = `
  <style>
  .anatomi_progressBar_container{
      position: relative;
      width: 100vw;
      height: fit-content;
      margin: 30px 0;
  }
  
  .anatomi_progressBar_content {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  .progressBar-box {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: fit-content;
      height: 100%;
      gap: 100px;
  }
  
  .progressBar-line {
      position: absolute;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      top: 50%;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #BBBBBB;
      z-index: -1;
  }
  
  .progressBar-line-sepet {
      position: absolute;
      width: 50%;
      height: 100% !important;
      background-color: #F6C445;
      display: none;
  }
  
  .progressBar-line-sepet.progressBar-line-active {
      display: block;
  }
  
  .progressBar-line-adres {
      width: 100%;
      height: 100%;
      background-color: #F6C445;
      display: none;
  }
  
  .progressBar-line-adres.progressBar-line-active {
      display: block;
  }
  
  .progressBar-circle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #fff;
      position: relative;
      border: 1px solid #BBBBBB;
  }
  
  .progressBar-circle-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #BBBBBB;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  }
  
  .progressBar-circle-text {
      position: absolute;
      bottom: -100%;
      color: #000;
      font-size: 12px;
      font-weight: 600;
  }
  
  .progressBar-circle-text h3 {
      font-size: 12px;
      font-weight: 600;
  }
  
  
  .progressBar-circle-img {
      position: absolute;
      width: 20px;
      height: 20px;
      display: none;
  }
  
  .progressBar-circle-img img {
      width: 100%;
      height: 100%;
  }
  
  .progressBar-circle-active {
      background-color: #F6C445;
      border: 1px solid #F6C445;
  }
  
  .progressBar-circle-active .progressBar-circle-img {
      display: block;
  }
  
  .progressBar-circle-active .progressBar-circle-dot {
      background-color: #F6C445;
  }
  
  </style>
  `;
  const parentElement = document.getElementById("oneCol");
  parentElement.insertAdjacentHTML("afterbegin", anatomi_progressBar_html);
  
  const anatomiHead = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", anatomi_progressBar_css);
  
  let previousUrl = "";
  
  const observer = new MutationObserver(() => {
    if (window.location.href !== previousUrl) {
      console.log(`URL changed from ${previousUrl} to ${window.location.href}`);
      previousUrl = window.location.href;
      if (
        document.getElementById("pageHeader") &&
        document.querySelector(".box.col-12.progress")
      ) {
        document.getElementById("pageHeader").remove();
        document.querySelector(".box.col-12.progress").remove();
      }
  
      if (document.querySelector(".nav.nav-tabs.orderTabs.hideOnHR")) {
        document.querySelector(".nav.nav-tabs.orderTabs.hideOnHR").remove();
      }
  
      if (
        window.location.href === "https://www.istanbulticaret.com/sepet" ||
        window.location.href ===
          "https://www.istanbulticaret.com/siparis-uye-giris"
      ) {
        document
          .querySelector(".progressBar-line-sepet")
          .classList.add("progressBar-line-active");
        document
          .querySelector(".progressBar-line-adres")
          .classList.remove("progressBar-line-active");
        document
          .querySelector(".progressBar-circle-1")
          .classList.add("progressBar-circle-active");
        document
          .querySelector(".progressBar-circle-2")
          .classList.remove("progressBar-circle-active");
        document
          .querySelector(".progressBar-circle-3")
          .classList.remove("progressBar-circle-active");
      }
      if (
        window.location.href === "https://www.istanbulticaret.com/order/address"
      ) {
        document
          .querySelector(".progressBar-circle-2")
          .classList.add("progressBar-circle-active");
        document
          .querySelector(".progressBar-circle-1")
          .classList.add("progressBar-circle-active");
        document
          .querySelector(".progressBar-circle-3")
          .classList.remove("progressBar-circle-active");
        document
          .querySelector(".progressBar-line-sepet")
          .classList.remove("progressBar-line-active");
        document
          .querySelector(".progressBar-line-adres")
          .classList.add("progressBar-line-active");
      }
      if (
        window.location.href === "https://www.istanbulticaret.com/order/payment"
      ) {
        document
          .querySelector(".progressBar-circle-2")
          .classList.add("progressBar-circle-active");
        document
          .querySelector(".progressBar-circle-1")
          .classList.add("progressBar-circle-active");
        document
          .querySelector(".progressBar-circle-3")
          .classList.add("progressBar-circle-active");
      }
    }
  });
  const config = { subtree: true, childList: true };
  
  // start observing change
  observer.observe(document, config);
  
}


