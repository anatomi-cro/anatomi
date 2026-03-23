setTimeout(() => {
  const sizi_arayalim_popup_html = () => {
    const html = `
    <div id="sizi_arayalim_popup" class="sizi_arayalim_popup_overlay" style="display:none;">
      <div class="sizi_arayalim_popup_content">
        <button class="sizi_arayalim_popup_close">&times;</button>
        <h2>Detaylı bilgiye mi ihtiyacınız var?</h2>
        <p>İhtiyaçlarınıza en uygun çözümleri keşfetmek için iletişim bilgilerinizi bırakabilirsiniz.</p>
        <div class="sizi_arayalim_popup_form">
          <input type="text" placeholder="(555) 555 55 55" />
          <button class="sizi_arayalim_popup_btn">Sizi Arayalım</button>
        </div>
      </div>
    </div>
  `;
    document.body.insertAdjacentHTML("beforeend", html);
  };

  const sizi_arayalim_popup_css = () => {
    const style = `
      <style>    
       .sizi_arayalim_popup_overlay {
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
      }
      .sizi_arayalim_popup_content {
        position: relative;
        background: #F7F9FC;
        padding: 30px;
        border-radius: 12px;
        width: 400px;
        max-width: 90%;
        text-align: center;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      }
      .sizi_arayalim_popup_content h2 {
        font-size: 24px !important;
    }
      .sizi_arayalim_popup_content p {
          text-align: left;
      }
      .sizi_arayalim_popup_close {
        position: absolute;
        top: 10px;
        right: 10px;
        background: transparent;
        border: none;
        font-size: 22px;
        cursor: pointer;
      }
      .sizi_arayalim_popup_form {
        display: flex;
        margin-top: 20px;

      }
      .sizi_arayalim_popup_form input {
        flex: 1;
        padding: 15px;
        border-radius: 6px;
        border: 1px solid #ccc;
      }
      .sizi_arayalim_popup_form input:focus-visible{
      outline: none !important;
      }
      .sizi_arayalim_popup_btn {
        padding: 10px 16px;
        border: none;
        background: linear-gradient(180deg, #a961a5 0, #974192 100%);
        border: 1px solid;
        border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%);
        box-shadow: 0 0 0 1px #974192;
        color: #fff;
        border-radius: 6px;
        cursor: pointer;    
        margin-left: -5px;
            border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
      }

      @media (max-width: 768px) {
        .sizi_arayalim_popup_content {
          width: 350px;
        }
      }

      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
  };

  const sizi_arayalim_popup_js = () => {
    const popup = document.querySelector("#sizi_arayalim_popup");
    const closeBtn = document.querySelector(".sizi_arayalim_popup_close");

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
        localStorage.setItem("popupClosed", "true");
      });
    }

    const submitBtn = document.querySelector(".sizi_arayalim_popup_btn");
    const popupInput = document.querySelector(
      ".sizi_arayalim_popup_form input"
    );
    const footerInput = document.querySelector(
      "#footer-contact-phone > div > input"
    );
    const orjBtn = document.querySelector(
      "#footer-contact-phone > div > button"
    );

    popupInput.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "");
      if (value.length > 10) value = value.slice(0, 10);

      let formatted = "";
      if (value.length > 0) formatted += "(" + value.slice(0, 3);
      if (value.length >= 4) formatted += ") " + value.slice(3, 6);
      if (value.length >= 7) formatted += " " + value.slice(6, 8);
      if (value.length >= 9) formatted += " " + value.slice(8, 10);

      e.target.value = formatted;
    });

    if (submitBtn && popupInput && footerInput && orjBtn) {
      submitBtn.addEventListener("click", () => {
        footerInput.value = popupInput.value;
        orjBtn.click();

        popup.style.display = "none";
        localStorage.setItem("popupClosed", "true");
      });
    }
  };
  const sizi_arayalim_popup_init = () => {
    sizi_arayalim_popup_html();
    sizi_arayalim_popup_css();
    sizi_arayalim_popup_js();

    const layout = document.querySelector("body > efilli-layout-dynamic");

    const showPopupWithDelay = () => {
      setTimeout(() => {
        if (!localStorage.getItem("popupClosed")) {
          document.querySelector("#sizi_arayalim_popup").style.display = "flex";
        }
      }, 15000);
    };

    if (!layout) {
      showPopupWithDelay();
      return;
    }

    const tryShadow = () => {
      const shadow = layout.shadowRoot;
      if (!shadow) {
        setTimeout(tryShadow, 100);
        return;
      }

      const targetElement = shadow.querySelector(
        "#\\33 e3285d2-83d7-4c4c-ba85-0f82f0bae5a6"
      );
      if (!targetElement) {
        showPopupWithDelay();
        return;
      }

      const initialStyle = window.getComputedStyle(targetElement);
      if (initialStyle.display === "none") {
        showPopupWithDelay();
      } else {
        const observer = new MutationObserver(() => {
          const style = window.getComputedStyle(targetElement);
          if (style.display === "none") {
            observer.disconnect();
            showPopupWithDelay();
          }
        });
        observer.observe(targetElement, {
          attributes: true,
          childList: true,
          subtree: true,
        });
      }
    };

    tryShadow();
  };

  const sizi_arayalim_popup_condition = () => {
    const device = window.innerWidth > 768;
    return device;
  };

  if (sizi_arayalim_popup_condition()) {
    sizi_arayalim_popup_init();
  }
}, 500);
