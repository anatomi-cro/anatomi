setTimeout(() => {
    const jj_campaign_1_html = () => {
      const html = `
        <div class="anatomi_campaign_container anatomi_campaign_container_active">
          <div class="anatomi_campaign_content">
            <div class="anatomi_campaign_close">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M12.3697 4.12329L4.12317 12.3698" stroke="black" stroke-width="1.37442" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.12317 4.12329L12.3697 12.3698" stroke="black" stroke-width="1.37442" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="anatomi_campaign_title">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
                <path d="M7.99998 18.2044C9.09124 18.2044 10.031 17.5452 10.4433 16.6044H5.55664C5.96898 17.5452 6.90874 18.2044 7.99998 18.2044Z" fill="black"/>
                <path d="M13.5111 8.81284V7.64442C13.5111 5.16187 11.8609 3.05773 9.60001 2.37048V1.6C9.60001 0.717758 8.88225 0 8.00002 0C7.11778 0 6.40002 0.717758 6.40002 1.6V2.37048C4.13905 3.05773 2.48892 5.16183 2.48892 7.64442V8.81284C2.48892 10.9935 1.65771 13.0613 0.148414 14.6353C0.000503776 14.7895 -0.0410606 15.0171 0.0427792 15.2136C0.126619 15.4102 0.319685 15.5377 0.533373 15.5377H15.4667C15.6803 15.5377 15.8734 15.4102 15.9572 15.2136C16.0411 15.0171 15.9995 14.7895 15.8516 14.6353C14.3423 13.0613 13.5111 10.9935 13.5111 8.81284ZM8.53335 2.15921C8.35781 2.14229 8.17993 2.13333 8.00002 2.13333C7.82011 2.13333 7.64222 2.14229 7.46669 2.15921V1.6C7.46669 1.30592 7.70594 1.06666 8.00002 1.06666C8.2941 1.06666 8.53335 1.30592 8.53335 1.6V2.15921Z" fill="black"/>
                <path d="M14.9333 7.64431C14.9333 7.93885 15.1721 8.17764 15.4666 8.17764C15.7611 8.17764 15.9999 7.93885 15.9999 7.64431C15.9999 5.50743 15.1678 3.49844 13.6568 1.98744C13.4485 1.77919 13.1108 1.77915 12.9026 1.98744C12.6943 2.19572 12.6943 2.53339 12.9026 2.74167C14.2121 4.05122 14.9333 5.79233 14.9333 7.64431Z" fill="black"/>
                <path d="M0.533454 8.17774C0.827995 8.17774 1.06679 7.93895 1.06679 7.64441C1.06679 5.79247 1.78799 4.05135 3.0975 2.74181C3.30578 2.53353 3.30578 2.19586 3.0975 1.98757C2.88925 1.77929 2.55155 1.77929 2.34326 1.98757C0.832262 3.49857 0.00012207 5.50753 0.00012207 7.64441C0.00012207 7.93895 0.238912 8.17774 0.533454 8.17774Z" fill="black"/>
              </svg>
              <h2>Kampanya Bildirimi</h2>
            </div>
            <div class="anatomi_campaign_text">
              <p><strong>Bugüne özel</strong> 22:00 - 10:00 arasında <span>2.000 TL’ye %20 İNDİRİM</span><span>2.500 TL’ye %25 İNDİRİM</span><span>3.000 TL’ye %30 İNDİRİM</span></p>
            </div>
            <div class="anatomi_campaign_button">
              <a class="anatomi_campaign_button_link" href="https://www.jackjones.com.tr/tr-tr/kampanya?sorting=new_in">Alışverişe Başla</a>
            </div>
          </div>
        </div>
      `;
  
      const notExists = !document.querySelector(".anatomi_campaign_container");
      if (notExists) {
        const container = document.querySelector("body");
        container.insertAdjacentHTML("beforeend", html);
      }
    };
  
    const jj_campaign_1_css = () => {
      const style = `
        <style id="jjCampaign">
          .anatomi_campaign_container {
            position: fixed;
            bottom: 100px;
            right: 50%;
            transform: translateX(50%);
            width: 90%;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
            border-radius: 15px;
            display: none;
            background-color: #fff;
          }
          .anatomi_campaign_container.anatomi_campaign_container_active {
            display: block;
          }
          .anatomi_campaign_content {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 100%;
            height: 100%;
            gap: 20px;
            padding: 30px;
          }
          .anatomi_campaign_close {
            position: absolute;
            top: 4%;
            right: 3%;
          }
          .anatomi_campaign_button {
            width: 60%;
            margin: 0 auto;
            padding: 12px;
            background-color: #000;
            text-align: center;
            border-radius: 6px;
          }
          .anatomi_campaign_button a {
            text-decoration: none;
            color: #fff;
            font-size: 14px;
            font-weight: 600;
          }
          .anatomi_campaign_text p {
            font-size: 14px;
            font-weight: 400;
            text-align: center;
            margin: 0 !important;
          }
          .anatomi_campaign_text span {
            display: block;
            font-weight: bold;
            padding : 5px;
          }
          .anatomi_campaign_title {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }
          .anatomi_campaign_title h2 {
            font-size: 16px;
            font-weight: 600;
            text-transform: capitalize !important;
            line-height: normal !important;
            margin: 0 !important;
          }
        </style>
      `;
      const exists = document.querySelector("#jjCampaign");
      if (!exists) {
        const head = document.querySelector("head");
        head.insertAdjacentHTML("beforeend", style);
      }
    };
  
    const jj_campaign_1_js = () => {
      const handleClose = () => {
        const close = document.querySelector(".anatomi_campaign_close");
        if (close) {
          close.addEventListener("click", () => {
            const container = document.querySelector(".anatomi_campaign_container");
            if (container) {
              container.classList.remove("anatomi_campaign_container_active");
            }
          });
        }
      };
      handleClose();
    };
  
    const jj_campaign_1_init = () => {
      jj_campaign_1_html();
      jj_campaign_1_css();
      jj_campaign_1_js();
    };
  
    const jj_campaign_1_conditions = () => {
      const isMobile = matchMedia("(max-width: 768px)").matches;
      const notExists = !document.querySelector(".anatomi_campaign_container");
      const hasProductList = document.querySelector(".product-list");
  
      return isMobile && notExists && hasProductList;
    };
  
    if (jj_campaign_1_conditions()) {
      jj_campaign_1_init();
    }
  }, 10000);
  
  
  
  
  