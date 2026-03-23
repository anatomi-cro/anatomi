/*const uye_girisi_redesign_html = () => {};

const uye_girisi_redesign_css = () => {
    const style = `
      <style>    
      .anatomi_password_div , .anatomi_beni_hatirla , .anatomi_giris_yap_btn, .anatomi_uye_olmadan_devam_btn{
        display: none !important;
        }

      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};


const uye_girisi_redesign_js = () => {

    const loginTab = document.querySelector("#ug-login-tab");

    const emailDiv = document.querySelector("#login-with-email-406 > div");
    const passwordDiv = document.querySelector("#login-form-406 > div.w-100.popover-wrapper")
    const beniHatirla = document.querySelector("#login-form-406 > div.d-flex.flex-wrap.gap-1.justify-content-between.mb-1")
    const girisYapBtn = document.querySelector("#ug-submit-btn")
    const uyeOlmadanDevamBtn = document.querySelector("#ug-without-membership-btn")

    function checkActiveState() {
        const listItems = loginTab.querySelectorAll("li");

        if (listItems[1].classList.contains("active")) {

            emailDiv.style.display = "none";
            passwordDiv.classList.add("anatomi_password_div");
             beniHatirla.classList.add("anatomi_beni_hatirla");
             girisYapBtn.classList.add("anatomi_giris_yap_btn");
             uyeOlmadanDevamBtn.classList.add("anatomi_uye_olmadan_devam_btn");
      
        } 
        else if (listItems[0].classList.contains("active")) {
            emailDiv.style.display = "block";
            passwordDiv.classList.remove("anatomi_password_div");
            beniHatirla.classList.remove("anatomi_beni_hatirla");
            girisYapBtn.classList.remove("anatomi_giris_yap_btn");
            uyeOlmadanDevamBtn.classList.remove("anatomi_uye_olmadan_devam_btn");
        }
    }

    const config = {
        attributes: true,  
        attributeFilter: ["class"], 
        subtree: true, 
    };

   
    const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
    
            if (mutation.target.tagName === "LI" && mutation.attributeName === "class") {
                checkActiveState();
            }
        });
    });


    observer.observe(loginTab, config);
    
   setInterval(() =>  checkActiveState(), 1000);
}

const uye_girisi_redesign_init = () => {
    uye_girisi_redesign_html();
    uye_girisi_redesign_css();
    uye_girisi_redesign_js();
};

const uye_girisi_redesign_condition = () => {
    return true;
};

if (uye_girisi_redesign_condition()) {
    uye_girisi_redesign_init();
}
*/

//setInterval ile yapılmış hali
const uye_girisi_redesign_html = () => {};

const uye_girisi_redesign_css = () => {
    const style = `
      <style>    
      .anatomi_password_div , .anatomi_beni_hatirla , .anatomi_giris_yap_btn, .anatomi_uye_olmadan_devam_btn{
        display: none !important;
      }
      </style>
    `;
    const head = document.querySelector("head");
    head.insertAdjacentHTML("beforeend", style);
};

const uye_girisi_redesign_js = () => {

    const loginTab = document.querySelector("#ug-login-tab");

    const emailDiv = document.querySelector("#login-with-email-406 > div");
    const passwordDiv = document.querySelector("#login-form-406 > div.w-100.popover-wrapper")
    console.log(passwordDiv);
    const beniHatirla = document.querySelector("#login-form-406 > div.d-flex.flex-wrap.gap-1.justify-content-between.mb-1")
    const girisYapBtn = document.querySelector("#ug-submit-btn")
    const uyeOlmadanDevamBtn = document.querySelector("#ug-without-membership-btn")

    function checkActiveState() {
        const listItems = loginTab.querySelectorAll("li");

        if (listItems[1].classList.contains("active")) {
            emailDiv.style.display = "none";
            passwordDiv.classList.add("anatomi_password_div");
            beniHatirla.classList.add("anatomi_beni_hatirla");
            girisYapBtn.classList.add("anatomi_giris_yap_btn");
            uyeOlmadanDevamBtn.classList.add("anatomi_uye_olmadan_devam_btn");
        } 
        else if (listItems[0].classList.contains("active")) {
            emailDiv.style.display = "block";
            passwordDiv.classList.remove("anatomi_password_div");
            beniHatirla.classList.remove("anatomi_beni_hatirla");
            girisYapBtn.classList.remove("anatomi_giris_yap_btn");
            uyeOlmadanDevamBtn.classList.remove("anatomi_uye_olmadan_devam_btn");
        }
    }

setInterval(() => {
        if (loginTab) {
            checkActiveState();
        }
    }, 1000); 

};

const uye_girisi_redesign_init = () => {
    uye_girisi_redesign_html();
    uye_girisi_redesign_css();
    uye_girisi_redesign_js();
};

const uye_girisi_redesign_condition = () => {
    return true;
};

if (uye_girisi_redesign_condition()) {
    uye_girisi_redesign_init();
}
