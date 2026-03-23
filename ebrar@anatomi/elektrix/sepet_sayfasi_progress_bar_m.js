const sepet_sayfasi_progress_html = () => {
    const html = `
      <div class="anatomi_progressBar">
    <div class="anatomi_progressBar_content">
        <div class="anatomi_progressBar_step_1 anatomi_progressBar_step">
            <img src="https://r.resimlink.com/yUOz4.png" alt="">
            <h3>SEPET</h3>
        </div>
        <div class="anatomi_progressBar_step_2 anatomi_progressBar_step">
            <img src="https://r.resimlink.com/L6T59CXqZHbz.png" alt="">
            <h3>ADRES</h3>
        </div>
        <div class="anatomi_progressBar_step_3 anatomi_progressBar_step">
            <img src="https://r.resimlink.com/16NFrpMi0Vn.png" alt="">
            <h3>ÖDEME</h3>
        </div>
    </div>
    </div>
    `;
  
    setInterval(() => {
      const main_col = document.querySelector("#mainColumn");
      const cartEmpty = document.getElementById("cartEmpty");
      const check = document.querySelector(".anatomi_progressBar");
      if (!check && !cartEmpty) {
          main_col.insertAdjacentHTML("afterbegin", html);
      }
    }, 100);
  };
  
  const sepet_sayfasi_progress_css = () => {
    const anatomi_progressBar_style = `
      <style>
      .anatomi_progressBar {
        margin-top: 40px;
        width: 100%;
        height: fit-content;
      }
      
      .anatomi_progressBar_content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: fit-content;
      }
      
      .anatomi_progressBar_step {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 33%;
        gap: 10px;
      }
      .anatomi_progressBar_step img {
        width: 20px; 
      }
      .anatomi_progressBar_step_1{
        border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
      }
    .anatomi_progressBar_step_3{
        border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    }
      .anatomi_progressBar_step h3 {
        font-size: 14px;
        font-weight: 600;
        color: #fff;
      }
      
      .anatomi_progressBar_step_2 h3 {
        opacity: 1;
      }
      
      .anatomi_progressBar_step_3 h3 {
        opacity: 1;
      }
      </style>
      `;
  
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", anatomi_progressBar_style);
  };
  
  const sepet_sayfasi_progress_js = () => {
    const cartEmpty = document.getElementById("cartEmpty");
    const check = document.querySelector(".anatomi_progressBar");
  
    const remove_old_bar = () => {
      const oldBar = document.querySelector(
        "#pageHeader .col.col-3.col-sm-12.pageTitle.passed"
      );
  
      const oldBar2 = document.querySelector(".box.col-12.progress");
      oldBar && oldBar.remove();
      oldBar2 && oldBar2.remove();
    };
  
    const location_sepet = () => {
      if (window.location.href == "https://www.elektrix.com/sepet") {
        const anatomi_progressBar = document.querySelector(
          ".anatomi_progressBar"
        );
  
        const new_container = document.querySelector("#mainColumn > h1");
  
        if (anatomi_progressBar) {
          anatomi_progressBar.style.marginTop = "0px";
         if(new_container.nextSibling !== anatomi_progressBar){
            new_container && new_container.insertAdjacentElement("afterend", anatomi_progressBar);
         }

  
        }
  
        const step1 = document.querySelector(".anatomi_progressBar_step_1");
        const step2 = document.querySelector(".anatomi_progressBar_step_2");
        const step3 = document.querySelector(".anatomi_progressBar_step_3");
  
        if (step1 && step1.style.backgroundColor !== "blue") {
          step1.style.backgroundColor = "#0781BF";
        }
  
        if (step2 && step2.style.backgroundColor !== "gray") {
          step2.style.backgroundColor = "#BBBBBB";
        }
  
        if (step3 && step3.style.backgroundColor !== "gray") {
          step3.style.backgroundColor = "#BBBBBB";
        }
      }
    };
  
    const location_address = () => {
      if (window.location.href == "https://www.elektrix.com/order/address") {
        const orderTabs = document.querySelector(".orderTabs");
  
        if (!check && !cartEmpty) {
          orderTabs && orderTabs.remove();
        }
  
        const step1 = document.querySelector(".anatomi_progressBar_step_1");
        const step2 = document.querySelector(".anatomi_progressBar_step_2");
        const step3 = document.querySelector(".anatomi_progressBar_step_3");
  
        if (step1 && step1.style.backgroundColor !== "gray") {
          step1.style.backgroundColor = "#BBBBBB";
        }
  
        if (step2 && step2.style.backgroundColor !== "blue") {
          step2.style.backgroundColor = "#0781BF";
        }
  
        if (step3 && step3.style.backgroundColor !== "gray") {
          step3.style.backgroundColor = "#BBBBBB";
        }
      }
  
    };
  
    const location_payment = () => {
      if (window.location.href == "https://www.elektrix.com/order/payment") {
          const orderTabs = document.querySelector(".orderTabs");
      
          if (!check && !cartEmpty) {
            orderTabs && orderTabs.remove();
          }
      
          const step1 = document.querySelector(".anatomi_progressBar_step_1");
          const step2 = document.querySelector(".anatomi_progressBar_step_2");
          const step3 = document.querySelector(".anatomi_progressBar_step_3");
      
          if (step1 && step1.style.backgroundColor !== "gray") {
            step1.style.backgroundColor = "#BBBBBB";
          }
      
          if (step2 && step2.style.backgroundColor !== "gray") {
            step2.style.backgroundColor = "#BBBBBB";
          }
      
          if (step3 && step3.style.backgroundColor !== "blue") {
            step3.style.backgroundColor = "#0781BF";
          }
      
        }
    };
  
  
    setInterval(() => {
      location_sepet();
      location_address();
      location_payment();
      remove_old_bar();
    }, 100);
  };
  
  const sepet_sayfasi_progress_init = () => {
    sepet_sayfasi_progress_html();
    sepet_sayfasi_progress_js();
  };
  sepet_sayfasi_progress_css();
  
  const sepet_sayfasi_progress_condition = () => {
    const windowLocation =
      window.location.href == "https://www.elektrix.com/sepet" ||
      window.location.href == "https://www.elektrix.com/order/address" ||
      window.location.href == "https://www.elektrix.com/order/payment";
    const window_innerWidth = window.innerWidth < 768;
    const cartEmpty = !document.getElementById("cartEmpty");
  
    return windowLocation && window_innerWidth && cartEmpty ;
  };
  
  setInterval(() => {
    if (sepet_sayfasi_progress_condition()) {
      sepet_sayfasi_progress_init();
    }

    
    const remove_old_bar_even_cart_empty =() => {
        const cartEmpty = document.getElementById("cartEmpty");
        if(cartEmpty){
            const container = document.querySelector(".anatomi_progressBar");
            container && container.remove();

            const pageHeader = document.getElementById("pageHeader");
            const progress = document.querySelector(".progress");
            progress && progress.remove();
            pageHeader && pageHeader.remove();
        }
    };
  
    remove_old_bar_even_cart_empty();
  }, 100);
  